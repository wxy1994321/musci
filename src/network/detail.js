import {
    request
} from './request'

export function getmusic(id) { //获取音乐url
    return request({
        url: "/song/url",
        params: {
            id
        }
    })
}

export function songdetail(ids) { //获取音乐url
    return request({
        url: "/song/detail",
        params: {
            ids
        }
    })
}

export function music_comment(id) { //歌单评论
    return request({
        url: '/comment/playlist',
        params: {
            id
        }
    })
}