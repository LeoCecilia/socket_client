const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = function override(config) {
  config.devtool = "eval-cheap-source-map";
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": resolve("src"),
    "@components": resolve("src/components"),
    "@routes": resolve("src/routes"),
    "@constants": resolve("src/constants"),
    "@hooks": resolve("src/hooks"),
    "@apis": resolve("src/apis"),
  };
  return config;
};
