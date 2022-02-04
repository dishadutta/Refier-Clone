import React, { Component } from 'react';
import {jobopenings} from './constants';
import {BrowserView, MobileView} from 'react-device-detect';

class Jobs extends Component {
  render() {
    return (
    <div>

      <div>{jobopenings.map(jobopening => (
      <div key={jobopening.id}>
        <div className='container bg-light' style={{borderRadius: '7px'}}>
        <div className='row'>
          <div className='col-9' style={{fontWeight:'bold', paddingTop:'20px'}}>
            {jobopening.title}<br/><br/><span style={{color:'gray'}}>{jobopening.company}</span>
          </div>
          <div className='col-3'><img src={require('./img_job.jpg')} style={{borderRadius:'50%', width:'100%', height:'100%'}} /></div>
        </div>
        <hr/>
        <div className='row'>
          <div className='col-3'>
            <span class="inline-icon-job-location material-icons">location_on</span>{jobopening.location}
          </div>
          <div className='col-9'>
            <span class="inline-icon material-icons">business_center</span>&nbsp; {jobopening.experience}
          </div>
        </div>
        <br/>
        <div><p style={{fontWeight:'light', fontSize:'small'}}>{jobopening.description}</p>
        </div>
        <BrowserView>
          <div className='row'>
              <div className='col-9' style={{fontWeight:'bold'}}>
                <span className='type-text'>{jobopening.type}</span> &nbsp;&nbsp; 
                <span className='type-text'>{jobopening.category}</span> &nbsp;&nbsp; 
                {
                  jobopening.duration ? (
                    <span className='type-text'>{jobopening.duration}</span>
                    ) : (<div></div>)
                }
              </div>
            <div className='col-3'>
              <button className='apply-button'>Apply Now</button>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div className='row'>
              <div className='col-6' style={{fontWeight:'bold'}}>
                <p><u>View Details</u></p>
              </div>
            <div className='col-6'>
              <button className='apply-button'>Apply Now</button>
            </div>
          </div>
        </MobileView>
        <br/>
      </div>
      <div style={{backgroundColor:'#e1eded', height:'20px'}}></div>
      </div>
      ))}
      
      </div> 
      
    </div>
    );
  }
}

export default Jobs;



{/* <div className='container bg-light' style={{borderRadius: '4px'}}>
<div className='row'>
  <div className='col-9' style={{fontWeight:'bold'}}>
    Business Development Executive (Only for Female Candidates)<br/><br/><span style={{color:'gray'}}>Easeassist</span>
  </div>
  <div className='col-3'><img src={require('./img_job.jpg')} style={{borderRadius:'50%', width:'100%', height:'100%'}} /></div>
</div>
<hr/>
<div className='row'>
  <div className='col-3'>
    <span class="inline-icon material-icons">location_on</span>Remote
  </div>
  <div className='col-9'>
    <span class="inline-icon material-icons">business_center</span>&nbsp; 0+ years Experience
  </div>
</div>
<br/>
<div><p style={{fontWeight:'light', fontSize:'small'}}>Immediate Joining !! Fast Growing Business Solutions Startup is looking for passionate 
  Female Business Development Professionals who would l...</p>
</div>
<div className='row'>
  <div className='col-9' style={{fontWeight:'bold'}}>
    <span className='type-text'>REMOTE</span> &nbsp;&nbsp; <span className='type-text'>Full-Time</span>
  </div>
  <div className='col-3'>
    <button className='apply-button'>Apply Now</button>
  </div>
</div>
<br/>
</div>
<div style={{backgroundColor:'#e1eded', height:'20px'}}></div> */}