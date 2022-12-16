/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            light: '#eeeeee',
            primary: '#7971ea',
            gray: '#393e46',
            black: '#222831',
        },
        fontFamily: {
            body: ['Commissioner', 'sans-serif'],
            subheader: ['PT Sans Caption', 'sans-serif'],
            header: ["'Red Hat Display'", 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
