import React, { Component } from 'react';
import {Route, Link, Switch } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-rosuter-dom';
import Humburger from './humburger/Humburger';
export default class Header extends Component {

      constructor(props) {
            super(props);
      }

      render() {

            
            return (

                  

                  <div className="page-header">
s                             
                              
                              
                              <div className="row container mx-auto">
                                    <div className="col-md-6 col-8">
                                          <div className="logo">
                                          <Link to="/">
                                                <img src="images/brutal-fruit-logo-white.png"/>
                                                </Link>
                                          </div>
                                    </div>
                                    <div className="col-md-6 mobile-none">
                                          <div className="row">
                                                <div className="col-md-3">
                                                      <div className="nav-item">
                                                            <Link to="/">Home</Link>
                                                      </div>
                                                </div>
                                                <div className="col-md-5">
                                                      <div className="nav-item">
                                                            <Link to="/store-locator">Store Locator</Link>
                                                      </div>
                                                </div>
                                          
                                                
                                                <div className="col-md-3">
                                                      <div className="nav-item nav-button">
                                                            <button className="btl-btn">Login to the suite</button>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="col-md-5 col-4 w-100 desktop-none">
                                          <Humburger/>

                                    </div>
                              </div>

                            
                              


                        
                  </div>

            
            );
      }
}
