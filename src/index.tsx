import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import App from "./App";

const container = ReactDOM.createRoot(
  document.getElementById("root") as Element
);
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
