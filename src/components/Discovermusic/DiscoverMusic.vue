<template>
  <div class="Discovermusic">
    <navbar @itemclick="itemclick"></navbar>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import navbar from "components/navbar/navbar";

export default {
  data() {
    return {};
  },
  created() {},
  components: {
    navbar,
  },
  methods: {
    itemclick(index) {
      switch (index) {
        case 0:
          this.$router.push("/Discovermusic/recommend");
          break;
        case 1:
          this.$router.push("/Discovermusic/songsheet");
          break;
        case 2:
          this.$router.push("/Discovermusic/RankingList");
          break;
        case 3:
          this.$router.push("/Discovermusic/singer");
          break;
        case 4:
          this.$router.push("/Discovermusic/newmusic");
          break;
      }
    },
  },
};
</script>

<style scoped>
.Discovermusic {
  position: relative;
}
</style>
