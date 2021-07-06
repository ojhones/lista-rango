import GlobalStyle from '../styles/GlobalStyle'

import {
  Header
} from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
