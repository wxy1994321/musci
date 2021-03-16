import {
    request
} from './request'


export function get_toplist() { //所有榜单
    return request({
        url: "/toplist",
    })
}

