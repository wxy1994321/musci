<template>
  <div>
    <span>筛选：</span>
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
      arr: [
        "热门",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      index: 0,
    };
  },
  methods: {
    change(val) {
      this.index = val;
      this.$emit("change3", this.arr[this.index]);
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
