require.config({
    paths:{
        jquery: 'vendor/jQuery/jquery-2.2.3.min',
        underscore: '../underscore',
        backbone: 'vendor/backbone/backbone',
        bootstrap: 'vendor/bootstrap/bootstrap.min',
        text: 'vendor/require/text',
        router: 'router'
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
            deps: ['jquery', 'underscore']
        },
        bootstrap: {
            deps: ['jquery']
        },
        router: {
            exports: 'router',
            deps: ['backbone']
        }
    }
});

require(['app'],function (App) {
   App.initialize();
});

