<script context="module" lang="ts">
	import type { PageBlok } from 'src/lib/storyblok/component-types';
	import { editable } from '$utils/directives';
	import { components } from '$components/bloks';
</script>

<script lang="ts">
	export let blok: PageBlok;
</script>

<div use:editable={blok}>
	{#if blok.body}
		{#each blok.body as child}
			<svelte:component this={components[child.component]} blok={child} />
		{/each}
	{/if}
</div>
