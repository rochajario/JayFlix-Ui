<template>
  <div class="container">
    <div class="titulo">
      <span>
        <strong>{{ this.titulo }}</strong>
      </span>
    </div>

    <carousel-3d
      :width="248"
      :height="348"
      :perspective="0"
      :display="3"
      :space="420"
      :clickable="false"
      :controls-visible="true"
      :count="this.videos.length"
    >
      <slide v-for="(filme, i) in this.videos" :index="i" :key="i">
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
import constants from "../../store/Constants";
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";
import { Carousel3d, Slide } from "vue-carousel-3d";
import BoxFilme from "../BoxFilme.vue";

export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    id: Number,
  },
  data() {
    return {
      videos: [],
    };
  },
  components: {
    "box-filme": BoxFilme,
    "carousel-3d": Carousel3d,
    slide: Slide,
  },
  computed: {
    ...mapGetters({
      getToken: "login/getToken",
    }),
    ...mapMutations({
      setLoader: "setLoader",
    }),
  },
  methods: {
    obterVideos() {
      return this.getVideos;
    },
    async httpGetVideosAll() {
      await axios
        .create({
          baseURL: constants.baseUrl,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.getToken,
          },
        })
        .get("categorias/" + this.id + "/videos")
        .then((promise) => promise.data)
        .then((videos) => (this.videos = videos))
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.httpGetVideosAll();
  },
};
</script>

<style scoped>
.titulo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 0;
  margin-left: 25px;
  margin-right: 15px;
}
.titulo span {
  color: white;
  text-shadow: 1.5px 2px 3.5px rgba(0, 0, 0, 0.589);
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
