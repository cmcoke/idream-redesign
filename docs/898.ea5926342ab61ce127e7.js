/*! For license information please see 898.ea5926342ab61ce127e7.js.LICENSE.txt */
(self.webpackChunkwebpack_website_setup=self.webpackChunkwebpack_website_setup||[]).push([[898],{90:e=>{!function(t,n){var i=function(e,t,n){"use strict";var i,s;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in s=e.lazySizesConfig||e.lazysizesConfig||{},n)t in s||(s[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:s,noSupport:!0};var r,a,c,o,l,u,d,f,p,m,h,A,g,v,y,z,b,w,C,E,S,x,L,M,T,R,_,k,B,D,P,W,N,$,I,U,F,H,O,Q,G,q,j,V,K=t.documentElement,J=e.HTMLPictureElement,X="addEventListener",Y=e.addEventListener.bind(e),Z=e.setTimeout,ee=e.requestAnimationFrame||Z,te=e.requestIdleCallback,ne=/^picture$/i,ie=["load","error","lazyincluded","_lazyloaded"],se={},re=Array.prototype.forEach,ae=function(e,t){return se[t]||(se[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),se[t].test(e.getAttribute("class")||"")&&se[t]},ce=function(e,t){ae(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},oe=function(e,t){var n;(n=ae(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},le=function(e,t,n){var i=n?X:"removeEventListener";n&&le(e,t),ie.forEach((function(n){e[i](n,t)}))},ue=function(e,n,s,r,a){var c=t.createEvent("Event");return s||(s={}),s.instance=i,c.initEvent(n,!r,!a),c.detail=s,e.dispatchEvent(c),c},de=function(t,n){var i;!J&&(i=e.picturefill||s.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},fe=function(e,t){return(getComputedStyle(e,null)||{})[t]},pe=function(e,t,n){for(n=n||e.offsetWidth;n<s.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},me=(G=[],q=Q=[],V=function(e,n){H&&!n?e.apply(this,arguments):(q.push(e),O||(O=!0,(t.hidden?Z:ee)(j)))},V._lsFlush=j=function(){var e=q;for(q=Q.length?G:Q,H=!0,O=!1;e.length;)e.shift()();H=!1},V),he=function(e,t){return t?function(){me(e)}:function(){var t=this,n=arguments;me((function(){e.apply(t,n)}))}},Ae=function(e){var t,i,s=function(){t=null,e()},r=function(){var e=n.now()-i;e<99?Z(r,99-e):(te||s)(s)};return function(){i=n.now(),t||(t=Z(r,99))}},ge=(b=/^img$/i,w=/^iframe$/i,C="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,E=0,S=0,x=-1,L=function(e){S--,(!e||S<0||!e.target)&&(S=0)},M=function(e){return null==z&&(z="hidden"==fe(t.body,"visibility")),z||!("hidden"==fe(e.parentNode,"visibility")&&"hidden"==fe(e,"visibility"))},T=function(e,n){var i,s=e,r=M(e);for(A-=n,y+=n,g-=n,v+=n;r&&(s=s.offsetParent)&&s!=t.body&&s!=K;)(r=(fe(s,"opacity")||1)>0)&&"visible"!=fe(s,"overflow")&&(i=s.getBoundingClientRect(),r=v>i.left&&g<i.right&&y>i.top-1&&A<i.bottom+1);return r},_=function(e){var t,i=0,r=s.throttleDelay,a=s.ricTimeout,c=function(){t=!1,i=n.now(),e()},o=te&&a>49?function(){te(c,{timeout:a}),a!==s.ricTimeout&&(a=s.ricTimeout)}:he((function(){Z(c)}),!0);return function(e){var s;(e=!0===e)&&(a=33),t||(t=!0,(s=r-(n.now()-i))<0&&(s=0),e||s<9?o():Z(o,s))}}(R=function(){var e,n,r,a,c,o,d,p,b,w,L,R,_=i.elements;if((f=s.loadMode)&&S<8&&(e=_.length)){for(n=0,x++;n<e;n++)if(_[n]&&!_[n]._lazyRace)if(!C||i.prematureUnveil&&i.prematureUnveil(_[n]))$(_[n]);else if((p=_[n].getAttribute("data-expand"))&&(o=1*p)||(o=E),w||(w=!s.expand||s.expand<1?K.clientHeight>500&&K.clientWidth>500?500:370:s.expand,i._defEx=w,L=w*s.expFactor,R=s.hFac,z=null,E<L&&S<1&&x>2&&f>2&&!t.hidden?(E=L,x=0):E=f>1&&x>1&&S<6?w:0),b!==o&&(m=innerWidth+o*R,h=innerHeight+o,d=-1*o,b=o),r=_[n].getBoundingClientRect(),(y=r.bottom)>=d&&(A=r.top)<=h&&(v=r.right)>=d*R&&(g=r.left)<=m&&(y||v||g||A)&&(s.loadHidden||M(_[n]))&&(u&&S<3&&!p&&(f<3||x<4)||T(_[n],o))){if($(_[n]),c=!0,S>9)break}else!c&&u&&!a&&S<4&&x<4&&f>2&&(l[0]||s.preloadAfterLoad)&&(l[0]||!p&&(y||v||g||A||"auto"!=_[n].getAttribute(s.sizesAttr)))&&(a=l[0]||_[n]);a&&!c&&$(a)}}),B=he(k=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(L(e),ce(t,s.loadedClass),oe(t,s.loadingClass),le(t,D),ue(t,"lazyloaded"))}),D=function(e){B({target:e.target})},P=function(e,t){var n=e.getAttribute("data-load-mode")||s.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},W=function(e){var t,n=e.getAttribute(s.srcsetAttr);(t=s.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},N=he((function(e,t,n,i,r){var a,c,o,l,u,f;(u=ue(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?ce(e,s.autosizesClass):e.setAttribute("sizes",i)),c=e.getAttribute(s.srcsetAttr),a=e.getAttribute(s.srcAttr),r&&(l=(o=e.parentNode)&&ne.test(o.nodeName||"")),f=t.firesLoad||"src"in e&&(c||a||l),u={target:e},ce(e,s.loadingClass),f&&(clearTimeout(d),d=Z(L,2500),le(e,D,!0)),l&&re.call(o.getElementsByTagName("source"),W),c?e.setAttribute("srcset",c):a&&!l&&(w.test(e.nodeName)?P(e,a):e.src=a),r&&(c||l)&&de(e,{src:a})),e._lazyRace&&delete e._lazyRace,oe(e,s.lazyClass),me((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&ce(e,s.fastLoadedClass),k(u),e._lazyCache=!0,Z((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&S--}),!0)})),$=function(e){if(!e._lazyRace){var t,n=b.test(e.nodeName),i=n&&(e.getAttribute(s.sizesAttr)||e.getAttribute("sizes")),r="auto"==i;(!r&&u||!n||!e.getAttribute("src")&&!e.srcset||e.complete||ae(e,s.errorClass)||!ae(e,s.lazyClass))&&(t=ue(e,"lazyunveilread").detail,r&&ve.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,S++,N(e,t,r,i,n))}},I=Ae((function(){s.loadMode=3,_()})),F=function(){u||(n.now()-p<999?Z(F,999):(u=!0,s.loadMode=3,_(),Y("scroll",U,!0)))},{_:function(){p=n.now(),i.elements=t.getElementsByClassName(s.lazyClass),l=t.getElementsByClassName(s.lazyClass+" "+s.preloadClass),Y("scroll",_,!0),Y("resize",_,!0),Y("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+s.loadingClass);n.length&&n.forEach&&ee((function(){n.forEach((function(e){e.complete&&$(e)}))}))}})),e.MutationObserver?new MutationObserver(_).observe(K,{childList:!0,subtree:!0,attributes:!0}):(K.addEventListener("DOMNodeInserted",_,!0),K.addEventListener("DOMAttrModified",_,!0),setInterval(_,999)),Y("hashchange",_,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,_,!0)})),/d$|^c/.test(t.readyState)?F():(Y("load",F),t.addEventListener("DOMContentLoaded",_),Z(F,2e4)),i.elements.length?(R(),me._lsFlush()):_()},checkElems:_,unveil:$,_aLSL:U=function(){3==s.loadMode&&(s.loadMode=2),I()}}),ve=(a=he((function(e,t,n,i){var s,r,a;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),ne.test(t.nodeName||""))for(r=0,a=(s=t.getElementsByTagName("source")).length;r<a;r++)s[r].setAttribute("sizes",i);n.detail.dataAttr||de(e,n.detail)})),c=function(e,t,n){var i,s=e.parentNode;s&&(n=pe(e,s,n),(i=ue(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,s,i,n))},{_:function(){r=t.getElementsByClassName(s.autosizesClass),Y("resize",o)},checkElems:o=Ae((function(){var e,t=r.length;if(t)for(e=0;e<t;e++)c(r[e])})),updateElem:c}),ye=function(){!ye.i&&t.getElementsByClassName&&(ye.i=!0,ve._(),ge._())};return Z((function(){s.init&&ye()})),i={cfg:s,autoSizer:ve,loader:ge,init:ye,uP:de,aC:ce,rC:oe,hC:ae,fire:ue,gW:pe,rAF:me}}(t,t.document,Date);t.lazySizes=i,e.exports&&(e.exports=i)}("undefined"!=typeof window?window:{})},229:(e,t,n)=>{var i;!function(e){var t,n,i,s,r,a,c,o=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(o)&&o.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),i=function(e){var t,i,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout((function(){s.removeChild(t)}))):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout((function(){e.sizes=i})))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])},r=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){r(),a&&a.addListener&&a.addListener(r)},n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),r))}(window),function(s,r,a){"use strict";var c,o,l;r.createElement("picture");var u={},d=!1,f=function(){},p=r.createElement("img"),m=p.getAttribute,h=p.setAttribute,A=p.removeAttribute,g=r.documentElement,v={},y={algorithm:""},z="data-pfsrc",b=z+"set",w=navigator.userAgent,C=/rident/.test(w)||/ecko/.test(w)&&w.match(/rv\:(\d+)/)&&RegExp.$1>35,E="currentSrc",S=/\s+\+?\d+(e\d+)?w/,x=/(\([^)]+\))?\s*(.+)/,L=s.picturefillCFG,M="font-size:100%!important;",T=!0,R={},_={},k=s.devicePixelRatio,B={px:1,in:96},D=r.createElement("a"),P=!1,W=/^[ \t\n\r\u000c]+/,N=/^[, \t\n\r\u000c]+/,$=/^[^ \t\n\r\u000c]+/,I=/[,]+$/,U=/^\d+$/,F=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,H=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i||!1):e.attachEvent&&e.attachEvent("on"+t,n)},O=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function Q(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var G,q,j,V,K,J,X,Y,Z,ee,te,ne,ie,se,re,ae=(G=/^([\d\.]+)(em|vw|px)$/,q=O((function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"})),function(e,t){var n;if(!(e in R))if(R[e]=!1,t&&(n=e.match(G)))R[e]=n[1]*B[n[2]];else try{R[e]=new Function("e",q(e))(B)}catch(e){}return R[e]}),ce=function(e,t){return e.w?(e.cWidth=u.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},oe=function(e){if(d){var t,n,i,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),i=(t=s.elements||u.qsa(s.context||r,s.reevaluate||s.reselect?u.sel:u.selShort)).length){for(u.setupRun(s),P=!0,n=0;n<i;n++)u.fillImg(t[n],s);u.teardownRun(s)}}};function le(e,t){return e.res-t.res}function ue(e,t){var n,i,s;if(e&&t)for(s=u.parseSet(t),e=u.makeUrl(e),n=0;n<s.length;n++)if(e===u.makeUrl(s[n].url)){i=s[n];break}return i}s.console&&console.warn,E in p||(E="src"),v["image/jpeg"]=!0,v["image/gif"]=!0,v["image/png"]=!0,v["image/svg+xml"]=r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),u.ns=("pf"+(new Date).getTime()).substr(0,9),u.supSrcset="srcset"in p,u.supSizes="sizes"in p,u.supPicture=!!s.HTMLPictureElement,u.supSrcset&&u.supPicture&&!u.supSizes&&(j=r.createElement("img"),p.srcset="data:,a",j.src="data:,a",u.supSrcset=p.complete===j.complete,u.supPicture=u.supSrcset&&u.supPicture),u.supSrcset&&!u.supSizes?(V="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",J=function(){2===K.width&&(u.supSizes=!0),o=u.supSrcset&&!u.supSizes,d=!0,setTimeout(oe)},(K=r.createElement("img")).onload=J,K.onerror=J,K.setAttribute("sizes","9px"),K.srcset=V+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",K.src=V):d=!0,u.selShort="picture>img,img[srcset]",u.sel=u.selShort,u.cfg=y,u.DPR=k||1,u.u=B,u.types=v,u.setSize=f,u.makeUrl=O((function(e){return D.href=e,D.href})),u.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},u.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?u.matchesMedia=function(e){return!e||matchMedia(e).matches}:u.matchesMedia=u.mMQ,u.matchesMedia.apply(this,arguments)},u.mMQ=function(e){return!e||ae(e)},u.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},u.supportsType=function(e){return!e||v[e]},u.parseSize=O((function(e){var t=(e||"").match(x);return{media:t&&t[1],length:t&&t[2]}})),u.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,i=t.exec(e.substring(l));if(i)return n=i[0],l+=n.length,n}var i,s,r,a,c,o=e.length,l=0,u=[];function d(){var e,n,r,a,c,o,l,d,f,p=!1,m={};for(a=0;a<s.length;a++)o=(c=s[a])[c.length-1],l=c.substring(0,c.length-1),d=parseInt(l,10),f=parseFloat(l),U.test(l)&&"w"===o?((e||n)&&(p=!0),0===d?p=!0:e=d):F.test(l)&&"x"===o?((e||n||r)&&(p=!0),f<0?p=!0:n=f):U.test(l)&&"h"===o?((r||n)&&(p=!0),0===d?p=!0:r=d):p=!0;p||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,u.push(m))}function f(){for(n(W),r="",a="in descriptor";;){if(c=e.charAt(l),"in descriptor"===a)if(Q(c))r&&(s.push(r),r="",a="after descriptor");else{if(","===c)return l+=1,r&&s.push(r),void d();if("("===c)r+=c,a="in parens";else{if(""===c)return r&&s.push(r),void d();r+=c}}else if("in parens"===a)if(")"===c)r+=c,a="in descriptor";else{if(""===c)return s.push(r),void d();r+=c}else if("after descriptor"===a)if(Q(c));else{if(""===c)return void d();a="in descriptor",l-=1}l+=1}}for(;;){if(n(N),l>=o)return u;i=n($),s=[],","===i.slice(-1)?(i=i.replace(I,""),d()):f()}}(e.srcset,e)),e.cands},u.getEmValue=function(){var e;if(!c&&(e=r.body)){var t=r.createElement("div"),n=g.style.cssText,i=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",g.style.cssText=M,e.style.cssText=M,e.appendChild(t),c=t.offsetWidth,e.removeChild(t),c=parseFloat(c,10),g.style.cssText=n,e.style.cssText=i}return c||16},u.calcListLength=function(e){if(!(e in _)||y.uT){var t=u.calcLength(function(e){var t,n,i,s,r,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(n=function(e){var t,n="",i=[],s=[],r=0,a=0,c=!1;function o(){n&&(i.push(n),n="")}function l(){i[0]&&(s.push(i),i=[])}for(;;){if(""===(t=e.charAt(a)))return o(),l(),s;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if(Q(t)){if(e.charAt(a-1)&&Q(e.charAt(a-1))||!n){a+=1;continue}if(0===r){o(),a+=1;continue}t=" "}else if("("===t)r+=1;else if(")"===t)r-=1;else{if(","===t){o(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<i;t++)if(c=r=(s=n[t])[s.length-1],o.test(c)&&parseFloat(c)>=0||l.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=r,s.pop(),0===s.length)return a;if(s=s.join(" "),u.matchesMedia(s))return a}return"100vw"}(e));_[e]=t||B.width}return _[e]},u.setRes=function(e){var t;if(e)for(var n=0,i=(t=u.parseSet(e)).length;n<i;n++)ce(t[n],e.sizes);return t},u.setRes.res=ce,u.applySetCandidate=function(e,t){if(e.length){var n,i,s,r,a,c,o,l,d,f,p,m,h,A,g,v,z=t[u.ns],b=u.DPR;if(c=z.curSrc||t[E],o=z.curCan||function(e,t,n){var i;return!n&&t&&(n=(n=e[u.ns].sets)&&n[n.length-1]),(i=ue(t,n))&&(t=u.makeUrl(t),e[u.ns].curSrc=t,e[u.ns].curCan=i,i.res||ce(i,i.set.sizes)),i}(t,c,e[0].set),o&&o.set===e[0].set&&((d=C&&!t.complete&&o.res-.1>b)||(o.cached=!0,o.res>=b&&(a=o))),!a)for(e.sort(le),a=e[(r=e.length)-1],i=0;i<r;i++)if((n=e[i]).res>=b){a=e[s=i-1]&&(d||c!==u.makeUrl(n.url))&&(f=e[s].res,p=n.res,m=b,h=e[s].cached,A=void 0,g=void 0,v=void 0,"saveData"===y.algorithm?f>2.7?v=m+1:(g=(p-m)*(A=Math.pow(f-.6,1.5)),h&&(g+=.1*A),v=f+g):v=m>1?Math.sqrt(f*p):f,v>m)?e[s]:n;break}a&&(l=u.makeUrl(a.url),z.curSrc=l,z.curCan=a,l!==c&&u.setSrc(t,a),u.setSize(t))}},u.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},u.getSet=function(e){var t,n,i,s=!1,r=e[u.ns].sets;for(t=0;t<r.length&&!s;t++)if((n=r[t]).srcset&&u.matchesMedia(n.media)&&(i=u.supportsType(n.type))){"pending"===i&&(n=i),s=n;break}return s},u.parseSets=function(e,t,n){var i,s,r,c,l=t&&"PICTURE"===t.nodeName.toUpperCase(),d=e[u.ns];(d.src===a||n.src)&&(d.src=m.call(e,"src"),d.src?h.call(e,z,d.src):A.call(e,z)),(d.srcset===a||n.srcset||!u.supSrcset||e.srcset)&&(i=m.call(e,"srcset"),d.srcset=i,c=!0),d.sets=[],l&&(d.pic=!0,function(e,t){var n,i,s,r,a=e.getElementsByTagName("source");for(n=0,i=a.length;n<i;n++)(s=a[n])[u.ns]=!0,(r=s.getAttribute("srcset"))&&t.push({srcset:r,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,d.sets)),d.srcset?(s={srcset:d.srcset,sizes:m.call(e,"sizes")},d.sets.push(s),(r=(o||d.src)&&S.test(d.srcset||""))||!d.src||ue(d.src,s)||s.has1x||(s.srcset+=", "+d.src,s.cands.push({url:d.src,d:1,set:s}))):d.src&&d.sets.push({srcset:d.src,sizes:null}),d.curCan=null,d.curSrc=a,d.supported=!(l||s&&!u.supSrcset||r&&!u.supSizes),c&&u.supSrcset&&!d.supported&&(i?(h.call(e,b,i),e.srcset=""):A.call(e,b)),d.supported&&!d.srcset&&(!d.src&&e.src||e.src!==u.makeUrl(d.src))&&(null===d.src?e.removeAttribute("src"):e.src=d.src),d.parsed=!0},u.fillImg=function(e,t){var n,i=t.reselect||t.reevaluate;e[u.ns]||(e[u.ns]={}),n=e[u.ns],(i||n.evaled!==l)&&(n.parsed&&!t.reevaluate||u.parseSets(e,e.parentNode,t),n.supported?n.evaled=l:function(e){var t,n=u.getSet(e),i=!1;"pending"!==n&&(i=l,n&&(t=u.setRes(n),u.applySetCandidate(t,e))),e[u.ns].evaled=i}(e))},u.setupRun=function(){P&&!T&&k===s.devicePixelRatio||(T=!1,k=s.devicePixelRatio,R={},_={},u.DPR=k||1,B.width=Math.max(s.innerWidth||0,g.clientWidth),B.height=Math.max(s.innerHeight||0,g.clientHeight),B.vw=B.width/100,B.vh=B.height/100,l=[B.height,B.width,k].join("-"),B.em=u.getEmValue(),B.rem=B.em)},u.supPicture?(oe=f,u.fillImg=f):(ne=s.attachEvent?/d$|^c/:/d$|^c|^i/,ie=function(){var e=r.readyState||"";se=setTimeout(ie,"loading"===e?200:999),r.body&&(u.fillImgs(),(X=X||ne.test(e))&&clearTimeout(se))},se=setTimeout(ie,r.body?9:99),re=g.clientHeight,H(s,"resize",(Y=function(){T=Math.max(s.innerWidth||0,g.clientWidth)!==B.width||g.clientHeight!==re,re=g.clientHeight,T&&u.fillImgs()},99,te=function(){var e=new Date-ee;e<99?Z=setTimeout(te,99-e):(Z=null,Y())},function(){ee=new Date,Z||(Z=setTimeout(te,99))})),H(r,"readystatechange",ie)),u.picturefill=oe,u.fillImgs=oe,u.teardownRun=f,oe._=u,s.picturefillCFG={pf:u,push:function(e){var t=e.shift();"function"==typeof u[t]?u[t].apply(u,e):(y[t]=e[0],P&&u.fillImgs({reselect:!0}))}};for(;L&&L.length;)s.picturefillCFG.push(L.shift());s.picturefill=oe,"object"==typeof e.exports?e.exports=oe:(i=function(){return oe}.call(t,n,t,e))===a||(e.exports=i),u.supPicture||(v["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){v[e]=!1,oe()},n.onload=function(){v[e]=1===n.width,oe()},n.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==","pending"}("image/webp"))}(window,document)}}]);