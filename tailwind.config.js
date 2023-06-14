/** @type {import('tailwindcss').Config} */

import gridAreas from '@savvywombat/tailwindcss-grid-areas'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          'nav header header',
          'nav    main   main',
        ],
      },
    },
  },
  plugins: [gridAreas],
}

