import React, {useState} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

function SampleExmaple() {
  const [lat, setLat] = useState(20.5937)
  const [lng, setLng] = useState(78.9629)
  const [zoom, setZoom] = useState(13);

  const position = [lat, lng];

  return (
   <Map center={position} zoom={zoom}>
     <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
   </Map>
  )
}
export default SampleExmaple;
