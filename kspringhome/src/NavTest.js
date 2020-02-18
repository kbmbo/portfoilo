import React from "react";
import { Pager } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import Main from "./Content/Main";
import Portfolio from "./Content/Portfolio";

// import FirstComponent from "./Cont/FirstComponent";
// import SecondComponent from "./Cont/SecondComponent";
// import ThirdComponent from "./Cont/ThirdComponent";
// import FourthComponent from "./Cont/FourthComponent";
// import FifthComponent from "./Cont/FifthComponent";

import "./Cont/index.css";

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
    const pagesNumbers = menus.map((menu, index) => (<Pager.Item key={index} eventKey={index} onSelect={this.handlePageChange}>{menu}</Pager.Item>));

    return [...pagesNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Main />
          <Portfolio />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
        </>
    );
  }
}