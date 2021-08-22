<template>
  <div class="container">
    <div v-for="categoria in this.getCategorias" :key="categoria.id">
      <carrosel v-bind:titulo="categoria.titulo" v-bind:id="categoria.id"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carrossel from "../components/shared/Carrossel.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    carrosel: Carrossel,
  },
  async mounted() {
    await this.atualizarVideos();
  },
  watch: {
    getToken: {
      async handler(value) {
        console.log("Bearer " + value);
        await this.obterTodosVideos(value);
        console.log("Videos Atualizados");
      },
    },
  },
  computed: {
    ...mapGetters({
      getCategorias: "videos/getCategorias",
      getToken: "login/getToken",
    }),
  },
  methods: {
    async atualizarVideos() {
      await this.$store.dispatch("videos/httpGetVideos");
    },
    async obterTodosVideos(token) {
      await this.$store.dispatch("videos/httpGetVideosAll", token);
      await this.$store.dispatch("videos/httpGetCategorias", token);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.filmes-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.box-video {
  margin-bottom: 15px;
  margin-left: 7.5px;
  margin-right: 7.5px;
}
</style>