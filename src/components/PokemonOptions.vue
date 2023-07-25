<!-- @format -->

<template>
	<div class="options-container">
		<ul
			v-if="options"
			class="fade-in"
		>
			<li
				v-for="pokemon in options"
				:key="pokemon.id"
				@click="emit(pokemon.id)"
			>
				{{ pokemon.name }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				disabled: false,
			};
		},
		props: {
			options: {
				type: Array,
				required: true,
			},
		},
		methods: {
			emit(id) {
				this.$emit('selection', id);
			},
		},
	};
</script>

<style scoped>
	ul {
		list-style-type: none;
		padding: unset;
	}

	li {
		background-color: white;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		cursor: pointer;
		margin-bottom: 10px;
		padding: 0.25rem;
		width: 250px;
	}

	li:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	.options-container {
		display: flex;
		justify-content: center;
	}

	.disabled {
		pointer-events: none;
		background-color: rgba(0, 0, 0, 0.05);
	}
</style>
