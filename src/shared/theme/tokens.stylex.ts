import * as stylex from '@stylexjs/stylex';

// const baseTokens = {
//   // Font Families
//   fontFamilyFallback: '"Segoe UI", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
//   fontFamilyText: '"Segoe UI Variable Text", "Seoge UI Variable Static Text", var(--font-family-fallback)',
//   fontFamilySmall: '"Segoe UI Variable Small", "Seoge UI Variable Static Small", var(--font-family-fallback)',
//   fontFamilyDisplay: '"Segoe UI Variable Display", "Seoge UI Variable Static Display", var(--font-family-fallback)',

//   // Font Sizes
//   captionFontSize: '12px',
//   bodyFontSize: '14px',
//   bodyLargeFontSize: '18px',
//   subtitleFontSize: '20px',
//   titleFontSize: '28px',
//   titleLargeFontSize: '40px',
//   displayFontSize: '68px',

//   // Roundness
//   controlCornerRadius: '4px',
//   overlayCornerRadius: '8px',

//   // Duration
//   controlSlowDuration: '333ms',
//   controlNormalDuration: '250ms',
//   controlFastDuration: '167ms',
//   controlFasterDuration: '83ms',

//   // Easing
//   controlFastOutSlowInEasing: 'cubic-bezier(0, 0, 0, 1)',
// };

const colorTokens = {
  /* Text */
  textPrimary: 'hsla(0, 0%, 0%, 89.56%)',
  textSecondary: 'hsla(0, 0%, 0%, 60.63%)',
  textTertiary: 'hsla(0, 0%, 0%, 44.58%)',
  textDisabled: 'hsla(0, 0%, 0%, 36.14%)',

  /* Accent */
  accentDefault: 'hsl(209, 100%, 36%)',
  accentSecondary: 'hsla(209, 100%, 36%, 90%)',
  accentTertiary: 'hsla(209, 100%, 36%, 80%)',
  accentDisabled: 'hsla(0, 0%, 0%, 21.69%)',

  /* Accent Text */
  accentTextPrimary: 'hsl(215, 100%, 29%)',
  accentTextSecondary: 'hsl(226, 100%, 20%)',
  accentTextTertiary: 'hsl(209, 100%, 36%)',
  accentTextDisabled: 'hsla(0, 0%, 0%, 36.14%)',

  /* Text on Accent */
  textOnAccentPrimary: 'hsl(0, 0%, 100%)',
  textOnAccentSecondary: 'hsla(0, 0%, 100%, 70%)',
  textOnAccentDisabled: 'hsla(0, 0%, 100%, 70%)',
  textOnAccentSelected: 'hsl(0, 0%, 100%)',

  /* System */
  systemAttention: 'hsl(209, 100%, 36%)',
  systemSuccess: 'hsl(120, 78%, 27%)',
  systemCaution: 'hsl(36, 100%, 31%)',
  systemCritical: 'hsl(5, 75%, 44%)',
  systemNeutral: 'hsla(0, 0%, 0%, 44.58%)',

  /* System Solid */
  systemSolidNeutral: 'hsl(0, 0%, 54%)',

  /* System Background */
  systemBackgroundAttention: 'hsla(0, 0%, 96%, 50%)',
  systemBackgroundSuccess: 'hsl(115, 58%, 92%)',
  systemBackgroundCaution: 'hsl(47, 100%, 90%)',
  systemBackgroundCritical: 'hsl(355, 85%, 95%)',

  /* System Background Solid */
  systemBackgroundSolidAttention: 'hsl(0, 0%, 97%)',
  systemBackgroundSolidNeutral: 'hsl(0, 0%, 95%)',

  /* Smoke Background */
  smokeBackgroundDefault: 'hsla(0, 0%, 0%, 30%)',

  /* Layer Background */
  layerBackgroundDefault: 'hsla(0, 0%, 100%, 50%)',
  layerBackgroundAlt: 'hsl(0, 0%, 100%)',

  /* Solid Background */
  solidBackgroundBase: 'hsl(0, 0%, 95%)',
  solidBackgroundSecondary: 'hsl(0, 0%, 93%)',
  solidBackgroundTertiary: 'hsl(0, 0%, 98%)',
  solidBackgroundQuarternary: 'hsl(0, 0%, 100%)',
};

export const colors = stylex.defineVars(colorTokens);

export const lightTheme = stylex.createTheme(colors, {});

export const darkTheme = stylex.createTheme(colors, {
  textPrimary: 'hsla(0, 0%, 100%, 100%)',
  textSecondary: 'hsla(0, 0%, 100%, 78.6%)',
  textTertiary: 'hsla(0, 0%, 100%, 54.42%)',
  textDisabled: 'hsla(0, 0%, 100%, 36.28%)',

  accentDefault: 'hsla(199, 99%, 69%)',
  accentSecondary: 'hsla(199, 99%, 69%, 90%)',
  accentTertiary: 'hsla(199, 99%, 69%, 80%)',
  accentDisabled: 'hsla(0, 0%, 100%, 15.81%)',

  accentTextPrimary: 'hsl(191, 98%, 80%)',
  accentTextSecondary: 'hsl(191, 98%, 80%)',
  accentTextTertiary: 'hsl(199, 99%, 69%)',
  accentTextDisabled: 'hsla(0, 0%, 100%, 36.28%)',

  textOnAccentPrimary: 'hsl(0, 0%, 0%)',
  textOnAccentSecondary: 'hsla(0, 0%, 0%, 0.5)',
  textOnAccentDisabled: 'hsla(0, 0%, 100%, 0.53)',
  textOnAccentSelected: 'hsl(0, 0%, 100%)',

  systemAttention: 'hsl(199, 100%, 69%)',
  systemSuccess: 'hsl(113, 51%, 58%)',
  systemCaution: 'hsl(54, 100%, 49%)',
  systemCritical: 'hsl(354, 100%, 80%)',
  systemNeutral: 'hsla(0, 0%, 100%, 54.42%)',

  systemSolidNeutral: 'hsl(0, 0%, 62%)',

  systemBackgroundAttention: 'hsla(0, 0%, 100%, 3.26%)',
  systemBackgroundSuccess: 'hsl(67, 39%, 17%)',
  systemBackgroundCaution: 'hsl(40, 46%, 18%)',
  systemBackgroundCritical: 'hsl(2, 28%, 21%)',

  systemBackgroundSolidAttention: 'hsl(0, 0%, 18%)',
  systemBackgroundSolidNeutral: 'hsl(0, 0%, 62%)',

  smokeBackgroundDefault: 'hsla(0, 0%, 0%, 30%)',

  layerBackgroundDefault: 'hsla(0, 0%, 23%, 30%)',
  layerBackgroundAlt: 'hsla(0, 0%, 100%, 5.38%)',

  solidBackgroundBase: 'hsl(0, 0%, 13%)',
  solidBackgroundSecondary: 'hsl(0, 0%, 11%)',
  solidBackgroundTertiary: 'hsl(0, 0%, 16%)',
  solidBackgroundQuarternary: 'hsl(0, 0%, 17%)'
} satisfies typeof colorTokens);