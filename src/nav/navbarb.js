import { Dropdown } from 'react-bootstrap';
import React, { Component } from 'react';
import LoginButton from './modalElement/LoginButton';
import Login from './login';

class Navbarb extends Component {
  render() {
    return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingTop:'20px', paddingBottom:'20px', height:'80px'}}>
    <div className="container-fluid container">
        <a className="navbar-brand" href="#" style={{color:'#558c89', fontSize:'40px', fontWeight:'bold'}}>ReFier</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <form className="d-flex">
            <span className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><span style={{color:'black', fontWeight:'bold'}}>Contact&nbsp;Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>
            </span>
            <Dropdown >
            <Dropdown.Toggle style={{background: 'transparent', border:'transparent', color:'black'}} id="dropdown-basic">
                <span style={{color:'black', fontWeight:'bold'}}>Marketplace&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;</Dropdown.Toggle>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Dropdown.Menu style={{textAlign:'center'}}>
                <Dropdown.Item href="#/action-1"><span style={{color:'black'}}>Marketplace</span></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><span style={{color:'black'}}>Cohort</span></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><span style={{color:'black'}}>Courses</span></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><span style={{color:'black'}}>Webinars</span></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <span className="nav-item">
            <a className="nav-link active" aria-current="page" href='/jobs'><span style={{color:'black', fontWeight:'bold'}}>Jobs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>
            </span>
            
            {/* <span style={{}} className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
                <span style={{color:'black', fontWeight:'bold', border:'solid #000 1px', padding:'4.5px 40px 4.5px 40px', borderRadius:'0.2rem'}}>Login</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </span> */}

            <Login/>

            {/* <span style={{}} className="nav-item">
                <span className="nav-link active" aria-current="page" href="#" style={{background:'transparent', color:'black', fontWeight:'bold', border:'solid #000 1px', padding:'4.5px 40px 4.5px 40px', borderRadius:'0.2rem'}}><LoginButton/></span>
            </span> */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Dropdown >
            <Dropdown.Toggle style={{background: '#000', border:'transparent'}} id="dropdown-basic"><span style={{padding:'0 20px 0 20px'}}>Register</span></Dropdown.Toggle>
            <Dropdown.Menu style={{textAlign:'center'}}>
                <Dropdown.Item href='/register-student'>As a Student</Dropdown.Item>
                <Dropdown.Item href='/register-enterprise'>As an Enterprise</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </form>
        </div>
    </div>
    </nav>
    </div>
    );
  }
}

export default Navbarb;