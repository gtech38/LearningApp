(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReactChart2-mix"],{

/***/ "./src/containers/Charts/reactChart2/components/mix/config.js":
/*!********************************************************************!*\
  !*** ./src/containers/Charts/reactChart2/components/mix/config.js ***!
  \********************************************************************/
/*! exports provided: data, options, plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plugins\", function() { return plugins; });\nvar data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n  datasets: [{\n    label: 'Sales',\n    type: 'line',\n    data: [51, 65, 40, 49, 60, 37, 40],\n    fill: false,\n    borderColor: '#EC932F',\n    backgroundColor: '#EC932F',\n    pointBorderColor: '#EC932F',\n    pointBackgroundColor: '#EC932F',\n    pointHoverBackgroundColor: '#EC932F',\n    pointHoverBorderColor: '#EC932F',\n    yAxisID: 'y-axis-2'\n  }, {\n    type: 'bar',\n    label: 'Visitor',\n    data: [200, 185, 590, 621, 250, 400, 95],\n    fill: false,\n    backgroundColor: '#71B37C',\n    borderColor: '#71B37C',\n    hoverBackgroundColor: '#71B37C',\n    hoverBorderColor: '#71B37C',\n    yAxisID: 'y-axis-1'\n  }]\n};\nvar options = {\n  responsive: true,\n  tooltips: {\n    mode: 'label'\n  },\n  elements: {\n    line: {\n      fill: false\n    }\n  },\n  scales: {\n    xAxes: [{\n      display: true,\n      gridLines: {\n        display: false\n      }\n    }],\n    yAxes: [{\n      type: 'linear',\n      display: true,\n      position: 'left',\n      id: 'y-axis-1',\n      gridLines: {\n        display: false\n      }\n    }, {\n      type: 'linear',\n      display: true,\n      position: 'right',\n      id: 'y-axis-2',\n      gridLines: {\n        display: false\n      }\n    }]\n  }\n};\nvar plugins = [{\n  afterDraw: function afterDraw(chartInstance, easing) {\n    var ctx = chartInstance.chart.ctx;\n    ctx.fillText('This text drawn by a plugin', 100, 100);\n  }\n}];\n\n\n//# sourceURL=webpack:///./src/containers/Charts/reactChart2/components/mix/config.js?");

/***/ }),

/***/ "./src/containers/Charts/reactChart2/components/mix/mix.js":
/*!*****************************************************************!*\
  !*** ./src/containers/Charts/reactChart2/components/mix/mix.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-chartjs-2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/containers/Charts/reactChart2/components/mix/config.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-chartjs-2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _config__WEBPACK_IMPORTED_MODULE_2__);\n});\n\n//# sourceURL=webpack:///./src/containers/Charts/reactChart2/components/mix/mix.js?");

/***/ })

}]);