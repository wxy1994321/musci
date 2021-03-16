export default {
    get_music(state) {
        if (state.songlist.length == 0) {
            const obj = {}
            obj.name = '歌 名' //歌名
            obj.pic = require('assets/img/1.png') //图片
            obj.singer = '歌 手'; //歌手
            obj.id = null; //歌曲id
            obj.url = ''; //歌曲资源
            obj.dt = '00:00';
            obj.alia = ''
            return obj
        } else {
            return state.songlist[state.i]
        }
    },
    get_list(state) {
        if (state.playlist.length == 0) {
            return []
        } else {
            return state.playlist
        }
    },
    get_muisc_length(state) {
        return state.songlist.length
    },
    change_time(state) {
        return state.time
    },
    condition(state) {
        return state.flag
    }
}