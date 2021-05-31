import React, { Component } from 'react';

export default class ProductItem extends Component {


      render() {

      	const {
	      	props: {
                        activeSlide,
	      	},
	    	} = this;

            return (

        	<div className="product-slider-item">
                    
                  <div className="row">

                  <div className="col-md-12 col-12  desktop-none">

                        <div className="product-slider-item-content">
                              <h4 className="product-title">{activeSlide.title}</h4>
                              <p className="product-description">{activeSlide.description}</p>

                              <div className="container w-75 product-nutrients desktop-none">
                                    <div className="row">
                                          <div className="col-4">
                                          <h5>{activeSlide.alcohol}</h5> 
                                         <p> Alcohol by volume %</p>
                                          </div>

                                          <div className="col-4">
                                          <h5>{activeSlide.alcohol}</h5> 
                                         <p> Alcohol by volume %</p>
                                          </div>

                                          <div className="col-4">
                                          <h5>{activeSlide.alcohol}</h5> 
                                         <p> Alcohol by volume %</p>
                                          </div>

                                          
                                    </div>

                                    <div className="row">
                                    <div className="col-4">
                                          <h5>{activeSlide.alcohol}</h5> 
                                         <p> Alcohol by volume %</p>
                                          </div>

                                          <div className="col-4">
                                          <h5>{activeSlide.alcohol}</h5> 
                                         <p> Alcohol by volume %</p>
                                          </div>

                                          <div className="col-4">
                                          <h5>{activeSlide.alcohol}</h5> 
                                         <p> Alcohol by volume %</p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>

                  <div className="col-md-6">
                        <div className="product-slider-item-image">
                              <img src={activeSlide.productImg} alt="product"/>
                        </div>
                  </div>

                  <div className="col-md-6 mobile-none">

                        <div className="product-slider-item-content">
                              <h4 className="product-title">{activeSlide.title}</h4>
                              <p className="product-description">{activeSlide.description}</p>
                              <table>
                                    <thead>
                                          <tr>
                                                <td>{activeSlide.alcohol}</td>
                                                <td>{activeSlide.energyKcal}</td>
                                                <td>{activeSlide.energy}</td>
                                                <td>{activeSlide.carbohydrates}</td>
                                                <td>{activeSlide.sugar}</td>
                                                <td>{activeSlide.protein}</td>
                                          </tr>
                                    </thead>

                                    <tbody>
                                          <tr>
                                                <td>Alcohol by volume %</td>
                                                <td>Energy kcal/100ml</td>
                                                <td>Energy kj/100ml</td>
                                                <td>Carbohydrates g/100ml</td>
                                                <td>Sugar g/100ml</td>
                                                <td>Sugar g/100ml</td>
                                          </tr>
                                    </tbody>

                              </table>
                        </div>

                  </div>
                  </div>
                  
            </div>
            );
      }
}
