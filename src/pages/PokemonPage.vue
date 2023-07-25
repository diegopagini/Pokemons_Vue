<!-- @format -->

<template>
	<div>
		<h1>¿Quién es este Pokémon?</h1>

		<PokemonPicture />
		<PokemonOptions />
	</div>
</template>

<script>
	import PokemonOptions from '@/components/PokemonOptions';
	import PokemonPicture from '@/components/PokemonPicture';

	export default {
		components: {
			PokemonOptions,
			PokemonPicture,
		},
	};
</script>
