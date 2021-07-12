import GlobalStyle from '../styles/GlobalStyle';
import 'react-accessible-accordion/dist/fancy-example.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
