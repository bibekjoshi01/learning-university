/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111315',
        paper: '#F7F7F4',
        line: '#DEDFDA',
        cobalt: '#315BEA',
        night: '#111827',
        success: '#16805B',
        warning: '#B76E17',
        danger: '#C74747',
        sage: '#E8F0EB',
        sand: '#F3EDE2',
        lilac: '#EEEAF7',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        display: ['var(--font-newsreader)', 'serif'],
      },
      boxShadow: {
        card: '0 18px 60px rgba(17, 19, 21, 0.07)',
        lift: '0 24px 80px rgba(17, 19, 21, 0.11)',
      },
    },
  },
  plugins: [],
};
