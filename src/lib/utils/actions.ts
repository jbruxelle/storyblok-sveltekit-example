import { browser, dev } from '$app/env';
import { version } from '$lib/stores/storyblok/store';
import type { Page } from '$lib/storyblok/component-types';

export const storyblok = (node: HTMLElement, page: Page) => {
	if (browser) {
		const bridge = (callback: () => void) => {
			if (document.getElementById('storyblokBridge')) callback();
			else {
				const script = document.createElement('script');
				script.src = `//app.storyblok.com/f/storyblok-v2-latest.js`;
				script.id = 'storyblokBridge';
				document.body.appendChild(script);
				script.onload = () => callback();
			}
		};

		const onPublish = (event) => {
			if (dev) console.info('[EVENT] Storyblok publish');
			!event.slugChanged && location.reload();
		};

		const onChange = (event) => {
			if (dev) console.info('[EVENT] Storyblok change');
			!event.slugChanged && location.reload();
		};

		const onInput = (event) => {
			if (dev) console.info('[EVENT] Storyblok input');
			// page = { content: event?.story?.content };
		};

		bridge(() => {
			// @ts-ignore
			const { StoryblokBridge } = window;
			const storyblok = new StoryblokBridge();
			storyblok.pingEditor(() => {
				if (storyblok.isInEditor()) {
					version.set('draft');
					storyblok.on('published', onPublish);
					storyblok.on('change', onChange);
					storyblok.on('input', onInput);
				} else {
					version.set(dev ? 'draft' : 'published');
				}
			});

			// storyblok.on('enterEditmode', (event) => update({ page: $page }));
		});
	}
};
