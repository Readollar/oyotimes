/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx,vue,html}'],
  theme: {
    // THIS PART FIXES YOUR 120px MARGIN
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // A sensible default for mobile
        md: '2rem',      // A default for tablets
        lg: '120px',     // Your 120px margin for large screens
      },
    },

    extend: {
      // THIS PART FIXES YOUR CUSTOM COLORS
      colors: {
        background: {
           primary: 'var(--color-bg-primary)',
           secondary: 'var(--color-bg-secondary)',
           footer: 'var(--color-bg-footer)',
        },
        textColor: { 
           primary: 'var(--color-text-primary)',
           secondary: 'var(--color-text-secondary)',
           muted: 'var(--color-text-muted)',
           inverse: 'var(--color-text-inverse)',
           link: 'var(--color-text-link)',
           white: 'var(--color-text-white)'
        },
        borderColor: {
            default: 'var(--color-border-default)',
            strong: 'var(--color-border-strong)',
        }
      },
      // THIS PART CONNECTS YOUR CUSTOM FONTS
      fontFamily: {
        inter: 'var(--font-body)',
        merri: 'var(--font-heading)'
      },
    }
  },
  plugins: []
};