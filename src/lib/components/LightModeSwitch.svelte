<script lang="ts">
	import { getSettingsEnabled } from '$lib/state.svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	let checked = $state(false);
	let settingsEnabled = $state(false);
	$effect(() => {
		const mode = localStorage.getItem('mode') || 'light';
		checked = mode === 'dark';
		settingsEnabled = getSettingsEnabled();
	});

	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		checked = event.checked;
	};
</script>

<svelte:head>
	<script>
		const mode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', mode);
	</script>
</svelte:head>

<Switch disabled={!settingsEnabled} {checked} {onCheckedChange}>
	<Switch.Control>
		<Switch.Thumb />
	</Switch.Control>
	<Switch.HiddenInput />
</Switch>
