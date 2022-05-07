<script lang="ts">
	export let title: string;
</script>

<button> {title} </button>

<style>
	button {
		border: none;
		background: none;
		display: block;
		color: inherit;
		font-size: 30px;
		cursor: pointer;
		margin: 0;
		padding-bottom: 0.1em;
		padding-top: 0.1em;
		justify-content: left;
	}
	a {
		text-decoration: none;
		color: inherit;
		font-size: 2em;
	}
</style>
