define([
  'jquery',
  'underscore',
  'backbone',
  'models/boiler'
], function($, _, Backbone, BoilerModel) {
  'use strict';

  var BoilerCollection = Backbone.Collection.extend({
    model: BoilerModel,
    initialize: function() {
      this.on("add", this.updateSet, this);
    },
    updateSet: function() {
      items = this.models;
    }

  });

  return BoilerCollection;

});