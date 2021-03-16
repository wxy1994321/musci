<template>
  <div class="lyric">
    <lyric-header :lrcObject="lrcObject"></lyric-header>
    <lyric-comment :comment="comment"></lyric-comment>
  </div>
</template>

<script>
//api
import { music_lyric, music_comment } from "network/lyric";

//组件
import lyricHeader from "./lyric-header";
import lyricComment from "./lyric-comment";

export default {
  name:"lyric",
  data() {
    return {
      id: this.$route.params.id,
      lyrics: [],
      lrcObject: [],
      comment: [],
    };
  },
  created() {
    this.music_lyric();
    this.music_comment();
  },
  methods: {
    music_lyric() {
      music_lyric(this.id).then((res) => {
        //请求歌词
        this.lyrics = res.data.lrc.lyric;
        this.createLrcObj(this.lyrics); //转换歌词
      });
    },
    createLrcObj(lrc) {
      //转换字符串
      var oLRC = {
        ms: [], //歌词数组{t:时间,c:歌词}
      };
      if (lrc.length == 0) return;
      var lrcs = lrc.split("\n"); //用回车拆分成数组 (每一句歌词都用换行隔开了)
      for (var i in lrcs) {
        //遍历歌词数组
        lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
        var arr = lrcs[i].match(/\[(\d+:.+?)\]/g); //提取时间字段，可能有多个
        var start = 0;
        for (var k in arr) {
          start += arr[k].length; //计算歌词位置 长度叠加
        }
        var content = lrcs[i].substring(start); //获取歌词内容 相当于减去时间字符串的长度剩下的就是内容
        for (var k in arr) {
          var t = arr[k].substring(1, arr[k].length - 1); //取[]间的内容
          // var t = arr[k]
          var s = t.split(":"); //分离:前后文字 便于计算成毫秒数
          oLRC.ms.push({
            //对象{t:时间,c:歌词}加入ms数组
            // t: t,
            t: (parseFloat(s[0]) * 60 + parseFloat(s[1])).toFixed(3),
            c: content === "" ? ".............." : content,
          });
        }
      }
      oLRC.ms.sort(function(a, b) {
        return a.t - b.t;
      });
      this.lrcObject = oLRC.ms;
    },
    music_comment() {
      //歌曲评论
      music_comment(this.id).then((res) => {
        this.comment = [...res.data.hotComments, ...res.data.comments];
      });
    },
  },
  components: {
    lyricHeader,
    lyricComment,
  },
};
</script>

<style scoped></style>
