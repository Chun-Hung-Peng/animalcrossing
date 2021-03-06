import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header/index.js'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <Provider store = {store}>
          <BrowserRouter>
          <Header />
          <div>
            <Route path = '/' exact component = {Home}></Route>
            <Route path = '/detail/:id' exact component = {Detail}></Route>
            <Route path = '/login' exact component = {Login}></Route>
            <Route path = '/write' exact component = {Write}></Route>
            </div>
          </BrowserRouter>
    </Provider>
  );
}

export default App;
