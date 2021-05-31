import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';


class MapWrapper extends Component {

      constructor(props) {
            super(props);

           this.state = {
                  showingInfoWindow: false,
                  activeMarker: {},
                  selectedPlace: {},
                  stores: this.props.stores
                };
                this.onMarkerClick = this.onMarkerClick.bind(this);
                this.onMapClicked = this.onMapClicked.bind(this);


      }

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

      displayMarkers = () => {
            if(this.state.stores) {
            return this.state.stores.map((store, index) => {
                  var storeDetails = store;
            return <Marker  key={index} id={index} position={{
            lat: store.Latitude,
            lng: store.Longitude
            }}
            title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
            // onClick={() => console.log("You clicked me!")}  
            icon={{
                  url: "/brutal-fruit/images/map.png",
                  // scaledSize: 64,
                }}
                name={storeDetails['Outlet Name  Store']}
                street={storeDetails['Street Name Address']}
                city={storeDetails['City']}
                contact={storeDetails['Sales Contact Teleph']}
                contactName={storeDetails['Sales Contact Name']}
                contactSurname={storeDetails['Sales Contact Surnam']}
                onClick={this.onMarkerClick}>
                </Marker>
      })}
      }

      _mapLoaded(mapProps, map) {
            map.setOptions({
               styles: [
                  {
                    featureType: 'landscape.man_made',
                    elementType: 'geometry.fill',
                    stylers: [
                      {
                        color: '#dceafa'
                      }
                    ]
                  },
                  ]
            })
         }

      render() {

            const mapStyles = {
                  width: '90%',
                  height: '680px',
                  
                };
            return (

                  <div className="store-locator-map">
	                  <div className="store-map">
                        <Map className={'store-map-wrapper'}
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: -26.67493, lng: 27.91705}} onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
          {this.displayMarkers()}
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h6>{this.state.selectedPlace.name}</h6>
              <small>{this.state.selectedPlace.street}, <b>{this.state.selectedPlace.city}</b></small> <br/> <br/>
              <small><b>{this.state.selectedPlace.contactName} {this.state.selectedPlace.contactSurname}</b></small> <br/>
              <small>{this.state.selectedPlace.contact}</small>
            </div>
        </InfoWindow>
        </Map>
                        </div>
                  </div>

            
            );
      }
}

export default GoogleApiWrapper({
      apiKey: 'AIzaSyBU1TXN0ZX2u9Bi6oUSbwqj2CZseeHCd6w',
    })(MapWrapper);