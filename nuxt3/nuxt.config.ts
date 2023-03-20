// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    modules: ["@pinia/nuxt"],
    runtimeConfig: {
        public: {
            apiBase: "http://localhost:8000/api",
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ["vue-toastification"],
    },
});
