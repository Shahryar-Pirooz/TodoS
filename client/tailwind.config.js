/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        colors: {
            light: '#eeeeee',
            primary: '#7971ea',
            gray: '#393e46',
            black: '#222831',
        },
        fontFamily: {
            'quick-sand': ['Quicksand', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
