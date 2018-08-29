# can-play-type-to-number

[![npm version](https://img.shields.io/npm/v/can-play-type-to-number.svg)](https://www.npmjs.com/package/can-play-type-to-number)
[![Build Status](https://travis-ci.org/shinnn/can-play-type-to-number.svg?branch=master)](https://travis-ci.org/shinnn/can-play-type-to-number)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/can-play-type-to-number.svg)](https://coveralls.io/github/shinnn/can-play-type-to-number)

Convert a string which [`HTMLMediaElement.canPlayType()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType) may returns into an integer

```javascript
canPlayTypeToNumber('probably'); //=> 2
canPlayTypeToNumber('maybe'); //=> 1
canPlayTypeToNumber(''); //=> 0

canPlayTypeToNumber('perhaps'); //=> throws an error
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install can-play-type-to-number
```

## API

```javascript
import canPlayTypeToNumber from 'can-play-type-to-number';
```

### canPlayTypeToNumber(*playability*)

*playability*: `string` (`'probably'`, `'maybe'`, or `''`)  
Return: `integer` (`0`, `1` or `2`)

| argument     | return |
| ------------ | ------ |
| `'probably'` | `2`    |
| `'maybe'`    | `1`    |
| `''`         | `0`    |

It throws an error when the argument is not included in the list above.

## License

[MIT License](./LICENSE) © 2014 - 2018 Shinnosuke Watanabe
