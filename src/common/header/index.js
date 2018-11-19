import { connect } from 'react-redux'
import headerUI from './headerUI'
import { Actions } from './store'
import axios from 'axios'

const mapStateToProps = state => {
  return {
    focused: state.get('header').get('focused'),
    mouseIn: state.get('header').get('mouseIn'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page')
  }
}

const mapDispatchToProps = dispatch => {
  return {
      handleSearchFocus: () => {
        dispatch(Actions.searchFocus())
        dispatch((dispatch) => {
          axios.get('./api/headerList.json')
            .then((res) => {
              dispatch(Actions.changeList(res))
            })
            .catch((err) => {})
        })
      },
      handleSearchBlur: () => {
        dispatch(Actions.searchBlur())
      },
      handleSearchMouseEnter(){
        dispatch(Actions.mouseEnter())
      },
      handleSearchMouseLeave() {
        dispatch(Actions.mouseLeave())
      },
      handleSearchTipsChange(e) {
        e.preventDefault();
        dispatch(Actions.tipsChange())
      }
  }
}
const Header = connect(mapStateToProps, mapDispatchToProps)(headerUI)

export default Header