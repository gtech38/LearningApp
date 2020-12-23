(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReactChart2-pageHeader"],{

/***/ "./src/components/utility/pageHeader.js":
/*!**********************************************!*\
  !*** ./src/components/utility/pageHeader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pageHeader_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageHeader.style */ \"./src/components/utility/pageHeader.style.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pageHeader_style__WEBPACK_IMPORTED_MODULE_1__[\"ComponentTitleWrapper\"], {\n    className: \"isoComponentTitle\"\n  }, props.children);\n});\n\n//# sourceURL=webpack:///./src/components/utility/pageHeader.js?");

/***/ }),

/***/ "./src/components/utility/pageHeader.style.js":
/*!****************************************************!*\
  !*** ./src/components/utility/pageHeader.style.js ***!
  \****************************************************/
/*! exports provided: ComponentTitleWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ComponentTitleWrapper\", function() { return ComponentTitleWrapper; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _config_withDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/withDirection */ \"./src/config/withDirection.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 19px;\\n  font-weight: 500;\\n  color: \", \";\\n  width: 100%;\\n  margin: 0 17px;\\n  margin-bottom: 30px;\\n  display: flex;\\n  align-items: center;\\n  white-space: nowrap;\\n\\n  @media only screen and (max-width: 767px) {\\n    margin: 0 10px;\\n    margin-bottom: 30px;\\n  }\\n\\n  &:before {\\n    content: '';\\n    width: 5px;\\n    height: 40px;\\n    background-color: \", \";\\n    display: flex;\\n    margin: \", \";\\n  }\\n\\n  &:after {\\n    content: '';\\n    width: 100%;\\n    height: 1px;\\n    background-color: \", \";\\n    display: flex;\\n    margin: \", \";\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar WDComponentTitleWrapper = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).h1(_templateObject(), !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('secondary', 2), !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('secondary', 3), function (props) {\n  return props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0';\n}, !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('secondary', 3), function (props) {\n  return props['data-rtl'] === 'rtl' ? '0 15px 0 0' : '0 0 0 15px';\n});\nvar ComponentTitleWrapper = Object(_config_withDirection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(WDComponentTitleWrapper);\n\n\n//# sourceURL=webpack:///./src/components/utility/pageHeader.style.js?");

/***/ })

}]);