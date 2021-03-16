<template>
  <div class="song-div">
    <el-tabs v-model="activeName">
      <el-tab-pane label="歌曲列表" name="first">
        <el-table :data="songlist" style="width: 100%" @row-click="change">
          <el-table-column
            prop=""
            label=""
            width="60px"
            type="index"
          ></el-table-column>
          <el-table-column prop="" label="操作" width="100px">
            <i class="el-icon-star-off"></i>
            <i class="el-icon-bottom"></i>
          </el-table-column>
          <el-table-column prop="name" label="歌曲名"></el-table-column>
          <el-table-column prop="ar" label="歌手" width="200px">
          </el-table-column>
          <el-table-column prop="alia" label="专辑"> </el-table-column>
          <el-table-column
            prop="dt"
            label="时长"
            width="100px"
          ></el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="评论" name="second">
        <div class="textarea">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
          <el-button type="danger" size="mini" plain>提交</el-button>
        </div>
        <div class="comment">
          <comment :comment="comment"></comment>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
//api
import { getmusic, songdetail } from "network/detail";

//组件
import comment from "./comment";

export default {
  data() {
    return {
      activeName: "first",
      textarea: "",
    };
  },
  methods: {},
  props: {
    songlist: {
      type: Array,
      default() {
        return [];
      },
    },
    comment: {
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
        song.name = res.data.songs[0].name; //歌名
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
  components: {
    comment,
  },
};
</script>

<style scoped>
.song-div {
  position: relative;
  cursor: pointer;
}
i[class^="el-icon"]:first-of-type {
  margin-right: 5px;
}
i:hover {
  color: #409eff;
}
.textarea {
  padding: 10px 0 30px;
  position: relative;
}
.textarea > .el-textarea {
  position: relative;
}
.textarea > .el-button {
  position: absolute;
  right: 0;
  bottom: 0;
}
.comment {
  margin-top: 40px;
}
</style>
