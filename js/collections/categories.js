define([
    'backbone',
    'models/category'
],
function (Backbone, Category) {
    var Categories = Backbone.Collection.extend({
        url: 'http://api.quiz.dev/app_dev.php/v1/rest/categories',

        model: Category,

        parse: function(response, options){
            console.log(response.items);
            return response.items;
        }
    });

    return Categories;
});