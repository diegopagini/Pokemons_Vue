/** @format */
import pokemonApi from '@/api/pokemonApi';

const getPokemons = () => {
	const pokemonsArr = Array.from(Array(650));
	return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonNames = async ([a, b, c, d] = []) => {
	const promises = [
		pokemonApi.get(`/${a}`),
		pokemonApi.get(`/${b}`),
		pokemonApi.get(`/${c}`),
		pokemonApi.get(`/${d}`),
	];

	const responses = await Promise.all(promises);

	return responses.map(({ data }) => ({ name: data.name, id: data.id }));
};

const getPokemonOptions = async () => {
	const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
	return await getPokemonNames(mixedPokemons.slice(0, 4));
};

export default getPokemonOptions;
