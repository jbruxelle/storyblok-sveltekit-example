<script lang="ts" context="module">
	import type { LoadOutput } from '@sveltejs/kit';

	export const load = async (): Promise<LoadOutput> => {
		return {
			status: 308,
			redirect: '/home'
		};
	};
</script>
