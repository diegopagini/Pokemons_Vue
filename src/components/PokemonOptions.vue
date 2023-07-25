<!-- @format -->

<template>
	<div class="options-container">
		<ul v-if="options">
			<li
				v-for="pokemon in options"
				:key="pokemon.id"
				class="fade-in"
			>
				{{ pokemon.name }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			options: {
				type: Array,
				required: true,
			},
		},
	};
</script>

<style scoped>
	ul {
		list-style-type: none;
		padding: unset;
	}

	li {
		background-color: white;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		cursor: pointer;
		margin-bottom: 10px;
		padding: 0.25rem;
		width: 250px;
	}

	li:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	.options-container {
		display: flex;
		justify-content: center;
	}
</style>
