import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'swiper/css/bundle'
import Header from '../components/Header/Index'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
