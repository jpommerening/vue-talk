!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,i){for(var c,u,a=0,s=[];a<r.length;a++)u=r[a],o[u]&&s.push.apply(s,o[u]),o[u]=0;for(c in i)t[c]=i[c];for(n&&n(r,i);s.length;)s.shift().call(null,e)};var r={},o={0:0};return e.e=function(t,n){if(0===o[t])return n.call(null,e);if(void 0!==o[t])o[t].push(n);else{o[t]=[n];var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=e.p+""+t+"."+({1:"en",2:"de"}[t]||t)+".js",r.appendChild(i)}},e.m=t,e.c=r,e.p="dist/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=document.querySelector("#talk"),n=e.querySelector("section");t.forEach(function(t){return e.insertBefore(t,n)}),E=c.default.from(e,[(0,a.default)(),(0,l.default)("li, [data-bespoke-bullet]"),(0,p.default)(),(0,h.default)(),(0,y.default)(),(0,m.default)(),(0,x.default)({visible:!1}),(0,_.default)()]),E.slide(k)}var i=n(71),c=r(i),u=n(14),a=r(u),s=n(15),l=r(s),f=n(6),p=r(f),d=n(16),h=r(d),v=n(17),y=r(v),b=n(18),m=r(b),g=n(20),x=r(g),w=n(70),_=r(w),O=n(79),S=(r(O),n(13)),j=r(S),E=void 0,k=0;(0,j.default)("de",o)},function(t,e){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},function(t,e){"use strict";t.exports=function(t){if(null==t)throw new TypeError("Cannot use null or undefined");return t}},function(t,e,n){"use strict";var r=n(53),o=Math.max;t.exports=function(t){return o(0,r(t))}},function(t,e,n){"use strict";t.exports=n(55)()?Object.assign:n(56)},,function(t,e){t.exports=function(){return function(t){var e=function(t,e){t.classList.add("bespoke-"+e)},n=function(t,e){t.className=t.className.replace(new RegExp("bespoke-"+e+"(\\s|$)","g")," ").trim()},r=function(r,o){var i=t.slides[t.slide()],c=o-t.slide(),u=c>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,r)),r!==i&&["inactive",u,u+"-"+Math.abs(c)].map(e.bind(null,r))};e(t.parent,"parent"),t.slides.map(function(t){e(t,"slide")}),t.on("activate",function(o){t.slides.map(r),e(o.slide,"active"),n(o.slide,"inactive")})}}},function(t,e,n){"use strict";var r,o=n(4),i=n(10),c=n(9),u=n(11);r=t.exports=function(t,e){var n,r,c,a,s;return arguments.length<2||"string"!=typeof t?(a=e,e=t,t=null):a=arguments[2],null==t?(n=c=!0,r=!1):(n=u.call(t,"c"),r=u.call(t,"e"),c=u.call(t,"w")),s={value:e,configurable:n,enumerable:r,writable:c},a?o(i(a),s):s},r.gs=function(t,e,n){var r,a,s,l;return"string"!=typeof t?(s=n,n=e,e=t,t=null):s=arguments[3],null==e?e=void 0:c(e)?null==n?n=void 0:c(n)||(s=n,n=void 0):(s=e,e=n=void 0),null==t?(r=!0,a=!1):(r=u.call(t,"c"),a=u.call(t,"e")),l={get:e,set:n,configurable:r,enumerable:a},s?o(i(s),l):l}},function(t,e,n){"use strict";t.exports=n(54)("forEach")},function(t,e){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e){"use strict";var n=Array.prototype.forEach,r=Object.create,o=function(t,e){var n;for(n in t)e[n]=t[n]};t.exports=function(t){var e=r(null);return n.call(arguments,function(t){null!=t&&o(Object(t),e)}),e}},function(t,e,n){"use strict";t.exports=n(64)()?String.prototype.contains:n(65)},function(t,e,n){t.exports=function(t){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t;var n=document.getElementsByTagName("head")[0];n.appendChild(e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return s[t](e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(72),c=r(i),u=n(73),a=r(u),s={de:c.default,en:a.default}},function(t,e){t.exports=function(){return function(t){function e(e){var n=e.getAttribute("data-bespoke-backdrop");if(n){var r=document.createElement("div");return r.className=n,r.classList.add("bespoke-backdrop"),t.parent.appendChild(r),r}}function n(e){if(e){var n=i.indexOf(e),c=t.slide();r(e,"active"),r(e,"inactive"),r(e,"before"),r(e,"after"),n!==c?(o(e,"inactive"),o(e,n<c?"before":"after")):o(e,"active")}}function r(t,e){t.classList.remove("bespoke-backdrop-"+e)}function o(t,e){t.classList.add("bespoke-backdrop-"+e)}var i;i=t.slides.map(e),t.on("activate",function(){i.forEach(n)})}}},function(t,e){t.exports=function(t){return function(e){var n,r,o=e.slides.map(function(e){return[].slice.call(e.querySelectorAll("string"==typeof t?t:"[data-bespoke-bullet]"),0)}),i=function(){var t=n+1;return a(1)?(u(n,r+1),!1):void(o[t]&&u(t,0))},c=function(){var t=n-1;return a(-1)?(u(n,r-1),!1):void(o[t]&&u(t,o[t].length-1))},u=function(t,e){n=t,r=e,o.forEach(function(n,r){n.forEach(function(n,o){n.classList.add("bespoke-bullet"),r<t||r===t&&o<=e?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),r===t&&o===e?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},a=function(t){return void 0!==o[n][r+t]};e.on("next",i),e.on("prev",c),e.on("slide",function(t){u(t.index,0)}),u(0,0)}}},function(t,e){t.exports=function(){return function(t){var e=70,n=122,r="keydown",o=function(){var t,e;e=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?(t=document).exitFullscreen||t.webkitExitFullscreen||t.mozCancelFullScreen||t.msExitFullscreen:(t=document.documentElement).requestFullscreen||t.webkitRequestFullscreen||t.mozRequestFullScreen||t.msRequestFullscreen,e.apply(t)},i=function(t){return!!(t.ctrlKey||t.shiftKey||t.altKey||t.metaKey)},c=function(t){var r=t.which;r!==e&&r!==n||i(t)||(o(),r===n&&t.preventDefault())};(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&(t.on("destroy",function(){document.removeEventListener(r,c)}),t.on("fullscreen.toggle",o),document.addEventListener(r,c))}}},function(t,e){t.exports=function(){return function(t){var e=function(){var e=window.location.hash.slice(1),r=parseInt(e,10);e&&(r?n(r-1):t.slides.forEach(function(t,r){t.getAttribute("data-bespoke-hash")===e&&n(r)}))},n=function(e){var n=-1<e&&e<t.slides.length?e:0;n!==t.slide()&&t.slide(n)};setTimeout(function(){e(),t.on("activate",function(t){var e=t.slide.getAttribute("data-bespoke-hash");window.location.hash=e||t.index+1}),window.addEventListener("hashchange",e)},0)}}},function(t,e){t.exports=function(t){return function(e){var n="vertical"!==t;document.addEventListener("keydown",function(t){(34==t.which||32==t.which&&!t.shiftKey||n&&39==t.which||!n&&40==t.which)&&e.next(),(33==t.which||32==t.which&&t.shiftKey||n&&37==t.which||!n&&38==t.which)&&e.prev()})}}},function(t,e,n){"use strict";var r,o=n(62),i=n(68),c=n(69),u=n(23),a=n(6),s=o("input","select","textarea"),l=/^matrix\(([\d\.]+),/,f=function(t){var e;return location.search?(e=i(location.search.slice(1))[t],null==e?null:!e||Boolean(Number(e))):null},p=function(){var t=document.createEvent("HTMLEvents");t.initEvent("resize",!0,!0),window.dispatchEvent(t)},d=function(t){var e,n=Number(window.getComputedStyle(t).zoom)||1;return 1!==n?n:(e=window.getComputedStyle(t.parentNode).transform.match(l),e?Number(e[1])||1:1)},h=function(){var t,e,n,o,i=window.innerWidth,c=document.querySelector(".bespoke-active");if(c){if(t=d(c),t===r)return;r=t,e=c.offsetWidth*t,i&&e&&(n=(i/2/e).toFixed(3),o="scale("+n+") translateX(-50%)",u.call(document,{"body.notes .bespoke-slide":{"-webkit-transform":o,transform:o}}))}};t.exports=function(){var t=Object(arguments[1]),e=Boolean(t.visible),n=t.key||78,r="notes";return t.queryToken===!1?r=null:t.queryToken&&t.queryToken!==!0&&(r=t.queryToken),function(t){var o,u,l;t.parent.classList.contains("bespoke-parent")||a()(t),r&&(l=f(r),null!=l&&(e=l),window.addEventListener("popstate",function(){o(Boolean(f(r)))})),o=function(t){var e,n,o;u!==t&&(u=t,t?document.body.classList.add("notes"):document.body.classList.remove("notes"),r&&(o=location.pathname,e=location.search?i(location.search.slice(1)):{},t?e[r]=null:delete e[r],n=c(e),n&&(o+="?"+n.replace(/(?:=&)/g,"&").replace(/\=$/,"")),location.hash&&(o+=location.hash),history.pushState({},"",o),p()))},document.addEventListener("keydown",function(t){t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.which===n&&(s[t.target.nodeName.toLowerCase()]||(t.preventDefault(),o(!u)))},!1),o(e),setInterval(h,200)}}},function(t,e,n){"use strict";n(78),t.exports=n(19)},function(t,e){"use strict";t.exports=function(t){return t&&9===t.nodeType&&"#document"===t.nodeName||!1}},function(t,e){"use strict";t.exports=function(t){return t&&1===t.nodeType&&"string"==typeof t.nodeName||!1}},function(t,e,n){"use strict";var r,o,i=n(8),c=n(57),u=n(63),a=n(33),s=n(25);r=a(function(t){var e=t.head.appendChild(t.createElement("style"));return e.setAttribute("type","text/css"),e},{normalizer:n(32)()}),o=function(t){var e=[];return i(t,function(t,n){e.push(n+" {"),i(t,function(t,n){e.push("\t"+u.call(n)+": "+t+";")}),e.push("}")}),e.join("\n")},t.exports=function(t){s(this),c(t)&&(t=o(t)),r(this).appendChild(this.createTextNode(t+"\n"))}},function(t,e,n){"use strict";var r=n(21),o=n(22);t.exports=function(t){return r(t)&&o(t.head)}},function(t,e,n){"use strict";var r=n(24);t.exports=function(t){if(!r(t))throw new TypeError(t+" is not a HTMLDocument");return t}},function(t,e,n){"use strict";var r=n(39),o=n(40),i=n(7),c=n(31).methods,u=n(30),a=n(29),s=Function.prototype.apply,l=Function.prototype.call,f=Object.create,p=Object.prototype.hasOwnProperty,d=Object.defineProperties,h=c.on,v=c.emit;t.exports=function(t,e,n){var c,y,b,m,g,x,w,_,O,S,j,E,k,A=f(null);return y=e!==!1?e:isNaN(t.length)?1:t.length,n.normalizer&&(_=a(n.normalizer),b=_.get,m=_.set,g=_.delete,x=_.clear),null!=n.resolvers&&(k=u(n.resolvers)),E=b?o(function(e){var n,o,i=arguments;if(k&&(i=k(i)),n=b(i),null!==n&&p.call(A,n))return O&&c.emit("get",n,i,this),A[n];if(o=1===i.length?l.call(t,this,i[0]):s.call(t,this,i),null===n){if(n=b(i),null!==n)throw r("Circular invocation","CIRCULAR_INVOCATION");n=m(i)}else if(p.call(A,n))throw r("Circular invocation","CIRCULAR_INVOCATION");return A[n]=o,S&&c.emit("set",n),o},y):0===e?function(){var e;if(p.call(A,"data"))return O&&c.emit("get","data",arguments,this),A.data;if(e=arguments.length?s.call(t,this,arguments):l.call(t,this),p.call(A,"data"))throw r("Circular invocation","CIRCULAR_INVOCATION");return A.data=e,S&&c.emit("set","data"),e}:function(e){var n,o,i=arguments;if(k&&(i=k(arguments)),o=String(i[0]),p.call(A,o))return O&&c.emit("get",o,i,this),A[o];if(n=1===i.length?l.call(t,this,i[0]):s.call(t,this,i),p.call(A,o))throw r("Circular invocation","CIRCULAR_INVOCATION");return A[o]=n,S&&c.emit("set",o),n},c={original:t,memoized:E,get:function(t){return k&&(t=k(t)),b?b(t):String(t[0])},has:function(t){return p.call(A,t)},delete:function(t){var e;p.call(A,t)&&(g&&g(t),e=A[t],delete A[t],j&&c.emit("delete",t,e))},clear:function(){var t=A;x&&x(),A=f(null),c.emit("clear",t)},on:function(t,e){return"get"===t?O=!0:"set"===t?S=!0:"delete"===t&&(j=!0),h.call(this,t,e)},emit:v,updateEnv:function(){t=c.original}},w=b?o(function(t){var e,n=arguments;k&&(n=k(n)),e=b(n),null!==e&&c.delete(e)},y):0===e?function(){return c.delete("data")}:function(t){return k&&(t=k(arguments)[0]),c.delete(t)},d(E,{__memoized__:i(!0),delete:i(w),clear:i(c.clear)}),c}},function(t,e){"use strict"},function(t,e,n){"use strict";var r=n(3);t.exports=function(t,e,n){var o;return isNaN(t)?(o=e,o>=0?n&&o?o-1:o:1):t!==!1&&r(t)}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){var e;return"function"==typeof t?{set:t,get:t}:(e={get:r(t.get)},void 0!==t.set?(e.set=r(t.set),e.delete=r(t.delete),e.clear=r(t.clear),e):(e.set=e.get,e))}},function(t,e,n){"use strict";var r,o=n(38),i=n(1),c=Array.prototype.slice;r=function(t){return this.map(function(e,n){return e?e(t[n]):t[n]}).concat(c.call(t,this.length))},t.exports=function(t){return t=o(t),t.forEach(function(t){null!=t&&i(t)}),r.bind(t)}},function(t,e,n){"use strict";var r,o,i,c,u,a,s,l=n(7),f=n(1),p=Function.prototype.apply,d=Function.prototype.call,h=Object.create,v=Object.defineProperty,y=Object.defineProperties,b=Object.prototype.hasOwnProperty,m={configurable:!0,enumerable:!1,writable:!0};r=function(t,e){var n;return f(e),b.call(this,"__ee__")?n=this.__ee__:(n=m.value=h(null),v(this,"__ee__",m),m.value=null),n[t]?"object"==typeof n[t]?n[t].push(e):n[t]=[n[t],e]:n[t]=e,this},o=function(t,e){var n,o;return f(e),o=this,r.call(this,t,n=function(){i.call(o,t,n),p.call(e,this,arguments)}),n.__eeOnceListener__=e,this},i=function(t,e){var n,r,o,i;if(f(e),!b.call(this,"__ee__"))return this;if(n=this.__ee__,!n[t])return this;if(r=n[t],"object"==typeof r)for(i=0;o=r[i];++i)o!==e&&o.__eeOnceListener__!==e||(2===r.length?n[t]=r[i?0:1]:r.splice(i,1));else r!==e&&r.__eeOnceListener__!==e||delete n[t];return this},c=function(t){var e,n,r,o,i;if(b.call(this,"__ee__")&&(o=this.__ee__[t]))if("object"==typeof o){for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];for(o=o.slice(),e=0;r=o[e];++e)p.call(r,this,i)}else switch(arguments.length){case 1:d.call(o,this);break;case 2:d.call(o,this,arguments[1]);break;case 3:d.call(o,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),e=1;e<n;++e)i[e-1]=arguments[e];p.call(o,this,i)}},u={on:r,once:o,off:i,emit:c},a={on:l(r),once:l(o),off:l(i),emit:l(c)},s=y({},a),t.exports=e=function(t){return null==t?h(s):y(Object(t),a)},e.methods=u},function(t,e,n){"use strict";var r=n(34);t.exports=function(){var t=0,e=[],n=[];return{get:function(t){var o=r.call(e,t[0]);return o===-1?null:n[o]},set:function(r){return e.push(r[0]),n.push(++t),t},delete:function(t){var o=r.call(n,t);o!==-1&&(e.splice(o,1),n.splice(o,1))},clear:function(){e=[],n=[]}}}},function(t,e,n){"use strict";var r=n(1),o=n(8),i=n(27),c=n(26),u=n(28),a=Object.prototype.hasOwnProperty;t.exports=function t(e){var n,s,l;return r(e),n=Object(arguments[1]),a.call(e,"__memoized__")&&!n.force?e:(s=u(n.length,e.length,n.async&&i.async),l=c(e,s,n),o(i,function(t,e){n[e]&&t(n[e],l,n)}),t.__profiler__&&t.__profiler__(l),l.updateEnv(),l.memoized)}},function(t,e,n){"use strict";var r=n(3),o=n(2),i=Array.prototype.indexOf,c=Object.prototype.hasOwnProperty,u=Math.abs,a=Math.floor;t.exports=function(t){var e,n,s,l;if(t===t)return i.apply(this,arguments);for(n=r(o(this).length),s=arguments[1],s=isNaN(s)?0:s>=0?a(s):r(this.length)-a(u(s)),e=s;e<n;++e)if(c.call(this,e)&&(l=this[e],l!==l))return e;return-1}},function(t,e,n){"use strict";t.exports=n(36)()?Array.from:n(37)},function(t,e){"use strict";t.exports=function(){var t,e,n=Array.from;return"function"==typeof n&&(t=["raz","dwa"],e=n(t),Boolean(e&&e!==t&&"dwa"===e[1]))}},function(t,e,n){"use strict";var r=n(47).iterator,o=n(41),i=n(42),c=n(3),u=n(1),a=n(2),s=n(66),l=Array.isArray,f=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},d=Object.defineProperty;t.exports=function(t){var e,n,h,v,y,b,m,g,x,w,_=arguments[1],O=arguments[2];if(t=Object(a(t)),null!=_&&u(_),this&&this!==Array&&i(this))e=this;else{if(!_){if(o(t))return y=t.length,1!==y?Array.apply(null,t):(v=new Array(1),v[0]=t[0],v);if(l(t)){for(v=new Array(y=t.length),n=0;n<y;++n)v[n]=t[n];return v}}v=[]}if(!l(t))if(void 0!==(x=t[r])){for(m=u(x).call(t),e&&(v=new e),g=m.next(),n=0;!g.done;)w=_?f.call(_,O,g.value,n):g.value,e?(p.value=w,d(v,n,p)):v[n]=w,g=m.next(),++n;y=n}else if(s(t)){for(y=t.length,e&&(v=new e),n=0,h=0;n<y;++n)w=t[n],n+1<y&&(b=w.charCodeAt(0),b>=55296&&b<=56319&&(w+=t[++n])),w=_?f.call(_,O,w,h):w,e?(p.value=w,d(v,h,p)):v[h]=w,++h;y=h}if(void 0===y)for(y=c(t.length),e&&(v=new e(y)),n=0;n<y;++n)w=_?f.call(_,O,t[n],n):t[n],e?(p.value=w,d(v,n,p)):v[n]=w;return e&&(p.value=null,v.length=y),v}},function(t,e,n){"use strict";var r=n(35),o=Array.isArray;t.exports=function(t){return o(t)?t:r(t)}},function(t,e,n){"use strict";var r=n(4),o=Error.captureStackTrace;e=t.exports=function(t){var n=new Error,i=arguments[1],c=arguments[2];return null==c&&i&&"object"==typeof i&&(c=i,i=null),null!=c&&r(n,c),n.message=String(t),null!=i&&(n.code=String(i)),o&&o(n,e),n}},function(t,e,n){"use strict";var r,o,i,c,u=n(3),a=function(t,e){};try{Object.defineProperty(a,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(t){}1===a.length?(r={configurable:!0,writable:!1,enumerable:!1},o=Object.defineProperty,t.exports=function(t,e){return e=u(e),t.length===e?t:(r.value=e,o(t,"length",r))}):(c=n(61),i=function(){var t=[];return function(e){var n,r=0;if(t[e])return t[e];for(n=[];e--;)n.push("a"+(++r).toString(36));return new Function("fn","return function ("+n.join(", ")+") { return fn.apply(this, arguments); };")}}(),t.exports=function(t,e){var n;if(e=u(e),t.length===e)return t;n=i(e)(t);try{c(n,t)}catch(t){}return n})},function(t,e){"use strict";var n=Object.prototype.toString,r=n.call(function(){return arguments}());t.exports=function(t){return n.call(t)===r}},function(t,e,n){"use strict";var r=Object.prototype.toString,o=r.call(n(43));t.exports=function(t){return"function"==typeof t&&r.call(t)===o}},function(t,e){"use strict";t.exports=function(){}},function(t,e,n){"use strict";t.exports=n(45)()?Math.sign:n(46)},function(t,e){"use strict";t.exports=function(){var t=Math.sign;return"function"==typeof t&&(1===t(10)&&t(-20)===-1)}},function(t,e){"use strict";t.exports=function(t){return t=Number(t),isNaN(t)||0===t?t:t>0?1:-1}},function(t,e,n){"use strict";t.exports=n(48)()?Symbol:n(51)},function(t,e){"use strict";var n={object:!0,symbol:!0};t.exports=function(){var t;if("function"!=typeof Symbol)return!1;t=Symbol("test symbol");try{String(t)}catch(t){return!1}return!!n[typeof Symbol.iterator]&&(!!n[typeof Symbol.toPrimitive]&&!!n[typeof Symbol.toStringTag])}},function(t,e){"use strict";t.exports=function(t){return!!t&&("symbol"==typeof t||!!t.constructor&&("Symbol"===t.constructor.name&&"Symbol"===t[t.constructor.toStringTag]))}},function(t,e,n){"use strict";var r,o=n(4),i=n(10),c=n(9),u=n(11);r=t.exports=function(t,e){var n,r,c,a,s;return arguments.length<2||"string"!=typeof t?(a=e,e=t,t=null):a=arguments[2],null==t?(n=c=!0,r=!1):(n=u.call(t,"c"),r=u.call(t,"e"),c=u.call(t,"w")),s={value:e,configurable:n,enumerable:r,writable:c},a?o(i(a),s):s},r.gs=function(t,e,n){var r,a,s,l;return"string"!=typeof t?(s=n,n=e,e=t,t=null):s=arguments[3],null==e?e=void 0:c(e)?null==n?n=void 0:c(n)||(s=n,n=void 0):(s=e,e=n=void 0),null==t?(r=!0,a=!1):(r=u.call(t,"c"),a=u.call(t,"e")),l={get:e,set:n,configurable:r,enumerable:a},s?o(i(s),l):l}},function(t,e,n){"use strict";var r,o,i,c,u=n(50),a=n(52),s=Object.create,l=Object.defineProperties,f=Object.defineProperty,p=Object.prototype,d=s(null);if("function"==typeof Symbol){r=Symbol;try{String(r()),c=!0}catch(t){}}var h=function(){var t=s(null);return function(e){for(var n,r,o=0;t[e+(o||"")];)++o;return e+=o||"",t[e]=!0,n="@@"+e,f(p,n,u.gs(null,function(t){r||(r=!0,f(this,n,u(t)),r=!1)})),n}}();i=function(t){if(this instanceof i)throw new TypeError("TypeError: Symbol is not a constructor");return o(t)},t.exports=o=function t(e){var n;if(this instanceof t)throw new TypeError("TypeError: Symbol is not a constructor");return c?r(e):(n=s(i.prototype),e=void 0===e?"":String(e),l(n,{__description__:u("",e),__name__:u("",h(e))}))},l(o,{for:u(function(t){return d[t]?d[t]:d[t]=o(String(t))}),keyFor:u(function(t){var e;a(t);for(e in d)if(d[e]===t)return e}),hasInstance:u("",r&&r.hasInstance||o("hasInstance")),isConcatSpreadable:u("",r&&r.isConcatSpreadable||o("isConcatSpreadable")),iterator:u("",r&&r.iterator||o("iterator")),match:u("",r&&r.match||o("match")),replace:u("",r&&r.replace||o("replace")),search:u("",r&&r.search||o("search")),species:u("",r&&r.species||o("species")),split:u("",r&&r.split||o("split")),toPrimitive:u("",r&&r.toPrimitive||o("toPrimitive")),toStringTag:u("",r&&r.toStringTag||o("toStringTag")),unscopables:u("",r&&r.unscopables||o("unscopables"))}),l(i.prototype,{constructor:u(o),toString:u("",function(){return this.__name__})}),l(o.prototype,{toString:u(function(){return"Symbol ("+a(this).__description__+")"}),valueOf:u(function(){return a(this)})}),f(o.prototype,o.toPrimitive,u("",function(){var t=a(this);return"symbol"==typeof t?t:t.toString()})),f(o.prototype,o.toStringTag,u("c","Symbol")),f(i.prototype,o.toStringTag,u("c",o.prototype[o.toStringTag])),f(i.prototype,o.toPrimitive,u("c",o.prototype[o.toPrimitive]))},function(t,e,n){"use strict";var r=n(49);t.exports=function(t){if(!r(t))throw new TypeError(t+" is not a symbol");return t}},function(t,e,n){"use strict";var r=n(44),o=Math.abs,i=Math.floor;t.exports=function(t){return isNaN(t)?0:(t=Number(t),0!==t&&isFinite(t)?r(t)*i(o(t)):t)}},function(t,e,n){"use strict";var r=n(1),o=n(2),i=Function.prototype.bind,c=Function.prototype.call,u=Object.keys,a=Object.prototype.propertyIsEnumerable;t.exports=function(t,e){return function(n,s){var l,f=arguments[2],p=arguments[3];return n=Object(o(n)),r(s),l=u(n),p&&l.sort("function"==typeof p?i.call(p,n):void 0),"function"!=typeof t&&(t=l[t]),c.call(t,l,function(t,r){return a.call(n,t)?c.call(s,f,n[t],t,n,r):e})}}},function(t,e){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(t={foo:"raz"},e(t,{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,n){"use strict";var r=n(58),o=n(2),i=Math.max;t.exports=function(t,e){var n,c,u,a=i(arguments.length,2);for(t=Object(o(t)),u=function(r){try{t[r]=e[r]}catch(t){n||(n=t)}},c=1;c<a;++c)e=arguments[c],r(e).forEach(u);if(void 0!==n)throw n;return t}},function(t,e){"use strict";var n=Object.getPrototypeOf,r=Object.prototype,o=r.toString,i=Object().toString();t.exports=function(t){var e,c;return!(!t||"object"!=typeof t||o.call(t)!==i)&&(e=n(t),null===e?(c=t.constructor,"function"!=typeof c||c.prototype!==t):e===r||null===n(e))}},function(t,e,n){"use strict";t.exports=n(59)()?Object.keys:n(60)},function(t,e){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e){"use strict";var n=Object.keys;t.exports=function(t){return n(null==t?t:Object(t))}},function(t,e,n){"use strict";var r=n(2),o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols;t.exports=function(t,e){var n,a=Object(r(e));if(t=Object(r(t)),c(a).forEach(function(r){try{o(t,r,i(e,r))}catch(t){n=t}}),"function"==typeof u&&u(a).forEach(function(r){try{o(t,r,i(e,r))}catch(t){n=t}}),void 0!==n)throw n;return t}},function(t,e){"use strict";var n=Array.prototype.forEach,r=Object.create;t.exports=function(t){var e=r(null);return n.call(arguments,function(t){e[t]=!0}),e}},function(t,e){"use strict";var n=String.prototype.replace,r=/([A-Z])/g;t.exports=function(){var t=n.call(this,r,"-$1").toLowerCase();return"-"===t[0]&&(t=t.slice(1)),t}},function(t,e){"use strict";var n="razdwatrzy";t.exports=function(){return"function"==typeof n.contains&&(n.contains("dwa")===!0&&n.contains("foo")===!1)}},function(t,e){"use strict";var n=String.prototype.indexOf;t.exports=function(t){return n.call(this,t,arguments[1])>-1}},function(t,e){"use strict";var n=Object.prototype.toString,r=n.call("");t.exports=function(t){return"string"==typeof t||t&&"object"==typeof t&&(t instanceof String||n.call(t)===r)||!1}},function(t,e){"use strict";var n=function(t){return t.charCodeAt(0)};t.exports=function(t){var e,r,o,i,c,u,a=new Array(t.length),s="CHAR";for(i=0,c=0;i<=t.length;i++)switch(u=t.charCodeAt(i),s){case"CHAR":switch(u){case n("%"):e=0,r=0,s="HEX0";break;default:a[c++]=u}break;case"HEX0":if(s="HEX1",o=u,n("0")<=u&&u<=n("9"))e=u-n("0");else if(n("a")<=u&&u<=n("f"))e=u-n("a")+10;else{if(!(n("A")<=u&&u<=n("F"))){a[c++]=n("%"),a[c++]=u,s="CHAR";break}e=u-n("A")+10}break;case"HEX1":if(s="CHAR",n("0")<=u&&u<=n("9"))r=u-n("0");else if(n("a")<=u&&u<=n("f"))r=u-n("a")+10;else{if(!(n("A")<=u&&u<=n("F"))){a[c++]=n("%"),a[c++]=o,a[c++]=u;break}r=u-n("A")+10}a[c++]=16*e+r}return a.slice(0,c-1)}},function(t,e,n){"use strict";var r=n(67),o=Array.isArray,i=Object.prototype.hasOwnProperty,c=Object.create,u=String.fromCharCode,a=/\+/g,s=function(t){try{return decodeURIComponent(t)}catch(e){return u.apply(null,r(t))}};t.exports=function(t){var e,n,r,u,l,f,p,d=arguments[1]||"&",h=arguments[2]||"=",v=arguments[3],y=c(null);if(null==t)return y;if(t=String(t),0===t.length)return y;t=t.split(d);var b=1e3;v&&!isNaN(v.maxKeys)&&(b=Number(v.maxKeys));var m=t.length;for(b>0&&m>b&&(m=b),e=0;e<m;++e)n=t[e].replace(a,"%20"),r=n.indexOf(h),r>=0?(u=n.substr(0,r),l=n.substr(r+1)):(u=n,l=""),f=s(u),p=s(l),i.call(y,f)?o(y[f])?y[f].push(p):y[f]=[y[f],p]:y[f]=p;return y}},function(t,e){"use strict";var n=Array.isArray,r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t){var e=arguments[1]||"&",o=arguments[2]||"=";if(!t||"function"!=typeof t&&"object"!=typeof t)throw new TypeError(t+" is not an object");var i,c,u,a,s,l=Object.keys(t),f=[];for(i=0;i<l.length;i++)if(c=l[i],u=t[c],a=encodeURIComponent(c)+o,n(u))for(s=0;s<u.length;s++)f.push(a+encodeURIComponent(r(u[s])));else f.push(a+encodeURIComponent(r(u)));return f.join(e)}},function(t,e){t.exports=function(t){return function(e){var n,r,o="vertical"==t?"Y":"X";e.parent.addEventListener("touchstart",function(t){1==t.touches.length&&(n=t.touches[0]["page"+o],r=0)}),e.parent.addEventListener("touchmove",function(t){1==t.touches.length&&(t.preventDefault(),r=t.touches[0]["page"+o]-n)}),e.parent.addEventListener("touchend",function(){Math.abs(r)>50&&e[r>0?"prev":"next"]()})}}},function(t,e){var n=function(t,e){var n=1===(t.parent||t).nodeType?t.parent||t:document.querySelector(t.parent||t),r=[].filter.call("string"==typeof t.slides?n.querySelectorAll(t.slides):t.slides||n.children,function(t){return"SCRIPT"!==t.nodeName}),o=r[0],i={},c=function(t,e){r[t]&&(f("deactivate",p(o,e)),o=r[t],f("activate",p(o,e)))},u=function(t,e){return arguments.length?void(f("slide",p(r[t],e))&&c(t,e)):r.indexOf(o)},a=function(t,e){var n=r.indexOf(o)+t;f(t>0?"next":"prev",p(o,e))&&c(n,e)},s=function(t,e){return(i[t]||(i[t]=[])).push(e),l.bind(null,t,e)},l=function(t,e){i[t]=(i[t]||[]).filter(function(t){return t!==e})},f=function(t,e){return(i[t]||[]).reduce(function(t,n){return t&&n(e)!==!1},!0)},p=function(t,e){return e=e||{},e.index=r.indexOf(t),e.slide=t,e},d={on:s,off:l,fire:f,slide:u,next:a.bind(null,1),prev:a.bind(null,-1),parent:n,slides:r};return(e||[]).forEach(function(t){t(d)}),c(0),d};t.exports={from:n}},function(t,e,n){t.exports=function(t){n.e(2,function(e){t(n(80))})}},function(t,e,n){t.exports=function(t){n.e(1,function(e){t(n(81))})}},function(t,e,n){t.exports=n.p+"assets/362481-style.css"},function(t,e,n){t.exports=n.p+"assets/d341d7-main.css"},,,function(t,e,n){n(12)(n(74))},function(t,e,n){n(12)(n(75))}]);
//# sourceMappingURL=main.js.map