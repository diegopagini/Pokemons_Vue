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

	test('debe de hacer match con el spanshot cuando cargan los pokemons', async () => {
		const wrapper = await mount(PokemonPage, {
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

	test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', async () => {
		const wrapper = await shallowMount(PokemonPage, {
			data() {
				return {
					pokemons: POKEMONS_MOCK,
					pokemon: POKEMONS_MOCK.at(1),
					showPokemon: false,
					showAnswer: false,
					message: '',
				};
			},
		});

		const picture = wrapper.findComponent({ name: 'PokemonPicture' });
		const options = wrapper.findComponent({ name: 'PokemonOptions' });

		// PokemonPicture debe de existir
		expect(picture.exists()).toBeTruthy();
		// PokemonOptions debe de existir
		expect(options.exists()).toBeTruthy();
		// PokemonPicture attribute pokemonId === 2
		expect(picture.props('pokemonId')).toBe(2);
		// PokemonOptions attribute pokemons toBe true
		expect(options.props('options')).toBeTruthy();
	});

	test('pruebas con checkAnswer', async () => {
		const wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemons: POKEMONS_MOCK,
					pokemon: POKEMONS_MOCK.at(3),
					showPokemon: false,
					showAnswer: false,
					message: '',
				};
			},
		});

		await wrapper.vm.checkAnswer(4);
		expect(wrapper.find('h2').exists()).toBeTruthy();
		expect(wrapper.find('h2').text()).toEqual(`Correcto, ${POKEMONS_MOCK.at(3).name} 😀`);
		expect(wrapper.vm.showPokemon).toBe(true);

		await wrapper.vm.checkAnswer(10);
		expect(wrapper.vm.message).toEqual(`Ops, era ${POKEMONS_MOCK.at(3).name} 😵‍💫`);
	});
});
