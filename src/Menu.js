import React, { Component } from 'react';
import Navbar from './nav/navbar';
import Listing from './mainList/listing';

class Menu extends Component {
  render() {
    return (
    <div >
      <div style={{backgroundColor:'white'}}><Navbar/></div>
      {/* <div style={{backgroundColor:'#e1eded'}}>
        <div style={{paddingTop:'70px'}}></div>
        <Listing/>
        <div style={{paddingTop:'70px'}}></div>
      </div> */}
    </div>
    );
  }
}

export default Menu;