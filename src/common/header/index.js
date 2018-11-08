import { connect } from 'react-redux'
import headerUI from './headerUI'
import { constant } from './store'

const mapStateToProps = state => {
  return {
    focused: state.get('header').get('focused')
  }
}

const mapDispatchToProps = dispatch => {
  return {
      handleSearchFocus: () => {
        const action = {type: constant.SEARCH_FOCUSED}
        dispatch(action)
      }

  }
}
const Header = connect(mapStateToProps, mapDispatchToProps)(headerUI)

export default Header