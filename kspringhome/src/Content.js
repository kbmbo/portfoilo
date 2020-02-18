import React from 'react';
import ReactPageScroller from "react-page-scroller";
import Main from './Content/Main';
import Portfolio from './Content/Portfolio';

const Content = () => {
    return (
      <>
      <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Main />
          <Portfolio />
        </ReactPageScroller>
        
      </>
    );
}

export default Content;
