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

        //initialize: function(){}

        render: function() {
            return this;
        },

        onClick: function(e){
            e.preventDefault();
            alert(e.currentTarget.getAttribute('href'));
            Router.getInstance().navigate(e.currentTarget.getAttribute('href'), {trigger: true});
        }
    });
});