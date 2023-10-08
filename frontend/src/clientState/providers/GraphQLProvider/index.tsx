import React, {FC, PropsWithChildren} from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
});

const GraphQLProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}

export default GraphQLProvider;
