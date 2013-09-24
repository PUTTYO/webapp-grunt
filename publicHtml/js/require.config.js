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

define(["underscore", "jquery", "backbone"],
       function () {
         console.log("start");

         var numbers = [1,2,3,4,5];
         var persons = [ 
           { 
           name : "jonny", 
           age : 24, 
           birth_month : 8, 
           gender : 0 // 0 : male, 1, female 
          }, 
          { 
           name : "paul", 
           age : 52, 
           birth_month : 7, 
           gender : 1 
          }, 
          { 
           name : "under score", 
           age : 32, 
           birth_month : 8, 
           gender : 0 
          } 
         ];

         _.each(numbers, function (number) {
           console.log("number : " + number);
         });

         var even = _.find(numbers, function (number) {
           return number % 2 === 0;
         });
         console.log("even : " + even);


         var evens = _.filter(numbers, function (number) {
           return number % 2 === 0;
         });

         console.log(evens);

         var males = _.where(persons, {gender : 0});
         console.log(JSON.stringify(males));

         var lodestPerson = _.max(persons, function (person) {
           return person.age;
         });
         console.log(lodestPerson);

         var orderByYoung = _.sortBy(persons, function (person) {
           return person.age;
         });
         console.log(orderByYoung);

         console.log("end");
         return ;
       
});

