import { KitQLClient } from '@kitql/client';

const PUBLIC_HOST: string = import.meta.env.VITE_STORYBLOK_GRAPHQL_ENDPOINT as string;

export const kitQLClient = new KitQLClient({
	url: PUBLIC_HOST,
	headersContentType: 'application/json',
	logType: ['client', 'operationAndvariables'],
	headers: {
		token: process.env.STORYBLOK_API_TOKEN,
		version: 'draft'
	}
});
