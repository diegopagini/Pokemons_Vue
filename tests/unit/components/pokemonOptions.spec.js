/** @format */
import PokemonOptions from '@/components/PokemonOptions';
import { shallowMount } from '@vue/test-utils';

import { POKEMONS_MOCK } from '../mocks/pokemons';

describe('PokemonOptions Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(PokemonOptions, {
			props: {
				options: POKEMONS_MOCK,
			},
		});
	});

	test('debe de hacer match con el snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('debe de mostrar las 4 opciones correctamente', () => {
		const elements = wrapper.findAll('li');
		expect(elements.length).toBe(4);
		expect(elements.at(0).text()).toBe(POKEMONS_MOCK[0].name);
		elements.forEach((el) => {
			expect(el.text()).toEqual(expect.any(String));
		});
	});

	test('debe de emitir "selection" cons sus respectivos parámetros al hacer click', () => {
		const [l1, l2, l3, l4] = wrapper.findAll('li');

		l1.trigger('click');
		l2.trigger('click');
		l3.trigger('click');
		l4.trigger('click');

		expect(wrapper.emitted('selection').length).toBe(4);
		expect(wrapper.emitted('selection').at(0)).toEqual([1]);
		expect(wrapper.emitted('selection').at(1)).toEqual([2]);
		expect(wrapper.emitted('selection').at(2)).toEqual([3]);
		expect(wrapper.emitted('selection').at(3)).toEqual([4]);
	});
});
