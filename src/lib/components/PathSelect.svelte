<script lang="ts">
	import type { Tag } from '$lib/types';

	const relevantTags: Tag[] = [
		{
			id: 1,
			description: 'Historic Site'
		},
		{
			id: 2,
			description: 'Scout and explore!'
		}
	];
</script>

<h1>Your journey...</h1>
{#each relevantTags as tag, i}
	<section>
		<h2>{tag.description}</h2>
		<img src="https://via.placeholder.com/350x150" alt="" />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quo reprehenderit.
			Laboriosam maxime, ea rerum, dolorum dolor tempore facilis possimus fugiat rem sunt
			perferendis nesciunt molestiae aut nulla id autem. Quo dolor fuga nulla, officiis, provident
			ab corporis inventore consectetur nihil recusandae sunt, ad ipsa commodi reprehenderit!
			Provident quam, quia laboriosam, distinctio enim impedit optio praesentium atque amet dolores
			voluptatem.
		</p>
	</section>
{/each}
<button> Let's go! </button>
<button> Reconsider </button>

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
