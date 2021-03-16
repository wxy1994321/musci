<template>
  <div class="recommend">
    <!-- 结构div -->
    <banner :bannerlist="bannerlist"></banner>
    <div class="personalized">
      <recommend-list
        :result="personalizedlist"
        :gutter="50"
        :n="6"
        title="推荐歌单"
      ></recommend-list>
    </div>
    <div class="privatecontent">
      <exclusive :privatecontentlist="privatecontentlist"></exclusive>
    </div>
    <div class="latestmusic">
      <latestmusic :latestmusic="latestmusic"></latestmusic>
    </div>
  </div>
</template>

<script>
//组件
import banner from "components/banner/banner";
import recommendList from "./recommend-list";
import exclusive from "./exclusive";
import latestmusic from "./latestmusic";

//api
import {
  musci_banner,
  musci_personalized,
  musci_privatecontent,
  musci_newsong,
} from "network/recommend";

export default {
  data() {
    return {
      bannerlist: [],
      personalizedlist: [],
      privatecontentlist: [],
      latestmusic: [],
    };
  },
  created() {
    this.musci_banner();
    this.musci_personalized();
    this.musci_privatecontent();
    this.musci_newsong();
  },
  methods: {
    musci_banner() {
      musci_banner().then((res) => {
        //轮播图
        this.bannerlist = res.data.banners;
      });
    },
    musci_personalized() {
      musci_personalized().then((res) => {
        //推荐歌单
        this.personalizedlist = res.data.result;
      });
    },
    musci_privatecontent() {
      musci_privatecontent().then((res) => {
        //独家放送
        this.privatecontentlist = res.data.result;
      });
    },
    musci_newsong() {
      musci_newsong().then((res) => {
        //最新音乐
        this.latestmusic = res.data.result;
      });
    },
  },
  components: {
    banner,
    recommendList,
    exclusive,
    latestmusic,
  },
};
</script>
<style scoped>
.recommend {
  margin-top: 20px;
}
.personalized {
  margin-top: 20px;
}
.privatecontent {
  margin-top: 20px;
}
.latestmusic {
  margin-top: 20px;
}
</style>
