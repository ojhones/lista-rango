import { useRouter } from 'next/router';

import GlobalStyle from '~/styles/GlobalStyle';
import 'react-accessible-accordion/dist/fancy-example.css';

import { Header } from '~/components';

import { AppProvider } from '~/hooks/index';

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();

  return (
    <AppProvider>
      <Header goBack={asPath !== '/'} />

      <GlobalStyle />

      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
