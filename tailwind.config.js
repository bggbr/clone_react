/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                banner_image: `https://image.tmdb.org/t/p/original${theme}`,
            }),
            height: {
                192: '48rem',
            },
            flex: {
                1: '1 0 auto',
            },
        },
    },
    plugins: [],
};
