/**
 * Thème global de l'application KeepFood
 * Design moderne et professionnel inspiré de Delyss
 */

export const theme = {
  // Palette de couleurs principale
  colors: {
    primary: {
      main: '#007bff',
      light: '#4dabf7',
      dark: '#0056b3',
      contrast: '#ffffff',
      bg: '#e3f2fd',
    },
    secondary: {
      main: '#6c757d',
      light: '#868e96',
      dark: '#495057',
      contrast: '#ffffff',
      bg: '#e2e3e5',
    },
    success: {
      main: '#28a745',
      light: '#5cb85c',
      dark: '#1e7e34',
      contrast: '#ffffff',
      bg: '#d4edda',
    },
    danger: {
      main: '#dc3545',
      light: '#f86c6b',
      dark: '#bd2130',
      contrast: '#ffffff',
      bg: '#f8d7da',
    },
    warning: {
      main: '#ffc107',
      light: '#ffca2c',
      dark: '#d39e00',
      contrast: '#000000',
      bg: '#fff3cd',
    },
    info: {
      main: '#17a2b8',
      light: '#3fc1c9',
      dark: '#117a8b',
      contrast: '#ffffff',
      bg: '#d1ecf1',
    },
    // Couleurs neutres
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    // Couleurs de fond
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
      dark: '#212529',
    },
    // Couleurs de texte
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      disabled: '#adb5bd',
      contrast: '#ffffff',
    },
  },

  // Typographie
  typography: {
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // Espacements
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },

  // Bordures et rayons
  borders: {
    radius: {
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      '2xl': '24px',
      full: '9999px',
    },
    width: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
  },

  // Ombres
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  // Transitions
  transitions: {
    duration: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
    },
    timing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      linear: 'linear',
    },
  },

  // Breakpoints responsive
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },

  // Z-index
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

// Types TypeScript pour l'autocomplétion
export type Theme = typeof theme;
export type ThemeColors = keyof typeof theme.colors;
export type ThemeSpacing = keyof typeof theme.spacing;
export type ThemeFontSize = keyof typeof theme.typography.fontSize;
export type ThemeBorderRadius = keyof typeof theme.borders.radius;
export type ThemeShadow = keyof typeof theme.shadows;

// Helper functions pour accéder facilement au thème
export const getColor = (color: string): string => {
  const keys = color.split('.');
  let value: any = theme.colors;
  for (const key of keys) {
    value = value[key];
    if (!value) return color; // Retourne la couleur brute si non trouvée
  }
  return typeof value === 'string' ? value : color;
};

export const getSpacing = (space: keyof typeof theme.spacing): string => {
  return theme.spacing[space];
};

export const getFontSize = (size: keyof typeof theme.typography.fontSize): string => {
  return theme.typography.fontSize[size];
};

export const getShadow = (shadow: keyof typeof theme.shadows): string => {
  return theme.shadows[shadow];
};

// Utilitaires de styles communs
export const commonStyles = {
  // Card moderne
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borders.radius.lg,
    boxShadow: theme.shadows.md,
    padding: theme.spacing[6],
    transition: `all ${theme.transitions.duration.base} ${theme.transitions.timing.easeInOut}`,
  },
  
  // Card hoverable
  cardHoverable: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borders.radius.lg,
    boxShadow: theme.shadows.md,
    padding: theme.spacing[6],
    transition: `all ${theme.transitions.duration.base} ${theme.transitions.timing.easeInOut}`,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: theme.shadows.lg,
      transform: 'translateY(-2px)',
    },
  },

  // Bouton de base
  button: {
    padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
    borderRadius: theme.borders.radius.md,
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    border: 'none',
    cursor: 'pointer',
    transition: `all ${theme.transitions.duration.base} ${theme.transitions.timing.easeInOut}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing[2],
  },

  // Input de base
  input: {
    width: '100%',
    padding: theme.spacing[3],
    border: `${theme.borders.width[2]} solid ${theme.colors.gray[200]}`,
    borderRadius: theme.borders.radius.md,
    fontSize: theme.typography.fontSize.base,
    transition: `border-color ${theme.transitions.duration.base} ${theme.transitions.timing.easeInOut}`,
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.primary.main,
    },
  },

  // Container principal
  container: {
    padding: theme.spacing[8],
    backgroundColor: theme.colors.background.default,
    minHeight: '100vh',
  },

  // En-tête de page
  pageHeader: {
    marginBottom: theme.spacing[8],
    paddingBottom: theme.spacing[6],
    borderBottom: `${theme.borders.width[2]} solid ${theme.colors.gray[200]}`,
  },
};

export default theme;
