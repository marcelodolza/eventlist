module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.scss";`
      },
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#dc385e",
            "link-color": "#dc385e"
          },
          javascriptEnabled: true
        }
      }
    }
  }
};
