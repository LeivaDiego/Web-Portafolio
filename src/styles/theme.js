// This file defines the theme for the application, including colors, fonts, and spacing.

export const theme = {
  // --- Color Palette ---
  // This section defines the color palette used throughout the application.
  colors: {
    // Main Colors
    primary: '#043780',
    secondary: '#020764',
    accent: '#0ECCED',
    
    // Text Colors
    textLight: '#FFFFFF',
    textDark: '#030812',
    
    // Glassmorphism Colors
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: 'transparent',
      card: 'rgba(42, 45, 62, 0.2)',
      light: 'rgba(255, 255, 255, 0.1)',
    },

    // Gradient Colors
    gradient: {
      main: 'linear-gradient(to right, #2A2D3E 0%, #454964 50%, #2A2D3E 100%)',
      blobs: ['#0ECCED', '#043780', '#F72585', '#7209B7','#3A0CA3', '#4361EE', '#4CC9F0'],
    },

    // Overlay shades
    overlay: {
      dark: 'rgba(10, 10, 10, 0.3)',
    }
  },

  // --- Typography ---
  // This section defines the typography settings for the application.
  fonts: {
    body: "'Pixelify Sans', sans-serif",
    heading: "'Pixelify Sans', sans-serif",
  },

  // --- Spacing ---
  // This section defines the spacing scale used for margins, paddings, and layout.
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
};
