/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

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

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    font-size: 1.4rem;
  }
`

const Contact = () => {
  return (
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
