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
  throw new TypeError(playability + ' is not a string.');
}
