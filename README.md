# can-play-type-to-number

[![NPM version](https://img.shields.io/npm/v/can-play-type-to-number.svg)](https://www.npmjs.org/package/can-play-type-to-number)
[![Bower version](https://img.shields.io/bower/v/can-play-type-to-number.svg)](https://github.com/shinnn/can-play-type-to-number/releases)
[![Build Status](https://travis-ci.org/shinnn/can-play-type-to-number.svg?branch=master)](https://travis-ci.org/shinnn/can-play-type-to-number)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/can-play-type-to-number.svg)](https://coveralls.io/r/shinnn/can-play-type-to-number)
[![devDependency Status](https://david-dm.org/shinnn/can-play-type-to-number/dev-status.svg)](https://david-dm.org/shinnn/can-play-type-to-number#info=devDependencies)

Convert a string which [.canPlayType()](https://msdn.microsoft.com/library/ff975191) may returns into a number (0 - 2)

```javascript
canPlayTypeToNumber('probably'); //=> 2
canPlayTypeToNumber('maybe'); //=> 1
canPlayTypeToNumber(''); //=> 0

canPlayTypeToNumber('perhaps'); //=> throws an error
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install can-play-type-to-number
```

#### [Bower](http://bower.io/) 

```
bower install can-play-type-to-number
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/can-play-type-to-number/master/browser.js "view raw")

## API

### canPlayTypeToNumber(*playability*)

*playability*: `String` (`'probably'`, `'maybe'`, or `''`)  
Return: `Number` (0 - 2)

| argument     | return |
| ------------ | ------ |
| `'probably'` | `2`    |
| `'maybe'`    | `1`    |
| `''`         | `0`    |

It throws an error when the argument isn't included in the list above.

## License

Copyright (c) 2014 - 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
