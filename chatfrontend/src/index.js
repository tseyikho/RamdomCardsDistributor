import App from "./App";
import rootReducers from "./store/reducer/index";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import { Provider } from "react-redux";
import React from "react";

//here we create an object to store the current state of the application
// const store = createStore(rootReducers);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// testing git 

const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = createStore(rootReducers);
const store = configureStore({reducer: rootReducers});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();