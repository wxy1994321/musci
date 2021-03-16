import {
    request
} from './request'


export function musci_banner() {  //banner( 轮播图 ) 数据
    return request({
        url: '/banner'
    })
}

export function musci_personalized(limit = 8) {  //推荐 mv
    return request({
        url: '/personalized',
        params: {
            limit
        }
    })
}
 
export function musci_privatecontent() {  //独家放送(入口列表)
    return request({
        url: '/personalized/privatecontent'
    })
}

export function musci_newsong() {   //最新音乐
    return request({
        url: '/personalized/newsong'
    })
}