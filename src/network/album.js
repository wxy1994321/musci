import {
    request
} from './request'
import {
    gettime
} from './tool'

export function get_desc(id) { // 歌手描述
    return request({
        url: "/artist/desc",
        params: {
            id
        }
    })
}

export function get_single(id) { // 歌手单曲
    return request({
        url: "/artists",
        params: {
            id
        }
    })
}

export function get_simi(id) { // 相似歌手
    return request({
        url: "/simi/artist",
        params: {
            id
        }
    })
}

export class Showsong {
    constructor(obj) {
        this.id = obj.id; //id
        this.name = obj.name //歌名
        this.al = obj.al.name //专辑
        this.sname = obj.ar[0].name //人名
        this.dt = gettime(obj.dt) //时长
    }
}