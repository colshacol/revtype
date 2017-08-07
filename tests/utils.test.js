import test from 'ava';
import * as utils from '../src/utils';

const fakeFn = () => { };

// const log = console.log;
// global.console.log = (...args) => {
//   log(...args);
//   return [...args];
// }

test.serial('primitiveMatch()', (t) => {
  const { primitiveMatch } = utils;
  const type0 = typeof 'Testing';
  const type1 = typeof 1290874;
  const type2 = typeof fakeFn;
  const type3 = typeof true;
  const type4 = typeof [0, 1, 2];
  const type5 = typeof { a: true };
  const type6 = typeof (new Map());
  const type7 = typeof (new Set());

  t.is(primitiveMatch(type0), 'string');
  t.is(primitiveMatch(type1), 'number');
  t.is(primitiveMatch(type2), 'function');
  t.is(primitiveMatch(type3), 'boolean');

  t.is(primitiveMatch(type4), false);
  t.is(primitiveMatch(type5), false);
  t.is(primitiveMatch(type6), false);
  t.is(primitiveMatch(type7), false);
});

test.serial('handleArray()', (t) => {
  const { handleArray } = utils;
  const array = [0, true, 'hey', { a: false }];
  t.deepEqual(handleArray(array), [
    'number',
    'boolean',
    'string',
    { 'a': 'boolean' }
  ]);

});

test.serial('handleObject()', (t) => {
  const { handleObject } = utils;
  const object = {
    a: true,
    b: 2345,
    c: 'hey',
    d: new Map(),
    e: new Set(),
    f: {
      g: true,
      h: {
        i: 'ello',
        j: [0, 1, true, 'foo'],
        k: {
          l(x, y) { },
          m: {
            n() { }
          }
        }
      }
    }
  }

  t.deepEqual(handleObject(object), {
    a: 'boolean',
    b: 'number',
    c: 'string',
    d: {},
    e: {},
    f: {
      g: 'boolean',
      h: {
        i: 'string',
        j: [
          'number',
          'number',
          'boolean',
          'string'
        ],
        k: {
          l: 'function(...2)',
          m: {
            n: 'function(...0)'
          }
        }
      }
    }
  });
})
