'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _check = require('./check');

var _check2 = _interopRequireDefault(_check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (comp) {
  return function (props) {
    console.log('{ @revtype.props } ' + comp.name, (0, _check2.default)(props));
    return new comp(props);
  };
};