import React from 'react';
import ReactDOM from 'react-dom';
import './css/font-awesome.css';
import './css/magnific-popup.css';
// import './css/fancybox/jquery.fancybox.css';
import './css/animate.css';
import './css/style.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();