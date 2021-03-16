import {
    request
} from './request'

export function exclusive_mv() { //网易出品mv
    return request({
        url: '/mv/exclusive/rcmd'
    })
}
export function detail_mv(mvid) { //获取 mv 数据
    return request({
        url: '/mv/detail',
        params: {
            mvid
        }
    })
}

export function mv_url(id) { //mv 地址
    return request({
        url: '/mv/url',
        params: {
            id
        }
    })
}

export function comment_mv(id) { //mv 评论
    return request({
        url: '/comment/mv',
        params: {
            id
        }
    })
}


export function simi_mv(mvid) { //相似 mv
    return request({
        url: '/simi/mv',
        params: {
            mvid
        }
    })
}