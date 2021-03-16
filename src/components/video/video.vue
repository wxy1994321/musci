<template>
  <div>
    <div class="title">
      网易出品mv
    </div>
    <div class="mv-item">
      <mv-item :mv="mv"></mv-item>
    </div>
  </div>
</template>

<script>
//api
import { exclusive_mv } from "network/mv";

//组件
import mvItem from "./mv-item";
export default {
  data() {
    return {
      mv: [],
    };
  },
  created() {
    exclusive_mv().then((res) => {
      this.mv = res.data.data;
    });
  },
  methods: {},
  components: {
    mvItem,
  },
};
</script>

<style scoped>
.title {
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #f56c6c;
  text-align: center;
  letter-spacing: 1px;
  padding-bottom: 30px;
  border-bottom: 1px solid #dcdfe6;
}
.mv-item {
  margin-top: 30px;
}
</style>
