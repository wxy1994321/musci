import {
    request
} from './request'

export function music_lyric(id) { //歌词
    return request({
        url: '/lyric',
        params: {
            id
        }
    })
}

export function music_comment(id) { //歌曲评论
    return request({
        url: '/comment/music',
        params: {
            id
        }
    })
}