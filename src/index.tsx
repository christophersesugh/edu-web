import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppProviders } from "./context";
// eslint-disable-next-line import/no-unresolved
import App from "./App";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root"),
);
