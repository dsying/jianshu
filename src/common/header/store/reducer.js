import { constant } from './index'
import { fromJS } from 'immutable'
// 引入immutable 将js对象转化为immutable对象
const initState = fromJS({
    focused: false,
    list: []
})

function reducer(state = initState, action) {
    switch (action.type) {
        case constant.SEARCH_FOCUSED:
            // return Object.assign({}, state, {
            //     focused: !state.focused
            // })
            return state.set('focused', true)
        case constant.SEARCH_BLUR:
            return state.set('focused', false)
        case constant.SEARCH_LIST:
            return state.set('list', action.data)
        default:
            return state
    }
}

export default reducer