import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Allproduct from './product/allproduct';
import Navigator from './product/naviagator';
import About from './product/about';
import Addproduct from './product/addproduct';

export default function App() {
  return (
    <Fragment>
      <div className="container">
        <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route path="/" component={About} exact/>
            <Route path="/about/:product" component={About} />
            <Route path="/addproduct" component={Addproduct} />
            <Route path="/products" component={Allproduct} />
          </Switch>
        </div>
        </BrowserRouter>
        </div>
      </Fragment>
  )
}
