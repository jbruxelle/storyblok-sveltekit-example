<script lang="ts" context="module">
	import { storyblok } from '$lib/utils/actions';
	import { KQL_Page } from '$graphql/_gen/graphqlStores';
	import StoryblokComponent from '$lib/storyblok/StoryblokComponent.svelte';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = async ({ params, fetch }: LoadInput): Promise<LoadOutput> => {
		await KQL_Page.query({ fetch, variables: { slug: params.slug } });
		return {};
	};
</script>

<main id="main" use:storyblok={KQL_Page}>
	<StoryblokComponent blok={$KQL_Page.data?.PageItem?.content} />
</main>
