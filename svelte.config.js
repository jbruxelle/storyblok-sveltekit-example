import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
			plugins: []
		}
	}
};

export default config;
