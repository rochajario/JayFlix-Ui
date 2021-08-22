<template>
  <div class="cabecalho mutacao">
    <nav class="navegacao">
      <div><h1>Jayflix</h1></div>
      <div class="controles">
        <busca v-if="this.menu.visivel" />
        <btn-click v-if="this.menu.visivel" :icone="this.icone_info" @isClicked="this.btnInfoAction"/>
        <btn-click :icone="this.menu.icone" @isClicked="this.btnMenuAction"/>
      </div>
    </nav>
  </div>
</template>

<script>
import Busca from "./Busca.vue";

import { mapGetters } from "vuex";
import BtnClick from "./shared/BtnClick.vue";

export default {
  name: "Cabecalho",
  data() {
    return {
      menu:{
        visivel:0,
        icone:"fas fa-bars"
      },
      icone_add: "fas fa-plus",
      icone_info:"fas fa-info"
    };
  },
  components: {
    busca: Busca,
    BtnClick,
  },
  computed: {
    ...mapGetters({
      getToken: "login/getToken",
    }),
  },
  methods: {
    btnMenuAction(value){
      if(!value){
        this.toggleMenu();
      }
    },
    toggleMenu(){
      this.menu.visivel = !this.menu.visivel;
    },
    btnInfoAction(value){
      if(!value){
        this.$store.dispatch("toggleInfoModal");
      }
    },
    abrirModalCadastroVideo() {
      if (!this.getToken) {
        this.abrirModalLogin();
        return;
      }
      this.$store.dispatch("cadastroVideo/abrirModal");
    },
    abrirModalLogin() {
      let payload = {
        titulo: "Faça Login",
        subtitulo: "Autênticação Necessária",
        descricao: "A operação desejada é permitida apenas à usuários logados.",
      };
      this.$store.dispatch("login/abrirModal", payload);
    },
  },
};
</script>

<style>

.controles div {
  margin: 5px;
  padding: 10px;
}
.controles {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.navegacao {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 25px;
  margin-right: 25px;
}

.navegcacao div {
  padding: 15px;
}
.navegacao strong {
  font-size: 18pt;
}

.cabecalho {
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: rgba(26, 25, 25, 0.938);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.mutacao {
  background-color: transparent;
  opacity: 0.8;
}

.mutacao:hover {
  -webkit-animation: fadein 0.8s linear 1 normal forwards;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  background-color: rgba(26, 25, 25, 0.178);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.342);
}

@-webkit-keyframes fadein {
  from {
    opacity: 0.9;
  }
  to {
    opacity: 1;
  }
}

input {
  padding: 7px;
  border-radius: 15px;
  background-color: #ffffffa2;
  border: transparent;
}
</style>
