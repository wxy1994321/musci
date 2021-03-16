<template>
  <div class="main">
    <musci-left></musci-left>
    <musci-right></musci-right>
  </div>
</template>

<script>
import musciLeft from "./main-chinren/musci-left";
import musciRight from "./main-chinren/musci-right";
export default {
  data() {
    return {};
  },
  components: {
    musciLeft,
    musciRight,
  },
};
</script>

<style scoped>
.main {
  height: 640px;
  background-color: rgb(238, 241, 246);
  display: flex;
}
</style>
