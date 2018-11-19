import actionTypes from './actionTypes'

export const searchFocus = () => {
    return {
        type: actionTypes.SEARCH_FOCUSED
    }
}

export const changeList = (res) => {
    return {
        type: actionTypes.SEARCH_LIST,
        data: res.data,
        totalPage: Math.ceil(res.data.length / 10)
    }
}

export const searchBlur = () => {
    return {
        type: actionTypes.SEARCH_BLUR
    }
}

export const mouseEnter = () => {
    return {
        type: actionTypes.MOUSE_ENTER
    }
}

export const mouseLeave = () => {
    return {
        type: actionTypes.MOUSE_LEAVE
    }
}

export const tipsChange = () => {
    return {
        type: actionTypes.SEARCH_TIPS_CHANGE
    }
}