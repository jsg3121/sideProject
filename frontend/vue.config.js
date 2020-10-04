module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/posting": {
        target: "http://localhost:3000/posting",
        changeOrigin: true,
        pathRewrite: { "^/posting": "" }
      }
    }
  }
};
