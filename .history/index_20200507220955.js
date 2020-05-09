import React from "react";
import { render } from "react-dom";

import App from './app.js'

const rootElement = document.querySelector("#root");

render(<App />, rootElement);
