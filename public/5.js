(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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



var Gallery = function Gallery(props) {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'overlay'
    }
  }, console.log(), console.log(props.width), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridList"], {
    cellHeight: 250,
    cols: columnLength(),
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["GridListTile"], {
    cols: 1
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

/***/ })

}]);