<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Home | Sveltekit template</title>
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center text-center">
	<div class="space-y-2">
		<h1 class="h1">SvelteKit Starter Template</h1>
		<p>A clean and simple starting point for your next project.</p>
		<p class="text-md opacity-95">
			Includes a settings toggle that enables/clears user preferences in localStorage and a dark
			mode toggle persisted in localStorage, plus a responsive 3-stage app bar (large / icons-only
			on tablet+desktop on the left, bottom bar on mobile) that smoothly transitions between layouts
			using Svelte transitions. Basic routing is already set up—edit <code
				>/entertainment/+page.svelte</code
			>
			or create a new folder with a
			<code>+page.svelte</code> file to add routes.
		</p>
	</div>

	<div class="variant-ghost-surface mt-10 w-full max-w-md card p-4 md:p-8">
		<h2 class="mb-4 h2">Powered by</h2>
		<ul class="list-none space-y-2">
			<li>
				<a
					href="https://kit.svelte.dev/"
					target="_blank"
					rel="noopener noreferrer external"
					class="flex items-center justify-center gap-2 anchor"
				>
					<span>SvelteKit</span>
				</a>
			</li>
			<li>
				<a
					href="https://tailwindcss.com/"
					target="_blank"
					rel="noopener noreferrer external"
					class="flex items-center justify-center gap-2 anchor"
				>
					<span>Tailwind CSS</span>
				</a>
			</li>
			<li>
				<a
					href="https://lucide.dev/"
					target="_blank"
					rel="noopener noreferrer external"
					class="flex items-center justify-center gap-2 anchor"
				>
					<span>Lucide Icons</span>
				</a>
			</li>
			<li>
				<a
					href="https://fonts.google.com/specimen/Sora"
					target="_blank"
					rel="noopener noreferrer external"
					class="flex items-center justify-center gap-2 anchor"
				>
					<span>Sora Font</span>
				</a>
			</li>
		</ul>
		<div class="mt-6 text-sm">
			<p>
				Visit the <a href={resolve('/settings')} class="anchor">settings</a> page to toggle dark mode.
			</p>
		</div>
	</div>
</div>
