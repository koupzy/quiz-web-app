define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function ($ , _, Backbone, Router) {
    return Backbone.View.extend({
        el: 'body',

        events: {
            'click a': 'onClick'
        },

        initialize: function() {
            this.$container = this.$('#app-container');
        },

        render: function() {
            return this;
        },

        renderView: function(view) {
            this.$container.html(view.render().el);
        },

        onClick: function(e){
            e.preventDefault();
            var href = e.currentTarget.getAttribute('href');
            Router.getInstance().navigate(href, {trigger: true});
            console.log(href);
        }
    });
});