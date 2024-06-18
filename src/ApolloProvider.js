// src/ApolloProvider.js
import React from 'react';
import { ApolloProvider as Provider } from '@apollo/client';
import createApolloClient from './ApolloClient';

const client = createApolloClient();

const ApolloProvider = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
