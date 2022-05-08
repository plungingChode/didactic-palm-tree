<script lang="ts">
	import { goto } from '$app/navigation';
	import { state } from '$lib/state';

	async function pickNextDestinations() {
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

<div class="container">
	<h1>You travel toward your destination...</h1>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5390.582074059584!2d19.032554276271817!3d47.503723066711686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x4741dc19883239ad%3A0xf24780703a548624!2zQnVkYXBlc3QsIEJhdHRoecOhbnkgdMOpcg!3m2!1d47.5063259!2d19.0389734!4m5!1s0x4741dc227fb4a99d%3A0x2f263ca844235e46!2sBudapest%2C%20Fisherman&#39;s%20Bastion%2C%20Szenth%C3%A1roms%C3%A1g%20t%C3%A9r%2C%201014!3m2!1d47.5021827!2d19.034781199999998!5e0!3m2!1sen!2shu!4v1651964655166!5m2!1sen!2shu"
		allowfullscreen={null}
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="map"
	/>
	<button class="action-btn confirm" on:click={pickNextDestinations}>I've arrived!</button>
</div>

<style>
	.container {
		max-width: 600px;
		border-radius: 1rem;
	}
	iframe {
		width: 100%;
		height: 450px;
		border: 0;
	}
</style>
