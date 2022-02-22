<script context="module" lang="ts">
	import type { ButtonBlok } from 'src/lib/storyblok/component-types';
	import { resolvers } from '$utils/resolvers';
</script>

<script lang="ts">
	export let blok: ButtonBlok;
</script>

{#if blok.link}
	<a href={resolvers.link(blok.link)}>
		{blok.text}
	</a>
{:else}
	<button>
		{blok.text}
	</button>
{/if}
