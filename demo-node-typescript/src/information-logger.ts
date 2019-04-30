import os from 'os'; // os 模块提供了一些基本的系统操作函数
import { name, version } from '../package.json';

export class InformationLogger {
  static logApplicationInformation() :void {
    console.log({
      application: {
        name,
        version,
      }
    })
  }
  static logSystemInformation() :void{
    console.log({
      system: {
        platform: process.platform,
        cpus: os.cpus().length
      }
    })
  }
}