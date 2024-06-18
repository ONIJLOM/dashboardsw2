import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Importa ApolloProviderWrapper desde ApolloClient.js
import ApolloProviderWrapper from './ApolloClient';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProviderWrapper>
      <App />
    </ApolloProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
