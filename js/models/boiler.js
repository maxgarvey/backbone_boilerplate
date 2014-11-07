define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
    
    var BoilerModel = Backbone.Model.extend({
      idAttribute: 'boiler_id',
      defaults: {
        'attr1': 'default_attr1',
        'attr2': 'default_attr2'
      }
    });

    return BoilerModel;

});