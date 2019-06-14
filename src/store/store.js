import Vue from "vue";
import Vuex from "vuex";

import number from './modules/number';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    number
  }
});
