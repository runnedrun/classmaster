console.log("running the main!");

$(function () {
	chrome.runtime.sendMessage({getToolbarHtml: true});

    chrome.runtime.onMessage.addListener(
  		function(request, sender, sendResponse) {    
    		if (request.html) {
    			var iframe = $("<iframe></iframe>")        			
    			iframe[0].onload = function() {    				    				
    				var html = decodeURI(request.html);	      				
	    			IframeManager.setIframeContent(iframe, html);	    			    			    			    		
    			};
    			iframe[0].src = 'about:blank';
    			$(document.body).prepend(iframe);

    			
		}      		
	});
})