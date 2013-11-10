require.config ({
    //baseUrl: '/',
    paths: {
        /*'jquery'     : '/vendor/jquery/jquery.js',
         'underscore' : '/vendor/underscore/underscore.js',
         'backbone'   : '/vendor/backbone/backbone.js'
         */
        'jquery'     : '/vender/js/jquery/jquery',
        'underscore' : '/vender/js/underscore/underscore',
        'json2'      : '/vender/js/json2/json2',
        'backbone'   : '/vender/js/backbone/backbone'
    },

    shim: {
        'underscore' : {
            exprots: '_'
        },
        'jquery': {
            exports: '$'
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
