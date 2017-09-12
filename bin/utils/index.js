'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primitiveMatch = exports.handleObject = exports.handleArray = undefined;

var _handleArray2 = require('./handleArray');

var _handleArray3 = _interopRequireDefault(_handleArray2);

var _handleObject2 = require('./handleObject');

var _handleObject3 = _interopRequireDefault(_handleObject2);

var _primitiveMatch2 = require('./primitiveMatch');

var _primitiveMatch3 = _interopRequireDefault(_primitiveMatch2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.handleArray = _handleArray3.default;
exports.handleObject = _handleObject3.default;
exports.primitiveMatch = _primitiveMatch3.default;