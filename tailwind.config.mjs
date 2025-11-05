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
           red: 'var(--color-bg-red)',
        },
        
        // RENAMED 'textColor' to 'text' for simpler classes
        text: { 
           primary: 'var(--color-text-primary)',
           secondary: 'var(--color-text-secondary)',
           muted: 'var(--color-text-muted)',
           inverse: 'var(--color-text-inverse)',
           link: 'var(--color-text-link)',
           linkfooter: 'var(--color-text-linkfooter)', // Added
           white: 'var(--color-text-white)',
           pastel: 'var(--color-text-pastel)',
        },

        category: {
          business: 'var(--color-base-blue-600)',
          sports: 'var(--color-base-orange-500)',
          politics: 'var(--color-base-purple-600)',
          education: 'var(--color-base-green-600)',
          tech: 'var(--color-base-red-942414)',
        },

        // RENAMED 'borderColor' to 'border' and ADDED 'divider'
        border: {
            default: 'var(--color-border-default)',
            strong: 'var(--color-border-strong)',
            divider: 'var(--color-divider)', // <-- This gives us 'border-divider'
        },

        // ADDED your button colors for easy use
        button: {
          default: 'var(--color-button-primary-bg)',
          hover: 'var(--color-button-primary-hover)',
          secondary: 'var(--color-button-secondary-bg)',
          secondaryhover: 'var(--color-button-secondary-hover)',
        }
      },
      // THIS PART CONNECTS YOUR CUSTOM FONTS
      fontFamily: {
        inter: 'var(--font-body)',
        merri: 'var(--font-heading)'
      },
  // 👇 ADD THIS BLOCK
      boxShadow: {
        soft: 'var(--shadow-soft)',
        lift: 'var(--shadow-lift)',
        inset: 'var(--shadow-inset)',
      },
      // Grid setup
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      spacing: {
        24: '24px', 
        base: 'var(--grid-gutter)',
        marginDesktop: 'var(--body-margin-desktop)',
        marginMobile: 'var(--body-margin-mobile)',
      },
      maxWidth: {
        container: 'var(--container-max-width)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
