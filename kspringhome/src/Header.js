import React from 'react';
import logo from './logo';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-fixed-top" id="header-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="header">
              <img src="./img/icon/logo.png" alt="logo" />
              <logo />
            </a>
          </div>
          <div className="primary-menu">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a data-scroll href="header">Home</a></li>
                <li><a data-scroll href="#portfolio">Portfolio</a></li>
                <li><a data-scroll href="#about">About me</a></li>
                <li><a data-scroll href="#profile">Mini profile</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="main-head">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <h1>The flower that blooms in adversity is the rarest and most beautiful of all</h1>
                <h4>- Mulan -</h4>                  
                <a data-scroll href="#portfolio" className="btn btn-primary btn-lg">see portfolio</a>
            </div>
          </div>
        </div>
      </div>   
    </header>
  );
}

export default Header;
