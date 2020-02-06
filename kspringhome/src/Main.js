import React from 'react';
import logo from './img/svg/logo.svg';

function Main() {
  return (
    <>
      <header>
        <nav id="header-nav">
          <div className="logo">
            <a href="header">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="menu">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div id="navbar">
              <ul>
                <li><a data-scroll href="header">Home</a></li>
                <li><a data-scroll href="#portfolio">Portfolio</a></li>
                <li><a data-scroll href="#about">About me</a></li>
                <li><a data-scroll href="#profile">Mini profile</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="main-c-con">
          <div className="txt">
            <h1>The flower that blooms in adversity is the rarest and most beautiful of all</h1>
            <h5>- Mulan -</h5>                  
            <a className="btn" data-scroll href="#portfolio">see portfolio</a>
          </div>
        </div>
      </header>
      <div class="main-b-con">
        <div className="txt">
          <h4>The flower that blooms in adversity is the rarest and most beautiful of all.</h4>
          <h4 class="fs_13">역경을 이겨내고 피어난 꽃이 모든 꽃 중에 가장 아름답다.</h4>
        </div>
      </div>
    </>
  );
}

export default Main;
