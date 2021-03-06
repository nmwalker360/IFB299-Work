/*
	FluidVids.js - Fluid and Responsive YouTube/Vimeo Videos v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/fluidvids
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	A raw JavaScript alternative to FitVids.js, fluid width video embeds
*/

(function(){var e=document.getElementsByTagName("iframe");for(var t=0;t<e.length;t++){var n=e[t];var r=/www.youtube.com|player.vimeo.com/;if(n.src.search(r)!==-1){var i=n.height/n.width*100;n.style.position="absolute";n.style.top="0";n.style.left="0";n.width="100%";n.height="100%";var s=document.createElement("div");s.className="video-wrap";s.style.width="100%";s.style.position="relative";s.style.paddingTop=i+"%";var o=n.parentNode;o.insertBefore(s,n);s.appendChild(n)}}})();
