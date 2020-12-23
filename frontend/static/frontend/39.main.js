(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./src/components/utility/layoutContent.js":
/*!*************************************************!*\
  !*** ./src/components/utility/layoutContent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layoutContent_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layoutContent.style */ \"./src/components/utility/layoutContent.style.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_layoutContent_style__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/utility/layoutContent.js?");

/***/ }),

/***/ "./src/components/utility/layoutContent.style.js":
/*!*******************************************************!*\
  !*** ./src/components/utility/layoutContent.style.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  padding: 35px;\\n  background-color: #ffffff;\\n  border: 1px solid \", \";\\n  height: 100%;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar LayoutContentStyle = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-components'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).div(_templateObject(), !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'styled-theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('border', 0));\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutContentStyle);\n\n//# sourceURL=webpack:///./src/components/utility/layoutContent.style.js?");

/***/ }),

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

/***/ }),

/***/ "./src/customApp/containers/blankPage.js":
/*!***********************************************!*\
  !*** ./src/customApp/containers/blankPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/utility/layoutWrapper */ \"./src/components/utility/layoutWrapper.js\");\n/* harmony import */ var _components_utility_layoutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/utility/layoutContent */ \"./src/components/utility/layoutContent.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar _default = /*#__PURE__*/function (_Component) {\n  _inherits(_default, _Component);\n\n  var _super = _createSuper(_default);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(_default, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        style: {\n          height: '100vh'\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_utility_layoutContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Blank Page\")));\n    }\n  }]);\n\n  return _default;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/customApp/containers/blankPage.js?");

/***/ })

}]);