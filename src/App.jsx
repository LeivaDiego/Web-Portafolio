import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <h1>Hola, soy Diego</h1>
        <p>Este es mi portafolio.</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
