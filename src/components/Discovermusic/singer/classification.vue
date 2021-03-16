<template>
  <div>
    <span>分类：</span>
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
      arr: ["全部", "男歌手", "女歌手", "乐队组合"],
      index: 0,
    };
  },
  methods: {
    change(val) {
      this.index = val;
      this.$emit("change2", this.arr[this.index]);
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
