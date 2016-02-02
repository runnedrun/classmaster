var iframe = $("<iframe>")    	
var html = decodeURI(response.html);
IframeManager.setIframeContent(iframe, html);
$(document.body).append(iframe);