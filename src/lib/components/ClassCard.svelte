<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import type { Character } from '$lib/types';
	import { state } from '$lib/state';
	import { longLipsum, prefixWithIndefiniteArticle, shortLipsum } from '$lib/util';

	const dispatch = createEventDispatcher();

	export let character: Character;
	export let isOpen = false;

	function handleContainerClick() {
		if (!isOpen) {
			dispatch('expand', { id: character.id });
			isOpen = true;
		}
	}

	function getRelevantTag(tagID: number | string) {
		const labels = $state.tags[tagID].full_label;
		return labels[labels.length - 1];
	}
</script>

<div class="container" on:click={handleContainerClick}>
	<div class="img-crop">
		<img src={character.pictureURL} alt="" />
	</div>
	<section>
		<h3>{prefixWithIndefiniteArticle(character.name)}</h3>
		<p>{character.shortDescription || shortLipsum}</p>
	</section>

	{#if isOpen}
		<section transition:slide>
			<p>
				{character.longDescription || longLipsum}
			</p>
			<p>
				Relevant points of interest:
				<br />
				{#each character.preferences as tagID}
					<span class="tag">{getRelevantTag(tagID)}s</span>
				{/each}
			</p>
			<button class="action-btn confirm" on:click={() => dispatch('choose', { id: character.id })}>
				Choose this
			</button>
			<button class="action-btn collapse-btn" on:click|stopPropagation={() => (isOpen = false)}>
				^
			</button>
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
		margin-top: 0.25rem;
		margin-right: 0.25rem;
		padding: 0.15rem 0.5rem;
		vertical-align: middle;

		border-radius: 0.25rem;
		background-color: var(--gray-400);
		text-align: center;
	}
</style>
