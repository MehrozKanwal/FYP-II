import '../styles/globals.css'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { Rubik } from '@next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})
function MyApp({ Component, pageProps }) {
  
  return (
    <main className={`${rubik.variable} font-sans`}>
   
    <Navbar />
  <Component {...pageProps} />
  <Footer />
    </main>
  
  )
}

export default MyApp
