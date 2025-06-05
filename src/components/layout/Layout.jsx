import { GlobalStyles } from '../../styles/GlobalStyles'
import NavBar from '../navigation/NavBar'
import Home from '../sections/Home'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default Layout
