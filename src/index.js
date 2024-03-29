import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./components/store/index";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
                <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


