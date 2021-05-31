import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Humburger from './humburger/Humburger';
export default class Header extends Component {

      render() {
            
            return (

                  

                  <div className="page-header">
                              <div className="row container mx-auto">
                                    <div className="col-md-6 col-8">
                                          <div className="logo">
                                          <Link to="/brutal-fruit">
                                                <img src="/brutal-fruit/images/brutal-fruit-logo-white.png" alt ="logo"/>
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
