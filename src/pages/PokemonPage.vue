<!-- @format -->

<template>
	<div>
		<h1>¿Quién es este Pokémon?</h1>

		<PokemonPicture
			:pokemonId="151"
			:showPokemon="true"
		/>

		<PokemonOptions :options="pokemons" />
	</div>
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
			};
		},
		methods: {
			async mixPokemonArray() {
				this.pokemons = await getPokemonOptions();
			},
		},
		mounted() {
			this.mixPokemonArray();
		},
	};
</script>
