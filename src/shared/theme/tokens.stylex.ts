import * as stylex from '@stylexjs/stylex';

// https://www.chakra-ui.com/docs/theming/breakpoints
export const SCREEN_SIZE = {
	sm: '@media (max-width: 480px)',
	md: '@media (max-width: 768px)',
	lg: '@media (max-width: 1024px)',
	xl: '@media (max-width: 1280px)',
	'2xl': '@media (max-width: 1536px)',
} as const;

const FONT_FAMILY_FALLBACK =
	'"Segoe UI", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif';

export const fontFamilies = stylex.defineVars({
	text: `"Segoe UI Variable Text", "Seoge UI Variable Static Text", ${FONT_FAMILY_FALLBACK}`,
	small: `"Segoe UI Variable Small", "Seoge UI Variable Static Small", ${FONT_FAMILY_FALLBACK}`,
	display: `"Segoe UI Variable Display", "Seoge UI Variable Static Display", ${FONT_FAMILY_FALLBACK}`,
});

export const cornerRadii = stylex.defineVars({
	control: '4px',
	overlay: '8px',
});

export const fontSizes = stylex.defineVars({
	caption: '12px',
	body: '14px',
	bodyLarge: '18px',
	subtitle: '20px',
	title: '28px',
	titleLarge: '40px',
	display: '68px',
});

export const shadows = stylex.defineVars({
	card: '0px 2px 4px hsla(0, 0%, 0%, 4%)',
	// tooltip: '0px 4px 8px hsla(0, 0%, 0%, 14%)',
	// flyout: '0px 8px 16px hsla(0, 0%, 0%, 14%)',
	dialog:
		'0px 32px 64px hsla(0, 0%, 0%, 18.76%), 0px 2px 21px hsl(0, 0%, 0%, 14.74%)',
});

