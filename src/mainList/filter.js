import React, { Component } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import Switch from "react-switch";
// import Slider from 'react-button-slider'
import Slider from '@mui/material/Slider';
// or
// import { Slider } from '@mui/material';

class Filter extends Component {

    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(checked) {
        this.setState({ checked });
      }

  render() {

    this.state = {
        optionsCategory: [{name: 'Sales', id: 1},{name: 'Marketing', id: 2}, {name: 'HR', id: 3},{name: 'Finance', id: 4},{name: 'Project Management', id: 5},
        {name: 'Customer Care', id: 6},{name: 'Tech', id: 7}, {name: 'Specialized', id: 8}, {name: 'Leadership', id: 9}, {name: 'Production', id: 10}],
        optionsLocation: [{name: 'Chennai', id: 1},{name: 'Kolkata', id: 2}, {name: 'Bangalore', id: 3},{name: 'Mumbai', id: 4},{name: 'Bhopal', id: 5},
        {name: 'Pune', id: 6},{name: 'Ahmedabad', id: 7}, {name: 'Dehi', id: 8}, {name: 'Thane', id: 9}, {name: 'Meerut', id: 10}]
    };

    // this.state = {
    //     optionsLocation: [{name: 'Chennai', id: 1},{name: 'Kolkata', id: 2}, {name: 'Bangalore', id: 3},{name: 'Mumbai', id: 4},{name: 'Bhopal', id: 5},
    //     {name: 'Pune', id: 6},{name: 'Ahmedabad', id: 7}, {name: 'Dehi', id: 8}, {name: 'Thane', id: 9}, {name: 'Meerut', id: 10}]
    // }

    return (
    <div style={{color:'black', fontWeight: '500'}}>
        <span><span class="inline-icon material-icons">sort</span>&nbsp;Filters</span><br/>
        <br/><span>Category</span>
        <Multiselect
        options={this.state.optionsCategory} 
        selectedValues={this.state.selectedValue} 
        onSelect={this.onSelect} 
        onRemove={this.onRemove} 
        displayValue="name" 
        />
        <br/><span>Location</span>
        <Multiselect
        options={this.state.optionsLocation} 
        selectedValues={this.state.selectedValue} 
        onSelect={this.onSelect} 
        onRemove={this.onRemove} 
        displayValue="name" 
        />
        <br/><div className='row'>
            <div className='col-8'>Work From Home</div>
            <div className='col-4'>&nbsp;<Switch
          className="react-switch"
          onChange={this.handleChange
        }/></div>
        <br/><div className='row'>
            <div className='col-9'>Only Internships</div>
            <div className='col-3'><Switch
          className="react-switch"
          onChange={this.handleChange
        }/></div>
        <br/><span>Desired Minimum Monthly <br/>Pay</span>
        
        <Slider
            aria-label="LAkhs"
            defaultValue={40}
            // getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={10}
            max={100}
            style={{color:'teal'}}
        />
    </div> 
    </div>
    </div>
    );
  }
}

export default Filter;