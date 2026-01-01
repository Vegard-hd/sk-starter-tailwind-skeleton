<script lang="ts">
	import { getSettingsEnabled, setSettingsEnabled } from '$lib/state.svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	// let checked = $state(false);

	const onCheckedChange = (event: { checked: boolean }) => {
		const settingsEnabled = event.checked ? 'true' : 'false';
		setSettingsEnabled(event.checked);
		localStorage.setItem('settingsEnabled', settingsEnabled);
		checked = event.checked;
	};
	$effect(() => {
		// checked = getSettingsEnabled();
	});
	let checked = $derived(getSettingsEnabled());
</script>

<div class="flex flex-col items-center gap-4 hover:cursor-pointer">
	<Switch {checked} {onCheckedChange}>
		<Switch.Control>
			<Switch.Thumb />
		</Switch.Control>
		<Switch.HiddenInput />
	</Switch>
</div>
