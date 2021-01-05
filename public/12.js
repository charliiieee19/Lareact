(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/components/Admin/UserList.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Admin/UserList.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var UserList = function UserList() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10),
      _useState6 = _slicedToArray(_useState5, 2),
      countPerPage = _useState6[0],
      setCountPerPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState8 = _slicedToArray(_useState7, 2),
      tableLoading = _useState8[0],
      setTableLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      userSearch = _useState10[0],
      setUserSearch = _useState10[1];

  var Loading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["LinearProgress"], {
    color: "secondary",
    style: {
      width: '100%'
    }
  });
  var columns = [{
    name: 'StudentID',
    selector: 'studNo',
    minWidth: '150px'
  }, {
    name: 'LastName',
    selector: 'lname',
    minWidth: '150px'
  }, {
    name: 'FirstName',
    selector: 'fname',
    minWidth: '200px'
  }, {
    name: 'MiddleName',
    selector: 'mname'
  }, {
    name: 'Action',
    minWidth: '250px',
    cell: function cell(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "contained",
        size: "small",
        color: "primary",
        onClick: function onClick() {
          return ViewEdit("".concat(row.SQNC));
        }
      }, "View / Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        variant: "contained",
        size: "small",
        style: {
          backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["colors"].red[700],
          color: 'white',
          marginLeft: 5
        }
      }, "Delete"));
    }
  }];

  var ViewEdit = function ViewEdit(id) {
    history.push("UserViewEdit/".concat(id));
  };

  var GetData = function GetData() {
    setTableLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/UserList2?page=".concat(page, "&perpage=").concat(countPerPage, "&key=").concat(userSearch)).then(function (res) {
      setUsers(res.data);
      setTableLoading(false);
    })["catch"](function (err) {
      alert(err);
    });
  };

  var handleSearch = function handleSearch(event) {
    setUserSearch(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    GetData();
  }, [page, countPerPage, userSearch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    variant: "outlined",
    label: "Search",
    type: "search",
    size: "small",
    onInput: function onInput(event) {
      return handleSearch(event);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
    theme: "dark",
    title: "User Lists",
    columns: columns,
    data: users.data,
    pagination: true,
    paginationServer: true,
    paginationTotalRows: users.totalRows,
    paginationPerPage: countPerPage,
    onChangeRowsPerPage: function onChangeRowsPerPage(pagerow) {
      return setCountPerPage(pagerow);
    },
    paginationRowsPerPageOptions: [10, 25, 50, 100],
    onChangePage: function onChangePage(page) {
      return setPage(page);
    },
    progressPending: tableLoading,
    progressComponent: Loading,
    responsive: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ })

}]);