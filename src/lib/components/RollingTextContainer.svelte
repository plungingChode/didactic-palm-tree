<script lang="ts">
	import { slide } from 'svelte/transition';
	import NavigatorButtonLink from '$lib/components/NavigatorButtonLink.svelte';
	export let title: string;
	export let text: string;
	export let url: string;
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<div class="container">
	<div class="header">
		<button on:click={toggle}> {title} </button>
	</div>
	{#if isOpen}
		<p>{text}</p>
	{/if}
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	button {
		border: none;
		background: none;
		display: block;
		color: inherit;
		font-size: 36px;
		cursor: pointer;
		margin: 0;
		padding-bottom: 0.1em;
		padding-top: 0.1em;
		justify-content: left;
	}
	p {
		margin: 0;
		padding: 0;
	}
	.nextButton {
		background-color: red;
		width: 30px;
		height: 10px;
	}
</style>
