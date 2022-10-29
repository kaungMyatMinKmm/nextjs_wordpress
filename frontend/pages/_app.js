import '../src/styles/index.scss';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apollo/apollo-client';

import Router from 'next/router';

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;