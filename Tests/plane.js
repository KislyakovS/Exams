'use strict';

const test = require('../test.js');

const cases = [
  [[[1, [[2]], [3, 4], [5], [6, [7, 8]]]], [1, 2, 3, 4, 5, 6, 7, 8]],
];

module.exports = test(cases);
