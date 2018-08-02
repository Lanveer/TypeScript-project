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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/first.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/first.js":
/*!**********************!*\
  !*** ./app/first.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//ts参数编写\r\nfunction greeter(person) {\r\n    return \"Hello, \" + person;\r\n}\r\nvar user1 = 'lanveer';\r\n// document.body.innerHTML = greeter(user);\r\nconsole.log('function data is:', greeter(user1));\r\n// 使用类\r\nvar Student = /** @class */ (function () {\r\n    function Student(firstName, lastName) {\r\n        this.firstName = firstName;\r\n        this.lastName = lastName;\r\n        this.fullName = firstName + ' ' + lastName;\r\n    }\r\n    return Student;\r\n}());\r\nfunction greet(person) {\r\n    return 'hello' + person.firstName + ' ' + person.lastName;\r\n}\r\nvar user2 = new Student('Kobe', \"Bryant\");\r\nconsole.log('greet data is:', greet(user2));\r\n//下面实验ts的基本数据类型\r\n//boolean 类型\r\nvar isBoolean = false;\r\n//number类型\r\nvar decimal = 6;\r\n//string\r\nvar names = 'lanveer';\r\n//Array\r\nvar arr = [1, 2, 3];\r\nvar arr2 = ['apple', 'pear', 'grape'];\r\nconsole.log('arr2 list data is:', arr2);\r\n//Enum 一般在数据个数固定且值固定的情况下使用枚举。例如一个星期有七天，周一到周日。\r\nvar Colors;\r\n(function (Colors) {\r\n    Colors[Colors[\"red\"] = 0] = \"red\";\r\n    Colors[Colors[\"green\"] = 1] = \"green\";\r\n    Colors[Colors[\"black\"] = 2] = \"black\";\r\n})(Colors || (Colors = {}));\r\n;\r\nvar c = Colors.black;\r\nvar c1 = Colors[0];\r\nconsole.log('c data is:', c); //这里会打印出Colors的下标\r\nconsole.log('c1 data is:', c1); // 这里便会是Colors的第0 个元素\r\n//元祖类型\r\nvar x = [\"hello\", 10];\r\n//任意类型\r\nvar notSure = 4;\r\nnotSure = \"maybe a string instead\";\r\n//为空类型\r\nvar unusable = undefined;\r\n\n\n//# sourceURL=webpack:///./app/first.js?");

/***/ })

/******/ });