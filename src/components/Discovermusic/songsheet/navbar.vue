<template>
  <div class="navbar">
    <ul>
      <li>热门标签：</li>
      <li
        v-for="(item, index) in tags"
        :key="index"
        @click="tagsclick(index)"
        :class="{ color: index == i }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
    };
  },
  props: {
    tags: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tagsclick(index) {
      this.i = index;
      this.$emit('tagsclick',index)
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
}
li:first-of-type {
  cursor: default;
}
li {
  font-size: 13px;
  padding: 5px 10px;
  margin-right: 15px;
  cursor: pointer;
}
.color {
  color: #f56c6c;
}
</style>
