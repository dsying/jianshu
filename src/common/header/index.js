import React,{Component} from 'react'
import { connect } from 'react-redux'
import headerUI from './headerUI'


const mapStateToProps = state => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = dispatch => {
  return {
      handleSearchFocus: () => {
        const action = {type: 'search_input_focused'}
        dispatch(action)
      }

  }
}
const Header = connect(mapStateToProps, mapDispatchToProps)(headerUI)

export default Header