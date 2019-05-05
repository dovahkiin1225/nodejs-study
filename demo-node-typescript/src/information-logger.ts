import os from "os"; // os 模块提供了一些基本的系统操作函数
import { name, version } from "../package.json";

let decimalNumber: number = 42;
let myPetFamily: string[] = ["rocket", "fluffly", "harry"];
let myPetFamily1: Array<string> = ["rocket", "fluffly", "harry"];
let myPetFamily2: Array<object> = [{}];
let myPetFamily3: Array<any> = [{}, 1, "s"];
let myFavoriteTuple: [string, number, boolean];
myFavoriteTuple = ["chair", 20, true];

enum Sizes {
  Small = 1,
  Medium,
  Large
}
Sizes.Small; // => 1
Sizes.Medium; // => 2
Sizes.Large; // => 3

let whoKnows: any = 4; // assigned a number
whoKnows = 'a beautiful string'; // can be reassigned to a string
whoKnows = false; // can be reassigned to a boolean

// 当没有与事物相关类型的时候，void类型应该被使用。
// 在指定不返回任何内容的函数返回值时，最常用它。
const darkestPlaceOnEarth = (): void => {
  console.log('Marianas Trench');
};

let x = 10;

export class InformationLogger {
  static logApplicationInformation(): void {
    console.log({
      application: {
        name,
        version
      }
    });
  }
  static logSystemInformation(): void {
    console.log({
      system: {
        platform: process.platform,
        cpus: os.cpus().length
      }
    });
  }
}
