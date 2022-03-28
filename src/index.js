import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from "@apollo/client"
import client from "./common/apollo-client"
import { Provider } from 'react-redux';
import store from "./redux/index"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
