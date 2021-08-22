<template>
  <div id="preloader">
    <div class="container-modal">
      <div class="modal">
        <div class="modal-titulo">
          <span>
            <strong>{{ this.getModal.titulo }}</strong>
          </span>
          <span>
            <a @click="this.fecharModal">
              <i class="far fa-times-circle" />
            </a>
          </span>
        </div>
        <video
          v-if="this.getModal.url != ''"
          v-bind:src="this.getModal.url"
          type="video/mp4"
          controls
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "VideoModal",
  computed: {
    ...mapActions({
      fecharModalVideo: "videos/fecharModal",
    }),
    ...mapGetters({
      getModal: "videos/getModal",
    }),
  },
  methods: {
    fecharModal() {
      this.fecharModalVideo;
    },
  },
};
</script>

<style scoped>
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-modal {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.modal {
  padding: 5px;
  text-align: center;
  margin-top: 0;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: rgba(18, 19, 19, 0.623);
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5), 0 4px 10px 0 rgba(0, 0, 0, 0.5);
}

.modal-titulo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 12pt;
  color: rgb(195, 205, 211);
}
</style>