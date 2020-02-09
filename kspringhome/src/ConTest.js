import React from 'react';
import A from './Cont/A';
import B from './Cont/B';

const ConTest = (refs) => {
    return (
      <>
        <A ref={refs.EL1}></A>
        <B ref={refs.EL2}></B>
      </>
    );
}

export default ConTest;
