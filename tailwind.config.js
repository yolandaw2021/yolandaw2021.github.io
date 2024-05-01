/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/*.js',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
      container: {
        center: true,
        padding: '2rem',
      },
      img: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'darkblue': '#023e8a',
        'blue': '#00b4d8',
        'lightblue': '#90e0ef',
        'faintblue': '#caf0f8',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        textUnderlineOffset: {
          default: '2px',
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('preline/plugin'),
    ]
}

