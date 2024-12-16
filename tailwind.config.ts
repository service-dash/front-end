import type { Config } from "tailwindcss"
// import colors from "./colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          secondary: "var(--text-secondary)",
          primary: "var(--text-primary)",
          tertiary: "var(--text-tertiary)",
          white: "var(--text-white)",
        },
        background: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
          tertiary: "var(--background-tertiary)",
          quaternary: "var(--background-quaternary)",
          accent: "var(--background-accent)",
          transparent: {
            one: "var(--background-transparent-one)",
            two: "var(--background-transparent-two)",
            dark: "var(--background-transparent-dark)"
          }
        },
        border: {
          transparent: "var(--border-transparent)",
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
        },
        brand: {
          blue: {
            primary: "var(--brand-blue-primary)",
            muted: "var(--brand-blue-muted)",
            secondary: "var(--brand-blue-secondary)",
            tertiary: "var(--brand-blue-tertiary)",
            quaternary: "var(--brand-blue-quaternary)",
          },
          yellow: {
            primary: "var(--brand-yellow-primary)",
            muted: "var(--brand-yellow-muted)",
            secondary: "var(--brand-yellow-secondary)",
            tertiary: "var(--brand-yellow-tertiary)",
            quaternary: "var(--brand-yellow-quaternary)",
          },
          black: "var(--brand-black)",
          white: "var(--brand-white)",
        },
        alert: {
          error: {
            default: "var(--alert-error)",
            strong: "var(--alert-error-strong)"
          },
          success: {
            default: "var(--alert-success)",
            strong: "var(--alert-success-strong)"
          },
          warning: {
            default: "var(--alert-warning)",
            strong: "var(--alert-warning-strong)"
          }
        },
        accent: {
          red: {
            strong: "var(--accent-red-strong)",
            faded: "var(--accent-red-faded)",
            transparent: "var(--accent-red-transparent)",
          },
          orange: {
            strong: "var(--accent-orange-strong)",
            faded: "var(--accent-orange-faded)",
            transparent: "var(--accent-orange-transparent)",
          },
          yellow: {
            strong: "var(--accent-yellow-strong)",
            faded: "var(--accent-yellow-faded)",
            transparent: "var(--accent-yellow-transparent)",
          },
          green: {
            strong: "var(--accent-green-strong)",
            faded: "var(--accent-green-faded)",
            transparent: "var(--accent-green-transparent)",
          },
          purple: {
            strong: "var(--accent-purple-strong)",
            faded: "var(--accent-purple-faded)",
            transparent: "var(--accent-purple-transparent)",
          },
          pink: {
            strong: "var(--accent-pink-strong)",
            faded: "var(--accent-pink-faded)",
            transparent: "var(--accent-pink-transparent)",
          },
          coral: {
            strong: "var(--accent-coral-strong)",
            faded: "var(--accent-coral-faded)",
            transparent: "var(--accent-coral-transparent)",
          },
          teal: {
            strong: "var(--accent-teal-strong)",
            faded: "var(--accent-teal-faded)",
            transparent: "var(--accent-teal-transparent)",
          },
          blue: {
            strong: "var(--accent-blue-strong)",
            faded: "var(--accent-blue-faded)",
            transparent: "var(--accent-blue-transparent)",
          },
        },
      },
      boxShadow: {
        outline: "var(--shadow-outline)"
      }
    },
  },
  darkMode: "media",
  plugins: [],
}
export default config
