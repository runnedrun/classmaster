BackgroundRequest = function(requestName, args, callback) {	
	 chrome.runtime.sendMessage({	 	
	 		ajaxRequest: {
	 			requestName: requestName,
            	args: args
	 		}            
        }, function(response){        	        
        	if (response.failure) {
        		ButterBar("Request failed, please try again.");        		
        	} else {
    			callback(response);
        	}            
        });
}