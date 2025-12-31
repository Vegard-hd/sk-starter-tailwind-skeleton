<script lang="ts">
	import '@fontsource/sora/400.css';
	import '@fontsource/sora/500.css';
	import '@fontsource/sora/600.css';
	import '@fontsource/sora/700.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Appbar from '$lib/components/Appbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Appbar>
	{@render children()}
</Appbar>
