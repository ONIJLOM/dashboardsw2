// src/ApolloClient.js
import { ApolloClient, createHttpLink,ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://back-dental.fly.dev/graphql',
});

/*const client = new ApolloClient({
  link: new HttpLink({
    //uri: 'http://localhost:8080/graphql', // URL de tu servidor GraphQL de Spring Boot
    uri: 'https://back-dental.fly.dev/graphql', // URL de tu servidor GraphQL de Spring Boot
  }),
  cache: new InMemoryCache(),
});*/

const ApolloProviderWrapper = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default ApolloProviderWrapper;
