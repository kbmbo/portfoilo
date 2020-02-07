import React from 'react';
import Main from './ContentJs/Main';
import Portfolio from './ContentJs/Portfolio';

const Content = () => {
    return (
      <>
        <Main ref={refs.Menu1}></Main>
        <Portfolio ref={refs.Menu2}></Portfolio>
      </>
    );
}

export default Content;
