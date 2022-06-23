import logo from './logo.svg';
import './App.css';
import './CustomPage/Menu.css'
import './CustomPage/OrdersPage.css'
import './CustomPage/AccountPage.css'
import './CustomPage/StaticPage.css'

import Menu from './Page/Menu';
import StorePage from './Page/StorePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React, { useState } from "react";
import OrdersPage from './Page/OrdersPage';
import AccountPage from './Page/AccountPage';
import StaticPage from './Page/StaticPage';




function Routerx() {

  



    return (


      <div class="container">
      <div class="view-account">
          <section class="module">
              <div class="module-inner">

     
      <Router>
      <Menu/>
      <Routes>
        <Route path='/store/*' element={<StorePage />} />
        <Route path='/orders/*' element={<OrdersPage />} />
        <Route path='/account/*' element={<AccountPage />} />
        <Route path='/static/*' element={<StaticPage />} />
        <Route path='*' element={<StorePage />} />
      </Routes>
    </Router>

    </div>
          </section>
      </div>
  </div>

    );
 





}

export default Routerx;
