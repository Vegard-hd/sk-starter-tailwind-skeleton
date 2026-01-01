<script lang="ts">
	import LightModeSwitch from '$lib/components/LightModeSwitch.svelte';
	import SettingsSwitch from '$lib/components/SettingsSwitch.svelte';
	import { getSettingsEnabled } from '$lib/state.svelte';
</script>

<svelte:head>
	<title>Settings | Sveltekit template</title>
</svelte:head>

<section class="grid min-h-dvh content-center justify-center self-center overflow-hidden">
	<form
		class="space-y-8 rounded border border-surface-500/30 bg-surface-200-800/50 p-24 text-surface-900-100"
	>
		<fieldset class="space-y-8">
			<legend class="sr-only">User Preferences</legend>
			<div class="flex items-center justify-between">
				<label for="enable-settings-toggle" class="me-10 text-lg">Enable settings</label>
				<SettingsSwitch />
			</div>
			<p class="max-w-80 text-sm text-pretty text-tertiary-700 dark:text-tertiary-300">
				{#if !getSettingsEnabled()}
					By <span class="font-bold text-primary-700-300">enabling</span> settings, you allow your preferences
					(like dark mode) to be saved to your browser's local storage.
				{:else}
					By <span class="font-bold text-primary-700-300">disabling</span> settings, your preferences
					will be cleared from your browser's local storage and no longer saved.
				{/if}
			</p>
			<hr class="hr" />
			<div class="flex items-center justify-between">
				<label for="dark-mode-toggle" class="me-10 text-lg">Toggle dark mode on/off</label>
				<LightModeSwitch />
			</div>
		</fieldset>
	</form>
</section>
