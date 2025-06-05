/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

// --- Desktop Nav (top)
const FullNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
`

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

// --- Desktop Nav (scroll)
const CenteredNav = styled(motion.nav)`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.glass.card};
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`

// --- Mobile Top Bar
const MobileBarTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`

// --- Mobile Sticky Button (on scroll)
const MobileStickyButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.6rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 999;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.accent};
  border: none;

  @media (min-width: 769px) {
    display: none;
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 1000;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 4.5rem 2rem 2rem; /* 🔧 Aumentamos el padding-top */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`


const MobileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`
const HamburgerButton = styled.button`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  background: none;
  border: none;
  z-index: 999;
`

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3); /* puedes ajustar la opacidad si deseas */
  z-index: 999;
`


const NavBar = () => {
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const navLinks = [
    { href: '#home', icon: <FaHome />, label: 'Inicio' },
    { href: '#projects', icon: <FaProjectDiagram />, label: 'Proyectos' },
    { href: '#skills', icon: <FaTools />, label: 'Habilidades' },
    { href: '#contact', icon: <FaEnvelope />, label: 'Contacto' },
  ]

  // Detectar scroll y cerrar menú si es necesario
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 100)
      if (menuOpen && window.scrollY > 100) {
        setMenuOpen(false)
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      {/* Desktop - top */}
      <AnimatePresence mode="wait">
        {!isMobile && atTop && (
          <FullNav
            key="full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Logo>Portafolio Web</Logo>
            <NavLinks>
              {navLinks.map(({ href, icon, label }) => (
                <NavItem key={label} href={href}>
                  {icon} {label}
                </NavItem>
              ))}
            </NavLinks>
          </FullNav>
        )}
      </AnimatePresence>

      {/* Desktop - scroll */}
      <AnimatePresence mode="wait">
        {!isMobile && !atTop && (
          <CenteredNav
            key="centered"
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map(({ href, icon, label }) => (
              <NavItem key={label} href={href}>
                {icon} {label}
              </NavItem>
            ))}
          </CenteredNav>
        )}
      </AnimatePresence>

      {/* Mobile - top bar */}
      {isMobile && atTop && (
        <MobileBarTop>
          <Logo>Portafolio Web</Logo>
          <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </HamburgerButton>
        </MobileBarTop>
      )}

      {/* Mobile - scroll sticky button */}
      {isMobile && !atTop && !menuOpen && (
        <MobileStickyButton onClick={() => setMenuOpen(true)}>
          <FaBars />
        </MobileStickyButton>
      )}

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />

          <Overlay
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ href, icon, label }) => (
              <MobileLink key={label} href={href} onClick={handleLinkClick}>
                {icon} {label}
              </MobileLink>
            ))}
          </Overlay>
        </>
      )}
    </AnimatePresence>
    </>
  )
}

export default NavBar
