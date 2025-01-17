import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bulma/css/bulma.min.css"; // Import Bulma CSS
import "react-toastify/dist/ReactToastify.css"; // Import ReactToastify CSS
import "bulma-extensions/dist/css/bulma-extensions.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
