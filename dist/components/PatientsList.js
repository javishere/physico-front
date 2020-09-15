"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PatientsList(props) {
  var patients = props.patients.map(function (patient, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: patient._id
    }, patient.name);
  });
  return /*#__PURE__*/_react.default.createElement("ul", null, patients);
}

var _default = PatientsList;
exports.default = _default;