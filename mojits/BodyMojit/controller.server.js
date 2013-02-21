YUI.add('BodyMojit', function(Y, NAME) {
  Y.namespace('mojito.controllers')[NAME] = {

    index: function(actionContext) {
      actionContext.done({title: "Body"});
    }
  };
}, '0.0.1', {requires: []});
