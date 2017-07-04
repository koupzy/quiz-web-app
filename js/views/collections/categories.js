define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/collections/category.html'
], function ($ , _, Backbone, tpl) {
    var Categories = Backbone.View.extend({
        el: '#app-container',

        render: function() {
            var data = {};
            var compiledTemplate = _.template(tpl, data)
            this.$el.append(compiledTemplate);
            return this;
        }
    });

    return Categories;
});
