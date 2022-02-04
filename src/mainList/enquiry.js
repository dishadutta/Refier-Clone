import React, { Component } from 'react';
// import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-dropdown-select';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

class Enquiry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
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



  render() {

    this.state = {
      optionsCountry: [{name: 'Algeria +213', id: 1},{name: 'Brazil +55', id: 2}, {name: 'Chile +56', id: 3},{name: 'Denmark +45', id: 4},{name: 'Egypt +20', id: 5},
      {name: 'France +33', id: 6},{name: 'Germany +49', id: 7}, {name: 'Hong Kong +852', id: 8}, {name: 'India +91', id: 9}, {name: 'Thailand +66', id: 10}]
  };

    return (
    <div>
        <h6 style={{color:'#3a7b99', fontWeight:'600', fontSize:'20px'}}>Confused? We can help you</h6>
        <hr style={{height:'1px', border:'none', color:'#333', backgroundColor:'#333'}}/>
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
          <div className="mb-3" >
            <label for="number" className="form-label mobile-input">Mobile Number</label>
            <PhoneInput 
              className='mobile-input'
              country={'in'}
              value={this.state.phone}
              onChange={phone => this.setState({ phone })}
              required
            />
          </div>
          <button type="submit" className="mb-3 btn-enquiry">Submit</button>
        </form>
    </div>
    );
  }
}

export default Enquiry;