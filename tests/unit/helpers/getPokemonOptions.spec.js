/** @format */
import getPokemonOptions, { getPokemonNames, getPokemons } from '@/helpers/getPokemonOptions';

describe('getPokemonOptions', () => {
	test('debe de regresar un arreglo de numeros', () => {
		const pokemons = getPokemons();
		expect(pokemons.length).toBe(650);
		expect(pokemons.at(0)).toBe(1);
		expect(pokemons.at(500)).toBe(501);
		expect(pokemons.at(649)).toBe(650);
	});

	test('debe de retornar un arreglo de 4 elementos con nombres de pokemons', async () => {
		const pokemons = await getPokemonNames([1, 2, 3, 4]);
		expect(pokemons).toStrictEqual([
			{ name: 'bulbasaur', id: 1 },
			{ name: 'ivysaur', id: 2 },
			{ name: 'venusaur', id: 3 },
			{ name: 'charmander', id: 4 },
		]);
	});

	test('getPokemonOptions debe de retornar un arreglo mezclado', async () => {
		const pokemons = await getPokemonOptions();
		expect(pokemons.length).toBe(4);
		expect(pokemons).toEqual([
			{ name: expect.any(String), id: expect.any(Number) },
			{ name: expect.any(String), id: expect.any(Number) },
			{ name: expect.any(String), id: expect.any(Number) },
			{ name: expect.any(String), id: expect.any(Number) },
		]);
	});
});
