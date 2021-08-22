import Vue from 'vue';
import Vuex from 'vuex';

import axios from "axios";

import constants from "../Constants"

Vue.use(Vuex);

const cadastroVideoState = {
    namespaced: true,
    state: {
        modal: {
            titulo: "",
            visivel: false
        }
    },
    getters: {
        getModal(state) {
            return state.modal;
        }
    },
    mutations: {
        setVisibilidadeModal(state, value) {
            state.modal.visivel = value;
        },
        setTituloModal(state, titulo) {
            state.modal.titulo = titulo;
        }
    },
    actions: {
        setTituloModal(state, titulo) {
            state.commit("setTituloModal", titulo);
        },
        fecharModal(state) {
            state.commit("setVisibilidadeModal", false);
        },
        abrirModal(state) {
            state.commit("setVisibilidadeModal", true);
        },
        async cadastrarNovoVideo(state,payload) {
            this.state.isLoading = true;
            await axios
                .create({
                    baseURL: constants.baseUrl,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + this.state.login.token,
                    },
                })
                .post("videos", payload)
                .then(res => {
                    this.state.videos.videos.push(res.data);
                })
                .catch((err) => {
                    console.log(err.response);
                })
                .finally(() => {
                    this.state.isLoading = false;
                });
        },
        async cadastrarNovaCategoria(state,payload) {
            this.state.isLoading = true;
            await axios
                .create({
                    baseURL: constants.baseUrl,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + this.state.login.token,
                    },
                })
                .post("videos", payload)
                .then(res => {
                    this.state.categoria.categorias.push(res.data);
                })
                .catch((err) => {
                    console.log(err.response);
                })
                .finally(() => {
                    this.state.isLoading = false;
                });
        }
    }
};

export default cadastroVideoState;