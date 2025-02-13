import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}> {/* ✅ Wrap App with Redux Provider */}
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </Provider>
 );