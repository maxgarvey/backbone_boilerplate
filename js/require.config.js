require.config({
  paths: {
    // cdn stuff
    'backbone': '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
    'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
    'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',

    // alternate base paths
    'templates': '../templates'
  }
});

requirejs(['init']);
