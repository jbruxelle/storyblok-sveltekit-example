import type { LinkBlok } from '$lib/storyblok/component-types';

export const resolvers = {
	link: (link: LinkBlok): string => {
		if (!link) return '';
		const base = '/';
		const result = link.linktype === 'email' ? `mailto:${link.email}` : link.url || link.cached_url;
		return base + result;
	}
};
