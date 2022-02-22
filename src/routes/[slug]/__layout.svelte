<script lang="ts" context="module">
	import { LayoutQuery } from '$graphql/_kitql/graphqlStores';
	import { components } from '$components/bloks';
	export const load = async ({ fetch }) => {
		await LayoutQuery({ fetch });
		return {};
	};
</script>

<script lang="ts">
	import { LayoutQueryStore } from '$graphql/_kitql/graphqlStores';
	$: content = $LayoutQueryStore.data.LayoutItem.content;
</script>

{#if $LayoutQueryStore.status === 'DONE'}
	<svelte:component this={components[content.component]} blok={content}>
		<slot />
	</svelte:component>
{/if}
