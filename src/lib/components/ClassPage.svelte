<script lang="ts">
	import ClassCard from '$lib/components/ClassCard.svelte';
</script>

<main class="container">
	<h1>You start as a ...</h1>
	<ClassCard
		title={'Fighter'}
		bodyText={'Eats, drinks, travels a lot'}
		picPath={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08e09130-b992-41f9-bdf6-9ac116532ae6/d6qodsa-6869b945-97fd-4606-b576-216cee128b31.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4ZTA5MTMwLWI5OTItNDFmOS1iZGY2LTlhYzExNjUzMmFlNlwvZDZxb2RzYS02ODY5Yjk0NS05N2ZkLTQ2MDYtYjU3Ni0yMTZjZWUxMjhiMzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4lR5TBQ240Yep3Q3k07s7ZD7R9WoFCmM70o1QzLTHv8'}
		on:turn-next
	/>
	<ClassCard
		title={'Fighter'}
		bodyText={'Eats, drinks, travels a lot'}
		picPath={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08e09130-b992-41f9-bdf6-9ac116532ae6/d6qodsa-6869b945-97fd-4606-b576-216cee128b31.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4ZTA5MTMwLWI5OTItNDFmOS1iZGY2LTlhYzExNjUzMmFlNlwvZDZxb2RzYS02ODY5Yjk0NS05N2ZkLTQ2MDYtYjU3Ni0yMTZjZWUxMjhiMzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4lR5TBQ240Yep3Q3k07s7ZD7R9WoFCmM70o1QzLTHv8'}
		on:turn-next
	/>
	<ClassCard
		title={'Fighter'}
		bodyText={'Eats, drinks, travels a lot'}
		picPath={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08e09130-b992-41f9-bdf6-9ac116532ae6/d6qodsa-6869b945-97fd-4606-b576-216cee128b31.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4ZTA5MTMwLWI5OTItNDFmOS1iZGY2LTlhYzExNjUzMmFlNlwvZDZxb2RzYS02ODY5Yjk0NS05N2ZkLTQ2MDYtYjU3Ni0yMTZjZWUxMjhiMzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4lR5TBQ240Yep3Q3k07s7ZD7R9WoFCmM70o1QzLTHv8'}
		on:turn-next
	/>
</main>

<style>
	.container {
		padding: 0;
		margin: 0;
		max-width: 600px;
	}
</style>
