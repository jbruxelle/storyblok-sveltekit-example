<script lang="ts" context="module">
	import { components } from '$components/bloks';
	import { LayoutQuery, LayoutQueryStore } from '$graphql/_gen/graphqlStores';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	export const load = async ({ fetch }: LoadInput): Promise<LoadOutput> => {
		await LayoutQuery({ fetch });
		return {};
	};
</script>

<script lang="ts">
	$: content = $LayoutQueryStore.data?.LayoutItem?.content;
</script>

{#if content}
	<svelte:component this={components[content.component]} blok={content}>
		<slot />
	</svelte:component>
{:else}
	Loading...
{/if}
