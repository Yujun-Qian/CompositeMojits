YUI.add('FrameMojit', function(Y, NAME) {
  Y.namespace('mojito.controllers')[NAME] = {

    index: function(actionContext) {
        actionContext.composite.done({title: "Parent Frame"});
    }
  };
}, '0.0.1', {requires: ['mojito-composite-addon']});
