// 作为 header/store 的 入口文件，方便其他地方引入
import reducer from './reducer'
import actionTypes from './actionTypes'
import * as Actions from './actionCreator'

export {
    reducer,
    actionTypes,
    Actions
}