<template>
  <div id="preloader">
    <div id="loader"></div>
  </div>
</template>

<style>
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  margin: -75px 0 0 -75px;
  border-radius: 60%;
  border: 3px solid transparent;
  border-top-color: #4384af7e;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
#loader:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 70%;
  border: 3px solid transparent;
  border-top-color: #5590d381;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
#loader:after {
  content: "";
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  border-radius: 80%;
  border: 3px solid transparent;
  border-top-color: #2a6fc98e;
  -webkit-animation: spin .5s linear infinite;
  animation: spin 1s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>