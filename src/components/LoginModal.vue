<template>
  <modal>
    <div class="modal-titulo">
      <div>
        <strong>
          {{ this.getModal.titulo }}
        </strong>
      </div>
      <div>
        <a @click="this.fechar">
          <i class="far fa-times-circle" />
        </a>
      </div>
    </div>
    <hr />
    <h3>
      {{ this.getModal.subtitulo }}
    </h3>
    <div class="conteudo">
      {{ this.getModal.descricao }}
    </div>
    <span>
      <a @click="configToken">
        <i class="fab fa-google fa-2x"/>
      </a>
    </span>
  </modal>
</template>

<script>
import Modal from "./shared/Modal.vue";
import { mapGetters } from "vuex";

export default {
  name: "Modal",
  components: {
    modal: Modal,
  },
  data() {
    return {
      iconeGoogle: "fab fa-google",
    };
  },
  computed: {
    ...mapGetters({
      getModal: "login/getModal",
    }),
  },
  methods: {
    configToken() {
      this.$store.dispatch("login/configurarTokenGoogle");
    },
    modal() {
      return this.obterModal.exibir.login;
    },
    fechar() {
      this.$store.dispatch("login/fecharModal");
    },
  },
};
</script>

<style scoped>
.modal-titulo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 15pt;
  color: rgb(243, 243, 243);
}
.conteudo {
  font-size: 11pt;
  margin-bottom: 15px;
}
</style>
