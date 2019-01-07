import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Board count = {70}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
