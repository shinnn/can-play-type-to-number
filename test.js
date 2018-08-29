'use strict';

const canPlayTypeToNumber = require('.');
const test = require('tape');

test('canPlayTypeToNumber()', t => {
	t.equal(
		canPlayTypeToNumber('probably'),
		2,
		'should return 2 when the string is "probably".'
	);

	t.equal(
		canPlayTypeToNumber('maybe'),
		1,
		'should return 1 when the string is "maybe".'
	);

	t.equal(
		canPlayTypeToNumber(''),
		0,
		'should return 0 when the string is "".'
	);

	t.throws(
		() => canPlayTypeToNumber('possibly'),
		/Error.*Expected a string.*probably.*maybe/u,
		'should throw an error when the argument is not a valid string.'
	);

	t.throws(
		() => canPlayTypeToNumber(1),
		/TypeError.*1 is not a string.*probably.*maybe/u,
		'should throw a type error when the argument is not a string.'
	);

	t.end();
});
