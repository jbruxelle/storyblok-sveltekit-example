<script context="module" lang="ts">
	import type { LinkBlok } from 'src/lib/storyblok/component-types';
	import { editable } from '$utils/directives';
	import { resolvers } from '$utils/resolvers';
</script>

<script lang="ts">
	export let blok: LinkBlok;
</script>

<a href={resolvers.link(blok?.link)} class="px-6" use:editable={blok}>
	{blok?.text}
</a>
