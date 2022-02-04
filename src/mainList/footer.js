import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import {BrowserView, MobileView} from 'react-device-detect';

class Footer extends Component {
  render() {
    return (
    <div>
        <MobileView>
        <div style={{zIndex:'10'}}>
            <div style={{backgroundColor:'#2b2a2a', color:'white'}}>
                <div style={{paddingTop:'70px'}}></div>
                <div className='container'>
                    <div className='row'>
                        <h1>ReFier</h1><br/>
                        <p>Plot-76 D, Udyog Vihar, Phase-4, Section-18, Gurugram, Haryana, India - 122001</p>
                        <p><FaInstagram style={{fontSize: '1.5em'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaFacebookF style={{fontSize: '1.5em'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaTwitter style={{fontSize: '1.5em'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaLinkedin style={{fontSize: '1.5em'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaYoutube style={{fontSize: '1.5em'}}/></p>
                        <br/><br/><p>Sign up for job alerts</p>
                        <p style={{marginLeft:'10px', marginRight:'10px'}}>
                            <input type='email' required placeholder='Your Email Address' className='btn-submit' style={{borderWidth: '1px solid white', background:'transparent'}}/>
                            <button style={{borderWidth: '1px solid white', backgroundColor:'grey'}} className='btn-submit'>Submit</button>
                        </p>
                    </div> 
                    <br/><br/>
                    <div className='row'>
                        <div className='col-6'>
                            <h4>Discover</h4><br/>
                            <p className='text-hover'>Jobs</p>
                            <p className='text-hover'>Jobseeker</p>
                            <p className='text-hover'>College</p>
                            <p className='text-hover'>Enterprise</p>
                            <p className='text-hover'>Blog</p>
                            <p className='text-hover'>ISA</p>
                            <p className='text-hover'>Newsletter</p>
                        </div>
                        <div className='col-6'>
                            <h4>Company</h4><br/>
                            <p className='text-hover'>Contact Us</p>
                            <p className='text-hover'>About Us</p>
                        </div>
                    </div>
                    <br/><br/>
                    <div className='row'>
                        <div className='col-6'>
                            <h4>Contact</h4><br/>
                            <p className='text-hover'>+91-8790909745</p>
                            <p className='text-hover'>info@refier.com</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col-3 text-hover'>
                            <p style={{textAlign:'center'}}>Privacy |<br/>Policy  |</p>
                            {/* <div style={{borderLeft: '2px solid gray', height: '50px'}}></div> */}
                        </div>
                        <div className='col-3 text-hover'>
                            <p style={{textAlign:'center'}}>Terms |</p>
                            {/* <div style={{borderLeft: '2px solid gray', height: '50px'}}></div> */}
                        </div>
                        <div className='col-3 text-hover'>
                            <p style={{textAlign:'center'}}>Sitemap</p>
                        </div>
                    </div>
                    <div><p>Copyrights © 2021 All Rights Reserved by Refassist Solutions Pvt Ltd</p></div>
                </div>
            </div>
        </div>
        </MobileView>
        <BrowserView>
        <div style={{zIndex:'10'}}>
            <div style={{backgroundColor:'#2b2a2a', color:'white'}}>
                <div style={{paddingTop:'70px'}}></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <h1>ReFier</h1><br/>
                            <p>Plot-76 D, Udyog Vihar, Phase-4, Section-18, Gurugram, Haryana, India - 122001</p>
                            <FaInstagram style={{fontSize: '1.5em'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaFacebookF style={{fontSize: '1.5em'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaTwitter style={{fontSize: '1.5em'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaLinkedin style={{fontSize: '1.5em'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FaYoutube style={{fontSize: '1.5em'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br/><br/><p>Sign up for job alerts</p>
                            <input type='email' required placeholder='Your Email Address' className='btn-submit' style={{borderWidth: '1px solid white', background:'transparent'}}/>
                            <button style={{borderWidth: '1px solid white', backgroundColor:'grey'}} className='btn-submit'>Submit</button>
                        </div>
                        <div className='col-8'>
                            <div className='row'>
                                <div className='col-4'>
                                    <h4>Discover</h4><br/>
                                    <p className='text-hover'>Jobs</p>
                                    <p className='text-hover'>Jobseeker</p>
                                    <p className='text-hover'>College</p>
                                    <p className='text-hover'>Enterprise</p>
                                    <p className='text-hover'>Blog</p>
                                    <p className='text-hover'>ISA</p>
                                    <p className='text-hover'>Newsletter</p>
                                </div>
                                <div className='col-4'>
                                    <h4>Company</h4><br/>
                                    <p className='text-hover'>Contact Us</p>
                                    <p className='text-hover'>About Us</p>
                                </div>
                                <div className='col-4'>
                                    <h4>Contact</h4><br/>
                                    <p className='text-hover'>+91-8790909745</p>
                                    <p className='text-hover'>info@refier.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <hr/>
                    <div className='row'>
                        <div className='col-4'>
                            <p>Copyrights © 2021 All Rights Reserved by Refassist Solutions Pvt Ltd</p>
                        </div>
                        <div className='col-8'>
                            <div className='row'>
                                <div className='col-4 text-hover'>
                                    <p style={{textAlign:'right'}}>Privacy Policy &nbsp;&nbsp;|</p>
                                </div>
                                <div className='col-4 text-hover'>
                                    <p style={{textAlign:'right'}}>Terms &nbsp;&nbsp;|</p>
                                </div>
                                <div className='col-4 text-hover'>
                                    <p style={{textAlign:'right'}}>Sitemap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </BrowserView>
    </div>
    );
  }
}

export default Footer;