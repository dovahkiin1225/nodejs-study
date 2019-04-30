/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, author, license, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"demo-node-typescript\",\"version\":\"0.0.1\",\"description\":\"用 TypeScript 开发 Node.js 程序\",\"main\":\"index.js\",\"scripts\":{\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\",\"start\":\"webpack --progress --env.development\",\"start:prod\":\"webpack --progress\"},\"author\":\"yosion\",\"license\":\"ISC\",\"devDependencies\":{\"webpack\":\"^4.30.0\",\"webpack-cli\":\"^3.3.1\"}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlLmpzb24uanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/information-logger.js":
/*!***********************************!*\
  !*** ./src/information-logger.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const os = __webpack_require__(/*! os */ \"os\"); // os 模块提供了一些基本的系统操作函数\r\nconst { name, version, author } = __webpack_require__(/*! ../package.json */ \"./package.json\");\r\n\r\nmodule.exports = {\r\n  logApplicationInformation: () =>\r\n    console.log({\r\n      application: {\r\n        name,\r\n        version,\r\n        author\r\n      }\r\n    }),\r\n  logSystemInformation: () =>\r\n    console.log({\r\n      system: {\r\n        process,\r\n        platform: process.platform,\r\n        cpus: os.cpus().length\r\n      }\r\n    })\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mb3JtYXRpb24tbG9nZ2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZm9ybWF0aW9uLWxvZ2dlci5qcz9lMGE2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9zID0gcmVxdWlyZShcIm9zXCIpOyAvLyBvcyDmqKHlnZfmj5DkvpvkuobkuIDkupvln7rmnKznmoTns7vnu5/mk43kvZzlh73mlbBcclxuY29uc3QgeyBuYW1lLCB2ZXJzaW9uLCBhdXRob3IgfSA9IHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBsb2dBcHBsaWNhdGlvbkluZm9ybWF0aW9uOiAoKSA9PlxyXG4gICAgY29uc29sZS5sb2coe1xyXG4gICAgICBhcHBsaWNhdGlvbjoge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdmVyc2lvbixcclxuICAgICAgICBhdXRob3JcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgbG9nU3lzdGVtSW5mb3JtYXRpb246ICgpID0+XHJcbiAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgIHN5c3RlbToge1xyXG4gICAgICAgIHByb2Nlc3MsXHJcbiAgICAgICAgcGxhdGZvcm06IHByb2Nlc3MucGxhdGZvcm0sXHJcbiAgICAgICAgY3B1czogb3MuY3B1cygpLmxlbmd0aFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/information-logger.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const informationLogger = __webpack_require__(/*! ./information-logger */ \"./src/information-logger.js\");\r\ninformationLogger.logApplicationInformation();\r\ninformationLogger.logSystemInformation();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5mb3JtYXRpb25Mb2dnZXIgPSByZXF1aXJlKFwiLi9pbmZvcm1hdGlvbi1sb2dnZXJcIik7XHJcbmluZm9ybWF0aW9uTG9nZ2VyLmxvZ0FwcGxpY2F0aW9uSW5mb3JtYXRpb24oKTtcclxuaW5mb3JtYXRpb25Mb2dnZXIubG9nU3lzdGVtSW5mb3JtYXRpb24oKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })

/******/ });