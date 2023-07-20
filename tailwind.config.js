import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--gray-900))',
          foreground: 'hsl(var(--gray-50))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.grid-container': {
          display: 'grid',
          gridTemplateColumns:
            '1fr min(var(--container-width, 400px), calc(100% - (2 * var(--container-gutter-size, 24px)))) 1fr',
          gridColumnGap: 'var(--container-gutter-size, 24px)',
          overflow: 'clip',
          width: '100%',
          rowGap: theme('spacing.24'),
          paddingBottom: theme('spacing.24'),
          '@media screen(md)': {
            rowGap: theme('spacing.32'),
            paddingBottom: theme('spacing.32'),
          },
          '@media screen(lg)': {
            rowGap: theme('spacing.40'),
            paddingBottom: theme('spacing.40'),
          },

          /* center all children by default */
          '& > *': {
            gridColumn: '2',
          },

          /* allows content to bleed edge to edge */
          '& > .bleed-full': {
            gridColumn: '1 / -1',
          },

          /* allows content to bleed to starting edge */
          '& > .bleed-start': {
            gridColumn: '1 / 3',
          },

          /* allows content to bleed to ending edge */
          '& > .bleed-end': {
            gridColumn: '2 / -1',
          },

          '& > .bleed-none': {
            gridColumn: '2 !important',
          },
        },
        '.noise-container': {
          position: 'relative',
          isolation: 'isolate',
          '@apply bg-zinc-50 dark:bg-zinc-900': {},
        },
        '.noise-underlay': {
          zIndex: -30,
          position: 'relative',
        },
        '.noise': {
          zIndex: -20,
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("/assets/noise.webp")`,
          opacity: 0.4,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        },
        '.noise-panel': {
          '@apply relative isolate border border-zinc-500 bg-zinc-600 shadow-xl':
            {},
          '&::before': {
            '@apply absolute inset-0 opacity-40 mix-blend-overlay -z-20': {},
            content: "''",
            backgroundImage: `url("/assets/noise.webp")`,
          },
        },
        '.bg-grid': {
          // https://stackoverflow.com/a/32861765/1332403
          backgroundSize: '32px 32px',
          backgroundImage: `radial-gradient(circle, rgba(249, 250, 251, .1) 1px, transparent 1px)`,
          backgroundPosition: 'top center',
          imageRendering: 'pixelated',

          // https://stackoverflow.com/a/9670876/1332403
          maskImage: `linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)`,
        },
        '.bg-grid-light': {
          // https://stackoverflow.com/a/32861765/1332403
          backgroundSize: '32px 32px',
          backgroundImage: `radial-gradient(circle, rgba(17, 24, 39, .06) 1px, transparent 1px)`,
          backgroundPosition: 'top center',
          imageRendering: 'pixelated',

          // https://stackoverflow.com/a/9670876/1332403
          maskImage: `linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)`,
        },
      })
    }),
    plugin(function ({ addVariant }) {
      // Add a `cildren` variant, ie. `children:pb-0`
      addVariant('children', '& > *')
    }),
  ],
}
