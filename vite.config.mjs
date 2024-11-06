// Plugins
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import ViteFonts from "unplugin-fonts/vite";
import VueRouter from "unplugin-vue-router/vite";
import { resolve } from "path";
// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss",
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900",
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["vuetify"], // 如果是第三方庫，排除該庫靜態優化
  },
  define: {
    "process.env": {},
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    dedupe: ["vue"], // 增加這段避免重複引入
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, "./export/index.js"), // 打包進入檔
      },
      name: "custom-vuetify-lib", // 必須在 UMD 格式下指定全局名稱
      formats: ["es", "cjs"],
      fileName: (format) => `main.${format}.js`,
    },

    // make sure to externalize deps that shouldn't be bundled
    // into your library

    cssCodeSplit: true, // 分割css樣式
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options

      input: {
        main: resolve(__dirname, "src/export/index.js"), // 主入口檔
        Paginator: resolve(__dirname, "src/export/Paginator/index.js"), // 元件入口檔
        Button: resolve(__dirname, "src/export/Button/index.js"), // 元件入口檔
      },
      output: [
        {
          dir: "dist", // 打包檔案位置資料夾
          entryFileNames: "[name]/index.js",
          assetFileNames: "[name]/style.css", // 個別 CSS 文件名稱
          format: "es",
          globals: {
            vue: "Vue",
            vuetify: "Vuetify",
          },
        },
        {
          dir: "dist", // 打包檔案位置資料夾
          entryFileNames: "[name]/index.cjs.js",
          assetFileNames: "[name]/style.css", // 個別 CSS 文件名稱
          format: "cjs",
          globals: {
            vue: "Vue",
            vuetify: "Vuetify",
          },
        },
      ],

      external: ["vue", "vuetify"],
    },
  },
});
