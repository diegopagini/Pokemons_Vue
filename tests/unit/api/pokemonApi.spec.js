/** @format */
import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', () => {
	test('axios debe estar configurado con el api de pokemon', () => {
		expect(pokemonApi.defaults.baseURL).toEqual('https://pokeapi.co/api/v2/pokemon');
	});
});
