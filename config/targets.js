<<<<<<< HEAD
/* eslint-env node */
=======
'use strict';

const browsers = [
  'last 1 Chrome versions',
  'last 1 Firefox versions',
  'last 1 Safari versions'
];

const isCI = !!process.env.CI;
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  browsers.push('ie 11');
}
>>>>>>> 9ec85e0... v2.15.1...v3.18.0

module.exports = {
  browsers
};
