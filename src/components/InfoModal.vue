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
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
      praesentium pariatur veritatis, non provident rerum voluptate iure dolor
      nulla optio tempore quod nihil earum fugit omnis repellat, ut quae
      suscipit.
    </div>
    <hr />
    <span>
      <a href="https://github.com/rochajario" @click="this.fecharModal" target="_blank">
        <i class="fab fa-github" />
      </a>
    </span>
    <span>
      <a href="https://www.linkedin.com/in/rochajario/" @click="this.fecharModal" target="_blank">
        <i class="fab fa-linkedin-in" />
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