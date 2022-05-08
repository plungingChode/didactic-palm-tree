<script lang="ts">
	import type { FSQPointOfInterest } from '$lib/types';
	import { state } from '$lib/state';
	import StoryDestination from '$lib/components/StoryDestination.svelte';
	import { sample } from 'lodash';
	import { goto } from '$app/navigation';

	let expanded: FSQPointOfInterest | null = null;

	const journeyBegin = ['At the beginning of your journey...'];
	const journeyProgress = [
		'At this point in your journey...',
		'You spy something interesting in the distance and...',
		'Interestingly...'
	];
	const journeyEnd = ['Finally...'];

	function pickHeader(stopsMade: number) {
		if (stopsMade === 0) {
			return sample(journeyBegin);
		} else if (stopsMade < 4) {
			return sample(journeyProgress);
		} else {
			return sample(journeyEnd);
		}
	}
</script>

<div class="container">
	<h1>{pickHeader($state.visitedPlaces.length)}</h1>
	{#if $state.visitedPlaces.length < 4}
		{#each $state.destinationChoices as dest}
			<StoryDestination
				on:expand={(e) => (expanded = e.detail.destination)}
				isOpen={expanded === dest}
				destination={dest}
			/>
		{/each}
	{:else}
		<img
			class="story-part"
			src="https://www.7torony.hu/wp-content/uploads/2012/03/iras_50409.jpg"
			alt=""
		/>
		<p class="story-part">after a long day of traveling, you feel exhausted and</p>
	{/if}
	<button class="action-btn confirm" on:click={() => goto('the-end')}>
		<em>...you decide to go home and rest</em>
	</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
	h1 {
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
	}
	p {
		margin: 0;
		padding: 0;
	}
	.story-part {
		margin-top: 1rem;
		font-style: italic;
	}
	button {
		font-weight: 400;
	}
</style>
