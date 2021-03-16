<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="info">
          <div class="img">
            <img :src="hotSongs.artist.picUrl" alt="" />
          </div>
          <div class="text">
            <div class="name">
              <el-tag type="danger">歌手：</el-tag>
              <span>{{ hotSongs.artist.name }}</span>
            </div>
            <div class="single">
              <i class="el-icon-data-analysis"></i>
              <span>歌曲数：</span>
              <span>{{ hotSongs.hot_songs.length }}</span>
            </div>
            <div class="desc" :title="briefDesc">
              {{ briefDesc | str }}
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="24" class="tab">
        <template>
          <el-tabs v-model="activeName">
            <el-tab-pane label="top-50" name="first">
              <div class="all">
                <div class="t50">
                  <img src="~assets/img/top50.png" alt="" />
                </div>
                <div class="show">
                  <el-table
                    :data="hotSongs.hot_songs"
                    style="width: 100%"
                    @row-click="change"
                  >
                    <el-table-column
                      prop=""
                      label=""
                      width="60px"
                      type="index"
                    ></el-table-column>
                    <el-table-column
                      prop="name"
                      label="歌曲名"
                    ></el-table-column>
                    <el-table-column prop="sname" label="歌手" width="200px">
                    </el-table-column>
                    <el-table-column prop="al" label="专辑"></el-table-column>
                    <el-table-column prop="dt" label="时长" width="100px">
                    </el-table-column>
                  </el-table>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="相似歌手" name="second">
              <el-row :gutter="80">
                <el-col :span="6" v-for="item in artists">
                  <div class="singer" :key="item.id">
                    <div class="img1">
                      <img :src="item.picUrl" alt="" />
                    </div>
                    <div class="text1">
                      {{ item.name }}
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//api
import { getmusic, songdetail } from "network/detail";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  filters: {
    str(str) {  
      if (str.length > 55) {
        str = str.slice(0, 50) + "...";
        return str;
      }
      return str;
    },
  },
  props: {
    briefDesc: {
      type: String,
      default: "",
    },
    hotSongs: {
      type: Object,
      default() {
        return {};
      },
    },
    artists: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    change({ id, dt }) {
      songdetail(id).then((res) => {
        const song = {};
        song.name = res.data.songs[0].al.name; //歌名
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
.info {
  height: 200px;
  display: flex;
}
.img {
  flex: 3;
  background-color: coral;
}
.text {
  flex: 11;
  margin-left: 20px;
}
.img > img {
  width: 100%;
  height: 100%;
}
.el-tag {
  margin-right: 10px;
}
.name {
  line-height: 32px;
}
.desc {
  font-size: 14px;
  margin-top: 20px;
}
.single {
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
}
.single > span {
  font-size: 14px;
  position: relative;
  left: 10px;
  bottom: 2px;
}
i {
  font-size: 20px;
}
.tab {
  margin-top: 50px;
  cursor: pointer;
}
.all {
  display: flex;
}
.t50 {
  width: 200px;
}
.show {
  flex: 1;
}

.singer {
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid #dcdfe6;
  padding: 10px 10px 0;
  cursor: pointer;
}
.img1 {
  height: 160px;
}
.text1 {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #f56c6c;
  text-align: center;
}
.img1 > img {
  width: 100%;
  height: 100%;
}
</style>
