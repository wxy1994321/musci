<template>
  <div>
    <div class="title">
      独家放送
    </div>
    <el-row :gutter="80">
      <el-col
        :span="8"
        v-for="(item, k) in privatecontentlist"
        :key="Math.random()"
      >
        <div class="personalized-list" :title="item.name" @click="songlist(k)">
          <div class="img"><img :src="item.picUrl" /></div>
          <div class="text">{{ item.name }}</div>
          <div class="el-icon-video-play"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    privatecontentlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    songlist(index) {
      this.$router.push(`/detail${this.privatecontentlist[index].id}`);
    },
  },
};
</script>

<style scoped>
.personalized-list {
  position: relative;
  margin: 0 auto 10px;
  text-align: center;
  cursor: pointer;
}
.el-icon-video-play {
  position: absolute;
  bottom: 45px;
  right: 10px;
  font-size: 30px;
  color: transparent;
}
.personalized-list:hover .el-icon-video-play {
  transition: all 1s;
  color: #f56c6c;
}
.personalized-list:hover {
  transition: all 1s;
  color: #f56c6c;
}
.title {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #dcdfe6;
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
  padding: 10px 10px 0;
}
img {
  padding-top: 10px;
  height: 100%;
  width: 100%;
}
.right {
  position: absolute;
  right: 0px;
  bottom: 14px;
  font-size: 13px;
  cursor: pointer;
}
.right:hover {
  color: #f56c6c;
}
.el-icon-arrow-right {
  position: relative;
  font-size: 13px;
}
.el-icon-service {
  margin-right: 5px;
}
.Playvolume {
  position: absolute;
  font-size: 11px;
  top: 10px;
  right: 28px;
  color: #fff;
  background-color: #000;
  padding: 2px 3px;
  opacity: 0.7;
}
</style>
