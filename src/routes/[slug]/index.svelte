<script lang="ts" context="module">
	export const load = async ({ page, stuff }) => {
		const { slug } = page.params;
		return {};
	};
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>test</title>
</svelte:head>

<!-- <main id="main" use:storyblok={page}>
	{#if page?.content?.component}
		<svelte:component this={components[page.content.component]} blok={page.content} />
	{/if}
</main> -->
