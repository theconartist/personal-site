(function b(c,d,e){function a(h,i){if(!d[h]){if(!c[h]){var j="function"==typeof require&&require;if(!i&&j)return j(h,!0);if(g)return g(h,!0);var k=new Error("Cannot find module '"+h+"'");throw k.code="MODULE_NOT_FOUND",k}var f=d[h]={exports:{}};c[h][0].call(f.exports,function(b){var d=c[h][1][b];return a(d?d:b)},f,f.exports,b,c,d,e)}return d[h].exports}for(var g="function"==typeof require&&require,f=0;f<e.length;f++)a(e[f]);return a})({1:[function(a,b,c){var q=Math.min,z=Math.max;!function(a,d){"object"==typeof c&&"object"==typeof b?b.exports=d():"function"==typeof define&&define.amd?define([],d):"object"==typeof c?c.AOS=d():a.AOS=d()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="dist/",b(0)}([function(q,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}var o=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},i=t(1),r=(n(i),t(6)),a=n(r),u=t(7),c=n(u),f=t(8),s=n(f),d=t(9),l=n(d),p=t(10),m=n(p),b=t(11),v=n(b),y=t(14),g=n(y),h=[],w=!1,k=document.all&&!window.atob,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},j=function(){var a=0<arguments.length&&void 0!==arguments[0]&&arguments[0];if(a&&(w=!0),w)return h=(0,v.default)(h,x),(0,m.default)(h,x.once),h},z=function(){h=(0,g.default)(),j()},A=function(){h.forEach(function(a){a.node.removeAttribute("data-aos"),a.node.removeAttribute("data-aos-easing"),a.node.removeAttribute("data-aos-duration"),a.node.removeAttribute("data-aos-delay")})},B=function(a){return!0===a||"mobile"===a&&l.default.mobile()||"phone"===a&&l.default.phone()||"tablet"===a&&l.default.tablet()||"function"==typeof a&&!0===a()};q.exports={init:function(b){return x=o(x,b),h=(0,g.default)(),B(x.disable)||k?A():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&-1<["complete","interactive"].indexOf(document.readyState)?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,c.default)(j,50,!0)),window.addEventListener("orientationchange",(0,c.default)(j,50,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,m.default)(h,x.once)},99)),document.addEventListener("DOMNodeRemoved",function(a){var b=a.target;b&&1===b.nodeType&&b.hasAttribute&&b.hasAttribute("data-aos")&&(0,c.default)(z,50,!0)}),(0,s.default)("[data-aos]",z),h)},refresh:j,refreshHard:z}},function(){},,,,,function(A,a){(function(e){"use strict";function B(f,l,i){function p(a){var c=m,d=b;return m=b=void 0,w=a,v=f.apply(d,c)}function o(a){return w=a,g=setTimeout(c,l),k?p(a):v}function q(a){var b=a-h,c=a-w,d=l-b;return t?x(d,s-c):d}function a(a){var b=a-h,c=a-w;return void 0===h||b>=l||0>b||t&&c>=s}function c(){var b=j();return a(b)?r(b):void(g=setTimeout(c,q(b)))}function r(a){return g=void 0,y&&m?p(a):(m=b=void 0,v)}function d(){var d=j(),e=a(d);if(m=arguments,b=this,h=d,e){if(void 0===g)return o(h);if(t)return g=setTimeout(c,l),p(h)}return void 0===g&&(g=setTimeout(c,l)),v}var m,b,s,v,g,h,w=0,k=!1,t=!1,y=!0;if("function"!=typeof f)throw new TypeError(u);return l=D(l)||0,C(i)&&(k=!!i.leading,t="maxWait"in i,s=t?F(D(i.maxWait)||0,l):s,y="trailing"in i?!!i.trailing:y),d.cancel=function(){void 0!==g&&clearTimeout(g),w=0,m=h=b=g=void 0},d.flush=function(){return void 0===g?v:r(j())},d}function n(b,c,d){var f=!0,g=!0;if("function"!=typeof b)throw new TypeError(u);return C(d)&&(f="leading"in d?!!d.leading:f,g="trailing"in d?!!d.trailing:g),B(b,c,{leading:f,maxWait:c,trailing:g})}function C(b){var c="undefined"==typeof b?"undefined":a(b);return!!b&&("object"==c||"function"==c)}function i(b){return!!b&&"object"==("undefined"==typeof b?"undefined":a(b))}function o(b){return"symbol"==("undefined"==typeof b?"undefined":a(b))||i(b)&&v.call(b)==f}function D(a){if("number"==typeof a)return a;if(o(a))return c;if(C(a)){var f="function"==typeof a.valueOf?a.valueOf():a;a=C(f)?f+"":f}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(d,"");var g=p.test(a);return g||m.test(a)?b(a.slice(2),g?2:8):l.test(a)?c:+a}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u="Expected a function",c=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,r="object"==("undefined"==typeof e?"undefined":a(e))&&e&&e.Object===Object&&e,s="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,g=r||s||Function("return this")(),h=Object.prototype,v=h.toString,F=z,x=q,j=function(){return g.Date.now()};A.exports=n}).call(a,function(){return this}())},function(A,a){(function(e){"use strict";function B(a,c,j){function l(c){var d=m,e=b;return m=b=void 0,v=c,u=a.apply(e,d)}function i(a){return v=a,g=setTimeout(f,c),t?l(a):u}function p(a){var b=a-h,d=a-v,e=c-b;return w?k(e,s-d):e}function q(a){var b=a-h,d=a-v;return void 0===h||b>=c||0>b||w&&d>=s}function f(){var a=x();return q(a)?r(a):void(g=setTimeout(f,p(a)))}function r(a){return g=void 0,y&&m?l(a):(m=b=void 0,u)}function d(){var a=x(),d=q(a);if(m=arguments,b=this,h=a,d){if(void 0===g)return i(h);if(w)return g=setTimeout(f,c),l(h)}return void 0===g&&(g=setTimeout(f,c)),u}var m,b,s,u,g,h,v=0,t=!1,w=!1,y=!0;if("function"!=typeof a)throw new TypeError(D);return c=o(c)||0,C(j)&&(t=!!j.leading,w="maxWait"in j,s=w?F(o(j.maxWait)||0,c):s,y="trailing"in j?!!j.trailing:y),d.cancel=function(){void 0!==g&&clearTimeout(g),v=0,m=h=b=g=void 0},d.flush=function(){return void 0===g?u:r(x())},d}function C(b){var c="undefined"==typeof b?"undefined":a(b);return!!b&&("object"==c||"function"==c)}function n(b){return!!b&&"object"==("undefined"==typeof b?"undefined":a(b))}function i(b){return"symbol"==("undefined"==typeof b?"undefined":a(b))||n(b)&&h.call(b)==f}function o(a){if("number"==typeof a)return a;if(i(a))return c;if(C(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=C(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(r,"");var f=l.test(a);return f||p.test(a)?m(a.slice(2),f?2:8):d.test(a)?c:+a}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},D="Expected a function",c=NaN,f="[object Symbol]",r=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,b="object"==("undefined"==typeof e?"undefined":a(e))&&e&&e.Object===Object&&e,s="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,u=b||s||Function("return this")(),g=Object.prototype,h=g.toString,F=z,k=q,x=function(){return u.Date.now()};A.exports=B}).call(a,function(){return this}())},function(b,c){"use strict";function d(){for(var a,b,d=0,e=h.length;d<e;d++){a=h[d],b=f.querySelectorAll(a.selector);for(var g,i=0,j=b.length;i<j;i++)g=b[i],g.ready||(g.ready=!0,a.fn.call(g,g))}}Object.defineProperty(c,"__esModule",{value:!0});var f=window.document,g=window.MutationObserver||window.WebKitMutationObserver,h=[],a=void 0;c.default=function(b,c){h.push({selector:b,fn:c}),!a&&g&&(a=new g(d),a.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),d()}},function(b,d){"use strict";function g(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function h(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(d,"__esModule",{value:!0});var j=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,k=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function b(){g(this,b)}return j(b,[{key:"phone",value:function(){var a=h();return i.test(a)||k.test(a.substr(0,4))}},{key:"mobile",value:function(){var b=h();return a.test(b)||l.test(b.substr(0,4))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),b}();d.default=new c},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=function(a,b,c){var d=a.node.getAttribute("data-aos-once");b>a.position?a.node.classList.add("aos-animate"):"undefined"!=typeof d&&("false"===d||!c&&"true"!==d)&&a.node.classList.remove("aos-animate")};b.default=function(a,b){var d=window.pageYOffset,f=window.innerHeight;a.forEach(function(a){c(a,f+d,b)})}},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(12),f=function(a){return a&&a.__esModule?a:{default:a}}(d);b.default=function(a,b){return a.forEach(function(a){a.node.classList.add("aos-init"),a.position=(0,f.default)(a.node,b.offset)}),a}},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(13),f=function(a){return a&&a.__esModule?a:{default:a}}(d);b.default=function(b,c){var d=0,e=0,g=window.innerHeight,h={offset:b.getAttribute("data-aos-offset"),anchor:b.getAttribute("data-aos-anchor"),anchorPlacement:b.getAttribute("data-aos-anchor-placement")};switch(h.offset&&!isNaN(h.offset)&&(e=parseInt(h.offset)),h.anchor&&document.querySelectorAll(h.anchor)&&(b=document.querySelectorAll(h.anchor)[0]),d=(0,f.default)(b).top,h.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=b.offsetHeight/2;break;case"bottom-bottom":d+=b.offsetHeight;break;case"top-center":d+=g/2;break;case"bottom-center":d+=g/2+b.offsetHeight;break;case"center-center":d+=g/2+b.offsetHeight/2;break;case"top-top":d+=g;break;case"bottom-top":d+=b.offsetHeight+g;break;case"center-top":d+=b.offsetHeight/2+g;}return h.anchorPlacement||h.offset||isNaN(c)||(e=c),d+e}},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.default=function(a){for(var b=0,c=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)b+=a.offsetLeft-("BODY"==a.tagName?0:a.scrollLeft),c+=a.offsetTop-("BODY"==a.tagName?0:a.scrollTop),a=a.offsetParent;return{top:c,left:b}}},function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.default=function(a){a=a||document.querySelectorAll("[data-aos]");var b=[];return[].forEach.call(a,function(a){b.push({node:a})}),b}}])})},{}],2:[function(a,b){(function(a){var c;c="undefined"==typeof window?"undefined"==typeof a?"undefined"==typeof self?{}:self:a:window,b.exports=c}).call(this,"undefined"==typeof global?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:global)},{}],3:[function(a,b,c){var d=a("global"),e=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||function(a){var b=+new Date,c=Math.max(0,16-(b-f)),d=setTimeout(a,c);return f=b,d},f=+new Date,g=d.cancelAnimationFrame||d.webkitCancelAnimationFrame||d.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(e=e.bind(d),g=g.bind(d)),c=b.exports=e,c.cancel=g},{global:2}],4:[function(a,b){function c(){var a=window.pageYOffset;return document.documentElement.scrollTop=a+1,window.pageYOffset>a?(document.documentElement.scrollTop=a,document.documentElement):document.scrollingElement||document.body}var d=window||{},e=document||{documentElement:{}},f="undefined"==typeof d.pageYOffset?e.documentElement:null;b.exports=function(){return f||(f=c())}},{}],5:[function(a,b){function c(a,b,c,f,g){function h(){if(k)return g(new Error("Scroll cancelled"),b[a]);var d=+new Date,f=Math.min(1,(d-i)/m),n=l(f);b[a]=n*(c-j)+j,1>f?e(h):e(function(){g(null,b[a])})}var i=+new Date,j=b[a],k=!1,l=d,m=350;return("function"==typeof f?g=f:(f=f||{},l=f.ease||l,m=f.duration||m,g=g||function(){}),j===c)?g(new Error("Element already at target scroll position"),b[a]):(e(h),function(){k=!0})}function d(a){return .5*(1-Math.cos(Math.PI*a))}var e=a("rafl");b.exports={top:function(a,b,d,e){return c("scrollTop",a,b,d,e)},left:function(a,b,d,e){return c("scrollLeft",a,b,d,e)}}},{rafl:3}],6:[function(a){function b(){const a=g.getBoundingClientRect();h.style.left=a.x+a.width+35}const c=a("scroll"),d=a("scroll-doc")(),e=a("aos"),f=document.querySelectorAll(".side-nav__link"),g=document.querySelector(".intro-box"),h=document.querySelector(".side-nav__nav"),i=document.querySelector(".age");document.addEventListener("DOMContentLoaded",()=>{e.init({startEvent:"load"}),f.forEach((a)=>{a.addEventListener("click",(b)=>{b.preventDefault();const e=a.getAttribute("href");c.top(d,document.querySelector(e).offsetTop-64,{duration:500})})}),b(),window.addEventListener("resize",()=>{b()})})},{aos:1,scroll:5,"scroll-doc":4}]},{},[6]);s === 'function') {
    callback = options
  }
  else {
    options = options || {}
    ease = options.ease || ease
    duration = options.duration || duration
    callback = callback || function () {}
  }

  if (from === to) {
    return callback(
      new Error('Element already at target scroll position'),
      element[prop]
    )
  }

  function cancel () {
    cancelled = true
  }

  function animate (timestamp) {
    if (cancelled) {
      return callback(
        new Error('Scroll cancelled'),
        element[prop]
      )
    }

    var now = +new Date
    var time = Math.min(1, ((now - start) / duration))
    var eased = ease(time)

    element[prop] = (eased * (to - from)) + from

    time < 1 ? raf(animate) : raf(function () {
      callback(null, element[prop])
    })
  }

  raf(animate)

  return cancel
}

function inOutSine (n) {
  return .5 * (1 - Math.cos(Math.PI * n))
}

module.exports = {
  top: function (element, to, options, callback) {
    return scroll('scrollTop', element, to, options, callback)
  },
  left: function (element, to, options, callback) {
    return scroll('scrollLeft', element, to, options, callback)
  }
}

},{"rafl":3}],6:[function(require,module,exports){
const scroll = require('scroll');
const page = require('scroll-doc')();
const AOS = require('aos');
const links = document.querySelectorAll('.side-nav__link');
const introBox = document.querySelector('.intro-box');
const sideNav = document.querySelector('.side-nav__nav');
const age = document.querySelector('.age');
let hue = 0;
let change = 1;

function setSideNavLeft() {
  const introBoxPos = introBox.getBoundingClientRect();
  sideNav.style.left = introBoxPos.x + introBoxPos.width + 35;
}

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    startEvent: 'load',
  });

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href');
      scroll.top(page, document.querySelector(id).offsetTop - 64, { duration: 500 });
    });
  });

  setSideNavLeft();
  window.addEventListener('resize', () => {
    setSideNavLeft();
  });
});

},{"aos":1,"scroll":5,"scroll-doc":4}]},{},[6]);
