import { borderRadius } from '@mui/system';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export const Form = ({ onSubmit }) => {

    return (
    <div>
    <div style={{backgroundColor:'white', borderRadius:'7px'}} className='container'>
        <div style={{paddingTop:'40px'}}></div>
        <h4>Login</h4>
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
            <label for="email" className="form-label requiredstar">Email</label>
            <input  type="email" 
                    className="form-control" 
                    name='email'
                    // required
                    // value={this.state.email} 
                    // onChange={this.handleInputChange} 
                    placeholder='Email'
                    aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label requiredstar">Password</label>
            <input  type="password" 
                    className="form-control" 
                    name='email'
                    required
                    // value={this.state.email} 
                    // onChange={this.handleInputChange} 
                    placeholder='Must be atleast 8 characters'/>
          </div>
          <span style={{fontSize:'x-small', fontWeight:'400',color:'teal'}}>Forgot Password?</span><br/>
          <button type="submit" className="mb-3 btn-register" >Login</button>
        </form>
        <div style={{textAlign:'center', fontSize:'small', fontWeight:'600'}}>New to Refier? Register as <a href='/register-student'><span style={{color:'teal'}}>Student</span></a> / <a href='/register-enterprise'><span style={{color:'teal'}}>Enterprise</span></a></div>
    </div>
    </div>
    );
}

export default Form;