'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _flowRuntime2.default.annotate(function (value) {
  var _valueType = _flowRuntime2.default.any();

  _flowRuntime2.default.param('value', _valueType).assert(value);

  var isPrimitive = _flowRuntime2.default.union(_flowRuntime2.default.boolean(), _flowRuntime2.default.string(), _flowRuntime2.default.null()).assert(utils.primitiveMatch(typeof value === 'undefined' ? 'undefined' : _typeof(value)));
  var type = isPrimitive;

  // if (isPrimitive) {
  //   if (type === 'function') {
  //     return `${type}(...${value.length})`
  //   }
  //   return isPrimitive;
  // } else if (value === null) {
  //   return "null";
  // } else if (value === undefined) {
  //   return "undefined";
  // }

  return isPrimitive === 'function' && type + '(...' + value.length + ')' || isPrimitive && isPrimitive || value === null && 'null' || value === undefined && 'undefined' || Array.isArray(value) && utils.handleArray(value) || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && utils.handleObject(value);
}, _flowRuntime2.default.function(_flowRuntime2.default.param('value', _flowRuntime2.default.any())));