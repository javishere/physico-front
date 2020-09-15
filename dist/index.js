"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _PatientsList = _interopRequireDefault(require("./components/PatientsList"));

var _patients = _interopRequireDefault(require("./connections/patients"));

var _fs = _interopRequireDefault(require("fs"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_App.default, null)), document.getElementById('root'));