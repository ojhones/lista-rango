import GlobalStyle from '../styles/GlobalStyle';
import 'react-accessible-accordion/dist/fancy-example.css';

import { SearchProvider } from '../hooks/Search';

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </SearchProvider>
  );
}

export default MyApp;
