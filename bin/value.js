'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (value) {
  var typeOfValue = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  var isPrimitive = utils.primitiveMatch(typeOfValue);

  if (isPrimitive) {
    var type = isPrimitive[0];
    if (type === 'function') {
      return type + '(...' + value.length + ')';
    }
    return isPrimitive[0];
  } else if (value === null) {
    return "null";
  } else if (value === undefined) {
    return "undefined";
  }

  if (Array.isArray(value)) {
    return utils.handleArray(value);
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object") {
    return utils.handleObject(value);
  }
};