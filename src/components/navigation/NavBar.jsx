/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa'

const Nav = styled.nav`
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

const NavBar = () => {
  return (
    <Nav>
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
    </Nav>
  )
}

export default NavBar
