(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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

/***/ "./resources/img/A1.jpg":
/*!******************************!*\
  !*** ./resources/img/A1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/A1.jpg?2a78a969924bec31bc31644ae1841e1e";

/***/ }),

/***/ "./resources/img/A2.jpg":
/*!******************************!*\
  !*** ./resources/img/A2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/A2.jpg?8c06c37035bf5ecce8c1aa65b7f6d36e";

/***/ }),

/***/ "./resources/img/A3.jpg":
/*!******************************!*\
  !*** ./resources/img/A3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/A3.jpg?f256c968825ad4d327725f2decb20aa0";

/***/ }),

/***/ "./resources/img/B1.jpg":
/*!******************************!*\
  !*** ./resources/img/B1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/B1.jpg?819fe88a259fd4cc8c5028fa46bffd8a";

/***/ }),

/***/ "./resources/img/B2.jpg":
/*!******************************!*\
  !*** ./resources/img/B2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/B2.jpg?10ccddea02762927a3bdb26b30f75ed8";

/***/ }),

/***/ "./resources/img/B3.jpg":
/*!******************************!*\
  !*** ./resources/img/B3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/B3.jpg?ddfb96f9d1869ddbeec41d42e161dd5b";

/***/ }),

/***/ "./resources/img/B4.jpg":
/*!******************************!*\
  !*** ./resources/img/B4.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/B4.jpg?4dc5d8469021a6f034d104348197460d";

/***/ }),

/***/ "./resources/img/C1.jpg":
/*!******************************!*\
  !*** ./resources/img/C1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/C1.jpg?dfa6f6bb3fb97cfa36ec86bde83ef1db";

/***/ }),

/***/ "./resources/img/C2.jpg":
/*!******************************!*\
  !*** ./resources/img/C2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/C2.jpg?6369d46e866a4586bbb1caed98e91308";

/***/ }),

/***/ "./resources/img/C3.jpg":
/*!******************************!*\
  !*** ./resources/img/C3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/C3.jpg?2210c11478d01efed32e004344629f3d";

/***/ }),

/***/ "./resources/img/C4.jpg":
/*!******************************!*\
  !*** ./resources/img/C4.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/C4.jpg?e2d3aa9d2ccb6ac99b7477e6933bde6c";

/***/ }),

/***/ "./resources/img/bg.jpg":
/*!******************************!*\
  !*** ./resources/img/bg.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bg.jpg?18adcd1da075d829d08194d6ba7ff2a9";

/***/ }),

/***/ "./resources/js/components/LandingPage sync recursive ^.*$":
/*!*******************************************************!*\
  !*** ./resources/js/components/LandingPage sync ^.*$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./About": "./resources/js/components/LandingPage/About.js",
	"./About.js": "./resources/js/components/LandingPage/About.js",
	"./Contact": "./resources/js/components/LandingPage/Contact.js",
	"./Contact.js": "./resources/js/components/LandingPage/Contact.js",
	"./FilmShowing": "./resources/js/components/LandingPage/FilmShowing.js",
	"./FilmShowing.js": "./resources/js/components/LandingPage/FilmShowing.js",
	"./Gallery": "./resources/js/components/LandingPage/Gallery.js",
	"./Gallery.js": "./resources/js/components/LandingPage/Gallery.js",
	"./LandingPage": "./resources/js/components/LandingPage/LandingPage.js",
	"./LandingPage.js": "./resources/js/components/LandingPage/LandingPage.js",
	"./Main": "./resources/js/components/LandingPage/Main.js",
	"./Main.js": "./resources/js/components/LandingPage/Main.js",
	"./Schedules": "./resources/js/components/LandingPage/Schedules.js",
	"./Schedules.js": "./resources/js/components/LandingPage/Schedules.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/components/LandingPage sync recursive ^.*$";

/***/ }),

/***/ "./resources/js/components/LandingPage/About.js":
/*!******************************************************!*\
  !*** ./resources/js/components/LandingPage/About.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var style = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    center: {
      display: 'flex',
      minHeight: '20vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    overlay: {
      position: 'absolute',
      top: 64,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'overlay'
    }
  };
});

var About = function About() {
  var classes = style();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.overlay
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: 100,
      color: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.center
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, "Multimedia Office"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "VISION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "To build a distinct brand known specifically for its innovation and delivering exceptional audio visual services for the administration, faculty and students."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "MISSION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Provides the highest level of service for administration, faculty and students to be more innovative and equipped thru the used of digital technologies, advancement and comprehensive source of materials."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "GOALS AND OBJECTIVES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "* To provide the New Era University academic community with audio visual resources and services.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "* To train users on the effective utilization of audio visual resources.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "* To assist academic departments and offices in the production of audio visual materials for Multimedia Room use.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "* To conduct orientation session for faculty, staff and students on the use and operation of the different types of audio visual equipment available in the Multimedia Office.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "* To continuosly acquire and assist in the production of materials responsive to the needs of New Era University faculty, administration, staff and students."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./resources/js/components/LandingPage/Contact.js":
/*!********************************************************!*\
  !*** ./resources/js/components/LandingPage/Contact.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var style = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    center: {
      display: 'flex',
      minHeight: '70vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  };
});

var Contact = function Contact() {
  var classes = style();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: 100,
      color: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.center
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, "Contact Us:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Email: audiovisual@neu.edu.ph"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Tel: 981-4221"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./resources/js/components/LandingPage/FilmShowing.js":
/*!************************************************************!*\
  !*** ./resources/js/components/LandingPage/FilmShowing.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");



var style = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    center: {
      display: 'flex',
      minHeight: '70vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  };
});

var FilmShowing = function FilmShowing() {
  var classes = style();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: 100,
      color: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.center
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, "Coming Soon ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["BuildRounded"], {
    fontSize: "large"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (FilmShowing);

/***/ }),

