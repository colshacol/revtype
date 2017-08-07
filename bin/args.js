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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// TODO: Support non-arrow function.
exports.default = function (target, name, descriptor) {
  return {
    value: function value() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log('{ @revtype.args } ' + target.constructor.name + '.' + name, (0, _check2.default)(args));
      return descriptor.initializer.apply(this).apply(undefined, _toConsumableArray(args));
    }
  };
};