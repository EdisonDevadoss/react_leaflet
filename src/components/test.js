import React, {Component} from 'react';
import '../App.css';
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import leafGreen from '../assets/leaf-green.png';
import leafOragne from '../assets/leaf-orange.png';
import leafRed from '../assets/leaf-red.png';
import leafShadow from '../assets/leaf-shadow.png';
import mapIcon from '../assets/map_icon.png';
import 'react-leaflet-fullscreen/dist/styles.css';
import FullscreenControl from 'react-leaflet-fullscreen';

// let myIcon = L.icon({
//   iconUrl: "",
//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
//   popupAnchor: [0, -41]
// })

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class App extends Component {
  state = {
    greenIcon:{
      lat: 13.0827,
      lng: 80.2707,
    },
    orangeIcon:{
      lat: 8.7139,
      lng: 77.7567,
    },
    redIcon:{
      lat: 11.0168,
      lng: 76.9558,
    },
    zoom: 4.4,
  };

  greenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 64],
    shadowAnchor:[4, 62],
    popupAnchor:[-3, -76]
  });

  redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 64],
    shadowAnchor:[4, 62],
    popupAnchor:[-3, -76]
  });

  orangeIcon = L.icon({
    iconUrl: leafOragne,
    shadowUrl: leafShadow,
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 64],
    shadowAnchor:[4, 62],
    popupAnchor:[-3, -76]
  });

  render(){
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];

     return (
       <Map className="map" center={positionGreenIcon} zoom={this.state.zoom} style={{'fillColor': 'yellow'}}>
         <TileLayer
           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker
           position={positionGreenIcon}
           //icon={this.greenIcon}
         onMouseOver={(e) => {
            e.target.openPopup();
          }}
          onMouseOut={(e) => {
            e.target.closePopup();
          }}
    >
           <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
           </Popup>
         </Marker>
         <Marker
          position={positionRedIcon}
          //icon={this.redIcon}
          onMouseOver={(e) => {
            e.target.openPopup();
          }}
          onMouseOut={(e) => {
            e.target.closePopup();
          }}
         >
           <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
           </Popup>
         </Marker>
         <Marker
         position={positionOrangeIcon}
         //icon={this.orangeIcon}
         onMouseOver={(e) => {
          e.target.openPopup();
        }}
        onMouseOut={(e) => {
          e.target.closePopup();
        }}
         >
           <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
           </Popup>
         </Marker>
         <FullscreenControl position="topright" />
       </Map>
    );
  }
}

export default App;
