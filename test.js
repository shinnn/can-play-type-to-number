'use strict';

var test = require('tape');

var canPlayTypeToNumber = require('require-main')();

test('canPlayTypeToNumber()', function(t) {
  t.plan(5);

  t.strictEqual(
    canPlayTypeToNumber('probably'), 2,
    'should return 2 when the string is "probably".'
  );

  t.strictEqual(
    canPlayTypeToNumber('maybe'), 1,
    'should return 1 when the string is "maybe".'
  );

  t.strictEqual(
    canPlayTypeToNumber(''), 0,
    'should return 0 when the string is "".'
  );

  t.throws(
    canPlayTypeToNumber.bind(null, 'possibly'),
    'should throw an error when the argument is other strings.'
  );

  t.throws(
    canPlayTypeToNumber.bind(null, 1), /TypeError/,
    'should throw an error when the argument is not a strings.'
  );
});
