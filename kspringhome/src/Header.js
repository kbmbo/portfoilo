import React from "react";
import { Pager } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import Main from "./Content/Main";
import Portfolio from "./Content/Portfolio";
import logo from './img/svg/logo.svg';

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  getPagesNumbers = () => {
    const menus = ["home", "Portfolio","3번버튼입니다"];
    const pagesNumbers = menus.map((menu, index) => (
      <Pager.Item key={index} eventKey={index} onSelect={this.handlePageChange}>{menu}</Pager.Item>
    ));

    return [...pagesNumbers];
  };
  
  render() {
    const pagesNumbers = this.getPagesNumbers();
    const top = () => {
      this.setState({ currentPage: 0 });
    };
    return (
      <>
        <header>
          <div className="logo" onClick={top}>
              <img src={logo} alt="logo" />
          </div>
          <nav id="header-nav">
            <div className="menu">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span></span>
                  <span></span>
                  <span></span>
              </button>
              <div id="navbar">
                <Pager>{pagesNumbers}</Pager>
              </div>
            </div>
          </nav>
        </header>
        <ReactPageScroller pageOnChange={this.handlePageChange} customPageNumber={this.state.currentPage}>
          <Main btn={this.state.currentPage}></Main>
          <Portfolio />
          <div>3번째 페이지</div>
        </ReactPageScroller>
      </>
    );
  }
}
