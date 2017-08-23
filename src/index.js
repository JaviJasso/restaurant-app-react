import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS
import About from '../src/components/About';
import Menu from '../src/components/Menu';
import Findus from '../src/components/Findus';
import Layout from '../src/components/Layout';
import App from '../src/components/App';



ReactDOM.render(
  <BrowserRouter>
    <Layout>
    <Switch>
      <Route path='/Findus' component={Findus} />
      <Route path='/Menu' component={Menu} />
      <Route path='/' component={About} />
    </Switch>
  </Layout>
  </BrowserRouter>
  ,document.getElementById('root')
);
  registerServiceWorker();
