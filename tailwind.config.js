/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#1a1a1a', // Dark Charcoal
                surface: '#252525',    // Slightly lighter for cards/nodes
                primary: '#e0e0e0',    // Off-white for text
                secondary: '#a0a0a0',  // Soft gray for secondary text
                accent: '#5f9ea0',     // Muted Teal (Cadet Blue) - restrained accent
                line: '#404040',       // Line color
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}
