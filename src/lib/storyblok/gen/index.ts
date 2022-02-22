import fs from 'fs';
import { resolve } from 'path';
import ts from 'typescript';

// The requested module is a CommonJS module,
// which may not support all module.exports as named exports
// CommonJS modules can always be imported via the default export
import pkgTemplateFile from 'template-file';
import pkgPrettier from 'prettier';

const { format } = pkgPrettier;
const { renderFile } = pkgTemplateFile;

/**
 *
 * @description These functions are designed to read and extract bloks definitions provided by storyblok-generate-ts.
 * Any change in this package could break this extrator.
 */

const createTypescriptProgram = (filepath: string) => {
	const config: ts.CompilerOptions = {
		noResolve: true,
		target: ts.ScriptTarget.ESNext
	};
	const sourcePath = resolve(process.cwd(), filepath);
	const sourceText = fs.readFileSync(sourcePath, 'utf-8').toString();
	const program = ts.createProgram([filepath], config, ts.createCompilerHost({ sourceText }));
	return program;
};

/**
 * Extracts interfaces declarations from a file
 * @param filepath Path to the file which contains interfaces declarations
 * @param program Typescript program for the file to read
 * @returns array of interface declarations
 *  */
const extractInterfacesDeclarations = (
	filepath: string,
	program: ts.Program
): ts.InterfaceDeclaration[] => {
	const ast = program.getSourceFile(filepath);
	const exported = ast.getChildAt(0).getChildren();
	const interfaces: ts.InterfaceDeclaration[] = exported.filter(
		(child: ts.Node) => child.kind === ts.SyntaxKind.InterfaceDeclaration
	) as ts.InterfaceDeclaration[];
	return interfaces;
};

const interpretInterfaceDeclaration = (declaration: ts.InterfaceDeclaration) => {
	return declaration.name.escapedText.toString();
};

const extractBloksInterfacesNames = (filepath: string) => {
	const program: ts.Program = createTypescriptProgram(filepath);
	const bloksInterfaces: ts.InterfaceDeclaration[] = extractInterfacesDeclarations(
		filepath,
		program
	);
	const names: string[] = bloksInterfaces.map((blokInterface: ts.InterfaceDeclaration) =>
		interpretInterfaceDeclaration(blokInterface)
	);
	return names;
};

const generateBloks = (definitionsFilePath: string, bloksInterfacesNames: string[]) => {
	bloksInterfacesNames.forEach(async (blokInterfaceName) => {
		const data = {
			name: blokInterfaceName,
			source: definitionsFilePath.slice(0, -5) // remove the .d.ts entension for import in .svelte file
		};
		const filename = `${blokInterfaceName.replace('Blok', '')}.svelte`;
		if (fs.existsSync(`src/lib/components/bloks/${filename}`)) return;
		const code = await renderFile('src/lib/storyblok/templates/Blok.template', data);
		fs.writeFileSync(`src/lib/components/bloks/${filename}`, code);
	});
};

const generateIndex = async (bloksInterfacesNames: string[]) => {
	const names = bloksInterfacesNames.map((interfaceName) => interfaceName.replace('Blok', ''));
	const code = await renderFile('src/lib/storyblok/templates/index.template', { names });
	const formattedCode = format(code, { parser: 'typescript' });
	fs.writeFileSync(`src/lib/components/bloks/index.ts`, formattedCode);
};

const generate = async (definitionsFilePath: string) => {
	const bloksInterfacesNames = extractBloksInterfacesNames(definitionsFilePath);

	generateBloks(definitionsFilePath, bloksInterfacesNames);
	await generateIndex(bloksInterfacesNames);
};

generate('src/lib/storyblok/component-types.d.ts');
