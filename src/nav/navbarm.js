import React, { Component } from 'react';
import ToggleIcon from './toggleicon';
import LoginButton from './modalElement/LoginButton';
import { Dropdown } from 'react-bootstrap';
import Login from './login';

export default class navbarm extends Component {
  render() {
    return (
    <div>
        <nav>
            <div className='container'>
                <div className='row'>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-2'>
                            <h4 href="#" style={{color:'#558c89', fontWeight:'bold'}}>ReFier</h4>
                        </div>
                        <div className='col-4'>
                            {/* <span style={{}} className="nav-item">
                            <span className="nav-link active" aria-current="page" href="#" 
                                style={{background:'transparent', color:'black', fontWeight:'bold', border:'solid #000 1px', 
                                borderRadius:'0.2rem', width:'100px', textAlign:'center'}}><LoginButton/></span>
                            </span> */}
                            <Login/>&nbsp;&nbsp;
                        </div>
                        <div className='col-4'>
                            <Dropdown >
                                <Dropdown.Toggle style={{background: '#000', border:'transparent'}} id="dropdown-basic"><span style={{textAlign:'center', width:'80px'}}>Register</span></Dropdown.Toggle>
                                <Dropdown.Menu style={{textAlign:'center'}}>
                                    <Dropdown.Item href='/register-student'>As a Student</Dropdown.Item>
                                    <Dropdown.Item href='/register-enterprise'>As an Enterprise</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className='col-2'><ToggleIcon/></div>
                </div>
            </div>
        </nav>
    </div>
    );
  }
}


// import React, { Component } from 'react';
// import OverlayMenu from 'react-overlay-menu';
// import ToggleMenu from './toggleNav';
// // import MyMenu from './components/ui/MyMenu';

// class Navbarm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOpen: false };
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }
 
//   toggleMenu() {
//     this.setState({ isOpen: !this.state.isOpen });
//   }
 
//   render() {
//     return (
//       <div>
//         <button type="button" onClick={this.toggleMenu}>Open menu</button>
//         <OverlayMenu 
//           open={this.state.isOpen} 
//           onClose={this.toggleMenu}
//         >
//           {/* <MyMenu /> */}
//           <ToggleMenu/>
//         </OverlayMenu>
//       </div>
//     );
//   }
// }

// export default Navbarm;