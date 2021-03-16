<template>
  <div class="center">
    <div>
      <i class="el-icon-arrow-left" @click="back" title="后退"></i>
      <i class="el-icon-refresh" @click="refresh" title="刷新"></i>
      <el-input
        placeholder="请输入内容"
        v-model="input"
        size="small"
        suffix-icon="el-icon-search"
        @change="search"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    refresh() {
      location.reload();
    },
    search(string) {
      if (string) {
        this.$router.push(`/search${string}`);
        this.input = "";
      }
    },
  },
};
</script>

<style scoped>
.center {
  line-height: 80px;
  position: relative;
}
i {
  font-size: 20px;
  color: #fff;
  position: relative;
  top: 2px;
  cursor: pointer;
}
i:first-of-type {
  margin: 0 10px;
}
.el-input {
  margin-left: 30px;
  width: 400px;
}
</style>
