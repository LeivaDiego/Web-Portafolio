/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const Category = styled.div`
  margin-bottom: 2rem;
`

const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accent};
`

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const Skill = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.card};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const skillsData = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
  DevOps: ['Docker', 'Git'],
}

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <Title>Habilidades</Title>
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <Category key={idx}>
            <CategoryTitle>{category}</CategoryTitle>
            <SkillList>
              {skills.map((skill, i) => (
                <Skill
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </Skill>
              ))}
            </SkillList>
          </Category>
        ))}
      </Container>
    </Section>
  )
}

export default Skills
