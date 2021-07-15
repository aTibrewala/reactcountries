import logo from './logo.svg';
import './App.css';
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import Countries from './Countries';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Countries/>
      </div>
    </ApolloProvider>
  );
}

export default App;
