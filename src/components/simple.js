import React from 'react';
import {Map, TileLayer, Marker} from 'react-leaflet';
import '../App.css';
// map is BROKEN without zoom attribute
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import CustomPopup from './customPopup';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function SampleExmaple() {
  const position = [20.5937, 78.9629];

  return (
    // className is required to visualise map
   <Map className="map"  center={position} zoom={4}>
     <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <CustomPopup/>
        </Marker>
   </Map>
  )
}
export default SampleExmaple;
