/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 8rem;
  min-height: 100vh;
  text-align: center;
`

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Subheading = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
`

const Home = () => {
  return (
    <Section as={motion.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Heading>¡Hola! Soy Diego</Heading>
      <Subheading>
        Bienvenido a mi portafolio de desarrollo web. Aquí encontrarás mis proyectos, habilidades y formas de contacto.
      </Subheading>
    </Section>
  )
}

export default Home
