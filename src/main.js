import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import firebase from 'firebase/app';
import Carousel3d from 'vue-carousel-3d';

const firebaseConfig = {
  apiKey: "AIzaSyBE3Z82kqekt3TPZcTLO-3EUW0JQN6KmfE",
  authDomain: "aluraflix-api.firebaseapp.com",
  projectId: "aluraflix-api",
  storageBucket: "aluraflix-api.appspot.com",
  messagingSenderId: "782101756479",
  appId: "1:782101756479:web:d8cf4b25cfe0dcee81168a"
  };

Vue.config.productionTip = false;
firebase.initializeApp(firebaseConfig);

Vue.use(Carousel3d);

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
