define([
    'jquery',
    'underscore',
    'backbone'
],function ($, _, Backbone) {
    var Category = Backbone.Model.extend({
        defaults: {
            id: null,
            name: null
        },

        getId: function () {
            return this.get('id');
        },

        setId: function (id) {
            this.set('id', id);
            return this;
        },

        getName: function () {
            return this.get('name');
        },

        setName: function (name) {
            this.set('name', name);
            return this;
        }
    });

    return Category;
});