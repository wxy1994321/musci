<template>
  <div id="app">
    <musci-container></musci-container>
  </div>
</template>

<script>
import musciContainer from "views/musci-container/musci-container";

export default {
  components: {
    musciContainer,
  },
};
</script>

<style>
#app {
  width: 1350px;
  height: 800px;
  margin: 30px auto 0;
}
html {
  background: url("./assets/img/bg.png");
  background-size: 100%;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #F56C6C;
  border-radius: 5px;
}
::-webkit-scrollbar-button {
  background-color: #eee;
  display: none;
}
</style>
