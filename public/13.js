(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/js/components/Admin/UserViewEdit.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Admin/UserViewEdit.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var UserViewEdit = function UserViewEdit() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
      id = _useParams.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      DDCourses = _useState4[0],
      setDDCourses = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      DDColleges = _useState6[0],
      setDDColleges = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      StudentID = _useState8[0],
      setStudentID = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      FirstName = _useState10[0],
      setFirstName = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      MiddleName = _useState12[0],
      setMiddleName = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      LastName = _useState14[0],
      setLastName = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState16 = _slicedToArray(_useState15, 2),
      Course = _useState16[0],
      setCourse = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState18 = _slicedToArray(_useState17, 2),
      College = _useState18[0],
      setCollege = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState20 = _slicedToArray(_useState19, 2),
      Guardian = _useState20[0],
      setGuardian = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState22 = _slicedToArray(_useState21, 2),
      ContactNo = _useState22[0],
      setContactNo = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState24 = _slicedToArray(_useState23, 2),
      Address = _useState24[0],
      setAddress = _useState24[1];

  var DropdownData = function DropdownData() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/UserInfoDropdown').then(function (res) {
      setDDCourses(res.data.Courses);
      setDDColleges(res.data.Colleges);
      GetData();
    })["catch"](function (error) {
      alert(error);
    });
  };

  var GetData = function GetData() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/GetUserInfo', {
      "SQNC": id
    }).then(function (res) {
      console.log(res.data);
      setStudentID(res.data.data[0].studNo);
      setFirstName(res.data.data[0].fname);
      setMiddleName(res.data.data[0].mname);
      setLastName(res.data.data[0].lname);
      setCourse(res.data.data[0].course);
      setCollege(res.data.data[0].college);
      setGuardian(res.data.data[0].guardian);
      setContactNo(res.data.data[0].guardian_contact);
      setAddress(res.data.data[0].address);
      setIsLoaded(true);
    })["catch"](function (error) {
      alert(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    DropdownData();
  }, []);
  var Body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 12,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    label: "Student ID",
    fullWidth: true,
    value: StudentID
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 4,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    label: "FirstName",
    fullWidth: true,
    autoComplete: "off",
    spellCheck: false,
    value: FirstName,
    onInput: function onInput(event) {
      return setFirstName(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 4,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    label: "MiddleName",
    fullWidth: true,
    autoComplete: "off",
    spellCheck: false,
    value: MiddleName,
    onInput: function onInput(event) {
      return setMiddleName(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 4,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    label: "LastName",
    fullWidth: true,
    autoComplete: "off",
    spellCheck: false,
    value: LastName,
    onInput: function onInput(event) {
      return setLastName(event.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 4,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    variant: "outlined",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], {
    id: "CourseLabel"
  }, "Course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    labelId: "CourseLabel",
    fullWidth: true,
    value: Course,
    label: "Course",
    onChange: function onChange(event) {
      return setCourse(event.target.value);
    }
  }, DDCourses.map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      key: data.id,
      value: data.courseName
    }, data.courseName);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 8,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    variant: "outlined",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], {
    id: "CollegeLabel"
  }, "College"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    labelId: "CollegeLabel",
    fullWidth: true,
    value: College,
    label: "College",
    onChange: function onChange(event) {
      return setCollege(event.target.value);
    }
  }, DDColleges.map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      key: data.id,
      value: data.collegeName
    }, data.collegeName);
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    label: "Guardian",
    fullWidth: true,
    autoComplete: "off",
    spellCheck: false,
    value: Guardian,
    onInput: function onInput(event) {
      return setGuardian(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 6,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    label: "Guardian Contact",
    fullWidth: true,
    autoComplete: "off",
    spellCheck: false,
    value: ContactNo,
    onInput: function onInput(event) {
      return setContactNo(event.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    lg: 12,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    label: "Address",
    fullWidth: true,
    multiline: true,
    autoComplete: "off",
    spellCheck: false,
    value: Address,
    onInput: function onInput(event) {
      return setAddress(event.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    container: true,
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/Admin/UserList"
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    style: {
      backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].green['900'],
      color: 'white'
    }
  }, "Save Changes"))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5"
  }, "User Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], null, isLoaded ? Body : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["LinearProgress"], {
    color: "secondary"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserViewEdit);

/***/ })

}]);