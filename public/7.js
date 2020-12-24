(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/components/Login.js":
/*!******************************************!*\
  !*** ./resources/js/components/Login.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Login = function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      usernameError = _useState2[0],
      setUsernameError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      usernameHelperText = _useState4[0],
      setUsernameHelperText = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      passwordError = _useState6[0],
      setPasswordError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      passwordHelperText = _useState8[0],
      setPasswordHelperText = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loginAlert = _useState12[0],
      setLoginAlert = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      AlertMessage = _useState14[0],
      setAlertMessage = _useState14[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Enter') {
      Login();
    }
  };

  var ShowPassChange = function ShowPassChange() {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()("#ShowPass").prop("checked")) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()("#Password").prop("type", "text");
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()("#Password").prop("type", "password");
    }
  };

  var AlertTag = function AlertTag() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
      variant: "filled",
      severity: "error"
    }, AlertMessage);
  };

  var Validator = function Validator(type, id) {
    if (type === "text") {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()("#".concat(id)).val().trim() === "") {
        if (id === "Username") {
          setUsernameError(true);
          setUsernameHelperText("Required");
        } else if (id === "Password") {
          setPasswordError(true);
          setPasswordHelperText("Required");
        }
      } else {
        if (id === "Username") {
          setUsernameError(false);
          setUsernameHelperText("");
        } else if (id === "Password") {
          setPasswordError(false);
          setPasswordHelperText("");
        }
      }
    }
  };

  var Login = function Login() {
    var Username = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#Username").val();
    var Password = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#Password").val();
    var isComplete = true;

    if (Username.trim() === "") {
      setUsernameError(true);
      setUsernameHelperText("Required");
      isComplete = false;
    }

    if (Password.trim() === "") {
      setPasswordError(true);
      setPasswordHelperText("Required");
      isComplete = false;
    }

    if (isComplete) {
      setLoading(true);
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('api/Login', {
        "Username": Username,
        "Password": Password
      }).then(function (res) {
        if (res.data[0].Message === "1") {
          history.push('/Admin/Dashboard');
        } else {
          setAlertMessage(res.data[0].Message);
          setLoginAlert(true);
          setLoading(false);
        }
      })["catch"](function (err) {
        alert(err);
        setLoading(false);
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: '200px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "row",
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xl: 3,
    lg: 4,
    md: 6,
    sm: 11,
    xs: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    title: "Login",
    style: {
      textAlign: 'center'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 12,
    style: {
      marginBottom: '15px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    error: usernameError,
    label: "Username",
    id: "Username",
    variant: "outlined",
    fullWidth: true,
    onInput: function onInput() {
      return Validator('text', 'Username');
    },
    helperText: usernameHelperText,
    autoComplete: "off",
    spellCheck: "false",
    onKeyDown: handleKeyDown
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 12,
    style: {
      marginBottom: '15px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    error: passwordError,
    type: "password",
    id: "Password",
    label: "Password",
    variant: "outlined",
    fullWidth: true,
    onInput: function onInput() {
      return Validator('text', 'Password');
    },
    helperText: passwordHelperText,
    autoComplete: "off",
    spellCheck: "false",
    onKeyDown: handleKeyDown
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 12,
    style: {
      marginBottom: '15px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      label: "Show password",
      id: "ShowPass",
      onChange: ShowPassChange
    }),
    label: "Show password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 12,
    style: {
      marginBottom: '15px'
    }
  }, loginAlert ? AlertTag() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    lg: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: Login
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    size: 24,
    color: "inherit"
  }) : 'Login'))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);