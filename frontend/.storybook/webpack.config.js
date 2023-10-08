const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });
  return Object.assign(config, {
    devtool: "source-map",
    resolve: {
      ...config.resolve,
      alias: {
        "~/": path.resolve(__dirname, "../"),
        "~/components": path.resolve(__dirname, "../src/components"),
        "~/containers": path.resolve(__dirname, "../src/containers"),
        "~/pages": path.resolve(__dirname, "../src/pages"),
        "~/clientState": path.resolve(__dirname, "../src/clientState"),
        "~/mocks": path.resolve(__dirname, "../src/mocks"),
        "~/storybook": path.resolve(__dirname, "./"),
        "~/generated": path.resolve(__dirname, "../src/generated"),
        react: path.resolve("node_modules/react"),
        "react-dom": path.resolve(__dirname, "../node_modules/react-dom"),
      },
    },
  });
};
