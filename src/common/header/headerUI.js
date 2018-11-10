import React from 'react'
import './index.css'
import { CSSTransition } from 'react-transition-group'
import logo from '../../statics/nav-logo.png'

const getListArea = (show,list) => {
  if(show){
    return (
      <div id="navbar-search-tips">
        <div className="search-trending">
          <div className="search-trending-header">
            <span>热门搜索</span>
            <a href="/">换一批</a>
          </div>
          <div className="search-trending-wrap">
            <ul>
              {
                list.map((n, i, arr) => {
                  return (
                    <li key={i}>
                      <a href="/">{n}</a>
                    </li>
                  )
                })
              }

            </ul>
          </div>
        </div>
      </div>
    )
  }else {
    return null
  }
}

const headerUI = (props) => {
  const { focused, list = [], handleSearchFocus, handleSearchBlur } = props
  return (
    <nav className="header_wrapper">
      <div className="width_limit clearfix">

        <a className="logo" href="/">
          <img src={logo} alt="logo" />
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
              <li className="left active"><a href="/">首页</a></li>
              <li className="left"><a href="/">下载App</a></li>
              <li className={focused ? "left search searchFocus" : "left search" }
                onFocus={ handleSearchFocus }
                onBlur={ handleSearchBlur }
                >
                <CSSTransition in={focused} timeout={500} classNames="slide" >
                  <input type="text" placeholder="搜索" />
                </CSSTransition>
                <a href="/">
                  <i className="iconfont">&#xe626;</i>
                </a>
                {getListArea(focused, list)}
              </li>
              <li className="right"><a href="/">登录</a></li>
              <li className="right"><a href="/"><i className="iconfont">&#xe607;</i></a></li>
            </ul>
          </div>
        </div>


      </div>
    </nav>
  )
}

export default headerUI