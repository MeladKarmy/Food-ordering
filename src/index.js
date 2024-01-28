import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App";
import "./i18n";
import { Provider } from "react-redux";
import store from "./Redux/rootStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    {/* ${i18n.language == "ar" ? "ml-3" : "mr-3"}`} */}
    {/* {`${document.body.classList.contains("dark") ? "text-gray-600" : ""}`} */}
  </Provider>
);
