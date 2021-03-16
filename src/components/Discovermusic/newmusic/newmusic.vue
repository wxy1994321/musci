<template>
  <div class="newmusic">
    <areass class="areass" @change2="change2"></areass>
    <show class="show" :songlist="songlist"></show>
  </div>
</template>

<script>
//api
import { top_song, Initialization } from "network/newmusic";

//组件
import areass from "./areass";
import show from "./show";

export default {
  data() {
    return {
      type: 0, //type: 地区类型 id
      songlist: [],
    };
  },
  created() {
    this.top_song();
  },
  methods: {
    top_song() {
      this.songlist = []; //再次初始化
      top_song(this.type).then((res) => {
        res.data.data.forEach((element) => {
          this.songlist.push(new Initialization(element));
        });
      });
    },
    change2(val) {
      if (val == "全部") {
        this.type = 0;
      } else if (val == "华语") {
        this.type = 7;
      } else if (val == "欧美") {
        this.type = 96;
      } else if (val == "韩国") {
        this.type = 16;
      } else if (val == "日本") {
        this.type = 8;
      }
      this.top_song(this.type);
    },
  },
  components: {
    areass,
    show,
  },
};
</script>

<style scoped>
.areass {
  margin-top: 60px;
}
</style>
