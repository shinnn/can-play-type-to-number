'use strong';

const test = require('tape');
const requireBowerFiles = require('require-bower-files');

function runTest(description, canPlayTypeToNumber) {
  test(description, t => {
    t.plan(5);

    t.strictEqual(
      canPlayTypeToNumber('probably'),
      2,
      'should return 2 when the string is "probably".'
    );

    t.strictEqual(
      canPlayTypeToNumber('maybe'),
      1,
      'should return 1 when the string is "maybe".'
    );

    t.strictEqual(
      canPlayTypeToNumber(''),
      0,
      'should return 0 when the string is "".'
    );

    t.throws(
      () => canPlayTypeToNumber('possibly'),
      /Error.*Expected a string.*probably.*maybe/,
      'should throw an error when the argument is not a valid string.'
    );

    t.throws(
      () => canPlayTypeToNumber(1),
      /TypeError.*1 is not a string.*probably.*maybe/,
      'should throw a type error when the argument is not a string.'
    );
  });
}

runTest('require(\'can-play-type-number\')', require('.'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.canPlayTypeToNumber', global.window.canPlayTypeToNumber);
