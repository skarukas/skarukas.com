import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

// TODO: because react-snap (https://github.com/stereobooster/react-snap) was 
// used to generate static files for each page, we are double-rendering the
// webpage in certain contexts. Consider trying to get hydrate() to work 
// properly again. It was previously not matching and throwing errors
// (when using modern React renderNode / hydrateNode), and rendering *only* the 
// improperly-formatted static pages (when using old ReactDOM.hydrate).
 
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
