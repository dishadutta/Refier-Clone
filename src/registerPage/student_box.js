import { borderRadius } from '@mui/system';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class Student_box extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          number: '',
          email: '',
          password: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleChange(event) {
          alert('Successfully Logged In');
      }

  render() {
    return (
    <div>
    <div style={{backgroundColor:'white', borderRadius:'7px'}} className='container'>
        <div style={{paddingTop:'40px'}}></div>
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            cookiePolicy={'single_host_origin'}
            className='googleButton'
        />
        <br/><br/>
        <div class="separator">OR</div>
        <form>
          <div className="mb-3">
            <label for="name" className="form-label requiredstar">Full Name</label>
            <input  type="text" 
                    className="form-control"
                    name='name'
                    required
                    value={this.state.name} 
                    placeholder='John Doe'
                    onChange={this.handleInputChange} />
          </div>
          <div className="mb-3">
            <label for="number" className="form-label requiredstar">Mobile Number</label>
            <input  type="number" 
                    className="form-control" 
                    name='email'
                    required
                    value={this.state.email} 
                    onChange={this.handleInputChange} 
                    placeholder='+91888212712'/>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label requiredstar">Email</label>
            <input  type="email" 
                    className="form-control" 
                    name='email'
                    required
                    value={this.state.email} 
                    onChange={this.handleInputChange} 
                    placeholder='Email'
                    aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label requiredstar">Password</label>
            <input  type="password" 
                    className="form-control" 
                    name='email'
                    required
                    value={this.state.email} 
                    onChange={this.handleInputChange} 
                    placeholder='Must be atleast 8 characters'/>
          </div>
          <span style={{fontSize:'x-small', fontWeight:'400'}}>By signing up, you agree to our  <span style={{color:'teal'}}>Terms and Conditions</span></span><br/>
          <button type="submit" className="mb-3 btn-register" onClick={this.handleChange}>Sign Up</button>
        </form>
        <div style={{textAlign:'center', fontSize:'small', fontWeight:'600'}}>Already have an account? <span style={{color:'teal'}}>Login</span></div>
    </div>
    </div>
    );
  }
}

export default Student_box;