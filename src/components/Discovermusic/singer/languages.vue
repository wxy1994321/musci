<template>
  <div>
    <span>语种：</span>
    <span
      v-for="(item, i) in arr"
      :key="i"
      class="item"
      :class="{ color: index == i }"
      @click="change(i)"
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["全部", "华语", "欧美", "日本", "韩国", "其他"],
      index: 0,
    };
  },
  methods: {
    change(val) {
      this.index = val;
      this.$emit("change1", this.arr[this.index]);
    },
  },
};
</script>

<style scoped>
span {
  font-size: 14px;
}
.item {
  margin: 0 10px;
  display: inline-block;
  cursor: pointer;
}
.color {
  color: #f56c6c;
}
</style>
