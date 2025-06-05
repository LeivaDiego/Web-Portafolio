import { Global, css } from '@emotion/react';
import { theme } from './theme';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    background: ${theme.colors.gradient.main};
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    line-height: 1.6;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  section {
    width: 100%;
    position: relative;
    background: transparent;
  }

  .container {
    width: min(90%, 1200px);
    margin-inline: auto;
    padding-inline: ${theme.spacing.md};
    position: relative;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.glass.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.glass.card};
    border-radius: 5px;
    border: 2px solid ${theme.colors.glass.border};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.accent};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  section h2 {
    position: relative;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
  }

  section h2::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 45%;
    width: 10%;
    height: 4px;
    background: ${theme.colors.accent};
    border-radius: 4px;
  }

`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
