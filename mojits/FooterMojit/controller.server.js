YUI.add('FooterMojit', function(Y, NAME) {
  Y.namespace('mojito.controllers')[NAME] = {

    index: function(actionContext) {
      actionContext.done({title: "Footer"});
    }
  };
}, '0.0.1', {requires: ['mojito']});
