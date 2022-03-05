import { dev } from '$app/env';
import { KitQLClient } from '@kitql/client';

export const kitQLClient = new KitQLClient({
	url: import.meta.env.VITE_STORYBLOK_GRAPHQL_ENDPOINT as string,
	headersContentType: 'application/json',
	logType: dev ? ['client'] : [],
	headers: {
		token: process.env.STORYBLOK_API_TOKEN,
		version: process.env.STORYBLOK_API_VERSION
	}
});
