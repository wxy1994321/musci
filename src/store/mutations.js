export default {
    song(state, obj) {
        if (state.songlist.length == 0) {
            state.songlist.unshift(obj)
        } else {
            let flag = state.songlist.every(item => {
                return item.id !== obj.id
            })
            if (flag) {
                state.songlist.unshift(obj)
            }
        }
    },
    user_playlist(state, array) {
        state.playlist = [...array]
    },
    signout(state) {
        state.playlist = []
    },
    next(state) {
        if (state.songlist.length !== 0 && state.songlist.length - 1 > state.i) {
            state.i += 1
        } else {
            state.i = 0
        }
    },
    prve(state) {
        if (state.songlist.length !== 0 && state.i != 0) {
            state.i -= 1
        } else {
            state.i = state.songlist.length - 1
        }
    },
    change(state, time) {
        state.time = time
    },
    play(state) {
        state.flag = true
    },
    pause(state) {
        state.flag = false
    }
}