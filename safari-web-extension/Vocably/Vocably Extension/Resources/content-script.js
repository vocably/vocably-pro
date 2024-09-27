/*!
 * Hello to whoever is reading this! I think you are cool 🤜🤛
 *
 * I did not obfuscate the code to help you better understand it.
 * However, I don't know how to disable minification of web components (StencilJS).
 * Sorry, I didn't look too hard!
 * The code of the entire project is available at:
 * https://github.com/vocably/vocably-pro
 *
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3166:
/***/ (() => {

(function(){
/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var n=window.Document.prototype.createElement,p=window.Document.prototype.createElementNS,aa=window.Document.prototype.importNode,ba=window.Document.prototype.prepend,ca=window.Document.prototype.append,da=window.DocumentFragment.prototype.prepend,ea=window.DocumentFragment.prototype.append,q=window.Node.prototype.cloneNode,r=window.Node.prototype.appendChild,t=window.Node.prototype.insertBefore,u=window.Node.prototype.removeChild,v=window.Node.prototype.replaceChild,w=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),y=window.Element.prototype.attachShadow,z=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),A=window.Element.prototype.getAttribute,B=window.Element.prototype.setAttribute,C=window.Element.prototype.removeAttribute,D=window.Element.prototype.getAttributeNS,E=window.Element.prototype.setAttributeNS,F=window.Element.prototype.removeAttributeNS,G=window.Element.prototype.insertAdjacentElement,H=window.Element.prototype.insertAdjacentHTML,fa=window.Element.prototype.prepend,
ha=window.Element.prototype.append,ia=window.Element.prototype.before,ja=window.Element.prototype.after,ka=window.Element.prototype.replaceWith,la=window.Element.prototype.remove,ma=window.HTMLElement,I=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),na=window.HTMLElement.prototype.insertAdjacentElement,oa=window.HTMLElement.prototype.insertAdjacentHTML;var pa=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a){return pa.add(a)});function qa(a){var b=pa.has(a);a=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return!b&&a}var ra=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);
function J(a){var b=a.isConnected;if(void 0!==b)return b;if(ra(a))return!0;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}function K(a){var b=a.children;if(b)return Array.prototype.slice.call(b);b=[];for(a=a.firstChild;a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&b.push(a);return b}
function L(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function M(a,b,c){for(var f=a;f;){if(f.nodeType===Node.ELEMENT_NODE){var d=f;b(d);var e=d.localName;if("link"===e&&"import"===d.getAttribute("rel")){f=d.import;void 0===c&&(c=new Set);if(f instanceof Node&&!c.has(f))for(c.add(f),f=f.firstChild;f;f=f.nextSibling)M(f,b,c);f=L(a,d);continue}else if("template"===e){f=L(a,d);continue}if(d=d.__CE_shadowRoot)for(d=d.firstChild;d;d=d.nextSibling)M(d,b,c)}f=f.firstChild?f.firstChild:L(a,f)}};function N(){var a=!(null===O||void 0===O||!O.noDocumentConstructionObserver),b=!(null===O||void 0===O||!O.shadyDomFastWalk);this.m=[];this.g=[];this.j=!1;this.shadyDomFastWalk=b;this.I=!a}function P(a,b,c,f){var d=window.ShadyDOM;if(a.shadyDomFastWalk&&d&&d.inUse){if(b.nodeType===Node.ELEMENT_NODE&&c(b),b.querySelectorAll)for(a=d.nativeMethods.querySelectorAll.call(b,"*"),b=0;b<a.length;b++)c(a[b])}else M(b,c,f)}function sa(a,b){a.j=!0;a.m.push(b)}function ta(a,b){a.j=!0;a.g.push(b)}
function Q(a,b){a.j&&P(a,b,function(c){return R(a,c)})}function R(a,b){if(a.j&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.m.length;c++)a.m[c](b);for(c=0;c<a.g.length;c++)a.g[c](b)}}function S(a,b){var c=[];P(a,b,function(d){return c.push(d)});for(b=0;b<c.length;b++){var f=c[b];1===f.__CE_state?a.connectedCallback(f):T(a,f)}}function U(a,b){var c=[];P(a,b,function(d){return c.push(d)});for(b=0;b<c.length;b++){var f=c[b];1===f.__CE_state&&a.disconnectedCallback(f)}}
function V(a,b,c){c=void 0===c?{}:c;var f=c.J,d=c.upgrade||function(g){return T(a,g)},e=[];P(a,b,function(g){a.j&&R(a,g);if("link"===g.localName&&"import"===g.getAttribute("rel")){var h=g.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry);h&&"complete"===h.readyState?h.__CE_documentLoadHandled=!0:g.addEventListener("load",function(){var k=g.import;if(!k.__CE_documentLoadHandled){k.__CE_documentLoadHandled=!0;var l=new Set;f&&(f.forEach(function(m){return l.add(m)}),
l.delete(k));V(a,k,{J:l,upgrade:d})}})}else e.push(g)},f);for(b=0;b<e.length;b++)d(e[b])}
function T(a,b){try{var c=b.ownerDocument,f=c.__CE_registry;var d=f&&(c.defaultView||c.__CE_isImportDocument)?W(f,b.localName):void 0;if(d&&void 0===b.__CE_state){d.constructionStack.push(b);try{try{if(new d.constructorFunction!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop()}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=d;if(d.attributeChangedCallback&&b.hasAttributes()){var e=d.observedAttributes;
for(d=0;d<e.length;d++){var g=e[d],h=b.getAttribute(g);null!==h&&a.attributeChangedCallback(b,g,null,h,null)}}J(b)&&a.connectedCallback(b)}}catch(k){X(k)}}N.prototype.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a)}catch(c){X(c)}};N.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;if(b.disconnectedCallback)try{b.disconnectedCallback.call(a)}catch(c){X(c)}};
N.prototype.attributeChangedCallback=function(a,b,c,f,d){var e=a.__CE_definition;if(e.attributeChangedCallback&&-1<e.observedAttributes.indexOf(b))try{e.attributeChangedCallback.call(a,b,c,f,d)}catch(g){X(g)}};
function ua(a,b,c,f){var d=b.__CE_registry;if(d&&(null===f||"http://www.w3.org/1999/xhtml"===f)&&(d=W(d,c)))try{var e=new d.constructorFunction;if(void 0===e.__CE_state||void 0===e.__CE_definition)throw Error("Failed to construct '"+c+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==e.namespaceURI)throw Error("Failed to construct '"+c+"': The constructed element's namespace must be the HTML namespace.");if(e.hasAttributes())throw Error("Failed to construct '"+
c+"': The constructed element must not have any attributes.");if(null!==e.firstChild)throw Error("Failed to construct '"+c+"': The constructed element must not have any children.");if(null!==e.parentNode)throw Error("Failed to construct '"+c+"': The constructed element must not have a parent node.");if(e.ownerDocument!==b)throw Error("Failed to construct '"+c+"': The constructed element's owner document is incorrect.");if(e.localName!==c)throw Error("Failed to construct '"+c+"': The constructed element's local name is incorrect.");
return e}catch(g){return X(g),b=null===f?n.call(b,c):p.call(b,f,c),Object.setPrototypeOf(b,HTMLUnknownElement.prototype),b.__CE_state=2,b.__CE_definition=void 0,R(a,b),b}b=null===f?n.call(b,c):p.call(b,f,c);R(a,b);return b}
function X(a){var b=a.message,c=a.sourceURL||a.fileName||"",f=a.line||a.lineNumber||0,d=a.column||a.columnNumber||0,e=void 0;void 0===ErrorEvent.prototype.initErrorEvent?e=new ErrorEvent("error",{cancelable:!0,message:b,filename:c,lineno:f,colno:d,error:a}):(e=document.createEvent("ErrorEvent"),e.initErrorEvent("error",!1,!0,b,c,f),e.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})});void 0===e.error&&Object.defineProperty(e,"error",
{configurable:!0,enumerable:!0,get:function(){return a}});window.dispatchEvent(e);e.defaultPrevented||console.error(a)};function va(){var a=this;this.g=void 0;this.F=new Promise(function(b){a.l=b})}va.prototype.resolve=function(a){if(this.g)throw Error("Already resolved.");this.g=a;this.l(a)};function wa(a){var b=document;this.l=void 0;this.h=a;this.g=b;V(this.h,this.g);"loading"===this.g.readyState&&(this.l=new MutationObserver(this.G.bind(this)),this.l.observe(this.g,{childList:!0,subtree:!0}))}function xa(a){a.l&&a.l.disconnect()}wa.prototype.G=function(a){var b=this.g.readyState;"interactive"!==b&&"complete"!==b||xa(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,f=0;f<c.length;f++)V(this.h,c[f])};function Y(a){this.s=new Map;this.u=new Map;this.C=new Map;this.A=!1;this.B=new Map;this.o=function(b){return b()};this.i=!1;this.v=[];this.h=a;this.D=a.I?new wa(a):void 0}Y.prototype.H=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");ya(this,a);this.s.set(a,b);this.v.push(a);this.i||(this.i=!0,this.o(function(){return za(c)}))};
Y.prototype.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");ya(this,a);Aa(this,a,b);this.v.push(a);this.i||(this.i=!0,this.o(function(){return za(c)}))};function ya(a,b){if(!qa(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(W(a,b))throw Error("A custom element with name '"+(b+"' has already been defined."));if(a.A)throw Error("A custom element is already being defined.");}
function Aa(a,b,c){a.A=!0;var f;try{var d=c.prototype;if(!(d instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var e=function(m){var x=d[m];if(void 0!==x&&!(x instanceof Function))throw Error("The '"+m+"' callback must be a function.");return x};var g=e("connectedCallback");var h=e("disconnectedCallback");var k=e("adoptedCallback");var l=(f=e("attributeChangedCallback"))&&c.observedAttributes||[]}catch(m){throw m;}finally{a.A=!1}c={localName:b,
constructorFunction:c,connectedCallback:g,disconnectedCallback:h,adoptedCallback:k,attributeChangedCallback:f,observedAttributes:l,constructionStack:[]};a.u.set(b,c);a.C.set(c.constructorFunction,c);return c}Y.prototype.upgrade=function(a){V(this.h,a)};
function za(a){if(!1!==a.i){a.i=!1;for(var b=[],c=a.v,f=new Map,d=0;d<c.length;d++)f.set(c[d],[]);V(a.h,document,{upgrade:function(k){if(void 0===k.__CE_state){var l=k.localName,m=f.get(l);m?m.push(k):a.u.has(l)&&b.push(k)}}});for(d=0;d<b.length;d++)T(a.h,b[d]);for(d=0;d<c.length;d++){for(var e=c[d],g=f.get(e),h=0;h<g.length;h++)T(a.h,g[h]);(e=a.B.get(e))&&e.resolve(void 0)}c.length=0}}Y.prototype.get=function(a){if(a=W(this,a))return a.constructorFunction};
Y.prototype.whenDefined=function(a){if(!qa(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.B.get(a);if(b)return b.F;b=new va;this.B.set(a,b);var c=this.u.has(a)||this.s.has(a);a=-1===this.v.indexOf(a);c&&a&&b.resolve(void 0);return b.F};Y.prototype.polyfillWrapFlushCallback=function(a){this.D&&xa(this.D);var b=this.o;this.o=function(c){return a(function(){return b(c)})}};
function W(a,b){var c=a.u.get(b);if(c)return c;if(c=a.s.get(b)){a.s.delete(b);try{return Aa(a,b,c())}catch(f){X(f)}}}window.CustomElementRegistry=Y;Y.prototype.define=Y.prototype.define;Y.prototype.upgrade=Y.prototype.upgrade;Y.prototype.get=Y.prototype.get;Y.prototype.whenDefined=Y.prototype.whenDefined;Y.prototype.polyfillDefineLazy=Y.prototype.H;Y.prototype.polyfillWrapFlushCallback=Y.prototype.polyfillWrapFlushCallback;function Z(a,b,c){function f(d){return function(e){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];h=[];for(var k=[],l=0;l<g.length;l++){var m=g[l];m instanceof Element&&J(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)h.push(m);else h.push(m)}d.apply(this,g);for(g=0;g<k.length;g++)U(a,k[g]);if(J(this))for(g=0;g<h.length;g++)k=h[g],k instanceof Element&&S(a,k)}}void 0!==c.prepend&&(b.prepend=f(c.prepend));void 0!==c.append&&(b.append=f(c.append))};function Ba(a){Document.prototype.createElement=function(b){return ua(a,this,b,null)};Document.prototype.importNode=function(b,c){b=aa.call(this,b,!!c);this.__CE_registry?V(a,b):Q(a,b);return b};Document.prototype.createElementNS=function(b,c){return ua(a,this,c,b)};Z(a,Document.prototype,{prepend:ba,append:ca})};function Ca(a){function b(f){return function(d){for(var e=[],g=0;g<arguments.length;++g)e[g]=arguments[g];g=[];for(var h=[],k=0;k<e.length;k++){var l=e[k];l instanceof Element&&J(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l)}f.apply(this,e);for(e=0;e<h.length;e++)U(a,h[e]);if(J(this))for(e=0;e<g.length;e++)h=g[e],h instanceof Element&&S(a,h)}}var c=Element.prototype;void 0!==ia&&(c.before=b(ia));void 0!==ja&&(c.after=b(ja));void 0!==ka&&
(c.replaceWith=function(f){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var g=[],h=0;h<d.length;h++){var k=d[h];k instanceof Element&&J(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)e.push(k);else e.push(k)}h=J(this);ka.apply(this,d);for(d=0;d<g.length;d++)U(a,g[d]);if(h)for(U(a,this),d=0;d<e.length;d++)g=e[d],g instanceof Element&&S(a,g)});void 0!==la&&(c.remove=function(){var f=J(this);la.call(this);f&&U(a,this)})};function Da(a){function b(d,e){Object.defineProperty(d,"innerHTML",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(g){var h=this,k=void 0;J(this)&&(k=[],P(a,this,function(x){x!==h&&k.push(x)}));e.set.call(this,g);if(k)for(var l=0;l<k.length;l++){var m=k[l];1===m.__CE_state&&a.disconnectedCallback(m)}this.ownerDocument.__CE_registry?V(a,this):Q(a,this);return g}})}function c(d,e){d.insertAdjacentElement=function(g,h){var k=J(h);g=e.call(this,g,h);k&&U(a,h);J(g)&&S(a,h);return g}}function f(d,
e){function g(h,k){for(var l=[];h!==k;h=h.nextSibling)l.push(h);for(k=0;k<l.length;k++)V(a,l[k])}d.insertAdjacentHTML=function(h,k){h=h.toLowerCase();if("beforebegin"===h){var l=this.previousSibling;e.call(this,h,k);g(l||this.parentNode.firstChild,this)}else if("afterbegin"===h)l=this.firstChild,e.call(this,h,k),g(this.firstChild,l);else if("beforeend"===h)l=this.lastChild,e.call(this,h,k),g(l||this.firstChild,null);else if("afterend"===h)l=this.nextSibling,e.call(this,h,k),g(this.nextSibling,l);
else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");}}y&&(Element.prototype.attachShadow=function(d){d=y.call(this,d);if(a.j&&!d.__CE_patched){d.__CE_patched=!0;for(var e=0;e<a.m.length;e++)a.m[e](d)}return this.__CE_shadowRoot=d});z&&z.get?b(Element.prototype,z):I&&I.get?b(HTMLElement.prototype,I):ta(a,function(d){b(d,{enumerable:!0,configurable:!0,get:function(){return q.call(this,!0).innerHTML},set:function(e){var g=
"template"===this.localName,h=g?this.content:this,k=p.call(document,this.namespaceURI,this.localName);for(k.innerHTML=e;0<h.childNodes.length;)u.call(h,h.childNodes[0]);for(e=g?k.content:k;0<e.childNodes.length;)r.call(h,e.childNodes[0])}})});Element.prototype.setAttribute=function(d,e){if(1!==this.__CE_state)return B.call(this,d,e);var g=A.call(this,d);B.call(this,d,e);e=A.call(this,d);a.attributeChangedCallback(this,d,g,e,null)};Element.prototype.setAttributeNS=function(d,e,g){if(1!==this.__CE_state)return E.call(this,
d,e,g);var h=D.call(this,d,e);E.call(this,d,e,g);g=D.call(this,d,e);a.attributeChangedCallback(this,e,h,g,d)};Element.prototype.removeAttribute=function(d){if(1!==this.__CE_state)return C.call(this,d);var e=A.call(this,d);C.call(this,d);null!==e&&a.attributeChangedCallback(this,d,e,null,null)};Element.prototype.removeAttributeNS=function(d,e){if(1!==this.__CE_state)return F.call(this,d,e);var g=D.call(this,d,e);F.call(this,d,e);var h=D.call(this,d,e);g!==h&&a.attributeChangedCallback(this,e,g,h,d)};
na?c(HTMLElement.prototype,na):G&&c(Element.prototype,G);oa?f(HTMLElement.prototype,oa):H&&f(Element.prototype,H);Z(a,Element.prototype,{prepend:fa,append:ha});Ca(a)};var Ea={};function Fa(a){function b(){var c=this.constructor;var f=document.__CE_registry.C.get(c);if(!f)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var d=f.constructionStack;if(0===d.length)return d=n.call(document,f.localName),Object.setPrototypeOf(d,c.prototype),d.__CE_state=1,d.__CE_definition=f,R(a,d),d;var e=d.length-1,g=d[e];if(g===Ea)throw Error("Failed to construct '"+f.localName+"': This element was already constructed.");d[e]=Ea;
Object.setPrototypeOf(g,c.prototype);R(a,g);return g}b.prototype=ma.prototype;Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});window.HTMLElement=b};function Ga(a){function b(c,f){Object.defineProperty(c,"textContent",{enumerable:f.enumerable,configurable:!0,get:f.get,set:function(d){if(this.nodeType===Node.TEXT_NODE)f.set.call(this,d);else{var e=void 0;if(this.firstChild){var g=this.childNodes,h=g.length;if(0<h&&J(this)){e=Array(h);for(var k=0;k<h;k++)e[k]=g[k]}}f.set.call(this,d);if(e)for(d=0;d<e.length;d++)U(a,e[d])}}})}Node.prototype.insertBefore=function(c,f){if(c instanceof DocumentFragment){var d=K(c);c=t.call(this,c,f);if(J(this))for(f=
0;f<d.length;f++)S(a,d[f]);return c}d=c instanceof Element&&J(c);f=t.call(this,c,f);d&&U(a,c);J(this)&&S(a,c);return f};Node.prototype.appendChild=function(c){if(c instanceof DocumentFragment){var f=K(c);c=r.call(this,c);if(J(this))for(var d=0;d<f.length;d++)S(a,f[d]);return c}f=c instanceof Element&&J(c);d=r.call(this,c);f&&U(a,c);J(this)&&S(a,c);return d};Node.prototype.cloneNode=function(c){c=q.call(this,!!c);this.ownerDocument.__CE_registry?V(a,c):Q(a,c);return c};Node.prototype.removeChild=function(c){var f=
c instanceof Element&&J(c),d=u.call(this,c);f&&U(a,c);return d};Node.prototype.replaceChild=function(c,f){if(c instanceof DocumentFragment){var d=K(c);c=v.call(this,c,f);if(J(this))for(U(a,f),f=0;f<d.length;f++)S(a,d[f]);return c}d=c instanceof Element&&J(c);var e=v.call(this,c,f),g=J(this);g&&U(a,f);d&&U(a,c);g&&S(a,c);return e};w&&w.get?b(Node.prototype,w):sa(a,function(c){b(c,{enumerable:!0,configurable:!0,get:function(){for(var f=[],d=this.firstChild;d;d=d.nextSibling)d.nodeType!==Node.COMMENT_NODE&&
f.push(d.textContent);return f.join("")},set:function(f){for(;this.firstChild;)u.call(this,this.firstChild);null!=f&&""!==f&&r.call(this,document.createTextNode(f))}})})};var O=window.customElements;function Ha(){var a=new N;Fa(a);Ba(a);Z(a,DocumentFragment.prototype,{prepend:da,append:ea});Ga(a);Da(a);a=new Y(a);document.__CE_registry=a;Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:a})}O&&!O.forcePolyfill&&"function"==typeof O.define&&"function"==typeof O.get||Ha();window.__CE_installPolyfill=Ha;
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),

/***/ 7160:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ 6822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Fragment),
/* harmony export */   "H": () => (/* binding */ Host),
/* harmony export */   "b": () => (/* binding */ bootstrapLazy),
/* harmony export */   "c": () => (/* binding */ createEvent),
/* harmony export */   "g": () => (/* binding */ getElement),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "p": () => (/* binding */ promiseResolve),
/* harmony export */   "r": () => (/* binding */ registerInstance)
/* harmony export */ });
const NAMESPACE = 'extension-content-ui';

let scopeId;
let hostTagName;
let isSvgMode = false;
let queuePending = false;
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()
    ;
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const rootAppliedStyles = new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        if (typeof style === 'string') {
            style = cssText;
        }
        else {
            style.replaceSync(cssText);
        }
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta);
    const style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
    if (flags & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (cmp.$tagName$);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if ((!isProp ) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        const n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    const newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        if (!isSvgMode) {
            isSvgMode = newVNode.$tag$ === 'svg';
        }
        // create element
        elm = newVNode.$elm$ = (doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode.$tag$)
            );
        if (isSvgMode && newVNode.$tag$ === 'foreignObject') {
            isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (elm.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    return elm;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = (parentElm);
    let childNode;
    if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        return true;
    }
    return false;
};
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    if (text === null) {
        {
            // test if we're rendering an svg element, or still rendering nodes inside of one
            // only add this to the when the compiler sees we're using an svg somewhere
            isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
        }
        // element node
        {
            if (tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
        if (isSvgMode && tag === 'svg') {
            isSvgMode = false;
        }
    }
    else if (oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* Bubbles */),
                composed: !!(flags & 2 /* Composed */),
                cancelable: !!(flags & 1 /* Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    let promise;
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance, elm) => {
    try {
        instance = instance.render() ;
        {
            hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* hasRendered */;
        }
        {
            {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                {
                    renderVdom(hostRef, instance);
                }
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    return null;
};
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        safeCall(instance, 'componentDidRender');
    }
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => elm.classList.add('hydrated')
    ;
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!(flags & 8 /* isConstructingInstance */) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* Prop */ ||
                    ((flags & 2 /* proxyState */) && memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (flags & 1 /* isElementConstructor */ &&
                memberFlags & 64 /* Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            endNewInstance();
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        endConnected();
    }
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        getHostRef(elm);
    }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            {
                cmpMeta.$members$ = compactMeta[2];
            }
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                        // this component is using shadow dom
                        // and this browser supports shadow dom
                        // add the read-only property "shadowRoot" to the host element
                        // adding the shadow root build conditionals to minimize runtime
                        {
                            {
                                self.attachShadow({ mode: 'open' });
                            }
                        }
                    }
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
            }
        });
    });
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const Fragment = (_, children) => children;
const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
    return __webpack_require__(3469)(`./${bundleId}.entry.js`).then((importedModule) => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = new Map();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);




/***/ }),

/***/ 4867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vocably_add_card_hint": () => (/* binding */ VocablyAddCardHint),
/* harmony export */   "vocably_button": () => (/* binding */ VocablyButton),
/* harmony export */   "vocably_card_definitions": () => (/* binding */ VocablyCardDefinitions),
/* harmony export */   "vocably_card_examples": () => (/* binding */ VocablyCardExamples),
/* harmony export */   "vocably_card_source": () => (/* binding */ VocablyCardSource),
/* harmony export */   "vocably_close_button": () => (/* binding */ VocablyCloseButton),
/* harmony export */   "vocably_first_translation_congratulation": () => (/* binding */ VocablyFirstTranslationCongratulation),
/* harmony export */   "vocably_icon_add": () => (/* binding */ VocablyIconAdd),
/* harmony export */   "vocably_icon_arrow_right": () => (/* binding */ VocablyIconArrowRight),
/* harmony export */   "vocably_icon_error": () => (/* binding */ VocablyIconError),
/* harmony export */   "vocably_icon_play_circle": () => (/* binding */ VocablyIconPlayCircle),
/* harmony export */   "vocably_icon_remove": () => (/* binding */ VocablyIconRemove),
/* harmony export */   "vocably_icon_spin": () => (/* binding */ VocablyIconSpin),
/* harmony export */   "vocably_icon_volume_medium": () => (/* binding */ VocablyIconVolumeMedium),
/* harmony export */   "vocably_language": () => (/* binding */ VocablyLanguage),
/* harmony export */   "vocably_logo": () => (/* binding */ VocablyLogo),
/* harmony export */   "vocably_mobile_button": () => (/* binding */ VocablyMobileButton),
/* harmony export */   "vocably_play_sound": () => (/* binding */ VocablyPlaySound),
/* harmony export */   "vocably_popup": () => (/* binding */ VocablyPopup),
/* harmony export */   "vocably_rate": () => (/* binding */ VocablyRate),
/* harmony export */   "vocably_sign_in": () => (/* binding */ VocablySignIn),
/* harmony export */   "vocably_spinner": () => (/* binding */ VocablySpinner),
/* harmony export */   "vocably_subscribe": () => (/* binding */ VocablySubscribe),
/* harmony export */   "vocably_translation": () => (/* binding */ VocablyTranslation)
/* harmony export */ });
/* harmony import */ var _index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6822);


const vocablyAddCardHintCss = ":host{visibility:visible !important}.arrow{vertical-align:middle}.arrow path{fill:#0050ff}.hint{color:#0050ff;margin-right:8px;font-size:16px;vertical-align:middle}";

const VocablyAddCardHint = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.confirm = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "confirm", 7);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "hint" }, "Click here to save"), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: "arrow", width: "28", height: "15", viewBox: "0 0 28 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M1.54141 8.9238C0.771414 9.258 0.348426 9.2814 0.116426 9.0031C-0.359574 8.4302 0.686425 6.7104 2.11842 5.7119C3.70942 4.603 8.26342 3.24358 11.1134 3.0276C13.8054 2.82348 17.0554 3.12503 18.7054 3.7319C19.3264 3.9603 19.8494 4.1204 19.8674 4.0877C19.8864 4.0548 19.6814 3.24682 19.4124 2.2919C18.7594 -0.0292306 19.0194 -0.450971 20.5684 0.417849C21.8334 1.12699 25.6214 4.8715 26.6884 6.4669C27.9774 8.3944 27.4164 10.3477 25.2704 11.4034C18.7674 14.6016 17.5424 15.0267 17.1044 14.2367C16.7764 13.6445 18.1604 11.7495 19.8034 10.5412L21.4284 9.3465L20.3144 8.9062C17.5394 7.8088 14.7854 7.0159 13.2414 6.8692C9.73143 6.536 5.22341 7.3279 1.54141 8.9238Z" }))));
  }
};
VocablyAddCardHint.style = vocablyAddCardHintCss;

const vocablyButtonCss = ":host{display:block;visibility:visible !important}.button{display:flex;border-radius:5px;width:21px;height:21px;line-height:21px;background-color:#fff;padding:3px;cursor:pointer;box-sizing:content-box;align-items:center;justify-content:center;box-shadow:0 2px 5px rgba(0, 0, 0, 0.8);transition:box-shadow 0.1s}.button .svg{height:18.9px}.button:hover{box-shadow:0 2px 5px rgba(0, 0, 0, 0.9)}.button:active{box-shadow:0 2px 3px rgba(0, 0, 0, 0.7)}";

const VocablyButton = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "button" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { viewBox: "0 0 633 699", fill: "none", class: "svg" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M585.428 130.443H46.6646C21.2112 130.443 0 150.809 0 177.116V482.609C0 508.067 20.3627 529.281 46.6646 529.281H82.2994V639.599C82.2994 662.511 95.026 682.877 114.54 693.06C122.176 697.303 130.661 699 139.145 699C151.872 699 163.75 694.757 174.78 687.12L352.954 530.13H585.428C610.882 530.13 632.093 509.764 632.093 483.457V177.964C632.093 151.658 610.882 130.443 585.428 130.443ZM150.175 654.874C142.539 660.814 135.752 658.268 133.206 656.57C130.661 654.873 123.873 650.63 123.873 639.599V340.045C123.873 320.527 137.448 291.676 152.72 278.947L320.713 132.989V504.672L150.175 654.874Z", fill: "#0050FF" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M524.34 36.2492C524.34 10.7914 497.19 -13.8184 464.949 9.09357L355.499 101.59H524.34V36.2492Z", fill: "#0050FF" })))));
  }
};
VocablyButton.style = vocablyButtonCss;

const explode = (lines) => {
    if (!lines) {
        return [];
    }
    return lines
        .split(`\n`)
        .map((line) => line.replace(/^\* */, '').replace(/ +$/, ''))
        .filter((line) => line !== '');
};

const vocablyCardDefinitionsCss = "vocably-card-definitions{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}";

const VocablyCardDefinitions = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    const definitions = explode(this.card.data.definition);
    if (definitions.length === 0) {
      return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-italic" }, this.card.data.translation)));
    }
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "vocably-list" }, this.card.data.translation && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "vocably-italic" }, this.card.data.translation))), definitions.map((item) => ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, item)))));
  }
};
VocablyCardDefinitions.style = vocablyCardDefinitionsCss;

const vocablyCardExamplesCss = "vocably-card-examples{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}";

const VocablyCardExamples = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    const examples = explode(this.example);
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, examples.length === 1 && examples[0], examples.length > 1 && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "vocably-list" }, examples.map((item) => ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, item)))))));
  }
};
VocablyCardExamples.style = vocablyCardExamplesCss;

const GoogleTTSLanguages = [
    'af',
    'ar',
    'eu',
    'bn',
    'bg',
    'ca',
    'cs',
    'da',
    'nl',
    'en',
    'fi',
    'fr',
    'gl',
    'de',
    'el',
    'gu',
    'he',
    'hi',
    'hu',
    'is',
    'id',
    'it',
    'ja',
    'kn',
    'ko',
    'lv',
    'lt',
    'ms',
    'ml',
    'mr',
    'nb',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sr',
    'sk',
    'es',
    'sv',
    'ta',
    'te',
    'th',
    'tr',
    'uk',
    'vi',
    'zh',
    'zh-TW',
];
const isGoogleTTSLanguage = (language) => {
    return GoogleTTSLanguages.includes(language);
};

const languageList = {
    af: 'Afrikaans',
    sq: 'Albanian',
    am: 'Amharic',
    ar: 'Arabic',
    hy: 'Armenian',
    az: 'Azerbaijani',
    eu: 'Basque',
    be: 'Belarusian',
    bn: 'Bengali',
    bs: 'Bosnian',
    bg: 'Bulgarian',
    ca: 'Catalan',
    zh: 'Chinese (Simplified)',
    'zh-TW': 'Chinese (Traditional)',
    co: 'Corsican',
    hr: 'Croatian',
    cs: 'Czech',
    da: 'Danish',
    nl: 'Dutch',
    en: 'English',
    eo: 'Esperanto',
    et: 'Estonian',
    fi: 'Finnish',
    fr: 'French',
    fy: 'Frisian',
    gl: 'Galician',
    ka: 'Georgian',
    de: 'German',
    el: 'Greek',
    gu: 'Gujarati',
    ht: 'Haitian Creole',
    ha: 'Hausa',
    haw: 'Hawaiian',
    he: 'Hebrew',
    hi: 'Hindi',
    hmn: 'Hmong',
    hu: 'Hungarian',
    is: 'Icelandic',
    ig: 'Igbo',
    id: 'Indonesian',
    ga: 'Irish',
    it: 'Italian',
    ja: 'Japanese',
    jv: 'Javanese',
    kn: 'Kannada',
    kk: 'Kazakh',
    km: 'Khmer',
    rw: 'Kinyarwanda',
    ko: 'Korean',
    ku: 'Kurdish',
    ky: 'Kyrgyz',
    lo: 'Lao',
    lv: 'Latvian',
    lt: 'Lithuanian',
    lb: 'Luxembourgish',
    mk: 'Macedonian',
    mg: 'Malagasy',
    ms: 'Malay',
    ml: 'Malayalam',
    mt: 'Maltese',
    mi: 'Maori',
    mr: 'Marathi',
    mn: 'Mongolian',
    my: 'Myanmar (Burmese)',
    ne: 'Nepali',
    no: 'Norwegian',
    ny: 'Nyanja (Chichewa)',
    or: 'Odia (Oriya)',
    ps: 'Pashto',
    fa: 'Persian',
    pl: 'Polish',
    pt: 'Portuguese (Portugal, Brazil)',
    pa: 'Punjabi',
    ro: 'Romanian',
    ru: 'Russian',
    sm: 'Samoan',
    gd: 'Scots Gaelic',
    sr: 'Serbian',
    st: 'Sesotho',
    sn: 'Shona',
    sd: 'Sindhi',
    si: 'Sinhala (Sinhalese)',
    sk: 'Slovak',
    sl: 'Slovenian',
    so: 'Somali',
    es: 'Spanish',
    su: 'Sundanese',
    sw: 'Swahili',
    sv: 'Swedish',
    tl: 'Tagalog (Filipino)',
    tg: 'Tajik',
    ta: 'Tamil',
    tt: 'Tatar',
    te: 'Telugu',
    th: 'Thai',
    tr: 'Turkish',
    tk: 'Turkmen',
    uk: 'Ukrainian',
    ur: 'Urdu',
    ug: 'Uyghur',
    uz: 'Uzbek',
    vi: 'Vietnamese',
    cy: 'Welsh',
    xh: 'Xhosa',
    yi: 'Yiddish',
    yo: 'Yoruba',
    zu: 'Zulu',
};

const isCardItem = (item) => {
    return item.id !== undefined;
};
const isDetachedCardItem = (item) => {
    return item.id === undefined;
};

const vocablyCardSourceCss = "vocably-card-source{display:block;visibility:visible !important}vocably-card-source .vocably-translation-margin-left{margin-left:12px}";

const VocablyCardSource = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, isGoogleTTSLanguage(this.card.data.language) && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-play-sound", { text: this.card.data.source, language: this.card.data.language, playAudioPronunciation: this.playAudioPronunciation })), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "vocably-emphasized" }, this.card.data.source), this.card.data.ipa && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "vocably-invisible-space" }, "\u00A0"), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "vocably-translation-margin-left vocably-muted" }, "[", this.card.data.ipa, "]"))), this.card.data.partOfSpeech && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "invisible-space " }, "\u00A0"), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "vocably-muted vocably-small vocably-translation-margin-left" }, this.card.data.partOfSpeech)))));
  }
};
VocablyCardSource.style = vocablyCardSourceCss;

const vocablyCloseButtonCss = "vocably-close-button{display:inline-block;width:25px;height:25px;line-height:25px;vertical-align:middle;visibility:visible !important}.vocably-close-button{display:block;width:25px;height:25px;line-height:25px !important;background:none;border:none;padding:7px;font-size:0;cursor:pointer;transition:transform 0.2s}.vocably-close-button:active{transform:scale(0.8)}.vocably-close-svg{width:11px;height:11px}.vocably-close-svg-path{stroke-width:0.5px;stroke:#6a6a6a}";

const VocablyCloseButton = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.close = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "close", 7);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "vocably-close-button", onClick: () => this.close.emit(), onMouseDown: (e) => e.stopPropagation(), onMouseUp: (e) => e.stopPropagation() }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: "vocably-close-svg", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: "vocably-close-svg-path", d: "M10 0L0 10M0 0L10 10" })))));
  }
};
VocablyCloseButton.style = vocablyCloseButtonCss;

const vocablyFirstTranslationCongratulationCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}:host p{margin-top:0;margin-bottom:12px}:host .small{font-size:90%}:host a{text-decoration:underline !important;text-decoration-thickness:0.5px !important;text-underline-offset:2px !important;color:#0050ff !important;background:none !important;border:none !important;border-radius:0 !important}:host a:hover,:host a:focus,:host a:active{color:#0047e3 !important}.svg{max-width:100px;width:100%}";

const VocablyFirstTranslationCongratulation = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Your first card is added to your collection."), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "You can translate words and add cards on any website."), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Now, you can go to the mobile app to review and study your cards."), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "small" }, "Scan the QR code to install the app."), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: "svg", version: "1.1", baseProfile: "full", viewBox: "0 0 464 464", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "464", height: "464", fill: "#ffffff", cx: "0", cy: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("defs", null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { id: "p", width: "16", height: "16" })), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: "#000000" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "0", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "16", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "16", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "16", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "16", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "16", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "16", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "16", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "32", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "48", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "304" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "64", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "80", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "96", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "112", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "112", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "112", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "112", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "112", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "112", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "112", y: "304" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "128", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "144", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "304" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "160", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "176", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "192", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "208", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "304" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "224", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "240", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "256", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "272", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "288", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "304", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "112" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "304" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "320", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "304" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "336", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "352", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "304" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "368", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "384", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "256" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "304" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "336" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "352" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "384" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "400", y: "448" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "160" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "304" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "416", y: "432" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "432", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "432", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "432", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "432", y: "144" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "432", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "432", y: "272" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "432", y: "320" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "432", y: "400" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "432", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "16" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "32" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "48" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "64" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "80" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "96" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "128" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "176" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "192" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "208" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "224" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "240" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "288" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "368" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "416" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { width: "16", height: "16", x: "448", y: "432" })))), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "small" }, "Or open this URL", ' ', (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: "https://vocably.pro/app.html", target: '_blank' }, "vocably.pro/app.html"), ' ', (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", null), "on you mobile to install the app.")));
  }
};
VocablyFirstTranslationCongratulation.style = vocablyFirstTranslationCongratulationCss;

const vocablyIconAddCss = ":host{--logo-color:#000000;display:inline-block;width:24px;height:24px;visibility:visible !important}.svg{height:100%;width:auto;fill:#0050ff}";

const VocablyIconAdd = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" }))));
  }
};
VocablyIconAdd.style = vocablyIconAddCss;

const vocablyIconArrowRightCss = ":host{display:inline-block;width:24px;height:24px;visibility:visible !important}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconArrowRight = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, "menu-right"), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10,17L15,12L10,7V17Z" }))));
  }
};
VocablyIconArrowRight.style = vocablyIconArrowRightCss;

const vocablyIconErrorCss = ":host{--logo-color:#000000;display:inline-block;width:18px;height:18px;vertical-align:middle;visibility:visible !important}.svg{height:100%;width:auto;fill:#ff5e5e}";

const VocablyIconError = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: "svg", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" }))));
  }
};
VocablyIconError.style = vocablyIconErrorCss;

const vocablyIconPlayCircleCss = ":host{--logo-color:#000000;display:inline-block;width:18px;height:18px;vertical-align:middle;visibility:visible !important}.svg{height:100%;width:auto;fill:#bababa}";

const VocablyIconPlayCircle = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: "svg" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" }))));
  }
};
VocablyIconPlayCircle.style = vocablyIconPlayCircleCss;

const vocablyIconRemoveCss = ":host{--logo-color:#000000;display:inline-block;width:24px;height:24px;visibility:visible !important}.svg{height:100%;width:auto;fill:#ff5e5e}";

const VocablyIconRemove = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }))));
  }
};
VocablyIconRemove.style = vocablyIconRemoveCss;

const vocablyIconSpinCss = ":host{visibility:visible !important}.spinner_VpEe{animation:spinner_vXu6 1.2s cubic-bezier(0.52, 0.6, 0.25, 0.99) infinite}.spinner_eahp{animation-delay:0.4s}.spinner_f7Y2{animation-delay:0.8s}@keyframes spinner_vXu6{0%{r:0;opacity:1}100%{r:11px;opacity:0}}";

const VocablyIconSpin = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { class: "spinner_VpEe", cx: "12", cy: "12", r: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { class: "spinner_VpEe spinner_eahp", cx: "12", cy: "12", r: "0" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { class: "spinner_VpEe spinner_f7Y2", cx: "12", cy: "12", r: "0" }))));
  }
};
VocablyIconSpin.style = vocablyIconSpinCss;

const vocablyIconVolumeMediumCss = ":host{--logo-color:#000000;display:inline-block;width:18px;height:18px;vertical-align:middle;visibility:visible !important}.svg{height:100%;width:auto;fill:#bababa}";

const VocablyIconVolumeMedium = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { xmlns: "http://www.w3.org/2000/svg", class: "svg", viewBox: "0 0 24 24" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" }))));
  }
};
VocablyIconVolumeMedium.style = vocablyIconVolumeMediumCss;

const vocablyLanguageCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}.container{display:inline-block}.p{margin-bottom:16px}.h1{font-size:26px;margin-bottom:16px}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:20px;text-align:center;text-decoration:none;width:calc(100% - 6px * 2);transition:background-color 200ms;margin:0 6px 9px;box-shadow:0 3px 6px rgba(0, 80, 255, 0.25);text-decoration:none !important}.button:hover,.button:focus{background:#0047e3}.button:active{background:#0047e3;box-shadow:inset 0px 0px 15px rgba(3, 36, 108, 0.4)}select{color:#6a6a6a !important;font-size:14.4px !important;padding:10px 14px !important;border:0.5px solid #bababa !important;border-radius:8px !important;appearance:none !important;background:#fbfbfb url('data:image/svg+xml;utf8,<svg width=\"11\" height=\"7\" viewBox=\"0 0 11 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1 5 6 1 1\" stroke=\"rgb(109, 109, 109)\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/></svg>') no-repeat !important;background-position:right 14px top 50% !important;outline:none !important;height:auto !important;line-height:inherit !important;box-shadow:none !important;box-sizing:border-box !important;width:100% !important}";

const VocablyLanguage = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.confirm = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "confirm", 7);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, { "data-test": "language" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "container" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "h1 p" }, "I study"), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "p" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { "data-test": "source-language-selector", ref: (el) => (this.sourceLanguageSelect = el) }, Object.entries(languageList).map(([code, name]) => ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: this.sourceLanguage === code, value: code }, name))))), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "h1 p" }, "I speak"), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "p" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { "data-test": "target-language-selector", ref: (el) => (this.targetLanguageSelect = el) }, Object.entries(languageList).map(([code, name]) => ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: this.targetLanguage === code, value: code }, name))))), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "button-container" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "button", onClick: () => this.confirm.emit({
        sourceLanguage: this.sourceLanguageSelect.value,
        targetLanguage: this.targetLanguageSelect.value,
      }), "data-test": "subscribe-button", disabled: this.waiting }, this.waiting ? 'Saving...' : 'Save')))));
  }
};
VocablyLanguage.style = vocablyLanguageCss;

const vocablyLogoCss = ":host{--logo-color:#000000;display:inline-block;line-height:0;visibility:visible !important}.svg{height:100%;width:auto}.svg .primary{fill:#0050ff}";

const VocablyLogo = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "1086", height: "258", viewBox: "0 0 1086 258", class: "svg", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M363.813 199.05L323.32 50.7578H346.993L378.453 178.8H379.699L411.159 50.7578H434.831L394.338 199.05H363.813Z", fill: "#212121" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M494.948 201.853C482.488 201.853 472.832 199.361 465.668 194.065C458.504 188.769 453.52 181.292 450.406 171.634C447.291 161.977 445.733 150.45 445.733 137.054C445.733 123.658 447.291 112.131 450.406 102.473C453.52 92.8152 458.504 85.3385 465.668 80.0423C472.832 74.7462 482.488 72.2539 494.948 72.2539C507.407 72.2539 517.063 74.7462 524.227 80.0423C531.391 85.3385 536.375 92.8152 539.178 102.473C542.293 112.131 543.539 123.658 543.539 137.054C543.539 150.45 541.982 161.977 539.178 171.634C536.375 181.292 531.08 188.769 524.227 194.065C517.063 199.361 507.407 201.853 494.948 201.853ZM494.948 183.784C499.931 183.784 503.981 183.161 507.407 181.915C510.833 180.669 513.325 178.488 515.506 175.061C517.686 171.946 518.932 166.961 519.866 161.042C520.489 154.811 521.112 147.023 521.112 137.054C521.112 127.085 520.801 119.296 519.866 113.065C518.932 106.834 517.686 102.161 515.506 99.046C513.637 95.9307 510.833 93.4385 507.407 92.1924C503.981 90.9462 499.931 90.3232 494.948 90.3232C489.964 90.3232 485.603 90.9462 482.177 92.1924C478.751 93.4385 476.259 95.6191 474.078 99.046C471.898 102.161 470.652 107.146 469.718 113.065C468.783 119.296 468.472 127.085 468.472 137.054C468.472 147.023 468.783 154.811 469.718 161.042C470.652 167.273 471.898 171.946 474.078 175.061C476.259 178.177 478.751 180.669 482.177 181.915C485.603 183.161 489.964 183.784 494.948 183.784Z", fill: "#212121" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M622.033 201.853C612.066 201.853 603.033 199.673 595.246 195.311C587.459 190.95 581.54 183.784 577.18 174.126C572.819 164.469 570.638 152.007 570.638 136.43C570.638 123.657 572.196 113.065 574.999 104.654C577.803 96.2423 581.852 89.6999 587.147 85.0268C592.131 80.3537 598.36 76.927 605.213 75.0578C612.066 73.1885 619.23 71.9424 627.017 71.9424C633.247 71.9424 639.165 72.254 645.083 73.1886C651.001 74.1232 655.673 74.7461 659.1 75.6807L656.608 93.4385C653.493 93.127 648.821 92.5036 642.903 91.569C636.673 90.9459 630.443 90.3232 624.214 90.3232C618.918 90.3232 614.558 90.6344 611.131 91.569C608.016 92.5036 605.213 93.7499 603.344 95.6191C600.541 98.423 598.36 103.408 596.803 110.573C595.246 117.738 594.311 126.461 594.311 136.742C594.311 146.088 594.934 153.877 596.492 159.796C598.049 165.715 599.606 170.077 601.475 172.881C603.344 175.996 605.213 177.865 606.771 179.111C607.705 179.734 609.262 180.669 611.131 181.292C613 181.915 615.804 182.538 619.23 182.538C622.968 182.538 627.017 181.915 631.378 180.98C635.739 180.046 639.476 178.8 643.214 177.554C646.952 176.307 651.001 174.749 655.673 172.569L662.215 189.392C655.673 193.13 649.444 196.246 643.526 198.115C637.607 199.984 630.132 201.853 622.033 201.853Z", fill: "#212121" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M714.855 201.853C708.314 201.853 702.396 200.296 697.412 197.18C692.117 194.065 688.068 189.392 685.264 183.473C682.461 177.553 680.904 170.388 680.904 161.977C680.904 151.696 683.084 143.907 687.133 137.988C691.494 132.38 697.412 128.019 705.199 125.527C712.986 123.034 722.019 121.788 732.298 121.788H752.856C752.856 114.935 752.545 109.327 752.233 104.965C751.922 100.604 750.676 97.177 749.119 94.9962C747.873 93.4385 746.315 92.1921 744.135 91.569C741.954 90.9459 739.151 90.6346 735.725 90.6346C730.43 90.6346 724.823 91.2577 719.528 92.1923C714.232 93.1269 709.249 94.373 704.888 95.6191C700.527 96.8653 695.543 98.7344 690.248 100.604L684.018 83.7806C689.625 81.2883 694.609 79.4194 699.281 77.8617C703.953 76.304 709.249 75.0577 715.167 73.8115C721.085 72.5654 727.003 71.9424 733.544 71.9424C743.823 71.9424 752.233 73.8114 758.152 77.5498C764.381 81.2883 768.742 86.5847 771.234 93.4385C774.037 100.292 775.283 108.392 775.283 117.738V199.049H760.332L757.217 185.965H755.971C755.037 186.588 753.168 187.834 750.676 189.703C748.184 191.261 745.069 193.13 741.331 195C737.594 196.869 733.544 198.426 729.184 199.984C724.511 201.23 719.839 201.853 714.855 201.853ZM719.839 182.85C724.511 182.85 729.184 182.227 733.544 180.669C737.905 179.111 741.954 177.554 745.381 175.996C748.807 174.438 750.987 173.192 752.545 172.257V141.104C751.299 140.792 748.807 140.481 745.069 140.169C741.331 139.858 736.659 139.546 731.052 139.546C718.905 139.546 711.429 140.792 708.626 143.285C707.068 144.531 705.822 146.711 704.888 149.827C703.953 152.942 703.642 156.992 703.642 161.665C703.642 169.142 704.888 174.438 707.38 177.865C709.872 181.292 713.921 182.85 719.839 182.85Z", fill: "#212121" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M860.63 201.854C856.58 201.854 851.597 201.542 845.678 200.607C839.76 199.673 833.842 198.738 827.612 197.492C821.694 196.246 816.399 194.688 811.727 193.442V38.6079H834.154V76.6157C835.711 76.3042 838.203 75.6811 841.629 75.058C845.056 74.4349 848.482 73.8119 852.843 73.1889C856.892 72.5658 860.941 72.2541 864.991 72.2541C878.073 72.2541 888.04 77.2388 895.204 87.208C902.369 97.1772 905.795 113.065 905.795 135.184C905.795 148.892 904.549 160.108 902.057 168.831C899.565 177.554 896.139 184.408 891.778 189.081C887.417 193.754 882.745 197.18 877.138 199.05C871.532 200.919 866.236 201.854 860.63 201.854ZM860.007 182.85C863.433 182.85 866.236 182.538 868.417 182.227C870.597 181.915 872.155 180.981 873.401 179.734C874.646 178.488 875.892 176.308 877.45 173.504C879.007 170.7 879.942 165.715 881.188 159.173C882.122 152.631 882.745 143.285 882.745 131.758C882.745 120.231 882.122 111.508 881.188 105.9C880.253 100.293 878.384 96.5542 876.515 94.9965C874.024 92.8157 869.351 91.5693 862.187 91.5693C855.335 91.5693 849.416 92.1926 844.433 93.4388C839.449 94.6849 836.023 95.6196 834.154 96.5542V180.046C835.4 180.357 836.957 180.669 839.449 181.292C841.941 181.915 844.744 182.227 848.17 182.538C851.597 182.538 855.646 182.85 860.007 182.85Z", fill: "#212121" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M939.435 199.05V38.2964H961.862V199.05H939.435Z", fill: "#212121" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M1007.03 234.565L1024.16 187.212L983.977 75.0581H1007.34L1034.13 163.223H1035.06L1061.54 75.0581H1085.21L1042.85 192.196L1030.39 234.877H1007.03V234.565Z", fill: "#212121" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M216.928 48.8888H19.1319C9.78725 48.8888 2 56.3657 2 66.0235V178.178C2 187.524 9.47576 195.312 19.1319 195.312H32.2145V235.812C32.2145 244.224 36.8869 251.701 44.0511 255.439C46.8545 256.997 49.9695 257.62 53.0844 257.62C57.7567 257.62 62.1176 256.062 66.1669 253.258L131.58 195.624H216.928C226.273 195.624 234.06 188.147 234.06 178.489V66.3349C234.06 56.6772 226.273 48.8888 216.928 48.8888ZM57.1337 241.42C54.3303 243.601 51.8384 242.666 50.9039 242.043C49.9695 241.42 47.4775 239.862 47.4775 235.812V125.839C47.4775 118.673 52.4613 108.081 58.0682 103.408L119.743 49.8236V186.277L57.1337 241.42Z", class: "primary" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M194.501 14.308C194.501 4.96178 184.533 -4.07308 172.696 4.33847L132.514 38.2963H194.501V14.308Z", class: "primary" }))));
  }
};
VocablyLogo.style = vocablyLogoCss;

const vocablyMobileButtonCss = ":host{display:block;visibility:visible !important}.button{color:#000000;display:flex;border-radius:19px;line-height:19px;background-color:#fff;padding:8px;border:none;cursor:pointer;box-sizing:content-box;align-items:center;justify-content:center;box-shadow:0 6px 16px rgba(0, 0, 0, 0.6);user-select:none;-webkit-user-select:none;transition:all 0.2s}.button:active{box-shadow:0 3px 10px rgba(0, 0, 0, 0.4)}.button .svg{height:17.1px}.button .caption{margin-left:8px;white-space:nowrap;overflow:hidden;font-size:16px;animation-duration:1s;animation-name:slideIn}@keyframes slideIn{from{max-width:0}to{max-width:100px}}";

const VocablyMobileButton = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "button", onTouchStart: () => true }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { viewBox: "0 0 633 699", fill: "none", class: "svg" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M585.428 130.443H46.6646C21.2112 130.443 0 150.809 0 177.116V482.609C0 508.067 20.3627 529.281 46.6646 529.281H82.2994V639.599C82.2994 662.511 95.026 682.877 114.54 693.06C122.176 697.303 130.661 699 139.145 699C151.872 699 163.75 694.757 174.78 687.12L352.954 530.13H585.428C610.882 530.13 632.093 509.764 632.093 483.457V177.964C632.093 151.658 610.882 130.443 585.428 130.443ZM150.175 654.874C142.539 660.814 135.752 658.268 133.206 656.57C130.661 654.873 123.873 650.63 123.873 639.599V340.045C123.873 320.527 137.448 291.676 152.72 278.947L320.713 132.989V504.672L150.175 654.874Z", fill: "#0050FF" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M524.34 36.2492C524.34 10.7914 497.19 -13.8184 464.949 9.09357L355.499 101.59H524.34V36.2492Z", fill: "#0050FF" })), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "caption" }, "Look up"))));
  }
};
VocablyMobileButton.style = vocablyMobileButtonCss;

const vocablyPlaySoundCss = "vocably-play-sound{display:inline-block;vertical-align:baseline;visibility:visible !important}.vocably-play-sound-button{padding:0;background:none;border:none;cursor:pointer;width:18px}.vocably-play-sound-button:disabled{cursor:default}";

const VocablyPlaySound = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.isLoading = false;
    this.isPlaying = false;
    this.isPlayError = false;
  }
  async play() {
    this.isLoading = true;
    const result = await this.playAudioPronunciation({
      text: this.text,
      language: this.language,
    });
    if (result.success === false) {
      this.isPlayError = true;
    }
    this.isLoading = false;
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "vocably-play-sound-button", onClick: () => this.play(), disabled: this.isPlaying || this.isLoading || this.isPlayError, title: this.isPlayError
        ? `Unfortunately, Vocably is unable to play the audio pronunciation on this website due to its security policies`
        : null }, !this.isPlayError && !this.isLoading && !this.isPlaying && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-play-circle", null)), !this.isPlayError && (this.isLoading || this.isPlaying) && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-volume-medium", null)), this.isPlayError && (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-error", null))));
  }
};
VocablyPlaySound.style = vocablyPlaySoundCss;

const vocablyPopupCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;visibility:visible !important;--max-height:48vh;--max-width:100vw;--background-rgb:255, 255, 255;--header-height:19px;--header-padding-top:11px;--header-padding-bottom:20px;--header-decay-length:10px;--padding-x:20px;--border-radius:16px;--padding-bottom:20px;--shadow-spread:10px;--shadow-v-offset:4px;--scrollbar-track:6px;--scrollbar-gutter:calc((var(--padding-x) - var(--scrollbar-track)) / 2);display:inline-block;padding:calc(var(--shadow-spread) - var(--shadow-v-offset)) var(--shadow-spread) calc(var(--shadow-spread) + var(--shadow-v-offset));text-align:left}@supports (-webkit-touch-callout: none){:host{--scrollbar-track:0px}}:host .popup{background:rgb(var(--background-rgb));box-shadow:0 var(--shadow-v-offset) var(--shadow-spread) rgba(0, 0, 0, 0.6);border-radius:var(--border-radius);box-sizing:border-box;position:relative;padding-top:calc(var(--header-height) + var(--header-padding-top));padding-right:var(--scrollbar-gutter);padding-bottom:1px;padding-left:0}:host .header{position:absolute;background:linear-gradient(0deg, rgba(255, 255, 255, 0), white var(--header-decay-length));left:0;right:0;top:0;height:var(--header-height);border-radius:var(--border-radius) 0 0 0;display:flex;align-items:center;padding:var(--header-padding-top) 0 var(--header-padding-bottom) var(--padding-x);margin-right:var(--padding-x)}:host .header .logo{height:var(--header-height)}:host .header .close{border:none;padding:0;background:none;text-align:center;cursor:pointer;margin-left:auto;position:relative;right:-7px}:host .footer{position:absolute;background:linear-gradient(0deg, white 0%, rgba(255, 255, 255, 0) 100%);left:0;right:0;bottom:0;height:var(--padding-bottom);border-radius:0 0 var(--border-radius) var(--border-radius);pointer-events:none}:host .body{--padding-right:calc(\n    var(--padding-x) - var(--scrollbar-track) - var(--scrollbar-gutter)\n  );min-width:140px;overflow:auto;overflow-y:scroll;box-sizing:border-box;max-height:calc(var(--max-height) - var(--header-padding-top) - var(--header-padding-top) - var(--header-padding-bottom) - var(--padding-bottom) - var(--shadow-spread) * 2);max-width:calc(var(--max-width) - var(--padding-right) - var(--padding-x));scrollbar-gutter:stable;padding-top:var(--header-padding-bottom);padding-left:var(--padding-x);padding-right:var(--padding-right);padding-bottom:var(--padding-bottom)}:host .body::-webkit-scrollbar{-webkit-appearance:none;width:var(--scrollbar-track);height:var(--scrollbar-track)}:host .body::-webkit-scrollbar-thumb{border-radius:4px;background-color:#a4a4a4;-webkit-box-shadow:0 0 1px rgba(255, 255, 255, 0.5)}:host .content-wrapper{overflow:hidden;width:0;height:0}:host .content-unlimited{width:80vw}:host .content{display:inline-block}";

const VocablyPopup = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.close = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "close", 7);
  }
  componentDidRender() {
    const contentWrapper = this.el.shadowRoot.getElementById('content-wrapper');
    const content = this.el.shadowRoot.getElementById('content');
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        const rect = content.getBoundingClientRect();
        contentWrapper.style.width = `${rect.width}px`;
        contentWrapper.style.height = `${rect.height}px`;
      });
    });
    resizeObserver.observe(content);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "popup" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body", id: "body" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content-wrapper", id: "content-wrapper" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content-unlimited" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content", id: "content" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))))), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-logo", { class: "logo" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-close-button", { class: "close" })), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "footer" }))));
  }
  get el() { return (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
VocablyPopup.style = vocablyPopupCss;

const vocablyRateCss = "vocably-rate{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}";

const VocablyRate = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.userSelected = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "userSelected", 7);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", null, "You can help this project.")), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mt-12" }, "Vocably is 100% free and open-source."), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mt-12" }, "Your positive review on ", this.platform.name, " would help other users to discover this project."), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mt-12" }, "If you are missing or don't like something, you can always", ' ', (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: "https://app.vocably.pro/feedback", target: "_blank", class: "vocably-text-link", onClick: () => this.userSelected.emit('feedback') }, "let me know"), ".", (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", null), " I take every feedback seriously."), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mt-12" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: this.platform.url, target: "_blank", class: "vocably-button", onClick: () => this.userSelected.emit('review') }, "Help this project. Leave a review."), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "vocably-link-button", onClick: () => this.userSelected.emit('later') }, "Ask me later.")), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mt-12" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "vocably-link-button vocably-text-link vocably-small", onClick: () => this.userSelected.emit('never') }, "Please stop asking me about this."))));
  }
};
VocablyRate.style = vocablyRateCss;

const vocablySignInCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}.container{display:inline-block}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:20px;text-align:center;text-decoration:none;width:calc(100% - 6px * 2);transition:background-color 200ms;margin:0 6px 9px;box-shadow:0 3px 6px rgba(0, 80, 255, 0.25);text-decoration:none !important}.button:hover,.button:focus{background:#0047e3}.button:active{background:#0047e3;box-shadow:inset 0px 0px 15px rgba(3, 36, 108, 0.4)}.p{margin-bottom:16px;text-align:center}.p a{color:#0050ff}.link{text-decoration:underline !important;text-decoration-thickness:0.5px !important;text-underline-offset:2px !important;color:#0050ff !important;background:none !important;border:none !important;border-radius:0 !important}.link:hover,.link:focus,.link:active{color:#0047e3 !important}";

const VocablySignIn = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.confirm = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "confirm", 7);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, { "data-test": "sign-in" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "p" }, "Please sign in to proceed."), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "p" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "button", "data-test": "sign-in-button", onClick: () => this.confirm.emit() }, "Sign in or Create an account")), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "By signing in, you agree to our", ' ', (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "link", href: "https://vocably.pro/terms-and-conditions.html", target: "_blank" }, "Terms of Service"), ' ', "and", ' ', (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "link", href: "https://vocably.pro/privacy-policy.html", target: "_blank" }, "Privacy Policy"), ".")));
  }
};
VocablySignIn.style = vocablySignInCss;

const vocablySpinnerCss = ":host{display:inline-block;width:140px;height:18px;vertical-align:middle;visibility:visible !important}.spinner{text-align:center;height:18px}.spinner>div{width:18px;height:18px;background-color:#0050ff;border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.spinner .bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner .bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}";

const VocablySpinner = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "spinner" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "bounce1" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "bounce2" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "bounce3" }))));
  }
};
VocablySpinner.style = vocablySpinnerCss;

const vocablySubscribeCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}.container{display:inline-block}.message{margin-bottom:16px}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:20px;text-align:center;text-decoration:none;width:calc(100% - 6px * 2);transition:background-color 200ms;margin:0 6px 9px;box-shadow:0 3px 6px rgba(0, 80, 255, 0.25);text-decoration:none !important}.button:hover,.button:focus{background:#0047e3}.button:active{background:#0047e3;box-shadow:inset 0px 0px 15px rgba(3, 36, 108, 0.4)}";

const VocablySubscribe = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.confirm = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "confirm", 7);
    this.trial = false;
  }
  render() {
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, { "data-test": "subscribe" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "container" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "message" }, this.trial
      ? 'Request a 7 day free trial to proceed.'
      : 'Please subscribe to proceed.'), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "button-container" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "button", onClick: () => this.confirm.emit(), "data-test": "subscribe-button" }, this.trial ? 'Request a 7 day free trial' : 'Subscribe')))));
  }
};
VocablySubscribe.style = vocablySubscribeCss;

const isDirectNecessary = (analyse) => {
  if (analyse.translation.sourceLanguage === analyse.translation.targetLanguage) {
    return false;
  }
  if (analyse.cards.length === 0) {
    return true;
  }
  const card = analyse.cards[0].data;
  if (analyse.source === card.source &&
    analyse.translation.target === card.translation) {
    return false;
  }
  return true;
};

const sortLanguages = (existingLanguages) => (entryA, entryB) => {
  const isEntryAExists = existingLanguages.includes(entryA[0]);
  const isEntryBExists = existingLanguages.includes(entryB[0]);
  if (isEntryAExists && !isEntryBExists) {
    return -1;
  }
  if (!isEntryAExists && isEntryBExists) {
    return 1;
  }
  return entryA[1].localeCompare(entryB[1]);
};

const vocablyTranslationCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;visibility:visible !important}:host li{margin:0}.vocably-mb-4{margin-bottom:4px}.vocably-mb-6{margin-bottom:6px}.vocably-mt-12{margin-top:12px}.vocably-mb-12{margin-bottom:12px}.vocably-text-right{text-align:right}.vocably-text-link,.vocably-text-link:active,.vocably-text-link:visited{color:#6a6a6a !important;text-decoration:underline !important}.vocably-text-link:hover{color:#000000 !important}.vocably-emphasized{color:#000000;font-weight:bold}.vocably-small{font-size:14.4px}.vocably-muted{color:#bababa}.vocably-translation{display:flex;align-items:stretch;gap:8px}@media screen and (max-width: 600px){.vocably-translation{flex-direction:column}}.vocably-translation .vocably-translation-section{padding-left:14px}.vocably-translation .vocably-invisible-space{display:inline-block;width:0;font-size:0}.vocably-error{color:#ff5e5e}.vocably-loading-container{position:relative}.vocably-reload{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:white;opacity:0.5}@keyframes vocably-floating{0%{transform:translate(0, -2px)}50%{transform:translate(1px, 2px)}100%{transform:translate(0, -2px)}}.vocably-save-hint-container{position:relative}.vocably-save-hint{position:absolute;width:165px;top:6px;right:40px;animation:vocably-floating 3s ease-in-out infinite;opacity:1;transition:opacity 200ms ease-in-out}.vocably-save-hint.vocably-save-hint-hidden{opacity:0}.vocably-cards{border:0.5px solid #bababa;border-radius:8px;background-color:#fbfbfb;margin-left:-14px;margin-bottom:1px}.vocably-cards .vocably-card{position:relative;padding:10px 14px 10px 14px;border-top:0.5px solid #bababa}.vocably-cards .vocably-card .vocably-safe-action-area{padding-right:34px}.vocably-cards .vocably-card:first-child{border-top:none}.vocably-cards .vocably-card .vocably-card-hint-displayed{padding-right:200px}.vocably-cards .vocably-card .vocably-card-action{position:absolute;right:14px;top:10px;min-width:24px;height:24px;line-height:24px;text-align:center}.vocably-cards .vocably-card .vocably-card-action-button{padding:0;margin:0;background:none;border:none;cursor:pointer;outline:none;min-width:auto;box-shadow:none;opacity:0.1;transition:opacity 200ms}.vocably-cards .vocably-card .vocably-card-action-button:hover{opacity:1}.vocably-cards .vocably-card .vocably-card-action-button>*{vertical-align:middle}vocably-play-sound{opacity:0.8;margin-right:4px}vocably-play-sound:hover{opacity:1}.vocably-rate-container{transition:all 1s ease-in-out;max-height:500px;opacity:1;box-sizing:border-box}.vocably-rate-container.vocably-rate-container-hidden{max-height:0;opacity:0}.vocably-rate-padding{padding:10px 14px 10px 14px}.vocably-direct-translation{display:flex;flex-direction:row}.vocably-added-congratulation{max-height:0;overflow:hidden;transition:max-height 0.5s ease-in-out}.vocably-added-congratulation.vocably-added-congratulation-visible{max-height:500px}.vocably-added-congratulation-content{padding-top:12px}.vocably-added-congratulation-content-1{padding:12px;background:white}.vocably-list{list-style:outside;padding:0;margin:0 0 0 16px}.vocably-italic{font-style:italic}.vocably-language-selector{display:flex;align-items:center;justify-content:space-between;gap:4px;margin-left:-14px;width:calc(100% + 14px)}.vocably-language-selector .vocably-language-wrapper{width:46%}.vocably-language-selector .vocably-language-wrapper .vocably-input-select{width:100%}.vocably-input-select{color:#6a6a6a !important;font-size:14.4px !important;padding:10px 14px !important;border:0.5px solid #bababa !important;border-radius:8px !important;appearance:none !important;background:#fbfbfb url('data:image/svg+xml;utf8,<svg width=\"11\" height=\"7\" viewBox=\"0 0 11 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1 5 6 1 1\" stroke=\"rgb(109, 109, 109)\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/></svg>') no-repeat !important;background-position:right 14px top 50% !important;outline:none !important;height:auto !important;line-height:inherit !important;box-shadow:none !important;box-sizing:border-box !important;width:100% !important}.vocably-button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:20px;text-align:center;text-decoration:none;width:calc(100% - 6px * 2);transition:background-color 200ms;margin:0 6px 9px;box-shadow:0 3px 6px rgba(0, 80, 255, 0.25);text-decoration:none !important;padding-left:16px;padding-right:16px;width:auto}.vocably-button:hover,.vocably-button:focus{background:#0047e3}.vocably-button:active{background:#0047e3;box-shadow:inset 0px 0px 15px rgba(3, 36, 108, 0.4)}.vocably-link-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;text-decoration:underline !important;text-decoration-thickness:0.5px !important;text-underline-offset:2px !important;color:#0050ff !important;background:none !important;border:none !important;border-radius:0 !important}.vocably-link-button:hover,.vocably-link-button:focus,.vocably-link-button:active{color:#0047e3 !important}";

const VocablyTranslation = class {
  constructor(hostRef) {
    (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.ratingInteraction = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "ratingInteraction", 7);
    this.changeSourceLanguage = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "changeSourceLanguage", 7);
    this.changeTargetLanguage = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "changeTargetLanguage", 7);
    this.removeCard = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "removeCard", 7);
    this.addCard = (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "addCard", 7);
    this.result = null;
    this.loading = false;
    this.existingSourceLanguages = [];
    this.existingTargetLanguages = [];
    this.isFeedbackEnabled = true;
    this.askForRating = false;
    this.sourceLanguage = '';
    this.targetLanguage = '';
    this.isUpdating = null;
    this.showSaveHint = true;
    this.canCongratulate = false;
    this.saveCardClicked = false;
    this.addedItemIndex = -1;
  }
  async play() {
    const playSoundElement = this.el.shadowRoot.querySelector('vocably-play-sound');
    if (!playSoundElement) {
      return;
    }
    playSoundElement.play();
  }
  render() {
    const sourceLanguageSelector = this.result && this.result.success && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "vocably-input-select", disabled: this.loading, onChange: (event) => this.changeSourceLanguage.emit(event.target.value) }, Object.entries(languageList)
      .sort(sortLanguages(this.existingSourceLanguages))
      .map(([code, name]) => ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: this.sourceLanguage === code, value: code }, name)))));
    const targetLanguageSelector = this.result && this.result.success && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "vocably-input-select", disabled: this.loading, onChange: (event) => this.changeTargetLanguage.emit(event.target.value) }, Object.entries(languageList)
      .sort(sortLanguages(this.existingTargetLanguages))
      .map(([code, name]) => ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: this.targetLanguage === code, value: code }, name)))));
    const showDirect = this.result &&
      this.result.success &&
      isDirectNecessary(this.result.value);
    return ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.H, { "data-test": "translation-container" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-loading-container" }, this.result === null && (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-spinner", null), this.result && this.result.success === false && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-error" }, "An error has occurred.")), this.result && this.result.success === true && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-translation", "data-test": "translation" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-translation-section" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mb-12 vocably-language-selector" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-language-wrapper" }, sourceLanguageSelector), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-arrow-right", { class: "vocably-from-to" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-language-wrapper" }, targetLanguageSelector)), showDirect && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mb-12" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-small vocably-muted vocably-mb-4" }, "ChatGPT thinks that", ' '), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "vocably-emphasized" }, isGoogleTTSLanguage(this.result.value.translation.sourceLanguage) && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-play-sound", { text: this.phrase, language: this.result.value.translation.sourceLanguage, playAudioPronunciation: this.playAudioPronunciation })), this.phrase), ' ', "means ", (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, this.result.value.translation.target))), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-save-hint-container" }, this.showSaveHint && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-add-card-hint", { class: {
        'vocably-save-hint': true,
        'vocably-save-hint-hidden': this.saveCardClicked,
      } })), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-cards", "data-test": "cards" }, this.result.value.cards.map((card, itemIndex) => ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-test": "card", class: "vocably-card" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-card-action" }, isCardItem(card) && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "vocably-card-action-button", title: "Remove card", disabled: this.isUpdating !== null, onClick: () => {
        this.saveCardClicked = true;
        if (this.addedItemIndex === itemIndex) {
          this.addedItemIndex = -1;
        }
        this.result.success === true &&
          this.removeCard.emit({
            translationCards: this.result.value,
            card,
          });
      } }, this.isUpdating === card && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-spin", null)), this.isUpdating !== card && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-remove", null)))), isDetachedCardItem(card) && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "vocably-card-action-button", title: "Add card", disabled: this.isUpdating !== null, onClick: () => {
        this.saveCardClicked = true;
        if (this.addedItemIndex === -1) {
          this.addedItemIndex = itemIndex;
        }
        this.result.success === true &&
          this.addCard.emit({
            translationCards: this.result.value,
            card,
          });
      } }, this.isUpdating === card && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-spin", null)), this.isUpdating !== card && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-add", null))))), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        'vocably-safe-action-area': true,
        'vocably-card-hint-displayed': itemIndex === 0 && this.showSaveHint,
      } }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-source", { card: card, playAudioPronunciation: this.playAudioPronunciation, class: "vocably-mb-6" }), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-definitions", { class: "vocably-mb-6", card: card }), card.data.example && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-small vocably-mb-6" }, "Example:"), (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-examples", { example: card.data.example })))), this.canCongratulate && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'vocably-added-congratulation' +
        (this.addedItemIndex === itemIndex
          ? ' vocably-added-congratulation-visible'
          : '') }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-added-congratulation-content" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-added-congratulation-content-1" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-first-translation-congratulation", null)))))))))), this.askForRating && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-rate-container", ref: (el) => (this.askForRatingContainer = el) }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-cards vocably-rate-padding vocably-mt-12" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-rate", { platform: this.extensionPlatform, onUserSelected: (choiceEvent) => {
        switch (choiceEvent.detail) {
          case 'review':
          case 'feedback':
            break;
          case 'later':
            this.askForRatingContainer.classList.add('vocably-rate-container-hidden');
            break;
          case 'never':
            this.askForRatingContainer.classList.add('vocably-rate-container-hidden');
            break;
        }
        this.ratingInteraction.emit(choiceEvent.detail);
      } })))), this.isFeedbackEnabled && !this.askForRating && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mt-12 vocably-text-right vocably-small" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: "https://app.vocably.pro/feedback", target: "_blank", class: "vocably-text-link" }, "Are you missing anything? Feel free to let me know."))))), this.loading && ((0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-reload", "data-test": "reload" }, (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-spinner", null))))))));
  }
  get el() { return (0,_index_692251fe_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
VocablyTranslation.style = vocablyTranslationCss;




/***/ }),

/***/ 3469:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./vocably-add-card-hint_24.entry.js": [
		4867,
		694
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3469;
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ../extension-content-ui/dist/esm/index-692251fe.js
var index_692251fe = __webpack_require__(6822);
;// CONCATENATED MODULE: ../extension-content-ui/dist/esm/loader.js


/*
 Stencil Client Patch Esm v2.17.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return (0,index_692251fe.p)();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return (0,index_692251fe.b)([["vocably-add-card-hint_24",[[1,"vocably-translation",{"phrase":[1],"result":[16],"loading":[4],"existingSourceLanguages":[16],"existingTargetLanguages":[16],"isFeedbackEnabled":[4,"is-feedback-enabled"],"askForRating":[4,"ask-for-rating"],"sourceLanguage":[1,"source-language"],"targetLanguage":[1,"target-language"],"isUpdating":[16],"showSaveHint":[4,"show-save-hint"],"canCongratulate":[4,"can-congratulate"],"playAudioPronunciation":[16],"extensionPlatform":[16],"saveCardClicked":[32],"addedItemIndex":[32],"play":[64]}],[1,"vocably-popup"],[1,"vocably-button"],[1,"vocably-language",{"sourceLanguage":[1,"source-language"],"targetLanguage":[1,"target-language"],"waiting":[4]}],[1,"vocably-mobile-button"],[1,"vocably-sign-in"],[1,"vocably-subscribe",{"trial":[4]}],[0,"vocably-card-source",{"card":[16],"playAudioPronunciation":[16]}],[1,"vocably-add-card-hint"],[0,"vocably-card-definitions",{"card":[16]}],[0,"vocably-card-examples",{"example":[1]}],[0,"vocably-close-button"],[1,"vocably-first-translation-congratulation"],[1,"vocably-icon-add"],[1,"vocably-icon-arrow-right"],[1,"vocably-icon-remove"],[1,"vocably-icon-spin"],[1,"vocably-logo"],[0,"vocably-rate",{"platform":[16]}],[1,"vocably-spinner"],[1,"vocably-play-sound",{"text":[1],"language":[1],"playAudioPronunciation":[16],"isLoading":[32],"isPlaying":[32],"isPlayError":[32],"play":[64]}],[1,"vocably-icon-error"],[1,"vocably-icon-play-circle"],[1,"vocably-icon-volume-medium"]]]], options);
  });
};



;// CONCATENATED MODULE: ../extension-content-ui/loader/index.js

(function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;Object.setPrototypeOf(HTMLElement,a)}})();



// EXTERNAL MODULE: ../../node_modules/@webcomponents/custom-elements/custom-elements.min.js
var custom_elements_min = __webpack_require__(3166);
;// CONCATENATED MODULE: ../../node_modules/tslib/tslib.es6.js
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction_isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Subscription.js




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction_isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction_isFunction(value.remove) && isFunction_isFunction(value.add) && isFunction_isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction_isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/config.js
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        var onUnhandledError = config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() { }
//# sourceMappingURL=noop.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        captureError(error);
    }
    else {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};
//# sourceMappingURL=Subscriber.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/pipe.js

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Observable.js







var Observable_Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_isFunction(value.next) && isFunction_isFunction(value.error) && isFunction_isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}
//# sourceMappingURL=Observable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Subject.js






var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_Observable));

var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/lift.js

function hasLift(source) {
    return isFunction_isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/map.js


function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isPromise.js

function isPromise(value) {
    return isFunction_isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js


function isInteropObservable(input) {
    return isFunction_isFunction(input[observable]);
}
//# sourceMappingURL=isInteropObservable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator_iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isIterable.js


function isIterable(input) {
    return isFunction_isFunction(input === null || input === void 0 ? void 0 : input[iterator_iterator]);
}
//# sourceMappingURL=isIterable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js


function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction_isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js












function innerFrom(input) {
    if (input instanceof Observable_Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable_Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction_isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable_Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable_Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable_Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable_Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=innerFrom.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
//# sourceMappingURL=executeSchedule.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
//# sourceMappingURL=mergeInternals.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction_isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js


function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return mergeMap(identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/empty.js

var EMPTY = new Observable_Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isScheduler.js

function isScheduler(value) {
    return value && isFunction_isFunction(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/args.js


function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return isScheduler(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/observeOn.js



function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
    });
}
//# sourceMappingURL=observeOn.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js

function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}
//# sourceMappingURL=subscribeOn.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js



function scheduleObservable(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js



function schedulePromise(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js

function scheduleArray(input, scheduler) {
    return new Observable_Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
//# sourceMappingURL=scheduleArray.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js




function scheduleIterable(input, scheduler) {
    return new Observable_Observable(function (subscriber) {
        var iterator;
        executeSchedule(subscriber, scheduler, function () {
            iterator = input[iterator_iterator]();
            executeSchedule(subscriber, scheduler, function () {
                var _a;
                var value;
                var done;
                try {
                    (_a = iterator.next(), value = _a.value, done = _a.done);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function () { return isFunction_isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return(); };
    });
}
//# sourceMappingURL=scheduleIterable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js


function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable_Observable(function (subscriber) {
        executeSchedule(subscriber, scheduler, function () {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule(subscriber, scheduler, function () {
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
//# sourceMappingURL=scheduleAsyncIterable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js


function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js













function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        if (isAsyncIterable(input)) {
            return scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable(input)) {
            return scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike(input)) {
            return scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw createInvalidObservableTypeError(input);
}
//# sourceMappingURL=scheduled.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/from.js


function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
//# sourceMappingURL=from.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/merge.js





function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    var concurrent = popNumber(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            EMPTY
        : sources.length === 1
            ?
                innerFrom(sources[0])
            :
                mergeAll(concurrent)(from(sources, scheduler));
}
//# sourceMappingURL=merge.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/Action.js


var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription));

//# sourceMappingURL=Action.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js




var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        intervalProvider.clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
    now: function () {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=dateTimestampProvider.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Scheduler.js

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider.now;
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js


var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        _this._scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js


var asyncScheduler = new AsyncScheduler(AsyncAction);
var async_async = asyncScheduler;
//# sourceMappingURL=async.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/timer.js




function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    if (scheduler === void 0) { scheduler = async_async; }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable_Observable(function (subscriber) {
        var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
//# sourceMappingURL=timer.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/take.js



function take(count) {
    return count <= 0
        ?
            function () { return EMPTY; }
        : operate(function (source, subscriber) {
            var seen = 0;
            source.subscribe(createOperatorSubscriber(subscriber, function (value) {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}
//# sourceMappingURL=take.js.map
;// CONCATENATED MODULE: ../../node_modules/@vocably/hermes/dist/esm/index.js
let browserEnv;
if (typeof chrome !== 'undefined') {
    browserEnv = chrome;
    // @ts-ignore
}
else if (typeof browser !== 'undefined') {
    // @ts-ignore
    browserEnv = browser;
}
const makeSend = (identifier) => (data, extensionId) => {
    return new Promise((resolve, reject) => {
        if (!browserEnv) {
            reject('browserEnv environment is not defined');
            return;
        }
        if (!browserEnv.runtime) {
            reject('browserEnv.runtime is not defined defined');
            return;
        }
        const sendParams = [
            { identifier, data },
            (response) => {
                if (browserEnv.runtime.lastError) {
                    return reject(browserEnv.runtime.lastError);
                }
                resolve(response);
            },
        ];
        if (extensionId) {
            sendParams.unshift(extensionId);
        }
        browserEnv.runtime.sendMessage(...sendParams);
    });
};
const makeListener = (identifier, callback) => (request, sender, nativeSendResponse) => {
    if (typeof request !== 'object' ||
        request === null ||
        request.identifier !== identifier) {
        return;
    }
    const data = request.data;
    const sendResponse = (r) => {
        nativeSendResponse(r);
        return r;
    };
    callback(sendResponse, data);
    return true;
};
const createMessage = (identifier) => {
    const subscribe = (callback) => {
        browserEnv.runtime.onMessage.addListener(makeListener(identifier, callback));
    };
    return [makeSend(identifier), subscribe];
};
const createExternalMessage = (identifier) => {
    const send = makeSend(identifier);
    const subscribe = (callback) => {
        browserEnv.runtime.onMessageExternal.addListener(makeListener(identifier, callback));
    };
    return [
        (extensionId, data) => send(data, extensionId),
        subscribe,
    ];
};

;// CONCATENATED MODULE: ../extension-messages/dist/esm/index.js

const createScope = (scope) => (identifier) => createMessage(`${scope}.${identifier}`);
const createScopedMessage = createScope('vocably');
const [isLoggedIn, onIsLoggedInRequest] = createScopedMessage('isLoggedIn');
const [getSettings, onGetSettingsRequest] = createScopedMessage('getSettings');
const [setSettings, onSetSettingsRequest] = createScopedMessage('setSettings');
const [isActive, onIsActiveRequest] = createScopedMessage('isActive');
const [isEligibleForTrial, onIsEligibleForTrialRequest] = createScopedMessage('isEligibleForTrial');
const [analyze, onAnalyzeRequest] = createScopedMessage('analyze');
const [removeCard, onRemoveCardRequest] = createScopedMessage('removeCard');
const [addCard, onAddCardRequest] = createScopedMessage('addCard');
const [listLanguages, onListLanguagesRequest] = createScopedMessage('listLanguages');
const [listTargetLanguages, onListTargetLanguagesRequest] = createScopedMessage('listTargetLanguages');
const [getLocationLanguage, onGetLocationLanguageRequest] = createScopedMessage('getLocationLanguage');
const [saveLocationLanguage, onSaveLocationLanguageRequest] = createScopedMessage('saveLocationLanguage');
const [cleanUp, onCleanUpRequest] = createScopedMessage('cleanUp');
const [ping, onPing] = createScopedMessage('ping');
const [getInternalProxyLanguage, onGetInternalProxyLanuage] = createScopedMessage('getInternalProxyLanguage');
const [setInternalProxyLanguage, onSetInternalProxyLanguage] = createScopedMessage('setInternalProxyLanguage');
const [getInternalSourceLanguage, onGetInternalSourceLanguage] = createScopedMessage('getInternalSourceLanguage');
const [setInternalSourceLanguage, onSetInternalSourceLanguage] = createScopedMessage('setInternalSourceLanguage');
const [isUserKnowsHowToAdd, onIsUserKnowsHowToAdd] = createScopedMessage('isUserKnowsHowToAdd');
const [setUserKnowsHowToAdd, onSetUserKnowsHowToAdd] = createScopedMessage('setUserKnowsHowToAdd');
const [pingExternal, onPingExternal] = createExternalMessage('vocably.ping-external');
const [setProxyLanguage, onSetProxyLanguage] = createExternalMessage('vocably.setProxyLanguage');
const [getProxyLanguage, onGetProxyLanguage] = createExternalMessage('vocably.getProxyLanguage');
const [setSourceLanguage, onSetSourceLanguage] = createExternalMessage('vocably.setSourceLanguage');
const [getSourceLanguage, onGetSourceLanguage] = createExternalMessage('vocably.getSourceLanguage');
const [getAudioPronunciation, onGetAudioPronunciation] = createScopedMessage('getAudioPronunciation');
const [askForRating, onAskForRating] = createScopedMessage('askForRating');
const [saveAskForRatingResponse, onSaveAskForRatingResponse] = createScopedMessage('askForRatingResponse');
const [playAudioPronunciation, onPlayAudioPronunciation] = createScopedMessage('playAudioPronunciation');
const [playAudioPronunciationOffscreen, onPlayAudioPronunciationOffscreen,] = createScopedMessage('playAudioPronunciationOffscreen');
const [canPlayOffScreen, onCanPlayOffScreen] = createScopedMessage('canPlayOffScreen');

;// CONCATENATED MODULE: ../extension-content-script/dist/api.js
﻿
const api = {
    appBaseUrl: 'https://app.vocably.pro',
    isLoggedIn: isLoggedIn,
    getInternalProxyLanguage: getInternalProxyLanguage,
    setInternalProxyLanguage: setInternalProxyLanguage,
    getInternalSourceLanguage: getInternalSourceLanguage,
    setInternalSourceLanguage: setInternalSourceLanguage,
    analyze: analyze,
    addCard: addCard,
    removeCard: removeCard,
    cleanUp: cleanUp,
    isActive: isActive,
    ping: ping,
    listLanguages: listLanguages,
    listTargetLanguages: listTargetLanguages,
    isEligibleForTrial: isEligibleForTrial,
    isUserKnowsHowToAdd: isUserKnowsHowToAdd,
    setUserKnowsHowToAdd: setUserKnowsHowToAdd,
    getAudioPronunciation: getAudioPronunciation,
    playAudioPronunciation: playAudioPronunciation,
    canPlayOffScreen: canPlayOffScreen,
    askForRating: askForRating,
    saveAskForRatingResponse: saveAskForRatingResponse,
    getLocationLanguage: getLocationLanguage,
    saveLocationLanguage: saveLocationLanguage,
    getSettings: getSettings,
};
const configureApi = (options) => {
    Object.assign(api, options);
};

// EXTERNAL MODULE: ../../node_modules/bowser/es5.js
var es5 = __webpack_require__(7160);
;// CONCATENATED MODULE: ../extension-content-script/dist/browser.js
﻿
const browser_browser = es5.getParser(window.navigator.userAgent);

;// CONCATENATED MODULE: ../extension-content-script/dist/styling.js
﻿const isTop = (popupPosition) => {
    return Object.prototype.hasOwnProperty.call(popupPosition, 'top');
};
const applyPosition = (element, position) => {
    element.style.position = 'absolute';
    element.style.left = `${position.left}px`;
    if (isTop(position)) {
        element.style.top = `${position.top}px`;
    }
    else {
        element.style.top = `${position.bottom}px`;
    }
};
const setupTransform = (element) => {
    element.style.setProperty('--horizontal-displacement', '0px');
    element.style.setProperty('--translate-y', '0');
    element.style.transform = `translate(calc(-50% + var(--horizontal-displacement)), var(--translate-y))`;
};
const calculateDisplacement = (element, position) => {
    const rect = element.getBoundingClientRect();
    if (position.left - rect.width / 2 < window.scrollX) {
        return window.scrollX + (rect.width / 2 - position.left);
    }
    if (position.left + rect.width / 2 > window.innerWidth + window.scrollX) {
        return (window.innerWidth + window.scrollX - (position.left + rect.width / 2));
    }
    return 0;
};
const applyTransform = (element, position) => {
    const displacement = calculateDisplacement(element, position);
    if (displacement !== 0) {
        const animationDuration = 200;
        const originalTransition = element.style.transition;
        element.style.transition = `${originalTransition ? `${originalTransition}, ` : ''}transform ${animationDuration}ms`;
        setTimeout(() => {
            element.style.transition = originalTransition;
        }, animationDuration);
    }
    element.style.setProperty('--horizontal-displacement', `${displacement}px`);
    if (isTop(position)) {
        element.style.setProperty('--translate-y', '0');
    }
    else {
        element.style.setProperty('--translate-y', '-100%');
    }
};
const setHorizontalDisplacement = (element, displacement) => {
    element.style.setProperty('--horizontal-displacement', `${displacement}px`);
};
const applyMaxZIndex = (element) => {
    element.style.zIndex = '2147483647';
};

;// CONCATENATED MODULE: ../extension-content-script/dist/button/applyButtonPosition.js
﻿
const applyButtonPosition = ({ element, position, isTouchscreen, }) => {
    element.style.position = isTouchscreen ? 'fixed' : 'absolute';
    element.style.left = `${position.left}px`;
    if (isTouchscreen) {
        element.style.bottom = `60px`;
        return;
    }
    if (isTop(position)) {
        element.style.top = `${position.top}px`;
    }
    else {
        element.style.top = `${position.bottom}px`;
    }
};

;// CONCATENATED MODULE: ../extension-content-script/dist/contextLanguages.js
﻿const contextLanguages = [
    'da',
    'nl',
    'en',
    'fi',
    'fr',
    'de',
    'el',
    'he',
    'hi',
    'id',
    'it',
    'ms',
    'no',
    'pl',
    'pt',
    'ru',
    'es',
    'sv',
    'tr',
    'vi',
];

;// CONCATENATED MODULE: ../model/dist/esm/constants.js
const MAX_SYMBOLS_TO_BE_TRANSLATED = 150;

;// CONCATENATED MODULE: ../model/dist/esm/language.js
const GoogleLanguages = [
    'af',
    'sq',
    'am',
    'ar',
    'hy',
    'az',
    'eu',
    'be',
    'bn',
    'bs',
    'bg',
    'ca',
    'zh',
    'co',
    'haw',
    'hr',
    'cs',
    'da',
    'nl',
    'en',
    'eo',
    'et',
    'fi',
    'fr',
    'fy',
    'gl',
    'ka',
    'de',
    'el',
    'gu',
    'ht',
    'ha',
    'he',
    'hi',
    'hu',
    'hmn',
    'is',
    'ig',
    'id',
    'ga',
    'it',
    'ja',
    'jv',
    'kn',
    'kk',
    'km',
    'rw',
    'ko',
    'ku',
    'ky',
    'lo',
    'lv',
    'lt',
    'lb',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mn',
    'my',
    'ne',
    'no',
    'ny',
    'or',
    'ps',
    'fa',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sm',
    'gd',
    'sr',
    'st',
    'sn',
    'sd',
    'si',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tl',
    'tg',
    'ta',
    'tt',
    'te',
    'th',
    'tr',
    'tk',
    'zh-TW',
    'uk',
    'ur',
    'ug',
    'uz',
    'vi',
    'cy',
    'xh',
    'yi',
    'yo',
    'zu',
];
const ChatGPTLanguages = (/* unused pure expression or super */ null && ([
    'en',
    'es',
    'fr',
    'de',
    'zh',
    'zh-TW',
    'ja',
    'ru',
    'it',
    'pt',
    'ar',
    'nl',
    'ko',
    'hi',
    'tr',
    'sv',
    'no',
    'da',
    'fi',
    'fa',
    'pl',
    'el',
    'he',
    'th',
    'vi',
    'id',
    'ms',
    'uk',
]));
const NLPLanguages = (/* unused pure expression or super */ null && ([
    'af',
    'sq',
    'am',
    'ar',
    'hy',
    'az',
    'eu',
    'be',
    'bn',
    'bs',
    'bg',
    'my',
    'ca',
    'ny',
    'zh-CN',
    'zh-TW',
    'co',
    'hr',
    'cs',
    'da',
    'nl',
    'en',
    'eo',
    'et',
    'fi',
    'fr',
    'fy',
    'gl',
    'ka',
    'de',
    'el',
    'gu',
    'ht',
    'ha',
    'haw',
    'iw',
    'hi',
    'hmn',
    'hu',
    'is',
    'ig',
    'id',
    'ga',
    'it',
    'ja',
    'kn',
    'kk',
    'km',
    'ko',
    'ku',
    'ky',
    'lo',
    'lv',
    'lt',
    'lb',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mn',
    'ne',
    'no',
    'ps',
    'fa',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sm',
    'gd',
    'sr',
    'st',
    'sn',
    'sd',
    'si',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tl',
    'tg',
    'ta',
    'tt',
    'te',
    'th',
    'tr',
    'uk',
    'ur',
    'uz',
    'vi',
    'cy',
    'xh',
    'yi',
    'yo',
    'zu',
]));
const GoogleNLPLanguageMap = {
    he: 'iw',
    zh: 'zh-CN',
};
const googleToNlp = (googleLanguage) => {
    if (GoogleNLPLanguageMap[googleLanguage] !== undefined) {
        return GoogleNLPLanguageMap[googleLanguage];
    }
    return (NLPLanguages.find((nlpLanguage) => nlpLanguage === googleLanguage) ?? null);
};
const isGoogleLanguage = (language) => GoogleLanguages.indexOf(language) !== -1;
const isChatGPTLanguage = (language) => ChatGPTLanguages.indexOf(language) !== -1;

;// CONCATENATED MODULE: ../model/dist/esm/language-list.js
const languageList = {
    af: 'Afrikaans',
    sq: 'Albanian',
    am: 'Amharic',
    ar: 'Arabic',
    hy: 'Armenian',
    az: 'Azerbaijani',
    eu: 'Basque',
    be: 'Belarusian',
    bn: 'Bengali',
    bs: 'Bosnian',
    bg: 'Bulgarian',
    ca: 'Catalan',
    zh: 'Chinese (Simplified)',
    'zh-TW': 'Chinese (Traditional)',
    co: 'Corsican',
    hr: 'Croatian',
    cs: 'Czech',
    da: 'Danish',
    nl: 'Dutch',
    en: 'English',
    eo: 'Esperanto',
    et: 'Estonian',
    fi: 'Finnish',
    fr: 'French',
    fy: 'Frisian',
    gl: 'Galician',
    ka: 'Georgian',
    de: 'German',
    el: 'Greek',
    gu: 'Gujarati',
    ht: 'Haitian Creole',
    ha: 'Hausa',
    haw: 'Hawaiian',
    he: 'Hebrew',
    hi: 'Hindi',
    hmn: 'Hmong',
    hu: 'Hungarian',
    is: 'Icelandic',
    ig: 'Igbo',
    id: 'Indonesian',
    ga: 'Irish',
    it: 'Italian',
    ja: 'Japanese',
    jv: 'Javanese',
    kn: 'Kannada',
    kk: 'Kazakh',
    km: 'Khmer',
    rw: 'Kinyarwanda',
    ko: 'Korean',
    ku: 'Kurdish',
    ky: 'Kyrgyz',
    lo: 'Lao',
    lv: 'Latvian',
    lt: 'Lithuanian',
    lb: 'Luxembourgish',
    mk: 'Macedonian',
    mg: 'Malagasy',
    ms: 'Malay',
    ml: 'Malayalam',
    mt: 'Maltese',
    mi: 'Maori',
    mr: 'Marathi',
    mn: 'Mongolian',
    my: 'Myanmar (Burmese)',
    ne: 'Nepali',
    no: 'Norwegian',
    ny: 'Nyanja (Chichewa)',
    or: 'Odia (Oriya)',
    ps: 'Pashto',
    fa: 'Persian',
    pl: 'Polish',
    pt: 'Portuguese (Portugal, Brazil)',
    pa: 'Punjabi',
    ro: 'Romanian',
    ru: 'Russian',
    sm: 'Samoan',
    gd: 'Scots Gaelic',
    sr: 'Serbian',
    st: 'Sesotho',
    sn: 'Shona',
    sd: 'Sindhi',
    si: 'Sinhala (Sinhalese)',
    sk: 'Slovak',
    sl: 'Slovenian',
    so: 'Somali',
    es: 'Spanish',
    su: 'Sundanese',
    sw: 'Swahili',
    sv: 'Swedish',
    tl: 'Tagalog (Filipino)',
    tg: 'Tajik',
    ta: 'Tamil',
    tt: 'Tatar',
    te: 'Telugu',
    th: 'Thai',
    tr: 'Turkish',
    tk: 'Turkmen',
    uk: 'Ukrainian',
    ur: 'Urdu',
    ug: 'Uyghur',
    uz: 'Uzbek',
    vi: 'Vietnamese',
    cy: 'Welsh',
    xh: 'Xhosa',
    yi: 'Yiddish',
    yo: 'Yoruba',
    zu: 'Zulu',
};
const getFullLanguageName = (code) => {
    // @ts-ignore
    return languageList[code] ?? code;
};

;// CONCATENATED MODULE: ../sulna/dist/esm/tokenize.js
const tokenize = (text) => {
    return text
        .replace(/[^\p{Letter}\p{Mark}]+/gu, ' ')
        .trim()
        .split(' ');
};

;// CONCATENATED MODULE: ../sulna/dist/esm/trimArticle.js
const trimRegexes = {
    nl: /^(de|het)\s/i,
    de: /^(der|die|das)\s/i,
};
const trimArticle = (language, source) => {
    if (trimRegexes[language] === undefined) {
        return {
            source,
        };
    }
    const articleMatch = source.match(trimRegexes[language]);
    if (articleMatch === null) {
        return {
            source,
        };
    }
    const article = articleMatch[0].trim().toLowerCase();
    return {
        article,
        source: source.replace(trimRegexes[language], '').trim(),
    };
};

;// CONCATENATED MODULE: ../sulna/dist/esm/index.js





;// CONCATENATED MODULE: ../model/dist/esm/user.js

const mapUserAttributes = ({ user, attributes, }) => {
    const email = attributes.find((a) => a.getName() === 'email');
    const sub = attributes.find((a) => a.getName() === 'sub');
    const status = attributes.find((a) => a.getName() === 'custom:status');
    const cancellationDate = attributes.find((a) => a.getName() === 'custom:cancellation_date');
    const nextBillDate = attributes.find((a) => a.getName() === 'custom:next_bill_date');
    const unitPrice = attributes.find((a) => a.getName() === 'custom:unit_price');
    const updateUrl = attributes.find((a) => a.getName() === 'custom:update_url');
    const cancelUrl = attributes.find((a) => a.getName() === 'custom:cancel_url');
    const productId = attributes.find((a) => a.getName() === 'custom:product_id');
    const planName = attributes.find((a) => a.getName() === 'custom:plan_name');
    if (!email || !sub) {
        throw Error('Can find email and sub in user data.');
    }
    return {
        username: user.getUsername(),
        email: email.getValue(),
        sub: sub.getValue(),
        status: getAttributeValue(status),
        updateUrl: getAttributeValue(updateUrl),
        cancelUrl: getAttributeValue(cancelUrl),
        nextBillDate: nextBillDate && new Date(nextBillDate.getValue()),
        unitPrice: unitPrice && parseFloat(unitPrice.getValue()),
        cancellationDate: cancellationDate && new Date(cancellationDate.getValue()),
        productId: productId && parseInt(productId.getValue()),
        planName: planName && planName.getValue(),
    };
};
const user_isEligibleForTrial = (userData) => {
    return userData.status !== 'deleted';
};

;// CONCATENATED MODULE: ../model/dist/esm/userMetadata.js
const defaultUserMetadata = {
    rate: {
        ios: undefined,
        android: undefined,
        chromeExtension: undefined,
        safariExtension: undefined,
    },
};
const mergeUserMetadata = (md1, md2) => {
    return {
        ...md1,
        ...md2,
        rate: {
            ...md1.rate,
            ...md2.rate,
        },
    };
};
const mapUserMetadata = (metadata) => {
    return mergeUserMetadata(defaultUserMetadata, metadata);
};

;// CONCATENATED MODULE: ../model/dist/esm/index.js















;// CONCATENATED MODULE: ../extension-content-script/dist/isSelection.js
﻿const isSelection = (anchor) => {
    return anchor instanceof Selection;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/detectLanguage.js
﻿var detectLanguage_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getNodeLanguage = (node) => {
    var _a;
    if (!node) {
        return undefined;
    }
    // @ts-ignore
    const nodeLang = ((_a = node.lang) !== null && _a !== void 0 ? _a : '').substring(0, 2);
    if (isGoogleLanguage(nodeLang)) {
        return nodeLang;
    }
    return getNodeLanguage(node.parentNode);
};
const detectLanguage = (anchor) => detectLanguage_awaiter(void 0, void 0, void 0, function* () {
    const locationLanguage = yield api.getLocationLanguage(window.location.toString());
    if (locationLanguage) {
        return locationLanguage;
    }
    if (isSelection(anchor)) {
        return getNodeLanguage(anchor.anchorNode);
    }
    return getNodeLanguage(anchor);
});

;// CONCATENATED MODULE: ../extension-content-script/dist/getContext/getContextFromSelection.js
﻿const isHtmlElement = (node) => {
    return node.nodeType === Node.ELEMENT_NODE;
};
const getPreviousSibling = (node) => {
    if (node === null) {
        return null;
    }
    if (isHtmlElement(node) &&
        !getComputedStyle(node).display.includes('inline')) {
        return null;
    }
    if (node.previousSibling) {
        return node.previousSibling;
    }
    if (!node.parentNode) {
        return null;
    }
    return getPreviousSibling(node.parentNode);
};
const getNextSibling = (node) => {
    if (node === null) {
        return null;
    }
    if (isHtmlElement(node) &&
        !getComputedStyle(node).display.includes('inline')) {
        return null;
    }
    if (node.nextSibling) {
        return node.nextSibling;
    }
    if (!node.parentNode) {
        return null;
    }
    return getNextSibling(node.parentNode);
};
const parseBackward = (node, context, startOffset) => {
    var _a;
    if (!node || !node.textContent) {
        return context;
    }
    let newContext = context;
    const offset = startOffset !== null && startOffset !== void 0 ? startOffset : node.textContent.length;
    for (let i = offset - 1; i >= 0; i--) {
        const char = (_a = node.textContent) === null || _a === void 0 ? void 0 : _a[i];
        if (char === '.') {
            return newContext;
        }
        newContext = char + newContext;
    }
    const previousSibling = getPreviousSibling(node);
    if (previousSibling) {
        return parseBackward(previousSibling, newContext);
    }
    return newContext;
};
const parseForward = (node, context, endOffset) => {
    var _a;
    if (node === null) {
        return context;
    }
    if (!node.textContent) {
        return context;
    }
    let newContext = context;
    const offset = endOffset !== null && endOffset !== void 0 ? endOffset : 0;
    for (let i = offset; i < node.textContent.length; i++) {
        const char = (_a = node.textContent) === null || _a === void 0 ? void 0 : _a[i];
        if (char === '.') {
            return newContext;
        }
        newContext = newContext + char;
    }
    const nextSibling = getNextSibling(node);
    if (nextSibling) {
        return parseForward(nextSibling, newContext);
    }
    return newContext;
};
const getContextFromSelection = (selection) => {
    if (selection.rangeCount === 0) {
        return '';
    }
    const range = selection.getRangeAt(0);
    return parseForward(range.endContainer, parseBackward(range.startContainer, selection.toString(), range.startOffset), range.endOffset);
};
const getContextFromHTMLElement = (htmlElement) => {
    return parseForward(getNextSibling(htmlElement), parseBackward(getPreviousSibling(htmlElement), htmlElement.textContent));
};

;// CONCATENATED MODULE: ../extension-content-script/dist/getContext.js
﻿


const getContext = (anchor) => {
    let rawContext = '';
    if (isSelection(anchor)) {
        rawContext = getContextFromSelection(anchor);
    }
    else {
        rawContext = getContextFromHTMLElement(anchor);
    }
    return tokenize(rawContext).join(' ');
};

;// CONCATENATED MODULE: ../extension-content-script/dist/getText.js
﻿
const getText = (anchor) => {
    if (isSelection(anchor)) {
        return anchor.toString();
    }
    return anchor.innerText;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/configuration.js
﻿let contentScriptConfiguration = {
    isFeedbackEnabled: false,
    askForRatingEnabled: false,
    displayMobileLookupButton: false,
    allowFirstTranslationCongratulation: false,
};
const configureContentScript = (configuration) => {
    contentScriptConfiguration = Object.assign(Object.assign({}, contentScriptConfiguration), configuration);
};

;// CONCATENATED MODULE: ../extension-content-script/dist/detectExtensionPlatform.js
﻿
const detectExtensionPlatform = () => {
    return browser_browser.satisfies({
        macos: {
            safari: '>10.1',
        },
    })
        ? {
            url: 'https://apps.apple.com/app/id6464076425',
            name: 'App Store',
            platform: 'safariExtension',
        }
        : {
            url: 'https://chrome.google.com/webstore/detail/vocably/baocigmmhhdemijfjnjdidbkfgpgogmb',
            name: 'Chrome Web Store',
            platform: 'chromeExtension',
        };
};

;// CONCATENATED MODULE: ../extension-content-script/dist/playAudioPronunciation.js
﻿var playAudioPronunciation_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const playDataUrl = (dataUrl) => playAudioPronunciation_awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve) => {
        try {
            const audio = new Audio(dataUrl);
            audio.addEventListener('ended', () => {
                resolve({
                    success: true,
                    value: true,
                });
            });
            audio.play().catch((e) => {
                resolve({
                    success: false,
                    errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
                    reason: 'An error occurred while playing the offscreen audio',
                    extra: e,
                });
            });
        }
        catch (e) {
            resolve({
                success: false,
                errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
                reason: 'An error occurred while playing the offscreen audio',
                extra: e,
            });
        }
    });
});
const playAudioPronunciation_playAudioPronunciation = (payload) => playAudioPronunciation_awaiter(void 0, void 0, void 0, function* () {
    const canPlayOffScreen = yield api.canPlayOffScreen();
    if (canPlayOffScreen) {
        return api.playAudioPronunciation(payload);
    }
    const result = yield api.getAudioPronunciation(payload);
    if (result.success === false) {
        return result;
    }
    return playDataUrl(result.value.url);
});

;// CONCATENATED MODULE: ../extension-content-script/dist/popup/contents.js
﻿var contents_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const getLocaleLanguage = () => {
    var _a;
    if (!((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.language)) {
        return 'en';
    }
    return window.navigator.language.substring(0, 2);
};
const setContents = ({ popup, source, detectedLanguage, context, autoPlay, }) => contents_awaiter(void 0, void 0, void 0, function* () {
    let intervalId = null;
    const tearDown = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };
    const setTranslation = () => contents_awaiter(void 0, void 0, void 0, function* () {
        const userKnowsHowToAdd = yield api.isUserKnowsHowToAdd();
        const extensionPlatform = detectExtensionPlatform();
        const translation = document.createElement('vocably-translation');
        translation.isFeedbackEnabled =
            contentScriptConfiguration.isFeedbackEnabled;
        translation.phrase = source;
        translation.playAudioPronunciation = playAudioPronunciation_playAudioPronunciation;
        translation.showSaveHint = !userKnowsHowToAdd;
        translation.extensionPlatform = extensionPlatform;
        translation.canCongratulate =
            contentScriptConfiguration.allowFirstTranslationCongratulation &&
                !userKnowsHowToAdd;
        const analyze = ({ sourceLanguage, targetLanguage, } = {}) => {
            translation.loading = true;
            api.analyze({ source, sourceLanguage, targetLanguage, context })
                .finally(() => {
                translation.loading = false;
            })
                .then((translationResult) => contents_awaiter(void 0, void 0, void 0, function* () {
                if (translationResult.success === false) {
                    console.error('Analyze error', translationResult);
                }
                if (contentScriptConfiguration.askForRatingEnabled) {
                    api.askForRating({
                        translationResult: translationResult,
                        extensionPlatform: extensionPlatform.platform,
                    })
                        .then((result) => {
                        translation.askForRating = result;
                    });
                }
                translation.result = translationResult;
                if (translationResult.success === true) {
                    translation.sourceLanguage =
                        translationResult.value.translation.sourceLanguage;
                    translation.targetLanguage =
                        translationResult.value.translation.targetLanguage;
                    if (autoPlay) {
                        setTimeout(() => {
                            translation.play();
                        }, 50);
                    }
                }
                const existingLanguagesResult = yield api.listLanguages();
                translation.existingSourceLanguages = existingLanguagesResult.success
                    ? existingLanguagesResult.value
                    : [];
                const existingTargetLanguages = yield api.listTargetLanguages();
                translation.existingTargetLanguages = existingTargetLanguages;
            }));
        };
        translation.addEventListener('changeSourceLanguage', ({ detail: sourceLanguage }) => {
            if (translation.result && translation.result.success) {
                api.cleanUp(translation.result.value);
            }
            api.saveLocationLanguage([window.location.toString(), sourceLanguage]);
            translation.sourceLanguage = sourceLanguage;
            analyze({
                sourceLanguage,
            });
        });
        translation.addEventListener('changeTargetLanguage', ({ detail: targetLanguage }) => {
            if (translation.result && translation.result.success) {
                api.cleanUp(translation.result.value);
            }
            translation.targetLanguage = targetLanguage;
            analyze({
                targetLanguage,
            });
        });
        translation.addEventListener('removeCard', ({ detail: payload }) => contents_awaiter(void 0, void 0, void 0, function* () {
            translation.isUpdating = payload.card;
            translation.result = yield api.removeCard(payload);
            translation.isUpdating = null;
            yield api.setUserKnowsHowToAdd(true);
        }));
        translation.addEventListener('addCard', ({ detail: payload }) => contents_awaiter(void 0, void 0, void 0, function* () {
            translation.isUpdating = payload.card;
            translation.result = yield api.addCard(payload);
            translation.isUpdating = null;
            yield api.setUserKnowsHowToAdd(true);
        }));
        translation.addEventListener('ratingInteraction', ({ detail: payload }) => contents_awaiter(void 0, void 0, void 0, function* () {
            yield api.saveAskForRatingResponse({
                extensionPlatform: extensionPlatform.platform,
                rateInteraction: payload,
            });
        }));
        analyze({
            sourceLanguage: detectedLanguage,
        });
        popup.innerHTML = '';
        popup.appendChild(translation);
    });
    const isAlright = () => {
        return Promise.all([
            api.isLoggedIn(),
            api.isActive(),
            api.getInternalSourceLanguage(),
            api.getInternalProxyLanguage(),
        ]);
    };
    const [isLoggedIn, isActive, internalSourceLanguage, internalTargetLanguage] = yield isAlright();
    if (isLoggedIn &&
        isActive &&
        internalSourceLanguage &&
        internalTargetLanguage) {
        yield setTranslation();
        return tearDown;
    }
    const alert = document.createElement('div');
    const updateAlertMessage = (isLoggedIn, isActive, internalSourceLanguage, internalTargetLanguage) => contents_awaiter(void 0, void 0, void 0, function* () {
        if (!isLoggedIn) {
            if (alert.dataset.message !== 'sign-in') {
                alert.dataset.message = 'sign-in';
                alert.innerHTML = '';
                const signInElement = document.createElement('vocably-sign-in');
                signInElement.addEventListener('confirm', () => {
                    closeWindow();
                    windowProxy = window.open(`${api.appBaseUrl}/hands-free`, '_blank');
                    windowProxy.focus();
                });
                alert.appendChild(signInElement);
            }
            return;
        }
        if (!isActive) {
            if (alert.dataset.message !== 'subscribe') {
                const isEligibleForTrial = yield api.isEligibleForTrial();
                alert.dataset.message = 'subscribe';
                alert.innerHTML = '';
                const subscribeElement = document.createElement('vocably-subscribe');
                subscribeElement.trial = isEligibleForTrial;
                alert.appendChild(subscribeElement);
            }
            return;
        }
        if (!internalSourceLanguage || !internalTargetLanguage) {
            if (alert.dataset.message !== 'proxy-language') {
                alert.dataset.message = 'proxy-language';
                alert.innerHTML = '';
                const languageForm = document.createElement('vocably-language');
                languageForm.sourceLanguage =
                    internalSourceLanguage !== null && internalSourceLanguage !== void 0 ? internalSourceLanguage : detectedLanguage;
                languageForm.targetLanguage =
                    internalTargetLanguage !== null && internalTargetLanguage !== void 0 ? internalTargetLanguage : getLocaleLanguage();
                languageForm.addEventListener('confirm', (event) => contents_awaiter(void 0, void 0, void 0, function* () {
                    languageForm.waiting = true;
                    const { sourceLanguage, targetLanguage } = event.detail;
                    yield Promise.all([
                        api.setInternalSourceLanguage(sourceLanguage),
                        api.setInternalProxyLanguage(targetLanguage),
                    ]);
                }));
                alert.appendChild(languageForm);
            }
        }
    });
    yield updateAlertMessage(isLoggedIn, isActive, internalSourceLanguage, internalTargetLanguage);
    let windowProxy = null;
    const closeWindow = () => {
        if (windowProxy !== null) {
            windowProxy.close();
            windowProxy = null;
        }
    };
    intervalId = setInterval(() => contents_awaiter(void 0, void 0, void 0, function* () {
        const [isLoggedIn, isActive, internalSourceLanguage, internalTargetLanguage,] = yield isAlright();
        if (isLoggedIn &&
            isActive &&
            internalSourceLanguage &&
            internalTargetLanguage) {
            clearInterval(intervalId);
            intervalId = null;
            yield setTranslation();
            setTimeout(closeWindow, 3000);
        }
        else {
            yield updateAlertMessage(isLoggedIn, isActive, internalSourceLanguage, internalTargetLanguage);
        }
    }), 1000);
    popup.innerHTML = '';
    popup.appendChild(alert);
    return tearDown;
});

;// CONCATENATED MODULE: ../extension-content-script/dist/popup.js
﻿var popup_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const popupStack = [];
const calculatePosition = (globalRect, isTouchscreen) => {
    const left = window.innerWidth < 640
        ? window.scrollX + window.innerWidth / 2
        : globalRect.left + globalRect.width / 2;
    const top = globalRect.top - window.scrollY;
    const bottom = top + globalRect.height;
    const selectionContextMenuHeight = Math.ceil(50 / window.visualViewport.scale);
    if (bottom < window.innerHeight / 2) {
        return {
            left,
            top: window.scrollY +
                bottom +
                (isTouchscreen ? selectionContextMenuHeight : 0),
        };
    }
    else {
        return {
            left,
            bottom: window.scrollY + top - (isTouchscreen ? selectionContextMenuHeight : 0),
        };
    }
};
const calculateMaxHeight = (position) => {
    if (isTop(position)) {
        return `${window.scrollY - position.top + window.innerHeight}px`;
    }
    else {
        return `${position.bottom - window.scrollY}px`;
    }
};
const applyInitialStyles = (popup) => {
    applyMaxZIndex(popup);
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 100ms';
};
const show = (popup) => {
    popup.style.opacity = '1';
};
const createPopup = (options) => popup_awaiter(void 0, void 0, void 0, function* () {
    const popup = document.createElement('vocably-popup');
    applyInitialStyles(popup);
    document.body.appendChild(popup);
    popup.addEventListener('close', () => {
        destroyPopup(popup);
    });
    const { autoPlay } = yield api.getSettings();
    const tearDownContents = yield setContents({
        popup,
        source: options.text,
        detectedLanguage: options.detectedLanguage,
        context: options.context,
        autoPlay,
    });
    const position = calculatePosition(options.globalRect, options.isTouchscreen);
    popup.style.setProperty('--max-height', calculateMaxHeight(position));
    popup.style.setProperty('--max-width', `${window.visualViewport.width}px`);
    applyPosition(popup, position);
    setupTransform(popup);
    show(popup);
    const resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(() => applyTransform(popup, position));
    });
    resizeObserver.observe(popup);
    popupStack.push({ popup, resizeObserver, tearDownContents });
    setTimeout(() => addGlobalEventListeners(), 100);
});
const destroyPopup = (popupToDestroy) => {
    const stackItemIndex = popupStack.findIndex((item) => item.popup === popupToDestroy);
    if (stackItemIndex === -1) {
        return;
    }
    const { popup, resizeObserver, tearDownContents } = popupStack[stackItemIndex];
    tearDownContents();
    resizeObserver.unobserve(popup);
    resizeObserver.disconnect();
    popup.remove();
    popupStack.splice(stackItemIndex, 1);
};
const destroyAllPopups = () => {
    while (popupStack.length > 0) {
        destroyPopup(popupStack[0].popup);
    }
    removeGlobalEventListeners();
};
const addGlobalEventListeners = () => {
    if (popupStack.length > 1) {
        return;
    }
    document.addEventListener('click', destroyOnGlobalClick);
    document.addEventListener('keydown', destroyOnSpace);
};
const removeGlobalEventListeners = () => {
    document.removeEventListener('keydown', destroyOnSpace);
    document.removeEventListener('click', destroyOnGlobalClick);
};
const destroyOnSpace = (e) => {
    if (e.code === 'Space') {
        destroyAllPopups();
    }
};
const isPopupElement = (verifiedElement) => {
    if (verifiedElement.tagName === 'VOCABLY-POPUP') {
        return true;
    }
    if (verifiedElement.parentElement) {
        return isPopupElement(verifiedElement.parentElement);
    }
    return false;
};
const destroyOnGlobalClick = (e) => {
    if (!e.target) {
        return;
    }
    const isClickOnPopup = isPopupElement(e.target);
    if (!isClickOnPopup) {
        destroyAllPopups();
    }
};

;// CONCATENATED MODULE: ../extension-content-script/dist/position.js
﻿const getGlobalRect = (rect) => {
    return {
        width: rect.width,
        height: rect.height,
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
    };
};

;// CONCATENATED MODULE: ../extension-content-script/dist/button.js
﻿var button_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const buttonId = 'translation-extension-button';
const considerGoogleTranslate = (button) => button_awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        setTimeout(() => {
            const gtxIcon = document.getElementById('gtx-trans');
            if (gtxIcon) {
                gtxIcon.addEventListener('mouseup', (event) => {
                    event.stopPropagation();
                });
                const rect = gtxIcon.getBoundingClientRect();
                setHorizontalDisplacement(button, rect.width + 3);
            }
            resolve();
        }, 100);
    });
});
const getPosition = (selection, event) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (selection.rangeCount === 0) {
                resolve(null);
                return;
            }
            const selectionRect = selection.getRangeAt(0).getBoundingClientRect();
            const left = window.scrollX + event.x;
            if ((selectionRect.bottom + selectionRect.top) / 2 > event.y) {
                resolve({
                    left,
                    bottom: selectionRect.top - 1 + window.scrollY,
                });
            }
            else {
                resolve({
                    left,
                    top: selectionRect.bottom + window.scrollY + 1,
                });
            }
        }, 100);
    });
};
const hide = (button) => {
    button.style.display = 'none';
};
const button_show = (button) => {
    button.style.display = 'block';
};
const createButton = (selection, event = null) => button_awaiter(void 0, void 0, void 0, function* () {
    const isTouchscreen = event === null;
    const button = document.createElement(isTouchscreen ? 'vocably-mobile-button' : 'vocably-button');
    button.id = buttonId;
    hide(button);
    document.body.appendChild(button);
    applyMaxZIndex(button);
    const detectedLanguage = yield detectLanguage(selection);
    const context = detectedLanguage && contextLanguages.includes(detectedLanguage)
        ? getContext(selection)
        : undefined;
    button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        createPopup({
            detectedLanguage,
            text: getText(selection),
            context: context,
            globalRect: getGlobalRect(selection.getRangeAt(0).getBoundingClientRect()),
            isTouchscreen: isTouchscreen,
        });
        destroyButton();
    });
    button.addEventListener('mousedown', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });
    button.addEventListener('mouseup', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });
    const position = event
        ? yield getPosition(selection, event)
        : {
            left: window.scrollX + window.innerWidth / 2,
            bottom: window.scrollY + window.innerHeight - 96,
        };
    if (position === null) {
        destroyButton();
        return;
    }
    applyButtonPosition({ element: button, position, isTouchscreen });
    setupTransform(button);
    applyTransform(button, position);
    yield considerGoogleTranslate(button);
    button_show(button);
});
const destroyButton = () => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.remove();
    }
};

;// CONCATENATED MODULE: ../extension-content-script/dist/selection.js
﻿
const isValidSelection = (selection) => {
    if (selection === null) {
        return false;
    }
    if (selection.rangeCount === 0) {
        return false;
    }
    const clientRect = selection.getRangeAt(0).getBoundingClientRect();
    if (clientRect.height === 0 || clientRect.width === 0) {
        return false;
    }
    const text = selection.toString().trim();
    if (text === '') {
        return false;
    }
    if (text.length > MAX_SYMBOLS_TO_BE_TRANSLATED) {
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/isHtmlElement.js
﻿const isHtmlElement_isHtmlElement = (node) => {
    return node instanceof HTMLElement;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/styles.js
﻿const setYouTubeStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
  .vocably-word {
    cursor: pointer;
  }
  .vocably-word:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;
    document.head.appendChild(style);
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/containsChinese.js
﻿const chineseRangeWithoutPunctuation = [
    // sequence is determine by occurrence probability
    [0x4e00, 0x9fff],
    [0x3400, 0x4dbf],
    [0x20000, 0x2a6df],
    [0x2a700, 0x2b73f],
    [0x2b740, 0x2b81f],
    [0x2b820, 0x2ceaf],
    [0x3300, 0x33ff],
    [0xfe30, 0xfe4f],
    [0xf900, 0xfaff],
    [0x2f800, 0x2fa1f], // https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement
];
const chineseRangeWithPunctuation = chineseRangeWithoutPunctuation.concat([
    // START Chinese punctuation
    [0xff0c, 0xff0c],
    [0x3002, 0x3002],
    [0x00b7, 0x00b7],
    [0x00d7, 0x00d7],
    [0x2014, 0x2014],
    [0x2018, 0x2018],
    [0x2019, 0x2019],
    [0x201c, 0x201c],
    [0x201d, 0x201d],
    [0x2026, 0x2026],
    [0x3001, 0x3001],
    [0x300a, 0x300a],
    [0x300b, 0x300b],
    [0x300e, 0x300e],
    [0x300f, 0x300f],
    [0x3010, 0x3010],
    [0x3011, 0x3011],
    [0xff01, 0xff01],
    [0xff08, 0xff08],
    [0xff09, 0xff09],
    [0xff1a, 0xff1a],
    [0xff1b, 0xff1b],
    [0xff1f, 0xff1f],
    [0xff5e, 0xff5e], //～
    // END Chinese punctuation
]);
const convertCharRangeToRegExp = (range) => {
    const reStr = range
        .map((range) => {
        if (range[0] === range[1]) {
            return `\\u{${range[0].toString(16)}}`;
        }
        return `[\\u{${range[0].toString(16)}}-\\u{${range[1].toString(16)}}]`;
    })
        .join('|');
    return new RegExp(`${reStr}`, 'u');
};
const reWithPunctuation = convertCharRangeToRegExp(chineseRangeWithPunctuation);
const containsChinese = (text) => {
    return reWithPunctuation.test(text);
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/containsJapanese.js
﻿const japaneseCharacterRegex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
const containsJapanese = (text) => {
    return japaneseCharacterRegex.test(text);
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/containsKorean.js
﻿const hangulLetter = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g;
const containsKorean = (text) => {
    return text.match(hangulLetter) !== null;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/detectLanguage.js
﻿


const detectLanguage_detectLanguage = (text) => {
    if (containsKorean(text)) {
        return 'ko';
    }
    if (containsChinese(text)) {
        return 'zh';
    }
    if (containsJapanese(text)) {
        return 'ja';
    }
    return '';
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/extractTokens.js
﻿
const letterRegexp = /[A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/;
const isLetter = (char) => {
    return letterRegexp.test(char);
};
const getTokenType = (char) => {
    return isLetter(char) ? 'word' : 'punctuation';
};
const extractTokens = (text, language = '') => {
    if (text === '') {
        return [];
    }
    const detectedLanguage = language || detectLanguage_detectLanguage(text);
    if (detectedLanguage === 'zh' ||
        detectedLanguage === 'zh-TW' ||
        detectedLanguage === 'ja' ||
        detectedLanguage === 'ko') {
        return false;
    }
    const tokens = [];
    let token = {
        type: getTokenType(text.charAt(0)),
        text: text.charAt(0),
    };
    for (let i = 1; i < text.length; i++) {
        const currentTokenType = getTokenType(text.charAt(i));
        if (currentTokenType === token.type) {
            token.text += text.charAt(i);
            continue;
        }
        tokens.push(token);
        token = {
            type: currentTokenType,
            text: text.charAt(i),
        };
    }
    tokens.push(token);
    return tokens;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/youtube.js
﻿var youtube_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const ytPlayerTagName = 'ytd-player';
const getPlayerElements = () => {
    const players = document.querySelectorAll(ytPlayerTagName);
    return Array.from(players);
};
const handlePlayerElement = (player) => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type !== 'childList')
                return;
            if (!mutation.target)
                return;
            if (!isHtmlElement_isHtmlElement(mutation.target))
                return;
            if (!mutation.target.classList)
                return;
            if (!mutation.target.classList.contains('ytp-caption-segment'))
                return;
            mutation.addedNodes.forEach((node) => {
                if (isHtmlElement_isHtmlElement(node) && node.classList.contains('replaced'))
                    return;
                const tokens = extractTokens(node.textContent);
                if (tokens === false) {
                    return;
                }
                const span = document.createElement('span');
                span.classList.add('replaced');
                tokens.forEach((token, index) => {
                    if (token.type !== 'word') {
                        const punctuationSpan = document.createElement('span');
                        punctuationSpan.innerText = token.text;
                        span.append(punctuationSpan);
                        return;
                    }
                    const anchor = document.createElement('span');
                    anchor.classList.add('vocably-word');
                    anchor.innerText = token.text;
                    anchor.addEventListener('mousedown', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                    anchor.addEventListener('mouseup', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                    anchor.addEventListener('click', () => youtube_awaiter(void 0, void 0, void 0, function* () {
                        const detectedLanguage = yield detectLanguage(anchor);
                        yield createPopup({
                            detectedLanguage,
                            text: anchor.textContent,
                            globalRect: getGlobalRect(anchor.getBoundingClientRect()),
                            isTouchscreen: false,
                            context: detectedLanguage && contextLanguages.includes(detectedLanguage)
                                ? getContext(anchor)
                                : undefined,
                        });
                    }));
                    span.append(anchor);
                });
                if (node.parentNode) {
                    const captionWindow = node.parentNode.closest('.caption-window');
                    captionWindow.removeAttribute('tabindex');
                }
                if (node.replaceWith) {
                    node.replaceWith(span);
                }
            });
        });
    });
    observer.observe(player, {
        attributes: false,
        childList: true,
        subtree: true,
    });
    return () => {
        observer.disconnect();
    };
};
const initYoutube = (options) => youtube_awaiter(void 0, void 0, void 0, function* () {
    if (!options.ytHosts.includes(window.location.host)) {
        return;
    }
    setYouTubeStyles();
    getPlayerElements().forEach((player) => {
        handlePlayerElement(player);
    });
    const playerObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (!isHtmlElement_isHtmlElement(node)) {
                    return;
                }
                if (node.tagName === ytPlayerTagName) {
                    handlePlayerElement(node);
                    return;
                }
                const players = node.getElementsByTagName(ytPlayerTagName);
                for (const player of players) {
                    if (!isHtmlElement_isHtmlElement(player)) {
                        continue;
                    }
                    handlePlayerElement(player);
                }
            });
        });
    });
    playerObserver.observe(document.body, {
        childList: true,
        subtree: true,
    });
    let isAltDown = false;
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Alt' || isAltDown) {
            return;
        }
        isAltDown = true;
        let isMouseDown = false;
        const players = getPlayerElements();
        let captionContainerList = [];
        let captionContainersCloneList = [];
        players.forEach((player) => {
            const video = player.querySelector('video');
            const captionContainer = player.querySelector('#ytp-caption-window-container');
            if (!isHtmlElement_isHtmlElement(captionContainer)) {
                return;
            }
            const captionContainerClone = captionContainer.cloneNode(true);
            captionContainerList.push(captionContainer);
            captionContainersCloneList.push(captionContainerClone);
            captionContainer.hidden = true;
            captionContainer.before(captionContainerClone);
            captionContainerClone
                .querySelectorAll('.caption-window')
                .forEach((captionWindow) => {
                if (!isHtmlElement_isHtmlElement(captionWindow)) {
                    return;
                }
                captionWindow.draggable = false;
                captionWindow.style.userSelect = 'auto';
                captionWindow.style.webkitUserSelect = 'auto';
                captionWindow
                    .querySelectorAll('.captions-text')
                    .forEach((element) => {
                    if (!isHtmlElement_isHtmlElement(element)) {
                        return;
                    }
                    element.style.userSelect = 'auto';
                    element.style.webkitUserSelect = 'auto';
                });
                captionWindow
                    .querySelectorAll('.ytp-caption-segment')
                    .forEach((segment) => {
                    if (!isHtmlElement_isHtmlElement(segment)) {
                        return;
                    }
                    segment.style.cursor = 'text';
                });
                captionWindow
                    .querySelectorAll('.vocably-word')
                    .forEach((word) => word.classList.remove('vocably-word'));
            });
        });
        const onBlur = () => {
            tearDown();
        };
        const onVisibilityChange = () => {
            if (document.hidden) {
                tearDown();
            }
        };
        document.addEventListener('visibilitychange', onVisibilityChange);
        window.addEventListener('blur', onBlur);
        const tearDown = () => {
            isAltDown = false;
            captionContainersCloneList.forEach((element) => element.remove());
            captionContainerList.forEach((element) => (element.hidden = false));
            document.removeEventListener('keyup', onKeyUp);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('visibilitychange', onVisibilityChange);
            window.removeEventListener('blur', onBlur);
        };
        const onMouseDown = (e) => {
            if (e.button !== 0) {
                return;
            }
            isMouseDown = true;
        };
        const onMouseUp = (e) => {
            if (e.button !== 0) {
                return;
            }
            isMouseDown = false;
            if (isAltDown) {
                return;
            }
            setTimeout(tearDown, 100);
        };
        const onKeyUp = (e) => {
            if (e.key !== 'Alt') {
                return;
            }
            isAltDown = false;
            if (isMouseDown) {
                return;
            }
            setTimeout(tearDown, 100);
        };
        document.addEventListener('keyup', onKeyUp);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
    });
});

;// CONCATENATED MODULE: ../extension-content-script/dist/index.js
﻿var dist_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















const onCreateSelectionTimeout = () => dist_awaiter(void 0, void 0, void 0, function* () {
    try {
        yield api.ping();
    }
    catch (_a) {
        return;
    }
    destroyButton();
    const selection = window.getSelection();
    if (!isValidSelection(selection)) {
        return;
    }
    yield createButton(selection);
});
let createSelectionTimeout = null;
const onTextSelect = () => dist_awaiter(void 0, void 0, void 0, function* () {
    if (createSelectionTimeout) {
        clearTimeout(createSelectionTimeout);
        createSelectionTimeout = null;
    }
    createSelectionTimeout = setTimeout(onCreateSelectionTimeout, 500);
});
const enableSelectionChangeDetection = () => {
    if (!contentScriptConfiguration.displayMobileLookupButton) {
        return;
    }
    document.addEventListener('selectionchange', onTextSelect, false);
};
const disableSelectionChangeDetection = () => document.removeEventListener('selectionchange', onTextSelect);
const isClickableElement = (element) => {
    if (['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'VOCABLY-POPUP'].includes(element.tagName)) {
        return true;
    }
    if (element.parentElement) {
        return isClickableElement(element.parentElement);
    }
    return false;
};
const doubleClick$ = new Subject();
const onMouseUp = (event) => dist_awaiter(void 0, void 0, void 0, function* () {
    if (isClickableElement(event.target)) {
        return;
    }
    enableSelectionChangeDetection();
    try {
        yield api.ping();
    }
    catch (_b) {
        return;
    }
    destroyButton();
    const selection = window.getSelection();
    if (!isValidSelection(selection)) {
        return;
    }
    merge(doubleClick$.pipe(map(() => true)), timer(50).pipe(map(() => false)))
        .pipe(take(1))
        .subscribe((doubleClick) => dist_awaiter(void 0, void 0, void 0, function* () {
        if (doubleClick) {
            return;
        }
        const settings = yield api.getSettings();
        // This is the attempt to make the "Double click" functionality
        // work in Lemur browser on Android.
        // The mouse event is not trusted in Lemur on Android.
        if (event.isTrusted === false &&
            browser_browser.getOS().name === 'Android' &&
            settings.showOnDoubleClick) {
            destroyAllPopups();
            yield autoShow({ isTouchscreen: true })();
        }
        yield createButton(selection, event);
    }));
});
const autoShow = (options) => () => dist_awaiter(void 0, void 0, void 0, function* () {
    const settings = yield api.getSettings();
    if (!settings.showOnDoubleClick) {
        return;
    }
    doubleClick$.next();
    const selection = window.getSelection();
    if (!isValidSelection(selection)) {
        return;
    }
    const detectedLanguage = yield detectLanguage(selection);
    const context = detectedLanguage && contextLanguages.includes(detectedLanguage)
        ? getContext(selection)
        : undefined;
    yield createPopup({
        detectedLanguage,
        text: getText(selection),
        context: context,
        globalRect: getGlobalRect(selection.getRangeAt(0).getBoundingClientRect()),
        isTouchscreen: options.isTouchscreen,
    });
});
const onMouseDown = (event) => dist_awaiter(void 0, void 0, void 0, function* () {
    if (isClickableElement(event.target)) {
        return;
    }
    disableSelectionChangeDetection();
    try {
        yield api.ping();
    }
    catch (_c) {
        return;
    }
    destroyButton();
});
const registerContentScript = ({ api: apiOptions, youTube: youTubeOptions, contentScript, } = {
    api: {},
    youTube: { ytHosts: ['www.youtube.com'] },
    contentScript: {
        isFeedbackEnabled: false,
        askForRatingEnabled: false,
        displayMobileLookupButton: false,
        allowFirstTranslationCongratulation: false,
    },
}) => dist_awaiter(void 0, void 0, void 0, function* () {
    configureApi(apiOptions);
    defineCustomElements();
    initYoutube(youTubeOptions);
    configureContentScript(contentScript);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('dblclick', autoShow({ isTouchscreen: false }));
    enableSelectionChangeDetection();
});

;// CONCATENATED MODULE: ./src/content-script.ts

registerContentScript({
    api: {
        appBaseUrl: "https://app.vocably.pro",
    },
    youTube: { ytHosts: ['www.youtube.com'] },
    contentScript: {
        isFeedbackEnabled: "true" == 'true',
        askForRatingEnabled: true,
        displayMobileLookupButton: false,
        allowFirstTranslationCongratulation: true,
    },
}).then();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQ0FBZ0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFVBQVUsd0JBQXdCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Uyx1QkFBdUIsMEJBQTBCLHFEQUFDO0FBQ3JKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsY0FBYyw4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QUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDRDQUE0QyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw2Q0FBNkMsR0FBRyxxREFBQyxXQUFXLDZDQUE2QyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDRDQUE0QyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw2Q0FBNkMsR0FBRyxxREFBQyxXQUFXLDZDQUE2QyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsNENBQTRDLEdBQUcscURBQUMsV0FBVyw2Q0FBNkMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDRDQUE0QyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw2Q0FBNkMsR0FBRyxxREFBQyxXQUFXLDZDQUE2QyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw2Q0FBNkMsR0FBRyxxREFBQyxXQUFXLDZDQUE2QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLDZDQUE2QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLDZDQUE2QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVyw2Q0FBNkMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVyw2Q0FBNkMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLDZDQUE2QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVyw4Q0FBOEMsR0FBRyxxREFBQyxXQUFXLDhDQUE4QyxHQUFHLHFEQUFDLFdBQVcsOENBQThDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsK0NBQStDLEdBQUcscURBQUMsV0FBVywrQ0FBK0MsR0FBRyxxREFBQyxXQUFXLCtDQUErQyxHQUFHLHFEQUFDLFdBQVcsNkNBQTZDLEdBQUcscURB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Q0EsQ0FBQztBQUNELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBOzs7QUM5UEE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhO0FBQ3pCO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUIsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBLGNBQWMsWUFBWTtBQUMxQixLQUFLO0FBQ0wsQ0FBQztBQUNELG9DQUFvQyxZQUFTO0FBQzdDLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdCQUFnQjtBQUN6QjtBQUNBO0FBQ0EsbUNBQW1DLGNBQWM7QUFDakQsd0NBQXdDLHlCQUF5QjtBQUNqRSxVQUFVLFVBQVU7QUFDcEI7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0QsK0JBQStCLFlBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYTtBQUNqQixDQUFDO0FBQ00saUNBQWlDLDJEQUEyRDtBQUNuRyxXQUFXO0FBQ1gsZUFBZSw4QkFBOEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEtBQUssWUFBUztBQUNmLElBQUksWUFBWTtBQUNoQixJQUFJLG9CQUFvQjtBQUN4QixJQUFJLFdBQVc7QUFDZixJQUFJLHNCQUFzQjtBQUMxQjtBQUNBO0FBQ0EscURBQXFELHNCQUFzQjtBQUMzRTtBQUNBLENBQUM7OztBQ3ZKeUU7QUFDMUUscUJBQXFCO0FBQ3JCO0FBQ0Esb0JBQW9CLHlCQUF3QjtBQUM1QyxLQUFLO0FBQ0wsZUFBZSw4QkFBOEI7QUFDN0M7QUFDQSwyQkFBMkIsTUFBK0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL2N1c3RvbS1lbGVtZW50cy9jdXN0b20tZWxlbWVudHMubWluLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvYm93c2VyL2VzNS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtdWkvZGlzdC9lc20vaW5kZXgtNjkyMjUxZmUuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXVpL2Rpc3QvZXNtL3ZvY2FibHktYWRkLWNhcmQtaGludF8yNC5lbnRyeS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtdWkvZGlzdC9lc20vIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcyQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtdWkvZGlzdC9lc20vbG9hZGVyLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tY29udGVudC11aS9sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2NyZWF0ZUVycm9yQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2FyclJlbW92ZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9ub29wLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvTm90aWZpY2F0aW9uRmFjdG9yaWVzLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9lcnJvckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9TdWJzY3JpYmVyLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc3ltYm9sL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9TdWJqZWN0LmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9saWZ0LmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL09wZXJhdG9yU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9tYXAuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzQXN5bmNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvci5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2lubmVyRnJvbS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvZXhlY3V0ZVNjaGVkdWxlLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlSW50ZXJuYWxzLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlTWFwLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlQWxsLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNTY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2FyZ3MuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL3N1YnNjcmliZU9uLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBcnJheS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUl0ZXJhYmxlLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXN5bmNJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZWQuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20uanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL21lcmdlLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9pbnRlcnZhbFByb3ZpZGVyLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL0FzeW5jQWN0aW9uLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL2RhdGVUaW1lc3RhbXBQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci9hc3luYy5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNEYXRlLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aW1lci5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy90YWtlLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvQHZvY2FibHkvaGVybWVzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tbWVzc2FnZXMvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L2FwaS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3Qvc3R5bGluZy5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvYnV0dG9uL2FwcGx5QnV0dG9uUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L2NvbnRleHRMYW5ndWFnZXMuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL21vZGVsL2Rpc3QvZXNtL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vbW9kZWwvZGlzdC9lc20vbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL21vZGVsL2Rpc3QvZXNtL2xhbmd1YWdlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL3N1bG5hL2Rpc3QvZXNtL3Rva2VuaXplLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9zdWxuYS9kaXN0L2VzbS90cmltQXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vc3VsbmEvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL21vZGVsL2Rpc3QvZXNtL3VzZXIuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL21vZGVsL2Rpc3QvZXNtL3VzZXJNZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vbW9kZWwvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L2lzU2VsZWN0aW9uLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tY29udGVudC1zY3JpcHQvZGlzdC9kZXRlY3RMYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvZ2V0Q29udGV4dC9nZXRDb250ZXh0RnJvbVNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvZ2V0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvZ2V0VGV4dC5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvY29uZmlndXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvZGV0ZWN0RXh0ZW5zaW9uUGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L3BsYXlBdWRpb1Byb251bmNpYXRpb24uanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L3BvcHVwL2NvbnRlbnRzLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tY29udGVudC1zY3JpcHQvZGlzdC9wb3B1cC5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3Qvc2VsZWN0aW9uLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tY29udGVudC1zY3JpcHQvZGlzdC9pc0h0bWxFbGVtZW50LmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tY29udGVudC1zY3JpcHQvZGlzdC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L3Rva2VuaXplci9jb250YWluc0NoaW5lc2UuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L3Rva2VuaXplci9jb250YWluc0phcGFuZXNlLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tY29udGVudC1zY3JpcHQvZGlzdC90b2tlbml6ZXIvY29udGFpbnNLb3JlYW4uanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L3Rva2VuaXplci9kZXRlY3RMYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvdG9rZW5pemVyL2V4dHJhY3RUb2tlbnMuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L3lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uL3NyYy9jb250ZW50LXNjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcbi8qXG5cbiBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kXG4gYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heVxuIGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnlcbiBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQXG4gcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbj13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQscD13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnROUyxhYT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGUsYmE9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5wcmVwZW5kLGNhPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuYXBwZW5kLGRhPXdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5wcmVwZW5kLGVhPXdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5hcHBlbmQscT13aW5kb3cuTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlLHI9d2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLHQ9d2luZG93Lk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSx1PXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCx2PXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQsdz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxcblwidGV4dENvbnRlbnRcIikseT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93LHo9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksQT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlLEI9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxDPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsRD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlTlMsRT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlTlMsRj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlMsRz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LEg9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTCxmYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZCxcbmhhPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmQsaWE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSxqYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXIsa2E9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoLGxhPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUsbWE9d2luZG93LkhUTUxFbGVtZW50LEk9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLG5hPXdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LG9hPXdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRIVE1MO3ZhciBwYT1uZXcgU2V0O1wiYW5ub3RhdGlvbi14bWwgY29sb3ItcHJvZmlsZSBmb250LWZhY2UgZm9udC1mYWNlLXNyYyBmb250LWZhY2UtdXJpIGZvbnQtZmFjZS1mb3JtYXQgZm9udC1mYWNlLW5hbWUgbWlzc2luZy1nbHlwaFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBwYS5hZGQoYSl9KTtmdW5jdGlvbiBxYShhKXt2YXIgYj1wYS5oYXMoYSk7YT0vXlthLXpdWy4wLTlfYS16XSotWy0uMC05X2Etel0qJC8udGVzdChhKTtyZXR1cm4hYiYmYX12YXIgcmE9ZG9jdW1lbnQuY29udGFpbnM/ZG9jdW1lbnQuY29udGFpbnMuYmluZChkb2N1bWVudCk6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zLmJpbmQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbmZ1bmN0aW9uIEooYSl7dmFyIGI9YS5pc0Nvbm5lY3RlZDtpZih2b2lkIDAhPT1iKXJldHVybiBiO2lmKHJhKGEpKXJldHVybiEwO2Zvcig7YSYmIShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fCh3aW5kb3cuU2hhZG93Um9vdCYmYSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/YS5ob3N0OnZvaWQgMCk7cmV0dXJuISghYXx8IShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KSl9ZnVuY3Rpb24gSyhhKXt2YXIgYj1hLmNoaWxkcmVuO2lmKGIpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGIpO2I9W107Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmYi5wdXNoKGEpO3JldHVybiBifVxuZnVuY3Rpb24gTChhLGIpe2Zvcig7YiYmYiE9PWEmJiFiLm5leHRTaWJsaW5nOyliPWIucGFyZW50Tm9kZTtyZXR1cm4gYiYmYiE9PWE/Yi5uZXh0U2libGluZzpudWxsfVxuZnVuY3Rpb24gTShhLGIsYyl7Zm9yKHZhciBmPWE7Zjspe2lmKGYubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGQ9ZjtiKGQpO3ZhciBlPWQubG9jYWxOYW1lO2lmKFwibGlua1wiPT09ZSYmXCJpbXBvcnRcIj09PWQuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXtmPWQuaW1wb3J0O3ZvaWQgMD09PWMmJihjPW5ldyBTZXQpO2lmKGYgaW5zdGFuY2VvZiBOb2RlJiYhYy5oYXMoZikpZm9yKGMuYWRkKGYpLGY9Zi5maXJzdENoaWxkO2Y7Zj1mLm5leHRTaWJsaW5nKU0oZixiLGMpO2Y9TChhLGQpO2NvbnRpbnVlfWVsc2UgaWYoXCJ0ZW1wbGF0ZVwiPT09ZSl7Zj1MKGEsZCk7Y29udGludWV9aWYoZD1kLl9fQ0Vfc2hhZG93Um9vdClmb3IoZD1kLmZpcnN0Q2hpbGQ7ZDtkPWQubmV4dFNpYmxpbmcpTShkLGIsYyl9Zj1mLmZpcnN0Q2hpbGQ/Zi5maXJzdENoaWxkOkwoYSxmKX19O2Z1bmN0aW9uIE4oKXt2YXIgYT0hKG51bGw9PT1PfHx2b2lkIDA9PT1PfHwhTy5ub0RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIpLGI9IShudWxsPT09T3x8dm9pZCAwPT09T3x8IU8uc2hhZHlEb21GYXN0V2Fsayk7dGhpcy5tPVtdO3RoaXMuZz1bXTt0aGlzLmo9ITE7dGhpcy5zaGFkeURvbUZhc3RXYWxrPWI7dGhpcy5JPSFhfWZ1bmN0aW9uIFAoYSxiLGMsZil7dmFyIGQ9d2luZG93LlNoYWR5RE9NO2lmKGEuc2hhZHlEb21GYXN0V2FsayYmZCYmZC5pblVzZSl7aWYoYi5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZjKGIpLGIucXVlcnlTZWxlY3RvckFsbClmb3IoYT1kLm5hdGl2ZU1ldGhvZHMucXVlcnlTZWxlY3RvckFsbC5jYWxsKGIsXCIqXCIpLGI9MDtiPGEubGVuZ3RoO2IrKyljKGFbYl0pfWVsc2UgTShiLGMsZil9ZnVuY3Rpb24gc2EoYSxiKXthLmo9ITA7YS5tLnB1c2goYil9ZnVuY3Rpb24gdGEoYSxiKXthLmo9ITA7YS5nLnB1c2goYil9XG5mdW5jdGlvbiBRKGEsYil7YS5qJiZQKGEsYixmdW5jdGlvbihjKXtyZXR1cm4gUihhLGMpfSl9ZnVuY3Rpb24gUihhLGIpe2lmKGEuaiYmIWIuX19DRV9wYXRjaGVkKXtiLl9fQ0VfcGF0Y2hlZD0hMDtmb3IodmFyIGM9MDtjPGEubS5sZW5ndGg7YysrKWEubVtjXShiKTtmb3IoYz0wO2M8YS5nLmxlbmd0aDtjKyspYS5nW2NdKGIpfX1mdW5jdGlvbiBTKGEsYil7dmFyIGM9W107UChhLGIsZnVuY3Rpb24oZCl7cmV0dXJuIGMucHVzaChkKX0pO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBmPWNbYl07MT09PWYuX19DRV9zdGF0ZT9hLmNvbm5lY3RlZENhbGxiYWNrKGYpOlQoYSxmKX19ZnVuY3Rpb24gVShhLGIpe3ZhciBjPVtdO1AoYSxiLGZ1bmN0aW9uKGQpe3JldHVybiBjLnB1c2goZCl9KTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZj1jW2JdOzE9PT1mLl9fQ0Vfc3RhdGUmJmEuZGlzY29ubmVjdGVkQ2FsbGJhY2soZil9fVxuZnVuY3Rpb24gVihhLGIsYyl7Yz12b2lkIDA9PT1jP3t9OmM7dmFyIGY9Yy5KLGQ9Yy51cGdyYWRlfHxmdW5jdGlvbihnKXtyZXR1cm4gVChhLGcpfSxlPVtdO1AoYSxiLGZ1bmN0aW9uKGcpe2EuaiYmUihhLGcpO2lmKFwibGlua1wiPT09Zy5sb2NhbE5hbWUmJlwiaW1wb3J0XCI9PT1nLmdldEF0dHJpYnV0ZShcInJlbFwiKSl7dmFyIGg9Zy5pbXBvcnQ7aCBpbnN0YW5jZW9mIE5vZGUmJihoLl9fQ0VfaXNJbXBvcnREb2N1bWVudD0hMCxoLl9fQ0VfcmVnaXN0cnk9ZG9jdW1lbnQuX19DRV9yZWdpc3RyeSk7aCYmXCJjb21wbGV0ZVwiPT09aC5yZWFkeVN0YXRlP2guX19DRV9kb2N1bWVudExvYWRIYW5kbGVkPSEwOmcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3ZhciBrPWcuaW1wb3J0O2lmKCFrLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZCl7ay5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQ9ITA7dmFyIGw9bmV3IFNldDtmJiYoZi5mb3JFYWNoKGZ1bmN0aW9uKG0pe3JldHVybiBsLmFkZChtKX0pLFxubC5kZWxldGUoaykpO1YoYSxrLHtKOmwsdXBncmFkZTpkfSl9fSl9ZWxzZSBlLnB1c2goZyl9LGYpO2ZvcihiPTA7YjxlLmxlbmd0aDtiKyspZChlW2JdKX1cbmZ1bmN0aW9uIFQoYSxiKXt0cnl7dmFyIGM9Yi5vd25lckRvY3VtZW50LGY9Yy5fX0NFX3JlZ2lzdHJ5O3ZhciBkPWYmJihjLmRlZmF1bHRWaWV3fHxjLl9fQ0VfaXNJbXBvcnREb2N1bWVudCk/VyhmLGIubG9jYWxOYW1lKTp2b2lkIDA7aWYoZCYmdm9pZCAwPT09Yi5fX0NFX3N0YXRlKXtkLmNvbnN0cnVjdGlvblN0YWNrLnB1c2goYik7dHJ5e3RyeXtpZihuZXcgZC5jb25zdHJ1Y3RvckZ1bmN0aW9uIT09Yil0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvciBkaWQgbm90IHByb2R1Y2UgdGhlIGVsZW1lbnQgYmVpbmcgdXBncmFkZWQuXCIpO31maW5hbGx5e2QuY29uc3RydWN0aW9uU3RhY2sucG9wKCl9fWNhdGNoKGspe3Rocm93IGIuX19DRV9zdGF0ZT0yLGs7fWIuX19DRV9zdGF0ZT0xO2IuX19DRV9kZWZpbml0aW9uPWQ7aWYoZC5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2smJmIuaGFzQXR0cmlidXRlcygpKXt2YXIgZT1kLm9ic2VydmVkQXR0cmlidXRlcztcbmZvcihkPTA7ZDxlLmxlbmd0aDtkKyspe3ZhciBnPWVbZF0saD1iLmdldEF0dHJpYnV0ZShnKTtudWxsIT09aCYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYixnLG51bGwsaCxudWxsKX19SihiKSYmYS5jb25uZWN0ZWRDYWxsYmFjayhiKX19Y2F0Y2goayl7WChrKX19Ti5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5fX0NFX2RlZmluaXRpb247aWYoYi5jb25uZWN0ZWRDYWxsYmFjayl0cnl7Yi5jb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfWNhdGNoKGMpe1goYyl9fTtOLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtpZihiLmRpc2Nvbm5lY3RlZENhbGxiYWNrKXRyeXtiLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9Y2F0Y2goYyl7WChjKX19O1xuTi5wcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrPWZ1bmN0aW9uKGEsYixjLGYsZCl7dmFyIGU9YS5fX0NFX2RlZmluaXRpb247aWYoZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2smJi0xPGUub2JzZXJ2ZWRBdHRyaWJ1dGVzLmluZGV4T2YoYikpdHJ5e2UuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrLmNhbGwoYSxiLGMsZixkKX1jYXRjaChnKXtYKGcpfX07XG5mdW5jdGlvbiB1YShhLGIsYyxmKXt2YXIgZD1iLl9fQ0VfcmVnaXN0cnk7aWYoZCYmKG51bGw9PT1mfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWYpJiYoZD1XKGQsYykpKXRyeXt2YXIgZT1uZXcgZC5jb25zdHJ1Y3RvckZ1bmN0aW9uO2lmKHZvaWQgMD09PWUuX19DRV9zdGF0ZXx8dm9pZCAwPT09ZS5fX0NFX2RlZmluaXRpb24pdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdcIitjK1wiJzogVGhlIHJldHVybmVkIHZhbHVlIHdhcyBub3QgY29uc3RydWN0ZWQgd2l0aCB0aGUgSFRNTEVsZW1lbnQgY29uc3RydWN0b3IuXCIpO2lmKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiIT09ZS5uYW1lc3BhY2VVUkkpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdcIitjK1wiJzogVGhlIGNvbnN0cnVjdGVkIGVsZW1lbnQncyBuYW1lc3BhY2UgbXVzdCBiZSB0aGUgSFRNTCBuYW1lc3BhY2UuXCIpO2lmKGUuaGFzQXR0cmlidXRlcygpKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnXCIrXG5jK1wiJzogVGhlIGNvbnN0cnVjdGVkIGVsZW1lbnQgbXVzdCBub3QgaGF2ZSBhbnkgYXR0cmlidXRlcy5cIik7aWYobnVsbCE9PWUuZmlyc3RDaGlsZCl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1wiK2MrXCInOiBUaGUgY29uc3RydWN0ZWQgZWxlbWVudCBtdXN0IG5vdCBoYXZlIGFueSBjaGlsZHJlbi5cIik7aWYobnVsbCE9PWUucGFyZW50Tm9kZSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1wiK2MrXCInOiBUaGUgY29uc3RydWN0ZWQgZWxlbWVudCBtdXN0IG5vdCBoYXZlIGEgcGFyZW50IG5vZGUuXCIpO2lmKGUub3duZXJEb2N1bWVudCE9PWIpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdcIitjK1wiJzogVGhlIGNvbnN0cnVjdGVkIGVsZW1lbnQncyBvd25lciBkb2N1bWVudCBpcyBpbmNvcnJlY3QuXCIpO2lmKGUubG9jYWxOYW1lIT09Yyl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1wiK2MrXCInOiBUaGUgY29uc3RydWN0ZWQgZWxlbWVudCdzIGxvY2FsIG5hbWUgaXMgaW5jb3JyZWN0LlwiKTtcbnJldHVybiBlfWNhdGNoKGcpe3JldHVybiBYKGcpLGI9bnVsbD09PWY/bi5jYWxsKGIsYyk6cC5jYWxsKGIsZixjKSxPYmplY3Quc2V0UHJvdG90eXBlT2YoYixIVE1MVW5rbm93bkVsZW1lbnQucHJvdG90eXBlKSxiLl9fQ0Vfc3RhdGU9MixiLl9fQ0VfZGVmaW5pdGlvbj12b2lkIDAsUihhLGIpLGJ9Yj1udWxsPT09Zj9uLmNhbGwoYixjKTpwLmNhbGwoYixmLGMpO1IoYSxiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIFgoYSl7dmFyIGI9YS5tZXNzYWdlLGM9YS5zb3VyY2VVUkx8fGEuZmlsZU5hbWV8fFwiXCIsZj1hLmxpbmV8fGEubGluZU51bWJlcnx8MCxkPWEuY29sdW1ufHxhLmNvbHVtbk51bWJlcnx8MCxlPXZvaWQgMDt2b2lkIDA9PT1FcnJvckV2ZW50LnByb3RvdHlwZS5pbml0RXJyb3JFdmVudD9lPW5ldyBFcnJvckV2ZW50KFwiZXJyb3JcIix7Y2FuY2VsYWJsZTohMCxtZXNzYWdlOmIsZmlsZW5hbWU6YyxsaW5lbm86Zixjb2xubzpkLGVycm9yOmF9KTooZT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkVycm9yRXZlbnRcIiksZS5pbml0RXJyb3JFdmVudChcImVycm9yXCIsITEsITAsYixjLGYpLGUucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImRlZmF1bHRQcmV2ZW50ZWRcIix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiEwfX0pfSk7dm9pZCAwPT09ZS5lcnJvciYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJlcnJvclwiLFxue2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBhfX0pO3dpbmRvdy5kaXNwYXRjaEV2ZW50KGUpO2UuZGVmYXVsdFByZXZlbnRlZHx8Y29uc29sZS5lcnJvcihhKX07ZnVuY3Rpb24gdmEoKXt2YXIgYT10aGlzO3RoaXMuZz12b2lkIDA7dGhpcy5GPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGIpe2EubD1ifSl9dmEucHJvdG90eXBlLnJlc29sdmU9ZnVuY3Rpb24oYSl7aWYodGhpcy5nKXRocm93IEVycm9yKFwiQWxyZWFkeSByZXNvbHZlZC5cIik7dGhpcy5nPWE7dGhpcy5sKGEpfTtmdW5jdGlvbiB3YShhKXt2YXIgYj1kb2N1bWVudDt0aGlzLmw9dm9pZCAwO3RoaXMuaD1hO3RoaXMuZz1iO1YodGhpcy5oLHRoaXMuZyk7XCJsb2FkaW5nXCI9PT10aGlzLmcucmVhZHlTdGF0ZSYmKHRoaXMubD1uZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLkcuYmluZCh0aGlzKSksdGhpcy5sLm9ic2VydmUodGhpcy5nLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pKX1mdW5jdGlvbiB4YShhKXthLmwmJmEubC5kaXNjb25uZWN0KCl9d2EucHJvdG90eXBlLkc9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nLnJlYWR5U3RhdGU7XCJpbnRlcmFjdGl2ZVwiIT09YiYmXCJjb21wbGV0ZVwiIT09Ynx8eGEodGhpcyk7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKylmb3IodmFyIGM9YVtiXS5hZGRlZE5vZGVzLGY9MDtmPGMubGVuZ3RoO2YrKylWKHRoaXMuaCxjW2ZdKX07ZnVuY3Rpb24gWShhKXt0aGlzLnM9bmV3IE1hcDt0aGlzLnU9bmV3IE1hcDt0aGlzLkM9bmV3IE1hcDt0aGlzLkE9ITE7dGhpcy5CPW5ldyBNYXA7dGhpcy5vPWZ1bmN0aW9uKGIpe3JldHVybiBiKCl9O3RoaXMuaT0hMTt0aGlzLnY9W107dGhpcy5oPWE7dGhpcy5EPWEuST9uZXcgd2EoYSk6dm9pZCAwfVkucHJvdG90eXBlLkg9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO2lmKCEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IgZ2V0dGVycyBtdXN0IGJlIGZ1bmN0aW9ucy5cIik7eWEodGhpcyxhKTt0aGlzLnMuc2V0KGEsYik7dGhpcy52LnB1c2goYSk7dGhpcy5pfHwodGhpcy5pPSEwLHRoaXMubyhmdW5jdGlvbigpe3JldHVybiB6YShjKX0pKX07XG5ZLnByb3RvdHlwZS5kZWZpbmU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO2lmKCEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIG11c3QgYmUgZnVuY3Rpb25zLlwiKTt5YSh0aGlzLGEpO0FhKHRoaXMsYSxiKTt0aGlzLnYucHVzaChhKTt0aGlzLml8fCh0aGlzLmk9ITAsdGhpcy5vKGZ1bmN0aW9uKCl7cmV0dXJuIHphKGMpfSkpfTtmdW5jdGlvbiB5YShhLGIpe2lmKCFxYShiKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgZWxlbWVudCBuYW1lICdcIitiK1wiJyBpcyBub3QgdmFsaWQuXCIpO2lmKFcoYSxiKSl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgd2l0aCBuYW1lICdcIisoYitcIicgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLlwiKSk7aWYoYS5BKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIGRlZmluZWQuXCIpO31cbmZ1bmN0aW9uIEFhKGEsYixjKXthLkE9ITA7dmFyIGY7dHJ5e3ZhciBkPWMucHJvdG90eXBlO2lmKCEoZCBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcidzIHByb3RvdHlwZSBpcyBub3QgYW4gb2JqZWN0LlwiKTt2YXIgZT1mdW5jdGlvbihtKXt2YXIgeD1kW21dO2lmKHZvaWQgMCE9PXgmJiEoeCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBFcnJvcihcIlRoZSAnXCIrbStcIicgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4geH07dmFyIGc9ZShcImNvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBoPWUoXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTt2YXIgaz1lKFwiYWRvcHRlZENhbGxiYWNrXCIpO3ZhciBsPShmPWUoXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIikpJiZjLm9ic2VydmVkQXR0cmlidXRlc3x8W119Y2F0Y2gobSl7dGhyb3cgbTt9ZmluYWxseXthLkE9ITF9Yz17bG9jYWxOYW1lOmIsXG5jb25zdHJ1Y3RvckZ1bmN0aW9uOmMsY29ubmVjdGVkQ2FsbGJhY2s6ZyxkaXNjb25uZWN0ZWRDYWxsYmFjazpoLGFkb3B0ZWRDYWxsYmFjazprLGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjazpmLG9ic2VydmVkQXR0cmlidXRlczpsLGNvbnN0cnVjdGlvblN0YWNrOltdfTthLnUuc2V0KGIsYyk7YS5DLnNldChjLmNvbnN0cnVjdG9yRnVuY3Rpb24sYyk7cmV0dXJuIGN9WS5wcm90b3R5cGUudXBncmFkZT1mdW5jdGlvbihhKXtWKHRoaXMuaCxhKX07XG5mdW5jdGlvbiB6YShhKXtpZighMSE9PWEuaSl7YS5pPSExO2Zvcih2YXIgYj1bXSxjPWEudixmPW5ldyBNYXAsZD0wO2Q8Yy5sZW5ndGg7ZCsrKWYuc2V0KGNbZF0sW10pO1YoYS5oLGRvY3VtZW50LHt1cGdyYWRlOmZ1bmN0aW9uKGspe2lmKHZvaWQgMD09PWsuX19DRV9zdGF0ZSl7dmFyIGw9ay5sb2NhbE5hbWUsbT1mLmdldChsKTttP20ucHVzaChrKTphLnUuaGFzKGwpJiZiLnB1c2goayl9fX0pO2ZvcihkPTA7ZDxiLmxlbmd0aDtkKyspVChhLmgsYltkXSk7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKyl7Zm9yKHZhciBlPWNbZF0sZz1mLmdldChlKSxoPTA7aDxnLmxlbmd0aDtoKyspVChhLmgsZ1toXSk7KGU9YS5CLmdldChlKSkmJmUucmVzb2x2ZSh2b2lkIDApfWMubGVuZ3RoPTB9fVkucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtpZihhPVcodGhpcyxhKSlyZXR1cm4gYS5jb25zdHJ1Y3RvckZ1bmN0aW9ufTtcblkucHJvdG90eXBlLndoZW5EZWZpbmVkPWZ1bmN0aW9uKGEpe2lmKCFxYShhKSlyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFN5bnRheEVycm9yKFwiJ1wiK2ErXCInIGlzIG5vdCBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUuXCIpKTt2YXIgYj10aGlzLkIuZ2V0KGEpO2lmKGIpcmV0dXJuIGIuRjtiPW5ldyB2YTt0aGlzLkIuc2V0KGEsYik7dmFyIGM9dGhpcy51LmhhcyhhKXx8dGhpcy5zLmhhcyhhKTthPS0xPT09dGhpcy52LmluZGV4T2YoYSk7YyYmYSYmYi5yZXNvbHZlKHZvaWQgMCk7cmV0dXJuIGIuRn07WS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz1mdW5jdGlvbihhKXt0aGlzLkQmJnhhKHRoaXMuRCk7dmFyIGI9dGhpcy5vO3RoaXMubz1mdW5jdGlvbihjKXtyZXR1cm4gYShmdW5jdGlvbigpe3JldHVybiBiKGMpfSl9fTtcbmZ1bmN0aW9uIFcoYSxiKXt2YXIgYz1hLnUuZ2V0KGIpO2lmKGMpcmV0dXJuIGM7aWYoYz1hLnMuZ2V0KGIpKXthLnMuZGVsZXRlKGIpO3RyeXtyZXR1cm4gQWEoYSxiLGMoKSl9Y2F0Y2goZil7WChmKX19fXdpbmRvdy5DdXN0b21FbGVtZW50UmVnaXN0cnk9WTtZLnByb3RvdHlwZS5kZWZpbmU9WS5wcm90b3R5cGUuZGVmaW5lO1kucHJvdG90eXBlLnVwZ3JhZGU9WS5wcm90b3R5cGUudXBncmFkZTtZLnByb3RvdHlwZS5nZXQ9WS5wcm90b3R5cGUuZ2V0O1kucHJvdG90eXBlLndoZW5EZWZpbmVkPVkucHJvdG90eXBlLndoZW5EZWZpbmVkO1kucHJvdG90eXBlLnBvbHlmaWxsRGVmaW5lTGF6eT1ZLnByb3RvdHlwZS5IO1kucHJvdG90eXBlLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2s9WS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaztmdW5jdGlvbiBaKGEsYixjKXtmdW5jdGlvbiBmKGQpe3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIGc9W10saD0wO2g8YXJndW1lbnRzLmxlbmd0aDsrK2gpZ1toXT1hcmd1bWVudHNbaF07aD1bXTtmb3IodmFyIGs9W10sbD0wO2w8Zy5sZW5ndGg7bCsrKXt2YXIgbT1nW2xdO20gaW5zdGFuY2VvZiBFbGVtZW50JiZKKG0pJiZrLnB1c2gobSk7aWYobSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKG09bS5maXJzdENoaWxkO207bT1tLm5leHRTaWJsaW5nKWgucHVzaChtKTtlbHNlIGgucHVzaChtKX1kLmFwcGx5KHRoaXMsZyk7Zm9yKGc9MDtnPGsubGVuZ3RoO2crKylVKGEsa1tnXSk7aWYoSih0aGlzKSlmb3IoZz0wO2c8aC5sZW5ndGg7ZysrKWs9aFtnXSxrIGluc3RhbmNlb2YgRWxlbWVudCYmUyhhLGspfX12b2lkIDAhPT1jLnByZXBlbmQmJihiLnByZXBlbmQ9ZihjLnByZXBlbmQpKTt2b2lkIDAhPT1jLmFwcGVuZCYmKGIuYXBwZW5kPWYoYy5hcHBlbmQpKX07ZnVuY3Rpb24gQmEoYSl7RG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oYil7cmV0dXJuIHVhKGEsdGhpcyxiLG51bGwpfTtEb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZT1mdW5jdGlvbihiLGMpe2I9YWEuY2FsbCh0aGlzLGIsISFjKTt0aGlzLl9fQ0VfcmVnaXN0cnk/VihhLGIpOlEoYSxiKTtyZXR1cm4gYn07RG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnROUz1mdW5jdGlvbihiLGMpe3JldHVybiB1YShhLHRoaXMsYyxiKX07WihhLERvY3VtZW50LnByb3RvdHlwZSx7cHJlcGVuZDpiYSxhcHBlbmQ6Y2F9KX07ZnVuY3Rpb24gQ2EoYSl7ZnVuY3Rpb24gYihmKXtyZXR1cm4gZnVuY3Rpb24oZCl7Zm9yKHZhciBlPVtdLGc9MDtnPGFyZ3VtZW50cy5sZW5ndGg7KytnKWVbZ109YXJndW1lbnRzW2ddO2c9W107Zm9yKHZhciBoPVtdLGs9MDtrPGUubGVuZ3RoO2srKyl7dmFyIGw9ZVtrXTtsIGluc3RhbmNlb2YgRWxlbWVudCYmSihsKSYmaC5wdXNoKGwpO2lmKGwgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihsPWwuZmlyc3RDaGlsZDtsO2w9bC5uZXh0U2libGluZylnLnB1c2gobCk7ZWxzZSBnLnB1c2gobCl9Zi5hcHBseSh0aGlzLGUpO2ZvcihlPTA7ZTxoLmxlbmd0aDtlKyspVShhLGhbZV0pO2lmKEoodGhpcykpZm9yKGU9MDtlPGcubGVuZ3RoO2UrKyloPWdbZV0saCBpbnN0YW5jZW9mIEVsZW1lbnQmJlMoYSxoKX19dmFyIGM9RWxlbWVudC5wcm90b3R5cGU7dm9pZCAwIT09aWEmJihjLmJlZm9yZT1iKGlhKSk7dm9pZCAwIT09amEmJihjLmFmdGVyPWIoamEpKTt2b2lkIDAhPT1rYSYmXG4oYy5yZXBsYWNlV2l0aD1mdW5jdGlvbihmKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGc9W10saD0wO2g8ZC5sZW5ndGg7aCsrKXt2YXIgaz1kW2hdO2sgaW5zdGFuY2VvZiBFbGVtZW50JiZKKGspJiZnLnB1c2goayk7aWYoayBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGs9ay5maXJzdENoaWxkO2s7az1rLm5leHRTaWJsaW5nKWUucHVzaChrKTtlbHNlIGUucHVzaChrKX1oPUoodGhpcyk7a2EuYXBwbHkodGhpcyxkKTtmb3IoZD0wO2Q8Zy5sZW5ndGg7ZCsrKVUoYSxnW2RdKTtpZihoKWZvcihVKGEsdGhpcyksZD0wO2Q8ZS5sZW5ndGg7ZCsrKWc9ZVtkXSxnIGluc3RhbmNlb2YgRWxlbWVudCYmUyhhLGcpfSk7dm9pZCAwIT09bGEmJihjLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBmPUoodGhpcyk7bGEuY2FsbCh0aGlzKTtmJiZVKGEsdGhpcyl9KX07ZnVuY3Rpb24gRGEoYSl7ZnVuY3Rpb24gYihkLGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShkLFwiaW5uZXJIVE1MXCIse2VudW1lcmFibGU6ZS5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZS5nZXQsc2V0OmZ1bmN0aW9uKGcpe3ZhciBoPXRoaXMsaz12b2lkIDA7Sih0aGlzKSYmKGs9W10sUChhLHRoaXMsZnVuY3Rpb24oeCl7eCE9PWgmJmsucHVzaCh4KX0pKTtlLnNldC5jYWxsKHRoaXMsZyk7aWYoaylmb3IodmFyIGw9MDtsPGsubGVuZ3RoO2wrKyl7dmFyIG09a1tsXTsxPT09bS5fX0NFX3N0YXRlJiZhLmRpc2Nvbm5lY3RlZENhbGxiYWNrKG0pfXRoaXMub3duZXJEb2N1bWVudC5fX0NFX3JlZ2lzdHJ5P1YoYSx0aGlzKTpRKGEsdGhpcyk7cmV0dXJuIGd9fSl9ZnVuY3Rpb24gYyhkLGUpe2QuaW5zZXJ0QWRqYWNlbnRFbGVtZW50PWZ1bmN0aW9uKGcsaCl7dmFyIGs9SihoKTtnPWUuY2FsbCh0aGlzLGcsaCk7ayYmVShhLGgpO0ooZykmJlMoYSxoKTtyZXR1cm4gZ319ZnVuY3Rpb24gZihkLFxuZSl7ZnVuY3Rpb24gZyhoLGspe2Zvcih2YXIgbD1bXTtoIT09aztoPWgubmV4dFNpYmxpbmcpbC5wdXNoKGgpO2ZvcihrPTA7azxsLmxlbmd0aDtrKyspVihhLGxba10pfWQuaW5zZXJ0QWRqYWNlbnRIVE1MPWZ1bmN0aW9uKGgsayl7aD1oLnRvTG93ZXJDYXNlKCk7aWYoXCJiZWZvcmViZWdpblwiPT09aCl7dmFyIGw9dGhpcy5wcmV2aW91c1NpYmxpbmc7ZS5jYWxsKHRoaXMsaCxrKTtnKGx8fHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkLHRoaXMpfWVsc2UgaWYoXCJhZnRlcmJlZ2luXCI9PT1oKWw9dGhpcy5maXJzdENoaWxkLGUuY2FsbCh0aGlzLGgsayksZyh0aGlzLmZpcnN0Q2hpbGQsbCk7ZWxzZSBpZihcImJlZm9yZWVuZFwiPT09aClsPXRoaXMubGFzdENoaWxkLGUuY2FsbCh0aGlzLGgsayksZyhsfHx0aGlzLmZpcnN0Q2hpbGQsbnVsbCk7ZWxzZSBpZihcImFmdGVyZW5kXCI9PT1oKWw9dGhpcy5uZXh0U2libGluZyxlLmNhbGwodGhpcyxoLGspLGcodGhpcy5uZXh0U2libGluZyxsKTtcbmVsc2UgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVGhlIHZhbHVlIHByb3ZpZGVkIChcIitTdHJpbmcoaCkrXCIpIGlzIG5vdCBvbmUgb2YgJ2JlZm9yZWJlZ2luJywgJ2FmdGVyYmVnaW4nLCAnYmVmb3JlZW5kJywgb3IgJ2FmdGVyZW5kJy5cIik7fX15JiYoRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93PWZ1bmN0aW9uKGQpe2Q9eS5jYWxsKHRoaXMsZCk7aWYoYS5qJiYhZC5fX0NFX3BhdGNoZWQpe2QuX19DRV9wYXRjaGVkPSEwO2Zvcih2YXIgZT0wO2U8YS5tLmxlbmd0aDtlKyspYS5tW2VdKGQpfXJldHVybiB0aGlzLl9fQ0Vfc2hhZG93Um9vdD1kfSk7eiYmei5nZXQ/YihFbGVtZW50LnByb3RvdHlwZSx6KTpJJiZJLmdldD9iKEhUTUxFbGVtZW50LnByb3RvdHlwZSxJKTp0YShhLGZ1bmN0aW9uKGQpe2IoZCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHEuY2FsbCh0aGlzLCEwKS5pbm5lckhUTUx9LHNldDpmdW5jdGlvbihlKXt2YXIgZz1cblwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lLGg9Zz90aGlzLmNvbnRlbnQ6dGhpcyxrPXAuY2FsbChkb2N1bWVudCx0aGlzLm5hbWVzcGFjZVVSSSx0aGlzLmxvY2FsTmFtZSk7Zm9yKGsuaW5uZXJIVE1MPWU7MDxoLmNoaWxkTm9kZXMubGVuZ3RoOyl1LmNhbGwoaCxoLmNoaWxkTm9kZXNbMF0pO2ZvcihlPWc/ay5jb250ZW50Oms7MDxlLmNoaWxkTm9kZXMubGVuZ3RoOylyLmNhbGwoaCxlLmNoaWxkTm9kZXNbMF0pfX0pfSk7RWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlPWZ1bmN0aW9uKGQsZSl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gQi5jYWxsKHRoaXMsZCxlKTt2YXIgZz1BLmNhbGwodGhpcyxkKTtCLmNhbGwodGhpcyxkLGUpO2U9QS5jYWxsKHRoaXMsZCk7YS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxkLGcsZSxudWxsKX07RWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlTlM9ZnVuY3Rpb24oZCxlLGcpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIEUuY2FsbCh0aGlzLFxuZCxlLGcpO3ZhciBoPUQuY2FsbCh0aGlzLGQsZSk7RS5jYWxsKHRoaXMsZCxlLGcpO2c9RC5jYWxsKHRoaXMsZCxlKTthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGUsaCxnLGQpfTtFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGU9ZnVuY3Rpb24oZCl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gQy5jYWxsKHRoaXMsZCk7dmFyIGU9QS5jYWxsKHRoaXMsZCk7Qy5jYWxsKHRoaXMsZCk7bnVsbCE9PWUmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsZCxlLG51bGwsbnVsbCl9O0VsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZU5TPWZ1bmN0aW9uKGQsZSl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gRi5jYWxsKHRoaXMsZCxlKTt2YXIgZz1ELmNhbGwodGhpcyxkLGUpO0YuY2FsbCh0aGlzLGQsZSk7dmFyIGg9RC5jYWxsKHRoaXMsZCxlKTtnIT09aCYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxlLGcsaCxkKX07XG5uYT9jKEhUTUxFbGVtZW50LnByb3RvdHlwZSxuYSk6RyYmYyhFbGVtZW50LnByb3RvdHlwZSxHKTtvYT9mKEhUTUxFbGVtZW50LnByb3RvdHlwZSxvYSk6SCYmZihFbGVtZW50LnByb3RvdHlwZSxIKTtaKGEsRWxlbWVudC5wcm90b3R5cGUse3ByZXBlbmQ6ZmEsYXBwZW5kOmhhfSk7Q2EoYSl9O3ZhciBFYT17fTtmdW5jdGlvbiBGYShhKXtmdW5jdGlvbiBiKCl7dmFyIGM9dGhpcy5jb25zdHJ1Y3Rvcjt2YXIgZj1kb2N1bWVudC5fX0NFX3JlZ2lzdHJ5LkMuZ2V0KGMpO2lmKCFmKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCBhIGN1c3RvbSBlbGVtZW50OiBUaGUgY29uc3RydWN0b3Igd2FzIG5vdCByZWdpc3RlcmVkIHdpdGggYGN1c3RvbUVsZW1lbnRzYC5cIik7dmFyIGQ9Zi5jb25zdHJ1Y3Rpb25TdGFjaztpZigwPT09ZC5sZW5ndGgpcmV0dXJuIGQ9bi5jYWxsKGRvY3VtZW50LGYubG9jYWxOYW1lKSxPYmplY3Quc2V0UHJvdG90eXBlT2YoZCxjLnByb3RvdHlwZSksZC5fX0NFX3N0YXRlPTEsZC5fX0NFX2RlZmluaXRpb249ZixSKGEsZCksZDt2YXIgZT1kLmxlbmd0aC0xLGc9ZFtlXTtpZihnPT09RWEpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdcIitmLmxvY2FsTmFtZStcIic6IFRoaXMgZWxlbWVudCB3YXMgYWxyZWFkeSBjb25zdHJ1Y3RlZC5cIik7ZFtlXT1FYTtcbk9iamVjdC5zZXRQcm90b3R5cGVPZihnLGMucHJvdG90eXBlKTtSKGEsZyk7cmV0dXJuIGd9Yi5wcm90b3R5cGU9bWEucHJvdG90eXBlO09iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUsXCJjb25zdHJ1Y3RvclwiLHt3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSx2YWx1ZTpifSk7d2luZG93LkhUTUxFbGVtZW50PWJ9O2Z1bmN0aW9uIEdhKGEpe2Z1bmN0aW9uIGIoYyxmKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYyxcInRleHRDb250ZW50XCIse2VudW1lcmFibGU6Zi5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6Zi5nZXQsc2V0OmZ1bmN0aW9uKGQpe2lmKHRoaXMubm9kZVR5cGU9PT1Ob2RlLlRFWFRfTk9ERSlmLnNldC5jYWxsKHRoaXMsZCk7ZWxzZXt2YXIgZT12b2lkIDA7aWYodGhpcy5maXJzdENoaWxkKXt2YXIgZz10aGlzLmNoaWxkTm9kZXMsaD1nLmxlbmd0aDtpZigwPGgmJkoodGhpcykpe2U9QXJyYXkoaCk7Zm9yKHZhciBrPTA7azxoO2srKyllW2tdPWdba119fWYuc2V0LmNhbGwodGhpcyxkKTtpZihlKWZvcihkPTA7ZDxlLmxlbmd0aDtkKyspVShhLGVbZF0pfX19KX1Ob2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmU9ZnVuY3Rpb24oYyxmKXtpZihjIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGQ9SyhjKTtjPXQuY2FsbCh0aGlzLGMsZik7aWYoSih0aGlzKSlmb3IoZj1cbjA7ZjxkLmxlbmd0aDtmKyspUyhhLGRbZl0pO3JldHVybiBjfWQ9YyBpbnN0YW5jZW9mIEVsZW1lbnQmJkooYyk7Zj10LmNhbGwodGhpcyxjLGYpO2QmJlUoYSxjKTtKKHRoaXMpJiZTKGEsYyk7cmV0dXJuIGZ9O05vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkPWZ1bmN0aW9uKGMpe2lmKGMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgZj1LKGMpO2M9ci5jYWxsKHRoaXMsYyk7aWYoSih0aGlzKSlmb3IodmFyIGQ9MDtkPGYubGVuZ3RoO2QrKylTKGEsZltkXSk7cmV0dXJuIGN9Zj1jIGluc3RhbmNlb2YgRWxlbWVudCYmSihjKTtkPXIuY2FsbCh0aGlzLGMpO2YmJlUoYSxjKTtKKHRoaXMpJiZTKGEsYyk7cmV0dXJuIGR9O05vZGUucHJvdG90eXBlLmNsb25lTm9kZT1mdW5jdGlvbihjKXtjPXEuY2FsbCh0aGlzLCEhYyk7dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfcmVnaXN0cnk/VihhLGMpOlEoYSxjKTtyZXR1cm4gY307Tm9kZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQ9ZnVuY3Rpb24oYyl7dmFyIGY9XG5jIGluc3RhbmNlb2YgRWxlbWVudCYmSihjKSxkPXUuY2FsbCh0aGlzLGMpO2YmJlUoYSxjKTtyZXR1cm4gZH07Tm9kZS5wcm90b3R5cGUucmVwbGFjZUNoaWxkPWZ1bmN0aW9uKGMsZil7aWYoYyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBkPUsoYyk7Yz12LmNhbGwodGhpcyxjLGYpO2lmKEoodGhpcykpZm9yKFUoYSxmKSxmPTA7ZjxkLmxlbmd0aDtmKyspUyhhLGRbZl0pO3JldHVybiBjfWQ9YyBpbnN0YW5jZW9mIEVsZW1lbnQmJkooYyk7dmFyIGU9di5jYWxsKHRoaXMsYyxmKSxnPUoodGhpcyk7ZyYmVShhLGYpO2QmJlUoYSxjKTtnJiZTKGEsYyk7cmV0dXJuIGV9O3cmJncuZ2V0P2IoTm9kZS5wcm90b3R5cGUsdyk6c2EoYSxmdW5jdGlvbihjKXtiKGMse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2Zvcih2YXIgZj1bXSxkPXRoaXMuZmlyc3RDaGlsZDtkO2Q9ZC5uZXh0U2libGluZylkLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUmJlxuZi5wdXNoKGQudGV4dENvbnRlbnQpO3JldHVybiBmLmpvaW4oXCJcIil9LHNldDpmdW5jdGlvbihmKXtmb3IoO3RoaXMuZmlyc3RDaGlsZDspdS5jYWxsKHRoaXMsdGhpcy5maXJzdENoaWxkKTtudWxsIT1mJiZcIlwiIT09ZiYmci5jYWxsKHRoaXMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZikpfX0pfSl9O3ZhciBPPXdpbmRvdy5jdXN0b21FbGVtZW50cztmdW5jdGlvbiBIYSgpe3ZhciBhPW5ldyBOO0ZhKGEpO0JhKGEpO1ooYSxEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSx7cHJlcGVuZDpkYSxhcHBlbmQ6ZWF9KTtHYShhKTtEYShhKTthPW5ldyBZKGEpO2RvY3VtZW50Ll9fQ0VfcmVnaXN0cnk9YTtPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LFwiY3VzdG9tRWxlbWVudHNcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsdmFsdWU6YX0pfU8mJiFPLmZvcmNlUG9seWZpbGwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIE8uZGVmaW5lJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBPLmdldHx8SGEoKTt3aW5kb3cuX19DRV9pbnN0YWxsUG9seWZpbGw9SGE7XG59KS5jYWxsKHNlbGYpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tZWxlbWVudHMubWluLmpzLm1hcFxuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5ib3dzZXI9dCgpOmUuYm93c2VyPXQoKX0odGhpcywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIGk9dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsciksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgaSBpbiBlKXIuZChuLGksZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxpKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCJcIixyKHIucz05MCl9KHsxNzpmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwLHQuZGVmYXVsdD12b2lkIDA7dmFyIG49cigxOCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9cmV0dXJuIGUuZ2V0Rmlyc3RNYXRjaD1mdW5jdGlvbihlLHQpe3ZhciByPXQubWF0Y2goZSk7cmV0dXJuIHImJnIubGVuZ3RoPjAmJnJbMV18fFwiXCJ9LGUuZ2V0U2Vjb25kTWF0Y2g9ZnVuY3Rpb24oZSx0KXt2YXIgcj10Lm1hdGNoKGUpO3JldHVybiByJiZyLmxlbmd0aD4xJiZyWzJdfHxcIlwifSxlLm1hdGNoQW5kUmV0dXJuQ29uc3Q9ZnVuY3Rpb24oZSx0LHIpe2lmKGUudGVzdCh0KSlyZXR1cm4gcn0sZS5nZXRXaW5kb3dzVmVyc2lvbk5hbWU9ZnVuY3Rpb24oZSl7c3dpdGNoKGUpe2Nhc2VcIk5UXCI6cmV0dXJuXCJOVFwiO2Nhc2VcIlhQXCI6cmV0dXJuXCJYUFwiO2Nhc2VcIk5UIDUuMFwiOnJldHVyblwiMjAwMFwiO2Nhc2VcIk5UIDUuMVwiOnJldHVyblwiWFBcIjtjYXNlXCJOVCA1LjJcIjpyZXR1cm5cIjIwMDNcIjtjYXNlXCJOVCA2LjBcIjpyZXR1cm5cIlZpc3RhXCI7Y2FzZVwiTlQgNi4xXCI6cmV0dXJuXCI3XCI7Y2FzZVwiTlQgNi4yXCI6cmV0dXJuXCI4XCI7Y2FzZVwiTlQgNi4zXCI6cmV0dXJuXCI4LjFcIjtjYXNlXCJOVCAxMC4wXCI6cmV0dXJuXCIxMFwiO2RlZmF1bHQ6cmV0dXJufX0sZS5nZXRNYWNPU1ZlcnNpb25OYW1lPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCIuXCIpLnNwbGljZSgwLDIpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlSW50KGUsMTApfHwwfSkpO2lmKHQucHVzaCgwKSwxMD09PXRbMF0pc3dpdGNoKHRbMV0pe2Nhc2UgNTpyZXR1cm5cIkxlb3BhcmRcIjtjYXNlIDY6cmV0dXJuXCJTbm93IExlb3BhcmRcIjtjYXNlIDc6cmV0dXJuXCJMaW9uXCI7Y2FzZSA4OnJldHVyblwiTW91bnRhaW4gTGlvblwiO2Nhc2UgOTpyZXR1cm5cIk1hdmVyaWNrc1wiO2Nhc2UgMTA6cmV0dXJuXCJZb3NlbWl0ZVwiO2Nhc2UgMTE6cmV0dXJuXCJFbCBDYXBpdGFuXCI7Y2FzZSAxMjpyZXR1cm5cIlNpZXJyYVwiO2Nhc2UgMTM6cmV0dXJuXCJIaWdoIFNpZXJyYVwiO2Nhc2UgMTQ6cmV0dXJuXCJNb2phdmVcIjtjYXNlIDE1OnJldHVyblwiQ2F0YWxpbmFcIjtkZWZhdWx0OnJldHVybn19LGUuZ2V0QW5kcm9pZFZlcnNpb25OYW1lPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCIuXCIpLnNwbGljZSgwLDIpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlSW50KGUsMTApfHwwfSkpO2lmKHQucHVzaCgwKSwhKDE9PT10WzBdJiZ0WzFdPDUpKXJldHVybiAxPT09dFswXSYmdFsxXTw2P1wiQ3VwY2FrZVwiOjE9PT10WzBdJiZ0WzFdPj02P1wiRG9udXRcIjoyPT09dFswXSYmdFsxXTwyP1wiRWNsYWlyXCI6Mj09PXRbMF0mJjI9PT10WzFdP1wiRnJveW9cIjoyPT09dFswXSYmdFsxXT4yP1wiR2luZ2VyYnJlYWRcIjozPT09dFswXT9cIkhvbmV5Y29tYlwiOjQ9PT10WzBdJiZ0WzFdPDE/XCJJY2UgQ3JlYW0gU2FuZHdpY2hcIjo0PT09dFswXSYmdFsxXTw0P1wiSmVsbHkgQmVhblwiOjQ9PT10WzBdJiZ0WzFdPj00P1wiS2l0S2F0XCI6NT09PXRbMF0/XCJMb2xsaXBvcFwiOjY9PT10WzBdP1wiTWFyc2htYWxsb3dcIjo3PT09dFswXT9cIk5vdWdhdFwiOjg9PT10WzBdP1wiT3Jlb1wiOjk9PT10WzBdP1wiUGllXCI6dm9pZCAwfSxlLmdldFZlcnNpb25QcmVjaXNpb249ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc3BsaXQoXCIuXCIpLmxlbmd0aH0sZS5jb21wYXJlVmVyc2lvbnM9ZnVuY3Rpb24odCxyLG4pe3ZvaWQgMD09PW4mJihuPSExKTt2YXIgaT1lLmdldFZlcnNpb25QcmVjaXNpb24odCkscz1lLmdldFZlcnNpb25QcmVjaXNpb24ociksYT1NYXRoLm1heChpLHMpLG89MCx1PWUubWFwKFt0LHJdLChmdW5jdGlvbih0KXt2YXIgcj1hLWUuZ2V0VmVyc2lvblByZWNpc2lvbih0KSxuPXQrbmV3IEFycmF5KHIrMSkuam9pbihcIi4wXCIpO3JldHVybiBlLm1hcChuLnNwbGl0KFwiLlwiKSwoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBBcnJheSgyMC1lLmxlbmd0aCkuam9pbihcIjBcIikrZX0pKS5yZXZlcnNlKCl9KSk7Zm9yKG4mJihvPWEtTWF0aC5taW4oaSxzKSksYS09MTthPj1vOyl7aWYodVswXVthXT51WzFdW2FdKXJldHVybiAxO2lmKHVbMF1bYV09PT11WzFdW2FdKXtpZihhPT09bylyZXR1cm4gMDthLT0xfWVsc2UgaWYodVswXVthXTx1WzFdW2FdKXJldHVybi0xfX0sZS5tYXA9ZnVuY3Rpb24oZSx0KXt2YXIgcixuPVtdO2lmKEFycmF5LnByb3RvdHlwZS5tYXApcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlLHQpO2ZvcihyPTA7cjxlLmxlbmd0aDtyKz0xKW4ucHVzaCh0KGVbcl0pKTtyZXR1cm4gbn0sZS5maW5kPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbjtpZihBcnJheS5wcm90b3R5cGUuZmluZClyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChlLHQpO2ZvcihyPTAsbj1lLmxlbmd0aDtyPG47cis9MSl7dmFyIGk9ZVtyXTtpZih0KGkscikpcmV0dXJuIGl9fSxlLmFzc2lnbj1mdW5jdGlvbihlKXtmb3IodmFyIHQscixuPWUsaT1hcmd1bWVudHMubGVuZ3RoLHM9bmV3IEFycmF5KGk+MT9pLTE6MCksYT0xO2E8aTthKyspc1thLTFdPWFyZ3VtZW50c1thXTtpZihPYmplY3QuYXNzaWduKXJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCxbZV0uY29uY2F0KHMpKTt2YXIgbz1mdW5jdGlvbigpe3ZhciBlPXNbdF07XCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiZPYmplY3Qua2V5cyhlKS5mb3JFYWNoKChmdW5jdGlvbih0KXtuW3RdPWVbdF19KSl9O2Zvcih0PTAscj1zLmxlbmd0aDt0PHI7dCs9MSlvKCk7cmV0dXJuIGV9LGUuZ2V0QnJvd3NlckFsaWFzPWZ1bmN0aW9uKGUpe3JldHVybiBuLkJST1dTRVJfQUxJQVNFU19NQVBbZV19LGUuZ2V0QnJvd3NlclR5cGVCeUFsaWFzPWZ1bmN0aW9uKGUpe3JldHVybiBuLkJST1dTRVJfTUFQW2VdfHxcIlwifSxlfSgpO3QuZGVmYXVsdD1pLGUuZXhwb3J0cz10LmRlZmF1bHR9LDE4OmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5FTkdJTkVfTUFQPXQuT1NfTUFQPXQuUExBVEZPUk1TX01BUD10LkJST1dTRVJfTUFQPXQuQlJPV1NFUl9BTElBU0VTX01BUD12b2lkIDA7dC5CUk9XU0VSX0FMSUFTRVNfTUFQPXtcIkFtYXpvbiBTaWxrXCI6XCJhbWF6b25fc2lsa1wiLFwiQW5kcm9pZCBCcm93c2VyXCI6XCJhbmRyb2lkXCIsQmFkYTpcImJhZGFcIixCbGFja0JlcnJ5OlwiYmxhY2tiZXJyeVwiLENocm9tZTpcImNocm9tZVwiLENocm9taXVtOlwiY2hyb21pdW1cIixFbGVjdHJvbjpcImVsZWN0cm9uXCIsRXBpcGhhbnk6XCJlcGlwaGFueVwiLEZpcmVmb3g6XCJmaXJlZm94XCIsRm9jdXM6XCJmb2N1c1wiLEdlbmVyaWM6XCJnZW5lcmljXCIsXCJHb29nbGUgU2VhcmNoXCI6XCJnb29nbGVfc2VhcmNoXCIsR29vZ2xlYm90OlwiZ29vZ2xlYm90XCIsXCJJbnRlcm5ldCBFeHBsb3JlclwiOlwiaWVcIixcIkstTWVsZW9uXCI6XCJrX21lbGVvblwiLE1heHRob246XCJtYXh0aG9uXCIsXCJNaWNyb3NvZnQgRWRnZVwiOlwiZWRnZVwiLFwiTVogQnJvd3NlclwiOlwibXpcIixcIk5BVkVSIFdoYWxlIEJyb3dzZXJcIjpcIm5hdmVyXCIsT3BlcmE6XCJvcGVyYVwiLFwiT3BlcmEgQ29hc3RcIjpcIm9wZXJhX2NvYXN0XCIsUGhhbnRvbUpTOlwicGhhbnRvbWpzXCIsUHVmZmluOlwicHVmZmluXCIsUXVwWmlsbGE6XCJxdXB6aWxsYVwiLFFROlwicXFcIixRUUxpdGU6XCJxcWxpdGVcIixTYWZhcmk6XCJzYWZhcmlcIixTYWlsZmlzaDpcInNhaWxmaXNoXCIsXCJTYW1zdW5nIEludGVybmV0IGZvciBBbmRyb2lkXCI6XCJzYW1zdW5nX2ludGVybmV0XCIsU2VhTW9ua2V5Olwic2VhbW9ua2V5XCIsU2xlaXBuaXI6XCJzbGVpcG5pclwiLFN3aW5nOlwic3dpbmdcIixUaXplbjpcInRpemVuXCIsXCJVQyBCcm93c2VyXCI6XCJ1Y1wiLFZpdmFsZGk6XCJ2aXZhbGRpXCIsXCJXZWJPUyBCcm93c2VyXCI6XCJ3ZWJvc1wiLFdlQ2hhdDpcIndlY2hhdFwiLFwiWWFuZGV4IEJyb3dzZXJcIjpcInlhbmRleFwiLFJva3U6XCJyb2t1XCJ9O3QuQlJPV1NFUl9NQVA9e2FtYXpvbl9zaWxrOlwiQW1hem9uIFNpbGtcIixhbmRyb2lkOlwiQW5kcm9pZCBCcm93c2VyXCIsYmFkYTpcIkJhZGFcIixibGFja2JlcnJ5OlwiQmxhY2tCZXJyeVwiLGNocm9tZTpcIkNocm9tZVwiLGNocm9taXVtOlwiQ2hyb21pdW1cIixlbGVjdHJvbjpcIkVsZWN0cm9uXCIsZXBpcGhhbnk6XCJFcGlwaGFueVwiLGZpcmVmb3g6XCJGaXJlZm94XCIsZm9jdXM6XCJGb2N1c1wiLGdlbmVyaWM6XCJHZW5lcmljXCIsZ29vZ2xlYm90OlwiR29vZ2xlYm90XCIsZ29vZ2xlX3NlYXJjaDpcIkdvb2dsZSBTZWFyY2hcIixpZTpcIkludGVybmV0IEV4cGxvcmVyXCIsa19tZWxlb246XCJLLU1lbGVvblwiLG1heHRob246XCJNYXh0aG9uXCIsZWRnZTpcIk1pY3Jvc29mdCBFZGdlXCIsbXo6XCJNWiBCcm93c2VyXCIsbmF2ZXI6XCJOQVZFUiBXaGFsZSBCcm93c2VyXCIsb3BlcmE6XCJPcGVyYVwiLG9wZXJhX2NvYXN0OlwiT3BlcmEgQ29hc3RcIixwaGFudG9tanM6XCJQaGFudG9tSlNcIixwdWZmaW46XCJQdWZmaW5cIixxdXB6aWxsYTpcIlF1cFppbGxhXCIscXE6XCJRUSBCcm93c2VyXCIscXFsaXRlOlwiUVEgQnJvd3NlciBMaXRlXCIsc2FmYXJpOlwiU2FmYXJpXCIsc2FpbGZpc2g6XCJTYWlsZmlzaFwiLHNhbXN1bmdfaW50ZXJuZXQ6XCJTYW1zdW5nIEludGVybmV0IGZvciBBbmRyb2lkXCIsc2VhbW9ua2V5OlwiU2VhTW9ua2V5XCIsc2xlaXBuaXI6XCJTbGVpcG5pclwiLHN3aW5nOlwiU3dpbmdcIix0aXplbjpcIlRpemVuXCIsdWM6XCJVQyBCcm93c2VyXCIsdml2YWxkaTpcIlZpdmFsZGlcIix3ZWJvczpcIldlYk9TIEJyb3dzZXJcIix3ZWNoYXQ6XCJXZUNoYXRcIix5YW5kZXg6XCJZYW5kZXggQnJvd3NlclwifTt0LlBMQVRGT1JNU19NQVA9e3RhYmxldDpcInRhYmxldFwiLG1vYmlsZTpcIm1vYmlsZVwiLGRlc2t0b3A6XCJkZXNrdG9wXCIsdHY6XCJ0dlwifTt0Lk9TX01BUD17V2luZG93c1Bob25lOlwiV2luZG93cyBQaG9uZVwiLFdpbmRvd3M6XCJXaW5kb3dzXCIsTWFjT1M6XCJtYWNPU1wiLGlPUzpcImlPU1wiLEFuZHJvaWQ6XCJBbmRyb2lkXCIsV2ViT1M6XCJXZWJPU1wiLEJsYWNrQmVycnk6XCJCbGFja0JlcnJ5XCIsQmFkYTpcIkJhZGFcIixUaXplbjpcIlRpemVuXCIsTGludXg6XCJMaW51eFwiLENocm9tZU9TOlwiQ2hyb21lIE9TXCIsUGxheVN0YXRpb240OlwiUGxheVN0YXRpb24gNFwiLFJva3U6XCJSb2t1XCJ9O3QuRU5HSU5FX01BUD17RWRnZUhUTUw6XCJFZGdlSFRNTFwiLEJsaW5rOlwiQmxpbmtcIixUcmlkZW50OlwiVHJpZGVudFwiLFByZXN0bzpcIlByZXN0b1wiLEdlY2tvOlwiR2Vja29cIixXZWJLaXQ6XCJXZWJLaXRcIn19LDkwOmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgbixpPShuPXIoOTEpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn0scz1yKDE4KTtmdW5jdGlvbiBhKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBuPXRbcl07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX12YXIgbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9dmFyIHQscixuO3JldHVybiBlLmdldFBhcnNlcj1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PSExKSxcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoXCJVc2VyQWdlbnQgc2hvdWxkIGJlIGEgc3RyaW5nXCIpO3JldHVybiBuZXcgaS5kZWZhdWx0KGUsdCl9LGUucGFyc2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBpLmRlZmF1bHQoZSkuZ2V0UmVzdWx0KCl9LHQ9ZSxuPVt7a2V5OlwiQlJPV1NFUl9NQVBcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcy5CUk9XU0VSX01BUH19LHtrZXk6XCJFTkdJTkVfTUFQXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHMuRU5HSU5FX01BUH19LHtrZXk6XCJPU19NQVBcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcy5PU19NQVB9fSx7a2V5OlwiUExBVEZPUk1TX01BUFwiLGdldDpmdW5jdGlvbigpe3JldHVybiBzLlBMQVRGT1JNU19NQVB9fV0sKHI9bnVsbCkmJmEodC5wcm90b3R5cGUsciksbiYmYSh0LG4pLGV9KCk7dC5kZWZhdWx0PW8sZS5leHBvcnRzPXQuZGVmYXVsdH0sOTE6ZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMCx0LmRlZmF1bHQ9dm9pZCAwO3ZhciBuPXUocig5MikpLGk9dShyKDkzKSkscz11KHIoOTQpKSxhPXUocig5NSkpLG89dShyKDE3KSk7ZnVuY3Rpb24gdShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19dmFyIGQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7aWYodm9pZCAwPT09dCYmKHQ9ITEpLG51bGw9PWV8fFwiXCI9PT1lKXRocm93IG5ldyBFcnJvcihcIlVzZXJBZ2VudCBwYXJhbWV0ZXIgY2FuJ3QgYmUgZW1wdHlcIik7dGhpcy5fdWE9ZSx0aGlzLnBhcnNlZFJlc3VsdD17fSwhMCE9PXQmJnRoaXMucGFyc2UoKX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5nZXRVQT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl91YX0sdC50ZXN0PWZ1bmN0aW9uKGUpe3JldHVybiBlLnRlc3QodGhpcy5fdWEpfSx0LnBhcnNlQnJvd3Nlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5wYXJzZWRSZXN1bHQuYnJvd3Nlcj17fTt2YXIgdD1vLmRlZmF1bHQuZmluZChuLmRlZmF1bHQsKGZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQudGVzdClyZXR1cm4gdC50ZXN0KGUpO2lmKHQudGVzdCBpbnN0YW5jZW9mIEFycmF5KXJldHVybiB0LnRlc3Quc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIGUudGVzdCh0KX0pKTt0aHJvdyBuZXcgRXJyb3IoXCJCcm93c2VyJ3MgdGVzdCBmdW5jdGlvbiBpcyBub3QgdmFsaWRcIil9KSk7cmV0dXJuIHQmJih0aGlzLnBhcnNlZFJlc3VsdC5icm93c2VyPXQuZGVzY3JpYmUodGhpcy5nZXRVQSgpKSksdGhpcy5wYXJzZWRSZXN1bHQuYnJvd3Nlcn0sdC5nZXRCcm93c2VyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyc2VkUmVzdWx0LmJyb3dzZXI/dGhpcy5wYXJzZWRSZXN1bHQuYnJvd3Nlcjp0aGlzLnBhcnNlQnJvd3NlcigpfSx0LmdldEJyb3dzZXJOYW1lPWZ1bmN0aW9uKGUpe3JldHVybiBlP1N0cmluZyh0aGlzLmdldEJyb3dzZXIoKS5uYW1lKS50b0xvd2VyQ2FzZSgpfHxcIlwiOnRoaXMuZ2V0QnJvd3NlcigpLm5hbWV8fFwiXCJ9LHQuZ2V0QnJvd3NlclZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRCcm93c2VyKCkudmVyc2lvbn0sdC5nZXRPUz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcnNlZFJlc3VsdC5vcz90aGlzLnBhcnNlZFJlc3VsdC5vczp0aGlzLnBhcnNlT1MoKX0sdC5wYXJzZU9TPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnBhcnNlZFJlc3VsdC5vcz17fTt2YXIgdD1vLmRlZmF1bHQuZmluZChpLmRlZmF1bHQsKGZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQudGVzdClyZXR1cm4gdC50ZXN0KGUpO2lmKHQudGVzdCBpbnN0YW5jZW9mIEFycmF5KXJldHVybiB0LnRlc3Quc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIGUudGVzdCh0KX0pKTt0aHJvdyBuZXcgRXJyb3IoXCJCcm93c2VyJ3MgdGVzdCBmdW5jdGlvbiBpcyBub3QgdmFsaWRcIil9KSk7cmV0dXJuIHQmJih0aGlzLnBhcnNlZFJlc3VsdC5vcz10LmRlc2NyaWJlKHRoaXMuZ2V0VUEoKSkpLHRoaXMucGFyc2VkUmVzdWx0Lm9zfSx0LmdldE9TTmFtZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmdldE9TKCkubmFtZTtyZXR1cm4gZT9TdHJpbmcodCkudG9Mb3dlckNhc2UoKXx8XCJcIjp0fHxcIlwifSx0LmdldE9TVmVyc2lvbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldE9TKCkudmVyc2lvbn0sdC5nZXRQbGF0Zm9ybT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcnNlZFJlc3VsdC5wbGF0Zm9ybT90aGlzLnBhcnNlZFJlc3VsdC5wbGF0Zm9ybTp0aGlzLnBhcnNlUGxhdGZvcm0oKX0sdC5nZXRQbGF0Zm9ybVR5cGU9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9ITEpO3ZhciB0PXRoaXMuZ2V0UGxhdGZvcm0oKS50eXBlO3JldHVybiBlP1N0cmluZyh0KS50b0xvd2VyQ2FzZSgpfHxcIlwiOnR8fFwiXCJ9LHQucGFyc2VQbGF0Zm9ybT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5wYXJzZWRSZXN1bHQucGxhdGZvcm09e307dmFyIHQ9by5kZWZhdWx0LmZpbmQocy5kZWZhdWx0LChmdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRlc3QpcmV0dXJuIHQudGVzdChlKTtpZih0LnRlc3QgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm4gdC50ZXN0LnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnRlc3QodCl9KSk7dGhyb3cgbmV3IEVycm9yKFwiQnJvd3NlcidzIHRlc3QgZnVuY3Rpb24gaXMgbm90IHZhbGlkXCIpfSkpO3JldHVybiB0JiYodGhpcy5wYXJzZWRSZXN1bHQucGxhdGZvcm09dC5kZXNjcmliZSh0aGlzLmdldFVBKCkpKSx0aGlzLnBhcnNlZFJlc3VsdC5wbGF0Zm9ybX0sdC5nZXRFbmdpbmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJzZWRSZXN1bHQuZW5naW5lP3RoaXMucGFyc2VkUmVzdWx0LmVuZ2luZTp0aGlzLnBhcnNlRW5naW5lKCl9LHQuZ2V0RW5naW5lTmFtZT1mdW5jdGlvbihlKXtyZXR1cm4gZT9TdHJpbmcodGhpcy5nZXRFbmdpbmUoKS5uYW1lKS50b0xvd2VyQ2FzZSgpfHxcIlwiOnRoaXMuZ2V0RW5naW5lKCkubmFtZXx8XCJcIn0sdC5wYXJzZUVuZ2luZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5wYXJzZWRSZXN1bHQuZW5naW5lPXt9O3ZhciB0PW8uZGVmYXVsdC5maW5kKGEuZGVmYXVsdCwoZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC50ZXN0KXJldHVybiB0LnRlc3QoZSk7aWYodC50ZXN0IGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuIHQudGVzdC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gZS50ZXN0KHQpfSkpO3Rocm93IG5ldyBFcnJvcihcIkJyb3dzZXIncyB0ZXN0IGZ1bmN0aW9uIGlzIG5vdCB2YWxpZFwiKX0pKTtyZXR1cm4gdCYmKHRoaXMucGFyc2VkUmVzdWx0LmVuZ2luZT10LmRlc2NyaWJlKHRoaXMuZ2V0VUEoKSkpLHRoaXMucGFyc2VkUmVzdWx0LmVuZ2luZX0sdC5wYXJzZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcnNlQnJvd3NlcigpLHRoaXMucGFyc2VPUygpLHRoaXMucGFyc2VQbGF0Zm9ybSgpLHRoaXMucGFyc2VFbmdpbmUoKSx0aGlzfSx0LmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybiBvLmRlZmF1bHQuYXNzaWduKHt9LHRoaXMucGFyc2VkUmVzdWx0KX0sdC5zYXRpc2ZpZXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXt9LG49MCxpPXt9LHM9MDtpZihPYmplY3Qua2V5cyhlKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgYT1lW3RdO1wic3RyaW5nXCI9PXR5cGVvZiBhPyhpW3RdPWEscys9MSk6XCJvYmplY3RcIj09dHlwZW9mIGEmJihyW3RdPWEsbis9MSl9KSksbj4wKXt2YXIgYT1PYmplY3Qua2V5cyhyKSx1PW8uZGVmYXVsdC5maW5kKGEsKGZ1bmN0aW9uKGUpe3JldHVybiB0LmlzT1MoZSl9KSk7aWYodSl7dmFyIGQ9dGhpcy5zYXRpc2ZpZXMoclt1XSk7aWYodm9pZCAwIT09ZClyZXR1cm4gZH12YXIgYz1vLmRlZmF1bHQuZmluZChhLChmdW5jdGlvbihlKXtyZXR1cm4gdC5pc1BsYXRmb3JtKGUpfSkpO2lmKGMpe3ZhciBmPXRoaXMuc2F0aXNmaWVzKHJbY10pO2lmKHZvaWQgMCE9PWYpcmV0dXJuIGZ9fWlmKHM+MCl7dmFyIGw9T2JqZWN0LmtleXMoaSksaD1vLmRlZmF1bHQuZmluZChsLChmdW5jdGlvbihlKXtyZXR1cm4gdC5pc0Jyb3dzZXIoZSwhMCl9KSk7aWYodm9pZCAwIT09aClyZXR1cm4gdGhpcy5jb21wYXJlVmVyc2lvbihpW2hdKX19LHQuaXNCcm93c2VyPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9ITEpO3ZhciByPXRoaXMuZ2V0QnJvd3Nlck5hbWUoKS50b0xvd2VyQ2FzZSgpLG49ZS50b0xvd2VyQ2FzZSgpLGk9by5kZWZhdWx0LmdldEJyb3dzZXJUeXBlQnlBbGlhcyhuKTtyZXR1cm4gdCYmaSYmKG49aS50b0xvd2VyQ2FzZSgpKSxuPT09cn0sdC5jb21wYXJlVmVyc2lvbj1mdW5jdGlvbihlKXt2YXIgdD1bMF0scj1lLG49ITEsaT10aGlzLmdldEJyb3dzZXJWZXJzaW9uKCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpcmV0dXJuXCI+XCI9PT1lWzBdfHxcIjxcIj09PWVbMF0/KHI9ZS5zdWJzdHIoMSksXCI9XCI9PT1lWzFdPyhuPSEwLHI9ZS5zdWJzdHIoMikpOnQ9W10sXCI+XCI9PT1lWzBdP3QucHVzaCgxKTp0LnB1c2goLTEpKTpcIj1cIj09PWVbMF0/cj1lLnN1YnN0cigxKTpcIn5cIj09PWVbMF0mJihuPSEwLHI9ZS5zdWJzdHIoMSkpLHQuaW5kZXhPZihvLmRlZmF1bHQuY29tcGFyZVZlcnNpb25zKGkscixuKSk+LTF9LHQuaXNPUz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nZXRPU05hbWUoITApPT09U3RyaW5nKGUpLnRvTG93ZXJDYXNlKCl9LHQuaXNQbGF0Zm9ybT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nZXRQbGF0Zm9ybVR5cGUoITApPT09U3RyaW5nKGUpLnRvTG93ZXJDYXNlKCl9LHQuaXNFbmdpbmU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZ2V0RW5naW5lTmFtZSghMCk9PT1TdHJpbmcoZSkudG9Mb3dlckNhc2UoKX0sdC5pcz1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0hMSksdGhpcy5pc0Jyb3dzZXIoZSx0KXx8dGhpcy5pc09TKGUpfHx0aGlzLmlzUGxhdGZvcm0oZSl9LHQuc29tZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiB2b2lkIDA9PT1lJiYoZT1bXSksZS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gdC5pcyhlKX0pKX0sZX0oKTt0LmRlZmF1bHQ9ZCxlLmV4cG9ydHM9dC5kZWZhdWx0fSw5MjpmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwLHQuZGVmYXVsdD12b2lkIDA7dmFyIG4saT0obj1yKDE3KSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBzPS92ZXJzaW9uXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGE9W3t0ZXN0OlsvZ29vZ2xlYm90L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiR29vZ2xlYm90XCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2dvb2dsZWJvdFxcLyhcXGQrKFxcLlxcZCspKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL29wZXJhL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiT3BlcmFcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86b3BlcmEpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL29wclxcL3xvcGlvcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIk9wZXJhXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Om9wcnxvcGlvcylbXFxzL10oXFxTKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9TYW1zdW5nQnJvd3Nlci9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlNhbXN1bmcgSW50ZXJuZXQgZm9yIEFuZHJvaWRcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86U2Ftc3VuZ0Jyb3dzZXIpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL1doYWxlL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiTkFWRVIgV2hhbGUgQnJvd3NlclwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzp3aGFsZSlbXFxzL10oXFxkKyg/OlxcLlxcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9NWkJyb3dzZXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJNWiBCcm93c2VyXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Ok1aQnJvd3NlcilbXFxzL10oXFxkKyg/OlxcLlxcZCspKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9mb2N1cy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkZvY3VzXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OmZvY3VzKVtcXHMvXShcXGQrKD86XFwuXFxkKykrKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3N3aW5nL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU3dpbmdcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86c3dpbmcpW1xccy9dKFxcZCsoPzpcXC5cXGQrKSspL2ksZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvY29hc3QvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJPcGVyYSBDb2FzdFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpjb2FzdClbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvb3B0XFwvXFxkKyg/Oi4/Xz9cXGQrKSsvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJPcGVyYSBUb3VjaFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpvcHQpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3lhYnJvd3Nlci9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIllhbmRleCBCcm93c2VyXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OnlhYnJvd3NlcilbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvdWNicm93c2VyL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiVUMgQnJvd3NlclwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzp1Y2Jyb3dzZXIpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL01heHRob258bXhpb3MvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJNYXh0aG9uXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Ok1heHRob258bXhpb3MpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL2VwaXBoYW55L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiRXBpcGhhbnlcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86ZXBpcGhhbnkpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3B1ZmZpbi9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlB1ZmZpblwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpwdWZmaW4pW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3NsZWlwbmlyL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU2xlaXBuaXJcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86c2xlaXBuaXIpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL2stbWVsZW9uL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiSy1NZWxlb25cIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86ay1tZWxlb24pW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL21pY3JvbWVzc2VuZ2VyL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiV2VDaGF0XCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Om1pY3JvbWVzc2VuZ2VyKVtcXHMvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9xcWJyb3dzZXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6L3FxYnJvd3NlcmxpdGUvaS50ZXN0KGUpP1wiUVEgQnJvd3NlciBMaXRlXCI6XCJRUSBCcm93c2VyXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OnFxYnJvd3NlcmxpdGV8cXFicm93c2VyKVsvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9tc2llfHRyaWRlbnQvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJJbnRlcm5ldCBFeHBsb3JlclwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzptc2llIHxydjopKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL1xcc2VkZ1xcLy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIk1pY3Jvc29mdCBFZGdlXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL1xcc2VkZ1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9lZGcoW2VhXXxpb3MpL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiTWljcm9zb2Z0IEVkZ2VcIn0scj1pLmRlZmF1bHQuZ2V0U2Vjb25kTWF0Y2goL2VkZyhbZWFdfGlvcylcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvdml2YWxkaS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlZpdmFsZGlcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvdml2YWxkaVxcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9zZWFtb25rZXkvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJTZWFNb25rZXlcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvc2VhbW9ua2V5XFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3NhaWxmaXNoL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU2FpbGZpc2hcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvc2FpbGZpc2hcXHM/YnJvd3NlclxcLyhcXGQrKFxcLlxcZCspPykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9zaWxrL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiQW1hem9uIFNpbGtcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvc2lsa1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9waGFudG9tL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiUGhhbnRvbUpTXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL3BoYW50b21qc1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9zbGltZXJqcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlNsaW1lckpTXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL3NsaW1lcmpzXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL2JsYWNrYmVycnl8XFxiYmJcXGQrL2ksL3JpbVxcc3RhYmxldC9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkJsYWNrQmVycnlcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvYmxhY2tiZXJyeVtcXGRdK1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy8od2VifGhwdylbbzBdcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIldlYk9TIEJyb3dzZXJcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvdyg/OmViKT9bbzBdc2Jyb3dzZXJcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvYmFkYS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkJhZGFcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvZG9sZmluXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3RpemVuL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiVGl6ZW5cIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86dGl6ZW5cXHM/KT9icm93c2VyXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3F1cHppbGxhL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiUXVwWmlsbGFcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86cXVwemlsbGEpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL2ZpcmVmb3h8aWNld2Vhc2VsfGZ4aW9zL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiRmlyZWZveFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpmaXJlZm94fGljZXdlYXNlbHxmeGlvcylbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvZWxlY3Ryb24vaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJFbGVjdHJvblwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzplbGVjdHJvbilcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvTWl1aUJyb3dzZXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJNaXVpXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Ok1pdWlCcm93c2VyKVtcXHMvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9jaHJvbWl1bS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkNocm9taXVtXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OmNocm9taXVtKVtcXHMvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9jaHJvbWV8Y3Jpb3N8Y3Jtby9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkNocm9tZVwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvR1NBL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiR29vZ2xlIFNlYXJjaFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpHU0EpXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpmdW5jdGlvbihlKXt2YXIgdD0hZS50ZXN0KC9saWtlIGFuZHJvaWQvaSkscj1lLnRlc3QoL2FuZHJvaWQvaSk7cmV0dXJuIHQmJnJ9LGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiQW5kcm9pZCBCcm93c2VyXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9wbGF5c3RhdGlvbiA0L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiUGxheVN0YXRpb24gNFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvc2FmYXJpfGFwcGxld2Via2l0L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU2FmYXJpXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy8uKi9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD0tMSE9PWUuc2VhcmNoKFwiXFxcXChcIik/L14oLiopXFwvKC4qKVsgXFx0XVxcKCguKikvOi9eKC4qKVxcLyguKikgLztyZXR1cm57bmFtZTppLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCh0LGUpLHZlcnNpb246aS5kZWZhdWx0LmdldFNlY29uZE1hdGNoKHQsZSl9fX1dO3QuZGVmYXVsdD1hLGUuZXhwb3J0cz10LmRlZmF1bHR9LDkzOmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgbixpPShuPXIoMTcpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn0scz1yKDE4KTt2YXIgYT1be3Rlc3Q6Wy9Sb2t1XFwvRFZQL10sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL1Jva3VcXC9EVlAtKFxcZCtcXC5cXGQrKS9pLGUpO3JldHVybntuYW1lOnMuT1NfTUFQLlJva3UsdmVyc2lvbjp0fX19LHt0ZXN0Olsvd2luZG93cyBwaG9uZS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvd2luZG93cyBwaG9uZSAoPzpvcyk/XFxzPyhcXGQrKFxcLlxcZCspKikvaSxlKTtyZXR1cm57bmFtZTpzLk9TX01BUC5XaW5kb3dzUGhvbmUsdmVyc2lvbjp0fX19LHt0ZXN0Olsvd2luZG93cyAvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL1dpbmRvd3MgKChOVHxYUCkoIFxcZFxcZD8uXFxkKT8pL2ksZSkscj1pLmRlZmF1bHQuZ2V0V2luZG93c1ZlcnNpb25OYW1lKHQpO3JldHVybntuYW1lOnMuT1NfTUFQLldpbmRvd3MsdmVyc2lvbjp0LHZlcnNpb25OYW1lOnJ9fX0se3Rlc3Q6Wy9NYWNpbnRvc2goLio/KSBGeGlPUyguKj8pXFwvL10sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5PU19NQVAuaU9TfSxyPWkuZGVmYXVsdC5nZXRTZWNvbmRNYXRjaCgvKFZlcnNpb25cXC8pKFxcZFtcXGQuXSspLyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9tYWNpbnRvc2gvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL21hYyBvcyB4IChcXGQrKFxcLj9fP1xcZCspKykvaSxlKS5yZXBsYWNlKC9bX1xcc10vZyxcIi5cIikscj1pLmRlZmF1bHQuZ2V0TWFjT1NWZXJzaW9uTmFtZSh0KSxuPXtuYW1lOnMuT1NfTUFQLk1hY09TLHZlcnNpb246dH07cmV0dXJuIHImJihuLnZlcnNpb25OYW1lPXIpLG59fSx7dGVzdDpbLyhpcG9kfGlwaG9uZXxpcGFkKS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvb3MgKFxcZCsoW19cXHNdXFxkKykqKSBsaWtlIG1hYyBvcyB4L2ksZSkucmVwbGFjZSgvW19cXHNdL2csXCIuXCIpO3JldHVybntuYW1lOnMuT1NfTUFQLmlPUyx2ZXJzaW9uOnR9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9IWUudGVzdCgvbGlrZSBhbmRyb2lkL2kpLHI9ZS50ZXN0KC9hbmRyb2lkL2kpO3JldHVybiB0JiZyfSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvYW5kcm9pZFtcXHMvLV0oXFxkKyhcXC5cXGQrKSopL2ksZSkscj1pLmRlZmF1bHQuZ2V0QW5kcm9pZFZlcnNpb25OYW1lKHQpLG49e25hbWU6cy5PU19NQVAuQW5kcm9pZCx2ZXJzaW9uOnR9O3JldHVybiByJiYobi52ZXJzaW9uTmFtZT1yKSxufX0se3Rlc3Q6Wy8od2VifGhwdylbbzBdcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86d2VifGhwdylbbzBdc1xcLyhcXGQrKFxcLlxcZCspKikvaSxlKSxyPXtuYW1lOnMuT1NfTUFQLldlYk9TfTtyZXR1cm4gdCYmdC5sZW5ndGgmJihyLnZlcnNpb249dCkscn19LHt0ZXN0OlsvYmxhY2tiZXJyeXxcXGJiYlxcZCsvaSwvcmltXFxzdGFibGV0L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9yaW1cXHN0YWJsZXRcXHNvc1xccyhcXGQrKFxcLlxcZCspKikvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2JsYWNrYmVycnlcXGQrXFwvKFxcZCsoW19cXHNdXFxkKykqKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvXFxiYmIoXFxkKykvaSxlKTtyZXR1cm57bmFtZTpzLk9TX01BUC5CbGFja0JlcnJ5LHZlcnNpb246dH19fSx7dGVzdDpbL2JhZGEvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2JhZGFcXC8oXFxkKyhcXC5cXGQrKSopL2ksZSk7cmV0dXJue25hbWU6cy5PU19NQVAuQmFkYSx2ZXJzaW9uOnR9fX0se3Rlc3Q6Wy90aXplbi9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvdGl6ZW5bL1xcc10oXFxkKyhcXC5cXGQrKSopL2ksZSk7cmV0dXJue25hbWU6cy5PU19NQVAuVGl6ZW4sdmVyc2lvbjp0fX19LHt0ZXN0OlsvbGludXgvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57bmFtZTpzLk9TX01BUC5MaW51eH19fSx7dGVzdDpbL0NyT1MvXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybntuYW1lOnMuT1NfTUFQLkNocm9tZU9TfX19LHt0ZXN0OlsvUGxheVN0YXRpb24gNC9dLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9QbGF5U3RhdGlvbiA0Wy9cXHNdKFxcZCsoXFwuXFxkKykqKS9pLGUpO3JldHVybntuYW1lOnMuT1NfTUFQLlBsYXlTdGF0aW9uNCx2ZXJzaW9uOnR9fX1dO3QuZGVmYXVsdD1hLGUuZXhwb3J0cz10LmRlZmF1bHR9LDk0OmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgbixpPShuPXIoMTcpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn0scz1yKDE4KTt2YXIgYT1be3Rlc3Q6Wy9nb29nbGVib3QvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpcImJvdFwiLHZlbmRvcjpcIkdvb2dsZVwifX19LHt0ZXN0OlsvaHVhd2VpL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oY2FuLWwwMSkvaSxlKSYmXCJOb3ZhXCIscj17dHlwZTpzLlBMQVRGT1JNU19NQVAubW9iaWxlLHZlbmRvcjpcIkh1YXdlaVwifTtyZXR1cm4gdCYmKHIubW9kZWw9dCkscn19LHt0ZXN0OlsvbmV4dXNcXHMqKD86N3w4fDl8MTApLiovaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudGFibGV0LHZlbmRvcjpcIk5leHVzXCJ9fX0se3Rlc3Q6Wy9pcGFkL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLnRhYmxldCx2ZW5kb3I6XCJBcHBsZVwiLG1vZGVsOlwiaVBhZFwifX19LHt0ZXN0OlsvTWFjaW50b3NoKC4qPykgRnhpT1MoLio/KVxcLy9dLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLnRhYmxldCx2ZW5kb3I6XCJBcHBsZVwiLG1vZGVsOlwiaVBhZFwifX19LHt0ZXN0Olsva2Z0dCBidWlsZC9pXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC50YWJsZXQsdmVuZG9yOlwiQW1hem9uXCIsbW9kZWw6XCJLaW5kbGUgRmlyZSBIRCA3XCJ9fX0se3Rlc3Q6Wy9zaWxrL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLnRhYmxldCx2ZW5kb3I6XCJBbWF6b25cIn19fSx7dGVzdDpbL3RhYmxldCg/ISBwYykvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudGFibGV0fX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGVzdCgvaXBvZHxpcGhvbmUvaSkscj1lLnRlc3QoL2xpa2UgKGlwb2R8aXBob25lKS9pKTtyZXR1cm4gdCYmIXJ9LGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oaXBvZHxpcGhvbmUpL2ksZSk7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLm1vYmlsZSx2ZW5kb3I6XCJBcHBsZVwiLG1vZGVsOnR9fX0se3Rlc3Q6Wy9uZXh1c1xccypbMC02XS4qL2ksL2dhbGF4eSBuZXh1cy9pXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5tb2JpbGUsdmVuZG9yOlwiTmV4dXNcIn19fSx7dGVzdDpbL1teLV1tb2JpL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLm1vYmlsZX19fSx7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cImJsYWNrYmVycnlcIj09PWUuZ2V0QnJvd3Nlck5hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5tb2JpbGUsdmVuZG9yOlwiQmxhY2tCZXJyeVwifX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVyblwiYmFkYVwiPT09ZS5nZXRCcm93c2VyTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLm1vYmlsZX19fSx7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cIndpbmRvd3MgcGhvbmVcIj09PWUuZ2V0QnJvd3Nlck5hbWUoKX0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAubW9iaWxlLHZlbmRvcjpcIk1pY3Jvc29mdFwifX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3ZhciB0PU51bWJlcihTdHJpbmcoZS5nZXRPU1ZlcnNpb24oKSkuc3BsaXQoXCIuXCIpWzBdKTtyZXR1cm5cImFuZHJvaWRcIj09PWUuZ2V0T1NOYW1lKCEwKSYmdD49M30sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudGFibGV0fX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVyblwiYW5kcm9pZFwiPT09ZS5nZXRPU05hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5tb2JpbGV9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJtYWNvc1wiPT09ZS5nZXRPU05hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5kZXNrdG9wLHZlbmRvcjpcIkFwcGxlXCJ9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJ3aW5kb3dzXCI9PT1lLmdldE9TTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLmRlc2t0b3B9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJsaW51eFwiPT09ZS5nZXRPU05hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5kZXNrdG9wfX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVyblwicGxheXN0YXRpb24gNFwiPT09ZS5nZXRPU05hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC50dn19fSx7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cInJva3VcIj09PWUuZ2V0T1NOYW1lKCEwKX0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudHZ9fX1dO3QuZGVmYXVsdD1hLGUuZXhwb3J0cz10LmRlZmF1bHR9LDk1OmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgbixpPShuPXIoMTcpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn0scz1yKDE4KTt2YXIgYT1be3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJtaWNyb3NvZnQgZWRnZVwiPT09ZS5nZXRCcm93c2VyTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKGUpe2lmKC9cXHNlZGdcXC8vaS50ZXN0KGUpKXJldHVybntuYW1lOnMuRU5HSU5FX01BUC5CbGlua307dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2VkZ2VcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJue25hbWU6cy5FTkdJTkVfTUFQLkVkZ2VIVE1MLHZlcnNpb246dH19fSx7dGVzdDpbL3RyaWRlbnQvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5FTkdJTkVfTUFQLlRyaWRlbnR9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL3RyaWRlbnRcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVybiBlLnRlc3QoL3ByZXN0by9pKX0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5FTkdJTkVfTUFQLlByZXN0b30scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvcHJlc3RvXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRlc3QoL2dlY2tvL2kpLHI9ZS50ZXN0KC9saWtlIGdlY2tvL2kpO3JldHVybiB0JiYhcn0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5FTkdJTkVfTUFQLkdlY2tvfSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9nZWNrb1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy8oYXBwbGUpP3dlYmtpdFxcLzUzN1xcLjM2L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue25hbWU6cy5FTkdJTkVfTUFQLkJsaW5rfX19LHt0ZXN0OlsvKGFwcGxlKT93ZWJraXQvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5FTkdJTkVfTUFQLldlYktpdH0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvd2Via2l0XFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fV07dC5kZWZhdWx0PWEsZS5leHBvcnRzPXQuZGVmYXVsdH19KX0pKTsiLCJjb25zdCBOQU1FU1BBQ0UgPSAnZXh0ZW5zaW9uLWNvbnRlbnQtdWknO1xuXG5sZXQgc2NvcGVJZDtcbmxldCBob3N0VGFnTmFtZTtcbmxldCBpc1N2Z01vZGUgPSBmYWxzZTtcbmxldCBxdWV1ZVBlbmRpbmcgPSBmYWxzZTtcbmNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5jb25zdCBkb2MgPSB3aW4uZG9jdW1lbnQgfHwgeyBoZWFkOiB7fSB9O1xuY29uc3QgcGx0ID0ge1xuICAgICRmbGFncyQ6IDAsXG4gICAgJHJlc291cmNlc1VybCQ6ICcnLFxuICAgIGptcDogKGgpID0+IGgoKSxcbiAgICByYWY6IChoKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaCksXG4gICAgYWVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gICAgcmVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gICAgY2U6IChldmVudE5hbWUsIG9wdHMpID0+IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIG9wdHMpLFxufTtcbmNvbnN0IHByb21pc2VSZXNvbHZlID0gKHYpID0+IFByb21pc2UucmVzb2x2ZSh2KTtcbmNvbnN0IHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzID0gLypAX19QVVJFX18qLyAoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgbmV3IENTU1N0eWxlU2hlZXQoKS5yZXBsYWNlU3luYyA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSgpXG4gICAgO1xuY29uc3QgSFlEUkFURURfQ1NTID0gJ3t2aXNpYmlsaXR5OmhpZGRlbn0uaHlkcmF0ZWR7dmlzaWJpbGl0eTppbmhlcml0fSc7XG5jb25zdCBjcmVhdGVUaW1lID0gKGZuTmFtZSwgdGFnTmFtZSA9ICcnKSA9PiB7XG4gICAge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCB1bmlxdWVUaW1lID0gKGtleSwgbWVhc3VyZVRleHQpID0+IHtcbiAgICB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IHJvb3RBcHBsaWVkU3R5bGVzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyU3R5bGUgPSAoc2NvcGVJZCwgY3NzVGV4dCwgYWxsb3dDUykgPT4ge1xuICAgIGxldCBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZCk7XG4gICAgaWYgKHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzICYmIGFsbG93Q1MpIHtcbiAgICAgICAgc3R5bGUgPSAoc3R5bGUgfHwgbmV3IENTU1N0eWxlU2hlZXQoKSk7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHlsZSA9IGNzc1RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5yZXBsYWNlU3luYyhjc3NUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBjc3NUZXh0O1xuICAgIH1cbiAgICBzdHlsZXMuc2V0KHNjb3BlSWQsIHN0eWxlKTtcbn07XG5jb25zdCBhZGRTdHlsZSA9IChzdHlsZUNvbnRhaW5lck5vZGUsIGNtcE1ldGEsIG1vZGUsIGhvc3RFbG0pID0+IHtcbiAgICBsZXQgc2NvcGVJZCA9IGdldFNjb3BlSWQoY21wTWV0YSk7XG4gICAgY29uc3Qgc3R5bGUgPSBzdHlsZXMuZ2V0KHNjb3BlSWQpO1xuICAgIC8vIGlmIGFuIGVsZW1lbnQgaXMgTk9UIGNvbm5lY3RlZCB0aGVuIGdldFJvb3ROb2RlKCkgd2lsbCByZXR1cm4gdGhlIHdyb25nIHJvb3Qgbm9kZVxuICAgIC8vIHNvIHRoZSBmYWxsYmFjayBpcyB0byBhbHdheXMgdXNlIHRoZSBkb2N1bWVudCBmb3IgdGhlIHJvb3Qgbm9kZSBpbiB0aG9zZSBjYXNlc1xuICAgIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5ub2RlVHlwZSA9PT0gMTEgLyogRG9jdW1lbnRGcmFnbWVudCAqLyA/IHN0eWxlQ29udGFpbmVyTm9kZSA6IGRvYztcbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5oZWFkIHx8IHN0eWxlQ29udGFpbmVyTm9kZTtcbiAgICAgICAgICAgIGxldCBhcHBsaWVkU3R5bGVzID0gcm9vdEFwcGxpZWRTdHlsZXMuZ2V0KHN0eWxlQ29udGFpbmVyTm9kZSk7XG4gICAgICAgICAgICBsZXQgc3R5bGVFbG07XG4gICAgICAgICAgICBpZiAoIWFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICByb290QXBwbGllZFN0eWxlcy5zZXQoc3R5bGVDb250YWluZXJOb2RlLCAoYXBwbGllZFN0eWxlcyA9IG5ldyBTZXQoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0gPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5pbnNlcnRCZWZvcmUoc3R5bGVFbG0sIHN0eWxlQ29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKCdsaW5rJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkU3R5bGVzLmFkZChzY29wZUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMuaW5jbHVkZXMoc3R5bGUpKSB7XG4gICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzID0gWy4uLnN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMsIHN0eWxlXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2NvcGVJZDtcbn07XG5jb25zdCBhdHRhY2hTdHlsZXMgPSAoaG9zdFJlZikgPT4ge1xuICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gICAgY29uc3QgZmxhZ3MgPSBjbXBNZXRhLiRmbGFncyQ7XG4gICAgY29uc3QgZW5kQXR0YWNoU3R5bGVzID0gY3JlYXRlVGltZSgnYXR0YWNoU3R5bGVzJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgIGNvbnN0IHNjb3BlSWQgPSBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCA/IGVsbS5zaGFkb3dSb290IDogZWxtLmdldFJvb3ROb2RlKCksIGNtcE1ldGEpO1xuICAgIGlmIChmbGFncyAmIDEwIC8qIG5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAvLyBvbmx5IHJlcXVpcmVkIHdoZW4gd2UncmUgTk9UIHVzaW5nIG5hdGl2ZSBzaGFkb3cgZG9tIChzbG90KVxuICAgICAgICAvLyBvciB0aGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZSBzaGFkb3cgZG9tXG4gICAgICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAgICAgLy8gbGV0J3MgcGljayBvdXQgdGhlIGlubmVyIGNvbnRlbnQgZm9yIHNsb3QgcHJvamVjdGlvblxuICAgICAgICAvLyBjcmVhdGUgYSBub2RlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgb3JpZ2luYWxcbiAgICAgICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICAgICAgLy8gRE9NIFdSSVRFISFcbiAgICAgICAgZWxtWydzLXNjJ10gPSBzY29wZUlkO1xuICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1oJyk7XG4gICAgfVxuICAgIGVuZEF0dGFjaFN0eWxlcygpO1xufTtcbmNvbnN0IGdldFNjb3BlSWQgPSAoY21wLCBtb2RlKSA9PiAnc2MtJyArIChjbXAuJHRhZ05hbWUkKTtcbi8qKlxuICogRGVmYXVsdCBzdHlsZSBtb2RlIGlkXG4gKi9cbi8qKlxuICogUmV1c2FibGUgZW1wdHkgb2JqL2FycmF5XG4gKiBEb24ndCBhZGQgdmFsdWVzIHRvIHRoZXNlISFcbiAqL1xuY29uc3QgRU1QVFlfT0JKID0ge307XG4vKipcbiAqIE5hbWVzcGFjZXNcbiAqL1xuY29uc3QgU1ZHX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmNvbnN0IEhUTUxfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5jb25zdCBpc0RlZiA9ICh2KSA9PiB2ICE9IG51bGw7XG5jb25zdCBpc0NvbXBsZXhUeXBlID0gKG8pID0+IHtcbiAgICAvLyBodHRwczovL2pzcGVyZi5jb20vdHlwZW9mLWZuLW9iamVjdC81XG4gICAgbyA9IHR5cGVvZiBvO1xuICAgIHJldHVybiBvID09PSAnb2JqZWN0JyB8fCBvID09PSAnZnVuY3Rpb24nO1xufTtcbi8qKlxuICogUHJvZHVjdGlvbiBoKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbi8vIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGgobm9kZU5hbWU6IHN0cmluZyB8IGQuRnVuY3Rpb25hbENvbXBvbmVudCwgdm5vZGVEYXRhOiBkLlByb3BzVHlwZSwgY2hpbGQ/OiBkLkNoaWxkVHlwZSk6IGQuVk5vZGU7XG4vLyBleHBvcnQgZnVuY3Rpb24gaChub2RlTmFtZTogc3RyaW5nIHwgZC5GdW5jdGlvbmFsQ29tcG9uZW50LCB2bm9kZURhdGE6IGQuUHJvcHNUeXBlLCAuLi5jaGlsZHJlbjogZC5DaGlsZFR5cGVbXSk6IGQuVk5vZGU7XG5jb25zdCBoID0gKG5vZGVOYW1lLCB2bm9kZURhdGEsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgbGV0IGNoaWxkID0gbnVsbDtcbiAgICBsZXQgc2ltcGxlID0gZmFsc2U7XG4gICAgbGV0IGxhc3RTaW1wbGUgPSBmYWxzZTtcbiAgICBjb25zdCB2Tm9kZUNoaWxkcmVuID0gW107XG4gICAgY29uc3Qgd2FsayA9IChjKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hpbGQgPSBjW2ldO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgd2FsayhjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZCAhPSBudWxsICYmIHR5cGVvZiBjaGlsZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzaW1wbGUgPSB0eXBlb2Ygbm9kZU5hbWUgIT09ICdmdW5jdGlvbicgJiYgIWlzQ29tcGxleFR5cGUoY2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaW1wbGUgJiYgbGFzdFNpbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJldmlvdXMgY2hpbGQgd2FzIHNpbXBsZSAoc3RyaW5nKSwgd2UgbWVyZ2UgYm90aFxuICAgICAgICAgICAgICAgICAgICB2Tm9kZUNoaWxkcmVuW3ZOb2RlQ2hpbGRyZW4ubGVuZ3RoIC0gMV0uJHRleHQkICs9IGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwZW5kIGEgbmV3IHZOb2RlLCBpZiBpdCdzIHRleHQsIHdlIGNyZWF0ZSBhIHRleHQgdk5vZGVcbiAgICAgICAgICAgICAgICAgICAgdk5vZGVDaGlsZHJlbi5wdXNoKHNpbXBsZSA/IG5ld1ZOb2RlKG51bGwsIGNoaWxkKSA6IGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdFNpbXBsZSA9IHNpbXBsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgd2FsayhjaGlsZHJlbik7XG4gICAgaWYgKHZub2RlRGF0YSkge1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0RhdGEgPSB2bm9kZURhdGEuY2xhc3NOYW1lIHx8IHZub2RlRGF0YS5jbGFzcztcbiAgICAgICAgICAgIGlmIChjbGFzc0RhdGEpIHtcbiAgICAgICAgICAgICAgICB2bm9kZURhdGEuY2xhc3MgPVxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY2xhc3NEYXRhICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXMoY2xhc3NEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGspID0+IGNsYXNzRGF0YVtrXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygbm9kZU5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm9kZU5hbWUgaXMgYSBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICAgICAgICByZXR1cm4gbm9kZU5hbWUodm5vZGVEYXRhID09PSBudWxsID8ge30gOiB2bm9kZURhdGEsIHZOb2RlQ2hpbGRyZW4sIHZkb21GblV0aWxzKTtcbiAgICB9XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlTmFtZSwgbnVsbCk7XG4gICAgdm5vZGUuJGF0dHJzJCA9IHZub2RlRGF0YTtcbiAgICBpZiAodk5vZGVDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZub2RlLiRjaGlsZHJlbiQgPSB2Tm9kZUNoaWxkcmVuO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGU7XG59O1xuY29uc3QgbmV3Vk5vZGUgPSAodGFnLCB0ZXh0KSA9PiB7XG4gICAgY29uc3Qgdm5vZGUgPSB7XG4gICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICR0YWckOiB0YWcsXG4gICAgICAgICR0ZXh0JDogdGV4dCxcbiAgICAgICAgJGVsbSQ6IG51bGwsXG4gICAgICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgfTtcbiAgICB7XG4gICAgICAgIHZub2RlLiRhdHRycyQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGU7XG59O1xuY29uc3QgSG9zdCA9IHt9O1xuY29uc3QgaXNIb3N0ID0gKG5vZGUpID0+IG5vZGUgJiYgbm9kZS4kdGFnJCA9PT0gSG9zdDtcbmNvbnN0IHZkb21GblV0aWxzID0ge1xuICAgIGZvckVhY2g6IChjaGlsZHJlbiwgY2IpID0+IGNoaWxkcmVuLm1hcChjb252ZXJ0VG9QdWJsaWMpLmZvckVhY2goY2IpLFxuICAgIG1hcDogKGNoaWxkcmVuLCBjYikgPT4gY2hpbGRyZW4ubWFwKGNvbnZlcnRUb1B1YmxpYykubWFwKGNiKS5tYXAoY29udmVydFRvUHJpdmF0ZSksXG59O1xuY29uc3QgY29udmVydFRvUHVibGljID0gKG5vZGUpID0+ICh7XG4gICAgdmF0dHJzOiBub2RlLiRhdHRycyQsXG4gICAgdmNoaWxkcmVuOiBub2RlLiRjaGlsZHJlbiQsXG4gICAgdmtleTogbm9kZS4ka2V5JCxcbiAgICB2bmFtZTogbm9kZS4kbmFtZSQsXG4gICAgdnRhZzogbm9kZS4kdGFnJCxcbiAgICB2dGV4dDogbm9kZS4kdGV4dCQsXG59KTtcbmNvbnN0IGNvbnZlcnRUb1ByaXZhdGUgPSAobm9kZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygbm9kZS52dGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHZub2RlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIG5vZGUudmF0dHJzKTtcbiAgICAgICAgaWYgKG5vZGUudmtleSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLmtleSA9IG5vZGUudmtleTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS52bmFtZSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLm5hbWUgPSBub2RlLnZuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoKG5vZGUudnRhZywgdm5vZGVEYXRhLCAuLi4obm9kZS52Y2hpbGRyZW4gfHwgW10pKTtcbiAgICB9XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlLnZ0YWcsIG5vZGUudnRleHQpO1xuICAgIHZub2RlLiRhdHRycyQgPSBub2RlLnZhdHRycztcbiAgICB2bm9kZS4kY2hpbGRyZW4kID0gbm9kZS52Y2hpbGRyZW47XG4gICAgdm5vZGUuJGtleSQgPSBub2RlLnZrZXk7XG4gICAgdm5vZGUuJG5hbWUkID0gbm9kZS52bmFtZTtcbiAgICByZXR1cm4gdm5vZGU7XG59O1xuLyoqXG4gKiBQcm9kdWN0aW9uIHNldEFjY2Vzc29yKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbmNvbnN0IHNldEFjY2Vzc29yID0gKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBpc1N2ZywgZmxhZ3MpID0+IHtcbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBpc1Byb3AgPSBpc01lbWJlckluRWxlbWVudChlbG0sIG1lbWJlck5hbWUpO1xuICAgICAgICBsZXQgbG4gPSBtZW1iZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChtZW1iZXJOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbG0uY2xhc3NMaXN0O1xuICAgICAgICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IHBhcnNlQ2xhc3NMaXN0KG9sZFZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NsYXNzZXMgPSBwYXJzZUNsYXNzTGlzdChuZXdWYWx1ZSk7XG4gICAgICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKC4uLm9sZENsYXNzZXMuZmlsdGVyKChjKSA9PiBjICYmICFuZXdDbGFzc2VzLmluY2x1ZGVzKGMpKSk7XG4gICAgICAgICAgICBjbGFzc0xpc3QuYWRkKC4uLm5ld0NsYXNzZXMuZmlsdGVyKChjKSA9PiBjICYmICFvbGRDbGFzc2VzLmluY2x1ZGVzKGMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVtYmVyTmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgICAgIC8vIG1pbmlmaWVyIHdpbGwgY2xlYW4gdGhpcyB1cFxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUoZWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoIWlzUHJvcCApICYmXG4gICAgICAgICAgICBtZW1iZXJOYW1lWzBdID09PSAnbycgJiZcbiAgICAgICAgICAgIG1lbWJlck5hbWVbMV0gPT09ICduJykge1xuICAgICAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICAgIC8vIHNvIGlmIHRoZSBtZW1iZXIgbmFtZSBzdGFydHMgd2l0aCBcIm9uXCIgYW5kIHRoZSAzcmQgY2hhcmFjdGVycyBpc1xuICAgICAgICAgICAgLy8gYSBjYXBpdGFsIGxldHRlciwgYW5kIGl0J3Mgbm90IGFscmVhZHkgYSBtZW1iZXIgb24gdGhlIGVsZW1lbnQsXG4gICAgICAgICAgICAvLyB0aGVuIHdlJ3JlIGFzc3VtaW5nIGl0J3MgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgIGlmIChtZW1iZXJOYW1lWzJdID09PSAnLScpIHtcbiAgICAgICAgICAgICAgICAvLyBvbi0gcHJlZml4ZWQgZXZlbnRzXG4gICAgICAgICAgICAgICAgLy8gYWxsb3dzIHRvIGJlIGV4cGxpY2l0IGFib3V0IHRoZSBkb20gZXZlbnQgdG8gbGlzdGVuIHdpdGhvdXQgYW55IG1hZ2ljXG4gICAgICAgICAgICAgICAgLy8gdW5kZXIgdGhlIGhvb2Q6XG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1jbGljaz4gLy8gbGlzdGVucyBmb3IgXCJjbGlja1wiXG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1DbGljaz4gLy8gbGlzdGVucyBmb3IgXCJDbGlja1wiXG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1pb25DaGFuZ2U+IC8vIGxpc3RlbnMgZm9yIFwiaW9uQ2hhbmdlXCJcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLUVWRU5UUz4gLy8gbGlzdGVucyBmb3IgXCJFVkVOVFNcIlxuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBtZW1iZXJOYW1lLnNsaWNlKDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNNZW1iZXJJbkVsZW1lbnQod2luLCBsbikpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFuZGFyZCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTW91c2VPdmVyXCIgYW5kIHRoZVxuICAgICAgICAgICAgICAgIC8vIG1lbWJlciBuYW1lIFwib25tb3VzZW92ZXJcIiBpcyBvbiB0aGUgd2luZG93J3MgcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgLy8gc28gbGV0J3MgYWRkIHRoZSBsaXN0ZW5lciBcIm1vdXNlb3ZlclwiLCB3aGljaCBpcyBhbGwgbG93ZXJjYXNlZFxuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsbi5zbGljZSgyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBldmVudFxuICAgICAgICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgICAgICAgLy8gc28gbGV0J3MgdHJpbSBvZmYgdGhlIFwib25cIiBwcmVmaXggYW5kIGxvd2VyY2FzZSB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgLy8gYW5kIGFkZCB0aGUgbGlzdGVuZXIgXCJteUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAgICAgICAvLyBleGNlcHQgZm9yIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIHdlIGtlZXAgdGhlIGV2ZW50IG5hbWUgY2FzZVxuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsblsyXSArIG1lbWJlck5hbWUuc2xpY2UoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwbHQucmVsKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5hZWwoZWxtLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU2V0IHByb3BlcnR5IGlmIGl0IGV4aXN0cyBhbmQgaXQncyBub3QgYSBTVkdcbiAgICAgICAgICAgIGNvbnN0IGlzQ29tcGxleCA9IGlzQ29tcGxleFR5cGUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKChpc1Byb3AgfHwgKGlzQ29tcGxleCAmJiBuZXdWYWx1ZSAhPT0gbnVsbCkpICYmICFpc1N2Zykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxtLnRhZ05hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IG5ld1ZhbHVlID09IG51bGwgPyAnJyA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgU2FmYXJpLCBtb3ZpbmcgdGhlIDxpbnB1dD4gY2FyZXQgd2hlbiByZS1hc3NpZ25pbmcgdGhlIHNhbWUgdmFsdWVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyTmFtZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQcm9wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvbGRWYWx1ZSA9PSBudWxsIHx8IGVsbVttZW1iZXJOYW1lXSAhPSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmFsc2UgfHwgZWxtLmdldEF0dHJpYnV0ZShtZW1iZXJOYW1lKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCghaXNQcm9wIHx8IGZsYWdzICYgNCAvKiBpc0hvc3QgKi8gfHwgaXNTdmcpICYmICFpc0NvbXBsZXgpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlID09PSB0cnVlID8gJycgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwYXJzZUNsYXNzTGlzdFJlZ2V4ID0gL1xccy87XG5jb25zdCBwYXJzZUNsYXNzTGlzdCA9ICh2YWx1ZSkgPT4gKCF2YWx1ZSA/IFtdIDogdmFsdWUuc3BsaXQocGFyc2VDbGFzc0xpc3RSZWdleCkpO1xuY29uc3QgdXBkYXRlRWxlbWVudCA9IChvbGRWbm9kZSwgbmV3Vm5vZGUsIGlzU3ZnTW9kZSwgbWVtYmVyTmFtZSkgPT4ge1xuICAgIC8vIGlmIHRoZSBlbGVtZW50IHBhc3NlZCBpbiBpcyBhIHNoYWRvdyByb290LCB3aGljaCBpcyBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgLy8gdGhlbiB3ZSB3YW50IHRvIGJlIGFkZGluZyBhdHRycy9wcm9wcyB0byB0aGUgc2hhZG93IHJvb3QncyBcImhvc3RcIiBlbGVtZW50XG4gICAgLy8gaWYgaXQncyBub3QgYSBzaGFkb3cgcm9vdCwgdGhlbiB3ZSBhZGQgYXR0cnMvcHJvcHMgdG8gdGhlIHNhbWUgZWxlbWVudFxuICAgIGNvbnN0IGVsbSA9IG5ld1Zub2RlLiRlbG0kLm5vZGVUeXBlID09PSAxMSAvKiBEb2N1bWVudEZyYWdtZW50ICovICYmIG5ld1Zub2RlLiRlbG0kLmhvc3RcbiAgICAgICAgPyBuZXdWbm9kZS4kZWxtJC5ob3N0XG4gICAgICAgIDogbmV3Vm5vZGUuJGVsbSQ7XG4gICAgY29uc3Qgb2xkVm5vZGVBdHRycyA9IChvbGRWbm9kZSAmJiBvbGRWbm9kZS4kYXR0cnMkKSB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgbmV3Vm5vZGVBdHRycyA9IG5ld1Zub2RlLiRhdHRycyQgfHwgRU1QVFlfT0JKO1xuICAgIHtcbiAgICAgICAgLy8gcmVtb3ZlIGF0dHJpYnV0ZXMgbm8gbG9uZ2VyIHByZXNlbnQgb24gdGhlIHZub2RlIGJ5IHNldHRpbmcgdGhlbSB0byB1bmRlZmluZWRcbiAgICAgICAgZm9yIChtZW1iZXJOYW1lIGluIG9sZFZub2RlQXR0cnMpIHtcbiAgICAgICAgICAgIGlmICghKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykpIHtcbiAgICAgICAgICAgICAgICBzZXRBY2Nlc3NvcihlbG0sIG1lbWJlck5hbWUsIG9sZFZub2RlQXR0cnNbbWVtYmVyTmFtZV0sIHVuZGVmaW5lZCwgaXNTdmdNb2RlLCBuZXdWbm9kZS4kZmxhZ3MkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgbmV3ICYgdXBkYXRlIGNoYW5nZWQgYXR0cmlidXRlc1xuICAgIGZvciAobWVtYmVyTmFtZSBpbiBuZXdWbm9kZUF0dHJzKSB7XG4gICAgICAgIHNldEFjY2Vzc29yKGVsbSwgbWVtYmVyTmFtZSwgb2xkVm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgbmV3Vm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgaXNTdmdNb2RlLCBuZXdWbm9kZS4kZmxhZ3MkKTtcbiAgICB9XG59O1xuY29uc3QgY3JlYXRlRWxtID0gKG9sZFBhcmVudFZOb2RlLCBuZXdQYXJlbnRWTm9kZSwgY2hpbGRJbmRleCwgcGFyZW50RWxtKSA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcbiAgICBjb25zdCBuZXdWTm9kZSA9IG5ld1BhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRJbmRleF07XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBlbG07XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBpZiAobmV3Vk5vZGUuJHRleHQkICE9PSBudWxsKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0ZXh0IG5vZGVcbiAgICAgICAgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSBkb2MuY3JlYXRlVGV4dE5vZGUobmV3Vk5vZGUuJHRleHQkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghaXNTdmdNb2RlKSB7XG4gICAgICAgICAgICBpc1N2Z01vZGUgPSBuZXdWTm9kZS4kdGFnJCA9PT0gJ3N2Zyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgICAgICAgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSAoZG9jLmNyZWF0ZUVsZW1lbnROUyhpc1N2Z01vZGUgPyBTVkdfTlMgOiBIVE1MX05TLCBuZXdWTm9kZS4kdGFnJClcbiAgICAgICAgICAgICk7XG4gICAgICAgIGlmIChpc1N2Z01vZGUgJiYgbmV3Vk5vZGUuJHRhZyQgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIGNzcyBjbGFzc2VzLCBhdHRycywgcHJvcHMsIGxpc3RlbmVycywgZXRjLlxuICAgICAgICB7XG4gICAgICAgICAgICB1cGRhdGVFbGVtZW50KG51bGwsIG5ld1ZOb2RlLCBpc1N2Z01vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0RlZihzY29wZUlkKSAmJiBlbG1bJ3Mtc2knXSAhPT0gc2NvcGVJZCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzY29wZUlkIGFuZCB0aGlzIGlzIHRoZSBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgLy8gdGhlbiBsZXQncyBhZGQgdGhlIHNjb3BlSWQgYXMgYSBjc3MgY2xhc3NcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKChlbG1bJ3Mtc2knXSA9IHNjb3BlSWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5ld1ZOb2RlLiRjaGlsZHJlbiQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIG5vZGVcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0ob2xkUGFyZW50Vk5vZGUsIG5ld1ZOb2RlLCBpKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gbm9kZSBjb3VsZCBoYXZlIGJlZW4gbnVsbFxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIG91ciBuZXcgbm9kZVxuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKG5ld1ZOb2RlLiR0YWckID09PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVzZXQgdGhlIFNWRyBjb250ZXh0IHdoZW4gd2UncmUgZXhpdGluZyA8c3ZnPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbG0udGFnTmFtZSA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVlbnRlciBTVkcgY29udGV4dCB3aGVuIHdlJ3JlIGV4aXRpbmcgPGZvcmVpZ25PYmplY3Q+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpc1N2Z01vZGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbG07XG59O1xuY29uc3QgYWRkVm5vZGVzID0gKHBhcmVudEVsbSwgYmVmb3JlLCBwYXJlbnRWTm9kZSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lckVsbSA9IChwYXJlbnRFbG0pO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgaWYgKGNvbnRhaW5lckVsbS5zaGFkb3dSb290ICYmIGNvbnRhaW5lckVsbS50YWdOYW1lID09PSBob3N0VGFnTmFtZSkge1xuICAgICAgICBjb250YWluZXJFbG0gPSBjb250YWluZXJFbG0uc2hhZG93Um9vdDtcbiAgICB9XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICBpZiAodm5vZGVzW3N0YXJ0SWR4XSkge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY3JlYXRlRWxtKG51bGwsIHBhcmVudFZOb2RlLCBzdGFydElkeCk7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgdm5vZGVzW3N0YXJ0SWR4XS4kZWxtJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICBjb250YWluZXJFbG0uaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgYmVmb3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCByZW1vdmVWbm9kZXMgPSAodm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCB2bm9kZSwgZWxtKSA9PiB7XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICBpZiAoKHZub2RlID0gdm5vZGVzW3N0YXJ0SWR4XSkpIHtcbiAgICAgICAgICAgIGVsbSA9IHZub2RlLiRlbG0kO1xuICAgICAgICAgICAgY2FsbE5vZGVSZWZzKHZub2RlKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgdm5vZGUncyBlbGVtZW50IGZyb20gdGhlIGRvbVxuICAgICAgICAgICAgZWxtLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHVwZGF0ZUNoaWxkcmVuID0gKHBhcmVudEVsbSwgb2xkQ2gsIG5ld1ZOb2RlLCBuZXdDaCkgPT4ge1xuICAgIGxldCBvbGRTdGFydElkeCA9IDA7XG4gICAgbGV0IG5ld1N0YXJ0SWR4ID0gMDtcbiAgICBsZXQgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICBsZXQgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgIGxldCBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgbGV0IG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgbGV0IG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICBsZXQgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgIGxldCBub2RlO1xuICAgIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgICAgIGlmIChvbGRTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFZub2RlIG1pZ2h0IGhhdmUgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkRW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3RW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIHBhdGNoKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpO1xuICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgIHBhdGNoKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpO1xuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRTdGFydFZub2RlLiRlbG0kLCBvbGRFbmRWbm9kZS4kZWxtJC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIHBhdGNoKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKTtcbiAgICAgICAgICAgIHBhcmVudEVsbS5pbnNlcnRCZWZvcmUob2xkRW5kVm5vZGUuJGVsbSQsIG9sZFN0YXJ0Vm5vZGUuJGVsbSQpO1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gbmV3IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBub2RlID0gY3JlYXRlRWxtKG9sZENoICYmIG9sZENoW25ld1N0YXJ0SWR4XSwgbmV3Vk5vZGUsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBvbGRTdGFydFZub2RlLiRlbG0kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9sZFN0YXJ0SWR4ID4gb2xkRW5kSWR4KSB7XG4gICAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIG5ld0NoW25ld0VuZElkeCArIDFdID09IG51bGwgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uJGVsbSQsIG5ld1ZOb2RlLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5ld1N0YXJ0SWR4ID4gbmV3RW5kSWR4KSB7XG4gICAgICAgIHJlbW92ZVZub2RlcyhvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgfVxufTtcbmNvbnN0IGlzU2FtZVZub2RlID0gKHZub2RlMSwgdm5vZGUyKSA9PiB7XG4gICAgLy8gY29tcGFyZSBpZiB0d28gdm5vZGUgdG8gc2VlIGlmIHRoZXkncmUgXCJ0ZWNobmljYWxseVwiIHRoZSBzYW1lXG4gICAgLy8gbmVlZCB0byBoYXZlIHRoZSBzYW1lIGVsZW1lbnQgdGFnLCBhbmQgc2FtZSBrZXkgdG8gYmUgdGhlIHNhbWVcbiAgICBpZiAodm5vZGUxLiR0YWckID09PSB2bm9kZTIuJHRhZyQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBwYXRjaCA9IChvbGRWTm9kZSwgbmV3Vk5vZGUpID0+IHtcbiAgICBjb25zdCBlbG0gPSAobmV3Vk5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJCk7XG4gICAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBvbGRWTm9kZS4kY2hpbGRyZW4kO1xuICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gbmV3Vk5vZGUuJGNoaWxkcmVuJDtcbiAgICBjb25zdCB0YWcgPSBuZXdWTm9kZS4kdGFnJDtcbiAgICBjb25zdCB0ZXh0ID0gbmV3Vk5vZGUuJHRleHQkO1xuICAgIGlmICh0ZXh0ID09PSBudWxsKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHRlc3QgaWYgd2UncmUgcmVuZGVyaW5nIGFuIHN2ZyBlbGVtZW50LCBvciBzdGlsbCByZW5kZXJpbmcgbm9kZXMgaW5zaWRlIG9mIG9uZVxuICAgICAgICAgICAgLy8gb25seSBhZGQgdGhpcyB0byB0aGUgd2hlbiB0aGUgY29tcGlsZXIgc2VlcyB3ZSdyZSB1c2luZyBhbiBzdmcgc29tZXdoZXJlXG4gICAgICAgICAgICBpc1N2Z01vZGUgPSB0YWcgPT09ICdzdmcnID8gdHJ1ZSA6IHRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnID8gZmFsc2UgOiBpc1N2Z01vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxlbWVudCBub2RlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09ICdzbG90JylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgcmVuZGVyIG9mIGFuIGVsZW1lbnQgT1IgaXQncyBhbiB1cGRhdGVcbiAgICAgICAgICAgICAgICAvLyBBTkQgd2UgYWxyZWFkeSBrbm93IGl0J3MgcG9zc2libGUgaXQgY291bGQgaGF2ZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgLy8gdGhpcyB1cGRhdGVzIHRoZSBlbGVtZW50J3MgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudChvbGRWTm9kZSwgbmV3Vk5vZGUsIGlzU3ZnTW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9sZENoaWxkcmVuICE9PSBudWxsICYmIG5ld0NoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBsb29rcyBsaWtlIHRoZXJlJ3MgY2hpbGQgdm5vZGVzIGZvciBib3RoIHRoZSBvbGQgYW5kIG5ldyB2bm9kZXNcbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2hpbGRyZW4sIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vIG9sZCBjaGlsZCB2bm9kZXMsIGJ1dCB0aGVyZSBhcmUgbmV3IGNoaWxkIHZub2RlcyB0byBhZGRcbiAgICAgICAgICAgIGlmIChvbGRWTm9kZS4kdGV4dCQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZub2RlIHdhcyB0ZXh0LCBzbyBiZSBzdXJlIHRvIGNsZWFyIGl0IG91dFxuICAgICAgICAgICAgICAgIGVsbS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWRkIHRoZSBuZXcgdm5vZGUgY2hpbGRyZW5cbiAgICAgICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbiwgMCwgbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkQ2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vIG5ldyBjaGlsZCB2bm9kZXMsIGJ1dCB0aGVyZSBhcmUgb2xkIGNoaWxkIHZub2RlcyB0byByZW1vdmVcbiAgICAgICAgICAgIHJlbW92ZVZub2RlcyhvbGRDaGlsZHJlbiwgMCwgb2xkQ2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3ZnTW9kZSAmJiB0YWcgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICBpc1N2Z01vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChvbGRWTm9kZS4kdGV4dCQgIT09IHRleHQpIHtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSB0ZXh0IG9ubHkgdm5vZGVcbiAgICAgICAgLy8gYW5kIGFsc28gb25seSBpZiB0aGUgdGV4dCBpcyBkaWZmZXJlbnQgdGhhbiBiZWZvcmVcbiAgICAgICAgZWxtLmRhdGEgPSB0ZXh0O1xuICAgIH1cbn07XG5jb25zdCBjYWxsTm9kZVJlZnMgPSAodk5vZGUpID0+IHtcbiAgICB7XG4gICAgICAgIHZOb2RlLiRhdHRycyQgJiYgdk5vZGUuJGF0dHJzJC5yZWYgJiYgdk5vZGUuJGF0dHJzJC5yZWYobnVsbCk7XG4gICAgICAgIHZOb2RlLiRjaGlsZHJlbiQgJiYgdk5vZGUuJGNoaWxkcmVuJC5tYXAoY2FsbE5vZGVSZWZzKTtcbiAgICB9XG59O1xuY29uc3QgcmVuZGVyVmRvbSA9IChob3N0UmVmLCByZW5kZXJGblJlc3VsdHMpID0+IHtcbiAgICBjb25zdCBob3N0RWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IG9sZFZOb2RlID0gaG9zdFJlZi4kdm5vZGUkIHx8IG5ld1ZOb2RlKG51bGwsIG51bGwpO1xuICAgIGNvbnN0IHJvb3RWbm9kZSA9IGlzSG9zdChyZW5kZXJGblJlc3VsdHMpID8gcmVuZGVyRm5SZXN1bHRzIDogaChudWxsLCBudWxsLCByZW5kZXJGblJlc3VsdHMpO1xuICAgIGhvc3RUYWdOYW1lID0gaG9zdEVsbS50YWdOYW1lO1xuICAgIHJvb3RWbm9kZS4kdGFnJCA9IG51bGw7XG4gICAgcm9vdFZub2RlLiRmbGFncyQgfD0gNCAvKiBpc0hvc3QgKi87XG4gICAgaG9zdFJlZi4kdm5vZGUkID0gcm9vdFZub2RlO1xuICAgIHJvb3RWbm9kZS4kZWxtJCA9IG9sZFZOb2RlLiRlbG0kID0gKGhvc3RFbG0uc2hhZG93Um9vdCB8fCBob3N0RWxtICk7XG4gICAge1xuICAgICAgICBzY29wZUlkID0gaG9zdEVsbVsncy1zYyddO1xuICAgIH1cbiAgICAvLyBzeW5jaHJvbm91cyBwYXRjaFxuICAgIHBhdGNoKG9sZFZOb2RlLCByb290Vm5vZGUpO1xufTtcbmNvbnN0IGdldEVsZW1lbnQgPSAocmVmKSA9PiAoZ2V0SG9zdFJlZihyZWYpLiRob3N0RWxlbWVudCQgKTtcbmNvbnN0IGNyZWF0ZUV2ZW50ID0gKHJlZiwgbmFtZSwgZmxhZ3MpID0+IHtcbiAgICBjb25zdCBlbG0gPSBnZXRFbGVtZW50KHJlZik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1pdDogKGRldGFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVtaXRFdmVudChlbG0sIG5hbWUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiAhIShmbGFncyAmIDQgLyogQnViYmxlcyAqLyksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6ICEhKGZsYWdzICYgMiAvKiBDb21wb3NlZCAqLyksXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogISEoZmxhZ3MgJiAxIC8qIENhbmNlbGxhYmxlICovKSxcbiAgICAgICAgICAgICAgICBkZXRhaWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSAmIGRpc3BhdGNoIGEgY3VzdG9tIEV2ZW50IG9uIGEgcHJvdmlkZWQgdGFyZ2V0XG4gKiBAcGFyYW0gZWxtIHRoZSB0YXJnZXQgb2YgdGhlIEV2ZW50XG4gKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSB0byBnaXZlIHRoZSBjdXN0b20gRXZlbnRcbiAqIEBwYXJhbSBvcHRzIG9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIGEgY3VzdG9tIEV2ZW50XG4gKiBAcmV0dXJucyB0aGUgY3VzdG9tIEV2ZW50XG4gKi9cbmNvbnN0IGVtaXRFdmVudCA9IChlbG0sIG5hbWUsIG9wdHMpID0+IHtcbiAgICBjb25zdCBldiA9IHBsdC5jZShuYW1lLCBvcHRzKTtcbiAgICBlbG0uZGlzcGF0Y2hFdmVudChldik7XG4gICAgcmV0dXJuIGV2O1xufTtcbmNvbnN0IGF0dGFjaFRvQW5jZXN0b3IgPSAoaG9zdFJlZiwgYW5jZXN0b3JDb21wb25lbnQpID0+IHtcbiAgICBpZiAoYW5jZXN0b3JDb21wb25lbnQgJiYgIWhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgJiYgYW5jZXN0b3JDb21wb25lbnRbJ3MtcCddKSB7XG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXS5wdXNoKG5ldyBQcm9taXNlKChyKSA9PiAoaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCA9IHIpKSk7XG4gICAgfVxufTtcbmNvbnN0IHNjaGVkdWxlVXBkYXRlID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICB9XG4gICAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDUxMiAvKiBuZWVkc1JlcmVuZGVyICovO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkKTtcbiAgICAvLyB0aGVyZSBpcyBubyBhbmNlc3RvciBjb21wb25lbnQgb3IgdGhlIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgIC8vIGhhcyBhbHJlYWR5IGZpcmVkIG9mZiBpdHMgbGlmZWN5Y2xlIHVwZGF0ZSB0aGVuXG4gICAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gICAgY29uc3QgZGlzcGF0Y2ggPSAoKSA9PiBkaXNwYXRjaEhvb2tzKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpO1xuICAgIHJldHVybiB3cml0ZVRhc2soZGlzcGF0Y2gpIDtcbn07XG5jb25zdCBkaXNwYXRjaEhvb2tzID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICBjb25zdCBlbmRTY2hlZHVsZSA9IGNyZWF0ZVRpbWUoJ3NjaGVkdWxlVXBkYXRlJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgO1xuICAgIGxldCBwcm9taXNlO1xuICAgIGVuZFNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKCkgPT4gdXBkYXRlQ29tcG9uZW50KGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSk7XG59O1xuY29uc3QgdXBkYXRlQ29tcG9uZW50ID0gYXN5bmMgKGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gICAgLy8gdXBkYXRlQ29tcG9uZW50XG4gICAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IGVuZFVwZGF0ZSA9IGNyZWF0ZVRpbWUoJ3VwZGF0ZScsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gICAgY29uc3QgcmMgPSBlbG1bJ3MtcmMnXTtcbiAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgIGF0dGFjaFN0eWxlcyhob3N0UmVmKTtcbiAgICB9XG4gICAgY29uc3QgZW5kUmVuZGVyID0gY3JlYXRlVGltZSgncmVuZGVyJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICB7XG4gICAgICAgIGNhbGxSZW5kZXIoaG9zdFJlZiwgaW5zdGFuY2UpO1xuICAgIH1cbiAgICBpZiAocmMpIHtcbiAgICAgICAgLy8gb2ssIHNvIHR1cm5zIG91dCB0aGVyZSBhcmUgc29tZSBjaGlsZCBob3N0IGVsZW1lbnRzXG4gICAgICAgIC8vIHdhaXRpbmcgb24gdGhpcyBwYXJlbnQgZWxlbWVudCB0byBsb2FkXG4gICAgICAgIC8vIGxldCdzIGZpcmUgb2ZmIGFsbCB1cGRhdGUgY2FsbGJhY2tzIHdhaXRpbmdcbiAgICAgICAgcmMubWFwKChjYikgPT4gY2IoKSk7XG4gICAgICAgIGVsbVsncy1yYyddID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbmRSZW5kZXIoKTtcbiAgICBlbmRVcGRhdGUoKTtcbiAgICB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuUHJvbWlzZXMgPSBlbG1bJ3MtcCddO1xuICAgICAgICBjb25zdCBwb3N0VXBkYXRlID0gKCkgPT4gcG9zdFVwZGF0ZUNvbXBvbmVudChob3N0UmVmKTtcbiAgICAgICAgaWYgKGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBwb3N0VXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChjaGlsZHJlblByb21pc2VzKS50aGVuKHBvc3RVcGRhdGUpO1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi87XG4gICAgICAgICAgICBjaGlsZHJlblByb21pc2VzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgY2FsbFJlbmRlciA9IChob3N0UmVmLCBpbnN0YW5jZSwgZWxtKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5zdGFuY2UgPSBpbnN0YW5jZS5yZW5kZXIoKSA7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTYgLyogaXNRdWV1ZWRGb3JVcGRhdGUgKi87XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDIgLyogaGFzUmVuZGVyZWQgKi87XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGxvb2tzIGxpa2Ugd2UndmUgZ290IGNoaWxkIG5vZGVzIHRvIHJlbmRlciBpbnRvIHRoaXMgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gb3Igd2UgbmVlZCB0byB1cGRhdGUgdGhlIGNzcyBjbGFzcy9hdHRycyBvbiB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gRE9NIFdSSVRFIVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmRvbShob3N0UmVmLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGVFcnJvcihlLCBob3N0UmVmLiRob3N0RWxlbWVudCQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBwb3N0VXBkYXRlQ29tcG9uZW50ID0gKGhvc3RSZWYpID0+IHtcbiAgICBjb25zdCB0YWdOYW1lID0gaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkO1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBlbmRQb3N0VXBkYXRlID0gY3JlYXRlVGltZSgncG9zdFVwZGF0ZScsIHRhZ05hbWUpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA7XG4gICAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gICAge1xuICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudERpZFJlbmRlcicpO1xuICAgIH1cbiAgICBpZiAoIShob3N0UmVmLiRmbGFncyQgJiA2NCAvKiBoYXNMb2FkZWRDb21wb25lbnQgKi8pKSB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA2NCAvKiBoYXNMb2FkZWRDb21wb25lbnQgKi87XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIERPTSBXUklURSFcbiAgICAgICAgICAgIGFkZEh5ZHJhdGVkRmxhZyhlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgICAgICAge1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkKGVsbSk7XG4gICAgICAgICAgICBpZiAoIWFuY2VzdG9yQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYXBwRGlkTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbmRQb3N0VXBkYXRlKCk7XG4gICAgfVxuICAgIHtcbiAgICAgICAgaG9zdFJlZi4kb25JbnN0YW5jZVJlc29sdmUkKGVsbSk7XG4gICAgfVxuICAgIC8vIGxvYWQgZXZlbnRzIGZpcmUgZnJvbSBib3R0b20gdG8gdG9wXG4gICAgLy8gdGhlIGRlZXBlc3QgZWxlbWVudHMgbG9hZCBmaXJzdCB0aGVuIGJ1YmJsZXMgdXBcbiAgICB7XG4gICAgICAgIGlmIChob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKCk7XG4gICAgICAgICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiA1MTIgLyogbmVlZHNSZXJlbmRlciAqLykge1xuICAgICAgICAgICAgbmV4dFRpY2soKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfig0IC8qIGlzV2FpdGluZ0ZvckNoaWxkcmVuICovIHwgNTEyIC8qIG5lZWRzUmVyZW5kZXIgKi8pO1xuICAgIH1cbiAgICAvLyAoIOKAol/igKIpXG4gICAgLy8gKCDigKJf4oCiKT7ijJDilqAt4pagXG4gICAgLy8gKOKMkOKWoF/ilqApXG59O1xuY29uc3QgYXBwRGlkTG9hZCA9ICh3aG8pID0+IHtcbiAgICAvLyBvbiBhcHBsb2FkXG4gICAgLy8gd2UgaGF2ZSBmaW5pc2ggdGhlIGZpcnN0IGJpZyBpbml0aWFsIHJlbmRlclxuICAgIHtcbiAgICAgICAgYWRkSHlkcmF0ZWRGbGFnKGRvYy5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgICBuZXh0VGljaygoKSA9PiBlbWl0RXZlbnQod2luLCAnYXBwbG9hZCcsIHsgZGV0YWlsOiB7IG5hbWVzcGFjZTogTkFNRVNQQUNFIH0gfSkpO1xufTtcbmNvbnN0IHNhZmVDYWxsID0gKGluc3RhbmNlLCBtZXRob2QsIGFyZykgPT4ge1xuICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVttZXRob2RdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbbWV0aG9kXShhcmcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5jb25zdCB0aGVuID0gKHByb21pc2UsIHRoZW5GbikgPT4ge1xuICAgIHJldHVybiBwcm9taXNlICYmIHByb21pc2UudGhlbiA/IHByb21pc2UudGhlbih0aGVuRm4pIDogdGhlbkZuKCk7XG59O1xuY29uc3QgYWRkSHlkcmF0ZWRGbGFnID0gKGVsbSkgPT4gZWxtLmNsYXNzTGlzdC5hZGQoJ2h5ZHJhdGVkJylcbiAgICA7XG4vKipcbiAqIFBhcnNlIGEgbmV3IHByb3BlcnR5IHZhbHVlIGZvciBhIGdpdmVuIHByb3BlcnR5IHR5cGUuXG4gKlxuICogV2hpbGUgdGhlIHByb3AgdmFsdWUgY2FuIHJlYXNvbmFibHkgYmUgZXhwZWN0ZWQgdG8gYmUgb2YgYGFueWAgdHlwZSBhcyBmYXIgYXMgVHlwZVNjcmlwdCdzIHR5cGUgY2hlY2tlciBpcyBjb25jZXJuZWQsXG4gKiBpdCBpcyBub3Qgc2FmZSB0byBhc3N1bWUgdGhhdCB0aGUgc3RyaW5nIHJldHVybmVkIGJ5IGV2YWx1YXRpbmcgYHR5cGVvZiBwcm9wVmFsdWVgIG1hdGNoZXM6XG4gKiAgIDEuIGBhbnlgLCB0aGUgdHlwZSBnaXZlbiB0byBgcHJvcFZhbHVlYCBpbiB0aGUgZnVuY3Rpb24gc2lnbmF0dXJlXG4gKiAgIDIuIHRoZSB0eXBlIHN0b3JlZCBmcm9tIGBwcm9wVHlwZWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgY2FwYWJpbGl0eSB0byBwYXJzZS9jb2VyY2UgYSBwcm9wZXJ0eSdzIHZhbHVlIHRvIHBvdGVudGlhbGx5IGFueSBvdGhlciBKYXZhU2NyaXB0IHR5cGUuXG4gKlxuICogUHJvcGVydHkgdmFsdWVzIHJlcHJlc2VudGVkIGluIFRTWCBwcmVzZXJ2ZSB0aGVpciB0eXBlIGluZm9ybWF0aW9uLiBJbiB0aGUgZXhhbXBsZSBiZWxvdywgdGhlIG51bWJlciAwIGlzIHBhc3NlZCB0b1xuICogYSBjb21wb25lbnQuIFRoaXMgYHByb3BWYWx1ZWAgd2lsbCBwcmVzZXJ2ZSBpdHMgdHlwZSBpbmZvcm1hdGlvbiAoYHR5cGVvZiBwcm9wVmFsdWUgPT09ICdudW1iZXInYCkuIE5vdGUgdGhhdCBpc1xuICogYmFzZWQgb24gdGhlIHR5cGUgb2YgdGhlIHZhbHVlIGJlaW5nIHBhc3NlZCBpbiwgbm90IHRoZSB0eXBlIGRlY2xhcmVkIG9mIHRoZSBjbGFzcyBtZW1iZXIgZGVjb3JhdGVkIHdpdGggYEBQcm9wYC5cbiAqIGBgYHRzeFxuICogPG15LWNtcCBwcm9wLXZhbD17MH0+PC9teS1jbXA+XG4gKiBgYGBcbiAqXG4gKiBIVE1MIHByb3AgdmFsdWVzIG9uIHRoZSBvdGhlciBoYW5kLCB3aWxsIGFsd2F5cyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSBwcm9wVmFsdWUgdGhlIG5ldyB2YWx1ZSB0byBjb2VyY2UgdG8gc29tZSB0eXBlXG4gKiBAcGFyYW0gcHJvcFR5cGUgdGhlIHR5cGUgb2YgdGhlIHByb3AsIGV4cHJlc3NlZCBhcyBhIGJpbmFyeSBudW1iZXJcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQvY29lcmNlZCB2YWx1ZVxuICovXG5jb25zdCBwYXJzZVByb3BlcnR5VmFsdWUgPSAocHJvcFZhbHVlLCBwcm9wVHlwZSkgPT4ge1xuICAgIC8vIGVuc3VyZSB0aGlzIHZhbHVlIGlzIG9mIHRoZSBjb3JyZWN0IHByb3AgdHlwZVxuICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiAhaXNDb21wbGV4VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIGlmIChwcm9wVHlwZSAmIDQgLyogQm9vbGVhbiAqLykge1xuICAgICAgICAgICAgLy8gcGVyIHRoZSBIVE1MIHNwZWMsIGFueSBzdHJpbmcgdmFsdWUgbWVhbnMgaXQgaXMgYSBib29sZWFuIHRydWUgdmFsdWVcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSdsbCBjaGVhdCBoZXJlIGFuZCBzYXkgdGhhdCB0aGUgc3RyaW5nIFwiZmFsc2VcIiBpcyB0aGUgYm9vbGVhbiBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcHJvcFZhbHVlID09PSAnJyB8fCAhIXByb3BWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFR5cGUgJiAxIC8qIFN0cmluZyAqLykge1xuICAgICAgICAgICAgLy8gY291bGQgaGF2ZSBiZWVuIHBhc3NlZCBhcyBhIG51bWJlciBvciBib29sZWFuXG4gICAgICAgICAgICAvLyBidXQgd2Ugc3RpbGwgd2FudCBpdCBhcyBhIHN0cmluZ1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhwcm9wVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlZHVuZGFudCByZXR1cm4gaGVyZSBmb3IgYmV0dGVyIG1pbmlmaWNhdGlvblxuICAgICAgICByZXR1cm4gcHJvcFZhbHVlO1xuICAgIH1cbiAgICAvLyBub3Qgc3VyZSBleGFjdGx5IHdoYXQgdHlwZSB3ZSB3YW50XG4gICAgLy8gc28gbm8gbmVlZCB0byBjaGFuZ2UgdG8gYSBkaWZmZXJlbnQgdHlwZVxuICAgIHJldHVybiBwcm9wVmFsdWU7XG59O1xuY29uc3QgZ2V0VmFsdWUgPSAocmVmLCBwcm9wTmFtZSkgPT4gZ2V0SG9zdFJlZihyZWYpLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbmNvbnN0IHNldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUsIG5ld1ZhbCwgY21wTWV0YSkgPT4ge1xuICAgIC8vIGNoZWNrIG91ciBuZXcgcHJvcGVydHkgdmFsdWUgYWdhaW5zdCBvdXIgaW50ZXJuYWwgdmFsdWVcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgIGNvbnN0IG9sZFZhbCA9IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJC5nZXQocHJvcE5hbWUpO1xuICAgIGNvbnN0IGZsYWdzID0gaG9zdFJlZi4kZmxhZ3MkO1xuICAgIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA7XG4gICAgbmV3VmFsID0gcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbCwgY21wTWV0YS4kbWVtYmVycyRbcHJvcE5hbWVdWzBdKTtcbiAgICAvLyBleHBsaWNpdGx5IGNoZWNrIGZvciBOYU4gb24gYm90aCBzaWRlcywgYXMgYE5hTiA9PT0gTmFOYCBpcyBhbHdheXMgZmFsc2VcbiAgICBjb25zdCBhcmVCb3RoTmFOID0gTnVtYmVyLmlzTmFOKG9sZFZhbCkgJiYgTnVtYmVyLmlzTmFOKG5ld1ZhbCk7XG4gICAgY29uc3QgZGlkVmFsdWVDaGFuZ2UgPSBuZXdWYWwgIT09IG9sZFZhbCAmJiAhYXJlQm90aE5hTjtcbiAgICBpZiAoKCEoZmxhZ3MgJiA4IC8qIGlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pIHx8IG9sZFZhbCA9PT0gdW5kZWZpbmVkKSAmJiBkaWRWYWx1ZUNoYW5nZSkge1xuICAgICAgICAvLyBnYWR6b29rcyEgdGhlIHByb3BlcnR5J3MgdmFsdWUgaGFzIGNoYW5nZWQhIVxuICAgICAgICAvLyBzZXQgb3VyIG5ldyB2YWx1ZSFcbiAgICAgICAgaG9zdFJlZi4kaW5zdGFuY2VWYWx1ZXMkLnNldChwcm9wTmFtZSwgbmV3VmFsKTtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICBpZiAoKGZsYWdzICYgKDIgLyogaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIGhhc1JlbmRlcmVkICovKSB7XG4gICAgICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB0aGlzIHZhbHVlIGFjdHVhbGx5IGNoYW5nZWQsIHNvIHdlJ3ZlIGdvdCB3b3JrIHRvIGRvIVxuICAgICAgICAgICAgICAgIC8vIGJ1dCBvbmx5IGlmIHdlJ3ZlIGFscmVhZHkgcmVuZGVyZWQsIG90aGVyd2lzZSBqdXN0IGNoaWxsIG91dFxuICAgICAgICAgICAgICAgIC8vIHF1ZXVlIHRoYXQgd2UgbmVlZCB0byBkbyBhbiB1cGRhdGUsIGJ1dCBkb24ndCB3b3JyeSBhYm91dCBxdWV1aW5nXG4gICAgICAgICAgICAgICAgLy8gdXAgbWlsbGlvbnMgY3V6IHRoaXMgZnVuY3Rpb24gZW5zdXJlcyBpdCBvbmx5IHJ1bnMgb25jZVxuICAgICAgICAgICAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwcm94eUNvbXBvbmVudCA9IChDc3RyLCBjbXBNZXRhLCBmbGFncykgPT4ge1xuICAgIGlmIChjbXBNZXRhLiRtZW1iZXJzJCkge1xuICAgICAgICAvLyBJdCdzIGJldHRlciB0byBoYXZlIGEgY29uc3QgdGhhbiB0d28gT2JqZWN0LmVudHJpZXMoKVxuICAgICAgICBjb25zdCBtZW1iZXJzID0gT2JqZWN0LmVudHJpZXMoY21wTWV0YS4kbWVtYmVycyQpO1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBDc3RyLnByb3RvdHlwZTtcbiAgICAgICAgbWVtYmVycy5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgICAgICAgaWYgKChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgKChmbGFncyAmIDIgLyogcHJveHlTdGF0ZSAqLykgJiYgbWVtYmVyRmxhZ3MgJiAzMiAvKiBTdGF0ZSAqLykpKSB7XG4gICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQgLSBwcm9wXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCwgZ2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQsIHNldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgbmV3VmFsdWUsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmbGFncyAmIDEgLyogaXNFbGVtZW50Q29uc3RydWN0b3IgKi8gJiZcbiAgICAgICAgICAgICAgICBtZW1iZXJGbGFncyAmIDY0IC8qIE1ldGhvZCAqLykge1xuICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50IC0gbWV0aG9kXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZi4kb25JbnN0YW5jZVByb21pc2UkLnRoZW4oKCkgPT4gcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdKC4uLmFyZ3MpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgoZmxhZ3MgJiAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovKSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5hbWVUb1Byb3BOYW1lID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgcHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhdHRyTmFtZSwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGF0dHJOYW1lVG9Qcm9wTmFtZS5nZXQoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgSW4gYSB3ZWIgY29tcG9uZW50IGxpZmVjeWNsZSB0aGUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHJ1bnMgcHJpb3IgdG8gY29ubmVjdGVkQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgLy8gIGluIHRoZSBjYXNlIHdoZXJlIGFuIGF0dHJpYnV0ZSB3YXMgc2V0IGlubGluZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYGh0bWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPG15LWNvbXBvbmVudCBzb21lLWF0dHJpYnV0ZT1cInNvbWUtdmFsdWVcIj48L215LWNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYFxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgVGhlcmUgaXMgYW4gZWRnZSBjYXNlIHdoZXJlIGEgZGV2ZWxvcGVyIHNldHMgdGhlIGF0dHJpYnV0ZSBpbmxpbmUgb24gYSBjdXN0b20gZWxlbWVudCBhbmQgdGhlblxuICAgICAgICAgICAgICAgICAgICAvLyAgcHJvZ3JhbW1hdGljYWxseSBjaGFuZ2VzIGl0IGJlZm9yZSBpdCBoYXMgYmVlbiB1cGdyYWRlZCBhcyBzaG93biBiZWxvdzpcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYGh0bWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPCEtLSB0aGlzIGNvbXBvbmVudCBoYXMgX25vdF8gYmVlbiB1cGdyYWRlZCB5ZXQgLS0+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxteS1jb21wb25lbnQgaWQ9XCJ0ZXN0XCIgc29tZS1hdHRyaWJ1dGU9XCJzb21lLXZhbHVlXCI+PC9teS1jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgLy8gZ3JhYiBub24tdXBncmFkZWQgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZWwuc29tZUF0dHJpYnV0ZSA9IFwiYW5vdGhlci12YWx1ZVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIC8vIHVwZ3JhZGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1jb21wb25lbnQnLCBNeUNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAvLyAgYGBgXG4gICAgICAgICAgICAgICAgICAgIC8vICBJbiB0aGlzIGNhc2UgaWYgd2UgZG8gbm90IHVuc2hhZG93IGhlcmUgYW5kIHVzZSB0aGUgdmFsdWUgb2YgdGhlIHNoYWRvd2luZyBwcm9wZXJ0eSwgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIC8vICB3aWxsIGJlIGNhbGxlZCB3aXRoIGBuZXdWYWx1ZSA9IFwic29tZS12YWx1ZVwiYCBhbmQgd2lsbCBzZXQgdGhlIHNoYWRvd2VkIHByb3BlcnR5ICh0aGlzLnNvbWVBdHRyaWJ1dGUgPSBcImFub3RoZXItdmFsdWVcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gIHRvIHRoZSB2YWx1ZSB0aGF0IHdhcyBzZXQgaW5saW5lIGkuZS4gXCJzb21lLXZhbHVlXCIgZnJvbSBhYm92ZSBleGFtcGxlLiBXaGVuXG4gICAgICAgICAgICAgICAgICAgIC8vICB0aGUgY29ubmVjdGVkQ2FsbGJhY2sgYXR0ZW1wdHMgdG8gdW5zaGFkb3cgaXQgd2lsbCB1c2UgXCJzb21lLXZhbHVlXCIgYXMgdGhlIGluaXRpYWwgdmFsdWUgcmF0aGVyIHRoYW4gXCJhbm90aGVyLXZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIFRoZSBjYXNlIHdoZXJlIHRoZSBhdHRyaWJ1dGUgd2FzIE5PVCBzZXQgaW5saW5lIGJ1dCB3YXMgbm90IHNldCBwcm9ncmFtbWF0aWNhbGx5IHNoYWxsIGJlIGhhbmRsZWQvdW5zaGFkb3dlZFxuICAgICAgICAgICAgICAgICAgICAvLyAgYnkgY29ubmVjdGVkQ2FsbGJhY2sgYXMgdGhpcyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgd2lsbCBub3QgZmlyZS5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjbGF6eS1wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBUT0RPKFNURU5DSUwtMTYpIHdlIHNob3VsZCB0aGluayBhYm91dCB3aGV0aGVyIG9yIG5vdCB3ZSBhY3R1YWxseSB3YW50IHRvIGJlIHJlZmxlY3RpbmcgdGhlIGF0dHJpYnV0ZXMgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gIHByb3BlcnRpZXMgaGVyZSBnaXZlbiB0aGF0IHRoaXMgZ29lcyBhZ2FpbnN0IGJlc3QgcHJhY3RpY2VzIG91dGxpbmVkIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjYXZvaWQtcmVlbnRyYW5jeVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvdG90eXBlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9wTmFtZSBleGlzdHMgb24gdGhlIHByb3RvdHlwZSBvZiBgQ3N0cmAsIHRoaXMgdXBkYXRlIG1heSBiZSBhIHJlc3VsdCBvZiBTdGVuY2lsIHVzaW5nIG5hdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQVBJcyB0byByZWZsZWN0IHByb3BzIGFzIGF0dHJpYnV0ZXMuIENhbGxzIHRvIGBzZXRBdHRyaWJ1dGUoc29tZUVsZW1lbnQsIHByb3BOYW1lKWAgd2lsbCByZXN1bHQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBwcm9wTmFtZWAgdG8gYmUgY29udmVydGVkIHRvIGEgYERPTVN0cmluZ2AsIHdoaWNoIG1heSBub3QgYmUgd2hhdCB3ZSB3YW50IGZvciBvdGhlciBwcmltaXRpdmUgcHJvcHMuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBuZXdWYWx1ZSA9PT0gbnVsbCAmJiB0eXBlb2YgdGhpc1twcm9wTmFtZV0gPT09ICdib29sZWFuJyA/IGZhbHNlIDogbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXMgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gYW5kIGFsc28gY3JlYXRlIGEgbWFwIG9mIGh0bWwgYXR0cmlidXRlIG5hbWUgdG8ganMgcHJvcGVydHkgbmFtZVxuICAgICAgICAgICAgQ3N0ci5vYnNlcnZlZEF0dHJpYnV0ZXMgPSBtZW1iZXJzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoW18sIG1dKSA9PiBtWzBdICYgMTUgLyogSGFzQXR0cmlidXRlICovKSAvLyBmaWx0ZXIgdG8gb25seSBrZWVwIHByb3BzIHRoYXQgc2hvdWxkIG1hdGNoIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAubWFwKChbcHJvcE5hbWUsIG1dKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ck5hbWUgPSBtWzFdIHx8IHByb3BOYW1lO1xuICAgICAgICAgICAgICAgIGF0dHJOYW1lVG9Qcm9wTmFtZS5zZXQoYXR0ck5hbWUsIHByb3BOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ck5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ3N0cjtcbn07XG5jb25zdCBpbml0aWFsaXplQ29tcG9uZW50ID0gYXN5bmMgKGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgaG1yVmVyc2lvbklkLCBDc3RyKSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZUNvbXBvbmVudFxuICAgIGlmICgoaG9zdFJlZi4kZmxhZ3MkICYgMzIgLyogaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi8pID09PSAwKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmVuJ3QgaW5pdGlhbGl6ZWQgdGhpcyBlbGVtZW50IHlldFxuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDMyIC8qIGhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovO1xuICAgICAgICAgICAgLy8gbGF6eSBsb2FkZWQgY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gcmVxdWVzdCB0aGUgY29tcG9uZW50J3MgaW1wbGVtZW50YXRpb24gdG8gYmVcbiAgICAgICAgICAgIC8vIHdpcmVkIHVwIHdpdGggdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAgICAgQ3N0ciA9IGxvYWRNb2R1bGUoY21wTWV0YSk7XG4gICAgICAgICAgICBpZiAoQ3N0ci50aGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gQXdhaXQgY3JlYXRlcyBhIG1pY3JvLXRhc2sgYXZvaWQgaWYgcG9zc2libGVcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRMb2FkID0gdW5pcXVlVGltZSgpO1xuICAgICAgICAgICAgICAgIENzdHIgPSBhd2FpdCBDc3RyO1xuICAgICAgICAgICAgICAgIGVuZExvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghQ3N0ci5pc1Byb3hpZWQpIHtcbiAgICAgICAgICAgICAgICBwcm94eUNvbXBvbmVudChDc3RyLCBjbXBNZXRhLCAyIC8qIHByb3h5U3RhdGUgKi8pO1xuICAgICAgICAgICAgICAgIENzdHIuaXNQcm94aWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVuZE5ld0luc3RhbmNlID0gY3JlYXRlVGltZSgnY3JlYXRlSW5zdGFuY2UnLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gICAgICAgICAgICAvLyBvaywgdGltZSB0byBjb25zdHJ1Y3QgdGhlIGluc3RhbmNlXG4gICAgICAgICAgICAvLyBidXQgbGV0J3Mga2VlcCB0cmFjayBvZiB3aGVuIHdlIHN0YXJ0IGFuZCBzdG9wXG4gICAgICAgICAgICAvLyBzbyB0aGF0IHRoZSBnZXR0ZXJzL3NldHRlcnMgZG9uJ3QgaW5jb3JyZWN0bHkgc3RlcCBvbiBkYXRhXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDggLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdCB0aGUgbGF6eS1sb2FkZWQgY29tcG9uZW50IGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgICAvLyBwYXNzaW5nIHRoZSBob3N0UmVmIGlzIHZlcnkgaW1wb3J0YW50IGR1cmluZ1xuICAgICAgICAgICAgLy8gY29uc3RydWN0aW9uIGluIG9yZGVyIHRvIGRpcmVjdGx5IHdpcmUgdG9nZXRoZXIgdGhlXG4gICAgICAgICAgICAvLyBob3N0IGVsZW1lbnQgYW5kIHRoZSBsYXp5LWxvYWRlZCBpbnN0YW5jZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBuZXcgQ3N0cihob3N0UmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+OCAvKiBpc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kTmV3SW5zdGFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ3N0ci5zdHlsZSkge1xuICAgICAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgaGFzIHN0eWxlcyBidXQgd2UgaGF2ZW4ndCByZWdpc3RlcmVkIHRoZW0geWV0XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBDc3RyLnN0eWxlO1xuICAgICAgICAgICAgY29uc3Qgc2NvcGVJZCA9IGdldFNjb3BlSWQoY21wTWV0YSk7XG4gICAgICAgICAgICBpZiAoIXN0eWxlcy5oYXMoc2NvcGVJZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRSZWdpc3RlclN0eWxlcyA9IGNyZWF0ZVRpbWUoJ3JlZ2lzdGVyU3R5bGVzJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyU3R5bGUoc2NvcGVJZCwgc3R5bGUsICEhKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICAgICAgICAgIGVuZFJlZ2lzdGVyU3R5bGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2UndmUgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYSBsYXp5IGluc3RhbmNlXG4gICAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSAoKSA9PiBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCB0cnVlKTtcbiAgICBpZiAoYW5jZXN0b3JDb21wb25lbnQgJiYgYW5jZXN0b3JDb21wb25lbnRbJ3MtcmMnXSkge1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSBpbml0aWFsIGxvYWQgYW5kIHRoaXMgY29tcG9uZW50IGl0IGhhcyBhbiBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgLy8gYnV0IHRoZSBhbmNlc3RvciBjb21wb25lbnQgaGFzIE5PVCBmaXJlZCBpdHMgd2lsbCB1cGRhdGUgbGlmZWN5Y2xlIHlldFxuICAgICAgICAvLyBzbyBsZXQncyBqdXN0IGNvb2wgb3VyIGpldHMgYW5kIHdhaXQgZm9yIHRoZSBhbmNlc3RvciB0byBjb250aW51ZSBmaXJzdFxuICAgICAgICAvLyB0aGlzIHdpbGwgZ2V0IGZpcmVkIG9mZiB3aGVuIHRoZSBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgLy8gZmluYWxseSBnZXRzIGFyb3VuZCB0byByZW5kZXJpbmcgaXRzIGxhenkgc2VsZlxuICAgICAgICAvLyBmaXJlIG9mZiB0aGUgaW5pdGlhbCB1cGRhdGVcbiAgICAgICAgYW5jZXN0b3JDb21wb25lbnRbJ3MtcmMnXS5wdXNoKHNjaGVkdWxlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlKCk7XG4gICAgfVxufTtcbmNvbnN0IGNvbm5lY3RlZENhbGxiYWNrID0gKGVsbSkgPT4ge1xuICAgIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIGlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCkge1xuICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgICAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgICAgIGNvbnN0IGVuZENvbm5lY3RlZCA9IGNyZWF0ZVRpbWUoJ2Nvbm5lY3RlZENhbGxiYWNrJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICBpZiAoIShob3N0UmVmLiRmbGFncyQgJiAxIC8qIGhhc0Nvbm5lY3RlZCAqLykpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IHRpbWUgdGhpcyBjb21wb25lbnQgaGFzIGNvbm5lY3RlZFxuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEgLyogaGFzQ29ubmVjdGVkICovO1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IGFuY2VzdG9yIGNvbXBvbmVudCAoaWYgdGhlcmUgaXMgb25lKSBhbmQgcmVnaXN0ZXJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBhcyBvbmUgb2YgdGhlIGFjdGl2ZWx5IGxvYWRpbmcgY2hpbGQgY29tcG9uZW50cyBmb3IgaXRzIGFuY2VzdG9yXG4gICAgICAgICAgICAgICAgbGV0IGFuY2VzdG9yQ29tcG9uZW50ID0gZWxtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgoYW5jZXN0b3JDb21wb25lbnQgPSBhbmNlc3RvckNvbXBvbmVudC5wYXJlbnROb2RlIHx8IGFuY2VzdG9yQ29tcG9uZW50Lmhvc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaW1iIHVwIHRoZSBhbmNlc3RvcnMgbG9va2luZyBmb3IgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXBvbmVudCB0aGF0IGhhc24ndCBmaW5pc2hlZCBpdHMgbGlmZWN5Y2xlIHVwZGF0ZSB5ZXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgdGhpcyBjb21wb25lbnRzIGZpcnN0IGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGlzIGNvbXBvbmVudCdzIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoVG9BbmNlc3Rvcihob3N0UmVmLCAoaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkID0gYW5jZXN0b3JDb21wb25lbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGF6eSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL2Jlc3QtcHJhY3RpY2VzI2xhenktcHJvcGVydGllc1xuICAgICAgICAgICAgaWYgKGNtcE1ldGEuJG1lbWJlcnMkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY21wTWV0YS4kbWVtYmVycyQpLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8gJiYgZWxtLmhhc093blByb3BlcnR5KG1lbWJlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsbVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbmRDb25uZWN0ZWQoKTtcbiAgICB9XG59O1xuY29uc3QgZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSAoZWxtKSA9PiB7XG4gICAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgICAgIGdldEhvc3RSZWYoZWxtKTtcbiAgICB9XG59O1xuY29uc3QgYm9vdHN0cmFwTGF6eSA9IChsYXp5QnVuZGxlcywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgZW5kQm9vdHN0cmFwID0gY3JlYXRlVGltZSgpO1xuICAgIGNvbnN0IGNtcFRhZ3MgPSBbXTtcbiAgICBjb25zdCBleGNsdWRlID0gb3B0aW9ucy5leGNsdWRlIHx8IFtdO1xuICAgIGNvbnN0IGN1c3RvbUVsZW1lbnRzID0gd2luLmN1c3RvbUVsZW1lbnRzO1xuICAgIGNvbnN0IGhlYWQgPSBkb2MuaGVhZDtcbiAgICBjb25zdCBtZXRhQ2hhcnNldCA9IC8qQF9fUFVSRV9fKi8gaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW2NoYXJzZXRdJyk7XG4gICAgY29uc3QgdmlzaWJpbGl0eVN0eWxlID0gLypAX19QVVJFX18qLyBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcyA9IFtdO1xuICAgIGxldCBhcHBMb2FkRmFsbGJhY2s7XG4gICAgbGV0IGlzQm9vdHN0cmFwcGluZyA9IHRydWU7XG4gICAgT2JqZWN0LmFzc2lnbihwbHQsIG9wdGlvbnMpO1xuICAgIHBsdC4kcmVzb3VyY2VzVXJsJCA9IG5ldyBVUkwob3B0aW9ucy5yZXNvdXJjZXNVcmwgfHwgJy4vJywgZG9jLmJhc2VVUkkpLmhyZWY7XG4gICAgbGF6eUJ1bmRsZXMubWFwKChsYXp5QnVuZGxlKSA9PiB7XG4gICAgICAgIGxhenlCdW5kbGVbMV0ubWFwKChjb21wYWN0TWV0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY21wTWV0YSA9IHtcbiAgICAgICAgICAgICAgICAkZmxhZ3MkOiBjb21wYWN0TWV0YVswXSxcbiAgICAgICAgICAgICAgICAkdGFnTmFtZSQ6IGNvbXBhY3RNZXRhWzFdLFxuICAgICAgICAgICAgICAgICRtZW1iZXJzJDogY29tcGFjdE1ldGFbMl0sXG4gICAgICAgICAgICAgICAgJGxpc3RlbmVycyQ6IGNvbXBhY3RNZXRhWzNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbXBNZXRhLiRtZW1iZXJzJCA9IGNvbXBhY3RNZXRhWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9IGNtcE1ldGEuJHRhZ05hbWUkO1xuICAgICAgICAgICAgY29uc3QgSG9zdEVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgICAgICAgICAvLyBTdGVuY2lsTGF6eUhvc3RcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvcihzZWxmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICByZWdpc3Rlckhvc3Qoc2VsZiwgY21wTWV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IGlzIHVzaW5nIHNoYWRvdyBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgc2hhZG93IGRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSByZWFkLW9ubHkgcHJvcGVydHkgXCJzaGFkb3dSb290XCIgdG8gdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkaW5nIHRoZSBzaGFkb3cgcm9vdCBidWlsZCBjb25kaXRpb25hbHMgdG8gbWluaW1pemUgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXBwTG9hZEZhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoYXBwTG9hZEZhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcExvYWRGYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQm9vdHN0cmFwcGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29ubmVjdGVkQ2FsbGJhY2sgd2lsbCBiZSBwcm9jZXNzZWQgb25jZSBhbGwgY29tcG9uZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MucHVzaCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gY29ubmVjdGVkQ2FsbGJhY2sodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBwbHQuam1wKCgpID0+IGRpc2Nvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50T25SZWFkeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEhvc3RSZWYodGhpcykuJG9uUmVhZHlQcm9taXNlJDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY21wTWV0YS4kbGF6eUJ1bmRsZUlkJCA9IGxhenlCdW5kbGVbMF07XG4gICAgICAgICAgICBpZiAoIWV4Y2x1ZGUuaW5jbHVkZXModGFnTmFtZSkgJiYgIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgIGNtcFRhZ3MucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgcHJveHlDb21wb25lbnQoSG9zdEVsZW1lbnQsIGNtcE1ldGEsIDEgLyogaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAge1xuICAgICAgICB2aXNpYmlsaXR5U3R5bGUuaW5uZXJIVE1MID0gY21wVGFncyArIEhZRFJBVEVEX0NTUztcbiAgICAgICAgdmlzaWJpbGl0eVN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHZpc2liaWxpdHlTdHlsZSwgbWV0YUNoYXJzZXQgPyBtZXRhQ2hhcnNldC5uZXh0U2libGluZyA6IGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgZGVmZXJyZWQgY29ubmVjdGVkQ2FsbGJhY2tzIG5vdyBhbGwgY29tcG9uZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxuICAgIGlzQm9vdHN0cmFwcGluZyA9IGZhbHNlO1xuICAgIGlmIChkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MubWFwKChob3N0KSA9PiBob3N0LmNvbm5lY3RlZENhbGxiYWNrKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAge1xuICAgICAgICAgICAgcGx0LmptcCgoKSA9PiAoYXBwTG9hZEZhbGxiYWNrID0gc2V0VGltZW91dChhcHBEaWRMb2FkLCAzMCkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGYWxsYmFjayBhcHBMb2FkIGV2ZW50XG4gICAgZW5kQm9vdHN0cmFwKCk7XG59O1xuY29uc3QgRnJhZ21lbnQgPSAoXywgY2hpbGRyZW4pID0+IGNoaWxkcmVuO1xuY29uc3QgaG9zdFJlZnMgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgZ2V0SG9zdFJlZiA9IChyZWYpID0+IGhvc3RSZWZzLmdldChyZWYpO1xuY29uc3QgcmVnaXN0ZXJJbnN0YW5jZSA9IChsYXp5SW5zdGFuY2UsIGhvc3RSZWYpID0+IGhvc3RSZWZzLnNldCgoaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA9IGxhenlJbnN0YW5jZSksIGhvc3RSZWYpO1xuY29uc3QgcmVnaXN0ZXJIb3N0ID0gKGVsbSwgY21wTWV0YSkgPT4ge1xuICAgIGNvbnN0IGhvc3RSZWYgPSB7XG4gICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICRob3N0RWxlbWVudCQ6IGVsbSxcbiAgICAgICAgJGNtcE1ldGEkOiBjbXBNZXRhLFxuICAgICAgICAkaW5zdGFuY2VWYWx1ZXMkOiBuZXcgTWFwKCksXG4gICAgfTtcbiAgICB7XG4gICAgICAgIGhvc3RSZWYuJG9uSW5zdGFuY2VQcm9taXNlJCA9IG5ldyBQcm9taXNlKChyKSA9PiAoaG9zdFJlZi4kb25JbnN0YW5jZVJlc29sdmUkID0gcikpO1xuICAgIH1cbiAgICB7XG4gICAgICAgIGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCA9IG5ldyBQcm9taXNlKChyKSA9PiAoaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkID0gcikpO1xuICAgICAgICBlbG1bJ3MtcCddID0gW107XG4gICAgICAgIGVsbVsncy1yYyddID0gW107XG4gICAgfVxuICAgIHJldHVybiBob3N0UmVmcy5zZXQoZWxtLCBob3N0UmVmKTtcbn07XG5jb25zdCBpc01lbWJlckluRWxlbWVudCA9IChlbG0sIG1lbWJlck5hbWUpID0+IG1lbWJlck5hbWUgaW4gZWxtO1xuY29uc3QgY29uc29sZUVycm9yID0gKGUsIGVsKSA9PiAoMCwgY29uc29sZS5lcnJvcikoZSwgZWwpO1xuY29uc3QgY21wTW9kdWxlcyA9IC8qQF9fUFVSRV9fKi8gbmV3IE1hcCgpO1xuY29uc3QgbG9hZE1vZHVsZSA9IChjbXBNZXRhLCBob3N0UmVmLCBobXJWZXJzaW9uSWQpID0+IHtcbiAgICAvLyBsb2FkTW9kdWxlSW1wb3J0XG4gICAgY29uc3QgZXhwb3J0TmFtZSA9IGNtcE1ldGEuJHRhZ05hbWUkLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgICBjb25zdCBidW5kbGVJZCA9IGNtcE1ldGEuJGxhenlCdW5kbGVJZCQ7XG4gICAgY29uc3QgbW9kdWxlID0gY21wTW9kdWxlcy5nZXQoYnVuZGxlSWQpIDtcbiAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfVxuICAgIC8qIV9fU1RFTkNJTF9TVEFUSUNfSU1QT1JUX1NXSVRDSF9fKi9cbiAgICByZXR1cm4gaW1wb3J0KFxuICAgIC8qIEB2aXRlLWlnbm9yZSAqL1xuICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvXFwuZW50cnlcXC5qcyQvICovXG4gICAgLyogd2VicGFja0V4Y2x1ZGU6IC9cXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJC8gKi9cbiAgICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICBgLi8ke2J1bmRsZUlkfS5lbnRyeS5qcyR7Jyd9YCkudGhlbigoaW1wb3J0ZWRNb2R1bGUpID0+IHtcbiAgICAgICAge1xuICAgICAgICAgICAgY21wTW9kdWxlcy5zZXQoYnVuZGxlSWQsIGltcG9ydGVkTW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1wb3J0ZWRNb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfSwgY29uc29sZUVycm9yKTtcbn07XG5jb25zdCBzdHlsZXMgPSBuZXcgTWFwKCk7XG5jb25zdCBxdWV1ZURvbVJlYWRzID0gW107XG5jb25zdCBxdWV1ZURvbVdyaXRlcyA9IFtdO1xuY29uc3QgcXVldWVUYXNrID0gKHF1ZXVlLCB3cml0ZSkgPT4gKGNiKSA9PiB7XG4gICAgcXVldWUucHVzaChjYik7XG4gICAgaWYgKCFxdWV1ZVBlbmRpbmcpIHtcbiAgICAgICAgcXVldWVQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHdyaXRlICYmIHBsdC4kZmxhZ3MkICYgNCAvKiBxdWV1ZVN5bmMgKi8pIHtcbiAgICAgICAgICAgIG5leHRUaWNrKGZsdXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBsdC5yYWYoZmx1c2gpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGNvbnN1bWUgPSAocXVldWUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBxdWV1ZVtpXShwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xufTtcbmNvbnN0IGZsdXNoID0gKCkgPT4ge1xuICAgIC8vIGFsd2F5cyBmb3JjZSBhIGJ1bmNoIG9mIG1lZGl1bSBjYWxsYmFja3MgdG8gcnVuLCBidXQgc3RpbGwgaGF2ZVxuICAgIC8vIGEgdGhyb3R0bGUgb24gaG93IG1hbnkgY2FuIHJ1biBpbiBhIGNlcnRhaW4gdGltZVxuICAgIC8vIERPTSBSRUFEUyEhIVxuICAgIGNvbnN1bWUocXVldWVEb21SZWFkcyk7XG4gICAgLy8gRE9NIFdSSVRFUyEhIVxuICAgIHtcbiAgICAgICAgY29uc3VtZShxdWV1ZURvbVdyaXRlcyk7XG4gICAgICAgIGlmICgocXVldWVQZW5kaW5nID0gcXVldWVEb21SZWFkcy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgLy8gc3RpbGwgbW9yZSB0byBkbyB5ZXQsIGJ1dCB3ZSd2ZSBydW4gb3V0IG9mIHRpbWVcbiAgICAgICAgICAgIC8vIGxldCdzIGxldCB0aGlzIHRoaW5nIGNvb2wgb2ZmIGFuZCB0cnkgYWdhaW4gaW4gdGhlIG5leHQgdGlja1xuICAgICAgICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgbmV4dFRpY2sgPSAvKkBfX1BVUkVfXyovIChjYikgPT4gcHJvbWlzZVJlc29sdmUoKS50aGVuKGNiKTtcbmNvbnN0IHdyaXRlVGFzayA9IC8qQF9fUFVSRV9fKi8gcXVldWVUYXNrKHF1ZXVlRG9tV3JpdGVzLCB0cnVlKTtcblxuZXhwb3J0IHsgRnJhZ21lbnQgYXMgRiwgSG9zdCBhcyBILCBib290c3RyYXBMYXp5IGFzIGIsIGNyZWF0ZUV2ZW50IGFzIGMsIGdldEVsZW1lbnQgYXMgZywgaCwgcHJvbWlzZVJlc29sdmUgYXMgcCwgcmVnaXN0ZXJJbnN0YW5jZSBhcyByIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgRiBhcyBGcmFnbWVudCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC02OTIyNTFmZS5qcyc7XG5cbmNvbnN0IHZvY2FibHlBZGRDYXJkSGludENzcyA9IFwiOmhvc3R7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9LmFycm93e3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uYXJyb3cgcGF0aHtmaWxsOiMwMDUwZmZ9LmhpbnR7Y29sb3I6IzAwNTBmZjttYXJnaW4tcmlnaHQ6OHB4O2ZvbnQtc2l6ZToxNnB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX1cIjtcblxuY29uc3QgVm9jYWJseUFkZENhcmRIaW50ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNvbmZpcm0gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNvbmZpcm1cIiwgNyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImhpbnRcIiB9LCBcIkNsaWNrIGhlcmUgdG8gc2F2ZVwiKSwgaChcInN2Z1wiLCB7IGNsYXNzOiBcImFycm93XCIsIHdpZHRoOiBcIjI4XCIsIGhlaWdodDogXCIxNVwiLCB2aWV3Qm94OiBcIjAgMCAyOCAxNVwiLCBmaWxsOiBcIm5vbmVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBoKFwicGF0aFwiLCB7IGQ6IFwiTTEuNTQxNDEgOC45MjM4QzAuNzcxNDE0IDkuMjU4IDAuMzQ4NDI2IDkuMjgxNCAwLjExNjQyNiA5LjAwMzFDLTAuMzU5NTc0IDguNDMwMiAwLjY4NjQyNSA2LjcxMDQgMi4xMTg0MiA1LjcxMTlDMy43MDk0MiA0LjYwMyA4LjI2MzQyIDMuMjQzNTggMTEuMTEzNCAzLjAyNzZDMTMuODA1NCAyLjgyMzQ4IDE3LjA1NTQgMy4xMjUwMyAxOC43MDU0IDMuNzMxOUMxOS4zMjY0IDMuOTYwMyAxOS44NDk0IDQuMTIwNCAxOS44Njc0IDQuMDg3N0MxOS44ODY0IDQuMDU0OCAxOS42ODE0IDMuMjQ2ODIgMTkuNDEyNCAyLjI5MTlDMTguNzU5NCAtMC4wMjkyMzA2IDE5LjAxOTQgLTAuNDUwOTcxIDIwLjU2ODQgMC40MTc4NDlDMjEuODMzNCAxLjEyNjk5IDI1LjYyMTQgNC44NzE1IDI2LjY4ODQgNi40NjY5QzI3Ljk3NzQgOC4zOTQ0IDI3LjQxNjQgMTAuMzQ3NyAyNS4yNzA0IDExLjQwMzRDMTguNzY3NCAxNC42MDE2IDE3LjU0MjQgMTUuMDI2NyAxNy4xMDQ0IDE0LjIzNjdDMTYuNzc2NCAxMy42NDQ1IDE4LjE2MDQgMTEuNzQ5NSAxOS44MDM0IDEwLjU0MTJMMjEuNDI4NCA5LjM0NjVMMjAuMzE0NCA4LjkwNjJDMTcuNTM5NCA3LjgwODggMTQuNzg1NCA3LjAxNTkgMTMuMjQxNCA2Ljg2OTJDOS43MzE0MyA2LjUzNiA1LjIyMzQxIDcuMzI3OSAxLjU0MTQxIDguOTIzOFpcIiB9KSkpKTtcbiAgfVxufTtcblZvY2FibHlBZGRDYXJkSGludC5zdHlsZSA9IHZvY2FibHlBZGRDYXJkSGludENzcztcblxuY29uc3Qgdm9jYWJseUJ1dHRvbkNzcyA9IFwiOmhvc3R7ZGlzcGxheTpibG9jazt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0uYnV0dG9ue2Rpc3BsYXk6ZmxleDtib3JkZXItcmFkaXVzOjVweDt3aWR0aDoyMXB4O2hlaWdodDoyMXB4O2xpbmUtaGVpZ2h0OjIxcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6M3B4O2N1cnNvcjpwb2ludGVyO2JveC1zaXppbmc6Y29udGVudC1ib3g7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNoYWRvdzowIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjgpO3RyYW5zaXRpb246Ym94LXNoYWRvdyAwLjFzfS5idXR0b24gLnN2Z3toZWlnaHQ6MTguOXB4fS5idXR0b246aG92ZXJ7Ym94LXNoYWRvdzowIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjkpfS5idXR0b246YWN0aXZle2JveC1zaGFkb3c6MCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC43KX1cIjtcblxuY29uc3QgVm9jYWJseUJ1dHRvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYnV0dG9uXCIgfSwgaChcInN2Z1wiLCB7IHZpZXdCb3g6IFwiMCAwIDYzMyA2OTlcIiwgZmlsbDogXCJub25lXCIsIGNsYXNzOiBcInN2Z1wiIH0sIGgoXCJwYXRoXCIsIHsgZDogXCJNNTg1LjQyOCAxMzAuNDQzSDQ2LjY2NDZDMjEuMjExMiAxMzAuNDQzIDAgMTUwLjgwOSAwIDE3Ny4xMTZWNDgyLjYwOUMwIDUwOC4wNjcgMjAuMzYyNyA1MjkuMjgxIDQ2LjY2NDYgNTI5LjI4MUg4Mi4yOTk0VjYzOS41OTlDODIuMjk5NCA2NjIuNTExIDk1LjAyNiA2ODIuODc3IDExNC41NCA2OTMuMDZDMTIyLjE3NiA2OTcuMzAzIDEzMC42NjEgNjk5IDEzOS4xNDUgNjk5QzE1MS44NzIgNjk5IDE2My43NSA2OTQuNzU3IDE3NC43OCA2ODcuMTJMMzUyLjk1NCA1MzAuMTNINTg1LjQyOEM2MTAuODgyIDUzMC4xMyA2MzIuMDkzIDUwOS43NjQgNjMyLjA5MyA0ODMuNDU3VjE3Ny45NjRDNjMyLjA5MyAxNTEuNjU4IDYxMC44ODIgMTMwLjQ0MyA1ODUuNDI4IDEzMC40NDNaTTE1MC4xNzUgNjU0Ljg3NEMxNDIuNTM5IDY2MC44MTQgMTM1Ljc1MiA2NTguMjY4IDEzMy4yMDYgNjU2LjU3QzEzMC42NjEgNjU0Ljg3MyAxMjMuODczIDY1MC42MyAxMjMuODczIDYzOS41OTlWMzQwLjA0NUMxMjMuODczIDMyMC41MjcgMTM3LjQ0OCAyOTEuNjc2IDE1Mi43MiAyNzguOTQ3TDMyMC43MTMgMTMyLjk4OVY1MDQuNjcyTDE1MC4xNzUgNjU0Ljg3NFpcIiwgZmlsbDogXCIjMDA1MEZGXCIgfSksIGgoXCJwYXRoXCIsIHsgZDogXCJNNTI0LjM0IDM2LjI0OTJDNTI0LjM0IDEwLjc5MTQgNDk3LjE5IC0xMy44MTg0IDQ2NC45NDkgOS4wOTM1N0wzNTUuNDk5IDEwMS41OUg1MjQuMzRWMzYuMjQ5MlpcIiwgZmlsbDogXCIjMDA1MEZGXCIgfSkpKSkpO1xuICB9XG59O1xuVm9jYWJseUJ1dHRvbi5zdHlsZSA9IHZvY2FibHlCdXR0b25Dc3M7XG5cbmNvbnN0IGV4cGxvZGUgPSAobGluZXMpID0+IHtcbiAgICBpZiAoIWxpbmVzKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbmVzXG4gICAgICAgIC5zcGxpdChgXFxuYClcbiAgICAgICAgLm1hcCgobGluZSkgPT4gbGluZS5yZXBsYWNlKC9eXFwqICovLCAnJykucmVwbGFjZSgvICskLywgJycpKVxuICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiBsaW5lICE9PSAnJyk7XG59O1xuXG5jb25zdCB2b2NhYmx5Q2FyZERlZmluaXRpb25zQ3NzID0gXCJ2b2NhYmx5LWNhcmQtZGVmaW5pdGlvbnN7Zm9udC1mYW1pbHk6YXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtmb250LXNpemU6MTZweCAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudDtjb2xvcjojNmE2YTZhICFpbXBvcnRhbnQ7ZGlzcGxheTpibG9jazt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH1cIjtcblxuY29uc3QgVm9jYWJseUNhcmREZWZpbml0aW9ucyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gZXhwbG9kZSh0aGlzLmNhcmQuZGF0YS5kZWZpbml0aW9uKTtcbiAgICBpZiAoZGVmaW5pdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktaXRhbGljXCIgfSwgdGhpcy5jYXJkLmRhdGEudHJhbnNsYXRpb24pKSk7XG4gICAgfVxuICAgIHJldHVybiAoaChcInVsXCIsIHsgY2xhc3M6IFwidm9jYWJseS1saXN0XCIgfSwgdGhpcy5jYXJkLmRhdGEudHJhbnNsYXRpb24gJiYgKGgoXCJsaVwiLCBudWxsLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcInZvY2FibHktaXRhbGljXCIgfSwgdGhpcy5jYXJkLmRhdGEudHJhbnNsYXRpb24pKSksIGRlZmluaXRpb25zLm1hcCgoaXRlbSkgPT4gKGgoXCJsaVwiLCBudWxsLCBpdGVtKSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5Q2FyZERlZmluaXRpb25zLnN0eWxlID0gdm9jYWJseUNhcmREZWZpbml0aW9uc0NzcztcblxuY29uc3Qgdm9jYWJseUNhcmRFeGFtcGxlc0NzcyA9IFwidm9jYWJseS1jYXJkLWV4YW1wbGVze2ZvbnQtZmFtaWx5OmFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHggIWltcG9ydGFudDtsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnQ7Y29sb3I6IzZhNmE2YSAhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2s7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IFZvY2FibHlDYXJkRXhhbXBsZXMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBleGFtcGxlcyA9IGV4cGxvZGUodGhpcy5leGFtcGxlKTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgbnVsbCwgZXhhbXBsZXMubGVuZ3RoID09PSAxICYmIGV4YW1wbGVzWzBdLCBleGFtcGxlcy5sZW5ndGggPiAxICYmIChoKFwidWxcIiwgeyBjbGFzczogXCJ2b2NhYmx5LWxpc3RcIiB9LCBleGFtcGxlcy5tYXAoKGl0ZW0pID0+IChoKFwibGlcIiwgbnVsbCwgaXRlbSkpKSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5Q2FyZEV4YW1wbGVzLnN0eWxlID0gdm9jYWJseUNhcmRFeGFtcGxlc0NzcztcblxuY29uc3QgR29vZ2xlVFRTTGFuZ3VhZ2VzID0gW1xuICAgICdhZicsXG4gICAgJ2FyJyxcbiAgICAnZXUnLFxuICAgICdibicsXG4gICAgJ2JnJyxcbiAgICAnY2EnLFxuICAgICdjcycsXG4gICAgJ2RhJyxcbiAgICAnbmwnLFxuICAgICdlbicsXG4gICAgJ2ZpJyxcbiAgICAnZnInLFxuICAgICdnbCcsXG4gICAgJ2RlJyxcbiAgICAnZWwnLFxuICAgICdndScsXG4gICAgJ2hlJyxcbiAgICAnaGknLFxuICAgICdodScsXG4gICAgJ2lzJyxcbiAgICAnaWQnLFxuICAgICdpdCcsXG4gICAgJ2phJyxcbiAgICAna24nLFxuICAgICdrbycsXG4gICAgJ2x2JyxcbiAgICAnbHQnLFxuICAgICdtcycsXG4gICAgJ21sJyxcbiAgICAnbXInLFxuICAgICduYicsXG4gICAgJ3BsJyxcbiAgICAncHQnLFxuICAgICdwYScsXG4gICAgJ3JvJyxcbiAgICAncnUnLFxuICAgICdzcicsXG4gICAgJ3NrJyxcbiAgICAnZXMnLFxuICAgICdzdicsXG4gICAgJ3RhJyxcbiAgICAndGUnLFxuICAgICd0aCcsXG4gICAgJ3RyJyxcbiAgICAndWsnLFxuICAgICd2aScsXG4gICAgJ3poJyxcbiAgICAnemgtVFcnLFxuXTtcbmNvbnN0IGlzR29vZ2xlVFRTTGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcbiAgICByZXR1cm4gR29vZ2xlVFRTTGFuZ3VhZ2VzLmluY2x1ZGVzKGxhbmd1YWdlKTtcbn07XG5cbmNvbnN0IGxhbmd1YWdlTGlzdCA9IHtcbiAgICBhZjogJ0FmcmlrYWFucycsXG4gICAgc3E6ICdBbGJhbmlhbicsXG4gICAgYW06ICdBbWhhcmljJyxcbiAgICBhcjogJ0FyYWJpYycsXG4gICAgaHk6ICdBcm1lbmlhbicsXG4gICAgYXo6ICdBemVyYmFpamFuaScsXG4gICAgZXU6ICdCYXNxdWUnLFxuICAgIGJlOiAnQmVsYXJ1c2lhbicsXG4gICAgYm46ICdCZW5nYWxpJyxcbiAgICBiczogJ0Jvc25pYW4nLFxuICAgIGJnOiAnQnVsZ2FyaWFuJyxcbiAgICBjYTogJ0NhdGFsYW4nLFxuICAgIHpoOiAnQ2hpbmVzZSAoU2ltcGxpZmllZCknLFxuICAgICd6aC1UVyc6ICdDaGluZXNlIChUcmFkaXRpb25hbCknLFxuICAgIGNvOiAnQ29yc2ljYW4nLFxuICAgIGhyOiAnQ3JvYXRpYW4nLFxuICAgIGNzOiAnQ3plY2gnLFxuICAgIGRhOiAnRGFuaXNoJyxcbiAgICBubDogJ0R1dGNoJyxcbiAgICBlbjogJ0VuZ2xpc2gnLFxuICAgIGVvOiAnRXNwZXJhbnRvJyxcbiAgICBldDogJ0VzdG9uaWFuJyxcbiAgICBmaTogJ0Zpbm5pc2gnLFxuICAgIGZyOiAnRnJlbmNoJyxcbiAgICBmeTogJ0ZyaXNpYW4nLFxuICAgIGdsOiAnR2FsaWNpYW4nLFxuICAgIGthOiAnR2VvcmdpYW4nLFxuICAgIGRlOiAnR2VybWFuJyxcbiAgICBlbDogJ0dyZWVrJyxcbiAgICBndTogJ0d1amFyYXRpJyxcbiAgICBodDogJ0hhaXRpYW4gQ3Jlb2xlJyxcbiAgICBoYTogJ0hhdXNhJyxcbiAgICBoYXc6ICdIYXdhaWlhbicsXG4gICAgaGU6ICdIZWJyZXcnLFxuICAgIGhpOiAnSGluZGknLFxuICAgIGhtbjogJ0htb25nJyxcbiAgICBodTogJ0h1bmdhcmlhbicsXG4gICAgaXM6ICdJY2VsYW5kaWMnLFxuICAgIGlnOiAnSWdibycsXG4gICAgaWQ6ICdJbmRvbmVzaWFuJyxcbiAgICBnYTogJ0lyaXNoJyxcbiAgICBpdDogJ0l0YWxpYW4nLFxuICAgIGphOiAnSmFwYW5lc2UnLFxuICAgIGp2OiAnSmF2YW5lc2UnLFxuICAgIGtuOiAnS2FubmFkYScsXG4gICAga2s6ICdLYXpha2gnLFxuICAgIGttOiAnS2htZXInLFxuICAgIHJ3OiAnS2lueWFyd2FuZGEnLFxuICAgIGtvOiAnS29yZWFuJyxcbiAgICBrdTogJ0t1cmRpc2gnLFxuICAgIGt5OiAnS3lyZ3l6JyxcbiAgICBsbzogJ0xhbycsXG4gICAgbHY6ICdMYXR2aWFuJyxcbiAgICBsdDogJ0xpdGh1YW5pYW4nLFxuICAgIGxiOiAnTHV4ZW1ib3VyZ2lzaCcsXG4gICAgbWs6ICdNYWNlZG9uaWFuJyxcbiAgICBtZzogJ01hbGFnYXN5JyxcbiAgICBtczogJ01hbGF5JyxcbiAgICBtbDogJ01hbGF5YWxhbScsXG4gICAgbXQ6ICdNYWx0ZXNlJyxcbiAgICBtaTogJ01hb3JpJyxcbiAgICBtcjogJ01hcmF0aGknLFxuICAgIG1uOiAnTW9uZ29saWFuJyxcbiAgICBteTogJ015YW5tYXIgKEJ1cm1lc2UpJyxcbiAgICBuZTogJ05lcGFsaScsXG4gICAgbm86ICdOb3J3ZWdpYW4nLFxuICAgIG55OiAnTnlhbmphIChDaGljaGV3YSknLFxuICAgIG9yOiAnT2RpYSAoT3JpeWEpJyxcbiAgICBwczogJ1Bhc2h0bycsXG4gICAgZmE6ICdQZXJzaWFuJyxcbiAgICBwbDogJ1BvbGlzaCcsXG4gICAgcHQ6ICdQb3J0dWd1ZXNlIChQb3J0dWdhbCwgQnJhemlsKScsXG4gICAgcGE6ICdQdW5qYWJpJyxcbiAgICBybzogJ1JvbWFuaWFuJyxcbiAgICBydTogJ1J1c3NpYW4nLFxuICAgIHNtOiAnU2Ftb2FuJyxcbiAgICBnZDogJ1Njb3RzIEdhZWxpYycsXG4gICAgc3I6ICdTZXJiaWFuJyxcbiAgICBzdDogJ1Nlc290aG8nLFxuICAgIHNuOiAnU2hvbmEnLFxuICAgIHNkOiAnU2luZGhpJyxcbiAgICBzaTogJ1NpbmhhbGEgKFNpbmhhbGVzZSknLFxuICAgIHNrOiAnU2xvdmFrJyxcbiAgICBzbDogJ1Nsb3ZlbmlhbicsXG4gICAgc286ICdTb21hbGknLFxuICAgIGVzOiAnU3BhbmlzaCcsXG4gICAgc3U6ICdTdW5kYW5lc2UnLFxuICAgIHN3OiAnU3dhaGlsaScsXG4gICAgc3Y6ICdTd2VkaXNoJyxcbiAgICB0bDogJ1RhZ2Fsb2cgKEZpbGlwaW5vKScsXG4gICAgdGc6ICdUYWppaycsXG4gICAgdGE6ICdUYW1pbCcsXG4gICAgdHQ6ICdUYXRhcicsXG4gICAgdGU6ICdUZWx1Z3UnLFxuICAgIHRoOiAnVGhhaScsXG4gICAgdHI6ICdUdXJraXNoJyxcbiAgICB0azogJ1R1cmttZW4nLFxuICAgIHVrOiAnVWtyYWluaWFuJyxcbiAgICB1cjogJ1VyZHUnLFxuICAgIHVnOiAnVXlnaHVyJyxcbiAgICB1ejogJ1V6YmVrJyxcbiAgICB2aTogJ1ZpZXRuYW1lc2UnLFxuICAgIGN5OiAnV2Vsc2gnLFxuICAgIHhoOiAnWGhvc2EnLFxuICAgIHlpOiAnWWlkZGlzaCcsXG4gICAgeW86ICdZb3J1YmEnLFxuICAgIHp1OiAnWnVsdScsXG59O1xuXG5jb25zdCBpc0NhcmRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gaXRlbS5pZCAhPT0gdW5kZWZpbmVkO1xufTtcbmNvbnN0IGlzRGV0YWNoZWRDYXJkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW0uaWQgPT09IHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IHZvY2FibHlDYXJkU291cmNlQ3NzID0gXCJ2b2NhYmx5LWNhcmQtc291cmNle2Rpc3BsYXk6YmxvY2s7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9dm9jYWJseS1jYXJkLXNvdXJjZSAudm9jYWJseS10cmFuc2xhdGlvbi1tYXJnaW4tbGVmdHttYXJnaW4tbGVmdDoxMnB4fVwiO1xuXG5jb25zdCBWb2NhYmx5Q2FyZFNvdXJjZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBpc0dvb2dsZVRUU0xhbmd1YWdlKHRoaXMuY2FyZC5kYXRhLmxhbmd1YWdlKSAmJiAoaChcInZvY2FibHktcGxheS1zb3VuZFwiLCB7IHRleHQ6IHRoaXMuY2FyZC5kYXRhLnNvdXJjZSwgbGFuZ3VhZ2U6IHRoaXMuY2FyZC5kYXRhLmxhbmd1YWdlLCBwbGF5QXVkaW9Qcm9udW5jaWF0aW9uOiB0aGlzLnBsYXlBdWRpb1Byb251bmNpYXRpb24gfSkpLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcInZvY2FibHktZW1waGFzaXplZFwiIH0sIHRoaXMuY2FyZC5kYXRhLnNvdXJjZSksIHRoaXMuY2FyZC5kYXRhLmlwYSAmJiAoaChGcmFnbWVudCwgbnVsbCwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ2b2NhYmx5LWludmlzaWJsZS1zcGFjZVwiIH0sIFwiXFx1MDBBMFwiKSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ2b2NhYmx5LXRyYW5zbGF0aW9uLW1hcmdpbi1sZWZ0IHZvY2FibHktbXV0ZWRcIiB9LCBcIltcIiwgdGhpcy5jYXJkLmRhdGEuaXBhLCBcIl1cIikpKSwgdGhpcy5jYXJkLmRhdGEucGFydE9mU3BlZWNoICYmIChoKEZyYWdtZW50LCBudWxsLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImludmlzaWJsZS1zcGFjZSBcIiB9LCBcIlxcdTAwQTBcIiksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwidm9jYWJseS1tdXRlZCB2b2NhYmx5LXNtYWxsIHZvY2FibHktdHJhbnNsYXRpb24tbWFyZ2luLWxlZnRcIiB9LCB0aGlzLmNhcmQuZGF0YS5wYXJ0T2ZTcGVlY2gpKSkpKTtcbiAgfVxufTtcblZvY2FibHlDYXJkU291cmNlLnN0eWxlID0gdm9jYWJseUNhcmRTb3VyY2VDc3M7XG5cbmNvbnN0IHZvY2FibHlDbG9zZUJ1dHRvbkNzcyA9IFwidm9jYWJseS1jbG9zZS1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjVweDtoZWlnaHQ6MjVweDtsaW5lLWhlaWdodDoyNXB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0udm9jYWJseS1jbG9zZS1idXR0b257ZGlzcGxheTpibG9jazt3aWR0aDoyNXB4O2hlaWdodDoyNXB4O2xpbmUtaGVpZ2h0OjI1cHggIWltcG9ydGFudDtiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOm5vbmU7cGFkZGluZzo3cHg7Zm9udC1zaXplOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4yc30udm9jYWJseS1jbG9zZS1idXR0b246YWN0aXZle3RyYW5zZm9ybTpzY2FsZSgwLjgpfS52b2NhYmx5LWNsb3NlLXN2Z3t3aWR0aDoxMXB4O2hlaWdodDoxMXB4fS52b2NhYmx5LWNsb3NlLXN2Zy1wYXRoe3N0cm9rZS13aWR0aDowLjVweDtzdHJva2U6IzZhNmE2YX1cIjtcblxuY29uc3QgVm9jYWJseUNsb3NlQnV0dG9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjbG9zZVwiLCA3KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJidXR0b25cIiwgeyBjbGFzczogXCJ2b2NhYmx5LWNsb3NlLWJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmNsb3NlLmVtaXQoKSwgb25Nb3VzZURvd246IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpLCBvbk1vdXNlVXA6IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpIH0sIGgoXCJzdmdcIiwgeyBjbGFzczogXCJ2b2NhYmx5LWNsb3NlLXN2Z1wiLCB2aWV3Qm94OiBcIjAgMCAxMCAxMFwiLCBmaWxsOiBcIm5vbmVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBoKFwicGF0aFwiLCB7IGNsYXNzOiBcInZvY2FibHktY2xvc2Utc3ZnLXBhdGhcIiwgZDogXCJNMTAgMEwwIDEwTTAgMEwxMCAxMFwiIH0pKSkpKTtcbiAgfVxufTtcblZvY2FibHlDbG9zZUJ1dHRvbi5zdHlsZSA9IHZvY2FibHlDbG9zZUJ1dHRvbkNzcztcblxuY29uc3Qgdm9jYWJseUZpcnN0VHJhbnNsYXRpb25Db25ncmF0dWxhdGlvbkNzcyA9IFwiOmhvc3R7Zm9udC1mYW1pbHk6YXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtmb250LXNpemU6MTZweCAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudDtjb2xvcjojNmE2YTZhICFpbXBvcnRhbnQ7ZGlzcGxheTpibG9jazt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH06aG9zdCBwe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjEycHh9Omhvc3QgLnNtYWxse2ZvbnQtc2l6ZTo5MCV9Omhvc3QgYXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lICFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczowLjVweCAhaW1wb3J0YW50O3RleHQtdW5kZXJsaW5lLW9mZnNldDoycHggIWltcG9ydGFudDtjb2xvcjojMDA1MGZmICFpbXBvcnRhbnQ7YmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudH06aG9zdCBhOmhvdmVyLDpob3N0IGE6Zm9jdXMsOmhvc3QgYTphY3RpdmV7Y29sb3I6IzAwNDdlMyAhaW1wb3J0YW50fS5zdmd7bWF4LXdpZHRoOjEwMHB4O3dpZHRoOjEwMCV9XCI7XG5cbmNvbnN0IFZvY2FibHlGaXJzdFRyYW5zbGF0aW9uQ29uZ3JhdHVsYXRpb24gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInBcIiwgbnVsbCwgXCJZb3VyIGZpcnN0IGNhcmQgaXMgYWRkZWQgdG8geW91ciBjb2xsZWN0aW9uLlwiKSwgaChcInBcIiwgbnVsbCwgXCJZb3UgY2FuIHRyYW5zbGF0ZSB3b3JkcyBhbmQgYWRkIGNhcmRzIG9uIGFueSB3ZWJzaXRlLlwiKSwgaChcInBcIiwgbnVsbCwgXCJOb3csIHlvdSBjYW4gZ28gdG8gdGhlIG1vYmlsZSBhcHAgdG8gcmV2aWV3IGFuZCBzdHVkeSB5b3VyIGNhcmRzLlwiKSwgaChcInBcIiwgeyBjbGFzczogXCJzbWFsbFwiIH0sIFwiU2NhbiB0aGUgUVIgY29kZSB0byBpbnN0YWxsIHRoZSBhcHAuXCIpLCBoKFwicFwiLCBudWxsLCBoKFwic3ZnXCIsIHsgY2xhc3M6IFwic3ZnXCIsIHZlcnNpb246IFwiMS4xXCIsIGJhc2VQcm9maWxlOiBcImZ1bGxcIiwgdmlld0JveDogXCIwIDAgNDY0IDQ2NFwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiNDY0XCIsIGhlaWdodDogXCI0NjRcIiwgZmlsbDogXCIjZmZmZmZmXCIsIGN4OiBcIjBcIiwgY3k6IFwiMFwiIH0pLCBoKFwiZGVmc1wiLCBudWxsLCBoKFwicmVjdFwiLCB7IGlkOiBcInBcIiwgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIgfSkpLCBoKFwiZ1wiLCB7IGZpbGw6IFwiIzAwMDAwMFwiIH0sIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMFwiLCB5OiBcIjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiMTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiMzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiNDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiNjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiODBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiOTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiMTI4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMFwiLCB5OiBcIjE2MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjBcIiwgeTogXCIxNzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiMTkyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMFwiLCB5OiBcIjIyNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjBcIiwgeTogXCIyNDBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiMjU2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMFwiLCB5OiBcIjM1MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjBcIiwgeTogXCIzNjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiMzg0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMFwiLCB5OiBcIjQwMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjBcIiwgeTogXCI0MTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIwXCIsIHk6IFwiNDMyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMFwiLCB5OiBcIjQ0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2XCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2XCIsIHk6IFwiOTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNlwiLCB5OiBcIjE0NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2XCIsIHk6IFwiMjI0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTZcIiwgeTogXCIyNzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNlwiLCB5OiBcIjM1MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2XCIsIHk6IFwiNDQ4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzJcIiwgeTogXCIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzJcIiwgeTogXCIzMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjMyXCIsIHk6IFwiNDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMlwiLCB5OiBcIjY0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzJcIiwgeTogXCI5NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjMyXCIsIHk6IFwiMTc2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzJcIiwgeTogXCIyMDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMlwiLCB5OiBcIjIyNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjMyXCIsIHk6IFwiMjU2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzJcIiwgeTogXCIyODhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMlwiLCB5OiBcIjMyMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjMyXCIsIHk6IFwiMzUyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzJcIiwgeTogXCIzODRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMlwiLCB5OiBcIjQwMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjMyXCIsIHk6IFwiNDE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzJcIiwgeTogXCI0NDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0OFwiLCB5OiBcIjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0OFwiLCB5OiBcIjMyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDhcIiwgeTogXCI0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ4XCIsIHk6IFwiNjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0OFwiLCB5OiBcIjk2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDhcIiwgeTogXCIxMjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0OFwiLCB5OiBcIjE0NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ4XCIsIHk6IFwiMTYwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDhcIiwgeTogXCIxNzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0OFwiLCB5OiBcIjIwOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ4XCIsIHk6IFwiMjI0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDhcIiwgeTogXCIyODhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0OFwiLCB5OiBcIjMyMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ4XCIsIHk6IFwiMzUyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDhcIiwgeTogXCIzODRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0OFwiLCB5OiBcIjQwMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ4XCIsIHk6IFwiNDE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDhcIiwgeTogXCI0NDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI2NFwiLCB5OiBcIjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI2NFwiLCB5OiBcIjMyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNjRcIiwgeTogXCI0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjY0XCIsIHk6IFwiNjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI2NFwiLCB5OiBcIjk2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNjRcIiwgeTogXCIxMjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI2NFwiLCB5OiBcIjE2MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjY0XCIsIHk6IFwiMTc2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNjRcIiwgeTogXCIxOTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI2NFwiLCB5OiBcIjIwOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjY0XCIsIHk6IFwiMjQwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNjRcIiwgeTogXCIyNTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI2NFwiLCB5OiBcIjMwNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjY0XCIsIHk6IFwiMzIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNjRcIiwgeTogXCIzNTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI2NFwiLCB5OiBcIjM4NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjY0XCIsIHk6IFwiNDAwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNjRcIiwgeTogXCI0MTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI2NFwiLCB5OiBcIjQ0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjgwXCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjgwXCIsIHk6IFwiOTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI4MFwiLCB5OiBcIjEyOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjgwXCIsIHk6IFwiMTQ0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiODBcIiwgeTogXCIxNjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI4MFwiLCB5OiBcIjE3NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjgwXCIsIHk6IFwiMjA4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiODBcIiwgeTogXCIyMjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI4MFwiLCB5OiBcIjI1NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjgwXCIsIHk6IFwiMzUyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiODBcIiwgeTogXCI0NDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI5NlwiLCB5OiBcIjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI5NlwiLCB5OiBcIjE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiOTZcIiwgeTogXCIzMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjk2XCIsIHk6IFwiNDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI5NlwiLCB5OiBcIjY0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiOTZcIiwgeTogXCI4MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjk2XCIsIHk6IFwiOTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI5NlwiLCB5OiBcIjEyOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjk2XCIsIHk6IFwiMTYwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiOTZcIiwgeTogXCIxOTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI5NlwiLCB5OiBcIjIyNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjk2XCIsIHk6IFwiMjU2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiOTZcIiwgeTogXCIyODhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI5NlwiLCB5OiBcIjMyMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjk2XCIsIHk6IFwiMzUyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiOTZcIiwgeTogXCIzNjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI5NlwiLCB5OiBcIjM4NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjk2XCIsIHk6IFwiNDAwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiOTZcIiwgeTogXCI0MTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI5NlwiLCB5OiBcIjQzMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjk2XCIsIHk6IFwiNDQ4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTEyXCIsIHk6IFwiMTI4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTEyXCIsIHk6IFwiMTQ0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTEyXCIsIHk6IFwiMTYwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTEyXCIsIHk6IFwiMTc2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTEyXCIsIHk6IFwiMjQwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTEyXCIsIHk6IFwiMjg4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTEyXCIsIHk6IFwiMzA0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjEyOFwiLCB5OiBcIjE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxMjhcIiwgeTogXCI2NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjEyOFwiLCB5OiBcIjk2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMTI4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMTQ0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMTkyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMjI0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMjcyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMjg4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMzIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMzM2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMzUyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMzY4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiMzg0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiNDAwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTI4XCIsIHk6IFwiNDQ4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTQ0XCIsIHk6IFwiNjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNDRcIiwgeTogXCI4MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjExMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjEyOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjE0NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjE2MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjE3NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjE5MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjIyNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjI4OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjMyMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjMzNlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjM1MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjM2OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjM4NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0NFwiLCB5OiBcIjQ0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTYwXCIsIHk6IFwiMzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNjBcIiwgeTogXCI5NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjExMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjEyOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjE2MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjE3NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjE5MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjIwOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjIyNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjI3MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjMwNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjMyMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjM1MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjM2OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjM4NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjQwMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE2MFwiLCB5OiBcIjQzMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE3NlwiLCB5OiBcIjE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTc2XCIsIHk6IFwiODBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIxMTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIxNDRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIxNjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIxNzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIxOTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIyMjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIyNDBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIyNTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIyNzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIyODhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIzMjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCIzNTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCI0MDBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxNzZcIiwgeTogXCI0MTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxOTJcIiwgeTogXCIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTkyXCIsIHk6IFwiMTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxOTJcIiwgeTogXCIzMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjQ4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMTkyXCIsIHk6IFwiODBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIxOTJcIiwgeTogXCI5NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjExMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjE2MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjE3NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjE5MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjIwOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjI0MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjI3MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjI4OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjMyMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjMzNlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjM1MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjM2OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjM4NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE5MlwiLCB5OiBcIjQwMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjExMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjEyOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjE0NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjE2MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjE3NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjE5MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjIwOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjIyNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjI3MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjMyMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjM4NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjQzMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIwOFwiLCB5OiBcIjQ0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjIyNFwiLCB5OiBcIjY0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjI0XCIsIHk6IFwiOTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCIyMDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCIyNTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCIyNzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCIzMDRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCIzMjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCIzMzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCIzNTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCIzNjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCIzODRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyMjRcIiwgeTogXCI0NDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyNDBcIiwgeTogXCIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiMzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyNDBcIiwgeTogXCI2NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI0MFwiLCB5OiBcIjgwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiMTEyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiMTYwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiMTkyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiMjQwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiMjg4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiMzIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiMzY4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiNDE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjQwXCIsIHk6IFwiNDQ4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjU2XCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjU2XCIsIHk6IFwiMzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyNTZcIiwgeTogXCI0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjY0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjU2XCIsIHk6IFwiODBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyNTZcIiwgeTogXCI5NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjExMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjE0NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjE2MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjE3NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjE5MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjIwOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjIyNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjI1NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjI3MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjMyMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI1NlwiLCB5OiBcIjQzMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyNzJcIiwgeTogXCI0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjEyOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjE0NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjE2MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjE3NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjI4OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjMyMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjMzNlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjM1MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjM2OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjM4NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjQwMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjQxNlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjQzMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI3MlwiLCB5OiBcIjQ0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI4OFwiLCB5OiBcIjE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjg4XCIsIHk6IFwiMzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCI0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjI4OFwiLCB5OiBcIjY0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMjg4XCIsIHk6IFwiOTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCIxMTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCIxNDRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCIxNjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCIxNzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCIyNDBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCIyNzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCIzMzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCIzNjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCIzODRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCI0MDBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIyODhcIiwgeTogXCI0MzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIxNlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjMwNFwiLCB5OiBcIjMyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzA0XCIsIHk6IFwiNjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIxMTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIxMjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIxNDRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIxNzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIyMjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIyNDBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIyNTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIyNzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIyODhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIzMjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIzMzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIzNTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIzNjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCIzODRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCI0MDBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCI0MTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCI0MzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMDRcIiwgeTogXCI0NDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIxNlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjMyMFwiLCB5OiBcIjgwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzIwXCIsIHk6IFwiOTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIxMTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIxNzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIxOTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIyMDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIyMjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIyNTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIyNzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIyODhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIzMDRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIzMjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIzMzZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIzNTJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIzNjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCIzODRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCI0MDBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMjBcIiwgeTogXCI0NDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCIxMjhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCIxNjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCIyNzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCIyODhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCIzMDRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCIzMjBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCIzODRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCI0MTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCI0MzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzMzZcIiwgeTogXCI0NDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzNTJcIiwgeTogXCIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzUyXCIsIHk6IFwiMTZcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzNTJcIiwgeTogXCIzMlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjM1MlwiLCB5OiBcIjQ4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzUyXCIsIHk6IFwiNjRcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzNTJcIiwgeTogXCI4MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjM1MlwiLCB5OiBcIjk2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzUyXCIsIHk6IFwiMTkyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzUyXCIsIHk6IFwiMjA4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzUyXCIsIHk6IFwiMjQwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzUyXCIsIHk6IFwiMzIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzUyXCIsIHk6IFwiMzUyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzUyXCIsIHk6IFwiMzg0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzUyXCIsIHk6IFwiNDQ4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjM2OFwiLCB5OiBcIjk2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMTQ0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMTc2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMTkyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMjA4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMjI0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMjU2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMzA0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMzIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiMzg0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzY4XCIsIHk6IFwiNDE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjM4NFwiLCB5OiBcIjMyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiNDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCIzODRcIiwgeTogXCI2NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjM4NFwiLCB5OiBcIjk2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMTI4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMTQ0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMTYwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMTc2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMjA4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMjQwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMjcyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMzIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMzM2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMzUyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMzY4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiMzg0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiNDE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiMzg0XCIsIHk6IFwiNDQ4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQwMFwiLCB5OiBcIjMyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiNDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0MDBcIiwgeTogXCI2NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQwMFwiLCB5OiBcIjk2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMTc2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMjA4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMjU2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMjg4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMzA0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMzIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMzM2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMzUyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiMzg0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiNDMyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDAwXCIsIHk6IFwiNDQ4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQxNlwiLCB5OiBcIjMyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiNDhcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0MTZcIiwgeTogXCI2NFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQxNlwiLCB5OiBcIjk2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMTI4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMTQ0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMTYwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMjA4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMjI0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMjQwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMjcyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMzA0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiMzIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiNDE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDE2XCIsIHk6IFwiNDMyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDMyXCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQzMlwiLCB5OiBcIjk2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDMyXCIsIHk6IFwiMTI4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDMyXCIsIHk6IFwiMTQ0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDMyXCIsIHk6IFwiMjA4XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDMyXCIsIHk6IFwiMjcyXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDMyXCIsIHk6IFwiMzIwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDMyXCIsIHk6IFwiNDAwXCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDMyXCIsIHk6IFwiNDE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDQ4XCIsIHk6IFwiMFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjE2XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDQ4XCIsIHk6IFwiMzJcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0NDhcIiwgeTogXCI0OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjY0XCIgfSksIGgoXCJyZWN0XCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHg6IFwiNDQ4XCIsIHk6IFwiODBcIiB9KSwgaChcInJlY3RcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI0NDhcIiwgeTogXCI5NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjEyOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjE3NlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjE5MlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjIwOFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjIyNFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjI0MFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjI4OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjM2OFwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjQxNlwiIH0pLCBoKFwicmVjdFwiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjQ0OFwiLCB5OiBcIjQzMlwiIH0pKSkpLCBoKFwicFwiLCB7IGNsYXNzOiBcInNtYWxsXCIgfSwgXCJPciBvcGVuIHRoaXMgVVJMXCIsICcgJywgaChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vdm9jYWJseS5wcm8vYXBwLmh0bWxcIiwgdGFyZ2V0OiAnX2JsYW5rJyB9LCBcInZvY2FibHkucHJvL2FwcC5odG1sXCIpLCAnICcsIGgoXCJiclwiLCBudWxsKSwgXCJvbiB5b3UgbW9iaWxlIHRvIGluc3RhbGwgdGhlIGFwcC5cIikpKTtcbiAgfVxufTtcblZvY2FibHlGaXJzdFRyYW5zbGF0aW9uQ29uZ3JhdHVsYXRpb24uc3R5bGUgPSB2b2NhYmx5Rmlyc3RUcmFuc2xhdGlvbkNvbmdyYXR1bGF0aW9uQ3NzO1xuXG5jb25zdCB2b2NhYmx5SWNvbkFkZENzcyA9IFwiOmhvc3R7LS1sb2dvLWNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0uc3Zne2hlaWdodDoxMDAlO3dpZHRoOmF1dG87ZmlsbDojMDA1MGZmfVwiO1xuXG5jb25zdCBWb2NhYmx5SWNvbkFkZCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwic3ZnXCIsIHsgY2xhc3M6IFwic3ZnXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIgfSwgaChcInBhdGhcIiwgeyBkOiBcIk0xNywxM0gxM1YxN0gxMVYxM0g3VjExSDExVjdIMTNWMTFIMTdNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaXCIgfSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5SWNvbkFkZC5zdHlsZSA9IHZvY2FibHlJY29uQWRkQ3NzO1xuXG5jb25zdCB2b2NhYmx5SWNvbkFycm93UmlnaHRDc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9LnN2Z3toZWlnaHQ6MTAwJTt3aWR0aDphdXRvO2ZpbGw6IzZhNmE2YX1cIjtcblxuY29uc3QgVm9jYWJseUljb25BcnJvd1JpZ2h0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJzdmdcIiwgeyBjbGFzczogXCJzdmdcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiB9LCBoKFwidGl0bGVcIiwgbnVsbCwgXCJtZW51LXJpZ2h0XCIpLCBoKFwicGF0aFwiLCB7IGQ6IFwiTTEwLDE3TDE1LDEyTDEwLDdWMTdaXCIgfSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5SWNvbkFycm93UmlnaHQuc3R5bGUgPSB2b2NhYmx5SWNvbkFycm93UmlnaHRDc3M7XG5cbmNvbnN0IHZvY2FibHlJY29uRXJyb3JDc3MgPSBcIjpob3N0ey0tbG9nby1jb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7dmVydGljYWwtYWxpZ246bWlkZGxlO3Zpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fS5zdmd7aGVpZ2h0OjEwMCU7d2lkdGg6YXV0bztmaWxsOiNmZjVlNWV9XCI7XG5cbmNvbnN0IFZvY2FibHlJY29uRXJyb3IgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInN2Z1wiLCB7IGNsYXNzOiBcInN2Z1wiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBoZWlnaHQ6IFwiMjRweFwiLCB2aWV3Qm94OiBcIjAgLTk2MCA5NjAgOTYwXCIsIHdpZHRoOiBcIjI0cHhcIiB9LCBoKFwicGF0aFwiLCB7IGQ6IFwiTTQ4MC0yODBxMTcgMCAyOC41LTExLjVUNTIwLTMyMHEwLTE3LTExLjUtMjguNVQ0ODAtMzYwcS0xNyAwLTI4LjUgMTEuNVQ0NDAtMzIwcTAgMTcgMTEuNSAyOC41VDQ4MC0yODBabS00MC0xNjBoODB2LTI0MGgtODB2MjQwWm00MCAzNjBxLTgzIDAtMTU2LTMxLjVUMTk3LTE5N3EtNTQtNTQtODUuNS0xMjdUODAtNDgwcTAtODMgMzEuNS0xNTZUMTk3LTc2M3E1NC01NCAxMjctODUuNVQ0ODAtODgwcTgzIDAgMTU2IDMxLjVUNzYzLTc2M3E1NCA1NCA4NS41IDEyN1Q4ODAtNDgwcTAgODMtMzEuNSAxNTZUNzYzLTE5N3EtNTQgNTQtMTI3IDg1LjVUNDgwLTgwWm0wLTgwcTEzNCAwIDIyNy05M3Q5My0yMjdxMC0xMzQtOTMtMjI3dC0yMjctOTNxLTEzNCAwLTIyNyA5M3QtOTMgMjI3cTAgMTM0IDkzIDIyN3QyMjcgOTNabTAtMzIwWlwiIH0pKSkpO1xuICB9XG59O1xuVm9jYWJseUljb25FcnJvci5zdHlsZSA9IHZvY2FibHlJY29uRXJyb3JDc3M7XG5cbmNvbnN0IHZvY2FibHlJY29uUGxheUNpcmNsZUNzcyA9IFwiOmhvc3R7LS1sb2dvLWNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MThweDtoZWlnaHQ6MThweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9LnN2Z3toZWlnaHQ6MTAwJTt3aWR0aDphdXRvO2ZpbGw6I2JhYmFiYX1cIjtcblxuY29uc3QgVm9jYWJseUljb25QbGF5Q2lyY2xlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJzdmdcIiwgeyB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCBjbGFzczogXCJzdmdcIiB9LCBoKFwicGF0aFwiLCB7IGQ6IFwiTTEwLDE2LjVWNy41TDE2LDEyTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIH0pKSkpO1xuICB9XG59O1xuVm9jYWJseUljb25QbGF5Q2lyY2xlLnN0eWxlID0gdm9jYWJseUljb25QbGF5Q2lyY2xlQ3NzO1xuXG5jb25zdCB2b2NhYmx5SWNvblJlbW92ZUNzcyA9IFwiOmhvc3R7LS1sb2dvLWNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0uc3Zne2hlaWdodDoxMDAlO3dpZHRoOmF1dG87ZmlsbDojZmY1ZTVlfVwiO1xuXG5jb25zdCBWb2NhYmx5SWNvblJlbW92ZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwic3ZnXCIsIHsgY2xhc3M6IFwic3ZnXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIgfSwgaChcInBhdGhcIiwgeyBkOiBcIk0xMiwyQzE3LjUzLDIgMjIsNi40NyAyMiwxMkMyMiwxNy41MyAxNy41MywyMiAxMiwyMkM2LjQ3LDIyIDIsMTcuNTMgMiwxMkMyLDYuNDcgNi40NywyIDEyLDJNMTUuNTksN0wxMiwxMC41OUw4LjQxLDdMNyw4LjQxTDEwLjU5LDEyTDcsMTUuNTlMOC40MSwxN0wxMiwxMy40MUwxNS41OSwxN0wxNywxNS41OUwxMy40MSwxMkwxNyw4LjQxTDE1LjU5LDdaXCIgfSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5SWNvblJlbW92ZS5zdHlsZSA9IHZvY2FibHlJY29uUmVtb3ZlQ3NzO1xuXG5jb25zdCB2b2NhYmx5SWNvblNwaW5Dc3MgPSBcIjpob3N0e3Zpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fS5zcGlubmVyX1ZwRWV7YW5pbWF0aW9uOnNwaW5uZXJfdlh1NiAxLjJzIGN1YmljLWJlemllcigwLjUyLCAwLjYsIDAuMjUsIDAuOTkpIGluZmluaXRlfS5zcGlubmVyX2VhaHB7YW5pbWF0aW9uLWRlbGF5OjAuNHN9LnNwaW5uZXJfZjdZMnthbmltYXRpb24tZGVsYXk6MC44c31Aa2V5ZnJhbWVzIHNwaW5uZXJfdlh1NnswJXtyOjA7b3BhY2l0eToxfTEwMCV7cjoxMXB4O29wYWNpdHk6MH19XCI7XG5cbmNvbnN0IFZvY2FibHlJY29uU3BpbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwic3ZnXCIsIHsgd2lkdGg6IFwiMjRcIiwgaGVpZ2h0OiBcIjI0XCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgaChcImNpcmNsZVwiLCB7IGNsYXNzOiBcInNwaW5uZXJfVnBFZVwiLCBjeDogXCIxMlwiLCBjeTogXCIxMlwiLCByOiBcIjBcIiB9KSwgaChcImNpcmNsZVwiLCB7IGNsYXNzOiBcInNwaW5uZXJfVnBFZSBzcGlubmVyX2VhaHBcIiwgY3g6IFwiMTJcIiwgY3k6IFwiMTJcIiwgcjogXCIwXCIgfSksIGgoXCJjaXJjbGVcIiwgeyBjbGFzczogXCJzcGlubmVyX1ZwRWUgc3Bpbm5lcl9mN1kyXCIsIGN4OiBcIjEyXCIsIGN5OiBcIjEyXCIsIHI6IFwiMFwiIH0pKSkpO1xuICB9XG59O1xuVm9jYWJseUljb25TcGluLnN0eWxlID0gdm9jYWJseUljb25TcGluQ3NzO1xuXG5jb25zdCB2b2NhYmx5SWNvblZvbHVtZU1lZGl1bUNzcyA9IFwiOmhvc3R7LS1sb2dvLWNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MThweDtoZWlnaHQ6MThweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9LnN2Z3toZWlnaHQ6MTAwJTt3aWR0aDphdXRvO2ZpbGw6I2JhYmFiYX1cIjtcblxuY29uc3QgVm9jYWJseUljb25Wb2x1bWVNZWRpdW0gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInN2Z1wiLCB7IHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIGNsYXNzOiBcInN2Z1wiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiIH0sIGgoXCJwYXRoXCIsIHsgZDogXCJNNSw5VjE1SDlMMTQsMjBWNEw5LDlNMTguNSwxMkMxOC41LDEwLjIzIDE3LjUsOC43MSAxNiw3Ljk3VjE2QzE3LjUsMTUuMjkgMTguNSwxMy43NiAxOC41LDEyWlwiIH0pKSkpO1xuICB9XG59O1xuVm9jYWJseUljb25Wb2x1bWVNZWRpdW0uc3R5bGUgPSB2b2NhYmx5SWNvblZvbHVtZU1lZGl1bUNzcztcblxuY29uc3Qgdm9jYWJseUxhbmd1YWdlQ3NzID0gXCI6aG9zdHtmb250LWZhbWlseTphcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDtkaXNwbGF5OmJsb2NrO3Zpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fS5jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnB7bWFyZ2luLWJvdHRvbToxNnB4fS5oMXtmb250LXNpemU6MjZweDttYXJnaW4tYm90dG9tOjE2cHh9LmJ1dHRvbntmb250LWZhbWlseTphcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiMwMDUwZmY7Y29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O2JvcmRlcjpub25lO3BhZGRpbmc6OHB4O2ZvbnQ6aW5oZXJpdDtmb250LXdlaWdodDo1MDA7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoyMHB4O3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmNhbGMoMTAwJSAtIDZweCAqIDIpO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAyMDBtczttYXJnaW46MCA2cHggOXB4O2JveC1zaGFkb3c6MCAzcHggNnB4IHJnYmEoMCwgODAsIDI1NSwgMC4yNSk7dGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudH0uYnV0dG9uOmhvdmVyLC5idXR0b246Zm9jdXN7YmFja2dyb3VuZDojMDA0N2UzfS5idXR0b246YWN0aXZle2JhY2tncm91bmQ6IzAwNDdlMztib3gtc2hhZG93Omluc2V0IDBweCAwcHggMTVweCByZ2JhKDMsIDM2LCAxMDgsIDAuNCl9c2VsZWN0e2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDtmb250LXNpemU6MTQuNHB4ICFpbXBvcnRhbnQ7cGFkZGluZzoxMHB4IDE0cHggIWltcG9ydGFudDtib3JkZXI6MC41cHggc29saWQgI2JhYmFiYSAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6OHB4ICFpbXBvcnRhbnQ7YXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7YmFja2dyb3VuZDojZmJmYmZiIHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB3aWR0aD1cXFwiMTFcXFwiIGhlaWdodD1cXFwiN1xcXCIgdmlld0JveD1cXFwiMCAwIDExIDdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEwIDEgNSA2IDEgMVxcXCIgc3Ryb2tlPVxcXCJyZ2IoMTA5LCAxMDksIDEwOSlcXFwiIHN0cm9rZS13aWR0aD1cXFwiLjVcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIi8+PC9zdmc+Jykgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCAxNHB4IHRvcCA1MCUgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtoZWlnaHQ6YXV0byAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OmluaGVyaXQgIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtib3gtc2l6aW5nOmJvcmRlci1ib3ggIWltcG9ydGFudDt3aWR0aDoxMDAlICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IFZvY2FibHlMYW5ndWFnZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jb25maXJtID0gY3JlYXRlRXZlbnQodGhpcywgXCJjb25maXJtXCIsIDcpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImRhdGEtdGVzdFwiOiBcImxhbmd1YWdlXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRhaW5lclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoMSBwXCIgfSwgXCJJIHN0dWR5XCIpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicFwiIH0sIGgoXCJzZWxlY3RcIiwgeyBcImRhdGEtdGVzdFwiOiBcInNvdXJjZS1sYW5ndWFnZS1zZWxlY3RvclwiLCByZWY6IChlbCkgPT4gKHRoaXMuc291cmNlTGFuZ3VhZ2VTZWxlY3QgPSBlbCkgfSwgT2JqZWN0LmVudHJpZXMobGFuZ3VhZ2VMaXN0KS5tYXAoKFtjb2RlLCBuYW1lXSkgPT4gKGgoXCJvcHRpb25cIiwgeyBzZWxlY3RlZDogdGhpcy5zb3VyY2VMYW5ndWFnZSA9PT0gY29kZSwgdmFsdWU6IGNvZGUgfSwgbmFtZSkpKSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaDEgcFwiIH0sIFwiSSBzcGVha1wiKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBcIiB9LCBoKFwic2VsZWN0XCIsIHsgXCJkYXRhLXRlc3RcIjogXCJ0YXJnZXQtbGFuZ3VhZ2Utc2VsZWN0b3JcIiwgcmVmOiAoZWwpID0+ICh0aGlzLnRhcmdldExhbmd1YWdlU2VsZWN0ID0gZWwpIH0sIE9iamVjdC5lbnRyaWVzKGxhbmd1YWdlTGlzdCkubWFwKChbY29kZSwgbmFtZV0pID0+IChoKFwib3B0aW9uXCIsIHsgc2VsZWN0ZWQ6IHRoaXMudGFyZ2V0TGFuZ3VhZ2UgPT09IGNvZGUsIHZhbHVlOiBjb2RlIH0sIG5hbWUpKSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJ1dHRvbi1jb250YWluZXJcIiB9LCBoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMuY29uZmlybS5lbWl0KHtcbiAgICAgICAgc291cmNlTGFuZ3VhZ2U6IHRoaXMuc291cmNlTGFuZ3VhZ2VTZWxlY3QudmFsdWUsXG4gICAgICAgIHRhcmdldExhbmd1YWdlOiB0aGlzLnRhcmdldExhbmd1YWdlU2VsZWN0LnZhbHVlLFxuICAgICAgfSksIFwiZGF0YS10ZXN0XCI6IFwic3Vic2NyaWJlLWJ1dHRvblwiLCBkaXNhYmxlZDogdGhpcy53YWl0aW5nIH0sIHRoaXMud2FpdGluZyA/ICdTYXZpbmcuLi4nIDogJ1NhdmUnKSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5TGFuZ3VhZ2Uuc3R5bGUgPSB2b2NhYmx5TGFuZ3VhZ2VDc3M7XG5cbmNvbnN0IHZvY2FibHlMb2dvQ3NzID0gXCI6aG9zdHstLWxvZ28tY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDowO3Zpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fS5zdmd7aGVpZ2h0OjEwMCU7d2lkdGg6YXV0b30uc3ZnIC5wcmltYXJ5e2ZpbGw6IzAwNTBmZn1cIjtcblxuY29uc3QgVm9jYWJseUxvZ28gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInN2Z1wiLCB7IHdpZHRoOiBcIjEwODZcIiwgaGVpZ2h0OiBcIjI1OFwiLCB2aWV3Qm94OiBcIjAgMCAxMDg2IDI1OFwiLCBjbGFzczogXCJzdmdcIiwgZmlsbDogXCJub25lXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgaChcInBhdGhcIiwgeyBkOiBcIk0zNjMuODEzIDE5OS4wNUwzMjMuMzIgNTAuNzU3OEgzNDYuOTkzTDM3OC40NTMgMTc4LjhIMzc5LjY5OUw0MTEuMTU5IDUwLjc1NzhINDM0LjgzMUwzOTQuMzM4IDE5OS4wNUgzNjMuODEzWlwiLCBmaWxsOiBcIiMyMTIxMjFcIiB9KSwgaChcInBhdGhcIiwgeyBkOiBcIk00OTQuOTQ4IDIwMS44NTNDNDgyLjQ4OCAyMDEuODUzIDQ3Mi44MzIgMTk5LjM2MSA0NjUuNjY4IDE5NC4wNjVDNDU4LjUwNCAxODguNzY5IDQ1My41MiAxODEuMjkyIDQ1MC40MDYgMTcxLjYzNEM0NDcuMjkxIDE2MS45NzcgNDQ1LjczMyAxNTAuNDUgNDQ1LjczMyAxMzcuMDU0QzQ0NS43MzMgMTIzLjY1OCA0NDcuMjkxIDExMi4xMzEgNDUwLjQwNiAxMDIuNDczQzQ1My41MiA5Mi44MTUyIDQ1OC41MDQgODUuMzM4NSA0NjUuNjY4IDgwLjA0MjNDNDcyLjgzMiA3NC43NDYyIDQ4Mi40ODggNzIuMjUzOSA0OTQuOTQ4IDcyLjI1MzlDNTA3LjQwNyA3Mi4yNTM5IDUxNy4wNjMgNzQuNzQ2MiA1MjQuMjI3IDgwLjA0MjNDNTMxLjM5MSA4NS4zMzg1IDUzNi4zNzUgOTIuODE1MiA1MzkuMTc4IDEwMi40NzNDNTQyLjI5MyAxMTIuMTMxIDU0My41MzkgMTIzLjY1OCA1NDMuNTM5IDEzNy4wNTRDNTQzLjUzOSAxNTAuNDUgNTQxLjk4MiAxNjEuOTc3IDUzOS4xNzggMTcxLjYzNEM1MzYuMzc1IDE4MS4yOTIgNTMxLjA4IDE4OC43NjkgNTI0LjIyNyAxOTQuMDY1QzUxNy4wNjMgMTk5LjM2MSA1MDcuNDA3IDIwMS44NTMgNDk0Ljk0OCAyMDEuODUzWk00OTQuOTQ4IDE4My43ODRDNDk5LjkzMSAxODMuNzg0IDUwMy45ODEgMTgzLjE2MSA1MDcuNDA3IDE4MS45MTVDNTEwLjgzMyAxODAuNjY5IDUxMy4zMjUgMTc4LjQ4OCA1MTUuNTA2IDE3NS4wNjFDNTE3LjY4NiAxNzEuOTQ2IDUxOC45MzIgMTY2Ljk2MSA1MTkuODY2IDE2MS4wNDJDNTIwLjQ4OSAxNTQuODExIDUyMS4xMTIgMTQ3LjAyMyA1MjEuMTEyIDEzNy4wNTRDNTIxLjExMiAxMjcuMDg1IDUyMC44MDEgMTE5LjI5NiA1MTkuODY2IDExMy4wNjVDNTE4LjkzMiAxMDYuODM0IDUxNy42ODYgMTAyLjE2MSA1MTUuNTA2IDk5LjA0NkM1MTMuNjM3IDk1LjkzMDcgNTEwLjgzMyA5My40Mzg1IDUwNy40MDcgOTIuMTkyNEM1MDMuOTgxIDkwLjk0NjIgNDk5LjkzMSA5MC4zMjMyIDQ5NC45NDggOTAuMzIzMkM0ODkuOTY0IDkwLjMyMzIgNDg1LjYwMyA5MC45NDYyIDQ4Mi4xNzcgOTIuMTkyNEM0NzguNzUxIDkzLjQzODUgNDc2LjI1OSA5NS42MTkxIDQ3NC4wNzggOTkuMDQ2QzQ3MS44OTggMTAyLjE2MSA0NzAuNjUyIDEwNy4xNDYgNDY5LjcxOCAxMTMuMDY1QzQ2OC43ODMgMTE5LjI5NiA0NjguNDcyIDEyNy4wODUgNDY4LjQ3MiAxMzcuMDU0QzQ2OC40NzIgMTQ3LjAyMyA0NjguNzgzIDE1NC44MTEgNDY5LjcxOCAxNjEuMDQyQzQ3MC42NTIgMTY3LjI3MyA0NzEuODk4IDE3MS45NDYgNDc0LjA3OCAxNzUuMDYxQzQ3Ni4yNTkgMTc4LjE3NyA0NzguNzUxIDE4MC42NjkgNDgyLjE3NyAxODEuOTE1QzQ4NS42MDMgMTgzLjE2MSA0ODkuOTY0IDE4My43ODQgNDk0Ljk0OCAxODMuNzg0WlwiLCBmaWxsOiBcIiMyMTIxMjFcIiB9KSwgaChcInBhdGhcIiwgeyBkOiBcIk02MjIuMDMzIDIwMS44NTNDNjEyLjA2NiAyMDEuODUzIDYwMy4wMzMgMTk5LjY3MyA1OTUuMjQ2IDE5NS4zMTFDNTg3LjQ1OSAxOTAuOTUgNTgxLjU0IDE4My43ODQgNTc3LjE4IDE3NC4xMjZDNTcyLjgxOSAxNjQuNDY5IDU3MC42MzggMTUyLjAwNyA1NzAuNjM4IDEzNi40M0M1NzAuNjM4IDEyMy42NTcgNTcyLjE5NiAxMTMuMDY1IDU3NC45OTkgMTA0LjY1NEM1NzcuODAzIDk2LjI0MjMgNTgxLjg1MiA4OS42OTk5IDU4Ny4xNDcgODUuMDI2OEM1OTIuMTMxIDgwLjM1MzcgNTk4LjM2IDc2LjkyNyA2MDUuMjEzIDc1LjA1NzhDNjEyLjA2NiA3My4xODg1IDYxOS4yMyA3MS45NDI0IDYyNy4wMTcgNzEuOTQyNEM2MzMuMjQ3IDcxLjk0MjQgNjM5LjE2NSA3Mi4yNTQgNjQ1LjA4MyA3My4xODg2QzY1MS4wMDEgNzQuMTIzMiA2NTUuNjczIDc0Ljc0NjEgNjU5LjEgNzUuNjgwN0w2NTYuNjA4IDkzLjQzODVDNjUzLjQ5MyA5My4xMjcgNjQ4LjgyMSA5Mi41MDM2IDY0Mi45MDMgOTEuNTY5QzYzNi42NzMgOTAuOTQ1OSA2MzAuNDQzIDkwLjMyMzIgNjI0LjIxNCA5MC4zMjMyQzYxOC45MTggOTAuMzIzMiA2MTQuNTU4IDkwLjYzNDQgNjExLjEzMSA5MS41NjlDNjA4LjAxNiA5Mi41MDM2IDYwNS4yMTMgOTMuNzQ5OSA2MDMuMzQ0IDk1LjYxOTFDNjAwLjU0MSA5OC40MjMgNTk4LjM2IDEwMy40MDggNTk2LjgwMyAxMTAuNTczQzU5NS4yNDYgMTE3LjczOCA1OTQuMzExIDEyNi40NjEgNTk0LjMxMSAxMzYuNzQyQzU5NC4zMTEgMTQ2LjA4OCA1OTQuOTM0IDE1My44NzcgNTk2LjQ5MiAxNTkuNzk2QzU5OC4wNDkgMTY1LjcxNSA1OTkuNjA2IDE3MC4wNzcgNjAxLjQ3NSAxNzIuODgxQzYwMy4zNDQgMTc1Ljk5NiA2MDUuMjEzIDE3Ny44NjUgNjA2Ljc3MSAxNzkuMTExQzYwNy43MDUgMTc5LjczNCA2MDkuMjYyIDE4MC42NjkgNjExLjEzMSAxODEuMjkyQzYxMyAxODEuOTE1IDYxNS44MDQgMTgyLjUzOCA2MTkuMjMgMTgyLjUzOEM2MjIuOTY4IDE4Mi41MzggNjI3LjAxNyAxODEuOTE1IDYzMS4zNzggMTgwLjk4QzYzNS43MzkgMTgwLjA0NiA2MzkuNDc2IDE3OC44IDY0My4yMTQgMTc3LjU1NEM2NDYuOTUyIDE3Ni4zMDcgNjUxLjAwMSAxNzQuNzQ5IDY1NS42NzMgMTcyLjU2OUw2NjIuMjE1IDE4OS4zOTJDNjU1LjY3MyAxOTMuMTMgNjQ5LjQ0NCAxOTYuMjQ2IDY0My41MjYgMTk4LjExNUM2MzcuNjA3IDE5OS45ODQgNjMwLjEzMiAyMDEuODUzIDYyMi4wMzMgMjAxLjg1M1pcIiwgZmlsbDogXCIjMjEyMTIxXCIgfSksIGgoXCJwYXRoXCIsIHsgZDogXCJNNzE0Ljg1NSAyMDEuODUzQzcwOC4zMTQgMjAxLjg1MyA3MDIuMzk2IDIwMC4yOTYgNjk3LjQxMiAxOTcuMThDNjkyLjExNyAxOTQuMDY1IDY4OC4wNjggMTg5LjM5MiA2ODUuMjY0IDE4My40NzNDNjgyLjQ2MSAxNzcuNTUzIDY4MC45MDQgMTcwLjM4OCA2ODAuOTA0IDE2MS45NzdDNjgwLjkwNCAxNTEuNjk2IDY4My4wODQgMTQzLjkwNyA2ODcuMTMzIDEzNy45ODhDNjkxLjQ5NCAxMzIuMzggNjk3LjQxMiAxMjguMDE5IDcwNS4xOTkgMTI1LjUyN0M3MTIuOTg2IDEyMy4wMzQgNzIyLjAxOSAxMjEuNzg4IDczMi4yOTggMTIxLjc4OEg3NTIuODU2Qzc1Mi44NTYgMTE0LjkzNSA3NTIuNTQ1IDEwOS4zMjcgNzUyLjIzMyAxMDQuOTY1Qzc1MS45MjIgMTAwLjYwNCA3NTAuNjc2IDk3LjE3NyA3NDkuMTE5IDk0Ljk5NjJDNzQ3Ljg3MyA5My40Mzg1IDc0Ni4zMTUgOTIuMTkyMSA3NDQuMTM1IDkxLjU2OUM3NDEuOTU0IDkwLjk0NTkgNzM5LjE1MSA5MC42MzQ2IDczNS43MjUgOTAuNjM0NkM3MzAuNDMgOTAuNjM0NiA3MjQuODIzIDkxLjI1NzcgNzE5LjUyOCA5Mi4xOTIzQzcxNC4yMzIgOTMuMTI2OSA3MDkuMjQ5IDk0LjM3MyA3MDQuODg4IDk1LjYxOTFDNzAwLjUyNyA5Ni44NjUzIDY5NS41NDMgOTguNzM0NCA2OTAuMjQ4IDEwMC42MDRMNjg0LjAxOCA4My43ODA2QzY4OS42MjUgODEuMjg4MyA2OTQuNjA5IDc5LjQxOTQgNjk5LjI4MSA3Ny44NjE3QzcwMy45NTMgNzYuMzA0IDcwOS4yNDkgNzUuMDU3NyA3MTUuMTY3IDczLjgxMTVDNzIxLjA4NSA3Mi41NjU0IDcyNy4wMDMgNzEuOTQyNCA3MzMuNTQ0IDcxLjk0MjRDNzQzLjgyMyA3MS45NDI0IDc1Mi4yMzMgNzMuODExNCA3NTguMTUyIDc3LjU0OThDNzY0LjM4MSA4MS4yODgzIDc2OC43NDIgODYuNTg0NyA3NzEuMjM0IDkzLjQzODVDNzc0LjAzNyAxMDAuMjkyIDc3NS4yODMgMTA4LjM5MiA3NzUuMjgzIDExNy43MzhWMTk5LjA0OUg3NjAuMzMyTDc1Ny4yMTcgMTg1Ljk2NUg3NTUuOTcxQzc1NS4wMzcgMTg2LjU4OCA3NTMuMTY4IDE4Ny44MzQgNzUwLjY3NiAxODkuNzAzQzc0OC4xODQgMTkxLjI2MSA3NDUuMDY5IDE5My4xMyA3NDEuMzMxIDE5NUM3MzcuNTk0IDE5Ni44NjkgNzMzLjU0NCAxOTguNDI2IDcyOS4xODQgMTk5Ljk4NEM3MjQuNTExIDIwMS4yMyA3MTkuODM5IDIwMS44NTMgNzE0Ljg1NSAyMDEuODUzWk03MTkuODM5IDE4Mi44NUM3MjQuNTExIDE4Mi44NSA3MjkuMTg0IDE4Mi4yMjcgNzMzLjU0NCAxODAuNjY5QzczNy45MDUgMTc5LjExMSA3NDEuOTU0IDE3Ny41NTQgNzQ1LjM4MSAxNzUuOTk2Qzc0OC44MDcgMTc0LjQzOCA3NTAuOTg3IDE3My4xOTIgNzUyLjU0NSAxNzIuMjU3VjE0MS4xMDRDNzUxLjI5OSAxNDAuNzkyIDc0OC44MDcgMTQwLjQ4MSA3NDUuMDY5IDE0MC4xNjlDNzQxLjMzMSAxMzkuODU4IDczNi42NTkgMTM5LjU0NiA3MzEuMDUyIDEzOS41NDZDNzE4LjkwNSAxMzkuNTQ2IDcxMS40MjkgMTQwLjc5MiA3MDguNjI2IDE0My4yODVDNzA3LjA2OCAxNDQuNTMxIDcwNS44MjIgMTQ2LjcxMSA3MDQuODg4IDE0OS44MjdDNzAzLjk1MyAxNTIuOTQyIDcwMy42NDIgMTU2Ljk5MiA3MDMuNjQyIDE2MS42NjVDNzAzLjY0MiAxNjkuMTQyIDcwNC44ODggMTc0LjQzOCA3MDcuMzggMTc3Ljg2NUM3MDkuODcyIDE4MS4yOTIgNzEzLjkyMSAxODIuODUgNzE5LjgzOSAxODIuODVaXCIsIGZpbGw6IFwiIzIxMjEyMVwiIH0pLCBoKFwicGF0aFwiLCB7IGQ6IFwiTTg2MC42MyAyMDEuODU0Qzg1Ni41OCAyMDEuODU0IDg1MS41OTcgMjAxLjU0MiA4NDUuNjc4IDIwMC42MDdDODM5Ljc2IDE5OS42NzMgODMzLjg0MiAxOTguNzM4IDgyNy42MTIgMTk3LjQ5MkM4MjEuNjk0IDE5Ni4yNDYgODE2LjM5OSAxOTQuNjg4IDgxMS43MjcgMTkzLjQ0MlYzOC42MDc5SDgzNC4xNTRWNzYuNjE1N0M4MzUuNzExIDc2LjMwNDIgODM4LjIwMyA3NS42ODExIDg0MS42MjkgNzUuMDU4Qzg0NS4wNTYgNzQuNDM0OSA4NDguNDgyIDczLjgxMTkgODUyLjg0MyA3My4xODg5Qzg1Ni44OTIgNzIuNTY1OCA4NjAuOTQxIDcyLjI1NDEgODY0Ljk5MSA3Mi4yNTQxQzg3OC4wNzMgNzIuMjU0MSA4ODguMDQgNzcuMjM4OCA4OTUuMjA0IDg3LjIwOEM5MDIuMzY5IDk3LjE3NzIgOTA1Ljc5NSAxMTMuMDY1IDkwNS43OTUgMTM1LjE4NEM5MDUuNzk1IDE0OC44OTIgOTA0LjU0OSAxNjAuMTA4IDkwMi4wNTcgMTY4LjgzMUM4OTkuNTY1IDE3Ny41NTQgODk2LjEzOSAxODQuNDA4IDg5MS43NzggMTg5LjA4MUM4ODcuNDE3IDE5My43NTQgODgyLjc0NSAxOTcuMTggODc3LjEzOCAxOTkuMDVDODcxLjUzMiAyMDAuOTE5IDg2Ni4yMzYgMjAxLjg1NCA4NjAuNjMgMjAxLjg1NFpNODYwLjAwNyAxODIuODVDODYzLjQzMyAxODIuODUgODY2LjIzNiAxODIuNTM4IDg2OC40MTcgMTgyLjIyN0M4NzAuNTk3IDE4MS45MTUgODcyLjE1NSAxODAuOTgxIDg3My40MDEgMTc5LjczNEM4NzQuNjQ2IDE3OC40ODggODc1Ljg5MiAxNzYuMzA4IDg3Ny40NSAxNzMuNTA0Qzg3OS4wMDcgMTcwLjcgODc5Ljk0MiAxNjUuNzE1IDg4MS4xODggMTU5LjE3M0M4ODIuMTIyIDE1Mi42MzEgODgyLjc0NSAxNDMuMjg1IDg4Mi43NDUgMTMxLjc1OEM4ODIuNzQ1IDEyMC4yMzEgODgyLjEyMiAxMTEuNTA4IDg4MS4xODggMTA1LjlDODgwLjI1MyAxMDAuMjkzIDg3OC4zODQgOTYuNTU0MiA4NzYuNTE1IDk0Ljk5NjVDODc0LjAyNCA5Mi44MTU3IDg2OS4zNTEgOTEuNTY5MyA4NjIuMTg3IDkxLjU2OTNDODU1LjMzNSA5MS41NjkzIDg0OS40MTYgOTIuMTkyNiA4NDQuNDMzIDkzLjQzODhDODM5LjQ0OSA5NC42ODQ5IDgzNi4wMjMgOTUuNjE5NiA4MzQuMTU0IDk2LjU1NDJWMTgwLjA0NkM4MzUuNCAxODAuMzU3IDgzNi45NTcgMTgwLjY2OSA4MzkuNDQ5IDE4MS4yOTJDODQxLjk0MSAxODEuOTE1IDg0NC43NDQgMTgyLjIyNyA4NDguMTcgMTgyLjUzOEM4NTEuNTk3IDE4Mi41MzggODU1LjY0NiAxODIuODUgODYwLjAwNyAxODIuODVaXCIsIGZpbGw6IFwiIzIxMjEyMVwiIH0pLCBoKFwicGF0aFwiLCB7IGQ6IFwiTTkzOS40MzUgMTk5LjA1VjM4LjI5NjRIOTYxLjg2MlYxOTkuMDVIOTM5LjQzNVpcIiwgZmlsbDogXCIjMjEyMTIxXCIgfSksIGgoXCJwYXRoXCIsIHsgZDogXCJNMTAwNy4wMyAyMzQuNTY1TDEwMjQuMTYgMTg3LjIxMkw5ODMuOTc3IDc1LjA1ODFIMTAwNy4zNEwxMDM0LjEzIDE2My4yMjNIMTAzNS4wNkwxMDYxLjU0IDc1LjA1ODFIMTA4NS4yMUwxMDQyLjg1IDE5Mi4xOTZMMTAzMC4zOSAyMzQuODc3SDEwMDcuMDNWMjM0LjU2NVpcIiwgZmlsbDogXCIjMjEyMTIxXCIgfSksIGgoXCJwYXRoXCIsIHsgZDogXCJNMjE2LjkyOCA0OC44ODg4SDE5LjEzMTlDOS43ODcyNSA0OC44ODg4IDIgNTYuMzY1NyAyIDY2LjAyMzVWMTc4LjE3OEMyIDE4Ny41MjQgOS40NzU3NiAxOTUuMzEyIDE5LjEzMTkgMTk1LjMxMkgzMi4yMTQ1VjIzNS44MTJDMzIuMjE0NSAyNDQuMjI0IDM2Ljg4NjkgMjUxLjcwMSA0NC4wNTExIDI1NS40MzlDNDYuODU0NSAyNTYuOTk3IDQ5Ljk2OTUgMjU3LjYyIDUzLjA4NDQgMjU3LjYyQzU3Ljc1NjcgMjU3LjYyIDYyLjExNzYgMjU2LjA2MiA2Ni4xNjY5IDI1My4yNThMMTMxLjU4IDE5NS42MjRIMjE2LjkyOEMyMjYuMjczIDE5NS42MjQgMjM0LjA2IDE4OC4xNDcgMjM0LjA2IDE3OC40ODlWNjYuMzM0OUMyMzQuMDYgNTYuNjc3MiAyMjYuMjczIDQ4Ljg4ODggMjE2LjkyOCA0OC44ODg4Wk01Ny4xMzM3IDI0MS40MkM1NC4zMzAzIDI0My42MDEgNTEuODM4NCAyNDIuNjY2IDUwLjkwMzkgMjQyLjA0M0M0OS45Njk1IDI0MS40MiA0Ny40Nzc1IDIzOS44NjIgNDcuNDc3NSAyMzUuODEyVjEyNS44MzlDNDcuNDc3NSAxMTguNjczIDUyLjQ2MTMgMTA4LjA4MSA1OC4wNjgyIDEwMy40MDhMMTE5Ljc0MyA0OS44MjM2VjE4Ni4yNzdMNTcuMTMzNyAyNDEuNDJaXCIsIGNsYXNzOiBcInByaW1hcnlcIiB9KSwgaChcInBhdGhcIiwgeyBkOiBcIk0xOTQuNTAxIDE0LjMwOEMxOTQuNTAxIDQuOTYxNzggMTg0LjUzMyAtNC4wNzMwOCAxNzIuNjk2IDQuMzM4NDdMMTMyLjUxNCAzOC4yOTYzSDE5NC41MDFWMTQuMzA4WlwiLCBjbGFzczogXCJwcmltYXJ5XCIgfSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5TG9nby5zdHlsZSA9IHZvY2FibHlMb2dvQ3NzO1xuXG5jb25zdCB2b2NhYmx5TW9iaWxlQnV0dG9uQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrO3Zpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fS5idXR0b257Y29sb3I6IzAwMDAwMDtkaXNwbGF5OmZsZXg7Ym9yZGVyLXJhZGl1czoxOXB4O2xpbmUtaGVpZ2h0OjE5cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6OHB4O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2JveC1zaXppbmc6Y29udGVudC1ib3g7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNoYWRvdzowIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC42KTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt0cmFuc2l0aW9uOmFsbCAwLjJzfS5idXR0b246YWN0aXZle2JveC1zaGFkb3c6MCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCl9LmJ1dHRvbiAuc3Zne2hlaWdodDoxNy4xcHh9LmJ1dHRvbiAuY2FwdGlvbnttYXJnaW4tbGVmdDo4cHg7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjtmb250LXNpemU6MTZweDthbmltYXRpb24tZHVyYXRpb246MXM7YW5pbWF0aW9uLW5hbWU6c2xpZGVJbn1Aa2V5ZnJhbWVzIHNsaWRlSW57ZnJvbXttYXgtd2lkdGg6MH10b3ttYXgtd2lkdGg6MTAwcHh9fVwiO1xuXG5jb25zdCBWb2NhYmx5TW9iaWxlQnV0dG9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJidXR0b25cIiwgeyBjbGFzczogXCJidXR0b25cIiwgb25Ub3VjaFN0YXJ0OiAoKSA9PiB0cnVlIH0sIGgoXCJzdmdcIiwgeyB2aWV3Qm94OiBcIjAgMCA2MzMgNjk5XCIsIGZpbGw6IFwibm9uZVwiLCBjbGFzczogXCJzdmdcIiB9LCBoKFwicGF0aFwiLCB7IGQ6IFwiTTU4NS40MjggMTMwLjQ0M0g0Ni42NjQ2QzIxLjIxMTIgMTMwLjQ0MyAwIDE1MC44MDkgMCAxNzcuMTE2VjQ4Mi42MDlDMCA1MDguMDY3IDIwLjM2MjcgNTI5LjI4MSA0Ni42NjQ2IDUyOS4yODFIODIuMjk5NFY2MzkuNTk5QzgyLjI5OTQgNjYyLjUxMSA5NS4wMjYgNjgyLjg3NyAxMTQuNTQgNjkzLjA2QzEyMi4xNzYgNjk3LjMwMyAxMzAuNjYxIDY5OSAxMzkuMTQ1IDY5OUMxNTEuODcyIDY5OSAxNjMuNzUgNjk0Ljc1NyAxNzQuNzggNjg3LjEyTDM1Mi45NTQgNTMwLjEzSDU4NS40MjhDNjEwLjg4MiA1MzAuMTMgNjMyLjA5MyA1MDkuNzY0IDYzMi4wOTMgNDgzLjQ1N1YxNzcuOTY0QzYzMi4wOTMgMTUxLjY1OCA2MTAuODgyIDEzMC40NDMgNTg1LjQyOCAxMzAuNDQzWk0xNTAuMTc1IDY1NC44NzRDMTQyLjUzOSA2NjAuODE0IDEzNS43NTIgNjU4LjI2OCAxMzMuMjA2IDY1Ni41N0MxMzAuNjYxIDY1NC44NzMgMTIzLjg3MyA2NTAuNjMgMTIzLjg3MyA2MzkuNTk5VjM0MC4wNDVDMTIzLjg3MyAzMjAuNTI3IDEzNy40NDggMjkxLjY3NiAxNTIuNzIgMjc4Ljk0N0wzMjAuNzEzIDEzMi45ODlWNTA0LjY3MkwxNTAuMTc1IDY1NC44NzRaXCIsIGZpbGw6IFwiIzAwNTBGRlwiIH0pLCBoKFwicGF0aFwiLCB7IGQ6IFwiTTUyNC4zNCAzNi4yNDkyQzUyNC4zNCAxMC43OTE0IDQ5Ny4xOSAtMTMuODE4NCA0NjQuOTQ5IDkuMDkzNTdMMzU1LjQ5OSAxMDEuNTlINTI0LjM0VjM2LjI0OTJaXCIsIGZpbGw6IFwiIzAwNTBGRlwiIH0pKSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJjYXB0aW9uXCIgfSwgXCJMb29rIHVwXCIpKSkpO1xuICB9XG59O1xuVm9jYWJseU1vYmlsZUJ1dHRvbi5zdHlsZSA9IHZvY2FibHlNb2JpbGVCdXR0b25Dc3M7XG5cbmNvbnN0IHZvY2FibHlQbGF5U291bmRDc3MgPSBcInZvY2FibHktcGxheS1zb3VuZHtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH0udm9jYWJseS1wbGF5LXNvdW5kLWJ1dHRvbntwYWRkaW5nOjA7YmFja2dyb3VuZDpub25lO2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO3dpZHRoOjE4cHh9LnZvY2FibHktcGxheS1zb3VuZC1idXR0b246ZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHR9XCI7XG5cbmNvbnN0IFZvY2FibHlQbGF5U291bmQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzUGxheUVycm9yID0gZmFsc2U7XG4gIH1cbiAgYXN5bmMgcGxheSgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5wbGF5QXVkaW9Qcm9udW5jaWF0aW9uKHtcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaXNQbGF5RXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInZvY2FibHktcGxheS1zb3VuZC1idXR0b25cIiwgb25DbGljazogKCkgPT4gdGhpcy5wbGF5KCksIGRpc2FibGVkOiB0aGlzLmlzUGxheWluZyB8fCB0aGlzLmlzTG9hZGluZyB8fCB0aGlzLmlzUGxheUVycm9yLCB0aXRsZTogdGhpcy5pc1BsYXlFcnJvclxuICAgICAgICA/IGBVbmZvcnR1bmF0ZWx5LCBWb2NhYmx5IGlzIHVuYWJsZSB0byBwbGF5IHRoZSBhdWRpbyBwcm9udW5jaWF0aW9uIG9uIHRoaXMgd2Vic2l0ZSBkdWUgdG8gaXRzIHNlY3VyaXR5IHBvbGljaWVzYFxuICAgICAgICA6IG51bGwgfSwgIXRoaXMuaXNQbGF5RXJyb3IgJiYgIXRoaXMuaXNMb2FkaW5nICYmICF0aGlzLmlzUGxheWluZyAmJiAoaChcInZvY2FibHktaWNvbi1wbGF5LWNpcmNsZVwiLCBudWxsKSksICF0aGlzLmlzUGxheUVycm9yICYmICh0aGlzLmlzTG9hZGluZyB8fCB0aGlzLmlzUGxheWluZykgJiYgKGgoXCJ2b2NhYmx5LWljb24tdm9sdW1lLW1lZGl1bVwiLCBudWxsKSksIHRoaXMuaXNQbGF5RXJyb3IgJiYgaChcInZvY2FibHktaWNvbi1lcnJvclwiLCBudWxsKSkpKTtcbiAgfVxufTtcblZvY2FibHlQbGF5U291bmQuc3R5bGUgPSB2b2NhYmx5UGxheVNvdW5kQ3NzO1xuXG5jb25zdCB2b2NhYmx5UG9wdXBDc3MgPSBcIjpob3N0e2ZvbnQtZmFtaWx5OmFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHggIWltcG9ydGFudDtsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnQ7Y29sb3I6IzZhNmE2YSAhaW1wb3J0YW50O3Zpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50Oy0tbWF4LWhlaWdodDo0OHZoOy0tbWF4LXdpZHRoOjEwMHZ3Oy0tYmFja2dyb3VuZC1yZ2I6MjU1LCAyNTUsIDI1NTstLWhlYWRlci1oZWlnaHQ6MTlweDstLWhlYWRlci1wYWRkaW5nLXRvcDoxMXB4Oy0taGVhZGVyLXBhZGRpbmctYm90dG9tOjIwcHg7LS1oZWFkZXItZGVjYXktbGVuZ3RoOjEwcHg7LS1wYWRkaW5nLXg6MjBweDstLWJvcmRlci1yYWRpdXM6MTZweDstLXBhZGRpbmctYm90dG9tOjIwcHg7LS1zaGFkb3ctc3ByZWFkOjEwcHg7LS1zaGFkb3ctdi1vZmZzZXQ6NHB4Oy0tc2Nyb2xsYmFyLXRyYWNrOjZweDstLXNjcm9sbGJhci1ndXR0ZXI6Y2FsYygodmFyKC0tcGFkZGluZy14KSAtIHZhcigtLXNjcm9sbGJhci10cmFjaykpIC8gMik7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzpjYWxjKHZhcigtLXNoYWRvdy1zcHJlYWQpIC0gdmFyKC0tc2hhZG93LXYtb2Zmc2V0KSkgdmFyKC0tc2hhZG93LXNwcmVhZCkgY2FsYyh2YXIoLS1zaGFkb3ctc3ByZWFkKSArIHZhcigtLXNoYWRvdy12LW9mZnNldCkpO3RleHQtYWxpZ246bGVmdH1Ac3VwcG9ydHMgKC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZSl7Omhvc3R7LS1zY3JvbGxiYXItdHJhY2s6MHB4fX06aG9zdCAucG9wdXB7YmFja2dyb3VuZDpyZ2IodmFyKC0tYmFja2dyb3VuZC1yZ2IpKTtib3gtc2hhZG93OjAgdmFyKC0tc2hhZG93LXYtb2Zmc2V0KSB2YXIoLS1zaGFkb3ctc3ByZWFkKSByZ2JhKDAsIDAsIDAsIDAuNik7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy10b3A6Y2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIHZhcigtLWhlYWRlci1wYWRkaW5nLXRvcCkpO3BhZGRpbmctcmlnaHQ6dmFyKC0tc2Nyb2xsYmFyLWd1dHRlcik7cGFkZGluZy1ib3R0b206MXB4O3BhZGRpbmctbGVmdDowfTpob3N0IC5oZWFkZXJ7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUgdmFyKC0taGVhZGVyLWRlY2F5LWxlbmd0aCkpO2xlZnQ6MDtyaWdodDowO3RvcDowO2hlaWdodDp2YXIoLS1oZWFkZXItaGVpZ2h0KTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpIDAgMCAwO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzp2YXIoLS1oZWFkZXItcGFkZGluZy10b3ApIDAgdmFyKC0taGVhZGVyLXBhZGRpbmctYm90dG9tKSB2YXIoLS1wYWRkaW5nLXgpO21hcmdpbi1yaWdodDp2YXIoLS1wYWRkaW5nLXgpfTpob3N0IC5oZWFkZXIgLmxvZ297aGVpZ2h0OnZhcigtLWhlYWRlci1oZWlnaHQpfTpob3N0IC5oZWFkZXIgLmNsb3Nle2JvcmRlcjpub25lO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLWxlZnQ6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDotN3B4fTpob3N0IC5mb290ZXJ7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMGRlZywgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OnZhcigtLXBhZGRpbmctYm90dG9tKTtib3JkZXItcmFkaXVzOjAgMCB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0IC5ib2R5ey0tcGFkZGluZy1yaWdodDpjYWxjKFxcbiAgICB2YXIoLS1wYWRkaW5nLXgpIC0gdmFyKC0tc2Nyb2xsYmFyLXRyYWNrKSAtIHZhcigtLXNjcm9sbGJhci1ndXR0ZXIpXFxuICApO21pbi13aWR0aDoxNDBweDtvdmVyZmxvdzphdXRvO292ZXJmbG93LXk6c2Nyb2xsO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXgtaGVpZ2h0OmNhbGModmFyKC0tbWF4LWhlaWdodCkgLSB2YXIoLS1oZWFkZXItcGFkZGluZy10b3ApIC0gdmFyKC0taGVhZGVyLXBhZGRpbmctdG9wKSAtIHZhcigtLWhlYWRlci1wYWRkaW5nLWJvdHRvbSkgLSB2YXIoLS1wYWRkaW5nLWJvdHRvbSkgLSB2YXIoLS1zaGFkb3ctc3ByZWFkKSAqIDIpO21heC13aWR0aDpjYWxjKHZhcigtLW1heC13aWR0aCkgLSB2YXIoLS1wYWRkaW5nLXJpZ2h0KSAtIHZhcigtLXBhZGRpbmcteCkpO3Njcm9sbGJhci1ndXR0ZXI6c3RhYmxlO3BhZGRpbmctdG9wOnZhcigtLWhlYWRlci1wYWRkaW5nLWJvdHRvbSk7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmcteCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLXJpZ2h0KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSl9Omhvc3QgLmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyey13ZWJraXQtYXBwZWFyYW5jZTpub25lO3dpZHRoOnZhcigtLXNjcm9sbGJhci10cmFjayk7aGVpZ2h0OnZhcigtLXNjcm9sbGJhci10cmFjayl9Omhvc3QgLmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2E0YTRhNDstd2Via2l0LWJveC1zaGFkb3c6MCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSl9Omhvc3QgLmNvbnRlbnQtd3JhcHBlcntvdmVyZmxvdzpoaWRkZW47d2lkdGg6MDtoZWlnaHQ6MH06aG9zdCAuY29udGVudC11bmxpbWl0ZWR7d2lkdGg6ODB2d306aG9zdCAuY29udGVudHtkaXNwbGF5OmlubGluZS1ibG9ja31cIjtcblxuY29uc3QgVm9jYWJseVBvcHVwID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjbG9zZVwiLCA3KTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGVudFdyYXBwZXIgPSB0aGlzLmVsLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtd3JhcHBlcicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuc3R5bGUud2lkdGggPSBgJHtyZWN0LndpZHRofXB4YDtcbiAgICAgICAgY29udGVudFdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gYCR7cmVjdC5oZWlnaHR9cHhgO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShjb250ZW50KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwb3B1cFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJib2R5XCIsIGlkOiBcImJvZHlcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiY29udGVudC13cmFwcGVyXCIsIGlkOiBcImNvbnRlbnQtd3JhcHBlclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250ZW50LXVubGltaXRlZFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250ZW50XCIsIGlkOiBcImNvbnRlbnRcIiB9LCBoKFwic2xvdFwiLCBudWxsKSkpKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoZWFkZXJcIiB9LCBoKFwidm9jYWJseS1sb2dvXCIsIHsgY2xhc3M6IFwibG9nb1wiIH0pLCBoKFwidm9jYWJseS1jbG9zZS1idXR0b25cIiwgeyBjbGFzczogXCJjbG9zZVwiIH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImZvb3RlclwiIH0pKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5Wb2NhYmx5UG9wdXAuc3R5bGUgPSB2b2NhYmx5UG9wdXBDc3M7XG5cbmNvbnN0IHZvY2FibHlSYXRlQ3NzID0gXCJ2b2NhYmx5LXJhdGV7Zm9udC1mYW1pbHk6YXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtmb250LXNpemU6MTZweCAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudDtjb2xvcjojNmE2YTZhICFpbXBvcnRhbnQ7ZGlzcGxheTpibG9jazt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH1cIjtcblxuY29uc3QgVm9jYWJseVJhdGUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMudXNlclNlbGVjdGVkID0gY3JlYXRlRXZlbnQodGhpcywgXCJ1c2VyU2VsZWN0ZWRcIiwgNyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiZGl2XCIsIG51bGwsIGgoXCJzdHJvbmdcIiwgbnVsbCwgXCJZb3UgY2FuIGhlbHAgdGhpcyBwcm9qZWN0LlwiKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ2b2NhYmx5LW10LTEyXCIgfSwgXCJWb2NhYmx5IGlzIDEwMCUgZnJlZSBhbmQgb3Blbi1zb3VyY2UuXCIpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidm9jYWJseS1tdC0xMlwiIH0sIFwiWW91ciBwb3NpdGl2ZSByZXZpZXcgb24gXCIsIHRoaXMucGxhdGZvcm0ubmFtZSwgXCIgd291bGQgaGVscCBvdGhlciB1c2VycyB0byBkaXNjb3ZlciB0aGlzIHByb2plY3QuXCIpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidm9jYWJseS1tdC0xMlwiIH0sIFwiSWYgeW91IGFyZSBtaXNzaW5nIG9yIGRvbid0IGxpa2Ugc29tZXRoaW5nLCB5b3UgY2FuIGFsd2F5c1wiLCAnICcsIGgoXCJhXCIsIHsgaHJlZjogXCJodHRwczovL2FwcC52b2NhYmx5LnByby9mZWVkYmFja1wiLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIGNsYXNzOiBcInZvY2FibHktdGV4dC1saW5rXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMudXNlclNlbGVjdGVkLmVtaXQoJ2ZlZWRiYWNrJykgfSwgXCJsZXQgbWUga25vd1wiKSwgXCIuXCIsIGgoXCJiclwiLCBudWxsKSwgXCIgSSB0YWtlIGV2ZXJ5IGZlZWRiYWNrIHNlcmlvdXNseS5cIiksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ2b2NhYmx5LW10LTEyXCIgfSwgaChcImFcIiwgeyBocmVmOiB0aGlzLnBsYXRmb3JtLnVybCwgdGFyZ2V0OiBcIl9ibGFua1wiLCBjbGFzczogXCJ2b2NhYmx5LWJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLnVzZXJTZWxlY3RlZC5lbWl0KCdyZXZpZXcnKSB9LCBcIkhlbHAgdGhpcyBwcm9qZWN0LiBMZWF2ZSBhIHJldmlldy5cIiksIGgoXCJidXR0b25cIiwgeyBjbGFzczogXCJ2b2NhYmx5LWxpbmstYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMudXNlclNlbGVjdGVkLmVtaXQoJ2xhdGVyJykgfSwgXCJBc2sgbWUgbGF0ZXIuXCIpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktbXQtMTJcIiB9LCBoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwidm9jYWJseS1saW5rLWJ1dHRvbiB2b2NhYmx5LXRleHQtbGluayB2b2NhYmx5LXNtYWxsXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMudXNlclNlbGVjdGVkLmVtaXQoJ25ldmVyJykgfSwgXCJQbGVhc2Ugc3RvcCBhc2tpbmcgbWUgYWJvdXQgdGhpcy5cIikpKSk7XG4gIH1cbn07XG5Wb2NhYmx5UmF0ZS5zdHlsZSA9IHZvY2FibHlSYXRlQ3NzO1xuXG5jb25zdCB2b2NhYmx5U2lnbkluQ3NzID0gXCI6aG9zdHtmb250LWZhbWlseTphcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDtkaXNwbGF5OmJsb2NrO3Zpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fS5jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmJ1dHRvbntmb250LWZhbWlseTphcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiMwMDUwZmY7Y29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O2JvcmRlcjpub25lO3BhZGRpbmc6OHB4O2ZvbnQ6aW5oZXJpdDtmb250LXdlaWdodDo1MDA7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoyMHB4O3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmNhbGMoMTAwJSAtIDZweCAqIDIpO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAyMDBtczttYXJnaW46MCA2cHggOXB4O2JveC1zaGFkb3c6MCAzcHggNnB4IHJnYmEoMCwgODAsIDI1NSwgMC4yNSk7dGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudH0uYnV0dG9uOmhvdmVyLC5idXR0b246Zm9jdXN7YmFja2dyb3VuZDojMDA0N2UzfS5idXR0b246YWN0aXZle2JhY2tncm91bmQ6IzAwNDdlMztib3gtc2hhZG93Omluc2V0IDBweCAwcHggMTVweCByZ2JhKDMsIDM2LCAxMDgsIDAuNCl9LnB7bWFyZ2luLWJvdHRvbToxNnB4O3RleHQtYWxpZ246Y2VudGVyfS5wIGF7Y29sb3I6IzAwNTBmZn0ubGlua3t0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lICFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczowLjVweCAhaW1wb3J0YW50O3RleHQtdW5kZXJsaW5lLW9mZnNldDoycHggIWltcG9ydGFudDtjb2xvcjojMDA1MGZmICFpbXBvcnRhbnQ7YmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudH0ubGluazpob3ZlciwubGluazpmb2N1cywubGluazphY3RpdmV7Y29sb3I6IzAwNDdlMyAhaW1wb3J0YW50fVwiO1xuXG5jb25zdCBWb2NhYmx5U2lnbkluID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNvbmZpcm0gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNvbmZpcm1cIiwgNyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiZGF0YS10ZXN0XCI6IFwic2lnbi1pblwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwXCIgfSwgXCJQbGVhc2Ugc2lnbiBpbiB0byBwcm9jZWVkLlwiKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBcIiB9LCBoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiYnV0dG9uXCIsIFwiZGF0YS10ZXN0XCI6IFwic2lnbi1pbi1idXR0b25cIiwgb25DbGljazogKCkgPT4gdGhpcy5jb25maXJtLmVtaXQoKSB9LCBcIlNpZ24gaW4gb3IgQ3JlYXRlIGFuIGFjY291bnRcIikpLCBoKFwiZGl2XCIsIG51bGwsIFwiQnkgc2lnbmluZyBpbiwgeW91IGFncmVlIHRvIG91clwiLCAnICcsIGgoXCJhXCIsIHsgY2xhc3M6IFwibGlua1wiLCBocmVmOiBcImh0dHBzOi8vdm9jYWJseS5wcm8vdGVybXMtYW5kLWNvbmRpdGlvbnMuaHRtbFwiLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSwgXCJUZXJtcyBvZiBTZXJ2aWNlXCIpLCAnICcsIFwiYW5kXCIsICcgJywgaChcImFcIiwgeyBjbGFzczogXCJsaW5rXCIsIGhyZWY6IFwiaHR0cHM6Ly92b2NhYmx5LnByby9wcml2YWN5LXBvbGljeS5odG1sXCIsIHRhcmdldDogXCJfYmxhbmtcIiB9LCBcIlByaXZhY3kgUG9saWN5XCIpLCBcIi5cIikpKTtcbiAgfVxufTtcblZvY2FibHlTaWduSW4uc3R5bGUgPSB2b2NhYmx5U2lnbkluQ3NzO1xuXG5jb25zdCB2b2NhYmx5U3Bpbm5lckNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTQwcHg7aGVpZ2h0OjE4cHg7dmVydGljYWwtYWxpZ246bWlkZGxlO3Zpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50fS5zcGlubmVye3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDoxOHB4fS5zcGlubmVyPmRpdnt3aWR0aDoxOHB4O2hlaWdodDoxOHB4O2JhY2tncm91bmQtY29sb3I6IzAwNTBmZjtib3JkZXItcmFkaXVzOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC1hbmltYXRpb246c2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO2FuaW1hdGlvbjpzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGh9LnNwaW5uZXIgLmJvdW5jZTF7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTAuMzJzO2FuaW1hdGlvbi1kZWxheTotMC4zMnN9LnNwaW5uZXIgLmJvdW5jZTJ7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTAuMTZzO2FuaW1hdGlvbi1kZWxheTotMC4xNnN9QC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5ezAlLDgwJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzay1ib3VuY2VkZWxheXswJSw4MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19XCI7XG5cbmNvbnN0IFZvY2FibHlTcGlubmVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzcGlubmVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJvdW5jZTFcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJvdW5jZTJcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJvdW5jZTNcIiB9KSkpKTtcbiAgfVxufTtcblZvY2FibHlTcGlubmVyLnN0eWxlID0gdm9jYWJseVNwaW5uZXJDc3M7XG5cbmNvbnN0IHZvY2FibHlTdWJzY3JpYmVDc3MgPSBcIjpob3N0e2ZvbnQtZmFtaWx5OmFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHggIWltcG9ydGFudDtsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnQ7Y29sb3I6IzZhNmE2YSAhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2s7dmlzaWJpbGl0eTp2aXNpYmxlICFpbXBvcnRhbnR9LmNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ibG9ja30ubWVzc2FnZXttYXJnaW4tYm90dG9tOjE2cHh9LmJ1dHRvbntmb250LWZhbWlseTphcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiMwMDUwZmY7Y29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O2JvcmRlcjpub25lO3BhZGRpbmc6OHB4O2ZvbnQ6aW5oZXJpdDtmb250LXdlaWdodDo1MDA7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoyMHB4O3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmNhbGMoMTAwJSAtIDZweCAqIDIpO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAyMDBtczttYXJnaW46MCA2cHggOXB4O2JveC1zaGFkb3c6MCAzcHggNnB4IHJnYmEoMCwgODAsIDI1NSwgMC4yNSk7dGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudH0uYnV0dG9uOmhvdmVyLC5idXR0b246Zm9jdXN7YmFja2dyb3VuZDojMDA0N2UzfS5idXR0b246YWN0aXZle2JhY2tncm91bmQ6IzAwNDdlMztib3gtc2hhZG93Omluc2V0IDBweCAwcHggMTVweCByZ2JhKDMsIDM2LCAxMDgsIDAuNCl9XCI7XG5cbmNvbnN0IFZvY2FibHlTdWJzY3JpYmUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY29uZmlybSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY29uZmlybVwiLCA3KTtcbiAgICB0aGlzLnRyaWFsID0gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiZGF0YS10ZXN0XCI6IFwic3Vic2NyaWJlXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRhaW5lclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJtZXNzYWdlXCIgfSwgdGhpcy50cmlhbFxuICAgICAgPyAnUmVxdWVzdCBhIDcgZGF5IGZyZWUgdHJpYWwgdG8gcHJvY2VlZC4nXG4gICAgICA6ICdQbGVhc2Ugc3Vic2NyaWJlIHRvIHByb2NlZWQuJyksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJidXR0b24tY29udGFpbmVyXCIgfSwgaChcImJ1dHRvblwiLCB7IGNsYXNzOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmNvbmZpcm0uZW1pdCgpLCBcImRhdGEtdGVzdFwiOiBcInN1YnNjcmliZS1idXR0b25cIiB9LCB0aGlzLnRyaWFsID8gJ1JlcXVlc3QgYSA3IGRheSBmcmVlIHRyaWFsJyA6ICdTdWJzY3JpYmUnKSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5U3Vic2NyaWJlLnN0eWxlID0gdm9jYWJseVN1YnNjcmliZUNzcztcblxuY29uc3QgaXNEaXJlY3ROZWNlc3NhcnkgPSAoYW5hbHlzZSkgPT4ge1xuICBpZiAoYW5hbHlzZS50cmFuc2xhdGlvbi5zb3VyY2VMYW5ndWFnZSA9PT0gYW5hbHlzZS50cmFuc2xhdGlvbi50YXJnZXRMYW5ndWFnZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoYW5hbHlzZS5jYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBjYXJkID0gYW5hbHlzZS5jYXJkc1swXS5kYXRhO1xuICBpZiAoYW5hbHlzZS5zb3VyY2UgPT09IGNhcmQuc291cmNlICYmXG4gICAgYW5hbHlzZS50cmFuc2xhdGlvbi50YXJnZXQgPT09IGNhcmQudHJhbnNsYXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBzb3J0TGFuZ3VhZ2VzID0gKGV4aXN0aW5nTGFuZ3VhZ2VzKSA9PiAoZW50cnlBLCBlbnRyeUIpID0+IHtcbiAgY29uc3QgaXNFbnRyeUFFeGlzdHMgPSBleGlzdGluZ0xhbmd1YWdlcy5pbmNsdWRlcyhlbnRyeUFbMF0pO1xuICBjb25zdCBpc0VudHJ5QkV4aXN0cyA9IGV4aXN0aW5nTGFuZ3VhZ2VzLmluY2x1ZGVzKGVudHJ5QlswXSk7XG4gIGlmIChpc0VudHJ5QUV4aXN0cyAmJiAhaXNFbnRyeUJFeGlzdHMpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKCFpc0VudHJ5QUV4aXN0cyAmJiBpc0VudHJ5QkV4aXN0cykge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiBlbnRyeUFbMV0ubG9jYWxlQ29tcGFyZShlbnRyeUJbMV0pO1xufTtcblxuY29uc3Qgdm9jYWJseVRyYW5zbGF0aW9uQ3NzID0gXCI6aG9zdHtmb250LWZhbWlseTphcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudH06aG9zdCBsaXttYXJnaW46MH0udm9jYWJseS1tYi00e21hcmdpbi1ib3R0b206NHB4fS52b2NhYmx5LW1iLTZ7bWFyZ2luLWJvdHRvbTo2cHh9LnZvY2FibHktbXQtMTJ7bWFyZ2luLXRvcDoxMnB4fS52b2NhYmx5LW1iLTEye21hcmdpbi1ib3R0b206MTJweH0udm9jYWJseS10ZXh0LXJpZ2h0e3RleHQtYWxpZ246cmlnaHR9LnZvY2FibHktdGV4dC1saW5rLC52b2NhYmx5LXRleHQtbGluazphY3RpdmUsLnZvY2FibHktdGV4dC1saW5rOnZpc2l0ZWR7Y29sb3I6IzZhNmE2YSAhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgIWltcG9ydGFudH0udm9jYWJseS10ZXh0LWxpbms6aG92ZXJ7Y29sb3I6IzAwMDAwMCAhaW1wb3J0YW50fS52b2NhYmx5LWVtcGhhc2l6ZWR7Y29sb3I6IzAwMDAwMDtmb250LXdlaWdodDpib2xkfS52b2NhYmx5LXNtYWxse2ZvbnQtc2l6ZToxNC40cHh9LnZvY2FibHktbXV0ZWR7Y29sb3I6I2JhYmFiYX0udm9jYWJseS10cmFuc2xhdGlvbntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6c3RyZXRjaDtnYXA6OHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXsudm9jYWJseS10cmFuc2xhdGlvbntmbGV4LWRpcmVjdGlvbjpjb2x1bW59fS52b2NhYmx5LXRyYW5zbGF0aW9uIC52b2NhYmx5LXRyYW5zbGF0aW9uLXNlY3Rpb257cGFkZGluZy1sZWZ0OjE0cHh9LnZvY2FibHktdHJhbnNsYXRpb24gLnZvY2FibHktaW52aXNpYmxlLXNwYWNle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjA7Zm9udC1zaXplOjB9LnZvY2FibHktZXJyb3J7Y29sb3I6I2ZmNWU1ZX0udm9jYWJseS1sb2FkaW5nLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0udm9jYWJseS1yZWxvYWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6d2hpdGU7b3BhY2l0eTowLjV9QGtleWZyYW1lcyB2b2NhYmx5LWZsb2F0aW5nezAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTJweCl9NTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMXB4LCAycHgpfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtMnB4KX19LnZvY2FibHktc2F2ZS1oaW50LWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0udm9jYWJseS1zYXZlLWhpbnR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTY1cHg7dG9wOjZweDtyaWdodDo0MHB4O2FuaW1hdGlvbjp2b2NhYmx5LWZsb2F0aW5nIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO29wYWNpdHk6MTt0cmFuc2l0aW9uOm9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXR9LnZvY2FibHktc2F2ZS1oaW50LnZvY2FibHktc2F2ZS1oaW50LWhpZGRlbntvcGFjaXR5OjB9LnZvY2FibHktY2FyZHN7Ym9yZGVyOjAuNXB4IHNvbGlkICNiYWJhYmE7Ym9yZGVyLXJhZGl1czo4cHg7YmFja2dyb3VuZC1jb2xvcjojZmJmYmZiO21hcmdpbi1sZWZ0Oi0xNHB4O21hcmdpbi1ib3R0b206MXB4fS52b2NhYmx5LWNhcmRzIC52b2NhYmx5LWNhcmR7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoxMHB4IDE0cHggMTBweCAxNHB4O2JvcmRlci10b3A6MC41cHggc29saWQgI2JhYmFiYX0udm9jYWJseS1jYXJkcyAudm9jYWJseS1jYXJkIC52b2NhYmx5LXNhZmUtYWN0aW9uLWFyZWF7cGFkZGluZy1yaWdodDozNHB4fS52b2NhYmx5LWNhcmRzIC52b2NhYmx5LWNhcmQ6Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcDpub25lfS52b2NhYmx5LWNhcmRzIC52b2NhYmx5LWNhcmQgLnZvY2FibHktY2FyZC1oaW50LWRpc3BsYXllZHtwYWRkaW5nLXJpZ2h0OjIwMHB4fS52b2NhYmx5LWNhcmRzIC52b2NhYmx5LWNhcmQgLnZvY2FibHktY2FyZC1hY3Rpb257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTRweDt0b3A6MTBweDttaW4td2lkdGg6MjRweDtoZWlnaHQ6MjRweDtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyfS52b2NhYmx5LWNhcmRzIC52b2NhYmx5LWNhcmQgLnZvY2FibHktY2FyZC1hY3Rpb24tYnV0dG9ue3BhZGRpbmc6MDttYXJnaW46MDtiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7b3V0bGluZTpub25lO21pbi13aWR0aDphdXRvO2JveC1zaGFkb3c6bm9uZTtvcGFjaXR5OjAuMTt0cmFuc2l0aW9uOm9wYWNpdHkgMjAwbXN9LnZvY2FibHktY2FyZHMgLnZvY2FibHktY2FyZCAudm9jYWJseS1jYXJkLWFjdGlvbi1idXR0b246aG92ZXJ7b3BhY2l0eToxfS52b2NhYmx5LWNhcmRzIC52b2NhYmx5LWNhcmQgLnZvY2FibHktY2FyZC1hY3Rpb24tYnV0dG9uPip7dmVydGljYWwtYWxpZ246bWlkZGxlfXZvY2FibHktcGxheS1zb3VuZHtvcGFjaXR5OjAuODttYXJnaW4tcmlnaHQ6NHB4fXZvY2FibHktcGxheS1zb3VuZDpob3ZlcntvcGFjaXR5OjF9LnZvY2FibHktcmF0ZS1jb250YWluZXJ7dHJhbnNpdGlvbjphbGwgMXMgZWFzZS1pbi1vdXQ7bWF4LWhlaWdodDo1MDBweDtvcGFjaXR5OjE7Ym94LXNpemluZzpib3JkZXItYm94fS52b2NhYmx5LXJhdGUtY29udGFpbmVyLnZvY2FibHktcmF0ZS1jb250YWluZXItaGlkZGVue21heC1oZWlnaHQ6MDtvcGFjaXR5OjB9LnZvY2FibHktcmF0ZS1wYWRkaW5ne3BhZGRpbmc6MTBweCAxNHB4IDEwcHggMTRweH0udm9jYWJseS1kaXJlY3QtdHJhbnNsYXRpb257ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd30udm9jYWJseS1hZGRlZC1jb25ncmF0dWxhdGlvbnttYXgtaGVpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246bWF4LWhlaWdodCAwLjVzIGVhc2UtaW4tb3V0fS52b2NhYmx5LWFkZGVkLWNvbmdyYXR1bGF0aW9uLnZvY2FibHktYWRkZWQtY29uZ3JhdHVsYXRpb24tdmlzaWJsZXttYXgtaGVpZ2h0OjUwMHB4fS52b2NhYmx5LWFkZGVkLWNvbmdyYXR1bGF0aW9uLWNvbnRlbnR7cGFkZGluZy10b3A6MTJweH0udm9jYWJseS1hZGRlZC1jb25ncmF0dWxhdGlvbi1jb250ZW50LTF7cGFkZGluZzoxMnB4O2JhY2tncm91bmQ6d2hpdGV9LnZvY2FibHktbGlzdHtsaXN0LXN0eWxlOm91dHNpZGU7cGFkZGluZzowO21hcmdpbjowIDAgMCAxNnB4fS52b2NhYmx5LWl0YWxpY3tmb250LXN0eWxlOml0YWxpY30udm9jYWJseS1sYW5ndWFnZS1zZWxlY3RvcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2dhcDo0cHg7bWFyZ2luLWxlZnQ6LTE0cHg7d2lkdGg6Y2FsYygxMDAlICsgMTRweCl9LnZvY2FibHktbGFuZ3VhZ2Utc2VsZWN0b3IgLnZvY2FibHktbGFuZ3VhZ2Utd3JhcHBlcnt3aWR0aDo0NiV9LnZvY2FibHktbGFuZ3VhZ2Utc2VsZWN0b3IgLnZvY2FibHktbGFuZ3VhZ2Utd3JhcHBlciAudm9jYWJseS1pbnB1dC1zZWxlY3R7d2lkdGg6MTAwJX0udm9jYWJseS1pbnB1dC1zZWxlY3R7Y29sb3I6IzZhNmE2YSAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNC40cHggIWltcG9ydGFudDtwYWRkaW5nOjEwcHggMTRweCAhaW1wb3J0YW50O2JvcmRlcjowLjVweCBzb2xpZCAjYmFiYWJhICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czo4cHggIWltcG9ydGFudDthcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDtiYWNrZ3JvdW5kOiNmYmZiZmIgdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHdpZHRoPVxcXCIxMVxcXCIgaGVpZ2h0PVxcXCI3XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTEgN1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAgMSA1IDYgMSAxXFxcIiBzdHJva2U9XFxcInJnYigxMDksIDEwOSwgMTA5KVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIuNVxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiLz48L3N2Zz4nKSBuby1yZXBlYXQgIWltcG9ydGFudDtiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IDE0cHggdG9wIDUwJSAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O2hlaWdodDphdXRvICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6aW5oZXJpdCAhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O2JveC1zaXppbmc6Ym9yZGVyLWJveCAhaW1wb3J0YW50O3dpZHRoOjEwMCUgIWltcG9ydGFudH0udm9jYWJseS1idXR0b257Zm9udC1mYW1pbHk6YXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtmb250LXNpemU6MTZweCAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudDtjb2xvcjojNmE2YTZhICFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmFja2dyb3VuZDojMDA1MGZmO2NvbG9yOiNmZmZmZmYgIWltcG9ydGFudDtib3JkZXI6bm9uZTtwYWRkaW5nOjhweDtmb250OmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwO2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6MjBweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt3aWR0aDpjYWxjKDEwMCUgLSA2cHggKiAyKTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMjAwbXM7bWFyZ2luOjAgNnB4IDlweDtib3gtc2hhZG93OjAgM3B4IDZweCByZ2JhKDAsIDgwLCAyNTUsIDAuMjUpO3RleHQtZGVjb3JhdGlvbjpub25lICFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3dpZHRoOmF1dG99LnZvY2FibHktYnV0dG9uOmhvdmVyLC52b2NhYmx5LWJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kOiMwMDQ3ZTN9LnZvY2FibHktYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kOiMwMDQ3ZTM7Ym94LXNoYWRvdzppbnNldCAwcHggMHB4IDE1cHggcmdiYSgzLCAzNiwgMTA4LCAwLjQpfS52b2NhYmx5LWxpbmstYnV0dG9ue2JhY2tncm91bmQ6bm9uZTtjb2xvcjppbmhlcml0O2JvcmRlcjpub25lO3BhZGRpbmc6MDtmb250OmluaGVyaXQ7Y3Vyc29yOnBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSAhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbi10aGlja25lc3M6MC41cHggIWltcG9ydGFudDt0ZXh0LXVuZGVybGluZS1vZmZzZXQ6MnB4ICFpbXBvcnRhbnQ7Y29sb3I6IzAwNTBmZiAhaW1wb3J0YW50O2JhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50O2JvcmRlcjpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowICFpbXBvcnRhbnR9LnZvY2FibHktbGluay1idXR0b246aG92ZXIsLnZvY2FibHktbGluay1idXR0b246Zm9jdXMsLnZvY2FibHktbGluay1idXR0b246YWN0aXZle2NvbG9yOiMwMDQ3ZTMgIWltcG9ydGFudH1cIjtcblxuY29uc3QgVm9jYWJseVRyYW5zbGF0aW9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLnJhdGluZ0ludGVyYWN0aW9uID0gY3JlYXRlRXZlbnQodGhpcywgXCJyYXRpbmdJbnRlcmFjdGlvblwiLCA3KTtcbiAgICB0aGlzLmNoYW5nZVNvdXJjZUxhbmd1YWdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjaGFuZ2VTb3VyY2VMYW5ndWFnZVwiLCA3KTtcbiAgICB0aGlzLmNoYW5nZVRhcmdldExhbmd1YWdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjaGFuZ2VUYXJnZXRMYW5ndWFnZVwiLCA3KTtcbiAgICB0aGlzLnJlbW92ZUNhcmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcInJlbW92ZUNhcmRcIiwgNyk7XG4gICAgdGhpcy5hZGRDYXJkID0gY3JlYXRlRXZlbnQodGhpcywgXCJhZGRDYXJkXCIsIDcpO1xuICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmV4aXN0aW5nU291cmNlTGFuZ3VhZ2VzID0gW107XG4gICAgdGhpcy5leGlzdGluZ1RhcmdldExhbmd1YWdlcyA9IFtdO1xuICAgIHRoaXMuaXNGZWVkYmFja0VuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuYXNrRm9yUmF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9ICcnO1xuICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2UgPSAnJztcbiAgICB0aGlzLmlzVXBkYXRpbmcgPSBudWxsO1xuICAgIHRoaXMuc2hvd1NhdmVIaW50ID0gdHJ1ZTtcbiAgICB0aGlzLmNhbkNvbmdyYXR1bGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2F2ZUNhcmRDbGlja2VkID0gZmFsc2U7XG4gICAgdGhpcy5hZGRlZEl0ZW1JbmRleCA9IC0xO1xuICB9XG4gIGFzeW5jIHBsYXkoKSB7XG4gICAgY29uc3QgcGxheVNvdW5kRWxlbWVudCA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCd2b2NhYmx5LXBsYXktc291bmQnKTtcbiAgICBpZiAoIXBsYXlTb3VuZEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGxheVNvdW5kRWxlbWVudC5wbGF5KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNvdXJjZUxhbmd1YWdlU2VsZWN0b3IgPSB0aGlzLnJlc3VsdCAmJiB0aGlzLnJlc3VsdC5zdWNjZXNzICYmIChoKFwic2VsZWN0XCIsIHsgY2xhc3M6IFwidm9jYWJseS1pbnB1dC1zZWxlY3RcIiwgZGlzYWJsZWQ6IHRoaXMubG9hZGluZywgb25DaGFuZ2U6IChldmVudCkgPT4gdGhpcy5jaGFuZ2VTb3VyY2VMYW5ndWFnZS5lbWl0KGV2ZW50LnRhcmdldC52YWx1ZSkgfSwgT2JqZWN0LmVudHJpZXMobGFuZ3VhZ2VMaXN0KVxuICAgICAgLnNvcnQoc29ydExhbmd1YWdlcyh0aGlzLmV4aXN0aW5nU291cmNlTGFuZ3VhZ2VzKSlcbiAgICAgIC5tYXAoKFtjb2RlLCBuYW1lXSkgPT4gKGgoXCJvcHRpb25cIiwgeyBzZWxlY3RlZDogdGhpcy5zb3VyY2VMYW5ndWFnZSA9PT0gY29kZSwgdmFsdWU6IGNvZGUgfSwgbmFtZSkpKSkpO1xuICAgIGNvbnN0IHRhcmdldExhbmd1YWdlU2VsZWN0b3IgPSB0aGlzLnJlc3VsdCAmJiB0aGlzLnJlc3VsdC5zdWNjZXNzICYmIChoKFwic2VsZWN0XCIsIHsgY2xhc3M6IFwidm9jYWJseS1pbnB1dC1zZWxlY3RcIiwgZGlzYWJsZWQ6IHRoaXMubG9hZGluZywgb25DaGFuZ2U6IChldmVudCkgPT4gdGhpcy5jaGFuZ2VUYXJnZXRMYW5ndWFnZS5lbWl0KGV2ZW50LnRhcmdldC52YWx1ZSkgfSwgT2JqZWN0LmVudHJpZXMobGFuZ3VhZ2VMaXN0KVxuICAgICAgLnNvcnQoc29ydExhbmd1YWdlcyh0aGlzLmV4aXN0aW5nVGFyZ2V0TGFuZ3VhZ2VzKSlcbiAgICAgIC5tYXAoKFtjb2RlLCBuYW1lXSkgPT4gKGgoXCJvcHRpb25cIiwgeyBzZWxlY3RlZDogdGhpcy50YXJnZXRMYW5ndWFnZSA9PT0gY29kZSwgdmFsdWU6IGNvZGUgfSwgbmFtZSkpKSkpO1xuICAgIGNvbnN0IHNob3dEaXJlY3QgPSB0aGlzLnJlc3VsdCAmJlxuICAgICAgdGhpcy5yZXN1bHQuc3VjY2VzcyAmJlxuICAgICAgaXNEaXJlY3ROZWNlc3NhcnkodGhpcy5yZXN1bHQudmFsdWUpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiZGF0YS10ZXN0XCI6IFwidHJhbnNsYXRpb24tY29udGFpbmVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktbG9hZGluZy1jb250YWluZXJcIiB9LCB0aGlzLnJlc3VsdCA9PT0gbnVsbCAmJiBoKFwidm9jYWJseS1zcGlubmVyXCIsIG51bGwpLCB0aGlzLnJlc3VsdCAmJiB0aGlzLnJlc3VsdC5zdWNjZXNzID09PSBmYWxzZSAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktZXJyb3JcIiB9LCBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIikpLCB0aGlzLnJlc3VsdCAmJiB0aGlzLnJlc3VsdC5zdWNjZXNzID09PSB0cnVlICYmIChoKEZyYWdtZW50LCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidm9jYWJseS10cmFuc2xhdGlvblwiLCBcImRhdGEtdGVzdFwiOiBcInRyYW5zbGF0aW9uXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktdHJhbnNsYXRpb24tc2VjdGlvblwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ2b2NhYmx5LW1iLTEyIHZvY2FibHktbGFuZ3VhZ2Utc2VsZWN0b3JcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidm9jYWJseS1sYW5ndWFnZS13cmFwcGVyXCIgfSwgc291cmNlTGFuZ3VhZ2VTZWxlY3RvciksIGgoXCJ2b2NhYmx5LWljb24tYXJyb3ctcmlnaHRcIiwgeyBjbGFzczogXCJ2b2NhYmx5LWZyb20tdG9cIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktbGFuZ3VhZ2Utd3JhcHBlclwiIH0sIHRhcmdldExhbmd1YWdlU2VsZWN0b3IpKSwgc2hvd0RpcmVjdCAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktbWItMTJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidm9jYWJseS1zbWFsbCB2b2NhYmx5LW11dGVkIHZvY2FibHktbWItNFwiIH0sIFwiQ2hhdEdQVCB0aGlua3MgdGhhdFwiLCAnICcpLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcInZvY2FibHktZW1waGFzaXplZFwiIH0sIGlzR29vZ2xlVFRTTGFuZ3VhZ2UodGhpcy5yZXN1bHQudmFsdWUudHJhbnNsYXRpb24uc291cmNlTGFuZ3VhZ2UpICYmIChoKFwidm9jYWJseS1wbGF5LXNvdW5kXCIsIHsgdGV4dDogdGhpcy5waHJhc2UsIGxhbmd1YWdlOiB0aGlzLnJlc3VsdC52YWx1ZS50cmFuc2xhdGlvbi5zb3VyY2VMYW5ndWFnZSwgcGxheUF1ZGlvUHJvbnVuY2lhdGlvbjogdGhpcy5wbGF5QXVkaW9Qcm9udW5jaWF0aW9uIH0pKSwgdGhpcy5waHJhc2UpLCAnICcsIFwibWVhbnMgXCIsIGgoXCJpXCIsIG51bGwsIHRoaXMucmVzdWx0LnZhbHVlLnRyYW5zbGF0aW9uLnRhcmdldCkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktc2F2ZS1oaW50LWNvbnRhaW5lclwiIH0sIHRoaXMuc2hvd1NhdmVIaW50ICYmIChoKFwidm9jYWJseS1hZGQtY2FyZC1oaW50XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgJ3ZvY2FibHktc2F2ZS1oaW50JzogdHJ1ZSxcbiAgICAgICAgJ3ZvY2FibHktc2F2ZS1oaW50LWhpZGRlbic6IHRoaXMuc2F2ZUNhcmRDbGlja2VkLFxuICAgICAgfSB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ2b2NhYmx5LWNhcmRzXCIsIFwiZGF0YS10ZXN0XCI6IFwiY2FyZHNcIiB9LCB0aGlzLnJlc3VsdC52YWx1ZS5jYXJkcy5tYXAoKGNhcmQsIGl0ZW1JbmRleCkgPT4gKGgoXCJkaXZcIiwgeyBcImRhdGEtdGVzdFwiOiBcImNhcmRcIiwgY2xhc3M6IFwidm9jYWJseS1jYXJkXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktY2FyZC1hY3Rpb25cIiB9LCBpc0NhcmRJdGVtKGNhcmQpICYmIChoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwidm9jYWJseS1jYXJkLWFjdGlvbi1idXR0b25cIiwgdGl0bGU6IFwiUmVtb3ZlIGNhcmRcIiwgZGlzYWJsZWQ6IHRoaXMuaXNVcGRhdGluZyAhPT0gbnVsbCwgb25DbGljazogKCkgPT4ge1xuICAgICAgICB0aGlzLnNhdmVDYXJkQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmFkZGVkSXRlbUluZGV4ID09PSBpdGVtSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLmFkZGVkSXRlbUluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQuc3VjY2VzcyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgIHRoaXMucmVtb3ZlQ2FyZC5lbWl0KHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uQ2FyZHM6IHRoaXMucmVzdWx0LnZhbHVlLFxuICAgICAgICAgICAgY2FyZCxcbiAgICAgICAgICB9KTtcbiAgICAgIH0gfSwgdGhpcy5pc1VwZGF0aW5nID09PSBjYXJkICYmIChoKFwidm9jYWJseS1pY29uLXNwaW5cIiwgbnVsbCkpLCB0aGlzLmlzVXBkYXRpbmcgIT09IGNhcmQgJiYgKGgoXCJ2b2NhYmx5LWljb24tcmVtb3ZlXCIsIG51bGwpKSkpLCBpc0RldGFjaGVkQ2FyZEl0ZW0oY2FyZCkgJiYgKGgoXCJidXR0b25cIiwgeyBjbGFzczogXCJ2b2NhYmx5LWNhcmQtYWN0aW9uLWJ1dHRvblwiLCB0aXRsZTogXCJBZGQgY2FyZFwiLCBkaXNhYmxlZDogdGhpcy5pc1VwZGF0aW5nICE9PSBudWxsLCBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2F2ZUNhcmRDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuYWRkZWRJdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5hZGRlZEl0ZW1JbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdC5zdWNjZXNzID09PSB0cnVlICYmXG4gICAgICAgICAgdGhpcy5hZGRDYXJkLmVtaXQoe1xuICAgICAgICAgICAgdHJhbnNsYXRpb25DYXJkczogdGhpcy5yZXN1bHQudmFsdWUsXG4gICAgICAgICAgICBjYXJkLFxuICAgICAgICAgIH0pO1xuICAgICAgfSB9LCB0aGlzLmlzVXBkYXRpbmcgPT09IGNhcmQgJiYgKGgoXCJ2b2NhYmx5LWljb24tc3BpblwiLCBudWxsKSksIHRoaXMuaXNVcGRhdGluZyAhPT0gY2FyZCAmJiAoaChcInZvY2FibHktaWNvbi1hZGRcIiwgbnVsbCkpKSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgJ3ZvY2FibHktc2FmZS1hY3Rpb24tYXJlYSc6IHRydWUsXG4gICAgICAgICd2b2NhYmx5LWNhcmQtaGludC1kaXNwbGF5ZWQnOiBpdGVtSW5kZXggPT09IDAgJiYgdGhpcy5zaG93U2F2ZUhpbnQsXG4gICAgICB9IH0sIGgoXCJ2b2NhYmx5LWNhcmQtc291cmNlXCIsIHsgY2FyZDogY2FyZCwgcGxheUF1ZGlvUHJvbnVuY2lhdGlvbjogdGhpcy5wbGF5QXVkaW9Qcm9udW5jaWF0aW9uLCBjbGFzczogXCJ2b2NhYmx5LW1iLTZcIiB9KSwgaChcInZvY2FibHktY2FyZC1kZWZpbml0aW9uc1wiLCB7IGNsYXNzOiBcInZvY2FibHktbWItNlwiLCBjYXJkOiBjYXJkIH0pLCBjYXJkLmRhdGEuZXhhbXBsZSAmJiAoaChcImRpdlwiLCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidm9jYWJseS1zbWFsbCB2b2NhYmx5LW1iLTZcIiB9LCBcIkV4YW1wbGU6XCIpLCBoKFwidm9jYWJseS1jYXJkLWV4YW1wbGVzXCIsIHsgZXhhbXBsZTogY2FyZC5kYXRhLmV4YW1wbGUgfSkpKSksIHRoaXMuY2FuQ29uZ3JhdHVsYXRlICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6ICd2b2NhYmx5LWFkZGVkLWNvbmdyYXR1bGF0aW9uJyArXG4gICAgICAgICh0aGlzLmFkZGVkSXRlbUluZGV4ID09PSBpdGVtSW5kZXhcbiAgICAgICAgICA/ICcgdm9jYWJseS1hZGRlZC1jb25ncmF0dWxhdGlvbi12aXNpYmxlJ1xuICAgICAgICAgIDogJycpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ2b2NhYmx5LWFkZGVkLWNvbmdyYXR1bGF0aW9uLWNvbnRlbnRcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidm9jYWJseS1hZGRlZC1jb25ncmF0dWxhdGlvbi1jb250ZW50LTFcIiB9LCBoKFwidm9jYWJseS1maXJzdC10cmFuc2xhdGlvbi1jb25ncmF0dWxhdGlvblwiLCBudWxsKSkpKSkpKSkpKSwgdGhpcy5hc2tGb3JSYXRpbmcgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJ2b2NhYmx5LXJhdGUtY29udGFpbmVyXCIsIHJlZjogKGVsKSA9PiAodGhpcy5hc2tGb3JSYXRpbmdDb250YWluZXIgPSBlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInZvY2FibHktY2FyZHMgdm9jYWJseS1yYXRlLXBhZGRpbmcgdm9jYWJseS1tdC0xMlwiIH0sIGgoXCJ2b2NhYmx5LXJhdGVcIiwgeyBwbGF0Zm9ybTogdGhpcy5leHRlbnNpb25QbGF0Zm9ybSwgb25Vc2VyU2VsZWN0ZWQ6IChjaG9pY2VFdmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGNob2ljZUV2ZW50LmRldGFpbCkge1xuICAgICAgICAgIGNhc2UgJ3Jldmlldyc6XG4gICAgICAgICAgY2FzZSAnZmVlZGJhY2snOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbGF0ZXInOlxuICAgICAgICAgICAgdGhpcy5hc2tGb3JSYXRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndm9jYWJseS1yYXRlLWNvbnRhaW5lci1oaWRkZW4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25ldmVyJzpcbiAgICAgICAgICAgIHRoaXMuYXNrRm9yUmF0aW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZvY2FibHktcmF0ZS1jb250YWluZXItaGlkZGVuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJhdGluZ0ludGVyYWN0aW9uLmVtaXQoY2hvaWNlRXZlbnQuZGV0YWlsKTtcbiAgICAgIH0gfSkpKSksIHRoaXMuaXNGZWVkYmFja0VuYWJsZWQgJiYgIXRoaXMuYXNrRm9yUmF0aW5nICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwidm9jYWJseS1tdC0xMiB2b2NhYmx5LXRleHQtcmlnaHQgdm9jYWJseS1zbWFsbFwiIH0sIGgoXCJhXCIsIHsgaHJlZjogXCJodHRwczovL2FwcC52b2NhYmx5LnByby9mZWVkYmFja1wiLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIGNsYXNzOiBcInZvY2FibHktdGV4dC1saW5rXCIgfSwgXCJBcmUgeW91IG1pc3NpbmcgYW55dGhpbmc/IEZlZWwgZnJlZSB0byBsZXQgbWUga25vdy5cIikpKSkpLCB0aGlzLmxvYWRpbmcgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJ2b2NhYmx5LXJlbG9hZFwiLCBcImRhdGEtdGVzdFwiOiBcInJlbG9hZFwiIH0sIGgoXCJ2b2NhYmx5LXNwaW5uZXJcIiwgbnVsbCkpKSkpKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5Wb2NhYmx5VHJhbnNsYXRpb24uc3R5bGUgPSB2b2NhYmx5VHJhbnNsYXRpb25Dc3M7XG5cbmV4cG9ydCB7IFZvY2FibHlBZGRDYXJkSGludCBhcyB2b2NhYmx5X2FkZF9jYXJkX2hpbnQsIFZvY2FibHlCdXR0b24gYXMgdm9jYWJseV9idXR0b24sIFZvY2FibHlDYXJkRGVmaW5pdGlvbnMgYXMgdm9jYWJseV9jYXJkX2RlZmluaXRpb25zLCBWb2NhYmx5Q2FyZEV4YW1wbGVzIGFzIHZvY2FibHlfY2FyZF9leGFtcGxlcywgVm9jYWJseUNhcmRTb3VyY2UgYXMgdm9jYWJseV9jYXJkX3NvdXJjZSwgVm9jYWJseUNsb3NlQnV0dG9uIGFzIHZvY2FibHlfY2xvc2VfYnV0dG9uLCBWb2NhYmx5Rmlyc3RUcmFuc2xhdGlvbkNvbmdyYXR1bGF0aW9uIGFzIHZvY2FibHlfZmlyc3RfdHJhbnNsYXRpb25fY29uZ3JhdHVsYXRpb24sIFZvY2FibHlJY29uQWRkIGFzIHZvY2FibHlfaWNvbl9hZGQsIFZvY2FibHlJY29uQXJyb3dSaWdodCBhcyB2b2NhYmx5X2ljb25fYXJyb3dfcmlnaHQsIFZvY2FibHlJY29uRXJyb3IgYXMgdm9jYWJseV9pY29uX2Vycm9yLCBWb2NhYmx5SWNvblBsYXlDaXJjbGUgYXMgdm9jYWJseV9pY29uX3BsYXlfY2lyY2xlLCBWb2NhYmx5SWNvblJlbW92ZSBhcyB2b2NhYmx5X2ljb25fcmVtb3ZlLCBWb2NhYmx5SWNvblNwaW4gYXMgdm9jYWJseV9pY29uX3NwaW4sIFZvY2FibHlJY29uVm9sdW1lTWVkaXVtIGFzIHZvY2FibHlfaWNvbl92b2x1bWVfbWVkaXVtLCBWb2NhYmx5TGFuZ3VhZ2UgYXMgdm9jYWJseV9sYW5ndWFnZSwgVm9jYWJseUxvZ28gYXMgdm9jYWJseV9sb2dvLCBWb2NhYmx5TW9iaWxlQnV0dG9uIGFzIHZvY2FibHlfbW9iaWxlX2J1dHRvbiwgVm9jYWJseVBsYXlTb3VuZCBhcyB2b2NhYmx5X3BsYXlfc291bmQsIFZvY2FibHlQb3B1cCBhcyB2b2NhYmx5X3BvcHVwLCBWb2NhYmx5UmF0ZSBhcyB2b2NhYmx5X3JhdGUsIFZvY2FibHlTaWduSW4gYXMgdm9jYWJseV9zaWduX2luLCBWb2NhYmx5U3Bpbm5lciBhcyB2b2NhYmx5X3NwaW5uZXIsIFZvY2FibHlTdWJzY3JpYmUgYXMgdm9jYWJseV9zdWJzY3JpYmUsIFZvY2FibHlUcmFuc2xhdGlvbiBhcyB2b2NhYmx5X3RyYW5zbGF0aW9uIH07XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vdm9jYWJseS1hZGQtY2FyZC1oaW50XzI0LmVudHJ5LmpzXCI6IFtcblx0XHQ0ODY3LFxuXHRcdDY5NFxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gMzQ2OTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4vLyBTaW5jZSBhbGwgcmVmZXJlbmNlZCBjaHVua3MgYXJlIGFscmVhZHkgaW5jbHVkZWRcbi8vIGluIHRoaXMgZmlsZSwgdGhpcyBmdW5jdGlvbiBpcyBlbXB0eSBoZXJlLlxuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKCkgPT4gKFByb21pc2UucmVzb2x2ZSgpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcCBhcyBwcm9taXNlUmVzb2x2ZSwgYiBhcyBib290c3RyYXBMYXp5IH0gZnJvbSAnLi9pbmRleC02OTIyNTFmZS5qcyc7XG5cbi8qXG4gU3RlbmNpbCBDbGllbnQgUGF0Y2ggRXNtIHYyLjE3LjEgfCBNSVQgTGljZW5zZWQgfCBodHRwczovL3N0ZW5jaWxqcy5jb21cbiAqL1xuY29uc3QgcGF0Y2hFc20gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKCk7XG59O1xuXG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50cyA9ICh3aW4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHJldHVybiBwYXRjaEVzbSgpLnRoZW4oKCkgPT4ge1xuICByZXR1cm4gYm9vdHN0cmFwTGF6eShbW1widm9jYWJseS1hZGQtY2FyZC1oaW50XzI0XCIsW1sxLFwidm9jYWJseS10cmFuc2xhdGlvblwiLHtcInBocmFzZVwiOlsxXSxcInJlc3VsdFwiOlsxNl0sXCJsb2FkaW5nXCI6WzRdLFwiZXhpc3RpbmdTb3VyY2VMYW5ndWFnZXNcIjpbMTZdLFwiZXhpc3RpbmdUYXJnZXRMYW5ndWFnZXNcIjpbMTZdLFwiaXNGZWVkYmFja0VuYWJsZWRcIjpbNCxcImlzLWZlZWRiYWNrLWVuYWJsZWRcIl0sXCJhc2tGb3JSYXRpbmdcIjpbNCxcImFzay1mb3ItcmF0aW5nXCJdLFwic291cmNlTGFuZ3VhZ2VcIjpbMSxcInNvdXJjZS1sYW5ndWFnZVwiXSxcInRhcmdldExhbmd1YWdlXCI6WzEsXCJ0YXJnZXQtbGFuZ3VhZ2VcIl0sXCJpc1VwZGF0aW5nXCI6WzE2XSxcInNob3dTYXZlSGludFwiOls0LFwic2hvdy1zYXZlLWhpbnRcIl0sXCJjYW5Db25ncmF0dWxhdGVcIjpbNCxcImNhbi1jb25ncmF0dWxhdGVcIl0sXCJwbGF5QXVkaW9Qcm9udW5jaWF0aW9uXCI6WzE2XSxcImV4dGVuc2lvblBsYXRmb3JtXCI6WzE2XSxcInNhdmVDYXJkQ2xpY2tlZFwiOlszMl0sXCJhZGRlZEl0ZW1JbmRleFwiOlszMl0sXCJwbGF5XCI6WzY0XX1dLFsxLFwidm9jYWJseS1wb3B1cFwiXSxbMSxcInZvY2FibHktYnV0dG9uXCJdLFsxLFwidm9jYWJseS1sYW5ndWFnZVwiLHtcInNvdXJjZUxhbmd1YWdlXCI6WzEsXCJzb3VyY2UtbGFuZ3VhZ2VcIl0sXCJ0YXJnZXRMYW5ndWFnZVwiOlsxLFwidGFyZ2V0LWxhbmd1YWdlXCJdLFwid2FpdGluZ1wiOls0XX1dLFsxLFwidm9jYWJseS1tb2JpbGUtYnV0dG9uXCJdLFsxLFwidm9jYWJseS1zaWduLWluXCJdLFsxLFwidm9jYWJseS1zdWJzY3JpYmVcIix7XCJ0cmlhbFwiOls0XX1dLFswLFwidm9jYWJseS1jYXJkLXNvdXJjZVwiLHtcImNhcmRcIjpbMTZdLFwicGxheUF1ZGlvUHJvbnVuY2lhdGlvblwiOlsxNl19XSxbMSxcInZvY2FibHktYWRkLWNhcmQtaGludFwiXSxbMCxcInZvY2FibHktY2FyZC1kZWZpbml0aW9uc1wiLHtcImNhcmRcIjpbMTZdfV0sWzAsXCJ2b2NhYmx5LWNhcmQtZXhhbXBsZXNcIix7XCJleGFtcGxlXCI6WzFdfV0sWzAsXCJ2b2NhYmx5LWNsb3NlLWJ1dHRvblwiXSxbMSxcInZvY2FibHktZmlyc3QtdHJhbnNsYXRpb24tY29uZ3JhdHVsYXRpb25cIl0sWzEsXCJ2b2NhYmx5LWljb24tYWRkXCJdLFsxLFwidm9jYWJseS1pY29uLWFycm93LXJpZ2h0XCJdLFsxLFwidm9jYWJseS1pY29uLXJlbW92ZVwiXSxbMSxcInZvY2FibHktaWNvbi1zcGluXCJdLFsxLFwidm9jYWJseS1sb2dvXCJdLFswLFwidm9jYWJseS1yYXRlXCIse1wicGxhdGZvcm1cIjpbMTZdfV0sWzEsXCJ2b2NhYmx5LXNwaW5uZXJcIl0sWzEsXCJ2b2NhYmx5LXBsYXktc291bmRcIix7XCJ0ZXh0XCI6WzFdLFwibGFuZ3VhZ2VcIjpbMV0sXCJwbGF5QXVkaW9Qcm9udW5jaWF0aW9uXCI6WzE2XSxcImlzTG9hZGluZ1wiOlszMl0sXCJpc1BsYXlpbmdcIjpbMzJdLFwiaXNQbGF5RXJyb3JcIjpbMzJdLFwicGxheVwiOls2NF19XSxbMSxcInZvY2FibHktaWNvbi1lcnJvclwiXSxbMSxcInZvY2FibHktaWNvbi1wbGF5LWNpcmNsZVwiXSxbMSxcInZvY2FibHktaWNvbi12b2x1bWUtbWVkaXVtXCJdXV1dLCBvcHRpb25zKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyB9O1xuIiwiXG4oZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdyYmdm9pZCAwIT09d2luZG93LlJlZmxlY3QmJnZvaWQgMCE9PXdpbmRvdy5jdXN0b21FbGVtZW50cyl7dmFyIGE9SFRNTEVsZW1lbnQ7d2luZG93LkhUTUxFbGVtZW50PWZ1bmN0aW9uKCl7cmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGEsW10sdGhpcy5jb25zdHJ1Y3Rvcil9O0hUTUxFbGVtZW50LnByb3RvdHlwZT1hLnByb3RvdHlwZTtIVE1MRWxlbWVudC5wcm90b3R5cGUuY29uc3RydWN0b3I9SFRNTEVsZW1lbnQ7T2JqZWN0LnNldFByb3RvdHlwZU9mKEhUTUxFbGVtZW50LGEpfX0pKCk7XG5leHBvcnQgKiBmcm9tICcuLi9kaXN0L2VzbS9wb2x5ZmlsbHMvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi4vZGlzdC9lc20vbG9hZGVyLmpzJztcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0Z1bmN0aW9uLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFcnJvckNsYXNzKGNyZWF0ZUltcGwpIHtcbiAgICB2YXIgX3N1cGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIEVycm9yLmNhbGwoaW5zdGFuY2UpO1xuICAgICAgICBpbnN0YW5jZS5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIH07XG4gICAgdmFyIGN0b3JGdW5jID0gY3JlYXRlSW1wbChfc3VwZXIpO1xuICAgIGN0b3JGdW5jLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICBjdG9yRnVuYy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yRnVuYztcbiAgICByZXR1cm4gY3RvckZ1bmM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVFcnJvckNsYXNzLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuZXhwb3J0IHZhciBVbnN1YnNjcmlwdGlvbkVycm9yID0gY3JlYXRlRXJyb3JDbGFzcyhmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsKGVycm9ycykge1xuICAgICAgICBfc3VwZXIodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yc1xuICAgICAgICAgICAgPyBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG5cIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gaSArIDEgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKTsgfSkuam9pbignXFxuICAnKVxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VbnN1YnNjcmlwdGlvbkVycm9yLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBhcnJSZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFycikge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgMCA8PSBpbmRleCAmJiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJSZW1vdmUuanMubWFwIiwiaW1wb3J0IHsgX19yZWFkLCBfX3NwcmVhZEFycmF5LCBfX3ZhbHVlcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IFVuc3Vic2NyaXB0aW9uRXJyb3IgfSBmcm9tICcuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcic7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcbnZhciBTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihpbml0aWFsVGVhcmRvd24pIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGVhcmRvd24gPSBpbml0aWFsVGVhcmRvd247XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2ZpbmFsaXplcnMgPSBudWxsO1xuICAgIH1cbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8xLCBfYSwgZV8yLCBfYjtcbiAgICAgICAgdmFyIGVycm9ycztcbiAgICAgICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgICAgICBpZiAoX3BhcmVudGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9wYXJlbnRhZ2VfMSA9IF9fdmFsdWVzKF9wYXJlbnRhZ2UpLCBfcGFyZW50YWdlXzFfMSA9IF9wYXJlbnRhZ2VfMS5uZXh0KCk7ICFfcGFyZW50YWdlXzFfMS5kb25lOyBfcGFyZW50YWdlXzFfMSA9IF9wYXJlbnRhZ2VfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50XzEgPSBfcGFyZW50YWdlXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRfMS5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfcGFyZW50YWdlXzFfMSAmJiAhX3BhcmVudGFnZV8xXzEuZG9uZSAmJiAoX2EgPSBfcGFyZW50YWdlXzEucmV0dXJuKSkgX2EuY2FsbChfcGFyZW50YWdlXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50YWdlLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5pdGlhbEZpbmFsaXplciA9IHRoaXMuaW5pdGlhbFRlYXJkb3duO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oaW5pdGlhbEZpbmFsaXplcikpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsRmluYWxpemVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yID8gZS5lcnJvcnMgOiBbZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycztcbiAgICAgICAgICAgIGlmIChfZmluYWxpemVycykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbmFsaXplcnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9maW5hbGl6ZXJzXzEgPSBfX3ZhbHVlcyhfZmluYWxpemVycyksIF9maW5hbGl6ZXJzXzFfMSA9IF9maW5hbGl6ZXJzXzEubmV4dCgpOyAhX2ZpbmFsaXplcnNfMV8xLmRvbmU7IF9maW5hbGl6ZXJzXzFfMSA9IF9maW5hbGl6ZXJzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmluYWxpemVyID0gX2ZpbmFsaXplcnNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjRmluYWxpemVyKGZpbmFsaXplcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzICE9PSBudWxsICYmIGVycm9ycyAhPT0gdm9pZCAwID8gZXJyb3JzIDogW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoZXJyb3JzKSksIF9fcmVhZChlcnIuZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9maW5hbGl6ZXJzXzFfMSAmJiAhX2ZpbmFsaXplcnNfMV8xLmRvbmUgJiYgKF9iID0gX2ZpbmFsaXplcnNfMS5yZXR1cm4pKSBfYi5jYWxsKF9maW5hbGl6ZXJzXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGVhcmRvd24gJiYgdGVhcmRvd24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIodGVhcmRvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZWFyZG93bi5jbG9zZWQgfHwgdGVhcmRvd24uX2hhc1BhcmVudCh0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRlYXJkb3duLl9hZGRQYXJlbnQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICh0aGlzLl9maW5hbGl6ZXJzID0gKF9hID0gdGhpcy5fZmluYWxpemVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10pLnB1c2godGVhcmRvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLl9oYXNQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHZhciBfcGFyZW50YWdlID0gdGhpcy5fcGFyZW50YWdlO1xuICAgICAgICByZXR1cm4gX3BhcmVudGFnZSA9PT0gcGFyZW50IHx8IChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpICYmIF9wYXJlbnRhZ2UuaW5jbHVkZXMocGFyZW50KSk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLl9hZGRQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHZhciBfcGFyZW50YWdlID0gdGhpcy5fcGFyZW50YWdlO1xuICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpID8gKF9wYXJlbnRhZ2UucHVzaChwYXJlbnQpLCBfcGFyZW50YWdlKSA6IF9wYXJlbnRhZ2UgPyBbX3BhcmVudGFnZSwgcGFyZW50XSA6IHBhcmVudDtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX3JlbW92ZVBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIGlmIChfcGFyZW50YWdlID09PSBwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgICAgYXJyUmVtb3ZlKF9wYXJlbnRhZ2UsIHBhcmVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHRlYXJkb3duKSB7XG4gICAgICAgIHZhciBfZmluYWxpemVycyA9IHRoaXMuX2ZpbmFsaXplcnM7XG4gICAgICAgIF9maW5hbGl6ZXJzICYmIGFyclJlbW92ZShfZmluYWxpemVycywgdGVhcmRvd24pO1xuICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRlYXJkb3duLl9yZW1vdmVQYXJlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5FTVBUWSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbXB0eSA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgZW1wdHkuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBTdWJzY3JpcHRpb24gfTtcbmV4cG9ydCB2YXIgRU1QVFlfU1VCU0NSSVBUSU9OID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3Vic2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbiB8fFxuICAgICAgICAodmFsdWUgJiYgJ2Nsb3NlZCcgaW4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5yZW1vdmUpICYmIGlzRnVuY3Rpb24odmFsdWUuYWRkKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnVuc3Vic2NyaWJlKSkpO1xufVxuZnVuY3Rpb24gZXhlY0ZpbmFsaXplcihmaW5hbGl6ZXIpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihmaW5hbGl6ZXIpKSB7XG4gICAgICAgIGZpbmFsaXplcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmluYWxpemVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaXB0aW9uLmpzLm1hcCIsImV4cG9ydCB2YXIgY29uZmlnID0ge1xuICAgIG9uVW5oYW5kbGVkRXJyb3I6IG51bGwsXG4gICAgb25TdG9wcGVkTm90aWZpY2F0aW9uOiBudWxsLFxuICAgIFByb21pc2U6IHVuZGVmaW5lZCxcbiAgICB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nOiBmYWxzZSxcbiAgICB1c2VEZXByZWNhdGVkTmV4dENvbnRleHQ6IGZhbHNlLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmV4cG9ydCB2YXIgdGltZW91dFByb3ZpZGVyID0ge1xuICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRpbWVvdXRQcm92aWRlci5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlID09PSBudWxsIHx8IGRlbGVnYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWxlZ2F0ZS5zZXRUaW1lb3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuc2V0VGltZW91dC5hcHBseShkZWxlZ2F0ZSwgX19zcHJlYWRBcnJheShbaGFuZGxlciwgdGltZW91dF0sIF9fcmVhZChhcmdzKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0LmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbaGFuZGxlciwgdGltZW91dF0sIF9fcmVhZChhcmdzKSkpO1xuICAgIH0sXG4gICAgY2xlYXJUaW1lb3V0OiBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRpbWVvdXRQcm92aWRlci5kZWxlZ2F0ZTtcbiAgICAgICAgcmV0dXJuICgoZGVsZWdhdGUgPT09IG51bGwgfHwgZGVsZWdhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGVnYXRlLmNsZWFyVGltZW91dCkgfHwgY2xlYXJUaW1lb3V0KShoYW5kbGUpO1xuICAgIH0sXG4gICAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aW1lb3V0UHJvdmlkZXIuanMubWFwIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHRpbWVvdXRQcm92aWRlciB9IGZyb20gJy4uL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycikge1xuICAgIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9uVW5oYW5kbGVkRXJyb3IgPSBjb25maWcub25VbmhhbmRsZWRFcnJvcjtcbiAgICAgICAgaWYgKG9uVW5oYW5kbGVkRXJyb3IpIHtcbiAgICAgICAgICAgIG9uVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVwb3J0VW5oYW5kbGVkRXJyb3IuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vb3AuanMubWFwIiwiZXhwb3J0IHZhciBDT01QTEVURV9OT1RJRklDQVRJT04gPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdDJywgdW5kZWZpbmVkLCB1bmRlZmluZWQpOyB9KSgpO1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yTm90aWZpY2F0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyb3IpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5leHROb3RpZmljYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdOJywgdmFsdWUsIHVuZGVmaW5lZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKGtpbmQsIHZhbHVlLCBlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpZmljYXRpb25GYWN0b3JpZXMuanMubWFwIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbnZhciBjb250ZXh0ID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBlcnJvckNvbnRleHQoY2IpIHtcbiAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgdmFyIGlzUm9vdCA9ICFjb250ZXh0O1xuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0geyBlcnJvclRocm93bjogZmFsc2UsIGVycm9yOiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgY2IoKTtcbiAgICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICAgICAgdmFyIF9hID0gY29udGV4dCwgZXJyb3JUaHJvd24gPSBfYS5lcnJvclRocm93biwgZXJyb3IgPSBfYS5lcnJvcjtcbiAgICAgICAgICAgIGNvbnRleHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNiKCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNhcHR1cmVFcnJvcihlcnIpIHtcbiAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgJiYgY29udGV4dCkge1xuICAgICAgICBjb250ZXh0LmVycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgY29udGV4dC5lcnJvciA9IGVycjtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvckNvbnRleHQuanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWwvbm9vcCc7XG5pbXBvcnQgeyBuZXh0Tm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbiwgQ09NUExFVEVfTk9USUZJQ0FUSU9OIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25GYWN0b3JpZXMnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmltcG9ydCB7IGNhcHR1cmVFcnJvciB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xudmFyIFN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YnNjcmliZXIoZGVzdGluYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIGlmIChpc1N1YnNjcmlwdGlvbihkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5hZGQoX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBFTVBUWV9PQlNFUlZFUjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YnNjcmliZXIuY3JlYXRlID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFNhZmVTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihuZXh0Tm90aWZpY2F0aW9uKHZhbHVlKSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihlcnJvck5vdGlmaWNhdGlvbihlcnIpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oQ09NUExFVEVfTk9USUZJQ0FUSU9OLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uKSk7XG5leHBvcnQgeyBTdWJzY3JpYmVyIH07XG52YXIgX2JpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gX2JpbmQuY2FsbChmbiwgdGhpc0FyZyk7XG59XG52YXIgQ29uc3VtZXJPYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29uc3VtZXJPYnNlcnZlcihwYXJ0aWFsT2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5wYXJ0aWFsT2JzZXJ2ZXIgPSBwYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgfVxuICAgIENvbnN1bWVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25zdW1lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uc3VtZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYXJ0aWFsT2JzZXJ2ZXIgPSB0aGlzLnBhcnRpYWxPYnNlcnZlcjtcbiAgICAgICAgaWYgKHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbnN1bWVyT2JzZXJ2ZXI7XG59KCkpO1xudmFyIFNhZmVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkgfHwgIW9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgbmV4dDogKG9ic2VydmVyT3JOZXh0ICE9PSBudWxsICYmIG9ic2VydmVyT3JOZXh0ICE9PSB2b2lkIDAgPyBvYnNlcnZlck9yTmV4dCA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgPyBlcnJvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogY29tcGxldGUgIT09IG51bGwgJiYgY29tcGxldGUgIT09IHZvaWQgMCA/IGNvbXBsZXRlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0XzE7XG4gICAgICAgICAgICBpZiAoX3RoaXMgJiYgY29uZmlnLnVzZURlcHJlY2F0ZWROZXh0Q29udGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfMSA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfMS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyID0ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiBvYnNlcnZlck9yTmV4dC5uZXh0ICYmIGJpbmQob2JzZXJ2ZXJPck5leHQubmV4dCwgY29udGV4dF8xKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG9ic2VydmVyT3JOZXh0LmVycm9yICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuZXJyb3IsIGNvbnRleHRfMSksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlLCBjb250ZXh0XzEpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFNhZmVTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBTYWZlU3Vic2NyaWJlciB9O1xuZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgY2FwdHVyZUVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWZhdWx0RXJyb3JIYW5kbGVyKGVycikge1xuICAgIHRocm93IGVycjtcbn1cbmZ1bmN0aW9uIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBzdWJzY3JpYmVyKSB7XG4gICAgdmFyIG9uU3RvcHBlZE5vdGlmaWNhdGlvbiA9IGNvbmZpZy5vblN0b3BwZWROb3RpZmljYXRpb247XG4gICAgb25TdG9wcGVkTm90aWZpY2F0aW9uICYmIHRpbWVvdXRQcm92aWRlci5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpOyB9KTtcbn1cbmV4cG9ydCB2YXIgRU1QVFlfT0JTRVJWRVIgPSB7XG4gICAgY2xvc2VkOiB0cnVlLFxuICAgIG5leHQ6IG5vb3AsXG4gICAgZXJyb3I6IGRlZmF1bHRFcnJvckhhbmRsZXIsXG4gICAgY29tcGxldGU6IG5vb3AsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaWJlci5qcy5tYXAiLCJleHBvcnQgdmFyIG9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUpIHx8ICdAQG9ic2VydmFibGUnOyB9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2YWJsZS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICAgIHJldHVybiB4O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWRlbnRpdHkuanMubWFwIiwiaW1wb3J0IHsgaWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5JztcbmV4cG9ydCBmdW5jdGlvbiBwaXBlKCkge1xuICAgIHZhciBmbnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBmbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwaXBlRnJvbUFycmF5KGZucykge1xuICAgIGlmIChmbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpZGVudGl0eTtcbiAgICB9XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZuc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBpcGVkKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBmbnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBmbikgeyByZXR1cm4gZm4ocHJldik7IH0sIGlucHV0KTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGlwZS5qcy5tYXAiLCJpbXBvcnQgeyBTYWZlU3Vic2NyaWJlciwgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBpc1N1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHBpcGVGcm9tQXJyYXkgfSBmcm9tICcuL3V0aWwvcGlwZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG52YXIgT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmUpIHtcbiAgICAgICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3Vic2NyaWJlciA9IGlzU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCkgPyBvYnNlcnZlck9yTmV4dCA6IG5ldyBTYWZlU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgICAgZXJyb3JDb250ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLCBvcGVyYXRvciA9IF9hLm9wZXJhdG9yLCBzb3VyY2UgPSBfYS5zb3VyY2U7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChvcGVyYXRvclxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IuY2FsbChzdWJzY3JpYmVyLCBzb3VyY2UpXG4gICAgICAgICAgICAgICAgOiBzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3N1YnNjcmliZShzdWJzY3JpYmVyKVxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fdHJ5U3Vic2NyaWJlKHN1YnNjcmliZXIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3RyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIChzaW5rKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKHNpbmspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChuZXh0LCBwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaWJlciA9IG5ldyBTYWZlU3Vic2NyaWJlcih7XG4gICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLnNvdXJjZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlW1N5bWJvbF9vYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3BlcmF0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgb3BlcmF0aW9uc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAoeCkgeyByZXR1cm4gKHZhbHVlID0geCk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHJlamVjdChlcnIpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHZhbHVlKTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmUpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGU7XG59KCkpO1xuZXhwb3J0IHsgT2JzZXJ2YWJsZSB9O1xuZnVuY3Rpb24gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIChfYSA9IHByb21pc2VDdG9yICE9PSBudWxsICYmIHByb21pc2VDdG9yICE9PSB2b2lkIDAgPyBwcm9taXNlQ3RvciA6IGNvbmZpZy5Qcm9taXNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBQcm9taXNlO1xufVxuZnVuY3Rpb24gaXNPYnNlcnZlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLm5leHQpICYmIGlzRnVuY3Rpb24odmFsdWUuZXJyb3IpICYmIGlzRnVuY3Rpb24odmFsdWUuY29tcGxldGUpO1xufVxuZnVuY3Rpb24gaXNTdWJzY3JpYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHx8IChpc09ic2VydmVyKHZhbHVlKSAmJiBpc1N1YnNjcmlwdGlvbih2YWx1ZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcbmV4cG9ydCB2YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBjcmVhdGVFcnJvckNsYXNzKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsKCkge1xuICAgICAgICBfc3VwZXIodGhpcyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdPYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgRU1QVFlfU1VCU0NSSVBUSU9OIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMudGhyb3duRXJyb3IgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3QucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICAgICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gc3ViamVjdDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90aHJvd0lmQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gQXJyYXkuZnJvbShfdGhpcy5vYnNlcnZlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKF90aGlzLmN1cnJlbnRPYnNlcnZlcnMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZXJyb3JDb250ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhhc0Vycm9yID0gX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN1YmplY3QucHJvdG90eXBlLCBcIm9ic2VydmVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKChfYSA9IHRoaXMub2JzZXJ2ZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICB0aGlzLl9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5faW5uZXJTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBoYXNFcnJvciA9IF9hLmhhc0Vycm9yLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQsIG9ic2VydmVycyA9IF9hLm9ic2VydmVycztcbiAgICAgICAgaWYgKGhhc0Vycm9yIHx8IGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZX1NVQlNDUklQVElPTjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgICBvYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgICAgICBhcnJSZW1vdmUob2JzZXJ2ZXJzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGhhc0Vycm9yID0gX2EuaGFzRXJyb3IsIHRocm93bkVycm9yID0gX2EudGhyb3duRXJyb3IsIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZDtcbiAgICAgICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRocm93bkVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBTdWJqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgICB9O1xuICAgIHJldHVybiBTdWJqZWN0O1xufShPYnNlcnZhYmxlKSk7XG5leHBvcnQgeyBTdWJqZWN0IH07XG52YXIgQW5vbnltb3VzU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFub255bW91c1N1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIF90aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdmFsdWUpO1xuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGVycik7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kZXN0aW5hdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBFTVBUWV9TVUJTQ1JJUFRJT047XG4gICAgfTtcbiAgICByZXR1cm4gQW5vbnltb3VzU3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0IHsgQW5vbnltb3VzU3ViamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdC5qcy5tYXAiLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBoYXNMaWZ0KHNvdXJjZSkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHNvdXJjZSA9PT0gbnVsbCB8fCBzb3VyY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNvdXJjZS5saWZ0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRlKGluaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICBpZiAoaGFzTGlmdChzb3VyY2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlLmxpZnQoZnVuY3Rpb24gKGxpZnRlZFNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbml0KGxpZnRlZFNvdXJjZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuYWJsZSB0byBsaWZ0IHVua25vd24gT2JzZXJ2YWJsZSB0eXBlJyk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpZnQuanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpIHtcbiAgICByZXR1cm4gbmV3IE9wZXJhdG9yU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb25OZXh0LCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvbkZpbmFsaXplKTtcbn1cbnZhciBPcGVyYXRvclN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPcGVyYXRvclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUsIHNob3VsZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vbkZpbmFsaXplID0gb25GaW5hbGl6ZTtcbiAgICAgICAgX3RoaXMuc2hvdWxkVW5zdWJzY3JpYmUgPSBzaG91bGRVbnN1YnNjcmliZTtcbiAgICAgICAgX3RoaXMuX25leHQgPSBvbk5leHRcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25OZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogX3N1cGVyLnByb3RvdHlwZS5fbmV4dDtcbiAgICAgICAgX3RoaXMuX2Vycm9yID0gb25FcnJvclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9lcnJvcjtcbiAgICAgICAgX3RoaXMuX2NvbXBsZXRlID0gb25Db21wbGV0ZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPcGVyYXRvclN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRVbnN1YnNjcmliZSB8fCB0aGlzLnNob3VsZFVuc3Vic2NyaWJlKCkpIHtcbiAgICAgICAgICAgIHZhciBjbG9zZWRfMSA9IHRoaXMuY2xvc2VkO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgIWNsb3NlZF8xICYmICgoX2EgPSB0aGlzLm9uRmluYWxpemUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE9wZXJhdG9yU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgT3BlcmF0b3JTdWJzY3JpYmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PcGVyYXRvclN1YnNjcmliZXIuanMubWFwIiwiaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gbWFwKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHByb2plY3QuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgrKykpO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIiwiZXhwb3J0IHZhciBpc0FycmF5TGlrZSA9IChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nOyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXlMaWtlLmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tIFwiLi9pc0Z1bmN0aW9uXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24odmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnRoZW4pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNQcm9taXNlLmpzLm1hcCIsImltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oaW5wdXRbU3ltYm9sX29ic2VydmFibGVdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzSW50ZXJvcE9ic2VydmFibGUuanMubWFwIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaXNBc3luY0l0ZXJhYmxlKG9iaikge1xuICAgIHJldHVybiBTeW1ib2wuYXN5bmNJdGVyYXRvciAmJiBpc0Z1bmN0aW9uKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNBc3luY0l0ZXJhYmxlLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IHByb3ZpZGVkIFwiICsgKGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgPyAnYW4gaW52YWxpZCBvYmplY3QnIDogXCInXCIgKyBpbnB1dCArIFwiJ1wiKSArIFwiIHdoZXJlIGEgc3RyZWFtIHdhcyBleHBlY3RlZC4gWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIFJlYWRhYmxlU3RyZWFtLCBBcnJheSwgQXN5bmNJdGVyYWJsZSwgb3IgSXRlcmFibGUuXCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3dVbm9ic2VydmFibGVFcnJvci5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sSXRlcmF0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgIVN5bWJvbC5pdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gJ0BAaXRlcmF0b3InO1xuICAgIH1cbiAgICByZXR1cm4gU3ltYm9sLml0ZXJhdG9yO1xufVxuZXhwb3J0IHZhciBpdGVyYXRvciA9IGdldFN5bWJvbEl0ZXJhdG9yKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pdGVyYXRvci5qcy5tYXAiLCJpbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaXNJdGVyYWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dFtTeW1ib2xfaXRlcmF0b3JdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzSXRlcmFibGUuanMubWFwIiwiaW1wb3J0IHsgX19hc3luY0dlbmVyYXRvciwgX19hd2FpdCwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IocmVhZGFibGVTdHJlYW0pIHtcbiAgICByZXR1cm4gX19hc3luY0dlbmVyYXRvcih0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3JfMSgpIHtcbiAgICAgICAgdmFyIHJlYWRlciwgX2EsIHZhbHVlLCBkb25lO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSByZWFkYWJsZVN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCAsIDksIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJ1ZSkgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfX2F3YWl0KHJlYWRlci5yZWFkKCkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpLCB2YWx1ZSA9IF9hLnZhbHVlLCBkb25lID0gX2EuZG9uZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb25lKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIF9fYXdhaXQodm9pZCAwKV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIsIF9iLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzQsIF9fYXdhaXQodmFsdWUpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbNCwgX2Iuc2VudCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMywgMTBdO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkYWJsZVN0cmVhbUxpa2Uob2JqKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2JqLmdldFJlYWRlcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1JlYWRhYmxlU3RyZWFtTGlrZS5qcy5tYXAiLCJpbXBvcnQgeyBfX2FzeW5jVmFsdWVzLCBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yLCBfX3ZhbHVlcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWwvaXNQcm9taXNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJdGVyYWJsZSc7XG5pbXBvcnQgeyBpc1JlYWRhYmxlU3RyZWFtTGlrZSwgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyByZXBvcnRVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4uL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcbmV4cG9ydCBmdW5jdGlvbiBpbm5lckZyb20oaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUludGVyb3BPYnNlcnZhYmxlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUFycmF5TGlrZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tUHJvbWlzZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXN5bmNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUl0ZXJhYmxlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVJlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21JbnRlcm9wT2JzZXJ2YWJsZShvYmopIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIG9icyA9IG9ialtTeW1ib2xfb2JzZXJ2YWJsZV0oKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob2JzLnN1YnNjcmliZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3ZpZGVkIG9iamVjdCBkb2VzIG5vdCBjb3JyZWN0bHkgaW1wbGVtZW50IFN5bWJvbC5vYnNlcnZhYmxlJyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUFycmF5TGlrZShhcnJheSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aCAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbVByb21pc2UocHJvbWlzZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBwcm9taXNlXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KVxuICAgICAgICAgICAgLnRoZW4obnVsbCwgcmVwb3J0VW5oYW5kbGVkRXJyb3IpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21JdGVyYWJsZShpdGVyYWJsZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZXJhYmxlXzEgPSBfX3ZhbHVlcyhpdGVyYWJsZSksIGl0ZXJhYmxlXzFfMSA9IGl0ZXJhYmxlXzEubmV4dCgpOyAhaXRlcmFibGVfMV8xLmRvbmU7IGl0ZXJhYmxlXzFfMSA9IGl0ZXJhYmxlXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaXRlcmFibGVfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYWJsZV8xXzEgJiYgIWl0ZXJhYmxlXzFfMS5kb25lICYmIChfYSA9IGl0ZXJhYmxlXzEucmV0dXJuKSkgX2EuY2FsbChpdGVyYWJsZV8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUFzeW5jSXRlcmFibGUoYXN5bmNJdGVyYWJsZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBwcm9jZXNzKGFzeW5jSXRlcmFibGUsIHN1YnNjcmliZXIpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbVJlYWRhYmxlU3RyZWFtTGlrZShyZWFkYWJsZVN0cmVhbSkge1xuICAgIHJldHVybiBmcm9tQXN5bmNJdGVyYWJsZShyZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yKHJlYWRhYmxlU3RyZWFtKSk7XG59XG5mdW5jdGlvbiBwcm9jZXNzKGFzeW5jSXRlcmFibGUsIHN1YnNjcmliZXIpIHtcbiAgICB2YXIgYXN5bmNJdGVyYWJsZV8xLCBhc3luY0l0ZXJhYmxlXzFfMTtcbiAgICB2YXIgZV8yLCBfYTtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSwgZV8yXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgNSwgNiwgMTFdKTtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmNJdGVyYWJsZV8xID0gX19hc3luY1ZhbHVlcyhhc3luY0l0ZXJhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0LCBhc3luY0l0ZXJhYmxlXzEubmV4dCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGFzeW5jSXRlcmFibGVfMV8xID0gX2Iuc2VudCgpLCAhYXN5bmNJdGVyYWJsZV8xXzEuZG9uZSkpIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYXN5bmNJdGVyYWJsZV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzMsIDFdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFszLCAxMV07XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBlXzJfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZV8yID0geyBlcnJvcjogZV8yXzEgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxMV07XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzYsICwgOSwgMTBdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoYXN5bmNJdGVyYWJsZV8xXzEgJiYgIWFzeW5jSXRlcmFibGVfMV8xLmRvbmUgJiYgKF9hID0gYXN5bmNJdGVyYWJsZV8xLnJldHVybikpKSByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIF9hLmNhbGwoYXN5bmNJdGVyYWJsZV8xKV07XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gODtcbiAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMywgMTBdO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzddO1xuICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlubmVyRnJvbS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVNjaGVkdWxlKHBhcmVudFN1YnNjcmlwdGlvbiwgc2NoZWR1bGVyLCB3b3JrLCBkZWxheSwgcmVwZWF0KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgaWYgKHJlcGVhdCA9PT0gdm9pZCAwKSB7IHJlcGVhdCA9IGZhbHNlOyB9XG4gICAgdmFyIHNjaGVkdWxlU3Vic2NyaXB0aW9uID0gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd29yaygpO1xuICAgICAgICBpZiAocmVwZWF0KSB7XG4gICAgICAgICAgICBwYXJlbnRTdWJzY3JpcHRpb24uYWRkKHRoaXMuc2NoZWR1bGUobnVsbCwgZGVsYXkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgICBwYXJlbnRTdWJzY3JpcHRpb24uYWRkKHNjaGVkdWxlU3Vic2NyaXB0aW9uKTtcbiAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVTdWJzY3JpcHRpb247XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhlY3V0ZVNjaGVkdWxlLmpzLm1hcCIsImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUludGVybmFscyhzb3VyY2UsIHN1YnNjcmliZXIsIHByb2plY3QsIGNvbmN1cnJlbnQsIG9uQmVmb3JlTmV4dCwgZXhwYW5kLCBpbm5lclN1YlNjaGVkdWxlciwgYWRkaXRpb25hbEZpbmFsaXplcikge1xuICAgIHZhciBidWZmZXIgPSBbXTtcbiAgICB2YXIgYWN0aXZlID0gMDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdmFyIGNoZWNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlICYmICFidWZmZXIubGVuZ3RoICYmICFhY3RpdmUpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG91dGVyTmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKGFjdGl2ZSA8IGNvbmN1cnJlbnQgPyBkb0lubmVyU3ViKHZhbHVlKSA6IGJ1ZmZlci5wdXNoKHZhbHVlKSk7IH07XG4gICAgdmFyIGRvSW5uZXJTdWIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZXhwYW5kICYmIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgIGFjdGl2ZSsrO1xuICAgICAgICB2YXIgaW5uZXJDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBpbm5lckZyb20ocHJvamVjdCh2YWx1ZSwgaW5kZXgrKykpLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKGlubmVyVmFsdWUpIHtcbiAgICAgICAgICAgIG9uQmVmb3JlTmV4dCA9PT0gbnVsbCB8fCBvbkJlZm9yZU5leHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQmVmb3JlTmV4dChpbm5lclZhbHVlKTtcbiAgICAgICAgICAgIGlmIChleHBhbmQpIHtcbiAgICAgICAgICAgICAgICBvdXRlck5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlubmVyQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9LCB1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpbm5lckNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlLS07XG4gICAgICAgICAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlcmVkVmFsdWUgPSBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbm5lclN1YlNjaGVkdWxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBpbm5lclN1YlNjaGVkdWxlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9Jbm5lclN1YihidWZmZXJlZFZhbHVlKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0lubmVyU3ViKGJ1ZmZlcmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCAmJiBhY3RpdmUgPCBjb25jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIG91dGVyTmV4dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRpdGlvbmFsRmluYWxpemVyID09PSBudWxsIHx8IGFkZGl0aW9uYWxGaW5hbGl6ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZGl0aW9uYWxGaW5hbGl6ZXIoKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VJbnRlcm5hbHMuanMubWFwIiwiaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBtZXJnZUludGVybmFscyB9IGZyb20gJy4vbWVyZ2VJbnRlcm5hbHMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXAocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IsIGNvbmN1cnJlbnQpIHtcbiAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7IGNvbmN1cnJlbnQgPSBJbmZpbml0eTsgfVxuICAgIGlmIChpc0Z1bmN0aW9uKHJlc3VsdFNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gbWVyZ2VNYXAoZnVuY3Rpb24gKGEsIGkpIHsgcmV0dXJuIG1hcChmdW5jdGlvbiAoYiwgaWkpIHsgcmV0dXJuIHJlc3VsdFNlbGVjdG9yKGEsIGIsIGksIGlpKTsgfSkoaW5uZXJGcm9tKHByb2plY3QoYSwgaSkpKTsgfSwgY29uY3VycmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiByZXN1bHRTZWxlY3RvciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uY3VycmVudCA9IHJlc3VsdFNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7IHJldHVybiBtZXJnZUludGVybmFscyhzb3VyY2UsIHN1YnNjcmliZXIsIHByb2plY3QsIGNvbmN1cnJlbnQpOyB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlTWFwLmpzLm1hcCIsImltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAnLi9tZXJnZU1hcCc7XG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4uL3V0aWwvaWRlbnRpdHknO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQWxsKGNvbmN1cnJlbnQpIHtcbiAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7IGNvbmN1cnJlbnQgPSBJbmZpbml0eTsgfVxuICAgIHJldHVybiBtZXJnZU1hcChpZGVudGl0eSwgY29uY3VycmVudCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnZUFsbC5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgdmFyIEVNUFRZID0gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7XG5leHBvcnQgZnVuY3Rpb24gZW1wdHkoc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIHNjaGVkdWxlciA/IGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcikgOiBFTVBUWTtcbn1cbmZ1bmN0aW9uIGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaXNTY2hlZHVsZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5zY2hlZHVsZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1NjaGVkdWxlci5qcy5tYXAiLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi9pc1NjaGVkdWxlcic7XG5mdW5jdGlvbiBsYXN0KGFycikge1xuICAgIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcFJlc3VsdFNlbGVjdG9yKGFyZ3MpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihsYXN0KGFyZ3MpKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9wU2NoZWR1bGVyKGFyZ3MpIHtcbiAgICByZXR1cm4gaXNTY2hlZHVsZXIobGFzdChhcmdzKSkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcE51bWJlcihhcmdzLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIGxhc3QoYXJncykgPT09ICdudW1iZXInID8gYXJncy5wb3AoKSA6IGRlZmF1bHRWYWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyZ3MuanMubWFwIiwiaW1wb3J0IHsgZXhlY3V0ZVNjaGVkdWxlIH0gZnJvbSAnLi4vdXRpbC9leGVjdXRlU2NoZWR1bGUnO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZU9uKHNjaGVkdWxlciwgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICByZXR1cm4gb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5uZXh0KHZhbHVlKTsgfSwgZGVsYXkpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0sIGRlbGF5KTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9LCBkZWxheSk7IH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmVPbi5qcy5tYXAiLCJpbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVPbihzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTsgfSwgZGVsYXkpKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZU9uLmpzLm1hcCIsImltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9ic2VydmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9vYnNlcnZlT24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvc3Vic2NyaWJlT24nO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlT2JzZXJ2YWJsZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIGlubmVyRnJvbShpbnB1dCkucGlwZShzdWJzY3JpYmVPbihzY2hlZHVsZXIpLCBvYnNlcnZlT24oc2NoZWR1bGVyKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZU9ic2VydmFibGUuanMubWFwIiwiaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9pbm5lckZyb20nO1xuaW1wb3J0IHsgb2JzZXJ2ZU9uIH0gZnJvbSAnLi4vb3BlcmF0b3JzL29ic2VydmVPbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVPbiB9IGZyb20gJy4uL29wZXJhdG9ycy9zdWJzY3JpYmVPbic7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gaW5uZXJGcm9tKGlucHV0KS5waXBlKHN1YnNjcmliZU9uKHNjaGVkdWxlciksIG9ic2VydmVPbihzY2hlZHVsZXIpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlUHJvbWlzZS5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlucHV0W2krK10pO1xuICAgICAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFycmF5LmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yO1xuICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpdGVyYXRvciA9IGlucHV0W1N5bWJvbF9pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgIGV4ZWN1dGVTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBkb25lO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGl0ZXJhdG9yLm5leHQoKSwgdmFsdWUgPSBfYS52YWx1ZSwgZG9uZSA9IF9hLmRvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDAsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzRnVuY3Rpb24oaXRlcmF0b3IgPT09IG51bGwgfHwgaXRlcmF0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGl0ZXJhdG9yLnJldHVybikgJiYgaXRlcmF0b3IucmV0dXJuKCk7IH07XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUl0ZXJhYmxlLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGV4ZWN1dGVTY2hlZHVsZSB9IGZyb20gJy4uL3V0aWwvZXhlY3V0ZVNjaGVkdWxlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUFzeW5jSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJdGVyYWJsZSBjYW5ub3QgYmUgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgZXhlY3V0ZVNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaW5wdXRbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAwLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFzeW5jSXRlcmFibGUuanMubWFwIiwiaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvciB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IoaW5wdXQpLCBzY2hlZHVsZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UuanMubWFwIiwiaW1wb3J0IHsgc2NoZWR1bGVPYnNlcnZhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZU9ic2VydmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVQcm9taXNlIH0gZnJvbSAnLi9zY2hlZHVsZVByb21pc2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVBcnJheSB9IGZyb20gJy4vc2NoZWR1bGVBcnJheSc7XG5pbXBvcnQgeyBzY2hlZHVsZUl0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUl0ZXJhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4vc2NoZWR1bGVBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzSW50ZXJvcE9ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNBcnJheUxpa2UgfSBmcm9tICcuLi91dGlsL2lzQXJyYXlMaWtlJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0FzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IgfSBmcm9tICcuLi91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3InO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IHNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlIH0gZnJvbSAnLi9zY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVkKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlQXJyYXkoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXN5bmNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NoZWR1bGVkLmpzLm1hcCIsImltcG9ydCB7IHNjaGVkdWxlZCB9IGZyb20gJy4uL3NjaGVkdWxlZC9zY2hlZHVsZWQnO1xuaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi9pbm5lckZyb20nO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb20oaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBzY2hlZHVsZXIgPyBzY2hlZHVsZWQoaW5wdXQsIHNjaGVkdWxlcikgOiBpbm5lckZyb20oaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbS5qcy5tYXAiLCJpbXBvcnQgeyBtZXJnZUFsbCB9IGZyb20gJy4uL29wZXJhdG9ycy9tZXJnZUFsbCc7XG5pbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJy4vZW1wdHknO1xuaW1wb3J0IHsgcG9wTnVtYmVyLCBwb3BTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2FyZ3MnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJy4vZnJvbSc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBzY2hlZHVsZXIgPSBwb3BTY2hlZHVsZXIoYXJncyk7XG4gICAgdmFyIGNvbmN1cnJlbnQgPSBwb3BOdW1iZXIoYXJncywgSW5maW5pdHkpO1xuICAgIHZhciBzb3VyY2VzID0gYXJncztcbiAgICByZXR1cm4gIXNvdXJjZXMubGVuZ3RoXG4gICAgICAgID9cbiAgICAgICAgICAgIEVNUFRZXG4gICAgICAgIDogc291cmNlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICBpbm5lckZyb20oc291cmNlc1swXSlcbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBtZXJnZUFsbChjb25jdXJyZW50KShmcm9tKHNvdXJjZXMsIHNjaGVkdWxlcikpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2UuanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xudmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gQWN0aW9uO1xufShTdWJzY3JpcHRpb24pKTtcbmV4cG9ydCB7IEFjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWRBcnJheSB9IGZyb20gXCJ0c2xpYlwiO1xuZXhwb3J0IHZhciBpbnRlcnZhbFByb3ZpZGVyID0ge1xuICAgIHNldEludGVydmFsOiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVsZWdhdGUgPSBpbnRlcnZhbFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUgPT09IG51bGwgfHwgZGVsZWdhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGVnYXRlLnNldEludGVydmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuc2V0SW50ZXJ2YWwuYXBwbHkoZGVsZWdhdGUsIF9fc3ByZWFkQXJyYXkoW2hhbmRsZXIsIHRpbWVvdXRdLCBfX3JlYWQoYXJncykpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgfSxcbiAgICBjbGVhckludGVydmFsOiBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGludGVydmFsUHJvdmlkZXIuZGVsZWdhdGU7XG4gICAgICAgIHJldHVybiAoKGRlbGVnYXRlID09PSBudWxsIHx8IGRlbGVnYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWxlZ2F0ZS5jbGVhckludGVydmFsKSB8fCBjbGVhckludGVydmFsKShoYW5kbGUpO1xuICAgIH0sXG4gICAgZGVsZWdhdGU6IHVuZGVmaW5lZCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcnZhbFByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgaW50ZXJ2YWxQcm92aWRlciB9IGZyb20gJy4vaW50ZXJ2YWxQcm92aWRlcic7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuLi91dGlsL2FyclJlbW92ZSc7XG52YXIgQXN5bmNBY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBc3luY0FjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBc3luY0FjdGlvbihzY2hlZHVsZXIsIHdvcmspIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2NoZWR1bGVyLCB3b3JrKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIF90aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICBfdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHRoaXMucmVxdWVzdEFzeW5jSWQoc2NoZWR1bGVyLCB0aGlzLmlkLCBkZWxheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgX2lkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIGludGVydmFsUHJvdmlkZXIuc2V0SW50ZXJ2YWwoc2NoZWR1bGVyLmZsdXNoLmJpbmQoc2NoZWR1bGVyLCB0aGlzKSwgZGVsYXkpO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnJlY3ljbGVBc3luY0lkID0gZnVuY3Rpb24gKF9zY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgaWYgKGRlbGF5ICE9IG51bGwgJiYgdGhpcy5kZWxheSA9PT0gZGVsYXkgJiYgdGhpcy5wZW5kaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9XG4gICAgICAgIGludGVydmFsUHJvdmlkZXIuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdleGVjdXRpbmcgYSBjYW5jZWxsZWQgYWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHRoaXMuc2NoZWR1bGVyLCB0aGlzLmlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBfZGVsYXkpIHtcbiAgICAgICAgdmFyIGVycm9yZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yVmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLndvcmsoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVycm9yVmFsdWUgPSBlID8gZSA6IG5ldyBFcnJvcignU2NoZWR1bGVkIGFjdGlvbiB0aHJldyBmYWxzeSBlcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBpZCA9IF9hLmlkLCBzY2hlZHVsZXIgPSBfYS5zY2hlZHVsZXI7XG4gICAgICAgICAgICB2YXIgYWN0aW9ucyA9IHNjaGVkdWxlci5hY3Rpb25zO1xuICAgICAgICAgICAgdGhpcy53b3JrID0gdGhpcy5zdGF0ZSA9IHRoaXMuc2NoZWR1bGVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYXJyUmVtb3ZlKGFjdGlvbnMsIHRoaXMpO1xuICAgICAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGVsYXkgPSBudWxsO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXN5bmNBY3Rpb247XG59KEFjdGlvbikpO1xuZXhwb3J0IHsgQXN5bmNBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jQWN0aW9uLmpzLm1hcCIsImV4cG9ydCB2YXIgZGF0ZVRpbWVzdGFtcFByb3ZpZGVyID0ge1xuICAgIG5vdzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGRhdGVUaW1lc3RhbXBQcm92aWRlci5kZWxlZ2F0ZSB8fCBEYXRlKS5ub3coKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0ZVRpbWVzdGFtcFByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCB7IGRhdGVUaW1lc3RhbXBQcm92aWRlciB9IGZyb20gJy4vc2NoZWR1bGVyL2RhdGVUaW1lc3RhbXBQcm92aWRlcic7XG52YXIgU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2hlZHVsZXIoc2NoZWR1bGVyQWN0aW9uQ3Rvciwgbm93KSB7XG4gICAgICAgIGlmIChub3cgPT09IHZvaWQgMCkgeyBub3cgPSBTY2hlZHVsZXIubm93OyB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyQWN0aW9uQ3RvciA9IHNjaGVkdWxlckFjdGlvbkN0b3I7XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLnNjaGVkdWxlckFjdGlvbkN0b3IodGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5ub3cgPSBkYXRlVGltZXN0YW1wUHJvdmlkZXIubm93O1xuICAgIHJldHVybiBTY2hlZHVsZXI7XG59KCkpO1xuZXhwb3J0IHsgU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY2hlZHVsZXIuanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTY2hlZHVsZXIgfSBmcm9tICcuLi9TY2hlZHVsZXInO1xudmFyIEFzeW5jU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXN5bmNTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7IG5vdyA9IFNjaGVkdWxlci5ub3c7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgU2NoZWR1bGVyQWN0aW9uLCBub3cpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGlvbnMgPSBbXTtcbiAgICAgICAgX3RoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5fc2NoZWR1bGVkID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFzeW5jU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXN5bmNTY2hlZHVsZXI7XG59KFNjaGVkdWxlcikpO1xuZXhwb3J0IHsgQXN5bmNTY2hlZHVsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jU2NoZWR1bGVyLmpzLm1hcCIsImltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBhc3luY1NjaGVkdWxlciA9IG5ldyBBc3luY1NjaGVkdWxlcihBc3luY0FjdGlvbik7XG5leHBvcnQgdmFyIGFzeW5jID0gYXN5bmNTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3luYy5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZERhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTih2YWx1ZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0RhdGUuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgYXN5bmMgYXMgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmltcG9ydCB7IGlzVmFsaWREYXRlIH0gZnJvbSAnLi4vdXRpbC9pc0RhdGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyKGR1ZVRpbWUsIGludGVydmFsT3JTY2hlZHVsZXIsIHNjaGVkdWxlcikge1xuICAgIGlmIChkdWVUaW1lID09PSB2b2lkIDApIHsgZHVlVGltZSA9IDA7IH1cbiAgICBpZiAoc2NoZWR1bGVyID09PSB2b2lkIDApIHsgc2NoZWR1bGVyID0gYXN5bmNTY2hlZHVsZXI7IH1cbiAgICB2YXIgaW50ZXJ2YWxEdXJhdGlvbiA9IC0xO1xuICAgIGlmIChpbnRlcnZhbE9yU2NoZWR1bGVyICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzU2NoZWR1bGVyKGludGVydmFsT3JTY2hlZHVsZXIpKSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIgPSBpbnRlcnZhbE9yU2NoZWR1bGVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW50ZXJ2YWxEdXJhdGlvbiA9IGludGVydmFsT3JTY2hlZHVsZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBkdWUgPSBpc1ZhbGlkRGF0ZShkdWVUaW1lKSA/ICtkdWVUaW1lIC0gc2NoZWR1bGVyLm5vdygpIDogZHVlVGltZTtcbiAgICAgICAgaWYgKGR1ZSA8IDApIHtcbiAgICAgICAgICAgIGR1ZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQobisrKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8PSBpbnRlcnZhbER1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodW5kZWZpbmVkLCBpbnRlcnZhbER1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGR1ZSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aW1lci5qcy5tYXAiLCJpbXBvcnQgeyBFTVBUWSB9IGZyb20gJy4uL29ic2VydmFibGUvZW1wdHknO1xuaW1wb3J0IHsgb3BlcmF0ZSB9IGZyb20gJy4uL3V0aWwvbGlmdCc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gdGFrZShjb3VudCkge1xuICAgIHJldHVybiBjb3VudCA8PSAwXG4gICAgICAgID9cbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIEVNUFRZOyB9XG4gICAgICAgIDogb3BlcmF0ZShmdW5jdGlvbiAoc291cmNlLCBzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICB2YXIgc2VlbiA9IDA7XG4gICAgICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoKytzZWVuIDw9IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA8PSBzZWVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFrZS5qcy5tYXAiLCJsZXQgYnJvd3NlckVudjtcbmlmICh0eXBlb2YgY2hyb21lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGJyb3dzZXJFbnYgPSBjaHJvbWU7XG4gICAgLy8gQHRzLWlnbm9yZVxufVxuZWxzZSBpZiAodHlwZW9mIGJyb3dzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGJyb3dzZXJFbnYgPSBicm93c2VyO1xufVxuY29uc3QgbWFrZVNlbmQgPSAoaWRlbnRpZmllcikgPT4gKGRhdGEsIGV4dGVuc2lvbklkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKCFicm93c2VyRW52KSB7XG4gICAgICAgICAgICByZWplY3QoJ2Jyb3dzZXJFbnYgZW52aXJvbm1lbnQgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJyb3dzZXJFbnYucnVudGltZSkge1xuICAgICAgICAgICAgcmVqZWN0KCdicm93c2VyRW52LnJ1bnRpbWUgaXMgbm90IGRlZmluZWQgZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbmRQYXJhbXMgPSBbXG4gICAgICAgICAgICB7IGlkZW50aWZpZXIsIGRhdGEgfSxcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChicm93c2VyRW52LnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYnJvd3NlckVudi5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKGV4dGVuc2lvbklkKSB7XG4gICAgICAgICAgICBzZW5kUGFyYW1zLnVuc2hpZnQoZXh0ZW5zaW9uSWQpO1xuICAgICAgICB9XG4gICAgICAgIGJyb3dzZXJFbnYucnVudGltZS5zZW5kTWVzc2FnZSguLi5zZW5kUGFyYW1zKTtcbiAgICB9KTtcbn07XG5jb25zdCBtYWtlTGlzdGVuZXIgPSAoaWRlbnRpZmllciwgY2FsbGJhY2spID0+IChyZXF1ZXN0LCBzZW5kZXIsIG5hdGl2ZVNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdCAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgcmVxdWVzdCA9PT0gbnVsbCB8fFxuICAgICAgICByZXF1ZXN0LmlkZW50aWZpZXIgIT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xuICAgIGNvbnN0IHNlbmRSZXNwb25zZSA9IChyKSA9PiB7XG4gICAgICAgIG5hdGl2ZVNlbmRSZXNwb25zZShyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICBjYWxsYmFjayhzZW5kUmVzcG9uc2UsIGRhdGEpO1xuICAgIHJldHVybiB0cnVlO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVNZXNzYWdlID0gKGlkZW50aWZpZXIpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpYmUgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgYnJvd3NlckVudi5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihtYWtlTGlzdGVuZXIoaWRlbnRpZmllciwgY2FsbGJhY2spKTtcbiAgICB9O1xuICAgIHJldHVybiBbbWFrZVNlbmQoaWRlbnRpZmllciksIHN1YnNjcmliZV07XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSA9IChpZGVudGlmaWVyKSA9PiB7XG4gICAgY29uc3Qgc2VuZCA9IG1ha2VTZW5kKGlkZW50aWZpZXIpO1xuICAgIGNvbnN0IHN1YnNjcmliZSA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBicm93c2VyRW52LnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwuYWRkTGlzdGVuZXIobWFrZUxpc3RlbmVyKGlkZW50aWZpZXIsIGNhbGxiYWNrKSk7XG4gICAgfTtcbiAgICByZXR1cm4gW1xuICAgICAgICAoZXh0ZW5zaW9uSWQsIGRhdGEpID0+IHNlbmQoZGF0YSwgZXh0ZW5zaW9uSWQpLFxuICAgICAgICBzdWJzY3JpYmUsXG4gICAgXTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UsIGNyZWF0ZU1lc3NhZ2UgfSBmcm9tICdAdm9jYWJseS9oZXJtZXMnO1xuY29uc3QgY3JlYXRlU2NvcGUgPSAoc2NvcGUpID0+IChpZGVudGlmaWVyKSA9PiBjcmVhdGVNZXNzYWdlKGAke3Njb3BlfS4ke2lkZW50aWZpZXJ9YCk7XG5jb25zdCBjcmVhdGVTY29wZWRNZXNzYWdlID0gY3JlYXRlU2NvcGUoJ3ZvY2FibHknKTtcbmV4cG9ydCBjb25zdCBbaXNMb2dnZWRJbiwgb25Jc0xvZ2dlZEluUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc0xvZ2dlZEluJyk7XG5leHBvcnQgY29uc3QgW2dldFNldHRpbmdzLCBvbkdldFNldHRpbmdzUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRTZXR0aW5ncycpO1xuZXhwb3J0IGNvbnN0IFtzZXRTZXR0aW5ncywgb25TZXRTZXR0aW5nc1JlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2V0U2V0dGluZ3MnKTtcbmV4cG9ydCBjb25zdCBbaXNBY3RpdmUsIG9uSXNBY3RpdmVSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2lzQWN0aXZlJyk7XG5leHBvcnQgY29uc3QgW2lzRWxpZ2libGVGb3JUcmlhbCwgb25Jc0VsaWdpYmxlRm9yVHJpYWxSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2lzRWxpZ2libGVGb3JUcmlhbCcpO1xuZXhwb3J0IGNvbnN0IFthbmFseXplLCBvbkFuYWx5emVSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2FuYWx5emUnKTtcbmV4cG9ydCBjb25zdCBbcmVtb3ZlQ2FyZCwgb25SZW1vdmVDYXJkUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdyZW1vdmVDYXJkJyk7XG5leHBvcnQgY29uc3QgW2FkZENhcmQsIG9uQWRkQ2FyZFJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnYWRkQ2FyZCcpO1xuZXhwb3J0IGNvbnN0IFtsaXN0TGFuZ3VhZ2VzLCBvbkxpc3RMYW5ndWFnZXNSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2xpc3RMYW5ndWFnZXMnKTtcbmV4cG9ydCBjb25zdCBbbGlzdFRhcmdldExhbmd1YWdlcywgb25MaXN0VGFyZ2V0TGFuZ3VhZ2VzUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdsaXN0VGFyZ2V0TGFuZ3VhZ2VzJyk7XG5leHBvcnQgY29uc3QgW2dldExvY2F0aW9uTGFuZ3VhZ2UsIG9uR2V0TG9jYXRpb25MYW5ndWFnZVJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0TG9jYXRpb25MYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtzYXZlTG9jYXRpb25MYW5ndWFnZSwgb25TYXZlTG9jYXRpb25MYW5ndWFnZVJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2F2ZUxvY2F0aW9uTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbY2xlYW5VcCwgb25DbGVhblVwUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdjbGVhblVwJyk7XG5leHBvcnQgY29uc3QgW3BpbmcsIG9uUGluZ10gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdwaW5nJyk7XG5leHBvcnQgY29uc3QgW2dldEludGVybmFsUHJveHlMYW5ndWFnZSwgb25HZXRJbnRlcm5hbFByb3h5TGFudWFnZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbc2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlLCBvblNldEludGVybmFsUHJveHlMYW5ndWFnZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdzZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbZ2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgb25HZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2dldEludGVybmFsU291cmNlTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbc2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgb25TZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3NldEludGVybmFsU291cmNlTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbaXNVc2VyS25vd3NIb3dUb0FkZCwgb25Jc1VzZXJLbm93c0hvd1RvQWRkXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2lzVXNlcktub3dzSG93VG9BZGQnKTtcbmV4cG9ydCBjb25zdCBbc2V0VXNlcktub3dzSG93VG9BZGQsIG9uU2V0VXNlcktub3dzSG93VG9BZGRdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2V0VXNlcktub3dzSG93VG9BZGQnKTtcbmV4cG9ydCBjb25zdCBbcGluZ0V4dGVybmFsLCBvblBpbmdFeHRlcm5hbF0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkucGluZy1leHRlcm5hbCcpO1xuZXhwb3J0IGNvbnN0IFtzZXRQcm94eUxhbmd1YWdlLCBvblNldFByb3h5TGFuZ3VhZ2VdID0gY3JlYXRlRXh0ZXJuYWxNZXNzYWdlKCd2b2NhYmx5LnNldFByb3h5TGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbZ2V0UHJveHlMYW5ndWFnZSwgb25HZXRQcm94eUxhbmd1YWdlXSA9IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSgndm9jYWJseS5nZXRQcm94eUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW3NldFNvdXJjZUxhbmd1YWdlLCBvblNldFNvdXJjZUxhbmd1YWdlXSA9IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSgndm9jYWJseS5zZXRTb3VyY2VMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtnZXRTb3VyY2VMYW5ndWFnZSwgb25HZXRTb3VyY2VMYW5ndWFnZV0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkuZ2V0U291cmNlTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbZ2V0QXVkaW9Qcm9udW5jaWF0aW9uLCBvbkdldEF1ZGlvUHJvbnVuY2lhdGlvbl0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRBdWRpb1Byb251bmNpYXRpb24nKTtcbmV4cG9ydCBjb25zdCBbYXNrRm9yUmF0aW5nLCBvbkFza0ZvclJhdGluZ10gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdhc2tGb3JSYXRpbmcnKTtcbmV4cG9ydCBjb25zdCBbc2F2ZUFza0ZvclJhdGluZ1Jlc3BvbnNlLCBvblNhdmVBc2tGb3JSYXRpbmdSZXNwb25zZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdhc2tGb3JSYXRpbmdSZXNwb25zZScpO1xuZXhwb3J0IGNvbnN0IFtwbGF5QXVkaW9Qcm9udW5jaWF0aW9uLCBvblBsYXlBdWRpb1Byb251bmNpYXRpb25dID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgncGxheUF1ZGlvUHJvbnVuY2lhdGlvbicpO1xuZXhwb3J0IGNvbnN0IFtwbGF5QXVkaW9Qcm9udW5jaWF0aW9uT2Zmc2NyZWVuLCBvblBsYXlBdWRpb1Byb251bmNpYXRpb25PZmZzY3JlZW4sXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3BsYXlBdWRpb1Byb251bmNpYXRpb25PZmZzY3JlZW4nKTtcbmV4cG9ydCBjb25zdCBbY2FuUGxheU9mZlNjcmVlbiwgb25DYW5QbGF5T2ZmU2NyZWVuXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2NhblBsYXlPZmZTY3JlZW4nKTtcbiIsIu+7v2ltcG9ydCB7IGFkZENhcmQsIGFuYWx5emUsIGFza0ZvclJhdGluZywgY2FuUGxheU9mZlNjcmVlbiwgY2xlYW5VcCwgZ2V0QXVkaW9Qcm9udW5jaWF0aW9uLCBnZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UsIGdldEludGVybmFsU291cmNlTGFuZ3VhZ2UsIGdldExvY2F0aW9uTGFuZ3VhZ2UsIGdldFNldHRpbmdzLCBpc0FjdGl2ZSwgaXNFbGlnaWJsZUZvclRyaWFsLCBpc0xvZ2dlZEluLCBpc1VzZXJLbm93c0hvd1RvQWRkLCBsaXN0TGFuZ3VhZ2VzLCBsaXN0VGFyZ2V0TGFuZ3VhZ2VzLCBwaW5nLCBwbGF5QXVkaW9Qcm9udW5jaWF0aW9uLCByZW1vdmVDYXJkLCBzYXZlQXNrRm9yUmF0aW5nUmVzcG9uc2UsIHNhdmVMb2NhdGlvbkxhbmd1YWdlLCBzZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UsIHNldEludGVybmFsU291cmNlTGFuZ3VhZ2UsIHNldFVzZXJLbm93c0hvd1RvQWRkLCB9IGZyb20gJ0B2b2NhYmx5L2V4dGVuc2lvbi1tZXNzYWdlcyc7XG5leHBvcnQgY29uc3QgYXBpID0ge1xuICAgIGFwcEJhc2VVcmw6ICdodHRwczovL2FwcC52b2NhYmx5LnBybycsXG4gICAgaXNMb2dnZWRJbixcbiAgICBnZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UsXG4gICAgc2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlLFxuICAgIGdldEludGVybmFsU291cmNlTGFuZ3VhZ2UsXG4gICAgc2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSxcbiAgICBhbmFseXplLFxuICAgIGFkZENhcmQsXG4gICAgcmVtb3ZlQ2FyZCxcbiAgICBjbGVhblVwLFxuICAgIGlzQWN0aXZlLFxuICAgIHBpbmcsXG4gICAgbGlzdExhbmd1YWdlcyxcbiAgICBsaXN0VGFyZ2V0TGFuZ3VhZ2VzLFxuICAgIGlzRWxpZ2libGVGb3JUcmlhbCxcbiAgICBpc1VzZXJLbm93c0hvd1RvQWRkLFxuICAgIHNldFVzZXJLbm93c0hvd1RvQWRkLFxuICAgIGdldEF1ZGlvUHJvbnVuY2lhdGlvbixcbiAgICBwbGF5QXVkaW9Qcm9udW5jaWF0aW9uLFxuICAgIGNhblBsYXlPZmZTY3JlZW4sXG4gICAgYXNrRm9yUmF0aW5nLFxuICAgIHNhdmVBc2tGb3JSYXRpbmdSZXNwb25zZSxcbiAgICBnZXRMb2NhdGlvbkxhbmd1YWdlLFxuICAgIHNhdmVMb2NhdGlvbkxhbmd1YWdlLFxuICAgIGdldFNldHRpbmdzLFxufTtcbmV4cG9ydCBjb25zdCBjb25maWd1cmVBcGkgPSAob3B0aW9ucykgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24oYXBpLCBvcHRpb25zKTtcbn07XG4iLCLvu79pbXBvcnQgKiBhcyBCb3dzZXIgZnJvbSAnYm93c2VyJztcbmV4cG9ydCBjb25zdCBicm93c2VyID0gQm93c2VyLmdldFBhcnNlcih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4iLCLvu79leHBvcnQgY29uc3QgaXNUb3AgPSAocG9wdXBQb3NpdGlvbikgPT4ge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocG9wdXBQb3NpdGlvbiwgJ3RvcCcpO1xufTtcbmV4cG9ydCBjb25zdCBhcHBseVBvc2l0aW9uID0gKGVsZW1lbnQsIHBvc2l0aW9uKSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24ubGVmdH1weGA7XG4gICAgaWYgKGlzVG9wKHBvc2l0aW9uKSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uLnRvcH1weGA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uLmJvdHRvbX1weGA7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBzZXR1cFRyYW5zZm9ybSA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ob3Jpem9udGFsLWRpc3BsYWNlbWVudCcsICcwcHgnKTtcbiAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zbGF0ZS15JywgJzAnKTtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoY2FsYygtNTAlICsgdmFyKC0taG9yaXpvbnRhbC1kaXNwbGFjZW1lbnQpKSwgdmFyKC0tdHJhbnNsYXRlLXkpKWA7XG59O1xuY29uc3QgY2FsY3VsYXRlRGlzcGxhY2VtZW50ID0gKGVsZW1lbnQsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHBvc2l0aW9uLmxlZnQgLSByZWN0LndpZHRoIC8gMiA8IHdpbmRvdy5zY3JvbGxYKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWCArIChyZWN0LndpZHRoIC8gMiAtIHBvc2l0aW9uLmxlZnQpO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24ubGVmdCArIHJlY3Qud2lkdGggLyAyID4gd2luZG93LmlubmVyV2lkdGggKyB3aW5kb3cuc2Nyb2xsWCkge1xuICAgICAgICByZXR1cm4gKHdpbmRvdy5pbm5lcldpZHRoICsgd2luZG93LnNjcm9sbFggLSAocG9zaXRpb24ubGVmdCArIHJlY3Qud2lkdGggLyAyKSk7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcbmV4cG9ydCBjb25zdCBhcHBseVRyYW5zZm9ybSA9IChlbGVtZW50LCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGRpc3BsYWNlbWVudCA9IGNhbGN1bGF0ZURpc3BsYWNlbWVudChlbGVtZW50LCBwb3NpdGlvbik7XG4gICAgaWYgKGRpc3BsYWNlbWVudCAhPT0gMCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2l0aW9uID0gZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcmlnaW5hbFRyYW5zaXRpb24gPyBgJHtvcmlnaW5hbFRyYW5zaXRpb259LCBgIDogJyd9dHJhbnNmb3JtICR7YW5pbWF0aW9uRHVyYXRpb259bXNgO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IG9yaWdpbmFsVHJhbnNpdGlvbjtcbiAgICAgICAgfSwgYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhvcml6b250YWwtZGlzcGxhY2VtZW50JywgYCR7ZGlzcGxhY2VtZW50fXB4YCk7XG4gICAgaWYgKGlzVG9wKHBvc2l0aW9uKSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zbGF0ZS15JywgJzAnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdHJhbnNsYXRlLXknLCAnLTEwMCUnKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IHNldEhvcml6b250YWxEaXNwbGFjZW1lbnQgPSAoZWxlbWVudCwgZGlzcGxhY2VtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ob3Jpem9udGFsLWRpc3BsYWNlbWVudCcsIGAke2Rpc3BsYWNlbWVudH1weGApO1xufTtcbmV4cG9ydCBjb25zdCBhcHBseU1heFpJbmRleCA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSAnMjE0NzQ4MzY0Nyc7XG59O1xuIiwi77u/aW1wb3J0IHsgaXNUb3AgfSBmcm9tICcuLi9zdHlsaW5nJztcbmV4cG9ydCBjb25zdCBhcHBseUJ1dHRvblBvc2l0aW9uID0gKHsgZWxlbWVudCwgcG9zaXRpb24sIGlzVG91Y2hzY3JlZW4sIH0pID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gaXNUb3VjaHNjcmVlbiA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3Bvc2l0aW9uLmxlZnR9cHhgO1xuICAgIGlmIChpc1RvdWNoc2NyZWVuKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gYDYwcHhgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1RvcChwb3NpdGlvbikpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbi50b3B9cHhgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtwb3NpdGlvbi5ib3R0b219cHhgO1xuICAgIH1cbn07XG4iLCLvu79leHBvcnQgY29uc3QgY29udGV4dExhbmd1YWdlcyA9IFtcbiAgICAnZGEnLFxuICAgICdubCcsXG4gICAgJ2VuJyxcbiAgICAnZmknLFxuICAgICdmcicsXG4gICAgJ2RlJyxcbiAgICAnZWwnLFxuICAgICdoZScsXG4gICAgJ2hpJyxcbiAgICAnaWQnLFxuICAgICdpdCcsXG4gICAgJ21zJyxcbiAgICAnbm8nLFxuICAgICdwbCcsXG4gICAgJ3B0JyxcbiAgICAncnUnLFxuICAgICdlcycsXG4gICAgJ3N2JyxcbiAgICAndHInLFxuICAgICd2aScsXG5dO1xuIiwiZXhwb3J0IGNvbnN0IE1BWF9TWU1CT0xTX1RPX0JFX1RSQU5TTEFURUQgPSAxNTA7XG4iLCJleHBvcnQgY29uc3QgR29vZ2xlTGFuZ3VhZ2VzID0gW1xuICAgICdhZicsXG4gICAgJ3NxJyxcbiAgICAnYW0nLFxuICAgICdhcicsXG4gICAgJ2h5JyxcbiAgICAnYXonLFxuICAgICdldScsXG4gICAgJ2JlJyxcbiAgICAnYm4nLFxuICAgICdicycsXG4gICAgJ2JnJyxcbiAgICAnY2EnLFxuICAgICd6aCcsXG4gICAgJ2NvJyxcbiAgICAnaGF3JyxcbiAgICAnaHInLFxuICAgICdjcycsXG4gICAgJ2RhJyxcbiAgICAnbmwnLFxuICAgICdlbicsXG4gICAgJ2VvJyxcbiAgICAnZXQnLFxuICAgICdmaScsXG4gICAgJ2ZyJyxcbiAgICAnZnknLFxuICAgICdnbCcsXG4gICAgJ2thJyxcbiAgICAnZGUnLFxuICAgICdlbCcsXG4gICAgJ2d1JyxcbiAgICAnaHQnLFxuICAgICdoYScsXG4gICAgJ2hlJyxcbiAgICAnaGknLFxuICAgICdodScsXG4gICAgJ2htbicsXG4gICAgJ2lzJyxcbiAgICAnaWcnLFxuICAgICdpZCcsXG4gICAgJ2dhJyxcbiAgICAnaXQnLFxuICAgICdqYScsXG4gICAgJ2p2JyxcbiAgICAna24nLFxuICAgICdraycsXG4gICAgJ2ttJyxcbiAgICAncncnLFxuICAgICdrbycsXG4gICAgJ2t1JyxcbiAgICAna3knLFxuICAgICdsbycsXG4gICAgJ2x2JyxcbiAgICAnbHQnLFxuICAgICdsYicsXG4gICAgJ21rJyxcbiAgICAnbWcnLFxuICAgICdtcycsXG4gICAgJ21sJyxcbiAgICAnbXQnLFxuICAgICdtaScsXG4gICAgJ21yJyxcbiAgICAnbW4nLFxuICAgICdteScsXG4gICAgJ25lJyxcbiAgICAnbm8nLFxuICAgICdueScsXG4gICAgJ29yJyxcbiAgICAncHMnLFxuICAgICdmYScsXG4gICAgJ3BsJyxcbiAgICAncHQnLFxuICAgICdwYScsXG4gICAgJ3JvJyxcbiAgICAncnUnLFxuICAgICdzbScsXG4gICAgJ2dkJyxcbiAgICAnc3InLFxuICAgICdzdCcsXG4gICAgJ3NuJyxcbiAgICAnc2QnLFxuICAgICdzaScsXG4gICAgJ3NrJyxcbiAgICAnc2wnLFxuICAgICdzbycsXG4gICAgJ2VzJyxcbiAgICAnc3UnLFxuICAgICdzdycsXG4gICAgJ3N2JyxcbiAgICAndGwnLFxuICAgICd0ZycsXG4gICAgJ3RhJyxcbiAgICAndHQnLFxuICAgICd0ZScsXG4gICAgJ3RoJyxcbiAgICAndHInLFxuICAgICd0aycsXG4gICAgJ3poLVRXJyxcbiAgICAndWsnLFxuICAgICd1cicsXG4gICAgJ3VnJyxcbiAgICAndXonLFxuICAgICd2aScsXG4gICAgJ2N5JyxcbiAgICAneGgnLFxuICAgICd5aScsXG4gICAgJ3lvJyxcbiAgICAnenUnLFxuXTtcbmV4cG9ydCBjb25zdCBDaGF0R1BUTGFuZ3VhZ2VzID0gW1xuICAgICdlbicsXG4gICAgJ2VzJyxcbiAgICAnZnInLFxuICAgICdkZScsXG4gICAgJ3poJyxcbiAgICAnemgtVFcnLFxuICAgICdqYScsXG4gICAgJ3J1JyxcbiAgICAnaXQnLFxuICAgICdwdCcsXG4gICAgJ2FyJyxcbiAgICAnbmwnLFxuICAgICdrbycsXG4gICAgJ2hpJyxcbiAgICAndHInLFxuICAgICdzdicsXG4gICAgJ25vJyxcbiAgICAnZGEnLFxuICAgICdmaScsXG4gICAgJ2ZhJyxcbiAgICAncGwnLFxuICAgICdlbCcsXG4gICAgJ2hlJyxcbiAgICAndGgnLFxuICAgICd2aScsXG4gICAgJ2lkJyxcbiAgICAnbXMnLFxuICAgICd1aycsXG5dO1xuY29uc3QgTkxQTGFuZ3VhZ2VzID0gW1xuICAgICdhZicsXG4gICAgJ3NxJyxcbiAgICAnYW0nLFxuICAgICdhcicsXG4gICAgJ2h5JyxcbiAgICAnYXonLFxuICAgICdldScsXG4gICAgJ2JlJyxcbiAgICAnYm4nLFxuICAgICdicycsXG4gICAgJ2JnJyxcbiAgICAnbXknLFxuICAgICdjYScsXG4gICAgJ255JyxcbiAgICAnemgtQ04nLFxuICAgICd6aC1UVycsXG4gICAgJ2NvJyxcbiAgICAnaHInLFxuICAgICdjcycsXG4gICAgJ2RhJyxcbiAgICAnbmwnLFxuICAgICdlbicsXG4gICAgJ2VvJyxcbiAgICAnZXQnLFxuICAgICdmaScsXG4gICAgJ2ZyJyxcbiAgICAnZnknLFxuICAgICdnbCcsXG4gICAgJ2thJyxcbiAgICAnZGUnLFxuICAgICdlbCcsXG4gICAgJ2d1JyxcbiAgICAnaHQnLFxuICAgICdoYScsXG4gICAgJ2hhdycsXG4gICAgJ2l3JyxcbiAgICAnaGknLFxuICAgICdobW4nLFxuICAgICdodScsXG4gICAgJ2lzJyxcbiAgICAnaWcnLFxuICAgICdpZCcsXG4gICAgJ2dhJyxcbiAgICAnaXQnLFxuICAgICdqYScsXG4gICAgJ2tuJyxcbiAgICAna2snLFxuICAgICdrbScsXG4gICAgJ2tvJyxcbiAgICAna3UnLFxuICAgICdreScsXG4gICAgJ2xvJyxcbiAgICAnbHYnLFxuICAgICdsdCcsXG4gICAgJ2xiJyxcbiAgICAnbWsnLFxuICAgICdtZycsXG4gICAgJ21zJyxcbiAgICAnbWwnLFxuICAgICdtdCcsXG4gICAgJ21pJyxcbiAgICAnbXInLFxuICAgICdtbicsXG4gICAgJ25lJyxcbiAgICAnbm8nLFxuICAgICdwcycsXG4gICAgJ2ZhJyxcbiAgICAncGwnLFxuICAgICdwdCcsXG4gICAgJ3BhJyxcbiAgICAncm8nLFxuICAgICdydScsXG4gICAgJ3NtJyxcbiAgICAnZ2QnLFxuICAgICdzcicsXG4gICAgJ3N0JyxcbiAgICAnc24nLFxuICAgICdzZCcsXG4gICAgJ3NpJyxcbiAgICAnc2snLFxuICAgICdzbCcsXG4gICAgJ3NvJyxcbiAgICAnZXMnLFxuICAgICdzdScsXG4gICAgJ3N3JyxcbiAgICAnc3YnLFxuICAgICd0bCcsXG4gICAgJ3RnJyxcbiAgICAndGEnLFxuICAgICd0dCcsXG4gICAgJ3RlJyxcbiAgICAndGgnLFxuICAgICd0cicsXG4gICAgJ3VrJyxcbiAgICAndXInLFxuICAgICd1eicsXG4gICAgJ3ZpJyxcbiAgICAnY3knLFxuICAgICd4aCcsXG4gICAgJ3lpJyxcbiAgICAneW8nLFxuICAgICd6dScsXG5dO1xuY29uc3QgR29vZ2xlTkxQTGFuZ3VhZ2VNYXAgPSB7XG4gICAgaGU6ICdpdycsXG4gICAgemg6ICd6aC1DTicsXG59O1xuZXhwb3J0IGNvbnN0IGdvb2dsZVRvTmxwID0gKGdvb2dsZUxhbmd1YWdlKSA9PiB7XG4gICAgaWYgKEdvb2dsZU5MUExhbmd1YWdlTWFwW2dvb2dsZUxhbmd1YWdlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBHb29nbGVOTFBMYW5ndWFnZU1hcFtnb29nbGVMYW5ndWFnZV07XG4gICAgfVxuICAgIHJldHVybiAoTkxQTGFuZ3VhZ2VzLmZpbmQoKG5scExhbmd1YWdlKSA9PiBubHBMYW5ndWFnZSA9PT0gZ29vZ2xlTGFuZ3VhZ2UpID8/IG51bGwpO1xufTtcbmV4cG9ydCBjb25zdCBpc0dvb2dsZUxhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiBHb29nbGVMYW5ndWFnZXMuaW5kZXhPZihsYW5ndWFnZSkgIT09IC0xO1xuZXhwb3J0IGNvbnN0IGlzQ2hhdEdQVExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiBDaGF0R1BUTGFuZ3VhZ2VzLmluZGV4T2YobGFuZ3VhZ2UpICE9PSAtMTtcbiIsImV4cG9ydCBjb25zdCBsYW5ndWFnZUxpc3QgPSB7XG4gICAgYWY6ICdBZnJpa2FhbnMnLFxuICAgIHNxOiAnQWxiYW5pYW4nLFxuICAgIGFtOiAnQW1oYXJpYycsXG4gICAgYXI6ICdBcmFiaWMnLFxuICAgIGh5OiAnQXJtZW5pYW4nLFxuICAgIGF6OiAnQXplcmJhaWphbmknLFxuICAgIGV1OiAnQmFzcXVlJyxcbiAgICBiZTogJ0JlbGFydXNpYW4nLFxuICAgIGJuOiAnQmVuZ2FsaScsXG4gICAgYnM6ICdCb3NuaWFuJyxcbiAgICBiZzogJ0J1bGdhcmlhbicsXG4gICAgY2E6ICdDYXRhbGFuJyxcbiAgICB6aDogJ0NoaW5lc2UgKFNpbXBsaWZpZWQpJyxcbiAgICAnemgtVFcnOiAnQ2hpbmVzZSAoVHJhZGl0aW9uYWwpJyxcbiAgICBjbzogJ0NvcnNpY2FuJyxcbiAgICBocjogJ0Nyb2F0aWFuJyxcbiAgICBjczogJ0N6ZWNoJyxcbiAgICBkYTogJ0RhbmlzaCcsXG4gICAgbmw6ICdEdXRjaCcsXG4gICAgZW46ICdFbmdsaXNoJyxcbiAgICBlbzogJ0VzcGVyYW50bycsXG4gICAgZXQ6ICdFc3RvbmlhbicsXG4gICAgZmk6ICdGaW5uaXNoJyxcbiAgICBmcjogJ0ZyZW5jaCcsXG4gICAgZnk6ICdGcmlzaWFuJyxcbiAgICBnbDogJ0dhbGljaWFuJyxcbiAgICBrYTogJ0dlb3JnaWFuJyxcbiAgICBkZTogJ0dlcm1hbicsXG4gICAgZWw6ICdHcmVlaycsXG4gICAgZ3U6ICdHdWphcmF0aScsXG4gICAgaHQ6ICdIYWl0aWFuIENyZW9sZScsXG4gICAgaGE6ICdIYXVzYScsXG4gICAgaGF3OiAnSGF3YWlpYW4nLFxuICAgIGhlOiAnSGVicmV3JyxcbiAgICBoaTogJ0hpbmRpJyxcbiAgICBobW46ICdIbW9uZycsXG4gICAgaHU6ICdIdW5nYXJpYW4nLFxuICAgIGlzOiAnSWNlbGFuZGljJyxcbiAgICBpZzogJ0lnYm8nLFxuICAgIGlkOiAnSW5kb25lc2lhbicsXG4gICAgZ2E6ICdJcmlzaCcsXG4gICAgaXQ6ICdJdGFsaWFuJyxcbiAgICBqYTogJ0phcGFuZXNlJyxcbiAgICBqdjogJ0phdmFuZXNlJyxcbiAgICBrbjogJ0thbm5hZGEnLFxuICAgIGtrOiAnS2F6YWtoJyxcbiAgICBrbTogJ0tobWVyJyxcbiAgICBydzogJ0tpbnlhcndhbmRhJyxcbiAgICBrbzogJ0tvcmVhbicsXG4gICAga3U6ICdLdXJkaXNoJyxcbiAgICBreTogJ0t5cmd5eicsXG4gICAgbG86ICdMYW8nLFxuICAgIGx2OiAnTGF0dmlhbicsXG4gICAgbHQ6ICdMaXRodWFuaWFuJyxcbiAgICBsYjogJ0x1eGVtYm91cmdpc2gnLFxuICAgIG1rOiAnTWFjZWRvbmlhbicsXG4gICAgbWc6ICdNYWxhZ2FzeScsXG4gICAgbXM6ICdNYWxheScsXG4gICAgbWw6ICdNYWxheWFsYW0nLFxuICAgIG10OiAnTWFsdGVzZScsXG4gICAgbWk6ICdNYW9yaScsXG4gICAgbXI6ICdNYXJhdGhpJyxcbiAgICBtbjogJ01vbmdvbGlhbicsXG4gICAgbXk6ICdNeWFubWFyIChCdXJtZXNlKScsXG4gICAgbmU6ICdOZXBhbGknLFxuICAgIG5vOiAnTm9yd2VnaWFuJyxcbiAgICBueTogJ055YW5qYSAoQ2hpY2hld2EpJyxcbiAgICBvcjogJ09kaWEgKE9yaXlhKScsXG4gICAgcHM6ICdQYXNodG8nLFxuICAgIGZhOiAnUGVyc2lhbicsXG4gICAgcGw6ICdQb2xpc2gnLFxuICAgIHB0OiAnUG9ydHVndWVzZSAoUG9ydHVnYWwsIEJyYXppbCknLFxuICAgIHBhOiAnUHVuamFiaScsXG4gICAgcm86ICdSb21hbmlhbicsXG4gICAgcnU6ICdSdXNzaWFuJyxcbiAgICBzbTogJ1NhbW9hbicsXG4gICAgZ2Q6ICdTY290cyBHYWVsaWMnLFxuICAgIHNyOiAnU2VyYmlhbicsXG4gICAgc3Q6ICdTZXNvdGhvJyxcbiAgICBzbjogJ1Nob25hJyxcbiAgICBzZDogJ1NpbmRoaScsXG4gICAgc2k6ICdTaW5oYWxhIChTaW5oYWxlc2UpJyxcbiAgICBzazogJ1Nsb3ZhaycsXG4gICAgc2w6ICdTbG92ZW5pYW4nLFxuICAgIHNvOiAnU29tYWxpJyxcbiAgICBlczogJ1NwYW5pc2gnLFxuICAgIHN1OiAnU3VuZGFuZXNlJyxcbiAgICBzdzogJ1N3YWhpbGknLFxuICAgIHN2OiAnU3dlZGlzaCcsXG4gICAgdGw6ICdUYWdhbG9nIChGaWxpcGlubyknLFxuICAgIHRnOiAnVGFqaWsnLFxuICAgIHRhOiAnVGFtaWwnLFxuICAgIHR0OiAnVGF0YXInLFxuICAgIHRlOiAnVGVsdWd1JyxcbiAgICB0aDogJ1RoYWknLFxuICAgIHRyOiAnVHVya2lzaCcsXG4gICAgdGs6ICdUdXJrbWVuJyxcbiAgICB1azogJ1VrcmFpbmlhbicsXG4gICAgdXI6ICdVcmR1JyxcbiAgICB1ZzogJ1V5Z2h1cicsXG4gICAgdXo6ICdVemJlaycsXG4gICAgdmk6ICdWaWV0bmFtZXNlJyxcbiAgICBjeTogJ1dlbHNoJyxcbiAgICB4aDogJ1hob3NhJyxcbiAgICB5aTogJ1lpZGRpc2gnLFxuICAgIHlvOiAnWW9ydWJhJyxcbiAgICB6dTogJ1p1bHUnLFxufTtcbmV4cG9ydCBjb25zdCBnZXRGdWxsTGFuZ3VhZ2VOYW1lID0gKGNvZGUpID0+IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGxhbmd1YWdlTGlzdFtjb2RlXSA/PyBjb2RlO1xufTtcbiIsImV4cG9ydCBjb25zdCB0b2tlbml6ZSA9ICh0ZXh0KSA9PiB7XG4gICAgcmV0dXJuIHRleHRcbiAgICAgICAgLnJlcGxhY2UoL1teXFxwe0xldHRlcn1cXHB7TWFya31dKy9ndSwgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpO1xufTtcbiIsImNvbnN0IHRyaW1SZWdleGVzID0ge1xuICAgIG5sOiAvXihkZXxoZXQpXFxzL2ksXG4gICAgZGU6IC9eKGRlcnxkaWV8ZGFzKVxccy9pLFxufTtcbmV4cG9ydCBjb25zdCB0cmltQXJ0aWNsZSA9IChsYW5ndWFnZSwgc291cmNlKSA9PiB7XG4gICAgaWYgKHRyaW1SZWdleGVzW2xhbmd1YWdlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGFydGljbGVNYXRjaCA9IHNvdXJjZS5tYXRjaCh0cmltUmVnZXhlc1tsYW5ndWFnZV0pO1xuICAgIGlmIChhcnRpY2xlTWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgYXJ0aWNsZSA9IGFydGljbGVNYXRjaFswXS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhcnRpY2xlLFxuICAgICAgICBzb3VyY2U6IHNvdXJjZS5yZXBsYWNlKHRyaW1SZWdleGVzW2xhbmd1YWdlXSwgJycpLnRyaW0oKSxcbiAgICB9O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZ2V0QXR0cmlidXRlVmFsdWUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmdBcnJheSc7XG5leHBvcnQgKiBmcm9tICcuL3Rva2VuaXplJztcbmV4cG9ydCAqIGZyb20gJy4vdHJpbUFydGljbGUnO1xuIiwiaW1wb3J0IHsgZ2V0QXR0cmlidXRlVmFsdWUgfSBmcm9tICdAdm9jYWJseS9zdWxuYSc7XG5leHBvcnQgY29uc3QgbWFwVXNlckF0dHJpYnV0ZXMgPSAoeyB1c2VyLCBhdHRyaWJ1dGVzLCB9KSA9PiB7XG4gICAgY29uc3QgZW1haWwgPSBhdHRyaWJ1dGVzLmZpbmQoKGEpID0+IGEuZ2V0TmFtZSgpID09PSAnZW1haWwnKTtcbiAgICBjb25zdCBzdWIgPSBhdHRyaWJ1dGVzLmZpbmQoKGEpID0+IGEuZ2V0TmFtZSgpID09PSAnc3ViJyk7XG4gICAgY29uc3Qgc3RhdHVzID0gYXR0cmlidXRlcy5maW5kKChhKSA9PiBhLmdldE5hbWUoKSA9PT0gJ2N1c3RvbTpzdGF0dXMnKTtcbiAgICBjb25zdCBjYW5jZWxsYXRpb25EYXRlID0gYXR0cmlidXRlcy5maW5kKChhKSA9PiBhLmdldE5hbWUoKSA9PT0gJ2N1c3RvbTpjYW5jZWxsYXRpb25fZGF0ZScpO1xuICAgIGNvbnN0IG5leHRCaWxsRGF0ZSA9IGF0dHJpYnV0ZXMuZmluZCgoYSkgPT4gYS5nZXROYW1lKCkgPT09ICdjdXN0b206bmV4dF9iaWxsX2RhdGUnKTtcbiAgICBjb25zdCB1bml0UHJpY2UgPSBhdHRyaWJ1dGVzLmZpbmQoKGEpID0+IGEuZ2V0TmFtZSgpID09PSAnY3VzdG9tOnVuaXRfcHJpY2UnKTtcbiAgICBjb25zdCB1cGRhdGVVcmwgPSBhdHRyaWJ1dGVzLmZpbmQoKGEpID0+IGEuZ2V0TmFtZSgpID09PSAnY3VzdG9tOnVwZGF0ZV91cmwnKTtcbiAgICBjb25zdCBjYW5jZWxVcmwgPSBhdHRyaWJ1dGVzLmZpbmQoKGEpID0+IGEuZ2V0TmFtZSgpID09PSAnY3VzdG9tOmNhbmNlbF91cmwnKTtcbiAgICBjb25zdCBwcm9kdWN0SWQgPSBhdHRyaWJ1dGVzLmZpbmQoKGEpID0+IGEuZ2V0TmFtZSgpID09PSAnY3VzdG9tOnByb2R1Y3RfaWQnKTtcbiAgICBjb25zdCBwbGFuTmFtZSA9IGF0dHJpYnV0ZXMuZmluZCgoYSkgPT4gYS5nZXROYW1lKCkgPT09ICdjdXN0b206cGxhbl9uYW1lJyk7XG4gICAgaWYgKCFlbWFpbCB8fCAhc3ViKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdDYW4gZmluZCBlbWFpbCBhbmQgc3ViIGluIHVzZXIgZGF0YS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIuZ2V0VXNlcm5hbWUoKSxcbiAgICAgICAgZW1haWw6IGVtYWlsLmdldFZhbHVlKCksXG4gICAgICAgIHN1Yjogc3ViLmdldFZhbHVlKCksXG4gICAgICAgIHN0YXR1czogZ2V0QXR0cmlidXRlVmFsdWUoc3RhdHVzKSxcbiAgICAgICAgdXBkYXRlVXJsOiBnZXRBdHRyaWJ1dGVWYWx1ZSh1cGRhdGVVcmwpLFxuICAgICAgICBjYW5jZWxVcmw6IGdldEF0dHJpYnV0ZVZhbHVlKGNhbmNlbFVybCksXG4gICAgICAgIG5leHRCaWxsRGF0ZTogbmV4dEJpbGxEYXRlICYmIG5ldyBEYXRlKG5leHRCaWxsRGF0ZS5nZXRWYWx1ZSgpKSxcbiAgICAgICAgdW5pdFByaWNlOiB1bml0UHJpY2UgJiYgcGFyc2VGbG9hdCh1bml0UHJpY2UuZ2V0VmFsdWUoKSksXG4gICAgICAgIGNhbmNlbGxhdGlvbkRhdGU6IGNhbmNlbGxhdGlvbkRhdGUgJiYgbmV3IERhdGUoY2FuY2VsbGF0aW9uRGF0ZS5nZXRWYWx1ZSgpKSxcbiAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0SWQgJiYgcGFyc2VJbnQocHJvZHVjdElkLmdldFZhbHVlKCkpLFxuICAgICAgICBwbGFuTmFtZTogcGxhbk5hbWUgJiYgcGxhbk5hbWUuZ2V0VmFsdWUoKSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBpc0VsaWdpYmxlRm9yVHJpYWwgPSAodXNlckRhdGEpID0+IHtcbiAgICByZXR1cm4gdXNlckRhdGEuc3RhdHVzICE9PSAnZGVsZXRlZCc7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRVc2VyTWV0YWRhdGEgPSB7XG4gICAgcmF0ZToge1xuICAgICAgICBpb3M6IHVuZGVmaW5lZCxcbiAgICAgICAgYW5kcm9pZDogdW5kZWZpbmVkLFxuICAgICAgICBjaHJvbWVFeHRlbnNpb246IHVuZGVmaW5lZCxcbiAgICAgICAgc2FmYXJpRXh0ZW5zaW9uOiB1bmRlZmluZWQsXG4gICAgfSxcbn07XG5leHBvcnQgY29uc3QgbWVyZ2VVc2VyTWV0YWRhdGEgPSAobWQxLCBtZDIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5tZDEsXG4gICAgICAgIC4uLm1kMixcbiAgICAgICAgcmF0ZToge1xuICAgICAgICAgICAgLi4ubWQxLnJhdGUsXG4gICAgICAgICAgICAuLi5tZDIucmF0ZSxcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBtYXBVc2VyTWV0YWRhdGEgPSAobWV0YWRhdGEpID0+IHtcbiAgICByZXR1cm4gbWVyZ2VVc2VyTWV0YWRhdGEoZGVmYXVsdFVzZXJNZXRhZGF0YSwgbWV0YWRhdGEpO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYW5hbHlzaXMnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpby1wcm9udW5jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vbGFuZ3VhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sYW5ndWFnZS1kZWNrJztcbmV4cG9ydCAqIGZyb20gJy4vbGFuZ3VhZ2UtbGlzdCc7XG5leHBvcnQgeyBpc0Vycm9yLCBpc1N1Y2Nlc3MsIHJlc3VsdGlmeSB9IGZyb20gJy4vcmVzdWx0JztcbmV4cG9ydCAqIGZyb20gJy4vc29ydGVkLWxhbmd1YWdlcyc7XG5leHBvcnQgKiBmcm9tICcuL3N1YnNjcmlwdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3RleHQtdG8tc3BlZWNoJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNsYXRpb24tY2FyZHMnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlck1ldGFkYXRhJztcbiIsIu+7v2V4cG9ydCBjb25zdCBpc1NlbGVjdGlvbiA9IChhbmNob3IpID0+IHtcbiAgICByZXR1cm4gYW5jaG9yIGluc3RhbmNlb2YgU2VsZWN0aW9uO1xufTtcbiIsIu+7v3ZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgaXNHb29nbGVMYW5ndWFnZSB9IGZyb20gJ0B2b2NhYmx5L21vZGVsJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGlzU2VsZWN0aW9uIH0gZnJvbSAnLi9pc1NlbGVjdGlvbic7XG5jb25zdCBnZXROb2RlTGFuZ3VhZ2UgPSAobm9kZSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IG5vZGVMYW5nID0gKChfYSA9IG5vZGUubGFuZykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpLnN1YnN0cmluZygwLCAyKTtcbiAgICBpZiAoaXNHb29nbGVMYW5ndWFnZShub2RlTGFuZykpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVMYW5nO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Tm9kZUxhbmd1YWdlKG5vZGUucGFyZW50Tm9kZSk7XG59O1xuZXhwb3J0IGNvbnN0IGRldGVjdExhbmd1YWdlID0gKGFuY2hvcikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgbG9jYXRpb25MYW5ndWFnZSA9IHlpZWxkIGFwaS5nZXRMb2NhdGlvbkxhbmd1YWdlKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKTtcbiAgICBpZiAobG9jYXRpb25MYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb25MYW5ndWFnZTtcbiAgICB9XG4gICAgaWYgKGlzU2VsZWN0aW9uKGFuY2hvcikpIHtcbiAgICAgICAgcmV0dXJuIGdldE5vZGVMYW5ndWFnZShhbmNob3IuYW5jaG9yTm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBnZXROb2RlTGFuZ3VhZ2UoYW5jaG9yKTtcbn0pO1xuIiwi77u/Y29uc3QgaXNIdG1sRWxlbWVudCA9IChub2RlKSA9PiB7XG4gICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFO1xufTtcbmNvbnN0IGdldFByZXZpb3VzU2libGluZyA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpc0h0bWxFbGVtZW50KG5vZGUpICYmXG4gICAgICAgICFnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmRpc3BsYXkuaW5jbHVkZXMoJ2lubGluZScpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgIH1cbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByZXZpb3VzU2libGluZyhub2RlLnBhcmVudE5vZGUpO1xufTtcbmNvbnN0IGdldE5leHRTaWJsaW5nID0gKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGlzSHRtbEVsZW1lbnQobm9kZSkgJiZcbiAgICAgICAgIWdldENvbXB1dGVkU3R5bGUobm9kZSkuZGlzcGxheS5pbmNsdWRlcygnaW5saW5lJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChub2RlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIHJldHVybiBub2RlLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldE5leHRTaWJsaW5nKG5vZGUucGFyZW50Tm9kZSk7XG59O1xuY29uc3QgcGFyc2VCYWNrd2FyZCA9IChub2RlLCBjb250ZXh0LCBzdGFydE9mZnNldCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGxldCBuZXdDb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBvZmZzZXQgPSBzdGFydE9mZnNldCAhPT0gbnVsbCAmJiBzdGFydE9mZnNldCAhPT0gdm9pZCAwID8gc3RhcnRPZmZzZXQgOiBub2RlLnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gb2Zmc2V0IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgY2hhciA9IChfYSA9IG5vZGUudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09ICcuJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ld0NvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3Q29udGV4dCA9IGNoYXIgKyBuZXdDb250ZXh0O1xuICAgIH1cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBnZXRQcmV2aW91c1NpYmxpbmcobm9kZSk7XG4gICAgaWYgKHByZXZpb3VzU2libGluZykge1xuICAgICAgICByZXR1cm4gcGFyc2VCYWNrd2FyZChwcmV2aW91c1NpYmxpbmcsIG5ld0NvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udGV4dDtcbn07XG5jb25zdCBwYXJzZUZvcndhcmQgPSAobm9kZSwgY29udGV4dCwgZW5kT2Zmc2V0KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBpZiAoIW5vZGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuICAgIGxldCBuZXdDb250ZXh0ID0gY29udGV4dDtcbiAgICBjb25zdCBvZmZzZXQgPSBlbmRPZmZzZXQgIT09IG51bGwgJiYgZW5kT2Zmc2V0ICE9PSB2b2lkIDAgPyBlbmRPZmZzZXQgOiAwO1xuICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCBub2RlLnRleHRDb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSAoX2EgPSBub2RlLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbaV07XG4gICAgICAgIGlmIChjaGFyID09PSAnLicpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdDb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIG5ld0NvbnRleHQgPSBuZXdDb250ZXh0ICsgY2hhcjtcbiAgICB9XG4gICAgY29uc3QgbmV4dFNpYmxpbmcgPSBnZXROZXh0U2libGluZyhub2RlKTtcbiAgICBpZiAobmV4dFNpYmxpbmcpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRm9yd2FyZChuZXh0U2libGluZywgbmV3Q29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDb250ZXh0O1xufTtcbmV4cG9ydCBjb25zdCBnZXRDb250ZXh0RnJvbVNlbGVjdGlvbiA9IChzZWxlY3Rpb24pID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xuICAgIHJldHVybiBwYXJzZUZvcndhcmQocmFuZ2UuZW5kQ29udGFpbmVyLCBwYXJzZUJhY2t3YXJkKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBzZWxlY3Rpb24udG9TdHJpbmcoKSwgcmFuZ2Uuc3RhcnRPZmZzZXQpLCByYW5nZS5lbmRPZmZzZXQpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDb250ZXh0RnJvbUhUTUxFbGVtZW50ID0gKGh0bWxFbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIHBhcnNlRm9yd2FyZChnZXROZXh0U2libGluZyhodG1sRWxlbWVudCksIHBhcnNlQmFja3dhcmQoZ2V0UHJldmlvdXNTaWJsaW5nKGh0bWxFbGVtZW50KSwgaHRtbEVsZW1lbnQudGV4dENvbnRlbnQpKTtcbn07XG4iLCLvu79pbXBvcnQgeyB0b2tlbml6ZSB9IGZyb20gJ0B2b2NhYmx5L3N1bG5hJztcbmltcG9ydCB7IGdldENvbnRleHRGcm9tSFRNTEVsZW1lbnQsIGdldENvbnRleHRGcm9tU2VsZWN0aW9uLCB9IGZyb20gJy4vZ2V0Q29udGV4dC9nZXRDb250ZXh0RnJvbVNlbGVjdGlvbic7XG5pbXBvcnQgeyBpc1NlbGVjdGlvbiB9IGZyb20gJy4vaXNTZWxlY3Rpb24nO1xuZXhwb3J0IGNvbnN0IGdldENvbnRleHQgPSAoYW5jaG9yKSA9PiB7XG4gICAgbGV0IHJhd0NvbnRleHQgPSAnJztcbiAgICBpZiAoaXNTZWxlY3Rpb24oYW5jaG9yKSkge1xuICAgICAgICByYXdDb250ZXh0ID0gZ2V0Q29udGV4dEZyb21TZWxlY3Rpb24oYW5jaG9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJhd0NvbnRleHQgPSBnZXRDb250ZXh0RnJvbUhUTUxFbGVtZW50KGFuY2hvcik7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbml6ZShyYXdDb250ZXh0KS5qb2luKCcgJyk7XG59O1xuIiwi77u/aW1wb3J0IHsgaXNTZWxlY3Rpb24gfSBmcm9tICcuL2lzU2VsZWN0aW9uJztcbmV4cG9ydCBjb25zdCBnZXRUZXh0ID0gKGFuY2hvcikgPT4ge1xuICAgIGlmIChpc1NlbGVjdGlvbihhbmNob3IpKSB7XG4gICAgICAgIHJldHVybiBhbmNob3IudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuY2hvci5pbm5lclRleHQ7XG59O1xuIiwi77u/ZXhwb3J0IGxldCBjb250ZW50U2NyaXB0Q29uZmlndXJhdGlvbiA9IHtcbiAgICBpc0ZlZWRiYWNrRW5hYmxlZDogZmFsc2UsXG4gICAgYXNrRm9yUmF0aW5nRW5hYmxlZDogZmFsc2UsXG4gICAgZGlzcGxheU1vYmlsZUxvb2t1cEJ1dHRvbjogZmFsc2UsXG4gICAgYWxsb3dGaXJzdFRyYW5zbGF0aW9uQ29uZ3JhdHVsYXRpb246IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBjb25maWd1cmVDb250ZW50U2NyaXB0ID0gKGNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICBjb250ZW50U2NyaXB0Q29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29udGVudFNjcmlwdENvbmZpZ3VyYXRpb24pLCBjb25maWd1cmF0aW9uKTtcbn07XG4iLCLvu79pbXBvcnQgeyBicm93c2VyIH0gZnJvbSAnLi9icm93c2VyJztcbmV4cG9ydCBjb25zdCBkZXRlY3RFeHRlbnNpb25QbGF0Zm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gYnJvd3Nlci5zYXRpc2ZpZXMoe1xuICAgICAgICBtYWNvczoge1xuICAgICAgICAgICAgc2FmYXJpOiAnPjEwLjEnLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgICAgID8ge1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS9hcHAvaWQ2NDY0MDc2NDI1JyxcbiAgICAgICAgICAgIG5hbWU6ICdBcHAgU3RvcmUnLFxuICAgICAgICAgICAgcGxhdGZvcm06ICdzYWZhcmlFeHRlbnNpb24nLFxuICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvdm9jYWJseS9iYW9jaWdtbWhoZGVtaWpmam5qZGlkYmtmZ3Bnb2dtYicsXG4gICAgICAgICAgICBuYW1lOiAnQ2hyb21lIFdlYiBTdG9yZScsXG4gICAgICAgICAgICBwbGF0Zm9ybTogJ2Nocm9tZUV4dGVuc2lvbicsXG4gICAgICAgIH07XG59O1xuIiwi77u/dmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuL2FwaSc7XG5jb25zdCBwbGF5RGF0YVVybCA9IChkYXRhVXJsKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4geWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGRhdGFVcmwpO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5wbGF5KCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogJ1VOQUJMRV9UT19QTEFZX0FVRElPX0RBVEFfVVJMJyxcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcGxheWluZyB0aGUgb2Zmc2NyZWVuIGF1ZGlvJyxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE6IGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlOiAnVU5BQkxFX1RPX1BMQVlfQVVESU9fREFUQV9VUkwnLFxuICAgICAgICAgICAgICAgIHJlYXNvbjogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHBsYXlpbmcgdGhlIG9mZnNjcmVlbiBhdWRpbycsXG4gICAgICAgICAgICAgICAgZXh0cmE6IGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5leHBvcnQgY29uc3QgcGxheUF1ZGlvUHJvbnVuY2lhdGlvbiA9IChwYXlsb2FkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBjYW5QbGF5T2ZmU2NyZWVuID0geWllbGQgYXBpLmNhblBsYXlPZmZTY3JlZW4oKTtcbiAgICBpZiAoY2FuUGxheU9mZlNjcmVlbikge1xuICAgICAgICByZXR1cm4gYXBpLnBsYXlBdWRpb1Byb251bmNpYXRpb24ocGF5bG9hZCk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGFwaS5nZXRBdWRpb1Byb251bmNpYXRpb24ocGF5bG9hZCk7XG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gcGxheURhdGFVcmwocmVzdWx0LnZhbHVlLnVybCk7XG59KTtcbiIsIu+7v3ZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IGNvbnRlbnRTY3JpcHRDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBkZXRlY3RFeHRlbnNpb25QbGF0Zm9ybSB9IGZyb20gJy4uL2RldGVjdEV4dGVuc2lvblBsYXRmb3JtJztcbmltcG9ydCB7IHBsYXlBdWRpb1Byb251bmNpYXRpb24gfSBmcm9tICcuLi9wbGF5QXVkaW9Qcm9udW5jaWF0aW9uJztcbmNvbnN0IGdldExvY2FsZUxhbmd1YWdlID0gKCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBpZiAoISgoX2EgPSB3aW5kb3cgPT09IG51bGwgfHwgd2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW5kb3cubmF2aWdhdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGFuZ3VhZ2UpKSB7XG4gICAgICAgIHJldHVybiAnZW4nO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZS5zdWJzdHJpbmcoMCwgMik7XG59O1xuZXhwb3J0IGNvbnN0IHNldENvbnRlbnRzID0gKHsgcG9wdXAsIHNvdXJjZSwgZGV0ZWN0ZWRMYW5ndWFnZSwgY29udGV4dCwgYXV0b1BsYXksIH0pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBpbnRlcnZhbElkID0gbnVsbDtcbiAgICBjb25zdCB0ZWFyRG93biA9ICgpID0+IHtcbiAgICAgICAgaWYgKGludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICBpbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2V0VHJhbnNsYXRpb24gPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdXNlcktub3dzSG93VG9BZGQgPSB5aWVsZCBhcGkuaXNVc2VyS25vd3NIb3dUb0FkZCgpO1xuICAgICAgICBjb25zdCBleHRlbnNpb25QbGF0Zm9ybSA9IGRldGVjdEV4dGVuc2lvblBsYXRmb3JtKCk7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndm9jYWJseS10cmFuc2xhdGlvbicpO1xuICAgICAgICB0cmFuc2xhdGlvbi5pc0ZlZWRiYWNrRW5hYmxlZCA9XG4gICAgICAgICAgICBjb250ZW50U2NyaXB0Q29uZmlndXJhdGlvbi5pc0ZlZWRiYWNrRW5hYmxlZDtcbiAgICAgICAgdHJhbnNsYXRpb24ucGhyYXNlID0gc291cmNlO1xuICAgICAgICB0cmFuc2xhdGlvbi5wbGF5QXVkaW9Qcm9udW5jaWF0aW9uID0gcGxheUF1ZGlvUHJvbnVuY2lhdGlvbjtcbiAgICAgICAgdHJhbnNsYXRpb24uc2hvd1NhdmVIaW50ID0gIXVzZXJLbm93c0hvd1RvQWRkO1xuICAgICAgICB0cmFuc2xhdGlvbi5leHRlbnNpb25QbGF0Zm9ybSA9IGV4dGVuc2lvblBsYXRmb3JtO1xuICAgICAgICB0cmFuc2xhdGlvbi5jYW5Db25ncmF0dWxhdGUgPVxuICAgICAgICAgICAgY29udGVudFNjcmlwdENvbmZpZ3VyYXRpb24uYWxsb3dGaXJzdFRyYW5zbGF0aW9uQ29uZ3JhdHVsYXRpb24gJiZcbiAgICAgICAgICAgICAgICAhdXNlcktub3dzSG93VG9BZGQ7XG4gICAgICAgIGNvbnN0IGFuYWx5emUgPSAoeyBzb3VyY2VMYW5ndWFnZSwgdGFyZ2V0TGFuZ3VhZ2UsIH0gPSB7fSkgPT4ge1xuICAgICAgICAgICAgdHJhbnNsYXRpb24ubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBhcGlcbiAgICAgICAgICAgICAgICAuYW5hbHl6ZSh7IHNvdXJjZSwgc291cmNlTGFuZ3VhZ2UsIHRhcmdldExhbmd1YWdlLCBjb250ZXh0IH0pXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHRyYW5zbGF0aW9uUmVzdWx0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRpb25SZXN1bHQuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQW5hbHl6ZSBlcnJvcicsIHRyYW5zbGF0aW9uUmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRTY3JpcHRDb25maWd1cmF0aW9uLmFza0ZvclJhdGluZ0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXNrRm9yUmF0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uUmVzdWx0OiB0cmFuc2xhdGlvblJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvblBsYXRmb3JtOiBleHRlbnNpb25QbGF0Zm9ybS5wbGF0Zm9ybSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uLmFza0ZvclJhdGluZyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uLnJlc3VsdCA9IHRyYW5zbGF0aW9uUmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvblJlc3VsdC5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uLnNvdXJjZUxhbmd1YWdlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uUmVzdWx0LnZhbHVlLnRyYW5zbGF0aW9uLnNvdXJjZUxhbmd1YWdlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbi50YXJnZXRMYW5ndWFnZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblJlc3VsdC52YWx1ZS50cmFuc2xhdGlvbi50YXJnZXRMYW5ndWFnZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dG9QbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbi5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdMYW5ndWFnZXNSZXN1bHQgPSB5aWVsZCBhcGkubGlzdExhbmd1YWdlcygpO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uLmV4aXN0aW5nU291cmNlTGFuZ3VhZ2VzID0gZXhpc3RpbmdMYW5ndWFnZXNSZXN1bHQuc3VjY2Vzc1xuICAgICAgICAgICAgICAgICAgICA/IGV4aXN0aW5nTGFuZ3VhZ2VzUmVzdWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogW107XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXJnZXRMYW5ndWFnZXMgPSB5aWVsZCBhcGkubGlzdFRhcmdldExhbmd1YWdlcygpO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uLmV4aXN0aW5nVGFyZ2V0TGFuZ3VhZ2VzID0gZXhpc3RpbmdUYXJnZXRMYW5ndWFnZXM7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIHRyYW5zbGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVNvdXJjZUxhbmd1YWdlJywgKHsgZGV0YWlsOiBzb3VyY2VMYW5ndWFnZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb24ucmVzdWx0ICYmIHRyYW5zbGF0aW9uLnJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgYXBpLmNsZWFuVXAodHJhbnNsYXRpb24ucmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwaS5zYXZlTG9jYXRpb25MYW5ndWFnZShbd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCksIHNvdXJjZUxhbmd1YWdlXSk7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbi5zb3VyY2VMYW5ndWFnZSA9IHNvdXJjZUxhbmd1YWdlO1xuICAgICAgICAgICAgYW5hbHl6ZSh7XG4gICAgICAgICAgICAgICAgc291cmNlTGFuZ3VhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyYW5zbGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZVRhcmdldExhbmd1YWdlJywgKHsgZGV0YWlsOiB0YXJnZXRMYW5ndWFnZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb24ucmVzdWx0ICYmIHRyYW5zbGF0aW9uLnJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgYXBpLmNsZWFuVXAodHJhbnNsYXRpb24ucmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyYW5zbGF0aW9uLnRhcmdldExhbmd1YWdlID0gdGFyZ2V0TGFuZ3VhZ2U7XG4gICAgICAgICAgICBhbmFseXplKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRMYW5ndWFnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJhbnNsYXRpb24uYWRkRXZlbnRMaXN0ZW5lcigncmVtb3ZlQ2FyZCcsICh7IGRldGFpbDogcGF5bG9hZCB9KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uLmlzVXBkYXRpbmcgPSBwYXlsb2FkLmNhcmQ7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbi5yZXN1bHQgPSB5aWVsZCBhcGkucmVtb3ZlQ2FyZChwYXlsb2FkKTtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uLmlzVXBkYXRpbmcgPSBudWxsO1xuICAgICAgICAgICAgeWllbGQgYXBpLnNldFVzZXJLbm93c0hvd1RvQWRkKHRydWUpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRyYW5zbGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZENhcmQnLCAoeyBkZXRhaWw6IHBheWxvYWQgfSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbi5pc1VwZGF0aW5nID0gcGF5bG9hZC5jYXJkO1xuICAgICAgICAgICAgdHJhbnNsYXRpb24ucmVzdWx0ID0geWllbGQgYXBpLmFkZENhcmQocGF5bG9hZCk7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbi5pc1VwZGF0aW5nID0gbnVsbDtcbiAgICAgICAgICAgIHlpZWxkIGFwaS5zZXRVc2VyS25vd3NIb3dUb0FkZCh0cnVlKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0cmFuc2xhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdyYXRpbmdJbnRlcmFjdGlvbicsICh7IGRldGFpbDogcGF5bG9hZCB9KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIGFwaS5zYXZlQXNrRm9yUmF0aW5nUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIGV4dGVuc2lvblBsYXRmb3JtOiBleHRlbnNpb25QbGF0Zm9ybS5wbGF0Zm9ybSxcbiAgICAgICAgICAgICAgICByYXRlSW50ZXJhY3Rpb246IHBheWxvYWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBhbmFseXplKHtcbiAgICAgICAgICAgIHNvdXJjZUxhbmd1YWdlOiBkZXRlY3RlZExhbmd1YWdlLFxuICAgICAgICB9KTtcbiAgICAgICAgcG9wdXAuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHRyYW5zbGF0aW9uKTtcbiAgICB9KTtcbiAgICBjb25zdCBpc0FscmlnaHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBhcGkuaXNMb2dnZWRJbigpLFxuICAgICAgICAgICAgYXBpLmlzQWN0aXZlKCksXG4gICAgICAgICAgICBhcGkuZ2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSgpLFxuICAgICAgICAgICAgYXBpLmdldEludGVybmFsUHJveHlMYW5ndWFnZSgpLFxuICAgICAgICBdKTtcbiAgICB9O1xuICAgIGNvbnN0IFtpc0xvZ2dlZEluLCBpc0FjdGl2ZSwgaW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgaW50ZXJuYWxUYXJnZXRMYW5ndWFnZV0gPSB5aWVsZCBpc0FscmlnaHQoKTtcbiAgICBpZiAoaXNMb2dnZWRJbiAmJlxuICAgICAgICBpc0FjdGl2ZSAmJlxuICAgICAgICBpbnRlcm5hbFNvdXJjZUxhbmd1YWdlICYmXG4gICAgICAgIGludGVybmFsVGFyZ2V0TGFuZ3VhZ2UpIHtcbiAgICAgICAgeWllbGQgc2V0VHJhbnNsYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHRlYXJEb3duO1xuICAgIH1cbiAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHVwZGF0ZUFsZXJ0TWVzc2FnZSA9IChpc0xvZ2dlZEluLCBpc0FjdGl2ZSwgaW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgaW50ZXJuYWxUYXJnZXRMYW5ndWFnZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghaXNMb2dnZWRJbikge1xuICAgICAgICAgICAgaWYgKGFsZXJ0LmRhdGFzZXQubWVzc2FnZSAhPT0gJ3NpZ24taW4nKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQuZGF0YXNldC5tZXNzYWdlID0gJ3NpZ24taW4nO1xuICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25JbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2b2NhYmx5LXNpZ24taW4nKTtcbiAgICAgICAgICAgICAgICBzaWduSW5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbmZpcm0nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlV2luZG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1Byb3h5ID0gd2luZG93Lm9wZW4oYCR7YXBpLmFwcEJhc2VVcmx9L2hhbmRzLWZyZWVgLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1Byb3h5LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQoc2lnbkluRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKGFsZXJ0LmRhdGFzZXQubWVzc2FnZSAhPT0gJ3N1YnNjcmliZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0VsaWdpYmxlRm9yVHJpYWwgPSB5aWVsZCBhcGkuaXNFbGlnaWJsZUZvclRyaWFsKCk7XG4gICAgICAgICAgICAgICAgYWxlcnQuZGF0YXNldC5tZXNzYWdlID0gJ3N1YnNjcmliZSc7XG4gICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZvY2FibHktc3Vic2NyaWJlJyk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlRWxlbWVudC50cmlhbCA9IGlzRWxpZ2libGVGb3JUcmlhbDtcbiAgICAgICAgICAgICAgICBhbGVydC5hcHBlbmRDaGlsZChzdWJzY3JpYmVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWludGVybmFsU291cmNlTGFuZ3VhZ2UgfHwgIWludGVybmFsVGFyZ2V0TGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIGlmIChhbGVydC5kYXRhc2V0Lm1lc3NhZ2UgIT09ICdwcm94eS1sYW5ndWFnZScpIHtcbiAgICAgICAgICAgICAgICBhbGVydC5kYXRhc2V0Lm1lc3NhZ2UgPSAncHJveHktbGFuZ3VhZ2UnO1xuICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhbmd1YWdlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZvY2FibHktbGFuZ3VhZ2UnKTtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUZvcm0uc291cmNlTGFuZ3VhZ2UgPVxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFNvdXJjZUxhbmd1YWdlICE9PSBudWxsICYmIGludGVybmFsU291cmNlTGFuZ3VhZ2UgIT09IHZvaWQgMCA/IGludGVybmFsU291cmNlTGFuZ3VhZ2UgOiBkZXRlY3RlZExhbmd1YWdlO1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlRm9ybS50YXJnZXRMYW5ndWFnZSA9XG4gICAgICAgICAgICAgICAgICAgIGludGVybmFsVGFyZ2V0TGFuZ3VhZ2UgIT09IG51bGwgJiYgaW50ZXJuYWxUYXJnZXRMYW5ndWFnZSAhPT0gdm9pZCAwID8gaW50ZXJuYWxUYXJnZXRMYW5ndWFnZSA6IGdldExvY2FsZUxhbmd1YWdlKCk7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbmZpcm0nLCAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZUZvcm0ud2FpdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc291cmNlTGFuZ3VhZ2UsIHRhcmdldExhbmd1YWdlIH0gPSBldmVudC5kZXRhaWw7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5zZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlKHNvdXJjZUxhbmd1YWdlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5zZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UodGFyZ2V0TGFuZ3VhZ2UpLFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQobGFuZ3VhZ2VGb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHlpZWxkIHVwZGF0ZUFsZXJ0TWVzc2FnZShpc0xvZ2dlZEluLCBpc0FjdGl2ZSwgaW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgaW50ZXJuYWxUYXJnZXRMYW5ndWFnZSk7XG4gICAgbGV0IHdpbmRvd1Byb3h5ID0gbnVsbDtcbiAgICBjb25zdCBjbG9zZVdpbmRvdyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvd1Byb3h5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3dQcm94eS5jbG9zZSgpO1xuICAgICAgICAgICAgd2luZG93UHJveHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IFtpc0xvZ2dlZEluLCBpc0FjdGl2ZSwgaW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgaW50ZXJuYWxUYXJnZXRMYW5ndWFnZSxdID0geWllbGQgaXNBbHJpZ2h0KCk7XG4gICAgICAgIGlmIChpc0xvZ2dlZEluICYmXG4gICAgICAgICAgICBpc0FjdGl2ZSAmJlxuICAgICAgICAgICAgaW50ZXJuYWxTb3VyY2VMYW5ndWFnZSAmJlxuICAgICAgICAgICAgaW50ZXJuYWxUYXJnZXRMYW5ndWFnZSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgIGludGVydmFsSWQgPSBudWxsO1xuICAgICAgICAgICAgeWllbGQgc2V0VHJhbnNsYXRpb24oKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoY2xvc2VXaW5kb3csIDMwMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeWllbGQgdXBkYXRlQWxlcnRNZXNzYWdlKGlzTG9nZ2VkSW4sIGlzQWN0aXZlLCBpbnRlcm5hbFNvdXJjZUxhbmd1YWdlLCBpbnRlcm5hbFRhcmdldExhbmd1YWdlKTtcbiAgICAgICAgfVxuICAgIH0pLCAxMDAwKTtcbiAgICBwb3B1cC5pbm5lckhUTUwgPSAnJztcbiAgICBwb3B1cC5hcHBlbmRDaGlsZChhbGVydCk7XG4gICAgcmV0dXJuIHRlYXJEb3duO1xufSk7XG4iLCLvu792YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IHNldENvbnRlbnRzIH0gZnJvbSAnLi9wb3B1cC9jb250ZW50cyc7XG5pbXBvcnQgeyBhcHBseU1heFpJbmRleCwgYXBwbHlQb3NpdGlvbiwgYXBwbHlUcmFuc2Zvcm0sIGlzVG9wLCBzZXR1cFRyYW5zZm9ybSwgfSBmcm9tICcuL3N0eWxpbmcnO1xuY29uc3QgcG9wdXBTdGFjayA9IFtdO1xuY29uc3QgY2FsY3VsYXRlUG9zaXRpb24gPSAoZ2xvYmFsUmVjdCwgaXNUb3VjaHNjcmVlbikgPT4ge1xuICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MFxuICAgICAgICA/IHdpbmRvdy5zY3JvbGxYICsgd2luZG93LmlubmVyV2lkdGggLyAyXG4gICAgICAgIDogZ2xvYmFsUmVjdC5sZWZ0ICsgZ2xvYmFsUmVjdC53aWR0aCAvIDI7XG4gICAgY29uc3QgdG9wID0gZ2xvYmFsUmVjdC50b3AgLSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBib3R0b20gPSB0b3AgKyBnbG9iYWxSZWN0LmhlaWdodDtcbiAgICBjb25zdCBzZWxlY3Rpb25Db250ZXh0TWVudUhlaWdodCA9IE1hdGguY2VpbCg1MCAvIHdpbmRvdy52aXN1YWxWaWV3cG9ydC5zY2FsZSk7XG4gICAgaWYgKGJvdHRvbSA8IHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5zY3JvbGxZICtcbiAgICAgICAgICAgICAgICBib3R0b20gK1xuICAgICAgICAgICAgICAgIChpc1RvdWNoc2NyZWVuID8gc2VsZWN0aW9uQ29udGV4dE1lbnVIZWlnaHQgOiAwKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgYm90dG9tOiB3aW5kb3cuc2Nyb2xsWSArIHRvcCAtIChpc1RvdWNoc2NyZWVuID8gc2VsZWN0aW9uQ29udGV4dE1lbnVIZWlnaHQgOiAwKSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuY29uc3QgY2FsY3VsYXRlTWF4SGVpZ2h0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKGlzVG9wKHBvc2l0aW9uKSkge1xuICAgICAgICByZXR1cm4gYCR7d2luZG93LnNjcm9sbFkgLSBwb3NpdGlvbi50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHR9cHhgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke3Bvc2l0aW9uLmJvdHRvbSAtIHdpbmRvdy5zY3JvbGxZfXB4YDtcbiAgICB9XG59O1xuY29uc3QgYXBwbHlJbml0aWFsU3R5bGVzID0gKHBvcHVwKSA9PiB7XG4gICAgYXBwbHlNYXhaSW5kZXgocG9wdXApO1xuICAgIHBvcHVwLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgcG9wdXAuc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDEwMG1zJztcbn07XG5jb25zdCBzaG93ID0gKHBvcHVwKSA9PiB7XG4gICAgcG9wdXAuc3R5bGUub3BhY2l0eSA9ICcxJztcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlUG9wdXAgPSAob3B0aW9ucykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2b2NhYmx5LXBvcHVwJyk7XG4gICAgYXBwbHlJbml0aWFsU3R5bGVzKHBvcHVwKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgZGVzdHJveVBvcHVwKHBvcHVwKTtcbiAgICB9KTtcbiAgICBjb25zdCB7IGF1dG9QbGF5IH0gPSB5aWVsZCBhcGkuZ2V0U2V0dGluZ3MoKTtcbiAgICBjb25zdCB0ZWFyRG93bkNvbnRlbnRzID0geWllbGQgc2V0Q29udGVudHMoe1xuICAgICAgICBwb3B1cCxcbiAgICAgICAgc291cmNlOiBvcHRpb25zLnRleHQsXG4gICAgICAgIGRldGVjdGVkTGFuZ3VhZ2U6IG9wdGlvbnMuZGV0ZWN0ZWRMYW5ndWFnZSxcbiAgICAgICAgY29udGV4dDogb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICBhdXRvUGxheSxcbiAgICB9KTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKG9wdGlvbnMuZ2xvYmFsUmVjdCwgb3B0aW9ucy5pc1RvdWNoc2NyZWVuKTtcbiAgICBwb3B1cC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tYXgtaGVpZ2h0JywgY2FsY3VsYXRlTWF4SGVpZ2h0KHBvc2l0aW9uKSk7XG4gICAgcG9wdXAuc3R5bGUuc2V0UHJvcGVydHkoJy0tbWF4LXdpZHRoJywgYCR7d2luZG93LnZpc3VhbFZpZXdwb3J0LndpZHRofXB4YCk7XG4gICAgYXBwbHlQb3NpdGlvbihwb3B1cCwgcG9zaXRpb24pO1xuICAgIHNldHVwVHJhbnNmb3JtKHBvcHVwKTtcbiAgICBzaG93KHBvcHVwKTtcbiAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBhcHBseVRyYW5zZm9ybShwb3B1cCwgcG9zaXRpb24pKTtcbiAgICB9KTtcbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHBvcHVwKTtcbiAgICBwb3B1cFN0YWNrLnB1c2goeyBwb3B1cCwgcmVzaXplT2JzZXJ2ZXIsIHRlYXJEb3duQ29udGVudHMgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBhZGRHbG9iYWxFdmVudExpc3RlbmVycygpLCAxMDApO1xufSk7XG5leHBvcnQgY29uc3QgZGVzdHJveVBvcHVwID0gKHBvcHVwVG9EZXN0cm95KSA9PiB7XG4gICAgY29uc3Qgc3RhY2tJdGVtSW5kZXggPSBwb3B1cFN0YWNrLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5wb3B1cCA9PT0gcG9wdXBUb0Rlc3Ryb3kpO1xuICAgIGlmIChzdGFja0l0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHBvcHVwLCByZXNpemVPYnNlcnZlciwgdGVhckRvd25Db250ZW50cyB9ID0gcG9wdXBTdGFja1tzdGFja0l0ZW1JbmRleF07XG4gICAgdGVhckRvd25Db250ZW50cygpO1xuICAgIHJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShwb3B1cCk7XG4gICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHBvcHVwLnJlbW92ZSgpO1xuICAgIHBvcHVwU3RhY2suc3BsaWNlKHN0YWNrSXRlbUluZGV4LCAxKTtcbn07XG5leHBvcnQgY29uc3QgZGVzdHJveUFsbFBvcHVwcyA9ICgpID0+IHtcbiAgICB3aGlsZSAocG9wdXBTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRlc3Ryb3lQb3B1cChwb3B1cFN0YWNrWzBdLnBvcHVwKTtcbiAgICB9XG4gICAgcmVtb3ZlR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKTtcbn07XG5jb25zdCBhZGRHbG9iYWxFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBpZiAocG9wdXBTdGFjay5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95T25HbG9iYWxDbGljayk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRlc3Ryb3lPblNwYWNlKTtcbn07XG5jb25zdCByZW1vdmVHbG9iYWxFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZGVzdHJveU9uU3BhY2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveU9uR2xvYmFsQ2xpY2spO1xufTtcbmNvbnN0IGRlc3Ryb3lPblNwYWNlID0gKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICAgIGRlc3Ryb3lBbGxQb3B1cHMoKTtcbiAgICB9XG59O1xuY29uc3QgaXNQb3B1cEVsZW1lbnQgPSAodmVyaWZpZWRFbGVtZW50KSA9PiB7XG4gICAgaWYgKHZlcmlmaWVkRWxlbWVudC50YWdOYW1lID09PSAnVk9DQUJMWS1QT1BVUCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh2ZXJpZmllZEVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gaXNQb3B1cEVsZW1lbnQodmVyaWZpZWRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgZGVzdHJveU9uR2xvYmFsQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghZS50YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc0NsaWNrT25Qb3B1cCA9IGlzUG9wdXBFbGVtZW50KGUudGFyZ2V0KTtcbiAgICBpZiAoIWlzQ2xpY2tPblBvcHVwKSB7XG4gICAgICAgIGRlc3Ryb3lBbGxQb3B1cHMoKTtcbiAgICB9XG59O1xuIiwi77u/ZXhwb3J0IGNvbnN0IGdldEdsb2JhbFJlY3QgPSAocmVjdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZLFxuICAgIH07XG59O1xuIiwi77u/dmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBhcHBseUJ1dHRvblBvc2l0aW9uIH0gZnJvbSAnLi9idXR0b24vYXBwbHlCdXR0b25Qb3NpdGlvbic7XG5pbXBvcnQgeyBjb250ZXh0TGFuZ3VhZ2VzIH0gZnJvbSAnLi9jb250ZXh0TGFuZ3VhZ2VzJztcbmltcG9ydCB7IGRldGVjdExhbmd1YWdlIH0gZnJvbSAnLi9kZXRlY3RMYW5ndWFnZSc7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnLi9nZXRDb250ZXh0JztcbmltcG9ydCB7IGdldFRleHQgfSBmcm9tICcuL2dldFRleHQnO1xuaW1wb3J0IHsgY3JlYXRlUG9wdXAgfSBmcm9tICcuL3BvcHVwJztcbmltcG9ydCB7IGdldEdsb2JhbFJlY3QgfSBmcm9tICcuL3Bvc2l0aW9uJztcbmltcG9ydCB7IGFwcGx5TWF4WkluZGV4LCBhcHBseVRyYW5zZm9ybSwgc2V0SG9yaXpvbnRhbERpc3BsYWNlbWVudCwgc2V0dXBUcmFuc2Zvcm0sIH0gZnJvbSAnLi9zdHlsaW5nJztcbmNvbnN0IGJ1dHRvbklkID0gJ3RyYW5zbGF0aW9uLWV4dGVuc2lvbi1idXR0b24nO1xuY29uc3QgY29uc2lkZXJHb29nbGVUcmFuc2xhdGUgPSAoYnV0dG9uKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBndHhJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d0eC10cmFucycpO1xuICAgICAgICAgICAgaWYgKGd0eEljb24pIHtcbiAgICAgICAgICAgICAgICBndHhJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGd0eEljb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgc2V0SG9yaXpvbnRhbERpc3BsYWNlbWVudChidXR0b24sIHJlY3Qud2lkdGggKyAzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9KTtcbn0pO1xuY29uc3QgZ2V0UG9zaXRpb24gPSAoc2VsZWN0aW9uLCBldmVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uUmVjdCA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JvbGxYICsgZXZlbnQueDtcbiAgICAgICAgICAgIGlmICgoc2VsZWN0aW9uUmVjdC5ib3R0b20gKyBzZWxlY3Rpb25SZWN0LnRvcCkgLyAyID4gZXZlbnQueSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHNlbGVjdGlvblJlY3QudG9wIC0gMSArIHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2VsZWN0aW9uUmVjdC5ib3R0b20gKyB3aW5kb3cuc2Nyb2xsWSArIDEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG59O1xuY29uc3QgaGlkZSA9IChidXR0b24pID0+IHtcbiAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5jb25zdCBzaG93ID0gKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uID0gKHNlbGVjdGlvbiwgZXZlbnQgPSBudWxsKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBpc1RvdWNoc2NyZWVuID0gZXZlbnQgPT09IG51bGw7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpc1RvdWNoc2NyZWVuID8gJ3ZvY2FibHktbW9iaWxlLWJ1dHRvbicgOiAndm9jYWJseS1idXR0b24nKTtcbiAgICBidXR0b24uaWQgPSBidXR0b25JZDtcbiAgICBoaWRlKGJ1dHRvbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGFwcGx5TWF4WkluZGV4KGJ1dHRvbik7XG4gICAgY29uc3QgZGV0ZWN0ZWRMYW5ndWFnZSA9IHlpZWxkIGRldGVjdExhbmd1YWdlKHNlbGVjdGlvbik7XG4gICAgY29uc3QgY29udGV4dCA9IGRldGVjdGVkTGFuZ3VhZ2UgJiYgY29udGV4dExhbmd1YWdlcy5pbmNsdWRlcyhkZXRlY3RlZExhbmd1YWdlKVxuICAgICAgICA/IGdldENvbnRleHQoc2VsZWN0aW9uKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNyZWF0ZVBvcHVwKHtcbiAgICAgICAgICAgIGRldGVjdGVkTGFuZ3VhZ2UsXG4gICAgICAgICAgICB0ZXh0OiBnZXRUZXh0KHNlbGVjdGlvbiksXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgZ2xvYmFsUmVjdDogZ2V0R2xvYmFsUmVjdChzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksXG4gICAgICAgICAgICBpc1RvdWNoc2NyZWVuOiBpc1RvdWNoc2NyZWVuLFxuICAgICAgICB9KTtcbiAgICAgICAgZGVzdHJveUJ1dHRvbigpO1xuICAgIH0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBldmVudFxuICAgICAgICA/IHlpZWxkIGdldFBvc2l0aW9uKHNlbGVjdGlvbiwgZXZlbnQpXG4gICAgICAgIDoge1xuICAgICAgICAgICAgbGVmdDogd2luZG93LnNjcm9sbFggKyB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsXG4gICAgICAgICAgICBib3R0b206IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0IC0gOTYsXG4gICAgICAgIH07XG4gICAgaWYgKHBvc2l0aW9uID09PSBudWxsKSB7XG4gICAgICAgIGRlc3Ryb3lCdXR0b24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcHBseUJ1dHRvblBvc2l0aW9uKHsgZWxlbWVudDogYnV0dG9uLCBwb3NpdGlvbiwgaXNUb3VjaHNjcmVlbiB9KTtcbiAgICBzZXR1cFRyYW5zZm9ybShidXR0b24pO1xuICAgIGFwcGx5VHJhbnNmb3JtKGJ1dHRvbiwgcG9zaXRpb24pO1xuICAgIHlpZWxkIGNvbnNpZGVyR29vZ2xlVHJhbnNsYXRlKGJ1dHRvbik7XG4gICAgc2hvdyhidXR0b24pO1xufSk7XG5leHBvcnQgY29uc3QgZGVzdHJveUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25JZCk7XG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgfVxufTtcbiIsIu+7v2ltcG9ydCB7IE1BWF9TWU1CT0xTX1RPX0JFX1RSQU5TTEFURUQgfSBmcm9tICdAdm9jYWJseS9tb2RlbCc7XG5leHBvcnQgY29uc3QgaXNWYWxpZFNlbGVjdGlvbiA9IChzZWxlY3Rpb24pID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChjbGllbnRSZWN0LmhlaWdodCA9PT0gMCB8fCBjbGllbnRSZWN0LndpZHRoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpLnRyaW0oKTtcbiAgICBpZiAodGV4dCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGV4dC5sZW5ndGggPiBNQVhfU1lNQk9MU19UT19CRV9UUkFOU0xBVEVEKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuIiwi77u/ZXhwb3J0IGNvbnN0IGlzSHRtbEVsZW1lbnQgPSAobm9kZSkgPT4ge1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59O1xuIiwi77u/ZXhwb3J0IGNvbnN0IHNldFlvdVR1YmVTdHlsZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlubmVySFRNTCA9IGBcbiAgLnZvY2FibHktd29yZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC52b2NhYmx5LXdvcmQ6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDFweDtcbiAgfVxuYDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn07XG4iLCLvu79jb25zdCBjaGluZXNlUmFuZ2VXaXRob3V0UHVuY3R1YXRpb24gPSBbXG4gICAgLy8gc2VxdWVuY2UgaXMgZGV0ZXJtaW5lIGJ5IG9jY3VycmVuY2UgcHJvYmFiaWxpdHlcbiAgICBbMHg0ZTAwLCAweDlmZmZdLFxuICAgIFsweDM0MDAsIDB4NGRiZl0sXG4gICAgWzB4MjAwMDAsIDB4MmE2ZGZdLFxuICAgIFsweDJhNzAwLCAweDJiNzNmXSxcbiAgICBbMHgyYjc0MCwgMHgyYjgxZl0sXG4gICAgWzB4MmI4MjAsIDB4MmNlYWZdLFxuICAgIFsweDMzMDAsIDB4MzNmZl0sXG4gICAgWzB4ZmUzMCwgMHhmZTRmXSxcbiAgICBbMHhmOTAwLCAweGZhZmZdLFxuICAgIFsweDJmODAwLCAweDJmYTFmXSwgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ0pLX0NvbXBhdGliaWxpdHlfSWRlb2dyYXBoc19TdXBwbGVtZW50XG5dO1xuY29uc3QgY2hpbmVzZVJhbmdlV2l0aFB1bmN0dWF0aW9uID0gY2hpbmVzZVJhbmdlV2l0aG91dFB1bmN0dWF0aW9uLmNvbmNhdChbXG4gICAgLy8gU1RBUlQgQ2hpbmVzZSBwdW5jdHVhdGlvblxuICAgIFsweGZmMGMsIDB4ZmYwY10sXG4gICAgWzB4MzAwMiwgMHgzMDAyXSxcbiAgICBbMHgwMGI3LCAweDAwYjddLFxuICAgIFsweDAwZDcsIDB4MDBkN10sXG4gICAgWzB4MjAxNCwgMHgyMDE0XSxcbiAgICBbMHgyMDE4LCAweDIwMThdLFxuICAgIFsweDIwMTksIDB4MjAxOV0sXG4gICAgWzB4MjAxYywgMHgyMDFjXSxcbiAgICBbMHgyMDFkLCAweDIwMWRdLFxuICAgIFsweDIwMjYsIDB4MjAyNl0sXG4gICAgWzB4MzAwMSwgMHgzMDAxXSxcbiAgICBbMHgzMDBhLCAweDMwMGFdLFxuICAgIFsweDMwMGIsIDB4MzAwYl0sXG4gICAgWzB4MzAwZSwgMHgzMDBlXSxcbiAgICBbMHgzMDBmLCAweDMwMGZdLFxuICAgIFsweDMwMTAsIDB4MzAxMF0sXG4gICAgWzB4MzAxMSwgMHgzMDExXSxcbiAgICBbMHhmZjAxLCAweGZmMDFdLFxuICAgIFsweGZmMDgsIDB4ZmYwOF0sXG4gICAgWzB4ZmYwOSwgMHhmZjA5XSxcbiAgICBbMHhmZjFhLCAweGZmMWFdLFxuICAgIFsweGZmMWIsIDB4ZmYxYl0sXG4gICAgWzB4ZmYxZiwgMHhmZjFmXSxcbiAgICBbMHhmZjVlLCAweGZmNWVdLCAvL++9nlxuICAgIC8vIEVORCBDaGluZXNlIHB1bmN0dWF0aW9uXG5dKTtcbmNvbnN0IGNvbnZlcnRDaGFyUmFuZ2VUb1JlZ0V4cCA9IChyYW5nZSkgPT4ge1xuICAgIGNvbnN0IHJlU3RyID0gcmFuZ2VcbiAgICAgICAgLm1hcCgocmFuZ2UpID0+IHtcbiAgICAgICAgaWYgKHJhbmdlWzBdID09PSByYW5nZVsxXSkge1xuICAgICAgICAgICAgcmV0dXJuIGBcXFxcdXske3JhbmdlWzBdLnRvU3RyaW5nKDE2KX19YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFtcXFxcdXske3JhbmdlWzBdLnRvU3RyaW5nKDE2KX19LVxcXFx1eyR7cmFuZ2VbMV0udG9TdHJpbmcoMTYpfX1dYDtcbiAgICB9KVxuICAgICAgICAuam9pbignfCcpO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGAke3JlU3RyfWAsICd1Jyk7XG59O1xuY29uc3QgcmVXaXRoUHVuY3R1YXRpb24gPSBjb252ZXJ0Q2hhclJhbmdlVG9SZWdFeHAoY2hpbmVzZVJhbmdlV2l0aFB1bmN0dWF0aW9uKTtcbmV4cG9ydCBjb25zdCBjb250YWluc0NoaW5lc2UgPSAodGV4dCkgPT4ge1xuICAgIHJldHVybiByZVdpdGhQdW5jdHVhdGlvbi50ZXN0KHRleHQpO1xufTtcbiIsIu+7v2NvbnN0IGphcGFuZXNlQ2hhcmFjdGVyUmVnZXggPSAvW1xcdTMwMDAtXFx1MzAzRl18W1xcdTMwNDAtXFx1MzA5Rl18W1xcdTMwQTAtXFx1MzBGRl18W1xcdUZGMDAtXFx1RkZFRl18W1xcdTRFMDAtXFx1OUZBRl18W1xcdTI2MDUtXFx1MjYwNl18W1xcdTIxOTAtXFx1MjE5NV18XFx1MjAzQi9nO1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5zSmFwYW5lc2UgPSAodGV4dCkgPT4ge1xuICAgIHJldHVybiBqYXBhbmVzZUNoYXJhY3RlclJlZ2V4LnRlc3QodGV4dCk7XG59O1xuIiwi77u/Y29uc3QgaGFuZ3VsTGV0dGVyID0gL1tcXHUxMTAwLVxcdTExRkZcXHUzMTMwLVxcdTMxOEZcXHVBOTYwLVxcdUE5N0ZcXHVBQzAwLVxcdUQ3QUZcXHVEN0IwLVxcdUQ3RkZdL2c7XG5leHBvcnQgY29uc3QgY29udGFpbnNLb3JlYW4gPSAodGV4dCkgPT4ge1xuICAgIHJldHVybiB0ZXh0Lm1hdGNoKGhhbmd1bExldHRlcikgIT09IG51bGw7XG59O1xuIiwi77u/aW1wb3J0IHsgY29udGFpbnNDaGluZXNlIH0gZnJvbSAnLi9jb250YWluc0NoaW5lc2UnO1xuaW1wb3J0IHsgY29udGFpbnNKYXBhbmVzZSB9IGZyb20gJy4vY29udGFpbnNKYXBhbmVzZSc7XG5pbXBvcnQgeyBjb250YWluc0tvcmVhbiB9IGZyb20gJy4vY29udGFpbnNLb3JlYW4nO1xuZXhwb3J0IGNvbnN0IGRldGVjdExhbmd1YWdlID0gKHRleHQpID0+IHtcbiAgICBpZiAoY29udGFpbnNLb3JlYW4odGV4dCkpIHtcbiAgICAgICAgcmV0dXJuICdrbyc7XG4gICAgfVxuICAgIGlmIChjb250YWluc0NoaW5lc2UodGV4dCkpIHtcbiAgICAgICAgcmV0dXJuICd6aCc7XG4gICAgfVxuICAgIGlmIChjb250YWluc0phcGFuZXNlKHRleHQpKSB7XG4gICAgICAgIHJldHVybiAnamEnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59O1xuIiwi77u/aW1wb3J0IHsgZGV0ZWN0TGFuZ3VhZ2UgfSBmcm9tICcuL2RldGVjdExhbmd1YWdlJztcbmNvbnN0IGxldHRlclJlZ2V4cCA9IC9bQS1aYS16XFx1MDBBQVxcdTAwQjVcXHUwMEJBXFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFQ1xcdTAyRUVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN0EtXFx1MDM3RFxcdTAzN0ZcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDUyRlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3QTVcXHUwN0IxXFx1MDdDQS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBXFx1MDgwMC1cXHUwODE1XFx1MDgxQVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDhBMC1cXHUwOEI0XFx1MDkwNC1cXHUwOTM5XFx1MDkzRFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5ODBcXHUwOTg1LVxcdTA5OENcXHUwOThGXFx1MDk5MFxcdTA5OTMtXFx1MDlBOFxcdTA5QUEtXFx1MDlCMFxcdTA5QjJcXHUwOUI2LVxcdTA5QjlcXHUwOUJEXFx1MDlDRVxcdTA5RENcXHUwOUREXFx1MDlERi1cXHUwOUUxXFx1MDlGMFxcdTA5RjFcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTcyLVxcdTBBNzRcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkRcXHUwQUQwXFx1MEFFMFxcdTBBRTFcXHUwQUY5XFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCRDBcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzlcXHUwQzNEXFx1MEM1OC1cXHUwQzVBXFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENUYtXFx1MEQ2MVxcdTBEN0EtXFx1MEQ3RlxcdTBEODUtXFx1MEQ5NlxcdTBEOUEtXFx1MERCMVxcdTBEQjMtXFx1MERCQlxcdTBEQkRcXHUwREMwLVxcdTBEQzZcXHUwRTAxLVxcdTBFMzBcXHUwRTMyXFx1MEUzM1xcdTBFNDAtXFx1MEU0NlxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUIwXFx1MEVCMlxcdTBFQjNcXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFREMtXFx1MEVERlxcdTBGMDBcXHUwRjQwLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkNcXHUwRjg4LVxcdTBGOENcXHUxMDAwLVxcdTEwMkFcXHUxMDNGXFx1MTA1MC1cXHUxMDU1XFx1MTA1QS1cXHUxMDVEXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2RS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4RVxcdTEwQTAtXFx1MTBDNVxcdTEwQzdcXHUxMENEXFx1MTBEMC1cXHUxMEZBXFx1MTBGQy1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjVcXHUxM0Y4LVxcdTEzRkRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2N0ZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNkYxLVxcdTE2RjhcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUVcXHUxOTUwLVxcdTE5NkRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5QUJcXHUxOUIwLVxcdTE5QzlcXHUxQTAwLVxcdTFBMTZcXHUxQTIwLVxcdTFBNTRcXHUxQUE3XFx1MUIwNS1cXHUxQjMzXFx1MUI0NS1cXHUxQjRCXFx1MUI4My1cXHUxQkEwXFx1MUJBRVxcdTFCQUZcXHUxQkJBLVxcdTFCRTVcXHUxQzAwLVxcdTFDMjNcXHUxQzRELVxcdTFDNEZcXHUxQzVBLVxcdTFDN0RcXHUxQ0U5LVxcdTFDRUNcXHUxQ0VFLVxcdTFDRjFcXHUxQ0Y1XFx1MUNGNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEyRFxcdTIxMkYtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNEVcXHUyMTgzXFx1MjE4NFxcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDNjAtXFx1MkNFNFxcdTJDRUItXFx1MkNFRVxcdTJDRjJcXHUyQ0YzXFx1MkQwMC1cXHUyRDI1XFx1MkQyN1xcdTJEMkRcXHUyRDMwLVxcdTJENjdcXHUyRDZGXFx1MkQ4MC1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MkUyRlxcdTMwMDVcXHUzMDA2XFx1MzAzMS1cXHUzMDM1XFx1MzAzQlxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDlELVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkRcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQkFcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGRDVcXHVBMDAwLVxcdUE0OENcXHVBNEQwLVxcdUE0RkRcXHVBNTAwLVxcdUE2MENcXHVBNjEwLVxcdUE2MUZcXHVBNjJBXFx1QTYyQlxcdUE2NDAtXFx1QTY2RVxcdUE2N0YtXFx1QTY5RFxcdUE2QTAtXFx1QTZFNVxcdUE3MTctXFx1QTcxRlxcdUE3MjItXFx1QTc4OFxcdUE3OEItXFx1QTdBRFxcdUE3QjAtXFx1QTdCN1xcdUE3RjctXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUE4NDAtXFx1QTg3M1xcdUE4ODItXFx1QThCM1xcdUE4RjItXFx1QThGN1xcdUE4RkJcXHVBOEZEXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUE5RTAtXFx1QTlFNFxcdUE5RTYtXFx1QTlFRlxcdUE5RkEtXFx1QTlGRVxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFBNjAtXFx1QUE3NlxcdUFBN0FcXHVBQTdFLVxcdUFBQUZcXHVBQUIxXFx1QUFCNVxcdUFBQjZcXHVBQUI5LVxcdUFBQkRcXHVBQUMwXFx1QUFDMlxcdUFBREItXFx1QUFERFxcdUFBRTAtXFx1QUFFQVxcdUFBRjItXFx1QUFGNFxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCMzAtXFx1QUI1QVxcdUFCNUMtXFx1QUI2NVxcdUFCNzAtXFx1QUJFMlxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10vO1xuY29uc3QgaXNMZXR0ZXIgPSAoY2hhcikgPT4ge1xuICAgIHJldHVybiBsZXR0ZXJSZWdleHAudGVzdChjaGFyKTtcbn07XG5jb25zdCBnZXRUb2tlblR5cGUgPSAoY2hhcikgPT4ge1xuICAgIHJldHVybiBpc0xldHRlcihjaGFyKSA/ICd3b3JkJyA6ICdwdW5jdHVhdGlvbic7XG59O1xuZXhwb3J0IGNvbnN0IGV4dHJhY3RUb2tlbnMgPSAodGV4dCwgbGFuZ3VhZ2UgPSAnJykgPT4ge1xuICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGRldGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZSB8fCBkZXRlY3RMYW5ndWFnZSh0ZXh0KTtcbiAgICBpZiAoZGV0ZWN0ZWRMYW5ndWFnZSA9PT0gJ3poJyB8fFxuICAgICAgICBkZXRlY3RlZExhbmd1YWdlID09PSAnemgtVFcnIHx8XG4gICAgICAgIGRldGVjdGVkTGFuZ3VhZ2UgPT09ICdqYScgfHxcbiAgICAgICAgZGV0ZWN0ZWRMYW5ndWFnZSA9PT0gJ2tvJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgIGxldCB0b2tlbiA9IHtcbiAgICAgICAgdHlwZTogZ2V0VG9rZW5UeXBlKHRleHQuY2hhckF0KDApKSxcbiAgICAgICAgdGV4dDogdGV4dC5jaGFyQXQoMCksXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRva2VuVHlwZSA9IGdldFRva2VuVHlwZSh0ZXh0LmNoYXJBdChpKSk7XG4gICAgICAgIGlmIChjdXJyZW50VG9rZW5UeXBlID09PSB0b2tlbi50eXBlKSB7XG4gICAgICAgICAgICB0b2tlbi50ZXh0ICs9IHRleHQuY2hhckF0KGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICAgIHR5cGU6IGN1cnJlbnRUb2tlblR5cGUsXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LmNoYXJBdChpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgIHJldHVybiB0b2tlbnM7XG59O1xuIiwi77u/dmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjb250ZXh0TGFuZ3VhZ2VzIH0gZnJvbSAnLi9jb250ZXh0TGFuZ3VhZ2VzJztcbmltcG9ydCB7IGRldGVjdExhbmd1YWdlIH0gZnJvbSAnLi9kZXRlY3RMYW5ndWFnZSc7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnLi9nZXRDb250ZXh0JztcbmltcG9ydCB7IGlzSHRtbEVsZW1lbnQgfSBmcm9tICcuL2lzSHRtbEVsZW1lbnQnO1xuaW1wb3J0IHsgY3JlYXRlUG9wdXAgfSBmcm9tICcuL3BvcHVwJztcbmltcG9ydCB7IGdldEdsb2JhbFJlY3QgfSBmcm9tICcuL3Bvc2l0aW9uJztcbmltcG9ydCB7IHNldFlvdVR1YmVTdHlsZXMgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBleHRyYWN0VG9rZW5zIH0gZnJvbSAnLi90b2tlbml6ZXIvZXh0cmFjdFRva2Vucyc7XG5jb25zdCB5dFBsYXllclRhZ05hbWUgPSAneXRkLXBsYXllcic7XG5leHBvcnQgY29uc3QgZ2V0UGxheWVyRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoeXRQbGF5ZXJUYWdOYW1lKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwbGF5ZXJzKTtcbn07XG5jb25zdCBoYW5kbGVQbGF5ZXJFbGVtZW50ID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlICE9PSAnY2hpbGRMaXN0JylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoIW11dGF0aW9uLnRhcmdldClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoIWlzSHRtbEVsZW1lbnQobXV0YXRpb24udGFyZ2V0KSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoIW11dGF0aW9uLnRhcmdldC5jbGFzc0xpc3QpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCFtdXRhdGlvbi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd5dHAtY2FwdGlvbi1zZWdtZW50JykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgbXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSHRtbEVsZW1lbnQobm9kZSkgJiYgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlcGxhY2VkJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBleHRyYWN0VG9rZW5zKG5vZGUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3JlcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgdG9rZW5zLmZvckVhY2goKHRva2VuLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udHlwZSAhPT0gJ3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwdW5jdHVhdGlvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdW5jdHVhdGlvblNwYW4uaW5uZXJUZXh0ID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uYXBwZW5kKHB1bmN0dWF0aW9uU3Bhbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgndm9jYWJseS13b3JkJyk7XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvci5pbm5lclRleHQgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRlY3RlZExhbmd1YWdlID0geWllbGQgZGV0ZWN0TGFuZ3VhZ2UoYW5jaG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGNyZWF0ZVBvcHVwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3RlZExhbmd1YWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGFuY2hvci50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxSZWN0OiBnZXRHbG9iYWxSZWN0KGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb3VjaHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogZGV0ZWN0ZWRMYW5ndWFnZSAmJiBjb250ZXh0TGFuZ3VhZ2VzLmluY2x1ZGVzKGRldGVjdGVkTGFuZ3VhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZ2V0Q29udGV4dChhbmNob3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5hcHBlbmQoYW5jaG9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcHRpb25XaW5kb3cgPSBub2RlLnBhcmVudE5vZGUuY2xvc2VzdCgnLmNhcHRpb24td2luZG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb25XaW5kb3cucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yZXBsYWNlV2l0aCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlcGxhY2VXaXRoKHNwYW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHBsYXllciwge1xuICAgICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBpbml0WW91dHViZSA9IChvcHRpb25zKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoIW9wdGlvbnMueXRIb3N0cy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24uaG9zdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRZb3VUdWJlU3R5bGVzKCk7XG4gICAgZ2V0UGxheWVyRWxlbWVudHMoKS5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgaGFuZGxlUGxheWVyRWxlbWVudChwbGF5ZXIpO1xuICAgIH0pO1xuICAgIGNvbnN0IHBsYXllck9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNIdG1sRWxlbWVudChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09IHl0UGxheWVyVGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5ZXJFbGVtZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcnMgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHl0UGxheWVyVGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSHRtbEVsZW1lbnQocGxheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheWVyRWxlbWVudChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBwbGF5ZXJPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIH0pO1xuICAgIGxldCBpc0FsdERvd24gPSBmYWxzZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ICE9PSAnQWx0JyB8fCBpc0FsdERvd24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpc0FsdERvd24gPSB0cnVlO1xuICAgICAgICBsZXQgaXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgY29uc3QgcGxheWVycyA9IGdldFBsYXllckVsZW1lbnRzKCk7XG4gICAgICAgIGxldCBjYXB0aW9uQ29udGFpbmVyTGlzdCA9IFtdO1xuICAgICAgICBsZXQgY2FwdGlvbkNvbnRhaW5lcnNDbG9uZUxpc3QgPSBbXTtcbiAgICAgICAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gcGxheWVyLnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG4gICAgICAgICAgICBjb25zdCBjYXB0aW9uQ29udGFpbmVyID0gcGxheWVyLnF1ZXJ5U2VsZWN0b3IoJyN5dHAtY2FwdGlvbi13aW5kb3ctY29udGFpbmVyJyk7XG4gICAgICAgICAgICBpZiAoIWlzSHRtbEVsZW1lbnQoY2FwdGlvbkNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYXB0aW9uQ29udGFpbmVyQ2xvbmUgPSBjYXB0aW9uQ29udGFpbmVyLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNhcHRpb25Db250YWluZXJMaXN0LnB1c2goY2FwdGlvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICBjYXB0aW9uQ29udGFpbmVyc0Nsb25lTGlzdC5wdXNoKGNhcHRpb25Db250YWluZXJDbG9uZSk7XG4gICAgICAgICAgICBjYXB0aW9uQ29udGFpbmVyLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICBjYXB0aW9uQ29udGFpbmVyLmJlZm9yZShjYXB0aW9uQ29udGFpbmVyQ2xvbmUpO1xuICAgICAgICAgICAgY2FwdGlvbkNvbnRhaW5lckNsb25lXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXB0aW9uLXdpbmRvdycpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGNhcHRpb25XaW5kb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzSHRtbEVsZW1lbnQoY2FwdGlvbldpbmRvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXB0aW9uV2luZG93LmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNhcHRpb25XaW5kb3cuc3R5bGUudXNlclNlbGVjdCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICBjYXB0aW9uV2luZG93LnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgY2FwdGlvbldpbmRvd1xuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmNhcHRpb25zLXRleHQnKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSHRtbEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYXB0aW9uV2luZG93XG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcueXRwLWNhcHRpb24tc2VnbWVudCcpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChzZWdtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNIdG1sRWxlbWVudChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuc3R5bGUuY3Vyc29yID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhcHRpb25XaW5kb3dcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy52b2NhYmx5LXdvcmQnKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgod29yZCkgPT4gd29yZC5jbGFzc0xpc3QucmVtb3ZlKCd2b2NhYmx5LXdvcmQnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRlYXJEb3duKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICB0ZWFyRG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xuICAgICAgICBjb25zdCB0ZWFyRG93biA9ICgpID0+IHtcbiAgICAgICAgICAgIGlzQWx0RG93biA9IGZhbHNlO1xuICAgICAgICAgICAgY2FwdGlvbkNvbnRhaW5lcnNDbG9uZUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gICAgICAgICAgICBjYXB0aW9uQ29udGFpbmVyTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5oaWRkZW4gPSBmYWxzZSkpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbktleVVwKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uTW91c2VEb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25Nb3VzZVVwID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzTW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaXNBbHREb3duKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCh0ZWFyRG93biwgMTAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25LZXlVcCA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgIT09ICdBbHQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNBbHREb3duID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaXNNb3VzZURvd24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRlYXJEb3duLCAxMDApO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uS2V5VXApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgIH0pO1xufSk7XG4iLCLvu792YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnQHZvY2FibHkvZXh0ZW5zaW9uLWNvbnRlbnQtdWkvbG9hZGVyJztcbmltcG9ydCAnQHdlYmNvbXBvbmVudHMvY3VzdG9tLWVsZW1lbnRzJztcbmltcG9ydCB7IG1hcCwgbWVyZ2UsIFN1YmplY3QsIHRha2UsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhcGksIGNvbmZpZ3VyZUFwaSB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGJyb3dzZXIgfSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uLCBkZXN0cm95QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgY29uZmlndXJlQ29udGVudFNjcmlwdCwgY29udGVudFNjcmlwdENvbmZpZ3VyYXRpb24sIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IGNvbnRleHRMYW5ndWFnZXMgfSBmcm9tICcuL2NvbnRleHRMYW5ndWFnZXMnO1xuaW1wb3J0IHsgZGV0ZWN0TGFuZ3VhZ2UgfSBmcm9tICcuL2RldGVjdExhbmd1YWdlJztcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICcuL2dldENvbnRleHQnO1xuaW1wb3J0IHsgZ2V0VGV4dCB9IGZyb20gJy4vZ2V0VGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVQb3B1cCwgZGVzdHJveUFsbFBvcHVwcyB9IGZyb20gJy4vcG9wdXAnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsUmVjdCB9IGZyb20gJy4vcG9zaXRpb24nO1xuaW1wb3J0IHsgaXNWYWxpZFNlbGVjdGlvbiB9IGZyb20gJy4vc2VsZWN0aW9uJztcbmltcG9ydCB7IGluaXRZb3V0dWJlIH0gZnJvbSAnLi95b3V0dWJlJztcbmNvbnN0IG9uQ3JlYXRlU2VsZWN0aW9uVGltZW91dCA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIGFwaS5waW5nKCk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlc3Ryb3lCdXR0b24oKTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaWYgKCFpc1ZhbGlkU2VsZWN0aW9uKHNlbGVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB5aWVsZCBjcmVhdGVCdXR0b24oc2VsZWN0aW9uKTtcbn0pO1xubGV0IGNyZWF0ZVNlbGVjdGlvblRpbWVvdXQgPSBudWxsO1xuY29uc3Qgb25UZXh0U2VsZWN0ID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGNyZWF0ZVNlbGVjdGlvblRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGNyZWF0ZVNlbGVjdGlvblRpbWVvdXQpO1xuICAgICAgICBjcmVhdGVTZWxlY3Rpb25UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgY3JlYXRlU2VsZWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQob25DcmVhdGVTZWxlY3Rpb25UaW1lb3V0LCA1MDApO1xufSk7XG5jb25zdCBlbmFibGVTZWxlY3Rpb25DaGFuZ2VEZXRlY3Rpb24gPSAoKSA9PiB7XG4gICAgaWYgKCFjb250ZW50U2NyaXB0Q29uZmlndXJhdGlvbi5kaXNwbGF5TW9iaWxlTG9va3VwQnV0dG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgb25UZXh0U2VsZWN0LCBmYWxzZSk7XG59O1xuY29uc3QgZGlzYWJsZVNlbGVjdGlvbkNoYW5nZURldGVjdGlvbiA9ICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIG9uVGV4dFNlbGVjdCk7XG5jb25zdCBpc0NsaWNrYWJsZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIGlmIChbJ0EnLCAnQlVUVE9OJywgJ0lOUFVUJywgJ1RFWFRBUkVBJywgJ1NFTEVDVCcsICdWT0NBQkxZLVBPUFVQJ10uaW5jbHVkZXMoZWxlbWVudC50YWdOYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gaXNDbGlja2FibGVFbGVtZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBkb3VibGVDbGljayQgPSBuZXcgU3ViamVjdCgpO1xuY29uc3Qgb25Nb3VzZVVwID0gKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoaXNDbGlja2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmFibGVTZWxlY3Rpb25DaGFuZ2VEZXRlY3Rpb24oKTtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBhcGkucGluZygpO1xuICAgIH1cbiAgICBjYXRjaCAoX2IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZXN0cm95QnV0dG9uKCk7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgIGlmICghaXNWYWxpZFNlbGVjdGlvbihzZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbWVyZ2UoZG91YmxlQ2xpY2skLnBpcGUobWFwKCgpID0+IHRydWUpKSwgdGltZXIoNTApLnBpcGUobWFwKCgpID0+IGZhbHNlKSkpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRvdWJsZUNsaWNrKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGRvdWJsZUNsaWNrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB5aWVsZCBhcGkuZ2V0U2V0dGluZ3MoKTtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgYXR0ZW1wdCB0byBtYWtlIHRoZSBcIkRvdWJsZSBjbGlja1wiIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgLy8gd29yayBpbiBMZW11ciBicm93c2VyIG9uIEFuZHJvaWQuXG4gICAgICAgIC8vIFRoZSBtb3VzZSBldmVudCBpcyBub3QgdHJ1c3RlZCBpbiBMZW11ciBvbiBBbmRyb2lkLlxuICAgICAgICBpZiAoZXZlbnQuaXNUcnVzdGVkID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgYnJvd3Nlci5nZXRPUygpLm5hbWUgPT09ICdBbmRyb2lkJyAmJlxuICAgICAgICAgICAgc2V0dGluZ3Muc2hvd09uRG91YmxlQ2xpY2spIHtcbiAgICAgICAgICAgIGRlc3Ryb3lBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgIHlpZWxkIGF1dG9TaG93KHsgaXNUb3VjaHNjcmVlbjogdHJ1ZSB9KSgpO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkIGNyZWF0ZUJ1dHRvbihzZWxlY3Rpb24sIGV2ZW50KTtcbiAgICB9KSk7XG59KTtcbmNvbnN0IGF1dG9TaG93ID0gKG9wdGlvbnMpID0+ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0geWllbGQgYXBpLmdldFNldHRpbmdzKCk7XG4gICAgaWYgKCFzZXR0aW5ncy5zaG93T25Eb3VibGVDbGljaykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvdWJsZUNsaWNrJC5uZXh0KCk7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgIGlmICghaXNWYWxpZFNlbGVjdGlvbihzZWxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGV0ZWN0ZWRMYW5ndWFnZSA9IHlpZWxkIGRldGVjdExhbmd1YWdlKHNlbGVjdGlvbik7XG4gICAgY29uc3QgY29udGV4dCA9IGRldGVjdGVkTGFuZ3VhZ2UgJiYgY29udGV4dExhbmd1YWdlcy5pbmNsdWRlcyhkZXRlY3RlZExhbmd1YWdlKVxuICAgICAgICA/IGdldENvbnRleHQoc2VsZWN0aW9uKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB5aWVsZCBjcmVhdGVQb3B1cCh7XG4gICAgICAgIGRldGVjdGVkTGFuZ3VhZ2UsXG4gICAgICAgIHRleHQ6IGdldFRleHQoc2VsZWN0aW9uKSxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgZ2xvYmFsUmVjdDogZ2V0R2xvYmFsUmVjdChzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksXG4gICAgICAgIGlzVG91Y2hzY3JlZW46IG9wdGlvbnMuaXNUb3VjaHNjcmVlbixcbiAgICB9KTtcbn0pO1xuY29uc3Qgb25Nb3VzZURvd24gPSAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChpc0NsaWNrYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRpc2FibGVTZWxlY3Rpb25DaGFuZ2VEZXRlY3Rpb24oKTtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBhcGkucGluZygpO1xuICAgIH1cbiAgICBjYXRjaCAoX2MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZXN0cm95QnV0dG9uKCk7XG59KTtcbmV4cG9ydCBjb25zdCByZWdpc3RlckNvbnRlbnRTY3JpcHQgPSAoeyBhcGk6IGFwaU9wdGlvbnMsIHlvdVR1YmU6IHlvdVR1YmVPcHRpb25zLCBjb250ZW50U2NyaXB0LCB9ID0ge1xuICAgIGFwaToge30sXG4gICAgeW91VHViZTogeyB5dEhvc3RzOiBbJ3d3dy55b3V0dWJlLmNvbSddIH0sXG4gICAgY29udGVudFNjcmlwdDoge1xuICAgICAgICBpc0ZlZWRiYWNrRW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGFza0ZvclJhdGluZ0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBkaXNwbGF5TW9iaWxlTG9va3VwQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgYWxsb3dGaXJzdFRyYW5zbGF0aW9uQ29uZ3JhdHVsYXRpb246IGZhbHNlLFxuICAgIH0sXG59KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25maWd1cmVBcGkoYXBpT3B0aW9ucyk7XG4gICAgZGVmaW5lQ3VzdG9tRWxlbWVudHMoKTtcbiAgICBpbml0WW91dHViZSh5b3VUdWJlT3B0aW9ucyk7XG4gICAgY29uZmlndXJlQ29udGVudFNjcmlwdChjb250ZW50U2NyaXB0KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBhdXRvU2hvdyh7IGlzVG91Y2hzY3JlZW46IGZhbHNlIH0pKTtcbiAgICBlbmFibGVTZWxlY3Rpb25DaGFuZ2VEZXRlY3Rpb24oKTtcbn0pO1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXJDb250ZW50U2NyaXB0IH0gZnJvbSAnQHZvY2FibHkvZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0JztcbnJlZ2lzdGVyQ29udGVudFNjcmlwdCh7XG4gICAgYXBpOiB7XG4gICAgICAgIGFwcEJhc2VVcmw6IHByb2Nlc3MuZW52LkFQUF9CQVNFX1VSTCxcbiAgICB9LFxuICAgIHlvdVR1YmU6IHsgeXRIb3N0czogWyd3d3cueW91dHViZS5jb20nXSB9LFxuICAgIGNvbnRlbnRTY3JpcHQ6IHtcbiAgICAgICAgaXNGZWVkYmFja0VuYWJsZWQ6IHByb2Nlc3MuZW52LklTX0ZFRURCQUNLX0VOQUJMRUQgPT0gJ3RydWUnLFxuICAgICAgICBhc2tGb3JSYXRpbmdFbmFibGVkOiB0cnVlLFxuICAgICAgICBkaXNwbGF5TW9iaWxlTG9va3VwQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgYWxsb3dGaXJzdFRyYW5zbGF0aW9uQ29uZ3JhdHVsYXRpb246IHRydWUsXG4gICAgfSxcbn0pLnRoZW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==