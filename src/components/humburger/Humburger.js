import React, { Component } from 'react';
import HumburgerItems from './HumburgerItems';

export default class Humburger extends Component {

      constructor(props) {
            super(props);

            this.state = {
                  menuOpen: false,
            };
            this._ToggleMenu = this._ToggleMenu.bind(this);
      }

      _ToggleMenu() {

            if(this.state.menuOpen == false) {
                  this.setState(menuOpen => ({
                        menuOpen: true
                  }))
            }

            else {
                  this.setState(menuOpen => ({
                        menuOpen: false
                  }))
            }
            
      }

      render() {

            let {menuOpen} = this.state;
            let menuClass = "humburger";
            if(menuOpen == true) {
                  menuClass += " opened";
            }

            return (

                  <div>

                        <div className={menuClass} onClick={this._ToggleMenu}>
                              <div className="bar1"></div>
                              <div className="bar2"></div>
                              <div className="bar3"></div>
                        </div>
                                    
                       <HumburgerItems menuOpen = {{menuOpen}}/>
                  </div>
                                    

                       
            );
      }
}
