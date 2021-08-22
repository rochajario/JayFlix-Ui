<template>
  <div v-if="this.getAreaBusca" class="area-de-busca">
    <div class="cabecalho">
      <div>
        <strong>Busca</strong>
      </div>
      <div>
        <a @click="this.fecharBusca"><i class="far fa-times-circle fa-2x" /></a>
      </div>
    </div>
    <carousel-3d
      :disable3d="true"
      :width="248"
      :height="348"
      :perspective="0"
      :display="5"
      :space="300"
      :clickable="false"
      :controls-visible="false"
      :count="this.getVideos.length"
    >
      <slide v-for="(filme, i) in this.getVideos" :index="i" :key="i">
        <box-filme
          v-bind:id="filme.id"
          v-bind:titulo="filme.titulo"
          v-bind:descricao="filme.descricao"
          v-bind:url="filme.url"
          v-bind:categoria="filme.categoria"
          class="box-video"
        />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import BoxFilme from "../components/BoxFilme.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "box-filme": BoxFilme,
    "carousel-3d": Carousel3d,
    slide: Slide,
  },
  computed: {
    ...mapGetters({
      getVideos: "videos/getVideos",
      getAreaBusca: "videos/getAreaBusca",
    })
  },
  methods:{
      fecharBusca(){
          this.$store.commit("videos/setAreaDeBusca",false);
      }
  }
};
</script>

<style scoped>
.area-de-busca {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 25px;
  margin-right: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: rgba(26, 25, 25, 0.178);
  border-radius: 10px;
}
.cabecalho {
  margin: 0;
  padding: 0;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
}
.cabecalho div {
  padding-left: 15px;
  padding-right: 15px;
}
strong {
  font-size: 18pt;
}
.carousel-3d-container {
  margin-top: 0;
}
.carousel-3d-slide {
  margin: 0;
  width: 250px;
  height: 350px;
  border-radius: 5px;
  border: transparent;
  background-color: transparent;
  box-shadow: 1.5px 1.5px 2.5px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.87);
}
</style>