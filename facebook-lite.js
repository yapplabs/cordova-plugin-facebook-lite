/* The standard Cordova Facebook plugin is designed to work with
Facebook's JS SDK. We don't load the JS SDK nor do we want to.
Instead, this spartan JS implementation should be used. */
var cordova = window.cordova;
cordova.facebook = {
  init: function(apiKey, cb, fail) {
    cordova.exec(function() {
      console.log('FacebookLite plugin initialized successfully.');
      if (cb) cb();
    }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'init', [apiKey]);
  },
  login: function(params, cb, fail) {
    params = params || { scope: '' };
    cordova.exec(function(e) { // login
      if (cb) cb(e);
    }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'login', params.scope.split(',') );
  },
  logout: function(cb, fail) {
    cordova.exec(function(e) {
      if (cb) cb(e);
    }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'logout', []);
  },
  getLoginStatus: function(cb, fail) {
    cordova.exec(function(e) {
      if (cb) cb(e);
    }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'getLoginStatus', []);
  },
  dialog: function(params, cb, fail) {
    cordova.exec(function(e) { // login
      if (cb) cb(e);
    }, (fail?fail:null), 'org.apache.cordova.facebook.Connect', 'showDialog', [params] );
  }
};
