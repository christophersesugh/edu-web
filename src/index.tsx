import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppProviders } from "./context";
import App from "./App";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root"),
);
