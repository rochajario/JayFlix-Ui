import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

const loginState = {
  namespaced: true,
  state: {
    token: "",
    modal: {
      titulo: "",
      subtitulo: "",
      descricao: "",
      visivel: false
    }
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getModal(state) {
      return state.modal;
    }
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
    },
    setModal(state, payload) {
      state.modal.titulo = payload.titulo;
      state.modal.subtitulo = payload.subtitulo;
      state.modal.descricao = payload.descricao;
    },
    setVisibilidadeModal(state, value) {
      state.modal.visivel = value;
    },
    setTituloModal(state, titulo) {
      state.modal.titulo = titulo;
    }
  },
  actions: {
    abrirModal(state, payload) {
      state.commit("setModal", payload);
      state.commit("setVisibilidadeModal", true);
    },
    fecharModal(state) {
      let payload = {
        titulo: "",
        subtitulo: "",
        descricao: "",
        visivel: false
      };

      state.commit("setModal", payload);
      state.commit("setVisibilidadeModal", false);
    },
    configurarTokenGoogle(state) {
      state.commit("setVisibilidadeModal", false);
      this.state.isLoading = true;
      //Configuração de Provider
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

      //Execução de Consulta ao Firebase
      firebase
        .auth()
        .signInWithRedirect(provider)
        .then(() => {
          firebase
            .auth()
            .currentUser.getIdToken()
            .then((idToken) => {
              state.commit("setToken", idToken);
              state.commit("setVisibilidadeModal", false);
            })
            .catch(err => {
              window.alert("Erro:", err);
              console.log(err);
            })
            .finally(() => {
              this.state.isLoading = false;
            });
        });
    },
  }
};

export default loginState;
