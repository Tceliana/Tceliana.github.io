<script>
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	
	let condition = false;
</script>

<button on:click={() => condition = !condition}>
	show svg
</button>

<svg viewBox="0 0 1500 1500" xmlns="http://www.w3.org/2000/svg">
	{#if condition}
		<!-- <path transition:draw="{{duration: 1500, easing: quintOut}}"
					d="M1 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
					fill="none"
					stroke="cornflowerblue"
					stroke-width="0.1px"
					/> -->
					 <path transition:draw="{{duration: 1500, easing: quintOut}}"
		d="M0,0 0,0"
					fill="none"
					stroke="cornflowerblue"
					stroke-width="0.1px"
					/> 
		<!-- <path transition:draw="{{duration: 1500, easing: quintOut}}"
					d="M500,200 h-150 a150,150 0 1,0 150,-150 z"
					fill="none"
					stroke="cornflowerblue"
					stroke-width="2px"
					/> -->
	{/if}
</svg>

<style>
	svg {
		display: block;
		
		height: 500px;
		width: 580px;
	}
</style>