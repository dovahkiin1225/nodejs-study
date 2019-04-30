"use strict";
module.exports = (env = {}) => {
  const config = {
    // 从 Webpack 开始并不需要太多配置。唯一需要的两个选项是 entry 和 target。
    // 我们用 entry 字段声明程序的入口点，
    // 告诉 Webpack 在 Node.js 中使用 target 字段
    entry: ["./src/main.js"],
    target: "node",
    // 可以用 mode 字段告诉 Webpack 它应该关注编译速度（开发）还是混淆和缩小（生产）.
    // 为了帮助调试，需要在开发模式中运行，用 devtool 字段来指示我们想要源映射.
    mode: env.development ? "development" : "production",
    devtool: env.development ? "cheap-eval-source-map" : false
  };
  return config;
};
