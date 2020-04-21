import React from 'react';
import ReactDOM from 'react-dom';


import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const entryNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  entryNode
);

serviceWorker.unregister();
