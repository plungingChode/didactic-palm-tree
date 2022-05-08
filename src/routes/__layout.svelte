<slot />

<style>
	:global(html) {
		font-family: Montserrat, sans-serif;
		--gray-200: #fffaf6;
		--gray-400: #d6d6d6;
		--green-200: #cbeae8;
		--green-800: #067a72;
		--green-400: #20e0cc;
		--orange-200: #ffccb4;
		--orange-400: #ffae80;
		--orange-800: #f4462c;
		--blue-200: #bad8fc;
		--blue-400: #66acff;
		--blue-800: #0e1a50;
	}
	:global(*) {
		box-sizing: border-box;
	}

	:global(.action-btn) {
		display: block;
		width: 100%;
		padding: 0.75rem 1rem;
		margin-top: 0.5rem;
		background: none;
		border: 0;
		font-size: 1.25rem;
		border-radius: 0.5rem;
		text-decoration: none;
		text-align: center;
		font-weight: 600;
	}
	:global(.action-btn.confirm) {
		margin-top: 1.5rem;
		color: var(--gray-200);
		background-color: var(--blue-800);
	}
	:global(.action-btn.cancel) {
		background-color: var(--gray-400);
	}
</style>