export const durations = stylex.defineVars({
	// slow: '333ms',
	normal: '250ms',
	fast: '167ms',
	faster: '83ms',
});

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

	/* Subtle Fill */
	subtleFillTransparent: 'transparent',
	subtleFillSecondary: 'hsla(0, 0%, 0%, 3.73%)',
	subtleFillTertiary: 'hsla(0, 0%, 0%, 2.41%)',
	subtleFillDisabled: 'transparent',

	/* Card Stroke */
	cardStrokeDefault: 'hsla(0, 0%, 0%, 5.78%)',
	// cardStrokeDefaultSolid: 'hsl(0, 0%, 92%)',

	// Control Fill
	// controlFillTransparent: 'transparent',
	controlFillDefault: 'hsla(0, 0%, 100%, 70%)',
	controlFillSecondary: 'hsla(0, 0%, 98%, 50%)',
	controlFillTertiary: 'hsla(0, 0%, 98%, 30%)',
	controlFillDisabled: 'hsla(0, 0%, 98%, 30%)', // Same as tertiary
	// controlFillInputActive: 'hsl(0, 0%, 100%)',

	// Control Strong Fill
	// controlStrongFillDefault: 'hsla(0, 0%, 0%, 44.58%)',
	// controlStrongFillDisabled: 'hsla(0, 0%, 0%, 31.73%)',

	// Control Solid Fill
	// controlSolidFillDefault: 'hsl(0, 0%, 100%)',

	// Control Alt Fill
	// controlAltFillTransparent: 'transparent',
	// controlAltFillSecondary: 'hsla(0, 0%, 0%, 2.41%)',
	// controlAltFillTertiary: 'hsla(0, 0%, 0%, 5.78%)',
	// controlAltFillQuarternary: 'hsla(0, 0%, 0%, 9.24%)',
	// controlAltFillDisabled: 'transparent',

	// Control on Image Fill
	// controlOnImageFillDefault: 'hsla(0, 0%, 100%, 79%)',
	// controlOnImageFillSecondary: 'hsl(0, 0%, 95%)',
	// controlOnImageFillTertiary: 'hsl(0, 0%, 92%)',
	// controlOnImageFillDisabled: 'transparent',

	// Control Stroke
	controlStrokeDefault: 'hsla(0, 0%, 0%, 5.78%)',
	// controlStrokeSecondary: 'hsla(0, 0%, 0%, 16.22%)',

	// Control Strong Stroke
	controlStrongStrokeDefault: 'hsla(0, 0%, 0%, 44.58%)',
	// controlStrongStrokeDisabled: 'hsla(0, 0%, 0%, 21.69%)',

	// Control Stroke on Accent
	controlStrokeOnAccentDefault: 'hsla(0, 0%, 100%, 8%)',
	controlStrokeOnAccentSecondary: 'hsla(0, 0%, 0%, 40%)',
	controlStrokeOnAccentTertiary: 'hsla(0, 0%, 0%, 21.69%)',
	// controlStrokeOnAccentDisabled: 'hsla(0, 0%, 100%, 8%)',

	// Control Strong Stroke on Image
	// controlStrongStrokeOnImageDefault: 'hsla(0, 0%, 100%, 35%)',

	// Surface Stroke
	surfaceStrokeDefault: 'hsla(0, 0%, 46%, 40%)',
	surfaceStrokeFlyout: 'hsla(0, 0%, 0%, 5.78%)',

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

	/* Card Background */
	cardBackgroundDefault: 'hsla(0, 0%, 100%, 70%)',
	cardBackgroundSecondary: 'hsla(0, 0%, 96%, 50%)',

	/* Divider Stroke */
	dividerStrokeDefault: 'hsla(0, 0%, 0%, 8.03%)',

	// Focus Stroke
	// TODO: move to `shadows`
	focusStroke: '0 0 0 1px hsl(0, 0%, 100%), 0 0 0 3px hsla(0, 0%, 0%, 89.56%)',
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

	subtleFillTransparent: 'transparent',
	subtleFillSecondary: 'hsla(0, 0%, 100%, 6.05%)',
	subtleFillTertiary: 'hsla(0, 0%, 100%, 4.19%)',
	subtleFillDisabled: 'transparent',

	cardStrokeDefault: 'hsla(0, 0%, 0%, 10%)',
	// cardStrokeDefaultSolid: 'hsl(0, 0%, 11%)',

	// controlFillTransparent: 'transparent',
	controlFillDefault: 'hsla(0, 0%, 100%, 0.061)',
	controlFillSecondary: 'hsla(0, 0%, 100%, 0.084)',
	controlFillTertiary: 'hsla(0, 0%, 100%, 0.033)',
	controlFillDisabled: 'hsla(0, 0%, 100%, 0.042)',
	// controlFillInputActive: 'hsla(0, 0%, 12%, 70%)',

	// controlStrongFillDefault: 'hsla(0, 0%, 100%, 54.42%)',
	// controlStrongFillDisabled: 'hsla(0, 0%, 100%, 24.65%)',

	// controlSolidFillDefault: 'hsl(0, 0%, 27%)',

	// controlAltFillTransparent: 'transparent',
	// controlAltFillSecondary: 'hsla(0, 0%, 0%, 0.1)',
	// controlAltFillTertiary: 'hsla(0, 0%, 100%, 0.042)',
	// controlAltFillQuarternary: 'hsla(0, 0%, 100%, 0.07)',
	// controlAltFillDisabled: 'transparent',

	// controlOnImageFillDefault: 'hsla(0, 0%, 11%, 70%)',
	// controlOnImageFillSecondary: 'hsl(0, 0%, 10%)',
	// controlOnImageFillTertiary: 'hsl(0, 0%, 7%)',
	// controlOnImageFillDisabled: 'transparent',

	controlStrokeDefault: 'hsla(0, 0%, 100%, 6.98%)',
	// controlStrokeSecondary: 'hsla(0, 0%, 100%, 9.3%)',

	controlStrongStrokeDefault: 'hsla(0, 0%, 100%, 54.42%)',
	// controlStrongStrokeDisabled: 'hsla(0, 0%, 100%, 15.81%)',

	controlStrokeOnAccentDefault: 'hsla(0, 0%, 100%, 8%)',
	controlStrokeOnAccentSecondary: 'hsla(0, 0%, 0%, 14%)',
	controlStrokeOnAccentTertiary: 'hsla(0, 0%, 0%, 21.69%)',
	// controlStrokeOnAccentDisabled: 'hsla(0, 0%, 0%, 20%)',

	// controlStrongStrokeOnImageDefault: 'hsla(0, 0%, 0%, 42%)',

	surfaceStrokeDefault: 'hsla(0, 0%, 46%, 40%)',
	surfaceStrokeFlyout: 'hsla(0, 0%, 0%, 20%)',

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
	solidBackgroundQuarternary: 'hsl(0, 0%, 17%)',

	cardBackgroundDefault: 'hsla(0, 0%, 100%, 5.12%)',
	cardBackgroundSecondary: 'hsla(0, 0%, 100%, 3.26%)',

	dividerStrokeDefault: 'hsla(0, 0%, 100%, 8.37%)',

	focusStroke: '0 0 0 1px hsla(0, 0%, 0%, 70%), 0 0 0 3px hsl(0, 0%, 100%)',
} satisfies typeof colorTokens);
