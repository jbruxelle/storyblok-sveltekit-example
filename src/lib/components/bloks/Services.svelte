<script context="module" lang="ts">
	import type { ServicesBlok } from 'src/lib/storyblok/component-types';
	import { editable } from '$utils/directives';
</script>

<script lang="ts">
	export let blok: ServicesBlok;
</script>

<div use:editable={blok}>Services</div>
