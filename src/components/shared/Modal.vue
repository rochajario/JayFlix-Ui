<template>
  <div class="modal-view">
    <div class="container-modal">
      <div class="modal">
        <slot>
          <!--Conteúdo Injetato pelo Vue.Js-->
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.container-modal {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  position: relative;
}

.modal {
  padding: 15px;
  text-align: center;
  margin-top: 0;
  margin-left: 7.5px;
  margin-right: 7.5px;
  margin-bottom: 15px;
  width: 20%;
  min-width: 220px;
  border-radius: 5px;
  background-image: linear-gradient(#b8b5b5ce, rgba(85, 84, 84, 0.829));
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5), 0 4px 10px 0 rgba(0, 0, 0, 0.5);
}
</style>