<script lang="ts">
	import { onMount } from 'svelte';
	import { DicesIcon } from '@lucide/svelte';

	const pokemon = new Set([
		'pikachu',
		'charmander',
		'squirtle',
		'bulbasaur',
		'eevee',
		'snorlax',
		'gengar',
		'dragonite',
		'lapras',
		'jigglypuff',
		'psyduck',
		'growlithe',
		'machamp',
		'alakazam',
		'gyarados',
		'vaporeon',
		'flareon',
		'jolteon',
		'meowth',
		'charizard',
		'blastoise',
		'venusaur',
		'mewtwo',
		'onix'
	]);

	// API response structure based on https://pokeapi.co/docs/v2#pokemon
	type Pokemon = {
		name: string;
		id: number;
		sprite: string;
		types: string[];
		height: number;
		weight: number;
		stats: { name: string; value: number }[];
		abilities: string[];
	};

	let currentPokemon = $state<Pokemon | null>(null);
	let loading = $state(false);
	let error = $state<string | null>(null);
	let apiLoadTime = $state<number | null>(null);
	/*
	 * @param name - The name of the pokemon to fetch*/
	function getApiURL(name: string) {
		const api = 'https://pokeapi.co/api/v2/';
		return `${api}pokemon/${name}`;
	}

	function pickRandomPokemon() {
		const names = [...pokemon];
		return names[Math.floor(Math.random() * names.length)];
	}

	/*
	 *  @description - Fetches a random pokemon from the API and updates the state accordingly. Handles loading and error states as well.
	 *  @returns {Promise<void>} - A promise that resolves when the operation is complete.
	 * */
	async function loadRandomPokemon() {
		loading = true;
		error = null;

		const waitTime = Math.floor(Math.random() * 1000 + 300);

		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(null);
			}, waitTime);
		});
		try {
			const name = pickRandomPokemon();
			const response = await fetch(getApiURL(name));

			if (!response.ok) {
				throw new Error(`Could not fetch ${name}`);
			}

			const data = await response.json();
			currentPokemon = {
				name: data.name,
				id: data.id,
				sprite: data.sprites.front_default,
				types: data.types.map((entry: { type: { name: string } }) => entry.type.name),
				height: data.height,
				weight: data.weight,
				stats: data.stats.map((entry: { stat: { name: string }; base_stat: number }) => ({
					name: entry.stat.name,
					value: entry.base_stat
				})),
				abilities: data.abilities.map((entry: { ability: { name: string } }) => entry.ability.name)
			};
		} catch (err) {
			error = err instanceof Error ? err.message : 'Something went wrong';
			currentPokemon = null;
		} finally {
			apiLoadTime = waitTime;
			loading = false;
		}
	}

	onMount(() => {
		loadRandomPokemon();
	});
</script>

<svelte:head>
	<title>Pokémon example | Sveltekit template</title>
</svelte:head>

<section class="flex min-h-dvh flex-col items-center justify-center py-8">
	<div class="w-full max-w-5xl space-y-6 rounded border border-success-500/20 p-5 shadow-2xl">
		<div class="text-center">
			<h1 class="h1">Random Pokémon</h1>
			<p class="mt-2 text-tertiary-700 dark:text-tertiary-300">
				Fetches a random Pokémon from a pool of {pokemon.size} names via the
				<a
					href="https://pokeapi.co/"
					target="_blank"
					rel="noopener noreferrer external"
					class="anchor">PokéAPI</a
				>.
			</p>
		</div>

		<div class="variant-ghost-surface card p-6 md:p-8">
			{#if loading}
				<div class="min-h-4xl flex h-full flex-col items-center justify-center">
					<div
						class="h-10 w-10 animate-spin rounded-full border-b-2 border-primary-500"
						aria-hidden="true"
					></div>
					<p class="text-sm text-tertiary-700 dark:text-tertiary-300">Catching a Pokémon…</p>
				</div>
			{:else if error}
				<div class="space-y-4 py-8 text-center">
					<p class="text-error-700-300">{error}</p>
					<button type="button" class="btn preset-filled-primary-500" onclick={loadRandomPokemon}>
						<DicesIcon class="size-4" />
						Try again
					</button>
				</div>
			{:else if currentPokemon}
				<div class="space-y-6">
					<div class="flex flex-col items-center gap-4 text-center">
						{#if currentPokemon.sprite}
							<img
								src={currentPokemon.sprite}
								alt={currentPokemon.name}
								class="h-32 w-32 object-contain"
							/>
						{/if}
						<div>
							<h2 class="h2 capitalize">{currentPokemon.name}</h2>
							<p class="text-sm text-tertiary-700 dark:text-tertiary-300">
								#{currentPokemon.id.toString().padStart(3, '0')}
							</p>
						</div>
						<div class="flex flex-wrap justify-center gap-2">
							{#each currentPokemon.types as type (type)}
								<span class="badge preset-tonal-secondary capitalize">{type}</span>
							{/each}
						</div>
					</div>

					<dl class="grid grid-cols-2 gap-4 text-sm">
						<div>
							<dt class="text-tertiary-700 dark:text-tertiary-300">Height</dt>
							<dd class="font-medium">{currentPokemon.height / 10} m</dd>
						</div>
						<div>
							<dt class="text-tertiary-700 dark:text-tertiary-300">Weight</dt>
							<dd class="font-medium">{currentPokemon.weight / 10} kg</dd>
						</div>
						<div class="col-span-2">
							<dt class="text-tertiary-700 dark:text-tertiary-300">Abilities</dt>
							<dd class="font-medium capitalize">
								{currentPokemon.abilities.join(', ')}
							</dd>
						</div>
					</dl>

					<div>
						<h3 class="mb-3 text-sm font-semibold">Base stats</h3>
						<ul class="space-y-2">
							{#each currentPokemon.stats as stat (stat.name)}
								<li class="grid grid-cols-[6rem_1fr_2.5rem] items-center gap-2 text-sm">
									<span class="text-tertiary-700 capitalize dark:text-tertiary-300">
										{stat.name.replace('-', ' ')}
									</span>
									<div class="h-2 overflow-hidden rounded-full bg-surface-300-700">
										<div
											class="h-full rounded-full bg-primary-500"
											style="width: {Math.min(stat.value, 255) / 2.55}%"
										></div>
									</div>
									<span class="text-end font-medium tabular-nums">{stat.value}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}

			<div
				class="mt-6 flex flex-col items-center justify-center gap-2 border-t border-surface-500/20 pt-6"
			>
				<div class={apiLoadTime ? 'opacity-100' : 'opacity-0'}>
					<div class="mr-4 text-sm text-tertiary-700 dark:text-tertiary-300">
						API fetch delay time: <span class="font-medium text-success-500">{apiLoadTime}ms</span>
					</div>
				</div>
				<button
					type="button"
					class="btn preset-filled-primary-200-800"
					disabled={loading}
					onclick={loadRandomPokemon}
				>
					<DicesIcon class="size-6" />
					Roll another Pokémon
				</button>
			</div>
		</div>
	</div>
</section>
