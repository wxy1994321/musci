<template>
  <div class="songsheet" ref="songsheet">
    <div class="navbar">
      <navbar :tags="tags" @tagsclick="tagsclick"></navbar>
    </div>
    <div class="playlists">
      <songitem
        :personalizedlist="playlists"
        :index="6"
        :gutter="80"
      ></songitem>
    </div>
    <div class="Pagination">
      <el-pagination
        :page-size="playlists.length"
        layout="prev, pager, next"
        :total="total"
        :current-page="k"
        @prev-click="prev"
        @next-click="next"
        @current-change="current"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
//组件
import navbar from "./navbar";
import songitem from "./songitem";

//api
import { musci_songsheet, music_catlist } from "network/songsheet";
export default {
  data() {
    return {
      tags: [], //热门分类
      cat: "华语",
      playlists: [], //分类对应的数据
      total: 0, //一共有多少个歌
      k: 0, //标记
      index: 1, //请求的api页数
    };
  },
  created() {
    this.musci_songsheet();
    this.music_catlist();
  },
  components: {
    navbar,
    songitem,
  },
  methods: {
    musci_songsheet() {
      musci_songsheet().then((res) => {
        this.tags = res.data.tags;
      });
    },
    music_catlist() {
      music_catlist(this.cat).then((res) => {
        this.playlists = res.data.playlists;
        this.total = res.data.total;
      });
    },
    tagsclick(index) {
      this.k = index;
      switch (index) {
        case 0:
          this.cat = "华语";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
        case 1:
          this.cat = "流行";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
        case 2:
          this.cat = "摇滚";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
        case 3:
          this.cat = "民谣";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
        case 4:
          this.cat = "电子";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
        case 5:
          this.cat = "另类/独立";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
        case 6:
          this.cat = "轻音乐";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
        case 7:
          this.cat = "综艺";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
        case 8:
          this.cat = "影视原声";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
        case 9:
          this.cat = "ACG";
          music_catlist(this.cat).then((res) => {
            this.playlists = res.data.playlists;
          });
          break;
      }
    },
    prev() {
      this.index -= 1;
      music_catlist(this.cat, this.index).then((res) => {
        this.playlists = res.data.playlists;
      });
    },
    next() {
      this.index += 1;
      music_catlist(this.cat, this.index).then((res) => {
        this.playlists = res.data.playlists;
      });
    },
    current(index) {
      music_catlist(this.cat, index).then((res) => {
        this.playlists = res.data.playlists;
      });
      console.log(this.$refs.songsheet);
    },
  },
  watch: {
    cat(newv, oldv) {
      this.k = 1;
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 95%;
  margin: 20px auto 0;
}
.playlists {
  margin-top: 20px;
}
.Pagination {
  margin-top: 15px;
  text-align: center;
}
</style>
