import { constant } from './index'
const initState = {
    focused: false
}

function reducer(state = initState, action) {
    switch (action.type) {
        case constant.SEARCH_FOCUSED:
            return Object.assign({}, state, {
                focused: !state.focused
            })
        default:
            return state
    }
}

export default reducer