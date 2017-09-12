'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var object = {
	stuff: {},
	things: [],
	nil: null,
	name: 'tommy',
	male: false,
	age: 29,
	mom: {
		name: 'mommy',
		male: false,
		age: 28,
		jobs: ['cooking', 'cleaning', 'beasting', {
			title: 'boss',
			location: 'home',
			salary: 0
		}]
	}
};

var revved = _2.default.parse(object);
console.log(JSON.stringify(revved));