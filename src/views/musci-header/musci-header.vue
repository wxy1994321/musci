<template>
  <div class="header">
    <div class="left"><head-left></head-left></div>
    <div class="center"><head-center></head-center></div>
    <div class="right"><head-right></head-right></div>
  </div>
</template>

<script>
import headLeft from "./header-children/left";
import headCenter from "./header-children/center";
import headRight from "./header-children/right";
export default {
  components: {
    headLeft,
    headCenter,
    headRight,
  },
};
</script>

<style scoped>
.header {
  height: 80px;
  background-color: #f56c6c;
  display: flex;
}
.left {
  flex: 3;
}
.right {
  flex: 4;
}
.center {
  flex: 4;
}
</style>
