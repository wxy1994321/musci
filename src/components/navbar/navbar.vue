<template>
  <div class="navbar">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :default-active="activeIndex"
    >
      <el-menu-item
        v-for="(item, i) in list"
        :index="i.toString()"
        @click="itemclick(i)"
        >{{ item }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["个性推荐", "歌单", "排行榜", "歌手", "最新音乐"],
      activeIndex: "0",
    };
  },
  methods: {
    itemclick(i) {
      this.$emit("itemclick", i);
    },
  },
};
</script>
<style scoped>
.navbar {
  position: relative;
  text-align: center;
}
.el-menu-demo {
  display: inline-block;
}
</style>
