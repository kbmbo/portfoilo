import React from 'react';
import ScrollNavigation from 'react-single-page-navigation';
import Main from './ContentJs/Main';
import Portfolio from './ContentJs/Portfolio';
import logo from './img/svg/logo.svg';
export const elements = {
  Menu1: {},
  Menu2: {}
};
const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="header">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav id="header-nav">
        <div className="menu">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span></span>
              <span></span>
              <span></span>
          </button>
          <div id="navbar">
            <ScrollNavigation elements={elements}>
              {({refs, activeElement, goTo }) => (
                <>
                <ul>
                  <li onClick={() => goTo('Menu1')}>
                  Home {activeElement === 'Menu1'}
                  </li>
                  <li onClick={() => goTo('Menu2')}>
                  Portfolio{activeElement === 'Menu2'}
                  </li>
                </ul>
                <Main ref={refs.Menu1}></Main>
        <Portfolio ref={refs.Menu2}></Portfolio>
                </>
              )}
            </ScrollNavigation>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
