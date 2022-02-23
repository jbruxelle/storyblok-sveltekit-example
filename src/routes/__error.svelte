<script context="module" lang="ts">
	import type { ErrorLoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = async ({ error, status }: ErrorLoadInput): Promise<LoadOutput> => {
		console.error(error);
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	};
</script>

<script lang="ts">
	export let title: string;
</script>

<h1>{title}</h1>
