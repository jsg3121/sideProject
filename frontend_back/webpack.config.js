module.exports = {
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        "vue-style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          // Requires sass-loader@^7.0.0
          options: {
            implementation: require("sass"),
            fiber: require("fibers"),
            indentedSyntax: true // optional
          },
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require("sass"),
            sassOptions: {
              fiber: require("fibers"),
              indentedSyntax: true // optional
            }
          }
        }
      ]
    },
    {
      test: /\.scss&/,
      use: [
        "vue-styles-loader",
        "css-loader",
        {
          loader: "scss-loader",
          options: {
            data: `
              @import "@/styles/_variables.scss";
              @import "@/styles/_mixins.scss";
            `
          }
        }
      ]
    }
  ]
};
