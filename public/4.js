(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/components/Admin/About.js":
/*!************************************************!*\
  !*** ./resources/js/components/Admin/About.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./resources/js/components/Admin/SideBar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





var About = function About() {
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/Login', {
    Username: "charlie",
    Password: "charlie"
  }).then(function (res) {
    console.log(res.data);
    console.log("done");
  })["catch"](function (error) {
    console.log(error);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About");
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

}]);