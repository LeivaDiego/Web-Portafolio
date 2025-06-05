import { Global, css } from '@emotion/react';
import { theme } from './theme';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* === Fondo líquido === */
  .liquid-gradient {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
  }

  /* === Estilos base para cada blob === */
  .liquid-blob {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.5;
    mix-blend-mode: screen;
  }

  /* === Blobs con posición y animación === */
  .blob1 {
    top: 10%;
    left: 15%;
    background: ${theme.colors.gradient.blobs[0]};
    animation: floatBlobs 20s ease-in-out infinite alternate;
  }

  .blob2 {
    top: 50%;
    left: 60%;
    background: ${theme.colors.gradient.blobs[1]};
    animation: floatBlobs 20s ease-in-out infinite alternate;
  }

  .blob3 {
    top: 70%;
    left: 25%;
    background: ${theme.colors.gradient.blobs[2]};
    animation: floatBlobs 20s ease-in-out infinite alternate;
  }

  .blob4 {
    top: 30%;
    left: 75%;
    background: ${theme.colors.gradient.blobs[3]};
    animation: floatBlobs 20s ease-in-out infinite alternate;
  }

  .blob5 {
    top: 80%;
    left: 80%;
    background: ${theme.colors.gradient.blobs[4]};
    animation: floatBlobAlt 25s ease-in-out infinite alternate;
  }

  .blob6 {
    top: 20%;
    left: 5%;
    background: ${theme.colors.gradient.blobs[5]};
    animation: floatBlobAlt2 18s ease-in-out infinite alternate;
  }

  .blob7 {
    top: 40%;
    left: 45%;
    background: ${theme.colors.gradient.blobs[6]};
    animation: floatBlobAlt3 22s ease-in-out infinite alternate;
  }

  /* === Animaciones === */
  @keyframes floatBlobs {
    0%   { transform: translate(0, 0) scale(1); }
    50%  { transform: translate(-20px, 30px) scale(1.5); }
    100% { transform: translate(20px, -30px) scale(1); }
  }

  @keyframes floatBlobAlt {
    0%   { transform: translate(0, 0) scale(1); }
    50%  { transform: translate(40px, -20px) scale(1.15); }
    100% { transform: translate(-30px, 30px) scale(1); }
  }

  @keyframes floatBlobAlt2 {
    0%   { transform: translate(0, 0) scale(1); }
    50%  { transform: translate(-50px, 20px) scale(1.05); }
    100% { transform: translate(30px, -40px) scale(1); }
  }

  @keyframes floatBlobAlt3 {
    0%   { transform: translate(0, 0) scale(1); }
    50%  { transform: translate(20px, 20px) scale(1.2); }
    100% { transform: translate(-40px, -30px) scale(1); }
  }



  html {
    scroll-behavior: smooth;
    font-size: 16px;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.textLight};
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
