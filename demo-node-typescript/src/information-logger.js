const os = require("os"); // os 模块提供了一些基本的系统操作函数
const { name, version, author } = require("../package.json");

module.exports = {
  logApplicationInformation: () =>
    console.log({
      application: {
        name,
        version,
        author
      }
    }),
  logSystemInformation: () =>
    console.log({
      system: {
        process,
        platform: process.platform,
        cpus: os.cpus().length
      }
    })
};
