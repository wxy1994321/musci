import {
    request
} from './request'

import {
    gettime
} from './tool'

export function top_song(type = 0) { //新歌速递
    return request({
        url: '/top/song',
        params: {
            type
        }
    })
}
export class Initialization {
    constructor(obj) {
        this.id = obj.id
        this.sname = obj.name
        this.duration = gettime(obj.duration)
        this.blurPicUrl = obj.album.blurPicUrl
        this.pername = obj.artists[0].name
    }
}