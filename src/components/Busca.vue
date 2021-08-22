<template>
  <div class="searchBox">
    <input
      class="searchInput"
      type="text"
      name=""
      placeholder="Pesquisar"
      v-on:input="realizaBusca($event.target.value)"
    />
    <button class="searchButton" href="#">
      <i class="fas fa-search" />
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Busca",
  computed: {
    ...mapGetters({
      getToken: "login/getToken",
    }),
  },
  methods: {
    realizaBusca(search) {
      if (!this.getToken) {
        if(search ==""){
          return;
        }
        let logarParaBuscar = {
          titulo: "Login Necessário",
          subtitulo: "Faça login para realizar buscas que retornem todos os vídeos disponíveis.",
          descricao:"",
        };
        this.$store.dispatch("login/abrirModal", logarParaBuscar);
        return;
      }
      this.$store.dispatch("videos/httpGetSearch",search);
    },
  },
};
</script>

<style>
.searchBox {
  margin-top: 2px;
  margin-bottom: 2px;
  background: #2f3640;
  height: 28px;
  border-radius: 28px;
}

.searchBox:hover > .searchInput {
  width: 250px;
  padding: 0 8px;
}

.searchBox:hover > .searchButton {
  background-color: white;
  color: #2f3640;
}

.searchButton {
  color: #ffffffa2;
  float: right;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}

.searchInput {
  border: none;
  outline: none;
  float: left;
  padding: 0;
  background: #2f364031;
  color: rgba(241, 233, 233, 0.74);
  font-size: 13px;
  transition: 0.4s;
  line-height: 28px;
  width: 0px;
}

@media screen and (max-width: 620px) {
  .searchBox:hover > .searchInput {
    width: 150px;
    padding: 0 6px;
    background: #2f364031;
  }
}
</style>