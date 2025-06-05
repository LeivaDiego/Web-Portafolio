import { GlobalStyles } from '../../styles/GlobalStyles'
import NavBar from '../navigation/NavBar'
import Home from '../sections/Home'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import { LiquidGradient } from '../ui/LiquidGradient'

// Layout component combines all sections and styles for the portfolio
const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <LiquidGradient />
      <NavBar />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Layout
