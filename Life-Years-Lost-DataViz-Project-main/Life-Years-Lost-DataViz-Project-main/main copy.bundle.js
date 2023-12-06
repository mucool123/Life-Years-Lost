! function(e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(a, r, function(t) {
                return e[t]
            }.bind(null, r));
        return a
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 146)
}([function(e, t, n) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var t, a;

            function r() {
                return t.apply(null, arguments)
            }

            function i(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function o(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function d(e) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                var t;
                for (t in e)
                    if (o(e, t)) return !1;
                return !0
            }

            function u(e) {
                return void 0 === e
            }

            function l(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function c(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function _(e, t) {
                var n, a = [];
                for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
                return a
            }

            function m(e, t) {
                for (var n in t) o(t, n) && (e[n] = t[n]);
                return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function h(e, t, n, a) {
                return bt(e, t, n, a, !0).utc()
            }

            function f(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf
            }

            function p(e) {
                if (null == e._isValid) {
                    var t = f(e),
                        n = a.call(t.parsedDateParts, (function(e) {
                            return null != e
                        })),
                        r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
                    e._isValid = r
                }
                return e._isValid
            }

            function y(e) {
                var t = h(NaN);
                return null != e ? m(f(t), e) : f(t).userInvalidated = !0, t
            }
            a = Array.prototype.some ? Array.prototype.some : function(e) {
                var t, n = Object(this),
                    a = n.length >>> 0;
                for (t = 0; t < a; t++)
                    if (t in n && e.call(this, n[t], t, n)) return !0;
                return !1
            };
            var M = r.momentProperties = [],
                g = !1;

            function L(e, t) {
                var n, a, r;
                if (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), u(t._i) || (e._i = t._i), u(t._f) || (e._f = t._f), u(t._l) || (e._l = t._l), u(t._strict) || (e._strict = t._strict), u(t._tzm) || (e._tzm = t._tzm), u(t._isUTC) || (e._isUTC = t._isUTC), u(t._offset) || (e._offset = t._offset), u(t._pf) || (e._pf = f(t)), u(t._locale) || (e._locale = t._locale), M.length > 0)
                    for (n = 0; n < M.length; n++) u(r = t[a = M[n]]) || (e[a] = r);
                return e
            }

            function v(e) {
                L(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === g && (g = !0, r.updateOffset(this), g = !1)
            }

            function Y(e) {
                return e instanceof v || null != e && null != e._isAMomentObject
            }

            function k(e) {
                !1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function w(e, t) {
                var n = !0;
                return m((function() {
                    if (null != r.deprecationHandler && r.deprecationHandler(null, e), n) {
                        var a, i, s, d = [];
                        for (i = 0; i < arguments.length; i++) {
                            if (a = "", "object" == typeof arguments[i]) {
                                for (s in a += "\n[" + i + "] ", arguments[0]) o(arguments[0], s) && (a += s + ": " + arguments[0][s] + ", ");
                                a = a.slice(0, -2)
                            } else a = arguments[i];
                            d.push(a)
                        }
                        k(e + "\nArguments: " + Array.prototype.slice.call(d).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return t.apply(this, arguments)
                }), t)
            }
            var b, D = {};

            function T(e, t) {
                null != r.deprecationHandler && r.deprecationHandler(e, t), D[e] || (k(t), D[e] = !0)
            }

            function S(e) {
                return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function x(e, t) {
                var n, a = m({}, e);
                for (n in t) o(t, n) && (s(e[n]) && s(t[n]) ? (a[n] = {}, m(a[n], e[n]), m(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
                for (n in e) o(e, n) && !o(t, n) && s(e[n]) && (a[n] = m({}, a[n]));
                return a
            }

            function H(e) {
                null != e && this.set(e)
            }

            function j(e, t, n) {
                var a = "" + Math.abs(e),
                    r = t - a.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a
            }
            r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, b = Object.keys ? Object.keys : function(e) {
                var t, n = [];
                for (t in e) o(e, t) && n.push(t);
                return n
            };
            var O = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                C = {},
                A = {};

            function P(e, t, n, a) {
                var r = a;
                "string" == typeof a && (r = function() {
                    return this[a]()
                }), e && (A[e] = r), t && (A[t[0]] = function() {
                    return j(r.apply(this, arguments), t[1], t[2])
                }), n && (A[n] = function() {
                    return this.localeData().ordinal(r.apply(this, arguments), e)
                })
            }

            function W(e, t) {
                return e.isValid() ? (t = F(t, e.localeData()), C[t] = C[t] || function(e) {
                    var t, n, a, r = e.match(O);
                    for (t = 0, n = r.length; t < n; t++) A[r[t]] ? r[t] = A[r[t]] : r[t] = (a = r[t]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
                    return function(t) {
                        var a, i = "";
                        for (a = 0; a < n; a++) i += S(r[a]) ? r[a].call(t, e) : r[a];
                        return i
                    }
                }(t), C[t](e)) : e.localeData().invalidDate()
            }

            function F(e, t) {
                var n = 5;

                function a(e) {
                    return t.longDateFormat(e) || e
                }
                for (E.lastIndex = 0; n >= 0 && E.test(e);) e = e.replace(E, a), E.lastIndex = 0, n -= 1;
                return e
            }
            var N = {};

            function z(e, t) {
                var n = e.toLowerCase();
                N[n] = N[n + "s"] = N[t] = e
            }

            function R(e) {
                return "string" == typeof e ? N[e] || N[e.toLowerCase()] : void 0
            }

            function I(e) {
                var t, n, a = {};
                for (n in e) o(e, n) && (t = R(n)) && (a[t] = e[n]);
                return a
            }
            var U = {};

            function J(e, t) {
                U[e] = t
            }

            function B(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }

            function q(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function V(e) {
                var t = +e,
                    n = 0;
                return 0 !== t && isFinite(t) && (n = q(t)), n
            }

            function G(e, t) {
                return function(n) {
                    return null != n ? (K(this, e, n), r.updateOffset(this, t), this) : $(this, e)
                }
            }

            function $(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function K(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && B(e.year()) && 1 === e.month() && 29 === e.date() ? (n = V(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Ye(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
            }
            var X, Z = /\d/,
                Q = /\d\d/,
                ee = /\d{3}/,
                te = /\d{4}/,
                ne = /[+-]?\d{6}/,
                ae = /\d\d?/,
                re = /\d\d\d\d?/,
                ie = /\d\d\d\d\d\d?/,
                se = /\d{1,3}/,
                oe = /\d{1,4}/,
                de = /[+-]?\d{1,6}/,
                ue = /\d+/,
                le = /[+-]?\d+/,
                ce = /Z|[+-]\d\d:?\d\d/gi,
                _e = /Z|[+-]\d\d(?::?\d\d)?/gi,
                me = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

            function he(e, t, n) {
                X[e] = S(t) ? t : function(e, a) {
                    return e && n ? n : t
                }
            }

            function fe(e, t) {
                return o(X, e) ? X[e](t._strict, t._locale) : new RegExp(pe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, a, r) {
                    return t || n || a || r
                }))))
            }

            function pe(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            X = {};
            var ye, Me = {};

            function ge(e, t) {
                var n, a = t;
                for ("string" == typeof e && (e = [e]), l(t) && (a = function(e, n) {
                        n[t] = V(e)
                    }), n = 0; n < e.length; n++) Me[e[n]] = a
            }

            function Le(e, t) {
                ge(e, (function(e, n, a, r) {
                    a._w = a._w || {}, t(e, a._w, a, r)
                }))
            }

            function ve(e, t, n) {
                null != t && o(Me, e) && Me[e](t, n._a, n, e)
            }

            function Ye(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var n, a = (t % (n = 12) + n) % n;
                return e += (t - a) / 12, 1 === a ? B(e) ? 29 : 28 : 31 - a % 7 % 2
            }
            ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t;
                return -1
            }, P("M", ["MM", 2], "Mo", (function() {
                return this.month() + 1
            })), P("MMM", 0, 0, (function(e) {
                return this.localeData().monthsShort(this, e)
            })), P("MMMM", 0, 0, (function(e) {
                return this.localeData().months(this, e)
            })), z("month", "M"), J("month", 8), he("M", ae), he("MM", ae, Q), he("MMM", (function(e, t) {
                return t.monthsShortRegex(e)
            })), he("MMMM", (function(e, t) {
                return t.monthsRegex(e)
            })), ge(["M", "MM"], (function(e, t) {
                t[1] = V(e) - 1
            })), ge(["MMM", "MMMM"], (function(e, t, n, a) {
                var r = n._locale.monthsParse(e, a, n._strict);
                null != r ? t[1] = r : f(n).invalidMonth = e
            }));
            var ke = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                we = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                be = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                De = me,
                Te = me;

            function Se(e, t, n) {
                var a, r, i, s = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) i = h([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (r = ye.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = ye.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = ye.call(this._shortMonthsParse, s)) || -1 !== (r = ye.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = ye.call(this._longMonthsParse, s)) || -1 !== (r = ye.call(this._shortMonthsParse, s)) ? r : null
            }

            function xe(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = V(t);
                    else if (!l(t = e.localeData().monthsParse(t))) return e;
                return n = Math.min(e.date(), Ye(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function He(e) {
                return null != e ? (xe(this, e), r.updateOffset(this, !0), this) : $(this, "Month")
            }

            function je() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, a = [],
                    r = [],
                    i = [];
                for (t = 0; t < 12; t++) n = h([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
                for (a.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) a[t] = pe(a[t]), r[t] = pe(r[t]);
                for (t = 0; t < 24; t++) i[t] = pe(i[t]);
                this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
            }

            function Oe(e) {
                return B(e) ? 366 : 365
            }
            P("Y", 0, 0, (function() {
                var e = this.year();
                return e <= 9999 ? j(e, 4) : "+" + e
            })), P(0, ["YY", 2], 0, (function() {
                return this.year() % 100
            })), P(0, ["YYYY", 4], 0, "year"), P(0, ["YYYYY", 5], 0, "year"), P(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), J("year", 1), he("Y", le), he("YY", ae, Q), he("YYYY", oe, te), he("YYYYY", de, ne), he("YYYYYY", de, ne), ge(["YYYYY", "YYYYYY"], 0), ge("YYYY", (function(e, t) {
                t[0] = 2 === e.length ? r.parseTwoDigitYear(e) : V(e)
            })), ge("YY", (function(e, t) {
                t[0] = r.parseTwoDigitYear(e)
            })), ge("Y", (function(e, t) {
                t[0] = parseInt(e, 10)
            })), r.parseTwoDigitYear = function(e) {
                return V(e) + (V(e) > 68 ? 1900 : 2e3)
            };
            var Ee = G("FullYear", !0);

            function Ce(e, t, n, a, r, i, s) {
                var o;
                return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, a, r, i, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, a, r, i, s), o
            }

            function Ae(e) {
                var t, n;
                return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
            }

            function Pe(e, t, n) {
                var a = 7 + t - n;
                return -(7 + Ae(e, 0, a).getUTCDay() - t) % 7 + a - 1
            }

            function We(e, t, n, a, r) {
                var i, s, o = 1 + 7 * (t - 1) + (7 + n - a) % 7 + Pe(e, a, r);
                return o <= 0 ? s = Oe(i = e - 1) + o : o > Oe(e) ? (i = e + 1, s = o - Oe(e)) : (i = e, s = o), {
                    year: i,
                    dayOfYear: s
                }
            }

            function Fe(e, t, n) {
                var a, r, i = Pe(e.year(), t, n),
                    s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                return s < 1 ? a = s + Ne(r = e.year() - 1, t, n) : s > Ne(e.year(), t, n) ? (a = s - Ne(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = s), {
                    week: a,
                    year: r
                }
            }

            function Ne(e, t, n) {
                var a = Pe(e, t, n),
                    r = Pe(e + 1, t, n);
                return (Oe(e) - a + r) / 7
            }

            function ze(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }
            P("w", ["ww", 2], "wo", "week"), P("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), J("week", 5), J("isoWeek", 5), he("w", ae), he("ww", ae, Q), he("W", ae), he("WW", ae, Q), Le(["w", "ww", "W", "WW"], (function(e, t, n, a) {
                t[a.substr(0, 1)] = V(e)
            })), P("d", 0, "do", "day"), P("dd", 0, 0, (function(e) {
                return this.localeData().weekdaysMin(this, e)
            })), P("ddd", 0, 0, (function(e) {
                return this.localeData().weekdaysShort(this, e)
            })), P("dddd", 0, 0, (function(e) {
                return this.localeData().weekdays(this, e)
            })), P("e", 0, 0, "weekday"), P("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), J("day", 11), J("weekday", 11), J("isoWeekday", 11), he("d", ae), he("e", ae), he("E", ae), he("dd", (function(e, t) {
                return t.weekdaysMinRegex(e)
            })), he("ddd", (function(e, t) {
                return t.weekdaysShortRegex(e)
            })), he("dddd", (function(e, t) {
                return t.weekdaysRegex(e)
            })), Le(["dd", "ddd", "dddd"], (function(e, t, n, a) {
                var r = n._locale.weekdaysParse(e, a, n._strict);
                null != r ? t.d = r : f(n).invalidWeekday = e
            })), Le(["d", "e", "E"], (function(e, t, n, a) {
                t[a] = V(e)
            }));
            var Re = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ie = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ue = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Je = me,
                Be = me,
                qe = me;

            function Ve(e, t, n) {
                var a, r, i, s = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) i = h([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (r = ye.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = ye.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = ye.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = ye.call(this._weekdaysParse, s)) || -1 !== (r = ye.call(this._shortWeekdaysParse, s)) || -1 !== (r = ye.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = ye.call(this._shortWeekdaysParse, s)) || -1 !== (r = ye.call(this._weekdaysParse, s)) || -1 !== (r = ye.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = ye.call(this._minWeekdaysParse, s)) || -1 !== (r = ye.call(this._weekdaysParse, s)) || -1 !== (r = ye.call(this._shortWeekdaysParse, s)) ? r : null
            }

            function Ge() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, a, r, i, s = [],
                    o = [],
                    d = [],
                    u = [];
                for (t = 0; t < 7; t++) n = h([2e3, 1]).day(t), a = pe(this.weekdaysMin(n, "")), r = pe(this.weekdaysShort(n, "")), i = pe(this.weekdays(n, "")), s.push(a), o.push(r), d.push(i), u.push(a), u.push(r), u.push(i);
                s.sort(e), o.sort(e), d.sort(e), u.sort(e), this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function $e() {
                return this.hours() % 12 || 12
            }

            function Ke(e, t) {
                P(e, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }))
            }

            function Xe(e, t) {
                return t._meridiemParse
            }
            P("H", ["HH", 2], 0, "hour"), P("h", ["hh", 2], 0, $e), P("k", ["kk", 2], 0, (function() {
                return this.hours() || 24
            })), P("hmm", 0, 0, (function() {
                return "" + $e.apply(this) + j(this.minutes(), 2)
            })), P("hmmss", 0, 0, (function() {
                return "" + $e.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2)
            })), P("Hmm", 0, 0, (function() {
                return "" + this.hours() + j(this.minutes(), 2)
            })), P("Hmmss", 0, 0, (function() {
                return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
            })), Ke("a", !0), Ke("A", !1), z("hour", "h"), J("hour", 13), he("a", Xe), he("A", Xe), he("H", ae), he("h", ae), he("k", ae), he("HH", ae, Q), he("hh", ae, Q), he("kk", ae, Q), he("hmm", re), he("hmmss", ie), he("Hmm", re), he("Hmmss", ie), ge(["H", "HH"], 3), ge(["k", "kk"], (function(e, t, n) {
                var a = V(e);
                t[3] = 24 === a ? 0 : a
            })), ge(["a", "A"], (function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            })), ge(["h", "hh"], (function(e, t, n) {
                t[3] = V(e), f(n).bigHour = !0
            })), ge("hmm", (function(e, t, n) {
                var a = e.length - 2;
                t[3] = V(e.substr(0, a)), t[4] = V(e.substr(a)), f(n).bigHour = !0
            })), ge("hmmss", (function(e, t, n) {
                var a = e.length - 4,
                    r = e.length - 2;
                t[3] = V(e.substr(0, a)), t[4] = V(e.substr(a, 2)), t[5] = V(e.substr(r)), f(n).bigHour = !0
            })), ge("Hmm", (function(e, t, n) {
                var a = e.length - 2;
                t[3] = V(e.substr(0, a)), t[4] = V(e.substr(a))
            })), ge("Hmmss", (function(e, t, n) {
                var a = e.length - 4,
                    r = e.length - 2;
                t[3] = V(e.substr(0, a)), t[4] = V(e.substr(a, 2)), t[5] = V(e.substr(r))
            }));
            var Ze, Qe = G("Hours", !0),
                et = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        w: "a week",
                        ww: "%d weeks",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: ke,
                    monthsShort: we,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Re,
                    weekdaysMin: Ue,
                    weekdaysShort: Ie,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                tt = {},
                nt = {};

            function at(e, t) {
                var n, a = Math.min(e.length, t.length);
                for (n = 0; n < a; n += 1)
                    if (e[n] !== t[n]) return n;
                return a
            }

            function rt(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function it(t) {
                var a = null;
                if (void 0 === tt[t] && void 0 !== e && e && e.exports) try {
                    a = Ze._abbr, n(143)("./" + t), st(a)
                } catch (e) {
                    tt[t] = null
                }
                return tt[t]
            }

            function st(e, t) {
                var n;
                return e && ((n = u(t) ? dt(e) : ot(e, t)) ? Ze = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Ze._abbr
            }

            function ot(e, t) {
                if (null !== t) {
                    var n, a = et;
                    if (t.abbr = e, null != tt[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = tt[e]._config;
                    else if (null != t.parentLocale)
                        if (null != tt[t.parentLocale]) a = tt[t.parentLocale]._config;
                        else {
                            if (null == (n = it(t.parentLocale))) return nt[t.parentLocale] || (nt[t.parentLocale] = []), nt[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            a = n._config
                        }
                    return tt[e] = new H(x(a, t)), nt[e] && nt[e].forEach((function(e) {
                        ot(e.name, e.config)
                    })), st(e), tt[e]
                }
                return delete tt[e], null
            }

            function dt(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ze;
                if (!i(e)) {
                    if (t = it(e)) return t;
                    e = [e]
                }
                return function(e) {
                    for (var t, n, a, r, i = 0; i < e.length;) {
                        for (t = (r = rt(e[i]).split("-")).length, n = (n = rt(e[i + 1])) ? n.split("-") : null; t > 0;) {
                            if (a = it(r.slice(0, t).join("-"))) return a;
                            if (n && n.length >= t && at(r, n) >= t - 1) break;
                            t--
                        }
                        i++
                    }
                    return Ze
                }(e)
            }

            function ut(e) {
                var t, n = e._a;
                return n && -2 === f(e).overflow && (t = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > Ye(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1, f(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), f(e)._overflowWeeks && -1 === t && (t = 7), f(e)._overflowWeekday && -1 === t && (t = 8), f(e).overflow = t), e
            }
            var lt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ct = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                _t = /Z|[+-]\d\d(?::?\d\d)?/,
                mt = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/],
                    ["YYYYMM", /\d{6}/, !1],
                    ["YYYY", /\d{4}/, !1]
                ],
                ht = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                ft = /^\/?Date\((-?\d+)/i,
                pt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                yt = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };

            function Mt(e) {
                var t, n, a, r, i, s, o = e._i,
                    d = lt.exec(o) || ct.exec(o);
                if (d) {
                    for (f(e).iso = !0, t = 0, n = mt.length; t < n; t++)
                        if (mt[t][1].exec(d[1])) {
                            r = mt[t][0], a = !1 !== mt[t][2];
                            break
                        }
                    if (null == r) return void(e._isValid = !1);
                    if (d[3]) {
                        for (t = 0, n = ht.length; t < n; t++)
                            if (ht[t][1].exec(d[3])) {
                                i = (d[2] || " ") + ht[t][0];
                                break
                            }
                        if (null == i) return void(e._isValid = !1)
                    }
                    if (!a && null != i) return void(e._isValid = !1);
                    if (d[4]) {
                        if (!_t.exec(d[4])) return void(e._isValid = !1);
                        s = "Z"
                    }
                    e._f = r + (i || "") + (s || ""), kt(e)
                } else e._isValid = !1
            }

            function gt(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }

            function Lt(e) {
                var t, n, a, r, i, s, o, d, u = pt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (u) {
                    if (n = u[4], a = u[3], r = u[2], i = u[5], s = u[6], o = u[7], d = [gt(n), we.indexOf(a), parseInt(r, 10), parseInt(i, 10), parseInt(s, 10)], o && d.push(parseInt(o, 10)), t = d, ! function(e, t, n) {
                            return !e || Ie.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (f(n).weekdayMismatch = !0, n._isValid = !1, !1)
                        }(u[1], t, e)) return;
                    e._a = t, e._tzm = function(e, t, n) {
                        if (e) return yt[e];
                        if (t) return 0;
                        var a = parseInt(n, 10),
                            r = a % 100;
                        return (a - r) / 100 * 60 + r
                    }(u[8], u[9], u[10]), e._d = Ae.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function vt(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function Yt(e) {
                var t, n, a, i, s, o = [];
                if (!e._d) {
                    for (a = function(e) {
                            var t = new Date(r.now());
                            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                        }(e), e._w && null == e._a[2] && null == e._a[1] && function(e) {
                            var t, n, a, r, i, s, o, d, u;
                            null != (t = e._w).GG || null != t.W || null != t.E ? (i = 1, s = 4, n = vt(t.GG, e._a[0], Fe(Dt(), 1, 4).year), a = vt(t.W, 1), ((r = vt(t.E, 1)) < 1 || r > 7) && (d = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, u = Fe(Dt(), i, s), n = vt(t.gg, e._a[0], u.year), a = vt(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i), a < 1 || a > Ne(n, i, s) ? f(e)._overflowWeeks = !0 : null != d ? f(e)._overflowWeekday = !0 : (o = We(n, a, r, i, s), e._a[0] = o.year, e._dayOfYear = o.dayOfYear)
                        }(e), null != e._dayOfYear && (s = vt(e._a[0], a[0]), (e._dayOfYear > Oe(s) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = Ae(s, 0, e._dayOfYear), e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = a[t];
                    for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? Ae : Ce).apply(null, o), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (f(e).weekdayMismatch = !0)
                }
            }

            function kt(e) {
                if (e._f !== r.ISO_8601)
                    if (e._f !== r.RFC_2822) {
                        e._a = [], f(e).empty = !0;
                        var t, n, a, i, s, o, d = "" + e._i,
                            u = d.length,
                            l = 0;
                        for (a = F(e._f, e._locale).match(O) || [], t = 0; t < a.length; t++) i = a[t], (n = (d.match(fe(i, e)) || [])[0]) && ((s = d.substr(0, d.indexOf(n))).length > 0 && f(e).unusedInput.push(s), d = d.slice(d.indexOf(n) + n.length), l += n.length), A[i] ? (n ? f(e).empty = !1 : f(e).unusedTokens.push(i), ve(i, n, e)) : e._strict && !n && f(e).unusedTokens.push(i);
                        f(e).charsLeftOver = u - l, d.length > 0 && f(e).unusedInput.push(d), e._a[3] <= 12 && !0 === f(e).bigHour && e._a[3] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[3] = function(e, t, n) {
                            var a;
                            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((a = e.isPM(n)) && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
                        }(e._locale, e._a[3], e._meridiem), null !== (o = f(e).era) && (e._a[0] = e._locale.erasConvertYear(o, e._a[0])), Yt(e), ut(e)
                    } else Lt(e);
                else Mt(e)
            }

            function wt(e) {
                var t = e._i,
                    n = e._f;
                return e._locale = e._locale || dt(e._l), null === t || void 0 === n && "" === t ? y({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), Y(t) ? new v(ut(t)) : (c(t) ? e._d = t : i(n) ? function(e) {
                    var t, n, a, r, i, s, o = !1;
                    if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (r = 0; r < e._f.length; r++) i = 0, s = !1, t = L({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], kt(t), p(t) && (s = !0), i += f(t).charsLeftOver, i += 10 * f(t).unusedTokens.length, f(t).score = i, o ? i < a && (a = i, n = t) : (null == a || i < a || s) && (a = i, n = t, s && (o = !0));
                    m(e, n || t)
                }(e) : n ? kt(e) : function(e) {
                    var t = e._i;
                    u(t) ? e._d = new Date(r.now()) : c(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                        var t = ft.exec(e._i);
                        null === t ? (Mt(e), !1 === e._isValid && (delete e._isValid, Lt(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : r.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : i(t) ? (e._a = _(t.slice(0), (function(e) {
                        return parseInt(e, 10)
                    })), Yt(e)) : s(t) ? function(e) {
                        if (!e._d) {
                            var t = I(e._i),
                                n = void 0 === t.day ? t.date : t.day;
                            e._a = _([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                                return e && parseInt(e, 10)
                            })), Yt(e)
                        }
                    }(e) : l(t) ? e._d = new Date(t) : r.createFromInputFallback(e)
                }(e), p(e) || (e._d = null), e))
            }

            function bt(e, t, n, a, r) {
                var o, u = {};
                return !0 !== t && !1 !== t || (a = t, t = void 0), !0 !== n && !1 !== n || (a = n, n = void 0), (s(e) && d(e) || i(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = r, u._l = n, u._i = e, u._f = t, u._strict = a, (o = new v(ut(wt(u))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
            }

            function Dt(e, t, n, a) {
                return bt(e, t, n, a, !1)
            }
            r.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            })), r.ISO_8601 = function() {}, r.RFC_2822 = function() {};
            var Tt = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = Dt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : y()
                })),
                St = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                    var e = Dt.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : y()
                }));

            function xt(e, t) {
                var n, a;
                if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return Dt();
                for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]);
                return n
            }
            var Ht = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function jt(e) {
                var t = I(e),
                    n = t.year || 0,
                    a = t.quarter || 0,
                    r = t.month || 0,
                    i = t.week || t.isoWeek || 0,
                    s = t.day || 0,
                    d = t.hour || 0,
                    u = t.minute || 0,
                    l = t.second || 0,
                    c = t.millisecond || 0;
                this._isValid = function(e) {
                    var t, n, a = !1;
                    for (t in e)
                        if (o(e, t) && (-1 === ye.call(Ht, t) || null != e[t] && isNaN(e[t]))) return !1;
                    for (n = 0; n < Ht.length; ++n)
                        if (e[Ht[n]]) {
                            if (a) return !1;
                            parseFloat(e[Ht[n]]) !== V(e[Ht[n]]) && (a = !0)
                        }
                    return !0
                }(t), this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * d * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = dt(), this._bubble()
            }

            function Ot(e) {
                return e instanceof jt
            }

            function Et(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function Ct(e, t) {
                P(e, 0, 0, (function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return e < 0 && (e = -e, n = "-"), n + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
                }))
            }
            Ct("Z", ":"), Ct("ZZ", ""), he("Z", _e), he("ZZ", _e), ge(["Z", "ZZ"], (function(e, t, n) {
                n._useUTC = !0, n._tzm = Pt(_e, e)
            }));
            var At = /([\+\-]|\d\d)/gi;

            function Pt(e, t) {
                var n, a, r = (t || "").match(e);
                return null === r ? null : 0 === (a = 60 * (n = ((r[r.length - 1] || []) + "").match(At) || ["-", 0, 0])[1] + V(n[2])) ? 0 : "+" === n[0] ? a : -a
            }

            function Wt(e, t) {
                var n, a;
                return t._isUTC ? (n = t.clone(), a = (Y(e) || c(e) ? e.valueOf() : Dt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), r.updateOffset(n, !1), n) : Dt(e).local()
            }

            function Ft(e) {
                return -Math.round(e._d.getTimezoneOffset())
            }

            function Nt() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            r.updateOffset = function() {};
            var zt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                Rt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function It(e, t) {
                var n, a, r, i, s, d, u = e,
                    c = null;
                return Ot(e) ? u = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : l(e) || !isNaN(+e) ? (u = {}, t ? u[t] = +e : u.milliseconds = +e) : (c = zt.exec(e)) ? (n = "-" === c[1] ? -1 : 1, u = {
                    y: 0,
                    d: V(c[2]) * n,
                    h: V(c[3]) * n,
                    m: V(c[4]) * n,
                    s: V(c[5]) * n,
                    ms: V(Et(1e3 * c[6])) * n
                }) : (c = Rt.exec(e)) ? (n = "-" === c[1] ? -1 : 1, u = {
                    y: Ut(c[2], n),
                    M: Ut(c[3], n),
                    w: Ut(c[4], n),
                    d: Ut(c[5], n),
                    h: Ut(c[6], n),
                    m: Ut(c[7], n),
                    s: Ut(c[8], n)
                }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (i = Dt(u.from), s = Dt(u.to), r = i.isValid() && s.isValid() ? (s = Wt(s, i), i.isBefore(s) ? d = Jt(i, s) : ((d = Jt(s, i)).milliseconds = -d.milliseconds, d.months = -d.months), d) : {
                    milliseconds: 0,
                    months: 0
                }, (u = {}).ms = r.milliseconds, u.M = r.months), a = new jt(u), Ot(e) && o(e, "_locale") && (a._locale = e._locale), Ot(e) && o(e, "_isValid") && (a._isValid = e._isValid), a
            }

            function Ut(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function Jt(e, t) {
                var n = {};
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function Bt(e, t) {
                return function(n, a) {
                    var r;
                    return null === a || isNaN(+a) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = a, a = r), qt(this, It(n, a), e), this
                }
            }

            function qt(e, t, n, a) {
                var i = t._milliseconds,
                    s = Et(t._days),
                    o = Et(t._months);
                e.isValid() && (a = null == a || a, o && xe(e, $(e, "Month") + o * n), s && K(e, "Date", $(e, "Date") + s * n), i && e._d.setTime(e._d.valueOf() + i * n), a && r.updateOffset(e, s || o))
            }
            It.fn = jt.prototype, It.invalid = function() {
                return It(NaN)
            };
            var Vt = Bt(1, "add"),
                Gt = Bt(-1, "subtract");

            function $t(e) {
                return "string" == typeof e || e instanceof String
            }

            function Kt(e) {
                return Y(e) || c(e) || $t(e) || l(e) || function(e) {
                    var t = i(e),
                        n = !1;
                    return t && (n = 0 === e.filter((function(t) {
                        return !l(t) && $t(e)
                    })).length), t && n
                }(e) || function(e) {
                    var t, n, a = s(e) && !d(e),
                        r = !1,
                        i = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
                    for (t = 0; t < i.length; t += 1) n = i[t], r = r || o(e, n);
                    return a && r
                }(e) || null == e
            }

            function Xt(e) {
                var t, n = s(e) && !d(e),
                    a = !1,
                    r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                for (t = 0; t < r.length; t += 1) a = a || o(e, r[t]);
                return n && a
            }

            function Zt(e, t) {
                if (e.date() < t.date()) return -Zt(t, e);
                var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    a = e.clone().add(n, "months");
                return -(n + (t - a < 0 ? (t - a) / (a - e.clone().add(n - 1, "months")) : (t - a) / (e.clone().add(n + 1, "months") - a))) || 0
            }

            function Qt(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = dt(e)) && (this._locale = t), this)
            }
            r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var en = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }));

            function tn() {
                return this._locale
            }

            function nn(e, t) {
                return (e % t + t) % t
            }

            function an(e, t, n) {
                return e < 100 && e >= 0 ? new Date(e + 400, t, n) - 126227808e5 : new Date(e, t, n).valueOf()
            }

            function rn(e, t, n) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - 126227808e5 : Date.UTC(e, t, n)
            }

            function sn(e, t) {
                return t.erasAbbrRegex(e)
            }

            function on() {
                var e, t, n = [],
                    a = [],
                    r = [],
                    i = [],
                    s = this.eras();
                for (e = 0, t = s.length; e < t; ++e) a.push(pe(s[e].name)), n.push(pe(s[e].abbr)), r.push(pe(s[e].narrow)), i.push(pe(s[e].name)), i.push(pe(s[e].abbr)), i.push(pe(s[e].narrow));
                this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function dn(e, t) {
                P(0, [e, e.length], 0, t)
            }

            function un(e, t, n, a, r) {
                var i;
                return null == e ? Fe(this, a, r).year : (t > (i = Ne(e, a, r)) && (t = i), ln.call(this, e, t, n, a, r))
            }

            function ln(e, t, n, a, r) {
                var i = We(e, t, n, a, r),
                    s = Ae(i.year, 0, i.dayOfYear);
                return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
            }
            P("N", 0, 0, "eraAbbr"), P("NN", 0, 0, "eraAbbr"), P("NNN", 0, 0, "eraAbbr"), P("NNNN", 0, 0, "eraName"), P("NNNNN", 0, 0, "eraNarrow"), P("y", ["y", 1], "yo", "eraYear"), P("y", ["yy", 2], 0, "eraYear"), P("y", ["yyy", 3], 0, "eraYear"), P("y", ["yyyy", 4], 0, "eraYear"), he("N", sn), he("NN", sn), he("NNN", sn), he("NNNN", (function(e, t) {
                return t.erasNameRegex(e)
            })), he("NNNNN", (function(e, t) {
                return t.erasNarrowRegex(e)
            })), ge(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(e, t, n, a) {
                var r = n._locale.erasParse(e, a, n._strict);
                r ? f(n).era = r : f(n).invalidEra = e
            })), he("y", ue), he("yy", ue), he("yyy", ue), he("yyyy", ue), he("yo", (function(e, t) {
                return t._eraYearOrdinalRegex || ue
            })), ge(["y", "yy", "yyy", "yyyy"], 0), ge(["yo"], (function(e, t, n, a) {
                var r;
                n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[0] = n._locale.eraYearOrdinalParse(e, r) : t[0] = parseInt(e, 10)
            })), P(0, ["gg", 2], 0, (function() {
                return this.weekYear() % 100
            })), P(0, ["GG", 2], 0, (function() {
                return this.isoWeekYear() % 100
            })), dn("gggg", "weekYear"), dn("ggggg", "weekYear"), dn("GGGG", "isoWeekYear"), dn("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), J("weekYear", 1), J("isoWeekYear", 1), he("G", le), he("g", le), he("GG", ae, Q), he("gg", ae, Q), he("GGGG", oe, te), he("gggg", oe, te), he("GGGGG", de, ne), he("ggggg", de, ne), Le(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, a) {
                t[a.substr(0, 2)] = V(e)
            })), Le(["gg", "GG"], (function(e, t, n, a) {
                t[a] = r.parseTwoDigitYear(e)
            })), P("Q", 0, "Qo", "quarter"), z("quarter", "Q"), J("quarter", 7), he("Q", Z), ge("Q", (function(e, t) {
                t[1] = 3 * (V(e) - 1)
            })), P("D", ["DD", 2], "Do", "date"), z("date", "D"), J("date", 9), he("D", ae), he("DD", ae, Q), he("Do", (function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            })), ge(["D", "DD"], 2), ge("Do", (function(e, t) {
                t[2] = V(e.match(ae)[0])
            }));
            var cn = G("Date", !0);
            P("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), J("dayOfYear", 4), he("DDD", se), he("DDDD", ee), ge(["DDD", "DDDD"], (function(e, t, n) {
                n._dayOfYear = V(e)
            })), P("m", ["mm", 2], 0, "minute"), z("minute", "m"), J("minute", 14), he("m", ae), he("mm", ae, Q), ge(["m", "mm"], 4);
            var _n = G("Minutes", !1);
            P("s", ["ss", 2], 0, "second"), z("second", "s"), J("second", 15), he("s", ae), he("ss", ae, Q), ge(["s", "ss"], 5);
            var mn, hn, fn = G("Seconds", !1);
            for (P("S", 0, 0, (function() {
                    return ~~(this.millisecond() / 100)
                })), P(0, ["SS", 2], 0, (function() {
                    return ~~(this.millisecond() / 10)
                })), P(0, ["SSS", 3], 0, "millisecond"), P(0, ["SSSS", 4], 0, (function() {
                    return 10 * this.millisecond()
                })), P(0, ["SSSSS", 5], 0, (function() {
                    return 100 * this.millisecond()
                })), P(0, ["SSSSSS", 6], 0, (function() {
                    return 1e3 * this.millisecond()
                })), P(0, ["SSSSSSS", 7], 0, (function() {
                    return 1e4 * this.millisecond()
                })), P(0, ["SSSSSSSS", 8], 0, (function() {
                    return 1e5 * this.millisecond()
                })), P(0, ["SSSSSSSSS", 9], 0, (function() {
                    return 1e6 * this.millisecond()
                })), z("millisecond", "ms"), J("millisecond", 16), he("S", se, Z), he("SS", se, Q), he("SSS", se, ee), mn = "SSSS"; mn.length <= 9; mn += "S") he(mn, ue);

            function pn(e, t) {
                t[6] = V(1e3 * ("0." + e))
            }
            for (mn = "S"; mn.length <= 9; mn += "S") ge(mn, pn);
            hn = G("Milliseconds", !1), P("z", 0, 0, "zoneAbbr"), P("zz", 0, 0, "zoneName");
            var yn = v.prototype;

            function Mn(e) {
                return e
            }
            yn.add = Vt, yn.calendar = function(e, t) {
                1 === arguments.length && (Kt(arguments[0]) ? (e = arguments[0], t = void 0) : Xt(arguments[0]) && (t = arguments[0], e = void 0));
                var n = e || Dt(),
                    a = Wt(n, this).startOf("day"),
                    i = r.calendarFormat(this, a) || "sameElse",
                    s = t && (S(t[i]) ? t[i].call(this, n) : t[i]);
                return this.format(s || this.localeData().calendar(i, this, Dt(n)))
            }, yn.clone = function() {
                return new v(this)
            }, yn.diff = function(e, t, n) {
                var a, r, i;
                if (!this.isValid()) return NaN;
                if (!(a = Wt(e, this)).isValid()) return NaN;
                switch (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = R(t)) {
                    case "year":
                        i = Zt(this, a) / 12;
                        break;
                    case "month":
                        i = Zt(this, a);
                        break;
                    case "quarter":
                        i = Zt(this, a) / 3;
                        break;
                    case "second":
                        i = (this - a) / 1e3;
                        break;
                    case "minute":
                        i = (this - a) / 6e4;
                        break;
                    case "hour":
                        i = (this - a) / 36e5;
                        break;
                    case "day":
                        i = (this - a - r) / 864e5;
                        break;
                    case "week":
                        i = (this - a - r) / 6048e5;
                        break;
                    default:
                        i = this - a
                }
                return n ? i : q(i)
            }, yn.endOf = function(e) {
                var t, n;
                if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (n = this._isUTC ? rn : an, e) {
                    case "year":
                        t = n(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        t = n(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        t = this._d.valueOf(), t += 36e5 - nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                        break;
                    case "minute":
                        t = this._d.valueOf(), t += 6e4 - nn(t, 6e4) - 1;
                        break;
                    case "second":
                        t = this._d.valueOf(), t += 1e3 - nn(t, 1e3) - 1
                }
                return this._d.setTime(t), r.updateOffset(this, !0), this
            }, yn.format = function(e) {
                e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
                var t = W(this, e);
                return this.localeData().postformat(t)
            }, yn.from = function(e, t) {
                return this.isValid() && (Y(e) && e.isValid() || Dt(e).isValid()) ? It({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, yn.fromNow = function(e) {
                return this.from(Dt(), e)
            }, yn.to = function(e, t) {
                return this.isValid() && (Y(e) && e.isValid() || Dt(e).isValid()) ? It({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }, yn.toNow = function(e) {
                return this.to(Dt(), e)
            }, yn.get = function(e) {
                return S(this[e = R(e)]) ? this[e]() : this
            }, yn.invalidAt = function() {
                return f(this).overflow
            }, yn.isAfter = function(e, t) {
                var n = Y(e) ? e : Dt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }, yn.isBefore = function(e, t) {
                var n = Y(e) ? e : Dt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }, yn.isBetween = function(e, t, n, a) {
                var r = Y(e) ? e : Dt(e),
                    i = Y(t) ? t : Dt(t);
                return !!(this.isValid() && r.isValid() && i.isValid()) && (("(" === (a = a || "()")[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === a[1] ? this.isBefore(i, n) : !this.isAfter(i, n)))
            }, yn.isSame = function(e, t) {
                var n, a = Y(e) ? e : Dt(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = R(t) || "millisecond") ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }, yn.isSameOrAfter = function(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }, yn.isSameOrBefore = function(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }, yn.isValid = function() {
                return p(this)
            }, yn.lang = en, yn.locale = Qt, yn.localeData = tn, yn.max = St, yn.min = Tt, yn.parsingFlags = function() {
                return m({}, f(this))
            }, yn.set = function(e, t) {
                if ("object" == typeof e) {
                    var n, a = function(e) {
                        var t, n = [];
                        for (t in e) o(e, t) && n.push({
                            unit: t,
                            priority: U[t]
                        });
                        return n.sort((function(e, t) {
                            return e.priority - t.priority
                        })), n
                    }(e = I(e));
                    for (n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit])
                } else if (S(this[e = R(e)])) return this[e](t);
                return this
            }, yn.startOf = function(e) {
                var t, n;
                if (void 0 === (e = R(e)) || "millisecond" === e || !this.isValid()) return this;
                switch (n = this._isUTC ? rn : an, e) {
                    case "year":
                        t = n(this.year(), 0, 1);
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        t = n(this.year(), this.month(), 1);
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        t = this._d.valueOf(), t -= nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                        break;
                    case "minute":
                        t = this._d.valueOf(), t -= nn(t, 6e4);
                        break;
                    case "second":
                        t = this._d.valueOf(), t -= nn(t, 1e3)
                }
                return this._d.setTime(t), r.updateOffset(this, !0), this
            }, yn.subtract = Gt, yn.toArray = function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }, yn.toObject = function() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }, yn.toDate = function() {
                return new Date(this.valueOf())
            }, yn.toISOString = function(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e,
                    n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? W(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", W(n, "Z")) : W(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, yn.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e, t, n, a = "moment",
                    r = "";
                return this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", r = "Z"), e = "[" + a + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = r + '[")]', this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
            }, "undefined" != typeof Symbol && null != Symbol.for && (yn[Symbol.for("nodejs.util.inspect.custom")] = function() {
                return "Moment<" + this.format() + ">"
            }), yn.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, yn.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, yn.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, yn.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, yn.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, yn.eraName = function() {
                var e, t, n, a = this.localeData().eras();
                for (e = 0, t = a.length; e < t; ++e) {
                    if (n = this.startOf("day").valueOf(), a[e].since <= n && n <= a[e].until) return a[e].name;
                    if (a[e].until <= n && n <= a[e].since) return a[e].name
                }
                return ""
            }, yn.eraNarrow = function() {
                var e, t, n, a = this.localeData().eras();
                for (e = 0, t = a.length; e < t; ++e) {
                    if (n = this.startOf("day").valueOf(), a[e].since <= n && n <= a[e].until) return a[e].narrow;
                    if (a[e].until <= n && n <= a[e].since) return a[e].narrow
                }
                return ""
            }, yn.eraAbbr = function() {
                var e, t, n, a = this.localeData().eras();
                for (e = 0, t = a.length; e < t; ++e) {
                    if (n = this.startOf("day").valueOf(), a[e].since <= n && n <= a[e].until) return a[e].abbr;
                    if (a[e].until <= n && n <= a[e].since) return a[e].abbr
                }
                return ""
            }, yn.eraYear = function() {
                var e, t, n, a, i = this.localeData().eras();
                for (e = 0, t = i.length; e < t; ++e)
                    if (n = i[e].since <= i[e].until ? 1 : -1, a = this.startOf("day").valueOf(), i[e].since <= a && a <= i[e].until || i[e].until <= a && a <= i[e].since) return (this.year() - r(i[e].since).year()) * n + i[e].offset;
                return this.year()
            }, yn.year = Ee, yn.isLeapYear = function() {
                return B(this.year())
            }, yn.weekYear = function(e) {
                return un.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, yn.isoWeekYear = function(e) {
                return un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, yn.quarter = yn.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }, yn.month = He, yn.daysInMonth = function() {
                return Ye(this.year(), this.month())
            }, yn.week = yn.weeks = function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }, yn.isoWeek = yn.isoWeeks = function(e) {
                var t = Fe(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }, yn.weeksInYear = function() {
                var e = this.localeData()._week;
                return Ne(this.year(), e.dow, e.doy)
            }, yn.weeksInWeekYear = function() {
                var e = this.localeData()._week;
                return Ne(this.weekYear(), e.dow, e.doy)
            }, yn.isoWeeksInYear = function() {
                return Ne(this.year(), 1, 4)
            }, yn.isoWeeksInISOWeekYear = function() {
                return Ne(this.isoWeekYear(), 1, 4)
            }, yn.date = cn, yn.day = yn.days = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()), this.add(e - t, "d")) : t
            }, yn.weekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }, yn.isoWeekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = function(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }, yn.dayOfYear = function(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }, yn.hour = yn.hours = Qe, yn.minute = yn.minutes = _n, yn.second = yn.seconds = fn, yn.millisecond = yn.milliseconds = hn, yn.utcOffset = function(e, t, n) {
                var a, i = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = Pt(_e, e))) return this
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && t && (a = Ft(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), i !== e && (!t || this._changeInProgress ? qt(this, It(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? i : Ft(this)
            }, yn.utc = function(e) {
                return this.utcOffset(0, e)
            }, yn.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ft(this), "m")), this
            }, yn.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = Pt(ce, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, yn.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? Dt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }, yn.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, yn.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, yn.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, yn.isUtc = Nt, yn.isUTC = Nt, yn.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, yn.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, yn.dates = w("dates accessor is deprecated. Use date instead.", cn), yn.months = w("months accessor is deprecated. Use month instead", He), yn.years = w("years accessor is deprecated. Use year instead", Ee), yn.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            })), yn.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
                if (!u(this._isDSTShifted)) return this._isDSTShifted;
                var e, t = {};
                return L(t, this), (t = wt(t))._a ? (e = t._isUTC ? h(t._a) : Dt(t._a), this._isDSTShifted = this.isValid() && function(e, t, n) {
                    var a, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        s = 0;
                    for (a = 0; a < r; a++)(n && e[a] !== t[a] || !n && V(e[a]) !== V(t[a])) && s++;
                    return s + i
                }(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
            }));
            var gn = H.prototype;

            function Ln(e, t, n, a) {
                var r = dt(),
                    i = h().set(a, t);
                return r[n](i, e)
            }

            function vn(e, t, n) {
                if (l(e) && (t = e, e = void 0), e = e || "", null != t) return Ln(e, t, n, "month");
                var a, r = [];
                for (a = 0; a < 12; a++) r[a] = Ln(e, a, n, "month");
                return r
            }

            function Yn(e, t, n, a) {
                "boolean" == typeof e ? (l(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, l(t) && (n = t, t = void 0), t = t || "");
                var r, i = dt(),
                    s = e ? i._week.dow : 0,
                    o = [];
                if (null != n) return Ln(t, (n + s) % 7, a, "day");
                for (r = 0; r < 7; r++) o[r] = Ln(t, (r + s) % 7, a, "day");
                return o
            }
            gn.calendar = function(e, t, n) {
                var a = this._calendar[e] || this._calendar.sameElse;
                return S(a) ? a.call(t, n) : a
            }, gn.longDateFormat = function(e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.match(O).map((function(e) {
                    return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                })).join(""), this._longDateFormat[e])
            }, gn.invalidDate = function() {
                return this._invalidDate
            }, gn.ordinal = function(e) {
                return this._ordinal.replace("%d", e)
            }, gn.preparse = Mn, gn.postformat = Mn, gn.relativeTime = function(e, t, n, a) {
                var r = this._relativeTime[n];
                return S(r) ? r(e, t, n, a) : r.replace(/%d/i, e)
            }, gn.pastFuture = function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return S(n) ? n(t) : n.replace(/%s/i, t)
            }, gn.set = function(e) {
                var t, n;
                for (n in e) o(e, n) && (S(t = e[n]) ? this[n] = t : this["_" + n] = t);
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, gn.eras = function(e, t) {
                var n, a, i, s = this._eras || dt("en")._eras;
                for (n = 0, a = s.length; n < a; ++n) {
                    switch (typeof s[n].since) {
                        case "string":
                            i = r(s[n].since).startOf("day"), s[n].since = i.valueOf()
                    }
                    switch (typeof s[n].until) {
                        case "undefined":
                            s[n].until = 1 / 0;
                            break;
                        case "string":
                            i = r(s[n].until).startOf("day").valueOf(), s[n].until = i.valueOf()
                    }
                }
                return s
            }, gn.erasParse = function(e, t, n) {
                var a, r, i, s, o, d = this.eras();
                for (e = e.toUpperCase(), a = 0, r = d.length; a < r; ++a)
                    if (i = d[a].name.toUpperCase(), s = d[a].abbr.toUpperCase(), o = d[a].narrow.toUpperCase(), n) switch (t) {
                        case "N":
                        case "NN":
                        case "NNN":
                            if (s === e) return d[a];
                            break;
                        case "NNNN":
                            if (i === e) return d[a];
                            break;
                        case "NNNNN":
                            if (o === e) return d[a]
                    } else if ([i, s, o].indexOf(e) >= 0) return d[a]
            }, gn.erasConvertYear = function(e, t) {
                var n = e.since <= e.until ? 1 : -1;
                return void 0 === t ? r(e.since).year() : r(e.since).year() + (t - e.offset) * n
            }, gn.erasAbbrRegex = function(e) {
                return o(this, "_erasAbbrRegex") || on.call(this), e ? this._erasAbbrRegex : this._erasRegex
            }, gn.erasNameRegex = function(e) {
                return o(this, "_erasNameRegex") || on.call(this), e ? this._erasNameRegex : this._erasRegex
            }, gn.erasNarrowRegex = function(e) {
                return o(this, "_erasNarrowRegex") || on.call(this), e ? this._erasNarrowRegex : this._erasRegex
            }, gn.months = function(e, t) {
                return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || be).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone
            }, gn.monthsShort = function(e, t) {
                return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[be.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, gn.monthsParse = function(e, t, n) {
                var a, r, i;
                if (this._monthsParseExact) return Se.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
                    if (r = h([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
                    if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
                    if (!n && this._monthsParse[a].test(e)) return a
                }
            }, gn.monthsRegex = function(e) {
                return this._monthsParseExact ? (o(this, "_monthsRegex") || je.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (o(this, "_monthsRegex") || (this._monthsRegex = Te), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }, gn.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (o(this, "_monthsRegex") || je.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = De), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, gn.week = function(e) {
                return Fe(e, this._week.dow, this._week.doy).week
            }, gn.firstDayOfYear = function() {
                return this._week.doy
            }, gn.firstDayOfWeek = function() {
                return this._week.dow
            }, gn.weekdays = function(e, t) {
                var n = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? ze(n, this._week.dow) : e ? n[e.day()] : n
            }, gn.weekdaysMin = function(e) {
                return !0 === e ? ze(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }, gn.weekdaysShort = function(e) {
                return !0 === e ? ze(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }, gn.weekdaysParse = function(e, t, n) {
                var a, r, i;
                if (this._weekdaysParseExact) return Ve.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
                    if (r = h([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
                    if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
                    if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
                    if (!n && this._weekdaysParse[a].test(e)) return a
                }
            }, gn.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || Ge.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = Je), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, gn.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || Ge.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (o(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Be), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, gn.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || Ge.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, gn.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }, gn.meridiem = function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }, st("en", {
                eras: [{
                    since: "0001-01-01",
                    until: 1 / 0,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "Before Christ",
                    narrow: "BC",
                    abbr: "BC"
                }],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === V(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), r.lang = w("moment.lang is deprecated. Use moment.locale instead.", st), r.langData = w("moment.langData is deprecated. Use moment.localeData instead.", dt);
            var kn = Math.abs;

            function wn(e, t, n, a) {
                var r = It(t, n);
                return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble()
            }

            function bn(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function Dn(e) {
                return 4800 * e / 146097
            }

            function Tn(e) {
                return 146097 * e / 4800
            }

            function Sn(e) {
                return function() {
                    return this.as(e)
                }
            }
            var xn = Sn("ms"),
                Hn = Sn("s"),
                jn = Sn("m"),
                On = Sn("h"),
                En = Sn("d"),
                Cn = Sn("w"),
                An = Sn("M"),
                Pn = Sn("Q"),
                Wn = Sn("y");

            function Fn(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var Nn = Fn("milliseconds"),
                zn = Fn("seconds"),
                Rn = Fn("minutes"),
                In = Fn("hours"),
                Un = Fn("days"),
                Jn = Fn("months"),
                Bn = Fn("years"),
                qn = Math.round,
                Vn = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    w: null,
                    M: 11
                };

            function Gn(e, t, n, a, r) {
                return r.relativeTime(t || 1, !!n, e, a)
            }
            var $n = Math.abs;

            function Kn(e) {
                return (e > 0) - (e < 0) || +e
            }

            function Xn() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n, a, r, i, s, o, d = $n(this._milliseconds) / 1e3,
                    u = $n(this._days),
                    l = $n(this._months),
                    c = this.asSeconds();
                return c ? (e = q(d / 60), t = q(e / 60), d %= 60, e %= 60, n = q(l / 12), l %= 12, a = d ? d.toFixed(3).replace(/\.?0+$/, "") : "", r = c < 0 ? "-" : "", i = Kn(this._months) !== Kn(c) ? "-" : "", s = Kn(this._days) !== Kn(c) ? "-" : "", o = Kn(this._milliseconds) !== Kn(c) ? "-" : "", r + "P" + (n ? i + n + "Y" : "") + (l ? i + l + "M" : "") + (u ? s + u + "D" : "") + (t || e || d ? "T" : "") + (t ? o + t + "H" : "") + (e ? o + e + "M" : "") + (d ? o + a + "S" : "")) : "P0D"
            }
            var Zn = jt.prototype;
            return Zn.isValid = function() {
                    return this._isValid
                }, Zn.abs = function() {
                    var e = this._data;
                    return this._milliseconds = kn(this._milliseconds), this._days = kn(this._days), this._months = kn(this._months), e.milliseconds = kn(e.milliseconds), e.seconds = kn(e.seconds), e.minutes = kn(e.minutes), e.hours = kn(e.hours), e.months = kn(e.months), e.years = kn(e.years), this
                }, Zn.add = function(e, t) {
                    return wn(this, e, t, 1)
                }, Zn.subtract = function(e, t) {
                    return wn(this, e, t, -1)
                }, Zn.as = function(e) {
                    if (!this.isValid()) return NaN;
                    var t, n, a = this._milliseconds;
                    if ("month" === (e = R(e)) || "quarter" === e || "year" === e) switch (t = this._days + a / 864e5, n = this._months + Dn(t), e) {
                        case "month":
                            return n;
                        case "quarter":
                            return n / 3;
                        case "year":
                            return n / 12
                    } else switch (t = this._days + Math.round(Tn(this._months)), e) {
                        case "week":
                            return t / 7 + a / 6048e5;
                        case "day":
                            return t + a / 864e5;
                        case "hour":
                            return 24 * t + a / 36e5;
                        case "minute":
                            return 1440 * t + a / 6e4;
                        case "second":
                            return 86400 * t + a / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + a;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                }, Zn.asMilliseconds = xn, Zn.asSeconds = Hn, Zn.asMinutes = jn, Zn.asHours = On, Zn.asDays = En, Zn.asWeeks = Cn, Zn.asMonths = An, Zn.asQuarters = Pn, Zn.asYears = Wn, Zn.valueOf = function() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * V(this._months / 12) : NaN
                }, Zn._bubble = function() {
                    var e, t, n, a, r, i = this._milliseconds,
                        s = this._days,
                        o = this._months,
                        d = this._data;
                    return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * bn(Tn(o) + s), s = 0, o = 0), d.milliseconds = i % 1e3, e = q(i / 1e3), d.seconds = e % 60, t = q(e / 60), d.minutes = t % 60, n = q(t / 60), d.hours = n % 24, s += q(n / 24), r = q(Dn(s)), o += r, s -= bn(Tn(r)), a = q(o / 12), o %= 12, d.days = s, d.months = o, d.years = a, this
                }, Zn.clone = function() {
                    return It(this)
                }, Zn.get = function(e) {
                    return e = R(e), this.isValid() ? this[e + "s"]() : NaN
                }, Zn.milliseconds = Nn, Zn.seconds = zn, Zn.minutes = Rn, Zn.hours = In, Zn.days = Un, Zn.weeks = function() {
                    return q(this.days() / 7)
                }, Zn.months = Jn, Zn.years = Bn, Zn.humanize = function(e, t) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var n, a, r = !1,
                        i = Vn;
                    return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (r = e), "object" == typeof t && (i = Object.assign({}, Vn, t), null != t.s && null == t.ss && (i.ss = t.s - 1)), n = this.localeData(), a = function(e, t, n, a) {
                        var r = It(e).abs(),
                            i = qn(r.as("s")),
                            s = qn(r.as("m")),
                            o = qn(r.as("h")),
                            d = qn(r.as("d")),
                            u = qn(r.as("M")),
                            l = qn(r.as("w")),
                            c = qn(r.as("y")),
                            _ = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || s <= 1 && ["m"] || s < n.m && ["mm", s] || o <= 1 && ["h"] || o < n.h && ["hh", o] || d <= 1 && ["d"] || d < n.d && ["dd", d];
                        return null != n.w && (_ = _ || l <= 1 && ["w"] || l < n.w && ["ww", l]), (_ = _ || u <= 1 && ["M"] || u < n.M && ["MM", u] || c <= 1 && ["y"] || ["yy", c])[2] = t, _[3] = +e > 0, _[4] = a, Gn.apply(null, _)
                    }(this, !r, i, n), r && (a = n.pastFuture(+this, a)), n.postformat(a)
                }, Zn.toISOString = Xn, Zn.toString = Xn, Zn.toJSON = Xn, Zn.locale = Qt, Zn.localeData = tn, Zn.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Xn), Zn.lang = en, P("X", 0, 0, "unix"), P("x", 0, 0, "valueOf"), he("x", le), he("X", /[+-]?\d+(\.\d{1,3})?/), ge("X", (function(e, t, n) {
                    n._d = new Date(1e3 * parseFloat(e))
                })), ge("x", (function(e, t, n) {
                    n._d = new Date(V(e))
                })),
                //! moment.js
                r.version = "2.27.0", t = Dt, r.fn = yn, r.min = function() {
                    var e = [].slice.call(arguments, 0);
                    return xt("isBefore", e)
                }, r.max = function() {
                    var e = [].slice.call(arguments, 0);
                    return xt("isAfter", e)
                }, r.now = function() {
                    return Date.now ? Date.now() : +new Date
                }, r.utc = h, r.unix = function(e) {
                    return Dt(1e3 * e)
                }, r.months = function(e, t) {
                    return vn(e, t, "months")
                }, r.isDate = c, r.locale = st, r.invalid = y, r.duration = It, r.isMoment = Y, r.weekdays = function(e, t, n) {
                    return Yn(e, t, n, "weekdays")
                }, r.parseZone = function() {
                    return Dt.apply(null, arguments).parseZone()
                }, r.localeData = dt, r.isDuration = Ot, r.monthsShort = function(e, t) {
                    return vn(e, t, "monthsShort")
                }, r.weekdaysMin = function(e, t, n) {
                    return Yn(e, t, n, "weekdaysMin")
                }, r.defineLocale = ot, r.updateLocale = function(e, t) {
                    if (null != t) {
                        var n, a, r = et;
                        null != tt[e] && null != tt[e].parentLocale ? tt[e].set(x(tt[e]._config, t)) : (null != (a = it(e)) && (r = a._config), t = x(r, t), null == a && (t.abbr = e), (n = new H(t)).parentLocale = tt[e], tt[e] = n), st(e)
                    } else null != tt[e] && (null != tt[e].parentLocale ? (tt[e] = tt[e].parentLocale, e === st() && st(e)) : null != tt[e] && delete tt[e]);
                    return tt[e]
                }, r.locales = function() {
                    return b(tt)
                }, r.weekdaysShort = function(e, t, n) {
                    return Yn(e, t, n, "weekdaysShort")
                }, r.normalizeUnits = R, r.relativeTimeRounding = function(e) {
                    return void 0 === e ? qn : "function" == typeof e && (qn = e, !0)
                }, r.relativeTimeThreshold = function(e, t) {
                    return void 0 !== Vn[e] && (void 0 === t ? Vn[e] : (Vn[e] = t, "s" === e && (Vn.ss = t - 1), !0))
                }, r.calendarFormat = function(e, t) {
                    var n = e.diff(t, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }, r.prototype = yn, r.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "GGGG-[W]WW",
                    MONTH: "YYYY-MM"
                }, r
        }()
    }).call(this, n(142)(e))
}, function(e, t, n) {
    var a;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, (function(n, r) {
        "use strict";
        var i = [],
            s = Object.getPrototypeOf,
            o = i.slice,
            d = i.flat ? function(e) {
                return i.flat.call(e)
            } : function(e) {
                return i.concat.apply([], e)
            },
            u = i.push,
            l = i.indexOf,
            c = {},
            _ = c.toString,
            m = c.hasOwnProperty,
            h = m.toString,
            f = h.call(Object),
            p = {},
            y = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            M = function(e) {
                return null != e && e === e.window
            },
            g = n.document,
            L = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function v(e, t, n) {
            var a, r, i = (n = n || g).createElement("script");
            if (i.text = e, t)
                for (a in L)(r = t[a] || t.getAttribute && t.getAttribute(a)) && i.setAttribute(a, r);
            n.head.appendChild(i).parentNode.removeChild(i)
        }

        function Y(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[_.call(e)] || "object" : typeof e
        }
        var k = function(e, t) {
            return new k.fn.init(e, t)
        };

        function w(e) {
            var t = !!e && "length" in e && e.length,
                n = Y(e);
            return !y(e) && !M(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        k.fn = k.prototype = {
            jquery: "3.5.1",
            constructor: k,
            length: 0,
            toArray: function() {
                return o.call(this)
            },
            get: function(e) {
                return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = k.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return k.each(this, e)
            },
            map: function(e) {
                return this.pushStack(k.map(this, (function(t, n) {
                    return e.call(t, n, t)
                })))
            },
            slice: function() {
                return this.pushStack(o.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(k.grep(this, (function(e, t) {
                    return (t + 1) % 2
                })))
            },
            odd: function() {
                return this.pushStack(k.grep(this, (function(e, t) {
                    return t % 2
                })))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: i.sort,
            splice: i.splice
        }, k.extend = k.fn.extend = function() {
            var e, t, n, a, r, i, s = arguments[0] || {},
                o = 1,
                d = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" == typeof s || y(s) || (s = {}), o === d && (s = this, o--); o < d; o++)
                if (null != (e = arguments[o]))
                    for (t in e) a = e[t], "__proto__" !== t && s !== a && (u && a && (k.isPlainObject(a) || (r = Array.isArray(a))) ? (n = s[t], i = r && !Array.isArray(n) ? [] : r || k.isPlainObject(n) ? n : {}, r = !1, s[t] = k.extend(u, i, a)) : void 0 !== a && (s[t] = a));
            return s
        }, k.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== _.call(e)) && (!(t = s(e)) || "function" == typeof(n = m.call(t, "constructor") && t.constructor) && h.call(n) === f)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                v(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, a = 0;
                if (w(e))
                    for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++);
                else
                    for (a in e)
                        if (!1 === t.call(e[a], a, e[a])) break; return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (w(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : l.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, a = 0, r = e.length; a < n; a++) e[r++] = t[a];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var a = [], r = 0, i = e.length, s = !n; r < i; r++) !t(e[r], r) !== s && a.push(e[r]);
                return a
            },
            map: function(e, t, n) {
                var a, r, i = 0,
                    s = [];
                if (w(e))
                    for (a = e.length; i < a; i++) null != (r = t(e[i], i, n)) && s.push(r);
                else
                    for (i in e) null != (r = t(e[i], i, n)) && s.push(r);
                return d(s)
            },
            guid: 1,
            support: p
        }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = i[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            c["[object " + t + "]"] = t.toLowerCase()
        }));
        var b =
            /*!
             * Sizzle CSS Selector Engine v2.3.5
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2020-03-14
             */
            function(e) {
                var t, n, a, r, i, s, o, d, u, l, c, _, m, h, f, p, y, M, g, L = "sizzle" + 1 * new Date,
                    v = e.document,
                    Y = 0,
                    k = 0,
                    w = de(),
                    b = de(),
                    D = de(),
                    T = de(),
                    S = function(e, t) {
                        return e === t && (c = !0), 0
                    },
                    x = {}.hasOwnProperty,
                    H = [],
                    j = H.pop,
                    O = H.push,
                    E = H.push,
                    C = H.slice,
                    A = function(e, t) {
                        for (var n = 0, a = e.length; n < a; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    W = "[\\x20\\t\\r\\n\\f]",
                    F = "(?:\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    N = "\\[" + W + "*(" + F + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + W + "*\\]",
                    z = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
                    R = new RegExp(W + "+", "g"),
                    I = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
                    U = new RegExp("^" + W + "*," + W + "*"),
                    J = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
                    B = new RegExp(W + "|>"),
                    q = new RegExp(z),
                    V = new RegExp("^" + F + "$"),
                    G = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        TAG: new RegExp("^(" + F + "|[*])"),
                        ATTR: new RegExp("^" + N),
                        PSEUDO: new RegExp("^" + z),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + P + ")$", "i"),
                        needsContext: new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", "i")
                    },
                    $ = /HTML$/i,
                    K = /^(?:input|select|textarea|button)$/i,
                    X = /^h\d$/i,
                    Z = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    re = function(e, t) {
                        return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ie = function() {
                        _()
                    },
                    se = Le((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    E.apply(H = C.call(v.childNodes), v.childNodes), H[v.childNodes.length].nodeType
                } catch (e) {
                    E = {
                        apply: H.length ? function(e, t) {
                            O.apply(e, C.call(t))
                        } : function(e, t) {
                            for (var n = e.length, a = 0; e[n++] = t[a++];);
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, a, r) {
                    var i, o, u, l, c, h, y, M = t && t.ownerDocument,
                        v = t ? t.nodeType : 9;
                    if (a = a || [], "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v) return a;
                    if (!r && (_(t), t = t || m, f)) {
                        if (11 !== v && (c = Q.exec(e)))
                            if (i = c[1]) {
                                if (9 === v) {
                                    if (!(u = t.getElementById(i))) return a;
                                    if (u.id === i) return a.push(u), a
                                } else if (M && (u = M.getElementById(i)) && g(t, u) && u.id === i) return a.push(u), a
                            } else {
                                if (c[2]) return E.apply(a, t.getElementsByTagName(e)), a;
                                if ((i = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return E.apply(a, t.getElementsByClassName(i)), a
                            }
                        if (n.qsa && !T[e + " "] && (!p || !p.test(e)) && (1 !== v || "object" !== t.nodeName.toLowerCase())) {
                            if (y = e, M = t, 1 === v && (B.test(e) || J.test(e))) {
                                for ((M = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((l = t.getAttribute("id")) ? l = l.replace(ae, re) : t.setAttribute("id", l = L)), o = (h = s(e)).length; o--;) h[o] = (l ? "#" + l : ":scope") + " " + ge(h[o]);
                                y = h.join(",")
                            }
                            try {
                                return E.apply(a, M.querySelectorAll(y)), a
                            } catch (t) {
                                T(e, !0)
                            } finally {
                                l === L && t.removeAttribute("id")
                            }
                        }
                    }
                    return d(e.replace(I, "$1"), t, a, r)
                }

                function de() {
                    var e = [];
                    return function t(n, r) {
                        return e.push(n + " ") > a.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }
                }

                function ue(e) {
                    return e[L] = !0, e
                }

                function le(e) {
                    var t = m.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ce(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) a.attrHandle[n[r]] = t
                }

                function _e(e, t) {
                    var n = t && e,
                        a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (a) return a;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function me(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function fe(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function pe(e) {
                    return ue((function(t) {
                        return t = +t, ue((function(n, a) {
                            for (var r, i = e([], n.length, t), s = i.length; s--;) n[r = i[s]] && (n[r] = !(a[r] = n[r]))
                        }))
                    }))
                }

                function ye(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = oe.support = {}, i = oe.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !$.test(t || n && n.nodeName || "HTML")
                    }, _ = oe.setDocument = function(e) {
                        var t, r, s = e ? e.ownerDocument || e : v;
                        return s != m && 9 === s.nodeType && s.documentElement ? (h = (m = s).documentElement, f = !i(m), v != m && (r = m.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.scope = le((function(e) {
                            return h.appendChild(e).appendChild(m.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = le((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = le((function(e) {
                            return e.appendChild(m.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = Z.test(m.getElementsByClassName), n.getById = le((function(e) {
                            return h.appendChild(e).id = L, !m.getElementsByName || !m.getElementsByName(L).length
                        })), n.getById ? (a.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, a.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && f) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (a.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, a.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && f) {
                                var n, a, r, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (r = t.getElementsByName(e), a = 0; i = r[a++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), a.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, a = [],
                                r = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[r++];) 1 === n.nodeType && a.push(n);
                                return a
                            }
                            return i
                        }, a.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e)
                        }, y = [], p = [], (n.qsa = Z.test(m.querySelectorAll)) && (le((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && p.push("[*^$]=" + W + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || p.push("\\[" + W + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + L + "-]").length || p.push("~="), (t = m.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + W + "*name" + W + "*=" + W + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || p.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll("\\\f"), p.push("[\\r\\n\\f]")
                        })), le((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = m.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && p.push("name" + W + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && p.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), p.push(",.*:")
                        }))), (n.matchesSelector = Z.test(M = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le((function(e) {
                            n.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), y.push("!=", z)
                        })), p = p.length && new RegExp(p.join("|")), y = y.length && new RegExp(y.join("|")), t = Z.test(h.compareDocumentPosition), g = t || Z.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                a = t && t.parentNode;
                            return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, S = t ? function(e, t) {
                            if (e === t) return c = !0, 0;
                            var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return a || (1 & (a = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === a ? e == m || e.ownerDocument == v && g(v, e) ? -1 : t == m || t.ownerDocument == v && g(v, t) ? 1 : l ? A(l, e) - A(l, t) : 0 : 4 & a ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return c = !0, 0;
                            var n, a = 0,
                                r = e.parentNode,
                                i = t.parentNode,
                                s = [e],
                                o = [t];
                            if (!r || !i) return e == m ? -1 : t == m ? 1 : r ? -1 : i ? 1 : l ? A(l, e) - A(l, t) : 0;
                            if (r === i) return _e(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) o.unshift(n);
                            for (; s[a] === o[a];) a++;
                            return a ? _e(s[a], o[a]) : s[a] == v ? -1 : o[a] == v ? 1 : 0
                        }, m) : m
                    }, oe.matches = function(e, t) {
                        return oe(e, null, null, t)
                    }, oe.matchesSelector = function(e, t) {
                        if (_(e), n.matchesSelector && f && !T[t + " "] && (!y || !y.test(t)) && (!p || !p.test(t))) try {
                            var a = M.call(e, t);
                            if (a || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
                        } catch (e) {
                            T(t, !0)
                        }
                        return oe(t, m, null, [e]).length > 0
                    }, oe.contains = function(e, t) {
                        return (e.ownerDocument || e) != m && _(e), g(e, t)
                    }, oe.attr = function(e, t) {
                        (e.ownerDocument || e) != m && _(e);
                        var r = a.attrHandle[t.toLowerCase()],
                            i = r && x.call(a.attrHandle, t.toLowerCase()) ? r(e, t, !f) : void 0;
                        return void 0 !== i ? i : n.attributes || !f ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, oe.escape = function(e) {
                        return (e + "").replace(ae, re)
                    }, oe.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, oe.uniqueSort = function(e) {
                        var t, a = [],
                            r = 0,
                            i = 0;
                        if (c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), c) {
                            for (; t = e[i++];) t === e[i] && (r = a.push(i));
                            for (; r--;) e.splice(a[r], 1)
                        }
                        return l = null, e
                    }, r = oe.getText = function(e) {
                        var t, n = "",
                            a = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[a++];) n += r(t);
                        return n
                    }, (a = oe.selectors = {
                        cacheLength: 50,
                        createPseudo: ue,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && q.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = w[e + " "];
                                return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && w(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(a) {
                                    var r = oe.attr(a, e);
                                    return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, a, r) {
                                var i = "nth" !== e.slice(0, 3),
                                    s = "last" !== e.slice(-4),
                                    o = "of-type" === t;
                                return 1 === a && 0 === r ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, d) {
                                    var u, l, c, _, m, h, f = i !== s ? "nextSibling" : "previousSibling",
                                        p = t.parentNode,
                                        y = o && t.nodeName.toLowerCase(),
                                        M = !d && !o,
                                        g = !1;
                                    if (p) {
                                        if (i) {
                                            for (; f;) {
                                                for (_ = t; _ = _[f];)
                                                    if (o ? _.nodeName.toLowerCase() === y : 1 === _.nodeType) return !1;
                                                h = f = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [s ? p.firstChild : p.lastChild], s && M) {
                                            for (g = (m = (u = (l = (c = (_ = p)[L] || (_[L] = {}))[_.uniqueID] || (c[_.uniqueID] = {}))[e] || [])[0] === Y && u[1]) && u[2], _ = m && p.childNodes[m]; _ = ++m && _ && _[f] || (g = m = 0) || h.pop();)
                                                if (1 === _.nodeType && ++g && _ === t) {
                                                    l[e] = [Y, m, g];
                                                    break
                                                }
                                        } else if (M && (g = m = (u = (l = (c = (_ = t)[L] || (_[L] = {}))[_.uniqueID] || (c[_.uniqueID] = {}))[e] || [])[0] === Y && u[1]), !1 === g)
                                            for (;
                                                (_ = ++m && _ && _[f] || (g = m = 0) || h.pop()) && ((o ? _.nodeName.toLowerCase() !== y : 1 !== _.nodeType) || !++g || (M && ((l = (c = _[L] || (_[L] = {}))[_.uniqueID] || (c[_.uniqueID] = {}))[e] = [Y, g]), _ !== t)););
                                        return (g -= r) === a || g % a == 0 && g / a >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = a.pseudos[e] || a.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                                return r[L] ? r(t) : r.length > 1 ? (n = [e, e, "", t], a.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                                    for (var a, i = r(e, t), s = i.length; s--;) e[a = A(e, i[s])] = !(n[a] = i[s])
                                })) : function(e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: ue((function(e) {
                                var t = [],
                                    n = [],
                                    a = o(e.replace(I, "$1"));
                                return a[L] ? ue((function(e, t, n, r) {
                                    for (var i, s = a(e, null, r, []), o = e.length; o--;)(i = s[o]) && (e[o] = !(t[o] = i))
                                })) : function(e, r, i) {
                                    return t[0] = e, a(t, null, i, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: ue((function(e) {
                                return function(t) {
                                    return oe(e, t).length > 0
                                }
                            })),
                            contains: ue((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || r(t)).indexOf(e) > -1
                                    }
                            })),
                            lang: ue((function(e) {
                                return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: fe(!1),
                            disabled: fe(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !a.pseudos.empty(e)
                            },
                            header: function(e) {
                                return X.test(e.nodeName)
                            },
                            input: function(e) {
                                return K.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: pe((function() {
                                return [0]
                            })),
                            last: pe((function(e, t) {
                                return [t - 1]
                            })),
                            eq: pe((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: pe((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: pe((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: pe((function(e, t, n) {
                                for (var a = n < 0 ? n + t : n > t ? t : n; --a >= 0;) e.push(a);
                                return e
                            })),
                            gt: pe((function(e, t, n) {
                                for (var a = n < 0 ? n + t : n; ++a < t;) e.push(a);
                                return e
                            }))
                        }
                    }).pseudos.nth = a.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) a.pseudos[t] = me(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) a.pseudos[t] = he(t);

                function Me() {}

                function ge(e) {
                    for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
                    return a
                }

                function Le(e, t, n) {
                    var a = t.dir,
                        r = t.next,
                        i = r || a,
                        s = n && "parentNode" === i,
                        o = k++;
                    return t.first ? function(t, n, r) {
                        for (; t = t[a];)
                            if (1 === t.nodeType || s) return e(t, n, r);
                        return !1
                    } : function(t, n, d) {
                        var u, l, c, _ = [Y, o];
                        if (d) {
                            for (; t = t[a];)
                                if ((1 === t.nodeType || s) && e(t, n, d)) return !0
                        } else
                            for (; t = t[a];)
                                if (1 === t.nodeType || s)
                                    if (l = (c = t[L] || (t[L] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[a] || t;
                                    else {
                                        if ((u = l[i]) && u[0] === Y && u[1] === o) return _[2] = u[2];
                                        if (l[i] = _, _[2] = e(t, n, d)) return !0
                                    } return !1
                    }
                }

                function ve(e) {
                    return e.length > 1 ? function(t, n, a) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, a)) return !1;
                        return !0
                    } : e[0]
                }

                function Ye(e, t, n, a, r) {
                    for (var i, s = [], o = 0, d = e.length, u = null != t; o < d; o++)(i = e[o]) && (n && !n(i, a, r) || (s.push(i), u && t.push(o)));
                    return s
                }

                function ke(e, t, n, a, r, i) {
                    return a && !a[L] && (a = ke(a)), r && !r[L] && (r = ke(r, i)), ue((function(i, s, o, d) {
                        var u, l, c, _ = [],
                            m = [],
                            h = s.length,
                            f = i || function(e, t, n) {
                                for (var a = 0, r = t.length; a < r; a++) oe(e, t[a], n);
                                return n
                            }(t || "*", o.nodeType ? [o] : o, []),
                            p = !e || !i && t ? f : Ye(f, _, e, o, d),
                            y = n ? r || (i ? e : h || a) ? [] : s : p;
                        if (n && n(p, y, o, d), a)
                            for (u = Ye(y, m), a(u, [], o, d), l = u.length; l--;)(c = u[l]) && (y[m[l]] = !(p[m[l]] = c));
                        if (i) {
                            if (r || e) {
                                if (r) {
                                    for (u = [], l = y.length; l--;)(c = y[l]) && u.push(p[l] = c);
                                    r(null, y = [], u, d)
                                }
                                for (l = y.length; l--;)(c = y[l]) && (u = r ? A(i, c) : _[l]) > -1 && (i[u] = !(s[u] = c))
                            }
                        } else y = Ye(y === s ? y.splice(h, y.length) : y), r ? r(null, s, y, d) : E.apply(s, y)
                    }))
                }

                function we(e) {
                    for (var t, n, r, i = e.length, s = a.relative[e[0].type], o = s || a.relative[" "], d = s ? 1 : 0, l = Le((function(e) {
                            return e === t
                        }), o, !0), c = Le((function(e) {
                            return A(t, e) > -1
                        }), o, !0), _ = [function(e, n, a) {
                            var r = !s && (a || n !== u) || ((t = n).nodeType ? l(e, n, a) : c(e, n, a));
                            return t = null, r
                        }]; d < i; d++)
                        if (n = a.relative[e[d].type]) _ = [Le(ve(_), n)];
                        else {
                            if ((n = a.filter[e[d].type].apply(null, e[d].matches))[L]) {
                                for (r = ++d; r < i && !a.relative[e[r].type]; r++);
                                return ke(d > 1 && ve(_), d > 1 && ge(e.slice(0, d - 1).concat({
                                    value: " " === e[d - 2].type ? "*" : ""
                                })).replace(I, "$1"), n, d < r && we(e.slice(d, r)), r < i && we(e = e.slice(r)), r < i && ge(e))
                            }
                            _.push(n)
                        }
                    return ve(_)
                }
                return Me.prototype = a.filters = a.pseudos, a.setFilters = new Me, s = oe.tokenize = function(e, t) {
                    var n, r, i, s, o, d, u, l = b[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (o = e, d = [], u = a.preFilter; o;) {
                        for (s in n && !(r = U.exec(o)) || (r && (o = o.slice(r[0].length) || o), d.push(i = [])), n = !1, (r = J.exec(o)) && (n = r.shift(), i.push({
                                value: n,
                                type: r[0].replace(I, " ")
                            }), o = o.slice(n.length)), a.filter) !(r = G[s].exec(o)) || u[s] && !(r = u[s](r)) || (n = r.shift(), i.push({
                            value: n,
                            type: s,
                            matches: r
                        }), o = o.slice(n.length));
                        if (!n) break
                    }
                    return t ? o.length : o ? oe.error(e) : b(e, d).slice(0)
                }, o = oe.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = D[e + " "];
                    if (!o) {
                        for (t || (t = s(e)), n = t.length; n--;)(o = we(t[n]))[L] ? r.push(o) : i.push(o);
                        (o = D(e, function(e, t) {
                            var n = t.length > 0,
                                r = e.length > 0,
                                i = function(i, s, o, d, l) {
                                    var c, h, p, y = 0,
                                        M = "0",
                                        g = i && [],
                                        L = [],
                                        v = u,
                                        k = i || r && a.find.TAG("*", l),
                                        w = Y += null == v ? 1 : Math.random() || .1,
                                        b = k.length;
                                    for (l && (u = s == m || s || l); M !== b && null != (c = k[M]); M++) {
                                        if (r && c) {
                                            for (h = 0, s || c.ownerDocument == m || (_(c), o = !f); p = e[h++];)
                                                if (p(c, s || m, o)) {
                                                    d.push(c);
                                                    break
                                                }
                                            l && (Y = w)
                                        }
                                        n && ((c = !p && c) && y--, i && g.push(c))
                                    }
                                    if (y += M, n && M !== y) {
                                        for (h = 0; p = t[h++];) p(g, L, s, o);
                                        if (i) {
                                            if (y > 0)
                                                for (; M--;) g[M] || L[M] || (L[M] = j.call(d));
                                            L = Ye(L)
                                        }
                                        E.apply(d, L), l && !i && L.length > 0 && y + t.length > 1 && oe.uniqueSort(d)
                                    }
                                    return l && (Y = w, u = v), g
                                };
                            return n ? ue(i) : i
                        }(i, r))).selector = e
                    }
                    return o
                }, d = oe.select = function(e, t, n, r) {
                    var i, d, u, l, c, _ = "function" == typeof e && e,
                        m = !r && s(e = _.selector || e);
                    if (n = n || [], 1 === m.length) {
                        if ((d = m[0] = m[0].slice(0)).length > 2 && "ID" === (u = d[0]).type && 9 === t.nodeType && f && a.relative[d[1].type]) {
                            if (!(t = (a.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                            _ && (t = t.parentNode), e = e.slice(d.shift().value.length)
                        }
                        for (i = G.needsContext.test(e) ? 0 : d.length; i-- && (u = d[i], !a.relative[l = u.type]);)
                            if ((c = a.find[l]) && (r = c(u.matches[0].replace(te, ne), ee.test(d[0].type) && ye(t.parentNode) || t))) {
                                if (d.splice(i, 1), !(e = r.length && ge(d))) return E.apply(n, r), n;
                                break
                            }
                    }
                    return (_ || o(e, m))(r, t, !f, n, !t || ee.test(e) && ye(t.parentNode) || t), n
                }, n.sortStable = L.split("").sort(S).join("") === L, n.detectDuplicates = !!c, _(), n.sortDetached = le((function(e) {
                    return 1 & e.compareDocumentPosition(m.createElement("fieldset"))
                })), le((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || ce("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && le((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || ce("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), le((function(e) {
                    return null == e.getAttribute("disabled")
                })) || ce(P, (function(e, t, n) {
                    var a;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
                })), oe
            }(n);
        k.find = b, k.expr = b.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = b.uniqueSort, k.text = b.getText, k.isXMLDoc = b.isXML, k.contains = b.contains, k.escapeSelector = b.escape;
        var D = function(e, t, n) {
                for (var a = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && k(e).is(n)) break;
                        a.push(e)
                    }
                return a
            },
            T = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            S = k.expr.match.needsContext;

        function x(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var H = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function j(e, t, n) {
            return y(t) ? k.grep(e, (function(e, a) {
                return !!t.call(e, a, e) !== n
            })) : t.nodeType ? k.grep(e, (function(e) {
                return e === t !== n
            })) : "string" != typeof t ? k.grep(e, (function(e) {
                return l.call(t, e) > -1 !== n
            })) : k.filter(t, e, n)
        }
        k.filter = function(e, t, n) {
            var a = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? k.find.matchesSelector(a, e) ? [a] : [] : k.find.matches(e, k.grep(t, (function(e) {
                return 1 === e.nodeType
            })))
        }, k.fn.extend({
            find: function(e) {
                var t, n, a = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(k(e).filter((function() {
                    for (t = 0; t < a; t++)
                        if (k.contains(r[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < a; t++) k.find(e, r[t], n);
                return a > 1 ? k.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(j(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(j(this, e || [], !0))
            },
            is: function(e) {
                return !!j(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1).length
            }
        });
        var O, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (k.fn.init = function(e, t, n) {
            var a, r;
            if (!e) return this;
            if (n = n || O, "string" == typeof e) {
                if (!(a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : E.exec(e)) || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (a[1]) {
                    if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), H.test(a[1]) && k.isPlainObject(t))
                        for (a in t) y(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                    return this
                }
                return (r = g.getElementById(a[2])) && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
        }).prototype = k.fn, O = k(g);
        var C = /^(?:parents|prev(?:Until|All))/,
            A = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function P(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        k.fn.extend({
            has: function(e) {
                var t = k(e, this),
                    n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (k.contains(this, t[e])) return !0
                }))
            },
            closest: function(e, t) {
                var n, a = 0,
                    r = this.length,
                    i = [],
                    s = "string" != typeof e && k(e);
                if (!S.test(e))
                    for (; a < r; a++)
                        for (n = this[a]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            }
                return this.pushStack(i.length > 1 ? k.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? l.call(k(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), k.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return D(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return D(e, "parentNode", n)
            },
            next: function(e) {
                return P(e, "nextSibling")
            },
            prev: function(e) {
                return P(e, "previousSibling")
            },
            nextAll: function(e) {
                return D(e, "nextSibling")
            },
            prevAll: function(e) {
                return D(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return D(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return D(e, "previousSibling", n)
            },
            siblings: function(e) {
                return T((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return T(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (x(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
            }
        }, (function(e, t) {
            k.fn[e] = function(n, a) {
                var r = k.map(this, t, n);
                return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (r = k.filter(a, r)), this.length > 1 && (A[e] || k.uniqueSort(r), C.test(e) && r.reverse()), this.pushStack(r)
            }
        }));
        var W = /[^\x20\t\r\n\f]+/g;

        function F(e) {
            return e
        }

        function N(e) {
            throw e
        }

        function z(e, t, n, a) {
            var r;
            try {
                e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(a))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        k.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return k.each(e.match(W) || [], (function(e, n) {
                    t[n] = !0
                })), t
            }(e) : k.extend({}, e);
            var t, n, a, r, i = [],
                s = [],
                o = -1,
                d = function() {
                    for (r = r || e.once, a = t = !0; s.length; o = -1)
                        for (n = s.shift(); ++o < i.length;) !1 === i[o].apply(n[0], n[1]) && e.stopOnFalse && (o = i.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (i = n ? [] : "")
                },
                u = {
                    add: function() {
                        return i && (n && !t && (o = i.length - 1, s.push(n)), function t(n) {
                            k.each(n, (function(n, a) {
                                y(a) ? e.unique && u.has(a) || i.push(a) : a && a.length && "string" !== Y(a) && t(a)
                            }))
                        }(arguments), n && !t && d()), this
                    },
                    remove: function() {
                        return k.each(arguments, (function(e, t) {
                            for (var n;
                                (n = k.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= o && o--
                        })), this
                    },
                    has: function(e) {
                        return e ? k.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []), this
                    },
                    disable: function() {
                        return r = s = [], i = n = "", this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return r = s = [], n || t || (i = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || d()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!a
                    }
                };
            return u
        }, k.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                        ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                    ],
                    a = "pending",
                    r = {
                        state: function() {
                            return a
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return r.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return k.Deferred((function(n) {
                                k.each(t, (function(t, a) {
                                    var r = y(e[a[4]]) && e[a[4]];
                                    i[a[1]]((function() {
                                        var e = r && r.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this, r ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        then: function(e, a, r) {
                            var i = 0;

                            function s(e, t, a, r) {
                                return function() {
                                    var o = this,
                                        d = arguments,
                                        u = function() {
                                            var n, u;
                                            if (!(e < i)) {
                                                if ((n = a.apply(o, d)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, y(u) ? r ? u.call(n, s(i, t, F, r), s(i, t, N, r)) : (i++, u.call(n, s(i, t, F, r), s(i, t, N, r), s(i, t, F, t.notifyWith))) : (a !== F && (o = void 0, d = [n]), (r || t.resolveWith)(o, d))
                                            }
                                        },
                                        l = r ? u : function() {
                                            try {
                                                u()
                                            } catch (n) {
                                                k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= i && (a !== N && (o = void 0, d = [n]), t.rejectWith(o, d))
                                            }
                                        };
                                    e ? l() : (k.Deferred.getStackHook && (l.stackTrace = k.Deferred.getStackHook()), n.setTimeout(l))
                                }
                            }
                            return k.Deferred((function(n) {
                                t[0][3].add(s(0, n, y(r) ? r : F, n.notifyWith)), t[1][3].add(s(0, n, y(e) ? e : F)), t[2][3].add(s(0, n, y(a) ? a : N))
                            })).promise()
                        },
                        promise: function(e) {
                            return null != e ? k.extend(e, r) : r
                        }
                    },
                    i = {};
                return k.each(t, (function(e, n) {
                    var s = n[2],
                        o = n[5];
                    r[n[1]] = s.add, o && s.add((function() {
                        a = o
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[n[0] + "With"] = s.fireWith
                })), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    a = Array(n),
                    r = o.call(arguments),
                    i = k.Deferred(),
                    s = function(e) {
                        return function(n) {
                            a[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || i.resolveWith(a, r)
                        }
                    };
                if (t <= 1 && (z(e, i.done(s(n)).resolve, i.reject, !t), "pending" === i.state() || y(r[n] && r[n].then))) return i.then();
                for (; n--;) z(r[n], s(n), i.reject);
                return i.promise()
            }
        });
        var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        k.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && R.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, k.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }))
        };
        var I = k.Deferred();

        function U() {
            g.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), k.ready()
        }
        k.fn.ready = function(e) {
            return I.then(e).catch((function(e) {
                k.readyException(e)
            })), this
        }, k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== e && --k.readyWait > 0 || I.resolveWith(g, [k]))
            }
        }), k.ready.then = I.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? n.setTimeout(k.ready) : (g.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));
        var J = function(e, t, n, a, r, i, s) {
                var o = 0,
                    d = e.length,
                    u = null == n;
                if ("object" === Y(n))
                    for (o in r = !0, n) J(e, t, o, n[o], !0, i, s);
                else if (void 0 !== a && (r = !0, y(a) || (s = !0), u && (s ? (t.call(e, a), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(k(e), n)
                    })), t))
                    for (; o < d; o++) t(e[o], n, s ? a : a.call(e[o], o, t(e[o], n)));
                return r ? e : u ? t.call(e) : d ? t(e[0], n) : i
            },
            B = /^-ms-/,
            q = /-([a-z])/g;

        function V(e, t) {
            return t.toUpperCase()
        }

        function G(e) {
            return e.replace(B, "ms-").replace(q, V)
        }
        var $ = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function K() {
            this.expando = k.expando + K.uid++
        }
        K.uid = 1, K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var a, r = this.cache(e);
                if ("string" == typeof t) r[G(t)] = n;
                else
                    for (a in t) r[G(a)] = t[a];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, a = e[this.expando];
                if (void 0 !== a) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in a ? [t] : t.match(W) || []).length;
                        for (; n--;) delete a[t[n]]
                    }(void 0 === t || k.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t)
            }
        };
        var X = new K,
            Z = new K,
            Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;

        function te(e, t, n) {
            var a;
            if (void 0 === n && 1 === e.nodeType)
                if (a = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(a))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Z.set(e, t, n)
                } else n = void 0;
            return n
        }
        k.extend({
            hasData: function(e) {
                return Z.hasData(e) || X.hasData(e)
            },
            data: function(e, t, n) {
                return Z.access(e, t, n)
            },
            removeData: function(e, t) {
                Z.remove(e, t)
            },
            _data: function(e, t, n) {
                return X.access(e, t, n)
            },
            _removeData: function(e, t) {
                X.remove(e, t)
            }
        }), k.fn.extend({
            data: function(e, t) {
                var n, a, r, i = this[0],
                    s = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Z.get(i), 1 === i.nodeType && !X.get(i, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (a = s[n].name).indexOf("data-") && (a = G(a.slice(5)), te(i, a, r[a]));
                        X.set(i, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each((function() {
                    Z.set(this, e)
                })) : J(this, (function(t) {
                    var n;
                    if (i && void 0 === t) return void 0 !== (n = Z.get(i, e)) || void 0 !== (n = te(i, e)) ? n : void 0;
                    this.each((function() {
                        Z.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    Z.remove(this, e)
                }))
            }
        }), k.extend({
            queue: function(e, t, n) {
                var a;
                if (e) return t = (t || "fx") + "queue", a = X.get(e, t), n && (!a || Array.isArray(n) ? a = X.access(e, t, k.makeArray(n)) : a.push(n)), a || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = k.queue(e, t),
                    a = n.length,
                    r = n.shift(),
                    i = k._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), a--), r && ("fx" === t && n.unshift("inprogress"), delete i.stop, r.call(e, (function() {
                    k.dequeue(e, t)
                }), i)), !a && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return X.get(e, n) || X.access(e, n, {
                    empty: k.Callbacks("once memory").add((function() {
                        X.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), k.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? k.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = k.queue(this, e, t);
                    k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e)
                }))
            },
            dequeue: function(e) {
                return this.each((function() {
                    k.dequeue(this, e)
                }))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, a = 1,
                    r = k.Deferred(),
                    i = this,
                    s = this.length,
                    o = function() {
                        --a || r.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = X.get(i[s], e + "queueHooks")) && n.empty && (a++, n.empty.add(o));
                return o(), r.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ae = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            ie = g.documentElement,
            se = function(e) {
                return k.contains(e.ownerDocument, e)
            },
            oe = {
                composed: !0
            };
        ie.getRootNode && (se = function(e) {
            return k.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
        });
        var de = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === k.css(e, "display")
        };

        function ue(e, t, n, a) {
            var r, i, s = 20,
                o = a ? function() {
                    return a.cur()
                } : function() {
                    return k.css(e, t, "")
                },
                d = o(),
                u = n && n[3] || (k.cssNumber[t] ? "" : "px"),
                l = e.nodeType && (k.cssNumber[t] || "px" !== u && +d) && ae.exec(k.css(e, t));
            if (l && l[3] !== u) {
                for (d /= 2, u = u || l[3], l = +d || 1; s--;) k.style(e, t, l + u), (1 - i) * (1 - (i = o() / d || .5)) <= 0 && (s = 0), l /= i;
                l *= 2, k.style(e, t, l + u), n = n || []
            }
            return n && (l = +l || +d || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], a && (a.unit = u, a.start = l, a.end = r)), r
        }
        var le = {};

        function ce(e) {
            var t, n = e.ownerDocument,
                a = e.nodeName,
                r = le[a];
            return r || (t = n.body.appendChild(n.createElement(a)), r = k.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), le[a] = r, r)
        }

        function _e(e, t) {
            for (var n, a, r = [], i = 0, s = e.length; i < s; i++)(a = e[i]).style && (n = a.style.display, t ? ("none" === n && (r[i] = X.get(a, "display") || null, r[i] || (a.style.display = "")), "" === a.style.display && de(a) && (r[i] = ce(a))) : "none" !== n && (r[i] = "none", X.set(a, "display", n)));
            for (i = 0; i < s; i++) null != r[i] && (e[i].style.display = r[i]);
            return e
        }
        k.fn.extend({
            show: function() {
                return _e(this, !0)
            },
            hide: function() {
                return _e(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    de(this) ? k(this).show() : k(this).hide()
                }))
            }
        });
        var me, he, fe = /^(?:checkbox|radio)$/i,
            pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
        me = g.createDocumentFragment().appendChild(g.createElement("div")), (he = g.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), me.appendChild(he), p.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue, me.innerHTML = "<option></option>", p.option = !!me.lastChild;
        var Me = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function ge(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && x(e, t) ? k.merge([e], n) : n
        }

        function Le(e, t) {
            for (var n = 0, a = e.length; n < a; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
        }
        Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, p.option || (Me.optgroup = Me.option = [1, "<select multiple='multiple'>", "</select>"]);
        var ve = /<|&#?\w+;/;

        function Ye(e, t, n, a, r) {
            for (var i, s, o, d, u, l, c = t.createDocumentFragment(), _ = [], m = 0, h = e.length; m < h; m++)
                if ((i = e[m]) || 0 === i)
                    if ("object" === Y(i)) k.merge(_, i.nodeType ? [i] : i);
                    else if (ve.test(i)) {
                for (s = s || c.appendChild(t.createElement("div")), o = (pe.exec(i) || ["", ""])[1].toLowerCase(), d = Me[o] || Me._default, s.innerHTML = d[1] + k.htmlPrefilter(i) + d[2], l = d[0]; l--;) s = s.lastChild;
                k.merge(_, s.childNodes), (s = c.firstChild).textContent = ""
            } else _.push(t.createTextNode(i));
            for (c.textContent = "", m = 0; i = _[m++];)
                if (a && k.inArray(i, a) > -1) r && r.push(i);
                else if (u = se(i), s = ge(c.appendChild(i), "script"), u && Le(s), n)
                for (l = 0; i = s[l++];) ye.test(i.type || "") && n.push(i);
            return c
        }
        var ke = /^key/,
            we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            be = /^([^.]*)(?:\.(.+)|)/;

        function De() {
            return !0
        }

        function Te() {
            return !1
        }

        function Se(e, t) {
            return e === function() {
                try {
                    return g.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function xe(e, t, n, a, r, i) {
            var s, o;
            if ("object" == typeof t) {
                for (o in "string" != typeof n && (a = a || n, n = void 0), t) xe(e, o, n, a, t[o], i);
                return e
            }
            if (null == a && null == r ? (r = n, a = n = void 0) : null == r && ("string" == typeof n ? (r = a, a = void 0) : (r = a, a = n, n = void 0)), !1 === r) r = Te;
            else if (!r) return e;
            return 1 === i && (s = r, (r = function(e) {
                return k().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = k.guid++)), e.each((function() {
                k.event.add(this, t, r, a, n)
            }))
        }

        function He(e, t, n) {
            n ? (X.set(e, t, !1), k.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var a, r, i = X.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (i.length)(k.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (i = o.call(arguments), X.set(this, t, i), a = n(this, t), this[t](), i !== (r = X.get(this, t)) || a ? X.set(this, t, !1) : r = {}, i !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                    } else i.length && (X.set(this, t, {
                        value: k.event.trigger(k.extend(i[0], k.Event.prototype), i.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === X.get(e, t) && k.event.add(e, t, De)
        }
        k.event = {
            global: {},
            add: function(e, t, n, a, r) {
                var i, s, o, d, u, l, c, _, m, h, f, p = X.get(e);
                if ($(e))
                    for (n.handler && (n = (i = n).handler, r = i.selector), r && k.find.matchesSelector(ie, r), n.guid || (n.guid = k.guid++), (d = p.events) || (d = p.events = Object.create(null)), (s = p.handle) || (s = p.handle = function(t) {
                            return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
                        }), u = (t = (t || "").match(W) || [""]).length; u--;) m = f = (o = be.exec(t[u]) || [])[1], h = (o[2] || "").split(".").sort(), m && (c = k.event.special[m] || {}, m = (r ? c.delegateType : c.bindType) || m, c = k.event.special[m] || {}, l = k.extend({
                        type: m,
                        origType: f,
                        data: a,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && k.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, i), (_ = d[m]) || ((_ = d[m] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, a, h, s) || e.addEventListener && e.addEventListener(m, s)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), r ? _.splice(_.delegateCount++, 0, l) : _.push(l), k.event.global[m] = !0)
            },
            remove: function(e, t, n, a, r) {
                var i, s, o, d, u, l, c, _, m, h, f, p = X.hasData(e) && X.get(e);
                if (p && (d = p.events)) {
                    for (u = (t = (t || "").match(W) || [""]).length; u--;)
                        if (m = f = (o = be.exec(t[u]) || [])[1], h = (o[2] || "").split(".").sort(), m) {
                            for (c = k.event.special[m] || {}, _ = d[m = (a ? c.delegateType : c.bindType) || m] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = _.length; i--;) l = _[i], !r && f !== l.origType || n && n.guid !== l.guid || o && !o.test(l.namespace) || a && a !== l.selector && ("**" !== a || !l.selector) || (_.splice(i, 1), l.selector && _.delegateCount--, c.remove && c.remove.call(e, l));
                            s && !_.length && (c.teardown && !1 !== c.teardown.call(e, h, p.handle) || k.removeEvent(e, m, p.handle), delete d[m])
                        } else
                            for (m in d) k.event.remove(e, m + t[u], n, a, !0);
                    k.isEmptyObject(d) && X.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, a, r, i, s, o = new Array(arguments.length),
                    d = k.event.fix(e),
                    u = (X.get(this, "events") || Object.create(null))[d.type] || [],
                    l = k.event.special[d.type] || {};
                for (o[0] = d, t = 1; t < arguments.length; t++) o[t] = arguments[t];
                if (d.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, d)) {
                    for (s = k.event.handlers.call(this, d, u), t = 0;
                        (r = s[t++]) && !d.isPropagationStopped();)
                        for (d.currentTarget = r.elem, n = 0;
                            (i = r.handlers[n++]) && !d.isImmediatePropagationStopped();) d.rnamespace && !1 !== i.namespace && !d.rnamespace.test(i.namespace) || (d.handleObj = i, d.data = i.data, void 0 !== (a = ((k.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, o)) && !1 === (d.result = a) && (d.preventDefault(), d.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, d), d.result
                }
            },
            handlers: function(e, t) {
                var n, a, r, i, s, o = [],
                    d = t.delegateCount,
                    u = e.target;
                if (d && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (i = [], s = {}, n = 0; n < d; n++) void 0 === s[r = (a = t[n]).selector + " "] && (s[r] = a.needsContext ? k(r, this).index(u) > -1 : k.find(r, this, null, [u]).length), s[r] && i.push(a);
                            i.length && o.push({
                                elem: u,
                                handlers: i
                            })
                        }
                return u = this, d < t.length && o.push({
                    elem: u,
                    handlers: t.slice(d)
                }), o
            },
            addProp: function(e, t) {
                Object.defineProperty(k.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[k.expando] ? e : new k.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return fe.test(t.type) && t.click && x(t, "input") && He(t, "click", De), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return fe.test(t.type) && t.click && x(t, "input") && He(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return fe.test(t.type) && t.click && x(t, "input") && X.get(t, "click") || x(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, k.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, k.Event = function(e, t) {
            if (!(this instanceof k.Event)) return new k.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? De : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
        }, k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = De, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = De, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = De, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, k.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, k.event.addProp), k.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            k.event.special[e] = {
                setup: function() {
                    return He(this, e, Se), !1
                },
                trigger: function() {
                    return He(this, e), !0
                },
                delegateType: t
            }
        })), k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            k.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, a = this,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    return r && (r === a || k.contains(a, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), k.fn.extend({
            on: function(e, t, n, a) {
                return xe(this, e, t, n, a)
            },
            one: function(e, t, n, a) {
                return xe(this, e, t, n, a, 1)
            },
            off: function(e, t, n) {
                var a, r;
                if (e && e.preventDefault && e.handleObj) return a = e.handleObj, k(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each((function() {
                    k.event.remove(this, e, n, t)
                }))
            }
        });
        var je = /<script|<style|<link/i,
            Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ce(e, t) {
            return x(e, "table") && x(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
        }

        function Ae(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Pe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function We(e, t) {
            var n, a, r, i, s, o;
            if (1 === t.nodeType) {
                if (X.hasData(e) && (o = X.get(e).events))
                    for (r in X.remove(t, "handle events"), o)
                        for (n = 0, a = o[r].length; n < a; n++) k.event.add(t, r, o[r][n]);
                Z.hasData(e) && (i = Z.access(e), s = k.extend({}, i), Z.set(t, s))
            }
        }

        function Fe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Ne(e, t, n, a) {
            t = d(t);
            var r, i, s, o, u, l, c = 0,
                _ = e.length,
                m = _ - 1,
                h = t[0],
                f = y(h);
            if (f || _ > 1 && "string" == typeof h && !p.checkClone && Oe.test(h)) return e.each((function(r) {
                var i = e.eq(r);
                f && (t[0] = h.call(this, r, i.html())), Ne(i, t, n, a)
            }));
            if (_ && (i = (r = Ye(t, e[0].ownerDocument, !1, e, a)).firstChild, 1 === r.childNodes.length && (r = i), i || a)) {
                for (o = (s = k.map(ge(r, "script"), Ae)).length; c < _; c++) u = r, c !== m && (u = k.clone(u, !0, !0), o && k.merge(s, ge(u, "script"))), n.call(e[c], u, c);
                if (o)
                    for (l = s[s.length - 1].ownerDocument, k.map(s, Pe), c = 0; c < o; c++) u = s[c], ye.test(u.type || "") && !X.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : v(u.textContent.replace(Ee, ""), u, l))
            }
            return e
        }

        function ze(e, t, n) {
            for (var a, r = t ? k.filter(t, e) : e, i = 0; null != (a = r[i]); i++) n || 1 !== a.nodeType || k.cleanData(ge(a)), a.parentNode && (n && se(a) && Le(ge(a, "script")), a.parentNode.removeChild(a));
            return e
        }
        k.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var a, r, i, s, o = e.cloneNode(!0),
                    d = se(e);
                if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                    for (s = ge(o), a = 0, r = (i = ge(e)).length; a < r; a++) Fe(i[a], s[a]);
                if (t)
                    if (n)
                        for (i = i || ge(e), s = s || ge(o), a = 0, r = i.length; a < r; a++) We(i[a], s[a]);
                    else We(e, o);
                return (s = ge(o, "script")).length > 0 && Le(s, !d && ge(e, "script")), o
            },
            cleanData: function(e) {
                for (var t, n, a, r = k.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if ($(n)) {
                        if (t = n[X.expando]) {
                            if (t.events)
                                for (a in t.events) r[a] ? k.event.remove(n, a) : k.removeEvent(n, a, t.handle);
                            n[X.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }), k.fn.extend({
            detach: function(e) {
                return ze(this, e, !0)
            },
            remove: function(e) {
                return ze(this, e)
            },
            text: function(e) {
                return J(this, (function(e) {
                    return void 0 === e ? k.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            },
            append: function() {
                return Ne(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ce(this, e).appendChild(e)
                }))
            },
            prepend: function() {
                return Ne(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Ce(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function() {
                return Ne(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            },
            after: function() {
                return Ne(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ge(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                    return k.clone(this, e, t)
                }))
            },
            html: function(e) {
                return J(this, (function(e) {
                    var t = this[0] || {},
                        n = 0,
                        a = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !je.test(e) && !Me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = k.htmlPrefilter(e);
                        try {
                            for (; n < a; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ge(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Ne(this, arguments, (function(t) {
                    var n = this.parentNode;
                    k.inArray(this, e) < 0 && (k.cleanData(ge(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            k.fn[e] = function(e) {
                for (var n, a = [], r = k(e), i = r.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), k(r[s])[t](n), u.apply(a, n.get());
                return this.pushStack(a)
            }
        }));
        var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            Ie = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            Ue = function(e, t, n) {
                var a, r, i = {};
                for (r in t) i[r] = e.style[r], e.style[r] = t[r];
                for (r in a = n.call(e), t) e.style[r] = i[r];
                return a
            },
            Je = new RegExp(re.join("|"), "i");

        function Be(e, t, n) {
            var a, r, i, s, o = e.style;
            return (n = n || Ie(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = k.style(e, t)), !p.pixelBoxStyles() && Re.test(s) && Je.test(t) && (a = o.width, r = o.minWidth, i = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = a, o.minWidth = r, o.maxWidth = i)), void 0 !== s ? s + "" : s
        }

        function qe(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (l) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(u).appendChild(l);
                    var e = n.getComputedStyle(l);
                    a = "1%" !== e.top, d = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), ie.removeChild(u), l = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var a, r, i, s, o, d, u = g.createElement("div"),
                l = g.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === l.style.backgroundClip, k.extend(p, {
                boxSizingReliable: function() {
                    return e(), r
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), a
                },
                reliableMarginLeft: function() {
                    return e(), d
                },
                scrollboxSize: function() {
                    return e(), i
                },
                reliableTrDimensions: function() {
                    var e, t, a, r;
                    return null == o && (e = g.createElement("table"), t = g.createElement("tr"), a = g.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", a.style.height = "9px", ie.appendChild(e).appendChild(t).appendChild(a), r = n.getComputedStyle(t), o = parseInt(r.height) > 3, ie.removeChild(e)), o
                }
            }))
        }();
        var Ve = ["Webkit", "Moz", "ms"],
            Ge = g.createElement("div").style,
            $e = {};

        function Ke(e) {
            var t = k.cssProps[e] || $e[e];
            return t || (e in Ge ? e : $e[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                    if ((e = Ve[n] + t) in Ge) return e
            }(e) || e)
        }
        var Xe = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            Qe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            et = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function tt(e, t, n) {
            var a = ae.exec(t);
            return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
        }

        function nt(e, t, n, a, r, i) {
            var s = "width" === t ? 1 : 0,
                o = 0,
                d = 0;
            if (n === (a ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (d += k.css(e, n + re[s], !0, r)), a ? ("content" === n && (d -= k.css(e, "padding" + re[s], !0, r)), "margin" !== n && (d -= k.css(e, "border" + re[s] + "Width", !0, r))) : (d += k.css(e, "padding" + re[s], !0, r), "padding" !== n ? d += k.css(e, "border" + re[s] + "Width", !0, r) : o += k.css(e, "border" + re[s] + "Width", !0, r));
            return !a && i >= 0 && (d += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - d - o - .5)) || 0), d
        }

        function at(e, t, n) {
            var a = Ie(e),
                r = (!p.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, a),
                i = r,
                s = Be(e, t, a),
                o = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Re.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!p.boxSizingReliable() && r || !p.reliableTrDimensions() && x(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === k.css(e, "display", !1, a)) && e.getClientRects().length && (r = "border-box" === k.css(e, "boxSizing", !1, a), (i = o in e) && (s = e[o])), (s = parseFloat(s) || 0) + nt(e, t, n || (r ? "border" : "content"), i, a, s) + "px"
        }

        function rt(e, t, n, a, r) {
            return new rt.prototype.init(e, t, n, a, r)
        }
        k.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Be(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, a) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, i, s, o = G(t),
                        d = Ze.test(t),
                        u = e.style;
                    if (d || (t = Ke(o)), s = k.cssHooks[t] || k.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, a)) ? r : u[t];
                    "string" === (i = typeof n) && (r = ae.exec(n)) && r[1] && (n = ue(e, t, r), i = "number"), null != n && n == n && ("number" !== i || d || (n += r && r[3] || (k.cssNumber[o] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, a)) || (d ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function(e, t, n, a) {
                var r, i, s, o = G(t);
                return Ze.test(t) || (t = Ke(o)), (s = k.cssHooks[t] || k.cssHooks[o]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Be(e, t, a)), "normal" === r && t in et && (r = et[t]), "" === n || n ? (i = parseFloat(r), !0 === n || isFinite(i) ? i || 0 : r) : r
            }
        }), k.each(["height", "width"], (function(e, t) {
            k.cssHooks[t] = {
                get: function(e, n, a) {
                    if (n) return !Xe.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? at(e, t, a) : Ue(e, Qe, (function() {
                        return at(e, t, a)
                    }))
                },
                set: function(e, n, a) {
                    var r, i = Ie(e),
                        s = !p.scrollboxSize() && "absolute" === i.position,
                        o = (s || a) && "border-box" === k.css(e, "boxSizing", !1, i),
                        d = a ? nt(e, t, a, o, i) : 0;
                    return o && s && (d -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - nt(e, t, "border", !1, i) - .5)), d && (r = ae.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = k.css(e, t)), tt(0, n, d)
                }
            }
        })), k.cssHooks.marginLeft = qe(p.reliableMarginLeft, (function(e, t) {
            if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), k.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            k.cssHooks[e + t] = {
                expand: function(n) {
                    for (var a = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) r[e + re[a] + t] = i[a] || i[a - 2] || i[0];
                    return r
                }
            }, "margin" !== e && (k.cssHooks[e + t].set = tt)
        })), k.fn.extend({
            css: function(e, t) {
                return J(this, (function(e, t, n) {
                    var a, r, i = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (a = Ie(e), r = t.length; s < r; s++) i[t[s]] = k.css(e, t[s], !1, a);
                        return i
                    }
                    return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), k.Tween = rt, rt.prototype = {
            constructor: rt,
            init: function(e, t, n, a, r, i) {
                this.elem = e, this.prop = n, this.easing = r || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = i || (k.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = rt.propHooks[this.prop];
                return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = rt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
            }
        }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, k.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, k.fx = rt.prototype.init, k.fx.step = {};
        var it, st, ot = /^(?:toggle|show|hide)$/,
            dt = /queueHooks$/;

        function ut() {
            st && (!1 === g.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ut) : n.setTimeout(ut, k.fx.interval), k.fx.tick())
        }

        function lt() {
            return n.setTimeout((function() {
                it = void 0
            })), it = Date.now()
        }

        function ct(e, t) {
            var n, a = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; a < 4; a += 2 - t) r["margin" + (n = re[a])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function _t(e, t, n) {
            for (var a, r = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), i = 0, s = r.length; i < s; i++)
                if (a = r[i].call(n, t, e)) return a
        }

        function mt(e, t, n) {
            var a, r, i = 0,
                s = mt.prefilters.length,
                o = k.Deferred().always((function() {
                    delete d.elem
                })),
                d = function() {
                    if (r) return !1;
                    for (var t = it || lt(), n = Math.max(0, u.startTime + u.duration - t), a = 1 - (n / u.duration || 0), i = 0, s = u.tweens.length; i < s; i++) u.tweens[i].run(a);
                    return o.notifyWith(e, [u, a, n]), a < 1 && s ? n : (s || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1)
                },
                u = o.promise({
                    elem: e,
                    props: k.extend({}, t),
                    opts: k.extend(!0, {
                        specialEasing: {},
                        easing: k.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: it || lt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var a = k.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(a), a
                    },
                    stop: function(t) {
                        var n = 0,
                            a = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < a; n++) u.tweens[n].run(1);
                        return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this
                    }
                }),
                l = u.props;
            for (! function(e, t) {
                    var n, a, r, i, s;
                    for (n in e)
                        if (r = t[a = G(n)], i = e[n], Array.isArray(i) && (r = i[1], i = e[n] = i[0]), n !== a && (e[a] = i, delete e[n]), (s = k.cssHooks[a]) && "expand" in s)
                            for (n in i = s.expand(i), delete e[a], i) n in e || (e[n] = i[n], t[n] = r);
                        else t[a] = r
                }(l, u.opts.specialEasing); i < s; i++)
                if (a = mt.prefilters[i].call(u, e, l, u.opts)) return y(a.stop) && (k._queueHooks(u.elem, u.opts.queue).stop = a.stop.bind(a)), a;
            return k.map(l, _t, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), k.fx.timer(k.extend(d, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        k.Animation = k.extend(mt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ue(n.elem, e, ae.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    y(e) ? (t = e, e = ["*"]) : e = e.match(W);
                    for (var n, a = 0, r = e.length; a < r; a++) n = e[a], mt.tweeners[n] = mt.tweeners[n] || [], mt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var a, r, i, s, o, d, u, l, c = "width" in t || "height" in t,
                        _ = this,
                        m = {},
                        h = e.style,
                        f = e.nodeType && de(e),
                        p = X.get(e, "fxshow");
                    for (a in n.queue || (null == (s = k._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
                            s.unqueued || o()
                        }), s.unqueued++, _.always((function() {
                            _.always((function() {
                                s.unqueued--, k.queue(e, "fx").length || s.empty.fire()
                            }))
                        }))), t)
                        if (r = t[a], ot.test(r)) {
                            if (delete t[a], i = i || "toggle" === r, r === (f ? "hide" : "show")) {
                                if ("show" !== r || !p || void 0 === p[a]) continue;
                                f = !0
                            }
                            m[a] = p && p[a] || k.style(e, a)
                        }
                    if ((d = !k.isEmptyObject(t)) || !k.isEmptyObject(m))
                        for (a in c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = p && p.display) && (u = X.get(e, "display")), "none" === (l = k.css(e, "display")) && (u ? l = u : (_e([e], !0), u = e.style.display || u, l = k.css(e, "display"), _e([e]))), ("inline" === l || "inline-block" === l && null != u) && "none" === k.css(e, "float") && (d || (_.done((function() {
                                h.display = u
                            })), null == u && (l = h.display, u = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", _.always((function() {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            }))), d = !1, m) d || (p ? "hidden" in p && (f = p.hidden) : p = X.access(e, "fxshow", {
                            display: u
                        }), i && (p.hidden = !f), f && _e([e], !0), _.done((function() {
                            for (a in f || _e([e]), X.remove(e, "fxshow"), m) k.style(e, a, m[a])
                        }))), d = _t(f ? p[a] : 0, a, _), a in p || (p[a] = d.start, f && (d.end = d.start, d.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? mt.prefilters.unshift(e) : mt.prefilters.push(e)
                }
            }), k.speed = function(e, t, n) {
                var a = e && "object" == typeof e ? k.extend({}, e) : {
                    complete: n || !n && t || y(e) && e,
                    duration: e,
                    easing: n && t || t && !y(t) && t
                };
                return k.fx.off ? a.duration = 0 : "number" != typeof a.duration && (a.duration in k.fx.speeds ? a.duration = k.fx.speeds[a.duration] : a.duration = k.fx.speeds._default), null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                    y(a.old) && a.old.call(this), a.queue && k.dequeue(this, a.queue)
                }, a
            }, k.fn.extend({
                fadeTo: function(e, t, n, a) {
                    return this.filter(de).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, a)
                },
                animate: function(e, t, n, a) {
                    var r = k.isEmptyObject(e),
                        i = k.speed(t, n, a),
                        s = function() {
                            var t = mt(this, k.extend({}, e), i);
                            (r || X.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, r || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
                },
                stop: function(e, t, n) {
                    var a = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            i = k.timers,
                            s = X.get(this);
                        if (r) s[r] && s[r].stop && a(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && dt.test(r) && a(s[r]);
                        for (r = i.length; r--;) i[r].elem !== this || null != e && i[r].queue !== e || (i[r].anim.stop(n), t = !1, i.splice(r, 1));
                        !t && n || k.dequeue(this, e)
                    }))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = X.get(this),
                            a = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            i = k.timers,
                            s = a ? a.length : 0;
                        for (n.finish = !0, k.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; t < s; t++) a[t] && a[t].finish && a[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), k.each(["toggle", "show", "hide"], (function(e, t) {
                var n = k.fn[t];
                k.fn[t] = function(e, a, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, a, r)
                }
            })), k.each({
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                k.fn[e] = function(e, n, a) {
                    return this.animate(t, e, n, a)
                }
            })), k.timers = [], k.fx.tick = function() {
                var e, t = 0,
                    n = k.timers;
                for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || k.fx.stop(), it = void 0
            }, k.fx.timer = function(e) {
                k.timers.push(e), k.fx.start()
            }, k.fx.interval = 13, k.fx.start = function() {
                st || (st = !0, ut())
            }, k.fx.stop = function() {
                st = null
            }, k.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, k.fn.delay = function(e, t) {
                return e = k.fx && k.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, a) {
                    var r = n.setTimeout(t, e);
                    a.stop = function() {
                        n.clearTimeout(r)
                    }
                }))
            },
            function() {
                var e = g.createElement("input"),
                    t = g.createElement("select").appendChild(g.createElement("option"));
                e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = g.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
            }();
        var ht, ft = k.expr.attrHandle;
        k.fn.extend({
            attr: function(e, t) {
                return J(this, k.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    k.removeAttr(this, e)
                }))
            }
        }), k.extend({
            attr: function(e, t, n) {
                var a, r, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === i && k.isXMLDoc(e) || (r = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (a = r.get(e, t)) ? a : null == (a = k.find.attr(e, t)) ? void 0 : a)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!p.radioValue && "radio" === t && x(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, a = 0,
                    r = t && t.match(W);
                if (r && 1 === e.nodeType)
                    for (; n = r[a++];) e.removeAttribute(n)
            }
        }), ht = {
            set: function(e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, k.each(k.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = ft[t] || k.find.attr;
            ft[t] = function(e, t, a) {
                var r, i, s = t.toLowerCase();
                return a || (i = ft[s], ft[s] = r, r = null != n(e, t, a) ? s : null, ft[s] = i), r
            }
        }));
        var pt = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;

        function Mt(e) {
            return (e.match(W) || []).join(" ")
        }

        function gt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Lt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(W) || []
        }
        k.fn.extend({
            prop: function(e, t) {
                return J(this, k.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[k.propFix[e] || e]
                }))
            }
        }), k.extend({
            prop: function(e, t, n) {
                var a, r, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && k.isXMLDoc(e) || (t = k.propFix[t] || t, r = k.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : e[t] = n : r && "get" in r && null !== (a = r.get(e, t)) ? a : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = k.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : pt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), p.optSelected || (k.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            k.propFix[this.toLowerCase()] = this
        })), k.fn.extend({
            addClass: function(e) {
                var t, n, a, r, i, s, o, d = 0;
                if (y(e)) return this.each((function(t) {
                    k(this).addClass(e.call(this, t, gt(this)))
                }));
                if ((t = Lt(e)).length)
                    for (; n = this[d++];)
                        if (r = gt(n), a = 1 === n.nodeType && " " + Mt(r) + " ") {
                            for (s = 0; i = t[s++];) a.indexOf(" " + i + " ") < 0 && (a += i + " ");
                            r !== (o = Mt(a)) && n.setAttribute("class", o)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, a, r, i, s, o, d = 0;
                if (y(e)) return this.each((function(t) {
                    k(this).removeClass(e.call(this, t, gt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = Lt(e)).length)
                    for (; n = this[d++];)
                        if (r = gt(n), a = 1 === n.nodeType && " " + Mt(r) + " ") {
                            for (s = 0; i = t[s++];)
                                for (; a.indexOf(" " + i + " ") > -1;) a = a.replace(" " + i + " ", " ");
                            r !== (o = Mt(a)) && n.setAttribute("class", o)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    a = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function(n) {
                    k(this).toggleClass(e.call(this, n, gt(this), t), t)
                })) : this.each((function() {
                    var t, r, i, s;
                    if (a)
                        for (r = 0, i = k(this), s = Lt(e); t = s[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = gt(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, a = 0;
                for (t = " " + e + " "; n = this[a++];)
                    if (1 === n.nodeType && (" " + Mt(gt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var vt = /\r/g;
        k.fn.extend({
            val: function(e) {
                var t, n, a, r = this[0];
                return arguments.length ? (a = y(e), this.each((function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = a ? e.call(this, n, k(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = k.map(r, (function(e) {
                        return null == e ? "" : e + ""
                    }))), (t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                }))) : r ? (t = k.valHooks[r.type] || k.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
            }
        }), k.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = k.find.attr(e, "value");
                        return null != t ? t : Mt(k.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, a, r = e.options,
                            i = e.selectedIndex,
                            s = "select-one" === e.type,
                            o = s ? null : [],
                            d = s ? i + 1 : r.length;
                        for (a = i < 0 ? d : s ? i : 0; a < d; a++)
                            if (((n = r[a]).selected || a === i) && !n.disabled && (!n.parentNode.disabled || !x(n.parentNode, "optgroup"))) {
                                if (t = k(n).val(), s) return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function(e, t) {
                        for (var n, a, r = e.options, i = k.makeArray(t), s = r.length; s--;)((a = r[s]).selected = k.inArray(k.valHooks.option.get(a), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), k.each(["radio", "checkbox"], (function() {
            k.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = k.inArray(k(e).val(), t) > -1
                }
            }, p.checkOn || (k.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), p.focusin = "onfocusin" in n;
        var Yt = /^(?:focusinfocus|focusoutblur)$/,
            kt = function(e) {
                e.stopPropagation()
            };
        k.extend(k.event, {
            trigger: function(e, t, a, r) {
                var i, s, o, d, u, l, c, _, h = [a || g],
                    f = m.call(e, "type") ? e.type : e,
                    p = m.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = _ = o = a = a || g, 3 !== a.nodeType && 8 !== a.nodeType && !Yt.test(f + k.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, (e = e[k.expando] ? e : new k.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = a), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[f] || {}, r || !c.trigger || !1 !== c.trigger.apply(a, t))) {
                    if (!r && !c.noBubble && !M(a)) {
                        for (d = c.delegateType || f, Yt.test(d + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), o = s;
                        o === (a.ownerDocument || g) && h.push(o.defaultView || o.parentWindow || n)
                    }
                    for (i = 0;
                        (s = h[i++]) && !e.isPropagationStopped();) _ = s, e.type = i > 1 ? d : c.bindType || f, (l = (X.get(s, "events") || Object.create(null))[e.type] && X.get(s, "handle")) && l.apply(s, t), (l = u && s[u]) && l.apply && $(s) && (e.result = l.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = f, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !$(a) || u && y(a[f]) && !M(a) && ((o = a[u]) && (a[u] = null), k.event.triggered = f, e.isPropagationStopped() && _.addEventListener(f, kt), a[f](), e.isPropagationStopped() && _.removeEventListener(f, kt), k.event.triggered = void 0, o && (a[u] = o)), e.result
                }
            },
            simulate: function(e, t, n) {
                var a = k.extend(new k.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                k.event.trigger(a, null, t)
            }
        }), k.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    k.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return k.event.trigger(e, t, n, !0)
            }
        }), p.focusin || k.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                k.event.simulate(t, e.target, k.event.fix(e))
            };
            k.event.special[t] = {
                setup: function() {
                    var a = this.ownerDocument || this.document || this,
                        r = X.access(a, t);
                    r || a.addEventListener(e, n, !0), X.access(a, t, (r || 0) + 1)
                },
                teardown: function() {
                    var a = this.ownerDocument || this.document || this,
                        r = X.access(a, t) - 1;
                    r ? X.access(a, t, r) : (a.removeEventListener(e, n, !0), X.remove(a, t))
                }
            }
        }));
        var wt = n.location,
            bt = {
                guid: Date.now()
            },
            Dt = /\?/;
        k.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
        };
        var Tt = /\[\]$/,
            St = /\r?\n/g,
            xt = /^(?:submit|button|image|reset|file)$/i,
            Ht = /^(?:input|select|textarea|keygen)/i;

        function jt(e, t, n, a) {
            var r;
            if (Array.isArray(t)) k.each(t, (function(t, r) {
                n || Tt.test(e) ? a(e, r) : jt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, a)
            }));
            else if (n || "object" !== Y(t)) a(e, t);
            else
                for (r in t) jt(e + "[" + r + "]", t[r], n, a)
        }
        k.param = function(e, t) {
            var n, a = [],
                r = function(e, t) {
                    var n = y(t) ? t() : t;
                    a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, (function() {
                r(this.name, this.value)
            }));
            else
                for (n in e) jt(n, e[n], t, r);
            return a.join("&")
        }, k.fn.extend({
            serialize: function() {
                return k.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = k.prop(this, "elements");
                    return e ? k.makeArray(e) : this
                })).filter((function() {
                    var e = this.type;
                    return this.name && !k(this).is(":disabled") && Ht.test(this.nodeName) && !xt.test(e) && (this.checked || !fe.test(e))
                })).map((function(e, t) {
                    var n = k(this).val();
                    return null == n ? null : Array.isArray(n) ? k.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(St, "\r\n")
                        }
                    })) : {
                        name: t.name,
                        value: n.replace(St, "\r\n")
                    }
                })).get()
            }
        });
        var Ot = /%20/g,
            Et = /#.*$/,
            Ct = /([?&])_=[^&]*/,
            At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pt = /^(?:GET|HEAD)$/,
            Wt = /^\/\//,
            Ft = {},
            Nt = {},
            zt = "*/".concat("*"),
            Rt = g.createElement("a");

        function It(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var a, r = 0,
                    i = t.toLowerCase().match(W) || [];
                if (y(n))
                    for (; a = i[r++];) "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
            }
        }

        function Ut(e, t, n, a) {
            var r = {},
                i = e === Nt;

            function s(o) {
                var d;
                return r[o] = !0, k.each(e[o] || [], (function(e, o) {
                    var u = o(t, n, a);
                    return "string" != typeof u || i || r[u] ? i ? !(d = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
                })), d
            }
            return s(t.dataTypes[0]) || !r["*"] && s("*")
        }

        function Jt(e, t) {
            var n, a, r = k.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : a || (a = {}))[n] = t[n]);
            return a && k.extend(!0, e, a), e
        }
        Rt.href = wt.href, k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": k.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Jt(Jt(e, k.ajaxSettings), t) : Jt(k.ajaxSettings, e)
            },
            ajaxPrefilter: It(Ft),
            ajaxTransport: It(Nt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var a, r, i, s, o, d, u, l, c, _, m = k.ajaxSetup({}, t),
                    h = m.context || m,
                    f = m.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                    p = k.Deferred(),
                    y = k.Callbacks("once memory"),
                    M = m.statusCode || {},
                    L = {},
                    v = {},
                    Y = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!s)
                                    for (s = {}; t = At.exec(i);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return u ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = v[e.toLowerCase()] = v[e.toLowerCase()] || e, L[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (m.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) w.always(e[w.status]);
                                else
                                    for (t in e) M[t] = [M[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || Y;
                            return a && a.abort(t), b(0, t), this
                        }
                    };
                if (p.promise(w), m.url = ((e || m.url || wt.href) + "").replace(Wt, wt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(W) || [""], null == m.crossDomain) {
                    d = g.createElement("a");
                    try {
                        d.href = m.url, d.href = d.href, m.crossDomain = Rt.protocol + "//" + Rt.host != d.protocol + "//" + d.host
                    } catch (e) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), Ut(Ft, m, t, w), u) return w;
                for (c in (l = k.event && m.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Pt.test(m.type), r = m.url.replace(Et, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ot, "+")) : (_ = m.url.slice(r.length), m.data && (m.processData || "string" == typeof m.data) && (r += (Dt.test(r) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (r = r.replace(Ct, "$1"), _ = (Dt.test(r) ? "&" : "?") + "_=" + bt.guid++ + _), m.url = r + _), m.ifModified && (k.lastModified[r] && w.setRequestHeader("If-Modified-Since", k.lastModified[r]), k.etag[r] && w.setRequestHeader("If-None-Match", k.etag[r])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : m.accepts["*"]), m.headers) w.setRequestHeader(c, m.headers[c]);
                if (m.beforeSend && (!1 === m.beforeSend.call(h, w, m) || u)) return w.abort();
                if (Y = "abort", y.add(m.complete), w.done(m.success), w.fail(m.error), a = Ut(Nt, m, t, w)) {
                    if (w.readyState = 1, l && f.trigger("ajaxSend", [w, m]), u) return w;
                    m.async && m.timeout > 0 && (o = n.setTimeout((function() {
                        w.abort("timeout")
                    }), m.timeout));
                    try {
                        u = !1, a.send(L, b)
                    } catch (e) {
                        if (u) throw e;
                        b(-1, e)
                    }
                } else b(-1, "No Transport");

                function b(e, t, s, d) {
                    var c, _, g, L, v, Y = t;
                    u || (u = !0, o && n.clearTimeout(o), a = void 0, i = d || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, s && (L = function(e, t, n) {
                        for (var a, r, i, s, o = e.contents, d = e.dataTypes;
                            "*" === d[0];) d.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (a)
                            for (r in o)
                                if (o[r] && o[r].test(a)) {
                                    d.unshift(r);
                                    break
                                }
                        if (d[0] in n) i = d[0];
                        else {
                            for (r in n) {
                                if (!d[0] || e.converters[r + " " + d[0]]) {
                                    i = r;
                                    break
                                }
                                s || (s = r)
                            }
                            i = i || s
                        }
                        if (i) return i !== d[0] && d.unshift(i), n[i]
                    }(m, w, s)), !c && k.inArray("script", m.dataTypes) > -1 && (m.converters["text script"] = function() {}), L = function(e, t, n, a) {
                        var r, i, s, o, d, u = {},
                            l = e.dataTypes.slice();
                        if (l[1])
                            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                        for (i = l.shift(); i;)
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !d && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = i, i = l.shift())
                                if ("*" === i) i = d;
                                else if ("*" !== d && d !== i) {
                            if (!(s = u[d + " " + i] || u["* " + i]))
                                for (r in u)
                                    if ((o = r.split(" "))[1] === i && (s = u[d + " " + o[0]] || u["* " + o[0]])) {
                                        !0 === s ? s = u[r] : !0 !== u[r] && (i = o[0], l.unshift(o[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + d + " to " + i
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(m, L, w, c), c ? (m.ifModified && ((v = w.getResponseHeader("Last-Modified")) && (k.lastModified[r] = v), (v = w.getResponseHeader("etag")) && (k.etag[r] = v)), 204 === e || "HEAD" === m.type ? Y = "nocontent" : 304 === e ? Y = "notmodified" : (Y = L.state, _ = L.data, c = !(g = L.error))) : (g = Y, !e && Y || (Y = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || Y) + "", c ? p.resolveWith(h, [_, Y, w]) : p.rejectWith(h, [w, Y, g]), w.statusCode(M), M = void 0, l && f.trigger(c ? "ajaxSuccess" : "ajaxError", [w, m, c ? _ : g]), y.fireWith(h, [w, Y]), l && (f.trigger("ajaxComplete", [w, m]), --k.active || k.event.trigger("ajaxStop")))
                }
                return w
            },
            getJSON: function(e, t, n) {
                return k.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return k.get(e, void 0, t, "script")
            }
        }), k.each(["get", "post"], (function(e, t) {
            k[t] = function(e, n, a, r) {
                return y(n) && (r = r || a, a = n, n = void 0), k.ajax(k.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: a
                }, k.isPlainObject(e) && e))
            }
        })), k.ajaxPrefilter((function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        })), k._evalUrl = function(e, t, n) {
            return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    k.globalEval(e, t, n)
                }
            })
        }, k.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            },
            wrapInner: function(e) {
                return y(e) ? this.each((function(t) {
                    k(this).wrapInner(e.call(this, t))
                })) : this.each((function() {
                    var t = k(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function(e) {
                var t = y(e);
                return this.each((function(n) {
                    k(this).wrapAll(t ? e.call(this, n) : e)
                }))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    k(this).replaceWith(this.childNodes)
                })), this
            }
        }), k.expr.pseudos.hidden = function(e) {
            return !k.expr.pseudos.visible(e)
        }, k.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, k.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Bt = {
                0: 200,
                1223: 204
            },
            qt = k.ajaxSettings.xhr();
        p.cors = !!qt && "withCredentials" in qt, p.ajax = qt = !!qt, k.ajaxTransport((function(e) {
            var t, a;
            if (p.cors || qt && !e.crossDomain) return {
                send: function(r, i) {
                    var s, o = e.xhr();
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) o[s] = e.xhrFields[s];
                    for (s in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) o.setRequestHeader(s, r[s]);
                    t = function(e) {
                        return function() {
                            t && (t = a = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? i(0, "error") : i(o.status, o.statusText) : i(Bt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                binary: o.response
                            } : {
                                text: o.responseText
                            }, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), a = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = a : o.onreadystatechange = function() {
                        4 === o.readyState && n.setTimeout((function() {
                            t && a()
                        }))
                    }, t = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        })), k.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        })), k.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return k.globalEval(e), e
                }
            }
        }), k.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), k.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function(a, r) {
                    t = k("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), g.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }));
        var Vt, Gt = [],
            $t = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Gt.pop() || k.expando + "_" + bt.guid++;
                return this[e] = !0, e
            }
        }), k.ajaxPrefilter("json jsonp", (function(e, t, a) {
            var r, i, s, o = !1 !== e.jsonp && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace($t, "$1" + r) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || k.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", i = n[r], n[r] = function() {
                s = arguments
            }, a.always((function() {
                void 0 === i ? k(n).removeProp(r) : n[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), s && y(i) && i(s[0]), s = i = void 0
            })), "script"
        })), p.createHTMLDocument = ((Vt = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((a = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(a)) : t = g), i = !n && [], (r = H.exec(e)) ? [t.createElement(r[1])] : (r = Ye([e], t, i), i && i.length && k(i).remove(), k.merge([], r.childNodes)));
            var a, r, i
        }, k.fn.load = function(e, t, n) {
            var a, r, i, s = this,
                o = e.indexOf(" ");
            return o > -1 && (a = Mt(e.slice(o)), e = e.slice(0, o)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && k.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                i = arguments, s.html(a ? k("<div>").append(k.parseHTML(e)).find(a) : e)
            })).always(n && function(e, t) {
                s.each((function() {
                    n.apply(this, i || [e.responseText, t, e])
                }))
            }), this
        }, k.expr.pseudos.animated = function(e) {
            return k.grep(k.timers, (function(t) {
                return e === t.elem
            })).length
        }, k.offset = {
            setOffset: function(e, t, n) {
                var a, r, i, s, o, d, u = k.css(e, "position"),
                    l = k(e),
                    c = {};
                "static" === u && (e.style.position = "relative"), o = l.offset(), i = k.css(e, "top"), d = k.css(e, "left"), ("absolute" === u || "fixed" === u) && (i + d).indexOf("auto") > -1 ? (s = (a = l.position()).top, r = a.left) : (s = parseFloat(i) || 0, r = parseFloat(d) || 0), y(t) && (t = t.call(e, n, k.extend({}, o))), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + r), "using" in t ? t.using.call(e, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), l.css(c))
            }
        }, k.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    k.offset.setOffset(this, e, t)
                }));
                var t, n, a = this[0];
                return a ? a.getClientRects().length ? (t = a.getBoundingClientRect(), n = a.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, a = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === k.css(a, "position")) t = a.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = a.ownerDocument, e = a.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                        e && e !== a && 1 === e.nodeType && ((r = k(e).offset()).top += k.css(e, "borderTopWidth", !0), r.left += k.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - r.top - k.css(a, "marginTop", !0),
                        left: t.left - r.left - k.css(a, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                    return e || ie
                }))
            }
        }), k.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            k.fn[e] = function(a) {
                return J(this, (function(e, a, r) {
                    var i;
                    if (M(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === r) return i ? i[t] : e[a];
                    i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : e[a] = r
                }), e, a, arguments.length)
            }
        })), k.each(["top", "left"], (function(e, t) {
            k.cssHooks[t] = qe(p.pixelPosition, (function(e, n) {
                if (n) return n = Be(e, t), Re.test(n) ? k(e).position()[t] + "px" : n
            }))
        })), k.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            k.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, a) {
                k.fn[a] = function(r, i) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        o = n || (!0 === r || !0 === i ? "margin" : "border");
                    return J(this, (function(t, n, r) {
                        var i;
                        return M(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? k.css(t, n, o) : k.style(t, n, r, o)
                    }), t, s ? r : void 0, s)
                }
            }))
        })), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            k.fn[t] = function(e) {
                return this.on(t, e)
            }
        })), k.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, a) {
                return this.on(t, e, n, a)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            k.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }));
        var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        k.proxy = function(e, t) {
            var n, a, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return a = o.call(arguments, 2), (r = function() {
                return e.apply(t || this, a.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || k.guid++, r
        }, k.holdReady = function(e) {
            e ? k.readyWait++ : k.ready(!0)
        }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = x, k.isFunction = y, k.isWindow = M, k.camelCase = G, k.type = Y, k.now = Date.now, k.isNumeric = function(e) {
            var t = k.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, k.trim = function(e) {
            return null == e ? "" : (e + "").replace(Kt, "")
        }, void 0 === (a = function() {
            return k
        }.apply(t, [])) || (e.exports = a);
        var Xt = n.jQuery,
            Zt = n.$;
        return k.noConflict = function(e) {
            return n.$ === k && (n.$ = Zt), e && n.jQuery === k && (n.jQuery = Xt), k
        }, void 0 === r && (n.jQuery = n.$ = k), k
    }))
}, function(e, t, n) {
    "use strict";
    var a = n(4),
        r = "object" == typeof self && self && self.Object === Object && self,
        i = a.a || r || Function("return this")();
    t.a = i
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var a = n(2),
            r = n(140),
            i = "object" == typeof exports && exports && !exports.nodeType && exports,
            s = i && "object" == typeof e && e && !e.nodeType && e,
            o = s && s.exports === i ? a.a.Buffer : void 0,
            d = (o ? o.isBuffer : void 0) || r.a;
        t.a = d
    }).call(this, n(139)(e))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }).call(this, n(144))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var a = n(4),
            r = "object" == typeof exports && exports && !exports.nodeType && exports,
            i = r && "object" == typeof e && e && !e.nodeType && e,
            s = i && i.exports === r && a.a.process,
            o = function() {
                try {
                    var e = i && i.require && i.require("util").types;
                    return e || s && s.binding && s.binding("util")
                } catch (e) {}
            }();
        t.a = o
    }).call(this, n(139)(e))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[MÃ´re om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "Ù¡",
                2: "Ù¢",
                3: "Ù£",
                4: "Ù¤",
                5: "Ù¥",
                6: "Ù¦",
                7: "Ù§",
                8: "Ù¨",
                9: "Ù©",
                0: "Ù "
            },
            n = {
                "Ù¡": "1",
                "Ù¢": "2",
                "Ù£": "3",
                "Ù¤": "4",
                "Ù¥": "5",
                "Ù¦": "6",
                "Ù§": "7",
                "Ù¨": "8",
                "Ù©": "9",
                "Ù ": "0"
            },
            a = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            r = {
                s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
            },
            i = function(e) {
                return function(t, n, i, s) {
                    var o = a(t),
                        d = r[e][a(t)];
                    return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            s = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar", {
            months: s,
            monthsShort: s,
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/â€M/â€YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function(e) {
                return "Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¨Ø¹Ø¯ %s",
                past: "Ù…Ù†Ø° %s",
                s: i("s"),
                ss: i("s"),
                m: i("m"),
                mm: i("m"),
                h: i("h"),
                hh: i("h"),
                d: i("d"),
                dd: i("d"),
                M: i("M"),
                MM: i("M"),
                y: i("y"),
                yy: i("y")
            },
            preparse: function(e) {
                return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, (function(e) {
                    return n[e]
                })).replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "ØŒ")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            n = {
                s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
            },
            a = function(e) {
                return function(a, r, i, s) {
                    var o = t(a),
                        d = n[e][t(a)];
                    return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, a)
                }
            },
            r = ["Ø¬Ø§Ù†ÙÙŠ", "ÙÙŠÙØ±ÙŠ", "Ù…Ø§Ø±Ø³", "Ø£ÙØ±ÙŠÙ„", "Ù…Ø§ÙŠ", "Ø¬ÙˆØ§Ù†", "Ø¬ÙˆÙŠÙ„ÙŠØ©", "Ø£ÙˆØª", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar-dz", {
            months: r,
            monthsShort: r,
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/â€M/â€YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function(e) {
                return "Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¨Ø¹Ø¯ %s",
                past: "Ù…Ù†Ø° %s",
                s: a("s"),
                ss: a("s"),
                m: a("m"),
                mm: a("m"),
                h: a("h"),
                hh: a("h"),
                d: a("d"),
                dd: a("d"),
                M: a("M"),
                MM: a("M"),
                y: a("y"),
                yy: a("y")
            },
            postformat: function(e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ar-kw", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            },
            n = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            a = {
                s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
            },
            r = function(e) {
                return function(t, r, i, s) {
                    var o = n(t),
                        d = a[e][n(t)];
                    return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            i = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar-ly", {
            months: i,
            monthsShort: i,
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/â€M/â€YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function(e) {
                return "Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¨Ø¹Ø¯ %s",
                past: "Ù…Ù†Ø° %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "ØŒ")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ar-ma", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø§Ø­Ø¯_Ø§Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "Ù¡",
                2: "Ù¢",
                3: "Ù£",
                4: "Ù¤",
                5: "Ù¥",
                6: "Ù¦",
                7: "Ù§",
                8: "Ù¨",
                9: "Ù©",
                0: "Ù "
            },
            n = {
                "Ù¡": "1",
                "Ù¢": "2",
                "Ù£": "3",
                "Ù¤": "4",
                "Ù¥": "5",
                "Ù¦": "6",
                "Ù§": "7",
                "Ù¨": "8",
                "Ù©": "9",
                "Ù ": "0"
            };
        e.defineLocale("ar-sa", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function(e) {
                return "Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            preparse: function(e) {
                return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, (function(e) {
                    return n[e]
                })).replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "ØŒ")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ar-tn", {
            months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                ss: "%d Ø«Ø§Ù†ÙŠØ©",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-Ã¼ncÃ¼",
            4: "-Ã¼ncÃ¼",
            100: "-Ã¼ncÃ¼",
            6: "-ncÄ±",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-Ä±ncÄ±",
            90: "-Ä±ncÄ±"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),
            weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),
            weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",
                lastDay: "[dÃ¼nÉ™n] LT",
                lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s É™vvÉ™l",
                s: "birneÃ§É™ saniyÉ™",
                ss: "%d saniyÉ™",
                m: "bir dÉ™qiqÉ™",
                mm: "%d dÉ™qiqÉ™",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
            isPM: function(e) {
                return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "gecÉ™" : e < 12 ? "sÉ™hÉ™r" : e < 17 ? "gÃ¼ndÃ¼z" : "axÅŸam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-Ä±ncÄ±";
                var n = e % 10;
                return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n) {
            var a, r;
            return "m" === n ? t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ" : "h" === n ? t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ" : e + " " + (a = +e, r = {
                ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
                mm: t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½",
                hh: t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½",
                dd: "Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½",
                MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž",
                yy: "Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž"
            }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2])
        }
        e.defineLocale("be", {
            months: {
                format: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_"),
                standalone: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_")
            },
            monthsShort: "ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),
            weekdays: {
                format: "Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                standalone: "Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                isFormat: /\[ ?[Ð£ÑƒÑž] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/
            },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ð³.",
                LLL: "D MMMM YYYY Ð³., HH:mm",
                LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
            },
            calendar: {
                sameDay: "[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",
                nextDay: "[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",
                lastDay: "[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",
                nextWeek: function() {
                    return "[Ð£] dddd [Ñž] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¿Ñ€Ð°Ð· %s",
                past: "%s Ñ‚Ð°Ð¼Ñƒ",
                s: "Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "Ð´Ð·ÐµÐ½ÑŒ",
                dd: t,
                M: "Ð¼ÐµÑÑÑ†",
                MM: t,
                y: "Ð³Ð¾Ð´",
                yy: t
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,
            isPM: function(e) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "Ð½Ð¾Ñ‡Ñ‹" : e < 12 ? "Ñ€Ð°Ð½Ñ–Ñ†Ñ‹" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð°Ñ€Ð°"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-Ñ‹" : e + "-Ñ–";
                    case "D":
                        return e + "-Ð³Ð°";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("bg", {
            months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "ÑÐ½Ñƒ_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",
                nextWeek: "dddd [Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[ÐœÐ¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[ÐœÐ¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "ÑÐ»ÐµÐ´ %s",
                past: "Ð¿Ñ€ÐµÐ´Ð¸ %s",
                s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
                m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                h: "Ñ‡Ð°Ñ",
                hh: "%d Ñ‡Ð°ÑÐ°",
                d: "Ð´ÐµÐ½",
                dd: "%d Ð´ÐµÐ½Ð°",
                M: "Ð¼ÐµÑÐµÑ†",
                MM: "%d Ð¼ÐµÑÐµÑ†Ð°",
                y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
                yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && n < 20 ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_MÉ›kalo_ZuwÉ›nkalo_Zuluyekalo_Utikalo_SÉ›tanburukalo_É”kutÉ”burukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_MÉ›_Zuw_Zul_Uti_SÉ›t_É”ku_Now_Des".split("_"),
            weekdays: "Kari_NtÉ›nÉ›n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_NtÉ›_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lÉ›rÉ›] LT",
                nextDay: "[Sini lÉ›rÉ›] LT",
                nextWeek: "dddd [don lÉ›rÉ›] LT",
                lastDay: "[Kunu lÉ›rÉ›] LT",
                lastWeek: "dddd [tÉ›mÉ›nen lÉ›rÉ›] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kÉ”nÉ”",
                past: "a bÉ› %s bÉ”",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lÉ›rÉ› kelen",
                hh: "lÉ›rÉ› %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "à§§",
                2: "à§¨",
                3: "à§©",
                4: "à§ª",
                5: "à§«",
                6: "à§¬",
                7: "à§­",
                8: "à§®",
                9: "à§¯",
                0: "à§¦"
            },
            n = {
                "à§§": "1",
                "à§¨": "2",
                "à§©": "3",
                "à§ª": "4",
                "à§«": "5",
                "à§¬": "6",
                "à§­": "7",
                "à§®": "8",
                "à§¯": "9",
                "à§¦": "0"
            };
        e.defineLocale("bn", {
            months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à¦¿_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
            monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬à§à¦°à§_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡".split("_"),
            weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
            weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
            weekdaysMin: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
            longDateFormat: {
                LT: "A h:mm à¦¸à¦®à§Ÿ",
                LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
            },
            calendar: {
                sameDay: "[à¦†à¦œ] LT",
                nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
                lastWeek: "[à¦—à¦¤] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¦ªà¦°à§‡",
                past: "%s à¦†à¦—à§‡",
                s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                ss: "%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
                hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
                d: "à¦à¦• à¦¦à¦¿à¦¨",
                dd: "%d à¦¦à¦¿à¦¨",
                M: "à¦à¦• à¦®à¦¾à¦¸",
                MM: "%d à¦®à¦¾à¦¸",
                y: "à¦à¦• à¦¬à¦›à¦°",
                yy: "%d à¦¬à¦›à¦°"
            },
            preparse: function(e) {
                return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¦°à¦¾à¦¤" === t && e >= 4 || "à¦¦à§à¦ªà§à¦°" === t && e < 5 || "à¦¬à¦¿à¦•à¦¾à¦²" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à¦°à¦¾à¦¤" : e < 10 ? "à¦¸à¦•à¦¾à¦²" : e < 17 ? "à¦¦à§à¦ªà§à¦°" : e < 20 ? "à¦¬à¦¿à¦•à¦¾à¦²" : "à¦°à¦¾à¦¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "à¼¡",
                2: "à¼¢",
                3: "à¼£",
                4: "à¼¤",
                5: "à¼¥",
                6: "à¼¦",
                7: "à¼§",
                8: "à¼¨",
                9: "à¼©",
                0: "à¼ "
            },
            n = {
                "à¼¡": "1",
                "à¼¢": "2",
                "à¼£": "3",
                "à¼¤": "4",
                "à¼¥": "5",
                "à¼¦": "6",
                "à¼§": "7",
                "à¼¨": "8",
                "à¼©": "9",
                "à¼ ": "0"
            };
        e.defineLocale("bo", {
            months: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
            monthsShort: "à½Ÿà¾³à¼‹1_à½Ÿà¾³à¼‹2_à½Ÿà¾³à¼‹3_à½Ÿà¾³à¼‹4_à½Ÿà¾³à¼‹5_à½Ÿà¾³à¼‹6_à½Ÿà¾³à¼‹7_à½Ÿà¾³à¼‹8_à½Ÿà¾³à¼‹9_à½Ÿà¾³à¼‹10_à½Ÿà¾³à¼‹11_à½Ÿà¾³à¼‹12".split("_"),
            monthsShortRegex: /^(à½Ÿà¾³à¼‹\d{1,2})/,
            monthsParseExact: !0,
            weekdays: "à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            weekdaysShort: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            weekdaysMin: "à½‰à½²_à½Ÿà¾³_à½˜à½²à½‚_à½£à¾·à½‚_à½•à½´à½¢_à½¦à½„à½¦_à½¦à¾¤à½ºà½“".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à½‘à½²à¼‹à½¢à½²à½„] LT",
                nextDay: "[à½¦à½„à¼‹à½‰à½²à½“] LT",
                nextWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",
                lastDay: "[à½à¼‹à½¦à½„] LT",
                lastWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à½£à¼‹",
                past: "%s à½¦à¾”à½“à¼‹à½£",
                s: "à½£à½˜à¼‹à½¦à½„",
                ss: "%d à½¦à¾à½¢à¼‹à½†à¼",
                m: "à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",
                mm: "%d à½¦à¾à½¢à¼‹à½˜",
                h: "à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",
                hh: "%d à½†à½´à¼‹à½šà½¼à½‘",
                d: "à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",
                dd: "%d à½‰à½²à½“à¼‹",
                M: "à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",
                MM: "%d à½Ÿà¾³à¼‹à½–",
                y: "à½£à½¼à¼‹à½‚à½…à½²à½‚",
                yy: "%d à½£à½¼"
            },
            preparse: function(e) {
                return e.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à½˜à½šà½“à¼‹à½˜à½¼" === t && e >= 4 || "à½‰à½²à½“à¼‹à½‚à½´à½„" === t && e < 5 || "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à½˜à½šà½“à¼‹à½˜à½¼" : e < 10 ? "à½žà½¼à½‚à½¦à¼‹à½€à½¦" : e < 17 ? "à½‰à½²à½“à¼‹à½‚à½´à½„" : e < 20 ? "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" : "à½˜à½šà½“à¼‹à½˜à½¼"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n) {
            return e + " " + function(e, t) {
                return 2 === t ? function(e) {
                    var t = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[n], e)
        }
        var n = [/^gen/i, /^c[Ê¼\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
            a = /^(genver|c[Ê¼\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[Ê¼\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            r = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        e.defineLocale("br", {
            months: "Genver_CÊ¼hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_CÊ¼hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_MercÊ¼her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParse: r,
            fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[Ê¼\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
            shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
            minWeekdaysParse: r,
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(genver|c[Ê¼\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
            monthsShortStrictRegex: /^(gen|c[Ê¼\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY HH:mm",
                LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[WarcÊ¼hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[DecÊ¼h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s Ê¼zo",
                s: "un nebeud segondennoÃ¹",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function(e) {
                    switch (function e(t) {
                        return t > 9 ? e(t % 10) : t
                    }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(aÃ±|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "aÃ±" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /a.m.|g.m./,
            isPM: function(e) {
                return "g.m." === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "a.m." : "g.m."
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "ss":
                    return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return a += 1 === e ? "dan" : "dana";
                case "MM":
                    return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de marÃ§_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._marÃ§_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquÃ­ %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "Ã¨";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
            n = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
            a = [/^led/i, /^Ãºno/i, /^bÅ™e/i, /^dub/i, /^kvÄ›/i, /^(Ävn|Äerven$|Äervna)/i, /^(Ävc|Äervenec|Äervence)/i, /^srp/i, /^zÃ¡Å™/i, /^Å™Ã­j/i, /^lis/i, /^pro/i],
            r = /^(leden|Ãºnor|bÅ™ezen|duben|kvÄ›ten|Äervenec|Äervence|Äerven|Äervna|srpen|zÃ¡Å™Ã­|Å™Ã­jen|listopad|prosinec|led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i;

        function i(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function s(e, t, n, a) {
            var r = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "pÃ¡r sekund" : "pÃ¡r sekundami";
                case "ss":
                    return t || a ? r + (i(e) ? "sekundy" : "sekund") : r + "sekundami";
                case "m":
                    return t ? "minuta" : a ? "minutu" : "minutou";
                case "mm":
                    return t || a ? r + (i(e) ? "minuty" : "minut") : r + "minutami";
                case "h":
                    return t ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return t || a ? r + (i(e) ? "hodiny" : "hodin") : r + "hodinami";
                case "d":
                    return t || a ? "den" : "dnem";
                case "dd":
                    return t || a ? r + (i(e) ? "dny" : "dnÃ­") : r + "dny";
                case "M":
                    return t || a ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
                case "MM":
                    return t || a ? r + (i(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : r + "mÄ›sÃ­ci";
                case "y":
                    return t || a ? "rok" : "rokem";
                case "yy":
                    return t || a ? r + (i(e) ? "roky" : "let") : r + "lety"
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(leden|ledna|Ãºnora|Ãºnor|bÅ™ezen|bÅ™ezna|duben|dubna|kvÄ›ten|kvÄ›tna|Äervenec|Äervence|Äerven|Äervna|srpen|srpna|zÃ¡Å™Ã­|Å™Ã­jen|Å™Ã­jna|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
            weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zÃ­tra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve stÅ™edu v] LT";
                        case 4:
                            return "[ve Ätvrtek v] LT";
                        case 5:
                            return "[v pÃ¡tek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[vÄera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[minulÃ©] dddd [v] LT";
                        case 3:
                            return "[minulou stÅ™edu v] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pÅ™ed %s",
                s: s,
                ss: s,
                m: s,
                mm: s,
                h: s,
                hh: s,
                d: s,
                dd: s,
                M: s,
                MM: s,
                y: s,
                yy: s
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("cv", {
            months: "ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),
            monthsShort: "ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),
            weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),
            weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼".split("_"),
            weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]",
                LLL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm",
                LLLL: "dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm"
            },
            calendar: {
                sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                lastDay: "[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                nextWeek: "[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/ÑÐµÑ…ÐµÑ‚$/i.exec(e) ? "Ñ€ÐµÐ½" : /Ò«ÑƒÐ»$/i.exec(e) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½")
                },
                past: "%s ÐºÐ°ÑÐ»Ð»Ð°",
                s: "Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
                ss: "%d Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
                m: "Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                h: "Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚",
                hh: "%d ÑÐµÑ…ÐµÑ‚",
                d: "Ð¿Ó—Ñ€ ÐºÑƒÐ½",
                dd: "%d ÐºÑƒÐ½",
                M: "Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…",
                MM: "%d ÑƒÐ¹Ó‘Ñ…",
                y: "Ð¿Ó—Ñ€ Ò«ÑƒÐ»",
                yy: "%d Ò«ÑƒÐ»"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-Ð¼Ó—Ñˆ/,
            ordinal: "%d-Ð¼Ó—Ñˆ",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn Ã´l",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = "";
                return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
            weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
            weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "pÃ¥ dddd [kl.] LT",
                lastDay: "[i gÃ¥r kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "fÃ¥ sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en mÃ¥ned",
                MM: "%d mÃ¥neder",
                y: "et Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            var r = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? r[n][0] : r[n][1]
        }
        e.defineLocale("de", {
            months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            var r = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? r[n][0] : r[n][1]
        }
        e.defineLocale("de-at", {
            months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "JÃ¤n._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            var r = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? r[n][0] : r[n][1]
        }
        e.defineLocale("de-ch", {
            months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                w: t,
                ww: "%d Wochen",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©", "ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©", "Þ‰Þ§ÞƒÞ¨Þ—Þª", "Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª", "Þ‰Þ­", "Þ–Þ«Þ‚Þ°", "Þ–ÞªÞÞ¦Þ‡Þ¨", "Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª", "ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª", "Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª"],
            n = ["Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦", "Þ€Þ¯Þ‰Þ¦", "Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦", "Þ„ÞªÞ‹Þ¦", "Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨", "Þ€ÞªÞ†ÞªÞƒÞª", "Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Þ‰Þ†|Þ‰ÞŠ/,
            isPM: function(e) {
                return "Þ‰ÞŠ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Þ‰Þ†" : "Þ‰ÞŠ"
            },
            calendar: {
                sameDay: "[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT",
                nextDay: "[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT",
                nextWeek: "dddd LT",
                lastDay: "[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT",
                lastWeek: "[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s",
                past: "Þ†ÞªÞƒÞ¨Þ‚Þ° %s",
                s: "ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°",
                ss: "d% ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞª",
                m: "Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°",
                mm: "Þ‰Þ¨Þ‚Þ¨Þ“Þª %d",
                h: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°",
                hh: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d",
                d: "Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°",
                dd: "Þ‹ÞªÞˆÞ¦ÞÞ° %d",
                M: "Þ‰Þ¦Þ€Þ¬Þ‡Þ°",
                MM: "Þ‰Þ¦ÞÞ° %d",
                y: "Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°",
                yy: "Þ‡Þ¦Þ€Þ¦ÞƒÞª %d"
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("el", {
            monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
            monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
            weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),
            weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),
            weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "Î¼Î¼" : "ÎœÎœ" : n ? "Ï€Î¼" : "Î Îœ"
            },
            isPM: function(e) {
                return "Î¼" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[Î Îœ]\.?Îœ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",
                nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
                        default:
                            return "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n, a = this._calendarEl[e],
                    r = t && t.hours();
                return n = a, ("undefined" != typeof Function && n instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (a = a.apply(t)), a.replace("{}", r % 12 == 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
            },
            relativeTime: {
                future: "ÏƒÎµ %s",
                past: "%s Ï€ÏÎ¹Î½",
                s: "Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                ss: "%d Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
                mm: "%d Î»ÎµÏ€Ï„Î¬",
                h: "Î¼Î¯Î± ÏŽÏÎ±",
                hh: "%d ÏŽÏÎµÏ‚",
                d: "Î¼Î¯Î± Î¼Î­ÏÎ±",
                dd: "%d Î¼Î­ÏÎµÏ‚",
                M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",
                MM: "%d Î¼Î®Î½ÎµÏ‚",
                y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",
                yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Î·/,
            ordinal: "%dÎ·",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-in", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-sg", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mart_apr_maj_jun_jul_aÅ­g_sept_okt_nov_dec".split("_"),
            weekdays: "dimanÄ‰o_lundo_mardo_merkredo_ÄµaÅ­do_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ÄµaÅ­_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_Äµa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "[la] D[-an de] MMMM, YYYY",
                LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[HodiaÅ­ je] LT",
                nextDay: "[MorgaÅ­ je] LT",
                nextWeek: "dddd[n je] LT",
                lastDay: "[HieraÅ­ je] LT",
                lastWeek: "[pasintan] dddd[n je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaÅ­ %s",
                s: "kelkaj sekundoj",
                ss: "%d sekundoj",
                m: "unu minuto",
                mm: "%d minutoj",
                h: "unu horo",
                hh: "%d horoj",
                d: "unu tago",
                dd: "%d tagoj",
                M: "unu monato",
                MM: "%d monatoj",
                y: "unu jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            },
            invalidDate: "Fecha invalida"
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            var r = {
                s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["Ã¼he minuti", "Ã¼ks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"],
                M: ["kuu aja", "kuu aega", "Ã¼ks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1]
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[TÃ¤na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[JÃ¤rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pÃ¤rast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d pÃ¤eva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "Û±",
                2: "Û²",
                3: "Û³",
                4: "Û´",
                5: "Ûµ",
                6: "Û¶",
                7: "Û·",
                8: "Û¸",
                9: "Û¹",
                0: "Û°"
            },
            n = {
                "Û±": "1",
                "Û²": "2",
                "Û³": "3",
                "Û´": "4",
                "Ûµ": "5",
                "Û¶": "6",
                "Û·": "7",
                "Û¸": "8",
                "Û¹": "9",
                "Û°": "0"
            };
        e.defineLocale("fa", {
            months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
            monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
            weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
            weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
            weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,
            isPM: function(e) {
                return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
            },
            calendar: {
                sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",
                nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT",
                lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¯Ø± %s",
                past: "%s Ù¾ÛŒØ´",
                s: "Ú†Ù†Ø¯ Ø«Ø§Ù†ÛŒÙ‡",
                ss: "%d Ø«Ø§Ù†ÛŒÙ‡",
                m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",
                mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡",
                h: "ÛŒÚ© Ø³Ø§Ø¹Øª",
                hh: "%d Ø³Ø§Ø¹Øª",
                d: "ÛŒÚ© Ø±ÙˆØ²",
                dd: "%d Ø±ÙˆØ²",
                M: "ÛŒÚ© Ù…Ø§Ù‡",
                MM: "%d Ù…Ø§Ù‡",
                y: "ÛŒÚ© Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function(e) {
                return e.replace(/[Û°-Û¹]/g, (function(e) {
                    return n[e]
                })).replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "ØŒ")
            },
            dayOfMonthOrdinalParse: /\d{1,2}Ù…/,
            ordinal: "%dÙ…",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", t[7], t[8], t[9]];

        function a(e, a, r, i) {
            var s = "";
            switch (r) {
                case "s":
                    return i ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    s = i ? "sekunnin" : "sekuntia";
                    break;
                case "m":
                    return i ? "minuutin" : "minuutti";
                case "mm":
                    s = i ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return i ? "tunnin" : "tunti";
                case "hh":
                    s = i ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return i ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
                case "dd":
                    s = i ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                    break;
                case "M":
                    return i ? "kuukauden" : "kuukausi";
                case "MM":
                    s = i ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return i ? "vuoden" : "vuosi";
                case "yy":
                    s = i ? "vuoden" : "vuotta"
            }
            return s = function(e, a) {
                return e < 10 ? a ? n[e] : t[e] : e
            }(e, i) + " " + s
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pÃ¤Ã¤stÃ¤",
                past: "%s sitten",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fil", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fo", {
            months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"),
            weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ã dag kl.] LT",
                nextDay: "[Ã morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Ã gjÃ¡r kl.] LT",
                lastWeek: "[sÃ­Ã°stu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s sÃ­Ã°ani",
                s: "fÃ¡ sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein tÃ­mi",
                hh: "%d tÃ­mar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mÃ¡naÃ°ur",
                MM: "%d mÃ¡naÃ°ir",
                y: "eitt Ã¡r",
                yy: "%d Ã¡r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?|janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
            n = [/^janv/i, /^fÃ©vr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^aoÃ»t/i, /^sept/i, /^oct/i, /^nov/i, /^dÃ©c/i];
        e.defineLocale("fr", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsRegex: t,
            monthsShortRegex: t,
            monthsStrictRegex: /^(janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
            monthsShortStrictRegex: /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourdâ€™hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fr-ca", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourdâ€™hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fr-ch", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourdâ€™hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[Ã´frÃ»ne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minÃºt",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ga", {
            months: ["EanÃ¡ir", "Feabhra", "MÃ¡rta", "AibreÃ¡n", "Bealtaine", "Meitheamh", "IÃºil", "LÃºnasa", "MeÃ¡n FÃ³mhair", "Deireadh FÃ³mhair", "Samhain", "Nollaig"],
            monthsShort: ["Ean", "Feabh", "MÃ¡rt", "Aib", "Beal", "Meith", "IÃºil", "LÃºn", "M.F.", "D.F.", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["DÃ© Domhnaigh", "DÃ© Luain", "DÃ© MÃ¡irt", "DÃ© CÃ©adaoin", "DÃ©ardaoin", "DÃ© hAoine", "DÃ© Sathairn"],
            weekdaysShort: ["Domh", "Luan", "MÃ¡irt", "CÃ©ad", "DÃ©ar", "Aoine", "Sath"],
            weekdaysMin: ["Do", "Lu", "MÃ¡", "CÃ©", "DÃ©", "A", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[AmÃ¡rach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[InnÃ© ag] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s Ã³ shin",
                s: "cÃºpla soicind",
                ss: "%d soicind",
                m: "nÃ³imÃ©ad",
                mm: "%d nÃ³imÃ©ad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "lÃ¡",
                dd: "%d lÃ¡",
                M: "mÃ­",
                MM: "%d mÃ­onna",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am MÃ rt", "An Giblean", "An CÃ¨itean", "An t-Ã’gmhios", "An t-Iuchar", "An LÃ¹nastal", "An t-Sultain", "An DÃ mhair", "An t-Samhain", "An DÃ¹bhlachd"],
            monthsShort: ["Faoi", "Gear", "MÃ rt", "Gibl", "CÃ¨it", "Ã’gmh", "Iuch", "LÃ¹n", "Sult", "DÃ mh", "Samh", "DÃ¹bh"],
            monthsParseExact: !0,
            weekdays: ["DidÃ²mhnaich", "Diluain", "DimÃ irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["DÃ²", "Lu", "MÃ ", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-mÃ ireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dÃ¨ aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mÃ¬os",
                MM: "%d mÃ¬osan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuÃ±o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuÃ±._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mÃ©rcores_xoves_venres_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._mÃ©r._xov._ven._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mÃ©_xo_ve_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                },
                nextDay: function() {
                    return "[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            var r = {
                s: ["à¤¥à¥‹à¤¡à¤¯à¤¾ à¤¸à¥…à¤•à¤‚à¤¡à¤¾à¤‚à¤¨à¥€", "à¤¥à¥‹à¤¡à¥‡ à¤¸à¥…à¤•à¤‚à¤¡"],
                ss: [e + " à¤¸à¥…à¤•à¤‚à¤¡à¤¾à¤‚à¤¨à¥€", e + " à¤¸à¥…à¤•à¤‚à¤¡"],
                m: ["à¤à¤•à¤¾ à¤®à¤¿à¤£à¤Ÿà¤¾à¤¨", "à¤à¤• à¤®à¤¿à¤¨à¥‚à¤Ÿ"],
                mm: [e + " à¤®à¤¿à¤£à¤Ÿà¤¾à¤‚à¤¨à¥€", e + " à¤®à¤¿à¤£à¤Ÿà¤¾à¤‚"],
                h: ["à¤à¤•à¤¾ à¤µà¤°à¤¾à¤¨", "à¤à¤• à¤µà¤°"],
                hh: [e + " à¤µà¤°à¤¾à¤‚à¤¨à¥€", e + " à¤µà¤°à¤¾à¤‚"],
                d: ["à¤à¤•à¤¾ à¤¦à¤¿à¤¸à¤¾à¤¨", "à¤à¤• à¤¦à¥€à¤¸"],
                dd: [e + " à¤¦à¤¿à¤¸à¤¾à¤‚à¤¨à¥€", e + " à¤¦à¥€à¤¸"],
                M: ["à¤à¤•à¤¾ à¤®à¥à¤¹à¤¯à¤¨à¥à¤¯à¤¾à¤¨", "à¤à¤• à¤®à¥à¤¹à¤¯à¤¨à¥‹"],
                MM: [e + " à¤®à¥à¤¹à¤¯à¤¨à¥à¤¯à¤¾à¤¨à¥€", e + " à¤®à¥à¤¹à¤¯à¤¨à¥‡"],
                y: ["à¤à¤•à¤¾ à¤µà¤°à¥à¤¸à¤¾à¤¨", "à¤à¤• à¤µà¤°à¥à¤¸"],
                yy: [e + " à¤µà¤°à¥à¤¸à¤¾à¤‚à¤¨à¥€", e + " à¤µà¤°à¥à¤¸à¤¾à¤‚"]
            };
            return a ? r[n][0] : r[n][1]
        }
        e.defineLocale("gom-deva", {
            months: {
                standalone: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¥€à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¯_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
                format: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€à¤šà¥à¤¯à¤¾_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€à¤šà¥à¤¯à¤¾_à¤®à¤¾à¤°à¥à¤šà¤¾à¤šà¥à¤¯à¤¾_à¤à¤ªà¥à¤°à¥€à¤²à¤¾à¤šà¥à¤¯à¤¾_à¤®à¥‡à¤¯à¤¾à¤šà¥à¤¯à¤¾_à¤œà¥‚à¤¨à¤¾à¤šà¥à¤¯à¤¾_à¤œà¥à¤²à¤¯à¤¾à¤šà¥à¤¯à¤¾_à¤‘à¤—à¤¸à¥à¤Ÿà¤¾à¤šà¥à¤¯à¤¾_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¥€._à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤†à¤¯à¤¤à¤¾à¤°_à¤¸à¥‹à¤®à¤¾à¤°_à¤®à¤‚à¤—à¤³à¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤¬à¤¿à¤°à¥‡à¤¸à¥à¤¤à¤¾à¤°_à¤¸à¥à¤•à¥à¤°à¤¾à¤°_à¤¶à¥‡à¤¨à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤†à¤¯à¤¤._à¤¸à¥‹à¤®._à¤®à¤‚à¤—à¤³._à¤¬à¥à¤§._à¤¬à¥à¤°à¥‡à¤¸à¥à¤¤._à¤¸à¥à¤•à¥à¤°._à¤¶à¥‡à¤¨.".split("_"),
            weekdaysMin: "à¤†_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤¬à¥à¤°à¥‡_à¤¸à¥_à¤¶à¥‡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                LTS: "A h:mm:ss [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                llll: "ddd, D MMM YYYY, A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]"
            },
            calendar: {
                sameDay: "[à¤†à¤¯à¤œ] LT",
                nextDay: "[à¤«à¤¾à¤²à¥à¤¯à¤¾à¤‚] LT",
                nextWeek: "[à¤«à¥à¤¡à¤²à¥‹] dddd[,] LT",
                lastDay: "[à¤•à¤¾à¤²] LT",
                lastWeek: "[à¤«à¤¾à¤Ÿà¤²à¥‹] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s à¤†à¤¦à¥€à¤‚",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(à¤µà¥‡à¤°)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + "à¤µà¥‡à¤°";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /à¤°à¤¾à¤¤à¥€|à¤¸à¤•à¤¾à¤³à¥€à¤‚|à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚|à¤¸à¤¾à¤‚à¤œà¥‡/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¥€" === t ? e < 4 ? e : e + 12 : "à¤¸à¤•à¤¾à¤³à¥€à¤‚" === t ? e : "à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚" === t ? e > 12 ? e : e + 12 : "à¤¸à¤¾à¤‚à¤œà¥‡" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à¤°à¤¾à¤¤à¥€" : e < 12 ? "à¤¸à¤•à¤¾à¤³à¥€à¤‚" : e < 16 ? "à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚" : e < 20 ? "à¤¸à¤¾à¤‚à¤œà¥‡" : "à¤°à¤¾à¤¤à¥€"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            var r = {
                s: ["thoddea sekondamni", "thodde sekond"],
                ss: [e + " sekondamni", e + " sekond"],
                m: ["eka mintan", "ek minut"],
                mm: [e + " mintamni", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voramni", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disamni", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineamni", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsamni", e + " vorsam"]
            };
            return a ? r[n][0] : r[n][1]
        }
        e.defineLocale("gom-latn", {
            months: {
                standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Fuddlo] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fattlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "à«§",
                2: "à«¨",
                3: "à«©",
                4: "à«ª",
                5: "à««",
                6: "à«¬",
                7: "à«­",
                8: "à«®",
                9: "à«¯",
                0: "à«¦"
            },
            n = {
                "à«§": "1",
                "à«¨": "2",
                "à«©": "3",
                "à«ª": "4",
                "à««": "5",
                "à«¬": "6",
                "à«­": "7",
                "à«®": "8",
                "à«¯": "9",
                "à«¦": "0"
            };
        e.defineLocale("gu", {
            months: "àªœàª¾àª¨à«àª¯à«àª†àª°à«€_àª«à«‡àª¬à«àª°à«àª†àª°à«€_àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿àª²_àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾àªˆ_àª‘àª—àª¸à«àªŸ_àª¸àªªà«àªŸà«‡àª®à«àª¬àª°_àª‘àª•à«àªŸà«àª¬àª°_àª¨àªµà«‡àª®à«àª¬àª°_àª¡àª¿àª¸à«‡àª®à«àª¬àª°".split("_"),
            monthsShort: "àªœàª¾àª¨à«àª¯à«._àª«à«‡àª¬à«àª°à«._àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿._àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾._àª‘àª—._àª¸àªªà«àªŸà«‡._àª‘àª•à«àªŸà«._àª¨àªµà«‡._àª¡àª¿àª¸à«‡.".split("_"),
            monthsParseExact: !0,
            weekdays: "àª°àªµàª¿àªµàª¾àª°_àª¸à«‹àª®àªµàª¾àª°_àª®àª‚àª—àª³àªµàª¾àª°_àª¬à«àª§à«àªµàª¾àª°_àª—à«àª°à«àªµàª¾àª°_àª¶à«àª•à«àª°àªµàª¾àª°_àª¶àª¨àª¿àªµàª¾àª°".split("_"),
            weekdaysShort: "àª°àªµàª¿_àª¸à«‹àª®_àª®àª‚àª—àª³_àª¬à«àª§à«_àª—à«àª°à«_àª¶à«àª•à«àª°_àª¶àª¨àª¿".split("_"),
            weekdaysMin: "àª°_àª¸à«‹_àª®àª‚_àª¬à«_àª—à«_àª¶à«_àª¶".split("_"),
            longDateFormat: {
                LT: "A h:mm àªµàª¾àª—à«àª¯à«‡",
                LTS: "A h:mm:ss àªµàª¾àª—à«àª¯à«‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡"
            },
            calendar: {
                sameDay: "[àª†àªœ] LT",
                nextDay: "[àª•àª¾àª²à«‡] LT",
                nextWeek: "dddd, LT",
                lastDay: "[àª—àª‡àª•àª¾àª²à«‡] LT",
                lastWeek: "[àªªàª¾àª›àª²àª¾] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s àª®àª¾",
                past: "%s àªªàª¹à«‡àª²àª¾",
                s: "àª…àª®à«àª• àªªàª³à«‹",
                ss: "%d àª¸à«‡àª•àª‚àª¡",
                m: "àªàª• àª®àª¿àª¨àª¿àªŸ",
                mm: "%d àª®àª¿àª¨àª¿àªŸ",
                h: "àªàª• àª•àª²àª¾àª•",
                hh: "%d àª•àª²àª¾àª•",
                d: "àªàª• àª¦àª¿àªµàª¸",
                dd: "%d àª¦àª¿àªµàª¸",
                M: "àªàª• àª®àª¹àª¿àª¨à«‹",
                MM: "%d àª®àª¹àª¿àª¨à«‹",
                y: "àªàª• àªµàª°à«àª·",
                yy: "%d àªµàª°à«àª·"
            },
            preparse: function(e) {
                return e.replace(/[à«§à«¨à«©à«ªà««à«¬à«­à«®à«¯à«¦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /àª°àª¾àª¤|àª¬àªªà«‹àª°|àª¸àªµàª¾àª°|àª¸àª¾àª‚àªœ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "àª°àª¾àª¤" === t ? e < 4 ? e : e + 12 : "àª¸àªµàª¾àª°" === t ? e : "àª¬àªªà«‹àª°" === t ? e >= 10 ? e : e + 12 : "àª¸àª¾àª‚àªœ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "àª°àª¾àª¤" : e < 10 ? "àª¸àªµàª¾àª°" : e < 17 ? "àª¬àªªà«‹àª°" : e < 20 ? "àª¸àª¾àª‚àªœ" : "àª°àª¾àª¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("he", {
            months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),
            monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),
            weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),
            weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),
            weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [×‘]MMMM YYYY",
                LLL: "D [×‘]MMMM YYYY HH:mm",
                LLLL: "dddd, D [×‘]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[×”×™×•× ×‘Ö¾]LT",
                nextDay: "[×ž×—×¨ ×‘Ö¾]LT",
                nextWeek: "dddd [×‘×©×¢×”] LT",
                lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT",
                lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "×‘×¢×•×“ %s",
                past: "×œ×¤× ×™ %s",
                s: "×ž×¡×¤×¨ ×©× ×™×•×ª",
                ss: "%d ×©× ×™×•×ª",
                m: "×“×§×”",
                mm: "%d ×“×§×•×ª",
                h: "×©×¢×”",
                hh: function(e) {
                    return 2 === e ? "×©×¢×ª×™×™×" : e + " ×©×¢×•×ª"
                },
                d: "×™×•×",
                dd: function(e) {
                    return 2 === e ? "×™×•×ž×™×™×" : e + " ×™×ž×™×"
                },
                M: "×—×•×“×©",
                MM: function(e) {
                    return 2 === e ? "×—×•×“×©×™×™×" : e + " ×—×•×“×©×™×"
                },
                y: "×©× ×”",
                yy: function(e) {
                    return 2 === e ? "×©× ×ª×™×™×" : e % 10 == 0 && 10 !== e ? e + " ×©× ×”" : e + " ×©× ×™×"
                }
            },
            meridiemParse: /××—×”"×¦|×œ×¤× ×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×œ×¤× ×™ ×”×¦×”×¨×™×™×|×œ×¤× ×•×ª ×‘×•×§×¨|×‘×‘×•×§×¨|×‘×¢×¨×‘/i,
            isPM: function(e) {
                return /^(××—×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×‘×¢×¨×‘)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 5 ? "×œ×¤× ×•×ª ×‘×•×§×¨" : e < 10 ? "×‘×‘×•×§×¨" : e < 12 ? n ? '×œ×¤× ×”"×¦' : "×œ×¤× ×™ ×”×¦×”×¨×™×™×" : e < 18 ? n ? '××—×”"×¦' : "××—×¨×™ ×”×¦×”×¨×™×™×" : "×‘×¢×¨×‘"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "à¥§",
                2: "à¥¨",
                3: "à¥©",
                4: "à¥ª",
                5: "à¥«",
                6: "à¥¬",
                7: "à¥­",
                8: "à¥®",
                9: "à¥¯",
                0: "à¥¦"
            },
            n = {
                "à¥§": "1",
                "à¥¨": "2",
                "à¥©": "3",
                "à¥ª": "4",
                "à¥«": "5",
                "à¥¬": "6",
                "à¥­": "7",
                "à¥®": "8",
                "à¥¯": "9",
                "à¥¦": "0"
            };
        e.defineLocale("hi", {
            months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
            weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
            longDateFormat: {
                LT: "A h:mm à¤¬à¤œà¥‡",
                LTS: "A h:mm:ss à¤¬à¤œà¥‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤•à¤²] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¤•à¤²] LT",
                lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¤®à¥‡à¤‚",
                past: "%s à¤ªà¤¹à¤²à¥‡",
                s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",
                ss: "%d à¤¸à¥‡à¤•à¤‚à¤¡",
                m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",
                mm: "%d à¤®à¤¿à¤¨à¤Ÿ",
                h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
                hh: "%d à¤˜à¤‚à¤Ÿà¥‡",
                d: "à¤à¤• à¤¦à¤¿à¤¨",
                dd: "%d à¤¦à¤¿à¤¨",
                M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",
                MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",
                y: "à¤à¤• à¤µà¤°à¥à¤·",
                yy: "%d à¤µà¤°à¥à¤·"
            },
            preparse: function(e) {
                return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¤°à¤¾à¤¤" === t ? e < 4 ? e : e + 12 : "à¤¸à¥à¤¬à¤¹" === t ? e : "à¤¦à¥‹à¤ªà¤¹à¤°" === t ? e >= 10 ? e : e + 12 : "à¤¶à¤¾à¤®" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à¤°à¤¾à¤¤" : e < 10 ? "à¤¸à¥à¤¬à¤¹" : e < 17 ? "à¤¦à¥‹à¤ªà¤¹à¤°" : e < 20 ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "ss":
                    return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return a += 1 === e ? "dan" : "dana";
                case "MM":
                    return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM YYYY",
                LLL: "Do MMMM YYYY H:mm",
                LLLL: "dddd, Do MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[proÅ¡lu] [nedjelju] [u] LT";
                        case 3:
                            return "[proÅ¡lu] [srijedu] [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ");

        function n(e, t, n, a) {
            var r = e;
            switch (n) {
                case "s":
                    return a || t ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
                case "ss":
                    return r + (a || t) ? " mÃ¡sodperc" : " mÃ¡sodperce";
                case "m":
                    return "egy" + (a || t ? " perc" : " perce");
                case "mm":
                    return r + (a || t ? " perc" : " perce");
                case "h":
                    return "egy" + (a || t ? " Ã³ra" : " Ã³rÃ¡ja");
                case "hh":
                    return r + (a || t ? " Ã³ra" : " Ã³rÃ¡ja");
                case "d":
                    return "egy" + (a || t ? " nap" : " napja");
                case "dd":
                    return r + (a || t ? " nap" : " napja");
                case "M":
                    return "egy" + (a || t ? " hÃ³nap" : " hÃ³napja");
                case "MM":
                    return r + (a || t ? " hÃ³nap" : " hÃ³napja");
                case "y":
                    return "egy" + (a || t ? " Ã©v" : " Ã©ve");
                case "yy":
                    return r + (a || t ? " Ã©v" : " Ã©ve")
            }
            return ""
        }

        function a(e) {
            return (e ? "" : "[mÃºlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }
        e.defineLocale("hu", {
            months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),
            monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),
            weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return a.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return a.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s mÃºlva",
                past: "%s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("hy-am", {
            months: {
                format: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_"),
                standalone: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_")
            },
            monthsShort: "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_"),
            weekdays: "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_"),
            weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Õ©.",
                LLL: "D MMMM YYYY Õ©., HH:mm",
                LLLL: "dddd, D MMMM YYYY Õ©., HH:mm"
            },
            calendar: {
                sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT",
                nextDay: "[Õ¾Õ¡Õ²Õ¨] LT",
                lastDay: "[Õ¥Ö€Õ¥Õ¯] LT",
                nextWeek: function() {
                    return "dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },
                lastWeek: function() {
                    return "[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Õ°Õ¥Õ¿Õ¸",
                past: "%s Õ¡Õ¼Õ¡Õ»",
                s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
                ss: "%d Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
                m: "Ö€Õ¸ÕºÕ¥",
                mm: "%d Ö€Õ¸ÕºÕ¥",
                h: "ÕªÕ¡Õ´",
                hh: "%d ÕªÕ¡Õ´",
                d: "Ö…Ö€",
                dd: "%d Ö…Ö€",
                M: "Õ¡Õ´Õ«Õ½",
                MM: "%d Õ¡Õ´Õ«Õ½",
                y: "Õ¿Õ¡Ö€Õ«",
                yy: "%d Õ¿Õ¡Ö€Õ«"
            },
            meridiemParse: /Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
            isPM: function(e) {
                return /^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(e)
            },
            meridiem: function(e) {
                return e < 4 ? "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡" : e < 12 ? "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡" : e < 17 ? "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡" : "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-Õ«Õ¶" : e + "-Ö€Õ¤";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function n(e, n, a, r) {
            var i = e + " ";
            switch (a) {
                case "s":
                    return n || r ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
                case "ss":
                    return t(e) ? i + (n || r ? "sekÃºndur" : "sekÃºndum") : i + "sekÃºnda";
                case "m":
                    return n ? "mÃ­nÃºta" : "mÃ­nÃºtu";
                case "mm":
                    return t(e) ? i + (n || r ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : n ? i + "mÃ­nÃºta" : i + "mÃ­nÃºtu";
                case "hh":
                    return t(e) ? i + (n || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                case "d":
                    return n ? "dagur" : r ? "dag" : "degi";
                case "dd":
                    return t(e) ? n ? i + "dagar" : i + (r ? "daga" : "dÃ¶gum") : n ? i + "dagur" : i + (r ? "dag" : "degi");
                case "M":
                    return n ? "mÃ¡nuÃ°ur" : r ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
                case "MM":
                    return t(e) ? n ? i + "mÃ¡nuÃ°ir" : i + (r ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : n ? i + "mÃ¡nuÃ°ur" : i + (r ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
                case "y":
                    return n || r ? "Ã¡r" : "Ã¡ri";
                case "yy":
                    return t(e) ? i + (n || r ? "Ã¡r" : "Ã¡rum") : i + (n || r ? "Ã¡r" : "Ã¡ri")
            }
        }
        e.defineLocale("is", {
            months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),
            weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),
            weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),
            weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[Ã­ dag kl.] LT",
                nextDay: "[Ã¡ morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Ã­ gÃ¦r kl.] LT",
                lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s sÃ­Ã°an",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                nextDay: function() {
                    return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                nextWeek: function() {
                    return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                lastDay: function() {
                    return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
                        default:
                            return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "tra %s",
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ja", {
            eras: [{
                since: "2019-05-01",
                offset: 1,
                name: "ä»¤å’Œ",
                narrow: "ã‹¿",
                abbr: "R"
            }, {
                since: "1989-01-08",
                until: "2019-04-30",
                offset: 1,
                name: "å¹³æˆ",
                narrow: "ã»",
                abbr: "H"
            }, {
                since: "1926-12-25",
                until: "1989-01-07",
                offset: 1,
                name: "æ˜­å’Œ",
                narrow: "ã¼",
                abbr: "S"
            }, {
                since: "1912-07-30",
                until: "1926-12-24",
                offset: 1,
                name: "å¤§æ­£",
                narrow: "ã½",
                abbr: "T"
            }, {
                since: "1873-01-01",
                until: "1912-07-29",
                offset: 6,
                name: "æ˜Žæ²»",
                narrow: "ã¾",
                abbr: "M"
            }, {
                since: "0001-01-01",
                until: "1873-12-31",
                offset: 1,
                name: "è¥¿æš¦",
                narrow: "AD",
                abbr: "AD"
            }, {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "ç´€å…ƒå‰",
                narrow: "BC",
                abbr: "BC"
            }],
            eraYearOrdinalRegex: /(å…ƒ|\d+)å¹´/,
            eraYearOrdinalParse: function(e, t) {
                return "å…ƒ" === t[1] ? 1 : parseInt(t[1] || e, 10)
            },
            months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
            weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥ dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥(ddd) HH:mm"
            },
            meridiemParse: /åˆå‰|åˆå¾Œ/i,
            isPM: function(e) {
                return "åˆå¾Œ" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "åˆå‰" : "åˆå¾Œ"
            },
            calendar: {
                sameDay: "[ä»Šæ—¥] LT",
                nextDay: "[æ˜Žæ—¥] LT",
                nextWeek: function(e) {
                    return e.week() !== this.week() ? "[æ¥é€±]dddd LT" : "dddd LT"
                },
                lastDay: "[æ˜¨æ—¥] LT",
                lastWeek: function(e) {
                    return this.week() !== e.week() ? "[å…ˆé€±]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}æ—¥/,
            ordinal: function(e, t) {
                switch (t) {
                    case "y":
                        return 1 === e ? "å…ƒå¹´" : e + "å¹´";
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så¾Œ",
                past: "%så‰",
                s: "æ•°ç§’",
                ss: "%dç§’",
                m: "1åˆ†",
                mm: "%dåˆ†",
                h: "1æ™‚é–“",
                hh: "%dæ™‚é–“",
                d: "1æ—¥",
                dd: "%dæ—¥",
                M: "1ãƒ¶æœˆ",
                MM: "%dãƒ¶æœˆ",
                y: "1å¹´",
                yy: "%då¹´"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ka", {
            months: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),
            monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),
            weekdays: {
                standalone: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),
                format: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_"),
                isFormat: /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/
            },
            weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),
            weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",
                nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",
                lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",
                nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",
                lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e.replace(/(áƒ¬áƒáƒ›|áƒ¬áƒ£áƒ—|áƒ¡áƒáƒáƒ—|áƒ¬áƒ”áƒš|áƒ“áƒ¦|áƒ—áƒ•)(áƒ˜|áƒ”)/, (function(e, t, n) {
                        return "áƒ˜" === n ? t + "áƒ¨áƒ˜" : t + n + "áƒ¨áƒ˜"
                    }))
                },
                past: function(e) {
                    return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(e) ? e.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : /áƒ¬áƒ”áƒšáƒ˜/.test(e) ? e.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : e
                },
                s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",
                ss: "%d áƒ¬áƒáƒ›áƒ˜",
                m: "áƒ¬áƒ£áƒ—áƒ˜",
                mm: "%d áƒ¬áƒ£áƒ—áƒ˜",
                h: "áƒ¡áƒáƒáƒ—áƒ˜",
                hh: "%d áƒ¡áƒáƒáƒ—áƒ˜",
                d: "áƒ“áƒ¦áƒ”",
                dd: "%d áƒ“áƒ¦áƒ”",
                M: "áƒ—áƒ•áƒ”",
                MM: "%d áƒ—áƒ•áƒ”",
                y: "áƒ¬áƒ”áƒšáƒ˜",
                yy: "%d áƒ¬áƒ”áƒšáƒ˜"
            },
            dayOfMonthOrdinalParse: /0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-áƒšáƒ˜" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "áƒ›áƒ”-" + e : e + "-áƒ”"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            0: "-ÑˆÑ–",
            1: "-ÑˆÑ–",
            2: "-ÑˆÑ–",
            3: "-ÑˆÑ–",
            4: "-ÑˆÑ–",
            5: "-ÑˆÑ–",
            6: "-ÑˆÑ‹",
            7: "-ÑˆÑ–",
            8: "-ÑˆÑ–",
            9: "-ÑˆÑ‹",
            10: "-ÑˆÑ‹",
            20: "-ÑˆÑ‹",
            30: "-ÑˆÑ‹",
            40: "-ÑˆÑ‹",
            50: "-ÑˆÑ–",
            60: "-ÑˆÑ‹",
            70: "-ÑˆÑ–",
            80: "-ÑˆÑ–",
            90: "-ÑˆÑ‹",
            100: "-ÑˆÑ–"
        };
        e.defineLocale("kk", {
            months: "Ò›Ð°Ò£Ñ‚Ð°Ñ€_Ð°Ò›Ð¿Ð°Ð½_Ð½Ð°ÑƒÑ€Ñ‹Ð·_ÑÓ™ÑƒÑ–Ñ€_Ð¼Ð°Ð¼Ñ‹Ñ€_Ð¼Ð°ÑƒÑÑ‹Ð¼_ÑˆÑ–Ð»Ð´Ðµ_Ñ‚Ð°Ð¼Ñ‹Ð·_Ò›Ñ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_Ò›Ð°Ð·Ð°Ð½_Ò›Ð°Ñ€Ð°ÑˆÐ°_Ð¶ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),
            monthsShort: "Ò›Ð°Ò£_Ð°Ò›Ð¿_Ð½Ð°Ñƒ_ÑÓ™Ñƒ_Ð¼Ð°Ð¼_Ð¼Ð°Ñƒ_ÑˆÑ–Ð»_Ñ‚Ð°Ð¼_Ò›Ñ‹Ñ€_Ò›Ð°Ð·_Ò›Ð°Ñ€_Ð¶ÐµÐ»".split("_"),
            weekdays: "Ð¶ÐµÐºÑÐµÐ½Ð±Ñ–_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ–_ÑÓ™Ñ€ÑÐµÐ½Ð±Ñ–_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ–".split("_"),
            weekdaysShort: "Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓ™Ñ€_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½".split("_"),
            weekdaysMin: "Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ€_Ð±Ð¹_Ð¶Ð¼_ÑÐ½".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT",
                nextDay: "[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT",
                nextWeek: "dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                lastDay: "[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT",
                lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ñ–ÑˆÑ–Ð½Ð´Ðµ",
                past: "%s Ð±Ò±Ñ€Ñ‹Ð½",
                s: "Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´",
                m: "Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                h: "Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚",
                hh: "%d ÑÐ°Ò“Ð°Ñ‚",
                d: "Ð±Ñ–Ñ€ ÐºÒ¯Ð½",
                dd: "%d ÐºÒ¯Ð½",
                M: "Ð±Ñ–Ñ€ Ð°Ð¹",
                MM: "%d Ð°Ð¹",
                y: "Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»",
                yy: "%d Ð¶Ñ‹Ð»"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "áŸ¡",
                2: "áŸ¢",
                3: "áŸ£",
                4: "áŸ¤",
                5: "áŸ¥",
                6: "áŸ¦",
                7: "áŸ§",
                8: "áŸ¨",
                9: "áŸ©",
                0: "áŸ "
            },
            n = {
                "áŸ¡": "1",
                "áŸ¢": "2",
                "áŸ£": "3",
                "áŸ¤": "4",
                "áŸ¥": "5",
                "áŸ¦": "6",
                "áŸ§": "7",
                "áŸ¨": "8",
                "áŸ©": "9",
                "áŸ ": "0"
            };
        e.defineLocale("km", {
            months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
            monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
            weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
            weekdaysShort: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
            weekdaysMin: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /áž–áŸ’ážšáž¹áž€|áž›áŸ’áž„áž¶áž…/,
            isPM: function(e) {
                return "áž›áŸ’áž„áž¶áž…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "áž–áŸ’ážšáž¹áž€" : "áž›áŸ’áž„áž¶áž…"
            },
            calendar: {
                sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
                nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",
                nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",
                lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",
                lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sáž‘áŸ€áž",
                past: "%sáž˜áž»áž“",
                s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",
                ss: "%d ážœáž·áž“áž¶áž‘áž¸",
                m: "áž˜áž½áž™áž“áž¶áž‘áž¸",
                mm: "%d áž“áž¶áž‘áž¸",
                h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",
                hh: "%d áž˜áŸ‰áŸ„áž„",
                d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",
                dd: "%d ážáŸ’áž„áŸƒ",
                M: "áž˜áž½áž™ážáŸ‚",
                MM: "%d ážáŸ‚",
                y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",
                yy: "%d áž†áŸ’áž“áž¶áŸ†"
            },
            dayOfMonthOrdinalParse: /áž‘áž¸\d{1,2}/,
            ordinal: "áž‘áž¸%d",
            preparse: function(e) {
                return e.replace(/[áŸ¡áŸ¢áŸ£áŸ¤áŸ¥áŸ¦áŸ§áŸ¨áŸ©áŸ ]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "à³§",
                2: "à³¨",
                3: "à³©",
                4: "à³ª",
                5: "à³«",
                6: "à³¬",
                7: "à³­",
                8: "à³®",
                9: "à³¯",
                0: "à³¦"
            },
            n = {
                "à³§": "1",
                "à³¨": "2",
                "à³©": "3",
                "à³ª": "4",
                "à³«": "5",
                "à³¬": "6",
                "à³­": "7",
                "à³®": "8",
                "à³¯": "9",
                "à³¦": "0"
            };
        e.defineLocale("kn", {
            months: "à²œà²¨à²µà²°à²¿_à²«à³†à²¬à³à²°à²µà²°à²¿_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚à²¬à²°à³_à²…à²•à³à²Ÿà³†à³‚à³•à²¬à²°à³_à²¨à²µà³†à²‚à²¬à²°à³_à²¡à²¿à²¸à³†à²‚à²¬à²°à³".split("_"),
            monthsShort: "à²œà²¨_à²«à³†à²¬à³à²°_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚_à²…à²•à³à²Ÿà³†à³‚à³•_à²¨à²µà³†à²‚_à²¡à²¿à²¸à³†à²‚".split("_"),
            monthsParseExact: !0,
            weekdays: "à²­à²¾à²¨à³à²µà²¾à²°_à²¸à³†à³‚à³•à²®à²µà²¾à²°_à²®à²‚à²—à²³à²µà²¾à²°_à²¬à³à²§à²µà²¾à²°_à²—à³à²°à³à²µà²¾à²°_à²¶à³à²•à³à²°à²µà²¾à²°_à²¶à²¨à²¿à²µà²¾à²°".split("_"),
            weekdaysShort: "à²­à²¾à²¨à³_à²¸à³†à³‚à³•à²®_à²®à²‚à²—à²³_à²¬à³à²§_à²—à³à²°à³_à²¶à³à²•à³à²°_à²¶à²¨à²¿".split("_"),
            weekdaysMin: "à²­à²¾_à²¸à³†à³‚à³•_à²®à²‚_à²¬à³_à²—à³_à²¶à³_à²¶".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à²‡à²‚à²¦à³] LT",
                nextDay: "[à²¨à²¾à²³à³†] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à²¨à²¿à²¨à³à²¨à³†] LT",
                lastWeek: "[à²•à³†à³‚à²¨à³†à²¯] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à²¨à²‚à²¤à²°",
                past: "%s à²¹à²¿à²‚à²¦à³†",
                s: "à²•à³†à²²à²µà³ à²•à³à²·à²£à²—à²³à³",
                ss: "%d à²¸à³†à²•à³†à²‚à²¡à³à²—à²³à³",
                m: "à²’à²‚à²¦à³ à²¨à²¿à²®à²¿à²·",
                mm: "%d à²¨à²¿à²®à²¿à²·",
                h: "à²’à²‚à²¦à³ à²—à²‚à²Ÿà³†",
                hh: "%d à²—à²‚à²Ÿà³†",
                d: "à²’à²‚à²¦à³ à²¦à²¿à²¨",
                dd: "%d à²¦à²¿à²¨",
                M: "à²’à²‚à²¦à³ à²¤à²¿à²‚à²—à²³à³",
                MM: "%d à²¤à²¿à²‚à²—à²³à³",
                y: "à²’à²‚à²¦à³ à²µà²°à³à²·",
                yy: "%d à²µà²°à³à²·"
            },
            preparse: function(e) {
                return e.replace(/[à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³¦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /à²°à²¾à²¤à³à²°à²¿|à²¬à³†à²³à²¿à²—à³à²—à³†|à²®à²§à³à²¯à²¾à²¹à³à²¨|à²¸à²‚à²œà³†/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à²°à²¾à²¤à³à²°à²¿" === t ? e < 4 ? e : e + 12 : "à²¬à³†à²³à²¿à²—à³à²—à³†" === t ? e : "à²®à²§à³à²¯à²¾à²¹à³à²¨" === t ? e >= 10 ? e : e + 12 : "à²¸à²‚à²œà³†" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à²°à²¾à²¤à³à²°à²¿" : e < 10 ? "à²¬à³†à²³à²¿à²—à³à²—à³†" : e < 17 ? "à²®à²§à³à²¯à²¾à²¹à³à²¨" : e < 20 ? "à²¸à²‚à²œà³†" : "à²°à²¾à²¤à³à²°à²¿"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(à²¨à³†à³•)/,
            ordinal: function(e) {
                return e + "à²¨à³†à³•"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ko", {
            months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),
            weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYYë…„ MMMM Dì¼",
                LLL: "YYYYë…„ MMMM Dì¼ A h:mm",
                LLLL: "YYYYë…„ MMMM Dì¼ dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYYë…„ MMMM Dì¼",
                lll: "YYYYë…„ MMMM Dì¼ A h:mm",
                llll: "YYYYë…„ MMMM Dì¼ dddd A h:mm"
            },
            calendar: {
                sameDay: "ì˜¤ëŠ˜ LT",
                nextDay: "ë‚´ì¼ LT",
                nextWeek: "dddd LT",
                lastDay: "ì–´ì œ LT",
                lastWeek: "ì§€ë‚œì£¼ dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s í›„",
                past: "%s ì „",
                s: "ëª‡ ì´ˆ",
                ss: "%dì´ˆ",
                m: "1ë¶„",
                mm: "%dë¶„",
                h: "í•œ ì‹œê°„",
                hh: "%dì‹œê°„",
                d: "í•˜ë£¨",
                dd: "%dì¼",
                M: "í•œ ë‹¬",
                MM: "%dë‹¬",
                y: "ì¼ ë…„",
                yy: "%dë…„"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ì¼|ì›”|ì£¼)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "ì¼";
                    case "M":
                        return e + "ì›”";
                    case "w":
                    case "W":
                        return e + "ì£¼";
                    default:
                        return e
                }
            },
            meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
            isPM: function(e) {
                return "ì˜¤í›„" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ì˜¤ì „" : "ì˜¤í›„"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "Ù¡",
                2: "Ù¢",
                3: "Ù£",
                4: "Ù¤",
                5: "Ù¥",
                6: "Ù¦",
                7: "Ù§",
                8: "Ù¨",
                9: "Ù©",
                0: "Ù "
            },
            n = {
                "Ù¡": "1",
                "Ù¢": "2",
                "Ù£": "3",
                "Ù¤": "4",
                "Ù¥": "5",
                "Ù¦": "6",
                "Ù§": "7",
                "Ù¨": "8",
                "Ù©": "9",
                "Ù ": "0"
            },
            a = ["Ú©Ø§Ù†ÙˆÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…", "Ø´ÙˆØ¨Ø§Øª", "Ø¦Ø§Ø²Ø§Ø±", "Ù†ÛŒØ³Ø§Ù†", "Ø¦Ø§ÛŒØ§Ø±", "Ø­ÙˆØ²Û•ÛŒØ±Ø§Ù†", "ØªÛ•Ù…Ù…ÙˆØ²", "Ø¦Ø§Ø¨", "Ø¦Û•ÛŒÙ„ÙˆÙˆÙ„", "ØªØ´Ø±ÛŒÙ†ÛŒ ÛŒÛ•ÙƒÛ•Ù…", "ØªØ´Ø±ÛŒÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…", "ÙƒØ§Ù†ÙˆÙ†ÛŒ ÛŒÛ•Ú©Û•Ù…"];
        e.defineLocale("ku", {
            months: a,
            monthsShort: a,
            weekdays: "ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø³ÛŽØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ".split("_"),
            weekdaysShort: "ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…_Ø³ÛŽØ´Ù‡â€ŒÙ…_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ".split("_"),
            weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ù‡_Ø´".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ|Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ/,
            isPM: function(e) {
                return /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ" : "Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ"
            },
            calendar: {
                sameDay: "[Ø¦Ù‡â€ŒÙ…Ø±Û† ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                nextDay: "[Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                nextWeek: "dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                lastDay: "[Ø¯ÙˆÛŽÙ†ÛŽ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                lastWeek: "dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ù„Ù‡â€Œ %s",
                past: "%s",
                s: "Ú†Ù‡â€ŒÙ†Ø¯ Ú†Ø±ÙƒÙ‡â€ŒÛŒÙ‡â€ŒÙƒ",
                ss: "Ú†Ø±ÙƒÙ‡â€Œ %d",
                m: "ÛŒÙ‡â€ŒÙƒ Ø®ÙˆÙ„Ù‡â€ŒÙƒ",
                mm: "%d Ø®ÙˆÙ„Ù‡â€ŒÙƒ",
                h: "ÛŒÙ‡â€ŒÙƒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±",
                hh: "%d ÙƒØ§ØªÚ˜Ù…ÛŽØ±",
                d: "ÛŒÙ‡â€ŒÙƒ Ú•Û†Ú˜",
                dd: "%d Ú•Û†Ú˜",
                M: "ÛŒÙ‡â€ŒÙƒ Ù…Ø§Ù†Ú¯",
                MM: "%d Ù…Ø§Ù†Ú¯",
                y: "ÛŒÙ‡â€ŒÙƒ Ø³Ø§Úµ",
                yy: "%d Ø³Ø§Úµ"
            },
            preparse: function(e) {
                return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, (function(e) {
                    return n[e]
                })).replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                })).replace(/,/g, "ØŒ")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            0: "-Ñ‡Ò¯",
            1: "-Ñ‡Ð¸",
            2: "-Ñ‡Ð¸",
            3: "-Ñ‡Ò¯",
            4: "-Ñ‡Ò¯",
            5: "-Ñ‡Ð¸",
            6: "-Ñ‡Ñ‹",
            7: "-Ñ‡Ð¸",
            8: "-Ñ‡Ð¸",
            9: "-Ñ‡Ñƒ",
            10: "-Ñ‡Ñƒ",
            20: "-Ñ‡Ñ‹",
            30: "-Ñ‡Ñƒ",
            40: "-Ñ‡Ñ‹",
            50: "-Ñ‡Ò¯",
            60: "-Ñ‡Ñ‹",
            70: "-Ñ‡Ð¸",
            80: "-Ñ‡Ð¸",
            90: "-Ñ‡Ñƒ",
            100: "-Ñ‡Ò¯"
        };
        e.defineLocale("ky", {
            months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð–ÐµÐºÑˆÐµÐ¼Ð±Ð¸_Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±Ð¸_Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð–ÑƒÐ¼Ð°_Ð˜ÑˆÐµÐ¼Ð±Ð¸".split("_"),
            weekdaysShort: "Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ€_Ð‘ÐµÐ¹_Ð–ÑƒÐ¼_Ð˜ÑˆÐµ".split("_"),
            weekdaysMin: "Ð–Ðº_Ð”Ð¹_Ð¨Ð¹_Ð¨Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð˜Ñˆ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘Ò¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ‚] LT",
                nextDay: "[Ð­Ñ€Ñ‚ÐµÒ£ ÑÐ°Ð°Ñ‚] LT",
                nextWeek: "dddd [ÑÐ°Ð°Ñ‚] LT",
                lastDay: "[ÐšÐµÑ‡ÑÑ ÑÐ°Ð°Ñ‚] LT",
                lastWeek: "[Ó¨Ñ‚ÐºÓ©Ð½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ð½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ‚] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ð¸Ñ‡Ð¸Ð½Ð´Ðµ",
                past: "%s Ð¼ÑƒÑ€ÑƒÐ½",
                s: "Ð±Ð¸Ñ€Ð½ÐµÑ‡Ðµ ÑÐµÐºÑƒÐ½Ð´",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´",
                m: "Ð±Ð¸Ñ€ Ð¼Ò¯Ð½Ó©Ñ‚",
                mm: "%d Ð¼Ò¯Ð½Ó©Ñ‚",
                h: "Ð±Ð¸Ñ€ ÑÐ°Ð°Ñ‚",
                hh: "%d ÑÐ°Ð°Ñ‚",
                d: "Ð±Ð¸Ñ€ ÐºÒ¯Ð½",
                dd: "%d ÐºÒ¯Ð½",
                M: "Ð±Ð¸Ñ€ Ð°Ð¹",
                MM: "%d Ð°Ð¹",
                y: "Ð±Ð¸Ñ€ Ð¶Ñ‹Ð»",
                yy: "%d Ð¶Ñ‹Ð»"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ñ‡Ð¸|Ñ‡Ñ‹|Ñ‡Ò¯|Ñ‡Ñƒ)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            var r = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? r[n][0] : r[n][1]
        }

        function n(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10;
                return n(0 === t ? e / 10 : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return n(e)
            }
            return n(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[GÃ«schter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d MÃ©int",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("lo", {
            months: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
            monthsShort: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
            weekdays: "àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
            weekdaysShort: "àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
            weekdaysMin: "àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "àº§àº±àº™dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,
            isPM: function(e) {
                return "àº•àº­àº™à»àº¥àº‡" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "àº•àº­àº™à»€àºŠàº»à»‰àº²" : "àº•àº­àº™à»àº¥àº‡"
            },
            calendar: {
                sameDay: "[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT",
                nextDay: "[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT",
                nextWeek: "[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT",
                lastDay: "[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT",
                lastWeek: "[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "àº­àºµàº %s",
                past: "%sàºœà»ˆàº²àº™àº¡àº²",
                s: "àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ",
                ss: "%d àº§àº´àº™àº²àº—àºµ",
                m: "1 àº™àº²àº—àºµ",
                mm: "%d àº™àº²àº—àºµ",
                h: "1 àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                hh: "%d àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                d: "1 àº¡àº·à»‰",
                dd: "%d àº¡àº·à»‰",
                M: "1 à»€àº”àº·àº­àº™",
                MM: "%d à»€àº”àº·àº­àº™",
                y: "1 àº›àºµ",
                yy: "%d àº›àºµ"
            },
            dayOfMonthOrdinalParse: /(àº—àºµà»ˆ)\d{1,2}/,
            ordinal: function(e) {
                return "àº—àºµà»ˆ" + e
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            ss: "sekundÄ—_sekundÅ¾iÅ³_sekundes",
            m: "minutÄ—_minutÄ—s_minutÄ™",
            mm: "minutÄ—s_minuÄiÅ³_minutes",
            h: "valanda_valandos_valandÄ…",
            hh: "valandos_valandÅ³_valandas",
            d: "diena_dienos_dienÄ…",
            dd: "dienos_dienÅ³_dienas",
            M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",
            MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",
            y: "metai_metÅ³_metus",
            yy: "metai_metÅ³_metus"
        };

        function n(e, t, n, a) {
            return t ? r(n)[0] : a ? r(n)[1] : r(n)[2]
        }

        function a(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function r(e) {
            return t[e].split("_")
        }

        function i(e, t, i, s) {
            var o = e + " ";
            return 1 === e ? o + n(0, t, i[0], s) : t ? o + (a(e) ? r(i)[1] : r(i)[0]) : s ? o + r(i)[1] : o + (a(e) ? r(i)[1] : r(i)[2])
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Å iandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[PraÄ—jusÄ¯] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieÅ¡ %s",
                s: function(e, t, n, a) {
                    return t ? "kelios sekundÄ—s" : a ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
                },
                ss: i,
                m: n,
                mm: i,
                h: n,
                hh: i,
                d: n,
                dd: i,
                M: n,
                MM: i,
                y: n,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            ss: "sekundes_sekundÄ“m_sekunde_sekundes".split("_"),
            m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
            mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
            h: "stundas_stundÄm_stunda_stundas".split("_"),
            hh: "stundas_stundÄm_stunda_stundas".split("_"),
            d: "dienas_dienÄm_diena_dienas".split("_"),
            dd: "dienas_dienÄm_diena_dienas".split("_"),
            M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
            MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };

        function n(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function a(e, a, r) {
            return e + " " + n(t[r], e, a)
        }

        function r(e, a, r) {
            return n(t[r], e, a)
        }
        e.defineLocale("lv", {
            months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Å odien pulksten] LT",
                nextDay: "[RÄ«t pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pÄ“c %s",
                past: "pirms %s",
                s: function(e, t) {
                    return t ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m"
                },
                ss: a,
                m: r,
                mm: a,
                h: r,
                hh: a,
                d: r,
                dd: a,
                M: r,
                MM: a,
                y: r,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, a) {
                var r = t.words[a];
                return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄe u] LT",
                lastWeek: function() {
                    return ["[proÅ¡le] [nedjelje] [u] LT", "[proÅ¡log] [ponedjeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srijede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("mi", {
            months: "Kohi-tÄte_Hui-tanguru_PoutÅ«-te-rangi_Paenga-whÄwhÄ_Haratua_Pipiri_HÅngoingoi_Here-turi-kÅkÄ_Mahuru_Whiringa-Ä-nuku_Whiringa-Ä-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_HÅngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "RÄtapu_Mane_TÅ«rei_Wenerei_TÄite_Paraire_HÄtarei".split("_"),
            weekdaysShort: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
            weekdaysMin: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hÄ“kona ruarua",
                ss: "%d hÄ“kona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("mk", {
            months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),
            weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",
                nextWeek: "[Ð’Ð¾] dddd [Ð²Ð¾] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "Ð¿Ñ€ÐµÐ´ %s",
                s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
                m: "ÐµÐ´Ð½Ð° Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                h: "ÐµÐ´ÐµÐ½ Ñ‡Ð°Ñ",
                hh: "%d Ñ‡Ð°ÑÐ°",
                d: "ÐµÐ´ÐµÐ½ Ð´ÐµÐ½",
                dd: "%d Ð´ÐµÐ½Ð°",
                M: "ÐµÐ´ÐµÐ½ Ð¼ÐµÑÐµÑ†",
                MM: "%d Ð¼ÐµÑÐµÑ†Ð¸",
                y: "ÐµÐ´Ð½Ð° Ð³Ð¾Ð´Ð¸Ð½Ð°",
                yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && n < 20 ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ml", {
            months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),
            monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),
            monthsParseExact: !0,
            weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),
            weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),
            weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),
            longDateFormat: {
                LT: "A h:mm -à´¨àµ",
                LTS: "A h:mm:ss -à´¨àµ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -à´¨àµ",
                LLLL: "dddd, D MMMM YYYY, A h:mm -à´¨àµ"
            },
            calendar: {
                sameDay: "[à´‡à´¨àµà´¨àµ] LT",
                nextDay: "[à´¨à´¾à´³àµ†] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT",
                lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à´•à´´à´¿à´žàµà´žàµ",
                past: "%s à´®àµàµ»à´ªàµ",
                s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",
                ss: "%d à´¸àµ†à´•àµà´•àµ»à´¡àµ",
                m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",
                mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ",
                h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚",
                dd: "%d à´¦à´¿à´µà´¸à´‚",
                M: "à´’à´°àµ à´®à´¾à´¸à´‚",
                MM: "%d à´®à´¾à´¸à´‚",
                y: "à´’à´°àµ à´µàµ¼à´·à´‚",
                yy: "%d à´µàµ¼à´·à´‚"
            },
            meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à´°à´¾à´¤àµà´°à´¿" === t && e >= 4 || "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" === t || "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" === t ? e + 12 : e
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à´°à´¾à´¤àµà´°à´¿" : e < 12 ? "à´°à´¾à´µà´¿à´²àµ†" : e < 17 ? "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" : e < 20 ? "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" : "à´°à´¾à´¤àµà´°à´¿"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            switch (n) {
                case "s":
                    return t ? "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´" : "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½";
                case "ss":
                    return e + (t ? " ÑÐµÐºÑƒÐ½Ð´" : " ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½");
                case "m":
                case "mm":
                    return e + (t ? " Ð¼Ð¸Ð½ÑƒÑ‚" : " Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹Ð½");
                case "h":
                case "hh":
                    return e + (t ? " Ñ†Ð°Ð³" : " Ñ†Ð°Ð³Ð¸Ð¹Ð½");
                case "d":
                case "dd":
                    return e + (t ? " Ó©Ð´Ó©Ñ€" : " Ó©Ð´Ñ€Ð¸Ð¹Ð½");
                case "M":
                case "MM":
                    return e + (t ? " ÑÐ°Ñ€" : " ÑÐ°Ñ€Ñ‹Ð½");
                case "y":
                case "yy":
                    return e + (t ? " Ð¶Ð¸Ð»" : " Ð¶Ð¸Ð»Ð¸Ð¹Ð½");
                default:
                    return e
            }
        }
        e.defineLocale("mn", {
            months: "ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¥Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð“ÑƒÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ó©Ñ€Ó©Ð²Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¢Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð—ÑƒÑ€Ð³Ð°Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ð¾Ð»Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÐ°Ð¹Ð¼Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð•ÑÐ´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€".split("_"),
            monthsShort: "1 ÑÐ°Ñ€_2 ÑÐ°Ñ€_3 ÑÐ°Ñ€_4 ÑÐ°Ñ€_5 ÑÐ°Ñ€_6 ÑÐ°Ñ€_7 ÑÐ°Ñ€_8 ÑÐ°Ñ€_9 ÑÐ°Ñ€_10 ÑÐ°Ñ€_11 ÑÐ°Ñ€_12 ÑÐ°Ñ€".split("_"),
            monthsParseExact: !0,
            weekdays: "ÐÑÐ¼_Ð”Ð°Ð²Ð°Ð°_ÐœÑÐ³Ð¼Ð°Ñ€_Ð›Ñ…Ð°Ð³Ð²Ð°_ÐŸÒ¯Ñ€ÑÐ²_Ð‘Ð°Ð°ÑÐ°Ð½_Ð‘ÑÐ¼Ð±Ð°".split("_"),
            weekdaysShort: "ÐÑÐ¼_Ð”Ð°Ð²_ÐœÑÐ³_Ð›Ñ…Ð°_ÐŸÒ¯Ñ€_Ð‘Ð°Ð°_Ð‘ÑÐ¼".split("_"),
            weekdaysMin: "ÐÑ_Ð”Ð°_ÐœÑ_Ð›Ñ…_ÐŸÒ¯_Ð‘Ð°_Ð‘Ñ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D",
                LLL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm",
                LLLL: "dddd, YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm"
            },
            meridiemParse: /Ò®Ó¨|Ò®Ð¥/i,
            isPM: function(e) {
                return "Ò®Ð¥" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "Ò®Ó¨" : "Ò®Ð¥"
            },
            calendar: {
                sameDay: "[Ó¨Ð½Ó©Ó©Ð´Ó©Ñ€] LT",
                nextDay: "[ÐœÐ°Ñ€Ð³Ð°Ð°Ñˆ] LT",
                nextWeek: "[Ð˜Ñ€ÑÑ…] dddd LT",
                lastDay: "[Ó¨Ñ‡Ð¸Ð³Ð´Ó©Ñ€] LT",
                lastWeek: "[Ó¨Ð½Ð³Ó©Ñ€ÑÓ©Ð½] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ð´Ð°Ñ€Ð°Ð°",
                past: "%s Ó©Ð¼Ð½Ó©",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} Ó©Ð´Ó©Ñ€/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + " Ó©Ð´Ó©Ñ€";
                    default:
                        return e
                }
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "à¥§",
                2: "à¥¨",
                3: "à¥©",
                4: "à¥ª",
                5: "à¥«",
                6: "à¥¬",
                7: "à¥­",
                8: "à¥®",
                9: "à¥¯",
                0: "à¥¦"
            },
            n = {
                "à¥§": "1",
                "à¥¨": "2",
                "à¥©": "3",
                "à¥ª": "4",
                "à¥«": "5",
                "à¥¬": "6",
                "à¥­": "7",
                "à¥®": "8",
                "à¥¯": "9",
                "à¥¦": "0"
            };

        function a(e, t, n, a) {
            var r = "";
            if (t) switch (n) {
                case "s":
                    r = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
                    break;
                case "ss":
                    r = "%d à¤¸à¥‡à¤•à¤‚à¤¦";
                    break;
                case "m":
                    r = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
                    break;
                case "mm":
                    r = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
                    break;
                case "h":
                    r = "à¤à¤• à¤¤à¤¾à¤¸";
                    break;
                case "hh":
                    r = "%d à¤¤à¤¾à¤¸";
                    break;
                case "d":
                    r = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
                    break;
                case "dd":
                    r = "%d à¤¦à¤¿à¤µà¤¸";
                    break;
                case "M":
                    r = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
                    break;
                case "MM":
                    r = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
                    break;
                case "y":
                    r = "à¤à¤• à¤µà¤°à¥à¤·";
                    break;
                case "yy":
                    r = "%d à¤µà¤°à¥à¤·à¥‡"
            } else switch (n) {
                case "s":
                    r = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                    break;
                case "ss":
                    r = "%d à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                    break;
                case "m":
                    r = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
                    break;
                case "mm":
                    r = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
                    break;
                case "h":
                    r = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
                    break;
                case "hh":
                    r = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
                    break;
                case "d":
                    r = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
                    break;
                case "dd":
                    r = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
                    break;
                case "M":
                    r = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
                    break;
                case "MM":
                    r = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
                    break;
                case "y":
                    r = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
                    break;
                case "yy":
                    r = "%d à¤µà¤°à¥à¤·à¤¾à¤‚"
            }
            return r.replace(/%d/i, e)
        }
        e.defineLocale("mr", {
            months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
            weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
            longDateFormat: {
                LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¤•à¤¾à¤²] LT",
                lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¤®à¤§à¥à¤¯à¥‡",
                past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            preparse: function(e) {
                return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /à¤ªà¤¹à¤¾à¤Ÿà¥‡|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€|à¤°à¤¾à¤¤à¥à¤°à¥€/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¤ªà¤¹à¤¾à¤Ÿà¥‡" === t || "à¤¸à¤•à¤¾à¤³à¥€" === t ? e : "à¤¦à¥à¤ªà¤¾à¤°à¥€" === t || "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" === t || "à¤°à¤¾à¤¤à¥à¤°à¥€" === t ? e >= 12 ? e : e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e >= 0 && e < 6 ? "à¤ªà¤¹à¤¾à¤Ÿà¥‡" : e < 12 ? "à¤¸à¤•à¤¾à¤³à¥€" : e < 17 ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : e < 20 ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ä unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_DiÄ‹embru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ä un_Lul_Aww_Set_Ott_Nov_DiÄ‹".split("_"),
            weekdays: "Il-Ä¦add_It-Tnejn_It-Tlieta_L-ErbgÄ§a_Il-Ä¦amis_Il-Ä imgÄ§a_Is-Sibt".split("_"),
            weekdaysShort: "Ä¦ad_Tne_Tli_Erb_Ä¦am_Ä im_Sib".split("_"),
            weekdaysMin: "Ä¦a_Tn_Tl_Er_Ä¦a_Ä i_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[GÄ§ada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraÄ§ fil-]LT",
                lastWeek: "dddd [li gÄ§adda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "fâ€™ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegÄ§a",
                hh: "%d siegÄ§at",
                d: "Ä¡urnata",
                dd: "%d Ä¡ranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "á",
                2: "á‚",
                3: "áƒ",
                4: "á„",
                5: "á…",
                6: "á†",
                7: "á‡",
                8: "áˆ",
                9: "á‰",
                0: "á€"
            },
            n = {
                "á": "1",
                "á‚": "2",
                "áƒ": "3",
                "á„": "4",
                "á…": "5",
                "á†": "6",
                "á‡": "7",
                "áˆ": "8",
                "á‰": "9",
                "á€": "0"
            };
        e.defineLocale("my", {
            months: "á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"),
            monthsShort: "á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"),
            weekdays: "á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"),
            weekdaysShort: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
            weekdaysMin: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[á€šá€”á€±.] LT [á€™á€¾á€¬]",
                nextDay: "[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]",
                nextWeek: "dddd LT [á€™á€¾á€¬]",
                lastDay: "[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]",
                lastWeek: "[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]",
                sameElse: "L"
            },
            relativeTime: {
                future: "á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬",
                past: "á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€",
                s: "á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º",
                ss: "%d á€…á€€á€¹á€€á€”á€·á€º",
                m: "á€á€…á€ºá€™á€­á€”á€…á€º",
                mm: "%d á€™á€­á€”á€…á€º",
                h: "á€á€…á€ºá€”á€¬á€›á€®",
                hh: "%d á€”á€¬á€›á€®",
                d: "á€á€…á€ºá€›á€€á€º",
                dd: "%d á€›á€€á€º",
                M: "á€á€…á€ºá€œ",
                MM: "%d á€œ",
                y: "á€á€…á€ºá€”á€¾á€…á€º",
                yy: "%d á€”á€¾á€…á€º"
            },
            preparse: function(e) {
                return e.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
            weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
            weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i gÃ¥r kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en mÃ¥ned",
                MM: "%d mÃ¥neder",
                y: "ett Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "à¥§",
                2: "à¥¨",
                3: "à¥©",
                4: "à¥ª",
                5: "à¥«",
                6: "à¥¬",
                7: "à¥­",
                8: "à¥®",
                9: "à¥¯",
                0: "à¥¦"
            },
            n = {
                "à¥§": "1",
                "à¥¨": "2",
                "à¥©": "3",
                "à¥ª": "4",
                "à¥«": "5",
                "à¥¬": "6",
                "à¥­": "7",
                "à¥®": "8",
                "à¥¯": "9",
                "à¥¦": "0"
            };
        e.defineLocale("ne", {
            months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
            weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),
            weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"
            },
            preparse: function(e) {
                return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¤¿" === t ? e < 4 ? e : e + 12 : "à¤¬à¤¿à¤¹à¤¾à¤¨" === t ? e : "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤à¤" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 3 ? "à¤°à¤¾à¤¤à¤¿" : e < 12 ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : e < 16 ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : e < 20 ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¤¿"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤­à¥‹à¤²à¤¿] LT",
                nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",
                lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",
                lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¤®à¤¾",
                past: "%s à¤…à¤—à¤¾à¤¡à¤¿",
                s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",
                ss: "%d à¤¸à¥‡à¤•à¥‡à¤£à¥à¤¡",
                m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",
                hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",
                d: "à¤à¤• à¤¦à¤¿à¤¨",
                dd: "%d à¤¦à¤¿à¤¨",
                M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",
                MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",
                y: "à¤à¤• à¤¬à¤°à¥à¤·",
                yy: "%d à¤¬à¤°à¥à¤·"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "Ã©Ã©n minuut",
                mm: "%d minuten",
                h: "Ã©Ã©n uur",
                hh: "%d uur",
                d: "Ã©Ã©n dag",
                dd: "%d dagen",
                M: "Ã©Ã©n maand",
                MM: "%d maanden",
                y: "Ã©Ã©n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "Ã©Ã©n minuut",
                mm: "%d minuten",
                h: "Ã©Ã©n uur",
                hh: "%d uur",
                d: "Ã©Ã©n dag",
                dd: "%d dagen",
                M: "Ã©Ã©n maand",
                MM: "%d maanden",
                y: "Ã©Ã©n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "su._mÃ¥._ty._on._to._fr._lau.".split("_"),
            weekdaysMin: "su_mÃ¥_ty_on_to_fr_la".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I gÃ¥r klokka] LT",
                lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein mÃ¥nad",
                MM: "%d mÃ¥nader",
                y: "eit Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("oc-lnc", {
            months: {
                standalone: "geniÃ¨r_febriÃ¨r_marÃ§_abril_mai_junh_julhet_agost_setembre_octÃ²bre_novembre_decembre".split("_"),
                format: "de geniÃ¨r_de febriÃ¨r_de marÃ§_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octÃ²bre_de novembre_de decembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._marÃ§_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimenge_diluns_dimars_dimÃ¨cres_dijÃ²us_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: "[uÃ¨i a] LT",
                nextDay: "[deman a] LT",
                nextWeek: "dddd [a] LT",
                lastDay: "[iÃ¨r a] LT",
                lastWeek: "dddd [passat a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquÃ­ %s",
                past: "fa %s",
                s: "unas segondas",
                ss: "%d segondas",
                m: "una minuta",
                mm: "%d minutas",
                h: "una ora",
                hh: "%d oras",
                d: "un jorn",
                dd: "%d jorns",
                M: "un mes",
                MM: "%d meses",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "Ã¨";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "à©§",
                2: "à©¨",
                3: "à©©",
                4: "à©ª",
                5: "à©«",
                6: "à©¬",
                7: "à©­",
                8: "à©®",
                9: "à©¯",
                0: "à©¦"
            },
            n = {
                "à©§": "1",
                "à©¨": "2",
                "à©©": "3",
                "à©ª": "4",
                "à©«": "5",
                "à©¬": "6",
                "à©­": "7",
                "à©®": "8",
                "à©¯": "9",
                "à©¦": "0"
            };
        e.defineLocale("pa-in", {
            months: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
            monthsShort: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
            weekdays: "à¨à¨¤à¨µà¨¾à¨°_à¨¸à©‹à¨®à¨µà¨¾à¨°_à¨®à©°à¨—à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©€à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨•à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©€à¨šà¨°à¨µà¨¾à¨°".split("_"),
            weekdaysShort: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
            weekdaysMin: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
            longDateFormat: {
                LT: "A h:mm à¨µà¨œà©‡",
                LTS: "A h:mm:ss à¨µà¨œà©‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¨µà¨œà©‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¨µà¨œà©‡"
            },
            calendar: {
                sameDay: "[à¨…à¨œ] LT",
                nextDay: "[à¨•à¨²] LT",
                nextWeek: "[à¨…à¨—à¨²à¨¾] dddd, LT",
                lastDay: "[à¨•à¨²] LT",
                lastWeek: "[à¨ªà¨¿à¨›à¨²à©‡] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¨µà¨¿à©±à¨š",
                past: "%s à¨ªà¨¿à¨›à¨²à©‡",
                s: "à¨•à©à¨ à¨¸à¨•à¨¿à©°à¨Ÿ",
                ss: "%d à¨¸à¨•à¨¿à©°à¨Ÿ",
                m: "à¨‡à¨• à¨®à¨¿à©°à¨Ÿ",
                mm: "%d à¨®à¨¿à©°à¨Ÿ",
                h: "à¨‡à©±à¨• à¨˜à©°à¨Ÿà¨¾",
                hh: "%d à¨˜à©°à¨Ÿà©‡",
                d: "à¨‡à©±à¨• à¨¦à¨¿à¨¨",
                dd: "%d à¨¦à¨¿à¨¨",
                M: "à¨‡à©±à¨• à¨®à¨¹à©€à¨¨à¨¾",
                MM: "%d à¨®à¨¹à©€à¨¨à©‡",
                y: "à¨‡à©±à¨• à¨¸à¨¾à¨²",
                yy: "%d à¨¸à¨¾à¨²"
            },
            preparse: function(e) {
                return e.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©‡à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à¨°à¨¾à¨¤" === t ? e < 4 ? e : e + 12 : "à¨¸à¨µà©‡à¨°" === t ? e : "à¨¦à©à¨ªà¨¹à¨¿à¨°" === t ? e >= 10 ? e : e + 12 : "à¨¸à¨¼à¨¾à¨®" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à¨°à¨¾à¨¤" : e < 10 ? "à¨¸à¨µà©‡à¨°" : e < 17 ? "à¨¦à©à¨ªà¨¹à¨¿à¨°" : e < 20 ? "à¨¸à¨¼à¨¾à¨®" : "à¨°à¨¾à¨¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_");

        function a(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function r(e, t, n) {
            var r = e + " ";
            switch (n) {
                case "ss":
                    return r + (a(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutÄ™";
                case "mm":
                    return r + (a(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinÄ™";
                case "hh":
                    return r + (a(e) ? "godziny" : "godzin");
                case "MM":
                    return r + (a(e) ? "miesiÄ…ce" : "miesiÄ™cy");
                case "yy":
                    return r + (a(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function(e, a) {
                return e ? "" === a ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(a) ? n[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
            weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_Å›r_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DziÅ› o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielÄ™ o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W Å›rodÄ™ o] LT";
                        case 6:
                            return "[W sobotÄ™ o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                        case 3:
                            return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                        case 6:
                            return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
                        default:
                            return "[W zeszÅ‚y] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: "1 dzieÅ„",
                dd: "%d dni",
                M: "miesiÄ…c",
                MM: r,
                y: "rok",
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("pt", {
            months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
            weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje Ã s] LT",
                nextDay: "[AmanhÃ£ Ã s] LT",
                nextWeek: "dddd [Ã s] LT",
                lastDay: "[Ontem Ã s] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "hÃ¡ %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mÃªs",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "domingo_segunda-feira_terÃ§a-feira_quarta-feira_quinta-feira_sexta-feira_sÃ¡bado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sÃ¡b".split("_"),
            weekdaysMin: "do_2Âª_3Âª_4Âª_5Âª_6Âª_sÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [Ã s] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje Ã s] LT",
                nextDay: "[AmanhÃ£ Ã s] LT",
                nextWeek: "dddd [Ã s] LT",
                lastDay: "[Ontem Ã s] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "hÃ¡ %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mÃªs",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº"
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n) {
            var a = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[n]
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mÃ¢ine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s Ã®n urmÄƒ",
                s: "cÃ¢teva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o orÄƒ",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lunÄƒ",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n) {
            var a, r;
            return "m" === n ? t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : e + " " + (a = +e, r = {
                ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
                mm: t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
                hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
                dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
                MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
                yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
            }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2])
        }
        var n = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];
        e.defineLocale("ru", {
            months: {
                format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),
                standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
            },
            monthsShort: {
                format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"),
                standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_")
            },
            weekdays: {
                standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
                format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
                isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?] ?dddd/
            },
            weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,
            monthsShortStrictRegex: /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ð³.",
                LLL: "D MMMM YYYY Ð³., H:mm",
                LLLL: "dddd, D MMMM YYYY Ð³., H:mm"
            },
            calendar: {
                sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT",
                nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ñ‡ÐµÑ€ÐµÐ· %s",
                past: "%s Ð½Ð°Ð·Ð°Ð´",
                s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
                ss: t,
                m: t,
                mm: t,
                h: "Ñ‡Ð°Ñ",
                hh: t,
                d: "Ð´ÐµÐ½ÑŒ",
                dd: t,
                M: "Ð¼ÐµÑÑÑ†",
                MM: t,
                y: "Ð³Ð¾Ð´",
                yy: t
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
            isPM: function(e) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "Ð½Ð¾Ñ‡Ð¸" : e < 12 ? "ÑƒÑ‚Ñ€Ð°" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-Ð¹";
                    case "D":
                        return e + "-Ð³Ð¾";
                    case "w":
                    case "W":
                        return e + "-Ñ";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["Ø¬Ù†ÙˆØ±ÙŠ", "ÙÙŠØ¨Ø±ÙˆØ±ÙŠ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÙŠÙ„", "Ù…Ø¦ÙŠ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¡Ù", "Ø¢Ú¯Ø³Ù½", "Ø³ÙŠÙ¾Ù½Ù…Ø¨Ø±", "Ø¢ÚªÙ½ÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "ÚŠØ³Ù…Ø¨Ø±"],
            n = ["Ø¢Ú†Ø±", "Ø³ÙˆÙ…Ø±", "Ø§Ú±Ø§Ø±Ùˆ", "Ø§Ø±Ø¨Ø¹", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹", "Ú‡Ù†Ú‡Ø±"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ddddØŒ D MMMM YYYY HH:mm"
            },
            meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
            isPM: function(e) {
                return "Ø´Ø§Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ú„] LT",
                nextDay: "[Ø³Ú€Ø§Ú»ÙŠ] LT",
                nextWeek: "dddd [Ø§Ú³ÙŠÙ† Ù‡ÙØªÙŠ ØªÙŠ] LT",
                lastDay: "[ÚªØ§Ù„Ù‡Ù‡] LT",
                lastWeek: "[Ú¯Ø²Ø±ÙŠÙ„ Ù‡ÙØªÙŠ] dddd [ØªÙŠ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ù¾ÙˆØ¡",
                past: "%s Ø§Ú³",
                s: "Ú†Ù†Ø¯ Ø³ÙŠÚªÙ†ÚŠ",
                ss: "%d Ø³ÙŠÚªÙ†ÚŠ",
                m: "Ù‡Úª Ù…Ù†Ù½",
                mm: "%d Ù…Ù†Ù½",
                h: "Ù‡Úª ÚªÙ„Ø§Úª",
                hh: "%d ÚªÙ„Ø§Úª",
                d: "Ù‡Úª ÚÙŠÙ†Ù‡Ù†",
                dd: "%d ÚÙŠÙ†Ù‡Ù†",
                M: "Ù‡Úª Ù…Ù‡ÙŠÙ†Ùˆ",
                MM: "%d Ù…Ù‡ÙŠÙ†Ø§",
                y: "Ù‡Úª Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("se", {
            months: "oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu".split("_"),
            monthsShort: "oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov".split("_"),
            weekdays: "sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat".split("_"),
            weekdaysShort: "sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geaÅ¾es",
                past: "maÅ‹it %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mÃ¡nnu",
                MM: "%d mÃ¡nut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("si", {
            months: "à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"),
            monthsShort: "à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"),
            weekdays: "à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"),
            weekdaysShort: "à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"),
            weekdaysMin: "à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[à¶…à¶¯] LT[à¶§]",
                nextDay: "[à·„à·™à¶§] LT[à¶§]",
                nextWeek: "dddd LT[à¶§]",
                lastDay: "[à¶Šà¶ºà·š] LT[à¶§]",
                lastWeek: "[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¶šà·’à¶±à·Š",
                past: "%sà¶šà¶§ à¶´à·™à¶»",
                s: "à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º",
                ss: "à¶­à¶­à·Šà¶´à¶» %d",
                m: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€",
                mm: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d",
                h: "à¶´à·à¶º",
                hh: "à¶´à·à¶º %d",
                d: "à¶¯à·’à¶±à¶º",
                dd: "à¶¯à·’à¶± %d",
                M: "à¶¸à·à·ƒà¶º",
                MM: "à¶¸à·à·ƒ %d",
                y: "à·€à·ƒà¶»",
                yy: "à·€à·ƒà¶» %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} à·€à·à¶±à·’/,
            ordinal: function(e) {
                return e + " à·€à·à¶±à·’"
            },
            meridiemParse: /à¶´à·™à¶» à·€à¶»à·”|à¶´à·ƒà·Š à·€à¶»à·”|à¶´à·™.à·€|à¶´.à·€./,
            isPM: function(e) {
                return "à¶´.à·€." === e || "à¶´à·ƒà·Š à·€à¶»à·”" === e
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "à¶´.à·€." : "à¶´à·ƒà·Š à·€à¶»à·”" : n ? "à¶´à·™.à·€." : "à¶´à·™à¶» à·€à¶»à·”"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),
            n = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");

        function a(e) {
            return e > 1 && e < 5
        }

        function r(e, t, n, r) {
            var i = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
                case "ss":
                    return t || r ? i + (a(e) ? "sekundy" : "sekÃºnd") : i + "sekundami";
                case "m":
                    return t ? "minÃºta" : r ? "minÃºtu" : "minÃºtou";
                case "mm":
                    return t || r ? i + (a(e) ? "minÃºty" : "minÃºt") : i + "minÃºtami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? i + (a(e) ? "hodiny" : "hodÃ­n") : i + "hodinami";
                case "d":
                    return t || r ? "deÅˆ" : "dÅˆom";
                case "dd":
                    return t || r ? i + (a(e) ? "dni" : "dnÃ­") : i + "dÅˆami";
                case "M":
                    return t || r ? "mesiac" : "mesiacom";
                case "MM":
                    return t || r ? i + (a(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                case "y":
                    return t || r ? "rok" : "rokom";
                case "yy":
                    return t || r ? i + (a(e) ? "roky" : "rokov") : i + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo Å¡tvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[vÄera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulÃº nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[minulÃ½] dddd [o] LT";
                        case 3:
                            return "[minulÃº stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [o] LT";
                        case 6:
                            return "[minulÃº sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            var r = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return r += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
                case "d":
                    return t || a ? "en dan" : "enim dnem";
                case "dd":
                    return r += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
                case "M":
                    return t || a ? "en mesec" : "enim mesecem";
                case "MM":
                    return r += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
                case "y":
                    return t || a ? "eno leto" : "enim letom";
                case "yy":
                    return r += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[vÄeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejÅ¡njo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejÅ¡njo] [sredo] [ob] LT";
                        case 6:
                            return "[prejÅ¡njo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejÅ¡nji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Äez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),
            weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),
            weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot nÃ«] LT",
                nextDay: "[NesÃ«r nÃ«] LT",
                nextWeek: "dddd [nÃ«] LT",
                lastDay: "[Dje nÃ«] LT",
                lastWeek: "dddd [e kaluar nÃ«] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nÃ« %s",
                past: "%s mÃ« parÃ«",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "njÃ« minutÃ«",
                mm: "%d minuta",
                h: "njÃ« orÃ«",
                hh: "%d orÃ«",
                d: "njÃ« ditÃ«",
                dd: "%d ditÃ«",
                M: "njÃ« muaj",
                MM: "%d muaj",
                y: "njÃ« vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, a) {
                var r = t.words[a];
                return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄe u] LT",
                lastWeek: function() {
                    return ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            words: {
                ss: ["ÑÐµÐºÑƒÐ½Ð´Ð°", "ÑÐµÐºÑƒÐ½Ð´Ðµ", "ÑÐµÐºÑƒÐ½Ð´Ð¸"],
                m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],
                mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],
                h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],
                hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"],
                dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"],
                MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"],
                yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, n, a) {
                var r = t.words[a];
                return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€_Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€_Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€_Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€_Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€".split("_"),
            monthsShort: "Ñ˜Ð°Ð½._Ñ„ÐµÐ±._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³._ÑÐµÐ¿._Ð¾ÐºÑ‚._Ð½Ð¾Ð²._Ð´ÐµÑ†.".split("_"),
            monthsParseExact: !0,
            weekdays: "Ð½ÐµÐ´ÐµÑ™Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº_ÑƒÑ‚Ð¾Ñ€Ð°Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº_Ð¿ÐµÑ‚Ð°Ðº_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´._Ð¿Ð¾Ð½._ÑƒÑ‚Ð¾._ÑÑ€Ðµ._Ñ‡ÐµÑ‚._Ð¿ÐµÑ‚._ÑÑƒÐ±.".split("_"),
            weekdaysMin: "Ð½Ðµ_Ð¿Ð¾_ÑƒÑ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_ÑÑƒ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",
                nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
                        case 3:
                            return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
                        case 6:
                            return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ñƒ] dddd [Ñƒ] LT"
                    }
                },
                lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",
                lastWeek: function() {
                    return ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "Ð¿Ñ€Ðµ %s",
                s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "Ð´Ð°Ð½",
                dd: t.translate,
                M: "Ð¼ÐµÑÐµÑ†",
                MM: t.translate,
                y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
            weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
            weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[IgÃ¥r] LT",
                nextWeek: "[PÃ¥] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "fÃ¶r %s sedan",
                s: "nÃ¥gra sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en mÃ¥nad",
                MM: "%d mÃ¥nader",
                y: "ett Ã¥r",
                yy: "%d Ã¥r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === t || 2 === t ? ":a" : ":e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "hh:mm A",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "siku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
                1: "à¯§",
                2: "à¯¨",
                3: "à¯©",
                4: "à¯ª",
                5: "à¯«",
                6: "à¯¬",
                7: "à¯­",
                8: "à¯®",
                9: "à¯¯",
                0: "à¯¦"
            },
            n = {
                "à¯§": "1",
                "à¯¨": "2",
                "à¯©": "3",
                "à¯ª": "4",
                "à¯«": "5",
                "à¯¬": "6",
                "à¯­": "7",
                "à¯®": "8",
                "à¯¯": "9",
                "à¯¦": "0"
            };
        e.defineLocale("ta", {
            months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
            monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
            weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
            weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),
            weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[à®‡à®©à¯à®±à¯] LT",
                nextDay: "[à®¨à®¾à®³à¯ˆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",
                lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à®‡à®²à¯",
                past: "%s à®®à¯à®©à¯",
                s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
                ss: "%d à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
                m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
                mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",
                h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                d: "à®’à®°à¯ à®¨à®¾à®³à¯",
                dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",
                M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",
                MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",
                y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",
                yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"
            },
            dayOfMonthOrdinalParse: /\d{1,2}à®µà®¤à¯/,
            ordinal: function(e) {
                return e + "à®µà®¤à¯"
            },
            preparse: function(e) {
                return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, (function(e) {
                    return n[e]
                }))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }))
            },
            meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,
            meridiem: function(e, t, n) {
                return e < 2 ? " à®¯à®¾à®®à®®à¯" : e < 6 ? " à®µà¯ˆà®•à®±à¯ˆ" : e < 10 ? " à®•à®¾à®²à¯ˆ" : e < 14 ? " à®¨à®£à¯à®ªà®•à®²à¯" : e < 18 ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : e < 22 ? " à®®à®¾à®²à¯ˆ" : " à®¯à®¾à®®à®®à¯"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à®¯à®¾à®®à®®à¯" === t ? e < 2 ? e : e + 12 : "à®µà¯ˆà®•à®±à¯ˆ" === t || "à®•à®¾à®²à¯ˆ" === t || "à®¨à®£à¯à®ªà®•à®²à¯" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("te", {
            months: "à°œà°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±‡_à°œà±‚à°¨à±_à°œà±à°²à±ˆ_à°†à°—à°¸à±à°Ÿà±_à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±_à°…à°•à±à°Ÿà±‹à°¬à°°à±_à°¨à°µà°‚à°¬à°°à±_à°¡à°¿à°¸à±†à°‚à°¬à°°à±".split("_"),
            monthsShort: "à°œà°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿._à°®à±‡_à°œà±‚à°¨à±_à°œà±à°²à±ˆ_à°†à°—._à°¸à±†à°ªà±._à°…à°•à±à°Ÿà±‹._à°¨à°µ._à°¡à°¿à°¸à±†.".split("_"),
            monthsParseExact: !0,
            weekdays: "à°†à°¦à°¿à°µà°¾à°°à°‚_à°¸à±‹à°®à°µà°¾à°°à°‚_à°®à°‚à°—à°³à°µà°¾à°°à°‚_à°¬à±à°§à°µà°¾à°°à°‚_à°—à±à°°à±à°µà°¾à°°à°‚_à°¶à±à°•à±à°°à°µà°¾à°°à°‚_à°¶à°¨à°¿à°µà°¾à°°à°‚".split("_"),
            weekdaysShort: "à°†à°¦à°¿_à°¸à±‹à°®_à°®à°‚à°—à°³_à°¬à±à°§_à°—à±à°°à±_à°¶à±à°•à±à°°_à°¶à°¨à°¿".split("_"),
            weekdaysMin: "à°†_à°¸à±‹_à°®à°‚_à°¬à±_à°—à±_à°¶à±_à°¶".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à°¨à±‡à°¡à±] LT",
                nextDay: "[à°°à±‡à°ªà±] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à°¨à°¿à°¨à±à°¨] LT",
                lastWeek: "[à°—à°¤] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à°²à±‹",
                past: "%s à°•à±à°°à°¿à°¤à°‚",
                s: "à°•à±Šà°¨à±à°¨à°¿ à°•à±à°·à°£à°¾à°²à±",
                ss: "%d à°¸à±†à°•à°¨à±à°²à±",
                m: "à°’à°• à°¨à°¿à°®à°¿à°·à°‚",
                mm: "%d à°¨à°¿à°®à°¿à°·à°¾à°²à±",
                h: "à°’à°• à°—à°‚à°Ÿ",
                hh: "%d à°—à°‚à°Ÿà°²à±",
                d: "à°’à°• à°°à±‹à°œà±",
                dd: "%d à°°à±‹à°œà±à°²à±",
                M: "à°’à°• à°¨à±†à°²",
                MM: "%d à°¨à±†à°²à°²à±",
                y: "à°’à°• à°¸à°‚à°µà°¤à±à°¸à°°à°‚",
                yy: "%d à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°²à±"
            },
            dayOfMonthOrdinalParse: /\d{1,2}à°µ/,
            ordinal: "%dà°µ",
            meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°‰à°¦à°¯à°‚|à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚|à°¸à°¾à°¯à°‚à°¤à±à°°à°‚/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "à°°à°¾à°¤à±à°°à°¿" === t ? e < 4 ? e : e + 12 : "à°‰à°¦à°¯à°‚" === t ? e : "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" === t ? e >= 10 ? e : e + 12 : "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "à°°à°¾à°¤à±à°°à°¿" : e < 10 ? "à°‰à°¦à°¯à°‚" : e < 17 ? "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" : e < 20 ? "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" : "à°°à°¾à°¤à±à°°à°¿"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_JuÃ±u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "segundu balun",
                ss: "segundu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            0: "-ÑƒÐ¼",
            1: "-ÑƒÐ¼",
            2: "-ÑŽÐ¼",
            3: "-ÑŽÐ¼",
            4: "-ÑƒÐ¼",
            5: "-ÑƒÐ¼",
            6: "-ÑƒÐ¼",
            7: "-ÑƒÐ¼",
            8: "-ÑƒÐ¼",
            9: "-ÑƒÐ¼",
            10: "-ÑƒÐ¼",
            12: "-ÑƒÐ¼",
            13: "-ÑƒÐ¼",
            20: "-ÑƒÐ¼",
            30: "-ÑŽÐ¼",
            40: "-ÑƒÐ¼",
            50: "-ÑƒÐ¼",
            60: "-ÑƒÐ¼",
            70: "-ÑƒÐ¼",
            80: "-ÑƒÐ¼",
            90: "-ÑƒÐ¼",
            100: "-ÑƒÐ¼"
        };
        e.defineLocale("tg", {
            months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "ÑÐºÑˆÐ°Ð½Ð±Ðµ_Ð´ÑƒÑˆÐ°Ð½Ð±Ðµ_ÑÐµÑˆÐ°Ð½Ð±Ðµ_Ñ‡Ð¾Ñ€ÑˆÐ°Ð½Ð±Ðµ_Ð¿Ð°Ð½Ò·ÑˆÐ°Ð½Ð±Ðµ_Ò·ÑƒÐ¼ÑŠÐ°_ÑˆÐ°Ð½Ð±Ðµ".split("_"),
            weekdaysShort: "ÑÑˆÐ±_Ð´ÑˆÐ±_ÑÑˆÐ±_Ñ‡ÑˆÐ±_Ð¿ÑˆÐ±_Ò·ÑƒÐ¼_ÑˆÐ½Ð±".split("_"),
            weekdaysMin: "ÑÑˆ_Ð´Ñˆ_ÑÑˆ_Ñ‡Ñˆ_Ð¿Ñˆ_Ò·Ð¼_ÑˆÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð˜Ð¼Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
                nextDay: "[ÐŸÐ°Ð³Ð¾Ò³ ÑÐ¾Ð°Ñ‚Ð¸] LT",
                lastDay: "[Ð”Ð¸Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
                nextWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð¾ÑÐ½Ð´Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
                lastWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð³ÑƒÐ·Ð°ÑˆÑ‚Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð±Ð°ÑŠÐ´Ð¸ %s",
                past: "%s Ð¿ÐµÑˆ",
                s: "ÑÐºÑ‡Ð°Ð½Ð´ ÑÐ¾Ð½Ð¸Ñ",
                m: "ÑÐº Ð´Ð°Ò›Ð¸Ò›Ð°",
                mm: "%d Ð´Ð°Ò›Ð¸Ò›Ð°",
                h: "ÑÐº ÑÐ¾Ð°Ñ‚",
                hh: "%d ÑÐ¾Ð°Ñ‚",
                d: "ÑÐº Ñ€Ó¯Ð·",
                dd: "%d Ñ€Ó¯Ð·",
                M: "ÑÐº Ð¼Ð¾Ò³",
                MM: "%d Ð¼Ð¾Ò³",
                y: "ÑÐº ÑÐ¾Ð»",
                yy: "%d ÑÐ¾Ð»"
            },
            meridiemParse: /ÑˆÐ°Ð±|ÑÑƒÐ±Ò³|Ñ€Ó¯Ð·|Ð±ÐµÐ³Ð¾Ò³/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ÑˆÐ°Ð±" === t ? e < 4 ? e : e + 12 : "ÑÑƒÐ±Ò³" === t ? e : "Ñ€Ó¯Ð·" === t ? e >= 11 ? e : e + 12 : "Ð±ÐµÐ³Ð¾Ò³" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "ÑˆÐ°Ð±" : e < 11 ? "ÑÑƒÐ±Ò³" : e < 16 ? "Ñ€Ó¯Ð·" : e < 19 ? "Ð±ÐµÐ³Ð¾Ò³" : "ÑˆÐ°Ð±"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÑƒÐ¼|ÑŽÐ¼)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("th", {
            months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),
            monthsShort: "à¸¡.à¸„._à¸.à¸ž._à¸¡à¸µ.à¸„._à¹€à¸¡.à¸¢._à¸ž.à¸„._à¸¡à¸´.à¸¢._à¸.à¸„._à¸ª.à¸„._à¸.à¸¢._à¸•.à¸„._à¸ž.à¸¢._à¸˜.à¸„.".split("_"),
            monthsParseExact: !0,
            weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
            weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
            weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm",
                LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm"
            },
            meridiemParse: /à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/,
            isPM: function(e) {
                return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
            },
            calendar: {
                sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",
                lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "à¸­à¸µà¸ %s",
                past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",
                s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",
                ss: "%d à¸§à¸´à¸™à¸²à¸—à¸µ",
                m: "1 à¸™à¸²à¸—à¸µ",
                mm: "%d à¸™à¸²à¸—à¸µ",
                h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                d: "1 à¸§à¸±à¸™",
                dd: "%d à¸§à¸±à¸™",
                M: "1 à¹€à¸”à¸·à¸­à¸™",
                MM: "%d à¹€à¸”à¸·à¸­à¸™",
                y: "1 à¸›à¸µ",
                yy: "%d à¸›à¸µ"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'Ã¼nji",
            4: "'Ã¼nji",
            100: "'Ã¼nji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy"
        };
        e.defineLocale("tk", {
            months: "Ãanwar_Fewral_Mart_Aprel_MaÃ½_IÃ½un_IÃ½ul_Awgust_SentÃ½abr_OktÃ½abr_NoÃ½abr_Dekabr".split("_"),
            monthsShort: "Ãan_Few_Mar_Apr_MaÃ½_IÃ½n_IÃ½l_Awg_Sen_Okt_NoÃ½_Dek".split("_"),
            weekdays: "ÃekÅŸenbe_DuÅŸenbe_SiÅŸenbe_Ã‡arÅŸenbe_PenÅŸenbe_Anna_Åženbe".split("_"),
            weekdaysShort: "Ãek_DuÅŸ_SiÅŸ_Ã‡ar_Pen_Ann_Åžen".split("_"),
            weekdaysMin: "Ãk_DÅŸ_SÅŸ_Ã‡r_Pn_An_Åžn".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n sagat] LT",
                nextDay: "[ertir sagat] LT",
                nextWeek: "[indiki] dddd [sagat] LT",
                lastDay: "[dÃ¼Ã½n] LT",
                lastWeek: "[geÃ§en] dddd [sagat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s soÅˆ",
                past: "%s Ã¶Åˆ",
                s: "birnÃ¤Ã§e sekunt",
                m: "bir minut",
                mm: "%d minut",
                h: "bir sagat",
                hh: "%d sagat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                M: "bir aÃ½",
                MM: "%d aÃ½",
                y: "bir Ã½yl",
                yy: "%d Ã½yl"
            },
            ordinal: function(e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e) return e + "'unjy";
                        var a = e % 10;
                        return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = "pagh_waâ€™_chaâ€™_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function n(e, n, a, r) {
            var i = function(e) {
                var n = Math.floor(e % 1e3 / 100),
                    a = Math.floor(e % 100 / 10),
                    r = e % 10,
                    i = "";
                return n > 0 && (i += t[n] + "vatlh"), a > 0 && (i += ("" !== i ? " " : "") + t[a] + "maH"), r > 0 && (i += ("" !== i ? " " : "") + t[r]), "" === i ? "pagh" : i
            }(e);
            switch (a) {
                case "ss":
                    return i + " lup";
                case "mm":
                    return i + " tup";
                case "hh":
                    return i + " rep";
                case "dd":
                    return i + " jaj";
                case "MM":
                    return i + " jar";
                case "yy":
                    return i + " DIS"
            }
        }
        e.defineLocale("tlh", {
            months: "teraâ€™ jar waâ€™_teraâ€™ jar chaâ€™_teraâ€™ jar wej_teraâ€™ jar loS_teraâ€™ jar vagh_teraâ€™ jar jav_teraâ€™ jar Soch_teraâ€™ jar chorgh_teraâ€™ jar Hut_teraâ€™ jar waâ€™maH_teraâ€™ jar waâ€™maH waâ€™_teraâ€™ jar waâ€™maH chaâ€™".split("_"),
            monthsShort: "jar waâ€™_jar chaâ€™_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâ€™maH_jar waâ€™maH waâ€™_jar waâ€™maH chaâ€™".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[waâ€™leS] LT",
                nextWeek: "LLL",
                lastDay: "[waâ€™Huâ€™] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Huâ€™" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: n,
                m: "waâ€™ tup",
                mm: n,
                h: "waâ€™ rep",
                hh: n,
                d: "waâ€™ jaj",
                dd: n,
                M: "waâ€™ jar",
                MM: n,
                y: "waâ€™ DIS",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'Ã¼ncÃ¼",
            4: "'Ã¼ncÃ¼",
            100: "'Ã¼ncÃ¼",
            6: "'ncÄ±",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'Ä±ncÄ±",
            90: "'Ä±ncÄ±"
        };
        e.defineLocale("tr", {
            months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),
            monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "Ã¶Ã¶" : "Ã–Ã–" : n ? "Ã¶s" : "Ã–S"
            },
            meridiemParse: /Ã¶Ã¶|Ã–Ã–|Ã¶s|Ã–S/,
            isPM: function(e) {
                return "Ã¶s" === e || "Ã–S" === e
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n saat] LT",
                nextDay: "[yarÄ±n saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dÃ¼n] LT",
                lastWeek: "[geÃ§en] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s Ã¶nce",
                s: "birkaÃ§ saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yÄ±l",
                yy: "%d yÄ±l"
            },
            ordinal: function(e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e) return e + "'Ä±ncÄ±";
                        var a = e % 10;
                        return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n, a) {
            var r = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n mÃ­ut", "'iens mÃ­ut"],
                mm: [e + " mÃ­uts", e + " mÃ­uts"],
                h: ["'n Ã¾ora", "'iensa Ã¾ora"],
                hh: [e + " Ã¾oras", e + " Ã¾oras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return a || t ? r[n][0] : r[n][1]
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi".split("_"),
            weekdaysShort: "SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t".split("_"),
            weekdaysMin: "SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi Ã ] LT",
                nextDay: "[demÃ  Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[ieiri Ã ] LT",
                lastWeek: "[sÃ¼r el] dddd [lasteu Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tzm", {
            months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
            monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
            weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[â´°âµ™â´·âµ… â´´] LT",
                nextDay: "[â´°âµ™â´½â´° â´´] LT",
                nextWeek: "dddd [â´´] LT",
                lastDay: "[â´°âµšâ´°âµâµœ â´´] LT",
                lastWeek: "dddd [â´´] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",
                past: "âµ¢â´°âµ %s",
                s: "âµ‰âµŽâµ‰â´½",
                ss: "%d âµ‰âµŽâµ‰â´½",
                m: "âµŽâµ‰âµâµ“â´º",
                mm: "%d âµŽâµ‰âµâµ“â´º",
                h: "âµ™â´°âµ„â´°",
                hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",
                d: "â´°âµ™âµ™",
                dd: "%d oâµ™âµ™â´°âµ",
                M: "â´°âµ¢oâµ“âµ”",
                MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",
                y: "â´°âµ™â´³â´°âµ™",
                yy: "%d âµ‰âµ™â´³â´°âµ™âµ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tzm-latn", {
            months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuá¸",
                mm: "%d minuá¸",
                h: "saÉ›a",
                hh: "%d tassaÉ›in",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js language configuration
        e.defineLocale("ug-cn", {
            months: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
            monthsShort: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
            weekdays: "ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•_Ø¯ÛˆØ´Û•Ù†Ø¨Û•_Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•_Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•_Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•_Ø¬ÛˆÙ…Û•_Ø´Û•Ù†Ø¨Û•".split("_"),
            weekdaysShort: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
            weekdaysMin: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰",
                LLL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm",
                LLLL: "ddddØŒ YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm"
            },
            meridiemParse: /ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•|Ø³Û•Ú¾Û•Ø±|Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†|Ú†ÛˆØ´|Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†|ÙƒÛ•Ú†/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" === t || "Ø³Û•Ú¾Û•Ø±" === t || "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" === t ? e : "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" === t || "ÙƒÛ•Ú†" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" : a < 900 ? "Ø³Û•Ú¾Û•Ø±" : a < 1130 ? "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" : a < 1230 ? "Ú†ÛˆØ´" : a < 1800 ? "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" : "ÙƒÛ•Ú†"
            },
            calendar: {
                sameDay: "[Ø¨ÛˆÚ¯ÛˆÙ† Ø³Ø§Ø¦Û•Øª] LT",
                nextDay: "[Ø¦Û•ØªÛ• Ø³Ø§Ø¦Û•Øª] LT",
                nextWeek: "[ÙƒÛÙ„Û•Ø±ÙƒÙ‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
                lastDay: "[ØªÛ†Ù†ÛˆÚ¯ÛˆÙ†] LT",
                lastWeek: "[Ø¦Ø§Ù„Ø¯Ù‰Ù†Ù‚Ù‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ÙƒÛÙŠÙ‰Ù†",
                past: "%s Ø¨Û‡Ø±Û‡Ù†",
                s: "Ù†Û•Ú†Ú†Û• Ø³ÛÙƒÙˆÙ†Øª",
                ss: "%d Ø³ÛÙƒÙˆÙ†Øª",
                m: "Ø¨Ù‰Ø± Ù…Ù‰Ù†Û‡Øª",
                mm: "%d Ù…Ù‰Ù†Û‡Øª",
                h: "Ø¨Ù‰Ø± Ø³Ø§Ø¦Û•Øª",
                hh: "%d Ø³Ø§Ø¦Û•Øª",
                d: "Ø¨Ù‰Ø± ÙƒÛˆÙ†",
                dd: "%d ÙƒÛˆÙ†",
                M: "Ø¨Ù‰Ø± Ø¦Ø§ÙŠ",
                MM: "%d Ø¦Ø§ÙŠ",
                y: "Ø¨Ù‰Ø± ÙŠÙ‰Ù„",
                yy: "%d ÙŠÙ‰Ù„"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-ÙƒÛˆÙ†Ù‰|-Ø¦Ø§ÙŠ|-Ú¾Û•Ù¾ØªÛ•)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "-ÙƒÛˆÙ†Ù‰";
                    case "w":
                    case "W":
                        return e + "-Ú¾Û•Ù¾ØªÛ•";
                    default:
                        return e
                }
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        function t(e, t, n) {
            var a, r;
            return "m" === n ? t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === n ? t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : e + " " + (a = +e, r = {
                ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´",
                mm: t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",
                hh: t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",
                dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",
                MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
                yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"
            }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2])
        }

        function n(e) {
            return function() {
                return e + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),
                standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
            },
            monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
            weekdays: function(e, t) {
                var n = {
                    nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                    accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                    genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
                };
                return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ñ€.",
                LLL: "D MMMM YYYY Ñ€., HH:mm",
                LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm"
            },
            calendar: {
                sameDay: n("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
                nextDay: n("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
                lastDay: n("[Ð’Ñ‡Ð¾Ñ€Ð° "),
                nextWeek: n("[Ð£] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "%s Ñ‚Ð¾Ð¼Ñƒ",
                s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",
                ss: t,
                m: t,
                mm: t,
                h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                hh: t,
                d: "Ð´ÐµÐ½ÑŒ",
                dd: t,
                M: "Ð¼Ñ–ÑÑÑ†ÑŒ",
                MM: t,
                y: "Ñ€Ñ–Ðº",
                yy: t
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
            isPM: function(e) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "Ð½Ð¾Ñ‡Ñ–" : e < 12 ? "Ñ€Ð°Ð½ÐºÑƒ" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-Ð¹";
                    case "D":
                        return e + "-Ð³Ð¾";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        var t = ["Ø¬Ù†ÙˆØ±ÛŒ", "ÙØ±ÙˆØ±ÛŒ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÛŒÙ„", "Ù…Ø¦ÛŒ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¦ÛŒ", "Ø§Ú¯Ø³Øª", "Ø³ØªÙ…Ø¨Ø±", "Ø§Ú©ØªÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "Ø¯Ø³Ù…Ø¨Ø±"],
            n = ["Ø§ØªÙˆØ§Ø±", "Ù¾ÛŒØ±", "Ù…Ù†Ú¯Ù„", "Ø¨Ø¯Ú¾", "Ø¬Ù…Ø¹Ø±Ø§Øª", "Ø¬Ù…Ø¹Û", "ÛÙØªÛ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ddddØŒ D MMMM YYYY HH:mm"
            },
            meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
            isPM: function(e) {
                return "Ø´Ø§Ù…" === e
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…"
            },
            calendar: {
                sameDay: "[Ø¢Ø¬ Ø¨ÙˆÙ‚Øª] LT",
                nextDay: "[Ú©Ù„ Ø¨ÙˆÙ‚Øª] LT",
                nextWeek: "dddd [Ø¨ÙˆÙ‚Øª] LT",
                lastDay: "[Ú¯Ø°Ø´ØªÛ Ø±ÙˆØ² Ø¨ÙˆÙ‚Øª] LT",
                lastWeek: "[Ú¯Ø°Ø´ØªÛ] dddd [Ø¨ÙˆÙ‚Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ø¨Ø¹Ø¯",
                past: "%s Ù‚Ø¨Ù„",
                s: "Ú†Ù†Ø¯ Ø³ÛŒÚ©Ù†Úˆ",
                ss: "%d Ø³ÛŒÚ©Ù†Úˆ",
                m: "Ø§ÛŒÚ© Ù…Ù†Ù¹",
                mm: "%d Ù…Ù†Ù¹",
                h: "Ø§ÛŒÚ© Ú¯Ú¾Ù†Ù¹Û",
                hh: "%d Ú¯Ú¾Ù†Ù¹Û’",
                d: "Ø§ÛŒÚ© Ø¯Ù†",
                dd: "%d Ø¯Ù†",
                M: "Ø§ÛŒÚ© Ù…Ø§Û",
                MM: "%d Ù…Ø§Û",
                y: "Ø§ÛŒÚ© Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function(e) {
                return e.replace(/ØŒ/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("uz", {
            months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),
            weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),
            weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",
                nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",
                past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",
                s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚",
                ss: "%d Ñ„ÑƒÑ€ÑÐ°Ñ‚",
                m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",
                mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°",
                h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",
                hh: "%d ÑÐ¾Ð°Ñ‚",
                d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½",
                dd: "%d ÐºÑƒÐ½",
                M: "Ð±Ð¸Ñ€ Ð¾Ð¹",
                MM: "%d Ð¾Ð¹",
                y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",
                yy: "%d Ð¹Ð¸Ð»"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("vi", {
            months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),
            monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
            monthsParseExact: !0,
            weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [nÄƒm] YYYY",
                LLL: "D MMMM [nÄƒm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [nÄƒm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[HÃ´m nay lÃºc] LT",
                nextDay: "[NgÃ y mai lÃºc] LT",
                nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT",
                lastDay: "[HÃ´m qua lÃºc] LT",
                lastWeek: "dddd [tuáº§n trÆ°á»›c lÃºc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tá»›i",
                past: "%s trÆ°á»›c",
                s: "vÃ i giÃ¢y",
                ss: "%d giÃ¢y",
                m: "má»™t phÃºt",
                mm: "%d phÃºt",
                h: "má»™t giá»",
                hh: "%d giá»",
                d: "má»™t ngÃ y",
                dd: "%d ngÃ y",
                M: "má»™t thÃ¡ng",
                MM: "%d thÃ¡ng",
                y: "má»™t nÄƒm",
                yy: "%d nÄƒm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("x-pseudo", {
            months: "J~Ã¡Ã±ÃºÃ¡~rÃ½_F~Ã©brÃº~Ã¡rÃ½_~MÃ¡rc~h_Ãp~rÃ­l_~MÃ¡Ã½_~JÃºÃ±Ã©~_JÃºl~Ã½_ÃÃº~gÃºst~_SÃ©p~tÃ©mb~Ã©r_Ã“~ctÃ³b~Ã©r_Ã‘~Ã³vÃ©m~bÃ©r_~DÃ©cÃ©~mbÃ©r".split("_"),
            monthsShort: "J~Ã¡Ã±_~FÃ©b_~MÃ¡r_~Ãpr_~MÃ¡Ã½_~JÃºÃ±_~JÃºl_~ÃÃºg_~SÃ©p_~Ã“ct_~Ã‘Ã³v_~DÃ©c".split("_"),
            monthsParseExact: !0,
            weekdays: "S~ÃºÃ±dÃ¡~Ã½_MÃ³~Ã±dÃ¡Ã½~_TÃºÃ©~sdÃ¡Ã½~_WÃ©d~Ã±Ã©sd~Ã¡Ã½_T~hÃºrs~dÃ¡Ã½_~FrÃ­d~Ã¡Ã½_S~Ã¡tÃºr~dÃ¡Ã½".split("_"),
            weekdaysShort: "S~ÃºÃ±_~MÃ³Ã±_~TÃºÃ©_~WÃ©d_~ThÃº_~FrÃ­_~SÃ¡t".split("_"),
            weekdaysMin: "S~Ãº_MÃ³~_TÃº_~WÃ©_T~h_Fr~_SÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~Ã³dÃ¡~Ã½ Ã¡t] LT",
                nextDay: "[T~Ã³mÃ³~rrÃ³~w Ã¡t] LT",
                nextWeek: "dddd [Ã¡t] LT",
                lastDay: "[Ã~Ã©st~Ã©rdÃ¡~Ã½ Ã¡t] LT",
                lastWeek: "[L~Ã¡st] dddd [Ã¡t] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ã­~Ã± %s",
                past: "%s Ã¡~gÃ³",
                s: "Ã¡ ~fÃ©w ~sÃ©cÃ³~Ã±ds",
                ss: "%d s~Ã©cÃ³Ã±~ds",
                m: "Ã¡ ~mÃ­Ã±~ÃºtÃ©",
                mm: "%d m~Ã­Ã±Ãº~tÃ©s",
                h: "Ã¡~Ã± hÃ³~Ãºr",
                hh: "%d h~Ã³Ãºrs",
                d: "Ã¡ ~dÃ¡Ã½",
                dd: "%d d~Ã¡Ã½s",
                M: "Ã¡ ~mÃ³Ã±~th",
                MM: "%d m~Ã³Ã±t~hs",
                y: "Ã¡ ~Ã½Ã©Ã¡r",
                yy: "%d Ã½~Ã©Ã¡rs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("yo", {
            months: "Sáº¹Ìráº¹Ì_EÌ€reÌ€leÌ€_áº¸ráº¹Ì€naÌ€_IÌ€gbeÌ_EÌ€bibi_OÌ€kuÌ€du_Agáº¹mo_OÌ€guÌn_Owewe_á»ŒÌ€waÌ€raÌ€_BeÌluÌ_á»ŒÌ€páº¹Ì€Ì€".split("_"),
            monthsShort: "Sáº¹Ìr_EÌ€rl_áº¸rn_IÌ€gb_EÌ€bi_OÌ€kuÌ€_Agáº¹_OÌ€guÌ_Owe_á»ŒÌ€waÌ€_BeÌl_á»ŒÌ€páº¹Ì€Ì€".split("_"),
            weekdays: "AÌ€iÌ€kuÌ_AjeÌ_IÌ€sáº¹Ìgun_á»Œjá»ÌruÌ_á»Œjá»Ìbá»_áº¸tiÌ€_AÌ€baÌmáº¹Ìta".split("_"),
            weekdaysShort: "AÌ€iÌ€k_AjeÌ_IÌ€sáº¹Ì_á»Œjr_á»Œjb_áº¸tiÌ€_AÌ€baÌ".split("_"),
            weekdaysMin: "AÌ€iÌ€_Aj_IÌ€s_á»Œr_á»Œb_áº¸t_AÌ€b".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[OÌ€niÌ€ ni] LT",
                nextDay: "[á»ŒÌ€la ni] LT",
                nextWeek: "dddd [á»Œsáº¹Ì€ toÌn'bá»] [ni] LT",
                lastDay: "[AÌ€na ni] LT",
                lastWeek: "dddd [á»Œsáº¹Ì€ toÌlá»Ì] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "niÌ %s",
                past: "%s ká»jaÌ",
                s: "iÌ€sáº¹juÌ aayaÌ die",
                ss: "aayaÌ %d",
                m: "iÌ€sáº¹juÌ kan",
                mm: "iÌ€sáº¹juÌ %d",
                h: "waÌkati kan",
                hh: "waÌkati %d",
                d: "á»já»Ì kan",
                dd: "á»já»Ì %d",
                M: "osuÌ€ kan",
                MM: "osuÌ€ %d",
                y: "á»duÌn kan",
                yy: "á»duÌn %d"
            },
            dayOfMonthOrdinalParse: /á»já»Ì\s\d{1,2}/,
            ordinal: "á»já»Ì %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-cn", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥Ahç‚¹mmåˆ†",
                LLLL: "YYYYå¹´MæœˆDæ—¥ddddAhç‚¹mmåˆ†",
                l: "YYYY/M/D",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "å‡Œæ™¨" : a < 900 ? "æ—©ä¸Š" : a < 1130 ? "ä¸Šåˆ" : a < 1230 ? "ä¸­åˆ" : a < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©]LT",
                nextDay: "[æ˜Žå¤©]LT",
                nextWeek: function(e) {
                    return e.week() !== this.week() ? "[ä¸‹]dddLT" : "[æœ¬]dddLT"
                },
                lastDay: "[æ˜¨å¤©]LT",
                lastWeek: function(e) {
                    return this.week() !== e.week() ? "[ä¸Š]dddLT" : "[æœ¬]dddLT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "å‘¨";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%såŽ",
                past: "%så‰",
                s: "å‡ ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é’Ÿ",
                mm: "%d åˆ†é’Ÿ",
                h: "1 å°æ—¶",
                hh: "%d å°æ—¶",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 ä¸ªæœˆ",
                MM: "%d ä¸ªæœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-hk", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "å‡Œæ™¨" : a < 900 ? "æ—©ä¸Š" : a < 1200 ? "ä¸Šåˆ" : 1200 === a ? "ä¸­åˆ" : a < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©]LT",
                nextDay: "[æ˜Žå¤©]LT",
                nextWeek: "[ä¸‹]ddddLT",
                lastDay: "[æ˜¨å¤©]LT",
                lastWeek: "[ä¸Š]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så¾Œ",
                past: "%så‰",
                s: "å¹¾ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é˜",
                mm: "%d åˆ†é˜",
                h: "1 å°æ™‚",
                hh: "%d å°æ™‚",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 å€‹æœˆ",
                MM: "%d å€‹æœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-mo", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                l: "D/M/YYYY",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "å‡Œæ™¨" : a < 900 ? "æ—©ä¸Š" : a < 1130 ? "ä¸Šåˆ" : a < 1230 ? "ä¸­åˆ" : a < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©] LT",
                nextDay: "[æ˜Žå¤©] LT",
                nextWeek: "[ä¸‹]dddd LT",
                lastDay: "[æ˜¨å¤©] LT",
                lastWeek: "[ä¸Š]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så…§",
                past: "%så‰",
                s: "å¹¾ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é˜",
                mm: "%d åˆ†é˜",
                h: "1 å°æ™‚",
                hh: "%d å°æ™‚",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 å€‹æœˆ",
                MM: "%d å€‹æœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";





// Main section comes here






        //! moment.js locale configuration
        e.defineLocale("zh-tw", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYYå¹´MæœˆDæ—¥",
                lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "å‡Œæ™¨" : a < 900 ? "æ—©ä¸Š" : a < 1130 ? "ä¸Šåˆ" : a < 1230 ? "ä¸­åˆ" : a < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©] LT",
                nextDay: "[æ˜Žå¤©] LT",
                nextWeek: "[ä¸‹]dddd LT",
                lastDay: "[æ˜¨å¤©] LT",
                lastWeek: "[ä¸Š]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%så¾Œ",
                past: "%så‰",
                s: "å¹¾ç§’",
                ss: "%d ç§’",
                m: "1 åˆ†é˜",
                mm: "%d åˆ†é˜",
                h: "1 å°æ™‚",
                hh: "%d å°æ™‚",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 å€‹æœˆ",
                MM: "%d å€‹æœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            }
        })
    }(n(0))
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        return !1
    }
}, , function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    var a = {
        "./af": 6,
        "./af.js": 6,
        "./ar": 7,
        "./ar-dz": 8,
        "./ar-dz.js": 8,
        "./ar-kw": 9,
        "./ar-kw.js": 9,
        "./ar-ly": 10,
        "./ar-ly.js": 10,
        "./ar-ma": 11,
        "./ar-ma.js": 11,
        "./ar-sa": 12,
        "./ar-sa.js": 12,
        "./ar-tn": 13,
        "./ar-tn.js": 13,
        "./ar.js": 7,
        "./az": 14,
        "./az.js": 14,
        "./be": 15,
        "./be.js": 15,
        "./bg": 16,
        "./bg.js": 16,
        "./bm": 17,
        "./bm.js": 17,
        "./bn": 18,
        "./bn.js": 18,
        "./bo": 19,
        "./bo.js": 19,
        "./br": 20,
        "./br.js": 20,
        "./bs": 21,
        "./bs.js": 21,
        "./ca": 22,
        "./ca.js": 22,
        "./cs": 23,
        "./cs.js": 23,
        "./cv": 24,
        "./cv.js": 24,
        "./cy": 25,
        "./cy.js": 25,
        "./da": 26,
        "./da.js": 26,
        "./de": 27,
        "./de-at": 28,
        "./de-at.js": 28,
        "./de-ch": 29,
        "./de-ch.js": 29,
        "./de.js": 27,
        "./dv": 30,
        "./dv.js": 30,
        "./el": 31,
        "./el.js": 31,
        "./en-au": 32,
        "./en-au.js": 32,
        "./en-ca": 33,
        "./en-ca.js": 33,
        "./en-gb": 34,
        "./en-gb.js": 34,
        "./en-ie": 35,
        "./en-ie.js": 35,
        "./en-il": 36,
        "./en-il.js": 36,
        "./en-in": 37,
        "./en-in.js": 37,
        "./en-nz": 38,
        "./en-nz.js": 38,
        "./en-sg": 39,
        "./en-sg.js": 39,
        "./eo": 40,
        "./eo.js": 40,
        "./es": 41,
        "./es-do": 42,
        "./es-do.js": 42,
        "./es-us": 43,
        "./es-us.js": 43,
        "./es.js": 41,
        "./et": 44,
        "./et.js": 44,
        "./eu": 45,
        "./eu.js": 45,
        "./fa": 46,
        "./fa.js": 46,
        "./fi": 47,
        "./fi.js": 47,
        "./fil": 48,
        "./fil.js": 48,
        "./fo": 49,
        "./fo.js": 49,
        "./fr": 50,
        "./fr-ca": 51,
        "./fr-ca.js": 51,
        "./fr-ch": 52,
        "./fr-ch.js": 52,
        "./fr.js": 50,
        "./fy": 53,
        "./fy.js": 53,
        "./ga": 54,
        "./ga.js": 54,
        "./gd": 55,
        "./gd.js": 55,
        "./gl": 56,
        "./gl.js": 56,
        "./gom-deva": 57,
        "./gom-deva.js": 57,
        "./gom-latn": 58,
        "./gom-latn.js": 58,
        "./gu": 59,
        "./gu.js": 59,
        "./he": 60,
        "./he.js": 60,
        "./hi": 61,
        "./hi.js": 61,
        "./hr": 62,
        "./hr.js": 62,
        "./hu": 63,
        "./hu.js": 63,
        "./hy-am": 64,
        "./hy-am.js": 64,
        "./id": 65,
        "./id.js": 65,
        "./is": 66,
        "./is.js": 66,
        "./it": 67,
        "./it-ch": 68,
        "./it-ch.js": 68,
        "./it.js": 67,
        "./ja": 69,
        "./ja.js": 69,
        "./jv": 70,
        "./jv.js": 70,
        "./ka": 71,
        "./ka.js": 71,
        "./kk": 72,
        "./kk.js": 72,
        "./km": 73,
        "./km.js": 73,
        "./kn": 74,
        "./kn.js": 74,
        "./ko": 75,
        "./ko.js": 75,
        "./ku": 76,
        "./ku.js": 76,
        "./ky": 77,
        "./ky.js": 77,
        "./lb": 78,
        "./lb.js": 78,
        "./lo": 79,
        "./lo.js": 79,
        "./lt": 80,
        "./lt.js": 80,
        "./lv": 81,
        "./lv.js": 81,
        "./me": 82,
        "./me.js": 82,
        "./mi": 83,
        "./mi.js": 83,
        "./mk": 84,
        "./mk.js": 84,
        "./ml": 85,
        "./ml.js": 85,
        "./mn": 86,
        "./mn.js": 86,
        "./mr": 87,
        "./mr.js": 87,
        "./ms": 88,
        "./ms-my": 89,
        "./ms-my.js": 89,
        "./ms.js": 88,
        "./mt": 90,
        "./mt.js": 90,
        "./my": 91,
        "./my.js": 91,
        "./nb": 92,
        "./nb.js": 92,
        "./ne": 93,
        "./ne.js": 93,
        "./nl": 94,
        "./nl-be": 95,
        "./nl-be.js": 95,
        "./nl.js": 94,
        "./nn": 96,
        "./nn.js": 96,
        "./oc-lnc": 97,
        "./oc-lnc.js": 97,
        "./pa-in": 98,
        "./pa-in.js": 98,
        "./pl": 99,
        "./pl.js": 99,
        "./pt": 100,
        "./pt-br": 101,
        "./pt-br.js": 101,
        "./pt.js": 100,
        "./ro": 102,
        "./ro.js": 102,
        "./ru": 103,
        "./ru.js": 103,
        "./sd": 104,
        "./sd.js": 104,
        "./se": 105,
        "./se.js": 105,
        "./si": 106,
        "./si.js": 106,
        "./sk": 107,
        "./sk.js": 107,
        "./sl": 108,
        "./sl.js": 108,
        "./sq": 109,
        "./sq.js": 109,
        "./sr": 110,
        "./sr-cyrl": 111,
        "./sr-cyrl.js": 111,
        "./sr.js": 110,
        "./ss": 112,
        "./ss.js": 112,
        "./sv": 113,
        "./sv.js": 113,
        "./sw": 114,
        "./sw.js": 114,
        "./ta": 115,
        "./ta.js": 115,
        "./te": 116,
        "./te.js": 116,
        "./tet": 117,
        "./tet.js": 117,
        "./tg": 118,
        "./tg.js": 118,
        "./th": 119,
        "./th.js": 119,
        "./tk": 120,
        "./tk.js": 120,
        "./tl-ph": 121,
        "./tl-ph.js": 121,
        "./tlh": 122,
        "./tlh.js": 122,
        "./tr": 123,
        "./tr.js": 123,
        "./tzl": 124,
        "./tzl.js": 124,
        "./tzm": 125,
        "./tzm-latn": 126,
        "./tzm-latn.js": 126,
        "./tzm.js": 125,
        "./ug-cn": 127,
        "./ug-cn.js": 127,
        "./uk": 128,
        "./uk.js": 128,
        "./ur": 129,
        "./ur.js": 129,
        "./uz": 130,
        "./uz-latn": 131,
        "./uz-latn.js": 131,
        "./uz.js": 130,
        "./vi": 132,
        "./vi.js": 132,
        "./x-pseudo": 133,
        "./x-pseudo.js": 133,
        "./yo": 134,
        "./yo.js": 134,
        "./zh-cn": 135,
        "./zh-cn.js": 135,
        "./zh-hk": 136,
        "./zh-hk.js": 136,
        "./zh-mo": 137,
        "./zh-mo.js": 137,
        "./zh-tw": 138,
        "./zh-tw.js": 138
    };

    function r(e) {
        var t = i(e);
        return n(t)
    }

    function i(e) {
        if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return a[e]
    }
    r.keys = function() {
        return Object.keys(a)
    }, r.resolve = i, e.exports = r, r.id = 143
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var a;
    ! function(r, i) {
        "use strict";
        var s = function(e) {
                if ("object" != typeof e.document) throw new Error("Cookies.js requires a `window` with a `document` object");
                var t = function(e, n, a) {
                    return 1 === arguments.length ? t.get(e) : t.set(e, n, a)
                };
                return t._document = e.document, t._cacheKeyPrefix = "cookey.", t._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), t.defaults = {
                    path: "/",
                    secure: !1
                }, t.get = function(e) {
                    t._cachedDocumentCookie !== t._document.cookie && t._renewCache();
                    var n = t._cache[t._cacheKeyPrefix + e];
                    return void 0 === n ? void 0 : decodeURIComponent(n)
                }, t.set = function(e, n, a) {
                    return (a = t._getExtendedOptions(a)).expires = t._getExpiresDate(void 0 === n ? -1 : a.expires), t._document.cookie = t._generateCookieString(e, n, a), t
                }, t.expire = function(e, n) {
                    return t.set(e, void 0, n)
                }, t._getExtendedOptions = function(e) {
                    return {
                        path: e && e.path || t.defaults.path,
                        domain: e && e.domain || t.defaults.domain,
                        expires: e && e.expires || t.defaults.expires,
                        secure: e && void 0 !== e.secure ? e.secure : t.defaults.secure
                    }
                }, t._isValidDate = function(e) {
                    return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
                }, t._getExpiresDate = function(e, n) {
                    if (n = n || new Date, "number" == typeof e ? e = e === 1 / 0 ? t._maxExpireDate : new Date(n.getTime() + 1e3 * e) : "string" == typeof e && (e = new Date(e)), e && !t._isValidDate(e)) throw new Error("`expires` parameter cannot be converted to a valid Date instance");
                    return e
                }, t._generateCookieString = function(e, t, n) {
                    var a = (e = (e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")) + "=" + (t = (t + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent));
                    return a += (n = n || {}).path ? ";path=" + n.path : "", a += n.domain ? ";domain=" + n.domain : "", a += n.expires ? ";expires=" + n.expires.toUTCString() : "", a += n.secure ? ";secure" : ""
                }, t._getCacheFromString = function(e) {
                    for (var n = {}, a = e ? e.split("; ") : [], r = 0; r < a.length; r++) {
                        var i = t._getKeyValuePairFromCookieString(a[r]);
                        void 0 === n[t._cacheKeyPrefix + i.key] && (n[t._cacheKeyPrefix + i.key] = i.value)
                    }
                    return n
                }, t._getKeyValuePairFromCookieString = function(e) {
                    var t = e.indexOf("=");
                    t = t < 0 ? e.length : t;
                    var n, a = e.substr(0, t);
                    try {
                        n = decodeURIComponent(a)
                    } catch (e) {
                        console && "function" == typeof console.error && console.error('Could not decode cookie with key "' + a + '"', e)
                    }
                    return {
                        key: n,
                        value: e.substr(t + 1)
                    }
                }, t._renewCache = function() {
                    t._cache = t._getCacheFromString(t._document.cookie), t._cachedDocumentCookie = t._document.cookie
                }, t._areEnabled = function() {
                    var e = "1" === t.set("cookies.js", 1).get("cookies.js");
                    return t.expire("cookies.js"), e
                }, t.enabled = t._areEnabled(), t
            },
            o = r && "object" == typeof r.document ? s(r) : s;
        void 0 === (a = function() {
            return o
        }.call(t, n, t, e)) || (e.exports = a)
    }("undefined" == typeof window ? this : window)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var a = function() {
        return (a = Object.assign || function(e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };
    var r, i, s, o, d, u = (r = document.getElementById("stage"), i = document.getElementById("overstage"), s = document.getElementById("distributionView"), o = {
            life_strokeStyle: 1,
            life_strokeColor: ["rgba(164,94,20,0.15)", "rgba(149,74,1,0.15)", "rgba(255,103,2,0.15)", "rgba(255,215,0,0.15)", "rgba(244,205,59,0.15)", "rgba(241,125,1,0.15)", "rgba(186,66,1,0.15)", "rgba(224,69,0,0.15)", "rgba(253,167,31,0.15)", "rgba(237,132,0,0.15)]"],
            afterlife_strokeStyle: 1,
            afterlife_strokeColor: ["rgba(200,200,200,0.10)", "rgba(150,150,150,0.10)", "rgba(100,100,100,0.10)", "rgba(170,170,170,0.10)", "rgba(120,120,120,0.10)"],
            padding: 10,
            canvasHeight: r.height,
            canvasWidth: r.width,
            arcOffsetV: 45,
            arcOffsetH: 64,
            distHistColors: {
                leftTop: "rgba(255,210,0,0.40)",
                leftBot: "rgba(255,109,2,0.40)",
                rightTop: "rgba(162,162,162,0.40)",
                rightBot: "rgba(162,162,162,0.40)"
            }
        }, (d = a(a({}, o), {
            arcSpaceHeight: o.canvasHeight - o.arcOffsetV,
            arcSpaceWidth: o.canvasWidth - o.arcOffsetH
        })).arcSpaceHeight = d.canvasHeight - d.arcOffsetV, d.arcSpaceWidth = d.canvasWidth - d.arcOffsetH, {
            stage: new createjs.Stage(r),
            overstage: new createjs.Stage(i),
            distStage: new createjs.Stage(s),
            tooltip: new createjs.Container,
            histograms: new createjs.Container,
            filterTop: new createjs.Container,
            filterBot: new createjs.Container,
            heartbeats: new createjs.Container,
            dotsContainer: new createjs.Container,
            axis: null,
            distAxis: null,
            distHistGroup: null,
            introTtip: [],
            activePersonTooltip: null,
            cfig: d,
            curYear: 0,
            animCurves: null,
            curvesByYear: {},
            activecurves: [],
            distributionPath: null,
            peopleCount: 0,
            yearsCount: 0,
            pctTop: 0,
            pctBot: 0,
            monthLabel: 0,
            stolenTop: 0,
            masterFilter: null,
            inDistView: !1,
            delayWatcher: null,
            animDelay: null,
            playingAnimation: !0,
            played: {},
            peopleDifference: 0,
            globalMaxAge: 0
        }),
        l = n(0),
        c = n.n(l);

    function _() {
        var e = u.cfig,
            t = u.globalMaxAge,
            n = new createjs.Container;
        n.x = e.arcOffsetH / 2, n.y = e.canvasHeight / 2;
        var a = new createjs.Shape;
        a.graphics.setStrokeStyle(2).beginStroke("rgba(220, 220, 220, 1)").moveTo(0, 0).lineTo(e.arcSpaceWidth, 0);
        for (var r = 10; r <= t; r += 10) {
            var i = e.arcSpaceWidth / t * r;
            a.graphics.moveTo(i, -4).lineTo(i, 4);
            var s = new createjs.Text("" + r, "8px Lato", "rgba(220,220,220,1)");
            s.x = i - 5, s.y = 6, n.addChild(s)
        }
        return n.addChild(a), n.alpha = 0, n
    }
    var m = function() {
        function e() {}
        return e.tFromVal = function(e, t, n, a, r, i) {
            var s, o, d;
            if (e > r || e < t) return Number.NaN;
            d = .5;
            Number.POSITIVE_INFINITY;
            o = .5;
            for (var u = 0; u < i; ++u) d *= .5, t * (s = 1 - o) * s * s + 3 * n * s * s * o + 3 * a * s * o * o + r * o * o * o > e ? o -= d : o += d;
            return o
        }, e.valueOn = function(e, t, n, a, r) {
            var i = 1 - e;
            return t * i * i * i + 3 * n * i * i * e + 3 * a * i * e * e + r * e * e * e
        }, e.yFromX = function(t, n, a, r, i, s) {
            var o = e.tFromVal(t, n.x, a.x, r.x, i.x, s);
            return isNaN(o) ? o : e.valueOn(o, n.y, a.y, r.y, i.y)
        }, e
    }();

    function h(e, t, n) {
        var a = Math.atan2(t[1] - e[1], t[0] - e[0]),
            r = Math.sqrt(Math.pow(t[1] - e[1], 2) + Math.pow(t[0] - e[0], 2)),
            i = Math.cos(a) * n * r,
            s = Math.sin(a) * n * r;
        return [e[0] + i, e[1] + s]
    }

    function f(e) {
        var t = -1 != e.age ? e.age : e.agereplace,
            n = [p(0), L(0, t)],
            a = [p(e.altage), L(0, t)],
            r = [.25 * a[0], L(1.5, t)],
            i = [.75 * a[0], L(1.5, t)],
            s = m.tFromVal(p(e.age), n[0], r[0], i[0], a[0], 20),
            o = h(r, i, s),
            d = n,
            l = a,
            c = h(n, r, s),
            _ = h(i, a, s),
            f = h(c, o, s),
            y = h(o, _, s),
            M = h(f, y, s),
            g = h(f, y, s);
        return [
            [{
                x: d[0],
                y: d[1]
            }, {
                x: c[0],
                y: c[1]
            }, {
                x: f[0],
                y: f[1]
            }, {
                x: M[0],
                y: M[1]
            }],
            [{
                x: g[0],
                y: g[1]
            }, {
                x: y[0],
                y: y[1]
            }, {
                x: _[0],
                y: _[1]
            }, {
                x: l[0],
                y: l[1]
            }],
            [s]
        ];

        function L(e, t) {
            var n = (t + 5) / (u.globalMaxAge + 10);
            return (1 - e) * (n * (u.cfig.arcSpaceHeight / 2)) + (1 - n) * (u.cfig.arcSpaceHeight / 2) + u.cfig.arcOffsetV / 2
        }
    }

    function p(e) {
        return e < 0 && (e = 0), u.cfig.arcOffsetH / 2 + e / u.globalMaxAge * u.cfig.arcSpaceWidth
    }

    function y(e) {
        return u.cfig.canvasHeight - e
    }

    function M(e) {
        for (var t = 0; t < e.length; t++) e[t].y = y(e[t].y);
        return e
    }

    function g(e, t) {
        for (var n, a = 0, r = e.length; a < r; ++a) t((n = e[a]).curve) === n.flipped && (M(n.life), M(n.afterlife), n.flipped = !n.flipped)
    }

    function L(e) {
        return "number" == typeof e && e >= 1e3 ? e.toString().slice(0, -3) + "," + e.toString().substr(-3) : e.toString()
    }

    function v(e, t, n) {
        var a = Math.pow(10, t + n),
            r = Math.pow(10, n);
        return (e = Math.round(e * a) / r).toString() + "%"
    }

    function Y(e) {
        for (var t = u.globalMaxAge, n = [
                [
                    [],
                    []
                ],
                [
                    [],
                    []
                ]
            ], a = 0; a < 2; a++)
            for (var r = 0; r < 2; r++)
                for (var i = 0; i <= t; i++) n[a][r][i] = {
                    total: 0,
                    value: 0
                };
        for (var s = 0, o = 0; o < 2; o++)
            for (var d = e[o].length, l = 0; l < d; l++) - 1 != e[o][l].age && ((s = Math.floor(e[o][l].age)) > t && (s = t), n[0][o][s].total = d, n[0][o][s].value += 1), (s = Math.floor(e[o][l].altage)) > t && (s = t), n[1][o][s].total = d, n[1][o][s].value += 1;
        var c, _, m, h, f = [
            [
                [],
                []
            ],
            [
                [],
                []
            ], e
        ];
        for (o = 0; o < 2; o++)
            for (l = 0; l < 2; l++) {
                -1, _ = f[o][l], m = n[o][l];
                for (var p = 0; p <= t; p++) c = m[p].value || 0, _.push({
                    x: (h = p, h / t * u.cfig.arcSpaceWidth),
                    y: y(c),
                    data: m[p]
                })
            }
        return f;

        function y(e) {
            return (1 - e / 500) * (u.cfig.canvasHeight / 2)
        }
    }

    function k(e) {
        var t = u.histograms,
            n = u.cfig,
            a = u.distributionPath;
        if (e) t.removeAllChildren();
        else {
            var r = new createjs.Shape;
            w(r, n.distHistColors.leftTop.slice(0, -5) + "0.20)", a[0][0], !1), t.addChild(r);
            var i = new createjs.Shape;
            w(i, n.distHistColors.leftBot.slice(0, -5) + "0.20)", a[0][1], !0), t.addChild(i);
            var s = new createjs.Shape;
            w(s, n.distHistColors.rightTop.slice(0, -5) + "0.20)", a[1][0], !1), t.addChild(s);
            var o = new createjs.Shape;
            w(o, n.distHistColors.rightBot.slice(0, -5) + "0.20)", a[1][1], !0), t.addChild(o)
        }
    }

    function w(e, t, n, a) {
        var r, i, s = u.cfig;
        e.x = s.arcOffsetH / 2, e.graphics.beginStroke(t.slice(0, -5) + "0.8)").beginFill(t).moveTo(0, s.canvasHeight / 2);
        var o = n;
        n = [];
        var d, l, c, _, m = s.canvasHeight / 2,
            h = -1,
            f = 0;
        for (r = 0, i = o.length; r < i; ++r) d = (c = o[r]).y || m, l = c.x, (d < m && h === m || d === m && h < m) && (_ = {
            x: .5 * (f + l),
            y: m,
            data: c.data
        }, n.push(_), n.push(_), n.push(_)), n.push(c), h = d, f = l;
        for (r = 0, i = n.length; r < i; r++) {
            var p = n[r].y,
                M = void 0;
            try {
                M = n[r + 1].y
            } catch (e) {
                M = s.canvasHeight / 2
            }
            var g = p + .5 * (M - p),
                L = a ? y(p) : p,
                v = a ? y(g) : g,
                Y = n[r].x,
                k = void 0;
            try {
                k = n[r + 1].x
            } catch (e) {
                k = s.arcSpaceWidth
            }
            Y = Y + .5 * (k - Y);
            e.graphics.quadraticCurveTo(Y, L, k, v), r === i - 1 && e.graphics.lineTo(Y, s.canvasHeight / 2)
        }
        e.graphics.closePath()
    }
    var b = {
            M: "man",
            F: "woman",
            U: "person",
            "": "person"
        },
        D = {
            M: "his",
            F: "her",
            U: "their",
            "": "their"
        },
        T = {
            M: "he",
            F: "she",
            U: "they",
            "": "they"
        },
        S = {
            B: "black",
            W: "white",
            I: "native",
            A: "asian",
            H: "hispanic",
            U: ""
        },
        x = {
            0: "2010",
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        },
        H = {
            AK: "Alaska",
            AL: "Alabama",
            AR: "Arkansas",
            AZ: "Arizona",
            CA: "California",
            CO: "Colorado",
            CT: "Connecticut",
            DC: "Washington, DC",
            DE: "Delaware",
            FL: "Florida",
            GA: "Georgia",
            HI: "Hawaii",
            IA: "Iowa",
            ID: "Idaho",
            IL: "Illinois",
            IN: "Indiana",
            KS: "Kansas",
            KY: "Kentucky",
            LA: "Louisiana",
            MA: "Massachusetts",
            MD: "Maryland",
            ME: "Maine",
            MI: "Michigan",
            MN: "Minnesota",
            MO: "Missouri",
            MS: "Mississippi",
            MT: "Montana",
            NC: "North Carolina",
            ND: "North Dakota",
            NE: "Nebraska",
            NH: "New Hampshire",
            NJ: "New Jersey",
            NM: "New Mexico",
            NV: "Nevada",
            NY: "New York",
            OH: "Ohio",
            OK: "Oklahoma",
            OR: "Oregon",
            PA: "Pennsylvania",
            RI: "Rhode Island",
            SC: "South Carolina",
            SD: "South Dakota",
            TN: "Tennessee",
            TX: "Texas",
            UK: "America",
            UT: "Utah",
            VA: "Virginia",
            VI: "the US Virgin Islands",
            VT: "Vermont",
            WA: "Washington",
            WI: "Wisconsin",
            WV: "West Virginia",
            WY: "Wyoming"
        },
        j = [
            ["acquaintance", "boyfriend", "brother", "daughter", "employee", "employer", "ex-husband", "ex-wife", "family member", "father", "friend", "girlfriend", "homosexual significant other", "husband", "in-law", "mother", "neighbor", "sister", "son", "stepdaughter", "stepfather", "stepmother", "stepson", "wife", "non-stranger"],
            ["stranger"],
            ["unknown"]
        ],
        O = {
            M: {
                acquaintance: "acquaintance",
                boyfriend: "boyfriend",
                brother: "brother",
                daughter: "father",
                employee: "employer",
                employer: "employee",
                "ex-husband": "ex-wife",
                "ex-wife": "ex-husband",
                "family member": "family member",
                father: "son",
                friend: "friend",
                girlfriend: "boyfriend",
                "homosexual significant other": "homosexual significant other",
                husband: "husband",
                "in-law": "in-law",
                mother: "son",
                neighbor: "neighbor",
                sister: "brother",
                son: "father",
                stepdaughter: "step-father",
                stepfather: "step-son",
                stepmother: "step-son",
                stepson: "step-father",
                wife: "husband",
                stranger: "stranger",
                "non-stranger": "acquaintance",
                unknown: "unknown"
            },
            F: {
                acquaintance: "acquaintance",
                boyfriend: "girlfriend",
                brother: "sister",
                daughter: "mother",
                employee: "employer",
                employer: "employee",
                "ex-husband": "ex-wife",
                "ex-wife": "ex-wife",
                "family member": "family member",
                father: "daughter",
                friend: "friend",
                girlfriend: "girlfriend",
                "homosexual significant other": "homosexual significant other",
                husband: "wife",
                "in-law": "in-law",
                mother: "daughter",
                neighbor: "neighbor",
                sister: "sister",
                son: "mother",
                stepdaughter: "step-mother",
                stepfather: "step-daughter",
                stepmother: "step-daughter",
                stepson: "step-mother",
                wife: "wife",
                stranger: "stranger",
                "non-stranger": "acquaintance",
                unknown: "unknown"
            },
            U: {
                acquaintance: "acquaintance",
                boyfriend: "significant other",
                brother: "sibling",
                daughter: "parent",
                employee: "employer",
                employer: "employee",
                "ex-husband": "ex-wife",
                "ex-wife": "ex-husband",
                "family member": "family member",
                father: "child",
                friend: "friend",
                girlfriend: "significant other",
                "homosexual significant other": "homosexual significant other",
                husband: "wife",
                "in-law": "in-law",
                mother: "child",
                neighbor: "neighbor",
                sister: "sibling",
                son: "parent",
                stepdaughter: "step-parent",
                stepfather: "step-child",
                stepmother: "step-child",
                stepson: "step-parent",
                wife: "husband",
                stranger: "stranger",
                "non-stranger": "acquaintance",
                unknown: "unknown"
            }
        },
        E = [
            ["rape", "robbery", "burglary", "larceny", "motor vehicle theft", "sex offense", "lover's triangle", "brawl due to influence of alcohol", "brawl due to influence of narcotics", "sniper attack", "gangland killing", "juvenile gang killing", "suspected felony", "felony", "felony"],
            ["arson", "abortion", "argument over money or property", "argument", "institutional killing"],
            ["child killed by babysitter", "prostitution", "breaking narcotic drug law", "gambling"],
            ["indeterminate", "unspecified", "other"]
        ],
        C = {
            "02": "rape",
            "03": "robbery",
            "05": "burglary",
            "06": "larceny",
            "07": "motor vehicle theft",
            17: "sex offense",
            40: "lover's triangle",
            42: "brawl due to influence of alcohol",
            43: "brawl due to influence of narcotics",
            49: "sniper attack",
            46: "gang killing",
            47: "juvenile gang killing",
            70: "suspected felony",
            80: "felony",
            81: "felony",
            10: "prostitution",
            "09": "arson",
            32: "abortion",
            44: "argument over money or property",
            45: "argument",
            48: "institutional killing",
            41: "being looked after",
            18: "breaking narcotic drug law",
            19: "gambling",
            99: "indeterminate",
            26: "unspecified",
            60: "other"
        },
        A = {
            nofilter: "No Filter",
            handgun: "Handgun",
            shotgun: "Shotgun",
            rifle: "Rifle",
            other: "Unknown",
            child: "Children 0-18",
            adult: "Adults 18+",
            yadult: "Young Adults 18-29",
            oadult: "Adults over 30",
            male: "Male",
            female: "Female",
            black: "Black",
            white: "White",
            amindian: "Native",
            asian: "Asian",
            hispanic: "Hispanic",
            midwest: "Midwest",
            northwest: "Northwest",
            northeast: "Northeast",
            southwest: "Southwest",
            southeast: "Southeast",
            single: "Single Victim",
            multiple: "Multiple Victims",
            today: "Today",
            yesterday: "Yesterday",
            week: "Past 7 Days",
            month: "Past 30 Days",
            spring: "Spring",
            summer: "Summer",
            fall: "Fall",
            winter: "Winter",
            family: "Family Member",
            sigother: "Significant Other",
            acquaintance: "Acquaintance",
            stranger: "Stranger"
        },
        P = {
            single: {
                baby: {
                    male: "<span class='tEm'>baby</span>",
                    female: "<span class='tEm'>baby</span>",
                    neutral: "<span class='tEm'>baby</span>"
                },
                child: {
                    male: "<span class='tEm'>boy</span>",
                    female: "<span class='tEm'>girl</span>",
                    neutral: "<span class='tEm'>child</span>"
                },
                adult: {
                    male: "<span class='tEm'>man</span>",
                    female: "<span class='tEm'>woman</span>",
                    neutral: "<span class='tEm'>person</span>"
                }
            },
            plural: {
                baby: {
                    male: "<span class='tEm'>babies</span>",
                    female: "<span class='tEm'>babies</span>",
                    neutral: "<span class='tEm'>babies</span>"
                },
                child: {
                    male: "<span class='tEm'>boys</span>",
                    female: "<span class='tEm'>girls</span>",
                    neutral: "<span class='tEm'>children</span>"
                },
                adult: {
                    male: "<span class='tEm'>men</span>",
                    female: "<span class='tEm'>women</span>",
                    neutral: "<span class='tEm'>people</span>"
                }
            },
            race: {
                before: "",
                black: "<span class='tEm'>Black</span>",
                white: "<span class='tEm'>White</span>",
                asian: "<span class='tEm'>Asian</span>",
                amindian: "<span class='tEm'>Native</span>"
            },
            weapon: {
                before: " with a",
                after: " or a",
                handgun: " <span class='tEm'>handgun</span>",
                shotgun: " <span class='tEm'>shotgun</span>",
                rifle: " <span class='tEm'>rifle</span>",
                other: "n <span class='tEm'>unknown gun</span>",
                alternate: " with <span class='tEm'>these guns</span>"
            },
            region: {
                before: " in the ",
                after: " or the ",
                midwest: "<span class='tEm'>Midwest</span>",
                northwest: "<span class='tEm'>Northwest</span>",
                northeast: "<span class='tEm'>Northeast</span>",
                southwest: "<span class='tEm'>Southwest</span>",
                southeast: "<span class='tEm'>Southeast</span>",
                alternate: " <span class='tEm'>in these regions</span>"
            },
            killings: {
                before: " in a ",
                after: " or a ",
                single: "<span class='tEm'>single victim killing</span>",
                multiple: "<span class='tEm'>multiple victim killing</span>",
                alternate: " in a <span class='tEm'>single-</span> or <span class='tEm'>multiple victim killing</span>"
            },
            time: {
                before: " ",
                after: " or ",
                today: "<span class='tEm'>today</span>",
                yesterday: "<span class='tEm'>yesterday</span>",
                week: "in the past <span class='tEm'>7 days</span>",
                month: "in the past <span class='tEm'>30 days</span>",
                alternate: " during <span class='tEm'>this period</span>"
            },
            season: {
                before: " in the ",
                after: " or the ",
                spring: "<span class='tEm'>spring</span>",
                summer: "<span class='tEm'>summer</span>",
                fall: "<span class='tEm'>fall</span>",
                winter: "<span class='tEm'>winter</span>",
                alternate: " during <span class='tEm'>these seasons</span>"
            },
            relationship: {
                before: " by a",
                after: " or a",
                family: "<span class='tEm'> family member</span>",
                sigother: "<span class='tEm'> significant other</span>",
                acquaintance: "n <span class='tEm'>acquaintance</span>",
                stranger: " <span class='tEm'>stranger</span>",
                alternate: " by <span class='tEm'>one of these relations</span>"
            }
        },
        W = n(1),
        F = n.n(W),
        N = function() {
            var e = Math.sqrt(2);

            function t() {
                var t, a, r, i, s, o = !0,
                    d = !1,
                    u = n.DEFAULT_COPY_CLASS,
                    l = 0,
                    c = 0,
                    _ = 0,
                    m = 0,
                    h = n.DEFAULT_BACKGROUND_COLOR,
                    f = n.DEFAULT_BACKGROUND_IMAGE,
                    p = n.DEFAULT_STROKE_COLOR,
                    y = n.DEFAULT_STROKE_THICKNESS,
                    M = n.DEFAULT_TIP_ONLY,
                    g = n.DEFAULT_TIP_WIDTH,
                    L = .5,
                    v = n.DEFAULT_RADIUS,
                    Y = 0,
                    k = 0,
                    w = 0,
                    b = 0;
                t = F()("<div></div>").addClass("tooltip").appendTo("body").css({
                    position: "absolute",
                    overflow: "hidden"
                }), a = F()("<div></div>").css("position", "absolute").appendTo(t), s = F()("<div></div>").addClass(u).css({
                    position: "absolute",
                    top: "0px",
                    left: "0px"
                }).appendTo(t), i = F()("<div></div>").css("position", "absolute").appendTo(t), r = F()("<div></div>").css("position", "absolute").appendTo(t);
                var D = {
                    radius: function(e) {
                        return v = e, D
                    },
                    x: function(e) {
                        return l = e, D
                    },
                    y: function(e) {
                        return c = e, D
                    },
                    horizontal: function(e) {
                        return o = e, D
                    },
                    mirror: function(e) {
                        return d = e, D
                    },
                    copy: function(e) {
                        return s.html(e), D
                    },
                    copyClass: function(e) {
                        return s.removeClass(u).addClass(e), u = e, D
                    },
                    strokeColor: function(e) {
                        return p = e, D
                    },
                    strokeWidth: function(e) {
                        return y = e, D
                    },
                    bgColor: function(e) {
                        return h = e, D
                    },
                    bgImage: function(e) {
                        return f = e, D
                    },
                    render: function() {
                        var n, u;
                        u = t.css("display"), t.show();
                        var l = g,
                            c = Math.round(y * e),
                            T = s.outerWidth(),
                            S = s.outerHeight(),
                            x = T + (o ? l + c : y) + y,
                            H = S + (o ? y : l + c) + y;
                        s.width(s.width()), _ = b + (o ? d ? x : 0 : L * (T - 2 * (v + g)) + v + g + y), m = Y + (o ? L * (S - 2 * (v + g)) + v + g + y : d ? H : 0);
                        var j = o && !d ? l + c - y : 0,
                            O = o || d ? 0 : l + c - y;
                        n = {
                            left: j + "px",
                            top: O + "px",
                            width: T,
                            height: S,
                            borderRadius: v + "px"
                        }, M || (n.backgroundColor = h, n.border = y + "px solid " + p, f && (n.backgroundImage = "url(" + f + ")")), a.css(n);
                        var E = _ + (o ? d ? -(g + c) : c - g : -g),
                            C = m + (o ? -g : d ? -(g + c) : c - g),
                            A = "border" + (o ? d ? "Left" : "Right" : d ? "Top" : "Bottom");
                        (n = {
                            border: g + "px solid transparent",
                            left: E + "px",
                            top: C + "px"
                        })[A] = g + "px solid " + h, r.css(n);
                        var P = Math.round(y * e);
                        return (n = {
                            border: g + P + "px solid transparent",
                            left: (E += o ? d ? 0 : -2 * P : -P) + "px",
                            top: (C += o ? -P : d ? 0 : -2 * P) + "px"
                        })[A] = g + P + "px solid " + p, i.css(n), s.css({
                            left: j + b + y + "px",
                            top: O + Y + y + "px"
                        }), t.css({
                            width: x + b + k + "px",
                            height: H + Y + w + "px",
                            display: u
                        }), D
                    },
                    padding: function(e, t, n, a) {
                        return void 0 === t && (t = n = a = e), Y = e, k = t, w = n, b = a, D
                    },
                    position: function(e) {
                        return t.css({
                            left: (e ? Math.round(l - _) : l - _) + "px",
                            top: (e ? Math.round(c - m) : c - m) + "px"
                        }), D
                    },
                    setTipPosition: function(e) {
                        return L = e, D
                    },
                    setTipPositionByBounds: function(e, n, a, r) {
                        var i = t.css("display");
                        "none" === i && t.css("display", "block");
                        var d = o ? s.outerHeight() : s.outerWidth();
                        return r && void 0 !== a && (a /= d), L = function(e, t, n, a, r, i) {
                            var s = e * (i = null == i ? .5 : i),
                                o = e - s,
                                d = e - 2 * t;
                            return n - s >= a ? n + o <= r ? i : (d - (r - n) + t) / d : (n - a - t) / d
                        }(d, g, o ? c : l, e, n, a), "none" === i && t.css("display", i), D
                    },
                    getTipPosition: function() {
                        return L
                    },
                    setTipWidth: function(e) {
                        return g = e, D
                    },
                    getTipWidth: function() {
                        return g
                    },
                    tipOffset: function() {
                        return {
                            x: _,
                            y: m
                        }
                    },
                    el: function() {
                        return t
                    },
                    shrinkWidth: function(e, n, a, r) {
                        var i;
                        return r = r || s, "none" === (i = t.css("display")) && t.css("display", "block"),
                            function(e, t, n, a) {
                                if (a = a || 8, e.css({
                                        width: "",
                                        "white-space": "nowrap"
                                    }), e.width() <= t) return;
                                e.css({
                                    width: t,
                                    "white-space": "normal"
                                }), e.width(t);
                                var r = t,
                                    i = e.height();
                                do {
                                    r -= a, e.css("width", r)
                                } while (r > n && e.height() <= i);
                                r += a, e.css("width", r)
                            }(r, e, n, a), "none" === i && t.css("display", i), D
                    }
                };
                return D
            }
            var n = t;
            return n.DEFAULT_STROKE_THICKNESS = 0, n.DEFAULT_STROKE_COLOR = "#CCC", n.DEFAULT_RADIUS = 0, n.DEFAULT_BACKGROUND_COLOR = void 0, n.DEFAULT_BACKGROUND_IMAGE = void 0, n.DEFAULT_TIP_WIDTH = 6, n.DEFAULT_COPY_CLASS = "tooltipCopy", n.DEFAULT_TIP_ONLY = !1, t
        }();

    function z(e, t) {
        var n = u.cfig,
            a = u.masterFilter;
        if (e) {
            for (var r in u.distHistGroup) u.distHistGroup.hasOwnProperty(r) && u.distHistGroup[r].render();
            rr.masterView.labels.showTopLeft(!0).showBotLeft(!0).showTopRight(!0), sr(a.curFilters, "nofilter") && rr.masterView.labels.showBotLeft(!1)
        } else u.inDistView ? u.inDistView && (u.inDistView = !1, u.distStage.removeAllChildren(), F()(".tooltip").remove(), rr.masterView.labels.showTopRight(!1), sr(a.curFilters, "nofilter") && rr.masterView.labels.showTopLeft(!1)) : (u.inDistView = !0, u.distHistGroup = {
            leftTop: R(n.distHistColors.leftTop, !1, !1),
            leftBot: R(n.distHistColors.leftBot, !0, !1),
            rightTop: R(n.distHistColors.rightTop, !1, !0),
            rightBot: R(n.distHistColors.rightBot, !0, !0)
        }, u.distStage.addChild(u.distHistGroup.leftTop.display), u.distStage.addChild(u.distHistGroup.leftBot.display), u.distStage.addChild(u.distHistGroup.rightTop.display), u.distStage.addChild(u.distHistGroup.rightBot.display), u.distAxis = _(), u.distStage.addChild(u.distAxis), "axismimic" != t && (u.distAxis.alpha = 1), rr.masterView.labels.setContent("left", "top").pushContent().showTopLeft(!0), rr.masterView.labels.showTopLeft(!0).showBotLeft(!0).showTopRight(!0), sr(a.curFilters, "nofilter") && rr.masterView.labels.showBotLeft(!1))
    }

    function R(e, t, n) {
        var a, r, i, s, o, d = u.cfig,
            l = u.globalMaxAge,
            c = u.distributionPath,
            _ = e.slice(0, -5) + "1)",
            m = d.arcSpaceWidth / l;

        function h() {
            var i = u.distributionPath;
            a.graphics.clear(), r.graphics.clear();
            var s = n ? 1 : 0,
                o = t ? 1 : 0,
                d = !!t;
            w(r, e, i[s][o], d), w(a, "rgba(255,255,255,0)", i[s][o], d)
        }
        return s = new createjs.Container, r = new createjs.Shape, i = new createjs.Shape, a = new createjs.Shape, i.graphics.beginFill(_).drawRect(0, t ? d.canvasHeight / 2 - 10 : 0, m, d.canvasHeight / 2 + 10), i.x = -100, s.addChild(r, i), t || n ? t && !n && sr(c[2][2], "nofilter") ? o = I(!1, !1, !1, "bigTooltip") : t && !n ? o = I(!1, !1, !0, "bigTooltip") : !t && n ? o = I(!0, !0, !0, "smallTooltip") : t && n && (o = I(!0, !1, !1, "hiddenTooltip")) : o = I(!1, !0, !0, "bigTooltip"), h(), i.mask = a, {
            display: s,
            render: h,
            moveRect: function(e) {
                i.x = e.rawX - m / 2
            },
            tooltip: o,
            bottom: t,
            right: n
        }
    }

    function I(e, t, n, a) {
        var r, i, s = u.cfig;
        return i = N().horizontal(e).mirror(t).copyClass(a), e || i.setTipPosition(0), i.el().appendTo("#c"), r = {
            itself: i,
            updateCopy: function(e) {
                return i.copy(e), r
            },
            updatePosition: function(n, a) {
                return i.x(n).y(a), e || (a < 100 ? i.mirror(!t) : a > 100 && a < s.canvasHeight - 100 ? i.mirror(t) : a > s.canvasHeight - 100 && i.mirror(!t)), i.render().position(), r
            },
            shrinkWidth: function(e, t) {
                return i.shrinkWidth(e, t), r
            },
            show: function() {
                i.el().fadeIn(200)
            },
            hide: function() {
                i.el().fadeOut(200)
            },
            visible: n
        }
    }

    function U(e, t, n) {
        var a = u.globalMaxAge,
            r = u.distHistGroup,
            i = Math.floor((e.rawX - n.arcOffsetH / 2) / n.arcSpaceWidth * a);
        i = (i = i > a ? a : i) < 0 ? 0 : i;
        var s = e.rawX < n.arcOffsetH / 2 ? n.arcOffsetH / 2 : e.rawX > n.arcOffsetH / 2 + n.arcSpaceWidth ? n.arcOffsetH / 2 + n.arcSpaceWidth : e.rawX,
            o = void 0 !== t[0][0][i] ? Math.min(t[0][0][i].y, t[1][0][i].y) : n.canvasHeight / 2,
            d = n.canvasHeight / 2,
            l = void 0 !== t[0][1][i] ? Math.max(y(t[0][1][i].y), y(t[1][1][i].y)) : n.canvasHeight / 2,
            c = function(e, t) {
                var n = "<span class='tEm'>",
                    a = "</span>",
                    r = "<span class='tIt'>",
                    i = L(t[0][0][e].data.value),
                    s = L(t[1][0][e].data.value);
                0 == s && (s = "none");
                var o = L(t[0][1][e].data.value),
                    d = L(t[1][1][e].data.value);
                0 == d && (d = "none");
                for (var l = t[2][2], c = "", _ = {
                        M: "male",
                        F: "female"
                    }, m = {
                        B: "black",
                        W: "white",
                        I: "amindian",
                        A: "asian"
                    }, h = {}, f = 0, p = t[2][0].length; f < p; f++) {
                    var y = _[t[2][0][f].vsex],
                        M = m[t[2][0][f].vrace] || "norace";
                    h[y] || (h[y] = {}), h[y][M] || (h[y][M] = 0), Math.floor(t[2][0][f].age) == e && h[y][M]++
                }
                if ("nofilter" != l.sex[0])
                    if ("nofilter" != l.race[0])
                        for (var y in h)
                            for (var g in h[y]) c += n, c += h[y][g].toString(), c += " ", c += P.race[g], c += " ", 1 == h[y][g] ? c += e <= 1 ? P.single.baby[y] : e <= 18 ? P.single.child[y] : P.single.adult[y] : c += e <= 1 ? P.plural.baby[y] : e <= 18 ? P.plural.child[y] : P.plural.adult[y], c += a + ", ";
                    else
                        for (var y in h) {
                            var v = 0;
                            for (var Y in h[y]) v += h[y][Y];
                            c += n, c += v.toString(), c += " ", c += 1 == v ? e <= 1 ? P.single.baby[y] : e <= 18 ? P.single.child[y] : P.single.adult[y] : e <= 1 ? P.plural.baby[y] : e <= 18 ? P.plural.child[y] : P.plural.adult[y], c += a + ", "
                        } else if ("nofilter" != l.race[0]) {
                            var k = {};
                            for (var y in h)
                                for (var Y in h[y]) k[Y] || (k[Y] = 0), k[Y] += h[y][Y];
                            for (var Y in k) c += n, c += k[Y].toString(), c += " ", c += P.race[Y], c += " ", 1 == k[Y] ? c += e <= 1 ? P.single.baby.neutral : e <= 18 ? P.single.child.neutral : P.single.adult.neutral : c += e <= 1 ? P.plural.baby.neutral : e <= 18 ? P.plural.child.neutral : P.plural.adult.neutral, c += a + ", "
                        } else c += n, c += i + " ", c += "1" == i ? e <= 1 ? P.single.baby.neutral : e <= 18 ? P.single.child.neutral : P.single.adult.neutral : e <= 1 ? P.plural.baby.neutral : e <= 18 ? P.plural.child.neutral : P.plural.adult.neutral, c += a + " ";
                var w = c.length,
                    b = 2;
                for (; w;)
                    if ("," == c[w -= 1])
                        if (2 == b) c = c.substring(0, w) + c.substring(w + 1), b -= 1;
                        else {
                            if (1 != b) continue;
                            1 == (c = c.substring(0, w + 1) + " and" + c.substring(w + 1)).match(/,/g).length && (c = c.substring(0, w) + c.substring(w + 1)), b -= 1
                        }
                var D = {
                    weapon: "",
                    region: "",
                    killings: "",
                    time: "",
                    season: "",
                    relationship: ""
                };
                for (var T in D)
                    if ("nofilter" != l[T][0]) {
                        var S = 0;
                        D[T] += P[T].before;
                        for (f = 0, p = l[T].length; f < p; f++) D[T] += P[T][l[T][f]], D[T] += P[T].after, S++;
                        S > 2 && (D[T] = P[T].alternate);
                        for (var x = D[T].length; x;)
                            if (x -= 1, D[T].substring(x) == P[T].after) {
                                D[T] = D[T].substring(0, x);
                                break
                            }
                    }
                c += 1 == i ? "was" : "were";
                var H = [c, " killed"].join(""),
                    j = "",
                    O = 0;
                for (var T in D) D.hasOwnProperty(T) && (j += D[T], "" != D[T] && O++);
                O > 2 && (j = " under these circumstances");
                H += j + ".";
                var E = ["<hr class='hoverRule'>", r, "On average, ", n, s, a, " of ", n, L(u.pctTop), a, " ", "people", " would have died", " from alternative causes at this age.", "</span>"];
                H += E.join("");
                var C = ["age", " ", e];
                if ("1" == o) var A = "person was";
                else A = "people were";
                if ("1" == d) var W = " person";
                else W = " people";
                var F = [n, o, a, " other ", A, " killed at this age.", "<hr class='hoverRule'>", r, "On average, ", n, d, a, " of ", n, L(u.pctBot), a, W, " would have died", " from alternative causes at this age.", "</span>"];
                return {
                    leftTop: H,
                    leftBot: F.join(""),
                    rightTop: C.join(""),
                    rightBot: ""
                }
            }(i, t),
            _ = {
                leftTop: 0,
                leftBot: 0,
                rightTop: s > n.arcOffsetH / 2 + n.arcSpaceWidth / 2 ? -10 : 10,
                rightBot: 0
            },
            m = {
                leftTop: o,
                leftBot: l,
                rightTop: d,
                rightBot: 0
            };
        for (var h in r) r.hasOwnProperty(h) && (r[h].bottom && !r[h].right ? sr(t[2][2], "nofilter") ? (r[h].tooltip.visible = !1, r[h].tooltip.hide()) : (r[h].tooltip.visible = !0, r[h].tooltip.show()) : r[h].bottom && r[h].right ? r[h].tooltip.hide() : r[h].tooltip.show(), r[h].tooltip.updateCopy(c[h]).shrinkWidth(250, 150), s > n.arcOffsetH / 2 + n.arcSpaceWidth / 2 ? (r[h].tooltip.itself.setTipPosition(1), r[h].right && r[h].tooltip.itself.mirror(!0)) : (r[h].tooltip.itself.setTipPosition(0), r[h].right && r[h].tooltip.itself.mirror(!1)), r[h].tooltip.updatePosition(s + _[h], m[h]))
    }
    var J = {
            Linear: Linear,
            Quad: Quad,
            Quint: Quint,
            TweenMax: TweenMax,
            TimelineMax: TimelineMax
        },
        B = J.TweenMax;

    function q() {
        for (var e, t, n, a, r, i, s = u.activecurves, o = u.heartbeats, d = u.animCurves, l = u.cfig, c = u.stage, _ = u.overstage, m = s.length, h = 0; h < m; h++)
            if (s[h] && h in s) {
                Y = s[h], s[h].age, r = h >= 5 ? s[h].lifecolor : s[h].lifecolor.slice(0, -4) + "1)";
                var y = h >= 5 ? s[h].afterlifecolor : s[h].afterlifecolor.slice(0, -4) + "1)";
                e = s[h].x, n = s[h].mrx, a = s[h].mry, t = s[h].y;
                var g, L = f(s[h]);
                if (n < L[1][0].x)(g = new createjs.Shape).graphics.setStrokeStyle(l.life_strokeStyle).beginStroke(r).moveTo(n, a).lineTo(e, t), c.addChild(g);
                else if ((g = new createjs.Shape).graphics.setStrokeStyle(l.afterlife_strokeStyle).beginStroke(y).moveTo(n, a).lineTo(e, t), c.addChild(g), "dot" in d[h] && ((i = d[h].dot).vel = i.vel || 1, i.y += i.vel, i.vel += .4, d[h].dot.y >= l.canvasHeight / 2)) {
                    o.removeChild(d[h].dot), delete d[h].dot;
                    var v = new createjs.Shape;
                    v.graphics.beginFill(d[h].lifecolor).drawCircle(p(d[h].age), l.canvasHeight / 2, 2.5), c.addChild(v)
                }
                if (Y.mrx = e, Y.mry = t, null != r && n > L[1][0].x - 5 && n < L[1][0].x + 5) {
                    if (!("heartbeat" in s[h])) {
                        var Y = a > l.canvasHeight / 2 ? M(L[0]) : L[0];
                        s[h].heartbeat = new createjs.Shape, s[h].heartbeat.graphics.setStrokeStyle(1).beginStroke(r).moveTo(Y[0].x, Y[0].y).bezierCurveTo(Y[1].x, Y[1].y, Y[2].x, Y[2].y, Y[3].x, Y[3].y), o.addChild(s[h].heartbeat), h < 5 && !("dot" in d[h]) && (d[h].dot = new createjs.Shape, d[h].dot.graphics.beginFill(r).drawCircle(0, 0, 2.5), d[h].dot.x = Y[3].x, d[h].dot.y = Y[3].y, o.addChild(d[h].dot))
                    }
                    continue
                }
            } else "dot" in d[h] && (o.removeChild(d[h].dot), delete d[h].dot), "heartbeat" in d[h] && (o.removeChild(d[h].heartbeat), delete d[h].heartbeat);
        _.update(), c.update(), c.removeAllChildren()
    }

    function V() {
        if (!u.playingAnimation) return !1;
        var e = u.stage,
            t = u.heartbeats,
            n = u.masterFilter;
        clearTimeout(u.delayWatcher), clearTimeout(u.animDelay), u.playingAnimation = !1, createjs.Ticker.removeEventListener("tick", q), B.killAll(), u.activecurves = [], e.removeAllChildren(), e.clear(), t.removeAllChildren(), n.immediateSort(), document.getElementById("monthLabel").innerHTML = "";
        var a = ir(n.curFilters, rr.masterView);
        return rr.masterView.syncDictionaries(a), !0
    }

    function G() {
        var e = u.peopleDifference;
        F()(".header, .axis, .axisLabel, #c, #peoplebox, #yearsbox, #distSwitch, #menuBox, #blurb, #findings, #questionMark").fadeIn(1e3), F()("#container, #blurb").removeClass("intro"), e > 0 && F()("#sinceNumBox").fadeIn(1e3)
    }

    function $() {
        document.getElementById("peoplecount").innerHTML = L(u.peopleCount), document.getElementById("curYearLabel").innerHTML = u.curYear.toString(), document.getElementById("yearscount").innerHTML = L(u.yearsCount), document.getElementById("monthLabel").innerHTML = 0 == u.monthLabel ? "" : x[u.monthLabel], u.peopleCount == u.animCurves.length && (document.getElementById("monthLabel").innerHTML = "")
    }

    function K() {
        u.pctTop = 0, u.pctBot = 0, u.yearsCount = 0, u.peopleCount = 0, u.stolenTop = 0
    }

    function X(e, t) {
        u.activecurves[e] = t
    }

    function Z(e, t) {
        var n = u.cfig,
            a = u.introTtip,
            r = u.stage,
            i = u.masterFilter;
        if (u.peopleCount++, ir(i.curFilters, rr.masterView)(t) ? u.pctTop++ : u.pctBot++, t.month > u.monthLabel && (u.monthLabel = t.month), $(), e >= 5 && t.age >= 0) {
            var s = new createjs.Shape;
            s.graphics.beginFill(t.lifecolor).drawCircle(p(t.age), n.canvasHeight / 2, 2.5), r.addChild(s)
        }
        var o = f(t);
        e < 5 && (void 0 === a[0] && (a[0] = []), a[0][e] = N(), a[0][e].strokeWidth(0).bgColor("rgba(0,0,0,0)").horizontal(!1).mirror(!0).copy("<span class='introTooltip'>killed at " + Math.floor(t.age) + "</span>"), t.name && a[0][e].copy("<span class='introTooltip'>" + t.name + ", killed at " + Math.floor(t.age) + "</span>"), a[0][e].copyClass("bigTooltip").setTipPosition(0).shrinkWidth(300).x(o[0][3].x).y(m.yFromX(o[0][3].x, o[0][0], o[0][1], o[0][2], o[0][3], 20) + 10), a[0][e].el().appendTo("#c").hide().fadeIn(200), a[0][e].el().delay(1500).fadeOut(200, null, (function() {
            F()(this).remove()
        })), a[0][e].render().position())
    }

    function Q(e, t) {
        var n = u.cfig,
            a = u.introTtip,
            r = u.stage;
        u.activecurves[e] = !1;
        var i = t.age < 0 ? 0 : t.age;
        u.yearsCount += Math.floor(t.altage) - Math.floor(i), $();
        var s, o, d = e > 5 ? t.afterlifecolor : t.afterlifecolor.slice(0, -4) + "1)",
            l = new createjs.Shape;
        (l.graphics.beginFill(d).drawCircle(p(t.altage), n.canvasHeight / 2, 2.5), r.addChild(l), e < 5 && (void 0 === a[1] && (a[1] = []), a[1][e] = N(), a[1][e].strokeWidth(0).bgColor("rgba(0,0,0,0)").horizontal(!1).mirror(!1).copy("<span class='tIt introTooltip'>could have lived to be " + Math.floor(t.altage) + "</span>").copyClass("bigTooltip").setTipPosition(p(t.altage) > n.arcOffsetH / 2 + .75 * n.arcSpaceWidth ? 1 : 0).shrinkWidth(300).x(p(t.altage)).y(n.canvasHeight / 2 - 5), a[1][e].el().appendTo("#c").hide().fadeIn(200), a[1][e].el().delay(1e3).fadeOut(200, null, (function() {
            F()(this).remove()
        })), a[1][e].render().position()), 4 === e) && (s = r, o = 0, {
            fadeStage: function e() {
                var t = u.cfig;
                if (o <= 15) return window.setTimeout(e, 2e3 / 45), void o++;
                var n = new createjs.Shape;
                n.graphics.beginFill("rgba(20,20,20," + (1 - Math.pow(1 - .7, 1 / 30)) + ")").drawRect(0, 0, t.canvasWidth, t.canvasHeight), s.addChild(n), ++o >= 45 ? o = 0 : window.setTimeout(e, 2e3 / 45)
            }
        }).fadeStage();
        e === u.animCurves.length - 1 && (G(), u.playingAnimation = !1)
    }

    function ee() {
        u.activePersonTooltip && (u.activePersonTooltip[0].el().fadeOut(200, null, (function() {
            F()(this).remove()
        })), u.activePersonTooltip[1].el().fadeOut(200, null, (function() {
            F()(this).remove()
        })), u.activePersonTooltip = !1)
    }
    var te = n(2),
        ne = te.a.Symbol,
        ae = Object.prototype,
        re = ae.hasOwnProperty,
        ie = ae.toString,
        se = ne ? ne.toStringTag : void 0;
    var oe = function(e) {
            var t = re.call(e, se),
                n = e[se];
            try {
                e[se] = void 0;
                var a = !0
            } catch (e) {}
            var r = ie.call(e);
            return a && (t ? e[se] = n : delete e[se]), r
        },
        de = Object.prototype.toString;
    var ue = function(e) {
            return de.call(e)
        },
        le = ne ? ne.toStringTag : void 0;
    var ce = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : le && le in Object(e) ? oe(e) : ue(e)
    };
    var _e = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    };
    var me, he = function(e) {
            if (!_e(e)) return !1;
            var t = ce(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        },
        fe = te.a["__core-js_shared__"],
        pe = (me = /[^.]+$/.exec(fe && fe.keys && fe.keys.IE_PROTO || "")) ? "Symbol(src)_1." + me : "";
    var ye = function(e) {
            return !!pe && pe in e
        },
        Me = Function.prototype.toString;
    var ge = function(e) {
            if (null != e) {
                try {
                    return Me.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        },
        Le = /^\[object .+?Constructor\]$/,
        ve = Function.prototype,
        Ye = Object.prototype,
        ke = ve.toString,
        we = Ye.hasOwnProperty,
        be = RegExp("^" + ke.call(we).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var De = function(e) {
        return !(!_e(e) || ye(e)) && (he(e) ? be : Le).test(ge(e))
    };
    var Te = function(e, t) {
        return null == e ? void 0 : e[t]
    };
    var Se = function(e, t) {
            var n = Te(e, t);
            return De(n) ? n : void 0
        },
        xe = function() {
            try {
                var e = Se(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    var He = function(e, t, n) {
        "__proto__" == t && xe ? xe(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    };
    var je = function(e, t, n, a) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;) {
            var s = e[r];
            t(a, s, n(s), e)
        }
        return a
    };
    var Oe = function(e) {
        return function(t, n, a) {
            for (var r = -1, i = Object(t), s = a(t), o = s.length; o--;) {
                var d = s[e ? o : ++r];
                if (!1 === n(i[d], d, i)) break
            }
            return t
        }
    }();
    var Ee = function(e, t) {
        for (var n = -1, a = Array(e); ++n < e;) a[n] = t(n);
        return a
    };
    var Ce = function(e) {
        return null != e && "object" == typeof e
    };
    var Ae = function(e) {
            return Ce(e) && "[object Arguments]" == ce(e)
        },
        Pe = Object.prototype,
        We = Pe.hasOwnProperty,
        Fe = Pe.propertyIsEnumerable,
        Ne = Ae(function() {
            return arguments
        }()) ? Ae : function(e) {
            return Ce(e) && We.call(e, "callee") && !Fe.call(e, "callee")
        },
        ze = Array.isArray,
        Re = n(3),
        Ie = /^(?:0|[1-9]\d*)$/;
    var Ue = function(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && Ie.test(e)) && e > -1 && e % 1 == 0 && e < t
    };
    var Je = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        },
        Be = {};
    Be["[object Float32Array]"] = Be["[object Float64Array]"] = Be["[object Int8Array]"] = Be["[object Int16Array]"] = Be["[object Int32Array]"] = Be["[object Uint8Array]"] = Be["[object Uint8ClampedArray]"] = Be["[object Uint16Array]"] = Be["[object Uint32Array]"] = !0, Be["[object Arguments]"] = Be["[object Array]"] = Be["[object ArrayBuffer]"] = Be["[object Boolean]"] = Be["[object DataView]"] = Be["[object Date]"] = Be["[object Error]"] = Be["[object Function]"] = Be["[object Map]"] = Be["[object Number]"] = Be["[object Object]"] = Be["[object RegExp]"] = Be["[object Set]"] = Be["[object String]"] = Be["[object WeakMap]"] = !1;
    var qe = function(e) {
        return Ce(e) && Je(e.length) && !!Be[ce(e)]
    };
    var Ve = function(e) {
            return function(t) {
                return e(t)
            }
        },
        Ge = n(5),
        $e = Ge.a && Ge.a.isTypedArray,
        Ke = $e ? Ve($e) : qe,
        Xe = Object.prototype.hasOwnProperty;
    var Ze = function(e, t) {
            var n = ze(e),
                a = !n && Ne(e),
                r = !n && !a && Object(Re.a)(e),
                i = !n && !a && !r && Ke(e),
                s = n || a || r || i,
                o = s ? Ee(e.length, String) : [],
                d = o.length;
            for (var u in e) !t && !Xe.call(e, u) || s && ("length" == u || r && ("offset" == u || "parent" == u) || i && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Ue(u, d)) || o.push(u);
            return o
        },
        Qe = Object.prototype;
    var et = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || Qe)
    };
    var tt = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }(Object.keys, Object),
        nt = Object.prototype.hasOwnProperty;
    var at = function(e) {
        if (!et(e)) return tt(e);
        var t = [];
        for (var n in Object(e)) nt.call(e, n) && "constructor" != n && t.push(n);
        return t
    };
    var rt = function(e) {
        return null != e && Je(e.length) && !he(e)
    };
    var it = function(e) {
        return rt(e) ? Ze(e) : at(e)
    };
    var st = function(e, t) {
        return function(n, a) {
            if (null == n) return n;
            if (!rt(n)) return e(n, a);
            for (var r = n.length, i = t ? r : -1, s = Object(n);
                (t ? i-- : ++i < r) && !1 !== a(s[i], i, s););
            return n
        }
    }((function(e, t) {
        return e && Oe(e, t, it)
    }));
    var ot = function(e, t, n, a) {
        return st(e, (function(e, r, i) {
            t(a, e, n(e), i)
        })), a
    };
    var dt = function() {
        this.__data__ = [], this.size = 0
    };
    var ut = function(e, t) {
        return e === t || e != e && t != t
    };
    var lt = function(e, t) {
            for (var n = e.length; n--;)
                if (ut(e[n][0], t)) return n;
            return -1
        },
        ct = Array.prototype.splice;
    var _t = function(e) {
        var t = this.__data__,
            n = lt(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : ct.call(t, n, 1), --this.size, !0)
    };
    var mt = function(e) {
        var t = this.__data__,
            n = lt(t, e);
        return n < 0 ? void 0 : t[n][1]
    };
    var ht = function(e) {
        return lt(this.__data__, e) > -1
    };
    var ft = function(e, t) {
        var n = this.__data__,
            a = lt(n, e);
        return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this
    };

    function pt(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    pt.prototype.clear = dt, pt.prototype.delete = _t, pt.prototype.get = mt, pt.prototype.has = ht, pt.prototype.set = ft;
    var yt = pt;
    var Mt = function() {
        this.__data__ = new yt, this.size = 0
    };
    var gt = function(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    };
    var Lt = function(e) {
        return this.__data__.get(e)
    };
    var vt = function(e) {
            return this.__data__.has(e)
        },
        Yt = Se(te.a, "Map"),
        kt = Se(Object, "create");
    var wt = function() {
        this.__data__ = kt ? kt(null) : {}, this.size = 0
    };
    var bt = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        },
        Dt = Object.prototype.hasOwnProperty;
    var Tt = function(e) {
            var t = this.__data__;
            if (kt) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return Dt.call(t, e) ? t[e] : void 0
        },
        St = Object.prototype.hasOwnProperty;
    var xt = function(e) {
        var t = this.__data__;
        return kt ? void 0 !== t[e] : St.call(t, e)
    };
    var Ht = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = kt && void 0 === t ? "__lodash_hash_undefined__" : t, this
    };

    function jt(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    jt.prototype.clear = wt, jt.prototype.delete = bt, jt.prototype.get = Tt, jt.prototype.has = xt, jt.prototype.set = Ht;
    var Ot = jt;
    var Et = function() {
        this.size = 0, this.__data__ = {
            hash: new Ot,
            map: new(Yt || yt),
            string: new Ot
        }
    };
    var Ct = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    };
    var At = function(e, t) {
        var n = e.__data__;
        return Ct(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    };
    var Pt = function(e) {
        var t = At(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    };
    var Wt = function(e) {
        return At(this, e).get(e)
    };
    var Ft = function(e) {
        return At(this, e).has(e)
    };
    var Nt = function(e, t) {
        var n = At(this, e),
            a = n.size;
        return n.set(e, t), this.size += n.size == a ? 0 : 1, this
    };

    function zt(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    zt.prototype.clear = Et, zt.prototype.delete = Pt, zt.prototype.get = Wt, zt.prototype.has = Ft, zt.prototype.set = Nt;
    var Rt = zt;
    var It = function(e, t) {
        var n = this.__data__;
        if (n instanceof yt) {
            var a = n.__data__;
            if (!Yt || a.length < 199) return a.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new Rt(a)
        }
        return n.set(e, t), this.size = n.size, this
    };

    function Ut(e) {
        var t = this.__data__ = new yt(e);
        this.size = t.size
    }
    Ut.prototype.clear = Mt, Ut.prototype.delete = gt, Ut.prototype.get = Lt, Ut.prototype.has = vt, Ut.prototype.set = It;
    var Jt = Ut;
    var Bt = function(e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this
    };
    var qt = function(e) {
        return this.__data__.has(e)
    };

    function Vt(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new Rt; ++t < n;) this.add(e[t])
    }
    Vt.prototype.add = Vt.prototype.push = Bt, Vt.prototype.has = qt;
    var Gt = Vt;
    var $t = function(e, t) {
        for (var n = -1, a = null == e ? 0 : e.length; ++n < a;)
            if (t(e[n], n, e)) return !0;
        return !1
    };
    var Kt = function(e, t) {
        return e.has(t)
    };
    var Xt = function(e, t, n, a, r, i) {
            var s = 1 & n,
                o = e.length,
                d = t.length;
            if (o != d && !(s && d > o)) return !1;
            var u = i.get(e);
            if (u && i.get(t)) return u == t;
            var l = -1,
                c = !0,
                _ = 2 & n ? new Gt : void 0;
            for (i.set(e, t), i.set(t, e); ++l < o;) {
                var m = e[l],
                    h = t[l];
                if (a) var f = s ? a(h, m, l, t, e, i) : a(m, h, l, e, t, i);
                if (void 0 !== f) {
                    if (f) continue;
                    c = !1;
                    break
                }
                if (_) {
                    if (!$t(t, (function(e, t) {
                            if (!Kt(_, t) && (m === e || r(m, e, n, a, i))) return _.push(t)
                        }))) {
                        c = !1;
                        break
                    }
                } else if (m !== h && !r(m, h, n, a, i)) {
                    c = !1;
                    break
                }
            }
            return i.delete(e), i.delete(t), c
        },
        Zt = te.a.Uint8Array;
    var Qt = function(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach((function(e, a) {
            n[++t] = [a, e]
        })), n
    };
    var en = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e) {
                n[++t] = e
            })), n
        },
        tn = ne ? ne.prototype : void 0,
        nn = tn ? tn.valueOf : void 0;
    var an = function(e, t, n, a, r, i, s) {
        switch (n) {
            case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case "[object ArrayBuffer]":
                return !(e.byteLength != t.byteLength || !i(new Zt(e), new Zt(t)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return ut(+e, +t);
            case "[object Error]":
                return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
                return e == t + "";
            case "[object Map]":
                var o = Qt;
            case "[object Set]":
                var d = 1 & a;
                if (o || (o = en), e.size != t.size && !d) return !1;
                var u = s.get(e);
                if (u) return u == t;
                a |= 2, s.set(e, t);
                var l = Xt(o(e), o(t), a, r, i, s);
                return s.delete(e), l;
            case "[object Symbol]":
                if (nn) return nn.call(e) == nn.call(t)
        }
        return !1
    };
    var rn = function(e, t) {
        for (var n = -1, a = t.length, r = e.length; ++n < a;) e[r + n] = t[n];
        return e
    };
    var sn = function(e, t, n) {
        var a = t(e);
        return ze(e) ? a : rn(a, n(e))
    };
    var on = function(e, t) {
        for (var n = -1, a = null == e ? 0 : e.length, r = 0, i = []; ++n < a;) {
            var s = e[n];
            t(s, n, e) && (i[r++] = s)
        }
        return i
    };
    var dn = function() {
            return []
        },
        un = Object.prototype.propertyIsEnumerable,
        ln = Object.getOwnPropertySymbols,
        cn = ln ? function(e) {
            return null == e ? [] : (e = Object(e), on(ln(e), (function(t) {
                return un.call(e, t)
            })))
        } : dn;
    var _n = function(e) {
            return sn(e, it, cn)
        },
        mn = Object.prototype.hasOwnProperty;
    var hn = function(e, t, n, a, r, i) {
            var s = 1 & n,
                o = _n(e),
                d = o.length;
            if (d != _n(t).length && !s) return !1;
            for (var u = d; u--;) {
                var l = o[u];
                if (!(s ? l in t : mn.call(t, l))) return !1
            }
            var c = i.get(e);
            if (c && i.get(t)) return c == t;
            var _ = !0;
            i.set(e, t), i.set(t, e);
            for (var m = s; ++u < d;) {
                var h = e[l = o[u]],
                    f = t[l];
                if (a) var p = s ? a(f, h, l, t, e, i) : a(h, f, l, e, t, i);
                if (!(void 0 === p ? h === f || r(h, f, n, a, i) : p)) {
                    _ = !1;
                    break
                }
                m || (m = "constructor" == l)
            }
            if (_ && !m) {
                var y = e.constructor,
                    M = t.constructor;
                y == M || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof M && M instanceof M || (_ = !1)
            }
            return i.delete(e), i.delete(t), _
        },
        fn = Se(te.a, "DataView"),
        pn = Se(te.a, "Promise"),
        yn = Se(te.a, "Set"),
        Mn = Se(te.a, "WeakMap"),
        gn = ge(fn),
        Ln = ge(Yt),
        vn = ge(pn),
        Yn = ge(yn),
        kn = ge(Mn),
        wn = ce;
    (fn && "[object DataView]" != wn(new fn(new ArrayBuffer(1))) || Yt && "[object Map]" != wn(new Yt) || pn && "[object Promise]" != wn(pn.resolve()) || yn && "[object Set]" != wn(new yn) || Mn && "[object WeakMap]" != wn(new Mn)) && (wn = function(e) {
        var t = ce(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            a = n ? ge(n) : "";
        if (a) switch (a) {
            case gn:
                return "[object DataView]";
            case Ln:
                return "[object Map]";
            case vn:
                return "[object Promise]";
            case Yn:
                return "[object Set]";
            case kn:
                return "[object WeakMap]"
        }
        return t
    });
    var bn = wn,
        Dn = Object.prototype.hasOwnProperty;
    var Tn = function(e, t, n, a, r, i) {
        var s = ze(e),
            o = ze(t),
            d = s ? "[object Array]" : bn(e),
            u = o ? "[object Array]" : bn(t),
            l = "[object Object]" == (d = "[object Arguments]" == d ? "[object Object]" : d),
            c = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u),
            _ = d == u;
        if (_ && Object(Re.a)(e)) {
            if (!Object(Re.a)(t)) return !1;
            s = !0, l = !1
        }
        if (_ && !l) return i || (i = new Jt), s || Ke(e) ? Xt(e, t, n, a, r, i) : an(e, t, d, n, a, r, i);
        if (!(1 & n)) {
            var m = l && Dn.call(e, "__wrapped__"),
                h = c && Dn.call(t, "__wrapped__");
            if (m || h) {
                var f = m ? e.value() : e,
                    p = h ? t.value() : t;
                return i || (i = new Jt), r(f, p, n, a, i)
            }
        }
        return !!_ && (i || (i = new Jt), hn(e, t, n, a, r, i))
    };
    var Sn = function e(t, n, a, r, i) {
        return t === n || (null == t || null == n || !Ce(t) && !Ce(n) ? t != t && n != n : Tn(t, n, a, r, e, i))
    };
    var xn = function(e, t, n, a) {
        var r = n.length,
            i = r,
            s = !a;
        if (null == e) return !i;
        for (e = Object(e); r--;) {
            var o = n[r];
            if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1
        }
        for (; ++r < i;) {
            var d = (o = n[r])[0],
                u = e[d],
                l = o[1];
            if (s && o[2]) {
                if (void 0 === u && !(d in e)) return !1
            } else {
                var c = new Jt;
                if (a) var _ = a(u, l, d, e, t, c);
                if (!(void 0 === _ ? Sn(l, u, 3, a, c) : _)) return !1
            }
        }
        return !0
    };
    var Hn = function(e) {
        return e == e && !_e(e)
    };
    var jn = function(e) {
        for (var t = it(e), n = t.length; n--;) {
            var a = t[n],
                r = e[a];
            t[n] = [a, r, Hn(r)]
        }
        return t
    };
    var On = function(e, t) {
        return function(n) {
            return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
        }
    };
    var En = function(e) {
        var t = jn(e);
        return 1 == t.length && t[0][2] ? On(t[0][0], t[0][1]) : function(n) {
            return n === e || xn(n, e, t)
        }
    };
    var Cn = function(e) {
            return "symbol" == typeof e || Ce(e) && "[object Symbol]" == ce(e)
        },
        An = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Pn = /^\w*$/;
    var Wn = function(e, t) {
        if (ze(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Cn(e)) || (Pn.test(e) || !An.test(e) || null != t && e in Object(t))
    };

    function Fn(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
        var n = function() {
            var a = arguments,
                r = t ? t.apply(this, a) : a[0],
                i = n.cache;
            if (i.has(r)) return i.get(r);
            var s = e.apply(this, a);
            return n.cache = i.set(r, s) || i, s
        };
        return n.cache = new(Fn.Cache || Rt), n
    }
    Fn.Cache = Rt;
    var Nn = Fn;
    var zn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Rn = /\\(\\)?/g,
        In = function(e) {
            var t = Nn(e, (function(e) {
                    return 500 === n.size && n.clear(), e
                })),
                n = t.cache;
            return t
        }((function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(zn, (function(e, n, a, r) {
                t.push(a ? r.replace(Rn, "$1") : n || e)
            })), t
        }));
    var Un = function(e, t) {
            for (var n = -1, a = null == e ? 0 : e.length, r = Array(a); ++n < a;) r[n] = t(e[n], n, e);
            return r
        },
        Jn = ne ? ne.prototype : void 0,
        Bn = Jn ? Jn.toString : void 0;
    var qn = function e(t) {
        if ("string" == typeof t) return t;
        if (ze(t)) return Un(t, e) + "";
        if (Cn(t)) return Bn ? Bn.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -1 / 0 ? "-0" : n
    };
    var Vn = function(e) {
        return null == e ? "" : qn(e)
    };
    var Gn = function(e, t) {
        return ze(e) ? e : Wn(e, t) ? [e] : In(Vn(e))
    };
    var $n = function(e) {
        if ("string" == typeof e || Cn(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
    };
    var Kn = function(e, t) {
        for (var n = 0, a = (t = Gn(t, e)).length; null != e && n < a;) e = e[$n(t[n++])];
        return n && n == a ? e : void 0
    };
    var Xn = function(e, t, n) {
        var a = null == e ? void 0 : Kn(e, t);
        return void 0 === a ? n : a
    };
    var Zn = function(e, t) {
        return null != e && t in Object(e)
    };
    var Qn = function(e, t, n) {
        for (var a = -1, r = (t = Gn(t, e)).length, i = !1; ++a < r;) {
            var s = $n(t[a]);
            if (!(i = null != e && n(e, s))) break;
            e = e[s]
        }
        return i || ++a != r ? i : !!(r = null == e ? 0 : e.length) && Je(r) && Ue(s, r) && (ze(e) || Ne(e))
    };
    var ea = function(e, t) {
        return null != e && Qn(e, t, Zn)
    };
    var ta = function(e, t) {
        return Wn(e) && Hn(t) ? On($n(e), t) : function(n) {
            var a = Xn(n, e);
            return void 0 === a && a === t ? ea(n, e) : Sn(t, a, 3)
        }
    };
    var na = function(e) {
        return e
    };
    var aa = function(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    };
    var ra = function(e) {
        return function(t) {
            return Kn(t, e)
        }
    };
    var ia = function(e) {
        return Wn(e) ? aa($n(e)) : ra(e)
    };
    var sa = function(e) {
        return "function" == typeof e ? e : null == e ? na : "object" == typeof e ? ze(e) ? ta(e[0], e[1]) : En(e) : ia(e)
    };
    var oa = function(e, t) {
            return function(n, a) {
                var r = ze(n) ? je : ot,
                    i = t ? t() : {};
                return r(n, e, sa(a, 2), i)
            }
        },
        da = oa((function(e, t, n) {
            He(e, n, t)
        }));

    function ua(e) {
        return e.map((function(e) {
            var t = f(e);
            return {
                flipped: !1,
                life: t[0],
                afterlife: t[1],
                curve: e
            }
        }))
    }

    function la() {
        this.topLeftContent = "", this.pctTopContent = "", this.botLeftContent = "", this.pctBotContent = "", this.topRightContent = "", this.stolenTopContent = "", this.showTopLeft = function(e) {
            var t = e ? "block" : "none";
            return F()("#topFilter").css("display", t), F()("#pctTop").css("display", t), this
        }, this.showBotLeft = function(e) {
            var t = e ? "block" : "none";
            return F()("#botFilter").css("display", t), F()("#pctBot").css("display", t), this
        }, this.showTopRight = function(e) {
            var t = e ? "block" : "none";
            return F()("#topHistLabel").css("display", t), F()("#stolenTopLabel").css("display", t), this
        }, this.pushContent = function() {
            return F()("#topFilter").html(this.topLeftContent), F()("#pctTop").html(this.pctTopContent), F()("#botFilter").html(this.botLeftContent), F()("#pctBot").html(this.pctBotContent), F()("#topHistLabel").html(this.topRightContent), F()("#stolenTopLabel").html(this.stolenTopContent), this
        }, this.setContent = function(e, t, n) {
            var a = u.masterFilter,
                r = u.pctTop,
                i = u.peopleCount,
                s = u.pctBot,
                o = u.stolenTop,
                d = Ua[u.curYear],
                l = "right" === e,
                c = "bot" === t;
            if (!l && !c) return this.topLeftContent = a.makeList(d.uiTitles), this.pctTopContent = L(Math.round(r)) + " | " + m(r / i), this;
            if (!l && c) {
                var _ = n || "All Other Victims";
                return this.botLeftContent = _, this.pctBotContent = L(Math.round(s)) + " | " + m(s / i), this
            }
            if (l && !c) {
                _ = n || "potential lifespan";
                return this.topRightContent = _, this.stolenTopContent = L(o) + "<span class='italic'> stolen years</span>", this
            }
            if (l && c) return this;

            function m(e) {
                return v(e, 2, e >= .01 ? 0 : 2)
            }
        }
    }
    var ca = ne ? ne.isConcatSpreadable : void 0;
    var _a = function(e) {
        return ze(e) || Ne(e) || !!(ca && e && e[ca])
    };
    var ma = function e(t, n, a, r, i) {
        var s = -1,
            o = t.length;
        for (a || (a = _a), i || (i = []); ++s < o;) {
            var d = t[s];
            n > 0 && a(d) ? n > 1 ? e(d, n - 1, a, r, i) : rn(i, d) : r || (i[i.length] = d)
        }
        return i
    };
    var ha = function(e, t) {
        var n = -1,
            a = rt(e) ? Array(e.length) : [];
        return st(e, (function(e, r, i) {
            a[++n] = t(e, r, i)
        })), a
    };
    var fa = function(e, t) {
        var n = e.length;
        for (e.sort(t); n--;) e[n] = e[n].value;
        return e
    };
    var pa = function(e, t) {
        if (e !== t) {
            var n = void 0 !== e,
                a = null === e,
                r = e == e,
                i = Cn(e),
                s = void 0 !== t,
                o = null === t,
                d = t == t,
                u = Cn(t);
            if (!o && !u && !i && e > t || i && s && d && !o && !u || a && s && d || !n && d || !r) return 1;
            if (!a && !i && !u && e < t || u && n && r && !a && !i || o && n && r || !s && r || !d) return -1
        }
        return 0
    };
    var ya = function(e, t, n) {
        for (var a = -1, r = e.criteria, i = t.criteria, s = r.length, o = n.length; ++a < s;) {
            var d = pa(r[a], i[a]);
            if (d) return a >= o ? d : d * ("desc" == n[a] ? -1 : 1)
        }
        return e.index - t.index
    };
    var Ma = function(e, t, n) {
        var a = -1;
        t = Un(t.length ? t : [na], Ve(sa));
        var r = ha(e, (function(e, n, r) {
            return {
                criteria: Un(t, (function(t) {
                    return t(e)
                })),
                index: ++a,
                value: e
            }
        }));
        return fa(r, (function(e, t) {
            return ya(e, t, n)
        }))
    };
    var ga = function(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        },
        La = Math.max;
    var va = function(e, t, n) {
        return t = La(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var a = arguments, r = -1, i = La(a.length - t, 0), s = Array(i); ++r < i;) s[r] = a[t + r];
                r = -1;
                for (var o = Array(t + 1); ++r < t;) o[r] = a[r];
                return o[t] = n(s), ga(e, this, o)
            }
    };
    var Ya = function(e) {
            return function() {
                return e
            }
        },
        ka = xe ? function(e, t) {
            return xe(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Ya(t),
                writable: !0
            })
        } : na,
        wa = Date.now;
    var ba = function(e) {
        var t = 0,
            n = 0;
        return function() {
            var a = wa(),
                r = 16 - (a - n);
            if (n = a, r > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }(ka);
    var Da = function(e, t, n) {
            if (!_e(n)) return !1;
            var a = typeof t;
            return !!("number" == a ? rt(n) && Ue(t, n.length) : "string" == a && t in n) && ut(n[t], e)
        },
        Ta = function(e, t) {
            return ba(va(e, t, na), e + "")
        }((function(e, t) {
            if (null == e) return [];
            var n = t.length;
            return n > 1 && Da(e, t[0], t[1]) ? t = [] : n > 2 && Da(t[0], t[1], t[2]) && (t = [t[0]]), Ma(e, ma(t, 1), [])
        }));
    var Sa = function(e, t) {
            return (ze(e) ? Un : ha)(e, sa(t, 3))
        },
        xa = Object.prototype.hasOwnProperty,
        Ha = oa((function(e, t, n) {
            xa.call(e, n) ? e[n].push(t) : He(e, n, [t])
        }));
    var ja = function(e) {
        return null == e
    };

    function Oa(e, t) {
        for (var n = [], a = 2; a < arguments.length; a++) n[a - 2] = arguments[a];
        var r = document.createElement(e);
        for (var i in t)
            if (t.hasOwnProperty(i) && void 0 !== t[i]) {
                var s = t[i];
                if ("object" == typeof s)
                    for (var o in s) s.hasOwnProperty(o) && void 0 !== s[o] && (r[i][o] = s[o]);
                else r[i] = s
            }
        return n.forEach((function(e) {
            if (e)
                if ("string" == typeof e) {
                    var t = document.createElement("text");
                    t.innerText = e, r.appendChild(t)
                } else r.appendChild(e)
        })), r
    }
    var Ea = function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var a = Array(e),
            r = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], s = 0, o = i.length; s < o; s++, r++) a[r] = i[s];
        return a
    };

    function Ca(e, t) {
        function n(e, n) {
            var a = document.createElement("ul");
            a.className = "menuGroup";
            for (var r = n - 1; r >= 0; --r)
                if (e[r]) {
                    (d = document.createElement("li")).id = e[r] + "Button", d.className = "hasValue";
                    var i = function(e) {
                        return function() {
                            u.masterFilter.filter(e)
                        }
                    }(e[r]);
                    d.addEventListener("click", i);
                    var s = document.createElement("span");
                    s.className = "menuToggle";
                    var o = document.createElement("span");
                    o.className = "menuName", o.innerHTML = t[e[r]], d.appendChild(s), d.appendChild(o), a.appendChild(d)
                } else {
                    var d = document.createElement("li");
                    a.appendChild(d)
                }
            return a
        }

        function a(e) {
            F()(".filterDiv, .menuDiv").addClass("shownList")
        }

        function r() {
            F()(".filterDiv, .menuDiv").removeClass("shownList")
        }

        function i(e) {
            e.stopPropagation()
        }
        return {
            renderGroups: function() {
                var t = document.createElement("div");
                t.id = "menuBox";
                var s = document.createElement("div");
                s.className = "filterDiv";
                var o = document.createElement("div");
                o.className = "headlineDiv";
                var d = document.createElement("span");
                d.className = "headlineTitle", d.innerHTML = "Use the categories below as additive filters.", o.appendChild(d);
                var l = document.createElement("span");
                l.className = "headlineNoFilter invisible", l.innerHTML = "Remove filters";
                var c = function() {
                    u.masterFilter.reset(!0)
                };
                l.addEventListener("click", c), o.appendChild(l), s.appendChild(o);
                var _ = {};
                if (e[0].category) {
                    var m = Ta(Sa(Ha(e.map((function(e, t) {
                        return {
                            menu: e,
                            idx: t
                        }
                    })), (function(e) {
                        return e.menu.category
                    })), (function(e) {
                        return e
                    })), (function(e) {
                        return e[0].idx
                    }));
                    _ = m.reduce((function(e, t, n) {
                        return e[t[0].menu.category] = n, e
                    }), _);
                    var h = Oa.apply(void 0, Ea(["div", {
                        className: "menu-categories",
                        display: "flex"
                    }], m.map((function(e, t) {
                        return Oa("div", {
                            className: "category-" + (t + 1),
                            style: {
                                width: 118 * e.length + "px"
                            }
                        }, "About the ", Oa("em", {}, e[0].menu.category))
                    }))));
                    s.appendChild(h)
                }
                for (var f, p, y = 0, M = 0, g = e.length; M < g; M++) y = Math.max(y, e[M].filters.length);
                for (M = 0, g = e.length; M < g; M++) {
                    f = n(e[M].filters, y);
                    var L = _[e[M].category];
                    ja(L) || f.classList.add("category-" + (L + 1)), s.appendChild(f)
                }
                for (t.appendChild(s), M = 0, g = e.length; M < g; M++) {
                    (p = document.createElement("div")).className = "menuDiv", 0 == M ? p.className += " leftCorner" : M == g - 1 && (p.className += " rightCorner");
                    c = function(e) {
                        return function() {
                            u.masterFilter.filter(e)
                        }
                    }(e[M].group);
                    p.addEventListener("click", c);
                    var v = document.createElement("a");
                    v.className = "menuTitle", v.innerHTML = e[M].title, p.appendChild(v), t.appendChild(p)
                }
                F()("#menuBox").replaceWith(t), F()(".menuDiv, .filterDiv").hover(a, r).mousemove(i)
            },
            menuGroup: n
        }
    }

    function Aa(e) {
        if (hr(e)) {
            var t = Ua[u.curYear];
            if (!rr.masterView || rr.masterView.type !== t.year) {
                var n = u.animCurves = u.curvesByYear[t.year];
                rr.masterView = t.uiFactory(n), u.inDistView && (z(), u.overstage.alpha = 1, F()("#distSwitch").toggleClass("focus")), rr.masterView.labels.showTopLeft(!1).showBotLeft(!1).showTopRight(!1), K(), $(), V(), u.masterFilter.reset(!1), history.replaceState({
                    year: t.year
                }, "U.S. Gun Deaths in " + t.year, "?year=" + t.year), cr(n, u.played[t.year]), u.played[t.year] = !0
            }
        }
    }

    function Pa(e) {
        var t = F()(this).attr("data");
        u.masterFilter.reset(!1), u.masterFilter.filter(t), u.inDistView ? z(!0) : Va("axismimic")
    }

    function Wa() {
        F()("#click2010").click((function() {
            Aa(2010)
        })), F()("#click2013").click((function() {
            Aa(2013)
        })), F()("#click2018").click((function() {
            Aa(2018)
        }))
    }
    var Fa = function() {
            return (Fa = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        },
        Na = Fa(Fa({}, A), {
            oadult: "Adults 30 and over",
            child_lt18: "Children under 18"
        });
    var za = A;
    var Ra = A;
    var Ia = [{
            year: 2015,
            file: "data/curves-2015.json",
            uiFactory: function(e) {
                var t = new la,
                    n = Ca([{
                        title: "SEX",
                        category: "victim",
                        group: "sex",
                        filters: ["male", "female"]
                    }, {
                        title: "RACE",
                        category: "victim",
                        group: "race",
                        filters: ["black", "white", "amindian", "asian", "hispanic"]
                    }, {
                        title: "AGE GROUP",
                        category: "victim",
                        group: "age",
                        filters: ["child_lt18", "yadult", "oadult"]
                    }, {
                        title: "REGION",
                        category: "incident",
                        group: "region",
                        filters: ["midwest", "northwest", "northeast", "southwest", "southeast"]
                    }, {
                        title: "GUN TYPE",
                        category: "incident",
                        group: "weapon",
                        filters: ["handgun", "rifle", "shotgun", "other"]
                    }, {
                        title: "VICTIM COUNT",
                        category: "incident",
                        group: "killings",
                        filters: ["single", "multiple"]
                    }, {
                        title: "ASSAILANT",
                        category: "incident",
                        group: "relationship",
                        filters: ["family", "sigother", "acquaintance", "stranger"]
                    }], Na);
                n.renderGroups(), F()("#findings").replaceWith("<div id= 'findings'>\n\t\t<div class='headline'>A Look at Voluntarily Reported Gun Homicide* Data from U.S. Law Enforcement\n\t\t<div class='subheadline'>This data does not include 24,432 deaths by suicide nor <br/>coroner reports that <a href=\"http://efsgv.org/wp-content/uploads/2020/02/Gun-Violence-in-America_An-Analysis-of-2018-CDC-Data_February-2020.pdf\" target=\"_blank\">total 2018 gun deaths</a> to 13,958.</div>\n\t\t</div>\n\t\t<div class='findingsRuleBox'>\n\t\t\t<hr class='findingsRule' id='oldFindingsRule'>\n\t\t\t<span class='ruleText'>What This Data Reveals</span>\n\t\t</div>\n\t\t<div class='fLeft'>\n\t\t\t<div class='find'>\n\t\t\t\t<h1>youth are largely at risk</h1>\n\t\t\t\t<div data='child_lt18,yadult' class='imgContainer viewSetter' >\n\t\t\t\t\t<img src='./img/2018under30Thumbnail.png' />\n\t\t\t\t\t<span class='viewOverlay'>49%</span>\n\t\t\t\t\t<span class='underViewOverlay'>were under 30</span>\n\t\t\t\t</div>\n\t\t\t\t<p>In 2018, 5,609 victims killed by guns were under 30. 6% (724) were under 18 â€” only children. To reduce youth homicides, we must assess <a href=\"https://urbanhealth.jhu.edu/_PDFs/media/best_practices/violence_prevention.pdf\" target=\"_blank\">youth violence risk factors</a> at several levels: individual, family, social and environmental, and mobilize community engagement. </p>\n\t\t\t</div>\n\t\t\t<div class='find'>\n\t\t\t\t<h1>Black Americans are killed disproportionately</h1>\n\t\t\t\t<div data='black' class='imgContainer viewSetter' >\n\t\t\t\t\t<img src='./img/2018blackThumbnail.png' />\n\t\t\t\t\t<span class='viewOverlay'>58%</span>\n\t\t\t\t\t<span class='underViewOverlay'>were black</span>\n\t\t\t\t</div>\n\t\t\t\t<p>Black people made up 13% of the U.S. population in 2018, but more than half of the reported gun homicide victims were black. Contrastly, white people made up 60% of the US population, and 23% of gun death victims. The toll of gun violence falls unequitably on the black citizens of America.</p>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t<div class='fRight'>\n\t\t\t<div class='find'>\n\t\t\t\t<h1>Handguns continue to be the most deadly</h1>\n\t\t\t\t<div data='handgun' class='imgContainer viewSetter' >\n\t\t\t\t\t<img src='./img/2018handgunsThumbnail.png' />\n\t\t\t\t\t<span class='viewOverlay'>65%</span>\n\t\t\t\t\t<span class='underViewOverlay'>used handguns</span>\n\t\t\t\t</div>\n\t\t\t\t<p>65% of gun murders involved a handgun. While banning assault rifles and high-capacity magazines are necessary steps in saving lives, they just arenâ€™t enough. Real change requires more sweeping gun control policies such as <a href=\"https://www.pnas.org/content/114/46/12162#:~:text=Waiting%20period%20laws%20that%20delay,gun%20homicides%20by%20roughly%2017%25.&text=Expanding%20the%20waiting%20period%20policy,who%20can%20own%20a%20gun.\" target=\"_blank\">implementing handgun waiting periods</a> and <a href=\"https://www.sciencemag.org/news/2020/06/three-types-laws-could-reduce-gun-deaths-more-10\" target=\"_blank\">ending right-to-carry and stand your ground laws</a>.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class='find'>\n\t\t\t\t<h1>Men and boys are the majority of victims</h1>\n\t\t\t\t<div data='male' class='imgContainer viewSetter' >\n\t\t\t\t\t<img src='./img/2018maleThumbnail.png' />\n\t\t\t\t\t<span class='viewOverlay'>83%</span>\n\t\t\t\t\t<span class='underViewOverlay'>were male</span>\n\t\t\t\t</div>\n\t\t\t\t<p>9,479 American men were killed with a gun in 2018. Most were killed relatively young, in their twenties (37%) and thirties (25%). Of the 16% U.S. gun deaths that were women, 40% were killed by a romantic partner and were possible domestic violence cases.\n\t\t\t\t</p>\n\t\t\t</div>\n\n\n\t\t\t\n\t\t</div>\n\t\t<div class='fTop'>\n\t\t\t<p>The data used in <span id='click2018'>2018</span> was different than that used for the <span id='click2013'>2013</span> and <span id='click2010'>2010</span> visualizations. Download data and read more about it in <span class='methodsClick' onclick='uiTooltips.makeMethods()'>Sources and Methods</span>.</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>"), F()(".viewSetter").click(F()(this), Pa), F()("#container").removeClass("v2010 v2013").addClass("v2018"), F()("#sinceNumBox").children().remove(), F()(".header > h1").html("US SUICIDE DEATHS IN"), Wa();
                var a = ua(e);
                return {
                    labels: t,
                    filters: {
                        nofilter: function(e) {
                            return !0
                        },
                        handgun: function(e) {
                            return "handgun" == e.weapon
                        },
                        shotgun: function(e) {
                            return "shotgun" == e.weapon
                        },
                        rifle: function(e) {
                            return "rifle" == e.weapon
                        },
                        other: function(e) {
                            return "unknown gun" == e.weapon || "firearm" == e.weapon
                        },
                        child_lt18: function(e) {
                            return e.age >= 0 && e.age < 18
                        },
                        yadult: function(e) {
                            return e.age >= 18 && e.age < 30
                        },
                        oadult: function(e) {
                            return e.age >= 30
                        },
                        male: function(e) {
                            return "M" == e.vsex
                        },
                        female: function(e) {
                            return "F" == e.vsex
                        },
                        black: function(e) {
                            return "B" == e.vrace
                        },
                        white: function(e) {
                            return "W" == e.vrace
                        },
                        amindian: function(e) {
                            return "I" == e.vrace
                        },
                        asian: function(e) {
                            return "A" == e.vrace
                        },
                        hispanic: function(e) {
                            return "H" == e.vrace
                        },
                        midwest: function(e) {
                            return "MW" == e.region
                        },
                        northwest: function(e) {
                            return "NW" == e.region
                        },
                        northeast: function(e) {
                            return "NE" == e.region
                        },
                        southwest: function(e) {
                            return "SW" == e.region
                        },
                        southeast: function(e) {
                            return "SE" == e.region
                        },
                        single: function(e) {
                            return 0 == e.multiple
                        },
                        multiple: function(e) {
                            return 1 == e.multiple
                        },
                        spring: function(e) {
                            return 3 <= e.month && e.month <= 5
                        },
                        summer: function(e) {
                            return 6 <= e.month && e.month <= 8
                        },
                        fall: function(e) {
                            return 9 <= e.month && e.month <= 11
                        },
                        winter: function(e) {
                            return 12 == e.month || e.month <= 2
                        },
                        family: function(e) {
                            return "brother" == e.offrel || "daughter" == e.offrel || "family member" == e.offrel || "father" == e.offrel || "mother" == e.offrel || "sister" == e.offrel || "son" == e.offrel || "stepdaughter" == e.offrel || "stepfather" == e.offrel || "stepmother" == e.offrel || "stepson" == e.offrel
                        },
                        sigother: function(e) {
                            return "boyfriend" == e.offrel || "ex-husband" == e.offrel || "ex-wife" == e.offrel || "girlfriend" == e.offrel || "homosexual significant other" == e.offrel || "husband" == e.offrel || "in-law" == e.offrel || "wife" == e.offrel
                        },
                        acquaintance: function(e) {
                            return "acquaintance" == e.offrel || "employee" == e.offrel || "employer" == e.offrel || "friend" == e.offrel || "neighbor" == e.offrel || "non-stranger" == e.offrel
                        },
                        stranger: function(e) {
                            return "stranger" == e.offrel
                        }
                    },
                    filterUI: n,
                    syncDictionaries: function(e) {
                        g(a, e)
                    },
                    dict: a,
                    openLink: function(e, t) {
                        return !1
                    },
                    type: "2018"
                }
            },
            getInfo: Ba,
            uiTitles: Na
        }],
        Ua = da(Ia, (function(e) {
            return e.year
        })),
        Ja = Ia[0];

    function Ba(e, t, n) {
        var a = qa(e, t, n);
        if (null === a) return null;
        for (var r = a.curve.incId, i = [], s = 0; s < n.length; s++) n[s].curve.incId === r && (i.push(n[s].life), i.push(n[s].afterlife));
        var o = "<span class='tEm'>",
            d = "</span>",
            u = a.curve,
            l = S[u.vrace];
        if (u.age > 18) var c = b[u.vsex];
        else if (u.age > 1) switch (u.vsex) {
                case "M":
                    c = "boy";
                    break;
                case "F":
                    c = "girl";
                    break;
                default:
                    c = "child"
            } else if (u.age >= 0) c = "baby";
            else if (-1 == u.age) switch (u.vsex) {
            case "M":
                c = "male";
                break;
            case "F":
                c = "female";
                break;
            default:
                c = "person"
        }
        var _ = i.length / 2 - 1;
        if (_ <= 0) var m = "";
        else if (1 == _) m = "<hr class='hoverRule'>" + o + "1" + d + " other person was killed in this incident.";
        else m = "<hr class='hoverRule'>" + o + _.toString() + d + " other people were killed in this incident.";
        var h = " in " + o + x[u.month] + d;
        if ("UK" === u.state) var f = "";
        else f = " in " + o + H[u.state] + d;
        var p, y = Math.floor(u.age);
        p = -1 == y ? o + "age unknown" + d : "aged " + o + y.toString() + d;
        var M, g, L = D[u.vsex],
            v = O[u.osex][u.offrel],
            Y = T[u.vsex],
            k = C[u.circ];
        for (s = 0; s < E.length; s++)
            if (E[s].indexOf(k) > -1) {
                M = s;
                break
            }
        0 == M ? g = " during a " + o + k + d : 1 == M ? g = " during an " + o + k + d : 2 == M ? g = " while " + o + k + d : 3 == M && (g = "");
        var w, A = u.altcause.replace(/_/g, " ");
        A = A.search(/tumor/) >= 0 ? "a " + o + A + d : o + A + d;
        for (s = 0; s < j.length; s++)
            if (j[s].indexOf(u.offrel) > -1) {
                w = s;
                break
            }
        if (w <= 0) var P = L + " " + v;
        else if (1 == w) P = "a " + v;
        else if (w >= 2) P = "an " + v + " person";
        else if (void 0 === w) P = "an unknown person";
        var W = ["<span class='tIt'>", "Had ", Y, " not been killed with a", o, "u" === u.weapon.substr(0) ? "n " + u.weapon : " " + u.weapon, d, ", ", Y, " might have lived to be ", o, Math.floor(u.altage), d, " and died of ", A, ".", "</span>"],
            F = [
                ["This ", o, l, " ", c, d, ", ", p, ", was shot", h, f, " by ", o, P, d, g, ".", m].join(""), W.join("")
            ];
        return {
            bezier: {
                b1: a.life,
                b2: a.afterlife
            },
            words: F,
            curve: a.curve,
            others: i
        }
    }

    function qa(e, t, n) {
        for (var a, r = null, i = n.length, s = Math.floor(Math.random() * i), o = 0; o < i; o++) {
            a = (o + s) % i;
            var d = m.yFromX(e, n[a].life[0], n[a].life[1], n[a].life[2], n[a].life[3], 10);
            if (!isNaN(d) && Math.abs(d - t) <= 3) {
                r = n[a];
                break
            }
            var u = m.yFromX(e, n[a].afterlife[0], n[a].afterlife[1], n[a].afterlife[2], n[a].afterlife[3], 10);
            if (!isNaN(u) && Math.abs(u - t) <= 3) {
                r = n[a];
                break
            }
        }
        return r
    }

    function Va(e) {
        var t = u.overstage,
            n = u.axis,
            a = u.filterTop,
            r = u.filterBot,
            i = u.histograms,
            s = u.distHistGroup,
            o = u.masterFilter;
        if (Ka(e)) u.inDistView ? (z(), t.alpha = 1, "axismimic" != e && (n.alpha = 1, F()("#distSwitch").toggleClass("focus")), k(!1)) : ("axismimic" != e && F()("#distSwitch").toggleClass("focus"), V(), G(), 0 != a.getNumChildren() && 0 != r.getNumChildren() || o.immediateSort(), i.removeAllChildren(), t.alpha = .15, n.alpha = 0, z(!1, e));
        else if (u.inDistView) {
            var d = !1;
            for (var l in s) s.hasOwnProperty(l) && s[l].display.hitTest(e.rawX, e.rawY) && (d = !0);
            d || (z(), t.alpha = 1, F()("#distSwitch").toggleClass("focus"))
        } else rr.masterView.openLink(e.rawX, e.rawY)
    }

    function Ga(e) {
        if (!u.playingAnimation) {
            var t = u.tooltip,
                n = u.distHistGroup,
                a = u.distAxis,
                r = u.histograms,
                i = u.axis,
                s = u.dotsContainer;
            if (clearTimeout(u.delayWatcher), "axismimic" == e ? $a(e) : u.delayWatcher = setTimeout($a, 250, e), t.removeAllChildren(), ee(), u.inDistView) {
                var o = !1;
                for (var d in n) n.hasOwnProperty(d) && n[d].display.hitTest(e.rawX, e.rawY) && (o = !0);
                if (o)
                    for (var d in n) n.hasOwnProperty(d) && n[d].moveRect(e);
                else {
                    var l = {
                        rawX: -200
                    };
                    for (var d in n) n.hasOwnProperty(d) && n[d].moveRect(l)
                }
                for (var d in n) n.hasOwnProperty(d) && n[d].tooltip.hide();
                Ka(e) && "axismimic" != e ? a.alpha = 1 : a.alpha = 0
            } else Ka(e) || (r.removeAllChildren(), i.alpha = 0, s.visible = !0)
        }
    }

    function $a(e) {
        var t = u.distHistGroup,
            n = u.distributionPath,
            a = u.cfig,
            r = u.tooltip,
            i = u.histograms,
            s = u.dotsContainer,
            o = u.axis;
        if (u.inDistView) {
            if ("axismimic" != e && "notaxismimic" !== e) {
                var d = !1;
                for (var l in t) t.hasOwnProperty(l) && t[l].display.hitTest(e.rawX, e.rawY) && (d = !0);
                if (d) U(e, n, a);
                else
                    for (var l in t) t.hasOwnProperty(l) && t[l].tooltip.hide()
            }
        } else {
            if (Ka(e)) return "axismimic" != e && (o.alpha = 1), r.removeAllChildren(), void(0 === i.getNumChildren() && (k(!1), s.visible = !1));
            "axismimic" != e && "notaxismimic" != e && (u.activePersonTooltip = function(e) {
                var t = u.cfig,
                    n = u.tooltip,
                    a = u.masterFilter;
                n.removeAllChildren(), ee();
                var r = Ua[u.curYear].getInfo(e.rawX, e.rawY, rr.masterView.dict);
                if (null != r) {
                    var i = [];
                    i[0] = N(), i[0].horizontal(!1).mirror(!(e.rawY < 125) && (!(e.rawY > t.canvasHeight / 2) || e.rawY > t.canvasHeight - 125)).copy(r.words[0]).copyClass("bigTooltip").setTipPosition(e.rawX / t.canvasWidth).shrinkWidth(300).x(e.rawX).y(e.rawY < 125 ? e.rawY + 15 : e.rawY > t.canvasHeight / 2 ? e.rawY > t.canvasHeight - 125 ? e.rawY : e.rawY + 15 : e.rawY), i[0].el().appendTo("#c").hide().fadeIn(200), i[0].render().position(), i[1] = N(), i[1].horizontal(!1).mirror(e.rawY > t.canvasHeight / 2).copy(r.words[1]).copyClass("bigTooltip").setTipPosition(p(r.curve.altage) / t.canvasWidth).shrinkWidth(300).x(p(r.curve.altage)).y(t.canvasHeight / 2), i[1].el().appendTo("#c").hide().delay(400).fadeIn(200), i[1].render().position(), i[2] = r;
                    ir(a.curFilters, rr.masterView);
                    var s = r.bezier.b1,
                        o = r.bezier.b2,
                        d = new createjs.Shape;
                    d.graphics.setStrokeStyle(t.life_strokeStyle).beginStroke("rgba(255, 255, 110, .5)").moveTo(s[0].x, s[0].y).bezierCurveTo(s[1].x, s[1].y, s[2].x, s[2].y, s[3].x, s[3].y), n.addChild(d);
                    var l = new createjs.Shape;
                    l.graphics.setStrokeStyle(t.afterlife_strokeStyle).beginStroke("rgba(220, 220, 220, .8)").moveTo(o[0].x, o[0].y).bezierCurveTo(o[1].x, o[1].y, o[2].x, o[2].y, o[3].x, o[3].y), n.addChild(l);
                    for (var c = 0; c < r.others.length; c++) c % 2 == 0 ? d.graphics.moveTo(r.others[c][0].x, r.others[c][0].y).bezierCurveTo(r.others[c][1].x, r.others[c][1].y, r.others[c][2].x, r.others[c][2].y, r.others[c][3].x, r.others[c][3].y) : l.graphics.moveTo(r.others[c][0].x, r.others[c][0].y).bezierCurveTo(r.others[c][1].x, r.others[c][1].y, r.others[c][2].x, r.others[c][2].y, r.others[c][3].x, r.others[c][3].y);
                    return i
                }
            }(e))
        }
    }

    function Ka(e) {
        var t = u.cfig;
        return "axismimic" === e || "notaxismimic" !== e && (e.rawY > t.canvasHeight / 2 - 5 && e.rawY < t.canvasHeight / 2 + 5 && e.rawX > t.arcOffsetH / 2 && e.rawX < t.canvasWidth - t.arcOffsetH / 2)
    }

    function Xa(e) {
        var t = u.cfig,
            n = document.createElement("canvas");
        n.width = t.canvasWidth, n.height = t.canvasHeight;
        for (var a = n.getContext("2d"), r = e.length, i = 0; i < r; i++) {
            var s = [e[i].b1, e[i].b2];
            a.lineWidth = t.life_strokeStyle, a.strokeStyle = t.life_strokeColor[Math.floor(Math.random() * (t.life_strokeColor.length - 1))], a.beginPath(), a.moveTo(s[0][0].x, s[0][0].y), a.bezierCurveTo(s[0][1].x, s[0][1].y, s[0][2].x, s[0][2].y, s[0][3].x, s[0][3].y), a.stroke(), a.lineWidth = t.afterlife_strokeStyle, a.strokeStyle = t.afterlife_strokeColor[Math.floor(Math.random() * (t.afterlife_strokeColor.length - 1))], a.beginPath(), a.moveTo(s[1][0].x, s[1][0].y), a.bezierCurveTo(s[1][1].x, s[1][1].y, s[1][2].x, s[1][2].y, s[1][3].x, s[1][3].y), a.stroke()
        }
        return n
    }
    var Za = J.TweenMax,
        Qa = J.Quad,
        er = J.Quint;

    function tr(e) {
        if (u.animCurves) {
            var t = u.filterTop,
                n = u.filterBot,
                a = u.stage,
                r = u.cfig,
                i = u.dotsContainer;
            V(), G(), a.clear(), K();
            var s = or(u.animCurves, e);
            u.monthLabel = 0, $(), u.distributionPath = Y(s);
            var o = ir(e, rr.masterView);
            rr.masterView.syncDictionaries(o), rr.masterView.labels.setContent("left", "top").setContent("left", "bot").setContent("right", "top").pushContent().showTopLeft(!0).showBotLeft(!0).showTopRight(!1), sr(e, "nofilter") && rr.masterView.labels.showTopLeft(!1).showBotLeft(!1).showTopRight(!1);
            var d = function(e) {
                for (var t = [
                        [],
                        []
                    ], n = 0; n < 2; n++)
                    for (var a = e[n].length, r = 0; r < a; r++) {
                        var i = f(e[n][r]),
                            s = {
                                b1: i[0],
                                b2: i[1]
                            };
                        t[n][r] = s
                    }
                return t
            }(s);
            ! function(e) {
                for (var t = 0, n = e.length; t < n; ++t) M(e[t].b1), M(e[t].b2)
            }(d[1]);
            var l = new createjs.Bitmap(Xa(d[0])),
                c = new createjs.Bitmap(Xa(d[1]));
            if (0 == t.getNumChildren() || 0 == n.getNumChildren()) return u.inDistView ? (t.addChild(l), n.addChild(c), void(u.dotsContainer.visible = !0)) : (t.y = n.y = r.canvasHeight / 2, t.scaleY = n.scaleY = 0, void _(l, c));
            u.inDistView && z(!0), Za.killTweensOf(t), Za.killTweensOf(n), Za.to(t, 10, {
                y: r.canvasHeight / 2,
                scaleY: 0,
                ease: Qa.easeIn,
                useFrames: !0,
                onComplete: _,
                onCompleteParams: [l, c]
            }), Za.to(n, 10, {
                y: r.canvasHeight / 2,
                scaleY: 0,
                ease: Qa.easeIn,
                useFrames: !0
            })
        } else console.log("animCurves not defined");

        function _(e, a) {
            t.removeAllChildren(), t.addChild(e), n.removeAllChildren(), n.addChild(a), i.visible = !0, Za.to(t, 30, {
                delay: 1,
                y: 0,
                scaleY: 1,
                ease: er.easeOut,
                useFrames: !0
            }), Za.to(n, 30, {
                delay: 1,
                y: 0,
                scaleY: 1,
                ease: er.easeOut,
                useFrames: !0
            })
        }
    }
    var nr, ar, rr = (nr = u.overstage, ar = u.histograms, {
        init: mr,
        sortArrays: tr,
        drawDist: k,
        distributionPath: u.distributionPath,
        overstage: nr,
        stop: V,
        testMouseDown: Va,
        testMouseMove: $a,
        delayMove: Ga,
        histograms: ar,
        bezierUtil: m,
        distView: z,
        masterView: null
    });

    function ir(e, t) {
        "object" != typeof e && (e = [e]);
        return function(n) {
            var a, r = !0;
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    a = !1;
                    for (var s = 0, o = e[i].length; s < o; s++)(0, t.filters[e[i][s]])(n) && (a = !0);
                    a || (r = !1)
                }
            return r
        }
    }

    function sr(e, t) {
        if ("nofilter" == t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n][0] != t) return !1;
            return !0
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var n in e)
            if (e.hasOwnProperty(n))
                for (var a = 0; a < e[n].length; a++)
                    if (e[n][a] != t[n][a]) return !1;
        return e === t
    }

    function or(e, t) {
        for (var n, a = ir(t, rr.masterView), r = [
                [],
                [], t
            ], i = 0, s = e.length; i < s; i++) n = -1 == e[i].age ? 0 : e[i].age, a(e[i]) ? (r[0].push(e[i]), u.pctTop++, u.stolenTop += Math.floor(e[i].altage) - Math.floor(n)) : (r[1].push(e[i]), u.pctBot++), u.peopleCount++, u.yearsCount += Math.floor(e[i].altage) - Math.floor(n);
        return r
    }
    var dr = J.TweenMax,
        ur = J.Linear,
        lr = J.TimelineMax;

    function cr(e, t) {
        var n = u.cfig,
            a = u.dotsContainer,
            r = u.masterFilter;
        clearTimeout(u.animDelay);
        try {
            dr.killAll()
        } catch (e) {
            console.log("TODO: fix issue with tweenmax.killall")
        }
        u.filterTop.removeAllChildren(), u.filterBot.removeAllChildren(), F()(".tooltip").remove(), document.getElementById("monthLabel").innerHTML = "", u.stage.removeAllChildren(), u.stage.clear();
        var i = new createjs.Shape;
        i.graphics.beginFill("rgba(20,20,20,1)").drawRect(0, 0, n.canvasWidth, n.canvasHeight), u.stage.addChild(i), u.heartbeats.removeAllChildren(), u.activecurves = [], e = u.curvesByYear[u.curYear];
        for (var s = u.animCurves = e, o = 0, d = s.length; o < d; o++) s[o].x = n.arcOffsetH / 2, s[o].y = (n.arcSpaceHeight + n.arcOffsetV) / 2, s[o].mrx = n.arcOffsetH / 2, s[o].mry = (n.arcSpaceHeight + n.arcOffsetV) / 2;
        var l = or(e, r.curFilters);
        K(), $(), u.distributionPath = Y(l);
        var c = ir(r.curFilters, rr.masterView);
        if (rr.masterView.syncDictionaries(c), a.visible = !1, a.removeAllChildren(), a.addChild(new createjs.Bitmap(function(e) {
                var t = u.cfig,
                    n = document.createElement("canvas");
                n.width = t.canvasWidth, n.height = t.canvasHeight;
                for (var a = n.getContext("2d"), r = e.length, i = 0; i < r; i++) a.fillStyle = e[i].lifecolor, a.beginPath(), a.arc(p(e[i].age), t.canvasHeight / 2, 2.5, 0, 2 * Math.PI), a.fill(), a.fillStyle = e[i].afterlifecolor, a.beginPath(), a.arc(p(e[i].altage), t.canvasHeight / 2, 2.5, 0, 2 * Math.PI), a.fill();
                return n
            }(e))), t) r.immediateSort();
        else {
            createjs.Ticker.addEventListener("tick", q), F()("#container, #blurb").addClass("intro"), F()("#findings, #sinceNumBox, #questionMark").hide(), u.playingAnimation = !0;
            var _, m = 0,
                h = (d = e.length, c = ir(r.curFilters, rr.masterView), []);
            for (o = 0; o < d; o++) {
                _ = f(e[o]), m += 0 == o ? 0 : 1 == o ? g(0) : o < 5 ? 90 : 5 === o ? g(4) + 60 : L(o, d);
                var y = _[2][0];
                h.push(new dr(e[o], y * g(o), {
                    bezier: {
                        type: "cubic",
                        values: c(e[o]) ? _[0] : M(_[0])
                    },
                    ease: ur.ease,
                    delay: m,
                    onStart: X,
                    onStartParams: [o, e[o]],
                    onComplete: Z,
                    onCompleteParams: [o, e[o]]
                })), h.push(new dr(e[o], (1 - y) * g(o), {
                    bezier: {
                        type: "cubic",
                        values: c(e[o]) ? _[1] : M(_[1])
                    },
                    ease: ur.ease,
                    delay: m + y * g(o),
                    onComplete: Q,
                    onCompleteParams: [o, e[o]]
                }))
            }
            new lr({
                tweens: h,
                align: "normal",
                delay: 0,
                useFrames: !0,
                autoRemoveChildren: !0
            })
        }

        function g(e) {
            return 0 == e ? 400 : e < 5 ? 600 / Math.log(e + 10) : 300 / Math.log(e + 10)
        }

        function L(e, t) {
            return 2500 / t * 4 / Math.log(e + 10)
        }
    }

    function _r() {
        var e;
        e = new URLSearchParams(window.location.search).get("year"), hr(parseInt(e, 10));
        var t = Ua[u.curYear];
        u.played[t.year] = !0;
        var n = u.animCurves = u.curvesByYear[t.year];
        rr.masterView = t.uiFactory(n);
        var a = or(u.animCurves, u.masterFilter.curFilters);
        K(), $(), u.distributionPath = Y(a), mr(), setTimeout((function() {
            F()(".header").fadeIn(1500)
        }), 500), setTimeout((function() {
            F()("#c").fadeIn(500)
        }), 1e3), setTimeout((function() {
            F()(".axis, .axisLabel").fadeIn(1500)
        }), 2e3), setTimeout((function() {
            F()("#peoplebox, #yearsbox, #distSwitch, #menuBox, #blurb").fadeIn(1500)
        }), 3500), u.animDelay = setTimeout(cr, 5100)
    }

    function mr() {
        var e = u.cfig,
            t = u.overstage,
            n = u.distStage,
            a = u.stage,
            r = u.filterTop,
            i = u.filterBot,
            s = u.dotsContainer,
            o = u.axis,
            d = u.heartbeats,
            l = u.histograms,
            c = u.tooltip;
        createjs.Ticker.useRAF = !0, createjs.Ticker.setFPS(30), createjs.Ticker.addEventListener("tick", n), createjs.Ticker.addEventListener("tick", t), a.autoClear = !1, t.enableMouseOver(5), t.addEventListener("mousedown", $a), t.addEventListener("stagemousemove", Ga), u.axis = _(), t.addChild(r), t.addChild(i), t.addChild(s), t.addChild(o), t.addChild(d), t.addChild(l), t.addChild(c);
        var m = new createjs.Shape;
        m.graphics.beginFill("rgba(20,20,20,1)").drawRect(0, 0, e.canvasWidth, e.canvasHeight), a.addChild(m)
    }

    function hr(e) {
        var t, n = null !== (t = Ua[e]) && void 0 !== t ? t : Ja;
        return u.curYear !== n.year && (u.curYear = n.year, history.replaceState({
            year: n.year
        }, "U.S. Gun Killings in " + n.year, "?year=" + n.year), !0)
    }
    var fr = n(145);
    var pr = N;
    pr.DEFAULT_STROKE_COLOR = "rgba(0,0,0,0.2)", pr.DEFAULT_RADIUS = 5, pr.DEFAULT_BACKGROUND_COLOR = "rgba(62,62,62,0.85)", pr.DEFAULT_TIP_WIDTH = 4, pr.DEFAULT_COPY_CLASS = "tooltipCopy";
    var yr;
    u.masterFilter = function() {
        var e, t, n = {
                weapon: ["handgun", "shotgun", "rifle", "other"],
                race: ["black", "white", "amindian", "asian", "hispanic"],
                sex: ["male", "female"],
                age: ["child_lt18", "child", "yadult", "oadult"],
                region: ["midwest", "northwest", "northeast", "southwest", "southeast"],
                killings: ["single", "multiple"],
                time: ["yesterday", "week", "month"],
                season: ["spring", "summer", "fall", "winter"],
                relationship: ["family", "sigother", "acquaintance", "stranger"]
            },
            a = {
                age: ["child", "yadult"],
                time: ["yesterday", "week", "month"]
            };

        function r(t) {
            if (t.indexOf(",") >= 0) return t.split(",").forEach(r), this;
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    if (i == t) {
                        e[i] = ["nofilter"];
                        for (var o = 0; o < n[i].length; o++) F()("#" + n[i][o] + "Button").removeClass("checked");
                        return s(), this
                    }
                    for (var d = 0; d < n[i].length; d++)
                        if (n[i][d] == t) {
                            for (var u = 0; u < e[i].length; u++)
                                if ("nofilter" == e[i][u] && e[i].splice(u, 1), e[i][u] == t) return e[i].splice(u, 1), F()("#" + t + "Button").removeClass("checked"), 0 == e[i].length && e[i].push("nofilter"), s(), this;
                            for (var l in e[i].push(t), F()("#" + t + "Button").addClass("checked"), a)
                                if (l == i)
                                    for (var c = 0; c < a[l].length; c++)
                                        if (a[l][c] == t)
                                            for (var _ = 0; _ < a[l].length; _++)
                                                for (var m = 0; m < e[i].length; m++) e[i][m] == a[l][_] && a[l][_] != t && (e[i].splice(m, 1), F()("#" + a[l][_] + "Button").removeClass("checked"));
                            return s(), this
                        }
                }
        }

        function i(t) {
            for (var a in d.curFilters = e = {}, n)
                if (n.hasOwnProperty(a)) {
                    e[a] = ["nofilter"];
                    for (var r = 0; r < n[a].length; r++) F()("#" + n[a][r] + "Button").removeClass("checked")
                }
            return t && s(), this
        }

        function s() {
            clearTimeout(t), sr(e, "nofilter") ? F()(".headlineNoFilter").addClass("invisible") : F()(".headlineNoFilter").removeClass("invisible"), t = setTimeout((function() {
                tr(e)
            }), 250)
        }

        function o(e) {
            if (void 0 === e) return !1;
            var t = document.createElement("div");
            t.className = "filterLabel";
            var n = document.createElement("span");
            n.className = "filterLabelClose";
            var a = document.createElement("span");
            return a.className = "filterLabelText", a.innerHTML = e, t.appendChild(n), t.appendChild(a), t
        }
        var d = {
            filter: r,
            fDict: n,
            reset: i,
            delayedSort: s,
            immediateSort: function() {
                tr(e)
            },
            makeList: function(t) {
                var n, a, i = 0,
                    s = document.createElement("div"),
                    d = document.createElement("span");
                d.id = "pctTop", d.className = "leftWhiteLabel percent", s.appendChild(d);
                var u = document.createElement("div");
                u.className = "filterShell";
                var l = document.createElement("div");
                for (var c in l.className = "filterList", e)
                    if (e.hasOwnProperty(c))
                        for (var _ = 0; _ < e[c].length; _++)
                            if ("nofilter" != e[c][_]) {
                                if (!(n = o(t[e[c][_]]))) continue;
                                a = function(e) {
                                    return function() {
                                        r(e)
                                    }
                                }(e[c][_]), n.addEventListener("click", a), l.appendChild(n), i++
                            }
                if (l.className += i > 7 ? " longList" : " shortList", u.appendChild(l), i > 7) {
                    var m, h = document.createElement("img");
                    h.className = "top scrollArrow", h.src = "img/scrollTop.png", h.addEventListener("mouseover", (function() {
                        m = setInterval(y, 50)
                    })), h.addEventListener("mouseout", (function() {
                        clearInterval(m)
                    })), s.appendChild(h), s.appendChild(u);
                    var f = document.createElement("img");
                    f.className = "bot scrollArrow", f.src = "img/scrollBottom.png", f.addEventListener("mouseover", (function() {
                        m = setInterval(p, 50)
                    })), f.addEventListener("mouseout", (function() {
                        clearInterval(m)
                    })), s.appendChild(f)
                } else s.appendChild(u);

                function p() {
                    var e = parseInt(F()(".filterList").css("top").slice(0, -2)),
                        t = F()(".filterLabel").height() + 3,
                        n = -(F()(".filterLabel").length - 8) * t;
                    e > n ? F()(".filterList").css({
                        top: "-=3px"
                    }) : F()(".filterList").css({
                        top: n.toString() + "px"
                    })
                }

                function y() {
                    var e = parseInt(F()(".filterList").css("top").slice(0, -2));
                    F()(".filterLabel").height();
                    e < 0 ? F()(".filterList").css({
                        top: "+=3px"
                    }) : F()(".filterList").css({
                        top: "0px"
                    })
                }
                return s
            },
            weakArrayCompare: function(e, t) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                for (var n = !0, a = 0, r = e.length; a < r; a++) {
                    for (var i = !1, s = 0, o = t.length; s < o; s++) e[a] == t[s] && (i = !0);
                    i || (n = !1)
                }
                return r == o && n
            },
            curFilters: e
        };
        return i(!1), d
    }(), F()("canvas").mouseleave((function() {
        clearTimeout(u.delayWatcher)
    })), window.uiTooltips = function() {
        var e = N();

        function t(e) {
            e.stopPropagation()
        }

        function n(t) {
            clearTimeout(u.delayWatcher);
            var n = F()("#yearsbox").width(),
                a = F()("#yearsbox").height();
            F()("#peoplecount").html(), e.copy("We determine the potential lifespans of victims using U.S. mortality data from the World Health Organization. Age and cause of death predictions are based on the likelihood of death at different ages."), e.horizontal(!1).mirror(!1).copyClass("bigTooltip").x(n - 10).y(a + 5), e.el().appendTo("#yearsbox"), e.setTipPosition(1).shrinkWidth(250), e.render().position(), e.el().show(), t.stopPropagation()
        }

        function a() {
            e.el().hide()
        }
        F()("#yearlabel").hover(n, a).mousemove(t), F()("#questionMark").hover(n, a).mousemove(t);
        var r = N();

        function i() {
            r.el().hide(), F()("#shadow").remove()
        }
        return r.horizontal(!1).mirror(!1).copyClass("methodsTooltip"), {
            makeYearsLabel: n,
            removeYearsLabel: a,
            makeMethods: function() {
                var e = F()("#container").width(),
                    t = F()("#container").height();
                r.copy("\n\t\t\t<div class='close'></div>\n\t\t\t\t<h1>Sources and Methods</h1>\n\t\t\t\t\t<p>Download <a href=\"downloads/US_gun_deaths_1985-2018.zip\" target=\"_blank\">1985â€“2018 U.S. gun death data</a></p>\n\t\t\t\t\t<h2>2018</h2>\n\t\t\t\t\t<p>Gun homicide data for 2018 are taken from the Federal Bureau of Investigationâ€™s Supplementary Homicide Report (SHR) Master Files, downloaded on June 24, 2020. This extensive dataset is recorded at the incident level, containing details about the victim, killer, weapon used, circumstance, and location of the crime. The original data covers many types of homicides but here we focus only on those involving firearms.</p><p>These data are voluntarily reported by police precincts across the country as a part of the FBIâ€™s Uniform Crime Reporting Program and represent about 90% of all eligible law enforcement agencies in the country in 2018.</p><p>The data provided on ethnicity and race of the victim follow the same categories as used by the U.S. Census. For our analysis we chose to calculate a modified race variable that combined race and Hispanic origin in order to create a separate distinction to better explore Latinx-specific narratives. This group was undefined in past versions of this visualization. Following this method, anyone of Hispanic origin is identified as Hispanic, regardless of their broader race category, meaning Black Hispanics are presented as Hispanic only.</p>\n\t\t\t\t\t<p>To estimate the number of stolen years for each gun violence victim we used cause of death data from the World Health Organization (WHO), downloaded on June 30, 2020. We calculated the age at which they may have died from natural causes, weighted according to the age distribution of U.S. deaths. Using this age, we then predicted a likely cause of death at that age. We did not adjust for life-expectancy differences between demographic groups, as we have not yet found reliable data to that extent. WHO data are from 2015, the most recent year available.</p>\n\t\t\t\t\t<h3>Notes on Data Download</h3>\n\t\t\t\t\t<p>Being that the original SHR data are only available in ASCII format and require some programming knowledge to extract we decided to offer a parsed and cleaned up version of the data for download in CSV format (see link above).</p>\n\t\t\t\t\t<p>These data are filtered to include only gun deaths and also contain our modified race variable. Though our visualization only covers 2018 the data available for download extends back to 1985.</p>\n\t\t\t\t\t<p>Our hope is that this more accessible version of the data will open the door to easier exploration and learning.</p>\n\t\t\t\t<h2>2013</h2>\n\t\t\t\t\t<p>Our 2010 data was the latest such information released by the federal government for several years and we resorted to a less refined source to obtain current data for 2013. Anonymous Twitter user, @GunDeaths, continuously gathers and tweets gun-related deaths in the U.S. As long as a verifiable source is provided, anyone can contribute through Twitter or email. Heâ€”as well as weâ€”acknowledge that this data is incomplete. Some of the data may be missing or inaccurate, and many killings are not even reported in an online news source. While this data is less reliable, it provides a real-time window into daily gun violence on a national scale.</p>\n\t\t\t\t\t<p>The FBI 2010 dataset included only homicides. However, because the 2013 deaths are crowdsourced from online news sources, it becomes much more difficult to programmatically distinguish which reports are suicides and which are homicides. Therefore, suicides are included in this 2013 visualization.</p>\n\t\t\t\t\t<p>You can read more about <a href='http://www.slate.com/articles/news_and_politics/crime/2012/12/gun_death_tally_every_american_gun_death_since_newtown_sandy_hook_shooting.html'>Slate's collaboration with @GunDeaths on Slate.com</a>.</p>\n\t\t\t\t<h2>2010</h2>\n\t\t\t\t\t<p>Our data comes from the <a href='http://www.fbi.gov/about-us/cjis/ucr/ucr' target='new'>FBI's Uniform Crime Reports</a>, which include voluntarily-reported data from police precincts across the country. In 2007, according to the FBI, law enforcement agencies active in the UCR Program represented more than 285 million US inhabitantsâ€”94.6% of the total population. This special dataset is at the raw, or incident, levelâ€”containing details of each person who was killed, including their age, gender, race, relationship to killer, and more.</p>\n\t\t\t\t\t<p>For the gray lines, we calculated alternate stories for the people killed with guns using <a href='http://data.un.org/Data.aspx?d=POP&f=tableCode%3A105' target='new'>data from the World Health Organization</a>. To calculate an alternate story, we first performed an age prediction weighted according to the age distribution of US deaths. Using this age, we then predicted a likely cause of death at that age. We do not adjust for life-expectancy differences between demographic groups, as we have not yet found data to that extent. We used data from 2005, the most recent year available.</p>\n\t\t\t\t\t\t\t").setTipWidth(0).setTipPosition(0).x((e - 450) / 2);
                var n = document.createElement("div");
                n.setAttribute("id", "shadow"), n.style.backgroundColor = "rgba(20,20,20,0.8)", n.style.width = e.toString(), n.style.height = t.toString(), n.style.position = "absolute", n.style.top = "0px", n.style.zIndex = "2", document.getElementById("container").appendChild(n), r.el().appendTo("#container"), r.render().position(), r.y(t - r.el().height() - 50).position(), r.el().show(), F()("#shadow").click(i), r.el().find(".close").click(i)
            },
            removeMethods: i
        }
    }(), (yr = F()("#distSwitch")).click((function() {
        Va("axismimic"), yr.toggleClass("focus")
    })), yr.mouseover((function() {
        Ga("axismimic")
    })).mouseout((function() {
        Ga("notaxismimic")
    })), Promise.all(Ia.map((function(e) {
        return (t = e.file, new Promise((function(e, n) {
            F.a.getJSON(t, e)
        }))).then((function(t) {
            return u.curvesByYear[e.year] = function(e) {
                var t = u.cfig,
                    n = 0;
                e.sort((function(e, t) {
                    return n = Math.max(e.age, t.age, n), e.month != t.month ? e.month - t.month : e.order - t.order
                }));
                for (var a = 0, r = e.length; a < r; a++) {
                    e[a].x = t.arcOffsetH / 2, e[a].y = (t.arcSpaceHeight + t.arcOffsetV) / 2, e[a].mrx = t.arcOffsetH / 2, e[a].mry = (t.arcSpaceHeight + t.arcOffsetV) / 2, e[a].lifecolor = t.life_strokeColor[Math.floor(Math.random() * (t.life_strokeColor.length - 1))], e[a].afterlifecolor = t.afterlife_strokeColor[Math.floor(Math.random() * (t.afterlife_strokeColor.length - 1))];
                    var i = Math.min(n, e[a].altage);
                    if (-1 == e[a].age) {
                        var s = Math.min(10, e[a].altage);
                        e[a].agereplace = Math.random() * (i - s) + s
                    }
                }
                return u.globalMaxAge = Math.ceil(Math.max(u.globalMaxAge, n)), e
            }(t)
        }));
        var t
    }))).then((function() {
        u.curYear = Ja.year;
        var e = u.curvesByYear[u.curYear];
        F()(".maxAgeLabel").html(u.globalMaxAge.toString());
        var t = fr.get("peopleKilled"),
            n = fr.get("lastTime");
        if (void 0 === t || void 0 === n) {
            t = e.length, n = Date.now();
            var a = c()(n).add("y", 1).toDate();
            fr.set("peopleKilled", t, {
                expires: a
            }), fr.set("lastTime", n, {
                expires: a
            })
        } else {
            t = parseInt(t, 0), n = +n;
            for (var r = 0, i = e.length; r < i; ++r) n <= new Date(e[r].date).getTime() && (u.peopleDifference += 1);
            n = Date.now(), a = c()(n).add("y", 1).toDate(), fr.set("peopleKilled", e.length, {
                expires: a
            }), fr.set("lastTime", n, {
                expires: a
            })
        }
        F()(_r)
    }))
}]);