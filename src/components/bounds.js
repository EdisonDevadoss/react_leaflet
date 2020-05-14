import React, {useState} from 'react';
import { Map, TileLayer, Rectangle } from 'react-leaflet';


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

  return (
   <Map bounds={bounds}>
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
