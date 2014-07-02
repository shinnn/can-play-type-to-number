/*!
 * can-play-type-to-number.js | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/can-play-type-to-number
*/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.canPlayTypeToNumber = factory();
  }
}(this, function(require, exports, module) {

'use strict';

function canPlayTypeToNumber(playability) {
  if (playability === 'probably') {
    return 2;
  } else if (playability === 'maybe') {
    return 1;
  } else if (playability === '') {
    return 0;
  } else if (typeof playability === 'string') {
    throw new Error('The string should be "probably", "maybe" or "".');
  }
  throw new TypeError(playability + 'is not a string.');
}

return canPlayTypeToNumber;

}));