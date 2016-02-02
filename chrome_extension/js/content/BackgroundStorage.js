BackgroundStorage = function (method, args, callback) {	
	chrome.runtime.sendMessage({	 	
 		storage: {
 			args: args,
 			method: method        	
 		}            
	}, function(response){ 		
		callback && callback(response)
	});
}