/***/ "./resources/js/components/LandingPage/Gallery.js":
/*!********************************************************!*\
  !*** ./resources/js/components/LandingPage/Gallery.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Gallery = function Gallery(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      openDialog = _useState2[0],
      setOpenDialog = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("../../../img/A1.jpg"),
      _useState4 = _slicedToArray(_useState3, 2),
      imgPath = _useState4[0],
      setImgPath = _useState4[1];

  var columnLength = function columnLength() {
    if (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["isWidthUp"])('lg', props.width)) {
      return 3;
    }

    if (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["isWidthUp"])('md', props.width)) {
      return 3;
    }

    if (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["isWidthUp"])('sm', props.width)) {
      return 2;
    }

    if (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["isWidthUp"])('xs', props.width)) {
      return 1;
    }
  };

  var handleDialog = function handleDialog(path) {
    setOpenDialog(true);
    setImgPath("'".concat(path, "'"));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'overlay'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: openDialog,
    keepMounted: true,
    onClose: function onClose() {
      return setOpenDialog(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__("./resources/js/components/LandingPage sync recursive ^.*$")("".concat(imgPath))
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridList"], {
    cellHeight: 250,
    cols: columnLength(),
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1,
    onClick: function onClick() {
      return handleDialog('../../../img/A1.jpg');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/A1.jpg */ "./resources/img/A1.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room A"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/A2.jpg */ "./resources/img/A2.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room A"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/A3.jpg */ "./resources/img/A3.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room A"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/B1.jpg */ "./resources/img/B1.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room B"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/B2.jpg */ "./resources/img/B2.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room B"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/B3.jpg */ "./resources/img/B3.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room B"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/B4.jpg */ "./resources/img/B4.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room B"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/C1.jpg */ "./resources/img/C1.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room C"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/C2.jpg */ "./resources/img/C2.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room C"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/C3.jpg */ "./resources/img/C3.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room C"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../../../img/C4.jpg */ "./resources/img/C4.jpg")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTileBar"], {
    title: "Room C"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withWidth"])()(Gallery));

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

/***/ }),

/***/ "./resources/js/components/LandingPage/Main.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/LandingPage/Main.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    drawerPaper: {
      width: 200
    }
  };
});

var Main = function Main(_ref) {
  var children = _ref.children;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      mobileOpen = _useState2[0],
      setMobileOpen = _useState2[1];

  var handleOpenDrawer = function handleOpenDrawer() {
    setMobileOpen(!mobileOpen);
  };

  var MenusMobile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/Gallery",
    onClick: function onClick() {
      return setMobileOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "Gallery"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/FilmShowing",
    onClick: function onClick() {
      return setMobileOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "Film Showing"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/Contact",
    onClick: function onClick() {
      return setMobileOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "Contact"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/About",
    onClick: function onClick() {
      return setMobileOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "About"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/Schedules",
    onClick: function onClick() {
      return setMobileOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "Schedules"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Login",
    onClick: function onClick() {
      return setMobileOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "Login"
  }))));
  var Menus = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/Gallery"
  }, "Gallery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/FilmShowing"
  }, "Film Showing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/Contact"
  }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/About"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      flexGrow: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Home/Schedules"
  }, "Schedules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/Login"
  }, "Login"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LandingPageBG"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "fixed",
    color: "transparent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    style: {
      color: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    style: {
      marginRight: 30,
      color: 'white',
      textDecoration: 'none'
    },
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
    to: "/"
  }, "NEU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
    smDown: true
  }, Menus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
    mdUp: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["SwipeableDrawer"], {
    open: mobileOpen,
    onClose: handleOpenDrawer,
    onOpen: handleOpenDrawer,
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "right"
  }, MenusMobile)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
    mdUp: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      flexGrow: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: handleOpenDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["MenuRounded"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./resources/js/components/LandingPage/Schedules.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/LandingPage/Schedules.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var style = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    center: {
      display: 'flex',
      minHeight: '70vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  };
});

var Schedules = function Schedules() {
  var classes = style();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: 100,
      color: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.center
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, "Schedules"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedules);

/***/ })

}]);