/** @format */
import './css/animations.css';
import './css/styles.css';

import Vue from 'vue';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
