import React from 'react';
const Main = () => {
   return (
    <section className="main">
      <div className="center">
        <div className="con">
          <div className="txt">
            <h1>The flower that blooms in adversity is the rarest and most beautiful of all</h1>
            <h5>- Mulan -</h5>                  
            {/* <button className="btn" onClick={this.props.pageOnChange}>see portfolio</button> */}
          </div>
        </div>
      </div>
      <div class="say-box">
        <div className="txt">
          <h4>The flower that blooms in adversity is the rarest and most beautiful of all.</h4>
          <h4>역경을 이겨내고 피어난 꽃이 모든 꽃 중에 가장 아름답다.</h4>
        </div>
      </div>
    </section>
  );
}

export default Main;
