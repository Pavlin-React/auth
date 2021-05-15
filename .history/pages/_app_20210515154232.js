import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Aut>
      <Navbar />
      <Component {...pageProps} />
    </Aut>
  )
}

export default MyApp