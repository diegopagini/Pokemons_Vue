/** @format */
import PokemonPage from '@/pages/PokemonPage';
import { mount, shallowMount } from '@vue/test-utils';

import { POKEMONS_MOCK } from '../mocks/pokemons';

describe('PokemonPage Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(PokemonPage);
	});

	test('debe de hacer match con el spanshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('debe de llamar mixPokemonArray al montar', () => {
		const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');
		const wrapper = shallowMount(PokemonPage); // To launch the mount method again.
		expect(mixPokemonArraySpy).toHaveBeenCalled();
		expect(mixPokemonArraySpy).toBeCalledTimes(1);
	});

	test('debe de hacer match con el spanshot cuando cargan los pokemons', () => {
		const wrapper = mount(PokemonPage, {
			data() {
				return {
					pokemons: POKEMONS_MOCK,
					pokemon: POKEMONS_MOCK.at(0),
					showPokemon: false,
					showAnswer: false,
					message: '',
				};
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
