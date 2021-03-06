import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import Page from "../src/Page.jsx";
import store from "../src/store.js";

/* eslint-disable no-underscore-dangle */
store.initialData = window.__INITIAL_DATA__;
store.userData = window.__USER_DATA__;

const element = (
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN || "dev-2h0ect8n.us.auth0.com"}
    clientId={
      process.env.REACT_APP_AUTH0_CLIENT_ID ||
      "kWjqq2l8kxOjeyEuTTUAvR8hhWQBL38B"
    }
  >
    <Router>
      <Page />
    </Router>
  </Auth0Provider>
);

// TODO: Starting the app with hydrate causes console error
// Link: https://stackoverflow.com/questions/46865880/react-16-warning-expected-server-html-to-contain-a-matching-div-in-div-due
ReactDOM.render(element, document.getElementById("content"));
//ReactDOM.hydrate(element, document.getElementById('content'));

if (module.hot) {
  module.hot.accept();
}
