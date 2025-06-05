// This file defines the theme for the application, including colors, fonts, and spacing.

export const theme = {
  // --- Color Palette ---
  // This section defines the color palette used throughout the application.
  colors: {
    // Main Colors
    primary: '#3A3896',
    secondary: '#020764',
    accent: '#0ECCED',
    
    // Text Colors
    textLight: '#DBFDFF',
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
      main: 'linear-gradient(to right, #2A2D3E 0%, #454964 50%,rgb(42, 45, 62) 100%)',
      blobs: [
        '#025EC4',
        '#0ECCED',
        '#044A80',
        '#022364',
        '#56E1E9',
        '#5B58EB',
        '#430E9E'
      ],
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
