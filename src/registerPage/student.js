import React, { Component } from 'react';
import Student_box from './student_box';
import {BrowserView, MobileView} from 'react-device-detect';

class Student extends Component {
  render() {
    return (
      <div>
        <BrowserView>
        <div style={{backgroundColor:'#e1eded'}} className='bg-student'>
            <div style={{paddingTop:'70px'}}></div>
            <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <h1 style={{fontWeight:'bolder'}}>Your Dream <span style={{color:'teal'}}>Job</span> Is Waiting For You</h1>
                    <br/><h4>Register And Apply To 10000+ Opportunities</h4><br/>
                    <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;Internships</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;WFH Jobs</span>
                    <div style={{paddingTop:'40px'}}></div>
                    <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;Fresher Jobs</span>
                </div>
                <div className='col-4'>
                    <Student_box/>
                </div>
            </div>
            </div>
        </div>
        </BrowserView>
        <MobileView>
        <div style={{backgroundColor:'#e1eded'}}>
            <div style={{paddingTop:'70px'}}></div>
            <div className='container'>
              <div style={{textAlign:'center', alignContent:'center'}}>
                  <h1 style={{fontWeight:'bolder'}}>Your Dream <span style={{color:'teal'}}>Job</span> Is Waiting For You</h1>
                  <br/><h4>Register And Apply To 10000+ Opportunities</h4><br/>
                  <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;Internships</span>
                  <div style={{paddingTop:'40px'}}></div>
                  <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;WFH Jobs</span>
                  <div style={{paddingTop:'40px'}}></div>
                  <span className='register-tag'><span className='inline-icon material-icons' style={{color:'green'}}>check_circle</span>&nbsp;&nbsp;Fresher Jobs</span>
              </div>
              <div style={{paddingTop:'70px'}}></div>
              <div>
                  <Student_box/>
              </div>
            </div>
            <div style={{paddingTop:'70px'}}></div>
        </div>
        </MobileView>
      </div>
    );
  }
}

export default Student;