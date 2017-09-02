function setupCookieBar(){function e(){if(document.cookie.length>0||window.localStorage.length>0){void 0===n()?E=!0:B=!0}m("always")&&(E=!0),!0===E&&!1===B&&t()}function t(){var e=o(),t="";m("theme")&&(t="-"+m("theme"));var n=w.replace(/[^\/]*$/,""),i=w.indexOf(".min")>-1?".min":"",a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("href",n+"cookiebar"+t+i+".css"),document.head.appendChild(a);var r=new XMLHttpRequest;r.open("GET",n+"lang/"+e+".html",!0),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var e=document.createElement("div");if(e.innerHTML=r.responseText,document.getElementsByTagName("body")[0].appendChild(e),u=document.getElementById("cookie-bar"),g=document.getElementById("cookie-bar-button"),h=document.getElementById("cookie-bar-button-no"),y=document.getElementById("cookie-bar-prompt"),f=document.getElementById("cookie-bar-prompt-button"),v=document.getElementById("cookie-bar-prompt-close"),k=document.getElementById("cookie-bar-prompt-content"),b=document.getElementById("cookie-bar-no-consent"),thirdparty=document.getElementById("cookie-bar-thirdparty"),tracking=document.getElementById("cookie-bar-tracking"),scrolling=document.getElementById("cookie-bar-scrolling"),privacyPage=document.getElementById("cookie-bar-privacy-page"),privacyLink=document.getElementById("cookie-bar-privacy-link"),m("showNoConsent")||(b.style.display="none",h.style.display="none"),m("blocking")&&(c(y,500),v.style.display="none"),m("thirdparty")&&(thirdparty.style.display="block"),m("tracking")&&(tracking.style.display="block"),m("hideDetailsBtn")&&(f.style.display="none"),m("scrolling")&&(scrolling.style.display="inline-block"),m("top")?(u.style.top=0,s("top")):(u.style.bottom=0,s("bottom")),m("privacyPage")){var t=decodeURIComponent(m("privacyPage"));privacyLink.href=t,privacyPage.style.display="inline-block"}p(),c(u,250),s()}},r.send()}function o(){var e=m("forceLang");return!1===e&&(e=navigator.language||navigator.userLanguage),e=e.substr(0,2),CookieLanguages.indexOf(e)<0&&(e="en"),e}function n(){var e=document.cookie.match(/(;)?cookiebar=([^;]*);?/);return null==e?void 0:decodeURI(e[2])}function a(e,t){var o=30;m("remember")&&(o=m("remember"));var n=new Date;n.setDate(n.getDate()+parseInt(o));var i=encodeURI(t)+(null===o?"":"; expires="+n.toUTCString()+";path=/");document.cookie=e+"="+i}function r(){document.cookie.split(";").forEach(function(e){document.cookie=e.replace(/^\ +/,"").replace(/\=.*/,"=;expires="+(new Date).toUTCString()+";path=/")}),localStorage.clear()}function c(e,t){var o=e.style;o.opacity=0,o.display="block",function e(){(o.opacity-=-.1)>.9||setTimeout(e,t/10)}()}function l(e,t){var o=e.style;o.opacity=1,function e(){(o.opacity-=.1)<.1?o.display="none":setTimeout(e,t/10)}()}function s(e){setTimeout(function(){var t=document.getElementById("cookie-bar").clientHeight,o=document.getElementsByTagName("body")[0],n=o.currentStyle||window.getComputedStyle(o);switch(e){case"top":o.style.marginTop=parseInt(n.marginTop)+t+"px";break;case"bottom":o.style.marginBottom=parseInt(n.marginBottom)+t+"px"}},300)}function d(){var e=document.getElementById("cookie-bar").clientHeight;if(m("top")){var t=parseInt(document.getElementsByTagName("body")[0].style.marginTop);document.getElementsByTagName("body")[0].style.marginTop=t-e+"px"}else{var o=parseInt(document.getElementsByTagName("body")[0].style.marginBottom);document.getElementsByTagName("body")[0].style.marginBottom=o-e+"px"}}function m(e){var t=w.split(e+"=");return!!t[1]&&t[1].split(/[&?]+/)[0]}function p(){if(g.addEventListener("click",function(){a("cookiebar","CookieAllowed"),d(),l(y,250),l(u,250),m("refreshPage")&&window.location.reload()}),h.addEventListener("click",function(){var e=b.textContent.trim();!0===window.confirm(e)&&(r(),a("cookiebar","CookieDisallowed"),d(),l(y,250),l(u,250))}),f.addEventListener("click",function(){c(y,250)}),v.addEventListener("click",function(){l(y,250)}),m("scrolling")){var e=document.body.getBoundingClientRect().top,t=!1;window.addEventListener("scroll",function(){!1===t&&(document.body.getBoundingClientRect().top-e>250||document.body.getBoundingClientRect().top-e<-250)&&(a("cookiebar","CookieAllowed"),d(),l(y,250),l(u,250),t=!0,m("refreshPage")&&window.location.reload())})}}var u,g,h,y,f,v,k,b,w=function(){var e=document.getElementsByTagName("script");for(i=0;i<e.length;i+=1)if(e[i].hasAttribute("src")&&(path=e[i].src,path.indexOf("cookiebar")>-1))return path}(),E=!1,B=!1,T=n();if("CookieDisallowed"==T&&(r(),a("cookiebar","CookieDisallowed")),void 0===T)if(m("noGeoIp"))E=!0,e();else{var $=new XMLHttpRequest;$.open("GET","//freegeoip.io/json/",!0),$.onreadystatechange=function(){if(4===$.readyState){if(clearTimeout(C),200===$.status){var t=JSON.parse($.responseText).country_code;cookieLawStates.indexOf(t)>-1?E=!0:B=!0}else E=!0;e()}};var C=setTimeout(function(){console.log("cookieBAR - Timeout for ip geolocation"),$.onreadystatechange=function(){},$.abort(),E=!0,e()},1500);$.send()}}var CookieLanguages=["ca","cs","da","de","en","es","fr","hu","it","nl","pl","pt","ro","se","sk","sl"],cookieLawStates=["AT","BE","BG","CY","CZ","DE","DK","EE","EL","ES","FI","FR","GB","HR","HU","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK"];document.addEventListener("DOMContentLoaded",function(){setupCookieBar()}),function(){for(var e,t=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],n=o.length,i=window.console=window.console||{};n--;)e=o[n],i[e]||(i[e]=t)}(),document.addEventListener("DOMContentLoaded",function(){$(function(){$('nav a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!1}})}),$("#header").parallax({imageSrc:"./img/bg.jpg"}),$(".parallax-window").parallax({imageSrc:"./img/photobg.jpg"}),function(){function e(e){for(var t="",o='<div class="city"><h2>%city%</h2></div><div class="city--team"></div>',n='<div class="person"><div class="person--photo"><img src="./img/default-person/smallphoto.jpg" alt="%nameAlt%" class="img-responsive"></div><div class="person--name"><h3>%name%</h3><h4>%instrument%</h4><h5 class="read-more" data-moreid="%moreid%">więcej...</h5></div></div><div class="person-text"></div>',i=0;i<e.length;i++){if(e[i].city!==t){e[i],t=e[i].city;var a=o.replace("%city%",e[i].city);$(".intunityTeamContent").append(a)}var r="";r=n.replace("%name%",e[i].name),r=r.replace("%instrument%",e[i].instrument),r=r.replace("%nameAlt%",e[i].name),""!==e[i].smallphoto&&""!==e[i].url&&(r=r.replace("default-person",e[i].url),r=r.replace("smallphoto.jpg",e[i].smallphoto)),""===e[i].text&&(r=r.replace('<h5 class="read-more" data-moreid="%moreid%">więcej...</h5>',"")),""!==e[i].text&&(r=r.replace("%moreid%",i)),$(".city--team:last").append(r)}}function t(){var e="",t=Number($(this).attr("data-moreid"));""!==o[t].bigphoto&&(e='<img src="./img/%url%/%bigphoto%" alt="%alt%" class="img-responsive">'.replace("%url%",o[t].url),e=e.replace("%bigphoto%",o[t].bigphoto),e=e.replace("%alt%",o[t].name)),$(this).parent().parent().next().hasClass("person-closed")||$(this).parent().parent().next().hasClass("person-opened")?($(this).parent().parent().next().toggleClass("person-opened").toggleClass("person-closed"),"zwiń..."===$(this).text()?$(this).text("więcej..."):$(this).text("zwiń...")):($(this).parent().parent().next().addClass("person-opened").html("<h2><strong>"+o[t].name+"</strong></h2>"+e+o[t].text),$(this).text("zwiń..."))}$.ajax({url:"./data/intunity-team.json",type:"GET",cache:!0,success:function(t,n,i){o=t,e(o)},error:function(e,t,o){console.log(t),console.log(o)}});var o=[];$(".intunityTeamContent").on("click",".read-more",t)}(),function(){function e(){o=$(window).height(),n=$(window).scrollTop(),i=o+n,a=$(window).width(),a<768?(t(0,0,".photo-1>img"),t(0,0,".photo-2>img")):(t(-40,40,".photo-1>img"),t(30,-30,".photo-2>img"),!1===r&&(r=!0))}function t(e,t,a,c){void 0===c&&(c="Y");var l=$(a).offset(),s=l.top,d=s+$(a).outerHeight();i>s&&n<s+$(a).height()?$(a).css("transform","translate"+c+"("+Math.round(e+(i-s)*(t-e)/(o+(d-s)))+"%)"):!1===r&&$(a).css("transform","translate"+c+"("+e+"%)")}var o=$(window).height(),n=$(window).scrollTop(),i=o+n,a=$(window).width(),r=!1;e(),$(window).scroll(e)}()});