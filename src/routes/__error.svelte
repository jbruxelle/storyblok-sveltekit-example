<script context="module">
	export function load({ error, status }) {
		console.error(error);
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<h1>{title}</h1>
