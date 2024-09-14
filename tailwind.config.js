/** @type {import('tailwindcss').Config} */

// The issue is here! import.meta.cannot be used in the tailwind config
console.log(import.meta.resolve('tailwindcss'));

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

