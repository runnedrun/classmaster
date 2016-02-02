LocalStorageAccess = {
    addStepToGuide: function(args, callback) {
    	chrome.storage.local.get(args.id, function (guide) {
    		if (guide) {
    			var steps = guide.steps || []
	    		guide.steps = steps.concat(args.step);	        	
    		} else {
    			guide = { steps: args.steps };    			
    		}	

    		var guideObject = {}
    		guideObject[args.id] = guide;

    		chrome.storage.local.set(guideObject, callback);					
		})    		    	
    }    
}
