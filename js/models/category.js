define([
    'jquery',
    'underscore',
    'backbone'
],function ($, _, Backbone) {
    var Category = Backbone.Model.extend({
        urlRoot: 'http://api.quiz.dev/app_dev.php/v1/rest/categories',

        defaults: {
            id: null,
            name: null
        },

        getId: function(){
            return this.get('id');
        },

        setId: function(id){
            this.set('id', id);
            return this;
        },

        getName: function(){
            return this.get('name');
        },

        setName: function(name){
            this.set('name', name);
            return this;
        }
    });

    return Category;
});