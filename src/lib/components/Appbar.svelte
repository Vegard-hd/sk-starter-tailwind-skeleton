<script lang="ts">
	import { ArrowLeftRightIcon, BikeIcon, BookIcon, HouseIcon, TreePalmIcon } from '@lucide/svelte';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
	import { fade } from 'svelte/transition';
	const links = [
		{ label: 'Home', href: '/#', icon: HouseIcon },
		{ label: 'Entertainment', href: '/#', icon: BookIcon },
		{ label: 'Recreation', href: '/#', icon: BikeIcon },
		{ label: 'Relaxation', href: '/#', icon: TreePalmIcon }
	];

	let innerWidth = $state(0);
	const mobileBreakpoint = 768;
	let isMobile = $derived(innerWidth < mobileBreakpoint);

	let isRail = $state(true);
	function toggleSidebar() {
		isRail = !isRail;
	}
</script>

<svelte:window bind:innerWidth />

{#snippet navItems()}
	{#each links as link (link.label)}
		{@const Icon = link.icon}
		<Navigation.TriggerAnchor href={link.href}>
			<Icon class="size-5" />
			<Navigation.TriggerText>{link.label}</Navigation.TriggerText>
		</Navigation.TriggerAnchor>
	{/each}
{/snippet}

<div class="bg-surface-50-900 flex h-dvh w-full flex-col overflow-hidden md:flex-row">
	<!-- Desktop Sidebar -->
	{#if !isMobile}
		<aside
			in:fade
			class="border-r border-surface-200-800 transition-[width] duration-200 ease-in-out"
		>
			<Navigation layout={isRail ? 'rail' : 'sidebar'} class="h-full">
				<Navigation.Content>
					<Navigation.Header>
						<Navigation.Trigger onclick={toggleSidebar} class="w-full">
							<ArrowLeftRightIcon class="size-5" />
							{#if !isRail}<span>Collapse</span>{/if}
						</Navigation.Trigger>
					</Navigation.Header>
					<Navigation.Menu class="gap-2">
						{@render navItems()}
					</Navigation.Menu>
				</Navigation.Content>
			</Navigation>
		</aside>
	{/if}

	<!-- Main Content -->
	<main class="flex-1 overflow-y-auto p-4">
		<div class="mx-auto h-full max-w-7xl">
			{@render children()}
		</div>
	</main>

	<!-- Mobile Bottom Bar -->
	{#if isMobile}
		<div in:fade class="bg-surface-50-900 border-t border-surface-200-800">
			<Navigation layout="bar" class="w-full">
				<Navigation.Menu class="grid grid-cols-4 gap-1 p-2">
					{@render navItems()}
				</Navigation.Menu>
			</Navigation>
		</div>
	{/if}
</div>
