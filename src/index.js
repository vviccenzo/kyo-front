import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HeaderBar from "./header/HeaderBar";
import Context from "./context/Context";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <HeaderBar />
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);

reportWebVitals();
