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
    const menus = ["home", "Portfolio"];
    const pagesNumbers = menus.map((menu, index) => (
      <Pager.Item key={index} eventKey={index} onSelect={this.handlePageChange}>{menu}</Pager.Item>
    ));

    return [...pagesNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <>
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
                <Pager>{pagesNumbers}</Pager>
              </div>
            </div>
          </nav>
        </header>
        <ReactPageScroller pageOnChange={this.handlePageChange} customPageNumber={this.state.currentPage}>
          <Main />
          <Portfolio />
        </ReactPageScroller>
      </>
    );
  }
}
