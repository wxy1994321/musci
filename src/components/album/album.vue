<template>
  <div class="album">
    <album-desc
      class="album-desc"
      :briefDesc="briefDesc"
      :hotSongs="hotSongs"
      :artists="artists"
    ></album-desc>
  </div>
</template>

<script>
//api
import { get_desc, get_single, get_simi, Showsong } from "network/album";

//组件
import albumDesc from "./album-desc";
export default {
  name: "album",
  data() {
    return {
      id: this.$route.params.id,
      briefDesc: "",
      hotSongs: {
        artist: {},
        hot_songs: [],
      },
      artists: [],
    };
  },
  created() {
    this.get_desc(); //歌手描述
    this.get_single(); // 歌手单曲
    this.get_simi(); //相似歌手
  },
  methods: {
    get_desc() {
      get_desc(this.id).then((res) => {
        this.briefDesc = res.data.briefDesc;
      });
    },
    get_single() {
      get_single(this.id).then((res) => {
        this.hotSongs.artist = res.data.artist;
        res.data.hotSongs.forEach((element) => {
          this.hotSongs.hot_songs.push(new Showsong(element));
        });
      });
    },
    get_simi() {
      get_simi(this.id).then((res) => {
        this.artists = res.data.artists;
      });
    },
  },
  components: {
    albumDesc,
  },
};
</script>

<style scoped>
.album-desc {
  margin-top: 30px;
}
</style>
