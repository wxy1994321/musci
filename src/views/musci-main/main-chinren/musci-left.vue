<template>
  <div class="musci-left">
    <el-menu
      default-active="1-1"
      :default-openeds="arr"
      class="el-menu-vertical-demo"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>推荐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="Discovermusic"
            ><i class="el-icon-star-off"></i>发现音乐</el-menu-item
          >
          <el-menu-item index="1-4" @click="video"
            ><i class="el-icon-monitor"></i>MV</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>我的音乐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <i class="el-icon-help"></i>本地音乐</el-menu-item
          >
          <el-menu-item index="2-2"
            ><i class="el-icon-download"></i>下载管理</el-menu-item
          >
          <el-menu-item index="2-3"
            ><i class="el-icon-upload"></i>我的音乐云盘</el-menu-item
          >
          <el-menu-item index="2-4"
            ><i class="el-icon-film"></i>我的电台</el-menu-item
          >
          <el-menu-item index="2-5"
            ><i class="el-icon-folder-opened"></i>我的收藏</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>创建的歌单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-if="item" v-for="obj in item" @click="detail(obj)">
            {{ obj.name | str }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["1"],
    };
  },
  methods: {
    Discovermusic() {
      this.$router.push("/Discovermusic");
    },
    video() {
      this.$router.push("/video");
    },
    detail({ id }) {
      this.$router.push(`/detail${id}`);
    },
  },
  computed: {
    item() {
      return this.$store.getters.get_list;
    },
  },
  filters: {
    str(str) {
      if (str.length > 10) {
        str = str.slice(0, 10) + "...";
        return str;
      } else {
        return str;
      }
    },
  },
};
</script>

<style scoped>
.musci-left {
  width: 200px;
  border-right: 1px solid #dcdfe6;
  box-sizing: border-box;
  overflow: auto;
}
.el-menu-vertical-demo {
  overflow-x: hidden;
}
i {
  position: relative;
  bottom: 2px;
}
</style>
