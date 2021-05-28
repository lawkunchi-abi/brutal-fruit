import React, { Component } from 'react';

export default class Footer extends Component {
      render() {
            let awareLogo = "images/Aware_Logo.png";
            let tapIntoYourBeer = "images/Tap_Logo.png";
            return (

                  <div className="page-footer">
	                  <div className="footer-container mx-auto">
                        <div className="first-row">
                        <div className="row">
                              <div className="col-xl-3 col-xs-12">
                                    <div className="aware-logo">
                                          <img src="images/Aware_Logo.png" />
                                    </div>
                              </div>
                              <div className="col-xl-9 col-xs-12">
                                   <div className="row footer-items">
                                    <div className="col-xl-2 col-xs-12">
                                                <div className="footer-item"><a>Rules Of the House</a></div>
                                          </div>
                                          <div className="col-xl-2 col-xs-12">
                                                <div className="footer-item"><a>Contact Us</a></div>
                                          </div>

                                          <div className="col-xl-2 col-xs-12">
                                                <div className="footer-item"><a>Terms of Use</a></div>
                                          </div>

                                          <div className="col-xl-2 col-xs-12">
                                                <div className="footer-item"> <a>Privacy Policy</a></div>
                                          </div>

                                          <div className="col-xl-2 col-xs-12">
                                                <div className="footer-item"><a>Cookie Policy</a></div>
                                          </div>

                                          <div className="col-xl-2 col-xs-12">
                                                <div className="footer-item mr-none"><a>Terms and conditions</a></div>
                                          </div>
                                   </div>
                              </div>
                        </div>
                        </div>
                        <div className="footer-divider mt-5"></div>

                        <div className="row mt-5">
                              <div className="col-xl-4">
                                    <div className="mobile-none abi-text">
                                          <h6>ANHEUSER BUSCH INBEV  2021.</h6>
                                          <p className="text-uppercase">Not for sale ro persons under the age of 18. enjoy responsibily. <br/> don to share this content with minors</p>
                                    
                                    </div>
                              </div>
                              <div className="col-xl-4">
                                    <div className="tap-logo">
                                          <img src="images/tap-logo-white.png"/>
                                    </div>
                              </div>
                              <div className="col-xl-4">
                                    <div className="row social-icons">
                                          <div className="col-xl-3 col-3">
                                                <div className="social-icon">
                                                      <a>
                                                            <img src="images/icon-facebook-white.png"/>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className="col-xl-3 col-3">
                                                <div className="social-icon">
                                                      <a>
                                                            <img src="images/icon-twitter-white.png"/>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className="col-xl-3 col-3">
                                                <div className="social-icon">
                                                      <a>
                                                            <img src="images/icon-instagram-white.png"/>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className="col-xl-3 col-3">
                                                <div className="social-icon">
                                                      <a>
                                                            <img src="images/icon-youtube-white.png"/>
                                                      </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="col-xl-4">
                                    <div className="desktop-none abi-text">
                                          <h6>ANHEUSER BUSCH INBEV  2019.</h6>
                                          <p className="text-uppercase">Not for sale ro persons under the age of 18. enjoy responsibily. <br/> don to share this content with minors</p>
                                    
                                    </div>
                              </div>
                        </div>
                        </div>
                  </div>

            
            );
      }
}
