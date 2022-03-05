import type { TLink } from './types';

export const resolvers = {
	link: (link: TLink): string => {
		if (!link) return '';
		const base = '/';
		const result = link.linktype === 'email' ? `mailto:${link.email}` : link.url || link.cached_url;
		return base + result;
	}
};
