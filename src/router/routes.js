const detail = () => import('components/detail/detail')
const lyric = () => import('components/lyric/lyric')
const album = () => import('components/album/album')
const search = () => import('components/search/search')
const mv = () => import('components/mv/mv')

const Discovermusic = () => import('components/Discovermusic/DiscoverMusic')
const recommend = () => import('components/Discovermusic/recommend/recommend')
const songsheet = () => import('components/Discovermusic/songsheet/songsheet')
const newmusic = () => import('components/Discovermusic/newmusic/newmusic')
const RankingList = () => import('components/Discovermusic/RankingList/RankingList')
const singer = () => import('components/Discovermusic/singer/singer')

const video = () => import('components/video/video')

const routes = [{
    path: '/',
    redirect: '/Discovermusic',
}, {
    path: '/Discovermusic',
    component: Discovermusic,
    children: [{
        path: '/',
        redirect: 'recommend',
    }, {
        path: 'recommend', //推荐
        component: recommend
    }, {
        path: 'songsheet', //歌单
        component: songsheet
    }, {
        path: 'newmusic', //最新音乐
        component: newmusic
    }, {
        path: 'RankingList', //排行榜
        component: RankingList
    }, {
        path: 'singer', //歌手
        component: singer
    }]
}, {
    path: '/video', //视频
    component: video
}, {
    path: '/detail:id', //歌单详情
    component: detail
}, {
    path: '/lyric:id', //歌词界面
    component: lyric
}, {
    path: '/album:id', //歌手详情
    component: album
}, {
    path: '/search:key', //搜索
    component: search
}, {
    path: '/mv:id', //mv
    component: mv
}]
export default routes