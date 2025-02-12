import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.jsx";

const serverData = window.__INITIAL_DATA__ || {};
const productId = serverData.productId;

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <BrowserRouter>
      <App productId={productId} />
    </BrowserRouter>
  </React.StrictMode>
);
