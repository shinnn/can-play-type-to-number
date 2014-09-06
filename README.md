# can-play-type-to-number

[![NPM version](https://badge.fury.io/js/can-play-type-to-number.svg)](http://badge.fury.io/js/can-play-type-to-number)
[![Bower version](https://badge.fury.io/bo/can-play-type-to-number.svg)](http://badge.fury.io/bo/can-play-type-to-number)
[![Build Status](https://travis-ci.org/shinnn/can-play-type-to-number.svg?branch=master)](https://travis-ci.org/shinnn/can-play-type-to-number)
[![Dependency Status](https://david-dm.org/shinnn/can-play-type-to-number.svg)](https://david-dm.org/shinnn/can-play-type-to-number)
[![Build status](https://ci.appveyor.com/api/projects/status/cj58w22uuyvaw3al)](https://ci.appveyor.com/project/ShinnosukeWatanabe/can-play-type-to-number)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/can-play-type-to-number.svg)](https://coveralls.io/r/shinnn/can-play-type-to-number)
[![devDependency Status](https://david-dm.org/shinnn/can-play-type-to-number/dev-status.svg)](https://david-dm.org/shinnn/can-play-type-to-number#info=devDependencies)

Convert a string which [.canPlayType()](http://msdn.microsoft.com/library/ie/ff975191) may returns into a number (0 - 2)

```javascript
canPlayTypeToNumber('probably'); //=> 2
canPlayTypeToNumber('maybe'); //=> 1
canPlayTypeToNumber(''); //=> 0

canPlayTypeToNumber('perhaps'); //=> throws an error
```

## Installation

### Install with package manager

#### [npm](https://www.npmjs.org/)

```
npm i --save can-play-type-to-number
```

#### [Bower](http://bower.io/)

```
bower i --save can-play-type-to-number
```

#### [Component](https://github.com/component/component)

```
component install shinnn/can-play-type-to-number
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/can-play-type-to-number/master/dist/can-play-type-to-number.js "view raw")

### [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) support

This repository includes [the AMD-friendly build](https://raw.githubusercontent.com/shinnn/can-play-type-to-number/master/dist/can-play-type-to-number-amd.js) but the package managers doesn't include it. If you want to use it, download it directly.

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

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
