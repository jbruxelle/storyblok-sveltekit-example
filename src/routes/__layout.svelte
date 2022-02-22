<script context="module" lang="ts">
</script>

<script lang="ts">
</script>

<slot />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html {
		scroll-behavior: smooth;
	}

	*:focus {
		@apply outline-none;
		@apply ring-2 ring-offset-4 ring-primary-focus;
	}
</style>
