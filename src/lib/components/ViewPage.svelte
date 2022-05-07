<script lang="ts">
	import ClassPage from '$lib/components/ClassPage.svelte';
	import StoryPage from '$lib/components/StoryPage.svelte';
	import EndPage from '$lib/components/EndPage.svelte';
	import DonePage from './DonePage.svelte';
	import PathSelect from '$lib/components/PathSelect.svelte';
</script>

<div class="container">
	<StoryPage />
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
