define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/boiler.html'
], function($, _, Backbone, boilerTemplate){

  // boiler view
  var BoilerView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(boilerTemplate),
    className: 'boiler',
    events: {
      "click .icon": "open",
    },
    initialize: function() {
      this.listenTo(this.model, "change", this.render);
    },
    render: function() {
      // render function
    }
  });

  return BoilerView;
});