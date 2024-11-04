// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { resolve } from 'path'
// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    // rollupOptions: {
    //   input: {
    //     combined: resolve(__dirname, 'src/combined.js'),
    //     primevue: resolve(__dirname, 'src/primevue.js'),
    //     vuetify: resolve(__dirname, 'src/vuetify.js')
    //   },
    //   output: [
    //     {
    //       format: 'es',
    //       dir: 'dist',
    //       entryFileNames: '[name].es.js'
    //     },
    //     {
    //       format: 'cjs',
    //       dir: 'dist',
    //       entryFileNames: '[name].cjs.js'
    //     }
    //   ]
    // },
    lib: {
      entry: {
        main: resolve(__dirname, 'src/index.js') // 打包進入檔
      },
      formats: ['es', 'cjs'],
      fileName: (format) => `custom-vuetify-lib.${format}.js`
    }
  },
})
