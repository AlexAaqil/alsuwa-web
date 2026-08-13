// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': '/src',
                '@/components': '/src/components',
                '@/layouts': '/src/layouts',
                '@/utils': '/src/utils',
                '@/data': '/src/data',
            }
        }
    },
    site: 'https://alsuwa.com',
    trailingSlash: 'always',
    integrations: [sitemap()],
});
