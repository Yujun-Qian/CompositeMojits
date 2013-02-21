YUI.add('HeaderMojit', function(Y, NAME) {
  Y.namespace('mojito.controllers')[NAME] = {

    index: function(actionContext) {
      actionContext.done({title: "Header"});
    }
  };
}, '0.0.1', {requires: []});
