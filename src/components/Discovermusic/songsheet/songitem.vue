<template>
  <div class="songitem">
    <el-row :gutter="gutter">
      <el-col
        :span="index"
        v-for="(item, k) in personalizedlist"
        :key="Math.random()"
      >
        <div class="personalized-list" :title="item.name" @click="songlist(k)">
          <div class="img"><img :src="item.coverImgUrl" /></div>
          <div class="text">{{ item.name }}</div>
          <div class="el-icon-video-play"></div>
          <div class="Playvolume">
            <i class="el-icon-service"></i>
            <span>{{ item.playCount | convert }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    personalizedlist: {
      type: Array,
      default() {
        return [];
      },
    },
    index: {
      type: Number,
    },
    gutter: {
      type: Number,
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
      this.$router.push(`/detail${this.personalizedlist[index].id}`);
    },
  },
};
</script>

<style scoped>
.personalized-list {
  position: relative;
  margin: 0 auto 15px;
  height: 200px;
  border: 1px solid #dcdfe6;
  text-align: center;
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
  bottom: 50px;
  right: 18px;
  font-size: 30px;
  color: transparent;
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
  right: 10px;
  color: #fff;
  background-color: #000;
  padding: 2px 3px;
  opacity: 0.7;
}
</style>
