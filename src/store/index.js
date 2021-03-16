import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songlist: [], //播放歌单的
    i: 0, //歌单的变量索引
    playlist: [], //用户创建的歌单
    flag: false,
    time: 0
  },
  getters,
  mutations
})