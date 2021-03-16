<template>
  <div>
    <el-carousel :interval="3000" type="card" height="210px" trigger="click">
      <el-carousel-item v-for="(item, index) in bannerlist" :key="index">
        <img
          :src="item.imageUrl ? item.imageUrl : item.pic"
          @click="play(item)"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
//api
import { getmusic, songdetail } from "network/detail";
import { song_detail } from "network/songsheet";
import { gettime } from "network/tool";

export default {
  props: {
    bannerlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    play(item) {
      if (item.encodeId) {
        let encodeId = item.encodeId;
        songdetail(encodeId).then((res) => {
          if (res.data.songs.length != 0) {
            const song = {};
            song.name = res.data.songs[0].al.name; //歌名
            song.pic = res.data.songs[0].al.picUrl; //图片
            song.singer = res.data.songs[0].ar[0].name; //歌手
            song.id = encodeId; //歌曲id'
            this.getmusic(song);
          }
        });
      }
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
img {
  width: 100%;
}
</style>
