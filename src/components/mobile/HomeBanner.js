import React, { Component } from 'react';

export default class HomeBanner extends Component {
      render() {

            let imageUrl = "images/img-01.png";
            return (

                  <div>
                        <div className="desktop-none mobile-banner" style={{backgroundImage: "url(" + imageUrl + ")"}}>
                             <div className="banner-content">
                                    <h2>Meet Ruby</h2>
                                    <h3>The GRAND DELUXE</h3>
                             </div>
                        </div>
                        
                        <div className="page-gradient"></div>
                              
                  </div>
            );
      }
}


