<script lang="ts">
	import { components } from '$components/bloks';
	import type { TBlok } from '$lib/utils/types';
	export let blok: TBlok;
</script>

{#if blok}
	{#if $$slots.default}
		<svelte:component this={components[blok.component]} {blok}>
			<slot />
		</svelte:component>
	{:else}
		<svelte:component this={components[blok.component]} {blok} />
	{/if}
{:else}
	Loading...
{/if}
