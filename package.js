Package.describe({
  name: 'schaazzz:gridstack',
  version: '0.0.7',
  // Brief, one-line summary of the package.
  summary: 'For testing/personal use! Not tested yet!',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/schaazzz/gridstack',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3');
  api.use('ecmascript');
  api.use('jquery', 'client');
  api.use('linto:jquery-ui@1.11.2', 'client');
  api.use('underscore', 'client');
  api.addFiles('gridstack.js','client');
  api.addFiles('gridstack.css', 'client');
  api.mainModule('gridstack.js','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('schaazzz:gridstack');
  api.mainModule('gridstack-tests.js');
});
