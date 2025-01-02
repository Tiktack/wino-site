import * as stylex from '@stylexjs/stylex';

const colorsTokens = {
  accentPrimary: 'hsl(215, 100%, 29%)',
}

export const colors = stylex.defineVars(colorsTokens);

export const lightTheme = stylex.createTheme(colors, {});

export const darkTheme = stylex.createTheme(colors, {
  accentPrimary: 'hsl(191, 98%, 80%)',
} satisfies typeof colorsTokens);