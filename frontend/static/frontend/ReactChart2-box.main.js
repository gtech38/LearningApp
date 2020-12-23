(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReactChart2-box"],{

/***/ "./src/components/utility/box.js":
/*!***************************************!*\
  !*** ./src/components/utility/box.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _boxTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxTitle */ \"./src/components/utility/boxTitle.js\");\n/* harmony import */ var _box_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box.style */ \"./src/components/utility/box.style.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_box_style__WEBPACK_IMPORTED_MODULE_2__[\"BoxWrapper\"], {\n    className: \"isoBoxWrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boxTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: props.title,\n    subtitle: props.subtitle\n  }), props.children);\n});\n\n//# sourceURL=webpack:///./src/components/utility/box.js?");

/***/ }),

/***/ "./src/components/utility/box.style.js":
/*!*********************************************!*\
  !*** ./src/components/utility/box.style.js ***!
  \*********************************************/
/*! exports provided: BoxWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxWrapper\", function() { return BoxWrapper; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n  padding: 20px;\\n  background-color: #ffffff;\\n  border: 1px solid \", \";\\n  margin: 0 17px 30px;\\n\\n  &:last-child {\\n    margin-bottom: 0;\\n  }\\n\\n  @media only screen and (max-width: 767px) {\\n    padding: 20px;\\n    margin: 0 10px 30px;\\n  }\\n\\n  &.half {\\n    width: calc(50% - 34px);\\n    @media (max-width: 767px) {\\n      width: 100%;\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar BoxWrapper = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).div(_templateObject(), !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('border', 0));\n\n\n//# sourceURL=webpack:///./src/components/utility/box.style.js?");

/***/ }),

/***/ "./src/components/utility/boxTitle.js":
/*!********************************************!*\
  !*** ./src/components/utility/boxTitle.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _boxTitle_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxTitle.style */ \"./src/components/utility/boxTitle.style.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boxTitle_style__WEBPACK_IMPORTED_MODULE_1__[\"BoxTitle\"], {\n    className: \"isoBoxTitle\"\n  }, ' ', props.title, ' ') : '', props.subtitle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_boxTitle_style__WEBPACK_IMPORTED_MODULE_1__[\"BoxSubTitle\"], {\n    className: \"isoBoxSubTitle\"\n  }, ' ', props.subtitle, ' ') : '');\n});\n\n//# sourceURL=webpack:///./src/components/utility/boxTitle.js?");

/***/ }),

/***/ "./src/components/utility/boxTitle.style.js":
/*!**************************************************!*\
  !*** ./src/components/utility/boxTitle.style.js ***!
  \**************************************************/
/*! exports provided: BoxTitle, BoxSubTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxTitle\", function() { return BoxTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxSubTitle\", function() { return BoxSubTitle; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 13px;\\n  font-weight: 400;\\n  color: \", \";\\n  line-height: 24px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 14px;\\n  font-weight: 500;\\n  color: \", \";\\n  margin: 0;\\n  margin-bottom: 5px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar BoxTitle = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).h3(_templateObject(), !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('text', 0));\nvar BoxSubTitle = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).p(_templateObject2(), !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('text', 3));\n\n\n//# sourceURL=webpack:///./src/components/utility/boxTitle.style.js?");

/***/ })

}]);