<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="container">
	<div class="map">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5390.582074059584!2d19.032554276271817!3d47.503723066711686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x4741dc19883239ad%3A0xf24780703a548624!2zQnVkYXBlc3QsIEJhdHRoecOhbnkgdMOpcg!3m2!1d47.5063259!2d19.0389734!4m5!1s0x4741dc227fb4a99d%3A0x2f263ca844235e46!2sBudapest%2C%20Fisherman&#39;s%20Bastion%2C%20Szenth%C3%A1roms%C3%A1g%20t%C3%A9r%2C%201014!3m2!1d47.5021827!2d19.034781199999998!5e0!3m2!1sen!2shu!4v1651964655166!5m2!1sen!2shu"
			width="600"
			height="450"
			style="border:0;"
			allowfullscreen={null}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="map"
		/>
	</div>
	<button
		class="action-btn confirm"
		on:click={() => {
			goto('activity-done');
		}}>I've arrived!</button
	>
</div>

<style>
	.container {
		max-width: 600px;
		border-radius: 1rem;
	}
	map {
		border-radius: 1rem;
		margin: 3rem;
		width: 100%;
	}
</style>
