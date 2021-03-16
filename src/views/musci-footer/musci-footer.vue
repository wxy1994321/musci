<template>
  <div class="footer">
    <div class="left">
      <div class="logo">
        <img :src="get_music.pic" alt="" @click="lyric(get_music.id)" />
      </div>
      <div class="songtitle" :title="get_music.name + get_music.singer">
        <span class="singer">{{ get_music.name | str }}</span>
        <span>-</span>
        <span class="song">{{ get_music.singer | str }}</span>
      </div>
    </div>
    <div class="center">
      <span class="start">{{ starttime }}</span>
      <el-progress :percentage="value" :show-text="false"></el-progress>
      <span class="end">{{ get_music.dt }}</span>
      <audio :src="get_music.url" ref="audio"></audio>
    </div>
    <div class="right">
      <div class="control">
        <i class="el-icon-arrow-left" title="上一曲" @click="prve"></i>
        <i :class="cls" title="播放/暂停" @click="play"></i>
        <i class="el-icon-arrow-right" title="下一曲" @click="next"></i>
      </div>
      <div class="volume">
        <i class="el-icon-bell" ref="bell"></i>
        <el-slider
          class="volume-slider"
          :value="volume"
          @input="muscivolume"
        ></el-slider>
      </div>
    </div>
  </div>
</template>

<script>
// 工具
import { nowtime, debounce } from "network/tool";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      value: 0,
      volume: 100,
      starttime: "00:00",
      cls: "el-icon-video-play",
      duration: 0,
      percentage: 0,
      length: 0,
    };
  },
  computed: {
    ...mapGetters(["get_music", "get_muisc_length"]),
  },
  filters: {
    str(str) {
      if (str.length > 12) {
        return (str = str.slice(0, 8) + "..");
      } else {
        return str;
      }
    },
  },
  mounted() {
    let audio = this.$refs.audio;
    audio.src = this.get_music.url;
    audio.oncanplay = () => {
      audio.play();
      this.$store.commit("play");
      this.cls = "el-icon-video-pause";
      let duration = Math.floor(audio.duration); //获得音乐时长
      this.duration = duration;
      audio.volume = 1;
      audio.ontimeupdate = () => {
        //播放是触发的函数
        let current = Math.floor(audio.currentTime);
        this.starttime = nowtime(current);
        this.value = parseInt((current / duration) * 100);
        this.$store.commit("change", current);
      };
    };
    audio.onended = () => {
      this.$store.commit("next");
    };
  },
  methods: {
    prve() {
      this.$store.commit("prve");
    },
    play() {
      if (this.get_muisc_length != 0) {
        if (this.cls == "el-icon-video-play") {
          this.cls = "el-icon-video-pause";
          this.$refs.audio.play();
          this.$store.commit("play");
        } else {
          this.cls = "el-icon-video-play";
          this.$refs.audio.pause();
          this.$store.commit("pause");
        }
      }
    },
    next() {
      this.$store.commit("next");
    },
    muscivolume(volume) {
      this.volume = volume;
      let percentage = parseFloat(volume / 100);
      this.$refs.audio.volume = percentage;
    },
    lyric(id) {
      if (id !== null) {
        this.$router.push(`/lyric${id}`);
      }
    },
  },
};
</script>
<style scoped>
.footer {
  height: 80px;
  background-color: #f56c6c;
  display: flex;
}
.left {
  flex: 3;
  display: flex;
}
.logo {
  flex: 4;
  position: relative;
}
.songtitle {
  flex: 8;
  line-height: 80px;
  color: #fff;
  font-size: 12px;
  position: relative;
  cursor: pointer;
}
.songtitle > span:nth-of-type(2) {
  margin-left: 5px;
}
.songtitle > span:nth-of-type(3) {
  margin-left: 5px;
}
img {
  height: 55px;
  width: 55px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  border-radius: 5px;
}
.center {
  flex: 7;
  position: relative;
  font-size: 15px;
  color: #fff;
  position: relative;
}
.right {
  flex: 4;
  line-height: 90px;
  display: flex;
}
.control,
.volume {
  flex: 1;
  position: relative;
}
.el-progress,
.el-slider {
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
i {
  font-size: 30px;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
}
.control > i:first-of-type {
  margin-left: 30px;
}
.start,
.end {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.start {
  left: 40px;
}
.end {
  right: 40px;
}
.volume {
  position: relative;
}
.volume-slider {
  position: absolute;
  width: 50%;
  left: 105px;
}
</style>
