/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        oyo: {
          primary: '#942414',
          'primary-hover': '#7A1D11',
          secondary: '#E59D25',
          brown: '#B65C15',
          deepbrown: '#37140E',
          cream: '#F5ECDD',
          'bg-alt': '#F2F2F2',
          divider: '#D1DCE5',
          neutral: '#666666',
          fadeblack: '#23242A'
        }
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        merri: ['Merriweather', 'serif']
      },
      boxShadow: {
        soft: '0 2px 4px rgba(0,0,0,0.10)',
        lift: '0 6px 18px rgba(0,0,0,0.12)',
        inset: 'inset 0 2px 6px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
