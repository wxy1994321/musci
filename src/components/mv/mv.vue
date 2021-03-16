<template>
  <div class="mv">
    <div class="left">
      <div class="title">
        <div class="name">{{ mv_obj.name }}</div>
      </div>
      <div class="video">
        <video :src="url" controls></video>
      </div>
      <div class="information">
        <el-button type="danger" plain size="small"
          >点赞 {{ mv_obj.subCount }}</el-button
        >
        <el-button type="danger" plain size="small"
          >分享 {{ mv_obj.shareCount }}</el-button
        >
        <el-button type="danger" plain size="small"
          >评论数 {{ mv_obj.commentCount }}</el-button
        >
        <el-button type="danger" plain size="small">下载mv</el-button>
      </div>

      <div class="comment">
        <div class="comment-title">评论</div>
        <el-row>
          <el-col :span="24" v-for="item in comment">
            <div class="div">
              <div class="img">
                <img :src="item.user.avatarUrl" alt="" />
              </div>
              <div class="context">
                <div :title="item.content">
                  {{ item.user.nickname }} :
                  <span>{{ item.content | str }}</span>
                </div>
                <div>
                  {{ item.time | creat }}
                </div>
                <div class="likedCount">
                  <span class="report">举报!</span>
                  <i class="el-icon-thumb"></i>
                  <span>{{ item.likedCount }}</span>
                  <span>|</span>
                  <span>分享</span>
                  <span>|</span>
                  <span>回复</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="right">
      <div class="right-container">
        <div class="r_title">
          MV介绍
        </div>
        <div class="right-desc">
          {{ mv_obj.desc }}
        </div>
        <div class="recommend">
          相关推荐
        </div>
        <div class="recommend-list">
          <div v-for="item in mvs" class="mvs-item">
            <div class="mvs-img">
              <img :src="item.cover" alt="" />
            </div>
            <div class="mvs-text">
              <div :title="item.name">{{ item.name | stri }}</div>
              <div>{{ item.duration | gettime }}</div>
              <div>{{ item.artistName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mv_url, detail_mv, comment_mv, simi_mv } from "network/mv.js";
export default {
  name: "mv",
  data() {
    return {
      id: this.$route.params.id,
      url: "",
      mv_obj: {
        name: "",
        desc: "",
        publishTime: "",
        shareCount: "",
        commentCount: "",
        subCount: "",
      },
      comment: [],
      mvs: [],
    };
  },
  created() {
    this.detail_mv();
    this.mv_url();
    this.comment_mv();
    this.simi_mv();
  },
  methods: {
    mv_url() {
      mv_url(this.id).then((res) => {
        //mv资源
        this.url = res.data.data.url;
      });
    },
    detail_mv() {
      detail_mv(this.id).then((res) => {
        this.mv_obj.name = res.data.data.name; //标题
        this.mv_obj.desc = res.data.data.desc; //描述
        this.mv_obj.publishTime = res.data.data.publishTime; //时间
        this.mv_obj.shareCount = res.data.data.shareCount; //分享次数
        this.mv_obj.commentCount = res.data.data.commentCount; //评论
        this.mv_obj.subCount = res.data.data.subCount;
      });
    },
    comment_mv() {
      this.comment = [];
      comment_mv(this.id).then((res) => {
        this.comment = [...this.comment, ...res.data.hotComments];
        this.comment = [...this.comment, ...res.data.comments];
      });
    },
    simi_mv() {
      simi_mv(this.id).then((res) => {
        this.mvs = res.data.mvs;
      });
    },
  },
  filters: {
    creat(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      return `${year}-${month}-${day}`;
    },
    str(str) {
      if (str.length > 35) {
        str = str.slice(0, 30) + "..";
        return str;
      } else {
        return str;
      }
    },
    stri(str) {
      if (str.length > 6) {
        str = str.slice(0, 6) + "..";
        return str;
      } else {
        return str;
      }
    },
    gettime(time) {
      let minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = parseInt((time % (1000 * 60)) / 1000);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    },
  },
};
</script>

<style scoped>
.mv {
  display: flex;
  height: 500px;
  margin-top: 10px;
}
.left {
  flex: 8;
}
.right {
  flex: 5;
}
.title {
  height: 40px;
  line-height: 40px;
}
.name {
  font-size: 14px;
}
.video {
  width: 100%;
  height: 350px;
}
.video > video {
  width: 100%;
}
.information {
  padding: 10px 0;
  margin-top: 10px;
  width: 100%;
}
.right-container {
  width: 75%;
  margin: 0 auto;
}
.r_title,
.recommend,
.comment-title {
  border-bottom: 1px solid #dcdfe6;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}
.right-desc {
  margin-top: 10px;
  font-size: 14px;
  line-height: 23px;
}
.recommend {
  margin-top: 30px;
}
.comment {
  margin-top: 20px;
  font-size: 14px;
}

.new {
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdfe6;
}
.div {
  height: 70px;
  width: 100%;
  display: flex;
  padding: 25px 0;
  border-bottom: 1px solid #dcdfe6;
}
.img {
  flex: 1;
}
.context {
  flex: 15;
  font-size: 13px;
  position: relative;
  padding-left: 10px;
}
.context > div:first-of-type {
  position: relative;
  top: 5px;
  color: #f56c6c;
}
.context > div:nth-of-type(2) {
  position: relative;
  top: 18px;
}
.context div:nth-of-type(3) span {
  margin: 0 5px;
}
.img > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.context span {
  color: #303133 !important;
  position: relative;
  left: 10px;
}
.el-icon-thumb {
  position: relative;
  left: 10px;
}
.likedCount {
  position: absolute;
  right: 10px;
  bottom: 0px;
  font-size: 13px;
}
.report {
  display: none;
  margin-right: 15px !important;
}
.el-col:hover .report {
  display: inline-block;
}

.recommend-list {
  margin-top: 20px;
}
.mvs-item {
  display: flex;
  height: 120px;
  margin-bottom: 15px;
  font-size: 14px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  border-radius: 5px;
}
.mvs-img {
  flex: 8;
  position: relative;
}
.mvs-text {
  flex: 5;
  display: flex;
  flex-direction: column;
}
.mvs-text > div {
  flex: 1;
  line-height: 40px;
  text-indent: 10px;
}
.mvs-img > img {
  width: 100%;
  height: 100%;
}
</style>
