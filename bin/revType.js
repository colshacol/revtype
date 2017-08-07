"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var primitiveMatch = function primitiveMatch(type) {
  return type.match(/(string|number|boolean)/g);
};

var revTypeArray = function revTypeArray(array) {
  return array.map(function (value) {
    return revType(value);
  });
};

var revTypeObject = function revTypeObject(object) {
  return Object.entries(object).reduce(function (target, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    target[key] = revType(value);
    return target;
  }, {});
};

var revType = function revType(value) {
  var typeOfValue = typeof value === "undefined" ? "undefined" : _typeof(value);
  var isPrimitive = typeOfValue.match(/(string|number|boolean|function)/g);

  // Is of non-dynamic/flat type.
  if (isPrimitive) {
    return isPrimitive[0];
  } else if (value === null) {
    return "null";
  } else if (value === undefined) {
    return "undefined";
  }

  // Is of 'object' type.
  if (Array.isArray(value)) {
    return revTypeArray(value);
  }

  if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
    return revTypeObject(value);
  }
};

var revTypeArgs = exports.revTypeArgs = function revTypeArgs(target, name, descriptor) {
  return {
    value: function value() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log("{ @revTypeArgs } " + target.constructor.name + "." + name, revType(args));
      return descriptor.initializer.apply(this).apply(undefined, _toConsumableArray(args));
    }
  };
};

var revTypeProps = exports.revTypeProps = function revTypeProps(comp) {
  return function (props) {
    console.log("{ @revTypeProps } " + comp.name, revType(props));
    return new comp(props);
  };
};

exports.default = {
  props: revTypeProps,
  args: revTypeArgs,
  check: revType
};