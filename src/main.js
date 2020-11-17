import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import VuePaginate from 'vue-paginate';
import VueFormulate from '@braid/vue-formulate';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueFormulate);

Vue.mixin({
	methods: {
		switchLang: function (n) {
			this.langIndex = n
			store.setLangAction(n)
		},
	},
})

export var store = {
	debug: true,
	state: {
		langIndex: 1,
		s: 1
	},
	setShownAction (x) {
		this.state.s = x
	},
	setLangAction (x) {
		this.state.langIndex = x
	},
}

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
