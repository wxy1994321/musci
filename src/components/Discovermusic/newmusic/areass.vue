<template>
  <div>
    <span
      v-for="(item, i) in arr"
      @click="change2(i)"
      :class="{ color: index == i }"
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["全部", "华语", "欧美", "韩国", "日本"],
      index: 0,
    };
  },
  methods: {
    change2(i) {
      this.index = i;
      this.$emit("change2", this.arr[this.index]);
    },
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  padding: 10px 10px;
  font-size: 14px;
  cursor: pointer;
}
div {
  border-bottom: 1px solid #dcdfe6;
}
.color {
  color: #f56c6c;
}
</style>
