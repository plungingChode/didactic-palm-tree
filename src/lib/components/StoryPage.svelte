<script lang="ts">
	import RollingTextContainer from '$lib/components/RollingTextContainer.svelte';
	export let title: string;
	export let bodyText: string;
	export let picPath: string;
</script>

<div class="container">
	<img src={picPath} alt="semmi" />
	<h1>{title}</h1>
	<p>{bodyText}</p>
	<div class="RollingTextContainers">
		<RollingTextContainer
			title={'Torony'}
			text={'be menni'}
			url={'https://goo.gl/maps/fxtrgBeEheBCQceh6'}
		/>
		<RollingTextContainer
			title={'Láp'}
			text={'Menekülj'}
			url={'https://goo.gl/maps/fxtrgBeEheBCQceh6'}
		/>
		<RollingTextContainer
			title={'Kastély'}
			text={'Lopás'}
			url={'https://goo.gl/maps/fxtrgBeEheBCQceh6'}
		/>
	</div>
</div>

<style>
	.container {
		background-color: #335;

		display: grid;
		place-items: center;
		border-radius: 10px;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

		color: white;
	}

	img {
		width: 100%;
		display: block;
		border-radius: 10px 10px 0 0;
	}
	h1 {
		margin: 0;
		padding: 0;
	}
	p {
		margin: 0;
		padding: 0;
	}

	.RollingTextContainers {
		width: 100%;
		text-align: left;
	}
</style>
