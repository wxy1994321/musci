<template>
  <div>
    <div class="new">最新评论</div>
    <el-row>
      <el-col :span="24" v-for="item in comment">
        <div class="div">
          <div class="img">
            <img :src="item.user.avatarUrl" alt="" />
          </div>
          <div class="context">
            <div :title="item.content">
              {{ item.user.nickname }} : <span>{{ item.content | str }}</span>
            </div>
            <div>
              {{ item.time | creat }}
            </div>
            <div class="likedCount">
              <span class="report">举报!</span>
              <i class="el-icon-thumb"></i>
              <span>{{ item.likedCount }}</span>
              <span>|</span>
              <span>分享</span>
              <span>|</span>
              <span>回复</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    creat(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      return `${year}-${month}-${day}`;
    },
    str(str) {
      if (str.length > 60) {
        str = str.slice(0, 60) + "..";
        return str;
      } else {
        return str;
      }
    },
  },
};
</script>

<style scoped>
.new {
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdfe6;
}
.div {
  height: 70px;
  width: 100%;
  display: flex;
  padding: 25px 0;
  border-bottom: 1px solid #dcdfe6;
}
.img {
  flex: 1;
}
.context {
  flex: 15;
  font-size: 13px;
  position: relative;
}
.context > div:first-of-type {
  position: relative;
  top: 5px;
  color: #f56c6c;
}
.context > div:nth-of-type(2) {
  position: relative;
  top: 18px;
}
.context div:nth-of-type(3) span {
  margin: 0 5px;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.context span {
  color: #303133 !important;
  position: relative;
  left: 10px;
}
.el-icon-thumb {
  position: relative;
  left: 10px;
}
.likedCount {
  position: absolute;
  right: 10px;
  bottom: 0px;
  font-size: 13px;
}
.report {
  display: none;
  margin-right: 15px !important;
}
.el-col:hover .report {
  display: inline-block;
}
</style>
