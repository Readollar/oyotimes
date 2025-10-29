/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx,vue,html}'],
  theme: {
    // THIS PART FIXES YOUR 120px MARGIN
    container: {
      center: true,
      padding: {
        DEFAULT: '24px', // default gutter
        sm: '24px',
        md: '48px',      // A default for tablets
        xl: '120px',     // Your 120px margin for large screens
      },
      screens: {
        sm:'640px',
        md: '768px',
        lg: '1440px',
           // main desktop breakout

        '2xl': '1600px', // large displays
      }
    },
    

    extend: {
      // THIS PART FIXES YOUR CUSTOM COLORS
      colors: {
        background: {
           primary: 'var(--color-bg-primary)',
           secondary: 'var(--color-bg-secondary)',
           footer: 'var(--color-bg-footer)',
           alt: 'var(--color-bg-alt)',
           
        },
        
        textColor: { 
           primary: 'var(--color-text-primary)',
           secondary: 'var(--color-text-secondary)',
           muted: 'var(--color-text-muted)',
           inverse: 'var(--color-text-inverse)',
           link: 'var(--color-text-link)',
           white: 'var(--color-text-white)',
           pastel: 'var(--color-text-pastel)',
        },

        category: {
          business: 'var(--color-base-blue-600)',
          sports: 'var(--color-base-orange-500)',
          politics: 'var(--color-base-purple-600)',
          education: 'var(--color-base-green-600)',
          tech: 'var(--color-base-red-942414)', // Re-using your main red
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
      // Grid setup
      gridTemplateColumns: {
        // defines a consistent 12-column layout for manual grid usage
        12: 'repeat(12, minmax(0, 1fr))',
      },
      spacing: {
        24: '24px', //ensures your gutter variable exists
        base: 'var(--grid-gutter)',
        marginDesktop: 'var(--body-margin-desktop)',
        marginMobile: 'var(--body-margin-mobile)',
      },
      maxWidth: {
        container: 'var(--container-max-width)',
      }
    }
  },
  plugins: []
};
