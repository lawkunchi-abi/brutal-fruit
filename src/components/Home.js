import React, { Component } from 'react';
import HomeSlider from '../components/home-slider/HomeSlider.js';

import BlogPosts from '../components/blog/BlogPosts.js';
import ProductSlider from '../components/product-slider/ProductSlider.js';
import {homeSliderData} from '../brutalData';
import {productData} from '../brutalData';
import {blogData} from '../brutalData';
import HomeBanner from '../components/mobile/HomeBanner.js';

export default class Home extends Component {
      render() {
            return (

                  <div>
                              <HomeSlider>

                                    {homeSliderData.map( (slideData, key) => {
                                          return  (
                                                <div key={key} imageUrl={slideData.imageUrl} h3={slideData.h3} h1={slideData.h1} h6={slideData.h6} buttonText={slideData.buttonText}  buttonUrl={slideData.buttonUrl} ></div>
                                          );
                                    })}
                              </HomeSlider>

                              <HomeBanner/>

                              <div className="blog-product-section">
                              <BlogPosts>

                                    {blogData.map( (data, key) => {
                                          return  (
                                                <div key ={key} title={data.title}   subTitle={data.subTitle} background={data.background} ></div>
                                          );
                                    })}
                              </BlogPosts>

                              <div className="btn-container">
                                    <button className="btl-btn btl-btn-light mx-auto">See More</button>
                              </div>



                              <ProductSlider>

                                    {productData.map( (slideData, key) => {
                                          return  (
                                                <div key={key} title={slideData.title} description={slideData.description} alcohol={slideData.alcohol} energy={slideData.energy} energyKcal={slideData.energyKcal}  carbohydrates={slideData.carbohydrates} sugar={slideData.sugar}  protein={slideData.protein}  productImg={slideData.productImg}  background={slideData.background} ></div>
                                          );
                                    })}
                              </ProductSlider>
                              </div>
                  </div>
            );
      }
}
