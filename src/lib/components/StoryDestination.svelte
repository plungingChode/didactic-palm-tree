<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import type { FSQPointOfInterest } from '$lib/types';
	import { state } from '$lib/state';
	import { goto } from '$app/navigation';
	export let destination: FSQPointOfInterest;

	export let id: string;

	export let isOpen = false;

	function handleContainerClick() {
		if (!isOpen) {
			dispatch('expand', { id });
			isOpen = true;
		}
	}
</script>

<div
	class="container"
	on:click={() => {
		handleContainerClick();
	}}
>
	<h3>...{destination.snippet.action}</h3>
	{#if isOpen}
		<section transition:slide>
			<h4>{destination.name}</h4>
			<span>{destination.categories[0].name}</span>
			<img src={destination.photos[0].prefix + '350x200' + destination.photos[0].suffix} alt="" />

			<p>
				{destination.snippet.lore}
			</p>
			{#if destination.description}
				<p>
					{destination.description}
				</p>
			{/if}

			<button
				class="action-btn confirm"
				on:click={() => {
					$state.currentLocation = destination.fsq_id;
					$state.visitedPlaces.push([destination.fsq_id, destination.snippet.id || 0]);
					goto('navigate');
				}}>Onward!</button
			>
		</section>
	{/if}
</div>

<style>
	h4 {
		margin: 0;
	}
	h3 {
		font-size: 1rem;
		font-style: italic;
		font-weight: 400;
	}
	p {
		margin-bottom: 0;
		font-style: italic;
	}
	.container {
		display: flex;
		flex-direction: column;
		margin-top: 1.5rem;
		padding: 1.5rem;

		border-radius: 0.5rem;

		box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5);
		text-align: left;
	}

	.collapse-btn {
		width: calc(100% + 3rem);
		margin-left: -1.5rem;
		margin-bottom: -1.5rem;
	}

	.tag {
		display: inline-block;
		min-width: 4rem;
		margin-right: 0.25rem;
		padding: 0.15rem 0.5rem;
		vertical-align: middle;

		border-radius: 0.25rem;
		background-color: var(--gray-400);
		text-align: center;
	}
	img {
		width: 100%;
		border-radius: 10px;
		margin-top: 1rem;
	}
</style>
