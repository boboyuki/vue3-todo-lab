const { defineConfig } = require("@vue/cli-service");
const path = require("path")

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/vue3-todo-lab/" : "/",
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
        "@pages": path.join(__dirname, "./src/pages"),
        "@components": path.join(__dirname, "./src/components"),
        "@utils": path.join(__dirname, "./src/utils"),
      },
    },
  },
});
