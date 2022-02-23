<script lang="ts" context="module">
	import { components } from '$components/bloks';
	import { PageQuery, PageQueryStore } from '$graphql/_gen/graphqlStores';
	import type { PageDetailFragment } from '$lib/graphql/_gen/graphqlTypes';
	import { storyblok } from '$lib/utils/actions';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = async ({ params, fetch }: LoadInput): Promise<LoadOutput> => {
		await PageQuery({ fetch, variables: { slug: params.slug } });
		return {};
	};
</script>

<script lang="ts">
	let page: PageDetailFragment;
	$: page = $PageQueryStore.data?.PageItem;
	$: content = page?.content;
</script>

<svelte:head>
	<title>test</title>
</svelte:head>

<main id="main" use:storyblok={page}>
	{#if content}
		<svelte:component this={components[content.component]} blok={content} />
	{/if}
</main>
