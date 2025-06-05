/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 4rem 2rem;
`

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.card};
  padding: 3rem;
  border-radius: 1.5rem;
  max-width: 700px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
`

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accent};
`

const Role = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-inline: auto;
`

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.5rem;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`

const Home = () => {
  return (
    <Section id="home">
      <Card
        as={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading>¡Hola! Soy Diego Leiva</Heading>
        <Role>Desarrollador Web</Role>
        <Description>
          Me enfoco en crear soluciones digitales con experiencia de usuario y código limpio.
          Descubre mis proyectos, habilidades y formas de contacto en este mini sitio.
        </Description>
        <Icons>
          <a href="https://github.com/LeivaDiego" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/diego-alberto-leiva-perez-366a93347" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:diegoleivaap2912@gmail.com">
            <FaEnvelope />
          </a>
        </Icons>
      </Card>
    </Section>
  )
}

export default Home
