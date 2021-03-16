<template>
  <div>
    <div class="title">
      最新音乐
    </div>
    <el-row :gutter="40">
      <el-col :span="12" v-for="(item, index) in latestmusic">
        <div class="song" @click="song(item)">
          <div class="number">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="img">
            <img :src="item.picUrl" alt="" />
          </div>
          <div class="text">
            <div>
              <span class="name">{{ item.name | str }}</span>
            </div>
            <div>
              <span class="name">{{ item.song.artists[0].name | str }}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//api
import { getmusic, songdetail } from "network/detail";
import { song_detail } from "network/songsheet";
import { gettime } from "network/tool";

export default {
  props: {
    latestmusic: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    str(str) {
      if (str.length > 30) {
        str = str.slice(0, 25) + "...";
        return str;
      }
      return str;
    },
  },
  methods: {
    song({ id }) {
      songdetail(id).then((res) => {
        if (res.data.songs.length != 0) {
          const song = {};
          song.name = res.data.songs[0].al.name; //歌名
          song.pic = res.data.songs[0].al.picUrl; //图片
          song.singer = res.data.songs[0].ar[0].name; //歌手
          song.id = id; //歌曲id'
          this.getmusic(song);
        }
      });
    },
    getmusic(obj) {
      getmusic(obj.id).then((res) => {
        obj.url = res.data.data[0].url; //歌曲资源
        this.getdt(obj);
      });
    },
    getdt(obj) {
      song_detail(obj.id).then((res) => {
        obj.dt = gettime(res.data.songs[0].dt);
        this.$store.commit("song", obj);
      });
    },
  },
};
</script>

<style scoped>
.title {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #dcdfe6;
}
.song {
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  padding: 10px 0;
  cursor: pointer;
}
.song:hover {
  background-color: rgb(230, 238, 241);
}
.img {
  flex: 2;
}
.number {
  line-height: 100px;
  flex: 1;
}
.number > span {
  position: relative;
  left: 10px;
}
.text {
  flex: 8;
  display: flex;
  flex-direction: column;
}
.text > div {
  flex: 1;
  line-height: 50px;
  font-size: 14px;
}
img {
  height: 100%;
  width: 100%;
}
.name {
  position: relative;
  left: 20px;
}
</style>
