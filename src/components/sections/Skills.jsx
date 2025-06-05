/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt,
  FaNodeJs, FaPython, FaDocker, FaGitAlt
} from 'react-icons/fa'
import { SiMongodb, SiPostgresql } from 'react-icons/si'

const Section = styled.section`
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.textLight};
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.background};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 6px 20px ${({ theme }) => theme.colors.overlay.dark};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.accent};
  }
`

const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`

const Skill = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.overlay.dark};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  transition: box-shadow 0.3s ease;

  svg {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.accent};
  }
`

// 🎯 Diccionario de íconos por tecnología
const skillIcons = {
  React: <FaReact />,
  JavaScript: <FaJs />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  'Node.js': <FaNodeJs />,
  Python: <FaPython />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  Docker: <FaDocker />,
  Git: <FaGitAlt />,
}

// 🧠 Estructura de skills por categoría
const skillsData = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
  DevOps: ['Docker', 'Git'],
}

const Skills = () => {
  return (
    <Section id="skills">
      <Title>Habilidades</Title>
      <Grid>
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <Card
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <CategoryTitle>{category}</CategoryTitle>
            <SkillList>
              {skills.map((skill, i) => (
                <Skill
                  key={i}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {skillIcons[skill]} {skill}
                </Skill>
              ))}
            </SkillList>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default Skills
