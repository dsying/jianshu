import { connect } from 'react-redux'
import headerUI from './headerUI'
import { constant } from './store'
import axios from 'axios'

const mapStateToProps = state => {
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list')
  }
}

const mapDispatchToProps = dispatch => {
  return {
      handleSearchFocus: () => {
        const action = {type: constant.SEARCH_FOCUSED}
        dispatch(action)
        dispatch((dispatch) => {
          axios.get('./api/headerList.json')
            .then((res) => {
              dispatch({
                type: constant.SEARCH_LIST,
                data: res.data
              })
            })
            .catch((err) => {})
        })
      },
      handleSearchBlur: () => {
        const action = {
          type: constant.SEARCH_BLUR
        }
        dispatch(action)
      }
  }
}
const Header = connect(mapStateToProps, mapDispatchToProps)(headerUI)

export default Header