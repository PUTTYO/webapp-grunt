"use strict"
require.config ({
  baseUrl: 'js',
  paths: {
    /*"jquery"     : "/vendor/jquery/jquery.js",
    "underscore" : "/vendor/underscore/underscore.js",
    "backbone"   : "/vendor/backbone/backbone.js"
   */
    "jquery"     : "vendor/jquery/jquery",
    "underscore" : "vendor/underscore/underscore",
    "json2"      : "vendor/json2/json2",
    "backbone"   : "vendor/backbone/backbone"
},

  shim: {
    'underscore' : {
      exprots: "_"
    },
    'jquery': {
      exports: "$"
    },
    'backbone': {
      //These script dependencies should be loaded before loading
      //backbone.js
      deps: ['underscore', 'jquery'],

      //Once loaded, use the global 'Backbone' as the
      //module value.
      exports: 'Backbone'
    }
  }
});


