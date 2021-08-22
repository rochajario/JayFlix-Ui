<template>
  <div class="card">
    <span>
      <h3>{{ this.titulo }}</h3>
    </span>
    <span>
      <a @click="setVideo">
        <i class="fas fa-play-circle fa-3x" />
      </a>
    </span>
    <span>
      <em>
        {{ this.descricao }}
      </em>
    </span>
    <div class="rodape">
      <span v-bind:style="{ color: this.categoria.cor }">
        <strong>{{ this.categoria.titulo }}</strong>
      </span>
      <div class="controles">
        <span>
          <a>
            <i class="fas fa-edit" />
          </a>
        </span>
        <span>
          <a @click="confirmaDeleta()">
            <i class="fas fa-trash-alt" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ContainerFilmes",
  props: {
    id: Number,
    titulo: String,
    descricao: String,
    url: String,
    categoria: Object,
  },
  data() {
    return {
      video: {
        titulo: this.titulo,
        url: this.url,
      },
    };
  },
  computed: {
    ...mapActions(["videos/abrirModal"]),
  },
  methods: {
    setVideo() {
      this.$store.dispatch("videos/abrirModal", this.video);
    },
    confirmaDeleta(){
      if(window.confirm("Tem certeza que deseja excluir este item? ")){
        this.$store.dispatch("videos/deleteVideo", this.id);
      }
    }
  },
};
</script>

<style>
.card {
  margin: 0;
  width: 252px;
  height: 352px;
  background-image: linear-gradient(#cfcacaab, rgba(2, 6, 36, 0.719));
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.555);
  text-align: center;
}
.titulo {
  padding: 5px;
}
.background {
  position: absolute;
}
.sobreposicao {
  position: absolute;
}
.rodape {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.controles {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>