/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      boxShadow: {
        "timelineIconShadowDark": "0 0 0 4px #1976d2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
        "timelineIconShadowLight": "0 0 0 4px #1976d2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: [],
  darkMode: 'class',
  important: true,
}
