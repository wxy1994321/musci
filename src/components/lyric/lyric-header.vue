<template>
  <div class="lyric-header">
    <div class="left">
      <div class="logo">
        <img src="~assets/img/player_bar.png" alt="" class="player" />

        <div class="img-container">
          <img :src="get_music.pic" alt="" class="pic" />
        </div>
      </div>
      <div class="group">
        <el-row>
          <el-button type="danger" size="small">喜欢</el-button>
          <el-button type="danger" size="small">收藏</el-button>
          <el-button type="danger" size="small">分享</el-button>
          <el-button type="danger" size="small">vip下载</el-button>
        </el-row>
      </div>
    </div>
    <div class="right">
      <div @click="back" class="back" title="后退">
        <i class="el-icon-d-arrow-left"></i>
      </div>
      <div class="title">
        <div>{{ get_music.name }}</div>
        <div class="info">
          专辑：<span>{{ get_music.alia ? get_music.alia : "无" }}</span>
          歌手：<span>{{ get_music.singer }}</span>
        </div>
      </div>
      <ul ref="lyric">
        <li v-for="(item, i) in lrcObject" :key="i" :time="Math.floor(item.t)">
          {{ item.c }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    lrcObject: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters(["get_music", "change_time", "condition"]),
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
  watch: {
    change_time(nval, old) {
      let lis = this.$refs.lyric.getElementsByTagName("li");
      if (lis) {
        for (let i = 0; i < lis.length; i++) {
          if (lis[i].getAttribute("time") == old) {
            lis[i].style.color = "#f56c6c";
            if (lis[i].previousElementSibling) {
              lis[i].previousElementSibling.style.color = "";
            }
            this.$refs.lyric.scrollTop =
              lis[i].offsetHeight * i - lis[i].offsetHeight * 4;
          }
        }
      }
    },
    condition(nval) {
      if (nval) {
        document.querySelector(".player").classList.remove("player11");
        document.querySelector(".img-container").style.animationPlayState =
          "running";
      } else {
        document.querySelector(".player").classList.add("player11");
        document.querySelector(".img-container").style.animationPlayState =
          "paused";
      }
    },
  },
};
</script>

<style scoped>
.lyric-header {
  height: 450px;
  display: flex;
}
.left,
.right {
  flex: 5;
  flex: 5;
  position: relative;
}
.right > .title {
  height: 25%;
  width: 80%;
  margin: 0 auto;
}
.title > div:first-of-type {
  text-align: center;
  font-size: 18px;
  padding-top: 30px;
}
.info {
  position: relative;
  top: 25px;
  font-size: 14px;
  text-align: center;
}
.info span:nth-of-type(1) {
  margin-right: 20px;
}
.right ul {
  width: 80%;
  height: 75%;
  margin: 0 auto;
  overflow-y: auto;
}
.right ul li {
  text-align: center;
  font-size: 14px;
  padding: 10px 0;
}
.logo {
  position: relative;
  height: 350px;
  background-color: white;
}
.img-container {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #303133;
  border-radius: 50%;
  animation-name: myfirst;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.el-row {
  text-align: center;
}
.el-row > .el-button {
  margin: 20px 10px 0;
}
.pic {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.player {
  position: absolute;
  top: 0px;
  right: 70px;
  transform-origin: 10% 6%;
  z-index: 1;
  transform: rotate(35deg);
  transition: all 1s;
}
.player11 {
  transform: rotate(0deg);
}
.back {
  width: 40px;
  height: 30px;
  position: absolute;
  right: 0px;
  top: 10px;
}
.back i {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  transform: translate(-50%, -50%);
  color: #f56c6c;
}
@keyframes myfirst {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
