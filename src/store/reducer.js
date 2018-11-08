// import { combineReducers } from 'redux'
// 引入redux-immutable 使 reducer返回的 state 是一个immutable对象
import { combineReducers } from 'redux-immutable'

import {reducer as headerReducer} from '../common/header/store'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer