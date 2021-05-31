import React, { Component } from 'react';
import BlogItem from './BlogItem';

export default class BlogPosts extends Component {


      render() {

            return (

        	<div className="blog-items">
                 <div className="row mx-auto">
                       <div className="col-xl-4 col-md-12 col-sm-12 ">

                             <div className="row">
                                    <div className="col-md-12">
                                                <BlogItem itemClass = "blog-item-md" title="Our Products" subTitle="Meet our new BFF" image="/brutal-fruit/images/img-02.png" />
                                    </div>

                                    <div className="col-md-12">
                                                <BlogItem itemClass = "blog-item-sm" title="Beauty" subTitle="Get that glow, girl" image="/brutal-fruit/images/bg-agegate.jpg"/>
                                    </div>

                                    <div className="col-md-12">
                                                <BlogItem itemClass = "blog-item-lg"title="Taste" subTitle="Brunch with the bae" image="/brutal-fruit/images/img-01.png"/>
                                    </div>
                             </div>
                       </div>

                       <div className="col-xl-4 col-md-4 col-sm-12 mobile-none">

                             <div className="row">
                                    <div className="col-md-12">
                                                <BlogItem itemClass = "blog-item-sm" title="" subTitle="How to be the hostes with the mostest"   image="/brutal-fruit/images/img-03.png"/>
                                    </div>

                                    <div className="col-md-12">
                                                <BlogItem itemClass = "blog-item-lg" title="The Suite" subTitle="BECOME AN EXCLUSIVE MEMBER TO THE SUITE"  image="/brutal-fruit/images/img-01.png"/>
                                    </div>

                                    <div className="col-md-12">
                                                <BlogItem itemClass = "blog-item-sm" title="Our Products" subTitle="You can call her, Ruby"  image="/brutal-fruit/images/img-03.png"/>
                                    </div>
                             </div>
                       </div>

                       <div className="col-xl-4 col-md-12 col-sm-12 mobile-none">

                             <div className="row">
                                    <div className="col-md-12">
                                                <BlogItem itemClass = "blog-item-lg" title="Beauty" subTitle="Love the skin you're in"/>
                                    </div>

                                    <div className="col-md-12">
                                                <BlogItem itemClass = "blog-item-sm" title="Style" subTitle="Save 30% On Seleceted Style"/>
                                    </div>

                                    <div className="col-md-12">
                                                <BlogItem itemClass = "blog-item-md" title="Travel" subTitle="WUNDERLUST?JOIN THE SUITE TO RECEIVE TRAVEL VOUCHERS" image="/brutal-fruit/images/bg-agegate.jpg"/>
                                    </div>
                             </div>
                       </div>
                       
                 </div>
            </div>
            );
      }
}
