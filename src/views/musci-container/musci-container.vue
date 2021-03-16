<template>
  <div class="container">
    <music-header></music-header>
    <music-main></music-main>
    <music-footer></music-footer>
  </div>
</template>

<script>
import musicHeader from "../musci-header/musci-header";
import musicMain from "../musci-main/musci-main";
import musicFooter from "../musci-footer/musci-footer";

export default {
  data() {
    return {};
  },
  components: {
    musicHeader,
    musicMain,
    musicFooter,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column
}
</style>
