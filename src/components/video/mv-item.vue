<template>
  <div class="mv-item">
    <el-row :gutter="80">
      <el-col :span="6" v-for="(item, k) in mv" :key="Math.random()">
        <div class="mv-list" :title="item.name" @click="video(item)">
          <div class="img"><img :src="item.cover" /></div>
          <div class="text">{{ item.name }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    mv: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    video({ id }) {
      this.$router.push(`/mv${id}`);
    },
  },
};
</script>

<style scoped>
.mv-list {
  position: relative;
  margin: 0 auto 15px;
  height: 200px;
  border: 1px solid #dcdfe6;
  text-align: center;
  cursor: pointer;
}
.title {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #dcdfe6;
  position: relative;
}
.img {
  height: 160px;
}
.text {
  font-size: 13px;
  height: 40px;
  line-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
}
img {
  padding-top: 10px;
  height: 90%;
  width: 90%;
}
.right {
  position: absolute;
  right: 0px;
  bottom: 14px;
  font-size: 13px;
  cursor: pointer;
}
.el-icon-arrow-right {
  position: relative;
  font-size: 13px;
}
.el-icon-service {
  margin-right: 5px;
}
</style>
