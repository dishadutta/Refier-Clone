import React, { Component } from 'react';
import Enterprise_box from './enterprise_box';
import {BrowserView, MobileView} from 'react-device-detect';

class Enterprise extends Component {
  render() {
    return (
      <div>
        <BrowserView>
        <div style={{backgroundColor:'#e1eded'}} className='bg-enterprise'>
            <div style={{paddingTop:'70px'}}></div>
            <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <h1 style={{fontWeight:'bolder'}}>Hire The <span style={{color:'teal'}}>Best</span> Employees</h1>
                    <br/><h4>Register And Post Your Jobs For Free Now</h4><br/>
                    <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;12Mn + Job Seekers</span>
                    <div style={{paddingTop:'40px'}}></div>
                    <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;30,000 + Colleges across india</span>
                </div>
                <div className='col-4'>
                    <Enterprise_box/>
                </div>
            </div>
            </div>
            <div style={{paddingTop:'70px'}}></div>
        </div>
        </BrowserView>
        <MobileView>
        <div style={{backgroundColor:'#e1eded'}}>
            <div style={{paddingTop:'70px'}}></div>
            <div className='container'>
              <div style={{textAlign:'center'}}>
                  <h1 style={{fontWeight:'bolder'}}>Hire The <span style={{color:'teal'}}>Best</span> Employees</h1>
                  <br/><h4>Register And Post Your Jobs For Free Now</h4><br/>
                  <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;12Mn + Job Seekers</span>
                  <div style={{paddingTop:'40px'}}></div>
                  <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;30,000 + Colleges across india</span>
              </div>
              <div style={{paddingTop:'70px'}}></div>
              <div>
                  <Enterprise_box/>
              </div>
            </div>
            <div style={{paddingTop:'70px'}}></div>
        </div>
        </MobileView>
      </div>
    );
  }
}

export default Enterprise;