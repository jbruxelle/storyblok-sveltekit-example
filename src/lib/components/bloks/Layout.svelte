<script context="module" lang="ts">
	import type { LayoutBlok } from 'src/lib/storyblok/component-types';
	import { components } from '$components/bloks';
</script>

<script lang="ts">
	export let blok: LayoutBlok;
</script>

<div class="flex flex-col">
	{#each blok.header as header}
		<svelte:component this={components[header.component]} blok={header} />
	{/each}

	<slot />

	{#each blok.footer as footer}
		<svelte:component this={components[footer.component]} blok={footer} />
	{/each}
</div>
