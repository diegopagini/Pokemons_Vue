<!-- @format -->

<template>
	<div class="pokemon-container">
		<div class="pokemon-wrapper">
			<img
				alt="pokemon"
				class="hidden-pokemon"
				:src="imgSrc"
			/>

			<img
				v-if="showPokemon"
				alt="pokemon"
				class="fade-in"
				:src="imgSrc"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			pokemonId: {
				type: Number,
				required: true,
			},
			showPokemon: {
				type: Boolean,
				required: true,
				default: false,
			},
		},
		computed: {
			imgSrc() {
				return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
			},
		},
	};
</script>

<style scoped>
	.pokemon-container {
		height: 200px;
	}

	.pokemon-wrapper {
		display: flex;
		justify-content: center;
		position: relative;
		width: 100%;
	}

	img {
		-moz-user-select: none;
		-ms-user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
		height: 200px;
		position: absolute;
		user-select: none;
	}
	.hidden-pokemon {
		filter: brightness(0);
	}
</style>
