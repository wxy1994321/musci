import {
    request
} from './request'
import {
    gettime
} from './tool';

export function music_search(keywords) { //搜索
    return request({
        url: '/search',
        params: {
            keywords
        }
    })
}
export class Search {
    constructor(obj) {
        this.sname = obj.name //歌名
        this.pname = obj.artists[0].name //人名
        this.dt = gettime(obj.duration) //时长
        this.id = obj.id //id
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