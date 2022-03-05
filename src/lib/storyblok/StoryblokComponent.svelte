<script lang="ts">
	import { components } from '$components/bloks';
	import type { TBlok } from '$lib/utils/types';
	export let blok: TBlok;
</script>

{#if blok}
	<svelte:component this={components[blok.component]} {blok}>
		{#if $$slots.default}
			<slot />
		{/if}
	</svelte:component>
{:else}
	Loading...
{/if}
