const withFonts = require("next-fonts");

module.exports = withFonts({
  webpack(config, options) {
    config.node = {
      fs: "empty",
    };
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "url-loader?limit=100000",
        },
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
  env: {
    ARTICLE: process.env.NEXT_PUBLIC_ARTICLE,
    GET_USER: process.env.NEXT_PUBLIC_USER,
    REGISTER: process.env.NEXT_PUBLIC_REGISTER,
    LOGIN: process.env.NEXT_PUBLIC_LOGIN
  }
});