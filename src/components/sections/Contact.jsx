/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// --- Section styles for the contact section ---
const Section = styled.section`
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`

// Styled link for contact options
const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textLight};
  background: ${({ theme }) => theme.colors.glass.light};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.overlay.dark};
  padding: 0.75rem 1.2rem;
  border-radius: 2rem;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease, background 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-4px);
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.accent};
  }

  svg {
    font-size: 1.3rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.15);
  }
`;

// Contact component to display contact information and links
const Contact = () => {
  return (
    // Rendering the contact section with links to GitHub, LinkedIn, and Email
    <Section id="contact">
      <Container>
        <Title>Contacto</Title>
        <p>Si deseas contactarme, puedes hacerlo a través de los siguientes enlaces:</p>
        <Links>
          <ContactLink
            href="https://github.com/LeivaDiego"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/diego-alberto-leiva-perez-366a93347"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </ContactLink>
          <ContactLink href="mailto:diegoleivaap2912@gmail.com">
            <FaEnvelope /> Email
          </ContactLink>
        </Links>
      </Container>
    </Section>
  )
}

export default Contact
