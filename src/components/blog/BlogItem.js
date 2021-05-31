import React, { Component } from 'react';

export default class BlogItem extends Component {

      render() {

            let className = "blog-item ";

	    	if (this.props.itemClass) {
                  className += this.props.itemClass;
            }

            let imageUrl = "/brutal-fruit/images/img-01.png";
            if(this.props.image) {
                  imageUrl = this.props.image;
            }

            return (

        	<div className={className} style={{backgroundImage: "url(" + imageUrl + ")"}}>
                  <div className="blog-item-content text-center text-white">
                        <h6>{this.props.title}</h6>
                        <h4>{this.props.subTitle}</h4>
                  </div>
            </div>
            );
      }
}
