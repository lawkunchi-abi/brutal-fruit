import React, { Component } from 'react';
import Map from './Map';

export default class Filter extends Component {
      render() {
            let imageUrl = "images/img-01.png";

            return (

                  <div className="store-locator">
                        <div className="store-header" style={{backgroundImage: "url(" + imageUrl + ")"}}>
                              <h2 className="text-center">Find a store near you</h2>
                        </div>
                        <div className="store-locator-filter">
                              <div className="container mx-auto">
                                    <div className="row">
                                          <div className="col-xl-6">
                                                <select>
                                                      <option>Province</option>
                                                      <option>Province</option>
                                                      <option>Province</option>
                                                      <option>Province</option>
                                                </select>
                                          </div>
                                          <div className="col-xl-6">
                                                <select>
                                                      <option>Store</option>
                                                      <option>Store</option>
                                                      <option>Store</option>
                                                      <option>Store</option>
                                                </select>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <Map/>
                  </div>

            
            );
      }
}
