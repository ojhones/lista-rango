import GlobalStyle from '../styles/GlobalStyle';
import 'react-accessible-accordion/dist/fancy-example.css';

import { AppProvider } from '../hooks/index';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
