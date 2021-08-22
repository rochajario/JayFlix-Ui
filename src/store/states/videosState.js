import Vue from 'vue';
import Vuex from 'vuex';
import constants from '../Constants';

import axios from "axios";

Vue.use(Vuex);

const videosState = {
    namespaced: true,
    state: {
        areaBuscaVisivel:false,
        videos: [],
        categorias: [],
        modalVideo: {
            titulo: "",
            url: "",
            visivel: false
        }
    },
    getters: {
        getAreaBusca(state){
            return state.areaBuscaVisivel;
        },
        getVideos(state) {
            return state.videos;
        },
        getCategorias(state) {
            return state.categorias;
        },
        getModal(state) {
            return state.modalVideo;
        }
    },
    mutations: {
        setAreaDeBusca(state,value){
            state.areaBuscaVisivel = value;
        },
        setVideos(state, value) {
            state.videos = value;
        },
        setCategorias(state, value) {
            state.categorias = value;
        },
        abrirModal(state, payload) {
            state.modalVideo.titulo = payload.titulo;
            state.modalVideo.url = payload.url;
            state.modalVideo.visivel = true;
        },
        fecharModal(state) {
            state.modalVideo.titulo = "";
            state.modalVideo.url = "";
            state.modalVideo.visivel = false;
        }
    },
    actions: {
        abrirModal(state, payload) {
            state.commit("abrirModal", payload);
        },
        fecharModal(state) {
            state.commit("fecharModal");
        },
        async httpGetVideos(state) {
            if (!this.state.login.token) {
                await axios
                    .create({
                        baseURL: constants.baseUrl,
                        headers: {
                            "Content-Type": "application/json"
                        },
                    })
                    .get("videos/free")
                    .then((res) => res.data)
                    .then(videos => state.commit("setVideos", videos))
                    .catch((err) => {
                        window.alert(err);
                    });
            }
            else {
                await axios
                    .create({
                        baseURL: constants.baseUrl,
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + this.state.login.token,
                        },
                    })
                    .get("videos")
                    .then((get) => get.data)
                    .then(promise => promise.data)
                    .then(videos => state.commit("setVideos", videos))
                    .catch((err) => {
                        window.alert(err);
                    });
            }
        },
        async httpGetVideosAll(state, token) {
            await axios
                .create({
                    baseURL: constants.baseUrl,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token,
                    },
                })
                .get("videos")
                .then(promise => promise.data)
                .then(videos => state.commit("setVideos", videos))
                .catch((err) => {
                    window.alert(err);
                });
        },
        async httpGetCategorias(state, token) {
            console.log("cria categoria");
            await axios
                .create({
                    baseURL: constants.baseUrl,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token,
                    },
                })
                .get("categorias?page=0")
                .then(promise => promise.data)
                .then(categorias => state.commit("setCategorias",categorias))
                .catch((err) => {
                    window.alert(err);
                });
        },

        async httpGetSearch(state, search) {
            this.state.isLoading = true;
            await axios
                .create({
                    baseURL: constants.baseUrl,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + this.state.login.token,
                    },
                })
                .get("videos?search=" + search + "&page=0")
                .then(res => res.data)
                .then(videos => state.commit("setVideos", videos))
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    this.state.isLoading = false;
                });
        }
    }
}

export default videosState;