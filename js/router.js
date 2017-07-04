define([
    'jquery',
    'underscore',
    'backbone'
],
function ($, _, Backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            '*path': 'defaults',
            'category': 'showCategories'
        },

        start: function(){
            Backbone.history.start();
        },

        showCategories: function(){
            console.log('Hello World!');
            alert('Hello World!');
        },

        defaults: function(path){
            console.log(path);
            alert(path);
        }
    });

    var _instance = null;

    return {
        getInstance: function(){
            if (_instance === null) {
                _instance = new Router();
            }

            return _instance;
        }
    };
});
