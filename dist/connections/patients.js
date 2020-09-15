"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAllPatients;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllPatients() {
  return (0, _isomorphicFetch.default)('https://c9p5u8gzw7.execute-api.eu-west-1.amazonaws.com/Stage/clinica/getAllPatients').then(function (res) {
    return res.json();
  });
}