<<<<<<< HEAD
/* eslint-env node */
const EmberApp = require("ember-cli/lib/broccoli/ember-app");
=======
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
>>>>>>> 9ec85e0... v2.15.1...v3.18.0

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      exclude: ["icons", "skills"]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // app.import("vendor/jquery.themepunch.plugins.min.js");
  app.import("vendor/isotope.pkgd.min.js");
  app.import("vendor/imagesloaded.pkgd.min.js");
  // app.import('bower_components/isotope/dist/isotope.pkgd.min.js');
  // app.import('bower_components/imagesloaded/imagesloaded.pkgd.min.js');
  // app.import('bower_components/isotope-fit-columns/fit-columns.js');

  return app.toTree();
};
