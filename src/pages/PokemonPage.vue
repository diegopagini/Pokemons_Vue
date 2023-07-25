<!-- @format -->

<template>
	<div v-if="pokemon">
		<h1>¿Quién es este Pokémon?</h1>

		<PokemonPicture
			:pokemonId="pokemon.id"
			:showPokemon="showPokemon"
		/>

		<PokemonOptions
			:options="pokemons"
			@selection="checkAnswer"
		/>

		<div v-if="showAnswer">
			<h2 clas="fade-in">
				{{ message }}
			</h2>

			<button
				class="re-run-button"
				@click="reRun"
			>
				Jugar otra vez
			</button>
		</div>
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
				showAnswer: false,
				message: '',
			};
		},
		methods: {
			async mixPokemonArray() {
				this.pokemons = await getPokemonOptions();
				const rndInt = Math.floor(Math.random() * 4);
				this.pokemon = this.pokemons.at(rndInt);
			},
			reRun() {
				this.pokemons = [];
				this.pokemon = null;
				this.showPokemon = false;
				this.showAnswer = false;
				this.mixPokemonArray();
			},
			checkAnswer(id) {
				if (id === this.pokemon.id) {
					this.showPokemon = true;
					this.message = `Correcto, ${this.pokemon.name} 😀`;
				} else this.message = `Ops, era ${this.pokemon.name} 😵‍💫`;
				this.showAnswer = true;
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
		margin: 1rem auto 0;
		outline: 1px solid #000;
		padding: 1rem;
	}
</style>
