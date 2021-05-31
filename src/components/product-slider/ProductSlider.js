import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

export default class ProductSlider extends Component {

      // static propTypes = {
      //       children: PropTypes.instanceOf(Array).isRequired,
      // }

      constructor(props) {
            super(props);

            this.state = {
                  selectedIndex: 0,
                  children: this.props.children
            };

            this._TogglePrev = this._TogglePrev.bind(this);
            this._ToggleNext = this._ToggleNext.bind(this);
            
      }


    _ToggleNext() {
            if(this.state.selectedIndex === this.props.children.length - 1)
            return;

            this.setState(prevState => ({
                  selectedIndex: prevState.selectedIndex + 1
            }))

            console.log(this.state.selectedIndex);
      }

      _TogglePrev() {
            if(this.state.selectedIndex === 0)
                  return;
            this.setState(prevState => ({
                  selectedIndex: prevState.selectedIndex - 1
            }))
      }

      render() {

            let {selectedIndex, children} = this.state;
            const backGround = children[selectedIndex].props.background;

            return (

                  <div className="product-slider" style={{backgroundImage: "url(" + backGround + ")"}}>
                        <h3 className="text-center text-white text-uppercase mobile-none">Meet The Squad</h3>
                        <ProductItem activeSlide={children[selectedIndex].props}/>
                        <div className="slider-arrows">

                              <div className="arrow arrow-next" onClick={this._ToggleNext}></div>
                              <div className="arrow arrow-prev" onClick={this._TogglePrev}></div>

                              {/* <button  className="prev" onClick={this._TogglePrev}>Prev</button>
                              <button  className="next" onClick={this._ToggleNext}>Next</button> */}
                        </div>

                  </div>
            
            );
      }
}
