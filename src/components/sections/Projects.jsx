/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textLight};
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  gap: 2.5rem;
`

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.card};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`

const Button = styled.a`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textDark};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background 0.3s ease;
  text-align: center;
  &:hover {
    background: ${({ theme }) => theme.colors.gradient.accent};
  }
`

const projects = [
  {
    title: 'BMO CSS',
    description: 'Landing page animada de BMO usando solo HTML y CSS.',
    demo: 'https://bmo-css.web.app',
    repo: 'https://github.com/LeivaDiego/Web-Lab4.git',
  },
  {
    title: 'Kaiju Memory',
    description: 'Juego de memoria estilo Kaiju hecho con React y animaciones.',
    demo: 'https://kaiju-memory.web.app',
    repo: 'https://github.com/LeivaDiego/Web-Lab6-React.git',
  },
  {
    title: 'Calculadora',
    description: 'Calculadora interactiva hecha con React + hooks personalizados.',
    demo: 'https://react-calculator-lite.web.app',
    repo: 'https://github.com/LeivaDiego/Web-Calculator.git',
  },
]

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Proyectos</Title>
      <Container>
        {projects.map(({ title, description, demo, repo }, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProjectTitle>{title}</ProjectTitle>
            <Description>{description}</Description>
            <ButtonGroup>
              <Button href={demo} target="_blank" rel="noopener noreferrer">Demo</Button>
              <Button href={repo} target="_blank" rel="noopener noreferrer">GitHub</Button>
            </ButtonGroup>
          </ProjectCard>
        ))}
      </Container>
    </Section>
  )
}

export default Projects
