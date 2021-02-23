import React from 'react';
import ReactDOM from 'react-dom';
import 'leaflet/dist/leaflet.css';
import './index.css';
// import SampleExmaple from './components/simple';
import BoundsExmaple from './components/bounds';
// import Test from './components/test';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Test /> */}
    {/* <SampleExmaple/> */}
    <BoundsExmaple/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
