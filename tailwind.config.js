const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue"
    ],
    theme: {
        extend: {
            screens: {
                sm: "1024px",
                md: "1280px",
                lg: "1440px"
            },
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans]
            },
            spacing: {
                "72": "18rem",
                "80": "20rem",
                "224": "56rem"
            },
            colors: {
                night: "#151515",
                dusk: "#202022",
                dawn: "#949495"
            },
            maxWidth: {
                "1920px": "1920px"
            }
        }
    },
    variants: {
        opacity: ["responsive", "hover", "focus", "disabled"]
    },
    plugins: [
        // require('@tailwindcss/ui'),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio")
    ]
};
