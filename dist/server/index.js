"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _express = _interopRequireDefault(require("express"));

var _PatientsList = _interopRequireDefault(require("../components/PatientsList"));

var _patients = _interopRequireDefault(require("../connections/patients"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();

var index = _fs.default.readFileSync(__dirname + '/../../public/index.html', 'utf8');

app.use('/static', _express.default.static(__dirname + '/../../public'));
app.get('**', function (req, res) {
  (0, _patients.default)().then(function (patients) {
    var html = (0, _server.renderToString)(
    /*#__PURE__*/
    //<Router>
    _react.default.createElement(_PatientsList.default, {
      patients: patients
    }) //</Router>
    );
    var finalHtml = index.replace('@@APP', html); //res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');

    res.send(finalHtml);
  });
});
app.listen(5000, function () {
  console.log("listening 5000");
});