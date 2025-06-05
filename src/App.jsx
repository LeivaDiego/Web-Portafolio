// This file is part of the React application entry point.
// It sets up the React application and renders the main App component.
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import Layout from './components/layout/Layout'

// This file is the app entry point for the React application.
// It sets up the theme provider and global styles, and renders the main layout component.
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}

export default App
