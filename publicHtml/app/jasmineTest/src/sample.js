var sample = {};

sample.test = function(param){
    'use strict';
    return {
        say : function() {
            return 'say ' + param;
        }
    };
};
