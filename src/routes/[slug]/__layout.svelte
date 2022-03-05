<script lang="ts" context="module">
	import { KQL_Layout } from '$graphql/_gen/graphqlStores';
	import StoryblokComponent from '$lib/storyblok/StoryblokComponent.svelte';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = async ({ fetch }: LoadInput): Promise<LoadOutput> => {
		await KQL_Layout.query({ fetch });
		return {};
	};
</script>

<StoryblokComponent blok={$KQL_Layout.data?.LayoutItem?.content}>
	<slot />
</StoryblokComponent>
