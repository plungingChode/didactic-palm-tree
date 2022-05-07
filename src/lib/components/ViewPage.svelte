<script lang="ts">
	import ClassPage from '$lib/components/ClassPage.svelte';
	import StoryPage from '$lib/components/StoryPage.svelte';
	import EndPage from '$lib/components/EndPage.svelte';

	let viewport: any;
	let pageNumber = 1;

	function nextPage() {
		pageNumber += 1;
	}
</script>

<div class="container">
	{#if pageNumber == 0}
		<ClassPage />
	{:else if pageNumber == 1}
		<StoryPage
			title={'Your journey begins... '}
			bodyText={'Lorem ipsuuuuuuuuuuuuuuuuuuuuuuuum'}
			picPath={'https://www.gnm.de/fileadmin/redakteure/Forschung/bilder/t_forschung_Maria_Kind_zwischen_Heiligen.jpg'}
		/>
	{:else if pageNumber == 2}
		<EndPage />
	{/if}
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
