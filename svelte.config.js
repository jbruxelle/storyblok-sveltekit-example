import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import watchAndRun from '@kitql/vite-plugin-watch-and-run';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$api: resolve(__dirname, './src/routes/api'),
					$stores: resolve(__dirname, './src/lib/stores'),
					$utils: resolve(__dirname, './src/lib/utils'),
					$components: resolve(__dirname, './src/lib/components'),
					$graphql: resolve(__dirname, './src/lib/graphql')
				}
			},
			define: {
				'process.env': process.env
			},
			build: {
				target: 'esnext'
			},
			plugins: [
				watchAndRun([
					{
						watch: '**/*.gql',
						run: 'yarn gen:storyblok',
						watchKind: [ 'ADD' ]
					},
					// {
					// 	watch: '**/*.(gql|graphql)',
					// 	run: 'yarn gen'
					// }
				])
			]
		}
	}
};

export default config;
