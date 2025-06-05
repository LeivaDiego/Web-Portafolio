import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import Layout from './components/layout/Layout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}

export default App
