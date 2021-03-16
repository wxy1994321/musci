<template>
  <div class="description-div" :key="Math.random()">
    <el-row>
      <el-col :span="5"
        ><div>
          <img :src="description.coverImgUrl" alt="" class="avatarUrl" /></div
      ></el-col>
      <el-col :span="17" :offset="1">
        <div class="song-title">
          <el-tag>歌单</el-tag>
          <span class="description-name">{{ description.name | str }}</span>
          <div class="trackCount">
            <el-tag type="danger">歌曲数：{{ description.trackCount }}</el-tag>
            <el-tag type="danger">播放数：{{ description.playCount }}</el-tag>
          </div>
        </div>
        <div class="description-coverImgUrl">
          <el-avatar :src="description.avatarUrl"></el-avatar>
          <span class="description-nickname">{{ description.nickname }}</span>
          <span class="description-birthday"
            >{{ description.createTime | format }} 创建</span
          >
        </div>
        <div class="buttons">
          <el-button icon="el-icon-star-off" type="primary" size="small"
            >收藏 {{ description.subscribedCount }}</el-button
          >
          <el-button icon="el-icon-video-play" size="small"
            >批量操作</el-button
          >
          <el-button icon="el-icon-s-promotion" size="small"
            >分享 {{ description.shareCount }}</el-button
          >
          <el-button icon="el-icon-bottom" size="small">下载全部</el-button>
        </div>

        <div class="tags">
          标签:<span
            class="description-tags"
            v-for="item in description.tags"
            >{{ item }}</span
          >
        </div>
        <div class="introduction" :title="description.description">
          简介:{{ description.description }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
  filters: {
    format(str) {
      const date = new Date(str);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      return `${y}-${m}-${d}`;
    },
    str(str) {
      if (str) {
        if (str.length > 25) {
          str = str.slice(0, 25) + "...";
          return str;
        } else {
          return str;
        }
      }
    },
  },
};
</script>

<style scoped>
.avatarUrl {
  width: 100%;
}
.description-name {
  margin-left: 20px;
}
.description-coverImgUrl {
  margin-top: 19px;
  position: relative;
}
.description-nickname {
  position: relative;
  bottom: 14px;
  left: 10px;
  font-size: 13px;
  color: #409eff;
  cursor: pointer;
}
.description-birthday {
  position: relative;
  bottom: 14px;
  left: 20px;
  font-size: 13px;
}
.buttons {
  margin-top: 18px;
}
.tags {
  font-size: 13px;
  margin-top: 19px;
}
.description-tags {
  color: #409eff;
  margin-left: 10px;
  cursor: pointer;
}
.introduction {
  margin-top: 19px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.song-title {
  position: relative;
}
.trackCount {
  position: absolute;
  right: 0;
  top: 0;
}
.trackCount > span {
  margin: 0 5px;
}
</style>
