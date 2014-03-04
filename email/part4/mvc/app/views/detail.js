// detail.js
define([
    'jquery',
    'underscore',
    'backbone',
    'template!./detail',
    'widget-carousel'
], function ($, _, Backbone, Template) {
    return Backbone.View.extend({
        el: '#detail',
        render: function() {
            this.$el.html(Template());
        }
    });
});