<template>
  <div>
    <div class="song">
      <el-table :data="songs" style="width: 100%" @row-click="change">
        <el-table-column
          prop=""
          label=""
          width="60px"
          type="index"
        ></el-table-column>
        <el-table-column prop="" label="操作" width="100px">
          <i class="el-icon-star-off"></i>
          <i class="el-icon-bottom"></i>
        </el-table-column>
        <el-table-column prop="sname" label="歌曲名"></el-table-column>
        <el-table-column prop="pname" label="歌手" width="200px">
        </el-table-column>
        <el-table-column prop="dt" label="时长" width="100px"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
//api
import { music_search, Search } from "network/search";
import { getmusic, songdetail } from "network/detail";

export default {
  name: "search",
  data() {
    return {
      key: this.$route.params.key,
      songs: [],
    };
  },
  created() {
    this.music_search();
  },
  methods: {
    music_search() {
      this.songs = [];
      music_search(this.key).then((res) => {
        res.data.result.songs.forEach((element) => {
          this.songs.push(new Search(element));
        });
      });
    },
    change({ id, dt }) {
      songdetail(id).then((res) => {
        const song = {};
        song.name = res.data.songs[0].name; //歌名
        song.pic = res.data.songs[0].al.picUrl; //图片
        song.singer = res.data.songs[0].ar[0].name; //歌手
        song.id = id; //歌曲id'
        song.dt = dt; //时间
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
.song {
  margin-top: 30px;
  cursor: pointer;
}
</style>
