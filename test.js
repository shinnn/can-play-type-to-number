'use strict';

var assert = require('assert');

var canPlayTypeToNumber = require('require-main')();

describe('canPlayTypeToNumber()', () => {
  it('should return 2 when the string is "probably".', () => {
    assert.strictEqual(canPlayTypeToNumber('probably'), 2);
  });
  it('should return 1 when the string is "maybe".', () => {
    assert.strictEqual(canPlayTypeToNumber('maybe'), 1);
  });
  it('should return 0 when the string is "".', () => {
    assert.strictEqual(canPlayTypeToNumber(''), 0);
  });
  it('should throw an error when the argument is other strings.', () => {
    assert.throws(canPlayTypeToNumber.bind(null, 'possibly'));
  });
  it('should throw an error when the argument is not a strings.', () => {
    assert.throws(canPlayTypeToNumber.bind(null, 1), TypeError);
  });
});
