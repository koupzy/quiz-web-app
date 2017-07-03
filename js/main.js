require.config({
    paths:{
        jquery:'vendor/jQuery/jquery-2.2.3.min.js',
        underscore:'vendor/underscore/underscore.js',
        backbone:'vendor/backbone/backbone.js'
    }
});
require(['app'],function (App) {
   App.initialize();
});

