require.config({
    paths:{
        jquery: 'vendor/jQuery/jquery-2.2.3.min',
        jqueryUI: 'vendor/jQuery/jquery-ui.min',
        underscore: '../underscore',
        backbone: 'vendor/backbone/backbone',
        bootstrap: 'vendor/bootstrap/bootstrap.min',
        text: 'vendor/require/text',
        domReady: 'vendor/require/domReady'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore', 'jqueryUI']
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['app', 'domReady'],function (App, domReady) {
    domReady(function(){
        App.initialize();
    });
});

