module.exports = {
  publicPath: "/miekeuytofficial.github.io/",
  assetsDir: "assets",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Your new title";
      return args;
    });
  },
};
