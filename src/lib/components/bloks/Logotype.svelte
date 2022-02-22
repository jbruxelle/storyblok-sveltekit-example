<script context="module" lang="ts">
	import type { LogotypeBlok } from 'src/lib/storyblok/component-types';
	import { resolvers } from '$utils/resolvers';
</script>

<script lang="ts">
	export let blok: LogotypeBlok;
</script>

<a href={resolvers.link(blok?.link)} class="min-w-[10rem] max-w-[30vmin]">
	<img src={blok?.image?.filename} alt={blok?.image?.alt || 'logotype'} />
</a>
