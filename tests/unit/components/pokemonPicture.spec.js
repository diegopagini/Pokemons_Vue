/** @format */
import PokemonPicture from '@/components/PokemonPicture';
import { shallowMount } from '@vue/test-utils';

describe('PokemonPicture component', () => {
	test('debe de hacer match con el snapshot', () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonId: 1,
				showPokemon: false,
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('debe de mostrar la imagen oculta y el pokemon 100', () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonId: 100,
				showPokemon: false,
			},
		});
		const { pokemonId } = wrapper.props();
		expect(pokemonId).toEqual(100);
		const [img1, img2] = wrapper.findAll('img');
		expect(img1.exists()).toBeTruthy();
		expect(img2).toBeUndefined();
		expect(img1.classes('hidden-pokemon')).toBeTruthy();
		expect(img1.attributes('src')).toContain('100');
	});

	test('debe de mostrar el pokemon si el showPokemon:true', () => {
		const wrapper = shallowMount(PokemonPicture, {
			props: {
				pokemonId: 100,
				showPokemon: true,
			},
		});
		const img = wrapper.find('img');
		expect(img.exists()).toBeTruthy();
		expect(img.classes('hidden-pokemon')).toBe(true);
	});
});
