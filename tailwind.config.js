const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        colors: {
            primary: '#635bfc',
            secondary: '#79dbc0',
            ...defaultTheme.colors
        },
        extend: {
            fontFamily: {
                sans: [
                    'Fira Sans',
                    ...defaultTheme.fontFamily.sans
                ]
            }
        }
    }
}