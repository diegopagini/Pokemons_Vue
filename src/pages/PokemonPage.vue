<!-- @format -->

<template>
	<div v-if="pokemon">
		<h1>¿Quién es este Pokémon?</h1>

		<PokemonPicture
			:pokemonId="pokemon.id"
			:showPokemon="showPokemon"
		/>

		<PokemonOptions :options="pokemons" />

		<button
			class="re-run-button"
			@click="reRun"
		>
			Jugar otra vez
		</button>
	</div>

	<h1 v-else>Espere por favor...</h1>
</template>

<script>
	import PokemonOptions from '@/components/PokemonOptions';
	import PokemonPicture from '@/components/PokemonPicture';

	import getPokemonOptions from '@/helpers/getPokemonOptions';

	export default {
		components: {
			PokemonOptions,
			PokemonPicture,
		},
		data() {
			return {
				pokemons: [],
				pokemon: null,
				showPokemon: false,
			};
		},
		methods: {
			async mixPokemonArray() {
				this.pokemons = await getPokemonOptions();
				const rndInt = Math.floor(Math.random() * 4);
				this.pokemon = this.pokemons.at(rndInt);
			},
			reRun() {
				location.reload();
			},
		},
		mounted() {
			this.mixPokemonArray();
		},
	};
</script>

<style scoped>
	.re-run-button {
		background-color: #fff;
		border-radius: 4px;
		border: unset;
		cursor: pointer;
		font-size: 1rem;
		letter-spacing: 1px;
		margin: 0 auto;
		outline: 1px solid #000;
		padding: 1rem;
	}
</style>
