import React from 'react';
import { Route } from 'react-router';
 
// import {
//   App,
//   About,
//   Products,
//   Product,
//   Contact,
//   Nested,
// } from './components';

import Footer from "./Artem/Footer.jsx";
 
const NotFound = () => <h4>Not found 😞</h4>;
 
export const routes = (
  <Route path='/' title='App' component={Footer}>
    
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);
 
export default routes;