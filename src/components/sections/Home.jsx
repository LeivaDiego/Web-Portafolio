/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// --- Home section styles using Emotion ---
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 4rem 1.5rem;
  overflow-x: hidden;
`

// Card container for the home section
const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass.background};
  padding: 2rem;
  border-radius: 1.5rem;
  max-width: 700px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 24px ${({ theme }) => theme.colors.overlay.dark};
  backdrop-filter: blur(12px);

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const Heading = styled.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  white-space: normal;
  overflow: hidden;
  word-break: break-word;
`

const Cursor = styled.span`
  display: inline-block;
  width: 1px;
  background: ${({ theme }) => theme.colors.accent};
  animation: blink 1s step-start infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`

const Role = styled(motion.h2)`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  font-weight: 500;
  margin-bottom: 1rem;
`

const Description = styled(motion.p)`
  font-size: 1rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-inline: auto;
`

const Icons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  font-size: 1.5rem;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textLight};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`

// Animation variants for icons
const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.3, rotate: 5 },
}

// Home section component that displays a greeting, role, description, and social icons
const Home = () => {
  const fullText = '¡Hola! Soy Diego Leiva'
  const [typedText, setTypedText] = useState('')
  const [showRest, setShowRest] = useState(false)

  // Effect to type out the greeting text character by character
  useEffect(() => {
    let index = 0
    let isMounted = true

    const typeNextChar = () => {
      if (!isMounted) return
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index < fullText.length) {
        setTimeout(typeNextChar, 70)
      } else {
        setShowRest(true)
      }
    }

    typeNextChar()

    return () => {
      isMounted = false
    }
  }, [fullText])

  return (
    // Render the home section with animations and content
    <Section id="home">
      <Card
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading>
          {typedText}
          <Cursor />
        </Heading>

        {showRest && (
          <>
            <Role
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Desarrollador Web
            </Role>

            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Me enfoco en crear soluciones digitales con experiencia de usuario y código limpio.
              Descubre mis proyectos, habilidades y formas de contacto en este mini sitio.
            </Description>

            <Icons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://github.com/LeivaDiego"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/diego-alberto-leiva-perez-366a93347"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:diegoleivaap2912@gmail.com"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FaEnvelope />
              </motion.a>
            </Icons>
          </>
        )}
      </Card>
    </Section>
  )
}

export default Home
