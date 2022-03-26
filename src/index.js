import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from "@apollo/client"
import client from "./common/apollo-client"
import { Provider } from 'react-redux';
import store from "./redux/index"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>,
  document.getElementById('root')
);
