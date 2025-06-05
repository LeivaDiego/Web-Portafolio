/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

// --- Footer styles using Emotion ---
const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  border-top: 1px solid ${({ theme }) => theme.colors.accent};
`

// Footer component displays the current year and copyright information
const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Diego Leiva. Todos los derechos reservados.
    </FooterContainer>
  )
}

export default Footer
