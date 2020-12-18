(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/css/NotFound.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/css/NotFound.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n\r\n#notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.notfound {\r\n    max-width: 460px;\r\n    width: 100%;\r\n    text-align: center;\r\n    line-height: 1.4;\r\n}\r\n\r\n.notfound .notfound-404 {\r\n    position: relative;\r\n    width: 180px;\r\n    height: 180px;\r\n    margin: 0px auto 50px;\r\n}\r\n\r\n.notfound .notfound-404 > div:first-child {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background: #ffa200;\r\n    transform: rotate(45deg);\r\n    border: 5px dashed #000;\r\n    border-radius: 5px;\r\n}\r\n\r\n.notfound .notfound-404 > div:first-child:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: -5px;\r\n    right: -5px;\r\n    bottom: -5px;\r\n    top: -5px;\r\n    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.1) inset;\r\n    border-radius: 5px;\r\n}\r\n\r\n.notfound .notfound-404 h1 {\r\n    font-family: \"Cabin\", sans-serif;\r\n    color: #000;\r\n    font-weight: 700;\r\n    margin: 0;\r\n    font-size: 90px;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    left: 50%;\r\n    text-align: center;\r\n    height: 40px;\r\n    line-height: 40px;\r\n}\r\n\r\n.notfound h2 {\r\n    font-family: \"Cabin\", sans-serif;\r\n    font-size: 33px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    letter-spacing: 7px;\r\n}\r\n\r\n.notfound p {\r\n    font-family: \"Cabin\", sans-serif;\r\n    font-size: 16px;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: 400;\r\n}\r\n\r\n.notfound a {\r\n    font-family: \"Cabin\", sans-serif;\r\n    display: inline-block;\r\n    padding: 10px 25px;\r\n    background-color: #8f8f8f;\r\n    border: none;\r\n    border-radius: 40px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    transition: 0.2s all;\r\n}\r\n\r\n.notfound a:hover {\r\n    background-color: #5c5c5c;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./resources/css/NotFound.css":
/*!************************************!*\
  !*** ./resources/css/NotFound.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/postcss-loader/src??ref--6-2!./NotFound.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/css/NotFound.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/NotFound.js":
/*!*********************************************!*\
  !*** ./resources/js/components/NotFound.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_NotFound_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/NotFound.css */ "./resources/css/NotFound.css");
/* harmony import */ var _css_NotFound_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_NotFound_css__WEBPACK_IMPORTED_MODULE_2__);




var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "notfound"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notfound"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notfound-404"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The page you are looking for might have been removed had its name changed or is temporarily unavailable."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "home page"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ })

}]);