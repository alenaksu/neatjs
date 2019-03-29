parcelRequire = (function(e, r, n, t) {
    var i = 'function' == typeof parcelRequire && parcelRequire,
        o = 'function' == typeof require && require;
    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = 'function' == typeof parcelRequire && parcelRequire;
                if (!t && f) return f(n, !0);
                if (i) return i(n, !0);
                if (o && 'string' == typeof n) return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw ((c.code = 'MODULE_NOT_FOUND'), c);
            }
            (p.resolve = function(r) {
                return e[n][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[n] = new u.Module(n));
            e[n][0].call(l.exports, p, l, l.exports, this);
        }
        return r[n].exports;
        function p(e) {
            return u(p.resolve(e));
        }
    }
    (u.isParcelRequire = !0),
        (u.Module = function(e) {
            (this.id = e), (this.bundle = u), (this.exports = {});
        }),
        (u.modules = e),
        (u.cache = r),
        (u.parent = i),
        (u.register = function(r, n) {
            e[r] = [
                function(e, r) {
                    r.exports = n;
                },
                {}
            ];
        });
    for (var f = 0; f < n.length; f++) u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        'object' == typeof exports && 'undefined' != typeof module
            ? (module.exports = c)
            : 'function' == typeof define && define.amd
            ? define(function() {
                  return c;
              })
            : t && (this[t] = c);
    }
    return u;
})(
    {
        '30xk': [
            function(require, module, exports) {
                'use strict';
                function e(e) {
                    if (Array.isArray(e)) return e;
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = e);
            },
            {}
        ],
        '3gUl': [
            function(require, module, exports) {
                'use strict';
                function e(e, r) {
                    var t = [],
                        l = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (
                            var u, a = e[Symbol.iterator]();
                            !(l = (u = a.next()).done) &&
                            (t.push(u.value), !r || t.length !== r);
                            l = !0
                        );
                    } catch (i) {
                        (n = !0), (o = i);
                    } finally {
                        try {
                            l || null == a.return || a.return();
                        } finally {
                            if (n) throw o;
                        }
                    }
                    return t;
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = e);
            },
            {}
        ],
        o2nT: [
            function(require, module, exports) {
                'use strict';
                function e() {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                    );
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = e);
            },
            {}
        ],
        U1JK: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = a);
                var e = u(require('./arrayWithHoles')),
                    r = u(require('./iterableToArrayLimit')),
                    t = u(require('./nonIterableRest'));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function a(u, a) {
                    return (
                        (0, e.default)(u) ||
                        (0, r.default)(u, a) ||
                        (0, t.default)()
                    );
                }
            },
            {
                './arrayWithHoles': '30xk',
                './iterableToArrayLimit': '3gUl',
                './nonIterableRest': 'o2nT'
            }
        ],
        uYrB: [
            function(require, module, exports) {
                'use strict';
                function e(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = e);
            },
            {}
        ],
        '1Q7K': [
            function(require, module, exports) {
                'use strict';
                function e(e, r) {
                    for (var t = 0; t < r.length; t++) {
                        var n = r[t];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            'value' in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n);
                    }
                }
                function r(r, t, n) {
                    return t && e(r.prototype, t), n && e(r, n), r;
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = r);
            },
            {}
        ],
        TTo7: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.ConnectionGene = void 0);
                var e = n(require('@babel/runtime/helpers/esm/classCallCheck')),
                    t = n(require('@babel/runtime/helpers/esm/createClass'));
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var i = (function() {
                    function n() {
                        var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0,
                            i = arguments.length > 1 ? arguments[1] : void 0,
                            o = arguments.length > 2 ? arguments[2] : void 0,
                            s =
                                arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : 1,
                            r =
                                !(
                                    arguments.length > 4 &&
                                    void 0 !== arguments[4]
                                ) || arguments[4];
                        (0, e.default)(this, n),
                            (this.from = i),
                            (this.to = o),
                            (this.weight = s),
                            (this.enabled = r),
                            (this.innovation = t);
                    }
                    return (
                        (0, t.default)(n, [
                            {
                                key: 'disable',
                                value: function() {
                                    this.enabled = !1;
                                }
                            },
                            {
                                key: 'copy',
                                value: function() {
                                    return new n(
                                        this.innovation,
                                        this.from,
                                        this.to,
                                        this.weight,
                                        this.enabled
                                    );
                                }
                            }
                        ]),
                        n
                    );
                })();
                exports.ConnectionGene = i;
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K'
            }
        ],
        Izky: [
            function(require, module, exports) {
                'use strict';
                function o(t) {
                    return (o =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function(o) {
                                  return typeof o;
                              }
                            : function(o) {
                                  return o &&
                                      'function' == typeof Symbol &&
                                      o.constructor === Symbol &&
                                      o !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof o;
                              })(t);
                }
                function t(e) {
                    return (
                        'function' == typeof Symbol &&
                        'symbol' === o(Symbol.iterator)
                            ? (exports.default = t = function(t) {
                                  return o(t);
                              })
                            : (exports.default = t = function(t) {
                                  return t &&
                                      'function' == typeof Symbol &&
                                      t.constructor === Symbol &&
                                      t !== Symbol.prototype
                                      ? 'symbol'
                                      : o(t);
                              }),
                        t(e)
                    );
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = t);
            },
            {}
        ],
        b9Zy: [
            function(require, module, exports) {
                'use strict';
                function e(e) {
                    if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return e;
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = e);
            },
            {}
        ],
        pQSE: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = u);
                var e = r(require('../../helpers/esm/typeof')),
                    t = r(require('./assertThisInitialized'));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(r, u) {
                    return !u ||
                        ('object' !== (0, e.default)(u) &&
                            'function' != typeof u)
                        ? (0, t.default)(r)
                        : u;
                }
            },
            {
                '../../helpers/esm/typeof': 'Izky',
                './assertThisInitialized': 'b9Zy'
            }
        ],
        i2He: [
            function(require, module, exports) {
                'use strict';
                function t(e) {
                    return (
                        (exports.default = t = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function(t) {
                                  return (
                                      t.__proto__ || Object.getPrototypeOf(t)
                                  );
                              }),
                        t(e)
                    );
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = t);
            },
            {}
        ],
        whuc: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = r);
                var e = t(require('./getPrototypeOf'));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(t, r) {
                    for (
                        ;
                        !Object.prototype.hasOwnProperty.call(t, r) &&
                        null !== (t = (0, e.default)(t));

                    );
                    return t;
                }
            },
            { './getPrototypeOf': 'i2He' }
        ],
        Q3cA: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = u);
                var e = r(require('./getPrototypeOf')),
                    t = r(require('./superPropBase'));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(e, r, f) {
                    return (
                        'undefined' != typeof Reflect && Reflect.get
                            ? (exports.default = u = Reflect.get)
                            : (exports.default = u = function(e, r, u) {
                                  var f = (0, t.default)(e, r);
                                  if (f) {
                                      var o = Object.getOwnPropertyDescriptor(
                                          f,
                                          r
                                      );
                                      return o.get ? o.get.call(u) : o.value;
                                  }
                              }),
                        u(e, r, f || e)
                    );
                }
            },
            { './getPrototypeOf': 'i2He', './superPropBase': 'whuc' }
        ],
        spGh: [
            function(require, module, exports) {
                'use strict';
                function e(t, r) {
                    return (
                        (exports.default = e =
                            Object.setPrototypeOf ||
                            function(e, t) {
                                return (e.__proto__ = t), e;
                            }),
                        e(t, r)
                    );
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = e);
            },
            {}
        ],
        NNOi: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = r);
                var e = t(require('./setPrototypeOf'));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(t, r) {
                    if ('function' != typeof r && null !== r)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (t.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    })),
                        r && (0, e.default)(t, r);
                }
            },
            { './setPrototypeOf': 'spGh' }
        ],
        VuXv: [
            function(require, module, exports) {
                var t = (function(t) {
                    'use strict';
                    var r,
                        e = Object.prototype,
                        n = e.hasOwnProperty,
                        o = 'function' == typeof Symbol ? Symbol : {},
                        i = o.iterator || '@@iterator',
                        a = o.asyncIterator || '@@asyncIterator',
                        c = o.toStringTag || '@@toStringTag';
                    function u(t, r, e, n) {
                        var o = r && r.prototype instanceof v ? r : v,
                            i = Object.create(o.prototype),
                            a = new k(n || []);
                        return (
                            (i._invoke = (function(t, r, e) {
                                var n = f;
                                return function(o, i) {
                                    if (n === l)
                                        throw new Error(
                                            'Generator is already running'
                                        );
                                    if (n === p) {
                                        if ('throw' === o) throw i;
                                        return N();
                                    }
                                    for (e.method = o, e.arg = i; ; ) {
                                        var a = e.delegate;
                                        if (a) {
                                            var c = _(a, e);
                                            if (c) {
                                                if (c === y) continue;
                                                return c;
                                            }
                                        }
                                        if ('next' === e.method)
                                            e.sent = e._sent = e.arg;
                                        else if ('throw' === e.method) {
                                            if (n === f) throw ((n = p), e.arg);
                                            e.dispatchException(e.arg);
                                        } else
                                            'return' === e.method &&
                                                e.abrupt('return', e.arg);
                                        n = l;
                                        var u = h(t, r, e);
                                        if ('normal' === u.type) {
                                            if (
                                                ((n = e.done ? p : s),
                                                u.arg === y)
                                            )
                                                continue;
                                            return {
                                                value: u.arg,
                                                done: e.done
                                            };
                                        }
                                        'throw' === u.type &&
                                            ((n = p),
                                            (e.method = 'throw'),
                                            (e.arg = u.arg));
                                    }
                                };
                            })(t, e, a)),
                            i
                        );
                    }
                    function h(t, r, e) {
                        try {
                            return { type: 'normal', arg: t.call(r, e) };
                        } catch (n) {
                            return { type: 'throw', arg: n };
                        }
                    }
                    t.wrap = u;
                    var f = 'suspendedStart',
                        s = 'suspendedYield',
                        l = 'executing',
                        p = 'completed',
                        y = {};
                    function v() {}
                    function d() {}
                    function g() {}
                    var m = {};
                    m[i] = function() {
                        return this;
                    };
                    var w = Object.getPrototypeOf,
                        L = w && w(w(G([])));
                    L && L !== e && n.call(L, i) && (m = L);
                    var x = (g.prototype = v.prototype = Object.create(m));
                    function E(t) {
                        ['next', 'throw', 'return'].forEach(function(r) {
                            t[r] = function(t) {
                                return this._invoke(r, t);
                            };
                        });
                    }
                    function b(t) {
                        var r;
                        this._invoke = function(e, o) {
                            function i() {
                                return new Promise(function(r, i) {
                                    !(function r(e, o, i, a) {
                                        var c = h(t[e], t, o);
                                        if ('throw' !== c.type) {
                                            var u = c.arg,
                                                f = u.value;
                                            return f &&
                                                'object' == typeof f &&
                                                n.call(f, '__await')
                                                ? Promise.resolve(
                                                      f.__await
                                                  ).then(
                                                      function(t) {
                                                          r('next', t, i, a);
                                                      },
                                                      function(t) {
                                                          r('throw', t, i, a);
                                                      }
                                                  )
                                                : Promise.resolve(f).then(
                                                      function(t) {
                                                          (u.value = t), i(u);
                                                      },
                                                      function(t) {
                                                          return r(
                                                              'throw',
                                                              t,
                                                              i,
                                                              a
                                                          );
                                                      }
                                                  );
                                        }
                                        a(c.arg);
                                    })(e, o, r, i);
                                });
                            }
                            return (r = r ? r.then(i, i) : i());
                        };
                    }
                    function _(t, e) {
                        var n = t.iterator[e.method];
                        if (n === r) {
                            if (((e.delegate = null), 'throw' === e.method)) {
                                if (
                                    t.iterator.return &&
                                    ((e.method = 'return'),
                                    (e.arg = r),
                                    _(t, e),
                                    'throw' === e.method)
                                )
                                    return y;
                                (e.method = 'throw'),
                                    (e.arg = new TypeError(
                                        "The iterator does not provide a 'throw' method"
                                    ));
                            }
                            return y;
                        }
                        var o = h(n, t.iterator, e.arg);
                        if ('throw' === o.type)
                            return (
                                (e.method = 'throw'),
                                (e.arg = o.arg),
                                (e.delegate = null),
                                y
                            );
                        var i = o.arg;
                        return i
                            ? i.done
                                ? ((e[t.resultName] = i.value),
                                  (e.next = t.nextLoc),
                                  'return' !== e.method &&
                                      ((e.method = 'next'), (e.arg = r)),
                                  (e.delegate = null),
                                  y)
                                : i
                            : ((e.method = 'throw'),
                              (e.arg = new TypeError(
                                  'iterator result is not an object'
                              )),
                              (e.delegate = null),
                              y);
                    }
                    function j(t) {
                        var r = { tryLoc: t[0] };
                        1 in t && (r.catchLoc = t[1]),
                            2 in t &&
                                ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                            this.tryEntries.push(r);
                    }
                    function O(t) {
                        var r = t.completion || {};
                        (r.type = 'normal'), delete r.arg, (t.completion = r);
                    }
                    function k(t) {
                        (this.tryEntries = [{ tryLoc: 'root' }]),
                            t.forEach(j, this),
                            this.reset(!0);
                    }
                    function G(t) {
                        if (t) {
                            var e = t[i];
                            if (e) return e.call(t);
                            if ('function' == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var o = -1,
                                    a = function e() {
                                        for (; ++o < t.length; )
                                            if (n.call(t, o))
                                                return (
                                                    (e.value = t[o]),
                                                    (e.done = !1),
                                                    e
                                                );
                                        return (e.value = r), (e.done = !0), e;
                                    };
                                return (a.next = a);
                            }
                        }
                        return { next: N };
                    }
                    function N() {
                        return { value: r, done: !0 };
                    }
                    return (
                        (d.prototype = x.constructor = g),
                        (g.constructor = d),
                        (g[c] = d.displayName = 'GeneratorFunction'),
                        (t.isGeneratorFunction = function(t) {
                            var r = 'function' == typeof t && t.constructor;
                            return (
                                !!r &&
                                (r === d ||
                                    'GeneratorFunction' ===
                                        (r.displayName || r.name))
                            );
                        }),
                        (t.mark = function(t) {
                            return (
                                Object.setPrototypeOf
                                    ? Object.setPrototypeOf(t, g)
                                    : ((t.__proto__ = g),
                                      c in t || (t[c] = 'GeneratorFunction')),
                                (t.prototype = Object.create(x)),
                                t
                            );
                        }),
                        (t.awrap = function(t) {
                            return { __await: t };
                        }),
                        E(b.prototype),
                        (b.prototype[a] = function() {
                            return this;
                        }),
                        (t.AsyncIterator = b),
                        (t.async = function(r, e, n, o) {
                            var i = new b(u(r, e, n, o));
                            return t.isGeneratorFunction(e)
                                ? i
                                : i.next().then(function(t) {
                                      return t.done ? t.value : i.next();
                                  });
                        }),
                        E(x),
                        (x[c] = 'Generator'),
                        (x[i] = function() {
                            return this;
                        }),
                        (x.toString = function() {
                            return '[object Generator]';
                        }),
                        (t.keys = function(t) {
                            var r = [];
                            for (var e in t) r.push(e);
                            return (
                                r.reverse(),
                                function e() {
                                    for (; r.length; ) {
                                        var n = r.pop();
                                        if (n in t)
                                            return (
                                                (e.value = n), (e.done = !1), e
                                            );
                                    }
                                    return (e.done = !0), e;
                                }
                            );
                        }),
                        (t.values = G),
                        (k.prototype = {
                            constructor: k,
                            reset: function(t) {
                                if (
                                    ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = r),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = 'next'),
                                    (this.arg = r),
                                    this.tryEntries.forEach(O),
                                    !t)
                                )
                                    for (var e in this)
                                        't' === e.charAt(0) &&
                                            n.call(this, e) &&
                                            !isNaN(+e.slice(1)) &&
                                            (this[e] = r);
                            },
                            stop: function() {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ('throw' === t.type) throw t.arg;
                                return this.rval;
                            },
                            dispatchException: function(t) {
                                if (this.done) throw t;
                                var e = this;
                                function o(n, o) {
                                    return (
                                        (c.type = 'throw'),
                                        (c.arg = t),
                                        (e.next = n),
                                        o && ((e.method = 'next'), (e.arg = r)),
                                        !!o
                                    );
                                }
                                for (
                                    var i = this.tryEntries.length - 1;
                                    i >= 0;
                                    --i
                                ) {
                                    var a = this.tryEntries[i],
                                        c = a.completion;
                                    if ('root' === a.tryLoc) return o('end');
                                    if (a.tryLoc <= this.prev) {
                                        var u = n.call(a, 'catchLoc'),
                                            h = n.call(a, 'finallyLoc');
                                        if (u && h) {
                                            if (this.prev < a.catchLoc)
                                                return o(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc)
                                                return o(a.finallyLoc);
                                        } else if (u) {
                                            if (this.prev < a.catchLoc)
                                                return o(a.catchLoc, !0);
                                        } else {
                                            if (!h)
                                                throw new Error(
                                                    'try statement without catch or finally'
                                                );
                                            if (this.prev < a.finallyLoc)
                                                return o(a.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function(t, r) {
                                for (
                                    var e = this.tryEntries.length - 1;
                                    e >= 0;
                                    --e
                                ) {
                                    var o = this.tryEntries[e];
                                    if (
                                        o.tryLoc <= this.prev &&
                                        n.call(o, 'finallyLoc') &&
                                        this.prev < o.finallyLoc
                                    ) {
                                        var i = o;
                                        break;
                                    }
                                }
                                i &&
                                    ('break' === t || 'continue' === t) &&
                                    i.tryLoc <= r &&
                                    r <= i.finallyLoc &&
                                    (i = null);
                                var a = i ? i.completion : {};
                                return (
                                    (a.type = t),
                                    (a.arg = r),
                                    i
                                        ? ((this.method = 'next'),
                                          (this.next = i.finallyLoc),
                                          y)
                                        : this.complete(a)
                                );
                            },
                            complete: function(t, r) {
                                if ('throw' === t.type) throw t.arg;
                                return (
                                    'break' === t.type || 'continue' === t.type
                                        ? (this.next = t.arg)
                                        : 'return' === t.type
                                        ? ((this.rval = this.arg = t.arg),
                                          (this.method = 'return'),
                                          (this.next = 'end'))
                                        : 'normal' === t.type &&
                                          r &&
                                          (this.next = r),
                                    y
                                );
                            },
                            finish: function(t) {
                                for (
                                    var r = this.tryEntries.length - 1;
                                    r >= 0;
                                    --r
                                ) {
                                    var e = this.tryEntries[r];
                                    if (e.finallyLoc === t)
                                        return (
                                            this.complete(
                                                e.completion,
                                                e.afterLoc
                                            ),
                                            O(e),
                                            y
                                        );
                                }
                            },
                            catch: function(t) {
                                for (
                                    var r = this.tryEntries.length - 1;
                                    r >= 0;
                                    --r
                                ) {
                                    var e = this.tryEntries[r];
                                    if (e.tryLoc === t) {
                                        var n = e.completion;
                                        if ('throw' === n.type) {
                                            var o = n.arg;
                                            O(e);
                                        }
                                        return o;
                                    }
                                }
                                throw new Error('illegal catch attempt');
                            },
                            delegateYield: function(t, e, n) {
                                return (
                                    (this.delegate = {
                                        iterator: G(t),
                                        resultName: e,
                                        nextLoc: n
                                    }),
                                    'next' === this.method && (this.arg = r),
                                    y
                                );
                            }
                        }),
                        t
                    );
                })('object' == typeof module ? module.exports : {});
                try {
                    regeneratorRuntime = t;
                } catch (r) {
                    Function('r', 'regeneratorRuntime = r')(t);
                }
            },
            {}
        ],
        y2KZ: [
            function(require, module, exports) {
                module.exports = require('regenerator-runtime');
            },
            { 'regenerator-runtime': 'VuXv' }
        ],
        TZ1C: [
            function(require, module, exports) {
                'use strict';
                function e(e) {
                    if (Array.isArray(e)) {
                        for (
                            var r = 0, t = new Array(e.length);
                            r < e.length;
                            r++
                        )
                            t[r] = e[r];
                        return t;
                    }
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = e);
            },
            {}
        ],
        BHut: [
            function(require, module, exports) {
                'use strict';
                function t(t) {
                    if (
                        Symbol.iterator in Object(t) ||
                        '[object Arguments]' ===
                            Object.prototype.toString.call(t)
                    )
                        return Array.from(t);
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = t);
            },
            {}
        ],
        aG6K: [
            function(require, module, exports) {
                'use strict';
                function e() {
                    throw new TypeError(
                        'Invalid attempt to spread non-iterable instance'
                    );
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = e);
            },
            {}
        ],
        lA6S: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = a);
                var e = u(require('./arrayWithoutHoles')),
                    r = u(require('./iterableToArray')),
                    t = u(require('./nonIterableSpread'));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function a(u) {
                    return (
                        (0, e.default)(u) ||
                        (0, r.default)(u) ||
                        (0, t.default)()
                    );
                }
            },
            {
                './arrayWithoutHoles': 'TZ1C',
                './iterableToArray': 'BHut',
                './nonIterableSpread': 'aG6K'
            }
        ],
        aofX: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = a);
                var e = u(require('./arrayWithHoles')),
                    r = u(require('./iterableToArray')),
                    t = u(require('./nonIterableRest'));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function a(u) {
                    return (
                        (0, e.default)(u) ||
                        (0, r.default)(u) ||
                        (0, t.default)()
                    );
                }
            },
            {
                './arrayWithHoles': '30xk',
                './iterableToArray': 'BHut',
                './nonIterableRest': 'o2nT'
            }
        ],
        VHnF: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.Species = void 0);
                var e = a(require('@babel/runtime/helpers/esm/toArray')),
                    s = a(require('@babel/runtime/helpers/esm/slicedToArray')),
                    i = a(require('@babel/runtime/helpers/esm/classCallCheck')),
                    t = a(require('@babel/runtime/helpers/esm/createClass')),
                    n = require('../utils');
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var r = (function() {
                    function a() {
                        (0, i.default)(this, a),
                            (this.organisms = []),
                            (this.extinct = !1),
                            (this.age = 0),
                            (this.ageOfLastImprovement = 0),
                            (this.maxFitness = 0),
                            (this.averageFitness = 0),
                            (this.expectedOffspring = 0);
                    }
                    return (
                        (0, t.default)(a, [
                            {
                                key: 'addOrganism',
                                value: function(e) {
                                    this.specimen || (this.specimen = e),
                                        this.organisms.push(e),
                                        (e.species = this);
                                }
                            },
                            {
                                key: 'removeOrganism',
                                value: function(e) {
                                    var s = this.organisms.indexOf(e);
                                    ~s && this.organisms.splice(s, 1);
                                }
                            },
                            {
                                key: 'getSpecimen',
                                value: function() {
                                    return this.specimen;
                                }
                            },
                            {
                                key: 'getChampion',
                                value: function() {
                                    return this.organisms[0];
                                }
                            },
                            {
                                key: 'adjustFitness',
                                value: function(e) {
                                    var i = this,
                                        t = 0;
                                    (this.extinct = !!(
                                        this.age -
                                            this.ageOfLastImprovement +
                                            1 >
                                        e.dropoffAge
                                    )),
                                        this.organisms.forEach(function(s) {
                                            (s.originalFitness = s.fitness),
                                                i.extinct &&
                                                    (s.fitness *= 0.01),
                                                i.age <= 10 &&
                                                    (s.fitness *=
                                                        e.ageSignificance),
                                                (s.fitness =
                                                    Math.max(s.fitness, 1e-4) /
                                                    i.organisms.length),
                                                (t += s.originalFitness);
                                        }),
                                        this.organisms.sort(
                                            (0, n.descending)(function(e) {
                                                return e.fitness;
                                            })
                                        );
                                    var a = (0, n.getRandomItems)(
                                            this.organisms,
                                            1
                                        ),
                                        r = (0, s.default)(a, 1);
                                    (this.specimen = r[0]),
                                        (this.averageFitness =
                                            t / this.organisms.length),
                                        this.organisms[0].originalFitness >
                                            this.maxFitness &&
                                            ((this.maxFitness = this.organisms[0].originalFitness),
                                            (this.ageOfLastImprovement = this.age));
                                    for (
                                        var o = Math.floor(
                                            this.organisms.length *
                                                e.survivalThreshold +
                                                1
                                        );
                                        o < this.organisms.length;
                                        o++
                                    )
                                        this.organisms[o].kill = !0;
                                }
                            },
                            {
                                key: 'reproduce',
                                value: function(i, t, a, r) {
                                    var o = this.organisms,
                                        m = this.expectedOffspring;
                                    if (!m || o.length)
                                        for (
                                            var h = (0, e.default)(o).slice(0),
                                                g = h[0],
                                                l = !1,
                                                u = a.getSuperChamp(),
                                                f = 0;
                                            f < m;
                                            f++
                                        ) {
                                            var c = void 0;
                                            if (
                                                u &&
                                                u === g &&
                                                u.expectedOffspring > 0
                                            ) {
                                                var p = u.copy(0, t);
                                                1 === u.expectedOffspring &&
                                                    (p = (0, n.mutateGenome)(
                                                        i,
                                                        p
                                                    )),
                                                    u.expectedOffspring--,
                                                    (c = p);
                                            } else if (!l && m > 5)
                                                (c = g.copy(0, t)), (l = !0);
                                            else if (
                                                (0, n.rnd)() <
                                                i.mutateOnlyProbability
                                            ) {
                                                var d = (0, n.getRandomItems)(
                                                        h,
                                                        1
                                                    ),
                                                    v = (0, s.default)(d, 1)[0];
                                                c = (0, n.mutateGenome)(
                                                    i,
                                                    v.copy(0, t)
                                                );
                                            } else {
                                                var y = (0, n.getRandomItems)(
                                                        h,
                                                        1
                                                    ),
                                                    x = (0, s.default)(y, 1)[0],
                                                    O = void 0;
                                                if (
                                                    (0, n.rnd)() >
                                                    i.interspeciesMateRate
                                                ) {
                                                    var b = (0,
                                                    n.getRandomItems)(h, 1);
                                                    O = (0, s.default)(b, 1)[0];
                                                } else {
                                                    for (
                                                        var F = 0, k = this;
                                                        k === this && F++ < 5;

                                                    ) {
                                                        var I = (0,
                                                        n.getRandomSpecies)(r);
                                                        I.organisms.length &&
                                                            (k = I);
                                                    }
                                                    O = k.getChampion();
                                                }
                                                (c = (0, n.crossover)(O, x, i)),
                                                    ((0, n.rnd)() <
                                                        i.mutateOnlyProbability ||
                                                        0 ===
                                                            (0,
                                                            n.compatibility)(
                                                                x,
                                                                O,
                                                                i
                                                            )) &&
                                                        (0, n.mutateGenome)(
                                                            i,
                                                            c
                                                        );
                                            }
                                            (c.generation = t),
                                                (0, n.speciateOrganism)(
                                                    i,
                                                    c,
                                                    a.species
                                                );
                                        }
                                }
                            }
                        ]),
                        a
                    );
                })();
                exports.Species = r;
            },
            {
                '@babel/runtime/helpers/esm/toArray': 'aofX',
                '@babel/runtime/helpers/esm/slicedToArray': 'U1JK',
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '../utils': 'sfxI'
            }
        ],
        y7IY: [
            function(require, module, exports) {
                'use strict';
                var e, o;
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.NeuronType = exports.NodeType = void 0),
                    (exports.NodeType = e),
                    (function(e) {
                        (e[(e.Bias = 0)] = 'Bias'),
                            (e[(e.Input = 1)] = 'Input'),
                            (e[(e.Hidden = 2)] = 'Hidden'),
                            (e[(e.Output = 3)] = 'Output');
                    })(e || (exports.NodeType = e = {})),
                    (exports.NeuronType = o),
                    (function(e) {
                        (e[(e.Neuron = 0)] = 'Neuron'),
                            (e[(e.Sensor = 1)] = 'Sensor');
                    })(o || (exports.NeuronType = o = {}));
            },
            {}
        ],
        sfxI: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.getRandomItems = c),
                    (exports.randomBool = f),
                    (exports.mean = p),
                    (exports.rnd = d),
                    (exports.gaussian = l),
                    (exports.uuid = h),
                    (exports.compatibility = m),
                    (exports.sigmoid = g),
                    (exports.isRecurrent = v),
                    (exports.crossover = y),
                    (exports.mutateGenome = x),
                    (exports.getRandomSpecies = b),
                    (exports.speciateOrganism = M),
                    (exports.descending = w),
                    (exports.ascending = O),
                    (exports.wrapNumber = T),
                    (exports.Innovation = E),
                    (exports.isOutput = exports.isSensor = exports.byType = exports.byInnovation = exports.byMaxFitness = exports.byFitness = void 0);
                var e = a(require('@babel/runtime/helpers/esm/slicedToArray')),
                    t = a(require('@babel/runtime/regenerator')),
                    n = a(
                        require('@babel/runtime/helpers/esm/toConsumableArray')
                    ),
                    r = require('./neat/Organism'),
                    o = require('./neat/Species'),
                    i = require('./types');
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var s = t.default.mark(l),
                    u = t.default.mark(E);
                function c(e, t) {
                    var r = [],
                        o = (0, n.default)(e);
                    for (t = Math.min(t, e.length); r.length < t; ) {
                        var i = Math.floor(d(o.length));
                        r.push.apply(r, (0, n.default)(o.splice(i, 1)));
                    }
                    return r;
                }
                function f() {
                    return Math.random() > 0.5;
                }
                function p() {
                    for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                    )
                        t[n] = arguments[n];
                    return t.length
                        ? t.reduce(function(e, t) {
                              return e + t;
                          }, 0) / t.length
                        : 0;
                }
                function d() {
                    var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 1,
                        t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0;
                    return Math.random() * (e - t) + t;
                }
                function l() {
                    var e,
                        n,
                        r,
                        o,
                        i,
                        a = arguments;
                    return t.default.wrap(
                        function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        (e =
                                            a.length > 0 && void 0 !== a[0]
                                                ? a[0]
                                                : 0),
                                            (n =
                                                a.length > 1 && void 0 !== a[1]
                                                    ? a[1]
                                                    : 1);
                                    case 2:
                                        0;
                                        do {
                                            (o = d(1, -1)),
                                                (r = d(1, -1)),
                                                (i =
                                                    Math.pow(r, 2) +
                                                    Math.pow(o, 2));
                                        } while (0 === i || i >= 1);
                                        return (
                                            (i = Math.sqrt(
                                                (-2 * Math.log(i)) / i
                                            )),
                                            (t.next = 7),
                                            i * r * n + e
                                        );
                                    case 7:
                                        return (t.next = 9), i * o * n + e;
                                    case 9:
                                        t.next = 2;
                                        break;
                                    case 11:
                                    case 'end':
                                        return t.stop();
                                }
                        },
                        s,
                        this
                    );
                }
                function h() {
                    var e = [8, 4, 4, 4, 12].map(function(e) {
                        for (var t = Array(e), n = 0; n < e; n++)
                            t[n] = (15 * Math.random()) >>> 0;
                        return t;
                    });
                    return (
                        (e[2][0] &= 3),
                        (e[2][1] |= 8),
                        (e[3][0] = 4),
                        e
                            .map(function(e) {
                                return e
                                    .map(function(e) {
                                        return e.toString(16);
                                    })
                                    .join('');
                            })
                            .join('-')
                    );
                }
                function m(e, t, r) {
                    var o = new Set(
                            [].concat(
                                (0, n.default)(e.connections.keys()),
                                (0, n.default)(t.connections.keys())
                            )
                        ),
                        i = Math.abs(e.connections.size - t.connections.size),
                        a = -i,
                        s = [],
                        u = Math.max(e.connections.size, t.connections.size, 1);
                    return (
                        o.forEach(function(n) {
                            var r = e.connections.get(n),
                                o = t.connections.get(n);
                            r && o
                                ? s.push(Math.abs(r.weight - o.weight))
                                : (r && o) || a++;
                        }),
                        (i * r.excessCoefficient + a * r.disjointCoefficient) /
                            u +
                            p.apply(void 0, s) * r.weightDifferenceCoefficient
                    );
                }
                function g(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 4.924273;
                    return 1 / (1 + Math.exp(-t * e));
                }
                function v(e, t) {
                    for (var r = e.from, o = [e]; o.length; ) {
                        if ((e = o.shift()).to.id === r.id) return !0;
                        o.push.apply(
                            o,
                            (0, n.default)(
                                t.filter(function(t) {
                                    return t.from.id === e.to.id;
                                })
                            )
                        );
                    }
                    return !1;
                }
                function y(t, o, i) {
                    var a = new r.Organism(),
                        s = [t, o].sort(
                            w(function(e) {
                                return e.fitness;
                            })
                        ),
                        u = (0, e.default)(s, 2),
                        c = u[0],
                        p = u[1],
                        d = new Set(
                            [].concat(
                                (0, n.default)(c.connections.keys()),
                                (0, n.default)(p.connections.keys())
                            )
                        );
                    return (
                        c.nodes.forEach(function(e) {
                            (k(e) || q(e)) && a.addNode(e.copy());
                        }),
                        Array.from(d.values())
                            .sort(O())
                            .forEach(function(e) {
                                var t = c.connections.get(e),
                                    n = p.connections.get(e),
                                    r =
                                        t && n
                                            ? f() &&
                                              i.feedForwardOnly &&
                                              !v(t, a.getConnections())
                                                ? t.copy()
                                                : n.copy()
                                            : (t || n).copy();
                                (i.feedForwardOnly &&
                                    v(r, a.getConnections())) ||
                                    (a.connections.set(e, r),
                                    (r.from = r.from.copy()),
                                    (r.to = r.to.copy()),
                                    a.addNode(r.from),
                                    a.addNode(r.to));
                            }),
                        a
                    );
                }
                function x(e, t) {
                    return (
                        d() < e.mutateAddNodeProbability
                            ? t.mutateAddNode(e)
                            : d() < e.mutateAddConnectionProbability
                            ? t.mutateAddConnection(e)
                            : (d() < e.mutateConnectionWeightsProbability &&
                                  t.mutateConnectionsWeights(e),
                              d() < e.mutateToggleEnableProbability &&
                                  t.mutateToggleEnable(),
                              d() < e.reEnableGeneProbability &&
                                  t.reEnableGene()),
                        t
                    );
                }
                function b(e) {
                    var t = Math.min(Math.round(l().next().value), 1);
                    return e[T(0, e.length - 1, t)];
                }
                function M(e, t, n) {
                    var r = e.compatibilityThreshold;
                    if (
                        !(
                            n.length > 0 &&
                            n.some(function(n) {
                                if (!n.organisms.length) return !1;
                                var o = m(t, n.getSpecimen(), e) < r;
                                return o && n.addOrganism(t), o;
                            })
                        )
                    ) {
                        var i = new o.Species();
                        i.addOrganism(t), n.push(i);
                    }
                }
                function w() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : function(e) {
                                  return e;
                              };
                    return function(t, n) {
                        return e(n) - e(t);
                    };
                }
                function O() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : function(e) {
                                  return e;
                              };
                    return function(t, n) {
                        return e(t) - e(n);
                    };
                }
                var C = function(e) {
                    return e.fitness;
                };
                exports.byFitness = C;
                var A = function(e) {
                    return e.maxFitness;
                };
                exports.byMaxFitness = A;
                var N = function(e) {
                    return e.innovation;
                };
                exports.byInnovation = N;
                var S = function(e) {
                    return e.type;
                };
                function T(e, t, n) {
                    var r = t - e + 1;
                    return ((((n - e) % r) + r) % r) + e;
                }
                exports.byType = S;
                var k = function(e) {
                    return (
                        e.type === i.NodeType.Input ||
                        e.type === i.NodeType.Bias
                    );
                };
                exports.isSensor = k;
                var q = function(e) {
                    return e.type === i.NodeType.Output;
                };
                function E() {
                    var e,
                        n = arguments;
                    return t.default.wrap(
                        function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        e =
                                            n.length > 0 && void 0 !== n[0]
                                                ? n[0]
                                                : 0;
                                    case 1:
                                        return (t.next = 4), e++;
                                    case 4:
                                        t.next = 1;
                                        break;
                                    case 6:
                                    case 'end':
                                        return t.stop();
                                }
                        },
                        u,
                        this
                    );
                }
                exports.isOutput = q;
            },
            {
                '@babel/runtime/helpers/esm/slicedToArray': 'U1JK',
                '@babel/runtime/regenerator': 'y2KZ',
                '@babel/runtime/helpers/esm/toConsumableArray': 'lA6S',
                './neat/Organism': 'Hvxq',
                './neat/Species': 'VHnF',
                './types': 'y7IY'
            }
        ],
        aUXD: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.NodeGene = void 0);
                var e = u(require('@babel/runtime/helpers/esm/classCallCheck')),
                    t = u(require('@babel/runtime/helpers/esm/createClass')),
                    r = require('../utils');
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var i = (function() {
                    function u(t) {
                        var i =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : (0, r.uuid)();
                        (0, e.default)(this, u), (this.id = i), (this.type = t);
                    }
                    return (
                        (0, t.default)(u, [
                            {
                                key: 'copy',
                                value: function() {
                                    return new u(this.type, this.id);
                                }
                            }
                        ]),
                        u
                    );
                })();
                exports.NodeGene = i;
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '../utils': 'sfxI'
            }
        ],
        TONL: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.Genome = void 0);
                var e = s(require('@babel/runtime/helpers/esm/slicedToArray')),
                    n = s(require('@babel/runtime/helpers/esm/typeof')),
                    t = s(require('@babel/runtime/helpers/esm/classCallCheck')),
                    o = s(require('@babel/runtime/helpers/esm/createClass')),
                    i = require('./ConnectionGene'),
                    r = require('./NodeGene'),
                    a = require('../utils'),
                    u = require('../types');
                function s(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var c = (function() {
                    function s() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : (0, a.uuid)();
                        (0, t.default)(this, s),
                            (this.connections = new Map()),
                            (this.nodes = new Map()),
                            (this.id = e);
                    }
                    return (
                        (0, o.default)(s, [
                            {
                                key: 'copy',
                                value: function() {
                                    var e = new this.constructor();
                                    return (
                                        this.connections.forEach(function(
                                            n,
                                            t
                                        ) {
                                            e.connections.set(t, n.copy());
                                        }),
                                        this.nodes.forEach(function(n, t) {
                                            e.nodes.set(t, n.copy());
                                        }),
                                        e
                                    );
                                }
                            },
                            {
                                key: 'getConnections',
                                value: function() {
                                    return Array.from(
                                        this.connections.values()
                                    ).filter(function(e) {
                                        return e.enabled;
                                    });
                                }
                            },
                            {
                                key: 'connectionExists',
                                value: function(e, n) {
                                    return Array.from(
                                        this.connections.values()
                                    ).some(function(t) {
                                        return (
                                            t.from.id === e.id &&
                                            t.to.id === n.id
                                        );
                                    });
                                }
                            },
                            {
                                key: 'addConnection',
                                value: function(e) {
                                    this.connections.set(e.innovation, e);
                                }
                            },
                            {
                                key: 'addNode',
                                value: function(e) {
                                    this.nodes.has(e.id) ||
                                        this.nodes.set(e.id, e);
                                }
                            },
                            {
                                key: 'mutateAddConnection',
                                value: function(t) {
                                    for (
                                        var o = this,
                                            r = t.addConnectionTries,
                                            s = Array.from(this.nodes.values()),
                                            c = Array.from(
                                                this.connections.values()
                                            ),
                                            d = function() {
                                                var n = (0, a.getRandomItems)(
                                                        s.filter(function(e) {
                                                            return !(0,
                                                            a.isOutput)(e);
                                                        }),
                                                        1
                                                    ),
                                                    r = (0, e.default)(n, 1)[0],
                                                    d = (0, a.getRandomItems)(
                                                        s.filter(function(e) {
                                                            return (
                                                                !(0,
                                                                a.isSensor)(
                                                                    e
                                                                ) &&
                                                                e !== r &&
                                                                (r.type !==
                                                                    u.NodeType
                                                                        .Output ||
                                                                    e.type !==
                                                                        u
                                                                            .NodeType
                                                                            .Output)
                                                            );
                                                        }),
                                                        1
                                                    ),
                                                    l = (0, e.default)(d, 1)[0],
                                                    f = new i.ConnectionGene(
                                                        t.innovation.next().value,
                                                        r,
                                                        l,
                                                        (0, a.rnd)(
                                                            t.mutationPower,
                                                            -t.mutationPower
                                                        )
                                                    );
                                                if (
                                                    !(
                                                        o.connectionExists(
                                                            r,
                                                            l
                                                        ) ||
                                                        (t.feedForwardOnly &&
                                                            (0, a.isRecurrent)(
                                                                f,
                                                                c
                                                            ))
                                                    )
                                                )
                                                    return (
                                                        o.addConnection(f),
                                                        { v: void 0 }
                                                    );
                                            };
                                        r--;

                                    ) {
                                        var l = d();
                                        if ('object' === (0, n.default)(l))
                                            return l.v;
                                    }
                                }
                            },
                            {
                                key: 'mutateAddNode',
                                value: function(n) {
                                    if (this.connections.size) {
                                        var t = (0, a.getRandomItems)(
                                                this.getConnections(),
                                                1
                                            ),
                                            o = (0, e.default)(t, 1)[0],
                                            s = new r.NodeGene(
                                                u.NodeType.Hidden
                                            );
                                        o.disable(),
                                            this.addConnection(
                                                new i.ConnectionGene(
                                                    n.innovation.next().value,
                                                    o.from,
                                                    s
                                                )
                                            ),
                                            this.addConnection(
                                                new i.ConnectionGene(
                                                    n.innovation.next().value,
                                                    s,
                                                    o.to,
                                                    o.weight
                                                )
                                            ),
                                            this.addNode(s);
                                    }
                                }
                            },
                            {
                                key: 'reEnableGene',
                                value: function() {
                                    var e = !0,
                                        n = !1,
                                        t = void 0;
                                    try {
                                        for (
                                            var o,
                                                i = this.connections
                                                    .values()
                                                    [Symbol.iterator]();
                                            !(e = (o = i.next()).done);
                                            e = !0
                                        ) {
                                            var r = o.value;
                                            if (!r.enabled)
                                                return void (r.enabled = !0);
                                        }
                                    } catch (a) {
                                        (n = !0), (t = a);
                                    } finally {
                                        try {
                                            e || null == i.return || i.return();
                                        } finally {
                                            if (n) throw t;
                                        }
                                    }
                                }
                            },
                            {
                                key: 'mutateToggleEnable',
                                value: function() {
                                    for (
                                        var n =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : 1,
                                            t = Array.from(
                                                this.connections.values()
                                            ),
                                            o = function() {
                                                var n = (0, a.getRandomItems)(
                                                        t,
                                                        1
                                                    ),
                                                    o = (0, e.default)(n, 1)[0];
                                                if (o.enabled) {
                                                    var i = t.some(function(e) {
                                                        return (
                                                            e.from !== o.from ||
                                                            !e.enabled ||
                                                            e.innovation ===
                                                                o.innovation
                                                        );
                                                    });
                                                    o.enabled = !i;
                                                } else o.enabled = !0;
                                            };
                                        n--;

                                    )
                                        o();
                                }
                            },
                            {
                                key: 'mutateConnectionsWeights',
                                value: function(e) {
                                    var n = e.mutationPower,
                                        t = e.genomeWeightPerturbated;
                                    this.connections.forEach(function(e) {
                                        var o = (0, a.rnd)(n, -n);
                                        e.enabled &&
                                            ((0, a.rnd)() < t
                                                ? (e.weight += o)
                                                : (e.weight = o));
                                    });
                                }
                            }
                        ]),
                        s
                    );
                })();
                exports.Genome = c;
            },
            {
                '@babel/runtime/helpers/esm/slicedToArray': 'U1JK',
                '@babel/runtime/helpers/esm/typeof': 'Izky',
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                './ConnectionGene': 'TTo7',
                './NodeGene': 'aUXD',
                '../utils': 'sfxI',
                '../types': 'y7IY'
            }
        ],
        'blD+': [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var e = t(require('@babel/runtime/helpers/esm/classCallCheck'));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var i = function t(i, s) {
                    var l =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 0,
                        r =
                            !(
                                arguments.length > 3 && void 0 !== arguments[3]
                            ) || arguments[3];
                    (0, e.default)(this, t),
                        (this.weight = 0),
                        (this.enabled = !0),
                        (this.from = i),
                        (this.to = s),
                        (this.weight = l),
                        (this.enabled = r);
                };
                exports.default = i;
            },
            { '@babel/runtime/helpers/esm/classCallCheck': 'uYrB' }
        ],
        NLXM: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var t = e(require('@babel/runtime/helpers/esm/classCallCheck'));
                function e(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var i = function e(i, s) {
                    (0, t.default)(this, e),
                        (this.value = 0),
                        (this.bias = 0),
                        (this.in = []),
                        (this.out = []),
                        (this.isActive = !1),
                        (this.activationCount = 0),
                        (this.sum = 0),
                        (this.type = i),
                        (this.id = s);
                };
                exports.default = i;
            },
            { '@babel/runtime/helpers/esm/classCallCheck': 'uYrB' }
        ],
        ctn7: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var e = s(
                        require('@babel/runtime/helpers/esm/toConsumableArray')
                    ),
                    t = s(require('@babel/runtime/helpers/esm/classCallCheck')),
                    i = s(require('@babel/runtime/helpers/esm/createClass')),
                    u = require('../types'),
                    r = require('../utils');
                function s(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var a = (function() {
                    function s(e) {
                        var i = this;
                        (0, t.default)(this, s),
                            (this.neurons = new Map()),
                            (this.activation = r.sigmoid);
                        var a = [],
                            n = [];
                        e.forEach(function(e) {
                            switch ((i.neurons.set(e.id, e), e.type)) {
                                case u.NodeType.Bias:
                                case u.NodeType.Input:
                                    a.push(e);
                                    break;
                                case u.NodeType.Output:
                                    n.push(e);
                            }
                        }),
                            (this.inputs = a),
                            (this.outputs = n);
                    }
                    return (
                        (0, i.default)(s, [
                            {
                                key: 'activate',
                                value: function(t) {
                                    var i = this;
                                    this.inputs.map(function(e, i) {
                                        e.value = t[i];
                                    });
                                    for (
                                        var u = new Set(),
                                            r = (0, e.default)(this.inputs),
                                            s = {};
                                        r.length;

                                    ) {
                                        var a = r.shift();
                                        if (!u.has(a)) {
                                            if (a.in.length) {
                                                var n = a.in.reduce(function(
                                                    e,
                                                    t
                                                ) {
                                                    return (
                                                        e +
                                                        t.from.value * t.weight
                                                    );
                                                },
                                                0);
                                                s[a.id] = (s[a.id] || 0) + n;
                                            }
                                            u.add(a),
                                                r.push.apply(
                                                    r,
                                                    (0, e.default)(
                                                        a.out.map(function(e) {
                                                            return e.to;
                                                        })
                                                    )
                                                );
                                        }
                                    }
                                    return (
                                        this.neurons.forEach(function(e) {
                                            e.id in s &&
                                                (e.value = i.activation(
                                                    s[e.id] + e.bias
                                                ));
                                        }),
                                        this.outputs
                                    );
                                }
                            }
                        ]),
                        s
                    );
                })();
                exports.default = a;
            },
            {
                '@babel/runtime/helpers/esm/toConsumableArray': 'lA6S',
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '../types': 'y7IY',
                '../utils': 'sfxI'
            }
        ],
        rDrA: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    Object.defineProperty(exports, 'Link', {
                        enumerable: !0,
                        get: function() {
                            return e.default;
                        }
                    }),
                    Object.defineProperty(exports, 'Neuron', {
                        enumerable: !0,
                        get: function() {
                            return r.default;
                        }
                    }),
                    Object.defineProperty(exports, 'Network', {
                        enumerable: !0,
                        get: function() {
                            return t.default;
                        }
                    });
                var e = u(require('./Link')),
                    r = u(require('./Neuron')),
                    t = u(require('./Network'));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
            },
            { './Link': 'blD+', './Neuron': 'NLXM', './Network': 'ctn7' }
        ],
        Hvxq: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.Organism = void 0);
                var e = a(require('@babel/runtime/helpers/esm/classCallCheck')),
                    t = a(require('@babel/runtime/helpers/esm/createClass')),
                    r = a(
                        require('@babel/runtime/helpers/esm/possibleConstructorReturn')
                    ),
                    n = a(require('@babel/runtime/helpers/esm/getPrototypeOf')),
                    i = a(require('@babel/runtime/helpers/esm/get')),
                    s = a(require('@babel/runtime/helpers/esm/inherits')),
                    o = require('./Genome'),
                    u = require('../network'),
                    l = require('../utils');
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var f = (function(o) {
                    function a() {
                        var t,
                            i =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0,
                            s =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 0;
                        return (
                            (0, e.default)(this, a),
                            ((t = (0, r.default)(
                                this,
                                (0, n.default)(a).call(this)
                            )).originalFitness = 0),
                            (t.kill = !1),
                            (t.generation = 0),
                            (t.expectedOffspring = 0),
                            (t.fitness = i),
                            (t.generation = s),
                            t
                        );
                    }
                    return (
                        (0, s.default)(a, o),
                        (0, t.default)(a, [
                            {
                                key: 'copy',
                                value: function() {
                                    var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : 0,
                                        t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : 0,
                                        r = (0, i.default)(
                                            (0, n.default)(a.prototype),
                                            'copy',
                                            this
                                        ).call(this);
                                    return (
                                        (r.fitness = e),
                                        (r.originalFitness = this.originalFitness),
                                        (r.generation = t),
                                        r
                                    );
                                }
                            },
                            {
                                key: 'getNetwork',
                                value: function() {
                                    var e = this.getConnections(),
                                        t = new Map();
                                    return (
                                        this.nodes.forEach(function(e) {
                                            t.set(
                                                e.id,
                                                new u.Neuron(e.type, e.id)
                                            );
                                        }),
                                        e
                                            .sort(
                                                (0, l.ascending)(function(e) {
                                                    return e.innovation;
                                                })
                                            )
                                            .forEach(function(e) {
                                                var r = t.get(e.from.id),
                                                    n = t.get(e.to.id),
                                                    i = new u.Link(
                                                        r,
                                                        n,
                                                        e.weight,
                                                        e.enabled
                                                    );
                                                r.out.push(i), n.in.push(i);
                                            }),
                                        new u.Network(Array.from(t.values()))
                                    );
                                }
                            }
                        ]),
                        a
                    );
                })(o.Genome);
                exports.Organism = f;
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/possibleConstructorReturn': 'pQSE',
                '@babel/runtime/helpers/esm/getPrototypeOf': 'i2He',
                '@babel/runtime/helpers/esm/get': 'Q3cA',
                '@babel/runtime/helpers/esm/inherits': 'NNOi',
                './Genome': 'TONL',
                '../network': 'rDrA',
                '../utils': 'sfxI'
            }
        ],
        FhXJ: [
            function(require, module, exports) {
                'use strict';
                function e(e, t, n, r, o, u, i) {
                    try {
                        var c = e[u](i),
                            s = c.value;
                    } catch (a) {
                        return void n(a);
                    }
                    c.done ? t(s) : Promise.resolve(s).then(r, o);
                }
                function t(t) {
                    return function() {
                        var n = this,
                            r = arguments;
                        return new Promise(function(o, u) {
                            var i = t.apply(n, r);
                            function c(t) {
                                e(i, o, u, c, s, 'next', t);
                            }
                            function s(t) {
                                e(i, o, u, c, s, 'throw', t);
                            }
                            c(void 0);
                        });
                    };
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = t);
            },
            {}
        ],
        '/Pqb': [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.Population = void 0);
                var e = o(require('@babel/runtime/regenerator')),
                    i = o(
                        require('@babel/runtime/helpers/esm/asyncToGenerator')
                    ),
                    r = o(
                        require('@babel/runtime/helpers/esm/toConsumableArray')
                    ),
                    t = o(require('@babel/runtime/helpers/esm/classCallCheck')),
                    n = o(require('@babel/runtime/helpers/esm/createClass')),
                    s = require('./Organism'),
                    a = require('../utils');
                function o(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var u = (function() {
                    function o(e) {
                        (0, t.default)(this, o),
                            (this.species = []),
                            (this.organisms = []),
                            (this.generation = 1),
                            (this.size = e.populationSize),
                            (this.config = e);
                    }
                    return (
                        (0, n.default)(
                            o,
                            [
                                {
                                    key: 'save',
                                    value: function() {
                                        console.error('not implemented');
                                    }
                                },
                                {
                                    key: 'getSuperChamp',
                                    value: function() {
                                        return this.organisms.length
                                            ? this.organisms.reduce(function(
                                                  e,
                                                  i
                                              ) {
                                                  return i.originalFitness >
                                                      e.originalFitness
                                                      ? i
                                                      : e;
                                              })
                                            : null;
                                    }
                                },
                                {
                                    key: 'addOrganism',
                                    value: function(e) {
                                        this.organisms.push(e);
                                    }
                                },
                                {
                                    key: 'removeOrganism',
                                    value: function(e) {
                                        var i = this.organisms.indexOf(e);
                                        ~i && this.organisms.splice(i, 1);
                                    }
                                },
                                {
                                    key: 'speciate',
                                    value: function() {
                                        var e = this;
                                        this.organisms.forEach(function(i) {
                                            return (0,
                                            a.speciateOrganism)(e.config, i, e.species);
                                        });
                                    }
                                },
                                {
                                    key: 'epoch',
                                    value: function() {
                                        var e = this;
                                        this.generation++;
                                        var i = this.species,
                                            t = this.config,
                                            n = this.generation,
                                            s = (0, r.default)(this.organisms);
                                        t.adjustCompatibilityThreshold &&
                                            i.length !==
                                                t.compatibilityModifierTarget &&
                                            ((t.compatibilityThreshold +=
                                                -t.compatibilityModifier *
                                                (i.length >
                                                t.compatibilityModifierTarget
                                                    ? -1
                                                    : 1)),
                                            (t.compatibilityThreshold = Math.max(
                                                t.compatibilityThreshold,
                                                t.compatibilityModifier
                                            )));
                                        var o = 0;
                                        i.forEach(function(e) {
                                            e.adjustFitness(t),
                                                (o += e.averageFitness);
                                        }),
                                            s.forEach(function(i, r) {
                                                i.kill
                                                    ? (e.removeOrganism(i),
                                                      i.species.removeOrganism(
                                                          i
                                                      ))
                                                    : (i.expectedOffspring = Math.round(
                                                          i.originalFitness / o
                                                      ));
                                            });
                                        var u = (0, r.default)(i).sort(
                                            (0, a.descending)(function(e) {
                                                return e.maxFitness;
                                            })
                                        );
                                        u.forEach(function(i) {
                                            (i.expectedOffspring = Math.round(
                                                (i.averageFitness / o) * e.size
                                            )),
                                                i.reproduce(t, n, e, u);
                                        }),
                                            (0, r.default)(
                                                this.organisms
                                            ).forEach(function(i) {
                                                e.removeOrganism(i),
                                                    i.species.removeOrganism(i);
                                            }),
                                            (this.species = i.filter(function(
                                                i
                                            ) {
                                                var t;
                                                return (
                                                    !!i.organisms.length &&
                                                    ((t =
                                                        e.organisms).push.apply(
                                                        t,
                                                        (0, r.default)(
                                                            i.organisms
                                                        )
                                                    ),
                                                    i.age++,
                                                    !0)
                                                );
                                            }));
                                    }
                                },
                                {
                                    key: 'run',
                                    value: function(r) {
                                        var t = this,
                                            n =
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : 1 / 0,
                                            s =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2]
                                                    ? arguments[2]
                                                    : 0;
                                        return new Promise(
                                            (function() {
                                                var a = (0, i.default)(
                                                    e.default.mark(function i(
                                                        a,
                                                        o
                                                    ) {
                                                        var u,
                                                            c,
                                                            l,
                                                            f,
                                                            h,
                                                            m,
                                                            p,
                                                            d;
                                                        return e.default.wrap(
                                                            function(e) {
                                                                for (;;)
                                                                    switch (
                                                                        (e.prev =
                                                                            e.next)
                                                                    ) {
                                                                        case 0:
                                                                            u =
                                                                                t.config;
                                                                        case 1:
                                                                            if (
                                                                                Number.isFinite(
                                                                                    n
                                                                                ) &&
                                                                                !n--
                                                                            ) {
                                                                                e.next = 38;
                                                                                break;
                                                                            }
                                                                            (c = !0),
                                                                                (l = !1),
                                                                                (f = void 0),
                                                                                (e.prev = 5),
                                                                                (h = t.organisms[
                                                                                    Symbol
                                                                                        .iterator
                                                                                ]());
                                                                        case 7:
                                                                            if (
                                                                                (c = (m = h.next())
                                                                                    .done)
                                                                            ) {
                                                                                e.next = 18;
                                                                                break;
                                                                            }
                                                                            return (
                                                                                (p =
                                                                                    m.value),
                                                                                (d = p.getNetwork()),
                                                                                (e.next = 12),
                                                                                r(
                                                                                    d,
                                                                                    p,
                                                                                    t
                                                                                )
                                                                            );
                                                                        case 12:
                                                                            if (
                                                                                ((p.fitness =
                                                                                    e.sent),
                                                                                !(
                                                                                    p.fitness >=
                                                                                    u.fitnessThreshold
                                                                                ))
                                                                            ) {
                                                                                e.next = 15;
                                                                                break;
                                                                            }
                                                                            return e.abrupt(
                                                                                'return',
                                                                                a(
                                                                                    p
                                                                                )
                                                                            );
                                                                        case 15:
                                                                            (c = !0),
                                                                                (e.next = 7);
                                                                            break;
                                                                        case 18:
                                                                            e.next = 24;
                                                                            break;
                                                                        case 20:
                                                                            (e.prev = 20),
                                                                                (e.t0 = e.catch(
                                                                                    5
                                                                                )),
                                                                                (l = !0),
                                                                                (f =
                                                                                    e.t0);
                                                                        case 24:
                                                                            (e.prev = 24),
                                                                                (e.prev = 25),
                                                                                c ||
                                                                                    null ==
                                                                                        h.return ||
                                                                                    h.return();
                                                                        case 27:
                                                                            if (
                                                                                ((e.prev = 27),
                                                                                !l)
                                                                            ) {
                                                                                e.next = 30;
                                                                                break;
                                                                            }
                                                                            throw f;
                                                                        case 30:
                                                                            return e.finish(
                                                                                27
                                                                            );
                                                                        case 31:
                                                                            return e.finish(
                                                                                24
                                                                            );
                                                                        case 32:
                                                                            if (
                                                                                (t.epoch(),
                                                                                !s)
                                                                            ) {
                                                                                e.next = 36;
                                                                                break;
                                                                            }
                                                                            return (
                                                                                (e.next = 36),
                                                                                new Promise(
                                                                                    function(
                                                                                        e
                                                                                    ) {
                                                                                        return setTimeout(
                                                                                            e,
                                                                                            s
                                                                                        );
                                                                                    }
                                                                                )
                                                                            );
                                                                        case 36:
                                                                            e.next = 1;
                                                                            break;
                                                                        case 38:
                                                                            o();
                                                                        case 39:
                                                                        case 'end':
                                                                            return e.stop();
                                                                    }
                                                            },
                                                            i,
                                                            this,
                                                            [
                                                                [5, 20, 24, 32],
                                                                [25, , 27, 31]
                                                            ]
                                                        );
                                                    })
                                                );
                                                return function(e, i) {
                                                    return a.apply(
                                                        this,
                                                        arguments
                                                    );
                                                };
                                            })()
                                        );
                                    }
                                }
                            ],
                            [
                                {
                                    key: 'from',
                                    value: function(e, i) {
                                        var r = i.nodes,
                                            t = i.connections,
                                            n = new o(e),
                                            a = new s.Organism();
                                        r.forEach(a.addNode.bind(a)),
                                            t.forEach(a.addConnection.bind(a));
                                        for (
                                            var u = e.populationSize, c = 0;
                                            c < u;
                                            c++
                                        ) {
                                            var l = a.copy();
                                            l.mutateConnectionsWeights(e),
                                                n.addOrganism(l);
                                        }
                                        return n.speciate(), n;
                                    }
                                }
                            ]
                        ),
                        o
                    );
                })();
                exports.Population = u;
            },
            {
                '@babel/runtime/regenerator': 'y2KZ',
                '@babel/runtime/helpers/esm/asyncToGenerator': 'FhXJ',
                '@babel/runtime/helpers/esm/toConsumableArray': 'lA6S',
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                './Organism': 'Hvxq',
                '../utils': 'sfxI'
            }
        ],
        J3o7: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.DefaultConfig = void 0);
                var e = require('./utils'),
                    i = {
                        dropoffAge: 15,
                        excessCoefficient: 1,
                        disjointCoefficient: 1,
                        weightDifferenceCoefficient: 1,
                        compatibilityThreshold: 3,
                        compatibilityModifier: 0.3,
                        compatibilityModifierTarget: 10,
                        adjustCompatibilityThreshold: !1,
                        mutationPower: 2.5,
                        reEnableGeneProbability: 0.05,
                        mutateConnectionWeightsProbability: 0.9,
                        genomeWeightPerturbated: 0.9,
                        ageSignificance: 1,
                        survivalThreshold: 0.2,
                        populationSize: 100,
                        mutateOnlyProbability: 0.2,
                        mutateAddNodeProbability: 0.03,
                        mutateAddConnectionProbability: 0.05,
                        mutateToggleEnableProbability: 0,
                        interspeciesMateRate: 0.001,
                        fitnessThreshold: 0.9,
                        addConnectionTries: 20,
                        innovation: (0, e.Innovation)(),
                        feedForwardOnly: !0
                    };
                exports.DefaultConfig = i;
            },
            { './utils': 'sfxI' }
        ],
        WdSo: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 });
                var e = require('./neat/ConnectionGene');
                Object.keys(e).forEach(function(r) {
                    'default' !== r &&
                        '__esModule' !== r &&
                        Object.defineProperty(exports, r, {
                            enumerable: !0,
                            get: function() {
                                return e[r];
                            }
                        });
                });
                var r = require('./neat/Organism');
                Object.keys(r).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return r[e];
                            }
                        });
                });
                var t = require('./neat/Genome');
                Object.keys(t).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return t[e];
                            }
                        });
                });
                var n = require('./neat/NodeGene');
                Object.keys(n).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return n[e];
                            }
                        });
                });
                var u = require('./neat/Population');
                Object.keys(u).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return u[e];
                            }
                        });
                });
                var o = require('./neat/Species');
                Object.keys(o).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return o[e];
                            }
                        });
                });
                var c = require('./network/Network');
                Object.keys(c).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return c[e];
                            }
                        });
                });
                var f = require('./network/Neuron');
                Object.keys(f).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return f[e];
                            }
                        });
                });
                var a = require('./config');
                Object.keys(a).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return a[e];
                            }
                        });
                });
                var i = require('./utils');
                Object.keys(i).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return i[e];
                            }
                        });
                });
                var s = require('./types');
                Object.keys(s).forEach(function(e) {
                    'default' !== e &&
                        '__esModule' !== e &&
                        Object.defineProperty(exports, e, {
                            enumerable: !0,
                            get: function() {
                                return s[e];
                            }
                        });
                });
            },
            {
                './neat/ConnectionGene': 'TTo7',
                './neat/Organism': 'Hvxq',
                './neat/Genome': 'TONL',
                './neat/NodeGene': 'aUXD',
                './neat/Population': '/Pqb',
                './neat/Species': 'VHnF',
                './network/Network': 'ctn7',
                './network/Neuron': 'NLXM',
                './config': 'J3o7',
                './utils': 'sfxI',
                './types': 'y7IY'
            }
        ],
        CPW7: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.ARCADE_MODE_URL = exports.FPS = exports.DEFAULT_WIDTH = exports.IS_MOBILE = exports.IS_IOS = exports.IS_HIDPI = exports.RUNNER_MAX_OBSTACLE_DUPLICATION = exports.RUNNER_BOTTOM_PAD = exports.CANVAS_HEIGHT = exports.CANVAS_WIDTH = void 0);
                var r = 600;
                exports.CANVAS_WIDTH = r;
                var e = 150;
                exports.CANVAS_HEIGHT = e;
                var o = 10;
                exports.RUNNER_BOTTOM_PAD = o;
                var t = 2;
                exports.RUNNER_MAX_OBSTACLE_DUPLICATION = t;
                var _ = window.devicePixelRatio > 1;
                exports.IS_HIDPI = _;
                var s = /iPad|iPhone|iPod/.test(window.navigator.platform);
                exports.IS_IOS = s;
                var A = /Android/.test(window.navigator.userAgent) || s;
                exports.IS_MOBILE = A;
                var I = 600;
                exports.DEFAULT_WIDTH = I;
                var p = 60;
                exports.FPS = p;
                var x = 'chrome://dino/';
                exports.ARCADE_MODE_URL = x;
            },
            {}
        ],
        '/DOn': [
            function(require, module, exports) {
                'use strict';
                function e(e, r, t) {
                    return (
                        r in e
                            ? Object.defineProperty(e, r, {
                                  value: t,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[r] = t),
                        e
                    );
                }
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = e);
            },
            {}
        ],
        '4B6C': [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = r);
                var e = t(require('./defineProperty'));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(t) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {},
                            o = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (o = o.concat(
                                Object.getOwnPropertySymbols(n).filter(function(
                                    e
                                ) {
                                    return Object.getOwnPropertyDescriptor(n, e)
                                        .enumerable;
                                })
                            )),
                            o.forEach(function(r) {
                                (0, e.default)(t, r, n[r]);
                            });
                    }
                    return t;
                }
            },
            { './defineProperty': '/DOn' }
        ],
        IZP3: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.getRandomNum = r),
                    (exports.vibrate = t),
                    (exports.createCanvas = n),
                    (exports.decodeBase64ToArrayBuffer = o),
                    (exports.getTimeStamp = a),
                    (exports.noop = void 0);
                var e = require('./constants');
                function r(e, r) {
                    return Math.floor(Math.random() * (r - e + 1)) + e;
                }
                function t(r) {
                    e.IS_MOBILE &&
                        window.navigator.vibrate &&
                        window.navigator.vibrate(r);
                }
                function n(e, r, t, n) {
                    var o = document.createElement('canvas');
                    return (
                        (o.className = n
                            ? ''.concat(Runner.classes.CANVAS, ' ').concat(n)
                            : Runner.classes.CANVAS),
                        (o.width = r),
                        (o.height = t),
                        e.appendChild(o),
                        o
                    );
                }
                function o(e) {
                    for (
                        var r = (e.length / 4) * 3,
                            t = atob(e),
                            n = new ArrayBuffer(r),
                            o = new Uint8Array(n),
                            a = 0;
                        a < r;
                        a++
                    )
                        o[a] = t.charCodeAt(a);
                    return o.buffer;
                }
                function a() {
                    return e.IS_IOS ? new Date().getTime() : performance.now();
                }
                var s = function() {};
                exports.noop = s;
            },
            { './constants': 'CPW7' }
        ],
        '+sjP': [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var i = a(require('@babel/runtime/helpers/esm/classCallCheck')),
                    t = a(require('@babel/runtime/helpers/esm/createClass')),
                    s = a(require('@babel/runtime/helpers/esm/defineProperty')),
                    e = require('./constants'),
                    h = a(require('./Runner'));
                function a(i) {
                    return i && i.__esModule ? i : { default: i };
                }
                var n = (function() {
                    function s(t, e, a) {
                        (0, i.default)(this, s),
                            (this.canvas = t),
                            (this.canvasCtx = t.getContext('2d')),
                            (this.image = h.default.imageSprite),
                            (this.spritePos = e),
                            (this.x = 0),
                            (this.y = 5),
                            (this.currentDistance = 0),
                            (this.maxScore = 0),
                            (this.highScore = 0),
                            (this.container = null),
                            (this.digits = []),
                            (this.achievement = !1),
                            (this.defaultString = ''),
                            (this.flashTimer = 0),
                            (this.flashIterations = 0),
                            (this.invertTrigger = !1),
                            (this.flashingRafId = null),
                            (this.highScoreBounds = {}),
                            (this.highScoreFlashing = !1),
                            (this.config = s.config),
                            (this.maxScoreUnits = this.config.MAX_DISTANCE_UNITS),
                            this.init(a);
                    }
                    return (
                        (0, t.default)(s, [
                            {
                                key: 'init',
                                value: function(i) {
                                    var t = '';
                                    this.calcXPos(i),
                                        (this.maxScore = this.maxScoreUnits);
                                    for (var s = 0; s < this.maxScoreUnits; s++)
                                        this.draw(s, 0),
                                            (this.defaultString += '0'),
                                            (t += '9');
                                    this.maxScore = parseInt(t);
                                }
                            },
                            {
                                key: 'calcXPos',
                                value: function(i) {
                                    this.x =
                                        i -
                                        s.dimensions.DEST_WIDTH *
                                            (this.maxScoreUnits + 1);
                                }
                            },
                            {
                                key: 'draw',
                                value: function(i, t, h) {
                                    var a = s.dimensions.WIDTH,
                                        n = s.dimensions.HEIGHT,
                                        r = s.dimensions.WIDTH * t,
                                        o = 0,
                                        c = i * s.dimensions.DEST_WIDTH,
                                        l = this.y,
                                        g = s.dimensions.WIDTH,
                                        u = s.dimensions.HEIGHT;
                                    if (
                                        (e.IS_HIDPI &&
                                            ((a *= 2), (n *= 2), (r *= 2)),
                                        (r += this.spritePos.x),
                                        (o += this.spritePos.y),
                                        this.canvasCtx.save(),
                                        h)
                                    ) {
                                        var f =
                                            this.x -
                                            2 *
                                                this.maxScoreUnits *
                                                s.dimensions.WIDTH;
                                        this.canvasCtx.translate(f, this.y);
                                    } else
                                        this.canvasCtx.translate(
                                            this.x,
                                            this.y
                                        );
                                    this.canvasCtx.drawImage(
                                        this.image,
                                        r,
                                        o,
                                        a,
                                        n,
                                        c,
                                        l,
                                        g,
                                        u
                                    ),
                                        this.canvasCtx.restore();
                                }
                            },
                            {
                                key: 'getActualDistance',
                                value: function(i) {
                                    return i
                                        ? Math.round(
                                              i * this.config.COEFFICIENT
                                          )
                                        : 0;
                                }
                            },
                            {
                                key: 'update',
                                value: function(i, t) {
                                    var s = !0,
                                        e = !1;
                                    if (this.achievement)
                                        this.flashIterations <=
                                        this.config.FLASH_ITERATIONS
                                            ? ((this.flashTimer += i),
                                              this.flashTimer <
                                              this.config.FLASH_DURATION
                                                  ? (s = !1)
                                                  : this.flashTimer >
                                                        2 *
                                                            this.config
                                                                .FLASH_DURATION &&
                                                    ((this.flashTimer = 0),
                                                    this.flashIterations++))
                                            : ((this.achievement = !1),
                                              (this.flashIterations = 0),
                                              (this.flashTimer = 0));
                                    else if (
                                        ((t = this.getActualDistance(t)) >
                                            this.maxScore &&
                                        this.maxScoreUnits ==
                                            this.config.MAX_DISTANCE_UNITS
                                            ? (this.maxScoreUnits++,
                                              (this.maxScore = parseInt(
                                                  ''.concat(this.maxScore, '9')
                                              )))
                                            : (this.distance = 0),
                                        t > 0)
                                    ) {
                                        t % this.config.ACHIEVEMENT_DISTANCE ==
                                            0 &&
                                            ((this.achievement = !0),
                                            (this.flashTimer = 0),
                                            (e = !0));
                                        var h = (this.defaultString + t).substr(
                                            -this.maxScoreUnits
                                        );
                                        this.digits = h.split('');
                                    } else
                                        this.digits = this.defaultString.split(
                                            ''
                                        );
                                    if (s)
                                        for (
                                            var a = this.digits.length - 1;
                                            a >= 0;
                                            a--
                                        )
                                            this.draw(
                                                a,
                                                parseInt(this.digits[a])
                                            );
                                    return this.drawHighScore(), e;
                                }
                            },
                            {
                                key: 'drawHighScore',
                                value: function() {
                                    this.canvasCtx.save(),
                                        (this.canvasCtx.globalAlpha = 0.8);
                                    for (
                                        var i = this.highScore.length - 1;
                                        i >= 0;
                                        i--
                                    )
                                        this.draw(
                                            i,
                                            parseInt(this.highScore[i], 10),
                                            !0
                                        );
                                    this.canvasCtx.restore();
                                }
                            },
                            {
                                key: 'setHighScore',
                                value: function(i) {
                                    i = this.getActualDistance(i);
                                    var t = (this.defaultString + i).substr(
                                        -this.maxScoreUnits
                                    );
                                    this.highScore = ['10', '11', ''].concat(
                                        t.split('')
                                    );
                                }
                            },
                            {
                                key: 'hasClickedOnHighScore',
                                value: function(i) {
                                    var t = i.touches,
                                        s = i.offsetX,
                                        e = i.offsetY,
                                        h = 0,
                                        a = 0;
                                    if (t) {
                                        var n = this.canvas.getBoundingClientRect();
                                        (h = t[0].clientX - n.left),
                                            (a = t[0].clientY - n.top);
                                    } else (h = s), (a = e);
                                    return (
                                        (this.highScoreBounds = this.getHighScoreBounds()),
                                        h >= this.highScoreBounds.x &&
                                            h <=
                                                this.highScoreBounds.x +
                                                    this.highScoreBounds
                                                        .width &&
                                            a >= this.highScoreBounds.y &&
                                            a <=
                                                this.highScoreBounds.y +
                                                    this.highScoreBounds.height
                                    );
                                }
                            },
                            {
                                key: 'getHighScoreBounds',
                                value: function() {
                                    return {
                                        x:
                                            this.x -
                                            2 *
                                                this.maxScoreUnits *
                                                s.dimensions.WIDTH -
                                            s.config
                                                .HIGH_SCORE_HIT_AREA_PADDING,
                                        y: this.y,
                                        width:
                                            s.dimensions.WIDTH *
                                                (this.highScore.length + 1) +
                                            s.config
                                                .HIGH_SCORE_HIT_AREA_PADDING,
                                        height:
                                            s.dimensions.HEIGHT +
                                            2 *
                                                s.config
                                                    .HIGH_SCORE_HIT_AREA_PADDING
                                    };
                                }
                            },
                            {
                                key: 'flashHighScore',
                                value: function() {
                                    var i = getTimeStamp(),
                                        t = i - (this.frameTimeStamp || i),
                                        s = !0;
                                    (this.frameTimeStamp = i),
                                        this.flashIterations >
                                        2 * this.config.FLASH_ITERATIONS
                                            ? this.cancelHighScoreFlashing()
                                            : ((this.flashTimer += t),
                                              this.flashTimer <
                                              this.config.FLASH_DURATION
                                                  ? (s = !1)
                                                  : this.flashTimer >
                                                        2 *
                                                            this.config
                                                                .FLASH_DURATION &&
                                                    ((this.flashTimer = 0),
                                                    this.flashIterations++),
                                              s
                                                  ? this.drawHighScore()
                                                  : this.clearHighScoreBounds(),
                                              (this.flashingRafId = requestAnimationFrame(
                                                  this.flashHighScore.bind(this)
                                              )));
                                }
                            },
                            {
                                key: 'clearHighScoreBounds',
                                value: function() {
                                    this.canvasCtx.save(),
                                        (this.canvasCtx.fillStyle = '#fff'),
                                        this.canvasCtx.rect(
                                            this.highScoreBounds.x,
                                            this.highScoreBounds.y,
                                            this.highScoreBounds.width,
                                            this.highScoreBounds.height
                                        ),
                                        this.canvasCtx.fill(),
                                        this.canvasCtx.restore();
                                }
                            },
                            {
                                key: 'startHighScoreFlashing',
                                value: function() {
                                    (this.highScoreFlashing = !0),
                                        this.flashHighScore();
                                }
                            },
                            {
                                key: 'isHighScoreFlashing',
                                value: function() {
                                    return this.highScoreFlashing;
                                }
                            },
                            {
                                key: 'cancelHighScoreFlashing',
                                value: function() {
                                    cancelAnimationFrame(this.flashingRafId),
                                        (this.flashIterations = 0),
                                        (this.flashTimer = 0),
                                        (this.highScoreFlashing = !1),
                                        this.clearHighScoreBounds(),
                                        this.drawHighScore();
                                }
                            },
                            {
                                key: 'resetHighScore',
                                value: function() {
                                    this.setHighScore(0),
                                        this.cancelHighScoreFlashing();
                                }
                            },
                            {
                                key: 'reset',
                                value: function() {
                                    this.update(0), (this.achievement = !1);
                                }
                            }
                        ]),
                        s
                    );
                })();
                (exports.default = n),
                    (0, s.default)(n, 'dimensions', {
                        WIDTH: 10,
                        HEIGHT: 13,
                        DEST_WIDTH: 11
                    }),
                    (0, s.default)(n, 'yPos', [
                        0,
                        13,
                        27,
                        40,
                        53,
                        67,
                        80,
                        93,
                        107,
                        120
                    ]),
                    (0, s.default)(n, 'config', {
                        MAX_DISTANCE_UNITS: 5,
                        ACHIEVEMENT_DISTANCE: 100,
                        COEFFICIENT: 0.025,
                        FLASH_DURATION: 250,
                        FLASH_ITERATIONS: 3,
                        HIGH_SCORE_HIT_AREA_PADDING: 4
                    });
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/defineProperty': '/DOn',
                './constants': 'CPW7',
                './Runner': 'BT73'
            }
        ],
        LZcr: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var e = n(require('@babel/runtime/helpers/esm/classCallCheck')),
                    t = n(require('@babel/runtime/helpers/esm/createClass')),
                    i = n(require('@babel/runtime/helpers/esm/defineProperty')),
                    s = require('./utils'),
                    r = require('./constants'),
                    a = n(require('./Runner'));
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var o = (function() {
                    function i(t, r, a) {
                        (0, e.default)(this, i),
                            (this.canvas = t),
                            (this.canvasCtx = this.canvas.getContext('2d')),
                            (this.spritePos = r),
                            (this.containerWidth = a),
                            (this.xPos = a),
                            (this.yPos = 0),
                            (this.remove = !1),
                            (this.cloudGap = (0, s.getRandomNum)(
                                i.config.MIN_CLOUD_GAP,
                                i.config.MAX_CLOUD_GAP
                            )),
                            this.init();
                    }
                    return (
                        (0, t.default)(i, [
                            {
                                key: 'init',
                                value: function() {
                                    (this.yPos = (0, s.getRandomNum)(
                                        i.config.MAX_SKY_LEVEL,
                                        i.config.MIN_SKY_LEVEL
                                    )),
                                        this.draw();
                                }
                            },
                            {
                                key: 'draw',
                                value: function() {
                                    this.canvasCtx.save();
                                    var e = i.config.WIDTH,
                                        t = i.config.HEIGHT,
                                        s = e,
                                        n = t;
                                    r.IS_HIDPI && ((e *= 2), (t *= 2)),
                                        this.canvasCtx.drawImage(
                                            a.default.imageSprite,
                                            this.spritePos.x,
                                            this.spritePos.y,
                                            e,
                                            t,
                                            this.xPos,
                                            this.yPos,
                                            s,
                                            n
                                        ),
                                        this.canvasCtx.restore();
                                }
                            },
                            {
                                key: 'update',
                                value: function(e) {
                                    this.remove ||
                                        ((this.xPos -= Math.ceil(e)),
                                        this.draw(),
                                        this.isVisible() || (this.remove = !0));
                                }
                            },
                            {
                                key: 'isVisible',
                                value: function() {
                                    return this.xPos + i.config.WIDTH > 0;
                                }
                            }
                        ]),
                        i
                    );
                })();
                (exports.default = o),
                    (0, i.default)(o, 'config', {
                        HEIGHT: 14,
                        MAX_CLOUD_GAP: 400,
                        MAX_SKY_LEVEL: 30,
                        MIN_CLOUD_GAP: 100,
                        MIN_SKY_LEVEL: 71,
                        WIDTH: 46
                    });
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/defineProperty': '/DOn',
                './utils': 'IZP3',
                './constants': 'CPW7',
                './Runner': 'BT73'
            }
        ],
        hYzB: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var s = n(require('@babel/runtime/helpers/esm/classCallCheck')),
                    i = n(require('@babel/runtime/helpers/esm/createClass')),
                    e = n(require('@babel/runtime/helpers/esm/defineProperty')),
                    t = require('./constants'),
                    o = n(require('./Runner'));
                function n(s) {
                    return s && s.__esModule ? s : { default: s };
                }
                var h = (function() {
                    function e(i, t) {
                        (0, s.default)(this, e),
                            (this.spritePos = t),
                            (this.canvas = i),
                            (this.canvasCtx = i.getContext('2d')),
                            (this.sourceDimensions = {}),
                            (this.dimensions = e.dimensions),
                            (this.sourceXPos = [
                                this.spritePos.x,
                                this.spritePos.x + this.dimensions.WIDTH
                            ]),
                            (this.xPos = []),
                            (this.yPos = 0),
                            (this.bumpThreshold = 0.5),
                            this.setSourceDimensions(),
                            this.draw();
                    }
                    return (
                        (0, i.default)(e, [
                            {
                                key: 'setSourceDimensions',
                                value: function() {
                                    for (var s in e.dimensions)
                                        t.IS_HIDPI
                                            ? 'YPOS' != s &&
                                              (this.sourceDimensions[s] =
                                                  2 * e.dimensions[s])
                                            : (this.sourceDimensions[s] =
                                                  e.dimensions[s]),
                                            (this.dimensions[s] =
                                                e.dimensions[s]);
                                    (this.xPos = [0, e.dimensions.WIDTH]),
                                        (this.yPos = e.dimensions.YPOS);
                                }
                            },
                            {
                                key: 'getRandomType',
                                value: function() {
                                    return Math.random() > this.bumpThreshold
                                        ? this.dimensions.WIDTH
                                        : 0;
                                }
                            },
                            {
                                key: 'draw',
                                value: function() {
                                    this.canvasCtx.drawImage(
                                        o.default.imageSprite,
                                        this.sourceXPos[0],
                                        this.spritePos.y,
                                        this.sourceDimensions.WIDTH,
                                        this.sourceDimensions.HEIGHT,
                                        this.xPos[0],
                                        this.yPos,
                                        this.dimensions.WIDTH,
                                        this.dimensions.HEIGHT
                                    ),
                                        this.canvasCtx.drawImage(
                                            o.default.imageSprite,
                                            this.sourceXPos[1],
                                            this.spritePos.y,
                                            this.sourceDimensions.WIDTH,
                                            this.sourceDimensions.HEIGHT,
                                            this.xPos[1],
                                            this.yPos,
                                            this.dimensions.WIDTH,
                                            this.dimensions.HEIGHT
                                        );
                                }
                            },
                            {
                                key: 'updateXPos',
                                value: function(s, i) {
                                    var e = s,
                                        t = 0 == s ? 1 : 0;
                                    (this.xPos[e] -= i),
                                        (this.xPos[t] =
                                            this.xPos[e] +
                                            this.dimensions.WIDTH),
                                        this.xPos[e] <=
                                            -this.dimensions.WIDTH &&
                                            ((this.xPos[e] +=
                                                2 * this.dimensions.WIDTH),
                                            (this.xPos[t] =
                                                this.xPos[e] -
                                                this.dimensions.WIDTH),
                                            (this.sourceXPos[e] =
                                                this.getRandomType() +
                                                this.spritePos.x));
                                }
                            },
                            {
                                key: 'update',
                                value: function(s, i) {
                                    var e = Math.floor(i * (t.FPS / 1e3) * s);
                                    this.xPos[0] <= 0
                                        ? this.updateXPos(0, e)
                                        : this.updateXPos(1, e),
                                        this.draw();
                                }
                            },
                            {
                                key: 'reset',
                                value: function() {
                                    (this.xPos[0] = 0),
                                        (this.xPos[1] = e.dimensions.WIDTH);
                                }
                            }
                        ]),
                        e
                    );
                })();
                (exports.default = h),
                    (0, e.default)(h, 'dimensions', {
                        WIDTH: 600,
                        HEIGHT: 12,
                        YPOS: 127
                    });
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/defineProperty': '/DOn',
                './constants': 'CPW7',
                './Runner': 'BT73'
            }
        ],
        ZKUt: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var e = t(require('@babel/runtime/helpers/esm/classCallCheck'));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var s = function t(s, i, r, u) {
                    (0, e.default)(this, t),
                        (this.x = s),
                        (this.y = i),
                        (this.width = r),
                        (this.height = u);
                };
                exports.default = s;
            },
            { '@babel/runtime/helpers/esm/classCallCheck': 'uYrB' }
        ],
        '2N3S': [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var e = r(require('@babel/runtime/helpers/esm/classCallCheck')),
                    i = r(require('@babel/runtime/helpers/esm/createClass')),
                    t = r(require('@babel/runtime/helpers/esm/defineProperty')),
                    s = require('./utils'),
                    h = r(require('./CollisionBox')),
                    o = require('./constants'),
                    n = r(require('./Runner'));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var a = (function() {
                    function t(i, h, o, n, r, a, l) {
                        (0, e.default)(this, t),
                            (this.canvasCtx = i),
                            (this.spritePos = o),
                            (this.typeConfig = h),
                            (this.gapCoefficient = r),
                            (this.size = (0, s.getRandomNum)(
                                1,
                                t.MAX_OBSTACLE_LENGTH
                            )),
                            (this.dimensions = n),
                            (this.remove = !1),
                            (this.xPos = n.WIDTH + (l || 0)),
                            (this.yPos = 0),
                            (this.width = 0),
                            (this.collisionBoxes = []),
                            (this.gap = 0),
                            (this.speedOffset = 0),
                            (this.currentFrame = 0),
                            (this.timer = 0),
                            this.init(a);
                    }
                    return (
                        (0, i.default)(t, [
                            {
                                key: 'init',
                                value: function(e) {
                                    if (
                                        (this.cloneCollisionBoxes(),
                                        this.size > 1 &&
                                            this.typeConfig.multipleSpeed > e &&
                                            (this.size = 1),
                                        (this.width =
                                            this.typeConfig.width * this.size),
                                        (this.height = this.typeConfig.height),
                                        Array.isArray(this.typeConfig.yPos))
                                    ) {
                                        var i = o.IS_MOBILE
                                            ? this.typeConfig.yPosMobile
                                            : this.typeConfig.yPos;
                                        this.yPos =
                                            i[
                                                (0, s.getRandomNum)(
                                                    0,
                                                    i.length - 1
                                                )
                                            ];
                                    } else this.yPos = this.typeConfig.yPos;
                                    this.draw(),
                                        this.size > 1 &&
                                            ((this.collisionBoxes[1].width =
                                                this.width -
                                                this.collisionBoxes[0].width -
                                                this.collisionBoxes[2].width),
                                            (this.collisionBoxes[2].x =
                                                this.width -
                                                this.collisionBoxes[2].width)),
                                        this.typeConfig.speedOffset &&
                                            (this.speedOffset =
                                                Math.random() > 0.5
                                                    ? this.typeConfig
                                                          .speedOffset
                                                    : -this.typeConfig
                                                          .speedOffset),
                                        (this.gap = this.getGap(
                                            this.gapCoefficient,
                                            e
                                        ));
                                }
                            },
                            {
                                key: 'draw',
                                value: function() {
                                    var e = this.typeConfig.width,
                                        i = this.typeConfig.height;
                                    o.IS_HIDPI && ((e *= 2), (i *= 2));
                                    var t =
                                        e *
                                            this.size *
                                            (0.5 * (this.size - 1)) +
                                        this.spritePos.x;
                                    this.currentFrame > 0 &&
                                        (t += e * this.currentFrame),
                                        this.canvasCtx.drawImage(
                                            n.default.imageSprite,
                                            t,
                                            this.spritePos.y,
                                            e * this.size,
                                            i,
                                            this.xPos,
                                            this.yPos,
                                            this.typeConfig.width * this.size,
                                            this.typeConfig.height
                                        );
                                }
                            },
                            {
                                key: 'update',
                                value: function(e, i) {
                                    this.remove ||
                                        (this.typeConfig.speedOffset &&
                                            (i += this.speedOffset),
                                        (this.xPos -= Math.floor(
                                            ((i * o.FPS) / 1e3) * e
                                        )),
                                        this.typeConfig.numFrames &&
                                            ((this.timer += e),
                                            this.timer >=
                                                this.typeConfig.frameRate &&
                                                ((this.currentFrame =
                                                    this.currentFrame ==
                                                    this.typeConfig.numFrames -
                                                        1
                                                        ? 0
                                                        : this.currentFrame +
                                                          1),
                                                (this.timer = 0))),
                                        this.draw(),
                                        this.isVisible() || (this.remove = !0));
                                }
                            },
                            {
                                key: 'getGap',
                                value: function(e, i) {
                                    var h = Math.round(
                                            this.width * i +
                                                this.typeConfig.minGap * e
                                        ),
                                        o = Math.round(
                                            h * t.MAX_GAP_COEFFICIENT
                                        );
                                    return (0, s.getRandomNum)(h, o);
                                }
                            },
                            {
                                key: 'isVisible',
                                value: function() {
                                    return this.xPos + this.width > 0;
                                }
                            },
                            {
                                key: 'cloneCollisionBoxes',
                                value: function() {
                                    for (
                                        var e = this.typeConfig.collisionBoxes,
                                            i = e.length - 1;
                                        i >= 0;
                                        i--
                                    )
                                        this.collisionBoxes[i] = new h.default(
                                            e[i].x,
                                            e[i].y,
                                            e[i].width,
                                            e[i].height
                                        );
                                }
                            }
                        ]),
                        t
                    );
                })();
                (exports.default = a),
                    (0, t.default)(a, 'types', [
                        {
                            type: 'CACTUS_SMALL',
                            width: 17,
                            height: 35,
                            yPos: 105,
                            multipleSpeed: 4,
                            minGap: 120,
                            minSpeed: 0,
                            collisionBoxes: [
                                new h.default(0, 7, 5, 27),
                                new h.default(4, 0, 6, 34),
                                new h.default(10, 4, 7, 14)
                            ]
                        },
                        {
                            type: 'CACTUS_LARGE',
                            width: 25,
                            height: 50,
                            yPos: 90,
                            multipleSpeed: 7,
                            minGap: 120,
                            minSpeed: 0,
                            collisionBoxes: [
                                new h.default(0, 12, 7, 38),
                                new h.default(8, 0, 7, 49),
                                new h.default(13, 10, 10, 38)
                            ]
                        },
                        {
                            type: 'PTERODACTYL',
                            width: 46,
                            height: 40,
                            yPos: [100, 75, 50],
                            yPosMobile: [100, 50],
                            multipleSpeed: 999,
                            minSpeed: 8.5,
                            minGap: 150,
                            collisionBoxes: [
                                new h.default(15, 15, 16, 5),
                                new h.default(18, 21, 24, 6),
                                new h.default(2, 14, 4, 3),
                                new h.default(6, 10, 4, 7),
                                new h.default(10, 8, 6, 9)
                            ],
                            numFrames: 2,
                            frameRate: 1e3 / 6,
                            speedOffset: 0.8
                        }
                    ]),
                    (0, t.default)(a, 'MAX_GAP_COEFFICIENT', 1.5),
                    (0, t.default)(a, 'MAX_OBSTACLE_LENGTH', 3);
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/defineProperty': '/DOn',
                './utils': 'IZP3',
                './CollisionBox': 'ZKUt',
                './constants': 'CPW7',
                './Runner': 'BT73'
            }
        ],
        '1fso': [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var t = h(require('@babel/runtime/helpers/esm/classCallCheck')),
                    s = h(require('@babel/runtime/helpers/esm/createClass')),
                    i = h(require('@babel/runtime/helpers/esm/defineProperty')),
                    e = require('./utils'),
                    a = require('./constants'),
                    r = h(require('./Runner'));
                function h(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var n = (function() {
                    function i(s, e, a) {
                        (0, t.default)(this, i),
                            (this.spritePos = e),
                            (this.canvas = s),
                            (this.canvasCtx = s.getContext('2d')),
                            (this.xPos = a - 50),
                            (this.yPos = 30),
                            (this.currentPhase = 0),
                            (this.opacity = 0),
                            (this.containerWidth = a),
                            (this.stars = []),
                            (this.drawStars = !1),
                            this.placeStars();
                    }
                    return (
                        (0, s.default)(i, [
                            {
                                key: 'update',
                                value: function(t, s) {
                                    if (
                                        (t &&
                                            0 == this.opacity &&
                                            (this.currentPhase++,
                                            this.currentPhase >=
                                                i.phases.length &&
                                                (this.currentPhase = 0)),
                                        t &&
                                        (this.opacity < 1 || 0 == this.opacity)
                                            ? (this.opacity +=
                                                  i.config.FADE_SPEED)
                                            : this.opacity > 0 &&
                                              (this.opacity -=
                                                  i.config.FADE_SPEED),
                                        this.opacity > 0)
                                    ) {
                                        if (
                                            ((this.xPos = this.updateXPos(
                                                this.xPos,
                                                i.config.MOON_SPEED
                                            )),
                                            this.drawStars)
                                        )
                                            for (
                                                var e = 0;
                                                e < i.config.NUM_STARS;
                                                e++
                                            )
                                                this.stars[
                                                    e
                                                ].x = this.updateXPos(
                                                    this.stars[e].x,
                                                    i.config.STAR_SPEED
                                                );
                                        this.draw();
                                    } else
                                        (this.opacity = 0), this.placeStars();
                                    this.drawStars = !0;
                                }
                            },
                            {
                                key: 'updateXPos',
                                value: function(t, s) {
                                    return (
                                        t < -i.config.WIDTH
                                            ? (t = this.containerWidth)
                                            : (t -= s),
                                        t
                                    );
                                }
                            },
                            {
                                key: 'draw',
                                value: function() {
                                    var t =
                                            3 == this.currentPhase
                                                ? 2 * i.config.WIDTH
                                                : i.config.WIDTH,
                                        s = i.config.HEIGHT,
                                        e =
                                            this.spritePos.x +
                                            i.phases[this.currentPhase],
                                        h = t,
                                        n = i.config.STAR_SIZE,
                                        o =
                                            r.default.spriteDefinition.LDPI.STAR
                                                .x;
                                    if (
                                        (a.IS_HIDPI &&
                                            ((t *= 2),
                                            (s *= 2),
                                            (e =
                                                this.spritePos.x +
                                                2 *
                                                    i.phases[
                                                        this.currentPhase
                                                    ]),
                                            (n *= 2),
                                            (o =
                                                r.default.spriteDefinition.HDPI
                                                    .STAR.x)),
                                        this.canvasCtx.save(),
                                        (this.canvasCtx.globalAlpha = this.opacity),
                                        this.drawStars)
                                    )
                                        for (
                                            var c = 0;
                                            c < i.config.NUM_STARS;
                                            c++
                                        )
                                            this.canvasCtx.drawImage(
                                                r.default.imageSprite,
                                                o,
                                                this.stars[c].sourceY,
                                                n,
                                                n,
                                                Math.round(this.stars[c].x),
                                                this.stars[c].y,
                                                i.config.STAR_SIZE,
                                                i.config.STAR_SIZE
                                            );
                                    this.canvasCtx.drawImage(
                                        r.default.imageSprite,
                                        e,
                                        this.spritePos.y,
                                        t,
                                        s,
                                        Math.round(this.xPos),
                                        this.yPos,
                                        h,
                                        i.config.HEIGHT
                                    ),
                                        (this.canvasCtx.globalAlpha = 1),
                                        this.canvasCtx.restore();
                                }
                            },
                            {
                                key: 'placeStars',
                                value: function() {
                                    for (
                                        var t = Math.round(
                                                this.containerWidth /
                                                    i.config.NUM_STARS
                                            ),
                                            s = 0;
                                        s < i.config.NUM_STARS;
                                        s++
                                    )
                                        (this.stars[s] = {}),
                                            (this.stars[s].x = (0,
                                            e.getRandomNum)(
                                                t * s,
                                                t * (s + 1)
                                            )),
                                            (this.stars[s].y = (0,
                                            e.getRandomNum)(
                                                0,
                                                i.config.STAR_MAX_Y
                                            )),
                                            a.IS_HIDPI
                                                ? (this.stars[s].sourceY =
                                                      r.default.spriteDefinition
                                                          .HDPI.STAR.y +
                                                      2 *
                                                          i.config.STAR_SIZE *
                                                          s)
                                                : (this.stars[s].sourceY =
                                                      r.default.spriteDefinition
                                                          .LDPI.STAR.y +
                                                      i.config.STAR_SIZE * s);
                                }
                            },
                            {
                                key: 'reset',
                                value: function() {
                                    (this.currentPhase = 0),
                                        (this.opacity = 0),
                                        this.update(!1);
                                }
                            }
                        ]),
                        i
                    );
                })();
                (exports.default = n),
                    (0, i.default)(n, 'config', {
                        FADE_SPEED: 0.035,
                        HEIGHT: 40,
                        MOON_SPEED: 0.25,
                        NUM_STARS: 2,
                        STAR_SIZE: 9,
                        STAR_SPEED: 0.3,
                        STAR_MAX_Y: 70,
                        WIDTH: 20
                    }),
                    (0, i.default)(n, 'phases', [140, 120, 100, 60, 40, 20, 0]);
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/defineProperty': '/DOn',
                './utils': 'IZP3',
                './constants': 'CPW7',
                './Runner': 'BT73'
            }
        ],
        '5h9H': [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var e = u(require('@babel/runtime/helpers/esm/classCallCheck')),
                    t = u(require('@babel/runtime/helpers/esm/createClass')),
                    s = u(require('@babel/runtime/helpers/esm/defineProperty')),
                    i = require('./utils'),
                    a = u(require('./Cloud')),
                    o = u(require('./HorizonLine')),
                    n = u(require('./Obstacle')),
                    l = u(require('./NightMode')),
                    h = u(require('./Runner'));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var r = (function() {
                    function s(t, i, a, o) {
                        (0, e.default)(this, s),
                            (this.canvas = t),
                            (this.canvasCtx = this.canvas.getContext('2d')),
                            (this.config = s.config),
                            (this.dimensions = a),
                            (this.gapCoefficient = o),
                            (this.obstacles = []),
                            (this.obstacleHistory = []),
                            (this.horizonOffsets = [0, 0]),
                            (this.cloudFrequency = this.config.CLOUD_FREQUENCY),
                            (this.spritePos = i),
                            (this.nightMode = null),
                            (this.clouds = []),
                            (this.cloudSpeed = this.config.BG_CLOUD_SPEED),
                            (this.horizonLine = null),
                            this.init();
                    }
                    return (
                        (0, t.default)(s, [
                            {
                                key: 'init',
                                value: function() {
                                    this.addCloud(),
                                        (this.horizonLine = new o.default(
                                            this.canvas,
                                            this.spritePos.HORIZON
                                        )),
                                        (this.nightMode = new l.default(
                                            this.canvas,
                                            this.spritePos.MOON,
                                            this.dimensions.WIDTH
                                        ));
                                }
                            },
                            {
                                key: 'update',
                                value: function(e, t, s, i) {
                                    (this.runningTime += e),
                                        this.horizonLine.update(e, t),
                                        this.nightMode.update(i),
                                        this.updateClouds(e, t),
                                        s && this.updateObstacles(e, t);
                                }
                            },
                            {
                                key: 'updateClouds',
                                value: function(e, t) {
                                    var s = (this.cloudSpeed / 1e3) * e * t,
                                        i = this.clouds.length;
                                    if (i) {
                                        for (var a = i - 1; a >= 0; a--)
                                            this.clouds[a].update(s);
                                        var o = this.clouds[i - 1];
                                        i < this.config.MAX_CLOUDS &&
                                            this.dimensions.WIDTH - o.xPos >
                                                o.cloudGap &&
                                            this.cloudFrequency >
                                                Math.random() &&
                                            this.addCloud(),
                                            (this.clouds = this.clouds.filter(
                                                function(e) {
                                                    return !e.remove;
                                                }
                                            ));
                                    } else this.addCloud();
                                }
                            },
                            {
                                key: 'updateObstacles',
                                value: function(e, t) {
                                    for (
                                        var s = this.obstacles.slice(0), i = 0;
                                        i < this.obstacles.length;
                                        i++
                                    ) {
                                        var a = this.obstacles[i];
                                        a.update(e, t), a.remove && s.shift();
                                    }
                                    if (
                                        ((this.obstacles = s),
                                        this.obstacles.length > 0)
                                    ) {
                                        var o = this.obstacles[
                                            this.obstacles.length - 1
                                        ];
                                        o &&
                                            !o.followingObstacleCreated &&
                                            o.isVisible() &&
                                            o.xPos + o.width + o.gap <
                                                this.dimensions.WIDTH &&
                                            (this.addNewObstacle(t),
                                            (o.followingObstacleCreated = !0));
                                    } else this.addNewObstacle(t);
                                }
                            },
                            {
                                key: 'removeFirstObstacle',
                                value: function() {
                                    this.obstacles.shift();
                                }
                            },
                            {
                                key: 'addNewObstacle',
                                value: function(e) {
                                    var t = (0, i.getRandomNum)(
                                            0,
                                            n.default.types.length - 1
                                        ),
                                        s = n.default.types[t];
                                    if (
                                        this.duplicateObstacleCheck(s.type) ||
                                        e < s.minSpeed
                                    )
                                        this.addNewObstacle(e);
                                    else {
                                        var a = this.spritePos[s.type];
                                        this.obstacles.push(
                                            new n.default(
                                                this.canvasCtx,
                                                s,
                                                a,
                                                this.dimensions,
                                                this.gapCoefficient,
                                                e,
                                                s.width
                                            )
                                        ),
                                            this.obstacleHistory.unshift(
                                                s.type
                                            ),
                                            this.obstacleHistory.length > 1 &&
                                                this.obstacleHistory.splice(
                                                    h.default.config
                                                        .MAX_OBSTACLE_DUPLICATION
                                                );
                                    }
                                }
                            },
                            {
                                key: 'duplicateObstacleCheck',
                                value: function(e) {
                                    for (
                                        var t = 0, s = 0;
                                        s < this.obstacleHistory.length;
                                        s++
                                    )
                                        t =
                                            this.obstacleHistory[s] == e
                                                ? t + 1
                                                : 0;
                                    return (
                                        t >=
                                        h.default.config
                                            .MAX_OBSTACLE_DUPLICATION
                                    );
                                }
                            },
                            {
                                key: 'reset',
                                value: function() {
                                    (this.obstacles = []),
                                        this.horizonLine.reset(),
                                        this.nightMode.reset();
                                }
                            },
                            {
                                key: 'resize',
                                value: function(e, t) {
                                    (this.canvas.width = e),
                                        (this.canvas.height = t);
                                }
                            },
                            {
                                key: 'addCloud',
                                value: function() {
                                    this.clouds.push(
                                        new a.default(
                                            this.canvas,
                                            this.spritePos.CLOUD,
                                            this.dimensions.WIDTH
                                        )
                                    );
                                }
                            }
                        ]),
                        s
                    );
                })();
                (exports.default = r),
                    (0, s.default)(r, 'config', {
                        BG_CLOUD_SPEED: 0.2,
                        BUMPY_THRESHOLD: 0.3,
                        CLOUD_FREQUENCY: 0.5,
                        HORIZON_HEIGHT: 16,
                        MAX_CLOUDS: 6
                    });
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/defineProperty': '/DOn',
                './utils': 'IZP3',
                './Cloud': 'LZcr',
                './HorizonLine': 'hYzB',
                './Obstacle': '2N3S',
                './NightMode': '1fso',
                './Runner': 'BT73'
            }
        ],
        vB6v: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.checkForCollision = o),
                    (exports.createAdjustedCollisionBox = m),
                    (exports.drawCollisionBoxes = l),
                    (exports.boxCompare = c),
                    (exports.default = void 0);
                var t = a(require('@babel/runtime/helpers/esm/classCallCheck')),
                    s = a(require('@babel/runtime/helpers/esm/createClass')),
                    i = a(require('@babel/runtime/helpers/esm/defineProperty')),
                    e = require('./constants'),
                    h = require('./utils'),
                    n = a(require('./CollisionBox')),
                    r = a(require('./Runner'));
                function a(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var u = (function() {
                    function i(s, h) {
                        (0, t.default)(this, i),
                            (this.canvas = s),
                            (this.canvasCtx = s.getContext('2d')),
                            (this.spritePos = h),
                            (this.xPos = 0),
                            (this.yPos = 0),
                            (this.groundYPos = 0),
                            (this.currentFrame = 0),
                            (this.currentAnimFrames = []),
                            (this.blinkDelay = 0),
                            (this.blinkCount = 0),
                            (this.animStartTime = 0),
                            (this.timer = 0),
                            (this.msPerFrame = 1e3 / e.FPS),
                            (this.config = i.config),
                            (this.status = i.status.WAITING),
                            (this.jumping = !1),
                            (this.ducking = !1),
                            (this.jumpVelocity = 0),
                            (this.reachedMinHeight = !1),
                            (this.speedDrop = !1),
                            (this.jumpCount = 0),
                            (this.jumpspotX = 0),
                            this.init();
                    }
                    return (
                        (0, s.default)(i, [
                            {
                                key: 'init',
                                value: function() {
                                    (this.groundYPos =
                                        r.default.defaultDimensions.HEIGHT -
                                        this.config.HEIGHT -
                                        r.default.config.BOTTOM_PAD),
                                        (this.yPos = this.groundYPos),
                                        (this.minJumpHeight =
                                            this.groundYPos -
                                            this.config.MIN_JUMP_HEIGHT),
                                        this.draw(0, 0),
                                        this.update(0, i.status.WAITING);
                                }
                            },
                            {
                                key: 'setJumpVelocity',
                                value: function(t) {
                                    (this.config.INIITAL_JUMP_VELOCITY = -t),
                                        (this.config.DROP_VELOCITY = -t / 2);
                                }
                            },
                            {
                                key: 'update',
                                value: function(t, s) {
                                    (this.timer += t),
                                        s &&
                                            ((this.status = s),
                                            (this.currentFrame = 0),
                                            (this.msPerFrame =
                                                i.animFrames[s].msPerFrame),
                                            (this.currentAnimFrames =
                                                i.animFrames[s].frames),
                                            s == i.status.WAITING &&
                                                ((this.animStartTime = (0,
                                                h.getTimeStamp)()),
                                                this.setBlinkDelay())),
                                        this.playingIntro &&
                                            this.xPos <
                                                this.config.START_X_POS &&
                                            (this.xPos += Math.round(
                                                (this.config.START_X_POS /
                                                    this.config
                                                        .INTRO_DURATION) *
                                                    t
                                            )),
                                        this.status == i.status.WAITING
                                            ? this.blink((0, h.getTimeStamp)())
                                            : this.draw(
                                                  this.currentAnimFrames[
                                                      this.currentFrame
                                                  ],
                                                  0
                                              ),
                                        this.timer >= this.msPerFrame &&
                                            ((this.currentFrame =
                                                this.currentFrame ==
                                                this.currentAnimFrames.length -
                                                    1
                                                    ? 0
                                                    : this.currentFrame + 1),
                                            (this.timer = 0)),
                                        this.speedDrop &&
                                            this.yPos == this.groundYPos &&
                                            ((this.speedDrop = !1),
                                            this.setDuck(!0));
                                }
                            },
                            {
                                key: 'draw',
                                value: function(t, s) {
                                    var h = t,
                                        n = s,
                                        a =
                                            this.ducking &&
                                            this.status != i.status.CRASHED
                                                ? this.config.WIDTH_DUCK
                                                : this.config.WIDTH,
                                        u = this.config.HEIGHT,
                                        o = u;
                                    e.IS_HIDPI &&
                                        ((h *= 2),
                                        (n *= 2),
                                        (a *= 2),
                                        (u *= 2)),
                                        (h += this.spritePos.x),
                                        (n += this.spritePos.y),
                                        this.ducking &&
                                        this.status != i.status.CRASHED
                                            ? this.canvasCtx.drawImage(
                                                  r.default.imageSprite,
                                                  h,
                                                  n,
                                                  a,
                                                  u,
                                                  this.xPos,
                                                  this.yPos,
                                                  this.config.WIDTH_DUCK,
                                                  o
                                              )
                                            : (this.ducking &&
                                                  this.status ==
                                                      i.status.CRASHED &&
                                                  this.xPos++,
                                              this.canvasCtx.drawImage(
                                                  r.default.imageSprite,
                                                  h,
                                                  n,
                                                  a,
                                                  u,
                                                  this.xPos,
                                                  this.yPos,
                                                  this.config.WIDTH,
                                                  o
                                              )),
                                        (this.canvasCtx.globalAlpha = 1);
                                }
                            },
                            {
                                key: 'setBlinkDelay',
                                value: function() {
                                    this.blinkDelay = Math.ceil(
                                        Math.random() * i.BLINK_TIMING
                                    );
                                }
                            },
                            {
                                key: 'blink',
                                value: function(t) {
                                    t - this.animStartTime >= this.blinkDelay &&
                                        (this.draw(
                                            this.currentAnimFrames[
                                                this.currentFrame
                                            ],
                                            0
                                        ),
                                        1 == this.currentFrame &&
                                            (this.setBlinkDelay(),
                                            (this.animStartTime = t),
                                            this.blinkCount++));
                                }
                            },
                            {
                                key: 'startJump',
                                value: function(t) {
                                    this.jumping ||
                                        (this.update(0, i.status.JUMPING),
                                        (this.jumpVelocity =
                                            this.config.INIITAL_JUMP_VELOCITY -
                                            t / 10),
                                        (this.jumping = !0),
                                        (this.reachedMinHeight = !1),
                                        (this.speedDrop = !1));
                                }
                            },
                            {
                                key: 'endJump',
                                value: function() {
                                    this.reachedMinHeight &&
                                        this.jumpVelocity <
                                            this.config.DROP_VELOCITY &&
                                        (this.jumpVelocity = this.config.DROP_VELOCITY);
                                }
                            },
                            {
                                key: 'updateJump',
                                value: function(t, s) {
                                    var e =
                                        t /
                                        i.animFrames[this.status].msPerFrame;
                                    this.speedDrop
                                        ? (this.yPos += Math.round(
                                              this.jumpVelocity *
                                                  this.config
                                                      .SPEED_DROP_COEFFICIENT *
                                                  e
                                          ))
                                        : (this.yPos += Math.round(
                                              this.jumpVelocity * e
                                          )),
                                        (this.jumpVelocity +=
                                            this.config.GRAVITY * e),
                                        (this.yPos < this.minJumpHeight ||
                                            this.speedDrop) &&
                                            (this.reachedMinHeight = !0),
                                        (this.yPos <
                                            this.config.MAX_JUMP_HEIGHT ||
                                            this.speedDrop) &&
                                            this.endJump(),
                                        this.yPos > this.groundYPos &&
                                            (this.reset(), this.jumpCount++);
                                }
                            },
                            {
                                key: 'setSpeedDrop',
                                value: function() {
                                    (this.speedDrop = !0),
                                        (this.jumpVelocity = 1);
                                }
                            },
                            {
                                key: 'setDuck',
                                value: function(t) {
                                    t && this.status != i.status.DUCKING
                                        ? (this.update(0, i.status.DUCKING),
                                          (this.ducking = !0))
                                        : this.status == i.status.DUCKING &&
                                          (this.update(0, i.status.RUNNING),
                                          (this.ducking = !1));
                                }
                            },
                            {
                                key: 'reset',
                                value: function() {
                                    (this.yPos = this.groundYPos),
                                        (this.jumpVelocity = 0),
                                        (this.jumping = !1),
                                        (this.ducking = !1),
                                        this.update(0, i.status.RUNNING),
                                        (this.midair = !1),
                                        (this.speedDrop = !1),
                                        (this.jumpCount = 0);
                                }
                            }
                        ]),
                        i
                    );
                })();
                function o(t, s, i) {
                    var e = s.xPos,
                        h = s.yPos,
                        a = s.config,
                        o = s.ducking,
                        I = (r.default.defaultDimensions.WIDTH,
                        t.xPos,
                        new n.default(e + 1, h + 1, a.WIDTH - 2, a.HEIGHT - 2)),
                        d = new n.default(
                            t.xPos + 1,
                            t.yPos + 1,
                            t.typeConfig.width * t.size - 2,
                            t.typeConfig.height - 2
                        );
                    if ((i && l(i, I, d), c(I, d)))
                        for (
                            var f = t.collisionBoxes,
                                p = o
                                    ? u.collisionBoxes.DUCKING
                                    : u.collisionBoxes.RUNNING,
                                P = 0;
                            P < p.length;
                            P++
                        )
                            for (var g = 0; g < f.length; g++) {
                                var T = m(p[P], I),
                                    D = m(f[g], d),
                                    y = c(T, D);
                                if ((i && l(i, T, D), y)) return [T, D];
                            }
                    return !1;
                }
                function m(t, s) {
                    return new n.default(
                        t.x + s.x,
                        t.y + s.y,
                        t.width,
                        t.height
                    );
                }
                function l(t, s, i) {
                    t.save(),
                        (t.strokeStyle = '#f00'),
                        t.strokeRect(s.x, s.y, s.width, s.height),
                        (t.strokeStyle = '#0f0'),
                        t.strokeRect(i.x, i.y, i.width, i.height),
                        t.restore();
                }
                function c(t, s) {
                    var i = !1;
                    return (
                        t.x < s.x + s.width &&
                            t.x + t.width > s.x &&
                            t.y < s.y + s.height &&
                            t.height + t.y > s.y &&
                            (i = !0),
                        i
                    );
                }
                (exports.default = u),
                    (0, i.default)(u, 'config', {
                        DROP_VELOCITY: -5,
                        GRAVITY: 0.6,
                        HEIGHT: 47,
                        HEIGHT_DUCK: 25,
                        INIITAL_JUMP_VELOCITY: -10,
                        INTRO_DURATION: 1500,
                        MAX_JUMP_HEIGHT: 50,
                        MIN_JUMP_HEIGHT: 30,
                        SPEED_DROP_COEFFICIENT: 3,
                        SPRITE_WIDTH: 262,
                        START_X_POS: 50,
                        WIDTH: 44,
                        WIDTH_DUCK: 59
                    }),
                    (0, i.default)(u, 'collisionBoxes', {
                        DUCKING: [new n.default(1, 18, 55, 25)],
                        RUNNING: [
                            new n.default(22, 0, 17, 16),
                            new n.default(1, 18, 30, 9),
                            new n.default(10, 35, 14, 8),
                            new n.default(1, 24, 29, 5),
                            new n.default(5, 30, 21, 4),
                            new n.default(9, 34, 15, 4)
                        ]
                    }),
                    (0, i.default)(u, 'status', {
                        CRASHED: 'CRASHED',
                        DUCKING: 'DUCKING',
                        JUMPING: 'JUMPING',
                        RUNNING: 'RUNNING',
                        WAITING: 'WAITING'
                    }),
                    (0, i.default)(u, 'BLINK_TIMING', 7e3),
                    (0, i.default)(u, 'animFrames', {
                        WAITING: { frames: [44, 0], msPerFrame: 1e3 / 3 },
                        RUNNING: { frames: [88, 132], msPerFrame: 1e3 / 12 },
                        CRASHED: { frames: [220], msPerFrame: 1e3 / 60 },
                        JUMPING: { frames: [0], msPerFrame: 1e3 / 60 },
                        DUCKING: { frames: [264, 323], msPerFrame: 125 }
                    });
            },
            {
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/defineProperty': '/DOn',
                './constants': 'CPW7',
                './utils': 'IZP3',
                './CollisionBox': 'ZKUt',
                './Runner': 'BT73'
            }
        ],
        JXbE: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var e = c(require('@babel/runtime/regenerator')),
                    t = c(require('@babel/runtime/helpers/esm/slicedToArray')),
                    r = c(
                        require('@babel/runtime/helpers/esm/asyncToGenerator')
                    ),
                    n = c(require('@babel/runtime/helpers/esm/classCallCheck')),
                    s = c(require('@babel/runtime/helpers/esm/createClass')),
                    i = c(require('@babel/runtime/helpers/esm/defineProperty')),
                    u = c(require('./Runner')),
                    a = o(require('./Trex'));
                function o(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var n =
                                    Object.defineProperty &&
                                    Object.getOwnPropertyDescriptor
                                        ? Object.getOwnPropertyDescriptor(e, r)
                                        : {};
                                n.get || n.set
                                    ? Object.defineProperty(t, r, n)
                                    : (t[r] = e[r]);
                            }
                    return (t.default = e), t;
                }
                function c(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var l = (function() {
                    function o(e, t, r) {
                        (0, n.default)(this, o),
                            (0, i.default)(this, 'onReset', f),
                            (0, i.default)(this, 'onRunning', f),
                            (0, i.default)(this, 'onCrash', f),
                            (this.canvas = t),
                            (this.spriteDef = r),
                            this.spawn(e);
                    }
                    return (
                        (0, s.default)(o, [
                            {
                                key: 'spawn',
                                value: function(e) {
                                    this.tRexes = [];
                                    for (var t = 0; t < e; t += 1) {
                                        var r = new a.default(
                                            this.canvas,
                                            this.spriteDef
                                        );
                                        (r.id = t), this.tRexes.push(r);
                                    }
                                }
                            },
                            {
                                key: 'update',
                                value: function(e, t) {
                                    this.tRexes.forEach(function(r) {
                                        r.crashed || r.update(e, t);
                                    });
                                }
                            },
                            {
                                key: 'draw',
                                value: function(e, t) {
                                    this.tRexes.forEach(function(r) {
                                        r.crashed || r.draw(e, t);
                                    });
                                }
                            },
                            {
                                key: 'updateJump',
                                value: function(e, t) {
                                    this.tRexes.forEach(function(r) {
                                        r.jumping && r.updateJump(e, t);
                                    });
                                }
                            },
                            {
                                key: 'reset',
                                value: function() {
                                    var e = this;
                                    this.tRexes.forEach(function(t) {
                                        t.reset(), e.onReset({ tRex: t });
                                    });
                                }
                            },
                            {
                                key: 'lives',
                                value: function() {
                                    return this.tRexes.reduce(function(e, t) {
                                        return t.crashed ? e : e + 1;
                                    }, 0);
                                }
                            },
                            {
                                key: 'checkForCollision',
                                value: function(n) {
                                    var s = this,
                                        i = 0;
                                    return (
                                        this.tRexes.forEach(
                                            (function() {
                                                var o = (0, r.default)(
                                                    e.default.mark(function r(
                                                        o
                                                    ) {
                                                        var c, l, f, h, d, p;
                                                        return e.default.wrap(
                                                            function(e) {
                                                                for (;;)
                                                                    switch (
                                                                        (e.prev =
                                                                            e.next)
                                                                    ) {
                                                                        case 0:
                                                                            if (
                                                                                ((c = {
                                                                                    distance:
                                                                                        n.xPos -
                                                                                        o.xPos,
                                                                                    obstacleX:
                                                                                        n.xPos,
                                                                                    obstacleY:
                                                                                        n.yPos,
                                                                                    obstacleWidth:
                                                                                        n.width,
                                                                                    obstacleHeight:
                                                                                        n.height,
                                                                                    speed:
                                                                                        u
                                                                                            .default
                                                                                            .instance_
                                                                                            .currentSpeed
                                                                                }),
                                                                                o.crashed)
                                                                            ) {
                                                                                e.next = 18;
                                                                                break;
                                                                            }
                                                                            if (
                                                                                !(l = (0,
                                                                                a.checkForCollision)(
                                                                                    n,
                                                                                    o
                                                                                ))
                                                                            ) {
                                                                                e.next = 9;
                                                                                break;
                                                                            }
                                                                            (i += 1),
                                                                                (o.crashed = !0),
                                                                                s.onCrash(
                                                                                    {
                                                                                        tRex: o,
                                                                                        state: c,
                                                                                        collision: l
                                                                                    }
                                                                                ),
                                                                                (e.next = 16);
                                                                            break;
                                                                        case 9:
                                                                            return (
                                                                                (e.next = 11),
                                                                                s.onRunning(
                                                                                    {
                                                                                        tRex: o,
                                                                                        state: c
                                                                                    }
                                                                                )
                                                                            );
                                                                        case 11:
                                                                            (f =
                                                                                e.sent),
                                                                                (h = (0,
                                                                                t.default)(
                                                                                    f,
                                                                                    2
                                                                                )),
                                                                                (d =
                                                                                    h[0]),
                                                                                (p =
                                                                                    h[1]),
                                                                                d
                                                                                    ? o.jumping ||
                                                                                      o.ducking ||
                                                                                      (o.ducking &&
                                                                                          o.setDuck(
                                                                                              !1
                                                                                          ),
                                                                                      o.startJump(
                                                                                          c.speed
                                                                                      ))
                                                                                    : p
                                                                                    ? o.jumping
                                                                                        ? o.setSpeedDrop()
                                                                                        : o.jumping ||
                                                                                          o.ducking ||
                                                                                          o.setDuck(
                                                                                              !0
                                                                                          )
                                                                                    : (o.ducking &&
                                                                                          ((o.speedDrop = !1),
                                                                                          o.setDuck(
                                                                                              !1
                                                                                          )),
                                                                                      o.jumping &&
                                                                                          o.endJump());
                                                                        case 16:
                                                                            e.next = 19;
                                                                            break;
                                                                        case 18:
                                                                            i += 1;
                                                                        case 19:
                                                                        case 'end':
                                                                            return e.stop();
                                                                    }
                                                            },
                                                            r,
                                                            this
                                                        );
                                                    })
                                                );
                                                return function(e) {
                                                    return o.apply(
                                                        this,
                                                        arguments
                                                    );
                                                };
                                            })()
                                        ),
                                        i === this.tRexes.length
                                    );
                                }
                            },
                            {
                                key: 'playingIntro',
                                set: function(e) {
                                    this.tRexes.forEach(function(t) {
                                        t.playingIntro = e;
                                    });
                                }
                            }
                        ]),
                        o
                    );
                })();
                function f() {}
                exports.default = l;
            },
            {
                '@babel/runtime/regenerator': 'y2KZ',
                '@babel/runtime/helpers/esm/slicedToArray': 'U1JK',
                '@babel/runtime/helpers/esm/asyncToGenerator': 'FhXJ',
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/defineProperty': '/DOn',
                './Runner': 'BT73',
                './Trex': 'vB6v'
            }
        ],
        BT73: [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.default = void 0);
                var e = d(require('@babel/runtime/helpers/esm/objectSpread')),
                    t = d(require('@babel/runtime/helpers/esm/classCallCheck')),
                    i = d(require('@babel/runtime/helpers/esm/createClass')),
                    s = d(require('@babel/runtime/helpers/esm/defineProperty')),
                    n = require('./constants'),
                    a = require('./utils'),
                    r = d(require('./DistanceMeter')),
                    h = d(require('./Horizon')),
                    o = d(require('./Trex')),
                    c = d(require('./TrexGroup'));
                function d(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function l(e, t, i, s) {
                    var n = document.createElement('canvas');
                    return (
                        (n.className = s
                            ? ''.concat(u.classes.CANVAS, ' ').concat(s)
                            : u.classes.CANVAS),
                        (n.width = t),
                        (n.height = i),
                        e.appendChild(n),
                        n
                    );
                }
                var u = (function() {
                    function s(i, a) {
                        if (((0, t.default)(this, s), s.instance_))
                            return s.instance_;
                        (s.instance_ = this),
                            (this.outerContainerEl = document.querySelector(i)),
                            (this.generationEl = document.querySelector(
                                '.generation'
                            )),
                            (this.generation = 0),
                            (this.containerEl = null),
                            (this.snackbarEl = null),
                            (this.touchController = null),
                            (this.config = (0, e.default)({}, s.config, a)),
                            (this.dimensions = s.defaultDimensions),
                            (this.canvas = null),
                            (this.canvasCtx = null),
                            (this.tRex = null),
                            (this.distanceMeter = null),
                            (this.distanceRan = 0),
                            (this.highestScore = 0),
                            (this.syncHighestScore = !1),
                            (this.time = 0),
                            (this.runningTime = 0),
                            (this.msPerFrame = 1e3 / n.FPS),
                            (this.currentSpeed = this.config.SPEED),
                            (this.obstacles = []),
                            (this.activated = !1),
                            (this.playing = !1),
                            (this.crashed = !1),
                            (this.paused = !1),
                            (this.inverted = !1),
                            (this.invertTimer = 0),
                            (this.resizeTimerId_ = null),
                            (this.playCount = 0),
                            (this.generation = 0),
                            (this.audioBuffer = null),
                            (this.soundFx = {}),
                            (this.audioContext = null),
                            (this.images = {}),
                            (this.imagesLoaded = 0),
                            this.loadImages(),
                            (window.initializeEasterEggHighScore = this.initializeHighScore.bind(
                                this
                            ));
                    }
                    return (
                        (0, i.default)(s, [
                            {
                                key: 'setupDisabledRunner',
                                value: function() {
                                    var e = this;
                                    (this.containerEl = document.createElement(
                                        'div'
                                    )),
                                        (this.containerEl.className =
                                            s.classes.SNACKBAR),
                                        (this.containerEl.textContent = loadTimeData.getValue(
                                            'disabledEasterEgg'
                                        )),
                                        this.outerContainerEl.appendChild(
                                            this.containerEl
                                        ),
                                        document.addEventListener(
                                            s.events.KEYDOWN,
                                            function(t) {
                                                var i = t.keyCode;
                                                s.keycodes.JUMP[i] &&
                                                    (e.containerEl.classList.add(
                                                        s.classes.SNACKBAR_SHOW
                                                    ),
                                                    document
                                                        .querySelector('.icon')
                                                        .classList.add(
                                                            'icon-disabled'
                                                        ));
                                            }
                                        );
                                }
                            },
                            {
                                key: 'updateConfigSetting',
                                value: function(e, t) {
                                    if (e in this.config && null != t)
                                        switch (((this.config[e] = t), e)) {
                                            case 'GRAVITY':
                                            case 'MIN_JUMP_HEIGHT':
                                            case 'SPEED_DROP_COEFFICIENT':
                                                this.tRex.config[e] = t;
                                                break;
                                            case 'INITIAL_JUMP_VELOCITY':
                                                this.tRex.setJumpVelocity(t);
                                                break;
                                            case 'SPEED':
                                                this.setSpeed(t);
                                        }
                                }
                            },
                            {
                                key: 'loadImages',
                                value: function() {
                                    n.IS_HIDPI
                                        ? ((s.imageSprite = document.getElementById(
                                              'offline-resources-2x'
                                          )),
                                          (this.spriteDef =
                                              s.spriteDefinition.HDPI))
                                        : ((s.imageSprite = document.getElementById(
                                              'offline-resources-1x'
                                          )),
                                          (this.spriteDef =
                                              s.spriteDefinition.LDPI)),
                                        s.imageSprite.complete
                                            ? this.init()
                                            : s.imageSprite.addEventListener(
                                                  s.events.LOAD,
                                                  this.init.bind(this)
                                              );
                                }
                            },
                            {
                                key: 'loadSounds',
                                value: function() {
                                    if (!n.IS_IOS) {
                                        this.audioContext = new AudioContext();
                                        var e = document.getElementById(
                                            this.config.RESOURCE_TEMPLATE_ID
                                        ).content;
                                        for (var t in s.sounds) {
                                            var i = e.getElementById(
                                                s.sounds[t]
                                            ).src;
                                            i = i.substr(i.indexOf(',') + 1);
                                            var r = (0,
                                            a.decodeBase64ToArrayBuffer)(i);
                                            this.audioContext.decodeAudioData(
                                                r,
                                                function(e, t) {
                                                    this.soundFx[e] = t;
                                                }.bind(this, t)
                                            );
                                        }
                                    }
                                }
                            },
                            {
                                key: 'setSpeed',
                                value: function(e) {
                                    var t = e || this.currentSpeed;
                                    if (
                                        this.dimensions.WIDTH < n.DEFAULT_WIDTH
                                    ) {
                                        var i =
                                            ((t * this.dimensions.WIDTH) /
                                                n.DEFAULT_WIDTH) *
                                            this.config
                                                .MOBILE_SPEED_COEFFICIENT;
                                        this.currentSpeed = i > t ? t : i;
                                    } else e && (this.currentSpeed = e);
                                }
                            },
                            {
                                key: 'init',
                                value: function() {
                                    (document.querySelector(
                                        '.'.concat(s.classes.ICON)
                                    ).style.visibility = 'hidden'),
                                        (this.containerEl = document.createElement(
                                            'div'
                                        )),
                                        (this.containerEl.className =
                                            s.classes.CONTAINER),
                                        this.adjustDimensions(),
                                        this.setSpeed(),
                                        (this.canvas = l(
                                            this.containerEl,
                                            this.dimensions.WIDTH,
                                            this.dimensions.HEIGHT,
                                            s.classes.PLAYER
                                        )),
                                        (this.canvasCtx = this.canvas.getContext(
                                            '2d'
                                        )),
                                        (this.canvasCtx.fillStyle = '#f7f7f7'),
                                        this.canvasCtx.fill(),
                                        s.updateCanvasScaling(this.canvas),
                                        (this.horizon = new h.default(
                                            this.canvas,
                                            this.spriteDef,
                                            this.dimensions,
                                            this.config.GAP_COEFFICIENT
                                        )),
                                        (this.distanceMeter = new r.default(
                                            this.canvas,
                                            this.spriteDef.TEXT_SPRITE,
                                            this.dimensions.WIDTH
                                        )),
                                        (this.tRexGroup = new c.default(
                                            this.config.T_REX_COUNT,
                                            this.canvas,
                                            this.spriteDef.TREX
                                        )),
                                        (this.tRexGroup.onRunning = this.config.onRunning),
                                        (this.tRexGroup.onCrash = this.config.onCrash),
                                        (this.tRex = this.tRexGroup.tRexes[0]),
                                        this.outerContainerEl.appendChild(
                                            this.containerEl
                                        ),
                                        this.startListening(),
                                        this.update(),
                                        window.addEventListener(
                                            s.events.RESIZE,
                                            this.debounceResize.bind(this)
                                        ),
                                        this.config.onReset({
                                            tRexes: this.tRexGroup
                                        }),
                                        (this.tRex = this.tRexGroup.tRexes[0]);
                                }
                            },
                            {
                                key: 'createTouchController',
                                value: function() {
                                    (this.touchController = document.createElement(
                                        'div'
                                    )),
                                        (this.touchController.className =
                                            s.classes.TOUCH_CONTROLLER),
                                        this.touchController.addEventListener(
                                            s.events.TOUCHSTART,
                                            this
                                        ),
                                        this.touchController.addEventListener(
                                            s.events.TOUCHEND,
                                            this
                                        ),
                                        this.outerContainerEl.appendChild(
                                            this.touchController
                                        );
                                }
                            },
                            {
                                key: 'debounceResize',
                                value: function() {
                                    this.resizeTimerId_ ||
                                        (this.resizeTimerId_ = setInterval(
                                            this.adjustDimensions.bind(this),
                                            250
                                        ));
                                }
                            },
                            {
                                key: 'adjustDimensions',
                                value: function() {
                                    clearInterval(this.resizeTimerId_),
                                        (this.resizeTimerId_ = null);
                                    var e = window.getComputedStyle(
                                            this.outerContainerEl
                                        ),
                                        t = Number(
                                            e.paddingLeft.substr(
                                                0,
                                                e.paddingLeft.length - 2
                                            )
                                        );
                                    (this.dimensions.WIDTH =
                                        this.outerContainerEl.offsetWidth -
                                        2 * t),
                                        this.isArcadeMode() &&
                                            ((this.dimensions.WIDTH = Math.min(
                                                n.DEFAULT_WIDTH,
                                                this.dimensions.WIDTH
                                            )),
                                            this.activated &&
                                                this.setArcadeModeContainerScale()),
                                        this.canvas &&
                                            ((this.canvas.width = this.dimensions.WIDTH),
                                            (this.canvas.height = this.dimensions.HEIGHT),
                                            s.updateCanvasScaling(this.canvas),
                                            this.distanceMeter.calcXPos(
                                                this.dimensions.WIDTH
                                            ),
                                            this.clearCanvas(),
                                            this.horizon.update(0, 0, !0),
                                            this.tRexGroup.update(0),
                                            this.playing ||
                                            this.crashed ||
                                            this.paused
                                                ? ((this.containerEl.style.width = ''.concat(
                                                      this.dimensions.WIDTH,
                                                      'px'
                                                  )),
                                                  (this.containerEl.style.height = ''.concat(
                                                      this.dimensions.HEIGHT,
                                                      'px'
                                                  )),
                                                  this.distanceMeter.update(
                                                      0,
                                                      Math.ceil(
                                                          this.distanceRan
                                                      )
                                                  ),
                                                  this.stop())
                                                : this.tRexGroup.draw(0, 0),
                                            this.crashed &&
                                                this.gameOverPanel &&
                                                (this.gameOverPanel.updateDimensions(
                                                    this.dimensions.WIDTH
                                                ),
                                                this.gameOverPanel.draw()));
                                }
                            },
                            {
                                key: 'playIntro',
                                value: function() {
                                    if (this.activated || this.crashed)
                                        this.crashed && this.restart();
                                    else {
                                        (this.playingIntro = !0),
                                            (this.tRexGroup.playingIntro = !0);
                                        var e = '@-webkit-keyframes intro { from { width:'
                                            .concat(
                                                o.default.config.WIDTH,
                                                'px }to { width: '
                                            )
                                            .concat(
                                                this.dimensions.WIDTH,
                                                'px }}'
                                            );
                                        document.styleSheets[0].insertRule(
                                            e,
                                            0
                                        ),
                                            this.containerEl.addEventListener(
                                                s.events.ANIM_END,
                                                this.startGame.bind(this)
                                            ),
                                            (this.containerEl.style.webkitAnimation =
                                                'intro .4s ease-out 1 both'),
                                            (this.containerEl.style.width = ''.concat(
                                                this.dimensions.WIDTH,
                                                'px'
                                            )),
                                            this.setPlayStatus(!0),
                                            (this.activated = !0);
                                    }
                                }
                            },
                            {
                                key: 'startGame',
                                value: function() {
                                    this.isArcadeMode() && this.setArcadeMode(),
                                        (this.runningTime = 0),
                                        (this.playingIntro = !1),
                                        (this.tRexGroup.playingIntro = !1),
                                        (this.containerEl.style.webkitAnimation =
                                            ''),
                                        this.playCount++;
                                }
                            },
                            {
                                key: 'clearCanvas',
                                value: function() {
                                    this.canvasCtx.clearRect(
                                        0,
                                        0,
                                        this.dimensions.WIDTH,
                                        this.dimensions.HEIGHT
                                    );
                                }
                            },
                            {
                                key: 'isCanvasInView',
                                value: function() {
                                    return (
                                        this.containerEl.getBoundingClientRect()
                                            .top >
                                        s.config.CANVAS_IN_VIEW_OFFSET
                                    );
                                }
                            },
                            {
                                key: 'update',
                                value: function() {
                                    this.updatePending = !1;
                                    var e = (0, a.getTimeStamp)(),
                                        t = e - (this.time || e);
                                    if (((this.time = e), this.playing)) {
                                        this.clearCanvas(),
                                            this.tRexGroup.updateJump(t),
                                            (this.runningTime += t);
                                        var i =
                                            this.runningTime >
                                            this.config.CLEAR_TIME;
                                        1 != this.tRex.jumpCount ||
                                            this.playingIntro ||
                                            this.playIntro(),
                                            (t = this.activated ? t : 0),
                                            this.horizon.update(
                                                t,
                                                this.currentSpeed,
                                                i,
                                                this.inverted
                                            );
                                        var s = !1;
                                        if (
                                            (i &&
                                                (s = this.tRexGroup.checkForCollision(
                                                    this.horizon.obstacles[0]
                                                )),
                                            s
                                                ? this.gameOver()
                                                : ((this.distanceRan +=
                                                      (this.currentSpeed * t) /
                                                      this.msPerFrame),
                                                  this.currentSpeed <
                                                      this.config.MAX_SPEED &&
                                                      (this.currentSpeed += this.config.ACCELERATION)),
                                            this.distanceMeter.update(
                                                t,
                                                Math.ceil(this.distanceRan)
                                            ) &&
                                                this.playSound(
                                                    this.soundFx.SCORE
                                                ),
                                            this.invertTimer >
                                                this.config
                                                    .INVERT_FADE_DURATION)
                                        )
                                            (this.invertTimer = 0),
                                                (this.invertTrigger = !1),
                                                this.invert();
                                        else if (this.invertTimer)
                                            this.invertTimer += t;
                                        else {
                                            var n = this.distanceMeter.getActualDistance(
                                                Math.ceil(this.distanceRan)
                                            );
                                            n > 0 &&
                                                ((this.invertTrigger = !(
                                                    n %
                                                    this.config.INVERT_DISTANCE
                                                )),
                                                this.invertTrigger &&
                                                    0 === this.invertTimer &&
                                                    ((this.invertTimer += t),
                                                    this.invert()));
                                        }
                                    }
                                    (!this.playing && this.activated) ||
                                        (this.tRexGroup.update(t),
                                        this.scheduleNextUpdate()),
                                        this.tRexGroup.lives() > 0
                                            ? (this.generationEl.innerText = 'GENERATION #'
                                                  .concat(
                                                      this.generation,
                                                      ' | LIVE x '
                                                  )
                                                  .concat(
                                                      this.tRexGroup.lives()
                                                  ))
                                            : (this.generationEl.innerHTML = '<div style="color: red;">GENERATION #'.concat(
                                                  this.generation,
                                                  '  |  GAME OVER</div>'
                                              ));
                                }
                            },
                            {
                                key: 'handleEvent',
                                value: function(e) {
                                    var t = this;
                                    return (function(i, s) {
                                        switch (i) {
                                            case s.KEYDOWN:
                                            case s.TOUCHSTART:
                                            case s.POINTERDOWN:
                                                t.onKeyDown(e);
                                                break;
                                            case s.KEYUP:
                                            case s.TOUCHEND:
                                            case s.POINTERUP:
                                                t.onKeyUp(e);
                                        }
                                    })(e.type, s.events);
                                }
                            },
                            {
                                key: 'startListening',
                                value: function() {
                                    document.addEventListener(
                                        s.events.KEYDOWN,
                                        this
                                    ),
                                        document.addEventListener(
                                            s.events.KEYUP,
                                            this
                                        ),
                                        this.containerEl.addEventListener(
                                            s.events.TOUCHSTART,
                                            this
                                        ),
                                        document.addEventListener(
                                            s.events.POINTERDOWN,
                                            this
                                        ),
                                        document.addEventListener(
                                            s.events.POINTERUP,
                                            this
                                        );
                                }
                            },
                            { key: 'stopListening', value: function() {} },
                            {
                                key: 'onKeyDown',
                                value: function(e) {
                                    n.IS_MOBILE &&
                                        this.playing &&
                                        e.preventDefault(),
                                        this.isCanvasInView() &&
                                            (this.crashed || this.paused
                                                ? n.IS_IOS &&
                                                  this.crashed &&
                                                  e.type ==
                                                      s.events.TOUCHSTART &&
                                                  e.currentTarget ==
                                                      this.containerEl &&
                                                  this.handleGameOverClicks(e)
                                                : s.keycodes.JUMP[e.keyCode] ||
                                                  e.type == s.events.TOUCHSTART
                                                ? (e.preventDefault(),
                                                  this.playing ||
                                                      (this.touchController ||
                                                          e.type !=
                                                              s.events
                                                                  .TOUCHSTART ||
                                                          this.createTouchController(),
                                                      this.loadSounds(),
                                                      this.setPlayStatus(!0),
                                                      this.update(),
                                                      window.errorPageController &&
                                                          errorPageController.trackEasterEgg()),
                                                  this.tRex.jumping ||
                                                      this.tRex.ducking ||
                                                      (this.playSound(
                                                          this.soundFx
                                                              .BUTTON_PRESS
                                                      ),
                                                      this.tRex.startJump(
                                                          this.currentSpeed
                                                      )))
                                                : this.playing &&
                                                  s.keycodes.DUCK[e.keyCode] &&
                                                  (e.preventDefault(),
                                                  this.tRex.jumping
                                                      ? this.tRex.setSpeedDrop()
                                                      : this.tRex.jumping ||
                                                        this.tRex.ducking ||
                                                        this.tRex.setDuck(!0)));
                                }
                            },
                            {
                                key: 'onKeyUp',
                                value: function(e) {
                                    var t = String(e.keyCode),
                                        i =
                                            s.keycodes.JUMP[t] ||
                                            e.type == s.events.TOUCHEND ||
                                            e.type == s.events.POINTERUP;
                                    if (this.isRunning() && i)
                                        this.tRex.endJump();
                                    else if (s.keycodes.DUCK[t])
                                        (this.tRex.speedDrop = !1),
                                            this.tRex.setDuck(!1);
                                    else if (this.crashed) {
                                        var n =
                                            (0, a.getTimeStamp)() - this.time;
                                        this.isCanvasInView() &&
                                            (s.keycodes.RESTART[t] ||
                                                this.isLeftClickOnCanvas(e) ||
                                                (n >=
                                                    this.config
                                                        .GAMEOVER_CLEAR_TIME &&
                                                    s.keycodes.JUMP[t])) &&
                                            this.handleGameOverClicks(e);
                                    } else
                                        this.paused &&
                                            i &&
                                            (this.tRex.reset(), this.play());
                                }
                            },
                            {
                                key: 'handleGameOverClicks',
                                value: function(e) {
                                    e.preventDefault(),
                                        this.distanceMeter.hasClickedOnHighScore(
                                            e
                                        ) && this.highestScore
                                            ? this.distanceMeter.isHighScoreFlashing()
                                                ? (this.saveHighScore(0, !0),
                                                  this.distanceMeter.resetHighScore())
                                                : this.distanceMeter.startHighScoreFlashing()
                                            : (this.distanceMeter.cancelHighScoreFlashing(),
                                              this.restart());
                                }
                            },
                            {
                                key: 'isLeftClickOnCanvas',
                                value: function(e) {
                                    var t = e.button,
                                        i = e.type,
                                        n = e.target;
                                    return (
                                        null != t &&
                                        t < 2 &&
                                        i == s.events.POINTERUP &&
                                        n == this.canvas
                                    );
                                }
                            },
                            {
                                key: 'scheduleNextUpdate',
                                value: function() {
                                    this.updatePending ||
                                        ((this.updatePending = !0),
                                        (this.raqId = requestAnimationFrame(
                                            this.update.bind(this)
                                        )));
                                }
                            },
                            {
                                key: 'isRunning',
                                value: function() {
                                    return !!this.raqId;
                                }
                            },
                            {
                                key: 'initializeHighScore',
                                value: function(e) {
                                    (this.syncHighestScore = !0),
                                        (e = Math.ceil(e)) < this.highestScore
                                            ? window.errorPageController &&
                                              errorPageController.updateEasterEggHighScore(
                                                  this.highestScore
                                              )
                                            : ((this.highestScore = e),
                                              this.distanceMeter.setHighScore(
                                                  this.highestScore
                                              ));
                                }
                            },
                            {
                                key: 'saveHighScore',
                                value: function(e, t) {
                                    (this.highestScore = Math.ceil(e)),
                                        this.distanceMeter.setHighScore(
                                            this.highestScore
                                        ),
                                        this.syncHighestScore &&
                                            window.errorPageController &&
                                            (t
                                                ? errorPageController.resetEasterEggHighScore()
                                                : errorPageController.updateEasterEggHighScore(
                                                      this.highestScore
                                                  ));
                                }
                            },
                            {
                                key: 'gameOver',
                                value: function() {
                                    var e = this;
                                    this.playSound(this.soundFx.HIT),
                                        this.stop(),
                                        (this.crashed = !0),
                                        (this.distanceMeter.achievement = !1),
                                        this.tRexGroup.update(
                                            100,
                                            o.default.status.CRASHED
                                        ),
                                        this.distanceRan > this.highestScore &&
                                            this.saveHighScore(
                                                this.distanceRan
                                            ),
                                        (this.time = (0, a.getTimeStamp)()),
                                        setTimeout(function() {
                                            e.restart();
                                        }, 500);
                                }
                            },
                            {
                                key: 'stop',
                                value: function() {
                                    this.setPlayStatus(!1),
                                        (this.paused = !0),
                                        cancelAnimationFrame(this.raqId),
                                        (this.raqId = 0);
                                }
                            },
                            {
                                key: 'play',
                                value: function() {
                                    this.crashed ||
                                        (this.setPlayStatus(!0),
                                        (this.paused = !1),
                                        this.tRexGroup.update(
                                            0,
                                            o.default.status.RUNNING
                                        ),
                                        (this.time = (0, a.getTimeStamp)()),
                                        this.update());
                                }
                            },
                            {
                                key: 'restart',
                                value: function() {
                                    this.generation++,
                                        this.raqId ||
                                            (this.playCount++,
                                            (this.runningTime = 0),
                                            this.setPlayStatus(!0),
                                            (this.paused = !1),
                                            (this.crashed = !1),
                                            (this.distanceRan = 0),
                                            this.setSpeed(this.config.SPEED),
                                            (this.time = (0, a.getTimeStamp)()),
                                            this.containerEl.classList.remove(
                                                s.classes.CRASHED
                                            ),
                                            this.clearCanvas(),
                                            this.distanceMeter.reset(
                                                this.highestScore
                                            ),
                                            this.horizon.reset(),
                                            this.tRexGroup.reset(),
                                            this.config.onReset({
                                                tRexes: this.tRexGroup
                                            }),
                                            this.playSound(
                                                this.soundFx.BUTTON_PRESS
                                            ),
                                            this.invert(!0),
                                            (this.bdayFlashTimer = null),
                                            this.update());
                                }
                            },
                            {
                                key: 'setPlayStatus',
                                value: function(e) {
                                    this.touchController &&
                                        this.touchController.classList.toggle(
                                            'hidden',
                                            !e
                                        ),
                                        (this.playing = e);
                                }
                            },
                            {
                                key: 'isArcadeMode',
                                value: function() {
                                    return !1;
                                }
                            },
                            {
                                key: 'setArcadeMode',
                                value: function() {
                                    document.body.classList.add(
                                        s.classes.ARCADE_MODE
                                    ),
                                        this.setArcadeModeContainerScale();
                                }
                            },
                            {
                                key: 'setArcadeModeContainerScale',
                                value: function() {
                                    var e = window.innerHeight,
                                        t = e / this.dimensions.HEIGHT,
                                        i =
                                            window.innerWidth /
                                            this.dimensions.WIDTH,
                                        n = Math.max(1, Math.min(t, i)),
                                        a = this.dimensions.HEIGHT * n,
                                        r =
                                            Math.ceil(
                                                Math.max(
                                                    0,
                                                    (e -
                                                        a -
                                                        s.config
                                                            .ARCADE_MODE_INITIAL_TOP_POSITION) *
                                                        s.config
                                                            .ARCADE_MODE_TOP_POSITION_PERCENT
                                                )
                                            ) * window.devicePixelRatio;
                                    this.containerEl.style.transform = 'scale('
                                        .concat(n, ') translateY(')
                                        .concat(r, 'px)');
                                }
                            },
                            {
                                key: 'onVisibilityChange',
                                value: function(e) {
                                    var t = e.type;
                                    document.hidden ||
                                    document.webkitHidden ||
                                    'blur' == t ||
                                    'visible' != document.visibilityState
                                        ? this.stop()
                                        : this.crashed ||
                                          (this.tRexGroup.reset(), this.play());
                                }
                            },
                            {
                                key: 'playSound',
                                value: function(e) {
                                    if (e) {
                                        var t = this.audioContext.createBufferSource();
                                        (t.buffer = e),
                                            t.connect(
                                                this.audioContext.destination
                                            ),
                                            t.start(0);
                                    }
                                }
                            },
                            {
                                key: 'invert',
                                value: function(e) {
                                    e
                                        ? (document.body.classList.toggle(
                                              s.classes.INVERTED,
                                              !1
                                          ),
                                          (this.invertTimer = 0),
                                          (this.inverted = !1))
                                        : (this.inverted = document.body.classList.toggle(
                                              s.classes.INVERTED,
                                              this.invertTrigger
                                          ));
                                }
                            }
                        ]),
                        s
                    );
                })();
                (exports.default = u),
                    (0, s.default)(u, 'config', {
                        ACCELERATION: 0.005,
                        BG_CLOUD_SPEED: 0.2,
                        BOTTOM_PAD: 10,
                        CANVAS_IN_VIEW_OFFSET: -10,
                        CLEAR_TIME: 100,
                        CLOUD_FREQUENCY: 0.5,
                        GAMEOVER_CLEAR_TIME: 750,
                        GAP_COEFFICIENT: 0.6,
                        GRAVITY: 0.6,
                        INITIAL_JUMP_VELOCITY: 12,
                        INVERT_FADE_DURATION: 12e3,
                        INVERT_DISTANCE: 700,
                        MAX_BLINK_COUNT: 3,
                        MAX_CLOUDS: 6,
                        MAX_OBSTACLE_LENGTH: 3,
                        MAX_OBSTACLE_DUPLICATION: 2,
                        MAX_SPEED: 13,
                        MIN_JUMP_HEIGHT: 35,
                        MOBILE_SPEED_COEFFICIENT: 1.2,
                        RESOURCE_TEMPLATE_ID: 'audio-resources',
                        SPEED: 6,
                        SPEED_DROP_COEFFICIENT: 3,
                        ARCADE_MODE_INITIAL_TOP_POSITION: 35,
                        ARCADE_MODE_TOP_POSITION_PERCENT: 0.1,
                        onReset: a.noop,
                        onRunning: a.noop,
                        onCrash: a.noop
                    }),
                    (0, s.default)(u, 'defaultDimensions', {
                        WIDTH: n.DEFAULT_WIDTH,
                        HEIGHT: 150
                    }),
                    (0, s.default)(u, 'classes', {
                        ARCADE_MODE: 'arcade-mode',
                        CANVAS: 'runner-canvas',
                        CONTAINER: 'runner-container',
                        CRASHED: 'crashed',
                        ICON: 'icon-offline',
                        INVERTED: 'inverted',
                        SNACKBAR: 'snackbar',
                        SNACKBAR_SHOW: 'snackbar-show',
                        TOUCH_CONTROLLER: 'controller'
                    }),
                    (0, s.default)(u, 'spriteDefinition', {
                        LDPI: {
                            CACTUS_LARGE: { x: 332, y: 2 },
                            CACTUS_SMALL: { x: 228, y: 2 },
                            CLOUD: { x: 86, y: 2 },
                            HORIZON: { x: 2, y: 54 },
                            MOON: { x: 484, y: 2 },
                            PTERODACTYL: { x: 134, y: 2 },
                            RESTART: { x: 2, y: 2 },
                            TEXT_SPRITE: { x: 655, y: 2 },
                            TREX: { x: 848, y: 2 },
                            STAR: { x: 645, y: 2 }
                        },
                        HDPI: {
                            CACTUS_LARGE: { x: 652, y: 2 },
                            CACTUS_SMALL: { x: 446, y: 2 },
                            CLOUD: { x: 166, y: 2 },
                            HORIZON: { x: 2, y: 104 },
                            MOON: { x: 954, y: 2 },
                            PTERODACTYL: { x: 260, y: 2 },
                            RESTART: { x: 2, y: 2 },
                            TEXT_SPRITE: { x: 1294, y: 2 },
                            TREX: { x: 1678, y: 2 },
                            STAR: { x: 1276, y: 2 }
                        }
                    }),
                    (0, s.default)(u, 'sounds', {
                        BUTTON_PRESS: 'offline-sound-press',
                        HIT: 'offline-sound-hit',
                        SCORE: 'offline-sound-reached'
                    }),
                    (0, s.default)(u, 'keycodes', {
                        JUMP: { 38: 1, 32: 1 },
                        DUCK: { 40: 1 },
                        RESTART: { 13: 1 }
                    }),
                    (0, s.default)(u, 'events', {
                        ANIM_END: 'webkitAnimationEnd',
                        CLICK: 'click',
                        KEYDOWN: 'keydown',
                        KEYUP: 'keyup',
                        POINTERDOWN: 'pointerdown',
                        POINTERUP: 'pointerup',
                        RESIZE: 'resize',
                        TOUCHEND: 'touchend',
                        TOUCHSTART: 'touchstart',
                        VISIBILITY: 'visibilitychange',
                        BLUR: 'blur',
                        FOCUS: 'focus',
                        LOAD: 'load'
                    }),
                    (0, s.default)(u, 'updateCanvasScaling', function(e, t, i) {
                        var s = e.getContext('2d'),
                            n = Math.floor(window.devicePixelRatio) || 1,
                            a = Math.floor(s.webkitBackingStorePixelRatio) || 1,
                            r = n / a;
                        if (n !== a) {
                            var h = t || e.width,
                                o = i || e.height;
                            return (
                                (e.width = h * r),
                                (e.height = o * r),
                                (e.style.width = ''.concat(h, 'px')),
                                (e.style.height = ''.concat(o, 'px')),
                                s.scale(r, r),
                                !0
                            );
                        }
                        return (
                            1 == n &&
                                ((e.style.width = ''.concat(e.width, 'px')),
                                (e.style.height = ''.concat(e.height, 'px'))),
                            !1
                        );
                    });
            },
            {
                '@babel/runtime/helpers/esm/objectSpread': '4B6C',
                '@babel/runtime/helpers/esm/classCallCheck': 'uYrB',
                '@babel/runtime/helpers/esm/createClass': '1Q7K',
                '@babel/runtime/helpers/esm/defineProperty': '/DOn',
                './constants': 'CPW7',
                './utils': 'IZP3',
                './DistanceMeter': '+sjP',
                './Horizon': '5h9H',
                './Trex': 'vB6v',
                './TrexGroup': 'JXbE'
            }
        ],
        'B/52': [
            function(require, module, exports) {
                'use strict';
                Object.defineProperty(exports, '__esModule', { value: !0 }),
                    Object.defineProperty(exports, 'Runner', {
                        enumerable: !0,
                        get: function() {
                            return e.default;
                        }
                    });
                var e = r(require('./Runner'));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
            },
            { './Runner': 'BT73' }
        ],
        '7QCb': [
            function(require, module, exports) {
                'use strict';
                var e = n(require('@babel/runtime/helpers/esm/slicedToArray'));
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(exports, '__esModule', { value: !0 });
                var t = require('../../src'),
                    o = require('./game/constants'),
                    a = require('./game');
                function i(e) {
                    return e
                        ? [
                              e.distance / o.CANVAS_WIDTH,
                              e.obstacleX / o.CANVAS_WIDTH,
                              e.obstacleY / o.CANVAS_HEIGHT,
                              e.obstacleWidth / o.CANVAS_WIDTH,
                              e.obstacleHeight / o.CANVAS_HEIGHT,
                              e.speed / 100
                          ]
                        : [0, 0, 0];
                }
                var r = Object.assign({}, t.DefaultConfig, {
                        populationSize: 500,
                        adjustCompatibilityThreshold: !0,
                        compatibilityModifierTarget: 50,
                        compatibilityThreshold: 3,
                        feedForwardOnly: !1
                    }),
                    s = [
                        new t.NodeGene(t.NodeType.Input, 'distance'),
                        new t.NodeGene(t.NodeType.Input, 'obstacleX'),
                        new t.NodeGene(t.NodeType.Input, 'obstacleY'),
                        new t.NodeGene(t.NodeType.Input, 'obstacleWidth'),
                        new t.NodeGene(t.NodeType.Input, 'obstacleHeight'),
                        new t.NodeGene(t.NodeType.Input, 'speed'),
                        new t.NodeGene(t.NodeType.Output, 'jump'),
                        new t.NodeGene(t.NodeType.Output, 'duck')
                    ],
                    u = [];
                s.filter(function(e) {
                    return e.type !== t.NodeType.Output;
                }).forEach(function(e) {
                    u.push(
                        new t.ConnectionGene(
                            r.innovation.next().value,
                            e,
                            s[6]
                        ),
                        new t.ConnectionGene(r.innovation.next().value, e, s[7])
                    );
                });
                var c = !0;
                function d(e) {
                    var n = e.tRexes;
                    c || h.epoch(), n.spawn(h.organisms.length);
                    var t = h.getSuperChamp();
                    (f.innerHTML = '\norganisms: '
                        .concat(h.organisms.length, '\nspecies: ')
                        .concat(h.species.length, '\nfitness: ')
                        .concat(t.originalFitness.toFixed(6), '\n    ')),
                        console.log(Array.from(t.connections.values())),
                        t.getNetwork().neurons.values(),
                        n.tRexes.forEach(function(e, n) {
                            (e.organism = h.organisms[n]),
                                (e.network = e.organism.getNetwork());
                        }),
                        (c = !1);
                }
                function l(e, n) {
                    return Math.max(e.x + e.width - n.x, 0);
                }
                function p(n) {
                    var t = n.tRex,
                        o = (n.state, n.collision),
                        a = (0, e.default)(o, 2),
                        i = (a[0],
                        a[1],
                        N.distanceMeter.getActualDistance(N.distanceRan));
                    N.distanceMeter.getActualDistance(N.highestScore);
                    t.organism.fitness = Math.pow(i / 1e3, 2);
                }
                function g(e) {
                    var n = e.tRex,
                        t = e.state;
                    return n.network.activate(i(t)).map(function(e) {
                        return !!Math.round(e.value);
                    });
                }
                var f = document.querySelector('.stats'),
                    h = t.Population.from(r, { nodes: s, connections: u }),
                    N = new a.Runner('#t-rex', {
                        onReset: d,
                        onCrash: p,
                        onRunning: g
                    });
                (window.runner = N), (window.population = h);
            },
            {
                '@babel/runtime/helpers/esm/slicedToArray': 'U1JK',
                '../../src': 'WdSo',
                './game/constants': 'CPW7',
                './game': 'B/52'
            }
        ]
    },
    {},
    ['7QCb'],
    null
);
