import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalIcon } from './statics/iconfont/iconfont'
import { GlobalStyle }  from './globalstyle'

ReactDOM.render(
  <div>
    <GlobalStyle />
    <GlobalIcon />
    <App />
  </div>,
  document.getElementById('root')
);
