import '../styles/globals.css'
import RootLayout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return <RootLayout >
    <Component {...pageProps} />
  </RootLayout>
}

export default MyApp
