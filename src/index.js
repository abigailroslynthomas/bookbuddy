import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter } from "react-router-dom";
import "./global.css";


ReactDom.render(
  <Provider store={store}>
     <BrowserRouter>
        <App />
     </BrowserRouter>
  </Provider>
  
);