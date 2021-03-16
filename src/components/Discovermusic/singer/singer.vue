<template>
  <div class="singer">
    <languages class="languages" @change1="change1"></languages>
    <classification class="classification" @change2="change2"></classification>
    <screen class="screen" @change3="change3"></screen>
    <singerItem :artists="artists" class="singer-item"></singerItem>
  </div>
</template>

<script>
//api
import { artist_list } from "network/singer";

//组件
import classification from "./classification";
import languages from "./languages";
import screen from "./screen";
import singerItem from "./singer-item";

export default {
  data() {
    return {
      artists: [],
      params: {
        type: -1,
        area: -1,
        initial: -1,
      },
    };
  },
  created() {
    this.artist_list();
  },
  methods: {
    artist_list() {
      artist_list(this.params).then((res) => {
        if (res.data.more) {
          this.artists = res.data.artists;
        }
      });
    },

    change1(val) {
      if (val == "全部") {
        this.params.area = -1;
        this.artist_list(this.params);
      } else if (val == "华语") {
        this.params.area = 7;
        this.artist_list(this.params);
      } else if (val == "欧美") {
        this.params.area = 96;
        this.artist_list(this.params);
      } else if (val == "日本") {
        this.params.area = 8;
        this.artist_list(this.params);
      } else if (val == "韩国") {
        this.params.area = 16;
        this.artist_list(this.params);
      } else if (val == "其他") {
        this.params.area = 0;
        this.artist_list(this.params);
      }
    },
    change2(val) {
      if (val == "全部") {
        this.params.type = -1;
        this.artist_list(this.params);
      } else if (val == "男歌手") {
        this.params.type = 1;
        this.artist_list(this.params);
      } else if (val == "女歌手") {
        this.params.type = 2;
        this.artist_list(this.params);
      } else if (val == "乐队组合") {
        this.params.type = 3;
        this.artist_list(this.params);
      }
    },
    change3(val) {
      console.log(val);
      if (val == "热门") {
        this.params.initial = -1;
      } else {
        this.params.initial = val;
      }
      this.artist_list(this.params);
    },
  },
  components: {
    classification,
    languages,
    screen,
    singerItem,
  },
};
</script>

<style scoped>
.languages,
.screen,
.classification {
  margin-top: 30px;
}
.singer-item {
  margin-top: 60px;
}
</style>
