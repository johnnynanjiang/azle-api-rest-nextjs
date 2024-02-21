import type { AppProps } from 'next/app';

import { Client, InternetIdentity } from '@bundly/ic-core-js';
import { IcpConnectContextProvider } from '@bundly/ic-react';

const restCanisters = {
    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_REST_URL!
    }
}

export default function MyApp({ Component, pageProps }: AppProps) {
    const client = Client.create({
        restCanisters,
        providers: [
            new InternetIdentity({
                providerUrl: process.env.NEXT_PUBLIC_INTERNET_IDENTITY_URL!
            })
        ]
    });

    return (
        <IcpConnectContextProvider client={client}>
            <Component {...pageProps} />
        </IcpConnectContextProvider>
    )
}
