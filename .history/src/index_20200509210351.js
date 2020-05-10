import React from "react";
import { render } from "react-dom";
import { App } from './app.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css'

const rootElement = document.querySelector("#root");

render(<App />, rootElement);







