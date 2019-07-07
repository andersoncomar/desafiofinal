import React from "react";
import "./config/ReactotronConfig";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";
import store from "./store";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={5000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
