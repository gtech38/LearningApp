(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReactChart2-layoutWrapper"],{

/***/ "./src/components/utility/layoutWrapper.js":
/*!*************************************************!*\
  !*** ./src/components/utility/layoutWrapper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layoutWrapper_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutWrapper.style */ \"./src/components/utility/layoutWrapper.style.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layoutWrapper_style__WEBPACK_IMPORTED_MODULE_1__[\"LayoutContentWrapper\"], _extends({\n    className: props.className != null ? \"\".concat(props.className, \" isoLayoutContentWrapper\") : 'isoLayoutContentWrapper'\n  }, props), props.children);\n});\n\n//# sourceURL=webpack:///./src/components/utility/layoutWrapper.js?");

/***/ }),

/***/ "./src/components/utility/layoutWrapper.style.js":
/*!*******************************************************!*\
  !*** ./src/components/utility/layoutWrapper.style.js ***!
  \*******************************************************/
/*! exports provided: LayoutContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutContentWrapper\", function() { return LayoutContentWrapper; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 50px 20px;\\n  display: flex;\\n  flex-flow: row wrap;\\n  overflow: hidden;\\n\\n  @media only screen and (max-width: 767px) {\\n    padding: 50px 20px;\\n  }\\n\\n  @media (max-width: 580px) {\\n    padding: 15px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar LayoutContentWrapper = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).div(_templateObject());\n\n\n//# sourceURL=webpack:///./src/components/utility/layoutWrapper.style.js?");

/***/ })

}]);