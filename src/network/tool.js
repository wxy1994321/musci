export function gettime(time) { //转换歌曲时长
    let minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = parseInt((time % (1000 * 60)) / 1000)
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    return minutes + ':' + seconds
}

export function nowtime(time) {
    let seconds = parseInt(time % 60);
    let minutes = parseInt((time / 60) % 60);
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    return minutes + ':' + seconds
}

export function debounce(fn, delay) {
    let timer
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, args)

        }, delay)

    }

}