import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/themes/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    colors: {
      dark: '#1E1E1E',
      gray: '#6C757D',
      cyan: '#ECF4FF',
      light: '#ffffff',
      primary: '#0D63F3',
      textMain: '#101828',
      gradient: 'linear-gradient(270deg, #4D5EF6 0%, #F64D4D 100%)',
      linear: 'linear-gradient(270deg, rgba(77, 94, 246, 0.20) 0%, rgba(246, 77, 77, 0.20) 100%)'
    },
    boxShadow: {
      'md': "0px 4px 12px 0px rgba(0, 0, 0, 0.12)",
    },
    extend: {},
  },
  plugins: [nextui()],
}
export default config
