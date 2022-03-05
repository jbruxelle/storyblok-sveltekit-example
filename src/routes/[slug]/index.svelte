<script lang="ts" context="module">
	import { KQL_Page } from '$graphql/_gen/graphqlStores';
	import StoryblokComponent from '$lib/storyblok/StoryblokComponent.svelte';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	import { storyblok } from '$lib/utils/actions';

	export const load = async ({ url, fetch }: LoadInput): Promise<LoadOutput> => {
		await KQL_Page.query({ fetch, variables: { slug: url.pathname } });
		return {};
	};
</script>

<main id="main" use:storyblok={KQL_Page}>
	<StoryblokComponent blok={$KQL_Page.data?.PageItem?.content} />
</main>
