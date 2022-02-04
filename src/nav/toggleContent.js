import React, { Component } from 'react';
import OverlayMenu from 'react-overlay-menu';
// import MyMenu from './components/ui/MyMenu';
import { Dropdown } from 'react-bootstrap';
import LoginButton from './modalElement/LoginButton';
import Login from './login';
 
class ToggleContent extends Component {

  render() {
    return (
      <div style={{textAlign:'left'}}>
        <br/><br/>
        <Dropdown >
            <Dropdown.Toggle style={{background: 'transparent', border:'transparent', color:'white'}} id="dropdown-basic">
                <span style={{color:'white', fontWeight:'bold'}}>Marketplace&nbsp;&nbsp;</span>&nbsp;</Dropdown.Toggle>
            <Dropdown.Menu style={{textAlign:'center'}}>
                <Dropdown.Item href="#/action-1"><span style={{color:'black'}}>Marketplace</span></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><span style={{color:'black'}}>Cohort</span></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><span style={{color:'black'}}>Courses</span></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><span style={{color:'black'}}>Webinars</span></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <span style={{}} className="nav-item">
          <span className="nav-link active" aria-current="page" href="#" style={{color:'white', fontWeight:'bold'}}><Login style={{color:'white'}}/></span>
        </span>
        <Dropdown >
          <Dropdown.Toggle style={{background: 'transparent', border:'transparent', color:'white', fontWeight:'bold'}} id="dropdown-basic"><span>Register&nbsp;&nbsp;</span></Dropdown.Toggle>
          <Dropdown.Menu style={{textAlign:'center'}}>
              <Dropdown.Item href='/register-student'>As a Student</Dropdown.Item>
              <Dropdown.Item href='/register-enterprise'>As an Enterprise</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default ToggleContent;