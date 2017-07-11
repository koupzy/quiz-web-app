define([
    'jquery',
    'underscore',
    'backbone',
    'collections/categories',
    'text!templates/category-list.html'
], function ($ , _, Backbone, Collection, tpl) {
    var Categories = Backbone.View.extend({

        template: _.template(tpl),

        collection: Collection,

        initialize: function(){
            this.listenTo(this.collection, 'request', this.onRequest);
            this.listenTo(this.collection, 'sync', this.render);
        },

        render: function() {

            this.$el.html(this.template({categories: this.collection.toJSON()}));
            return this;
        },

        onRequest: function(collection, models, options){
            // Place loader logic here
        }
    });

    return Categories;
});