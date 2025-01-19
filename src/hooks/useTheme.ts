import { theme } from '@/styles/theme'

export const useTheme = () => {
  return theme
}

// Type helper for theme values
export type ThemeColors = typeof theme.colors
export type ThemeSpacing = typeof theme.spacing
export type ThemeBreakpoints = typeof theme.breakpoints
export type ThemeTypography = typeof theme.typography 