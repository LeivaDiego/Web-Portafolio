/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import bmoPreview from '../../assets/bmo-preview.png';
import memoryPreview from '../../assets/memory-preview.png';
import calcPreview from '../../assets/calc-preview.png';

const Section = styled.section`
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.background};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 6px 20px ${({ theme }) => theme.colors.glass.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.accent};
  }
`

const Preview = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  font-size: 0.95rem;
  margin-bottom: 1rem;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    transition: transform 0.2s ease;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textDark};
  }
`

const IconGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  font-size: 1.2rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`

// 🧠 Datos mejorados con tecnologías + preview
const projects = [
  {
    title: 'BMO CSS',
    description: 'Imagen de BMO usando solo CSS.',
    demo: 'https://bmo-css.web.app',
    repo: 'https://github.com/LeivaDiego/Web-Lab4.git',
    image:  bmoPreview,
    technologies: ['HTML', 'CSS'],
  },
  {
    title: 'Kaiju Memory',
    description: 'Juego de memoria de Kaijus hecho con React y animaciones.',
    demo: 'https://kaiju-memory.web.app',
    repo: 'https://github.com/LeivaDiego/Web-Lab6-React.git',
    image:  memoryPreview,
    technologies: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Calculadora',
    description: 'Calculadora interactiva hecha con React + hooks personalizados.',
    demo: 'https://react-calculator-lite.web.app',
    repo: 'https://github.com/LeivaDiego/Web-Calculator.git',
    image:  calcPreview,
    technologies: ['React', 'JavaScript'],
  },
]

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Proyectos</Title>
      <Container>
        {projects.map((project, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Preview src={project.image} alt={project.title} />
            <CardContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
              <Tags>
                {project.technologies.map((tech, i) => (
                  <Tag key={i}>{tech}</Tag>
                ))}
              </Tags>
              <IconGroup>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                  <FaExternalLinkAlt />
                </a>
              </IconGroup>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Section>
  )
}

export default Projects
