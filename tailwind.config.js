/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          disabled: 'var(--text-disabled)'
        },
        accent: {
          DEFAULT: 'var(--accent-default)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
          disabled: 'var(--accent-disabled)'
        },
        control: {
          fill: {
            DEFAULT: 'var(--control-fill-default)',
            secondary: 'var(--control-fill-secondary)',
            tertiary: 'var(--control-fill-tertiary)',
            disabled: 'var(--control-fill-disabled)'
          },
          stroke: {
            DEFAULT: 'var(--control-stroke-default)',
            secondary: 'var(--control-stroke-secondary)'
          }
        },
        system: {
          attention: 'var(--system-attention)',
          success: 'var(--system-success)', 
          caution: 'var(--system-caution)',
          critical: 'var(--system-critical)',
          neutral: 'var(--system-neutral)'
        }
      },
      fontFamily: {
        text: 'var(--font-family-text)',
        small: 'var(--font-family-small)',
        display: 'var(--font-family-display)'
      },
      fontSize: {
        caption: 'var(--caption-font-size)',
        body: 'var(--body-font-size)',
        'body-large': 'var(--body-large-font-size)',
        subtitle: 'var(--subtitle-font-size)',
        title: 'var(--title-font-size)',
        'title-large': 'var(--title-large-font-size)',
        display: 'var(--display-font-size)'
      },
      borderRadius: {
        control: 'var(--control-corner-radius)',
        overlay: 'var(--overlay-corner-radius)',
        
      },
      transitionDuration: {
        slow: 'var(--control-slow-duration)',
        normal: 'var(--control-normal-duration)',
        fast: 'var(--control-fast-duration)',
        faster: 'var(--control-faster-duration)'
      },
      transitionTimingFunction: {
        'fast-out-slow-in': 'var(--control-fast-out-slow-in-easing)'
      },
      boxShadow: {
        card: 'var(--card-shadow)',
        tooltip: 'var(--tooltip-shadow)',
        flyout: 'var(--flyout-shadow)',
        dialog: 'var(--dialog-shadow)'
      }
    },
  },
  plugins: [],
}

