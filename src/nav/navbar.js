import React, { Component } from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import Navbarb from './navbarb';
import Navbarm from './navbarm';

class Navbar extends Component {
  render() {
    return (
    <div>
        <BrowserView><Navbarb/></BrowserView>
        <MobileView><Navbarm/></MobileView>
    </div>
    );
  }
}

export default Navbar;