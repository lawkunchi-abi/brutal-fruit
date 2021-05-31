import React, { Component } from 'react';
import MapWrapper from './MapWrapper';
import {storeList} from '../../brutalStores';
import OutletList from '../../stores.json';

export default class Filter extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  province: '',
                  stores: OutletList['OutletList'],
                  // stores: storeList,
            };
        
            this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
            this.setState({province: event.target.value});
            let filteredStores = OutletList['OutletList'].filter( (auto) => auto.City.includes(event.target.value));
            this.setState({
                  stores: filteredStores
            })

      }

      render() {
            let imageUrl = "brutal-fruit/images/img-01.png";

            let {stores} = this.state;


            return (

                  <div className="store-locator">
                        <div className="store-header" style={{backgroundImage: "url(" + imageUrl + ")"}}>
                              <h2 className="text-center">Find a store near you</h2>
                        </div>
                        <div className="store-locator-filter">
                              <div className="container mx-auto">
                                    <div className="row">
                                          <div className="col-xl-6">
                                                <select province={this.state.value} onChange={this.handleChange}>
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

                        <MapWrapper stores={stores}/>
                  </div>

            
            );
      }
}
