<template>
  <el-row :gutter="gutter">
    <div class="title">
      {{ title }}
    </div>
    <el-col :span="n" v-for="(item, k) in result" :key="Math.random()">
      <div class="personalized-list" :title="item.name" @click="songlist(k)">
        <div class="img"><img :src="item.picUrl" /></div>
        <div class="text">{{ item.name }}</div>
        <div class="el-icon-video-play"></div>
        <div class="Playvolume">
          <i class="el-icon-service"></i>
          <span>{{ item.playCount | convert }}</span>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    result: {
      type: Array,
      default() {
        return [];
      },
    },
    n: {
      type: Number,
    },
    gutter: {
      type: Number,
    },
    title: {
      type: String,
    },
  },
  filters: {
    convert(num) {
      if (num > 10000) {
        return parseInt(num / 10000) + "万";
      } else if (num > 1000) {
        return parseInt(num / 1000) + "千";
      } else {
        return num;
      }
    },
  },
  methods: {
    songlist(index) {
      this.$router.push(`/detail${this.result[index].id}`);
    },
  },
};
</script>

<style scoped>
.personalized-list {
  position: relative;
  margin: 0 auto 10px;
  text-align: center;
  border: 1px solid #dcdfe6;
  cursor: pointer;
}
.personalized-list:hover .el-icon-video-play {
  transition: all 1s;
  color: #f56c6c;
}
.personalized-list:hover {
  transition: all 1s;
  color: #f56c6c;
}
.el-icon-video-play {
  position: absolute;
  bottom: 45px;
  right: 30px;
  font-size: 30px;
  color: transparent;
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
  right: 26px;
  color: #fff;
  background-color: #000;
  padding: 2px 3px;
  opacity: 0.7;
}
</style>
