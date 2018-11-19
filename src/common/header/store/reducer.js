import { actionTypes } from './index'
import { fromJS } from 'immutable'
// 引入immutable 将js对象 转化为immutable对象
const initState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUSED:
            // return Object.assign({}, state, {
            //     focused: !state.focused
            // })
            return state.set('focused', true)
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false)
        case actionTypes.SEARCH_LIST:
            return state.set('list', action.data).set('totalPage',action.totalPage)
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case actionTypes.SEARCH_TIPS_CHANGE:
            const page = state.get('page')
            const totalPage = state.get('totalPage')
            return state.set('page', page >= totalPage? 1 : page + 1 )
        default:
            return state
    }
}

export default reducer