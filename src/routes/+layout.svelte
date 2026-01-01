<script lang="ts">
	import '@fontsource/sora/400.css';
	import '@fontsource/sora/500.css';
	import '@fontsource/sora/600.css';
	import '@fontsource/sora/700.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Appbar from '$lib/components/Appbar.svelte';
	import { getSettingsEnabled, setSettingsEnabled } from '$lib/state.svelte';

	let { children } = $props();
	$effect(() => {
		const store = localStorage.getItem('settingsEnabled');
		if (store === 'true') {
			setSettingsEnabled(true);
		} else {
			setSettingsEnabled(false);
		}
	});
	$effect(() => {
		if (getSettingsEnabled()) {
			localStorage.setItem('settingsEnabled', 'true');
		} else {
			localStorage.removeItem('settingsEnabled');
			localStorage.removeItem('THEME_PREFERENCE_KEY');
			localStorage.removeItem('theme');
			localStorage.removeItem('mode');
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Appbar>
	{@render children()}
</Appbar>
