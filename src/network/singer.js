import {
    request
} from './request'

export function artist_list(params) { // 歌手分类列表
    return request({
        url: '/artist/list',
        params
    })
}