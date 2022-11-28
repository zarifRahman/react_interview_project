import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from 'antd';
import TopNavBar from "../components/TopNavBar/TopNavBar";
import apolloClient from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';



function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={apolloClient}>
      <TopNavBar />
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ApolloProvider>
  );
}

export default MyApp
