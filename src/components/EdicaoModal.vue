<template>
  <modal>
    <div class="modal-titulo">
      <div>
        <strong> Edição </strong>
      </div>
      <div>
        <a @click="this.fecharModal">
          <i class="far fa-times-circle" />
        </a>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "./shared/Modal.vue";
export default {
  components: {
    modal: Modal,
  },
};
</script>

<style>
</style>