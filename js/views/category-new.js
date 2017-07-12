define([
    'jquery',
    'underscore',
    'backbone',
    'models/category',
    'text!templates/category-new.html'
],function ($, _, Backbone, Model, tpl) {
    var newCategory = Backbone.View.extend({
        template: _.template(tpl),

        model: Model,

        events:{
            'click #save-category':'saveCategory',
            'change input[type="text"]': 'onChangeName'
        },

        initialize:function () {

        },

        render: function () {
            this.$el.html(this.template({}));
            return this;
        },

        onChangeName: function(e){
            this.model.setName(e.currentTarget.value);
        },

        saveCategory: function (e) {
            e.preventDefault();

            this.model.save({
                success: function () {
                    console.log('data send ');
                },
                error: function () {
                    console.log('erreur survenu dans la requete');
                }
            });
        }
    });

    return newCategory;
});