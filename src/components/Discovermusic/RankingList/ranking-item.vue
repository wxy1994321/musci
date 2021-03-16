<template>
  <div class="ranking-item">
    <div class="title">排行榜</div>
    <el-row :gutter="80">
      <el-col :span="6" v-for="(item, index) in list">
        <div class="item" :title="item.description" @click="detail(index)">
          <div class="img">
            <img :src="item.coverImgUrl" alt="" />
          </div>
          <div class="text">{{ item.name }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    detail(index) {
      this.$router.push(`/detail${this.list[index].id}`);
    },
  },
};
</script>

<style scoped>
.title {
  padding: 20px 0;
  border-bottom: 1px solid #dcdfe6;
}
.el-row {
  margin-top: 30px;
}
.item {
  height: 200px;
  border: 1px solid #dcdfe6;
  margin-bottom: 20px;
  cursor: pointer;
}
.img {
  height: 160px;
  width: 100%;
}
.img > img {
  width: 100%;
  height: 100%;
}
.text {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}
</style>
