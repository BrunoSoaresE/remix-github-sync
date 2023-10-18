import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config

