(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/components/Admin/Requests.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Admin/Requests.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var style = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    card: {
      padding: theme.spacing(4),
      paddingTop: 0
    },
    cardTitle: {
      padding: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center'
    },
    center: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
});

var Requests = function Requests() {
  var classes = style();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      DDroom = _useState2[0],
      setDDRoom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date().toISOString().split('T')[0]),
      _useState4 = _slicedToArray(_useState3, 2),
      startDate = _useState4[0],
      setStartDate = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date().toISOString().split('T')[0]),
      _useState6 = _slicedToArray(_useState5, 2),
      endDate = _useState6[0],
      setEndDate = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("All"),
      _useState8 = _slicedToArray(_useState7, 2),
      room = _useState8[0],
      setRoom = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Approved"),
      _useState10 = _slicedToArray(_useState9, 2),
      type = _useState10[0],
      setType = _useState10[1];

  var DropdownData = function DropdownData() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/RequestsDropdown').then(function (res) {
      setDDRoom(res.data.Rooms);
    })["catch"](function (err) {
      alert(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    DropdownData();
  }, []);
  var columns = [{
    name: 'lastName',
    selector: 'lastName',
    sortable: true
  }, {
    name: 'firstName',
    selector: 'firstName',
    sortable: true
  }, {
    name: 'age',
    selector: 'age',
    sortable: true
  } // {
  //    name: 'Action',
  //    minWidth: '250px',
  //    cell: row => (
  //       <div>
  //          <Button variant="contained" size="small" color="primary" onClick={() => ViewEdit(`${row.SQNC}`)}>View / Edit</Button>
  //          <Button
  //             variant="contained"
  //             size="small"
  //             style={{
  //                backgroundColor: colors.red[700],
  //                color: 'white',
  //                marginLeft: 5
  //             }}
  //          >
  //             Delete
  //          </Button>
  //       </div>
  //    )
  // },
  ];
  var rows = [{
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35
  }, {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42
  }, {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45
  }, {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 16
  }, {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: 11
  }, {
    id: 6,
    lastName: 'Melisandre',
    firstName: 11,
    age: 150
  }, {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44
  }, {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36
  }, {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65
  }, {
    id: 11,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35
  }, {
    id: 12,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42
  }, {
    id: 13,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45
  }, {
    id: 14,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 16
  }, {
    id: 15,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: 11
  }, {
    id: 16,
    lastName: 'Melisandre',
    firstName: 11,
    age: 150
  }, {
    id: 17,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44
  }, {
    id: 18,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36
  }, {
    id: 19,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.cardTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Requests")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    justify: "center",
    alignItems: "center",
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xl: 2,
    lg: 3,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    variant: "outlined",
    type: "date",
    label: "Start Date",
    value: startDate,
    onInput: function onInput(event) {
      return setStartDate(event.target.value);
    },
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xl: 2,
    lg: 3,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    variant: "outlined",
    type: "date",
    label: "End Date",
    value: endDate,
    onInput: function onInput(event) {
      return setEndDate(event.target.value);
    },
    min: startDate,
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xl: 2,
    lg: 3,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    variant: "outlined",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
    id: "RoomLabel"
  }, "Room"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    labelId: "RoomLabel",
    id: "Type",
    value: room,
    onChange: function onChange(event) {
      return setRoom(event.target.value);
    },
    label: "Room"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "All"
  }, "All"), DDroom.map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: data.id,
      value: data.roomName
    }, data.roomName);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xl: 2,
    lg: 3,
    md: 6,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    variant: "outlined",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
    id: "TypeLabel"
  }, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    labelId: "TypeLabel",
    id: "Type",
    value: type,
    onChange: function onChange(event) {
      return setType(event.target.value);
    },
    label: "Type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Approved"
  }, "Approved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: "Disapproved"
  }, "Disapproved"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
    theme: "dark",
    columns: columns,
    data: rows,
    pagination: true,
    paginationRowsPerPageOptions: [10, 25, 50, 100],
    responsive: true
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Requests);

/***/ })

}]);