import fs from 'fs';
import { resolve } from 'path';
import pkg from 'template-file';
import ts from 'typescript';

const { renderFile } = pkg;

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
	fs.writeFileSync(`src/lib/components/bloks/index.ts`, code);
};

const generate = async (definitionsFilePath: string) => {
	const bloksInterfacesNames = extractBloksInterfacesNames(definitionsFilePath);

	generateBloks(definitionsFilePath, bloksInterfacesNames);
	await generateIndex(bloksInterfacesNames);
};

generate('src/lib/storyblok/component-types.d.ts');
// interfaces.forEach((definition: BlokDefinition) => {
// 	const path = `src/lib/storyblok/components/${definition.name}.svelte`;
// 	const exist = fs.existsSync(path);
// 	const regex = /(\<script lang="ts"\>)([^\<]*)(\<\/script>)?/g;

// 	const computed = format(computeComponent(definition), 'svelte');

// 	const content = computed.match(regex)?.[0];

// 	let next: string = `
// 		<script lang="ts" context="module">
// 			import { components } from '$sb-components';
// 			import { editable } from '../utils/directives';
// 		</script>
// 		<script lang="ts"></script>
// 		<div use:editable={blok}>${definition.name}</div>
// 	`;

// 	if (exist) {
// 		const current: string = format(fs.readFileSync(path).toString(), 'svelte');
// 		next = current;
// 		if (current.match(regex)?.[0] !== content) {
// 			fs.writeFileSync(`src/lib/storyblok/components/PREVIOUS.${definition.name}.svelte`, current);
// 		}
// 	}
// 	next = next.replace(regex, computed);
// 	next = format(next, 'svelte');
// 	fs.writeFileSync(path, next, { encoding: 'utf8', flag: 'w' });
// });

// fs.writeFileSync(
// 	'src/lib/storyblok/components/index.ts',
// 	format(computeIndex(interfaces), 'typescript')
// );
