<template>
  <div class="searchBox">
    <button v-on:click="this.isClicked" class="button">
      <i v-bind:class="this.icone" />
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnClick",
  props: {
    icone: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    toggle() {
      this.clicked = !this.clicked;
      if (this.clicked) {
        this.isClicked();
      }
    },
    isClicked: function () {
      this.$emit("isClicked", this.clicked);
      this.toggle();
    },
  },
};
</script>

<style scoped>
.searchBox {
  margin-top: 2px;
  margin-bottom: 2px;
  background: #2f3640;
  height: 28px;
  border-radius: 28px;
}
.button {
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
.button:hover {
  color: #2f3640;
  float: right;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}
</style>