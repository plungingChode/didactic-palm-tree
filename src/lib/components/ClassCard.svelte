<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let id: number;
	export let title: string;
	export let relevantTags: string[] = ['kaja', 'pia', 'nők'];
	export let bodyText: string;
	export let picPath: string;

	export let isOpen = false;

	function handleContainerClick() {
		if (!isOpen) {
			dispatch('expand', { id });
			isOpen = true;
		}
	}
</script>

<div class="container" on:click={handleContainerClick}>
	<div class="img-crop">
		<img src={picPath} alt="" />
	</div>
	<section>
		<h3>{title}</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>

	{#if isOpen}
		<section transition:slide>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, mollitia dolore!
				Officia neque vero dolore, magni ipsum ratione reprehenderit, eius deleniti porro facere
				consequuntur debitis nobis voluptate mollitia. Laudantium, aliquam! Veritatis neque
				voluptatum alias illo eligendi qui excepturi quibusdam nemo molestiae earum? Totam ipsa esse
				dolor aliquid suscipit nesciunt natus quidem similique voluptatem dolores? Libero amet
				officiis impedit explicabo dignissimos?
			</p>
			<p>
				Relevant points of interest:
				<br />
				{#each relevantTags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</p>
			<button class="action-btn confirm" on:click={() => dispatch('choose', { id })}
				>Choose this</button
			>
			<button class="action-btn collapse-btn" on:click|stopPropagation={() => (isOpen = false)}
				>^</button
			>
		</section>
	{/if}
</div>

<style>
	h3 {
		font-size: 1.5rem;
	}
	p {
		margin-bottom: 0;
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
	.img-crop {
		width: 100px;
		height: 100px;
		margin-left: auto;
		margin-right: auto;

		overflow: hidden;
		border-radius: 50%;
		background-color: magenta;
	}

	.img-crop img {
		height: 100%;
		width: auto;

		margin: 0 auto;
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
</style>
