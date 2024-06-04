const postcssPresetsEnv = require("postcss-preset-env");

module.exports = ({ env }) => ({
  plugins: [
    postcssPresetsEnv({}),
    require("autoprefixer"),
    require("tailwindcss"),
    env === "production" ? require("cssnano") : null,
  ].filter(Boolean),
});
