import Vue from 'vue';
import Vuex from 'vuex';

// store module
import AutoPianoModule from '@/store/modules/autopiano';

Vue.use(Vuex);

let store = new Vuex.Store({
	modules: {
		AutoPianoModule
	}
});

export default store;