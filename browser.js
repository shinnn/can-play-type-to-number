/*!
 * can-play-type-to-number | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/can-play-type-to-number
*/
window.canPlayTypeToNumber = function canPlayTypeToNumber(playability) {
  'use strict';
  if (playability === 'probably') {
    return 2;
  } else if (playability === 'maybe') {
    return 1;
  } else if (playability === '') {
    return 0;
  } else if (typeof playability === 'string') {
    throw new Error('Expected a string "probably", "maybe" or "" but received ' + playability + '.');
  }

  throw new TypeError(
    String(playability) +
    ' is not a string. Expected a string "probably", "maybe" or "".'
  );
};
