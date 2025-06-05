/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

// --- Estilo para la barra completa (cuando está en el top)
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
  transition: background 0.4s ease;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

// --- Estilo general de los enlaces
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

// --- Barra centrada (cuando se hace scroll)
const CenteredNav = styled(motion.nav)`
  position: fixed;
  top: 1rem;
  left: 50%;
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
  transition: background 0.4s ease;
`

const NavBar = () => {
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 100) // Puedes subir o bajar el umbral
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {atTop ? (
        <FullNav
          key="full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Logo>Portafolio Web</Logo>
          <NavLinks>
            <NavItem href="#home">
              <FaHome />
              Inicio
            </NavItem>
            <NavItem href="#projects">
              <FaProjectDiagram />
              Proyectos
            </NavItem>
            <NavItem href="#skills">
              <FaTools />
              Habilidades
            </NavItem>
            <NavItem href="#contact">
              <FaEnvelope />
              Contacto
            </NavItem>
          </NavLinks>
        </FullNav>
      ) : (
        <CenteredNav
          key="centered"
          initial={{ opacity: 0, y: -20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -20, x: '-50%' }}
          transition={{ duration: 0.4 }}
        >
          <NavItem href="#home">
            <FaHome />
            Inicio
          </NavItem>
          <NavItem href="#projects">
            <FaProjectDiagram />
            Proyectos
          </NavItem>
          <NavItem href="#skills">
            <FaTools />
            Habilidades
          </NavItem>
          <NavItem href="#contact">
            <FaEnvelope />
            Contacto
          </NavItem>
        </CenteredNav>
      )}
    </AnimatePresence>
  )
}

export default NavBar
