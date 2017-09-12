'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _revtype = require('./revtype');

var _revtype2 = _interopRequireDefault(_revtype);

var _props = require('./props');

var _props2 = _interopRequireDefault(_props);

var _args = require('./args');

var _args2 = _interopRequireDefault(_args);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  parse: _revtype2.default,
  props: _props2.default,
  args: _args2.default
};