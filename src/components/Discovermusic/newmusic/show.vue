<template>
  <div>
    <el-row>
      <el-col :span="24" v-for="(item, index) in songlist">
        <div class="item" @click="play(item)" :key="item.id">
          <div class="one">{{ index + 1 }}</div>
          <div class="two">
            <img :src="item.blurPicUrl" alt="" />
          </div>
          <div class="three">
            {{ item.sname }}
          </div>
          <div class="four">
            {{ item.pername }}
          </div>
          <div class="five">
            {{ item.duration }}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//api
import { getmusic, songdetail } from "network/detail";
export default {
  props: {
    songlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    play({ id, duration }) {
      songdetail(id).then((res) => {
        const song = {};
        song.name = res.data.songs[0].name; //歌名
        song.pic = res.data.songs[0].al.picUrl; //图片
        song.singer = res.data.songs[0].ar[0].name; //歌手
        song.id = id; //歌曲id'
        song.dt = duration; //时间
        song.alia = res.data.songs[0].alia[0]; //专辑
        this.getmusic(song);
      });
    },
    getmusic(obj) {
      getmusic(obj.id).then((res) => {
        obj.url = res.data.data[0].url; //歌曲资源
        this.$store.commit("song", obj);
      });
    },
  },
};
</script>

<style scoped>
.item {
  height: 60px;
  display: flex;
  border-bottom: 1px solid #dcdfe6;
  padding: 15px 0;
  cursor: pointer;
}
.item > div {
  height: 60px;
  font-size: 14px;
}
.one {
  line-height: 60px;
  text-indent: 20px;
  flex: 1;
}
.two > img {
  width: 50px;
  height: 50px;
  position: relative;
  top: 5px;
}
.two {
  flex: 2;
  position: relative;
  line-height: 60px;
}
.three,
.four,
.five {
  flex: 3;
  line-height: 60px;
}
.four,
.five {
  text-align: center;
}
.five {
  text-indent: 160px;
}
</style>
