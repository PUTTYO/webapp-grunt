require.config ({
    baseUrl: '../../js',
    paths: {
        "backbone"   : "vender/js/backbone/backbone",
        "jquery"     : "vender/js/jquery/jquery",
        "underscore" : "vender/js/underscore/underscore",
        "easeljs"    : "vender/js/easeljs/easeljs-0.7.0.min",
        "smartjs"    : "vender/js/smartjs/index",
        "preloadjs"  : "vender/js/PreloadJS/preloadjs-0.4.0.min",
        //"tween"      :vender/js/createjs-tweenjs/tweenjs-0.5.0.min"
        "tween"      : "vender/js/createjs-tweenjs/Tween"
    },

    shim: {
        'easeljs': {
            exports: 'createjs'
        },
        'tween': {
            deps: ['easeljs'],
            //exports: 'Tween'
            exports: 'createjs.Tween'
        },
        'preloadjs': {
            exports: 'createjs.PreloadJS'
        },
        'underscore' : {
            exprots: "_"
        },
        'jquery': {
            exports: "jquery"
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
