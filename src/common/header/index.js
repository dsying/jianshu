import React,{Component} from 'react'
import './index.css'
import { CSSTransition } from 'react-transition-group'

import logo from '../../statics/nav-logo.png'

class Header extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      focused: false
    }
    this.handleSearchFocus = this.handleSearchFocus.bind(this)
  }
  render(){
    return (
        <nav className="header_wrapper">
          <div className="width_limit clearfix">

            <a className="logo" href="/">
              <img src={logo} alt="logo"/>
            </a>
            <a className="btn write_btn" href="/">
              <span>
                <i className="iconfont">&#xe62b;</i>
                写文章
              </span>
            </a>
            <a className="btn sing_up" href="/">
              <span>注册</span>
            </a>

            <div className="container">
              <div className="navbar">
                <ul className="navbar_nav clearfix">
                  <li className="left active"><a href="">首页</a></li>
                  <li className="left"><a href="">下载App</a></li>
                  <li className = {
                        this.state.focused ? "left search searchFocus" : "left search"
                      }
                      onFocus = {
                        this.handleSearchFocus
                      }
                      onBlur = {
                        this.handleSearchFocus
                      } >
                      <CSSTransition
                        in = {this.state.focused}
                        timeout={500}
                        classNames="slide"
                        >
                        <input  type="text" placeholder="搜索" />
                      </CSSTransition>
                      <a  href="">
                        <i className="iconfont">&#xe626;</i>
                      </a>
                  </li>
                  <li className="right"><a href="">登录</a></li>
                  <li className="right"><a href=""><i className="iconfont">&#xe607;</i></a></li>
                </ul>
              </div>
            </div>




          </div>
        </nav>
      )
  }

  handleSearchFocus(){
    this.setState((prevState) => {
      return {
        focused: !prevState.focused
      }
    })
  }

}

export default Header