<script lang="ts">
	import {
		ArrowLeftRightIcon,
		BikeIcon,
		BookIcon,
		HouseIcon,
		TreePalmIcon,
		SettingsIcon
	} from '@lucide/svelte';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	import type { Snippet } from 'svelte';
	
	let { children }: { children: Snippet } = $props();

	import { fade } from 'svelte/transition';

	import { onMount } from 'svelte';

	const links = [
		{ label: 'Home', href: '/', icon: HouseIcon },
		{ label: 'Entertainment', href: '/entertainment', icon: BookIcon },
		{ label: 'Recreation', href: '/recreation', icon: BikeIcon },
		{ label: 'Relaxation', href: '/relaxation', icon: TreePalmIcon },
		{ label: 'Settings', href: '/settings', icon: SettingsIcon }
	];

	let innerWidth = $state(1024);
	const mobileBreakpoint = 768;
	let isMobile = $derived(innerWidth < mobileBreakpoint);

	let isRail = $state(true);
	function toggleSidebar() {
		isRail = !isRail;
	}
	let waiter = $state(false);
	onMount(async () => {
		waiter = true;
	});
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
{#if !waiter}
	{#if !isMobile}
		<div class="flex h-dvh items-center justify-center">
			<div class="h-12 w-12 animate-spin rounded-full border-b-2 border-primary-500"></div>
		</div>
	{:else}
		<div class="flex h-dvh items-center justify-center">
			<div class="h-10 w-10 animate-spin rounded-full border-b-2 border-primary-500"></div>
		</div>
	{/if}
{:else}
	<div class="bg-surface-50-900 flex h-dvh w-full flex-col overflow-hidden md:flex-row">
		<!-- Desktop Sidebar -->
		{#if !isMobile}
			<aside
				out:fade={{ duration: 0 }}
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
{/if}
