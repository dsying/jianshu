import { constant } from './index'
import { fromJS } from 'immutable'
// 引入immutable 将js对象转化为immutable对象
const initState = fromJS({
    focused: false
})

function reducer(state = initState, action) {
    switch (action.type) {
        case constant.SEARCH_FOCUSED:
            // return Object.assign({}, state, {
            //     focused: !state.focused
            // })
            return state.set('focused',!state.get('focused'))
        default:
            return state
    }
}

export default reducer