import {
    request
} from './request'

import {
    gettime
} from './tool';

export function musci_songsheet() { //热门标签
    return request({
        url: '/playlist/hot'
    })
}


export function music_catlist(cat, offset = 1, limit = 48) { //热门标签对应的歌曲
    return request({
        url: '/top/playlist',
        params: {
            cat,
            offset,
            limit
        }
    })
}

export function music_detail(id) { //获取歌单详情不完整
    return request({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}


export function song_detail(ids) { //所有歌曲的详情 
    return request({
        url: '/song/detail',
        params: {
            ids
        }
    })
}

export function music_dynamic(id) { //歌单详情动态
    return request({
        url: '/playlist/detail/dynamic',
        params: {
            id
        }
    })
}


export class Playlist {
    constructor(playlist) {
        this.coverImgUrl = playlist.coverImgUrl //大图
        this.description = playlist.description //描述
        this.name = playlist.name //  歌单名字
        this.tags = playlist.tags //标签
        this.avatarUrl = playlist.creator ? playlist.creator.avatarUrl : require('assets/img/1.png') //创建歌单人头像
        this.nickname = playlist.creator ? playlist.creator.nickname : '默认' //创建歌单人名字
        this.createTime = playlist.createTime //  //应该是哪天创建的
        this.shareCount = playlist.shareCount //分享
        this.subscribedCount = playlist.subscribedCount //收藏
        this.trackCount = playlist.trackCount //歌曲数量
        this.playCount = playlist.playCount //播放数量
    }
}
export class Song {
    constructor(obj) {
        this.name = obj.name
        this.alia = obj.alia[0]
        this.ar = obj.ar[0].name
        this.dt = gettime(obj.dt)
        this.id = obj.id
    }
    gettime(time) {
        let minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = parseInt((time % (1000 * 60)) / 1000);
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        return minutes + ':' + seconds
    }
}