<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="container">
	<h1>Have you finished the quest?</h1>
	<!-- QUEST -->
	<button
		class="action-btn confirm"
		on:click={() => {
			goto('choose-path');
		}}>Onward to more adventures!</button
	>
	<button class="action-btn confirm">Let's go home and rest.</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
</style>
