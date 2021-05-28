import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HumburgerItems extends Component {

      constructor(props) {
            super(props);

      }

      render() {


                  let style = "none";
                  if(this.props.menuOpen.menuOpen == true) {
                        style = "block";
                  }

            return (

                        <div className="humburger-items w-100 mx-auto text-center desktop-none" style={{display:   style }}>
                              
                              <div className="row">
                                    <div className="col-12">
                                          <div className="nav-item">
                                                <Link to="/">Home</Link>
                                          </div>
                                    </div>

                                    <div className="col-12">
                                          <div className="nav-item">
                                                <Link to="/store-locator">Store Locator</Link>
                                          </div>
                                    </div>

                                    <div className="col-12">
                                          <div className="nav-item">
                                                <button className="btl-btn ">Login to the suite</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                                    

                       
            );
      }
}
