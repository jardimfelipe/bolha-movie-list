import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MoviesContextProvider from "./modules/movies/context";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </React.StrictMode>
);
