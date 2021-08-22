//Módulos do VUE
import Vue from 'vue';
import Vuex from 'vuex';

//States Customizados
import loginState from './states/loginState';
import videosState from './states/videosState';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: loginState,
    videos: videosState
  },
  state: {
    isLoading: false,
    infoModalVisivel:false
  },
  getters: {
    getLoader(state) {
      return state.isLoading;
    },
    isInfoModalVisivel(state){
      return state.infoModalVisivel;
    }
  },
  mutations: {
    setLoader(state, value) {
      state.isLoading = value;
    },
    toggleInfoModal(state){
      state.infoModalVisivel = !state.infoModalVisivel;
    }
  },
  actions:{
    toggleInfoModal(state){
      state.commit("toggleInfoModal");
    }
  }
});
