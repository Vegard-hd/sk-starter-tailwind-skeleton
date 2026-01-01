<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="flex h-full w-full flex-col items-center justify-center text-center">
	<div class="space-y-2">
		<h1 class="h1">SvelteKit Starter Template</h1>
		<p>A clean and simple starting point for your next project.</p>
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
