define([
    'jquery',
    'underscore',
    'backbone',
    'models/category',
    'views/category-new'
],
function ($, _, Backbon, CategoryModel, CategoryNewView) {
    var Router = Backbone.Router.extend({
        routes: {
            'category': 'listCategory',
            'category/newCategory': 'newCategory',
            '*path': 'defaults'
        },

        initialize: function (options) {
            this.categoryCollection = options.categoryCollection;
            this.categoryListView = options.categoryListView;
            this.appView = options.appView;
            this.addCategory = options.addCategory;
        },

        start: function(){
            Backbone.history.start();
        },

        listCategory: function(){
            this.appView.renderView(this.categoryListView);
            this.categoryCollection.fetch({
                success: function (response) {
                    console.log(response);
                },
                error:function () {
                    console.log('Erreur survenu dans la requete');
                }
            });
            console.log('Hello World!');
        },

        newCategory: function () {
            var view = new CategoryNewView({model: new CategoryModel()});
            this.appView.renderView(view);
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
