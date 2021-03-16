<template>
  <div>
    <el-row :gutter="80">
      <el-col :span="6" v-for="item in artists">
        <div class="singer" @click="sing(item)" :key="item.id">
          <div class="img">
            <img :src="item.img1v1Url" alt="" />
          </div>
          <div class="text">
            {{ item.name }}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    artists: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    sing(item) {
      this.$router.push(`/album${item.id}`);
    },
  },
};
</script>

<style scoped>
.singer {
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid #dcdfe6;
  padding: 10px 10px 0;
  cursor: pointer;
}
.img {
  height: 160px;
}
.text {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #f56c6c;
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
}
</style>
