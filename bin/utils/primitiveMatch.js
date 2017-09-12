"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type) {
  var match = type.match(/(string|number|boolean|function)/);
  return match ? match[0] : false;
};