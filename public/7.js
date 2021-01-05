(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/css/LandingPage.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/css/LandingPage.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n    font-family: Shelly;\r\n    src: url(" + escape(__webpack_require__(/*! ../fonts/Shelley.ttf */ "./resources/fonts/Shelley.ttf")) + ");\r\n}\r\n\r\n/* body {\r\n    background: url(\"../img/bg.jpg\");\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    margin: 0;\r\n    padding: 0;\r\n} */\r\n\r\n/* .LandingPageMainText {\r\n    background: url(\"../img/bg.jpg\");\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n    color: white;\r\n    padding: 300px 0px;\r\n    text-align: center;\r\n    white-space: pre-line;\r\n}\r\n\r\n.LandingPageMainText small {\r\n    color: white;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-family: Nunito;\r\n    font-size: 20px;\r\n    margin-top: 0;\r\n    padding: 0;\r\n}\r\n\r\n.LandingPageSubText {\r\n    color: white;\r\n    width: 100%;\r\n    padding: 300px 0px;\r\n    text-align: center;\r\n} */\r\n\r\n.BGImage {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../img/bg.jpg */ "./resources/img/bg.jpg")) + ");\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    /* Preserve aspet ratio */\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\n.header {\r\n    color: white;\r\n    padding: 40vh 0px;\r\n    text-align: center;\r\n    white-space: pre-line;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./resources/css/LandingPage.css":
/*!***************************************!*\
  !*** ./resources/css/LandingPage.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/postcss-loader/src??ref--6-2!./LandingPage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/css/LandingPage.css");

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

/***/ "./resources/fonts/Shelley.ttf":
/*!*************************************!*\
  !*** ./resources/fonts/Shelley.ttf ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Shelley.ttf?bf593a45ff3ac06d410aea502a7e58ce";

/***/ }),

/***/ "./resources/img/bg.jpg":
/*!******************************!*\
  !*** ./resources/img/bg.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bg.jpg?18adcd1da075d829d08194d6ba7ff2a9";

/***/ }),

/***/ "./resources/js/components/LandingPage/LandingPage.js":
/*!************************************************************!*\
  !*** ./resources/js/components/LandingPage/LandingPage.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_LandingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css/LandingPage.css */ "./resources/css/LandingPage.css");
/* harmony import */ var _css_LandingPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_LandingPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Alert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

var LandingPage = function LandingPage() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      alert = _React$useState2[0],
      setAlert = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "BGImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'Shelly',
      fontSize: 80,
      padding: 0,
      margin: 0
    }
  }, "New Era University"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Media Learning Center Reservation System")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
    open: alert,
    onClose: function onClose() {
      return setAlert(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, {
    severity: "success",
    onClose: function onClose() {
      return setAlert(false);
    }
  }, navigator.appVersion)));
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ })

}]);