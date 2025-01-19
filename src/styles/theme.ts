export const theme = {
  colors: {
    primary: {
      main: '#FFB800', // Yellow from the logo and CTA buttons
      dark: '#E6A600',
      light: '#FFC933',
    },
    secondary: {
      main: '#1E242C', // Dark blue from header
      dark: '#151A20',
      light: '#2A3441',
    },
    // UI colors
    background: {
      light: '#FFFFFF',
      dark: '#1E242C',
    },
    text: {
      light: '#1E242C',
      dark: '#FFFFFF',
      muted: '#6B7280',
    },
    accent: {
      success: '#10B981', // Green for success states
      error: '#EF4444',   // Red for error states
      warning: '#F59E0B', // Amber for warnings
      info: '#3B82F6',    // Blue for info
    },
    border: {
      light: '#E5E7EB',
      dark: '#374151',
    }
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '2.5rem',  // 40px
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    full: '9999px',
  },
  typography: {
    fontFamily: {
      sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
    }
  }
} as const; 