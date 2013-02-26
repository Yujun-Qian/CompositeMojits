YUI.add('FrameMojit', function(Y, NAME) {
  Y.namespace('mojito.controllers')[NAME] = {

    index: function(actionContext) {
    	var cfg = {children: {
    			header: {
    				type: "HeaderMojit",
    				action: "index"
    			},
				body: {
					type: "BodyMojit",
					action: "index"
				},
				footer: {
					type: "FooterMojit",
					action: "index"
				}
    		}
    	};
    	
        //actionContext.composite.done({title: "Parent Frame"});
    	actionContext.composite.execute(cfg, function(data, meta) {
    		data = Y.merge(data, {title: "Parent Frame"});
    		actionContext.done(data, meta);
    	});
    }
  };
}, '0.0.1', {requires: ['mojito-composite-addon']});
