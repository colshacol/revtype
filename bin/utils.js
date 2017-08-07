'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleObject = exports.handleArray = exports.primitiveMatch = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _check = require('./check');

var _check2 = _interopRequireDefault(_check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var primitiveMatch = exports.primitiveMatch = function primitiveMatch(type) {
  return type.match(/(string|number|boolean|function)/g);
};

var handleArray = exports.handleArray = function handleArray(array) {
  return array.map(function (value) {
    return (0, _check2.default)(value);
  });
};

var handleObject = exports.handleObject = function handleObject(object) {
  return Object.entries(object).reduce(function (target, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    target[key] = (0, _check2.default)(value);
    return target;
  }, {});
};