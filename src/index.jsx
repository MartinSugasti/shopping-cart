import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';

import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/index.scss"
import RouteSwitch from "./components/RouteSwitch";

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);
