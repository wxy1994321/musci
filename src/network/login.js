import {
    request
} from './request'

export function music_login(params) { //手机登录
    return request({
        url: '/login/cellphone',
        params
    })
}

export function music_logout() { //退出登录
    return request({
        url: '/logout',
    })
}

export function music_userplaylist(uid) { //获取用户歌单
    return request({
        url: '/user/playlist',
        params: {
            uid
        }
    })
}