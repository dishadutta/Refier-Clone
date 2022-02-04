import React, { Component } from 'react';
import Enquiry from './enquiry';
import Filter from './filter';
import Footer from './footer';
import Jobs from './jobs';
import {BrowserView, MobileView} from 'react-device-detect';

class Listing extends Component {
  render() {
    return (
    <div>
      <BrowserView>
      <div style={{backgroundColor:'#e1eded'}}>
      <div class="container px-4" style={{paddingTop:'70px'}}>
        <div class="row gx-5">
            <div class="col-3">
              <div class="p-3 border bg-light" style={{borderRadius: '6px'}}><Filter/></div>
            </div>
            <div class="col-6">
              <div><Jobs/></div>
            </div>
            <div class="col-3">
              <div class="p-3 border bg-light" style={{borderRadius: '6px'}}><Enquiry/></div>
            </div>
        </div>
      </div>  
      </div>
      <Footer/>  
      </BrowserView> 
      <MobileView>
      <div style={{backgroundColor:'#e1eded'}}>
      <div className='container' style={{paddingTop:'70px'}}>
        <div className='row' style={{marginLeft:'5px', marginRight:'5px'}}>
          <div className='col-sm bg-light' style={{borderRadius: '7px'}}><Filter/></div>
        </div>
        <div style={{paddingTop:'20px'}}></div>
        {/* <div className='row' style={{marginLeft:'5px', marginRight:'5px'}}>
          <div className='col-sm bg-light' style={{borderRadius: '6px'}}><Jobs/></div>
        </div> */}
        <div class="row">
          <div><Jobs/></div>
        </div>
      </div>
      </div>
      <Footer/>  
      </MobileView>
    </div>
    );
  }
}

export default Listing;