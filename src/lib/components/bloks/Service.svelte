<script context="module" lang="ts">
	import type { ServiceBlok } from 'src/lib/storyblok/component-types';
	import { editable } from '$utils/directives';
</script>

<script lang="ts">
	export let blok: ServiceBlok;
</script>

<div use:editable={blok}>Service</div>
