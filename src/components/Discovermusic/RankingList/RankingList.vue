<template>
  <div class="RankingList">
    <ranking-item :list="list"></ranking-item>
  </div>
</template>

<script>
//api
import { get_toplist } from "network/toplist";

//组件
import rankingItem from "./ranking-item";

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.get_toplist();
  },
  methods: {
    get_toplist() {
      get_toplist().then((res) => {
        this.list = res.data.list;
      });
    },
  },
  components: {
    rankingItem,
  },
};
</script>

<style scoped></style>
