import { Provider } from 'next-auth/client'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
