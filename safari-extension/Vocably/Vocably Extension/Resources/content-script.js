/*! For license information please see content-script.js.LICENSE.txt */
(() => {
  var t = {
      3166: () => {
        (function () {
          'use strict';
          var t = window.Document.prototype.createElement,
            e = window.Document.prototype.createElementNS,
            n = window.Document.prototype.importNode,
            o = window.Document.prototype.prepend,
            a = window.Document.prototype.append,
            i = window.DocumentFragment.prototype.prepend,
            r = window.DocumentFragment.prototype.append,
            s = window.Node.prototype.cloneNode,
            l = window.Node.prototype.appendChild,
            c = window.Node.prototype.insertBefore,
            d = window.Node.prototype.removeChild,
            u = window.Node.prototype.replaceChild,
            h = Object.getOwnPropertyDescriptor(
              window.Node.prototype,
              'textContent'
            ),
            p = window.Element.prototype.attachShadow,
            g = Object.getOwnPropertyDescriptor(
              window.Element.prototype,
              'innerHTML'
            ),
            f = window.Element.prototype.getAttribute,
            m = window.Element.prototype.setAttribute,
            b = window.Element.prototype.removeAttribute,
            v = window.Element.prototype.getAttributeNS,
            y = window.Element.prototype.setAttributeNS,
            w = window.Element.prototype.removeAttributeNS,
            $ = window.Element.prototype.insertAdjacentElement,
            C = window.Element.prototype.insertAdjacentHTML,
            x = window.Element.prototype.prepend,
            E = window.Element.prototype.append,
            k = window.Element.prototype.before,
            _ = window.Element.prototype.after,
            L = window.Element.prototype.replaceWith,
            S = window.Element.prototype.remove,
            N = window.HTMLElement,
            M = Object.getOwnPropertyDescriptor(
              window.HTMLElement.prototype,
              'innerHTML'
            ),
            T = window.HTMLElement.prototype.insertAdjacentElement,
            H = window.HTMLElement.prototype.insertAdjacentHTML,
            P = new Set();
          function j(t) {
            var e = P.has(t);
            return (t = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t)), !e && t;
          }
          'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'
            .split(' ')
            .forEach(function (t) {
              return P.add(t);
            });
          var O = document.contains
            ? document.contains.bind(document)
            : document.documentElement.contains.bind(document.documentElement);
          function A(t) {
            var e = t.isConnected;
            if (void 0 !== e) return e;
            if (O(t)) return !0;
            for (; t && !(t.__CE_isImportDocument || t instanceof Document); )
              t =
                t.parentNode ||
                (window.ShadowRoot && t instanceof ShadowRoot
                  ? t.host
                  : void 0);
            return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
          }
          function z(t) {
            var e = t.children;
            if (e) return Array.prototype.slice.call(e);
            for (e = [], t = t.firstChild; t; t = t.nextSibling)
              t.nodeType === Node.ELEMENT_NODE && e.push(t);
            return e;
          }
          function D(t, e) {
            for (; e && e !== t && !e.nextSibling; ) e = e.parentNode;
            return e && e !== t ? e.nextSibling : null;
          }
          function F(t, e, n) {
            for (var o = t; o; ) {
              if (o.nodeType === Node.ELEMENT_NODE) {
                var a = o;
                e(a);
                var i = a.localName;
                if ('link' === i && 'import' === a.getAttribute('rel')) {
                  if (
                    ((o = a.import),
                    void 0 === n && (n = new Set()),
                    o instanceof Node && !n.has(o))
                  )
                    for (n.add(o), o = o.firstChild; o; o = o.nextSibling)
                      F(o, e, n);
                  o = D(t, a);
                  continue;
                }
                if ('template' === i) {
                  o = D(t, a);
                  continue;
                }
                if ((a = a.__CE_shadowRoot))
                  for (a = a.firstChild; a; a = a.nextSibling) F(a, e, n);
              }
              o = o.firstChild ? o.firstChild : D(t, o);
            }
          }
          function R() {
            var t = !(null == rt || !rt.noDocumentConstructionObserver),
              e = !(null == rt || !rt.shadyDomFastWalk);
            (this.m = []),
              (this.g = []),
              (this.j = !1),
              (this.shadyDomFastWalk = e),
              (this.I = !t);
          }
          function I(t, e, n, o) {
            var a = window.ShadyDOM;
            if (t.shadyDomFastWalk && a && a.inUse) {
              if (
                (e.nodeType === Node.ELEMENT_NODE && n(e), e.querySelectorAll)
              )
                for (
                  t = a.nativeMethods.querySelectorAll.call(e, '*'), e = 0;
                  e < t.length;
                  e++
                )
                  n(t[e]);
            } else F(e, n, o);
          }
          function B(t, e) {
            t.j &&
              I(t, e, function (e) {
                return V(t, e);
              });
          }
          function V(t, e) {
            if (t.j && !e.__CE_patched) {
              e.__CE_patched = !0;
              for (var n = 0; n < t.m.length; n++) t.m[n](e);
              for (n = 0; n < t.g.length; n++) t.g[n](e);
            }
          }
          function U(t, e) {
            var n = [];
            for (
              I(t, e, function (t) {
                return n.push(t);
              }),
                e = 0;
              e < n.length;
              e++
            ) {
              var o = n[e];
              1 === o.__CE_state ? t.connectedCallback(o) : q(t, o);
            }
          }
          function Z(t, e) {
            var n = [];
            for (
              I(t, e, function (t) {
                return n.push(t);
              }),
                e = 0;
              e < n.length;
              e++
            ) {
              var o = n[e];
              1 === o.__CE_state && t.disconnectedCallback(o);
            }
          }
          function W(t, e, n) {
            var o = (n = void 0 === n ? {} : n).J,
              a =
                n.upgrade ||
                function (e) {
                  return q(t, e);
                },
              i = [];
            for (
              I(
                t,
                e,
                function (e) {
                  if (
                    (t.j && V(t, e),
                    'link' === e.localName &&
                      'import' === e.getAttribute('rel'))
                  ) {
                    var n = e.import;
                    n instanceof Node &&
                      ((n.__CE_isImportDocument = !0),
                      (n.__CE_registry = document.__CE_registry)),
                      n && 'complete' === n.readyState
                        ? (n.__CE_documentLoadHandled = !0)
                        : e.addEventListener('load', function () {
                            var n = e.import;
                            if (!n.__CE_documentLoadHandled) {
                              n.__CE_documentLoadHandled = !0;
                              var i = new Set();
                              o &&
                                (o.forEach(function (t) {
                                  return i.add(t);
                                }),
                                i.delete(n)),
                                W(t, n, { J: i, upgrade: a });
                            }
                          });
                  } else i.push(e);
                },
                o
              ),
                e = 0;
              e < i.length;
              e++
            )
              a(i[e]);
          }
          function q(t, e) {
            try {
              var n = e.ownerDocument,
                o = n.__CE_registry,
                a =
                  o && (n.defaultView || n.__CE_isImportDocument)
                    ? ot(o, e.localName)
                    : void 0;
              if (a && void 0 === e.__CE_state) {
                a.constructionStack.push(e);
                try {
                  try {
                    if (new a.constructorFunction() !== e)
                      throw Error(
                        'The custom element constructor did not produce the element being upgraded.'
                      );
                  } finally {
                    a.constructionStack.pop();
                  }
                } catch (t) {
                  throw ((e.__CE_state = 2), t);
                }
                if (
                  ((e.__CE_state = 1),
                  (e.__CE_definition = a),
                  a.attributeChangedCallback && e.hasAttributes())
                ) {
                  var i = a.observedAttributes;
                  for (a = 0; a < i.length; a++) {
                    var r = i[a],
                      s = e.getAttribute(r);
                    null !== s &&
                      t.attributeChangedCallback(e, r, null, s, null);
                  }
                }
                A(e) && t.connectedCallback(e);
              }
            } catch (t) {
              X(t);
            }
          }
          function G(n, o, a, i) {
            var r = o.__CE_registry;
            if (
              r &&
              (null === i || 'http://www.w3.org/1999/xhtml' === i) &&
              (r = ot(r, a))
            )
              try {
                var s = new r.constructorFunction();
                if (void 0 === s.__CE_state || void 0 === s.__CE_definition)
                  throw Error(
                    "Failed to construct '" +
                      a +
                      "': The returned value was not constructed with the HTMLElement constructor."
                  );
                if ('http://www.w3.org/1999/xhtml' !== s.namespaceURI)
                  throw Error(
                    "Failed to construct '" +
                      a +
                      "': The constructed element's namespace must be the HTML namespace."
                  );
                if (s.hasAttributes())
                  throw Error(
                    "Failed to construct '" +
                      a +
                      "': The constructed element must not have any attributes."
                  );
                if (null !== s.firstChild)
                  throw Error(
                    "Failed to construct '" +
                      a +
                      "': The constructed element must not have any children."
                  );
                if (null !== s.parentNode)
                  throw Error(
                    "Failed to construct '" +
                      a +
                      "': The constructed element must not have a parent node."
                  );
                if (s.ownerDocument !== o)
                  throw Error(
                    "Failed to construct '" +
                      a +
                      "': The constructed element's owner document is incorrect."
                  );
                if (s.localName !== a)
                  throw Error(
                    "Failed to construct '" +
                      a +
                      "': The constructed element's local name is incorrect."
                  );
                return s;
              } catch (r) {
                return (
                  X(r),
                  (o = null === i ? t.call(o, a) : e.call(o, i, a)),
                  Object.setPrototypeOf(o, HTMLUnknownElement.prototype),
                  (o.__CE_state = 2),
                  (o.__CE_definition = void 0),
                  V(n, o),
                  o
                );
              }
            return V(n, (o = null === i ? t.call(o, a) : e.call(o, i, a))), o;
          }
          function X(t) {
            var e = t.message,
              n = t.sourceURL || t.fileName || '',
              o = t.line || t.lineNumber || 0,
              a = t.column || t.columnNumber || 0,
              i = void 0;
            void 0 === ErrorEvent.prototype.initErrorEvent
              ? (i = new ErrorEvent('error', {
                  cancelable: !0,
                  message: e,
                  filename: n,
                  lineno: o,
                  colno: a,
                  error: t,
                }))
              : ((i = document.createEvent('ErrorEvent')).initErrorEvent(
                  'error',
                  !1,
                  !0,
                  e,
                  n,
                  o
                ),
                (i.preventDefault = function () {
                  Object.defineProperty(this, 'defaultPrevented', {
                    configurable: !0,
                    get: function () {
                      return !0;
                    },
                  });
                })),
              void 0 === i.error &&
                Object.defineProperty(i, 'error', {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    return t;
                  },
                }),
              window.dispatchEvent(i),
              i.defaultPrevented || console.error(t);
          }
          function K() {
            var t = this;
            (this.g = void 0),
              (this.F = new Promise(function (e) {
                t.l = e;
              }));
          }
          function Y(t) {
            var e = document;
            (this.l = void 0),
              (this.h = t),
              (this.g = e),
              W(this.h, this.g),
              'loading' === this.g.readyState &&
                ((this.l = new MutationObserver(this.G.bind(this))),
                this.l.observe(this.g, { childList: !0, subtree: !0 }));
          }
          function J(t) {
            t.l && t.l.disconnect();
          }
          function Q(t) {
            (this.s = new Map()),
              (this.u = new Map()),
              (this.C = new Map()),
              (this.A = !1),
              (this.B = new Map()),
              (this.o = function (t) {
                return t();
              }),
              (this.i = !1),
              (this.v = []),
              (this.h = t),
              (this.D = t.I ? new Y(t) : void 0);
          }
          function tt(t, e) {
            if (!j(e))
              throw new SyntaxError(
                "The element name '" + e + "' is not valid."
              );
            if (ot(t, e))
              throw Error(
                "A custom element with name '" +
                  e +
                  "' has already been defined."
              );
            if (t.A) throw Error('A custom element is already being defined.');
          }
          function et(t, e, n) {
            var o;
            t.A = !0;
            try {
              var a = n.prototype;
              if (!(a instanceof Object))
                throw new TypeError(
                  "The custom element constructor's prototype is not an object."
                );
              var i = function (t) {
                  var e = a[t];
                  if (void 0 !== e && !(e instanceof Function))
                    throw Error("The '" + t + "' callback must be a function.");
                  return e;
                },
                r = i('connectedCallback'),
                s = i('disconnectedCallback'),
                l = i('adoptedCallback'),
                c =
                  ((o = i('attributeChangedCallback')) &&
                    n.observedAttributes) ||
                  [];
            } catch (t) {
              throw t;
            } finally {
              t.A = !1;
            }
            return (
              (n = {
                localName: e,
                constructorFunction: n,
                connectedCallback: r,
                disconnectedCallback: s,
                adoptedCallback: l,
                attributeChangedCallback: o,
                observedAttributes: c,
                constructionStack: [],
              }),
              t.u.set(e, n),
              t.C.set(n.constructorFunction, n),
              n
            );
          }
          function nt(t) {
            if (!1 !== t.i) {
              t.i = !1;
              for (var e = [], n = t.v, o = new Map(), a = 0; a < n.length; a++)
                o.set(n[a], []);
              for (
                W(t.h, document, {
                  upgrade: function (n) {
                    if (void 0 === n.__CE_state) {
                      var a = n.localName,
                        i = o.get(a);
                      i ? i.push(n) : t.u.has(a) && e.push(n);
                    }
                  },
                }),
                  a = 0;
                a < e.length;
                a++
              )
                q(t.h, e[a]);
              for (a = 0; a < n.length; a++) {
                for (var i = n[a], r = o.get(i), s = 0; s < r.length; s++)
                  q(t.h, r[s]);
                (i = t.B.get(i)) && i.resolve(void 0);
              }
              n.length = 0;
            }
          }
          function ot(t, e) {
            var n = t.u.get(e);
            if (n) return n;
            if ((n = t.s.get(e))) {
              t.s.delete(e);
              try {
                return et(t, e, n());
              } catch (t) {
                X(t);
              }
            }
          }
          function at(t, e, n) {
            function o(e) {
              return function (n) {
                for (var o = [], a = 0; a < arguments.length; ++a)
                  o[a] = arguments[a];
                a = [];
                for (var i = [], r = 0; r < o.length; r++) {
                  var s = o[r];
                  if (
                    (s instanceof Element && A(s) && i.push(s),
                    s instanceof DocumentFragment)
                  )
                    for (s = s.firstChild; s; s = s.nextSibling) a.push(s);
                  else a.push(s);
                }
                for (e.apply(this, o), o = 0; o < i.length; o++) Z(t, i[o]);
                if (A(this))
                  for (o = 0; o < a.length; o++)
                    (i = a[o]) instanceof Element && U(t, i);
              };
            }
            void 0 !== n.prepend && (e.prepend = o(n.prepend)),
              void 0 !== n.append && (e.append = o(n.append));
          }
          (R.prototype.connectedCallback = function (t) {
            var e = t.__CE_definition;
            if (e.connectedCallback)
              try {
                e.connectedCallback.call(t);
              } catch (t) {
                X(t);
              }
          }),
            (R.prototype.disconnectedCallback = function (t) {
              var e = t.__CE_definition;
              if (e.disconnectedCallback)
                try {
                  e.disconnectedCallback.call(t);
                } catch (t) {
                  X(t);
                }
            }),
            (R.prototype.attributeChangedCallback = function (t, e, n, o, a) {
              var i = t.__CE_definition;
              if (
                i.attributeChangedCallback &&
                -1 < i.observedAttributes.indexOf(e)
              )
                try {
                  i.attributeChangedCallback.call(t, e, n, o, a);
                } catch (t) {
                  X(t);
                }
            }),
            (K.prototype.resolve = function (t) {
              if (this.g) throw Error('Already resolved.');
              (this.g = t), this.l(t);
            }),
            (Y.prototype.G = function (t) {
              var e = this.g.readyState;
              for (
                ('interactive' !== e && 'complete' !== e) || J(this), e = 0;
                e < t.length;
                e++
              )
                for (var n = t[e].addedNodes, o = 0; o < n.length; o++)
                  W(this.h, n[o]);
            }),
            (Q.prototype.H = function (t, e) {
              var n = this;
              if (!(e instanceof Function))
                throw new TypeError(
                  'Custom element constructor getters must be functions.'
                );
              tt(this, t),
                this.s.set(t, e),
                this.v.push(t),
                this.i ||
                  ((this.i = !0),
                  this.o(function () {
                    return nt(n);
                  }));
            }),
            (Q.prototype.define = function (t, e) {
              var n = this;
              if (!(e instanceof Function))
                throw new TypeError(
                  'Custom element constructors must be functions.'
                );
              tt(this, t),
                et(this, t, e),
                this.v.push(t),
                this.i ||
                  ((this.i = !0),
                  this.o(function () {
                    return nt(n);
                  }));
            }),
            (Q.prototype.upgrade = function (t) {
              W(this.h, t);
            }),
            (Q.prototype.get = function (t) {
              if ((t = ot(this, t))) return t.constructorFunction;
            }),
            (Q.prototype.whenDefined = function (t) {
              if (!j(t))
                return Promise.reject(
                  new SyntaxError(
                    "'" + t + "' is not a valid custom element name."
                  )
                );
              var e = this.B.get(t);
              if (e) return e.F;
              (e = new K()), this.B.set(t, e);
              var n = this.u.has(t) || this.s.has(t);
              return (
                (t = -1 === this.v.indexOf(t)), n && t && e.resolve(void 0), e.F
              );
            }),
            (Q.prototype.polyfillWrapFlushCallback = function (t) {
              this.D && J(this.D);
              var e = this.o;
              this.o = function (n) {
                return t(function () {
                  return e(n);
                });
              };
            }),
            (window.CustomElementRegistry = Q),
            (Q.prototype.define = Q.prototype.define),
            (Q.prototype.upgrade = Q.prototype.upgrade),
            (Q.prototype.get = Q.prototype.get),
            (Q.prototype.whenDefined = Q.prototype.whenDefined),
            (Q.prototype.polyfillDefineLazy = Q.prototype.H),
            (Q.prototype.polyfillWrapFlushCallback =
              Q.prototype.polyfillWrapFlushCallback);
          var it = {},
            rt = window.customElements;
          function st() {
            var P = new R();
            !(function (e) {
              function n() {
                var n = this.constructor,
                  o = document.__CE_registry.C.get(n);
                if (!o)
                  throw Error(
                    'Failed to construct a custom element: The constructor was not registered with `customElements`.'
                  );
                var a = o.constructionStack;
                if (0 === a.length)
                  return (
                    (a = t.call(document, o.localName)),
                    Object.setPrototypeOf(a, n.prototype),
                    (a.__CE_state = 1),
                    (a.__CE_definition = o),
                    V(e, a),
                    a
                  );
                var i = a.length - 1,
                  r = a[i];
                if (r === it)
                  throw Error(
                    "Failed to construct '" +
                      o.localName +
                      "': This element was already constructed."
                  );
                return (
                  (a[i] = it), Object.setPrototypeOf(r, n.prototype), V(e, r), r
                );
              }
              (n.prototype = N.prototype),
                Object.defineProperty(HTMLElement.prototype, 'constructor', {
                  writable: !0,
                  configurable: !0,
                  enumerable: !1,
                  value: n,
                }),
                (window.HTMLElement = n);
            })(P),
              (function (t) {
                (Document.prototype.createElement = function (e) {
                  return G(t, this, e, null);
                }),
                  (Document.prototype.importNode = function (e, o) {
                    return (
                      (e = n.call(this, e, !!o)),
                      this.__CE_registry ? W(t, e) : B(t, e),
                      e
                    );
                  }),
                  (Document.prototype.createElementNS = function (e, n) {
                    return G(t, this, n, e);
                  }),
                  at(t, Document.prototype, { prepend: o, append: a });
              })(P),
              at(P, DocumentFragment.prototype, { prepend: i, append: r }),
              (function (t) {
                function e(e, n) {
                  Object.defineProperty(e, 'textContent', {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function (e) {
                      if (this.nodeType === Node.TEXT_NODE) n.set.call(this, e);
                      else {
                        var o = void 0;
                        if (this.firstChild) {
                          var a = this.childNodes,
                            i = a.length;
                          if (0 < i && A(this)) {
                            o = Array(i);
                            for (var r = 0; r < i; r++) o[r] = a[r];
                          }
                        }
                        if ((n.set.call(this, e), o))
                          for (e = 0; e < o.length; e++) Z(t, o[e]);
                      }
                    },
                  });
                }
                (Node.prototype.insertBefore = function (e, n) {
                  if (e instanceof DocumentFragment) {
                    var o = z(e);
                    if (((e = c.call(this, e, n)), A(this)))
                      for (n = 0; n < o.length; n++) U(t, o[n]);
                    return e;
                  }
                  return (
                    (o = e instanceof Element && A(e)),
                    (n = c.call(this, e, n)),
                    o && Z(t, e),
                    A(this) && U(t, e),
                    n
                  );
                }),
                  (Node.prototype.appendChild = function (e) {
                    if (e instanceof DocumentFragment) {
                      var n = z(e);
                      if (((e = l.call(this, e)), A(this)))
                        for (var o = 0; o < n.length; o++) U(t, n[o]);
                      return e;
                    }
                    return (
                      (n = e instanceof Element && A(e)),
                      (o = l.call(this, e)),
                      n && Z(t, e),
                      A(this) && U(t, e),
                      o
                    );
                  }),
                  (Node.prototype.cloneNode = function (e) {
                    return (
                      (e = s.call(this, !!e)),
                      this.ownerDocument.__CE_registry ? W(t, e) : B(t, e),
                      e
                    );
                  }),
                  (Node.prototype.removeChild = function (e) {
                    var n = e instanceof Element && A(e),
                      o = d.call(this, e);
                    return n && Z(t, e), o;
                  }),
                  (Node.prototype.replaceChild = function (e, n) {
                    if (e instanceof DocumentFragment) {
                      var o = z(e);
                      if (((e = u.call(this, e, n)), A(this)))
                        for (Z(t, n), n = 0; n < o.length; n++) U(t, o[n]);
                      return e;
                    }
                    o = e instanceof Element && A(e);
                    var a = u.call(this, e, n),
                      i = A(this);
                    return i && Z(t, n), o && Z(t, e), i && U(t, e), a;
                  }),
                  h && h.get
                    ? e(Node.prototype, h)
                    : (function (t, e) {
                        (t.j = !0), t.m.push(e);
                      })(t, function (t) {
                        e(t, {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                            for (
                              var t = [], e = this.firstChild;
                              e;
                              e = e.nextSibling
                            )
                              e.nodeType !== Node.COMMENT_NODE &&
                                t.push(e.textContent);
                            return t.join('');
                          },
                          set: function (t) {
                            for (; this.firstChild; )
                              d.call(this, this.firstChild);
                            null != t &&
                              '' !== t &&
                              l.call(this, document.createTextNode(t));
                          },
                        });
                      });
              })(P),
              (function (t) {
                function n(e, n) {
                  Object.defineProperty(e, 'innerHTML', {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function (e) {
                      var o = this,
                        a = void 0;
                      if (
                        (A(this) &&
                          ((a = []),
                          I(t, this, function (t) {
                            t !== o && a.push(t);
                          })),
                        n.set.call(this, e),
                        a)
                      )
                        for (var i = 0; i < a.length; i++) {
                          var r = a[i];
                          1 === r.__CE_state && t.disconnectedCallback(r);
                        }
                      return (
                        this.ownerDocument.__CE_registry
                          ? W(t, this)
                          : B(t, this),
                        e
                      );
                    },
                  });
                }
                function o(e, n) {
                  e.insertAdjacentElement = function (e, o) {
                    var a = A(o);
                    return (
                      (e = n.call(this, e, o)), a && Z(t, o), A(e) && U(t, o), e
                    );
                  };
                }
                function a(e, n) {
                  function o(e, n) {
                    for (var o = []; e !== n; e = e.nextSibling) o.push(e);
                    for (n = 0; n < o.length; n++) W(t, o[n]);
                  }
                  e.insertAdjacentHTML = function (t, e) {
                    if ('beforebegin' === (t = t.toLowerCase())) {
                      var a = this.previousSibling;
                      n.call(this, t, e),
                        o(a || this.parentNode.firstChild, this);
                    } else if ('afterbegin' === t)
                      (a = this.firstChild),
                        n.call(this, t, e),
                        o(this.firstChild, a);
                    else if ('beforeend' === t)
                      (a = this.lastChild),
                        n.call(this, t, e),
                        o(a || this.firstChild, null);
                    else {
                      if ('afterend' !== t)
                        throw new SyntaxError(
                          'The value provided (' +
                            String(t) +
                            ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
                        );
                      (a = this.nextSibling),
                        n.call(this, t, e),
                        o(this.nextSibling, a);
                    }
                  };
                }
                p &&
                  (Element.prototype.attachShadow = function (e) {
                    if (((e = p.call(this, e)), t.j && !e.__CE_patched)) {
                      e.__CE_patched = !0;
                      for (var n = 0; n < t.m.length; n++) t.m[n](e);
                    }
                    return (this.__CE_shadowRoot = e);
                  }),
                  g && g.get
                    ? n(Element.prototype, g)
                    : M && M.get
                    ? n(HTMLElement.prototype, M)
                    : (function (t, e) {
                        (t.j = !0), t.g.push(e);
                      })(t, function (t) {
                        n(t, {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                            return s.call(this, !0).innerHTML;
                          },
                          set: function (t) {
                            var n = 'template' === this.localName,
                              o = n ? this.content : this,
                              a = e.call(
                                document,
                                this.namespaceURI,
                                this.localName
                              );
                            for (a.innerHTML = t; 0 < o.childNodes.length; )
                              d.call(o, o.childNodes[0]);
                            for (
                              t = n ? a.content : a;
                              0 < t.childNodes.length;

                            )
                              l.call(o, t.childNodes[0]);
                          },
                        });
                      }),
                  (Element.prototype.setAttribute = function (e, n) {
                    if (1 !== this.__CE_state) return m.call(this, e, n);
                    var o = f.call(this, e);
                    m.call(this, e, n),
                      (n = f.call(this, e)),
                      t.attributeChangedCallback(this, e, o, n, null);
                  }),
                  (Element.prototype.setAttributeNS = function (e, n, o) {
                    if (1 !== this.__CE_state) return y.call(this, e, n, o);
                    var a = v.call(this, e, n);
                    y.call(this, e, n, o),
                      (o = v.call(this, e, n)),
                      t.attributeChangedCallback(this, n, a, o, e);
                  }),
                  (Element.prototype.removeAttribute = function (e) {
                    if (1 !== this.__CE_state) return b.call(this, e);
                    var n = f.call(this, e);
                    b.call(this, e),
                      null !== n &&
                        t.attributeChangedCallback(this, e, n, null, null);
                  }),
                  (Element.prototype.removeAttributeNS = function (e, n) {
                    if (1 !== this.__CE_state) return w.call(this, e, n);
                    var o = v.call(this, e, n);
                    w.call(this, e, n);
                    var a = v.call(this, e, n);
                    o !== a && t.attributeChangedCallback(this, n, o, a, e);
                  }),
                  T
                    ? o(HTMLElement.prototype, T)
                    : $ && o(Element.prototype, $),
                  H
                    ? a(HTMLElement.prototype, H)
                    : C && a(Element.prototype, C),
                  at(t, Element.prototype, { prepend: x, append: E }),
                  (function (t) {
                    function e(e) {
                      return function (n) {
                        for (var o = [], a = 0; a < arguments.length; ++a)
                          o[a] = arguments[a];
                        a = [];
                        for (var i = [], r = 0; r < o.length; r++) {
                          var s = o[r];
                          if (
                            (s instanceof Element && A(s) && i.push(s),
                            s instanceof DocumentFragment)
                          )
                            for (s = s.firstChild; s; s = s.nextSibling)
                              a.push(s);
                          else a.push(s);
                        }
                        for (e.apply(this, o), o = 0; o < i.length; o++)
                          Z(t, i[o]);
                        if (A(this))
                          for (o = 0; o < a.length; o++)
                            (i = a[o]) instanceof Element && U(t, i);
                      };
                    }
                    var n = Element.prototype;
                    void 0 !== k && (n.before = e(k)),
                      void 0 !== _ && (n.after = e(_)),
                      void 0 !== L &&
                        (n.replaceWith = function (e) {
                          for (var n = [], o = 0; o < arguments.length; ++o)
                            n[o] = arguments[o];
                          o = [];
                          for (var a = [], i = 0; i < n.length; i++) {
                            var r = n[i];
                            if (
                              (r instanceof Element && A(r) && a.push(r),
                              r instanceof DocumentFragment)
                            )
                              for (r = r.firstChild; r; r = r.nextSibling)
                                o.push(r);
                            else o.push(r);
                          }
                          for (
                            i = A(this), L.apply(this, n), n = 0;
                            n < a.length;
                            n++
                          )
                            Z(t, a[n]);
                          if (i)
                            for (Z(t, this), n = 0; n < o.length; n++)
                              (a = o[n]) instanceof Element && U(t, a);
                        }),
                      void 0 !== S &&
                        (n.remove = function () {
                          var e = A(this);
                          S.call(this), e && Z(t, this);
                        });
                  })(t);
              })(P),
              (P = new Q(P)),
              (document.__CE_registry = P),
              Object.defineProperty(window, 'customElements', {
                configurable: !0,
                enumerable: !0,
                value: P,
              });
          }
          (rt &&
            !rt.forcePolyfill &&
            'function' == typeof rt.define &&
            'function' == typeof rt.get) ||
            st(),
            (window.__CE_installPolyfill = st);
        }.call(self));
      },
      8504: (t, e, n) => {
        'use strict';
        n.d(e, {
          F: () => q,
          H: () => v,
          b: () => W,
          c: () => P,
          g: () => H,
          h: () => m,
          p: () => d,
          r: () => K,
        });
        let o,
          a,
          i = !1,
          r = !1;
        const s = 'undefined' != typeof window ? window : {},
          l = s.document || { head: {} },
          c = {
            $flags$: 0,
            $resourcesUrl$: '',
            jmp: (t) => t(),
            raf: (t) => requestAnimationFrame(t),
            ael: (t, e, n, o) => t.addEventListener(e, n, o),
            rel: (t, e, n, o) => t.removeEventListener(e, n, o),
            ce: (t, e) => new CustomEvent(t, e),
          },
          d = (t) => Promise.resolve(t),
          u = (() => {
            try {
              return (
                new CSSStyleSheet(),
                'function' == typeof new CSSStyleSheet().replaceSync
              );
            } catch (t) {}
            return !1;
          })(),
          h = new WeakMap(),
          p = (t, e) => 'sc-' + t.$tagName$,
          g = {},
          f = (t) => 'object' == (t = typeof t) || 'function' === t,
          m = (t, e, ...n) => {
            let o = null,
              a = !1,
              i = !1;
            const r = [],
              s = (e) => {
                for (let n = 0; n < e.length; n++)
                  (o = e[n]),
                    Array.isArray(o)
                      ? s(o)
                      : null != o &&
                        'boolean' != typeof o &&
                        ((a = 'function' != typeof t && !f(o)) &&
                          (o = String(o)),
                        a && i
                          ? (r[r.length - 1].$text$ += o)
                          : r.push(a ? b(null, o) : o),
                        (i = a));
              };
            if ((s(n), e)) {
              const t = e.className || e.class;
              t &&
                (e.class =
                  'object' != typeof t
                    ? t
                    : Object.keys(t)
                        .filter((e) => t[e])
                        .join(' '));
            }
            if ('function' == typeof t) return t(null === e ? {} : e, r, y);
            const l = b(t, null);
            return (l.$attrs$ = e), r.length > 0 && (l.$children$ = r), l;
          },
          b = (t, e) => ({
            $flags$: 0,
            $tag$: t,
            $text$: e,
            $elm$: null,
            $children$: null,
            $attrs$: null,
          }),
          v = {},
          y = {
            forEach: (t, e) => t.map(w).forEach(e),
            map: (t, e) => t.map(w).map(e).map($),
          },
          w = (t) => ({
            vattrs: t.$attrs$,
            vchildren: t.$children$,
            vkey: t.$key$,
            vname: t.$name$,
            vtag: t.$tag$,
            vtext: t.$text$,
          }),
          $ = (t) => {
            if ('function' == typeof t.vtag) {
              const e = Object.assign({}, t.vattrs);
              return (
                t.vkey && (e.key = t.vkey),
                t.vname && (e.name = t.vname),
                m(t.vtag, e, ...(t.vchildren || []))
              );
            }
            const e = b(t.vtag, t.vtext);
            return (
              (e.$attrs$ = t.vattrs),
              (e.$children$ = t.vchildren),
              (e.$key$ = t.vkey),
              (e.$name$ = t.vname),
              e
            );
          },
          C = (t, e, n, o, a, i) => {
            if (n !== o) {
              let r = J(t, e),
                l = e.toLowerCase();
              if ('class' === e) {
                const e = t.classList,
                  a = E(n),
                  i = E(o);
                e.remove(...a.filter((t) => t && !i.includes(t))),
                  e.add(...i.filter((t) => t && !a.includes(t)));
              } else if ('ref' === e) o && o(t);
              else if (r || 'o' !== e[0] || 'n' !== e[1]) {
                const s = f(o);
                if ((r || (s && null !== o)) && !a)
                  try {
                    if (t.tagName.includes('-')) t[e] = o;
                    else {
                      const a = null == o ? '' : o;
                      'list' === e
                        ? (r = !1)
                        : (null != n && t[e] == a) || (t[e] = a);
                    }
                  } catch (t) {}
                null == o || !1 === o
                  ? (!1 === o && '' !== t.getAttribute(e)) ||
                    t.removeAttribute(e)
                  : (!r || 4 & i || a) &&
                    !s &&
                    ((o = !0 === o ? '' : o), t.setAttribute(e, o));
              } else
                (e =
                  '-' === e[2]
                    ? e.slice(3)
                    : J(s, l)
                    ? l.slice(2)
                    : l[2] + e.slice(3)),
                  n && c.rel(t, e, n, !1),
                  o && c.ael(t, e, o, !1);
            }
          },
          x = /\s/,
          E = (t) => (t ? t.split(x) : []),
          k = (t, e, n, o) => {
            const a =
                11 === e.$elm$.nodeType && e.$elm$.host
                  ? e.$elm$.host
                  : e.$elm$,
              i = (t && t.$attrs$) || g,
              r = e.$attrs$ || g;
            for (o in i) o in r || C(a, o, i[o], void 0, n, e.$flags$);
            for (o in r) C(a, o, i[o], r[o], n, e.$flags$);
          },
          _ = (t, e, n, a) => {
            const r = e.$children$[n];
            let s,
              c,
              d = 0;
            if (null !== r.$text$) s = r.$elm$ = l.createTextNode(r.$text$);
            else {
              if (
                (i || (i = 'svg' === r.$tag$),
                (s = r.$elm$ =
                  l.createElementNS(
                    i
                      ? 'http://www.w3.org/2000/svg'
                      : 'http://www.w3.org/1999/xhtml',
                    r.$tag$
                  )),
                i && 'foreignObject' === r.$tag$ && (i = !1),
                k(null, r, i),
                null != o &&
                  s['s-si'] !== o &&
                  s.classList.add((s['s-si'] = o)),
                r.$children$)
              )
                for (d = 0; d < r.$children$.length; ++d)
                  (c = _(t, r, d)), c && s.appendChild(c);
              'svg' === r.$tag$
                ? (i = !1)
                : 'foreignObject' === s.tagName && (i = !0);
            }
            return s;
          },
          L = (t, e, n, o, i, r) => {
            let s,
              l = t;
            for (
              l.shadowRoot && l.tagName === a && (l = l.shadowRoot);
              i <= r;
              ++i
            )
              o[i] &&
                ((s = _(null, n, i)),
                s && ((o[i].$elm$ = s), l.insertBefore(s, e)));
          },
          S = (t, e, n, o, a) => {
            for (; e <= n; ++e) (o = t[e]) && ((a = o.$elm$), T(o), a.remove());
          },
          N = (t, e) => t.$tag$ === e.$tag$,
          M = (t, e) => {
            const n = (e.$elm$ = t.$elm$),
              o = t.$children$,
              a = e.$children$,
              r = e.$tag$,
              s = e.$text$;
            null === s
              ? ((i = 'svg' === r || ('foreignObject' !== r && i)),
                'slot' === r || k(t, e, i),
                null !== o && null !== a
                  ? ((t, e, n, o) => {
                      let a,
                        i = 0,
                        r = 0,
                        s = e.length - 1,
                        l = e[0],
                        c = e[s],
                        d = o.length - 1,
                        u = o[0],
                        h = o[d];
                      for (; i <= s && r <= d; )
                        null == l
                          ? (l = e[++i])
                          : null == c
                          ? (c = e[--s])
                          : null == u
                          ? (u = o[++r])
                          : null == h
                          ? (h = o[--d])
                          : N(l, u)
                          ? (M(l, u), (l = e[++i]), (u = o[++r]))
                          : N(c, h)
                          ? (M(c, h), (c = e[--s]), (h = o[--d]))
                          : N(l, h)
                          ? (M(l, h),
                            t.insertBefore(l.$elm$, c.$elm$.nextSibling),
                            (l = e[++i]),
                            (h = o[--d]))
                          : N(c, u)
                          ? (M(c, u),
                            t.insertBefore(c.$elm$, l.$elm$),
                            (c = e[--s]),
                            (u = o[++r]))
                          : ((a = _(e && e[r], n, r)),
                            (u = o[++r]),
                            a && l.$elm$.parentNode.insertBefore(a, l.$elm$));
                      i > s
                        ? L(
                            t,
                            null == o[d + 1] ? null : o[d + 1].$elm$,
                            n,
                            o,
                            r,
                            d
                          )
                        : r > d && S(e, i, s);
                    })(n, o, e, a)
                  : null !== a
                  ? (null !== t.$text$ && (n.textContent = ''),
                    L(n, null, e, a, 0, a.length - 1))
                  : null !== o && S(o, 0, o.length - 1),
                i && 'svg' === r && (i = !1))
              : t.$text$ !== s && (n.data = s);
          },
          T = (t) => {
            t.$attrs$ && t.$attrs$.ref && t.$attrs$.ref(null),
              t.$children$ && t.$children$.map(T);
          },
          H = (t) => X(t).$hostElement$,
          P = (t, e, n) => {
            const o = H(t);
            return {
              emit: (t) =>
                j(o, e, {
                  bubbles: !!(4 & n),
                  composed: !!(2 & n),
                  cancelable: !!(1 & n),
                  detail: t,
                }),
            };
          },
          j = (t, e, n) => {
            const o = c.ce(e, n);
            return t.dispatchEvent(o), o;
          },
          O = (t, e) => {
            e &&
              !t.$onRenderResolve$ &&
              e['s-p'] &&
              e['s-p'].push(new Promise((e) => (t.$onRenderResolve$ = e)));
          },
          A = (t, e) => {
            if (((t.$flags$ |= 16), !(4 & t.$flags$)))
              return O(t, t.$ancestorComponent$), ct(() => z(t, e));
            t.$flags$ |= 512;
          },
          z = (t, e) => {
            const n = (t.$cmpMeta$.$tagName$, () => {}),
              o = t.$lazyInstance$;
            return n(), V(void 0, () => D(t, o, e));
          },
          D = async (t, e, n) => {
            const o = t.$hostElement$,
              a = (t.$cmpMeta$.$tagName$, () => {}),
              i = o['s-rc'];
            n &&
              ((t) => {
                const e = t.$cmpMeta$,
                  n = t.$hostElement$,
                  o = e.$flags$,
                  a = (e.$tagName$, () => {}),
                  i = ((t, e, n, o) => {
                    let a = p(e);
                    const i = nt.get(a);
                    if (((t = 11 === t.nodeType ? t : l), i))
                      if ('string' == typeof i) {
                        t = t.head || t;
                        let e,
                          n = h.get(t);
                        n || h.set(t, (n = new Set())),
                          n.has(a) ||
                            ((e = l.createElement('style')),
                            (e.innerHTML = i),
                            t.insertBefore(e, t.querySelector('link')),
                            n && n.add(a));
                      } else
                        t.adoptedStyleSheets.includes(i) ||
                          (t.adoptedStyleSheets = [...t.adoptedStyleSheets, i]);
                    return a;
                  })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), e);
                10 & o && ((n['s-sc'] = i), n.classList.add(i + '-h')), a();
              })(t);
            const r = (t.$cmpMeta$.$tagName$, () => {});
            F(t, e), i && (i.map((t) => t()), (o['s-rc'] = void 0)), r(), a();
            {
              const e = o['s-p'],
                n = () => R(t);
              0 === e.length
                ? n()
                : (Promise.all(e).then(n), (t.$flags$ |= 4), (e.length = 0));
            }
          },
          F = (t, e, n) => {
            try {
              (e = e.render()),
                (t.$flags$ &= -17),
                (t.$flags$ |= 2),
                ((t, e) => {
                  const n = t.$hostElement$,
                    i = t.$vnode$ || b(null, null),
                    r = (s = e) && s.$tag$ === v ? e : m(null, null, e);
                  var s;
                  (a = n.tagName),
                    (r.$tag$ = null),
                    (r.$flags$ |= 4),
                    (t.$vnode$ = r),
                    (r.$elm$ = i.$elm$ = n.shadowRoot || n),
                    (o = n['s-sc']),
                    M(i, r);
                })(t, e);
            } catch (e) {
              Q(e, t.$hostElement$);
            }
            return null;
          },
          R = (t) => {
            t.$cmpMeta$.$tagName$;
            const e = t.$hostElement$,
              n = t.$lazyInstance$,
              o = t.$ancestorComponent$;
            B(n, 'componentDidRender'),
              64 & t.$flags$ ||
                ((t.$flags$ |= 64), U(e), t.$onReadyResolve$(e), o || I()),
              t.$onRenderResolve$ &&
                (t.$onRenderResolve$(), (t.$onRenderResolve$ = void 0)),
              512 & t.$flags$ && lt(() => A(t, !1)),
              (t.$flags$ &= -517);
          },
          I = (t) => {
            U(l.documentElement),
              lt(() =>
                j(s, 'appload', {
                  detail: { namespace: 'extension-content-ui' },
                })
              );
          },
          B = (t, e, n) => {
            if (t && t[e])
              try {
                return t[e](n);
              } catch (t) {
                Q(t);
              }
          },
          V = (t, e) => (t && t.then ? t.then(e) : e()),
          U = (t) => t.classList.add('hydrated'),
          Z = (t, e, n) => {
            if (e.$members$) {
              const o = Object.entries(e.$members$),
                a = t.prototype;
              if (
                (o.map(([t, [o]]) => {
                  (31 & o || (2 & n && 32 & o)) &&
                    Object.defineProperty(a, t, {
                      get() {
                        return (e = t), X(this).$instanceValues$.get(e);
                        var e;
                      },
                      set(n) {
                        ((t, e, n, o) => {
                          const a = X(t),
                            i = a.$instanceValues$.get(e),
                            r = a.$flags$,
                            s = a.$lazyInstance$;
                          var l, c;
                          (l = n),
                            (c = o.$members$[e][0]),
                            (n =
                              null == l || f(l)
                                ? l
                                : 4 & c
                                ? 'false' !== l && ('' === l || !!l)
                                : 1 & c
                                ? String(l)
                                : l);
                          const d = Number.isNaN(i) && Number.isNaN(n);
                          (8 & r && void 0 !== i) ||
                            n === i ||
                            d ||
                            (a.$instanceValues$.set(e, n),
                            s && 2 == (18 & r) && A(a, !1));
                        })(this, t, n, e);
                      },
                      configurable: !0,
                      enumerable: !0,
                    });
                }),
                1 & n)
              ) {
                const e = new Map();
                (a.attributeChangedCallback = function (t, n, o) {
                  c.jmp(() => {
                    const n = e.get(t);
                    if (this.hasOwnProperty(n)) (o = this[n]), delete this[n];
                    else if (
                      a.hasOwnProperty(n) &&
                      'number' == typeof this[n] &&
                      this[n] == o
                    )
                      return;
                    this[n] = (null !== o || 'boolean' != typeof this[n]) && o;
                  });
                }),
                  (t.observedAttributes = o
                    .filter(([t, e]) => 15 & e[0])
                    .map(([t, n]) => {
                      const o = n[1] || t;
                      return e.set(o, t), o;
                    }));
              }
            }
            return t;
          },
          W = (t, e = {}) => {
            const n = [],
              o = e.exclude || [],
              a = s.customElements,
              i = l.head,
              r = i.querySelector('meta[charset]'),
              d = l.createElement('style'),
              h = [];
            let g,
              f = !0;
            Object.assign(c, e),
              (c.$resourcesUrl$ = new URL(
                e.resourcesUrl || './',
                l.baseURI
              ).href),
              t.map((t) => {
                t[1].map((e) => {
                  const i = {
                    $flags$: e[0],
                    $tagName$: e[1],
                    $members$: e[2],
                    $listeners$: e[3],
                  };
                  i.$members$ = e[2];
                  const r = i.$tagName$,
                    s = class extends HTMLElement {
                      constructor(t) {
                        super(t),
                          Y((t = this), i),
                          1 & i.$flags$ && t.attachShadow({ mode: 'open' });
                      }
                      connectedCallback() {
                        g && (clearTimeout(g), (g = null)),
                          f
                            ? h.push(this)
                            : c.jmp(() =>
                                ((t) => {
                                  if (0 == (1 & c.$flags$)) {
                                    const e = X(t),
                                      n = e.$cmpMeta$,
                                      o = (n.$tagName$, () => {});
                                    if (!(1 & e.$flags$)) {
                                      e.$flags$ |= 1;
                                      {
                                        let n = t;
                                        for (; (n = n.parentNode || n.host); )
                                          if (n['s-p']) {
                                            O(e, (e.$ancestorComponent$ = n));
                                            break;
                                          }
                                      }
                                      n.$members$ &&
                                        Object.entries(n.$members$).map(
                                          ([e, [n]]) => {
                                            if (31 & n && t.hasOwnProperty(e)) {
                                              const n = t[e];
                                              delete t[e], (t[e] = n);
                                            }
                                          }
                                        ),
                                        (async (t, e, n, o, a) => {
                                          if (0 == (32 & e.$flags$)) {
                                            {
                                              if (
                                                ((e.$flags$ |= 32),
                                                (a = et(n)).then)
                                              ) {
                                                const t = () => {};
                                                (a = await a), t();
                                              }
                                              a.isProxied ||
                                                (Z(a, n, 2),
                                                (a.isProxied = !0));
                                              const t = (n.$tagName$, () => {});
                                              e.$flags$ |= 8;
                                              try {
                                                new a(e);
                                              } catch (t) {
                                                Q(t);
                                              }
                                              (e.$flags$ &= -9), t();
                                            }
                                            if (a.style) {
                                              let t = a.style;
                                              const e = p(n);
                                              if (!nt.has(e)) {
                                                const o =
                                                  (n.$tagName$, () => {});
                                                ((t, e, n) => {
                                                  let o = nt.get(t);
                                                  u && n
                                                    ? ((o =
                                                        o ||
                                                        new CSSStyleSheet()),
                                                      'string' == typeof o
                                                        ? (o = e)
                                                        : o.replaceSync(e))
                                                    : (o = e),
                                                    nt.set(t, o);
                                                })(e, t, !!(1 & n.$flags$)),
                                                  o();
                                              }
                                            }
                                          }
                                          const i = e.$ancestorComponent$,
                                            r = () => A(e, !0);
                                          i && i['s-rc']
                                            ? i['s-rc'].push(r)
                                            : r();
                                        })(0, e, n);
                                    }
                                    o();
                                  }
                                })(this)
                              );
                      }
                      disconnectedCallback() {
                        c.jmp(
                          () => (this, void (0 == (1 & c.$flags$) && X(this)))
                        );
                      }
                      componentOnReady() {
                        return X(this).$onReadyPromise$;
                      }
                    };
                  (i.$lazyBundleId$ = t[0]),
                    o.includes(r) ||
                      a.get(r) ||
                      (n.push(r), a.define(r, Z(s, i, 1)));
                });
              }),
              (d.innerHTML =
                n + '{visibility:hidden}.hydrated{visibility:inherit}'),
              d.setAttribute('data-styles', ''),
              i.insertBefore(d, r ? r.nextSibling : i.firstChild),
              (f = !1),
              h.length
                ? h.map((t) => t.connectedCallback())
                : c.jmp(() => (g = setTimeout(I, 30)));
          },
          q = (t, e) => e,
          G = new WeakMap(),
          X = (t) => G.get(t),
          K = (t, e) => G.set((e.$lazyInstance$ = t), e),
          Y = (t, e) => {
            const n = {
              $flags$: 0,
              $hostElement$: t,
              $cmpMeta$: e,
              $instanceValues$: new Map(),
            };
            return (
              (n.$onReadyPromise$ = new Promise(
                (t) => (n.$onReadyResolve$ = t)
              )),
              (t['s-p'] = []),
              (t['s-rc'] = []),
              G.set(t, n)
            );
          },
          J = (t, e) => e in t,
          Q = (t, e) => (0, console.error)(t, e),
          tt = new Map(),
          et = (t, e, o) => {
            const a = t.$tagName$.replace(/-/g, '_'),
              i = t.$lazyBundleId$,
              r = tt.get(i);
            return r
              ? r[a]
              : n(3469)(`./${i}.entry.js`).then((t) => (tt.set(i, t), t[a]), Q);
          },
          nt = new Map(),
          ot = [],
          at = [],
          it = (t, e) => (n) => {
            t.push(n), r || ((r = !0), e && 4 & c.$flags$ ? lt(st) : c.raf(st));
          },
          rt = (t) => {
            for (let e = 0; e < t.length; e++)
              try {
                t[e](performance.now());
              } catch (t) {
                Q(t);
              }
            t.length = 0;
          },
          st = () => {
            rt(ot), rt(at), (r = ot.length > 0) && c.raf(st);
          },
          lt = (t) => d().then(t),
          ct = it(at, !0);
      },
      477: (t, e, n) => {
        'use strict';
        n.r(e),
          n.d(e, {
            vocably_button: () => a,
            vocably_close_button: () => i,
            vocably_language: () => s,
            vocably_logo: () => l,
            vocably_popup: () => c,
            vocably_side_b: () => d,
            vocably_sign_in: () => u,
            vocably_spinner: () => h,
            vocably_subscribe: () => p,
            vocably_translation: () => g,
          });
        var o = n(8504);
        const a = class {
          constructor(t) {
            (0, o.r)(this, t);
          }
          render() {
            return (0, o.h)(
              o.H,
              null,
              (0, o.h)(
                'div',
                { class: 'button' },
                (0, o.h)(
                  'svg',
                  { viewBox: '0 0 633 699', fill: 'none', class: 'svg' },
                  (0, o.h)('path', {
                    d: 'M585.428 130.443H46.6646C21.2112 130.443 0 150.809 0 177.116V482.609C0 508.067 20.3627 529.281 46.6646 529.281H82.2994V639.599C82.2994 662.511 95.026 682.877 114.54 693.06C122.176 697.303 130.661 699 139.145 699C151.872 699 163.75 694.757 174.78 687.12L352.954 530.13H585.428C610.882 530.13 632.093 509.764 632.093 483.457V177.964C632.093 151.658 610.882 130.443 585.428 130.443ZM150.175 654.874C142.539 660.814 135.752 658.268 133.206 656.57C130.661 654.873 123.873 650.63 123.873 639.599V340.045C123.873 320.527 137.448 291.676 152.72 278.947L320.713 132.989V504.672L150.175 654.874Z',
                    fill: '#0050FF',
                  }),
                  (0, o.h)('path', {
                    d: 'M524.34 36.2492C524.34 10.7914 497.19 -13.8184 464.949 9.09357L355.499 101.59H524.34V36.2492Z',
                    fill: '#0050FF',
                  })
                )
              )
            );
          }
        };
        a.style =
          ':host{display:block}.button{display:flex;border-radius:5px;width:19px;height:19px;line-height:19px;background-color:#fff;padding:3px;border:1px solid #bababa;cursor:pointer;box-sizing:content-box;align-items:center;justify-content:center}.button .svg{height:17.1px}.button:hover{box-shadow:0 4px 5px rgba(0, 0, 0, 0.2)}';
        const i = class {
          constructor(t) {
            (0, o.r)(this, t), (this.close = (0, o.c)(this, 'close', 7));
          }
          render() {
            return (0, o.h)(
              o.H,
              null,
              (0, o.h)(
                'button',
                { class: 'button', onClick: () => this.close.emit() },
                (0, o.h)(
                  'svg',
                  {
                    class: 'svg',
                    viewBox: '0 0 10 10',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  (0, o.h)('path', { class: 'path', d: 'M10 0L0 10M0 0L10 10' })
                )
              )
            );
          }
        };
        i.style =
          ':host{display:inline-block;width:11px;height:11px;line-height:11px;vertical-align:middle}.button{display:block;width:11px;height:11px;line-height:11px !important;background:none;border:none;padding:0;font-size:0;cursor:pointer}.svg{width:11px;height:11px}.path{stroke-width:0.5px;stroke:#6a6a6a}';
        const r = {
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
          },
          s = class {
            constructor(t) {
              (0, o.r)(this, t), (this.confirm = (0, o.c)(this, 'confirm', 7));
            }
            render() {
              return (0, o.h)(
                o.H,
                { 'data-test': 'language' },
                (0, o.h)(
                  'div',
                  { class: 'container' },
                  (0, o.h)('div', { class: 'h1 p' }, 'I study'),
                  (0, o.h)(
                    'div',
                    { class: 'p' },
                    (0, o.h)(
                      'select',
                      {
                        'data-test': 'source-language-selector',
                        ref: (t) => (this.sourceLanguageSelect = t),
                      },
                      Object.entries(r).map(([t, e]) =>
                        (0, o.h)(
                          'option',
                          { selected: this.sourceLanguage === t, value: t },
                          e
                        )
                      )
                    )
                  ),
                  (0, o.h)('div', { class: 'h1 p' }, 'I speak'),
                  (0, o.h)(
                    'div',
                    { class: 'p' },
                    (0, o.h)(
                      'select',
                      {
                        'data-test': 'target-language-selector',
                        ref: (t) => (this.targetLanguageSelect = t),
                      },
                      Object.entries(r).map(([t, e]) =>
                        (0, o.h)(
                          'option',
                          { selected: this.targetLanguage === t, value: t },
                          e
                        )
                      )
                    )
                  ),
                  (0, o.h)(
                    'div',
                    { class: 'button-container' },
                    (0, o.h)(
                      'button',
                      {
                        class: 'button',
                        onClick: () =>
                          this.confirm.emit({
                            sourceLanguage: this.sourceLanguageSelect.value,
                            targetLanguage: this.targetLanguageSelect.value,
                          }),
                        'data-test': 'subscribe-button',
                        disabled: this.waiting,
                      },
                      this.waiting ? 'Saving...' : 'Save'
                    )
                  )
                )
              );
            }
          };
        s.style =
          ':host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block}.container{display:inline-block}.p{margin-bottom:16px}.h1{font-size:26px;margin-bottom:16px}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:20px;text-align:center;text-decoration:none;width:calc(100% - 6px * 2);transition:background-color 200ms;margin:0 6px 9px;box-shadow:0 3px 6px rgba(0, 80, 255, 0.25)}.button:hover,.button:focus{background:#0047e3}.button:active{background:#0047e3;box-shadow:inset 0px 0px 15px rgba(3, 36, 108, 0.4)}select{color:#6a6a6a;font-size:14.4px;padding:10px 14px;border:0.5px solid #bababa;border-radius:8px;appearance:none;background:#fbfbfb url(\'data:image/svg+xml;utf8,<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1 5 6 1 1" stroke="rgb(109, 109, 109)" stroke-width=".5" stroke-miterlimit="10" stroke-linecap="round"/></svg>\') no-repeat;background-position:right 14px top 50%;outline:none;width:100%}';
        const l = class {
          constructor(t) {
            (0, o.r)(this, t);
          }
          render() {
            return (0, o.h)(
              o.H,
              null,
              (0, o.h)(
                'svg',
                {
                  width: '1086',
                  height: '258',
                  viewBox: '0 0 1086 258',
                  class: 'svg',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                (0, o.h)('path', {
                  d: 'M363.813 199.05L323.32 50.7578H346.993L378.453 178.8H379.699L411.159 50.7578H434.831L394.338 199.05H363.813Z',
                  fill: '#212121',
                }),
                (0, o.h)('path', {
                  d: 'M494.948 201.853C482.488 201.853 472.832 199.361 465.668 194.065C458.504 188.769 453.52 181.292 450.406 171.634C447.291 161.977 445.733 150.45 445.733 137.054C445.733 123.658 447.291 112.131 450.406 102.473C453.52 92.8152 458.504 85.3385 465.668 80.0423C472.832 74.7462 482.488 72.2539 494.948 72.2539C507.407 72.2539 517.063 74.7462 524.227 80.0423C531.391 85.3385 536.375 92.8152 539.178 102.473C542.293 112.131 543.539 123.658 543.539 137.054C543.539 150.45 541.982 161.977 539.178 171.634C536.375 181.292 531.08 188.769 524.227 194.065C517.063 199.361 507.407 201.853 494.948 201.853ZM494.948 183.784C499.931 183.784 503.981 183.161 507.407 181.915C510.833 180.669 513.325 178.488 515.506 175.061C517.686 171.946 518.932 166.961 519.866 161.042C520.489 154.811 521.112 147.023 521.112 137.054C521.112 127.085 520.801 119.296 519.866 113.065C518.932 106.834 517.686 102.161 515.506 99.046C513.637 95.9307 510.833 93.4385 507.407 92.1924C503.981 90.9462 499.931 90.3232 494.948 90.3232C489.964 90.3232 485.603 90.9462 482.177 92.1924C478.751 93.4385 476.259 95.6191 474.078 99.046C471.898 102.161 470.652 107.146 469.718 113.065C468.783 119.296 468.472 127.085 468.472 137.054C468.472 147.023 468.783 154.811 469.718 161.042C470.652 167.273 471.898 171.946 474.078 175.061C476.259 178.177 478.751 180.669 482.177 181.915C485.603 183.161 489.964 183.784 494.948 183.784Z',
                  fill: '#212121',
                }),
                (0, o.h)('path', {
                  d: 'M622.033 201.853C612.066 201.853 603.033 199.673 595.246 195.311C587.459 190.95 581.54 183.784 577.18 174.126C572.819 164.469 570.638 152.007 570.638 136.43C570.638 123.657 572.196 113.065 574.999 104.654C577.803 96.2423 581.852 89.6999 587.147 85.0268C592.131 80.3537 598.36 76.927 605.213 75.0578C612.066 73.1885 619.23 71.9424 627.017 71.9424C633.247 71.9424 639.165 72.254 645.083 73.1886C651.001 74.1232 655.673 74.7461 659.1 75.6807L656.608 93.4385C653.493 93.127 648.821 92.5036 642.903 91.569C636.673 90.9459 630.443 90.3232 624.214 90.3232C618.918 90.3232 614.558 90.6344 611.131 91.569C608.016 92.5036 605.213 93.7499 603.344 95.6191C600.541 98.423 598.36 103.408 596.803 110.573C595.246 117.738 594.311 126.461 594.311 136.742C594.311 146.088 594.934 153.877 596.492 159.796C598.049 165.715 599.606 170.077 601.475 172.881C603.344 175.996 605.213 177.865 606.771 179.111C607.705 179.734 609.262 180.669 611.131 181.292C613 181.915 615.804 182.538 619.23 182.538C622.968 182.538 627.017 181.915 631.378 180.98C635.739 180.046 639.476 178.8 643.214 177.554C646.952 176.307 651.001 174.749 655.673 172.569L662.215 189.392C655.673 193.13 649.444 196.246 643.526 198.115C637.607 199.984 630.132 201.853 622.033 201.853Z',
                  fill: '#212121',
                }),
                (0, o.h)('path', {
                  d: 'M714.855 201.853C708.314 201.853 702.396 200.296 697.412 197.18C692.117 194.065 688.068 189.392 685.264 183.473C682.461 177.553 680.904 170.388 680.904 161.977C680.904 151.696 683.084 143.907 687.133 137.988C691.494 132.38 697.412 128.019 705.199 125.527C712.986 123.034 722.019 121.788 732.298 121.788H752.856C752.856 114.935 752.545 109.327 752.233 104.965C751.922 100.604 750.676 97.177 749.119 94.9962C747.873 93.4385 746.315 92.1921 744.135 91.569C741.954 90.9459 739.151 90.6346 735.725 90.6346C730.43 90.6346 724.823 91.2577 719.528 92.1923C714.232 93.1269 709.249 94.373 704.888 95.6191C700.527 96.8653 695.543 98.7344 690.248 100.604L684.018 83.7806C689.625 81.2883 694.609 79.4194 699.281 77.8617C703.953 76.304 709.249 75.0577 715.167 73.8115C721.085 72.5654 727.003 71.9424 733.544 71.9424C743.823 71.9424 752.233 73.8114 758.152 77.5498C764.381 81.2883 768.742 86.5847 771.234 93.4385C774.037 100.292 775.283 108.392 775.283 117.738V199.049H760.332L757.217 185.965H755.971C755.037 186.588 753.168 187.834 750.676 189.703C748.184 191.261 745.069 193.13 741.331 195C737.594 196.869 733.544 198.426 729.184 199.984C724.511 201.23 719.839 201.853 714.855 201.853ZM719.839 182.85C724.511 182.85 729.184 182.227 733.544 180.669C737.905 179.111 741.954 177.554 745.381 175.996C748.807 174.438 750.987 173.192 752.545 172.257V141.104C751.299 140.792 748.807 140.481 745.069 140.169C741.331 139.858 736.659 139.546 731.052 139.546C718.905 139.546 711.429 140.792 708.626 143.285C707.068 144.531 705.822 146.711 704.888 149.827C703.953 152.942 703.642 156.992 703.642 161.665C703.642 169.142 704.888 174.438 707.38 177.865C709.872 181.292 713.921 182.85 719.839 182.85Z',
                  fill: '#212121',
                }),
                (0, o.h)('path', {
                  d: 'M860.63 201.854C856.58 201.854 851.597 201.542 845.678 200.607C839.76 199.673 833.842 198.738 827.612 197.492C821.694 196.246 816.399 194.688 811.727 193.442V38.6079H834.154V76.6157C835.711 76.3042 838.203 75.6811 841.629 75.058C845.056 74.4349 848.482 73.8119 852.843 73.1889C856.892 72.5658 860.941 72.2541 864.991 72.2541C878.073 72.2541 888.04 77.2388 895.204 87.208C902.369 97.1772 905.795 113.065 905.795 135.184C905.795 148.892 904.549 160.108 902.057 168.831C899.565 177.554 896.139 184.408 891.778 189.081C887.417 193.754 882.745 197.18 877.138 199.05C871.532 200.919 866.236 201.854 860.63 201.854ZM860.007 182.85C863.433 182.85 866.236 182.538 868.417 182.227C870.597 181.915 872.155 180.981 873.401 179.734C874.646 178.488 875.892 176.308 877.45 173.504C879.007 170.7 879.942 165.715 881.188 159.173C882.122 152.631 882.745 143.285 882.745 131.758C882.745 120.231 882.122 111.508 881.188 105.9C880.253 100.293 878.384 96.5542 876.515 94.9965C874.024 92.8157 869.351 91.5693 862.187 91.5693C855.335 91.5693 849.416 92.1926 844.433 93.4388C839.449 94.6849 836.023 95.6196 834.154 96.5542V180.046C835.4 180.357 836.957 180.669 839.449 181.292C841.941 181.915 844.744 182.227 848.17 182.538C851.597 182.538 855.646 182.85 860.007 182.85Z',
                  fill: '#212121',
                }),
                (0, o.h)('path', {
                  d: 'M939.435 199.05V38.2964H961.862V199.05H939.435Z',
                  fill: '#212121',
                }),
                (0, o.h)('path', {
                  d: 'M1007.03 234.565L1024.16 187.212L983.977 75.0581H1007.34L1034.13 163.223H1035.06L1061.54 75.0581H1085.21L1042.85 192.196L1030.39 234.877H1007.03V234.565Z',
                  fill: '#212121',
                }),
                (0, o.h)('path', {
                  d: 'M216.928 48.8888H19.1319C9.78725 48.8888 2 56.3657 2 66.0235V178.178C2 187.524 9.47576 195.312 19.1319 195.312H32.2145V235.812C32.2145 244.224 36.8869 251.701 44.0511 255.439C46.8545 256.997 49.9695 257.62 53.0844 257.62C57.7567 257.62 62.1176 256.062 66.1669 253.258L131.58 195.624H216.928C226.273 195.624 234.06 188.147 234.06 178.489V66.3349C234.06 56.6772 226.273 48.8888 216.928 48.8888ZM57.1337 241.42C54.3303 243.601 51.8384 242.666 50.9039 242.043C49.9695 241.42 47.4775 239.862 47.4775 235.812V125.839C47.4775 118.673 52.4613 108.081 58.0682 103.408L119.743 49.8236V186.277L57.1337 241.42Z',
                  class: 'primary',
                }),
                (0, o.h)('path', {
                  d: 'M194.501 14.308C194.501 4.96178 184.533 -4.07308 172.696 4.33847L132.514 38.2963H194.501V14.308Z',
                  class: 'primary',
                })
              )
            );
          }
        };
        l.style =
          ':host{--logo-color:#000000;display:inline-block;line-height:0}.svg{height:100%;width:auto}.svg .primary{fill:#0050ff}';
        const c = class {
          constructor(t) {
            (0, o.r)(this, t), (this.close = (0, o.c)(this, 'close', 7));
          }
          componentDidRender() {
            const t = this.el.shadowRoot.getElementById('content-wrapper'),
              e = this.el.shadowRoot.getElementById('content');
            new ResizeObserver(() => {
              const n = e.getBoundingClientRect();
              (t.style.width = `${n.width}px`),
                (t.style.height = `${n.height}px`);
            }).observe(e);
          }
          render() {
            return (0, o.h)(
              o.H,
              null,
              (0, o.h)(
                'div',
                { class: 'popup' },
                (0, o.h)(
                  'div',
                  { class: 'body', id: 'body' },
                  (0, o.h)(
                    'div',
                    { class: 'content-wrapper', id: 'content-wrapper' },
                    (0, o.h)(
                      'div',
                      { class: 'content-unlimited' },
                      (0, o.h)(
                        'div',
                        { class: 'content', id: 'content' },
                        (0, o.h)('slot', null)
                      )
                    )
                  )
                ),
                (0, o.h)(
                  'div',
                  { class: 'header' },
                  (0, o.h)('vocably-logo', { class: 'logo' }),
                  (0, o.h)('vocably-close-button', { class: 'close' })
                ),
                (0, o.h)('div', { class: 'footer' })
              )
            );
          }
          get el() {
            return (0, o.g)(this);
          }
        };
        c.style =
          ':host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;--max-height:48vh;--background-rgb:255, 255, 255;--header-height:19px;--header-padding-top:11px;--header-padding-bottom:20px;--header-decay-length:10px;--padding-x:20px;--padding-bottom:20px;--shadow-spread:10px;--shadow-v-offset:4px;--scrollbar-track:6px;--scrollbar-gutter:calc((var(--padding-x) - var(--scrollbar-track)) / 2);display:inline-block;padding:calc(var(--shadow-spread) - var(--shadow-v-offset)) var(--shadow-spread) calc(var(--shadow-spread) + var(--shadow-v-offset))}:host .popup{background:rgb(var(--background-rgb));box-shadow:0 var(--shadow-v-offset) var(--shadow-spread) rgba(0, 0, 0, 0.2);border:1px solid #bababa;border-radius:8px;box-sizing:border-box;position:relative;padding-top:calc(var(--header-height) + var(--header-padding-top));padding-right:var(--scrollbar-gutter);padding-bottom:1px;padding-left:0}:host .header{position:absolute;background:linear-gradient(0deg, rgba(255, 255, 255, 0), white var(--header-decay-length));left:0;right:0;top:0;height:var(--header-height);border-radius:8px 0 0 0;display:flex;align-items:center;padding:var(--header-padding-top) 0 var(--header-padding-bottom) var(--padding-x);margin-right:var(--padding-x)}:host .header .logo{height:var(--header-height)}:host .header .close{border:none;padding:0;background:none;text-align:center;cursor:pointer;margin-left:auto}:host .footer{position:absolute;background:linear-gradient(0deg, white 0%, rgba(255, 255, 255, 0) 100%);left:0;right:0;bottom:0;height:var(--padding-bottom);margin-right:var(--padding-x);border-radius:0 0 0 8px}:host .body{min-width:140px;overflow:auto;box-sizing:border-box;max-height:calc(var(--max-height) - var(--header-padding-top) - var(--header-padding-top) - var(--header-padding-bottom) - var(--padding-bottom) - var(--shadow-spread) * 2);scrollbar-gutter:stable;padding-top:var(--header-padding-bottom);padding-left:var(--padding-x);padding-right:calc(var(--padding-x) - var(--scrollbar-track) - var(--scrollbar-gutter));padding-bottom:var(--padding-bottom)}:host .body::-webkit-scrollbar{-webkit-appearance:none;width:var(--scrollbar-track)}:host .body::-webkit-scrollbar-thumb{border-radius:4px;background-color:#a4a4a4;-webkit-box-shadow:0 0 1px rgba(255, 255, 255, 0.5)}:host .content-wrapper{overflow:hidden;width:0;height:0}:host .content-unlimited{width:80vw}:host .content{display:inline-block}';
        const d = class {
          constructor(t) {
            (0, o.r)(this, t);
          }
          render() {
            const t = this.item.data.definition
              .split('\n')
              .map((t) => t.replace(/^\* */, '').replace(/ +$/, ''))
              .filter((t) => '' !== t);
            return 0 === t.length
              ? (0, o.h)(
                  o.H,
                  null,
                  (0, o.h)(
                    'span',
                    { class: 'translation' },
                    this.item.data.translation
                  )
                )
              : (0, o.h)(
                  'ul',
                  { class: 'list' },
                  t.map((t) => (0, o.h)('li', null, t)),
                  this.item.data.translation &&
                    (0, o.h)(
                      'li',
                      null,
                      (0, o.h)(
                        'span',
                        { class: 'translation' },
                        this.item.data.translation
                      )
                    )
                );
          }
        };
        d.style =
          ':host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block}.list{list-style:outside;padding:0;margin:0 0 0 16px}.translation{font-style:italic}';
        const u = class {
          constructor(t) {
            (0, o.r)(this, t), (this.confirm = (0, o.c)(this, 'confirm', 7));
          }
          render() {
            return (0, o.h)(
              o.H,
              { 'data-test': 'sign-in' },
              (0, o.h)('div', { class: 'p' }, 'Please sign in to proceed.'),
              (0, o.h)(
                'div',
                { class: 'p' },
                (0, o.h)(
                  'button',
                  {
                    class: 'button',
                    'data-test': 'sign-in-button',
                    onClick: () => this.confirm.emit(),
                  },
                  'Sign in or Create an account'
                )
              ),
              (0, o.h)(
                'div',
                null,
                'By signing in, you agree to our',
                ' ',
                (0, o.h)(
                  'a',
                  {
                    class: 'link',
                    href: 'https://app.vocably.pro/page/terms-of-service',
                    target: '_blank',
                  },
                  'Terms of Service'
                ),
                ' ',
                'and',
                ' ',
                (0, o.h)(
                  'a',
                  {
                    class: 'link',
                    href: 'https://app.vocably.pro/page/privacy-policy',
                    target: '_blank',
                  },
                  'Privacy Policy'
                ),
                '.'
              )
            );
          }
        };
        u.style =
          ':host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block}.container{display:inline-block}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:20px;text-align:center;text-decoration:none;width:calc(100% - 6px * 2);transition:background-color 200ms;margin:0 6px 9px;box-shadow:0 3px 6px rgba(0, 80, 255, 0.25)}.button:hover,.button:focus{background:#0047e3}.button:active{background:#0047e3;box-shadow:inset 0px 0px 15px rgba(3, 36, 108, 0.4)}.p{margin-bottom:16px;text-align:center}.p a{color:#0050ff}.link{text-decoration:underline;text-decoration-thickness:0.5px;text-underline-offset:2px;color:#0050ff !important}.link:hover,.link:focus,.link:active{color:#0047e3 !important}';
        const h = class {
          constructor(t) {
            (0, o.r)(this, t);
          }
          render() {
            return (0, o.h)(
              o.H,
              null,
              (0, o.h)(
                'div',
                { class: 'spinner' },
                (0, o.h)('div', { class: 'bounce1' }),
                (0, o.h)('div', { class: 'bounce2' }),
                (0, o.h)('div', { class: 'bounce3' })
              )
            );
          }
        };
        h.style =
          ':host{display:inline-block;width:140px;height:18px;vertical-align:middle}.spinner{text-align:center;height:18px}.spinner>div{width:18px;height:18px;background-color:#0050ff;border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.spinner .bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner .bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}';
        const p = class {
          constructor(t) {
            (0, o.r)(this, t),
              (this.confirm = (0, o.c)(this, 'confirm', 7)),
              (this.trial = !1);
          }
          render() {
            return (0, o.h)(
              o.H,
              { 'data-test': 'subscribe' },
              (0, o.h)(
                'div',
                { class: 'container' },
                (0, o.h)(
                  'div',
                  { class: 'message' },
                  this.trial
                    ? 'Request a 7 day free trial to proceed.'
                    : 'Please subscribe to proceed.'
                ),
                (0, o.h)(
                  'div',
                  { class: 'button-container' },
                  (0, o.h)(
                    'button',
                    {
                      class: 'button',
                      onClick: () => this.confirm.emit(),
                      'data-test': 'subscribe-button',
                    },
                    this.trial ? 'Request a 7 day free trial' : 'Subscribe'
                  )
                )
              )
            );
          }
        };
        p.style =
          ':host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block}.container{display:inline-block}.message{margin-bottom:16px}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:20px;text-align:center;text-decoration:none;width:calc(100% - 6px * 2);transition:background-color 200ms;margin:0 6px 9px;box-shadow:0 3px 6px rgba(0, 80, 255, 0.25)}.button:hover,.button:focus{background:#0047e3}.button:active{background:#0047e3;box-shadow:inset 0px 0px 15px rgba(3, 36, 108, 0.4)}';
        const g = class {
          constructor(t) {
            (0, o.r)(this, t),
              (this.changeLanguage = (0, o.c)(this, 'changeLanguage', 7)),
              (this.result = null),
              (this.loading = !1),
              (this.existingLanguages = []),
              (this.language = '');
          }
          render() {
            const t =
              this.result &&
              this.result.success &&
              (0, o.h)(
                'select',
                {
                  'data-test': 'language-selector',
                  disabled: this.loading,
                  onChange: (t) => this.changeLanguage.emit(t.target.value),
                },
                Object.entries(r)
                  .sort(
                    ((e = this.existingLanguages),
                    (t, n) => {
                      const o = e.includes(t[0]),
                        a = e.includes(n[0]);
                      return o && !a
                        ? -1
                        : !o && a
                        ? 1
                        : t[1].localeCompare(n[1]);
                    })
                  )
                  .map(([t, e]) =>
                    (0, o.h)(
                      'option',
                      { selected: this.language === t, value: t },
                      e
                    )
                  )
              );
            var e;
            const n =
              this.result &&
              this.result.success &&
              ((t) => {
                if (
                  t.translation.sourceLanguage === t.translation.targetLanguage
                )
                  return !1;
                if (t.cards.length > 1) return !0;
                const e = t.cards[0].data;
                return (
                  t.source !== e.source ||
                  t.translation.target !== e.translation
                );
              })(this.result.value);
            return (0, o.h)(
              o.H,
              { 'data-test': 'translation-container' },
              (0, o.h)(
                'div',
                { class: 'loading-container' },
                null === this.result && (0, o.h)('vocably-spinner', null),
                this.result &&
                  !1 === this.result.success &&
                  (0, o.h)('div', { class: 'error' }, 'An error has occurred.'),
                this.result &&
                  !0 === this.result.success &&
                  (0, o.h)(
                    o.F,
                    null,
                    (0, o.h)(
                      'div',
                      { class: 'translation', 'data-test': 'translation' },
                      n &&
                        (0, o.h)(
                          'div',
                          { class: 'section' },
                          (0, o.h)('div', { class: 'margin-bottom-1' }, t),
                          (0, o.h)(
                            'div',
                            { class: 'margin-left emphasized margin-bottom-2' },
                            this.phrase
                          ),
                          (0, o.h)(
                            o.F,
                            null,
                            (0, o.h)(
                              'div',
                              {
                                class: 'margin-bottom-1',
                                'data-test': 'translation-language',
                              },
                              ((a =
                                this.result.value.translation.targetLanguage),
                              r[a] ?? a)
                            ),
                            (0, o.h)(
                              'div',
                              {
                                class: 'margin-left emphasized margin-bottom-1',
                              },
                              this.result.value.translation.target
                            )
                          )
                        ),
                      (0, o.h)(
                        'div',
                        { class: 'section' },
                        !n && (0, o.h)('div', { class: 'margin-bottom-2' }, t),
                        (0, o.h)(
                          'div',
                          { class: 'cards', 'data-test': 'cards' },
                          this.result.value.cards.map((t, e, n) =>
                            (0, o.h)(
                              'div',
                              {
                                'data-test': 'card',
                                class:
                                  'card' + (n.length > 1 ? ' has-number' : ''),
                              },
                              n.length > 1 &&
                                (0, o.h)('div', { class: 'number' }, e + 1),
                              (0, o.h)(
                                'div',
                                null,
                                (0, o.h)('span', { class: 'small' }, 'Side'),
                                ' ',
                                (0, o.h)('span', { class: 'text-primary' }, 'A')
                              ),
                              (0, o.h)(
                                'div',
                                { class: 'margin-left' },
                                (0, o.h)(
                                  'span',
                                  { class: 'emphasized' },
                                  t.data.source
                                ),
                                t.data.partOfSpeech &&
                                  (0, o.h)(
                                    o.F,
                                    null,
                                    (0, o.h)(
                                      'span',
                                      { class: 'invisible-space ' },
                                      ' '
                                    ),
                                    (0, o.h)(
                                      'span',
                                      { class: 'pos margin-left' },
                                      t.data.partOfSpeech
                                    )
                                  )
                              ),
                              (0, o.h)(
                                'div',
                                null,
                                (0, o.h)('span', { class: 'small' }, 'Side'),
                                ' ',
                                (0, o.h)('span', { class: 'text-primary' }, 'B')
                              ),
                              (0, o.h)(
                                'div',
                                { class: 'margin-left' },
                                (0, o.h)('vocably-side-b', { item: t })
                              )
                            )
                          )
                        ),
                        (0, o.h)(
                          'div',
                          { class: 'margin-top-2 text-right small' },
                          (0, o.h)(
                            'a',
                            {
                              href: 'https://app.vocably.pro/feedback',
                              target: '_blank',
                              class: 'text-link',
                            },
                            'Are you missing anything? Feel free to let me know.'
                          )
                        )
                      )
                    ),
                    this.loading &&
                      (0, o.h)(
                        'div',
                        { class: 'reload', 'data-test': 'reload' },
                        (0, o.h)('vocably-spinner', null)
                      )
                  )
              )
            );
            var a;
          }
        };
        g.style =
          ':host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block}.margin-left{margin-left:12px}.margin-bottom-1{margin-bottom:4px}.margin-bottom-2{margin-bottom:12px}.margin-top-2{margin-top:12px}.text-right{text-align:right}.text-link,.text-link:active,.text-link:visited{color:#6a6a6a !important}.text-link:hover{color:#000000 !important}.emphasized{color:#000000;font-weight:bold}.small{font-size:14.4px}.text-primary{color:#0050ff}.translation{display:flex;align-items:stretch}.translation .value{margin-bottom:8px}.translation .pos{display:inline-block;font-size:80%}.translation .invisible-space{display:inline-block;width:0;font-size:0}.translation .header{margin-bottom:12px}.translation .section{padding-left:14px;margin-left:8px}.translation .section:first-child{margin-left:0}.error{color:#ff5e5e}select{margin-left:-14px;width:calc(100% + 14px);color:#6a6a6a;font-size:14.4px;padding:10px 14px;border:0.5px solid #bababa;border-radius:8px;appearance:none;background:#fbfbfb url(\'data:image/svg+xml;utf8,<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1 5 6 1 1" stroke="rgb(109, 109, 109)" stroke-width=".5" stroke-miterlimit="10" stroke-linecap="round"/></svg>\') no-repeat;background-position:right 14px top 50%;outline:none}.loading-container{position:relative}.reload{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:white;opacity:0.5}.cards{border:0.5px solid #bababa;border-radius:8px;background-color:#fbfbfb;margin-left:-14px;margin-bottom:1px}.cards .card{position:relative;padding:10px 14px;border-top:0.5px solid #bababa}.cards .card:first-child{border-top:none}.cards .card.has-number{padding-right:48px !important}.cards .card .number{position:absolute;right:14px;top:10px;border:1px solid #e6e6e6;border-radius:50%;min-width:24px;height:24px;line-height:24px;text-align:center}';
      },
      3469: (t, e, n) => {
        var o = { './vocably-button_10.entry.js': [477, 694] };
        function a(t) {
          if (!n.o(o, t))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + t + "'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            });
          var e = o[t],
            a = e[0];
          return n.e(e[1]).then(() => n(a));
        }
        (a.keys = () => Object.keys(o)), (a.id = 3469), (t.exports = a);
      },
    },
    e = {};
  function n(o) {
    var a = e[o];
    if (void 0 !== a) return a.exports;
    var i = (e[o] = { exports: {} });
    return t[o](i, i.exports, n), i.exports;
  }
  (n.d = (t, e) => {
    for (var o in e)
      n.o(e, o) &&
        !n.o(t, o) &&
        Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
  }),
    (n.e = () => Promise.resolve()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (() => {
      'use strict';
      var t = n(8504);
      let e;
      !(function () {
        if (
          'undefined' != typeof window &&
          void 0 !== window.Reflect &&
          void 0 !== window.customElements
        ) {
          var t = HTMLElement;
          (window.HTMLElement = function () {
            return Reflect.construct(t, [], this.constructor);
          }),
            (HTMLElement.prototype = t.prototype),
            (HTMLElement.prototype.constructor = HTMLElement),
            Object.setPrototypeOf(HTMLElement, t);
        }
      })(),
        n(3166),
        'undefined' != typeof chrome
          ? (e = chrome)
          : 'undefined' != typeof browser &&
            (console.log('Browser env'), (e = browser));
      const o = (t) => (n, o) =>
          new Promise((a, i) => {
            if (!e) return void i('browserEnv environment is not defined');
            if (!e.runtime)
              return void i('browserEnv.runtime is not defined defined');
            const r = [
              { identifier: t, data: n },
              (t) => {
                if (e.runtime.lastError) return i(e.runtime.lastError);
                a(t);
              },
            ];
            o && r.unshift(o), e.runtime.sendMessage(...r);
          }),
        a = (t, e) => (n, o, a) => {
          if (
            (console.log('shit received', n),
            'object' != typeof n || null === n || n.identifier !== t)
          )
            return;
          const i = n.data;
          return e((t) => (a(t), t), i), !0;
        },
        i = (t) => {
          const n = o(t);
          return [
            (t, e) => n(e, t),
            (n) => {
              e.runtime.onMessageExternal.addListener(a(t, n));
            },
          ];
        },
        r =
          ('vocably',
          (t) =>
            ((t) => [
              o(t),
              (n) => {
                e.runtime.onMessage.addListener(a(t, n));
              },
            ])(`vocably.${t}`));
      const [s, l] = r('isLoggedIn'),
        [c, d] = r('isActive'),
        [u, h] = r('isEligibleForTrial'),
        [p, g] = r('analyze'),
        [f, m] = r('listLanguages'),
        [b, v] = r('cleanUp'),
        [y, w] = r('ping'),
        [$, C] = r('getInternalProxyLanguage'),
        [x, E] = r('setInternalProxyLanguage'),
        [k, _] = r('getInternalSourceLanguage'),
        [L, S] = r('setInternalSourceLanguage'),
        [N, M] = i('vocably.ping-external'),
        [T, H] = i('vocably.setProxyLanguage'),
        [P, j] = i('vocably.getProxyLanguage'),
        O = {
          appBaseUrl: 'https://app.vocably.pro',
          isLoggedIn: s,
          getInternalProxyLanguage: $,
          setInternalProxyLanguage: x,
          getInternalSourceLanguage: k,
          setInternalSourceLanguage: L,
          analyze: p,
          cleanUp: b,
          isActive: c,
          ping: y,
          listLanguages: f,
          isEligibleForTrial: u,
        },
        A = [
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
        ],
        z = (t) => {
          var e;
          if (!t) return;
          const n = (null !== (e = t.lang) && void 0 !== e ? e : '').substring(
            0,
            2
          );
          return (o = n), -1 !== A.indexOf(o) ? n : z(t.parentNode);
          var o;
        },
        D = (t) => z(t.anchorNode);
      var F = function (t, e, n, o) {
        return new (n || (n = Promise))(function (a, i) {
          function r(t) {
            try {
              l(o.next(t));
            } catch (t) {
              i(t);
            }
          }
          function s(t) {
            try {
              l(o.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? a(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(r, s);
          }
          l((o = o.apply(t, e || [])).next());
        });
      };
      const R = (t) => Object.prototype.hasOwnProperty.call(t, 'top'),
        I = (t, e) => {
          (t.style.position = 'absolute'),
            (t.style.left = `${e.left}px`),
            R(e)
              ? (t.style.top = `${e.top}px`)
              : (t.style.top = `${e.bottom}px`);
        },
        B = (t) => {
          t.style.setProperty('--horizontal-displacement', '0px'),
            t.style.setProperty('--translate-y', '0'),
            (t.style.transform =
              'translate(calc(-50% + var(--horizontal-displacement)), var(--translate-y))');
        },
        V = (t, e) => {
          const n = ((t, e) => {
            const n = t.getBoundingClientRect();
            return e.left - n.width / 2 < window.scrollX
              ? window.scrollX + (n.width / 2 - e.left)
              : e.left + n.width / 2 > window.innerWidth + window.scrollX
              ? window.innerWidth + window.scrollX - (e.left + n.width / 2)
              : 0;
          })(t, e);
          if (0 !== n) {
            const e = 200,
              n = t.style.transition;
            (t.style.transition = `${n ? `${n}, ` : ''}transform ${e}ms`),
              setTimeout(() => {
                t.style.transition = n;
              }, e);
          }
          t.style.setProperty('--horizontal-displacement', `${n}px`),
            R(e)
              ? t.style.setProperty('--translate-y', '0')
              : t.style.setProperty('--translate-y', '-100%');
        },
        U = (t) => {
          t.style.zIndex = '2147483647';
        };
      let Z, W, q;
      const G = (t) => {
          return (
            (e = void 0),
            (n = void 0),
            (a = function* () {
              (Z = document.createElement('vocably-popup')),
                ((t) => {
                  U(t),
                    (t.style.opacity = '0'),
                    (t.style.transition = 'opacity 100ms');
                })(Z),
                document.body.appendChild(Z),
                Z.addEventListener('mousedown', (t) => {
                  t.stopPropagation();
                }),
                Z.addEventListener('mouseup', (t) => {
                  t.stopPropagation();
                }),
                Z.addEventListener('close', () => {
                  X();
                }),
                (q = yield (({ popup: t, source: e, detectedLanguage: n }) =>
                  F(void 0, void 0, void 0, function* () {
                    let o = null;
                    const a = () => {
                        null !== o && (clearInterval(o), (o = null));
                      },
                      i = () => {
                        const n = document.createElement('vocably-translation');
                        n.phrase = e;
                        const o = (t) => {
                          (n.loading = !0),
                            O.analyze({ source: e, sourceLanguage: t })
                              .finally(() => {
                                n.loading = !1;
                              })
                              .then((t) =>
                                F(void 0, void 0, void 0, function* () {
                                  (n.result = t),
                                    !0 === t.success &&
                                      (n.language =
                                        t.value.translation.sourceLanguage);
                                  const e = yield O.listLanguages();
                                  n.existingLanguages = e.success
                                    ? e.value
                                    : [];
                                })
                              );
                        };
                        n.addEventListener(
                          'changeLanguage',
                          ({ detail: t }) => {
                            n.result &&
                              n.result.success &&
                              O.cleanUp(n.result.value),
                              (n.language = t),
                              o(t);
                          }
                        ),
                          o(),
                          (t.innerHTML = ''),
                          t.appendChild(n);
                      },
                      r = () =>
                        Promise.all([
                          O.isLoggedIn(),
                          O.isActive(),
                          O.getInternalSourceLanguage(),
                          O.getInternalProxyLanguage(),
                        ]),
                      [s, l, c, d] = yield r();
                    if (s && l && c && d) return i(), a;
                    const u = document.createElement('div'),
                      h = (t, e, o, a) =>
                        F(void 0, void 0, void 0, function* () {
                          var i;
                          if (t) {
                            if (e) {
                              if (
                                !(
                                  (o && a) ||
                                  'proxy-language' === u.dataset.message
                                )
                              ) {
                                (u.dataset.message = 'proxy-language'),
                                  (u.innerHTML = '');
                                const t =
                                  document.createElement('vocably-language');
                                (t.sourceLanguage = null != o ? o : n),
                                  (t.targetLanguage =
                                    null != a
                                      ? a
                                      : (
                                          null ===
                                            (i =
                                              null === window ||
                                              void 0 === window
                                                ? void 0
                                                : window.navigator) ||
                                          void 0 === i
                                            ? void 0
                                            : i.language
                                        )
                                      ? window.navigator.language.substring(
                                          0,
                                          2
                                        )
                                      : 'en'),
                                  t.addEventListener('confirm', (e) =>
                                    F(void 0, void 0, void 0, function* () {
                                      t.waiting = !0;
                                      const {
                                        sourceLanguage: n,
                                        targetLanguage: o,
                                      } = e.detail;
                                      yield Promise.all([
                                        O.setInternalSourceLanguage(n),
                                        O.setInternalProxyLanguage(o),
                                      ]);
                                    })
                                  ),
                                  u.appendChild(t);
                              }
                            } else if ('subscribe' !== u.dataset.message) {
                              const t = yield O.isEligibleForTrial();
                              (u.dataset.message = 'subscribe'),
                                (u.innerHTML = '');
                              const e =
                                document.createElement('vocably-subscribe');
                              (e.trial = t), u.appendChild(e);
                            }
                          } else if ('sign-in' !== u.dataset.message) {
                            (u.dataset.message = 'sign-in'), (u.innerHTML = '');
                            const t = document.createElement('vocably-sign-in');
                            t.addEventListener('confirm', () => {
                              g(),
                                (p = window.open(
                                  `${O.appBaseUrl}/hands-free`,
                                  '_blank'
                                )),
                                p.focus();
                            }),
                              u.appendChild(t);
                          }
                        });
                    yield h(s, l, c, d);
                    let p = null;
                    const g = () => {
                      null !== p && (p.close(), (p = null));
                    };
                    return (
                      (o = setInterval(
                        () =>
                          F(void 0, void 0, void 0, function* () {
                            const [t, e, n, a] = yield r();
                            t && e && n && a
                              ? (clearInterval(o),
                                (o = null),
                                i(),
                                setTimeout(g, 3e3))
                              : yield h(t, e, n, a);
                          }),
                        1e3
                      )),
                      (t.innerHTML = ''),
                      t.appendChild(u),
                      a
                    );
                  }))({
                  popup: Z,
                  source: t.toString(),
                  detectedLanguage: D(t),
                }));
              const e = ((t) => {
                const e = t.getRangeAt(0).getBoundingClientRect(),
                  n = window.scrollX + e.left + e.width / 2;
                return e.bottom < window.innerHeight / 2
                  ? { left: n, top: window.scrollY + e.bottom }
                  : { left: n, bottom: window.scrollY + e.top };
              })(t);
              I(Z, e),
                B(Z),
                ((t) => {
                  t.style.opacity = '1';
                })(Z),
                (W = new ResizeObserver(() => {
                  V(Z, e);
                })),
                W.observe(Z);
            }),
            new ((o = void 0) || (o = Promise))(function (t, i) {
              function r(t) {
                try {
                  l(a.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function s(t) {
                try {
                  l(a.throw(t));
                } catch (t) {
                  i(t);
                }
              }
              function l(e) {
                var n;
                e.done
                  ? t(e.value)
                  : ((n = e.value),
                    n instanceof o
                      ? n
                      : new o(function (t) {
                          t(n);
                        })).then(r, s);
              }
              l((a = a.apply(e, n || [])).next());
            })
          );
          var e, n, o, a;
        },
        X = () => {
          Z && Z.remove(),
            W && (W.disconnect(), (W = null)),
            q && (q(), (q = null));
        };
      var K = function (t, e, n, o) {
        return new (n || (n = Promise))(function (a, i) {
          function r(t) {
            try {
              l(o.next(t));
            } catch (t) {
              i(t);
            }
          }
          function s(t) {
            try {
              l(o.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? a(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(r, s);
          }
          l((o = o.apply(t, e || [])).next());
        });
      };
      const Y = 'translation-extension-button',
        J = () => {
          const t = document.getElementById(Y);
          t && t.remove();
        };
      var Q = function (t, e, n, o) {
        return new (n || (n = Promise))(function (a, i) {
          function r(t) {
            try {
              l(o.next(t));
            } catch (t) {
              i(t);
            }
          }
          function s(t) {
            try {
              l(o.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? a(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(r, s);
          }
          l((o = o.apply(t, e || [])).next());
        });
      };
      const tt = (t) =>
          Q(void 0, void 0, void 0, function* () {
            try {
              yield O.ping();
            } catch (t) {
              return;
            }
            const e = window.getSelection();
            ((t) => {
              if (null === t) return !1;
              if (0 === t.rangeCount) return !1;
              if (!(t.getRangeAt(0).commonAncestorContainer instanceof Text))
                return !1;
              const e = t.toString().trim();
              return '' !== e && !(e.length > 30);
            })(e) &&
              (yield ((t, e) =>
                K(void 0, void 0, void 0, function* () {
                  const n = document.createElement('vocably-button');
                  (n.id = Y),
                    ((t) => {
                      t.style.display = 'none';
                    })(n),
                    document.body.appendChild(n),
                    U(n),
                    n.addEventListener('click', () => {
                      G(t), J();
                    }),
                    n.addEventListener('mousedown', (t) => {
                      t.preventDefault(), t.stopPropagation();
                    }),
                    n.addEventListener('mouseup', (t) => {
                      t.preventDefault(), t.stopPropagation();
                    });
                  const o = yield ((t, e) =>
                    new Promise((n) => {
                      setTimeout(() => {
                        if (0 === t.rangeCount) return void n(null);
                        const o = t.getRangeAt(0).getBoundingClientRect(),
                          a = window.scrollX + e.x;
                        (o.bottom + o.top) / 2 > e.y
                          ? n({ left: a, bottom: o.top - 1 + window.scrollY })
                          : n({ left: a, top: o.bottom + window.scrollY + 1 });
                      }, 100);
                    }))(t, e);
                  null !== o
                    ? (I(n, o),
                      B(n),
                      V(n, o),
                      yield ((t) =>
                        K(void 0, void 0, void 0, function* () {
                          return new Promise((e) => {
                            setTimeout(() => {
                              const n = document.getElementById('gtx-trans');
                              if (n) {
                                n.addEventListener('mouseup', (t) => {
                                  t.stopPropagation();
                                });
                                const e = n.getBoundingClientRect();
                                (o = t),
                                  (a = e.width + 3),
                                  o.style.setProperty(
                                    '--horizontal-displacement',
                                    `${a}px`
                                  );
                              }
                              var o, a;
                              e();
                            }, 100);
                          });
                        }))(n),
                      ((t) => {
                        t.style.display = 'block';
                      })(n))
                    : J();
                }))(e, t));
          }),
        et = () =>
          Q(void 0, void 0, void 0, function* () {
            try {
              yield O.ping();
            } catch (t) {
              return;
            }
            J(), X();
          });
      (({ api: e } = { api: {} }) =>
        Q(void 0, void 0, void 0, function* () {
          var n;
          (n = e),
            Object.assign(O, n),
            ((e, n) => {
              'undefined' == typeof window
                ? Promise.resolve()
                : (0, t.p)().then(() =>
                    (0, t.b)(
                      [
                        [
                          'vocably-button_10',
                          [
                            [1, 'vocably-popup'],
                            [
                              1,
                              'vocably-translation',
                              {
                                phrase: [1],
                                result: [16],
                                loading: [4],
                                existingLanguages: [16],
                                language: [1],
                              },
                            ],
                            [1, 'vocably-button'],
                            [
                              1,
                              'vocably-language',
                              {
                                sourceLanguage: [1, 'source-language'],
                                targetLanguage: [1, 'target-language'],
                                waiting: [4],
                              },
                            ],
                            [1, 'vocably-sign-in'],
                            [1, 'vocably-subscribe', { trial: [4] }],
                            [1, 'vocably-close-button'],
                            [1, 'vocably-logo'],
                            [1, 'vocably-side-b', { item: [16] }],
                            [1, 'vocably-spinner'],
                          ],
                        ],
                      ],
                      n
                    )
                  );
            })(),
            document.addEventListener('mouseup', tt),
            document.addEventListener('mousedown', et);
        }))({ api: { appBaseUrl: 'https://app.dev.env.vocably.pro' } }).then();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsa0JBQWtCLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxlQUFpQixDQUFDLEVBQUUsbUJBQW1CLGVBQWlCLENBQUMsRUFBRSxtQkFBbUIsUUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLG1CQUFtQixDQUFDLEVBQUUsb0JBQW9CLENBQUMsTUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLHdCQUF3QixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxLQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsc0JBQXVCdVksTUg0QjVkK1gsR0FDQS92QixTQUFTMEQsaUJBQWlCLFVBQVdvckIsSUFDckM5dUIsU0FBUzBELGlCQUFpQixZQUFha3NCLE9JekMzQ0ksQ0FBc0IsQ0FDbEJyRyxJQUFLLENBQ0RDLFdBQVkscUNBRWpCN1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL2N1c3RvbS1lbGVtZW50cy9jdXN0b20tZWxlbWVudHMubWluLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tY29udGVudC11aS9kaXN0L2VzbS9pbmRleC1hMmE0N2Y5NS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtdWkvZGlzdC9lc20vdm9jYWJseS1idXR0b25fMTAuZW50cnkuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXVpL2Rpc3QvZXNtLyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMkIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uLy4uL2hlcm1lcy9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtdWkvbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tbWVzc2FnZXMvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L2FwaS5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vbW9kZWwvZGlzdC9lc20vbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L2RldGVjdExhbmd1YWdlLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tY29udGVudC1zY3JpcHQvZGlzdC9wb3B1cC9jb250ZW50cy5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3Qvc3R5bGluZy5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLWNvbnRlbnQtc2NyaXB0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1jb250ZW50LXNjcmlwdC9kaXN0L3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vbW9kZWwvZGlzdC9lc20vY29uc3RhbnRzLmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tY29udGVudC11aS9kaXN0L2VzbS9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4vc3JjL2NvbnRlbnQtc2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xuLypcblxuIENvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmRcbiBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5XG4gYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieVxuIEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVBcbiByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBuPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCxwPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TLGFhPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxiYT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLnByZXBlbmQsY2E9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5hcHBlbmQsZGE9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnByZXBlbmQsZWE9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLmFwcGVuZCxxPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUscj13aW5kb3cuTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsdD13aW5kb3cuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLHU9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLHY9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCx3PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLFxuXCJ0ZXh0Q29udGVudFwiKSx5PXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3csej1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxBPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUsQj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLEM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSxEPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyxFPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyxGPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVOUyxHPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsSD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRIVE1MLGZhPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5wcmVwZW5kLFxuaGE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCxpYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYmVmb3JlLGphPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZnRlcixrYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZVdpdGgsbGE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSxtYT13aW5kb3cuSFRNTEVsZW1lbnQsST1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksbmE9d2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsb2E9d2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEhUTUw7dmFyIHBhPW5ldyBTZXQ7XCJhbm5vdGF0aW9uLXhtbCBjb2xvci1wcm9maWxlIGZvbnQtZmFjZSBmb250LWZhY2Utc3JjIGZvbnQtZmFjZS11cmkgZm9udC1mYWNlLWZvcm1hdCBmb250LWZhY2UtbmFtZSBtaXNzaW5nLWdseXBoXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIHBhLmFkZChhKX0pO2Z1bmN0aW9uIHFhKGEpe3ZhciBiPXBhLmhhcyhhKTthPS9eW2Etel1bLjAtOV9hLXpdKi1bLS4wLTlfYS16XSokLy50ZXN0KGEpO3JldHVybiFiJiZhfXZhciByYT1kb2N1bWVudC5jb250YWlucz9kb2N1bWVudC5jb250YWlucy5iaW5kKGRvY3VtZW50KTpkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMuYmluZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuZnVuY3Rpb24gSihhKXt2YXIgYj1hLmlzQ29ubmVjdGVkO2lmKHZvaWQgMCE9PWIpcmV0dXJuIGI7aWYocmEoYSkpcmV0dXJuITA7Zm9yKDthJiYhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpOylhPWEucGFyZW50Tm9kZXx8KHdpbmRvdy5TaGFkb3dSb290JiZhIGluc3RhbmNlb2YgU2hhZG93Um9vdD9hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hKCFhfHwhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpKX1mdW5jdGlvbiBLKGEpe3ZhciBiPWEuY2hpbGRyZW47aWYoYilyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYik7Yj1bXTtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZiLnB1c2goYSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBMKGEsYil7Zm9yKDtiJiZiIT09YSYmIWIubmV4dFNpYmxpbmc7KWI9Yi5wYXJlbnROb2RlO3JldHVybiBiJiZiIT09YT9iLm5leHRTaWJsaW5nOm51bGx9XG5mdW5jdGlvbiBNKGEsYixjKXtmb3IodmFyIGY9YTtmOyl7aWYoZi5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgZD1mO2IoZCk7dmFyIGU9ZC5sb2NhbE5hbWU7aWYoXCJsaW5rXCI9PT1lJiZcImltcG9ydFwiPT09ZC5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe2Y9ZC5pbXBvcnQ7dm9pZCAwPT09YyYmKGM9bmV3IFNldCk7aWYoZiBpbnN0YW5jZW9mIE5vZGUmJiFjLmhhcyhmKSlmb3IoYy5hZGQoZiksZj1mLmZpcnN0Q2hpbGQ7ZjtmPWYubmV4dFNpYmxpbmcpTShmLGIsYyk7Zj1MKGEsZCk7Y29udGludWV9ZWxzZSBpZihcInRlbXBsYXRlXCI9PT1lKXtmPUwoYSxkKTtjb250aW51ZX1pZihkPWQuX19DRV9zaGFkb3dSb290KWZvcihkPWQuZmlyc3RDaGlsZDtkO2Q9ZC5uZXh0U2libGluZylNKGQsYixjKX1mPWYuZmlyc3RDaGlsZD9mLmZpcnN0Q2hpbGQ6TChhLGYpfX07ZnVuY3Rpb24gTigpe3ZhciBhPSEobnVsbD09PU98fHZvaWQgMD09PU98fCFPLm5vRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciksYj0hKG51bGw9PT1PfHx2b2lkIDA9PT1PfHwhTy5zaGFkeURvbUZhc3RXYWxrKTt0aGlzLm09W107dGhpcy5nPVtdO3RoaXMuaj0hMTt0aGlzLnNoYWR5RG9tRmFzdFdhbGs9Yjt0aGlzLkk9IWF9ZnVuY3Rpb24gUChhLGIsYyxmKXt2YXIgZD13aW5kb3cuU2hhZHlET007aWYoYS5zaGFkeURvbUZhc3RXYWxrJiZkJiZkLmluVXNlKXtpZihiLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJmMoYiksYi5xdWVyeVNlbGVjdG9yQWxsKWZvcihhPWQubmF0aXZlTWV0aG9kcy5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoYixcIipcIiksYj0wO2I8YS5sZW5ndGg7YisrKWMoYVtiXSl9ZWxzZSBNKGIsYyxmKX1mdW5jdGlvbiBzYShhLGIpe2Euaj0hMDthLm0ucHVzaChiKX1mdW5jdGlvbiB0YShhLGIpe2Euaj0hMDthLmcucHVzaChiKX1cbmZ1bmN0aW9uIFEoYSxiKXthLmomJlAoYSxiLGZ1bmN0aW9uKGMpe3JldHVybiBSKGEsYyl9KX1mdW5jdGlvbiBSKGEsYil7aWYoYS5qJiYhYi5fX0NFX3BhdGNoZWQpe2IuX19DRV9wYXRjaGVkPSEwO2Zvcih2YXIgYz0wO2M8YS5tLmxlbmd0aDtjKyspYS5tW2NdKGIpO2ZvcihjPTA7YzxhLmcubGVuZ3RoO2MrKylhLmdbY10oYil9fWZ1bmN0aW9uIFMoYSxiKXt2YXIgYz1bXTtQKGEsYixmdW5jdGlvbihkKXtyZXR1cm4gYy5wdXNoKGQpfSk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGY9Y1tiXTsxPT09Zi5fX0NFX3N0YXRlP2EuY29ubmVjdGVkQ2FsbGJhY2soZik6VChhLGYpfX1mdW5jdGlvbiBVKGEsYil7dmFyIGM9W107UChhLGIsZnVuY3Rpb24oZCl7cmV0dXJuIGMucHVzaChkKX0pO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBmPWNbYl07MT09PWYuX19DRV9zdGF0ZSYmYS5kaXNjb25uZWN0ZWRDYWxsYmFjayhmKX19XG5mdW5jdGlvbiBWKGEsYixjKXtjPXZvaWQgMD09PWM/e306Yzt2YXIgZj1jLkosZD1jLnVwZ3JhZGV8fGZ1bmN0aW9uKGcpe3JldHVybiBUKGEsZyl9LGU9W107UChhLGIsZnVuY3Rpb24oZyl7YS5qJiZSKGEsZyk7aWYoXCJsaW5rXCI9PT1nLmxvY2FsTmFtZSYmXCJpbXBvcnRcIj09PWcuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXt2YXIgaD1nLmltcG9ydDtoIGluc3RhbmNlb2YgTm9kZSYmKGguX19DRV9pc0ltcG9ydERvY3VtZW50PSEwLGguX19DRV9yZWdpc3RyeT1kb2N1bWVudC5fX0NFX3JlZ2lzdHJ5KTtoJiZcImNvbXBsZXRlXCI9PT1oLnJlYWR5U3RhdGU/aC5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQ9ITA6Zy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIGs9Zy5pbXBvcnQ7aWYoIWsuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkKXtrLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZD0hMDt2YXIgbD1uZXcgU2V0O2YmJihmLmZvckVhY2goZnVuY3Rpb24obSl7cmV0dXJuIGwuYWRkKG0pfSksXG5sLmRlbGV0ZShrKSk7VihhLGsse0o6bCx1cGdyYWRlOmR9KX19KX1lbHNlIGUucHVzaChnKX0sZik7Zm9yKGI9MDtiPGUubGVuZ3RoO2IrKylkKGVbYl0pfVxuZnVuY3Rpb24gVChhLGIpe3RyeXt2YXIgYz1iLm93bmVyRG9jdW1lbnQsZj1jLl9fQ0VfcmVnaXN0cnk7dmFyIGQ9ZiYmKGMuZGVmYXVsdFZpZXd8fGMuX19DRV9pc0ltcG9ydERvY3VtZW50KT9XKGYsYi5sb2NhbE5hbWUpOnZvaWQgMDtpZihkJiZ2b2lkIDA9PT1iLl9fQ0Vfc3RhdGUpe2QuY29uc3RydWN0aW9uU3RhY2sucHVzaChiKTt0cnl7dHJ5e2lmKG5ldyBkLmNvbnN0cnVjdG9yRnVuY3Rpb24hPT1iKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yIGRpZCBub3QgcHJvZHVjZSB0aGUgZWxlbWVudCBiZWluZyB1cGdyYWRlZC5cIik7fWZpbmFsbHl7ZC5jb25zdHJ1Y3Rpb25TdGFjay5wb3AoKX19Y2F0Y2goayl7dGhyb3cgYi5fX0NFX3N0YXRlPTIsazt9Yi5fX0NFX3N0YXRlPTE7Yi5fX0NFX2RlZmluaXRpb249ZDtpZihkLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmYi5oYXNBdHRyaWJ1dGVzKCkpe3ZhciBlPWQub2JzZXJ2ZWRBdHRyaWJ1dGVzO1xuZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKyl7dmFyIGc9ZVtkXSxoPWIuZ2V0QXR0cmlidXRlKGcpO251bGwhPT1oJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhiLGcsbnVsbCxoLG51bGwpfX1KKGIpJiZhLmNvbm5lY3RlZENhbGxiYWNrKGIpfX1jYXRjaChrKXtYKGspfX1OLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtpZihiLmNvbm5lY3RlZENhbGxiYWNrKXRyeXtiLmNvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9Y2F0Y2goYyl7WChjKX19O04ucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2lmKGIuZGlzY29ubmVjdGVkQ2FsbGJhY2spdHJ5e2IuZGlzY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKX1jYXRjaChjKXtYKGMpfX07XG5OLnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMsZixkKXt2YXIgZT1hLl9fQ0VfZGVmaW5pdGlvbjtpZihlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmLTE8ZS5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSl0cnl7ZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbChhLGIsYyxmLGQpfWNhdGNoKGcpe1goZyl9fTtcbmZ1bmN0aW9uIHVhKGEsYixjLGYpe3ZhciBkPWIuX19DRV9yZWdpc3RyeTtpZihkJiYobnVsbD09PWZ8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09ZikmJihkPVcoZCxjKSkpdHJ5e3ZhciBlPW5ldyBkLmNvbnN0cnVjdG9yRnVuY3Rpb247aWYodm9pZCAwPT09ZS5fX0NFX3N0YXRlfHx2b2lkIDA9PT1lLl9fQ0VfZGVmaW5pdGlvbil0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1wiK2MrXCInOiBUaGUgcmV0dXJuZWQgdmFsdWUgd2FzIG5vdCBjb25zdHJ1Y3RlZCB3aXRoIHRoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3Rvci5cIik7aWYoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIhPT1lLm5hbWVzcGFjZVVSSSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1wiK2MrXCInOiBUaGUgY29uc3RydWN0ZWQgZWxlbWVudCdzIG5hbWVzcGFjZSBtdXN0IGJlIHRoZSBIVE1MIG5hbWVzcGFjZS5cIik7aWYoZS5oYXNBdHRyaWJ1dGVzKCkpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdcIitcbmMrXCInOiBUaGUgY29uc3RydWN0ZWQgZWxlbWVudCBtdXN0IG5vdCBoYXZlIGFueSBhdHRyaWJ1dGVzLlwiKTtpZihudWxsIT09ZS5maXJzdENoaWxkKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnXCIrYytcIic6IFRoZSBjb25zdHJ1Y3RlZCBlbGVtZW50IG11c3Qgbm90IGhhdmUgYW55IGNoaWxkcmVuLlwiKTtpZihudWxsIT09ZS5wYXJlbnROb2RlKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnXCIrYytcIic6IFRoZSBjb25zdHJ1Y3RlZCBlbGVtZW50IG11c3Qgbm90IGhhdmUgYSBwYXJlbnQgbm9kZS5cIik7aWYoZS5vd25lckRvY3VtZW50IT09Yil0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1wiK2MrXCInOiBUaGUgY29uc3RydWN0ZWQgZWxlbWVudCdzIG93bmVyIGRvY3VtZW50IGlzIGluY29ycmVjdC5cIik7aWYoZS5sb2NhbE5hbWUhPT1jKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnXCIrYytcIic6IFRoZSBjb25zdHJ1Y3RlZCBlbGVtZW50J3MgbG9jYWwgbmFtZSBpcyBpbmNvcnJlY3QuXCIpO1xucmV0dXJuIGV9Y2F0Y2goZyl7cmV0dXJuIFgoZyksYj1udWxsPT09Zj9uLmNhbGwoYixjKTpwLmNhbGwoYixmLGMpLE9iamVjdC5zZXRQcm90b3R5cGVPZihiLEhUTUxVbmtub3duRWxlbWVudC5wcm90b3R5cGUpLGIuX19DRV9zdGF0ZT0yLGIuX19DRV9kZWZpbml0aW9uPXZvaWQgMCxSKGEsYiksYn1iPW51bGw9PT1mP24uY2FsbChiLGMpOnAuY2FsbChiLGYsYyk7UihhLGIpO3JldHVybiBifVxuZnVuY3Rpb24gWChhKXt2YXIgYj1hLm1lc3NhZ2UsYz1hLnNvdXJjZVVSTHx8YS5maWxlTmFtZXx8XCJcIixmPWEubGluZXx8YS5saW5lTnVtYmVyfHwwLGQ9YS5jb2x1bW58fGEuY29sdW1uTnVtYmVyfHwwLGU9dm9pZCAwO3ZvaWQgMD09PUVycm9yRXZlbnQucHJvdG90eXBlLmluaXRFcnJvckV2ZW50P2U9bmV3IEVycm9yRXZlbnQoXCJlcnJvclwiLHtjYW5jZWxhYmxlOiEwLG1lc3NhZ2U6YixmaWxlbmFtZTpjLGxpbmVubzpmLGNvbG5vOmQsZXJyb3I6YX0pOihlPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXJyb3JFdmVudFwiKSxlLmluaXRFcnJvckV2ZW50KFwiZXJyb3JcIiwhMSwhMCxiLGMsZiksZS5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZGVmYXVsdFByZXZlbnRlZFwiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuITB9fSl9KTt2b2lkIDA9PT1lLmVycm9yJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImVycm9yXCIsXG57Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGF9fSk7d2luZG93LmRpc3BhdGNoRXZlbnQoZSk7ZS5kZWZhdWx0UHJldmVudGVkfHxjb25zb2xlLmVycm9yKGEpfTtmdW5jdGlvbiB2YSgpe3ZhciBhPXRoaXM7dGhpcy5nPXZvaWQgMDt0aGlzLkY9bmV3IFByb21pc2UoZnVuY3Rpb24oYil7YS5sPWJ9KX12YS5wcm90b3R5cGUucmVzb2x2ZT1mdW5jdGlvbihhKXtpZih0aGlzLmcpdGhyb3cgRXJyb3IoXCJBbHJlYWR5IHJlc29sdmVkLlwiKTt0aGlzLmc9YTt0aGlzLmwoYSl9O2Z1bmN0aW9uIHdhKGEpe3ZhciBiPWRvY3VtZW50O3RoaXMubD12b2lkIDA7dGhpcy5oPWE7dGhpcy5nPWI7Vih0aGlzLmgsdGhpcy5nKTtcImxvYWRpbmdcIj09PXRoaXMuZy5yZWFkeVN0YXRlJiYodGhpcy5sPW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuRy5iaW5kKHRoaXMpKSx0aGlzLmwub2JzZXJ2ZSh0aGlzLmcse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpfWZ1bmN0aW9uIHhhKGEpe2EubCYmYS5sLmRpc2Nvbm5lY3QoKX13YS5wcm90b3R5cGUuRz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmcucmVhZHlTdGF0ZTtcImludGVyYWN0aXZlXCIhPT1iJiZcImNvbXBsZXRlXCIhPT1ifHx4YSh0aGlzKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKWZvcih2YXIgYz1hW2JdLmFkZGVkTm9kZXMsZj0wO2Y8Yy5sZW5ndGg7ZisrKVYodGhpcy5oLGNbZl0pfTtmdW5jdGlvbiBZKGEpe3RoaXMucz1uZXcgTWFwO3RoaXMudT1uZXcgTWFwO3RoaXMuQz1uZXcgTWFwO3RoaXMuQT0hMTt0aGlzLkI9bmV3IE1hcDt0aGlzLm89ZnVuY3Rpb24oYil7cmV0dXJuIGIoKX07dGhpcy5pPSExO3RoaXMudj1bXTt0aGlzLmg9YTt0aGlzLkQ9YS5JP25ldyB3YShhKTp2b2lkIDB9WS5wcm90b3R5cGUuSD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7aWYoIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvciBnZXR0ZXJzIG11c3QgYmUgZnVuY3Rpb25zLlwiKTt5YSh0aGlzLGEpO3RoaXMucy5zZXQoYSxiKTt0aGlzLnYucHVzaChhKTt0aGlzLml8fCh0aGlzLmk9ITAsdGhpcy5vKGZ1bmN0aW9uKCl7cmV0dXJuIHphKGMpfSkpfTtcblkucHJvdG90eXBlLmRlZmluZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7aWYoIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuXCIpO3lhKHRoaXMsYSk7QWEodGhpcyxhLGIpO3RoaXMudi5wdXNoKGEpO3RoaXMuaXx8KHRoaXMuaT0hMCx0aGlzLm8oZnVuY3Rpb24oKXtyZXR1cm4gemEoYyl9KSl9O2Z1bmN0aW9uIHlhKGEsYil7aWYoIXFhKGIpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBlbGVtZW50IG5hbWUgJ1wiK2IrXCInIGlzIG5vdCB2YWxpZC5cIik7aWYoVyhhLGIpKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCB3aXRoIG5hbWUgJ1wiKyhiK1wiJyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpKTtpZihhLkEpdGhyb3cgRXJyb3IoXCJBIGN1c3RvbSBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgZGVmaW5lZC5cIik7fVxuZnVuY3Rpb24gQWEoYSxiLGMpe2EuQT0hMDt2YXIgZjt0cnl7dmFyIGQ9Yy5wcm90b3R5cGU7aWYoIShkIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yJ3MgcHJvdG90eXBlIGlzIG5vdCBhbiBvYmplY3QuXCIpO3ZhciBlPWZ1bmN0aW9uKG0pe3ZhciB4PWRbbV07aWYodm9pZCAwIT09eCYmISh4IGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IEVycm9yKFwiVGhlICdcIittK1wiJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO3JldHVybiB4fTt2YXIgZz1lKFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIGg9ZShcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBrPWUoXCJhZG9wdGVkQ2FsbGJhY2tcIik7dmFyIGw9KGY9ZShcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiKSkmJmMub2JzZXJ2ZWRBdHRyaWJ1dGVzfHxbXX1jYXRjaChtKXt0aHJvdyBtO31maW5hbGx5e2EuQT0hMX1jPXtsb2NhbE5hbWU6YixcbmNvbnN0cnVjdG9yRnVuY3Rpb246Yyxjb25uZWN0ZWRDYWxsYmFjazpnLGRpc2Nvbm5lY3RlZENhbGxiYWNrOmgsYWRvcHRlZENhbGxiYWNrOmssYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOmYsb2JzZXJ2ZWRBdHRyaWJ1dGVzOmwsY29uc3RydWN0aW9uU3RhY2s6W119O2EudS5zZXQoYixjKTthLkMuc2V0KGMuY29uc3RydWN0b3JGdW5jdGlvbixjKTtyZXR1cm4gY31ZLnByb3RvdHlwZS51cGdyYWRlPWZ1bmN0aW9uKGEpe1YodGhpcy5oLGEpfTtcbmZ1bmN0aW9uIHphKGEpe2lmKCExIT09YS5pKXthLmk9ITE7Zm9yKHZhciBiPVtdLGM9YS52LGY9bmV3IE1hcCxkPTA7ZDxjLmxlbmd0aDtkKyspZi5zZXQoY1tkXSxbXSk7VihhLmgsZG9jdW1lbnQse3VwZ3JhZGU6ZnVuY3Rpb24oayl7aWYodm9pZCAwPT09ay5fX0NFX3N0YXRlKXt2YXIgbD1rLmxvY2FsTmFtZSxtPWYuZ2V0KGwpO20/bS5wdXNoKGspOmEudS5oYXMobCkmJmIucHVzaChrKX19fSk7Zm9yKGQ9MDtkPGIubGVuZ3RoO2QrKylUKGEuaCxiW2RdKTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKXtmb3IodmFyIGU9Y1tkXSxnPWYuZ2V0KGUpLGg9MDtoPGcubGVuZ3RoO2grKylUKGEuaCxnW2hdKTsoZT1hLkIuZ2V0KGUpKSYmZS5yZXNvbHZlKHZvaWQgMCl9Yy5sZW5ndGg9MH19WS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2lmKGE9Vyh0aGlzLGEpKXJldHVybiBhLmNvbnN0cnVjdG9yRnVuY3Rpb259O1xuWS5wcm90b3R5cGUud2hlbkRlZmluZWQ9ZnVuY3Rpb24oYSl7aWYoIXFhKGEpKXJldHVybiBQcm9taXNlLnJlamVjdChuZXcgU3ludGF4RXJyb3IoXCInXCIrYStcIicgaXMgbm90IGEgdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZS5cIikpO3ZhciBiPXRoaXMuQi5nZXQoYSk7aWYoYilyZXR1cm4gYi5GO2I9bmV3IHZhO3RoaXMuQi5zZXQoYSxiKTt2YXIgYz10aGlzLnUuaGFzKGEpfHx0aGlzLnMuaGFzKGEpO2E9LTE9PT10aGlzLnYuaW5kZXhPZihhKTtjJiZhJiZiLnJlc29sdmUodm9pZCAwKTtyZXR1cm4gYi5GfTtZLnByb3RvdHlwZS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrPWZ1bmN0aW9uKGEpe3RoaXMuRCYmeGEodGhpcy5EKTt2YXIgYj10aGlzLm87dGhpcy5vPWZ1bmN0aW9uKGMpe3JldHVybiBhKGZ1bmN0aW9uKCl7cmV0dXJuIGIoYyl9KX19O1xuZnVuY3Rpb24gVyhhLGIpe3ZhciBjPWEudS5nZXQoYik7aWYoYylyZXR1cm4gYztpZihjPWEucy5nZXQoYikpe2Eucy5kZWxldGUoYik7dHJ5e3JldHVybiBBYShhLGIsYygpKX1jYXRjaChmKXtYKGYpfX19d2luZG93LkN1c3RvbUVsZW1lbnRSZWdpc3RyeT1ZO1kucHJvdG90eXBlLmRlZmluZT1ZLnByb3RvdHlwZS5kZWZpbmU7WS5wcm90b3R5cGUudXBncmFkZT1ZLnByb3RvdHlwZS51cGdyYWRlO1kucHJvdG90eXBlLmdldD1ZLnByb3RvdHlwZS5nZXQ7WS5wcm90b3R5cGUud2hlbkRlZmluZWQ9WS5wcm90b3R5cGUud2hlbkRlZmluZWQ7WS5wcm90b3R5cGUucG9seWZpbGxEZWZpbmVMYXp5PVkucHJvdG90eXBlLkg7WS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz1ZLnByb3RvdHlwZS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrO2Z1bmN0aW9uIFooYSxiLGMpe2Z1bmN0aW9uIGYoZCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgZz1bXSxoPTA7aDxhcmd1bWVudHMubGVuZ3RoOysraClnW2hdPWFyZ3VtZW50c1toXTtoPVtdO2Zvcih2YXIgaz1bXSxsPTA7bDxnLmxlbmd0aDtsKyspe3ZhciBtPWdbbF07bSBpbnN0YW5jZW9mIEVsZW1lbnQmJkoobSkmJmsucHVzaChtKTtpZihtIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IobT1tLmZpcnN0Q2hpbGQ7bTttPW0ubmV4dFNpYmxpbmcpaC5wdXNoKG0pO2Vsc2UgaC5wdXNoKG0pfWQuYXBwbHkodGhpcyxnKTtmb3IoZz0wO2c8ay5sZW5ndGg7ZysrKVUoYSxrW2ddKTtpZihKKHRoaXMpKWZvcihnPTA7ZzxoLmxlbmd0aDtnKyspaz1oW2ddLGsgaW5zdGFuY2VvZiBFbGVtZW50JiZTKGEsayl9fXZvaWQgMCE9PWMucHJlcGVuZCYmKGIucHJlcGVuZD1mKGMucHJlcGVuZCkpO3ZvaWQgMCE9PWMuYXBwZW5kJiYoYi5hcHBlbmQ9ZihjLmFwcGVuZCkpfTtmdW5jdGlvbiBCYShhKXtEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudD1mdW5jdGlvbihiKXtyZXR1cm4gdWEoYSx0aGlzLGIsbnVsbCl9O0RvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlPWZ1bmN0aW9uKGIsYyl7Yj1hYS5jYWxsKHRoaXMsYiwhIWMpO3RoaXMuX19DRV9yZWdpc3RyeT9WKGEsYik6UShhLGIpO3JldHVybiBifTtEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIHVhKGEsdGhpcyxjLGIpfTtaKGEsRG9jdW1lbnQucHJvdG90eXBlLHtwcmVwZW5kOmJhLGFwcGVuZDpjYX0pfTtmdW5jdGlvbiBDYShhKXtmdW5jdGlvbiBiKGYpe3JldHVybiBmdW5jdGlvbihkKXtmb3IodmFyIGU9W10sZz0wO2c8YXJndW1lbnRzLmxlbmd0aDsrK2cpZVtnXT1hcmd1bWVudHNbZ107Zz1bXTtmb3IodmFyIGg9W10saz0wO2s8ZS5sZW5ndGg7aysrKXt2YXIgbD1lW2tdO2wgaW5zdGFuY2VvZiBFbGVtZW50JiZKKGwpJiZoLnB1c2gobCk7aWYobCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGw9bC5maXJzdENoaWxkO2w7bD1sLm5leHRTaWJsaW5nKWcucHVzaChsKTtlbHNlIGcucHVzaChsKX1mLmFwcGx5KHRoaXMsZSk7Zm9yKGU9MDtlPGgubGVuZ3RoO2UrKylVKGEsaFtlXSk7aWYoSih0aGlzKSlmb3IoZT0wO2U8Zy5sZW5ndGg7ZSsrKWg9Z1tlXSxoIGluc3RhbmNlb2YgRWxlbWVudCYmUyhhLGgpfX12YXIgYz1FbGVtZW50LnByb3RvdHlwZTt2b2lkIDAhPT1pYSYmKGMuYmVmb3JlPWIoaWEpKTt2b2lkIDAhPT1qYSYmKGMuYWZ0ZXI9YihqYSkpO3ZvaWQgMCE9PWthJiZcbihjLnJlcGxhY2VXaXRoPWZ1bmN0aW9uKGYpe2Zvcih2YXIgZD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoOysrZSlkW2VdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgZz1bXSxoPTA7aDxkLmxlbmd0aDtoKyspe3ZhciBrPWRbaF07ayBpbnN0YW5jZW9mIEVsZW1lbnQmJkooaykmJmcucHVzaChrKTtpZihrIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3Ioaz1rLmZpcnN0Q2hpbGQ7aztrPWsubmV4dFNpYmxpbmcpZS5wdXNoKGspO2Vsc2UgZS5wdXNoKGspfWg9Sih0aGlzKTtrYS5hcHBseSh0aGlzLGQpO2ZvcihkPTA7ZDxnLmxlbmd0aDtkKyspVShhLGdbZF0pO2lmKGgpZm9yKFUoYSx0aGlzKSxkPTA7ZDxlLmxlbmd0aDtkKyspZz1lW2RdLGcgaW5zdGFuY2VvZiBFbGVtZW50JiZTKGEsZyl9KTt2b2lkIDAhPT1sYSYmKGMucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGY9Sih0aGlzKTtsYS5jYWxsKHRoaXMpO2YmJlUoYSx0aGlzKX0pfTtmdW5jdGlvbiBEYShhKXtmdW5jdGlvbiBiKGQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGQsXCJpbm5lckhUTUxcIix7ZW51bWVyYWJsZTplLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDplLmdldCxzZXQ6ZnVuY3Rpb24oZyl7dmFyIGg9dGhpcyxrPXZvaWQgMDtKKHRoaXMpJiYoaz1bXSxQKGEsdGhpcyxmdW5jdGlvbih4KXt4IT09aCYmay5wdXNoKHgpfSkpO2Uuc2V0LmNhbGwodGhpcyxnKTtpZihrKWZvcih2YXIgbD0wO2w8ay5sZW5ndGg7bCsrKXt2YXIgbT1rW2xdOzE9PT1tLl9fQ0Vfc3RhdGUmJmEuZGlzY29ubmVjdGVkQ2FsbGJhY2sobSl9dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfcmVnaXN0cnk/VihhLHRoaXMpOlEoYSx0aGlzKTtyZXR1cm4gZ319KX1mdW5jdGlvbiBjKGQsZSl7ZC5pbnNlcnRBZGphY2VudEVsZW1lbnQ9ZnVuY3Rpb24oZyxoKXt2YXIgaz1KKGgpO2c9ZS5jYWxsKHRoaXMsZyxoKTtrJiZVKGEsaCk7SihnKSYmUyhhLGgpO3JldHVybiBnfX1mdW5jdGlvbiBmKGQsXG5lKXtmdW5jdGlvbiBnKGgsayl7Zm9yKHZhciBsPVtdO2ghPT1rO2g9aC5uZXh0U2libGluZylsLnB1c2goaCk7Zm9yKGs9MDtrPGwubGVuZ3RoO2srKylWKGEsbFtrXSl9ZC5pbnNlcnRBZGphY2VudEhUTUw9ZnVuY3Rpb24oaCxrKXtoPWgudG9Mb3dlckNhc2UoKTtpZihcImJlZm9yZWJlZ2luXCI9PT1oKXt2YXIgbD10aGlzLnByZXZpb3VzU2libGluZztlLmNhbGwodGhpcyxoLGspO2cobHx8dGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQsdGhpcyl9ZWxzZSBpZihcImFmdGVyYmVnaW5cIj09PWgpbD10aGlzLmZpcnN0Q2hpbGQsZS5jYWxsKHRoaXMsaCxrKSxnKHRoaXMuZmlyc3RDaGlsZCxsKTtlbHNlIGlmKFwiYmVmb3JlZW5kXCI9PT1oKWw9dGhpcy5sYXN0Q2hpbGQsZS5jYWxsKHRoaXMsaCxrKSxnKGx8fHRoaXMuZmlyc3RDaGlsZCxudWxsKTtlbHNlIGlmKFwiYWZ0ZXJlbmRcIj09PWgpbD10aGlzLm5leHRTaWJsaW5nLGUuY2FsbCh0aGlzLGgsayksZyh0aGlzLm5leHRTaWJsaW5nLGwpO1xuZWxzZSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgdmFsdWUgcHJvdmlkZWQgKFwiK1N0cmluZyhoKStcIikgaXMgbm90IG9uZSBvZiAnYmVmb3JlYmVnaW4nLCAnYWZ0ZXJiZWdpbicsICdiZWZvcmVlbmQnLCBvciAnYWZ0ZXJlbmQnLlwiKTt9fXkmJihFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3c9ZnVuY3Rpb24oZCl7ZD15LmNhbGwodGhpcyxkKTtpZihhLmomJiFkLl9fQ0VfcGF0Y2hlZCl7ZC5fX0NFX3BhdGNoZWQ9ITA7Zm9yKHZhciBlPTA7ZTxhLm0ubGVuZ3RoO2UrKylhLm1bZV0oZCl9cmV0dXJuIHRoaXMuX19DRV9zaGFkb3dSb290PWR9KTt6JiZ6LmdldD9iKEVsZW1lbnQucHJvdG90eXBlLHopOkkmJkkuZ2V0P2IoSFRNTEVsZW1lbnQucHJvdG90eXBlLEkpOnRhKGEsZnVuY3Rpb24oZCl7YihkLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcS5jYWxsKHRoaXMsITApLmlubmVySFRNTH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciBnPVxuXCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWUsaD1nP3RoaXMuY29udGVudDp0aGlzLGs9cC5jYWxsKGRvY3VtZW50LHRoaXMubmFtZXNwYWNlVVJJLHRoaXMubG9jYWxOYW1lKTtmb3Ioay5pbm5lckhUTUw9ZTswPGguY2hpbGROb2Rlcy5sZW5ndGg7KXUuY2FsbChoLGguY2hpbGROb2Rlc1swXSk7Zm9yKGU9Zz9rLmNvbnRlbnQ6azswPGUuY2hpbGROb2Rlcy5sZW5ndGg7KXIuY2FsbChoLGUuY2hpbGROb2Rlc1swXSl9fSl9KTtFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGU9ZnVuY3Rpb24oZCxlKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBCLmNhbGwodGhpcyxkLGUpO3ZhciBnPUEuY2FsbCh0aGlzLGQpO0IuY2FsbCh0aGlzLGQsZSk7ZT1BLmNhbGwodGhpcyxkKTthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGQsZyxlLG51bGwpfTtFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUz1mdW5jdGlvbihkLGUsZyl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gRS5jYWxsKHRoaXMsXG5kLGUsZyk7dmFyIGg9RC5jYWxsKHRoaXMsZCxlKTtFLmNhbGwodGhpcyxkLGUsZyk7Zz1ELmNhbGwodGhpcyxkLGUpO2EuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsZSxoLGcsZCl9O0VsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZT1mdW5jdGlvbihkKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBDLmNhbGwodGhpcyxkKTt2YXIgZT1BLmNhbGwodGhpcyxkKTtDLmNhbGwodGhpcyxkKTtudWxsIT09ZSYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxkLGUsbnVsbCxudWxsKX07RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlM9ZnVuY3Rpb24oZCxlKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBGLmNhbGwodGhpcyxkLGUpO3ZhciBnPUQuY2FsbCh0aGlzLGQsZSk7Ri5jYWxsKHRoaXMsZCxlKTt2YXIgaD1ELmNhbGwodGhpcyxkLGUpO2chPT1oJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGUsZyxoLGQpfTtcbm5hP2MoSFRNTEVsZW1lbnQucHJvdG90eXBlLG5hKTpHJiZjKEVsZW1lbnQucHJvdG90eXBlLEcpO29hP2YoSFRNTEVsZW1lbnQucHJvdG90eXBlLG9hKTpIJiZmKEVsZW1lbnQucHJvdG90eXBlLEgpO1ooYSxFbGVtZW50LnByb3RvdHlwZSx7cHJlcGVuZDpmYSxhcHBlbmQ6aGF9KTtDYShhKX07dmFyIEVhPXt9O2Z1bmN0aW9uIEZhKGEpe2Z1bmN0aW9uIGIoKXt2YXIgYz10aGlzLmNvbnN0cnVjdG9yO3ZhciBmPWRvY3VtZW50Ll9fQ0VfcmVnaXN0cnkuQy5nZXQoYyk7aWYoIWYpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0IGEgY3VzdG9tIGVsZW1lbnQ6IFRoZSBjb25zdHJ1Y3RvciB3YXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgY3VzdG9tRWxlbWVudHNgLlwiKTt2YXIgZD1mLmNvbnN0cnVjdGlvblN0YWNrO2lmKDA9PT1kLmxlbmd0aClyZXR1cm4gZD1uLmNhbGwoZG9jdW1lbnQsZi5sb2NhbE5hbWUpLE9iamVjdC5zZXRQcm90b3R5cGVPZihkLGMucHJvdG90eXBlKSxkLl9fQ0Vfc3RhdGU9MSxkLl9fQ0VfZGVmaW5pdGlvbj1mLFIoYSxkKSxkO3ZhciBlPWQubGVuZ3RoLTEsZz1kW2VdO2lmKGc9PT1FYSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1wiK2YubG9jYWxOYW1lK1wiJzogVGhpcyBlbGVtZW50IHdhcyBhbHJlYWR5IGNvbnN0cnVjdGVkLlwiKTtkW2VdPUVhO1xuT2JqZWN0LnNldFByb3RvdHlwZU9mKGcsYy5wcm90b3R5cGUpO1IoYSxnKTtyZXR1cm4gZ31iLnByb3RvdHlwZT1tYS5wcm90b3R5cGU7T2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImNvbnN0cnVjdG9yXCIse3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOmJ9KTt3aW5kb3cuSFRNTEVsZW1lbnQ9Yn07ZnVuY3Rpb24gR2EoYSl7ZnVuY3Rpb24gYihjLGYpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShjLFwidGV4dENvbnRlbnRcIix7ZW51bWVyYWJsZTpmLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpmLmdldCxzZXQ6ZnVuY3Rpb24oZCl7aWYodGhpcy5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFKWYuc2V0LmNhbGwodGhpcyxkKTtlbHNle3ZhciBlPXZvaWQgMDtpZih0aGlzLmZpcnN0Q2hpbGQpe3ZhciBnPXRoaXMuY2hpbGROb2RlcyxoPWcubGVuZ3RoO2lmKDA8aCYmSih0aGlzKSl7ZT1BcnJheShoKTtmb3IodmFyIGs9MDtrPGg7aysrKWVba109Z1trXX19Zi5zZXQuY2FsbCh0aGlzLGQpO2lmKGUpZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKylVKGEsZVtkXSl9fX0pfU5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZT1mdW5jdGlvbihjLGYpe2lmKGMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgZD1LKGMpO2M9dC5jYWxsKHRoaXMsYyxmKTtpZihKKHRoaXMpKWZvcihmPVxuMDtmPGQubGVuZ3RoO2YrKylTKGEsZFtmXSk7cmV0dXJuIGN9ZD1jIGluc3RhbmNlb2YgRWxlbWVudCYmSihjKTtmPXQuY2FsbCh0aGlzLGMsZik7ZCYmVShhLGMpO0oodGhpcykmJlMoYSxjKTtyZXR1cm4gZn07Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQ9ZnVuY3Rpb24oYyl7aWYoYyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBmPUsoYyk7Yz1yLmNhbGwodGhpcyxjKTtpZihKKHRoaXMpKWZvcih2YXIgZD0wO2Q8Zi5sZW5ndGg7ZCsrKVMoYSxmW2RdKTtyZXR1cm4gY31mPWMgaW5zdGFuY2VvZiBFbGVtZW50JiZKKGMpO2Q9ci5jYWxsKHRoaXMsYyk7ZiYmVShhLGMpO0oodGhpcykmJlMoYSxjKTtyZXR1cm4gZH07Tm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlPWZ1bmN0aW9uKGMpe2M9cS5jYWxsKHRoaXMsISFjKTt0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9yZWdpc3RyeT9WKGEsYyk6UShhLGMpO3JldHVybiBjfTtOb2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZD1mdW5jdGlvbihjKXt2YXIgZj1cbmMgaW5zdGFuY2VvZiBFbGVtZW50JiZKKGMpLGQ9dS5jYWxsKHRoaXMsYyk7ZiYmVShhLGMpO3JldHVybiBkfTtOb2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQ9ZnVuY3Rpb24oYyxmKXtpZihjIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGQ9SyhjKTtjPXYuY2FsbCh0aGlzLGMsZik7aWYoSih0aGlzKSlmb3IoVShhLGYpLGY9MDtmPGQubGVuZ3RoO2YrKylTKGEsZFtmXSk7cmV0dXJuIGN9ZD1jIGluc3RhbmNlb2YgRWxlbWVudCYmSihjKTt2YXIgZT12LmNhbGwodGhpcyxjLGYpLGc9Sih0aGlzKTtnJiZVKGEsZik7ZCYmVShhLGMpO2cmJlMoYSxjKTtyZXR1cm4gZX07dyYmdy5nZXQ/YihOb2RlLnByb3RvdHlwZSx3KTpzYShhLGZ1bmN0aW9uKGMpe2IoYyx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7Zm9yKHZhciBmPVtdLGQ9dGhpcy5maXJzdENoaWxkO2Q7ZD1kLm5leHRTaWJsaW5nKWQubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSYmXG5mLnB1c2goZC50ZXh0Q29udGVudCk7cmV0dXJuIGYuam9pbihcIlwiKX0sc2V0OmZ1bmN0aW9uKGYpe2Zvcig7dGhpcy5maXJzdENoaWxkOyl1LmNhbGwodGhpcyx0aGlzLmZpcnN0Q2hpbGQpO251bGwhPWYmJlwiXCIhPT1mJiZyLmNhbGwodGhpcyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmKSl9fSl9KX07dmFyIE89d2luZG93LmN1c3RvbUVsZW1lbnRzO2Z1bmN0aW9uIEhhKCl7dmFyIGE9bmV3IE47RmEoYSk7QmEoYSk7WihhLERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLHtwcmVwZW5kOmRhLGFwcGVuZDplYX0pO0dhKGEpO0RhKGEpO2E9bmV3IFkoYSk7ZG9jdW1lbnQuX19DRV9yZWdpc3RyeT1hO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csXCJjdXN0b21FbGVtZW50c1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTphfSl9TyYmIU8uZm9yY2VQb2x5ZmlsbCYmXCJmdW5jdGlvblwiPT10eXBlb2YgTy5kZWZpbmUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIE8uZ2V0fHxIYSgpO3dpbmRvdy5fX0NFX2luc3RhbGxQb2x5ZmlsbD1IYTtcbn0pLmNhbGwoc2VsZik7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1lbGVtZW50cy5taW4uanMubWFwXG4iLCJjb25zdCBOQU1FU1BBQ0UgPSAnZXh0ZW5zaW9uLWNvbnRlbnQtdWknO1xuXG5sZXQgc2NvcGVJZDtcbmxldCBob3N0VGFnTmFtZTtcbmxldCBpc1N2Z01vZGUgPSBmYWxzZTtcbmxldCBxdWV1ZVBlbmRpbmcgPSBmYWxzZTtcbmNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5jb25zdCBkb2MgPSB3aW4uZG9jdW1lbnQgfHwgeyBoZWFkOiB7fSB9O1xuY29uc3QgcGx0ID0ge1xuICAgICRmbGFncyQ6IDAsXG4gICAgJHJlc291cmNlc1VybCQ6ICcnLFxuICAgIGptcDogKGgpID0+IGgoKSxcbiAgICByYWY6IChoKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaCksXG4gICAgYWVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gICAgcmVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gICAgY2U6IChldmVudE5hbWUsIG9wdHMpID0+IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIG9wdHMpLFxufTtcbmNvbnN0IHByb21pc2VSZXNvbHZlID0gKHYpID0+IFByb21pc2UucmVzb2x2ZSh2KTtcbmNvbnN0IHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzID0gLypAX19QVVJFX18qLyAoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgbmV3IENTU1N0eWxlU2hlZXQoKS5yZXBsYWNlU3luYyA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSgpXG4gICAgO1xuY29uc3QgSFlEUkFURURfQ1NTID0gJ3t2aXNpYmlsaXR5OmhpZGRlbn0uaHlkcmF0ZWR7dmlzaWJpbGl0eTppbmhlcml0fSc7XG5jb25zdCBjcmVhdGVUaW1lID0gKGZuTmFtZSwgdGFnTmFtZSA9ICcnKSA9PiB7XG4gICAge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCB1bmlxdWVUaW1lID0gKGtleSwgbWVhc3VyZVRleHQpID0+IHtcbiAgICB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IHJvb3RBcHBsaWVkU3R5bGVzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyU3R5bGUgPSAoc2NvcGVJZCwgY3NzVGV4dCwgYWxsb3dDUykgPT4ge1xuICAgIGxldCBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZCk7XG4gICAgaWYgKHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzICYmIGFsbG93Q1MpIHtcbiAgICAgICAgc3R5bGUgPSAoc3R5bGUgfHwgbmV3IENTU1N0eWxlU2hlZXQoKSk7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHlsZSA9IGNzc1RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5yZXBsYWNlU3luYyhjc3NUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBjc3NUZXh0O1xuICAgIH1cbiAgICBzdHlsZXMuc2V0KHNjb3BlSWQsIHN0eWxlKTtcbn07XG5jb25zdCBhZGRTdHlsZSA9IChzdHlsZUNvbnRhaW5lck5vZGUsIGNtcE1ldGEsIG1vZGUsIGhvc3RFbG0pID0+IHtcbiAgICBsZXQgc2NvcGVJZCA9IGdldFNjb3BlSWQoY21wTWV0YSk7XG4gICAgY29uc3Qgc3R5bGUgPSBzdHlsZXMuZ2V0KHNjb3BlSWQpO1xuICAgIC8vIGlmIGFuIGVsZW1lbnQgaXMgTk9UIGNvbm5lY3RlZCB0aGVuIGdldFJvb3ROb2RlKCkgd2lsbCByZXR1cm4gdGhlIHdyb25nIHJvb3Qgbm9kZVxuICAgIC8vIHNvIHRoZSBmYWxsYmFjayBpcyB0byBhbHdheXMgdXNlIHRoZSBkb2N1bWVudCBmb3IgdGhlIHJvb3Qgbm9kZSBpbiB0aG9zZSBjYXNlc1xuICAgIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5ub2RlVHlwZSA9PT0gMTEgLyogRG9jdW1lbnRGcmFnbWVudCAqLyA/IHN0eWxlQ29udGFpbmVyTm9kZSA6IGRvYztcbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5oZWFkIHx8IHN0eWxlQ29udGFpbmVyTm9kZTtcbiAgICAgICAgICAgIGxldCBhcHBsaWVkU3R5bGVzID0gcm9vdEFwcGxpZWRTdHlsZXMuZ2V0KHN0eWxlQ29udGFpbmVyTm9kZSk7XG4gICAgICAgICAgICBsZXQgc3R5bGVFbG07XG4gICAgICAgICAgICBpZiAoIWFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICByb290QXBwbGllZFN0eWxlcy5zZXQoc3R5bGVDb250YWluZXJOb2RlLCAoYXBwbGllZFN0eWxlcyA9IG5ldyBTZXQoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0gPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5pbnNlcnRCZWZvcmUoc3R5bGVFbG0sIHN0eWxlQ29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKCdsaW5rJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkU3R5bGVzLmFkZChzY29wZUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMuaW5jbHVkZXMoc3R5bGUpKSB7XG4gICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzID0gWy4uLnN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMsIHN0eWxlXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2NvcGVJZDtcbn07XG5jb25zdCBhdHRhY2hTdHlsZXMgPSAoaG9zdFJlZikgPT4ge1xuICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gICAgY29uc3QgZmxhZ3MgPSBjbXBNZXRhLiRmbGFncyQ7XG4gICAgY29uc3QgZW5kQXR0YWNoU3R5bGVzID0gY3JlYXRlVGltZSgnYXR0YWNoU3R5bGVzJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgIGNvbnN0IHNjb3BlSWQgPSBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCA/IGVsbS5zaGFkb3dSb290IDogZWxtLmdldFJvb3ROb2RlKCksIGNtcE1ldGEpO1xuICAgIGlmIChmbGFncyAmIDEwIC8qIG5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAvLyBvbmx5IHJlcXVpcmVkIHdoZW4gd2UncmUgTk9UIHVzaW5nIG5hdGl2ZSBzaGFkb3cgZG9tIChzbG90KVxuICAgICAgICAvLyBvciB0aGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZSBzaGFkb3cgZG9tXG4gICAgICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAgICAgLy8gbGV0J3MgcGljayBvdXQgdGhlIGlubmVyIGNvbnRlbnQgZm9yIHNsb3QgcHJvamVjdGlvblxuICAgICAgICAvLyBjcmVhdGUgYSBub2RlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgb3JpZ2luYWxcbiAgICAgICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICAgICAgLy8gRE9NIFdSSVRFISFcbiAgICAgICAgZWxtWydzLXNjJ10gPSBzY29wZUlkO1xuICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1oJyk7XG4gICAgfVxuICAgIGVuZEF0dGFjaFN0eWxlcygpO1xufTtcbmNvbnN0IGdldFNjb3BlSWQgPSAoY21wLCBtb2RlKSA9PiAnc2MtJyArIChjbXAuJHRhZ05hbWUkKTtcbi8qKlxuICogRGVmYXVsdCBzdHlsZSBtb2RlIGlkXG4gKi9cbi8qKlxuICogUmV1c2FibGUgZW1wdHkgb2JqL2FycmF5XG4gKiBEb24ndCBhZGQgdmFsdWVzIHRvIHRoZXNlISFcbiAqL1xuY29uc3QgRU1QVFlfT0JKID0ge307XG4vKipcbiAqIE5hbWVzcGFjZXNcbiAqL1xuY29uc3QgU1ZHX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmNvbnN0IEhUTUxfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5jb25zdCBpc0RlZiA9ICh2KSA9PiB2ICE9IG51bGw7XG5jb25zdCBpc0NvbXBsZXhUeXBlID0gKG8pID0+IHtcbiAgICAvLyBodHRwczovL2pzcGVyZi5jb20vdHlwZW9mLWZuLW9iamVjdC81XG4gICAgbyA9IHR5cGVvZiBvO1xuICAgIHJldHVybiBvID09PSAnb2JqZWN0JyB8fCBvID09PSAnZnVuY3Rpb24nO1xufTtcbi8qKlxuICogUHJvZHVjdGlvbiBoKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbi8vIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGgobm9kZU5hbWU6IHN0cmluZyB8IGQuRnVuY3Rpb25hbENvbXBvbmVudCwgdm5vZGVEYXRhOiBkLlByb3BzVHlwZSwgY2hpbGQ/OiBkLkNoaWxkVHlwZSk6IGQuVk5vZGU7XG4vLyBleHBvcnQgZnVuY3Rpb24gaChub2RlTmFtZTogc3RyaW5nIHwgZC5GdW5jdGlvbmFsQ29tcG9uZW50LCB2bm9kZURhdGE6IGQuUHJvcHNUeXBlLCAuLi5jaGlsZHJlbjogZC5DaGlsZFR5cGVbXSk6IGQuVk5vZGU7XG5jb25zdCBoID0gKG5vZGVOYW1lLCB2bm9kZURhdGEsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgbGV0IGNoaWxkID0gbnVsbDtcbiAgICBsZXQgc2ltcGxlID0gZmFsc2U7XG4gICAgbGV0IGxhc3RTaW1wbGUgPSBmYWxzZTtcbiAgICBjb25zdCB2Tm9kZUNoaWxkcmVuID0gW107XG4gICAgY29uc3Qgd2FsayA9IChjKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hpbGQgPSBjW2ldO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgd2FsayhjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZCAhPSBudWxsICYmIHR5cGVvZiBjaGlsZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzaW1wbGUgPSB0eXBlb2Ygbm9kZU5hbWUgIT09ICdmdW5jdGlvbicgJiYgIWlzQ29tcGxleFR5cGUoY2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaW1wbGUgJiYgbGFzdFNpbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJldmlvdXMgY2hpbGQgd2FzIHNpbXBsZSAoc3RyaW5nKSwgd2UgbWVyZ2UgYm90aFxuICAgICAgICAgICAgICAgICAgICB2Tm9kZUNoaWxkcmVuW3ZOb2RlQ2hpbGRyZW4ubGVuZ3RoIC0gMV0uJHRleHQkICs9IGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwZW5kIGEgbmV3IHZOb2RlLCBpZiBpdCdzIHRleHQsIHdlIGNyZWF0ZSBhIHRleHQgdk5vZGVcbiAgICAgICAgICAgICAgICAgICAgdk5vZGVDaGlsZHJlbi5wdXNoKHNpbXBsZSA/IG5ld1ZOb2RlKG51bGwsIGNoaWxkKSA6IGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdFNpbXBsZSA9IHNpbXBsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgd2FsayhjaGlsZHJlbik7XG4gICAgaWYgKHZub2RlRGF0YSkge1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0RhdGEgPSB2bm9kZURhdGEuY2xhc3NOYW1lIHx8IHZub2RlRGF0YS5jbGFzcztcbiAgICAgICAgICAgIGlmIChjbGFzc0RhdGEpIHtcbiAgICAgICAgICAgICAgICB2bm9kZURhdGEuY2xhc3MgPVxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY2xhc3NEYXRhICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXMoY2xhc3NEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGspID0+IGNsYXNzRGF0YVtrXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygbm9kZU5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm9kZU5hbWUgaXMgYSBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICAgICAgICByZXR1cm4gbm9kZU5hbWUodm5vZGVEYXRhID09PSBudWxsID8ge30gOiB2bm9kZURhdGEsIHZOb2RlQ2hpbGRyZW4sIHZkb21GblV0aWxzKTtcbiAgICB9XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlTmFtZSwgbnVsbCk7XG4gICAgdm5vZGUuJGF0dHJzJCA9IHZub2RlRGF0YTtcbiAgICBpZiAodk5vZGVDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZub2RlLiRjaGlsZHJlbiQgPSB2Tm9kZUNoaWxkcmVuO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGU7XG59O1xuY29uc3QgbmV3Vk5vZGUgPSAodGFnLCB0ZXh0KSA9PiB7XG4gICAgY29uc3Qgdm5vZGUgPSB7XG4gICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICR0YWckOiB0YWcsXG4gICAgICAgICR0ZXh0JDogdGV4dCxcbiAgICAgICAgJGVsbSQ6IG51bGwsXG4gICAgICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgfTtcbiAgICB7XG4gICAgICAgIHZub2RlLiRhdHRycyQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGU7XG59O1xuY29uc3QgSG9zdCA9IHt9O1xuY29uc3QgaXNIb3N0ID0gKG5vZGUpID0+IG5vZGUgJiYgbm9kZS4kdGFnJCA9PT0gSG9zdDtcbmNvbnN0IHZkb21GblV0aWxzID0ge1xuICAgIGZvckVhY2g6IChjaGlsZHJlbiwgY2IpID0+IGNoaWxkcmVuLm1hcChjb252ZXJ0VG9QdWJsaWMpLmZvckVhY2goY2IpLFxuICAgIG1hcDogKGNoaWxkcmVuLCBjYikgPT4gY2hpbGRyZW4ubWFwKGNvbnZlcnRUb1B1YmxpYykubWFwKGNiKS5tYXAoY29udmVydFRvUHJpdmF0ZSksXG59O1xuY29uc3QgY29udmVydFRvUHVibGljID0gKG5vZGUpID0+ICh7XG4gICAgdmF0dHJzOiBub2RlLiRhdHRycyQsXG4gICAgdmNoaWxkcmVuOiBub2RlLiRjaGlsZHJlbiQsXG4gICAgdmtleTogbm9kZS4ka2V5JCxcbiAgICB2bmFtZTogbm9kZS4kbmFtZSQsXG4gICAgdnRhZzogbm9kZS4kdGFnJCxcbiAgICB2dGV4dDogbm9kZS4kdGV4dCQsXG59KTtcbmNvbnN0IGNvbnZlcnRUb1ByaXZhdGUgPSAobm9kZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygbm9kZS52dGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHZub2RlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIG5vZGUudmF0dHJzKTtcbiAgICAgICAgaWYgKG5vZGUudmtleSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLmtleSA9IG5vZGUudmtleTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS52bmFtZSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLm5hbWUgPSBub2RlLnZuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoKG5vZGUudnRhZywgdm5vZGVEYXRhLCAuLi4obm9kZS52Y2hpbGRyZW4gfHwgW10pKTtcbiAgICB9XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlLnZ0YWcsIG5vZGUudnRleHQpO1xuICAgIHZub2RlLiRhdHRycyQgPSBub2RlLnZhdHRycztcbiAgICB2bm9kZS4kY2hpbGRyZW4kID0gbm9kZS52Y2hpbGRyZW47XG4gICAgdm5vZGUuJGtleSQgPSBub2RlLnZrZXk7XG4gICAgdm5vZGUuJG5hbWUkID0gbm9kZS52bmFtZTtcbiAgICByZXR1cm4gdm5vZGU7XG59O1xuLyoqXG4gKiBQcm9kdWN0aW9uIHNldEFjY2Vzc29yKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbmNvbnN0IHNldEFjY2Vzc29yID0gKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBpc1N2ZywgZmxhZ3MpID0+IHtcbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBpc1Byb3AgPSBpc01lbWJlckluRWxlbWVudChlbG0sIG1lbWJlck5hbWUpO1xuICAgICAgICBsZXQgbG4gPSBtZW1iZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChtZW1iZXJOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbG0uY2xhc3NMaXN0O1xuICAgICAgICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IHBhcnNlQ2xhc3NMaXN0KG9sZFZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NsYXNzZXMgPSBwYXJzZUNsYXNzTGlzdChuZXdWYWx1ZSk7XG4gICAgICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKC4uLm9sZENsYXNzZXMuZmlsdGVyKChjKSA9PiBjICYmICFuZXdDbGFzc2VzLmluY2x1ZGVzKGMpKSk7XG4gICAgICAgICAgICBjbGFzc0xpc3QuYWRkKC4uLm5ld0NsYXNzZXMuZmlsdGVyKChjKSA9PiBjICYmICFvbGRDbGFzc2VzLmluY2x1ZGVzKGMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVtYmVyTmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgICAgIC8vIG1pbmlmaWVyIHdpbGwgY2xlYW4gdGhpcyB1cFxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUoZWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoIWlzUHJvcCApICYmXG4gICAgICAgICAgICBtZW1iZXJOYW1lWzBdID09PSAnbycgJiZcbiAgICAgICAgICAgIG1lbWJlck5hbWVbMV0gPT09ICduJykge1xuICAgICAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICAgIC8vIHNvIGlmIHRoZSBtZW1iZXIgbmFtZSBzdGFydHMgd2l0aCBcIm9uXCIgYW5kIHRoZSAzcmQgY2hhcmFjdGVycyBpc1xuICAgICAgICAgICAgLy8gYSBjYXBpdGFsIGxldHRlciwgYW5kIGl0J3Mgbm90IGFscmVhZHkgYSBtZW1iZXIgb24gdGhlIGVsZW1lbnQsXG4gICAgICAgICAgICAvLyB0aGVuIHdlJ3JlIGFzc3VtaW5nIGl0J3MgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgIGlmIChtZW1iZXJOYW1lWzJdID09PSAnLScpIHtcbiAgICAgICAgICAgICAgICAvLyBvbi0gcHJlZml4ZWQgZXZlbnRzXG4gICAgICAgICAgICAgICAgLy8gYWxsb3dzIHRvIGJlIGV4cGxpY2l0IGFib3V0IHRoZSBkb20gZXZlbnQgdG8gbGlzdGVuIHdpdGhvdXQgYW55IG1hZ2ljXG4gICAgICAgICAgICAgICAgLy8gdW5kZXIgdGhlIGhvb2Q6XG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1jbGljaz4gLy8gbGlzdGVucyBmb3IgXCJjbGlja1wiXG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1DbGljaz4gLy8gbGlzdGVucyBmb3IgXCJDbGlja1wiXG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1pb25DaGFuZ2U+IC8vIGxpc3RlbnMgZm9yIFwiaW9uQ2hhbmdlXCJcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLUVWRU5UUz4gLy8gbGlzdGVucyBmb3IgXCJFVkVOVFNcIlxuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBtZW1iZXJOYW1lLnNsaWNlKDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNNZW1iZXJJbkVsZW1lbnQod2luLCBsbikpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFuZGFyZCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTW91c2VPdmVyXCIgYW5kIHRoZVxuICAgICAgICAgICAgICAgIC8vIG1lbWJlciBuYW1lIFwib25tb3VzZW92ZXJcIiBpcyBvbiB0aGUgd2luZG93J3MgcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgLy8gc28gbGV0J3MgYWRkIHRoZSBsaXN0ZW5lciBcIm1vdXNlb3ZlclwiLCB3aGljaCBpcyBhbGwgbG93ZXJjYXNlZFxuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsbi5zbGljZSgyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBldmVudFxuICAgICAgICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgICAgICAgLy8gc28gbGV0J3MgdHJpbSBvZmYgdGhlIFwib25cIiBwcmVmaXggYW5kIGxvd2VyY2FzZSB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgLy8gYW5kIGFkZCB0aGUgbGlzdGVuZXIgXCJteUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAgICAgICAvLyBleGNlcHQgZm9yIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIHdlIGtlZXAgdGhlIGV2ZW50IG5hbWUgY2FzZVxuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsblsyXSArIG1lbWJlck5hbWUuc2xpY2UoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwbHQucmVsKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5hZWwoZWxtLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU2V0IHByb3BlcnR5IGlmIGl0IGV4aXN0cyBhbmQgaXQncyBub3QgYSBTVkdcbiAgICAgICAgICAgIGNvbnN0IGlzQ29tcGxleCA9IGlzQ29tcGxleFR5cGUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKChpc1Byb3AgfHwgKGlzQ29tcGxleCAmJiBuZXdWYWx1ZSAhPT0gbnVsbCkpICYmICFpc1N2Zykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxtLnRhZ05hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IG5ld1ZhbHVlID09IG51bGwgPyAnJyA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgU2FmYXJpLCBtb3ZpbmcgdGhlIDxpbnB1dD4gY2FyZXQgd2hlbiByZS1hc3NpZ25pbmcgdGhlIHNhbWUgdmFsdWVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyTmFtZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQcm9wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvbGRWYWx1ZSA9PSBudWxsIHx8IGVsbVttZW1iZXJOYW1lXSAhPSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmFsc2UgfHwgZWxtLmdldEF0dHJpYnV0ZShtZW1iZXJOYW1lKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCghaXNQcm9wIHx8IGZsYWdzICYgNCAvKiBpc0hvc3QgKi8gfHwgaXNTdmcpICYmICFpc0NvbXBsZXgpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlID09PSB0cnVlID8gJycgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwYXJzZUNsYXNzTGlzdFJlZ2V4ID0gL1xccy87XG5jb25zdCBwYXJzZUNsYXNzTGlzdCA9ICh2YWx1ZSkgPT4gKCF2YWx1ZSA/IFtdIDogdmFsdWUuc3BsaXQocGFyc2VDbGFzc0xpc3RSZWdleCkpO1xuY29uc3QgdXBkYXRlRWxlbWVudCA9IChvbGRWbm9kZSwgbmV3Vm5vZGUsIGlzU3ZnTW9kZSwgbWVtYmVyTmFtZSkgPT4ge1xuICAgIC8vIGlmIHRoZSBlbGVtZW50IHBhc3NlZCBpbiBpcyBhIHNoYWRvdyByb290LCB3aGljaCBpcyBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgLy8gdGhlbiB3ZSB3YW50IHRvIGJlIGFkZGluZyBhdHRycy9wcm9wcyB0byB0aGUgc2hhZG93IHJvb3QncyBcImhvc3RcIiBlbGVtZW50XG4gICAgLy8gaWYgaXQncyBub3QgYSBzaGFkb3cgcm9vdCwgdGhlbiB3ZSBhZGQgYXR0cnMvcHJvcHMgdG8gdGhlIHNhbWUgZWxlbWVudFxuICAgIGNvbnN0IGVsbSA9IG5ld1Zub2RlLiRlbG0kLm5vZGVUeXBlID09PSAxMSAvKiBEb2N1bWVudEZyYWdtZW50ICovICYmIG5ld1Zub2RlLiRlbG0kLmhvc3RcbiAgICAgICAgPyBuZXdWbm9kZS4kZWxtJC5ob3N0XG4gICAgICAgIDogbmV3Vm5vZGUuJGVsbSQ7XG4gICAgY29uc3Qgb2xkVm5vZGVBdHRycyA9IChvbGRWbm9kZSAmJiBvbGRWbm9kZS4kYXR0cnMkKSB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgbmV3Vm5vZGVBdHRycyA9IG5ld1Zub2RlLiRhdHRycyQgfHwgRU1QVFlfT0JKO1xuICAgIHtcbiAgICAgICAgLy8gcmVtb3ZlIGF0dHJpYnV0ZXMgbm8gbG9uZ2VyIHByZXNlbnQgb24gdGhlIHZub2RlIGJ5IHNldHRpbmcgdGhlbSB0byB1bmRlZmluZWRcbiAgICAgICAgZm9yIChtZW1iZXJOYW1lIGluIG9sZFZub2RlQXR0cnMpIHtcbiAgICAgICAgICAgIGlmICghKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykpIHtcbiAgICAgICAgICAgICAgICBzZXRBY2Nlc3NvcihlbG0sIG1lbWJlck5hbWUsIG9sZFZub2RlQXR0cnNbbWVtYmVyTmFtZV0sIHVuZGVmaW5lZCwgaXNTdmdNb2RlLCBuZXdWbm9kZS4kZmxhZ3MkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgbmV3ICYgdXBkYXRlIGNoYW5nZWQgYXR0cmlidXRlc1xuICAgIGZvciAobWVtYmVyTmFtZSBpbiBuZXdWbm9kZUF0dHJzKSB7XG4gICAgICAgIHNldEFjY2Vzc29yKGVsbSwgbWVtYmVyTmFtZSwgb2xkVm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgbmV3Vm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgaXNTdmdNb2RlLCBuZXdWbm9kZS4kZmxhZ3MkKTtcbiAgICB9XG59O1xuY29uc3QgY3JlYXRlRWxtID0gKG9sZFBhcmVudFZOb2RlLCBuZXdQYXJlbnRWTm9kZSwgY2hpbGRJbmRleCwgcGFyZW50RWxtKSA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcbiAgICBjb25zdCBuZXdWTm9kZSA9IG5ld1BhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRJbmRleF07XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBlbG07XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBpZiAobmV3Vk5vZGUuJHRleHQkICE9PSBudWxsKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0ZXh0IG5vZGVcbiAgICAgICAgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSBkb2MuY3JlYXRlVGV4dE5vZGUobmV3Vk5vZGUuJHRleHQkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghaXNTdmdNb2RlKSB7XG4gICAgICAgICAgICBpc1N2Z01vZGUgPSBuZXdWTm9kZS4kdGFnJCA9PT0gJ3N2Zyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgICAgICAgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSAoZG9jLmNyZWF0ZUVsZW1lbnROUyhpc1N2Z01vZGUgPyBTVkdfTlMgOiBIVE1MX05TLCBuZXdWTm9kZS4kdGFnJClcbiAgICAgICAgICAgICk7XG4gICAgICAgIGlmIChpc1N2Z01vZGUgJiYgbmV3Vk5vZGUuJHRhZyQgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIGNzcyBjbGFzc2VzLCBhdHRycywgcHJvcHMsIGxpc3RlbmVycywgZXRjLlxuICAgICAgICB7XG4gICAgICAgICAgICB1cGRhdGVFbGVtZW50KG51bGwsIG5ld1ZOb2RlLCBpc1N2Z01vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0RlZihzY29wZUlkKSAmJiBlbG1bJ3Mtc2knXSAhPT0gc2NvcGVJZCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzY29wZUlkIGFuZCB0aGlzIGlzIHRoZSBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgLy8gdGhlbiBsZXQncyBhZGQgdGhlIHNjb3BlSWQgYXMgYSBjc3MgY2xhc3NcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKChlbG1bJ3Mtc2knXSA9IHNjb3BlSWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5ld1ZOb2RlLiRjaGlsZHJlbiQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIG5vZGVcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0ob2xkUGFyZW50Vk5vZGUsIG5ld1ZOb2RlLCBpKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gbm9kZSBjb3VsZCBoYXZlIGJlZW4gbnVsbFxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIG91ciBuZXcgbm9kZVxuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKG5ld1ZOb2RlLiR0YWckID09PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVzZXQgdGhlIFNWRyBjb250ZXh0IHdoZW4gd2UncmUgZXhpdGluZyA8c3ZnPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbG0udGFnTmFtZSA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVlbnRlciBTVkcgY29udGV4dCB3aGVuIHdlJ3JlIGV4aXRpbmcgPGZvcmVpZ25PYmplY3Q+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpc1N2Z01vZGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbG07XG59O1xuY29uc3QgYWRkVm5vZGVzID0gKHBhcmVudEVsbSwgYmVmb3JlLCBwYXJlbnRWTm9kZSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lckVsbSA9IChwYXJlbnRFbG0pO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgaWYgKGNvbnRhaW5lckVsbS5zaGFkb3dSb290ICYmIGNvbnRhaW5lckVsbS50YWdOYW1lID09PSBob3N0VGFnTmFtZSkge1xuICAgICAgICBjb250YWluZXJFbG0gPSBjb250YWluZXJFbG0uc2hhZG93Um9vdDtcbiAgICB9XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICBpZiAodm5vZGVzW3N0YXJ0SWR4XSkge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY3JlYXRlRWxtKG51bGwsIHBhcmVudFZOb2RlLCBzdGFydElkeCk7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgdm5vZGVzW3N0YXJ0SWR4XS4kZWxtJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICBjb250YWluZXJFbG0uaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgYmVmb3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCByZW1vdmVWbm9kZXMgPSAodm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCB2bm9kZSwgZWxtKSA9PiB7XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICBpZiAoKHZub2RlID0gdm5vZGVzW3N0YXJ0SWR4XSkpIHtcbiAgICAgICAgICAgIGVsbSA9IHZub2RlLiRlbG0kO1xuICAgICAgICAgICAgY2FsbE5vZGVSZWZzKHZub2RlKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgdm5vZGUncyBlbGVtZW50IGZyb20gdGhlIGRvbVxuICAgICAgICAgICAgZWxtLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHVwZGF0ZUNoaWxkcmVuID0gKHBhcmVudEVsbSwgb2xkQ2gsIG5ld1ZOb2RlLCBuZXdDaCkgPT4ge1xuICAgIGxldCBvbGRTdGFydElkeCA9IDA7XG4gICAgbGV0IG5ld1N0YXJ0SWR4ID0gMDtcbiAgICBsZXQgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICBsZXQgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgIGxldCBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgbGV0IG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgbGV0IG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICBsZXQgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgIGxldCBub2RlO1xuICAgIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgICAgIGlmIChvbGRTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFZub2RlIG1pZ2h0IGhhdmUgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkRW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3RW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIHBhdGNoKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpO1xuICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgIHBhdGNoKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpO1xuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRTdGFydFZub2RlLiRlbG0kLCBvbGRFbmRWbm9kZS4kZWxtJC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIHBhdGNoKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKTtcbiAgICAgICAgICAgIHBhcmVudEVsbS5pbnNlcnRCZWZvcmUob2xkRW5kVm5vZGUuJGVsbSQsIG9sZFN0YXJ0Vm5vZGUuJGVsbSQpO1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gbmV3IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBub2RlID0gY3JlYXRlRWxtKG9sZENoICYmIG9sZENoW25ld1N0YXJ0SWR4XSwgbmV3Vk5vZGUsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBvbGRTdGFydFZub2RlLiRlbG0kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9sZFN0YXJ0SWR4ID4gb2xkRW5kSWR4KSB7XG4gICAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIG5ld0NoW25ld0VuZElkeCArIDFdID09IG51bGwgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uJGVsbSQsIG5ld1ZOb2RlLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5ld1N0YXJ0SWR4ID4gbmV3RW5kSWR4KSB7XG4gICAgICAgIHJlbW92ZVZub2RlcyhvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgfVxufTtcbmNvbnN0IGlzU2FtZVZub2RlID0gKHZub2RlMSwgdm5vZGUyKSA9PiB7XG4gICAgLy8gY29tcGFyZSBpZiB0d28gdm5vZGUgdG8gc2VlIGlmIHRoZXkncmUgXCJ0ZWNobmljYWxseVwiIHRoZSBzYW1lXG4gICAgLy8gbmVlZCB0byBoYXZlIHRoZSBzYW1lIGVsZW1lbnQgdGFnLCBhbmQgc2FtZSBrZXkgdG8gYmUgdGhlIHNhbWVcbiAgICBpZiAodm5vZGUxLiR0YWckID09PSB2bm9kZTIuJHRhZyQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBwYXRjaCA9IChvbGRWTm9kZSwgbmV3Vk5vZGUpID0+IHtcbiAgICBjb25zdCBlbG0gPSAobmV3Vk5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJCk7XG4gICAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBvbGRWTm9kZS4kY2hpbGRyZW4kO1xuICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gbmV3Vk5vZGUuJGNoaWxkcmVuJDtcbiAgICBjb25zdCB0YWcgPSBuZXdWTm9kZS4kdGFnJDtcbiAgICBjb25zdCB0ZXh0ID0gbmV3Vk5vZGUuJHRleHQkO1xuICAgIGlmICh0ZXh0ID09PSBudWxsKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHRlc3QgaWYgd2UncmUgcmVuZGVyaW5nIGFuIHN2ZyBlbGVtZW50LCBvciBzdGlsbCByZW5kZXJpbmcgbm9kZXMgaW5zaWRlIG9mIG9uZVxuICAgICAgICAgICAgLy8gb25seSBhZGQgdGhpcyB0byB0aGUgd2hlbiB0aGUgY29tcGlsZXIgc2VlcyB3ZSdyZSB1c2luZyBhbiBzdmcgc29tZXdoZXJlXG4gICAgICAgICAgICBpc1N2Z01vZGUgPSB0YWcgPT09ICdzdmcnID8gdHJ1ZSA6IHRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnID8gZmFsc2UgOiBpc1N2Z01vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxlbWVudCBub2RlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0YWcgPT09ICdzbG90JylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgcmVuZGVyIG9mIGFuIGVsZW1lbnQgT1IgaXQncyBhbiB1cGRhdGVcbiAgICAgICAgICAgICAgICAvLyBBTkQgd2UgYWxyZWFkeSBrbm93IGl0J3MgcG9zc2libGUgaXQgY291bGQgaGF2ZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgLy8gdGhpcyB1cGRhdGVzIHRoZSBlbGVtZW50J3MgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudChvbGRWTm9kZSwgbmV3Vk5vZGUsIGlzU3ZnTW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9sZENoaWxkcmVuICE9PSBudWxsICYmIG5ld0NoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBsb29rcyBsaWtlIHRoZXJlJ3MgY2hpbGQgdm5vZGVzIGZvciBib3RoIHRoZSBvbGQgYW5kIG5ldyB2bm9kZXNcbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2hpbGRyZW4sIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vIG9sZCBjaGlsZCB2bm9kZXMsIGJ1dCB0aGVyZSBhcmUgbmV3IGNoaWxkIHZub2RlcyB0byBhZGRcbiAgICAgICAgICAgIGlmIChvbGRWTm9kZS4kdGV4dCQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZub2RlIHdhcyB0ZXh0LCBzbyBiZSBzdXJlIHRvIGNsZWFyIGl0IG91dFxuICAgICAgICAgICAgICAgIGVsbS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWRkIHRoZSBuZXcgdm5vZGUgY2hpbGRyZW5cbiAgICAgICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbiwgMCwgbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkQ2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vIG5ldyBjaGlsZCB2bm9kZXMsIGJ1dCB0aGVyZSBhcmUgb2xkIGNoaWxkIHZub2RlcyB0byByZW1vdmVcbiAgICAgICAgICAgIHJlbW92ZVZub2RlcyhvbGRDaGlsZHJlbiwgMCwgb2xkQ2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3ZnTW9kZSAmJiB0YWcgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICBpc1N2Z01vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChvbGRWTm9kZS4kdGV4dCQgIT09IHRleHQpIHtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSB0ZXh0IG9ubHkgdm5vZGVcbiAgICAgICAgLy8gYW5kIGFsc28gb25seSBpZiB0aGUgdGV4dCBpcyBkaWZmZXJlbnQgdGhhbiBiZWZvcmVcbiAgICAgICAgZWxtLmRhdGEgPSB0ZXh0O1xuICAgIH1cbn07XG5jb25zdCBjYWxsTm9kZVJlZnMgPSAodk5vZGUpID0+IHtcbiAgICB7XG4gICAgICAgIHZOb2RlLiRhdHRycyQgJiYgdk5vZGUuJGF0dHJzJC5yZWYgJiYgdk5vZGUuJGF0dHJzJC5yZWYobnVsbCk7XG4gICAgICAgIHZOb2RlLiRjaGlsZHJlbiQgJiYgdk5vZGUuJGNoaWxkcmVuJC5tYXAoY2FsbE5vZGVSZWZzKTtcbiAgICB9XG59O1xuY29uc3QgcmVuZGVyVmRvbSA9IChob3N0UmVmLCByZW5kZXJGblJlc3VsdHMpID0+IHtcbiAgICBjb25zdCBob3N0RWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IG9sZFZOb2RlID0gaG9zdFJlZi4kdm5vZGUkIHx8IG5ld1ZOb2RlKG51bGwsIG51bGwpO1xuICAgIGNvbnN0IHJvb3RWbm9kZSA9IGlzSG9zdChyZW5kZXJGblJlc3VsdHMpID8gcmVuZGVyRm5SZXN1bHRzIDogaChudWxsLCBudWxsLCByZW5kZXJGblJlc3VsdHMpO1xuICAgIGhvc3RUYWdOYW1lID0gaG9zdEVsbS50YWdOYW1lO1xuICAgIHJvb3RWbm9kZS4kdGFnJCA9IG51bGw7XG4gICAgcm9vdFZub2RlLiRmbGFncyQgfD0gNCAvKiBpc0hvc3QgKi87XG4gICAgaG9zdFJlZi4kdm5vZGUkID0gcm9vdFZub2RlO1xuICAgIHJvb3RWbm9kZS4kZWxtJCA9IG9sZFZOb2RlLiRlbG0kID0gKGhvc3RFbG0uc2hhZG93Um9vdCB8fCBob3N0RWxtICk7XG4gICAge1xuICAgICAgICBzY29wZUlkID0gaG9zdEVsbVsncy1zYyddO1xuICAgIH1cbiAgICAvLyBzeW5jaHJvbm91cyBwYXRjaFxuICAgIHBhdGNoKG9sZFZOb2RlLCByb290Vm5vZGUpO1xufTtcbmNvbnN0IGdldEVsZW1lbnQgPSAocmVmKSA9PiAoZ2V0SG9zdFJlZihyZWYpLiRob3N0RWxlbWVudCQgKTtcbmNvbnN0IGNyZWF0ZUV2ZW50ID0gKHJlZiwgbmFtZSwgZmxhZ3MpID0+IHtcbiAgICBjb25zdCBlbG0gPSBnZXRFbGVtZW50KHJlZik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1pdDogKGRldGFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVtaXRFdmVudChlbG0sIG5hbWUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiAhIShmbGFncyAmIDQgLyogQnViYmxlcyAqLyksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6ICEhKGZsYWdzICYgMiAvKiBDb21wb3NlZCAqLyksXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogISEoZmxhZ3MgJiAxIC8qIENhbmNlbGxhYmxlICovKSxcbiAgICAgICAgICAgICAgICBkZXRhaWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSAmIGRpc3BhdGNoIGEgY3VzdG9tIEV2ZW50IG9uIGEgcHJvdmlkZWQgdGFyZ2V0XG4gKiBAcGFyYW0gZWxtIHRoZSB0YXJnZXQgb2YgdGhlIEV2ZW50XG4gKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSB0byBnaXZlIHRoZSBjdXN0b20gRXZlbnRcbiAqIEBwYXJhbSBvcHRzIG9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIGEgY3VzdG9tIEV2ZW50XG4gKiBAcmV0dXJucyB0aGUgY3VzdG9tIEV2ZW50XG4gKi9cbmNvbnN0IGVtaXRFdmVudCA9IChlbG0sIG5hbWUsIG9wdHMpID0+IHtcbiAgICBjb25zdCBldiA9IHBsdC5jZShuYW1lLCBvcHRzKTtcbiAgICBlbG0uZGlzcGF0Y2hFdmVudChldik7XG4gICAgcmV0dXJuIGV2O1xufTtcbmNvbnN0IGF0dGFjaFRvQW5jZXN0b3IgPSAoaG9zdFJlZiwgYW5jZXN0b3JDb21wb25lbnQpID0+IHtcbiAgICBpZiAoYW5jZXN0b3JDb21wb25lbnQgJiYgIWhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgJiYgYW5jZXN0b3JDb21wb25lbnRbJ3MtcCddKSB7XG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXS5wdXNoKG5ldyBQcm9taXNlKChyKSA9PiAoaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCA9IHIpKSk7XG4gICAgfVxufTtcbmNvbnN0IHNjaGVkdWxlVXBkYXRlID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICB9XG4gICAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDUxMiAvKiBuZWVkc1JlcmVuZGVyICovO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkKTtcbiAgICAvLyB0aGVyZSBpcyBubyBhbmNlc3RvciBjb21wb25lbnQgb3IgdGhlIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgIC8vIGhhcyBhbHJlYWR5IGZpcmVkIG9mZiBpdHMgbGlmZWN5Y2xlIHVwZGF0ZSB0aGVuXG4gICAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gICAgY29uc3QgZGlzcGF0Y2ggPSAoKSA9PiBkaXNwYXRjaEhvb2tzKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpO1xuICAgIHJldHVybiB3cml0ZVRhc2soZGlzcGF0Y2gpIDtcbn07XG5jb25zdCBkaXNwYXRjaEhvb2tzID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICBjb25zdCBlbmRTY2hlZHVsZSA9IGNyZWF0ZVRpbWUoJ3NjaGVkdWxlVXBkYXRlJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgO1xuICAgIGxldCBwcm9taXNlO1xuICAgIGVuZFNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKCkgPT4gdXBkYXRlQ29tcG9uZW50KGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSk7XG59O1xuY29uc3QgdXBkYXRlQ29tcG9uZW50ID0gYXN5bmMgKGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gICAgLy8gdXBkYXRlQ29tcG9uZW50XG4gICAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IGVuZFVwZGF0ZSA9IGNyZWF0ZVRpbWUoJ3VwZGF0ZScsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gICAgY29uc3QgcmMgPSBlbG1bJ3MtcmMnXTtcbiAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgIGF0dGFjaFN0eWxlcyhob3N0UmVmKTtcbiAgICB9XG4gICAgY29uc3QgZW5kUmVuZGVyID0gY3JlYXRlVGltZSgncmVuZGVyJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICB7XG4gICAgICAgIGNhbGxSZW5kZXIoaG9zdFJlZiwgaW5zdGFuY2UpO1xuICAgIH1cbiAgICBpZiAocmMpIHtcbiAgICAgICAgLy8gb2ssIHNvIHR1cm5zIG91dCB0aGVyZSBhcmUgc29tZSBjaGlsZCBob3N0IGVsZW1lbnRzXG4gICAgICAgIC8vIHdhaXRpbmcgb24gdGhpcyBwYXJlbnQgZWxlbWVudCB0byBsb2FkXG4gICAgICAgIC8vIGxldCdzIGZpcmUgb2ZmIGFsbCB1cGRhdGUgY2FsbGJhY2tzIHdhaXRpbmdcbiAgICAgICAgcmMubWFwKChjYikgPT4gY2IoKSk7XG4gICAgICAgIGVsbVsncy1yYyddID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbmRSZW5kZXIoKTtcbiAgICBlbmRVcGRhdGUoKTtcbiAgICB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuUHJvbWlzZXMgPSBlbG1bJ3MtcCddO1xuICAgICAgICBjb25zdCBwb3N0VXBkYXRlID0gKCkgPT4gcG9zdFVwZGF0ZUNvbXBvbmVudChob3N0UmVmKTtcbiAgICAgICAgaWYgKGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBwb3N0VXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChjaGlsZHJlblByb21pc2VzKS50aGVuKHBvc3RVcGRhdGUpO1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi87XG4gICAgICAgICAgICBjaGlsZHJlblByb21pc2VzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgY2FsbFJlbmRlciA9IChob3N0UmVmLCBpbnN0YW5jZSwgZWxtKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5zdGFuY2UgPSBpbnN0YW5jZS5yZW5kZXIoKSA7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTYgLyogaXNRdWV1ZWRGb3JVcGRhdGUgKi87XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDIgLyogaGFzUmVuZGVyZWQgKi87XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGxvb2tzIGxpa2Ugd2UndmUgZ290IGNoaWxkIG5vZGVzIHRvIHJlbmRlciBpbnRvIHRoaXMgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gb3Igd2UgbmVlZCB0byB1cGRhdGUgdGhlIGNzcyBjbGFzcy9hdHRycyBvbiB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gRE9NIFdSSVRFIVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmRvbShob3N0UmVmLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGVFcnJvcihlLCBob3N0UmVmLiRob3N0RWxlbWVudCQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBwb3N0VXBkYXRlQ29tcG9uZW50ID0gKGhvc3RSZWYpID0+IHtcbiAgICBjb25zdCB0YWdOYW1lID0gaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkO1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBlbmRQb3N0VXBkYXRlID0gY3JlYXRlVGltZSgncG9zdFVwZGF0ZScsIHRhZ05hbWUpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA7XG4gICAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gICAge1xuICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudERpZFJlbmRlcicpO1xuICAgIH1cbiAgICBpZiAoIShob3N0UmVmLiRmbGFncyQgJiA2NCAvKiBoYXNMb2FkZWRDb21wb25lbnQgKi8pKSB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA2NCAvKiBoYXNMb2FkZWRDb21wb25lbnQgKi87XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIERPTSBXUklURSFcbiAgICAgICAgICAgIGFkZEh5ZHJhdGVkRmxhZyhlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgICAgICAge1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkKGVsbSk7XG4gICAgICAgICAgICBpZiAoIWFuY2VzdG9yQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYXBwRGlkTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbmRQb3N0VXBkYXRlKCk7XG4gICAgfVxuICAgIC8vIGxvYWQgZXZlbnRzIGZpcmUgZnJvbSBib3R0b20gdG8gdG9wXG4gICAgLy8gdGhlIGRlZXBlc3QgZWxlbWVudHMgbG9hZCBmaXJzdCB0aGVuIGJ1YmJsZXMgdXBcbiAgICB7XG4gICAgICAgIGlmIChob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKCk7XG4gICAgICAgICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiA1MTIgLyogbmVlZHNSZXJlbmRlciAqLykge1xuICAgICAgICAgICAgbmV4dFRpY2soKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfig0IC8qIGlzV2FpdGluZ0ZvckNoaWxkcmVuICovIHwgNTEyIC8qIG5lZWRzUmVyZW5kZXIgKi8pO1xuICAgIH1cbiAgICAvLyAoIOKAol/igKIpXG4gICAgLy8gKCDigKJf4oCiKT7ijJDilqAt4pagXG4gICAgLy8gKOKMkOKWoF/ilqApXG59O1xuY29uc3QgYXBwRGlkTG9hZCA9ICh3aG8pID0+IHtcbiAgICAvLyBvbiBhcHBsb2FkXG4gICAgLy8gd2UgaGF2ZSBmaW5pc2ggdGhlIGZpcnN0IGJpZyBpbml0aWFsIHJlbmRlclxuICAgIHtcbiAgICAgICAgYWRkSHlkcmF0ZWRGbGFnKGRvYy5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgICBuZXh0VGljaygoKSA9PiBlbWl0RXZlbnQod2luLCAnYXBwbG9hZCcsIHsgZGV0YWlsOiB7IG5hbWVzcGFjZTogTkFNRVNQQUNFIH0gfSkpO1xufTtcbmNvbnN0IHNhZmVDYWxsID0gKGluc3RhbmNlLCBtZXRob2QsIGFyZykgPT4ge1xuICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVttZXRob2RdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbbWV0aG9kXShhcmcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5jb25zdCB0aGVuID0gKHByb21pc2UsIHRoZW5GbikgPT4ge1xuICAgIHJldHVybiBwcm9taXNlICYmIHByb21pc2UudGhlbiA/IHByb21pc2UudGhlbih0aGVuRm4pIDogdGhlbkZuKCk7XG59O1xuY29uc3QgYWRkSHlkcmF0ZWRGbGFnID0gKGVsbSkgPT4gZWxtLmNsYXNzTGlzdC5hZGQoJ2h5ZHJhdGVkJylcbiAgICA7XG4vKipcbiAqIFBhcnNlIGEgbmV3IHByb3BlcnR5IHZhbHVlIGZvciBhIGdpdmVuIHByb3BlcnR5IHR5cGUuXG4gKlxuICogV2hpbGUgdGhlIHByb3AgdmFsdWUgY2FuIHJlYXNvbmFibHkgYmUgZXhwZWN0ZWQgdG8gYmUgb2YgYGFueWAgdHlwZSBhcyBmYXIgYXMgVHlwZVNjcmlwdCdzIHR5cGUgY2hlY2tlciBpcyBjb25jZXJuZWQsXG4gKiBpdCBpcyBub3Qgc2FmZSB0byBhc3N1bWUgdGhhdCB0aGUgc3RyaW5nIHJldHVybmVkIGJ5IGV2YWx1YXRpbmcgYHR5cGVvZiBwcm9wVmFsdWVgIG1hdGNoZXM6XG4gKiAgIDEuIGBhbnlgLCB0aGUgdHlwZSBnaXZlbiB0byBgcHJvcFZhbHVlYCBpbiB0aGUgZnVuY3Rpb24gc2lnbmF0dXJlXG4gKiAgIDIuIHRoZSB0eXBlIHN0b3JlZCBmcm9tIGBwcm9wVHlwZWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgY2FwYWJpbGl0eSB0byBwYXJzZS9jb2VyY2UgYSBwcm9wZXJ0eSdzIHZhbHVlIHRvIHBvdGVudGlhbGx5IGFueSBvdGhlciBKYXZhU2NyaXB0IHR5cGUuXG4gKlxuICogUHJvcGVydHkgdmFsdWVzIHJlcHJlc2VudGVkIGluIFRTWCBwcmVzZXJ2ZSB0aGVpciB0eXBlIGluZm9ybWF0aW9uLiBJbiB0aGUgZXhhbXBsZSBiZWxvdywgdGhlIG51bWJlciAwIGlzIHBhc3NlZCB0b1xuICogYSBjb21wb25lbnQuIFRoaXMgYHByb3BWYWx1ZWAgd2lsbCBwcmVzZXJ2ZSBpdHMgdHlwZSBpbmZvcm1hdGlvbiAoYHR5cGVvZiBwcm9wVmFsdWUgPT09ICdudW1iZXInYCkuIE5vdGUgdGhhdCBpc1xuICogYmFzZWQgb24gdGhlIHR5cGUgb2YgdGhlIHZhbHVlIGJlaW5nIHBhc3NlZCBpbiwgbm90IHRoZSB0eXBlIGRlY2xhcmVkIG9mIHRoZSBjbGFzcyBtZW1iZXIgZGVjb3JhdGVkIHdpdGggYEBQcm9wYC5cbiAqIGBgYHRzeFxuICogPG15LWNtcCBwcm9wLXZhbD17MH0+PC9teS1jbXA+XG4gKiBgYGBcbiAqXG4gKiBIVE1MIHByb3AgdmFsdWVzIG9uIHRoZSBvdGhlciBoYW5kLCB3aWxsIGFsd2F5cyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSBwcm9wVmFsdWUgdGhlIG5ldyB2YWx1ZSB0byBjb2VyY2UgdG8gc29tZSB0eXBlXG4gKiBAcGFyYW0gcHJvcFR5cGUgdGhlIHR5cGUgb2YgdGhlIHByb3AsIGV4cHJlc3NlZCBhcyBhIGJpbmFyeSBudW1iZXJcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQvY29lcmNlZCB2YWx1ZVxuICovXG5jb25zdCBwYXJzZVByb3BlcnR5VmFsdWUgPSAocHJvcFZhbHVlLCBwcm9wVHlwZSkgPT4ge1xuICAgIC8vIGVuc3VyZSB0aGlzIHZhbHVlIGlzIG9mIHRoZSBjb3JyZWN0IHByb3AgdHlwZVxuICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiAhaXNDb21wbGV4VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIGlmIChwcm9wVHlwZSAmIDQgLyogQm9vbGVhbiAqLykge1xuICAgICAgICAgICAgLy8gcGVyIHRoZSBIVE1MIHNwZWMsIGFueSBzdHJpbmcgdmFsdWUgbWVhbnMgaXQgaXMgYSBib29sZWFuIHRydWUgdmFsdWVcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSdsbCBjaGVhdCBoZXJlIGFuZCBzYXkgdGhhdCB0aGUgc3RyaW5nIFwiZmFsc2VcIiBpcyB0aGUgYm9vbGVhbiBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcHJvcFZhbHVlID09PSAnJyB8fCAhIXByb3BWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFR5cGUgJiAxIC8qIFN0cmluZyAqLykge1xuICAgICAgICAgICAgLy8gY291bGQgaGF2ZSBiZWVuIHBhc3NlZCBhcyBhIG51bWJlciBvciBib29sZWFuXG4gICAgICAgICAgICAvLyBidXQgd2Ugc3RpbGwgd2FudCBpdCBhcyBhIHN0cmluZ1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhwcm9wVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlZHVuZGFudCByZXR1cm4gaGVyZSBmb3IgYmV0dGVyIG1pbmlmaWNhdGlvblxuICAgICAgICByZXR1cm4gcHJvcFZhbHVlO1xuICAgIH1cbiAgICAvLyBub3Qgc3VyZSBleGFjdGx5IHdoYXQgdHlwZSB3ZSB3YW50XG4gICAgLy8gc28gbm8gbmVlZCB0byBjaGFuZ2UgdG8gYSBkaWZmZXJlbnQgdHlwZVxuICAgIHJldHVybiBwcm9wVmFsdWU7XG59O1xuY29uc3QgZ2V0VmFsdWUgPSAocmVmLCBwcm9wTmFtZSkgPT4gZ2V0SG9zdFJlZihyZWYpLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbmNvbnN0IHNldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUsIG5ld1ZhbCwgY21wTWV0YSkgPT4ge1xuICAgIC8vIGNoZWNrIG91ciBuZXcgcHJvcGVydHkgdmFsdWUgYWdhaW5zdCBvdXIgaW50ZXJuYWwgdmFsdWVcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgIGNvbnN0IG9sZFZhbCA9IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJC5nZXQocHJvcE5hbWUpO1xuICAgIGNvbnN0IGZsYWdzID0gaG9zdFJlZi4kZmxhZ3MkO1xuICAgIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA7XG4gICAgbmV3VmFsID0gcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbCwgY21wTWV0YS4kbWVtYmVycyRbcHJvcE5hbWVdWzBdKTtcbiAgICAvLyBleHBsaWNpdGx5IGNoZWNrIGZvciBOYU4gb24gYm90aCBzaWRlcywgYXMgYE5hTiA9PT0gTmFOYCBpcyBhbHdheXMgZmFsc2VcbiAgICBjb25zdCBhcmVCb3RoTmFOID0gTnVtYmVyLmlzTmFOKG9sZFZhbCkgJiYgTnVtYmVyLmlzTmFOKG5ld1ZhbCk7XG4gICAgY29uc3QgZGlkVmFsdWVDaGFuZ2UgPSBuZXdWYWwgIT09IG9sZFZhbCAmJiAhYXJlQm90aE5hTjtcbiAgICBpZiAoKCEoZmxhZ3MgJiA4IC8qIGlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pIHx8IG9sZFZhbCA9PT0gdW5kZWZpbmVkKSAmJiBkaWRWYWx1ZUNoYW5nZSkge1xuICAgICAgICAvLyBnYWR6b29rcyEgdGhlIHByb3BlcnR5J3MgdmFsdWUgaGFzIGNoYW5nZWQhIVxuICAgICAgICAvLyBzZXQgb3VyIG5ldyB2YWx1ZSFcbiAgICAgICAgaG9zdFJlZi4kaW5zdGFuY2VWYWx1ZXMkLnNldChwcm9wTmFtZSwgbmV3VmFsKTtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICBpZiAoKGZsYWdzICYgKDIgLyogaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIGhhc1JlbmRlcmVkICovKSB7XG4gICAgICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB0aGlzIHZhbHVlIGFjdHVhbGx5IGNoYW5nZWQsIHNvIHdlJ3ZlIGdvdCB3b3JrIHRvIGRvIVxuICAgICAgICAgICAgICAgIC8vIGJ1dCBvbmx5IGlmIHdlJ3ZlIGFscmVhZHkgcmVuZGVyZWQsIG90aGVyd2lzZSBqdXN0IGNoaWxsIG91dFxuICAgICAgICAgICAgICAgIC8vIHF1ZXVlIHRoYXQgd2UgbmVlZCB0byBkbyBhbiB1cGRhdGUsIGJ1dCBkb24ndCB3b3JyeSBhYm91dCBxdWV1aW5nXG4gICAgICAgICAgICAgICAgLy8gdXAgbWlsbGlvbnMgY3V6IHRoaXMgZnVuY3Rpb24gZW5zdXJlcyBpdCBvbmx5IHJ1bnMgb25jZVxuICAgICAgICAgICAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwcm94eUNvbXBvbmVudCA9IChDc3RyLCBjbXBNZXRhLCBmbGFncykgPT4ge1xuICAgIGlmIChjbXBNZXRhLiRtZW1iZXJzJCkge1xuICAgICAgICAvLyBJdCdzIGJldHRlciB0byBoYXZlIGEgY29uc3QgdGhhbiB0d28gT2JqZWN0LmVudHJpZXMoKVxuICAgICAgICBjb25zdCBtZW1iZXJzID0gT2JqZWN0LmVudHJpZXMoY21wTWV0YS4kbWVtYmVycyQpO1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBDc3RyLnByb3RvdHlwZTtcbiAgICAgICAgbWVtYmVycy5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgICAgICAgaWYgKChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgKChmbGFncyAmIDIgLyogcHJveHlTdGF0ZSAqLykgJiYgbWVtYmVyRmxhZ3MgJiAzMiAvKiBTdGF0ZSAqLykpKSB7XG4gICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQgLSBwcm9wXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCwgZ2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQsIHNldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgbmV3VmFsdWUsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoKGZsYWdzICYgMSAvKiBpc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lVG9Qcm9wTmFtZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYXR0ck5hbWUsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwbHQuam1wKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBhdHRyTmFtZVRvUHJvcE5hbWUuZ2V0KGF0dHJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIEluIGEgd2ViIGNvbXBvbmVudCBsaWZlY3ljbGUgdGhlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBydW5zIHByaW9yIHRvIGNvbm5lY3RlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIC8vICBpbiB0aGUgY2FzZSB3aGVyZSBhbiBhdHRyaWJ1dGUgd2FzIHNldCBpbmxpbmUuXG4gICAgICAgICAgICAgICAgICAgIC8vICBgYGBodG1sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxteS1jb21wb25lbnQgc29tZS1hdHRyaWJ1dGU9XCJzb21lLXZhbHVlXCI+PC9teS1jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICBgYGBcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIFRoZXJlIGlzIGFuIGVkZ2UgY2FzZSB3aGVyZSBhIGRldmVsb3BlciBzZXRzIHRoZSBhdHRyaWJ1dGUgaW5saW5lIG9uIGEgY3VzdG9tIGVsZW1lbnQgYW5kIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gIHByb2dyYW1tYXRpY2FsbHkgY2hhbmdlcyBpdCBiZWZvcmUgaXQgaGFzIGJlZW4gdXBncmFkZWQgYXMgc2hvd24gYmVsb3c6XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBgYGBodG1sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDwhLS0gdGhpcyBjb21wb25lbnQgaGFzIF9ub3RfIGJlZW4gdXBncmFkZWQgeWV0IC0tPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICA8bXktY29tcG9uZW50IGlkPVwidGVzdFwiIHNvbWUtYXR0cmlidXRlPVwic29tZS12YWx1ZVwiPjwvbXktY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICA8c2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIC8vIGdyYWIgbm9uLXVwZ3JhZGVkIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIGVsLnNvbWVBdHRyaWJ1dGUgPSBcImFub3RoZXItdmFsdWVcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAvLyB1cGdyYWRlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktY29tcG9uZW50JywgTXlDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYFxuICAgICAgICAgICAgICAgICAgICAvLyAgSW4gdGhpcyBjYXNlIGlmIHdlIGRvIG5vdCB1bnNoYWRvdyBoZXJlIGFuZCB1c2UgdGhlIHZhbHVlIG9mIHRoZSBzaGFkb3dpbmcgcHJvcGVydHksIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAvLyAgd2lsbCBiZSBjYWxsZWQgd2l0aCBgbmV3VmFsdWUgPSBcInNvbWUtdmFsdWVcImAgYW5kIHdpbGwgc2V0IHRoZSBzaGFkb3dlZCBwcm9wZXJ0eSAodGhpcy5zb21lQXR0cmlidXRlID0gXCJhbm90aGVyLXZhbHVlXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICB0byB0aGUgdmFsdWUgdGhhdCB3YXMgc2V0IGlubGluZSBpLmUuIFwic29tZS12YWx1ZVwiIGZyb20gYWJvdmUgZXhhbXBsZS4gV2hlblxuICAgICAgICAgICAgICAgICAgICAvLyAgdGhlIGNvbm5lY3RlZENhbGxiYWNrIGF0dGVtcHRzIHRvIHVuc2hhZG93IGl0IHdpbGwgdXNlIFwic29tZS12YWx1ZVwiIGFzIHRoZSBpbml0aWFsIHZhbHVlIHJhdGhlciB0aGFuIFwiYW5vdGhlci12YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBUaGUgY2FzZSB3aGVyZSB0aGUgYXR0cmlidXRlIHdhcyBOT1Qgc2V0IGlubGluZSBidXQgd2FzIG5vdCBzZXQgcHJvZ3JhbW1hdGljYWxseSBzaGFsbCBiZSBoYW5kbGVkL3Vuc2hhZG93ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gIGJ5IGNvbm5lY3RlZENhbGxiYWNrIGFzIHRoaXMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHdpbGwgbm90IGZpcmUuXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL2Jlc3QtcHJhY3RpY2VzI2xhenktcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgVE9ETyhTVEVOQ0lMLTE2KSB3ZSBzaG91bGQgdGhpbmsgYWJvdXQgd2hldGhlciBvciBub3Qgd2UgYWN0dWFsbHkgd2FudCB0byBiZSByZWZsZWN0aW5nIHRoZSBhdHRyaWJ1dGVzIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vICBwcm9wZXJ0aWVzIGhlcmUgZ2l2ZW4gdGhhdCB0aGlzIGdvZXMgYWdhaW5zdCBiZXN0IHByYWN0aWNlcyBvdXRsaW5lZCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIC8vICBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL2Jlc3QtcHJhY3RpY2VzI2F2b2lkLXJlZW50cmFuY3lcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzW3Byb3BOYW1lXSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJvcE5hbWUgZXhpc3RzIG9uIHRoZSBwcm90b3R5cGUgb2YgYENzdHJgLCB0aGlzIHVwZGF0ZSBtYXkgYmUgYSByZXN1bHQgb2YgU3RlbmNpbCB1c2luZyBuYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFQSXMgdG8gcmVmbGVjdCBwcm9wcyBhcyBhdHRyaWJ1dGVzLiBDYWxscyB0byBgc2V0QXR0cmlidXRlKHNvbWVFbGVtZW50LCBwcm9wTmFtZSlgIHdpbGwgcmVzdWx0IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgcHJvcE5hbWVgIHRvIGJlIGNvbnZlcnRlZCB0byBhIGBET01TdHJpbmdgLCB3aGljaCBtYXkgbm90IGJlIHdoYXQgd2Ugd2FudCBmb3Igb3RoZXIgcHJpbWl0aXZlIHByb3BzLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gbmV3VmFsdWUgPT09IG51bGwgJiYgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSAnYm9vbGVhbicgPyBmYWxzZSA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBhdHRyaWJ1dGVzIHRvIG9ic2VydmVcbiAgICAgICAgICAgIC8vIGFuZCBhbHNvIGNyZWF0ZSBhIG1hcCBvZiBodG1sIGF0dHJpYnV0ZSBuYW1lIHRvIGpzIHByb3BlcnR5IG5hbWVcbiAgICAgICAgICAgIENzdHIub2JzZXJ2ZWRBdHRyaWJ1dGVzID0gbWVtYmVyc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKFtfLCBtXSkgPT4gbVswXSAmIDE1IC8qIEhhc0F0dHJpYnV0ZSAqLykgLy8gZmlsdGVyIHRvIG9ubHkga2VlcCBwcm9wcyB0aGF0IHNob3VsZCBtYXRjaCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgLm1hcCgoW3Byb3BOYW1lLCBtXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gbVsxXSB8fCBwcm9wTmFtZTtcbiAgICAgICAgICAgICAgICBhdHRyTmFtZVRvUHJvcE5hbWUuc2V0KGF0dHJOYW1lLCBwcm9wTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIENzdHI7XG59O1xuY29uc3QgaW5pdGlhbGl6ZUNvbXBvbmVudCA9IGFzeW5jIChlbG0sIGhvc3RSZWYsIGNtcE1ldGEsIGhtclZlcnNpb25JZCwgQ3N0cikgPT4ge1xuICAgIC8vIGluaXRpYWxpemVDb21wb25lbnRcbiAgICBpZiAoKGhvc3RSZWYuJGZsYWdzJCAmIDMyIC8qIGhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovKSA9PT0gMCkge1xuICAgICAgICB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlbid0IGluaXRpYWxpemVkIHRoaXMgZWxlbWVudCB5ZXRcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAzMiAvKiBoYXNJbml0aWFsaXplZENvbXBvbmVudCAqLztcbiAgICAgICAgICAgIC8vIGxhenkgbG9hZGVkIGNvbXBvbmVudHNcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgdGhlIGNvbXBvbmVudCdzIGltcGxlbWVudGF0aW9uIHRvIGJlXG4gICAgICAgICAgICAvLyB3aXJlZCB1cCB3aXRoIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgIENzdHIgPSBsb2FkTW9kdWxlKGNtcE1ldGEpO1xuICAgICAgICAgICAgaWYgKENzdHIudGhlbikge1xuICAgICAgICAgICAgICAgIC8vIEF3YWl0IGNyZWF0ZXMgYSBtaWNyby10YXNrIGF2b2lkIGlmIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kTG9hZCA9IHVuaXF1ZVRpbWUoKTtcbiAgICAgICAgICAgICAgICBDc3RyID0gYXdhaXQgQ3N0cjtcbiAgICAgICAgICAgICAgICBlbmRMb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUNzdHIuaXNQcm94aWVkKSB7XG4gICAgICAgICAgICAgICAgcHJveHlDb21wb25lbnQoQ3N0ciwgY21wTWV0YSwgMiAvKiBwcm94eVN0YXRlICovKTtcbiAgICAgICAgICAgICAgICBDc3RyLmlzUHJveGllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbmROZXdJbnN0YW5jZSA9IGNyZWF0ZVRpbWUoJ2NyZWF0ZUluc3RhbmNlJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICAgICAgLy8gb2ssIHRpbWUgdG8gY29uc3RydWN0IHRoZSBpbnN0YW5jZVxuICAgICAgICAgICAgLy8gYnV0IGxldCdzIGtlZXAgdHJhY2sgb2Ygd2hlbiB3ZSBzdGFydCBhbmQgc3RvcFxuICAgICAgICAgICAgLy8gc28gdGhhdCB0aGUgZ2V0dGVycy9zZXR0ZXJzIGRvbid0IGluY29ycmVjdGx5IHN0ZXAgb24gZGF0YVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA4IC8qIGlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3QgdGhlIGxhenktbG9hZGVkIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgLy8gcGFzc2luZyB0aGUgaG9zdFJlZiBpcyB2ZXJ5IGltcG9ydGFudCBkdXJpbmdcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBpbiBvcmRlciB0byBkaXJlY3RseSB3aXJlIHRvZ2V0aGVyIHRoZVxuICAgICAgICAgICAgLy8gaG9zdCBlbGVtZW50IGFuZCB0aGUgbGF6eS1sb2FkZWQgaW5zdGFuY2VcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IENzdHIoaG9zdFJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjggLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuZE5ld0luc3RhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKENzdHIuc3R5bGUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IGhhcyBzdHlsZXMgYnV0IHdlIGhhdmVuJ3QgcmVnaXN0ZXJlZCB0aGVtIHlldFxuICAgICAgICAgICAgbGV0IHN0eWxlID0gQ3N0ci5zdHlsZTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlSWQgPSBnZXRTY29wZUlkKGNtcE1ldGEpO1xuICAgICAgICAgICAgaWYgKCFzdHlsZXMuaGFzKHNjb3BlSWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kUmVnaXN0ZXJTdHlsZXMgPSBjcmVhdGVUaW1lKCdyZWdpc3RlclN0eWxlcycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgICAgICAgICByZWdpc3RlclN0eWxlKHNjb3BlSWQsIHN0eWxlLCAhIShjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pKTtcbiAgICAgICAgICAgICAgICBlbmRSZWdpc3RlclN0eWxlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdlJ3ZlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgbGF6eSBpbnN0YW5jZVxuICAgIGNvbnN0IGFuY2VzdG9yQ29tcG9uZW50ID0gaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkO1xuICAgIGNvbnN0IHNjaGVkdWxlID0gKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgdHJ1ZSk7XG4gICAgaWYgKGFuY2VzdG9yQ29tcG9uZW50ICYmIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10pIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgaW5pdGlhbCBsb2FkIGFuZCB0aGlzIGNvbXBvbmVudCBpdCBoYXMgYW4gYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGJ1dCB0aGUgYW5jZXN0b3IgY29tcG9uZW50IGhhcyBOT1QgZmlyZWQgaXRzIHdpbGwgdXBkYXRlIGxpZmVjeWNsZSB5ZXRcbiAgICAgICAgLy8gc28gbGV0J3MganVzdCBjb29sIG91ciBqZXRzIGFuZCB3YWl0IGZvciB0aGUgYW5jZXN0b3IgdG8gY29udGludWUgZmlyc3RcbiAgICAgICAgLy8gdGhpcyB3aWxsIGdldCBmaXJlZCBvZmYgd2hlbiB0aGUgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGZpbmFsbHkgZ2V0cyBhcm91bmQgdG8gcmVuZGVyaW5nIGl0cyBsYXp5IHNlbGZcbiAgICAgICAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10ucHVzaChzY2hlZHVsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzY2hlZHVsZSgpO1xuICAgIH1cbn07XG5jb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IChlbG0pID0+IHtcbiAgICBpZiAoKHBsdC4kZmxhZ3MkICYgMSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLykgPT09IDApIHtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICAgICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgICAgICBjb25zdCBlbmRDb25uZWN0ZWQgPSBjcmVhdGVUaW1lKCdjb25uZWN0ZWRDYWxsYmFjaycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgaWYgKCEoaG9zdFJlZi4kZmxhZ3MkICYgMSAvKiBoYXNDb25uZWN0ZWQgKi8pKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCB0aW1lIHRoaXMgY29tcG9uZW50IGhhcyBjb25uZWN0ZWRcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxIC8qIGhhc0Nvbm5lY3RlZCAqLztcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBmaXJzdCBhbmNlc3RvciBjb21wb25lbnQgKGlmIHRoZXJlIGlzIG9uZSkgYW5kIHJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgYXMgb25lIG9mIHRoZSBhY3RpdmVseSBsb2FkaW5nIGNoaWxkIGNvbXBvbmVudHMgZm9yIGl0cyBhbmNlc3RvclxuICAgICAgICAgICAgICAgIGxldCBhbmNlc3RvckNvbXBvbmVudCA9IGVsbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGFuY2VzdG9yQ29tcG9uZW50ID0gYW5jZXN0b3JDb21wb25lbnQucGFyZW50Tm9kZSB8fCBhbmNlc3RvckNvbXBvbmVudC5ob3N0KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGltYiB1cCB0aGUgYW5jZXN0b3JzIGxvb2tpbmcgZm9yIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBjb21wb25lbnQgdGhhdCBoYXNuJ3QgZmluaXNoZWQgaXRzIGxpZmVjeWNsZSB1cGRhdGUgeWV0XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmNlc3RvckNvbXBvbmVudFsncy1wJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGZvdW5kIHRoaXMgY29tcG9uZW50cyBmaXJzdCBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhpcyBjb21wb25lbnQncyBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgKGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCA9IGFuY2VzdG9yQ29tcG9uZW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExhenkgcHJvcGVydGllc1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy93ZWItY29tcG9uZW50cy9iZXN0LXByYWN0aWNlcyNsYXp5LXByb3BlcnRpZXNcbiAgICAgICAgICAgIGlmIChjbXBNZXRhLiRtZW1iZXJzJCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNtcE1ldGEuJG1lbWJlcnMkKS5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyRmxhZ3MgJiAzMSAvKiBQcm9wICovICYmIGVsbS5oYXNPd25Qcm9wZXJ0eShtZW1iZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZWxtW21lbWJlck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW5kQ29ubmVjdGVkKCk7XG4gICAgfVxufTtcbmNvbnN0IGRpc2Nvbm5lY3RlZENhbGxiYWNrID0gKGVsbSkgPT4ge1xuICAgIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIGlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCkge1xuICAgICAgICBnZXRIb3N0UmVmKGVsbSk7XG4gICAgfVxufTtcbmNvbnN0IGJvb3RzdHJhcExhenkgPSAobGF6eUJ1bmRsZXMsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGVuZEJvb3RzdHJhcCA9IGNyZWF0ZVRpbWUoKTtcbiAgICBjb25zdCBjbXBUYWdzID0gW107XG4gICAgY29uc3QgZXhjbHVkZSA9IG9wdGlvbnMuZXhjbHVkZSB8fCBbXTtcbiAgICBjb25zdCBjdXN0b21FbGVtZW50cyA9IHdpbi5jdXN0b21FbGVtZW50cztcbiAgICBjb25zdCBoZWFkID0gZG9jLmhlYWQ7XG4gICAgY29uc3QgbWV0YUNoYXJzZXQgPSAvKkBfX1BVUkVfXyovIGhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtjaGFyc2V0XScpO1xuICAgIGNvbnN0IHZpc2liaWxpdHlTdHlsZSA9IC8qQF9fUFVSRV9fKi8gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MgPSBbXTtcbiAgICBsZXQgYXBwTG9hZEZhbGxiYWNrO1xuICAgIGxldCBpc0Jvb3RzdHJhcHBpbmcgPSB0cnVlO1xuICAgIE9iamVjdC5hc3NpZ24ocGx0LCBvcHRpb25zKTtcbiAgICBwbHQuJHJlc291cmNlc1VybCQgPSBuZXcgVVJMKG9wdGlvbnMucmVzb3VyY2VzVXJsIHx8ICcuLycsIGRvYy5iYXNlVVJJKS5ocmVmO1xuICAgIGxhenlCdW5kbGVzLm1hcCgobGF6eUJ1bmRsZSkgPT4ge1xuICAgICAgICBsYXp5QnVuZGxlWzFdLm1hcCgoY29tcGFjdE1ldGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNtcE1ldGEgPSB7XG4gICAgICAgICAgICAgICAgJGZsYWdzJDogY29tcGFjdE1ldGFbMF0sXG4gICAgICAgICAgICAgICAgJHRhZ05hbWUkOiBjb21wYWN0TWV0YVsxXSxcbiAgICAgICAgICAgICAgICAkbWVtYmVycyQ6IGNvbXBhY3RNZXRhWzJdLFxuICAgICAgICAgICAgICAgICRsaXN0ZW5lcnMkOiBjb21wYWN0TWV0YVszXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kbWVtYmVycyQgPSBjb21wYWN0TWV0YVsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSBjbXBNZXRhLiR0YWdOYW1lJDtcbiAgICAgICAgICAgIGNvbnN0IEhvc3RFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgICAgICAgICAgLy8gU3RlbmNpbExhenlIb3N0XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3Ioc2VsZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJIb3N0KHNlbGYsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBzaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBpcyB1c2luZyBzaGFkb3cgZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhpcyBicm93c2VyIHN1cHBvcnRzIHNoYWRvdyBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgcmVhZC1vbmx5IHByb3BlcnR5IFwic2hhZG93Um9vdFwiIHRvIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZGluZyB0aGUgc2hhZG93IHJvb3QgYnVpbGQgY29uZGl0aW9uYWxzIHRvIG1pbmltaXplIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcExvYWRGYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFwcExvYWRGYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBMb2FkRmFsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Jvb3RzdHJhcHBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RlZENhbGxiYWNrIHdpbGwgYmUgcHJvY2Vzc2VkIG9uY2UgYWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHQuam1wKCgpID0+IGNvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx0LmptcCgoKSA9PiBkaXNjb25uZWN0ZWRDYWxsYmFjayh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudE9uUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRIb3N0UmVmKHRoaXMpLiRvblJlYWR5UHJvbWlzZSQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNtcE1ldGEuJGxhenlCdW5kbGVJZCQgPSBsYXp5QnVuZGxlWzBdO1xuICAgICAgICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKHRhZ05hbWUpICYmICFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjbXBUYWdzLnB1c2godGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIHByb3h5Q29tcG9uZW50KEhvc3RFbGVtZW50LCBjbXBNZXRhLCAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHtcbiAgICAgICAgdmlzaWJpbGl0eVN0eWxlLmlubmVySFRNTCA9IGNtcFRhZ3MgKyBIWURSQVRFRF9DU1M7XG4gICAgICAgIHZpc2liaWxpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3R5bGVzJywgJycpO1xuICAgICAgICBoZWFkLmluc2VydEJlZm9yZSh2aXNpYmlsaXR5U3R5bGUsIG1ldGFDaGFyc2V0ID8gbWV0YUNoYXJzZXQubmV4dFNpYmxpbmcgOiBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBQcm9jZXNzIGRlZmVycmVkIGNvbm5lY3RlZENhbGxiYWNrcyBub3cgYWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgICBpc0Jvb3RzdHJhcHBpbmcgPSBmYWxzZTtcbiAgICBpZiAoZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLm1hcCgoaG9zdCkgPT4gaG9zdC5jb25uZWN0ZWRDYWxsYmFjaygpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gKGFwcExvYWRGYWxsYmFjayA9IHNldFRpbWVvdXQoYXBwRGlkTG9hZCwgMzApKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmFsbGJhY2sgYXBwTG9hZCBldmVudFxuICAgIGVuZEJvb3RzdHJhcCgpO1xufTtcbmNvbnN0IEZyYWdtZW50ID0gKF8sIGNoaWxkcmVuKSA9PiBjaGlsZHJlbjtcbmNvbnN0IGhvc3RSZWZzID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGdldEhvc3RSZWYgPSAocmVmKSA9PiBob3N0UmVmcy5nZXQocmVmKTtcbmNvbnN0IHJlZ2lzdGVySW5zdGFuY2UgPSAobGF6eUluc3RhbmNlLCBob3N0UmVmKSA9PiBob3N0UmVmcy5zZXQoKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgPSBsYXp5SW5zdGFuY2UpLCBob3N0UmVmKTtcbmNvbnN0IHJlZ2lzdGVySG9zdCA9IChlbG0sIGNtcE1ldGEpID0+IHtcbiAgICBjb25zdCBob3N0UmVmID0ge1xuICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAkaG9zdEVsZW1lbnQkOiBlbG0sXG4gICAgICAgICRjbXBNZXRhJDogY21wTWV0YSxcbiAgICAgICAgJGluc3RhbmNlVmFsdWVzJDogbmV3IE1hcCgpLFxuICAgIH07XG4gICAge1xuICAgICAgICBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQgPSBuZXcgUHJvbWlzZSgocikgPT4gKGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJCA9IHIpKTtcbiAgICAgICAgZWxtWydzLXAnXSA9IFtdO1xuICAgICAgICBlbG1bJ3MtcmMnXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gaG9zdFJlZnMuc2V0KGVsbSwgaG9zdFJlZik7XG59O1xuY29uc3QgaXNNZW1iZXJJbkVsZW1lbnQgPSAoZWxtLCBtZW1iZXJOYW1lKSA9PiBtZW1iZXJOYW1lIGluIGVsbTtcbmNvbnN0IGNvbnNvbGVFcnJvciA9IChlLCBlbCkgPT4gKDAsIGNvbnNvbGUuZXJyb3IpKGUsIGVsKTtcbmNvbnN0IGNtcE1vZHVsZXMgPSAvKkBfX1BVUkVfXyovIG5ldyBNYXAoKTtcbmNvbnN0IGxvYWRNb2R1bGUgPSAoY21wTWV0YSwgaG9zdFJlZiwgaG1yVmVyc2lvbklkKSA9PiB7XG4gICAgLy8gbG9hZE1vZHVsZUltcG9ydFxuICAgIGNvbnN0IGV4cG9ydE5hbWUgPSBjbXBNZXRhLiR0YWdOYW1lJC5yZXBsYWNlKC8tL2csICdfJyk7XG4gICAgY29uc3QgYnVuZGxlSWQgPSBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkO1xuICAgIGNvbnN0IG1vZHVsZSA9IGNtcE1vZHVsZXMuZ2V0KGJ1bmRsZUlkKSA7XG4gICAgaWYgKG1vZHVsZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlW2V4cG9ydE5hbWVdO1xuICAgIH1cbiAgICAvKiFfX1NURU5DSUxfU1RBVElDX0lNUE9SVF9TV0lUQ0hfXyovXG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAvKiBAdml0ZS1pZ25vcmUgKi9cbiAgICAvKiB3ZWJwYWNrSW5jbHVkZTogL1xcLmVudHJ5XFwuanMkLyAqL1xuICAgIC8qIHdlYnBhY2tFeGNsdWRlOiAvXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQvICovXG4gICAgLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG4gICAgYC4vJHtidW5kbGVJZH0uZW50cnkuanMkeycnfWApLnRoZW4oKGltcG9ydGVkTW9kdWxlKSA9PiB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNtcE1vZHVsZXMuc2V0KGJ1bmRsZUlkLCBpbXBvcnRlZE1vZHVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGltcG9ydGVkTW9kdWxlW2V4cG9ydE5hbWVdO1xuICAgIH0sIGNvbnNvbGVFcnJvcik7XG59O1xuY29uc3Qgc3R5bGVzID0gbmV3IE1hcCgpO1xuY29uc3QgcXVldWVEb21SZWFkcyA9IFtdO1xuY29uc3QgcXVldWVEb21Xcml0ZXMgPSBbXTtcbmNvbnN0IHF1ZXVlVGFzayA9IChxdWV1ZSwgd3JpdGUpID0+IChjYikgPT4ge1xuICAgIHF1ZXVlLnB1c2goY2IpO1xuICAgIGlmICghcXVldWVQZW5kaW5nKSB7XG4gICAgICAgIHF1ZXVlUGVuZGluZyA9IHRydWU7XG4gICAgICAgIGlmICh3cml0ZSAmJiBwbHQuJGZsYWdzJCAmIDQgLyogcXVldWVTeW5jICovKSB7XG4gICAgICAgICAgICBuZXh0VGljayhmbHVzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBjb25zdW1lID0gKHF1ZXVlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcXVldWVbaV0ocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbn07XG5jb25zdCBmbHVzaCA9ICgpID0+IHtcbiAgICAvLyBhbHdheXMgZm9yY2UgYSBidW5jaCBvZiBtZWRpdW0gY2FsbGJhY2tzIHRvIHJ1biwgYnV0IHN0aWxsIGhhdmVcbiAgICAvLyBhIHRocm90dGxlIG9uIGhvdyBtYW55IGNhbiBydW4gaW4gYSBjZXJ0YWluIHRpbWVcbiAgICAvLyBET00gUkVBRFMhISFcbiAgICBjb25zdW1lKHF1ZXVlRG9tUmVhZHMpO1xuICAgIC8vIERPTSBXUklURVMhISFcbiAgICB7XG4gICAgICAgIGNvbnN1bWUocXVldWVEb21Xcml0ZXMpO1xuICAgICAgICBpZiAoKHF1ZXVlUGVuZGluZyA9IHF1ZXVlRG9tUmVhZHMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIC8vIHN0aWxsIG1vcmUgdG8gZG8geWV0LCBidXQgd2UndmUgcnVuIG91dCBvZiB0aW1lXG4gICAgICAgICAgICAvLyBsZXQncyBsZXQgdGhpcyB0aGluZyBjb29sIG9mZiBhbmQgdHJ5IGFnYWluIGluIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgICAgIHBsdC5yYWYoZmx1c2gpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IG5leHRUaWNrID0gLypAX19QVVJFX18qLyAoY2IpID0+IHByb21pc2VSZXNvbHZlKCkudGhlbihjYik7XG5jb25zdCB3cml0ZVRhc2sgPSAvKkBfX1BVUkVfXyovIHF1ZXVlVGFzayhxdWV1ZURvbVdyaXRlcywgdHJ1ZSk7XG5cbmV4cG9ydCB7IEZyYWdtZW50IGFzIEYsIEhvc3QgYXMgSCwgYm9vdHN0cmFwTGF6eSBhcyBiLCBjcmVhdGVFdmVudCBhcyBjLCBnZXRFbGVtZW50IGFzIGcsIGgsIHByb21pc2VSZXNvbHZlIGFzIHAsIHJlZ2lzdGVySW5zdGFuY2UgYXMgciB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBIIGFzIEhvc3QsIGMgYXMgY3JlYXRlRXZlbnQsIGcgYXMgZ2V0RWxlbWVudCwgRiBhcyBGcmFnbWVudCB9IGZyb20gJy4vaW5kZXgtYTJhNDdmOTUuanMnO1xuXG5jb25zdCB2b2NhYmx5QnV0dG9uQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrfS5idXR0b257ZGlzcGxheTpmbGV4O2JvcmRlci1yYWRpdXM6NXB4O3dpZHRoOjE5cHg7aGVpZ2h0OjE5cHg7bGluZS1oZWlnaHQ6MTlweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzozcHg7Ym9yZGVyOjFweCBzb2xpZCAjYmFiYWJhO2N1cnNvcjpwb2ludGVyO2JveC1zaXppbmc6Y29udGVudC1ib3g7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmJ1dHRvbiAuc3Zne2hlaWdodDoxNy4xcHh9LmJ1dHRvbjpob3Zlcntib3gtc2hhZG93OjAgNHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMil9XCI7XG5cbmNvbnN0IFZvY2FibHlCdXR0b24gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJ1dHRvblwiIH0sIGgoXCJzdmdcIiwgeyB2aWV3Qm94OiBcIjAgMCA2MzMgNjk5XCIsIGZpbGw6IFwibm9uZVwiLCBjbGFzczogXCJzdmdcIiB9LCBoKFwicGF0aFwiLCB7IGQ6IFwiTTU4NS40MjggMTMwLjQ0M0g0Ni42NjQ2QzIxLjIxMTIgMTMwLjQ0MyAwIDE1MC44MDkgMCAxNzcuMTE2VjQ4Mi42MDlDMCA1MDguMDY3IDIwLjM2MjcgNTI5LjI4MSA0Ni42NjQ2IDUyOS4yODFIODIuMjk5NFY2MzkuNTk5QzgyLjI5OTQgNjYyLjUxMSA5NS4wMjYgNjgyLjg3NyAxMTQuNTQgNjkzLjA2QzEyMi4xNzYgNjk3LjMwMyAxMzAuNjYxIDY5OSAxMzkuMTQ1IDY5OUMxNTEuODcyIDY5OSAxNjMuNzUgNjk0Ljc1NyAxNzQuNzggNjg3LjEyTDM1Mi45NTQgNTMwLjEzSDU4NS40MjhDNjEwLjg4MiA1MzAuMTMgNjMyLjA5MyA1MDkuNzY0IDYzMi4wOTMgNDgzLjQ1N1YxNzcuOTY0QzYzMi4wOTMgMTUxLjY1OCA2MTAuODgyIDEzMC40NDMgNTg1LjQyOCAxMzAuNDQzWk0xNTAuMTc1IDY1NC44NzRDMTQyLjUzOSA2NjAuODE0IDEzNS43NTIgNjU4LjI2OCAxMzMuMjA2IDY1Ni41N0MxMzAuNjYxIDY1NC44NzMgMTIzLjg3MyA2NTAuNjMgMTIzLjg3MyA2MzkuNTk5VjM0MC4wNDVDMTIzLjg3MyAzMjAuNTI3IDEzNy40NDggMjkxLjY3NiAxNTIuNzIgMjc4Ljk0N0wzMjAuNzEzIDEzMi45ODlWNTA0LjY3MkwxNTAuMTc1IDY1NC44NzRaXCIsIGZpbGw6IFwiIzAwNTBGRlwiIH0pLCBoKFwicGF0aFwiLCB7IGQ6IFwiTTUyNC4zNCAzNi4yNDkyQzUyNC4zNCAxMC43OTE0IDQ5Ny4xOSAtMTMuODE4NCA0NjQuOTQ5IDkuMDkzNTdMMzU1LjQ5OSAxMDEuNTlINTI0LjM0VjM2LjI0OTJaXCIsIGZpbGw6IFwiIzAwNTBGRlwiIH0pKSkpKTtcbiAgfVxufTtcblZvY2FibHlCdXR0b24uc3R5bGUgPSB2b2NhYmx5QnV0dG9uQ3NzO1xuXG5jb25zdCB2b2NhYmx5Q2xvc2VCdXR0b25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjExcHg7aGVpZ2h0OjExcHg7bGluZS1oZWlnaHQ6MTFweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmJ1dHRvbntkaXNwbGF5OmJsb2NrO3dpZHRoOjExcHg7aGVpZ2h0OjExcHg7bGluZS1oZWlnaHQ6MTFweCAhaW1wb3J0YW50O2JhY2tncm91bmQ6bm9uZTtib3JkZXI6bm9uZTtwYWRkaW5nOjA7Zm9udC1zaXplOjA7Y3Vyc29yOnBvaW50ZXJ9LnN2Z3t3aWR0aDoxMXB4O2hlaWdodDoxMXB4fS5wYXRoe3N0cm9rZS13aWR0aDowLjVweDtzdHJva2U6IzZhNmE2YX1cIjtcblxuY29uc3QgVm9jYWJseUNsb3NlQnV0dG9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjbG9zZVwiLCA3KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJidXR0b25cIiwgeyBjbGFzczogXCJidXR0b25cIiwgb25DbGljazogKCkgPT4gdGhpcy5jbG9zZS5lbWl0KCkgfSwgaChcInN2Z1wiLCB7IGNsYXNzOiBcInN2Z1wiLCB2aWV3Qm94OiBcIjAgMCAxMCAxMFwiLCBmaWxsOiBcIm5vbmVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBoKFwicGF0aFwiLCB7IGNsYXNzOiBcInBhdGhcIiwgZDogXCJNMTAgMEwwIDEwTTAgMEwxMCAxMFwiIH0pKSkpKTtcbiAgfVxufTtcblZvY2FibHlDbG9zZUJ1dHRvbi5zdHlsZSA9IHZvY2FibHlDbG9zZUJ1dHRvbkNzcztcblxuY29uc3QgbGFuZ3VhZ2VMaXN0ID0ge1xuICAgIGFmOiAnQWZyaWthYW5zJyxcbiAgICBzcTogJ0FsYmFuaWFuJyxcbiAgICBhbTogJ0FtaGFyaWMnLFxuICAgIGFyOiAnQXJhYmljJyxcbiAgICBoeTogJ0FybWVuaWFuJyxcbiAgICBhejogJ0F6ZXJiYWlqYW5pJyxcbiAgICBldTogJ0Jhc3F1ZScsXG4gICAgYmU6ICdCZWxhcnVzaWFuJyxcbiAgICBibjogJ0JlbmdhbGknLFxuICAgIGJzOiAnQm9zbmlhbicsXG4gICAgYmc6ICdCdWxnYXJpYW4nLFxuICAgIGNhOiAnQ2F0YWxhbicsXG4gICAgemg6ICdDaGluZXNlIChTaW1wbGlmaWVkKScsXG4gICAgJ3poLVRXJzogJ0NoaW5lc2UgKFRyYWRpdGlvbmFsKScsXG4gICAgY286ICdDb3JzaWNhbicsXG4gICAgaHI6ICdDcm9hdGlhbicsXG4gICAgY3M6ICdDemVjaCcsXG4gICAgZGE6ICdEYW5pc2gnLFxuICAgIG5sOiAnRHV0Y2gnLFxuICAgIGVuOiAnRW5nbGlzaCcsXG4gICAgZW86ICdFc3BlcmFudG8nLFxuICAgIGV0OiAnRXN0b25pYW4nLFxuICAgIGZpOiAnRmlubmlzaCcsXG4gICAgZnI6ICdGcmVuY2gnLFxuICAgIGZ5OiAnRnJpc2lhbicsXG4gICAgZ2w6ICdHYWxpY2lhbicsXG4gICAga2E6ICdHZW9yZ2lhbicsXG4gICAgZGU6ICdHZXJtYW4nLFxuICAgIGVsOiAnR3JlZWsnLFxuICAgIGd1OiAnR3VqYXJhdGknLFxuICAgIGh0OiAnSGFpdGlhbiBDcmVvbGUnLFxuICAgIGhhOiAnSGF1c2EnLFxuICAgIGhhdzogJ0hhd2FpaWFuJyxcbiAgICBoZTogJ0hlYnJldycsXG4gICAgaGk6ICdIaW5kaScsXG4gICAgaG1uOiAnSG1vbmcnLFxuICAgIGh1OiAnSHVuZ2FyaWFuJyxcbiAgICBpczogJ0ljZWxhbmRpYycsXG4gICAgaWc6ICdJZ2JvJyxcbiAgICBpZDogJ0luZG9uZXNpYW4nLFxuICAgIGdhOiAnSXJpc2gnLFxuICAgIGl0OiAnSXRhbGlhbicsXG4gICAgamE6ICdKYXBhbmVzZScsXG4gICAganY6ICdKYXZhbmVzZScsXG4gICAga246ICdLYW5uYWRhJyxcbiAgICBrazogJ0themFraCcsXG4gICAga206ICdLaG1lcicsXG4gICAgcnc6ICdLaW55YXJ3YW5kYScsXG4gICAga286ICdLb3JlYW4nLFxuICAgIGt1OiAnS3VyZGlzaCcsXG4gICAga3k6ICdLeXJneXonLFxuICAgIGxvOiAnTGFvJyxcbiAgICBsdjogJ0xhdHZpYW4nLFxuICAgIGx0OiAnTGl0aHVhbmlhbicsXG4gICAgbGI6ICdMdXhlbWJvdXJnaXNoJyxcbiAgICBtazogJ01hY2Vkb25pYW4nLFxuICAgIG1nOiAnTWFsYWdhc3knLFxuICAgIG1zOiAnTWFsYXknLFxuICAgIG1sOiAnTWFsYXlhbGFtJyxcbiAgICBtdDogJ01hbHRlc2UnLFxuICAgIG1pOiAnTWFvcmknLFxuICAgIG1yOiAnTWFyYXRoaScsXG4gICAgbW46ICdNb25nb2xpYW4nLFxuICAgIG15OiAnTXlhbm1hciAoQnVybWVzZSknLFxuICAgIG5lOiAnTmVwYWxpJyxcbiAgICBubzogJ05vcndlZ2lhbicsXG4gICAgbnk6ICdOeWFuamEgKENoaWNoZXdhKScsXG4gICAgb3I6ICdPZGlhIChPcml5YSknLFxuICAgIHBzOiAnUGFzaHRvJyxcbiAgICBmYTogJ1BlcnNpYW4nLFxuICAgIHBsOiAnUG9saXNoJyxcbiAgICBwdDogJ1BvcnR1Z3Vlc2UgKFBvcnR1Z2FsLCBCcmF6aWwpJyxcbiAgICBwYTogJ1B1bmphYmknLFxuICAgIHJvOiAnUm9tYW5pYW4nLFxuICAgIHJ1OiAnUnVzc2lhbicsXG4gICAgc206ICdTYW1vYW4nLFxuICAgIGdkOiAnU2NvdHMgR2FlbGljJyxcbiAgICBzcjogJ1NlcmJpYW4nLFxuICAgIHN0OiAnU2Vzb3RobycsXG4gICAgc246ICdTaG9uYScsXG4gICAgc2Q6ICdTaW5kaGknLFxuICAgIHNpOiAnU2luaGFsYSAoU2luaGFsZXNlKScsXG4gICAgc2s6ICdTbG92YWsnLFxuICAgIHNsOiAnU2xvdmVuaWFuJyxcbiAgICBzbzogJ1NvbWFsaScsXG4gICAgZXM6ICdTcGFuaXNoJyxcbiAgICBzdTogJ1N1bmRhbmVzZScsXG4gICAgc3c6ICdTd2FoaWxpJyxcbiAgICBzdjogJ1N3ZWRpc2gnLFxuICAgIHRsOiAnVGFnYWxvZyAoRmlsaXBpbm8pJyxcbiAgICB0ZzogJ1RhamlrJyxcbiAgICB0YTogJ1RhbWlsJyxcbiAgICB0dDogJ1RhdGFyJyxcbiAgICB0ZTogJ1RlbHVndScsXG4gICAgdGg6ICdUaGFpJyxcbiAgICB0cjogJ1R1cmtpc2gnLFxuICAgIHRrOiAnVHVya21lbicsXG4gICAgdWs6ICdVa3JhaW5pYW4nLFxuICAgIHVyOiAnVXJkdScsXG4gICAgdWc6ICdVeWdodXInLFxuICAgIHV6OiAnVXpiZWsnLFxuICAgIHZpOiAnVmlldG5hbWVzZScsXG4gICAgY3k6ICdXZWxzaCcsXG4gICAgeGg6ICdYaG9zYScsXG4gICAgeWk6ICdZaWRkaXNoJyxcbiAgICB5bzogJ1lvcnViYScsXG4gICAgenU6ICdadWx1Jyxcbn07XG5jb25zdCBnZXRGdWxsTGFuZ3VhZ2VOYW1lID0gKGNvZGUpID0+IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGxhbmd1YWdlTGlzdFtjb2RlXSA/PyBjb2RlO1xufTtcblxuY29uc3QgZXhwbG9kZSA9IChsaW5lcykgPT4ge1xuICByZXR1cm4gbGluZXNcbiAgICAuc3BsaXQoYFxcbmApXG4gICAgLm1hcCgobGluZSkgPT4gbGluZS5yZXBsYWNlKC9eXFwqICovLCAnJykucmVwbGFjZSgvICskLywgJycpKVxuICAgIC5maWx0ZXIoKGxpbmUpID0+IGxpbmUgIT09ICcnKTtcbn07XG5cbmNvbnN0IHZvY2FibHlMYW5ndWFnZUNzcyA9IFwiOmhvc3R7Zm9udC1mYW1pbHk6YXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtmb250LXNpemU6MTZweCAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudDtjb2xvcjojNmE2YTZhICFpbXBvcnRhbnQ7ZGlzcGxheTpibG9ja30uY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5we21hcmdpbi1ib3R0b206MTZweH0uaDF7Zm9udC1zaXplOjI2cHg7bWFyZ2luLWJvdHRvbToxNnB4fS5idXR0b257Zm9udC1mYW1pbHk6YXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtmb250LXNpemU6MTZweCAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudDtjb2xvcjojNmE2YTZhICFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmFja2dyb3VuZDojMDA1MGZmO2NvbG9yOiNmZmZmZmYgIWltcG9ydGFudDtib3JkZXI6bm9uZTtwYWRkaW5nOjhweDtmb250OmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwO2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6MjBweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt3aWR0aDpjYWxjKDEwMCUgLSA2cHggKiAyKTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMjAwbXM7bWFyZ2luOjAgNnB4IDlweDtib3gtc2hhZG93OjAgM3B4IDZweCByZ2JhKDAsIDgwLCAyNTUsIDAuMjUpfS5idXR0b246aG92ZXIsLmJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kOiMwMDQ3ZTN9LmJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZDojMDA0N2UzO2JveC1zaGFkb3c6aW5zZXQgMHB4IDBweCAxNXB4IHJnYmEoMywgMzYsIDEwOCwgMC40KX1zZWxlY3R7Y29sb3I6IzZhNmE2YTtmb250LXNpemU6MTQuNHB4O3BhZGRpbmc6MTBweCAxNHB4O2JvcmRlcjowLjVweCBzb2xpZCAjYmFiYWJhO2JvcmRlci1yYWRpdXM6OHB4O2FwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kOiNmYmZiZmIgdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHdpZHRoPVxcXCIxMVxcXCIgaGVpZ2h0PVxcXCI3XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTEgN1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAgMSA1IDYgMSAxXFxcIiBzdHJva2U9XFxcInJnYigxMDksIDEwOSwgMTA5KVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIuNVxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiLz48L3N2Zz4nKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCAxNHB4IHRvcCA1MCU7b3V0bGluZTpub25lO3dpZHRoOjEwMCV9XCI7XG5cbmNvbnN0IFZvY2FibHlMYW5ndWFnZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jb25maXJtID0gY3JlYXRlRXZlbnQodGhpcywgXCJjb25maXJtXCIsIDcpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImRhdGEtdGVzdFwiOiBcImxhbmd1YWdlXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRhaW5lclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoMSBwXCIgfSwgXCJJIHN0dWR5XCIpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicFwiIH0sIGgoXCJzZWxlY3RcIiwgeyBcImRhdGEtdGVzdFwiOiBcInNvdXJjZS1sYW5ndWFnZS1zZWxlY3RvclwiLCByZWY6IChlbCkgPT4gKHRoaXMuc291cmNlTGFuZ3VhZ2VTZWxlY3QgPSBlbCkgfSwgT2JqZWN0LmVudHJpZXMobGFuZ3VhZ2VMaXN0KS5tYXAoKFtjb2RlLCBuYW1lXSkgPT4gKGgoXCJvcHRpb25cIiwgeyBzZWxlY3RlZDogdGhpcy5zb3VyY2VMYW5ndWFnZSA9PT0gY29kZSwgdmFsdWU6IGNvZGUgfSwgbmFtZSkpKSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaDEgcFwiIH0sIFwiSSBzcGVha1wiKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBcIiB9LCBoKFwic2VsZWN0XCIsIHsgXCJkYXRhLXRlc3RcIjogXCJ0YXJnZXQtbGFuZ3VhZ2Utc2VsZWN0b3JcIiwgcmVmOiAoZWwpID0+ICh0aGlzLnRhcmdldExhbmd1YWdlU2VsZWN0ID0gZWwpIH0sIE9iamVjdC5lbnRyaWVzKGxhbmd1YWdlTGlzdCkubWFwKChbY29kZSwgbmFtZV0pID0+IChoKFwib3B0aW9uXCIsIHsgc2VsZWN0ZWQ6IHRoaXMudGFyZ2V0TGFuZ3VhZ2UgPT09IGNvZGUsIHZhbHVlOiBjb2RlIH0sIG5hbWUpKSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJ1dHRvbi1jb250YWluZXJcIiB9LCBoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMuY29uZmlybS5lbWl0KHtcbiAgICAgICAgc291cmNlTGFuZ3VhZ2U6IHRoaXMuc291cmNlTGFuZ3VhZ2VTZWxlY3QudmFsdWUsXG4gICAgICAgIHRhcmdldExhbmd1YWdlOiB0aGlzLnRhcmdldExhbmd1YWdlU2VsZWN0LnZhbHVlLFxuICAgICAgfSksIFwiZGF0YS10ZXN0XCI6IFwic3Vic2NyaWJlLWJ1dHRvblwiLCBkaXNhYmxlZDogdGhpcy53YWl0aW5nIH0sIHRoaXMud2FpdGluZyA/ICdTYXZpbmcuLi4nIDogJ1NhdmUnKSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5TGFuZ3VhZ2Uuc3R5bGUgPSB2b2NhYmx5TGFuZ3VhZ2VDc3M7XG5cbmNvbnN0IHZvY2FibHlMb2dvQ3NzID0gXCI6aG9zdHstLWxvZ28tY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDowfS5zdmd7aGVpZ2h0OjEwMCU7d2lkdGg6YXV0b30uc3ZnIC5wcmltYXJ5e2ZpbGw6IzAwNTBmZn1cIjtcblxuY29uc3QgVm9jYWJseUxvZ28gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInN2Z1wiLCB7IHdpZHRoOiBcIjEwODZcIiwgaGVpZ2h0OiBcIjI1OFwiLCB2aWV3Qm94OiBcIjAgMCAxMDg2IDI1OFwiLCBjbGFzczogXCJzdmdcIiwgZmlsbDogXCJub25lXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgaChcInBhdGhcIiwgeyBkOiBcIk0zNjMuODEzIDE5OS4wNUwzMjMuMzIgNTAuNzU3OEgzNDYuOTkzTDM3OC40NTMgMTc4LjhIMzc5LjY5OUw0MTEuMTU5IDUwLjc1NzhINDM0LjgzMUwzOTQuMzM4IDE5OS4wNUgzNjMuODEzWlwiLCBmaWxsOiBcIiMyMTIxMjFcIiB9KSwgaChcInBhdGhcIiwgeyBkOiBcIk00OTQuOTQ4IDIwMS44NTNDNDgyLjQ4OCAyMDEuODUzIDQ3Mi44MzIgMTk5LjM2MSA0NjUuNjY4IDE5NC4wNjVDNDU4LjUwNCAxODguNzY5IDQ1My41MiAxODEuMjkyIDQ1MC40MDYgMTcxLjYzNEM0NDcuMjkxIDE2MS45NzcgNDQ1LjczMyAxNTAuNDUgNDQ1LjczMyAxMzcuMDU0QzQ0NS43MzMgMTIzLjY1OCA0NDcuMjkxIDExMi4xMzEgNDUwLjQwNiAxMDIuNDczQzQ1My41MiA5Mi44MTUyIDQ1OC41MDQgODUuMzM4NSA0NjUuNjY4IDgwLjA0MjNDNDcyLjgzMiA3NC43NDYyIDQ4Mi40ODggNzIuMjUzOSA0OTQuOTQ4IDcyLjI1MzlDNTA3LjQwNyA3Mi4yNTM5IDUxNy4wNjMgNzQuNzQ2MiA1MjQuMjI3IDgwLjA0MjNDNTMxLjM5MSA4NS4zMzg1IDUzNi4zNzUgOTIuODE1MiA1MzkuMTc4IDEwMi40NzNDNTQyLjI5MyAxMTIuMTMxIDU0My41MzkgMTIzLjY1OCA1NDMuNTM5IDEzNy4wNTRDNTQzLjUzOSAxNTAuNDUgNTQxLjk4MiAxNjEuOTc3IDUzOS4xNzggMTcxLjYzNEM1MzYuMzc1IDE4MS4yOTIgNTMxLjA4IDE4OC43NjkgNTI0LjIyNyAxOTQuMDY1QzUxNy4wNjMgMTk5LjM2MSA1MDcuNDA3IDIwMS44NTMgNDk0Ljk0OCAyMDEuODUzWk00OTQuOTQ4IDE4My43ODRDNDk5LjkzMSAxODMuNzg0IDUwMy45ODEgMTgzLjE2MSA1MDcuNDA3IDE4MS45MTVDNTEwLjgzMyAxODAuNjY5IDUxMy4zMjUgMTc4LjQ4OCA1MTUuNTA2IDE3NS4wNjFDNTE3LjY4NiAxNzEuOTQ2IDUxOC45MzIgMTY2Ljk2MSA1MTkuODY2IDE2MS4wNDJDNTIwLjQ4OSAxNTQuODExIDUyMS4xMTIgMTQ3LjAyMyA1MjEuMTEyIDEzNy4wNTRDNTIxLjExMiAxMjcuMDg1IDUyMC44MDEgMTE5LjI5NiA1MTkuODY2IDExMy4wNjVDNTE4LjkzMiAxMDYuODM0IDUxNy42ODYgMTAyLjE2MSA1MTUuNTA2IDk5LjA0NkM1MTMuNjM3IDk1LjkzMDcgNTEwLjgzMyA5My40Mzg1IDUwNy40MDcgOTIuMTkyNEM1MDMuOTgxIDkwLjk0NjIgNDk5LjkzMSA5MC4zMjMyIDQ5NC45NDggOTAuMzIzMkM0ODkuOTY0IDkwLjMyMzIgNDg1LjYwMyA5MC45NDYyIDQ4Mi4xNzcgOTIuMTkyNEM0NzguNzUxIDkzLjQzODUgNDc2LjI1OSA5NS42MTkxIDQ3NC4wNzggOTkuMDQ2QzQ3MS44OTggMTAyLjE2MSA0NzAuNjUyIDEwNy4xNDYgNDY5LjcxOCAxMTMuMDY1QzQ2OC43ODMgMTE5LjI5NiA0NjguNDcyIDEyNy4wODUgNDY4LjQ3MiAxMzcuMDU0QzQ2OC40NzIgMTQ3LjAyMyA0NjguNzgzIDE1NC44MTEgNDY5LjcxOCAxNjEuMDQyQzQ3MC42NTIgMTY3LjI3MyA0NzEuODk4IDE3MS45NDYgNDc0LjA3OCAxNzUuMDYxQzQ3Ni4yNTkgMTc4LjE3NyA0NzguNzUxIDE4MC42NjkgNDgyLjE3NyAxODEuOTE1QzQ4NS42MDMgMTgzLjE2MSA0ODkuOTY0IDE4My43ODQgNDk0Ljk0OCAxODMuNzg0WlwiLCBmaWxsOiBcIiMyMTIxMjFcIiB9KSwgaChcInBhdGhcIiwgeyBkOiBcIk02MjIuMDMzIDIwMS44NTNDNjEyLjA2NiAyMDEuODUzIDYwMy4wMzMgMTk5LjY3MyA1OTUuMjQ2IDE5NS4zMTFDNTg3LjQ1OSAxOTAuOTUgNTgxLjU0IDE4My43ODQgNTc3LjE4IDE3NC4xMjZDNTcyLjgxOSAxNjQuNDY5IDU3MC42MzggMTUyLjAwNyA1NzAuNjM4IDEzNi40M0M1NzAuNjM4IDEyMy42NTcgNTcyLjE5NiAxMTMuMDY1IDU3NC45OTkgMTA0LjY1NEM1NzcuODAzIDk2LjI0MjMgNTgxLjg1MiA4OS42OTk5IDU4Ny4xNDcgODUuMDI2OEM1OTIuMTMxIDgwLjM1MzcgNTk4LjM2IDc2LjkyNyA2MDUuMjEzIDc1LjA1NzhDNjEyLjA2NiA3My4xODg1IDYxOS4yMyA3MS45NDI0IDYyNy4wMTcgNzEuOTQyNEM2MzMuMjQ3IDcxLjk0MjQgNjM5LjE2NSA3Mi4yNTQgNjQ1LjA4MyA3My4xODg2QzY1MS4wMDEgNzQuMTIzMiA2NTUuNjczIDc0Ljc0NjEgNjU5LjEgNzUuNjgwN0w2NTYuNjA4IDkzLjQzODVDNjUzLjQ5MyA5My4xMjcgNjQ4LjgyMSA5Mi41MDM2IDY0Mi45MDMgOTEuNTY5QzYzNi42NzMgOTAuOTQ1OSA2MzAuNDQzIDkwLjMyMzIgNjI0LjIxNCA5MC4zMjMyQzYxOC45MTggOTAuMzIzMiA2MTQuNTU4IDkwLjYzNDQgNjExLjEzMSA5MS41NjlDNjA4LjAxNiA5Mi41MDM2IDYwNS4yMTMgOTMuNzQ5OSA2MDMuMzQ0IDk1LjYxOTFDNjAwLjU0MSA5OC40MjMgNTk4LjM2IDEwMy40MDggNTk2LjgwMyAxMTAuNTczQzU5NS4yNDYgMTE3LjczOCA1OTQuMzExIDEyNi40NjEgNTk0LjMxMSAxMzYuNzQyQzU5NC4zMTEgMTQ2LjA4OCA1OTQuOTM0IDE1My44NzcgNTk2LjQ5MiAxNTkuNzk2QzU5OC4wNDkgMTY1LjcxNSA1OTkuNjA2IDE3MC4wNzcgNjAxLjQ3NSAxNzIuODgxQzYwMy4zNDQgMTc1Ljk5NiA2MDUuMjEzIDE3Ny44NjUgNjA2Ljc3MSAxNzkuMTExQzYwNy43MDUgMTc5LjczNCA2MDkuMjYyIDE4MC42NjkgNjExLjEzMSAxODEuMjkyQzYxMyAxODEuOTE1IDYxNS44MDQgMTgyLjUzOCA2MTkuMjMgMTgyLjUzOEM2MjIuOTY4IDE4Mi41MzggNjI3LjAxNyAxODEuOTE1IDYzMS4zNzggMTgwLjk4QzYzNS43MzkgMTgwLjA0NiA2MzkuNDc2IDE3OC44IDY0My4yMTQgMTc3LjU1NEM2NDYuOTUyIDE3Ni4zMDcgNjUxLjAwMSAxNzQuNzQ5IDY1NS42NzMgMTcyLjU2OUw2NjIuMjE1IDE4OS4zOTJDNjU1LjY3MyAxOTMuMTMgNjQ5LjQ0NCAxOTYuMjQ2IDY0My41MjYgMTk4LjExNUM2MzcuNjA3IDE5OS45ODQgNjMwLjEzMiAyMDEuODUzIDYyMi4wMzMgMjAxLjg1M1pcIiwgZmlsbDogXCIjMjEyMTIxXCIgfSksIGgoXCJwYXRoXCIsIHsgZDogXCJNNzE0Ljg1NSAyMDEuODUzQzcwOC4zMTQgMjAxLjg1MyA3MDIuMzk2IDIwMC4yOTYgNjk3LjQxMiAxOTcuMThDNjkyLjExNyAxOTQuMDY1IDY4OC4wNjggMTg5LjM5MiA2ODUuMjY0IDE4My40NzNDNjgyLjQ2MSAxNzcuNTUzIDY4MC45MDQgMTcwLjM4OCA2ODAuOTA0IDE2MS45NzdDNjgwLjkwNCAxNTEuNjk2IDY4My4wODQgMTQzLjkwNyA2ODcuMTMzIDEzNy45ODhDNjkxLjQ5NCAxMzIuMzggNjk3LjQxMiAxMjguMDE5IDcwNS4xOTkgMTI1LjUyN0M3MTIuOTg2IDEyMy4wMzQgNzIyLjAxOSAxMjEuNzg4IDczMi4yOTggMTIxLjc4OEg3NTIuODU2Qzc1Mi44NTYgMTE0LjkzNSA3NTIuNTQ1IDEwOS4zMjcgNzUyLjIzMyAxMDQuOTY1Qzc1MS45MjIgMTAwLjYwNCA3NTAuNjc2IDk3LjE3NyA3NDkuMTE5IDk0Ljk5NjJDNzQ3Ljg3MyA5My40Mzg1IDc0Ni4zMTUgOTIuMTkyMSA3NDQuMTM1IDkxLjU2OUM3NDEuOTU0IDkwLjk0NTkgNzM5LjE1MSA5MC42MzQ2IDczNS43MjUgOTAuNjM0NkM3MzAuNDMgOTAuNjM0NiA3MjQuODIzIDkxLjI1NzcgNzE5LjUyOCA5Mi4xOTIzQzcxNC4yMzIgOTMuMTI2OSA3MDkuMjQ5IDk0LjM3MyA3MDQuODg4IDk1LjYxOTFDNzAwLjUyNyA5Ni44NjUzIDY5NS41NDMgOTguNzM0NCA2OTAuMjQ4IDEwMC42MDRMNjg0LjAxOCA4My43ODA2QzY4OS42MjUgODEuMjg4MyA2OTQuNjA5IDc5LjQxOTQgNjk5LjI4MSA3Ny44NjE3QzcwMy45NTMgNzYuMzA0IDcwOS4yNDkgNzUuMDU3NyA3MTUuMTY3IDczLjgxMTVDNzIxLjA4NSA3Mi41NjU0IDcyNy4wMDMgNzEuOTQyNCA3MzMuNTQ0IDcxLjk0MjRDNzQzLjgyMyA3MS45NDI0IDc1Mi4yMzMgNzMuODExNCA3NTguMTUyIDc3LjU0OThDNzY0LjM4MSA4MS4yODgzIDc2OC43NDIgODYuNTg0NyA3NzEuMjM0IDkzLjQzODVDNzc0LjAzNyAxMDAuMjkyIDc3NS4yODMgMTA4LjM5MiA3NzUuMjgzIDExNy43MzhWMTk5LjA0OUg3NjAuMzMyTDc1Ny4yMTcgMTg1Ljk2NUg3NTUuOTcxQzc1NS4wMzcgMTg2LjU4OCA3NTMuMTY4IDE4Ny44MzQgNzUwLjY3NiAxODkuNzAzQzc0OC4xODQgMTkxLjI2MSA3NDUuMDY5IDE5My4xMyA3NDEuMzMxIDE5NUM3MzcuNTk0IDE5Ni44NjkgNzMzLjU0NCAxOTguNDI2IDcyOS4xODQgMTk5Ljk4NEM3MjQuNTExIDIwMS4yMyA3MTkuODM5IDIwMS44NTMgNzE0Ljg1NSAyMDEuODUzWk03MTkuODM5IDE4Mi44NUM3MjQuNTExIDE4Mi44NSA3MjkuMTg0IDE4Mi4yMjcgNzMzLjU0NCAxODAuNjY5QzczNy45MDUgMTc5LjExMSA3NDEuOTU0IDE3Ny41NTQgNzQ1LjM4MSAxNzUuOTk2Qzc0OC44MDcgMTc0LjQzOCA3NTAuOTg3IDE3My4xOTIgNzUyLjU0NSAxNzIuMjU3VjE0MS4xMDRDNzUxLjI5OSAxNDAuNzkyIDc0OC44MDcgMTQwLjQ4MSA3NDUuMDY5IDE0MC4xNjlDNzQxLjMzMSAxMzkuODU4IDczNi42NTkgMTM5LjU0NiA3MzEuMDUyIDEzOS41NDZDNzE4LjkwNSAxMzkuNTQ2IDcxMS40MjkgMTQwLjc5MiA3MDguNjI2IDE0My4yODVDNzA3LjA2OCAxNDQuNTMxIDcwNS44MjIgMTQ2LjcxMSA3MDQuODg4IDE0OS44MjdDNzAzLjk1MyAxNTIuOTQyIDcwMy42NDIgMTU2Ljk5MiA3MDMuNjQyIDE2MS42NjVDNzAzLjY0MiAxNjkuMTQyIDcwNC44ODggMTc0LjQzOCA3MDcuMzggMTc3Ljg2NUM3MDkuODcyIDE4MS4yOTIgNzEzLjkyMSAxODIuODUgNzE5LjgzOSAxODIuODVaXCIsIGZpbGw6IFwiIzIxMjEyMVwiIH0pLCBoKFwicGF0aFwiLCB7IGQ6IFwiTTg2MC42MyAyMDEuODU0Qzg1Ni41OCAyMDEuODU0IDg1MS41OTcgMjAxLjU0MiA4NDUuNjc4IDIwMC42MDdDODM5Ljc2IDE5OS42NzMgODMzLjg0MiAxOTguNzM4IDgyNy42MTIgMTk3LjQ5MkM4MjEuNjk0IDE5Ni4yNDYgODE2LjM5OSAxOTQuNjg4IDgxMS43MjcgMTkzLjQ0MlYzOC42MDc5SDgzNC4xNTRWNzYuNjE1N0M4MzUuNzExIDc2LjMwNDIgODM4LjIwMyA3NS42ODExIDg0MS42MjkgNzUuMDU4Qzg0NS4wNTYgNzQuNDM0OSA4NDguNDgyIDczLjgxMTkgODUyLjg0MyA3My4xODg5Qzg1Ni44OTIgNzIuNTY1OCA4NjAuOTQxIDcyLjI1NDEgODY0Ljk5MSA3Mi4yNTQxQzg3OC4wNzMgNzIuMjU0MSA4ODguMDQgNzcuMjM4OCA4OTUuMjA0IDg3LjIwOEM5MDIuMzY5IDk3LjE3NzIgOTA1Ljc5NSAxMTMuMDY1IDkwNS43OTUgMTM1LjE4NEM5MDUuNzk1IDE0OC44OTIgOTA0LjU0OSAxNjAuMTA4IDkwMi4wNTcgMTY4LjgzMUM4OTkuNTY1IDE3Ny41NTQgODk2LjEzOSAxODQuNDA4IDg5MS43NzggMTg5LjA4MUM4ODcuNDE3IDE5My43NTQgODgyLjc0NSAxOTcuMTggODc3LjEzOCAxOTkuMDVDODcxLjUzMiAyMDAuOTE5IDg2Ni4yMzYgMjAxLjg1NCA4NjAuNjMgMjAxLjg1NFpNODYwLjAwNyAxODIuODVDODYzLjQzMyAxODIuODUgODY2LjIzNiAxODIuNTM4IDg2OC40MTcgMTgyLjIyN0M4NzAuNTk3IDE4MS45MTUgODcyLjE1NSAxODAuOTgxIDg3My40MDEgMTc5LjczNEM4NzQuNjQ2IDE3OC40ODggODc1Ljg5MiAxNzYuMzA4IDg3Ny40NSAxNzMuNTA0Qzg3OS4wMDcgMTcwLjcgODc5Ljk0MiAxNjUuNzE1IDg4MS4xODggMTU5LjE3M0M4ODIuMTIyIDE1Mi42MzEgODgyLjc0NSAxNDMuMjg1IDg4Mi43NDUgMTMxLjc1OEM4ODIuNzQ1IDEyMC4yMzEgODgyLjEyMiAxMTEuNTA4IDg4MS4xODggMTA1LjlDODgwLjI1MyAxMDAuMjkzIDg3OC4zODQgOTYuNTU0MiA4NzYuNTE1IDk0Ljk5NjVDODc0LjAyNCA5Mi44MTU3IDg2OS4zNTEgOTEuNTY5MyA4NjIuMTg3IDkxLjU2OTNDODU1LjMzNSA5MS41NjkzIDg0OS40MTYgOTIuMTkyNiA4NDQuNDMzIDkzLjQzODhDODM5LjQ0OSA5NC42ODQ5IDgzNi4wMjMgOTUuNjE5NiA4MzQuMTU0IDk2LjU1NDJWMTgwLjA0NkM4MzUuNCAxODAuMzU3IDgzNi45NTcgMTgwLjY2OSA4MzkuNDQ5IDE4MS4yOTJDODQxLjk0MSAxODEuOTE1IDg0NC43NDQgMTgyLjIyNyA4NDguMTcgMTgyLjUzOEM4NTEuNTk3IDE4Mi41MzggODU1LjY0NiAxODIuODUgODYwLjAwNyAxODIuODVaXCIsIGZpbGw6IFwiIzIxMjEyMVwiIH0pLCBoKFwicGF0aFwiLCB7IGQ6IFwiTTkzOS40MzUgMTk5LjA1VjM4LjI5NjRIOTYxLjg2MlYxOTkuMDVIOTM5LjQzNVpcIiwgZmlsbDogXCIjMjEyMTIxXCIgfSksIGgoXCJwYXRoXCIsIHsgZDogXCJNMTAwNy4wMyAyMzQuNTY1TDEwMjQuMTYgMTg3LjIxMkw5ODMuOTc3IDc1LjA1ODFIMTAwNy4zNEwxMDM0LjEzIDE2My4yMjNIMTAzNS4wNkwxMDYxLjU0IDc1LjA1ODFIMTA4NS4yMUwxMDQyLjg1IDE5Mi4xOTZMMTAzMC4zOSAyMzQuODc3SDEwMDcuMDNWMjM0LjU2NVpcIiwgZmlsbDogXCIjMjEyMTIxXCIgfSksIGgoXCJwYXRoXCIsIHsgZDogXCJNMjE2LjkyOCA0OC44ODg4SDE5LjEzMTlDOS43ODcyNSA0OC44ODg4IDIgNTYuMzY1NyAyIDY2LjAyMzVWMTc4LjE3OEMyIDE4Ny41MjQgOS40NzU3NiAxOTUuMzEyIDE5LjEzMTkgMTk1LjMxMkgzMi4yMTQ1VjIzNS44MTJDMzIuMjE0NSAyNDQuMjI0IDM2Ljg4NjkgMjUxLjcwMSA0NC4wNTExIDI1NS40MzlDNDYuODU0NSAyNTYuOTk3IDQ5Ljk2OTUgMjU3LjYyIDUzLjA4NDQgMjU3LjYyQzU3Ljc1NjcgMjU3LjYyIDYyLjExNzYgMjU2LjA2MiA2Ni4xNjY5IDI1My4yNThMMTMxLjU4IDE5NS42MjRIMjE2LjkyOEMyMjYuMjczIDE5NS42MjQgMjM0LjA2IDE4OC4xNDcgMjM0LjA2IDE3OC40ODlWNjYuMzM0OUMyMzQuMDYgNTYuNjc3MiAyMjYuMjczIDQ4Ljg4ODggMjE2LjkyOCA0OC44ODg4Wk01Ny4xMzM3IDI0MS40MkM1NC4zMzAzIDI0My42MDEgNTEuODM4NCAyNDIuNjY2IDUwLjkwMzkgMjQyLjA0M0M0OS45Njk1IDI0MS40MiA0Ny40Nzc1IDIzOS44NjIgNDcuNDc3NSAyMzUuODEyVjEyNS44MzlDNDcuNDc3NSAxMTguNjczIDUyLjQ2MTMgMTA4LjA4MSA1OC4wNjgyIDEwMy40MDhMMTE5Ljc0MyA0OS44MjM2VjE4Ni4yNzdMNTcuMTMzNyAyNDEuNDJaXCIsIGNsYXNzOiBcInByaW1hcnlcIiB9KSwgaChcInBhdGhcIiwgeyBkOiBcIk0xOTQuNTAxIDE0LjMwOEMxOTQuNTAxIDQuOTYxNzggMTg0LjUzMyAtNC4wNzMwOCAxNzIuNjk2IDQuMzM4NDdMMTMyLjUxNCAzOC4yOTYzSDE5NC41MDFWMTQuMzA4WlwiLCBjbGFzczogXCJwcmltYXJ5XCIgfSkpKSk7XG4gIH1cbn07XG5Wb2NhYmx5TG9nby5zdHlsZSA9IHZvY2FibHlMb2dvQ3NzO1xuXG5jb25zdCB2b2NhYmx5UG9wdXBDc3MgPSBcIjpob3N0e2ZvbnQtZmFtaWx5OmFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHggIWltcG9ydGFudDtsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnQ7Y29sb3I6IzZhNmE2YSAhaW1wb3J0YW50Oy0tbWF4LWhlaWdodDo0OHZoOy0tYmFja2dyb3VuZC1yZ2I6MjU1LCAyNTUsIDI1NTstLWhlYWRlci1oZWlnaHQ6MTlweDstLWhlYWRlci1wYWRkaW5nLXRvcDoxMXB4Oy0taGVhZGVyLXBhZGRpbmctYm90dG9tOjIwcHg7LS1oZWFkZXItZGVjYXktbGVuZ3RoOjEwcHg7LS1wYWRkaW5nLXg6MjBweDstLXBhZGRpbmctYm90dG9tOjIwcHg7LS1zaGFkb3ctc3ByZWFkOjEwcHg7LS1zaGFkb3ctdi1vZmZzZXQ6NHB4Oy0tc2Nyb2xsYmFyLXRyYWNrOjZweDstLXNjcm9sbGJhci1ndXR0ZXI6Y2FsYygodmFyKC0tcGFkZGluZy14KSAtIHZhcigtLXNjcm9sbGJhci10cmFjaykpIC8gMik7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzpjYWxjKHZhcigtLXNoYWRvdy1zcHJlYWQpIC0gdmFyKC0tc2hhZG93LXYtb2Zmc2V0KSkgdmFyKC0tc2hhZG93LXNwcmVhZCkgY2FsYyh2YXIoLS1zaGFkb3ctc3ByZWFkKSArIHZhcigtLXNoYWRvdy12LW9mZnNldCkpfTpob3N0IC5wb3B1cHtiYWNrZ3JvdW5kOnJnYih2YXIoLS1iYWNrZ3JvdW5kLXJnYikpO2JveC1zaGFkb3c6MCB2YXIoLS1zaGFkb3ctdi1vZmZzZXQpIHZhcigtLXNoYWRvdy1zcHJlYWQpIHJnYmEoMCwgMCwgMCwgMC4yKTtib3JkZXI6MXB4IHNvbGlkICNiYWJhYmE7Ym9yZGVyLXJhZGl1czo4cHg7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctdG9wOmNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyB2YXIoLS1oZWFkZXItcGFkZGluZy10b3ApKTtwYWRkaW5nLXJpZ2h0OnZhcigtLXNjcm9sbGJhci1ndXR0ZXIpO3BhZGRpbmctYm90dG9tOjFweDtwYWRkaW5nLWxlZnQ6MH06aG9zdCAuaGVhZGVye3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHdoaXRlIHZhcigtLWhlYWRlci1kZWNheS1sZW5ndGgpKTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtoZWlnaHQ6dmFyKC0taGVhZGVyLWhlaWdodCk7Ym9yZGVyLXJhZGl1czo4cHggMCAwIDA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOnZhcigtLWhlYWRlci1wYWRkaW5nLXRvcCkgMCB2YXIoLS1oZWFkZXItcGFkZGluZy1ib3R0b20pIHZhcigtLXBhZGRpbmcteCk7bWFyZ2luLXJpZ2h0OnZhcigtLXBhZGRpbmcteCl9Omhvc3QgLmhlYWRlciAubG9nb3toZWlnaHQ6dmFyKC0taGVhZGVyLWhlaWdodCl9Omhvc3QgLmhlYWRlciAuY2xvc2V7Ym9yZGVyOm5vbmU7cGFkZGluZzowO2JhY2tncm91bmQ6bm9uZTt0ZXh0LWFsaWduOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjttYXJnaW4tbGVmdDphdXRvfTpob3N0IC5mb290ZXJ7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMGRlZywgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OnZhcigtLXBhZGRpbmctYm90dG9tKTttYXJnaW4tcmlnaHQ6dmFyKC0tcGFkZGluZy14KTtib3JkZXItcmFkaXVzOjAgMCAwIDhweH06aG9zdCAuYm9keXttaW4td2lkdGg6MTQwcHg7b3ZlcmZsb3c6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7bWF4LWhlaWdodDpjYWxjKHZhcigtLW1heC1oZWlnaHQpIC0gdmFyKC0taGVhZGVyLXBhZGRpbmctdG9wKSAtIHZhcigtLWhlYWRlci1wYWRkaW5nLXRvcCkgLSB2YXIoLS1oZWFkZXItcGFkZGluZy1ib3R0b20pIC0gdmFyKC0tcGFkZGluZy1ib3R0b20pIC0gdmFyKC0tc2hhZG93LXNwcmVhZCkgKiAyKTtzY3JvbGxiYXItZ3V0dGVyOnN0YWJsZTtwYWRkaW5nLXRvcDp2YXIoLS1oZWFkZXItcGFkZGluZy1ib3R0b20pO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXgpO3BhZGRpbmctcmlnaHQ6Y2FsYyh2YXIoLS1wYWRkaW5nLXgpIC0gdmFyKC0tc2Nyb2xsYmFyLXRyYWNrKSAtIHZhcigtLXNjcm9sbGJhci1ndXR0ZXIpKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSl9Omhvc3QgLmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyey13ZWJraXQtYXBwZWFyYW5jZTpub25lO3dpZHRoOnZhcigtLXNjcm9sbGJhci10cmFjayl9Omhvc3QgLmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQtY29sb3I6I2E0YTRhNDstd2Via2l0LWJveC1zaGFkb3c6MCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSl9Omhvc3QgLmNvbnRlbnQtd3JhcHBlcntvdmVyZmxvdzpoaWRkZW47d2lkdGg6MDtoZWlnaHQ6MH06aG9zdCAuY29udGVudC11bmxpbWl0ZWR7d2lkdGg6ODB2d306aG9zdCAuY29udGVudHtkaXNwbGF5OmlubGluZS1ibG9ja31cIjtcblxuY29uc3QgVm9jYWJseVBvcHVwID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjbG9zZVwiLCA3KTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGVudFdyYXBwZXIgPSB0aGlzLmVsLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtd3JhcHBlcicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnRlbnRXcmFwcGVyLnN0eWxlLndpZHRoID0gYCR7cmVjdC53aWR0aH1weGA7XG4gICAgICBjb250ZW50V3JhcHBlci5zdHlsZS5oZWlnaHQgPSBgJHtyZWN0LmhlaWdodH1weGA7XG4gICAgfSk7XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShjb250ZW50KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwb3B1cFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJib2R5XCIsIGlkOiBcImJvZHlcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiY29udGVudC13cmFwcGVyXCIsIGlkOiBcImNvbnRlbnQtd3JhcHBlclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250ZW50LXVubGltaXRlZFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250ZW50XCIsIGlkOiBcImNvbnRlbnRcIiB9LCBoKFwic2xvdFwiLCBudWxsKSkpKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoZWFkZXJcIiB9LCBoKFwidm9jYWJseS1sb2dvXCIsIHsgY2xhc3M6IFwibG9nb1wiIH0pLCBoKFwidm9jYWJseS1jbG9zZS1idXR0b25cIiwgeyBjbGFzczogXCJjbG9zZVwiIH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImZvb3RlclwiIH0pKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5Wb2NhYmx5UG9wdXAuc3R5bGUgPSB2b2NhYmx5UG9wdXBDc3M7XG5cbmNvbnN0IHZvY2FibHlTaWRlQkNzcyA9IFwiOmhvc3R7Zm9udC1mYW1pbHk6YXJpYWwsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtmb250LXNpemU6MTZweCAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudDtjb2xvcjojNmE2YTZhICFpbXBvcnRhbnQ7ZGlzcGxheTpibG9ja30ubGlzdHtsaXN0LXN0eWxlOm91dHNpZGU7cGFkZGluZzowO21hcmdpbjowIDAgMCAxNnB4fS50cmFuc2xhdGlvbntmb250LXN0eWxlOml0YWxpY31cIjtcblxuY29uc3QgVm9jYWJseVNpZGVCID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnMgPSBleHBsb2RlKHRoaXMuaXRlbS5kYXRhLmRlZmluaXRpb24pO1xuICAgIGlmIChkZWZpbml0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcInRyYW5zbGF0aW9uXCIgfSwgdGhpcy5pdGVtLmRhdGEudHJhbnNsYXRpb24pKSk7XG4gICAgfVxuICAgIHJldHVybiAoaChcInVsXCIsIHsgY2xhc3M6IFwibGlzdFwiIH0sIGRlZmluaXRpb25zLm1hcCgoaXRlbSkgPT4gKGgoXCJsaVwiLCBudWxsLCBpdGVtKSkpLCB0aGlzLml0ZW0uZGF0YS50cmFuc2xhdGlvbiAmJiAoaChcImxpXCIsIG51bGwsIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwidHJhbnNsYXRpb25cIiB9LCB0aGlzLml0ZW0uZGF0YS50cmFuc2xhdGlvbikpKSkpO1xuICB9XG59O1xuVm9jYWJseVNpZGVCLnN0eWxlID0gdm9jYWJseVNpZGVCQ3NzO1xuXG5jb25zdCB2b2NhYmx5U2lnbkluQ3NzID0gXCI6aG9zdHtmb250LWZhbWlseTphcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDtkaXNwbGF5OmJsb2NrfS5jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmJ1dHRvbntmb250LWZhbWlseTphcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiMwMDUwZmY7Y29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O2JvcmRlcjpub25lO3BhZGRpbmc6OHB4O2ZvbnQ6aW5oZXJpdDtmb250LXdlaWdodDo1MDA7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoyMHB4O3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmNhbGMoMTAwJSAtIDZweCAqIDIpO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAyMDBtczttYXJnaW46MCA2cHggOXB4O2JveC1zaGFkb3c6MCAzcHggNnB4IHJnYmEoMCwgODAsIDI1NSwgMC4yNSl9LmJ1dHRvbjpob3ZlciwuYnV0dG9uOmZvY3Vze2JhY2tncm91bmQ6IzAwNDdlM30uYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kOiMwMDQ3ZTM7Ym94LXNoYWRvdzppbnNldCAwcHggMHB4IDE1cHggcmdiYSgzLCAzNiwgMTA4LCAwLjQpfS5we21hcmdpbi1ib3R0b206MTZweDt0ZXh0LWFsaWduOmNlbnRlcn0ucCBhe2NvbG9yOiMwMDUwZmZ9Lmxpbmt7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOjAuNXB4O3RleHQtdW5kZXJsaW5lLW9mZnNldDoycHg7Y29sb3I6IzAwNTBmZiAhaW1wb3J0YW50fS5saW5rOmhvdmVyLC5saW5rOmZvY3VzLC5saW5rOmFjdGl2ZXtjb2xvcjojMDA0N2UzICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IFZvY2FibHlTaWduSW4gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY29uZmlybSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY29uZmlybVwiLCA3KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJkYXRhLXRlc3RcIjogXCJzaWduLWluXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBcIiB9LCBcIlBsZWFzZSBzaWduIGluIHRvIHByb2NlZWQuXCIpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicFwiIH0sIGgoXCJidXR0b25cIiwgeyBjbGFzczogXCJidXR0b25cIiwgXCJkYXRhLXRlc3RcIjogXCJzaWduLWluLWJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB0aGlzLmNvbmZpcm0uZW1pdCgpIH0sIFwiU2lnbiBpbiBvciBDcmVhdGUgYW4gYWNjb3VudFwiKSksIGgoXCJkaXZcIiwgbnVsbCwgXCJCeSBzaWduaW5nIGluLCB5b3UgYWdyZWUgdG8gb3VyXCIsICcgJywgaChcImFcIiwgeyBjbGFzczogXCJsaW5rXCIsIGhyZWY6IFwiaHR0cHM6Ly9hcHAudm9jYWJseS5wcm8vcGFnZS90ZXJtcy1vZi1zZXJ2aWNlXCIsIHRhcmdldDogXCJfYmxhbmtcIiB9LCBcIlRlcm1zIG9mIFNlcnZpY2VcIiksICcgJywgXCJhbmRcIiwgJyAnLCBoKFwiYVwiLCB7IGNsYXNzOiBcImxpbmtcIiwgaHJlZjogXCJodHRwczovL2FwcC52b2NhYmx5LnByby9wYWdlL3ByaXZhY3ktcG9saWN5XCIsIHRhcmdldDogXCJfYmxhbmtcIiB9LCBcIlByaXZhY3kgUG9saWN5XCIpLCBcIi5cIikpKTtcbiAgfVxufTtcblZvY2FibHlTaWduSW4uc3R5bGUgPSB2b2NhYmx5U2lnbkluQ3NzO1xuXG5jb25zdCB2b2NhYmx5U3Bpbm5lckNzcyA9IFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTQwcHg7aGVpZ2h0OjE4cHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5zcGlubmVye3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDoxOHB4fS5zcGlubmVyPmRpdnt3aWR0aDoxOHB4O2hlaWdodDoxOHB4O2JhY2tncm91bmQtY29sb3I6IzAwNTBmZjtib3JkZXItcmFkaXVzOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC1hbmltYXRpb246c2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO2FuaW1hdGlvbjpzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGh9LnNwaW5uZXIgLmJvdW5jZTF7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTAuMzJzO2FuaW1hdGlvbi1kZWxheTotMC4zMnN9LnNwaW5uZXIgLmJvdW5jZTJ7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTAuMTZzO2FuaW1hdGlvbi1kZWxheTotMC4xNnN9QC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5ezAlLDgwJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzay1ib3VuY2VkZWxheXswJSw4MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19XCI7XG5cbmNvbnN0IFZvY2FibHlTcGlubmVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzcGlubmVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJvdW5jZTFcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJvdW5jZTJcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJvdW5jZTNcIiB9KSkpKTtcbiAgfVxufTtcblZvY2FibHlTcGlubmVyLnN0eWxlID0gdm9jYWJseVNwaW5uZXJDc3M7XG5cbmNvbnN0IHZvY2FibHlTdWJzY3JpYmVDc3MgPSBcIjpob3N0e2ZvbnQtZmFtaWx5OmFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHggIWltcG9ydGFudDtsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnQ7Y29sb3I6IzZhNmE2YSAhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2t9LmNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ibG9ja30ubWVzc2FnZXttYXJnaW4tYm90dG9tOjE2cHh9LmJ1dHRvbntmb250LWZhbWlseTphcmlhbCwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiMwMDUwZmY7Y29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O2JvcmRlcjpub25lO3BhZGRpbmc6OHB4O2ZvbnQ6aW5oZXJpdDtmb250LXdlaWdodDo1MDA7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czoyMHB4O3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmNhbGMoMTAwJSAtIDZweCAqIDIpO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAyMDBtczttYXJnaW46MCA2cHggOXB4O2JveC1zaGFkb3c6MCAzcHggNnB4IHJnYmEoMCwgODAsIDI1NSwgMC4yNSl9LmJ1dHRvbjpob3ZlciwuYnV0dG9uOmZvY3Vze2JhY2tncm91bmQ6IzAwNDdlM30uYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kOiMwMDQ3ZTM7Ym94LXNoYWRvdzppbnNldCAwcHggMHB4IDE1cHggcmdiYSgzLCAzNiwgMTA4LCAwLjQpfVwiO1xuXG5jb25zdCBWb2NhYmx5U3Vic2NyaWJlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNvbmZpcm0gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNvbmZpcm1cIiwgNyk7XG4gICAgdGhpcy50cmlhbCA9IGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImRhdGEtdGVzdFwiOiBcInN1YnNjcmliZVwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250YWluZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibWVzc2FnZVwiIH0sIHRoaXMudHJpYWxcbiAgICAgID8gJ1JlcXVlc3QgYSA3IGRheSBmcmVlIHRyaWFsIHRvIHByb2NlZWQuJ1xuICAgICAgOiAnUGxlYXNlIHN1YnNjcmliZSB0byBwcm9jZWVkLicpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYnV0dG9uLWNvbnRhaW5lclwiIH0sIGgoXCJidXR0b25cIiwgeyBjbGFzczogXCJidXR0b25cIiwgb25DbGljazogKCkgPT4gdGhpcy5jb25maXJtLmVtaXQoKSwgXCJkYXRhLXRlc3RcIjogXCJzdWJzY3JpYmUtYnV0dG9uXCIgfSwgdGhpcy50cmlhbCA/ICdSZXF1ZXN0IGEgNyBkYXkgZnJlZSB0cmlhbCcgOiAnU3Vic2NyaWJlJykpKSkpO1xuICB9XG59O1xuVm9jYWJseVN1YnNjcmliZS5zdHlsZSA9IHZvY2FibHlTdWJzY3JpYmVDc3M7XG5cbmNvbnN0IGlzRGlyZWN0TmVjZXNzYXJ5ID0gKGFuYWx5c2UpID0+IHtcbiAgaWYgKGFuYWx5c2UudHJhbnNsYXRpb24uc291cmNlTGFuZ3VhZ2UgPT09IGFuYWx5c2UudHJhbnNsYXRpb24udGFyZ2V0TGFuZ3VhZ2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGFuYWx5c2UuY2FyZHMubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IGNhcmQgPSBhbmFseXNlLmNhcmRzWzBdLmRhdGE7XG4gIGlmIChhbmFseXNlLnNvdXJjZSA9PT0gY2FyZC5zb3VyY2UgJiZcbiAgICBhbmFseXNlLnRyYW5zbGF0aW9uLnRhcmdldCA9PT0gY2FyZC50cmFuc2xhdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNvcnRMYW5ndWFnZXMgPSAoZXhpc3RpbmdMYW5ndWFnZXMpID0+IChlbnRyeUEsIGVudHJ5QikgPT4ge1xuICBjb25zdCBpc0VudHJ5QUV4aXN0cyA9IGV4aXN0aW5nTGFuZ3VhZ2VzLmluY2x1ZGVzKGVudHJ5QVswXSk7XG4gIGNvbnN0IGlzRW50cnlCRXhpc3RzID0gZXhpc3RpbmdMYW5ndWFnZXMuaW5jbHVkZXMoZW50cnlCWzBdKTtcbiAgaWYgKGlzRW50cnlBRXhpc3RzICYmICFpc0VudHJ5QkV4aXN0cykge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoIWlzRW50cnlBRXhpc3RzICYmIGlzRW50cnlCRXhpc3RzKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIGVudHJ5QVsxXS5sb2NhbGVDb21wYXJlKGVudHJ5QlsxXSk7XG59O1xuXG5jb25zdCB2b2NhYmx5VHJhbnNsYXRpb25Dc3MgPSBcIjpob3N0e2ZvbnQtZmFtaWx5OmFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHggIWltcG9ydGFudDtsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnQ7Y29sb3I6IzZhNmE2YSAhaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2t9Lm1hcmdpbi1sZWZ0e21hcmdpbi1sZWZ0OjEycHh9Lm1hcmdpbi1ib3R0b20tMXttYXJnaW4tYm90dG9tOjRweH0ubWFyZ2luLWJvdHRvbS0ye21hcmdpbi1ib3R0b206MTJweH0ubWFyZ2luLXRvcC0ye21hcmdpbi10b3A6MTJweH0udGV4dC1yaWdodHt0ZXh0LWFsaWduOnJpZ2h0fS50ZXh0LWxpbmssLnRleHQtbGluazphY3RpdmUsLnRleHQtbGluazp2aXNpdGVke2NvbG9yOiM2YTZhNmEgIWltcG9ydGFudH0udGV4dC1saW5rOmhvdmVye2NvbG9yOiMwMDAwMDAgIWltcG9ydGFudH0uZW1waGFzaXplZHtjb2xvcjojMDAwMDAwO2ZvbnQtd2VpZ2h0OmJvbGR9LnNtYWxse2ZvbnQtc2l6ZToxNC40cHh9LnRleHQtcHJpbWFyeXtjb2xvcjojMDA1MGZmfS50cmFuc2xhdGlvbntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6c3RyZXRjaH0udHJhbnNsYXRpb24gLnZhbHVle21hcmdpbi1ib3R0b206OHB4fS50cmFuc2xhdGlvbiAucG9ze2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZTo4MCV9LnRyYW5zbGF0aW9uIC5pbnZpc2libGUtc3BhY2V7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MDtmb250LXNpemU6MH0udHJhbnNsYXRpb24gLmhlYWRlcnttYXJnaW4tYm90dG9tOjEycHh9LnRyYW5zbGF0aW9uIC5zZWN0aW9ue3BhZGRpbmctbGVmdDoxNHB4O21hcmdpbi1sZWZ0OjhweH0udHJhbnNsYXRpb24gLnNlY3Rpb246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MH0uZXJyb3J7Y29sb3I6I2ZmNWU1ZX1zZWxlY3R7bWFyZ2luLWxlZnQ6LTE0cHg7d2lkdGg6Y2FsYygxMDAlICsgMTRweCk7Y29sb3I6IzZhNmE2YTtmb250LXNpemU6MTQuNHB4O3BhZGRpbmc6MTBweCAxNHB4O2JvcmRlcjowLjVweCBzb2xpZCAjYmFiYWJhO2JvcmRlci1yYWRpdXM6OHB4O2FwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kOiNmYmZiZmIgdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHdpZHRoPVxcXCIxMVxcXCIgaGVpZ2h0PVxcXCI3XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTEgN1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTAgMSA1IDYgMSAxXFxcIiBzdHJva2U9XFxcInJnYigxMDksIDEwOSwgMTA5KVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIuNVxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiLz48L3N2Zz4nKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCAxNHB4IHRvcCA1MCU7b3V0bGluZTpub25lfS5sb2FkaW5nLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0ucmVsb2Fke3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kOndoaXRlO29wYWNpdHk6MC41fS5jYXJkc3tib3JkZXI6MC41cHggc29saWQgI2JhYmFiYTtib3JkZXItcmFkaXVzOjhweDtiYWNrZ3JvdW5kLWNvbG9yOiNmYmZiZmI7bWFyZ2luLWxlZnQ6LTE0cHg7bWFyZ2luLWJvdHRvbToxcHh9LmNhcmRzIC5jYXJke3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTBweCAxNHB4O2JvcmRlci10b3A6MC41cHggc29saWQgI2JhYmFiYX0uY2FyZHMgLmNhcmQ6Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcDpub25lfS5jYXJkcyAuY2FyZC5oYXMtbnVtYmVye3BhZGRpbmctcmlnaHQ6NDhweCAhaW1wb3J0YW50fS5jYXJkcyAuY2FyZCAubnVtYmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjE0cHg7dG9wOjEwcHg7Ym9yZGVyOjFweCBzb2xpZCAjZTZlNmU2O2JvcmRlci1yYWRpdXM6NTAlO21pbi13aWR0aDoyNHB4O2hlaWdodDoyNHB4O2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC1hbGlnbjpjZW50ZXJ9XCI7XG5cbmNvbnN0IFZvY2FibHlUcmFuc2xhdGlvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jaGFuZ2VMYW5ndWFnZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2hhbmdlTGFuZ3VhZ2VcIiwgNyk7XG4gICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZXhpc3RpbmdMYW5ndWFnZXMgPSBbXTtcbiAgICB0aGlzLmxhbmd1YWdlID0gJyc7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxhbmd1YWdlU2VsZWN0b3IgPSB0aGlzLnJlc3VsdCAmJiB0aGlzLnJlc3VsdC5zdWNjZXNzICYmIChoKFwic2VsZWN0XCIsIHsgXCJkYXRhLXRlc3RcIjogXCJsYW5ndWFnZS1zZWxlY3RvclwiLCBkaXNhYmxlZDogdGhpcy5sb2FkaW5nLCBvbkNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLmNoYW5nZUxhbmd1YWdlLmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKSB9LCBPYmplY3QuZW50cmllcyhsYW5ndWFnZUxpc3QpXG4gICAgICAuc29ydChzb3J0TGFuZ3VhZ2VzKHRoaXMuZXhpc3RpbmdMYW5ndWFnZXMpKVxuICAgICAgLm1hcCgoW2NvZGUsIG5hbWVdKSA9PiAoaChcIm9wdGlvblwiLCB7IHNlbGVjdGVkOiB0aGlzLmxhbmd1YWdlID09PSBjb2RlLCB2YWx1ZTogY29kZSB9LCBuYW1lKSkpKSk7XG4gICAgY29uc3Qgc2hvd0RpcmVjdCA9IHRoaXMucmVzdWx0ICYmXG4gICAgICB0aGlzLnJlc3VsdC5zdWNjZXNzICYmXG4gICAgICBpc0RpcmVjdE5lY2Vzc2FyeSh0aGlzLnJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJkYXRhLXRlc3RcIjogXCJ0cmFuc2xhdGlvbi1jb250YWluZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibG9hZGluZy1jb250YWluZXJcIiB9LCB0aGlzLnJlc3VsdCA9PT0gbnVsbCAmJiBoKFwidm9jYWJseS1zcGlubmVyXCIsIG51bGwpLCB0aGlzLnJlc3VsdCAmJiB0aGlzLnJlc3VsdC5zdWNjZXNzID09PSBmYWxzZSAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImVycm9yXCIgfSwgXCJBbiBlcnJvciBoYXMgb2NjdXJyZWQuXCIpKSwgdGhpcy5yZXN1bHQgJiYgdGhpcy5yZXN1bHQuc3VjY2VzcyA9PT0gdHJ1ZSAmJiAoaChGcmFnbWVudCwgbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRyYW5zbGF0aW9uXCIsIFwiZGF0YS10ZXN0XCI6IFwidHJhbnNsYXRpb25cIiB9LCBzaG93RGlyZWN0ICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvblwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJtYXJnaW4tYm90dG9tLTFcIiB9LCBsYW5ndWFnZVNlbGVjdG9yKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcIm1hcmdpbi1sZWZ0IGVtcGhhc2l6ZWQgbWFyZ2luLWJvdHRvbS0yXCIgfSwgdGhpcy5waHJhc2UpLCBoKEZyYWdtZW50LCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibWFyZ2luLWJvdHRvbS0xXCIsIFwiZGF0YS10ZXN0XCI6IFwidHJhbnNsYXRpb24tbGFuZ3VhZ2VcIiB9LCBnZXRGdWxsTGFuZ3VhZ2VOYW1lKHRoaXMucmVzdWx0LnZhbHVlLnRyYW5zbGF0aW9uLnRhcmdldExhbmd1YWdlKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJtYXJnaW4tbGVmdCBlbXBoYXNpemVkIG1hcmdpbi1ib3R0b20tMVwiIH0sIHRoaXMucmVzdWx0LnZhbHVlLnRyYW5zbGF0aW9uLnRhcmdldCkpKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSwgIXNob3dEaXJlY3QgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJtYXJnaW4tYm90dG9tLTJcIiB9LCBsYW5ndWFnZVNlbGVjdG9yKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjYXJkc1wiLCBcImRhdGEtdGVzdFwiOiBcImNhcmRzXCIgfSwgdGhpcy5yZXN1bHQudmFsdWUuY2FyZHMubWFwKChjYXJkLCBpbmRleCwgY29sbGVjdGlvbikgPT4gKGgoXCJkaXZcIiwgeyBcImRhdGEtdGVzdFwiOiBcImNhcmRcIiwgY2xhc3M6ICdjYXJkJyArIChjb2xsZWN0aW9uLmxlbmd0aCA+IDEgPyAnIGhhcy1udW1iZXInIDogJycpIH0sIGNvbGxlY3Rpb24ubGVuZ3RoID4gMSAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcIm51bWJlclwiIH0sIGluZGV4ICsgMSkpLCBoKFwiZGl2XCIsIG51bGwsIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwic21hbGxcIiB9LCBcIlNpZGVcIiksICcgJywgaChcInNwYW5cIiwgeyBjbGFzczogXCJ0ZXh0LXByaW1hcnlcIiB9LCBcIkFcIikpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibWFyZ2luLWxlZnRcIiB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImVtcGhhc2l6ZWRcIiB9LCBjYXJkLmRhdGEuc291cmNlKSwgY2FyZC5kYXRhLnBhcnRPZlNwZWVjaCAmJiAoaChGcmFnbWVudCwgbnVsbCwgaChcInNwYW5cIiwgeyBjbGFzczogXCJpbnZpc2libGUtc3BhY2UgXCIgfSwgXCJcXHUwMEEwXCIpLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcInBvcyBtYXJnaW4tbGVmdFwiIH0sIGNhcmQuZGF0YS5wYXJ0T2ZTcGVlY2gpKSkpLCBoKFwiZGl2XCIsIG51bGwsIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwic21hbGxcIiB9LCBcIlNpZGVcIiksICcgJywgaChcInNwYW5cIiwgeyBjbGFzczogXCJ0ZXh0LXByaW1hcnlcIiB9LCBcIkJcIikpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibWFyZ2luLWxlZnRcIiB9LCBoKFwidm9jYWJseS1zaWRlLWJcIiwgeyBpdGVtOiBjYXJkIH0pKSkpKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJtYXJnaW4tdG9wLTIgdGV4dC1yaWdodCBzbWFsbFwiIH0sIGgoXCJhXCIsIHsgaHJlZjogXCJodHRwczovL2FwcC52b2NhYmx5LnByby9mZWVkYmFja1wiLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIGNsYXNzOiBcInRleHQtbGlua1wiIH0sIFwiQXJlIHlvdSBtaXNzaW5nIGFueXRoaW5nPyBGZWVsIGZyZWUgdG8gbGV0IG1lIGtub3cuXCIpKSkpLCB0aGlzLmxvYWRpbmcgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWxvYWRcIiwgXCJkYXRhLXRlc3RcIjogXCJyZWxvYWRcIiB9LCBoKFwidm9jYWJseS1zcGlubmVyXCIsIG51bGwpKSkpKSkpKTtcbiAgfVxufTtcblZvY2FibHlUcmFuc2xhdGlvbi5zdHlsZSA9IHZvY2FibHlUcmFuc2xhdGlvbkNzcztcblxuZXhwb3J0IHsgVm9jYWJseUJ1dHRvbiBhcyB2b2NhYmx5X2J1dHRvbiwgVm9jYWJseUNsb3NlQnV0dG9uIGFzIHZvY2FibHlfY2xvc2VfYnV0dG9uLCBWb2NhYmx5TGFuZ3VhZ2UgYXMgdm9jYWJseV9sYW5ndWFnZSwgVm9jYWJseUxvZ28gYXMgdm9jYWJseV9sb2dvLCBWb2NhYmx5UG9wdXAgYXMgdm9jYWJseV9wb3B1cCwgVm9jYWJseVNpZGVCIGFzIHZvY2FibHlfc2lkZV9iLCBWb2NhYmx5U2lnbkluIGFzIHZvY2FibHlfc2lnbl9pbiwgVm9jYWJseVNwaW5uZXIgYXMgdm9jYWJseV9zcGlubmVyLCBWb2NhYmx5U3Vic2NyaWJlIGFzIHZvY2FibHlfc3Vic2NyaWJlLCBWb2NhYmx5VHJhbnNsYXRpb24gYXMgdm9jYWJseV90cmFuc2xhdGlvbiB9O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL3ZvY2FibHktYnV0dG9uXzEwLmVudHJ5LmpzXCI6IFtcblx0XHQ0NzcsXG5cdFx0Njk0XG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSAzNDY5O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbi8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuLy8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoKSA9PiAoUHJvbWlzZS5yZXNvbHZlKCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJsZXQgYnJvd3NlckVudjtcbmlmICh0eXBlb2YgY2hyb21lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGJyb3dzZXJFbnYgPSBjaHJvbWU7XG4gICAgLy8gQHRzLWlnbm9yZVxufVxuZWxzZSBpZiAodHlwZW9mIGJyb3dzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5sb2coJ0Jyb3dzZXIgZW52Jyk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGJyb3dzZXJFbnYgPSBicm93c2VyO1xufVxuY29uc3QgbWFrZVNlbmQgPSAoaWRlbnRpZmllcikgPT4gKGRhdGEsIGV4dGVuc2lvbklkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKCFicm93c2VyRW52KSB7XG4gICAgICAgICAgICByZWplY3QoJ2Jyb3dzZXJFbnYgZW52aXJvbm1lbnQgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJyb3dzZXJFbnYucnVudGltZSkge1xuICAgICAgICAgICAgcmVqZWN0KCdicm93c2VyRW52LnJ1bnRpbWUgaXMgbm90IGRlZmluZWQgZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbmRQYXJhbXMgPSBbXG4gICAgICAgICAgICB7IGlkZW50aWZpZXIsIGRhdGEgfSxcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChicm93c2VyRW52LnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYnJvd3NlckVudi5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKGV4dGVuc2lvbklkKSB7XG4gICAgICAgICAgICBzZW5kUGFyYW1zLnVuc2hpZnQoZXh0ZW5zaW9uSWQpO1xuICAgICAgICB9XG4gICAgICAgIGJyb3dzZXJFbnYucnVudGltZS5zZW5kTWVzc2FnZSguLi5zZW5kUGFyYW1zKTtcbiAgICB9KTtcbn07XG5jb25zdCBtYWtlTGlzdGVuZXIgPSAoaWRlbnRpZmllciwgY2FsbGJhY2spID0+IChyZXF1ZXN0LCBzZW5kZXIsIG5hdGl2ZVNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzaGl0IHJlY2VpdmVkJywgcmVxdWVzdCk7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0ICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICByZXF1ZXN0ID09PSBudWxsIHx8XG4gICAgICAgIHJlcXVlc3QuaWRlbnRpZmllciAhPT0gaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XG4gICAgY29uc3Qgc2VuZFJlc3BvbnNlID0gKHIpID0+IHtcbiAgICAgICAgbmF0aXZlU2VuZFJlc3BvbnNlKHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIGNhbGxiYWNrKHNlbmRSZXNwb25zZSwgZGF0YSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAoaWRlbnRpZmllcikgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmliZSA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBicm93c2VyRW52LnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG1ha2VMaXN0ZW5lcihpZGVudGlmaWVyLCBjYWxsYmFjaykpO1xuICAgIH07XG4gICAgcmV0dXJuIFttYWtlU2VuZChpZGVudGlmaWVyKSwgc3Vic2NyaWJlXTtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlRXh0ZXJuYWxNZXNzYWdlID0gKGlkZW50aWZpZXIpID0+IHtcbiAgICBjb25zdCBzZW5kID0gbWFrZVNlbmQoaWRlbnRpZmllcik7XG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGJyb3dzZXJFbnYucnVudGltZS5vbk1lc3NhZ2VFeHRlcm5hbC5hZGRMaXN0ZW5lcihtYWtlTGlzdGVuZXIoaWRlbnRpZmllciwgY2FsbGJhY2spKTtcbiAgICB9O1xuICAgIHJldHVybiBbXG4gICAgICAgIChleHRlbnNpb25JZCwgZGF0YSkgPT4gc2VuZChkYXRhLCBleHRlbnNpb25JZCksXG4gICAgICAgIHN1YnNjcmliZSxcbiAgICBdO1xufTtcbiIsIlxuKGZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cmJnZvaWQgMCE9PXdpbmRvdy5SZWZsZWN0JiZ2b2lkIDAhPT13aW5kb3cuY3VzdG9tRWxlbWVudHMpe3ZhciBhPUhUTUxFbGVtZW50O3dpbmRvdy5IVE1MRWxlbWVudD1mdW5jdGlvbigpe3JldHVybiBSZWZsZWN0LmNvbnN0cnVjdChhLFtdLHRoaXMuY29uc3RydWN0b3IpfTtIVE1MRWxlbWVudC5wcm90b3R5cGU9YS5wcm90b3R5cGU7SFRNTEVsZW1lbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yPUhUTUxFbGVtZW50O09iamVjdC5zZXRQcm90b3R5cGVPZihIVE1MRWxlbWVudCxhKX19KSgpO1xuZXhwb3J0ICogZnJvbSAnLi4vZGlzdC9lc20vcG9seWZpbGxzL2luZGV4LmpzJztcbmV4cG9ydCAqIGZyb20gJy4uL2Rpc3QvZXNtL2xvYWRlci5qcyc7XG4iLCJpbXBvcnQgeyBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UsIGNyZWF0ZU1lc3NhZ2UgfSBmcm9tICdAdm9jYWJseS9oZXJtZXMnO1xuY29uc3QgY3JlYXRlU2NvcGUgPSAoc2NvcGUpID0+IChpZGVudGlmaWVyKSA9PiBjcmVhdGVNZXNzYWdlKGAke3Njb3BlfS4ke2lkZW50aWZpZXJ9YCk7XG5jb25zdCBjcmVhdGVTY29wZWRNZXNzYWdlID0gY3JlYXRlU2NvcGUoJ3ZvY2FibHknKTtcbmV4cG9ydCBjb25zdCBbaXNMb2dnZWRJbiwgb25Jc0xvZ2dlZEluUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc0xvZ2dlZEluJyk7XG5leHBvcnQgY29uc3QgW2lzQWN0aXZlLCBvbklzQWN0aXZlUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc0FjdGl2ZScpO1xuZXhwb3J0IGNvbnN0IFtpc0VsaWdpYmxlRm9yVHJpYWwsIG9uSXNFbGlnaWJsZUZvclRyaWFsUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc0VsaWdpYmxlRm9yVHJpYWwnKTtcbmV4cG9ydCBjb25zdCBbYW5hbHl6ZSwgb25BbmFseXplUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdhbmFseXplJyk7XG5leHBvcnQgY29uc3QgW2xpc3RMYW5ndWFnZXMsIG9uTGlzdExhbmd1YWdlc1JlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnbGlzdExhbmd1YWdlcycpO1xuZXhwb3J0IGNvbnN0IFtjbGVhblVwLCBvbkNsZWFuVXBSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2NsZWFuVXAnKTtcbmV4cG9ydCBjb25zdCBbcGluZywgb25QaW5nXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3BpbmcnKTtcbmV4cG9ydCBjb25zdCBbZ2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlLCBvbkdldEludGVybmFsUHJveHlMYW51YWdlXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2dldEludGVybmFsUHJveHlMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtzZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UsIG9uU2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3NldEludGVybmFsUHJveHlMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtnZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlLCBvbkdldEludGVybmFsU291cmNlTGFuZ3VhZ2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtzZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlLCBvblNldEludGVybmFsU291cmNlTGFuZ3VhZ2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtwaW5nRXh0ZXJuYWwsIG9uUGluZ0V4dGVybmFsXSA9IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSgndm9jYWJseS5waW5nLWV4dGVybmFsJyk7XG5leHBvcnQgY29uc3QgW3NldFByb3h5TGFuZ3VhZ2UsIG9uU2V0UHJveHlMYW5ndWFnZV0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkuc2V0UHJveHlMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtnZXRQcm94eUxhbmd1YWdlLCBvbkdldFByb3h5TGFuZ3VhZ2VdID0gY3JlYXRlRXh0ZXJuYWxNZXNzYWdlKCd2b2NhYmx5LmdldFByb3h5TGFuZ3VhZ2UnKTtcbiIsImltcG9ydCB7IGFuYWx5emUsIGNsZWFuVXAsIGdldEludGVybmFsUHJveHlMYW5ndWFnZSwgZ2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgaXNBY3RpdmUsIGlzRWxpZ2libGVGb3JUcmlhbCwgaXNMb2dnZWRJbiwgbGlzdExhbmd1YWdlcywgcGluZywgc2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlLCBzZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlLCB9IGZyb20gJ0B2b2NhYmx5L2V4dGVuc2lvbi1tZXNzYWdlcyc7XG5leHBvcnQgY29uc3QgYXBpID0ge1xuICAgIGFwcEJhc2VVcmw6ICdodHRwczovL2FwcC52b2NhYmx5LnBybycsXG4gICAgaXNMb2dnZWRJbixcbiAgICBnZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UsXG4gICAgc2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlLFxuICAgIGdldEludGVybmFsU291cmNlTGFuZ3VhZ2UsXG4gICAgc2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSxcbiAgICBhbmFseXplLFxuICAgIGNsZWFuVXAsXG4gICAgaXNBY3RpdmUsXG4gICAgcGluZyxcbiAgICBsaXN0TGFuZ3VhZ2VzLFxuICAgIGlzRWxpZ2libGVGb3JUcmlhbCxcbn07XG5leHBvcnQgY29uc3QgY29uZmlndXJlQXBpID0gKG9wdGlvbnMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGFwaSwgb3B0aW9ucyk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEdvb2dsZUxhbmd1YWdlcyA9IFtcbiAgICAnYWYnLFxuICAgICdzcScsXG4gICAgJ2FtJyxcbiAgICAnYXInLFxuICAgICdoeScsXG4gICAgJ2F6JyxcbiAgICAnZXUnLFxuICAgICdiZScsXG4gICAgJ2JuJyxcbiAgICAnYnMnLFxuICAgICdiZycsXG4gICAgJ2NhJyxcbiAgICAnemgnLFxuICAgICdjbycsXG4gICAgJ2hhdycsXG4gICAgJ2hyJyxcbiAgICAnY3MnLFxuICAgICdkYScsXG4gICAgJ25sJyxcbiAgICAnZW4nLFxuICAgICdlbycsXG4gICAgJ2V0JyxcbiAgICAnZmknLFxuICAgICdmcicsXG4gICAgJ2Z5JyxcbiAgICAnZ2wnLFxuICAgICdrYScsXG4gICAgJ2RlJyxcbiAgICAnZWwnLFxuICAgICdndScsXG4gICAgJ2h0JyxcbiAgICAnaGEnLFxuICAgICdoZScsXG4gICAgJ2hpJyxcbiAgICAnaHUnLFxuICAgICdobW4nLFxuICAgICdpcycsXG4gICAgJ2lnJyxcbiAgICAnaWQnLFxuICAgICdnYScsXG4gICAgJ2l0JyxcbiAgICAnamEnLFxuICAgICdqdicsXG4gICAgJ2tuJyxcbiAgICAna2snLFxuICAgICdrbScsXG4gICAgJ3J3JyxcbiAgICAna28nLFxuICAgICdrdScsXG4gICAgJ2t5JyxcbiAgICAnbG8nLFxuICAgICdsdicsXG4gICAgJ2x0JyxcbiAgICAnbGInLFxuICAgICdtaycsXG4gICAgJ21nJyxcbiAgICAnbXMnLFxuICAgICdtbCcsXG4gICAgJ210JyxcbiAgICAnbWknLFxuICAgICdtcicsXG4gICAgJ21uJyxcbiAgICAnbXknLFxuICAgICduZScsXG4gICAgJ25vJyxcbiAgICAnbnknLFxuICAgICdvcicsXG4gICAgJ3BzJyxcbiAgICAnZmEnLFxuICAgICdwbCcsXG4gICAgJ3B0JyxcbiAgICAncGEnLFxuICAgICdybycsXG4gICAgJ3J1JyxcbiAgICAnc20nLFxuICAgICdnZCcsXG4gICAgJ3NyJyxcbiAgICAnc3QnLFxuICAgICdzbicsXG4gICAgJ3NkJyxcbiAgICAnc2knLFxuICAgICdzaycsXG4gICAgJ3NsJyxcbiAgICAnc28nLFxuICAgICdlcycsXG4gICAgJ3N1JyxcbiAgICAnc3cnLFxuICAgICdzdicsXG4gICAgJ3RsJyxcbiAgICAndGcnLFxuICAgICd0YScsXG4gICAgJ3R0JyxcbiAgICAndGUnLFxuICAgICd0aCcsXG4gICAgJ3RyJyxcbiAgICAndGsnLFxuICAgICd6aC1UVycsXG4gICAgJ3VrJyxcbiAgICAndXInLFxuICAgICd1ZycsXG4gICAgJ3V6JyxcbiAgICAndmknLFxuICAgICdjeScsXG4gICAgJ3hoJyxcbiAgICAneWknLFxuICAgICd5bycsXG4gICAgJ3p1Jyxcbl07XG5jb25zdCBOTFBMYW5ndWFnZXMgPSBbXG4gICAgJ2FmJyxcbiAgICAnc3EnLFxuICAgICdhbScsXG4gICAgJ2FyJyxcbiAgICAnaHknLFxuICAgICdheicsXG4gICAgJ2V1JyxcbiAgICAnYmUnLFxuICAgICdibicsXG4gICAgJ2JzJyxcbiAgICAnYmcnLFxuICAgICdteScsXG4gICAgJ2NhJyxcbiAgICAnbnknLFxuICAgICd6aC1DTicsXG4gICAgJ3poLVRXJyxcbiAgICAnY28nLFxuICAgICdocicsXG4gICAgJ2NzJyxcbiAgICAnZGEnLFxuICAgICdubCcsXG4gICAgJ2VuJyxcbiAgICAnZW8nLFxuICAgICdldCcsXG4gICAgJ2ZpJyxcbiAgICAnZnInLFxuICAgICdmeScsXG4gICAgJ2dsJyxcbiAgICAna2EnLFxuICAgICdkZScsXG4gICAgJ2VsJyxcbiAgICAnZ3UnLFxuICAgICdodCcsXG4gICAgJ2hhJyxcbiAgICAnaGF3JyxcbiAgICAnaXcnLFxuICAgICdoaScsXG4gICAgJ2htbicsXG4gICAgJ2h1JyxcbiAgICAnaXMnLFxuICAgICdpZycsXG4gICAgJ2lkJyxcbiAgICAnZ2EnLFxuICAgICdpdCcsXG4gICAgJ2phJyxcbiAgICAna24nLFxuICAgICdraycsXG4gICAgJ2ttJyxcbiAgICAna28nLFxuICAgICdrdScsXG4gICAgJ2t5JyxcbiAgICAnbG8nLFxuICAgICdsdicsXG4gICAgJ2x0JyxcbiAgICAnbGInLFxuICAgICdtaycsXG4gICAgJ21nJyxcbiAgICAnbXMnLFxuICAgICdtbCcsXG4gICAgJ210JyxcbiAgICAnbWknLFxuICAgICdtcicsXG4gICAgJ21uJyxcbiAgICAnbmUnLFxuICAgICdubycsXG4gICAgJ3BzJyxcbiAgICAnZmEnLFxuICAgICdwbCcsXG4gICAgJ3B0JyxcbiAgICAncGEnLFxuICAgICdybycsXG4gICAgJ3J1JyxcbiAgICAnc20nLFxuICAgICdnZCcsXG4gICAgJ3NyJyxcbiAgICAnc3QnLFxuICAgICdzbicsXG4gICAgJ3NkJyxcbiAgICAnc2knLFxuICAgICdzaycsXG4gICAgJ3NsJyxcbiAgICAnc28nLFxuICAgICdlcycsXG4gICAgJ3N1JyxcbiAgICAnc3cnLFxuICAgICdzdicsXG4gICAgJ3RsJyxcbiAgICAndGcnLFxuICAgICd0YScsXG4gICAgJ3R0JyxcbiAgICAndGUnLFxuICAgICd0aCcsXG4gICAgJ3RyJyxcbiAgICAndWsnLFxuICAgICd1cicsXG4gICAgJ3V6JyxcbiAgICAndmknLFxuICAgICdjeScsXG4gICAgJ3hoJyxcbiAgICAneWknLFxuICAgICd5bycsXG4gICAgJ3p1Jyxcbl07XG5jb25zdCBHb29nbGVOTFBMYW5ndWFnZU1hcCA9IHtcbiAgICBoZTogJ2l3JyxcbiAgICB6aDogJ3poLUNOJyxcbn07XG5leHBvcnQgY29uc3QgZ29vZ2xlVG9ObHAgPSAoZ29vZ2xlTGFuZ3VhZ2UpID0+IHtcbiAgICBpZiAoR29vZ2xlTkxQTGFuZ3VhZ2VNYXBbZ29vZ2xlTGFuZ3VhZ2VdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIEdvb2dsZU5MUExhbmd1YWdlTWFwW2dvb2dsZUxhbmd1YWdlXTtcbiAgICB9XG4gICAgcmV0dXJuIChOTFBMYW5ndWFnZXMuZmluZCgobmxwTGFuZ3VhZ2UpID0+IG5scExhbmd1YWdlID09PSBnb29nbGVMYW5ndWFnZSkgPz8gbnVsbCk7XG59O1xuZXhwb3J0IGNvbnN0IGlzR29vZ2xlTGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IEdvb2dsZUxhbmd1YWdlcy5pbmRleE9mKGxhbmd1YWdlKSAhPT0gLTE7XG4iLCJpbXBvcnQgeyBpc0dvb2dsZUxhbmd1YWdlIH0gZnJvbSAnQHZvY2FibHkvbW9kZWwnO1xuY29uc3QgZ2V0Tm9kZUxhbmd1YWdlID0gKG5vZGUpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBub2RlTGFuZyA9ICgoX2EgPSBub2RlLmxhbmcpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKS5zdWJzdHJpbmcoMCwgMik7XG4gICAgaWYgKGlzR29vZ2xlTGFuZ3VhZ2Uobm9kZUxhbmcpKSB7XG4gICAgICAgIHJldHVybiBub2RlTGFuZztcbiAgICB9XG4gICAgcmV0dXJuIGdldE5vZGVMYW5ndWFnZShub2RlLnBhcmVudE5vZGUpO1xufTtcbmV4cG9ydCBjb25zdCBkZXRlY3RMYW5ndWFnZSA9IChzZWxlY3Rpb24pID0+IHtcbiAgICByZXR1cm4gZ2V0Tm9kZUxhbmd1YWdlKHNlbGVjdGlvbi5hbmNob3JOb2RlKTtcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaSc7XG5jb25zdCBnZXRMb2NhbGVMYW5ndWFnZSA9ICgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCEoKF9hID0gd2luZG93ID09PSBudWxsIHx8IHdpbmRvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luZG93Lm5hdmlnYXRvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxhbmd1YWdlKSkge1xuICAgICAgICByZXR1cm4gJ2VuJztcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2Uuc3Vic3RyaW5nKDAsIDIpO1xufTtcbmV4cG9ydCBjb25zdCBzZXRDb250ZW50cyA9ICh7IHBvcHVwLCBzb3VyY2UsIGRldGVjdGVkTGFuZ3VhZ2UsIH0pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBpbnRlcnZhbElkID0gbnVsbDtcbiAgICBjb25zdCB0ZWFyRG93biA9ICgpID0+IHtcbiAgICAgICAgaWYgKGludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICBpbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2V0VHJhbnNsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndm9jYWJseS10cmFuc2xhdGlvbicpO1xuICAgICAgICB0cmFuc2xhdGlvbi5waHJhc2UgPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IGFuYWx5emUgPSAoc291cmNlTGFuZ3VhZ2UpID0+IHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgYXBpXG4gICAgICAgICAgICAgICAgLmFuYWx5emUoeyBzb3VyY2U6IHNvdXJjZSwgc291cmNlTGFuZ3VhZ2UgfSlcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb24ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigodHJhbnNsYXRpb25SZXN1bHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uLnJlc3VsdCA9IHRyYW5zbGF0aW9uUmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvblJlc3VsdC5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uLmxhbmd1YWdlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uUmVzdWx0LnZhbHVlLnRyYW5zbGF0aW9uLnNvdXJjZUxhbmd1YWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0xhbmd1YWdlc1Jlc3VsdCA9IHlpZWxkIGFwaS5saXN0TGFuZ3VhZ2VzKCk7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb24uZXhpc3RpbmdMYW5ndWFnZXMgPSBleGlzdGluZ0xhbmd1YWdlc1Jlc3VsdC5zdWNjZXNzXG4gICAgICAgICAgICAgICAgICAgID8gZXhpc3RpbmdMYW5ndWFnZXNSZXN1bHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJhbnNsYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlTGFuZ3VhZ2UnLCAoeyBkZXRhaWw6IGxhbmd1YWdlIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbi5yZXN1bHQgJiYgdHJhbnNsYXRpb24ucmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBhcGkuY2xlYW5VcCh0cmFuc2xhdGlvbi5yZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJhbnNsYXRpb24ubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgICAgIGFuYWx5emUobGFuZ3VhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgYW5hbHl6ZSgpO1xuICAgICAgICBwb3B1cC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQodHJhbnNsYXRpb24pO1xuICAgIH07XG4gICAgY29uc3QgaXNBbHJpZ2h0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgYXBpLmlzTG9nZ2VkSW4oKSxcbiAgICAgICAgICAgIGFwaS5pc0FjdGl2ZSgpLFxuICAgICAgICAgICAgYXBpLmdldEludGVybmFsU291cmNlTGFuZ3VhZ2UoKSxcbiAgICAgICAgICAgIGFwaS5nZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UoKSxcbiAgICAgICAgXSk7XG4gICAgfTtcbiAgICBjb25zdCBbaXNMb2dnZWRJbiwgaXNBY3RpdmUsIGludGVybmFsU291cmNlTGFuZ3VhZ2UsIGludGVybmFsVGFyZ2V0TGFuZ3VhZ2VdID0geWllbGQgaXNBbHJpZ2h0KCk7XG4gICAgaWYgKGlzTG9nZ2VkSW4gJiZcbiAgICAgICAgaXNBY3RpdmUgJiZcbiAgICAgICAgaW50ZXJuYWxTb3VyY2VMYW5ndWFnZSAmJlxuICAgICAgICBpbnRlcm5hbFRhcmdldExhbmd1YWdlKSB7XG4gICAgICAgIHNldFRyYW5zbGF0aW9uKCk7XG4gICAgICAgIHJldHVybiB0ZWFyRG93bjtcbiAgICB9XG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB1cGRhdGVBbGVydE1lc3NhZ2UgPSAoaXNMb2dnZWRJbiwgaXNBY3RpdmUsIGludGVybmFsU291cmNlTGFuZ3VhZ2UsIGludGVybmFsVGFyZ2V0TGFuZ3VhZ2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWlzTG9nZ2VkSW4pIHtcbiAgICAgICAgICAgIGlmIChhbGVydC5kYXRhc2V0Lm1lc3NhZ2UgIT09ICdzaWduLWluJykge1xuICAgICAgICAgICAgICAgIGFsZXJ0LmRhdGFzZXQubWVzc2FnZSA9ICdzaWduLWluJztcbiAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBzaWduSW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndm9jYWJseS1zaWduLWluJyk7XG4gICAgICAgICAgICAgICAgc2lnbkluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb25maXJtJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVdpbmRvdygpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dQcm94eSA9IHdpbmRvdy5vcGVuKGAke2FwaS5hcHBCYXNlVXJsfS9oYW5kcy1mcmVlYCwgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dQcm94eS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKHNpZ25JbkVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGlmIChhbGVydC5kYXRhc2V0Lm1lc3NhZ2UgIT09ICdzdWJzY3JpYmUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNFbGlnaWJsZUZvclRyaWFsID0geWllbGQgYXBpLmlzRWxpZ2libGVGb3JUcmlhbCgpO1xuICAgICAgICAgICAgICAgIGFsZXJ0LmRhdGFzZXQubWVzc2FnZSA9ICdzdWJzY3JpYmUnO1xuICAgICAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2b2NhYmx5LXN1YnNjcmliZScpO1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZUVsZW1lbnQudHJpYWwgPSBpc0VsaWdpYmxlRm9yVHJpYWw7XG4gICAgICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQoc3Vic2NyaWJlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpbnRlcm5hbFNvdXJjZUxhbmd1YWdlIHx8ICFpbnRlcm5hbFRhcmdldExhbmd1YWdlKSB7XG4gICAgICAgICAgICBpZiAoYWxlcnQuZGF0YXNldC5tZXNzYWdlICE9PSAncHJveHktbGFuZ3VhZ2UnKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQuZGF0YXNldC5tZXNzYWdlID0gJ3Byb3h5LWxhbmd1YWdlJztcbiAgICAgICAgICAgICAgICBhbGVydC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5ndWFnZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2b2NhYmx5LWxhbmd1YWdlJyk7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VGb3JtLnNvdXJjZUxhbmd1YWdlID1cbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxTb3VyY2VMYW5ndWFnZSAhPT0gbnVsbCAmJiBpbnRlcm5hbFNvdXJjZUxhbmd1YWdlICE9PSB2b2lkIDAgPyBpbnRlcm5hbFNvdXJjZUxhbmd1YWdlIDogZGV0ZWN0ZWRMYW5ndWFnZTtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUZvcm0udGFyZ2V0TGFuZ3VhZ2UgPVxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFRhcmdldExhbmd1YWdlICE9PSBudWxsICYmIGludGVybmFsVGFyZ2V0TGFuZ3VhZ2UgIT09IHZvaWQgMCA/IGludGVybmFsVGFyZ2V0TGFuZ3VhZ2UgOiBnZXRMb2NhbGVMYW5ndWFnZSgpO1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjb25maXJtJywgKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VGb3JtLndhaXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNvdXJjZUxhbmd1YWdlLCB0YXJnZXRMYW5ndWFnZSB9ID0gZXZlbnQuZGV0YWlsO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuc2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZShzb3VyY2VMYW5ndWFnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuc2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlKHRhcmdldExhbmd1YWdlKSxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKGxhbmd1YWdlRm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB5aWVsZCB1cGRhdGVBbGVydE1lc3NhZ2UoaXNMb2dnZWRJbiwgaXNBY3RpdmUsIGludGVybmFsU291cmNlTGFuZ3VhZ2UsIGludGVybmFsVGFyZ2V0TGFuZ3VhZ2UpO1xuICAgIGxldCB3aW5kb3dQcm94eSA9IG51bGw7XG4gICAgY29uc3QgY2xvc2VXaW5kb3cgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3dQcm94eSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93UHJveHkuY2xvc2UoKTtcbiAgICAgICAgICAgIHdpbmRvd1Byb3h5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBbaXNMb2dnZWRJbiwgaXNBY3RpdmUsIGludGVybmFsU291cmNlTGFuZ3VhZ2UsIGludGVybmFsVGFyZ2V0TGFuZ3VhZ2UsXSA9IHlpZWxkIGlzQWxyaWdodCgpO1xuICAgICAgICBpZiAoaXNMb2dnZWRJbiAmJlxuICAgICAgICAgICAgaXNBY3RpdmUgJiZcbiAgICAgICAgICAgIGludGVybmFsU291cmNlTGFuZ3VhZ2UgJiZcbiAgICAgICAgICAgIGludGVybmFsVGFyZ2V0TGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICBpbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgICAgIHNldFRyYW5zbGF0aW9uKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNsb3NlV2luZG93LCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHlpZWxkIHVwZGF0ZUFsZXJ0TWVzc2FnZShpc0xvZ2dlZEluLCBpc0FjdGl2ZSwgaW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgaW50ZXJuYWxUYXJnZXRMYW5ndWFnZSk7XG4gICAgICAgIH1cbiAgICB9KSwgMTAwMCk7XG4gICAgcG9wdXAuaW5uZXJIVE1MID0gJyc7XG4gICAgcG9wdXAuYXBwZW5kQ2hpbGQoYWxlcnQpO1xuICAgIHJldHVybiB0ZWFyRG93bjtcbn0pO1xuIiwiY29uc3QgaXNUb3AgPSAocG9wdXBQb3NpdGlvbikgPT4ge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocG9wdXBQb3NpdGlvbiwgJ3RvcCcpO1xufTtcbmV4cG9ydCBjb25zdCBhcHBseVBvc2l0aW9uID0gKGVsZW1lbnQsIHBvc2l0aW9uKSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24ubGVmdH1weGA7XG4gICAgaWYgKGlzVG9wKHBvc2l0aW9uKSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uLnRvcH1weGA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uLmJvdHRvbX1weGA7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBzZXR1cFRyYW5zZm9ybSA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ob3Jpem9udGFsLWRpc3BsYWNlbWVudCcsICcwcHgnKTtcbiAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zbGF0ZS15JywgJzAnKTtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoY2FsYygtNTAlICsgdmFyKC0taG9yaXpvbnRhbC1kaXNwbGFjZW1lbnQpKSwgdmFyKC0tdHJhbnNsYXRlLXkpKWA7XG59O1xuY29uc3QgY2FsY3VsYXRlRGlzcGxhY2VtZW50ID0gKGVsZW1lbnQsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHBvc2l0aW9uLmxlZnQgLSByZWN0LndpZHRoIC8gMiA8IHdpbmRvdy5zY3JvbGxYKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWCArIChyZWN0LndpZHRoIC8gMiAtIHBvc2l0aW9uLmxlZnQpO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24ubGVmdCArIHJlY3Qud2lkdGggLyAyID4gd2luZG93LmlubmVyV2lkdGggKyB3aW5kb3cuc2Nyb2xsWCkge1xuICAgICAgICByZXR1cm4gKHdpbmRvdy5pbm5lcldpZHRoICsgd2luZG93LnNjcm9sbFggLSAocG9zaXRpb24ubGVmdCArIHJlY3Qud2lkdGggLyAyKSk7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcbmV4cG9ydCBjb25zdCBhcHBseVRyYW5zZm9ybSA9IChlbGVtZW50LCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGRpc3BsYWNlbWVudCA9IGNhbGN1bGF0ZURpc3BsYWNlbWVudChlbGVtZW50LCBwb3NpdGlvbik7XG4gICAgaWYgKGRpc3BsYWNlbWVudCAhPT0gMCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUcmFuc2l0aW9uID0gZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcmlnaW5hbFRyYW5zaXRpb24gPyBgJHtvcmlnaW5hbFRyYW5zaXRpb259LCBgIDogJyd9dHJhbnNmb3JtICR7YW5pbWF0aW9uRHVyYXRpb259bXNgO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IG9yaWdpbmFsVHJhbnNpdGlvbjtcbiAgICAgICAgfSwgYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhvcml6b250YWwtZGlzcGxhY2VtZW50JywgYCR7ZGlzcGxhY2VtZW50fXB4YCk7XG4gICAgaWYgKGlzVG9wKHBvc2l0aW9uKSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zbGF0ZS15JywgJzAnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdHJhbnNsYXRlLXknLCAnLTEwMCUnKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IHNldEhvcml6b250YWxEaXNwbGFjZW1lbnQgPSAoZWxlbWVudCwgZGlzcGxhY2VtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ob3Jpem9udGFsLWRpc3BsYWNlbWVudCcsIGAke2Rpc3BsYWNlbWVudH1weGApO1xufTtcbmV4cG9ydCBjb25zdCBhcHBseU1heFpJbmRleCA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSAnMjE0NzQ4MzY0Nyc7XG59O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBkZXRlY3RMYW5ndWFnZSB9IGZyb20gJy4vZGV0ZWN0TGFuZ3VhZ2UnO1xuaW1wb3J0IHsgc2V0Q29udGVudHMgfSBmcm9tICcuL3BvcHVwL2NvbnRlbnRzJztcbmltcG9ydCB7IGFwcGx5TWF4WkluZGV4LCBhcHBseVBvc2l0aW9uLCBhcHBseVRyYW5zZm9ybSwgc2V0dXBUcmFuc2Zvcm0sIH0gZnJvbSAnLi9zdHlsaW5nJztcbmxldCBwb3B1cDtcbmxldCByZXNpemVPYnNlcnZlcjtcbmxldCB0ZWFyRG93bkNvbnRlbnRzO1xuY29uc3QgY2FsY3VsYXRlUG9zaXRpb24gPSAoc2VsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuc2Nyb2xsWCArIHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyO1xuICAgIGlmIChyZWN0LmJvdHRvbSA8IHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5zY3JvbGxZICsgcmVjdC5ib3R0b20sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIGJvdHRvbTogd2luZG93LnNjcm9sbFkgKyByZWN0LnRvcCxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuY29uc3QgYXBwbHlJbml0aWFsU3R5bGVzID0gKHBvcHVwKSA9PiB7XG4gICAgYXBwbHlNYXhaSW5kZXgocG9wdXApO1xuICAgIHBvcHVwLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgcG9wdXAuc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDEwMG1zJztcbn07XG5jb25zdCBzaG93ID0gKHBvcHVwKSA9PiB7XG4gICAgcG9wdXAuc3R5bGUub3BhY2l0eSA9ICcxJztcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlUG9wdXAgPSAoc2VsZWN0aW9uKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZvY2FibHktcG9wdXAnKTtcbiAgICBhcHBseUluaXRpYWxTdHlsZXMocG9wdXApO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICBkZXN0cm95UG9wdXAoKTtcbiAgICB9KTtcbiAgICB0ZWFyRG93bkNvbnRlbnRzID0geWllbGQgc2V0Q29udGVudHMoe1xuICAgICAgICBwb3B1cCxcbiAgICAgICAgc291cmNlOiBzZWxlY3Rpb24udG9TdHJpbmcoKSxcbiAgICAgICAgZGV0ZWN0ZWRMYW5ndWFnZTogZGV0ZWN0TGFuZ3VhZ2Uoc2VsZWN0aW9uKSxcbiAgICB9KTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKHNlbGVjdGlvbik7XG4gICAgYXBwbHlQb3NpdGlvbihwb3B1cCwgcG9zaXRpb24pO1xuICAgIHNldHVwVHJhbnNmb3JtKHBvcHVwKTtcbiAgICBzaG93KHBvcHVwKTtcbiAgICByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGFwcGx5VHJhbnNmb3JtKHBvcHVwLCBwb3NpdGlvbik7XG4gICAgfSk7XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShwb3B1cCk7XG59KTtcbmV4cG9ydCBjb25zdCBkZXN0cm95UG9wdXAgPSAoKSA9PiB7XG4gICAgaWYgKHBvcHVwKSB7XG4gICAgICAgIHBvcHVwLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAocmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICByZXNpemVPYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0ZWFyRG93bkNvbnRlbnRzKSB7XG4gICAgICAgIHRlYXJEb3duQ29udGVudHMoKTtcbiAgICAgICAgdGVhckRvd25Db250ZW50cyA9IG51bGw7XG4gICAgfVxufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgY3JlYXRlUG9wdXAgfSBmcm9tICcuL3BvcHVwJztcbmltcG9ydCB7IGFwcGx5TWF4WkluZGV4LCBhcHBseVBvc2l0aW9uLCBhcHBseVRyYW5zZm9ybSwgc2V0SG9yaXpvbnRhbERpc3BsYWNlbWVudCwgc2V0dXBUcmFuc2Zvcm0sIH0gZnJvbSAnLi9zdHlsaW5nJztcbmNvbnN0IGJ1dHRvbklkID0gJ3RyYW5zbGF0aW9uLWV4dGVuc2lvbi1idXR0b24nO1xuY29uc3QgY29uc2lkZXJHb29nbGVUcmFuc2xhdGUgPSAoYnV0dG9uKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBndHhJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d0eC10cmFucycpO1xuICAgICAgICAgICAgaWYgKGd0eEljb24pIHtcbiAgICAgICAgICAgICAgICBndHhJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGd0eEljb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgc2V0SG9yaXpvbnRhbERpc3BsYWNlbWVudChidXR0b24sIHJlY3Qud2lkdGggKyAzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9KTtcbn0pO1xuY29uc3QgZ2V0UG9zaXRpb24gPSAoc2VsZWN0aW9uLCBldmVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uUmVjdCA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JvbGxYICsgZXZlbnQueDtcbiAgICAgICAgICAgIGlmICgoc2VsZWN0aW9uUmVjdC5ib3R0b20gKyBzZWxlY3Rpb25SZWN0LnRvcCkgLyAyID4gZXZlbnQueSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHNlbGVjdGlvblJlY3QudG9wIC0gMSArIHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2VsZWN0aW9uUmVjdC5ib3R0b20gKyB3aW5kb3cuc2Nyb2xsWSArIDEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG59O1xuY29uc3QgaGlkZSA9IChidXR0b24pID0+IHtcbiAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5jb25zdCBzaG93ID0gKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uID0gKHNlbGVjdGlvbiwgZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZvY2FibHktYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlkID0gYnV0dG9uSWQ7XG4gICAgaGlkZShidXR0b24pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBhcHBseU1heFpJbmRleChidXR0b24pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3JlYXRlUG9wdXAoc2VsZWN0aW9uKTtcbiAgICAgICAgZGVzdHJveUJ1dHRvbigpO1xuICAgIH0pO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgY29uc3QgcG9zaXRpb24gPSB5aWVsZCBnZXRQb3NpdGlvbihzZWxlY3Rpb24sIGV2ZW50KTtcbiAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgZGVzdHJveUJ1dHRvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFwcGx5UG9zaXRpb24oYnV0dG9uLCBwb3NpdGlvbik7XG4gICAgc2V0dXBUcmFuc2Zvcm0oYnV0dG9uKTtcbiAgICBhcHBseVRyYW5zZm9ybShidXR0b24sIHBvc2l0aW9uKTtcbiAgICB5aWVsZCBjb25zaWRlckdvb2dsZVRyYW5zbGF0ZShidXR0b24pO1xuICAgIHNob3coYnV0dG9uKTtcbn0pO1xuZXhwb3J0IGNvbnN0IGRlc3Ryb3lCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSWQpO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnQHZvY2FibHkvZXh0ZW5zaW9uLWNvbnRlbnQtdWkvbG9hZGVyJztcbmltcG9ydCAnQHdlYmNvbXBvbmVudHMvY3VzdG9tLWVsZW1lbnRzJztcbmltcG9ydCB7IGFwaSwgY29uZmlndXJlQXBpIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uLCBkZXN0cm95QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgZGVzdHJveVBvcHVwIH0gZnJvbSAnLi9wb3B1cCc7XG5pbXBvcnQgeyBpc1ZhbGlkU2VsZWN0aW9uIH0gZnJvbSAnLi9zZWxlY3Rpb24nO1xuY29uc3Qgb25Nb3VzZVVwID0gKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBhcGkucGluZygpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaWYgKCFpc1ZhbGlkU2VsZWN0aW9uKHNlbGVjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB5aWVsZCBjcmVhdGVCdXR0b24oc2VsZWN0aW9uLCBldmVudCk7XG59KTtcbmNvbnN0IG9uTW91c2VEb3duID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgYXBpLnBpbmcoKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGVzdHJveUJ1dHRvbigpO1xuICAgIGRlc3Ryb3lQb3B1cCgpO1xufSk7XG5leHBvcnQgY29uc3QgcmVnaXN0ZXJDb250ZW50U2NyaXB0ID0gKHsgYXBpOiBhcGlPcHRpb25zIH0gPSB7IGFwaToge30gfSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uZmlndXJlQXBpKGFwaU9wdGlvbnMpO1xuICAgIGRlZmluZUN1c3RvbUVsZW1lbnRzKCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xufSk7XG4iLCJpbXBvcnQgeyBNQVhfU1lNQk9MU19UT19CRV9UUkFOU0xBVEVEIH0gZnJvbSAnQHZvY2FibHkvbW9kZWwnO1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRTZWxlY3Rpb24gPSAoc2VsZWN0aW9uKSA9PiB7XG4gICAgaWYgKHNlbGVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghKHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIGluc3RhbmNlb2YgVGV4dCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IE1BWF9TWU1CT0xTX1RPX0JFX1RSQU5TTEFURUQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4iLCJleHBvcnQgY29uc3QgTUFYX1NZTUJPTFNfVE9fQkVfVFJBTlNMQVRFRCA9IDMwO1xuIiwiaW1wb3J0IHsgcCBhcyBwcm9taXNlUmVzb2x2ZSwgYiBhcyBib290c3RyYXBMYXp5IH0gZnJvbSAnLi9pbmRleC1hMmE0N2Y5NS5qcyc7XG5cbi8qXG4gU3RlbmNpbCBDbGllbnQgUGF0Y2ggRXNtIHYyLjE3LjEgfCBNSVQgTGljZW5zZWQgfCBodHRwczovL3N0ZW5jaWxqcy5jb21cbiAqL1xuY29uc3QgcGF0Y2hFc20gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKCk7XG59O1xuXG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50cyA9ICh3aW4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHJldHVybiBwYXRjaEVzbSgpLnRoZW4oKCkgPT4ge1xuICByZXR1cm4gYm9vdHN0cmFwTGF6eShbW1widm9jYWJseS1idXR0b25fMTBcIixbWzEsXCJ2b2NhYmx5LXBvcHVwXCJdLFsxLFwidm9jYWJseS10cmFuc2xhdGlvblwiLHtcInBocmFzZVwiOlsxXSxcInJlc3VsdFwiOlsxNl0sXCJsb2FkaW5nXCI6WzRdLFwiZXhpc3RpbmdMYW5ndWFnZXNcIjpbMTZdLFwibGFuZ3VhZ2VcIjpbMV19XSxbMSxcInZvY2FibHktYnV0dG9uXCJdLFsxLFwidm9jYWJseS1sYW5ndWFnZVwiLHtcInNvdXJjZUxhbmd1YWdlXCI6WzEsXCJzb3VyY2UtbGFuZ3VhZ2VcIl0sXCJ0YXJnZXRMYW5ndWFnZVwiOlsxLFwidGFyZ2V0LWxhbmd1YWdlXCJdLFwid2FpdGluZ1wiOls0XX1dLFsxLFwidm9jYWJseS1zaWduLWluXCJdLFsxLFwidm9jYWJseS1zdWJzY3JpYmVcIix7XCJ0cmlhbFwiOls0XX1dLFsxLFwidm9jYWJseS1jbG9zZS1idXR0b25cIl0sWzEsXCJ2b2NhYmx5LWxvZ29cIl0sWzEsXCJ2b2NhYmx5LXNpZGUtYlwiLHtcIml0ZW1cIjpbMTZdfV0sWzEsXCJ2b2NhYmx5LXNwaW5uZXJcIl1dXV0sIG9wdGlvbnMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH07XG4iLCJpbXBvcnQgeyByZWdpc3RlckNvbnRlbnRTY3JpcHQgfSBmcm9tICdAdm9jYWJseS9leHRlbnNpb24tY29udGVudC1zY3JpcHQnO1xucmVnaXN0ZXJDb250ZW50U2NyaXB0KHtcbiAgICBhcGk6IHtcbiAgICAgICAgYXBwQmFzZVVybDogcHJvY2Vzcy5lbnYuQVBQX0JBU0VfVVJMLFxuICAgIH0sXG59KS50aGVuKCk7XG4iXSwibmFtZXMiOlsibiIsIndpbmRvdyIsIkRvY3VtZW50IiwicHJvdG90eXBlIiwiY3JlYXRlRWxlbWVudCIsInAiLCJjcmVhdGVFbGVtZW50TlMiLCJhYSIsImltcG9ydE5vZGUiLCJiYSIsInByZXBlbmQiLCJjYSIsImFwcGVuZCIsImRhIiwiRG9jdW1lbnRGcmFnbWVudCIsImVhIiwicSIsIk5vZGUiLCJjbG9uZU5vZGUiLCJyIiwiYXBwZW5kQ2hpbGQiLCJ0IiwiaW5zZXJ0QmVmb3JlIiwidSIsInJlbW92ZUNoaWxkIiwidiIsInJlcGxhY2VDaGlsZCIsInciLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ5IiwiRWxlbWVudCIsImF0dGFjaFNoYWRvdyIsInoiLCJBIiwiZ2V0QXR0cmlidXRlIiwiQiIsInNldEF0dHJpYnV0ZSIsIkMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJEIiwiZ2V0QXR0cmlidXRlTlMiLCJFIiwic2V0QXR0cmlidXRlTlMiLCJGIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJHIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiSCIsImluc2VydEFkamFjZW50SFRNTCIsImZhIiwiaGEiLCJpYSIsImJlZm9yZSIsImphIiwiYWZ0ZXIiLCJrYSIsInJlcGxhY2VXaXRoIiwibGEiLCJyZW1vdmUiLCJtYSIsIkhUTUxFbGVtZW50IiwiSSIsIm5hIiwib2EiLCJwYSIsIlNldCIsInFhIiwiYSIsImIiLCJoYXMiLCJ0ZXN0Iiwic3BsaXQiLCJmb3JFYWNoIiwiYWRkIiwicmEiLCJkb2N1bWVudCIsImNvbnRhaW5zIiwiYmluZCIsImRvY3VtZW50RWxlbWVudCIsIkoiLCJpc0Nvbm5lY3RlZCIsIl9fQ0VfaXNJbXBvcnREb2N1bWVudCIsInBhcmVudE5vZGUiLCJTaGFkb3dSb290IiwiaG9zdCIsIksiLCJjaGlsZHJlbiIsIkFycmF5Iiwic2xpY2UiLCJjYWxsIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwibm9kZVR5cGUiLCJFTEVNRU5UX05PREUiLCJwdXNoIiwiTCIsIk0iLCJjIiwiZiIsImQiLCJlIiwibG9jYWxOYW1lIiwiaW1wb3J0IiwiX19DRV9zaGFkb3dSb290IiwiTiIsIk8iLCJub0RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIiLCJzaGFkeURvbUZhc3RXYWxrIiwidGhpcyIsIm0iLCJnIiwiaiIsIlAiLCJTaGFkeURPTSIsImluVXNlIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdGl2ZU1ldGhvZHMiLCJsZW5ndGgiLCJRIiwiUiIsIl9fQ0VfcGF0Y2hlZCIsIlMiLCJfX0NFX3N0YXRlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJUIiwiVSIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiViIsInVwZ3JhZGUiLCJoIiwiX19DRV9yZWdpc3RyeSIsInJlYWR5U3RhdGUiLCJfX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiayIsImwiLCJkZWxldGUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJXIiwiY29uc3RydWN0aW9uU3RhY2siLCJjb25zdHJ1Y3RvckZ1bmN0aW9uIiwiRXJyb3IiLCJwb3AiLCJfX0NFX2RlZmluaXRpb24iLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJoYXNBdHRyaWJ1dGVzIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiWCIsInVhIiwibmFtZXNwYWNlVVJJIiwic2V0UHJvdG90eXBlT2YiLCJIVE1MVW5rbm93bkVsZW1lbnQiLCJtZXNzYWdlIiwic291cmNlVVJMIiwiZmlsZU5hbWUiLCJsaW5lIiwibGluZU51bWJlciIsImNvbHVtbiIsImNvbHVtbk51bWJlciIsIkVycm9yRXZlbnQiLCJpbml0RXJyb3JFdmVudCIsImNhbmNlbGFibGUiLCJmaWxlbmFtZSIsImxpbmVubyIsImNvbG5vIiwiZXJyb3IiLCJjcmVhdGVFdmVudCIsInByZXZlbnREZWZhdWx0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJnZXQiLCJlbnVtZXJhYmxlIiwiZGlzcGF0Y2hFdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb25zb2xlIiwidmEiLCJQcm9taXNlIiwid2EiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJ4YSIsImRpc2Nvbm5lY3QiLCJZIiwicyIsIk1hcCIsIm8iLCJpIiwieWEiLCJTeW50YXhFcnJvciIsIkFhIiwiVHlwZUVycm9yIiwieCIsIkZ1bmN0aW9uIiwiYWRvcHRlZENhbGxiYWNrIiwic2V0IiwiemEiLCJyZXNvbHZlIiwiWiIsImFyZ3VtZW50cyIsImFwcGx5IiwiaW5kZXhPZiIsImFkZGVkTm9kZXMiLCJkZWZpbmUiLCJ3aGVuRGVmaW5lZCIsInJlamVjdCIsInBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2siLCJDdXN0b21FbGVtZW50UmVnaXN0cnkiLCJwb2x5ZmlsbERlZmluZUxhenkiLCJFYSIsImN1c3RvbUVsZW1lbnRzIiwiSGEiLCJjb25zdHJ1Y3RvciIsIndyaXRhYmxlIiwidmFsdWUiLCJGYSIsIkJhIiwiVEVYVF9OT0RFIiwiY2hpbGROb2RlcyIsInNhIiwiQ09NTUVOVF9OT0RFIiwidGV4dENvbnRlbnQiLCJqb2luIiwiY3JlYXRlVGV4dE5vZGUiLCJHYSIsInRvTG93ZXJDYXNlIiwicHJldmlvdXNTaWJsaW5nIiwibGFzdENoaWxkIiwiU3RyaW5nIiwidGEiLCJpbm5lckhUTUwiLCJjb250ZW50IiwiQ2EiLCJEYSIsImZvcmNlUG9seWZpbGwiLCJfX0NFX2luc3RhbGxQb2x5ZmlsbCIsInNlbGYiLCJzY29wZUlkIiwiaG9zdFRhZ05hbWUiLCJpc1N2Z01vZGUiLCJxdWV1ZVBlbmRpbmciLCJ3aW4iLCJkb2MiLCJoZWFkIiwicGx0IiwiJGZsYWdzJCIsIiRyZXNvdXJjZXNVcmwkIiwiam1wIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWVsIiwiZWwiLCJldmVudE5hbWUiLCJsaXN0ZW5lciIsIm9wdHMiLCJyZWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2UiLCJDdXN0b21FdmVudCIsInByb21pc2VSZXNvbHZlIiwic3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMiLCJDU1NTdHlsZVNoZWV0IiwicmVwbGFjZVN5bmMiLCJyb290QXBwbGllZFN0eWxlcyIsIldlYWtNYXAiLCJnZXRTY29wZUlkIiwiY21wIiwibW9kZSIsIkVNUFRZX09CSiIsImlzQ29tcGxleFR5cGUiLCJub2RlTmFtZSIsInZub2RlRGF0YSIsImNoaWxkIiwic2ltcGxlIiwibGFzdFNpbXBsZSIsInZOb2RlQ2hpbGRyZW4iLCJ3YWxrIiwiaXNBcnJheSIsIiR0ZXh0JCIsIm5ld1ZOb2RlIiwiY2xhc3NEYXRhIiwiY2xhc3NOYW1lIiwiY2xhc3MiLCJrZXlzIiwiZmlsdGVyIiwidmRvbUZuVXRpbHMiLCJ2bm9kZSIsIiRhdHRycyQiLCIkY2hpbGRyZW4kIiwidGFnIiwidGV4dCIsIiR0YWckIiwiJGVsbSQiLCJIb3N0IiwiY2IiLCJtYXAiLCJjb252ZXJ0VG9QdWJsaWMiLCJjb252ZXJ0VG9Qcml2YXRlIiwibm9kZSIsInZhdHRycyIsInZjaGlsZHJlbiIsInZrZXkiLCIka2V5JCIsInZuYW1lIiwiJG5hbWUkIiwidnRhZyIsInZ0ZXh0IiwiYXNzaWduIiwia2V5IiwibmFtZSIsInNldEFjY2Vzc29yIiwiZWxtIiwibWVtYmVyTmFtZSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJpc1N2ZyIsImZsYWdzIiwiaXNQcm9wIiwiaXNNZW1iZXJJbkVsZW1lbnQiLCJsbiIsImNsYXNzTGlzdCIsIm9sZENsYXNzZXMiLCJwYXJzZUNsYXNzTGlzdCIsIm5ld0NsYXNzZXMiLCJpbmNsdWRlcyIsImlzQ29tcGxleCIsInRhZ05hbWUiLCJwYXJzZUNsYXNzTGlzdFJlZ2V4IiwidXBkYXRlRWxlbWVudCIsIm9sZFZub2RlIiwibmV3Vm5vZGUiLCJvbGRWbm9kZUF0dHJzIiwibmV3Vm5vZGVBdHRycyIsInVuZGVmaW5lZCIsImNyZWF0ZUVsbSIsIm9sZFBhcmVudFZOb2RlIiwibmV3UGFyZW50Vk5vZGUiLCJjaGlsZEluZGV4IiwicGFyZW50RWxtIiwiY2hpbGROb2RlIiwiYWRkVm5vZGVzIiwicGFyZW50Vk5vZGUiLCJ2bm9kZXMiLCJzdGFydElkeCIsImVuZElkeCIsImNvbnRhaW5lckVsbSIsInNoYWRvd1Jvb3QiLCJyZW1vdmVWbm9kZXMiLCJjYWxsTm9kZVJlZnMiLCJpc1NhbWVWbm9kZSIsInZub2RlMSIsInZub2RlMiIsInBhdGNoIiwib2xkVk5vZGUiLCJvbGRDaGlsZHJlbiIsIm5ld0NoaWxkcmVuIiwib2xkQ2giLCJuZXdDaCIsIm9sZFN0YXJ0SWR4IiwibmV3U3RhcnRJZHgiLCJvbGRFbmRJZHgiLCJvbGRTdGFydFZub2RlIiwib2xkRW5kVm5vZGUiLCJuZXdFbmRJZHgiLCJuZXdTdGFydFZub2RlIiwibmV3RW5kVm5vZGUiLCJ1cGRhdGVDaGlsZHJlbiIsImRhdGEiLCJ2Tm9kZSIsInJlZiIsImdldEVsZW1lbnQiLCJnZXRIb3N0UmVmIiwiZW1pdCIsImRldGFpbCIsImVtaXRFdmVudCIsImJ1YmJsZXMiLCJjb21wb3NlZCIsImV2IiwiYXR0YWNoVG9BbmNlc3RvciIsImhvc3RSZWYiLCJhbmNlc3RvckNvbXBvbmVudCIsIiRvblJlbmRlclJlc29sdmUkIiwic2NoZWR1bGVVcGRhdGUiLCJpc0luaXRpYWxMb2FkIiwiJGFuY2VzdG9yQ29tcG9uZW50JCIsIndyaXRlVGFzayIsImRpc3BhdGNoSG9va3MiLCJlbmRTY2hlZHVsZSIsIiRjbXBNZXRhJCIsIiR0YWdOYW1lJCIsImluc3RhbmNlIiwiJGxhenlJbnN0YW5jZSQiLCJ0aGVuIiwicHJvbWlzZSIsInVwZGF0ZUNvbXBvbmVudCIsImFzeW5jIiwiJGhvc3RFbGVtZW50JCIsImVuZFVwZGF0ZSIsInJjIiwiY21wTWV0YSIsImVuZEF0dGFjaFN0eWxlcyIsInN0eWxlQ29udGFpbmVyTm9kZSIsImhvc3RFbG0iLCJzdHlsZSIsInN0eWxlcyIsInN0eWxlRWxtIiwiYXBwbGllZFN0eWxlcyIsInF1ZXJ5U2VsZWN0b3IiLCJhZG9wdGVkU3R5bGVTaGVldHMiLCJhZGRTdHlsZSIsImdldFJvb3ROb2RlIiwiYXR0YWNoU3R5bGVzIiwiZW5kUmVuZGVyIiwiY2FsbFJlbmRlciIsImNoaWxkcmVuUHJvbWlzZXMiLCJwb3N0VXBkYXRlIiwicG9zdFVwZGF0ZUNvbXBvbmVudCIsImFsbCIsInJlbmRlciIsInJlbmRlckZuUmVzdWx0cyIsIiR2bm9kZSQiLCJyb290Vm5vZGUiLCJyZW5kZXJWZG9tIiwiY29uc29sZUVycm9yIiwic2FmZUNhbGwiLCJhZGRIeWRyYXRlZEZsYWciLCIkb25SZWFkeVJlc29sdmUkIiwiYXBwRGlkTG9hZCIsIm5leHRUaWNrIiwid2hvIiwibmFtZXNwYWNlIiwibWV0aG9kIiwiYXJnIiwidGhlbkZuIiwicHJveHlDb21wb25lbnQiLCJDc3RyIiwiJG1lbWJlcnMkIiwibWVtYmVycyIsImVudHJpZXMiLCJtZW1iZXJGbGFncyIsInByb3BOYW1lIiwiJGluc3RhbmNlVmFsdWVzJCIsIm5ld1ZhbCIsIm9sZFZhbCIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiYXJlQm90aE5hTiIsIk51bWJlciIsImlzTmFOIiwic2V0VmFsdWUiLCJhdHRyTmFtZVRvUHJvcE5hbWUiLCJhdHRyTmFtZSIsIl9vbGRWYWx1ZSIsImhhc093blByb3BlcnR5IiwiXyIsImJvb3RzdHJhcExhenkiLCJsYXp5QnVuZGxlcyIsIm9wdGlvbnMiLCJjbXBUYWdzIiwiZXhjbHVkZSIsIm1ldGFDaGFyc2V0IiwidmlzaWJpbGl0eVN0eWxlIiwiZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MiLCJhcHBMb2FkRmFsbGJhY2siLCJpc0Jvb3RzdHJhcHBpbmciLCJVUkwiLCJyZXNvdXJjZXNVcmwiLCJiYXNlVVJJIiwiaHJlZiIsImxhenlCdW5kbGUiLCJjb21wYWN0TWV0YSIsIiRsaXN0ZW5lcnMkIiwiSG9zdEVsZW1lbnQiLCJzdXBlciIsInJlZ2lzdGVySG9zdCIsImNsZWFyVGltZW91dCIsImVuZENvbm5lY3RlZCIsImhtclZlcnNpb25JZCIsImxvYWRNb2R1bGUiLCJlbmRMb2FkIiwiaXNQcm94aWVkIiwiZW5kTmV3SW5zdGFuY2UiLCJlbmRSZWdpc3RlclN0eWxlcyIsImNzc1RleHQiLCJhbGxvd0NTIiwicmVnaXN0ZXJTdHlsZSIsInNjaGVkdWxlIiwiaW5pdGlhbGl6ZUNvbXBvbmVudCIsImNvbXBvbmVudE9uUmVhZHkiLCIkb25SZWFkeVByb21pc2UkIiwiJGxhenlCdW5kbGVJZCQiLCJzZXRUaW1lb3V0IiwiRnJhZ21lbnQiLCJob3N0UmVmcyIsInJlZ2lzdGVySW5zdGFuY2UiLCJsYXp5SW5zdGFuY2UiLCJjbXBNb2R1bGVzIiwiZXhwb3J0TmFtZSIsInJlcGxhY2UiLCJidW5kbGVJZCIsIm1vZHVsZSIsImltcG9ydGVkTW9kdWxlIiwicXVldWVEb21SZWFkcyIsInF1ZXVlRG9tV3JpdGVzIiwicXVldWVUYXNrIiwicXVldWUiLCJ3cml0ZSIsImZsdXNoIiwiY29uc3VtZSIsInBlcmZvcm1hbmNlIiwibm93IiwiVm9jYWJseUJ1dHRvbiIsInZpZXdCb3giLCJmaWxsIiwiVm9jYWJseUNsb3NlQnV0dG9uIiwiY2xvc2UiLCJvbkNsaWNrIiwieG1sbnMiLCJsYW5ndWFnZUxpc3QiLCJhZiIsInNxIiwiYW0iLCJhciIsImh5IiwiYXoiLCJldSIsImJlIiwiYm4iLCJicyIsImJnIiwiemgiLCJjbyIsImhyIiwiY3MiLCJubCIsImVuIiwiZW8iLCJldCIsImZpIiwiZnIiLCJmeSIsImdsIiwiZGUiLCJndSIsImh0IiwiaGF3IiwiaGUiLCJoaSIsImhtbiIsImh1IiwiaXMiLCJpZyIsImlkIiwiZ2EiLCJpdCIsImp2Iiwia24iLCJrayIsImttIiwicnciLCJrbyIsImt1Iiwia3kiLCJsbyIsImx2IiwibHQiLCJsYiIsIm1rIiwibWciLCJtcyIsIm1sIiwibXQiLCJtaSIsIm1yIiwibW4iLCJteSIsIm5lIiwibm8iLCJueSIsIm9yIiwicHMiLCJwbCIsInB0Iiwicm8iLCJydSIsInNtIiwiZ2QiLCJzciIsInN0Iiwic24iLCJzZCIsInNpIiwic2siLCJzbCIsInNvIiwiZXMiLCJzdSIsInN3Iiwic3YiLCJ0bCIsInRnIiwidHQiLCJ0ZSIsInRoIiwidHIiLCJ0ayIsInVrIiwidXIiLCJ1ZyIsInV6IiwidmkiLCJjeSIsInhoIiwieWkiLCJ5byIsInp1IiwiVm9jYWJseUxhbmd1YWdlIiwiY29uZmlybSIsInNvdXJjZUxhbmd1YWdlU2VsZWN0IiwiY29kZSIsInNlbGVjdGVkIiwic291cmNlTGFuZ3VhZ2UiLCJ0YXJnZXRMYW5ndWFnZVNlbGVjdCIsInRhcmdldExhbmd1YWdlIiwiZGlzYWJsZWQiLCJ3YWl0aW5nIiwiVm9jYWJseUxvZ28iLCJ3aWR0aCIsImhlaWdodCIsIlZvY2FibHlQb3B1cCIsImNvbXBvbmVudERpZFJlbmRlciIsImNvbnRlbnRXcmFwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXNpemVPYnNlcnZlciIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJWb2NhYmx5U2lkZUIiLCJkZWZpbml0aW9ucyIsIml0ZW0iLCJkZWZpbml0aW9uIiwidHJhbnNsYXRpb24iLCJWb2NhYmx5U2lnbkluIiwidGFyZ2V0IiwiVm9jYWJseVNwaW5uZXIiLCJWb2NhYmx5U3Vic2NyaWJlIiwidHJpYWwiLCJWb2NhYmx5VHJhbnNsYXRpb24iLCJjaGFuZ2VMYW5ndWFnZSIsInJlc3VsdCIsImxvYWRpbmciLCJleGlzdGluZ0xhbmd1YWdlcyIsImxhbmd1YWdlIiwibGFuZ3VhZ2VTZWxlY3RvciIsInN1Y2Nlc3MiLCJvbkNoYW5nZSIsImV2ZW50Iiwic29ydCIsImVudHJ5QSIsImVudHJ5QiIsImlzRW50cnlBRXhpc3RzIiwiaXNFbnRyeUJFeGlzdHMiLCJsb2NhbGVDb21wYXJlIiwic2hvd0RpcmVjdCIsImFuYWx5c2UiLCJjYXJkcyIsImNhcmQiLCJzb3VyY2UiLCJpc0RpcmVjdE5lY2Vzc2FyeSIsInBocmFzZSIsImluZGV4IiwiY29sbGVjdGlvbiIsInBhcnRPZlNwZWVjaCIsIndlYnBhY2tBc3luY0NvbnRleHQiLCJyZXEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaWRzIiwiZXhwb3J0cyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm9iaiIsInByb3AiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImJyb3dzZXJFbnYiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY2hyb21lIiwiYnJvd3NlciIsImxvZyIsIm1ha2VTZW5kIiwiaWRlbnRpZmllciIsImV4dGVuc2lvbklkIiwicnVudGltZSIsInNlbmRQYXJhbXMiLCJyZXNwb25zZSIsImxhc3RFcnJvciIsInVuc2hpZnQiLCJzZW5kTWVzc2FnZSIsIm1ha2VMaXN0ZW5lciIsImNhbGxiYWNrIiwicmVxdWVzdCIsInNlbmRlciIsIm5hdGl2ZVNlbmRSZXNwb25zZSIsImNyZWF0ZUV4dGVybmFsTWVzc2FnZSIsInNlbmQiLCJvbk1lc3NhZ2VFeHRlcm5hbCIsImFkZExpc3RlbmVyIiwiY3JlYXRlU2NvcGVkTWVzc2FnZSIsIm9uTWVzc2FnZSIsImNyZWF0ZU1lc3NhZ2UiLCJpc0xvZ2dlZEluIiwib25Jc0xvZ2dlZEluUmVxdWVzdCIsImlzQWN0aXZlIiwib25Jc0FjdGl2ZVJlcXVlc3QiLCJpc0VsaWdpYmxlRm9yVHJpYWwiLCJvbklzRWxpZ2libGVGb3JUcmlhbFJlcXVlc3QiLCJhbmFseXplIiwib25BbmFseXplUmVxdWVzdCIsImxpc3RMYW5ndWFnZXMiLCJvbkxpc3RMYW5ndWFnZXNSZXF1ZXN0IiwiY2xlYW5VcCIsIm9uQ2xlYW5VcFJlcXVlc3QiLCJwaW5nIiwib25QaW5nIiwiZ2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlIiwib25HZXRJbnRlcm5hbFByb3h5TGFudWFnZSIsInNldEludGVybmFsUHJveHlMYW5ndWFnZSIsIm9uU2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlIiwiZ2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSIsIm9uR2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSIsInNldEludGVybmFsU291cmNlTGFuZ3VhZ2UiLCJvblNldEludGVybmFsU291cmNlTGFuZ3VhZ2UiLCJwaW5nRXh0ZXJuYWwiLCJvblBpbmdFeHRlcm5hbCIsInNldFByb3h5TGFuZ3VhZ2UiLCJvblNldFByb3h5TGFuZ3VhZ2UiLCJnZXRQcm94eUxhbmd1YWdlIiwib25HZXRQcm94eUxhbmd1YWdlIiwiYXBpIiwiYXBwQmFzZVVybCIsIkdvb2dsZUxhbmd1YWdlcyIsImdldE5vZGVMYW5ndWFnZSIsIl9hIiwibm9kZUxhbmciLCJsYW5nIiwic3Vic3RyaW5nIiwiZGV0ZWN0TGFuZ3VhZ2UiLCJzZWxlY3Rpb24iLCJhbmNob3JOb2RlIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJnZW5lcmF0b3IiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwiZG9uZSIsImlzVG9wIiwicG9wdXBQb3NpdGlvbiIsImFwcGx5UG9zaXRpb24iLCJlbGVtZW50IiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiYm90dG9tIiwic2V0dXBUcmFuc2Zvcm0iLCJzZXRQcm9wZXJ0eSIsInRyYW5zZm9ybSIsImFwcGx5VHJhbnNmb3JtIiwiZGlzcGxhY2VtZW50Iiwic2Nyb2xsWCIsImlubmVyV2lkdGgiLCJjYWxjdWxhdGVEaXNwbGFjZW1lbnQiLCJhbmltYXRpb25EdXJhdGlvbiIsIm9yaWdpbmFsVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJhcHBseU1heFpJbmRleCIsInpJbmRleCIsInBvcHVwIiwicmVzaXplT2JzZXJ2ZXIiLCJ0ZWFyRG93bkNvbnRlbnRzIiwiY3JlYXRlUG9wdXAiLCJvcGFjaXR5IiwiYXBwbHlJbml0aWFsU3R5bGVzIiwiYm9keSIsInN0b3BQcm9wYWdhdGlvbiIsImRlc3Ryb3lQb3B1cCIsImRldGVjdGVkTGFuZ3VhZ2UiLCJpbnRlcnZhbElkIiwidGVhckRvd24iLCJjbGVhckludGVydmFsIiwic2V0VHJhbnNsYXRpb24iLCJmaW5hbGx5IiwidHJhbnNsYXRpb25SZXN1bHQiLCJleGlzdGluZ0xhbmd1YWdlc1Jlc3VsdCIsImlzQWxyaWdodCIsImludGVybmFsU291cmNlTGFuZ3VhZ2UiLCJpbnRlcm5hbFRhcmdldExhbmd1YWdlIiwiYWxlcnQiLCJ1cGRhdGVBbGVydE1lc3NhZ2UiLCJkYXRhc2V0IiwibGFuZ3VhZ2VGb3JtIiwibmF2aWdhdG9yIiwic3Vic2NyaWJlRWxlbWVudCIsInNpZ25JbkVsZW1lbnQiLCJjbG9zZVdpbmRvdyIsIndpbmRvd1Byb3h5Iiwib3BlbiIsImZvY3VzIiwic2V0SW50ZXJ2YWwiLCJzZXRDb250ZW50cyIsInRvU3RyaW5nIiwiZ2V0UmFuZ2VBdCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsWSIsImNhbGN1bGF0ZVBvc2l0aW9uIiwic2hvdyIsImJ1dHRvbklkIiwiZGVzdHJveUJ1dHRvbiIsImJ1dHRvbiIsIm9uTW91c2VVcCIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsIlRleHQiLCJ0cmltIiwiaXNWYWxpZFNlbGVjdGlvbiIsImRpc3BsYXkiLCJoaWRlIiwic2VsZWN0aW9uUmVjdCIsImdldFBvc2l0aW9uIiwiZ3R4SWNvbiIsImNvbnNpZGVyR29vZ2xlVHJhbnNsYXRlIiwiY3JlYXRlQnV0dG9uIiwib25Nb3VzZURvd24iLCJfYiIsImFwaU9wdGlvbnMiLCJkZWZpbmVDdXN0b21FbGVtZW50cyIsInJlZ2lzdGVyQ29udGVudFNjcmlwdCJdLCJzb3VyY2VSb290IjoiIn0=
