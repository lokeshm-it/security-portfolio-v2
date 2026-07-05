import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
          "./src/app/**/*.{ts,tsx}",
          "./src/components/**/*.{ts,tsx}",
          "./src/lib/**/*.{ts,tsx}",
        ],
    theme: {
          extend: {
                  colors: {
                            background: "hsl(var(--background))",
                            foreground: "hsl(var(--foreground))",
                            card: "hsl(var(--card))",
                            "card-foreground": "hsl(var(--card-foreground))",
                            border: "hsl(var(--border))",
                            primary: {
                                        DEFAULT: "hsl(var(--primary))",
                                        foreground: "hsl(var(--primary-foreground))",
                            },
                            secondary: {
                                        DEFAULT: "hsl(var(--secondary))",
                                        foreground: "hsl(var(--secondary-foreground))",
                            },
                            muted: {
                                        DEFAULT: "hsl(var(--muted))",
                                        foreground: "hsl(var(--muted-foreground))",
                            },
                            accent: {
                                        DEFAULT: "hsl(var(--accent))",
                                        foreground: "hsl(var(--accent-foreground))",
                            },
                  },
                  borderRadius: {
                            lg: "var(--radius)",
                            md: "calc(var(--radius) - 2px)",
                            sm: "calc(var(--radius) - 4px)",
                  },
                  backdropBlur: {
                            xs: "2px",
                  },
                  keyframes: {
                            "fade-up": {
                                        "0%": { opacity: "0", transform: "translateY(16px)" },
                                        "100%": { opacity: "1", transform: "translateY(0)" },
                            },
                            "glow-pulse": {
                                        "0%, 100%": { opacity: "0.6" },
                                        "50%": { opacity: "1" },
                            },
                  },
                  animation: {
                            "fade-up": "fade-up 0.6s ease-out both",
                            "glow-pulse": "glow-pulse 3s ease-in-out infinite",
                  },
          },
    },
    plugins: [],
};

export default config;
