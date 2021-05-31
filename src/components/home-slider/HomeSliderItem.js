import React, { Component } from 'react';

export default class HomeSliderItem extends Component {


      render() {

            const {
	      	props: {
                        activeSlide,
	      	},
	    	} = this;


            return (

        	<div className="home-slider-item" style={{backgroundImage: "url(" + activeSlide.imageUrl + ")"}}>
               

                 <div className="home-slider-item-content">
                       <h3>{activeSlide.h3}</h3>
                       <h1 className="btl-mt-40 ">{activeSlide.h1}</h1>
                       <h6 className="btl-mt-40 ">{activeSlide.h6}</h6>
                       <button to="{activeSlide.buttonUrl}" className="btl-btn btl-btn-primary btl-mt-40 ">{activeSlide.buttonText}</button>
                 </div>
            </div>
            );
      }
}
