"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

require("./App.css");

var _Routes = _interopRequireDefault(require("./Routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    fluid: true,
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    bg: "dark",
    variant: "dark",
    collapseOnSelect: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, {
    href: "/"
  }, "Physico"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
    className: "justify-content-end"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "/signup"
  }, "Signup"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "/login",
    eventKey: 2
  }, "Login")))), /*#__PURE__*/_react.default.createElement(_Routes.default, null)));
}

var _default = App;
exports.default = _default;