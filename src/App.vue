<template>
  <div id="app">
    <div id="nav">
      <cabecalho />
    </div>
    <router-view />
    <cadastro-video v-if="this.getModalCadastroVideo.visivel" />
    <video-modal v-if="this.getModalVideo.visivel" />
    <info-modal v-if="this.getModalInfo" />
    <login-modal v-if="this.getModalLogin.visivel" />
    <loader v-if="this.getLoader" />
  </div>
</template>

<script>
// @ is an alias to /src
import Loader from "./components/Loader.vue";
import LoginModal from "./components/LoginModal.vue";
import Cabecalho from "./components/Cabecalho.vue";
import VideoModal from "./components/VideoModal.vue";
import CadastroVideoModal from "./components/CadastroVideoModal.vue";
import InfoModal from "./components/InfoModal.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    loader: Loader,
    "login-modal": LoginModal,
    "cadastro-video": CadastroVideoModal,
    "video-modal": VideoModal,
    "info-modal": InfoModal,
    cabecalho: Cabecalho,
  },
  mounted() {
    this.configuraModalDeLogin();
  },
  computed: {
    ...mapGetters({
      getLoader: "getLoader",
      getToken: "login/getToken",
      getModalLogin: "login/getModal",
      getModalVideo: "videos/getModal",
      getModalCadastroVideo: "cadastroVideo/getModal",
      getModalInfo: "isInfoModalVisivel",
    })
  },
  methods: {
    configuraModalDeLogin() {
      if (this.getToken == "") {
        let acessoInicial = {
          titulo: "Login",
          subtitulo: "Boas Vindas!",
          descricao:
            "Faça login com sua conta Google para obter uma experência completa.",
          visivel: true,
        };
        this.$store.dispatch("login/abrirModal", acessoInicial);
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(./assets/bg.jpg);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c8cfd6;
}
a {
  font-weight: bold;
  color: #ffffffa2;
}
a :hover {
  font-weight: bold;
  color: #ffffff;
}
</style>
