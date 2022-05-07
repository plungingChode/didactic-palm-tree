<script lang="ts">
	import NavigatorButtonFunction from '$lib/components/NavigatorButtonFunction.svelte';
	import { createEventDispatcher } from 'svelte';
	import RollingTextContainer from './RollingTextContainer.svelte';

	const dispatch = createEventDispatcher();
	const buttonFunction = () => {
		dispatch('button-press');
	};

	export let title: string;
	export let bodyText: string;
	export let picPath: string;

	const chooseThis = () => {
		dispatch('turn-next', title);
	};
</script>

<div
	class="container"
	on:click={() => {
		chooseThis();
	}}
>
	<img src={picPath} alt="semmi" />
	<RollingTextContainer {title} text={bodyText} url={''} />
</div>

<style>
	.container {
		margin-top: 20px;
		box-sizing: border-box;
		background-color: #335;

		place-items: center;
		border-radius: 10px;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
		color: white;

		text-align: left;
	}

	/*.header{
    display: flex;
    justify-content: space-between;
}
h1{
    margin:0;
    padding: 0;
}
p{
    margin:0;
    padding: 0;
}*/

	img {
		width: 100%;
		display: block;
		border-radius: 10px 10px 0 0;
	}
</style>
