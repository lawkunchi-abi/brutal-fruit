import React, { Component } from 'react';

export default class FooterBanner extends Component {
      render() {

            let imageUrl = "images/img-01.png";
            return (

                  <div className="footer-banner" style={{backgroundImage: "url(" + imageUrl + ")"}}>
	                  <h1 className="text-center text-uppercase">Get invites to our exclusive launches</h1>
                        <p className="text-center"><button className="btl-btn btl-btn-secondary">Join The Suite</button></p>
                  </div>

            
            );
      }
}
