/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {},
        colors: {
            greenColor: '#BDFF01',
        }
    },

    plugins: [require('flowbite/plugin')],
}