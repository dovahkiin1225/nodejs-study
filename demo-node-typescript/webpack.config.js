"use strict";
const NodemonPlugin = require("nodemon-webpack-plugin");
// nodemon 是专门为这个目的而开发的工具：在开发期间重新启动 Node.js 应用程序
module.exports = (env = {}) => {
  const config = {
    // 从 Webpack 开始并不需要太多配置。唯一需要的两个选项是 entry 和 target。
    // 我们用 entry 字段声明程序的入口点，
    // 告诉 Webpack 在 Node.js 中使用 target 字段
    entry: ["./src/main.ts"],
    target: "node",
    // 可以用 mode 字段告诉 Webpack 它应该关注编译速度（开发）还是混淆和缩小（生产）.
    // 为了帮助调试，需要在开发模式中运行，用 devtool 字段来指示我们想要源映射.
    mode: env.development ? "development" : "production",
    devtool: env.development ? "cheap-eval-source-map" : false,
    resolve: {
      // tells Webpack what files to watch.
      extensions: ['.ts', '.js'],
      modules: ["node_modules", "src", "package.json"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader"
        }
      ]
    },
    plugins: [] // required for config.plugins.push(...);
  };
  if (env.nodemon) {
    config.watch = true;
    config.plugins.push(new NodemonPlugin());
  }
  return config;
};
