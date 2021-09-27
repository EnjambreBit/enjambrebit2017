<<<<<<< HEAD
/* eslint-env node */
=======
'use strict';
>>>>>>> 9ec85e0... v2.15.1...v3.18.0

module.exports = function(environment) {
  var ENV = {
    modulePrefix: "enjambrebit2017",
    environment: environment,
    rootURL: "/",
    locationType: "hash",
    i18n: {
      defaultLocale: "es"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV["g-map"] = {
    libraries: ["places", "geometry"],
    key: "AIzaSyDgcyvgvlGCW9U9izgVu3nkiIxbVJy6r-M"
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

<<<<<<< HEAD
    ENV.APP.rootElement = "#ember-testing";
  }

  if (environment === "production") {
=======
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
>>>>>>> 9ec85e0... v2.15.1...v3.18.0
  }

  return ENV;
};
