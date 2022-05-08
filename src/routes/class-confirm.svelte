<script lang="ts" context="module">
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { relevantTags, state } from '$lib/state';

	async function confirmClass() {
		const res = await fetch('/api/destination.json', {
			method: 'POST',
			body: JSON.stringify({
				currentLocation: $state.currentLocation,
				visited: $state.visitedPlaces.map(([fsq_id]) => fsq_id),
				relevantCategories: $state.character?.preferences
			})
		});

		const { excludeSuccessful, destinations } = await res.json();
		$state.destinationChoices = destinations;

		goto('/story/choose-path');
	}
</script>

<h1>During your journey as a(n) {$state.character?.name} you will visit</h1>
{#each $relevantTags as tag, i}
	<section>
		<h2>{tag}</h2>
		<img src="https://via.placeholder.com/350x150" alt="" />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quo reprehenderit.
			Laboriosam maxime, ea rerum, dolorum dolor tempore facilis possimus fugiat rem sunt
			perferendis nesciunt molestiae aut nulla id autem.
		</p>
	</section>
{/each}
<button class="action-btn confirm" on:click={confirmClass}>Let's go!</button>
<button class="action-btn cancel" on:click={() => goto('class-select')}>Reconsider</button>

<style>
	h2 {
		margin-top: 2.5rem;
	}
	img {
		max-width: 100%;
		margin: auto;
		margin-left: 1rem;
		float: right;
	}
	@media screen and (max-width: 800px) {
		img {
			float: unset;
			margin: auto;
		}
	}
	section {
		/* margin-top: 15rem; */
		padding: 0 0.5rem;
	}
</style>
