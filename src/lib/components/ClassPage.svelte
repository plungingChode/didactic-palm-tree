<script lang="ts">
	import ClassCard from '$lib/components/ClassCard.svelte';

	let openCard = 0;

	const cards = [
		{
			id: 1,
			title: 'Fighter',
			bodyText: '',
			picPath: ''
		},
		{
			id: 2,
			title: 'Fighter',
			bodyText: '',
			picPath: ''
		}
	];
</script>

<main class="container">
	<h1>You start as a ...</h1>
	{#each cards as c}
		<ClassCard
			on:expand={(e) => (openCard = e.detail.id)}
			on:choose={(e) => alert(e.detail.id)}
			id={c.id}
			isOpen={c.id === openCard}
			title={c.title}
			bodyText={c.bodyText}
			picPath={c.picPath}
		/>
	{/each}
</main>

<style>
	.container {
		padding: 0;
		margin: 0;
		max-width: 600px;
	}
</style>
