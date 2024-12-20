// colors.js - Color System for آراء Platform

// Main Brand Colors
export const brandColors = {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',  // Main Brand Color
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    secondary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',  // Secondary Brand Color
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    }
  };
  
  // Neutral Colors
  export const neutralColors = {
    light: {
      background: {
        primary: '#ffffff',
        secondary: '#f9fafb',
        tertiary: '#f3f4f6',
      },
      text: {
        primary: '#111827',
        secondary: '#374151',
        tertiary: '#6b7280',
        disabled: '#9ca3af',
      },
      border: {
        light: '#e5e7eb',
        default: '#d1d5db',
        dark: '#9ca3af',
      }
    },
    dark: {
      background: {
        primary: '#111827',
        secondary: '#1f2937',
        tertiary: '#374151',
      },
      text: {
        primary: '#f9fafb',
        secondary: '#e5e7eb',
        tertiary: '#d1d5db',
        disabled: '#6b7280',
      },
      border: {
        light: '#374151',
        default: '#4b5563',
        dark: '#6b7280',
      }
    }
  };
  
  // Semantic Colors
  export const semanticColors = {
    success: {
      light: '#22c55e',
      dark: '#16a34a',
      background: '#f0fdf4',
    },
    warning: {
      light: '#f59e0b',
      dark: '#d97706',
      background: '#fffbeb',
    },
    error: {
      light: '#ef4444',
      dark: '#dc2626',
      background: '#fef2f2',
    },
    info: {
      light: '#3b82f6',
      dark: '#2563eb',
      background: '#eff6ff',
    }
  };
  
  // Gradient Definitions
  export const gradients = {
    brand: {
      primary: 'linear-gradient(to right, #0ea5e9, #22c55e)',
      hover: 'linear-gradient(to right, #0284c7, #16a34a)',
      active: 'linear-gradient(to right, #0369a1, #15803d)',
    },
    accent: {
      blue: 'linear-gradient(to right, #60a5fa, #3b82f6)',
      green: 'linear-gradient(to right, #4ade80, #22c55e)',
      purple: 'linear-gradient(to right, #a78bfa, #8b5cf6)',
    }
  };
  
  // Opacity Levels
  export const opacity = {
    hover: 0.8,
    active: 0.9,
    disabled: 0.5,
    overlay: 0.75,
  };
  
  // Shadow Definitions
  export const shadows = {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  };
  
  // Theme Configuration Example
  export const createTheme = (isDarkMode = false) => ({
    colors: {
      brand: brandColors,
      background: isDarkMode ? neutralColors.dark.background : neutralColors.light.background,
      text: isDarkMode ? neutralColors.dark.text : neutralColors.light.text,
      border: isDarkMode ? neutralColors.dark.border : neutralColors.light.border,
      semantic: semanticColors,
    },
    gradients,
    shadows,
    opacity,
  });
  
  // Usage Examples
  export const colorExamples = {
    // Button Styles
    button: {
      primary: {
        background: brandColors.primary[500],
        hoverBackground: brandColors.primary[600],
        activeBackground: brandColors.primary[700],
        text: '#ffffff',
      },
      secondary: {
        background: brandColors.secondary[500],
        hoverBackground: brandColors.secondary[600],
        activeBackground: brandColors.secondary[700],
        text: '#ffffff',
      },
    },
    
    // Text Styles
    text: {
      heading: neutralColors.light.text.primary,
      body: neutralColors.light.text.secondary,
      caption: neutralColors.light.text.tertiary,
    },
    
    // Status Colors
    status: {
      success: semanticColors.success.light,
      error: semanticColors.error.light,
      warning: semanticColors.warning.light,
      info: semanticColors.info.light,
    }
  };
  
  // CSS Custom Properties Setup
  export const cssVariables = `
    :root {
      /* Brand Colors */
      --color-primary: ${brandColors.primary[500]};
      --color-primary-light: ${brandColors.primary[400]};
      --color-primary-dark: ${brandColors.primary[600]};
      
      --color-secondary: ${brandColors.secondary[500]};
      --color-secondary-light: ${brandColors.secondary[400]};
      --color-secondary-dark: ${brandColors.secondary[600]};
      
      /* Gradients */
      --gradient-brand: ${gradients.brand.primary};
      --gradient-brand-hover: ${gradients.brand.hover};
      
      /* Semantic Colors */
      --color-success: ${semanticColors.success.light};
      --color-error: ${semanticColors.error.light};
      --color-warning: ${semanticColors.warning.light};
      --color-info: ${semanticColors.info.light};
    }
  
    [data-theme="dark"] {
      --color-background: ${neutralColors.dark.background.primary};
      --color-surface: ${neutralColors.dark.background.secondary};
      --color-text: ${neutralColors.dark.text.primary};
      --color-text-secondary: ${neutralColors.dark.text.secondary};
    }
  `;