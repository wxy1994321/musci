<template>
  <div class="detail">
    <div class="description">
      <description :description="description"></description>
    </div>
    <div class="song">
      <song :songlist="songlist" :comment="comment"></song>
    </div>
  </div>
</template>

<script>
//组件
import description from "./description";
import song from "./song";
import { music_comment } from "network/detail";

//api
import {
  music_detail,
  song_detail,
  music_dynamic,
  Playlist,
  Song,
} from "network/songsheet";

export default {
  name: "detail",
  data() {
    return {
      id: this.$route.params.id,
      trackIds: [], //歌曲id
      songlist: [], //歌单 -> 歌曲详情
      description: {}, //歌单描述
      comment: [],  //歌单评论
    };
  },
  created() {
    this.music_detail();
    this.music_dynamic();
    this.music_comment();
  },
  methods: {
    music_detail() {
      music_detail(this.id).then((res) => {
        this.trackIds = res.data.playlist.trackIds;
        this.trackIds.forEach((element) => {
          song_detail(element.id).then((res) => {
            let obj = new Song(res.data.songs[0]);
            this.songlist.push(obj);
          });
        });
      });
    },
    music_dynamic() {
      music_dynamic(this.id).then((res) => {
        this.description = new Playlist(res.data.playlist);
      });
    },
    music_comment() {
      music_comment(this.id).then((res) => {
        this.comment = [...this.comment, ...res.data.hotComments];
        this.comment = [...this.comment, ...res.data.comments];
      });
    },
  },
  components: {
    description,
    song,
  },
};
</script>

<style scoped>
.description,
.song {
  width: 95%;
}
.description {
  margin-top: 30px;
}
.song {
  margin-top: 30px;
}
</style>
