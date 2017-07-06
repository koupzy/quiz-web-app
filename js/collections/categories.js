define([
    'backbone',
    'models/category'
],
function (Backbone, Category) {
    var Categories = Backbone.Collection.extend({
        url: 'http://api.quiz.dev/v1/rest/categories',

        model: Category
    });

    return Categories;
});