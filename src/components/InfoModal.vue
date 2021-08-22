<template>
  <modal>
    <div class="modal-titulo">
      <div>
        <strong> Informações </strong>
      </div>
      <div>
        <a @click="this.fecharModal">
          <i class="far fa-times-circle" />
        </a>
      </div>
    </div>
    <hr />
    <div>
      Uma UI de desenvolvida com ❤️ especialmente para consumo da Jayflix-Api
      com uma abordagem 'learn-by-doing' com princípios SOLID em mente.
      <br/>
      <img width="120px" heigth="120px" src="../assets/Badge_AluraFlix.png"/>
    </div>
    <hr />
    <span>
      <a
        href="https://github.com/rochajario"
        @click="this.fecharModal"
        target="_blank"
      >
        <i class="fab fa-github fa-2x" />
      </a>
    </span>
    <span>
      <a
        href="https://www.linkedin.com/in/rochajario/"
        @click="this.fecharModal"
        target="_blank"
      >
        <i class="fab fa-linkedin-in fa-2x" />
      </a>
    </span>
  </modal>
</template>

<script>
import Modal from "./shared/Modal.vue";

export default {
  name: "InfoModal",
  components: {
    Modal,
  },
  methods: {
    fecharModal() {
      this.$store.dispatch("toggleInfoModal");
    },
  },
};
</script>

<style>
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