import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeSliderItem from './HomeSliderItem';

export default class HomeSlider extends Component {

      static propTypes = {
            children: PropTypes.instanceOf(Array).isRequired,
      }

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
            return (

                  <div className="home-slider">
                       
                        <HomeSliderItem activeSlide={children[selectedIndex].props}/>
                        <div className="home-slider-arrows">
                              <div className="arrow arrow-next" onClick={this._ToggleNext}></div>
                              <div className="arrow arrow-prev" onClick={this._TogglePrev}></div>
                              {/* <button className="home-prev"  onClick={this._TogglePrev}>Prev</button>
                              <button className="home-next" onClick={this._ToggleNext}>Next</button> */}
                        </div>

                        <div className="page-gradient"></div>

                  </div>

            
            );
      }
}
