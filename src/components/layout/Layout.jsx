import { GlobalStyles } from '../../styles/GlobalStyles'
import Home from '../sections/Home'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'

const Layout = () => {
  return (
    <>
      <GlobalStyles />
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
