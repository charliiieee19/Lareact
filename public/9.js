(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/components/Admin/About.js":
/*!************************************************!*\
  !*** ./resources/js/components/Admin/About.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var About = function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loadingTable = _useState2[0],
      setLoadingTable = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      TableRows = _useState4[0],
      setTableRows = _useState4[1];

  var TableRowsPartial = [];
  var TableColumns = [{
    field: 'id',
    headerName: 'UserID',
    width: 150
  }, {
    field: 'lastname',
    headerName: 'LastName',
    width: 200
  }, {
    field: 'firstname',
    headerName: 'FirstName',
    width: 200
  }, {
    field: 'middlename',
    headerName: 'MiddleName',
    width: 150
  }, {
    field: 'Action',
    headerName: 'Action',
    width: 200,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "contained",
        color: "primary",
        size: "small",
        onClick: function onClick() {
          return ViewEdit("".concat(params.value));
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["EditRounded"], {
        fontSize: "small",
        style: {
          marginRight: 5
        }
      }), " View / Edit");
    }
  }];

  var ViewEdit = function ViewEdit(id) {
    console.log(id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function GetUserList() {
      return _GetUserList.apply(this, arguments);
    }

    function _GetUserList() {
      _GetUserList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/UserList').then(function (res) {
                  setTableRows([]);

                  for (var i = 0; i < res.data.length; i++) {
                    var TableObj = {};
                    TableObj.id = res.data[i].studNo;
                    TableObj.lastname = res.data[i].lname;
                    TableObj.firstname = res.data[i].fname;
                    TableObj.middlename = res.data[i].mname;
                    TableObj.Action = res.data[i].studNo;
                    TableRowsPartial.push(TableObj);
                  }

                  setTableRows(TableRowsPartial);
                  setLoadingTable(false);
                })["catch"](function (error) {
                  alert(error);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _GetUserList.apply(this, arguments);
    }

    GetUserList();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: '70vh',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    label: "Search",
    size: "small",
    type: "search"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_4__["DataGrid"], {
    pageSize: 10,
    rowsPerPageOptions: [10, 25, 50, 100],
    pagination: true,
    rows: TableRows,
    columns: TableColumns,
    autoHeight: true,
    disableSelectionOnClick: true,
    loading: loadingTable
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

}]);