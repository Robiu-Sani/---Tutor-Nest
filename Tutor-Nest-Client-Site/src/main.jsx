import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/RootComponents/Router/Router.jsx";
import Context from "./components/RootComponents/Context/Context.jsx";
import "animate.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </HelmetProvider>
  </React.StrictMode>
);
