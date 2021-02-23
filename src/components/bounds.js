import React, {useState} from 'react';
import { Map, TileLayer, Rectangle } from 'react-leaflet';

import '../App.css';
// map is BROKEN without zoom attribute
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const outer = [
  [50.505, -29.09],
  [52.505, 29.09],
]
const inner = [
  [49.505, -2.09],
  [53.505, 2.09],
]

function BoundsExmaple() {
  const [bounds, setBounds] = useState(outer);

  const onClickInner = () => {
    setBounds({ bounds: inner })
  }

  const onClickOuter = () => {
    setBounds({ bounds: outer })
  }

  const position = [20.5937, 78.9629];

  return (
    <Map className="map" center={position} zoom={4} bounds={bounds}>
     <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Rectangle
          bounds={outer}
          color={bounds === outer ? 'red' : 'white'}
          onClick={onClickOuter}
        />
        <Rectangle
          bounds={inner}
          color={bounds === inner ? 'red' : 'white'}
          onClick={onClickInner}
        />
   </Map>
  )
}
export default BoundsExmaple;
