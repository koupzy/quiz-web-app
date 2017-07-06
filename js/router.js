define([
    'jquery',
    'underscore',
    'backbone'
],
function ($, _, Backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            'category': 'listCategory',
            '*path': 'defaults'
        },

        initialize: function (options) {
            this.categoryCollection = options.categoryCollection;
            this.categoryListView = options.categoryListView;
            this.appView = options.appView;
        },

        start: function(){
            Backbone.history.start();
        },

        listCategory: function(){
            this.appView.renderView(this.categoryListView);
            this.categoryCollection.fetch();
            console.log('Hello World!');
        },

        defaults: function(path){
            console.log(path);
        }
    });

    var _instance = null;

    return {
        getInstance: function(options){
            if (_instance === null) {
                _instance = new Router(options);
            }

            return _instance;
        }
    };
});
