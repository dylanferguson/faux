const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
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