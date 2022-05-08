<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Character, FSQTags } from '$lib/types';

	export const load: Load = async ({ fetch }) => {
		const charactersQuery = await fetch('/api/characters.json');
		const characters: Character[] = await charactersQuery.json();

		const tagsQuery = await fetch('/api/tags.json');
		const tags: FSQTags = await tagsQuery.json();

		return {
			status: charactersQuery.status,
			props: { characters, tags }
		};
	};
</script>

<script lang="ts">
	import ClassCard from '$lib/components/ClassCard.svelte';
	import { goto } from '$app/navigation';
	import { state } from '$lib/state';

	export let characters: Character[];
	export let tags: FSQTags;

	$: {
		$state.tags = tags;
	}

	let expanded = 0;

	function selectClass(e: CustomEvent) {
		const char = characters.find((c) => c.id === e.detail.id)!;
		$state.character = char;
		goto(`/class-confirm`);
	}
</script>

<main class="container">
	<h1>You begin your journey as...</h1>
	{#each characters as c}
		<ClassCard on:expand={(e) => (expanded = e.detail.id)} on:choose={selectClass} character={c} />
	{/each}
</main>

<style>
	.container {
		padding: 0;
		margin: 0;
		max-width: 600px;
	}
</style>
