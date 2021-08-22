<template>
  <modal>
    <div class="modal-titulo">
      <div>
        <strong> Cadastro </strong>
      </div>
      <div>
        <a @click="this.fecharModal">
          <i class="far fa-times-circle" />
        </a>
      </div>
    </div>
    <hr />
    <cadastro-video />
    <hr />
    <cadastro-categoria />
  </modal>
</template>

<script>
import { mapGetters } from "vuex";

import Modal from "./shared/Modal.vue";
import Video from "./forms/Cadastro/Video.vue";
import Categoria from "./forms/Cadastro/Categoria.vue";

export default {
  name: "CadastroVideoModal",
  components: {
    modal: Modal,
    "cadastro-video": Video,
    "cadastro-categoria": Categoria,
  },
  computed: {
    ...mapGetters({
      getModal: "videos/getModal",
    }),
  },
  methods: {
    fecharModal() {
      this.$store.dispatch("cadastroVideo/fecharModal");
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
  padding-top: 3px;
  padding-bottom: 7px;
  font-size: 11pt;
}

span {
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
