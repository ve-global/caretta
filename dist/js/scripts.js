"use strict";

!function () {
    /*
    Copyright (C) 2013 Google Inc.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    Copyright (C) 2006 Google Inc.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
    (function () {
        function ba(g) {
            function k() {
                try {
                    M.doScroll("left");
                } catch (g) {
                    t.setTimeout(k, 50);return;
                }z("poll");
            }function z(k) {
                if ("readystatechange" != k.type || "complete" == A.readyState) ("load" == k.type ? t : A)[B](p + k.type, z, !1), !q && (q = !0) && g.call(t, k.type || k);
            }var Y = A.addEventListener,
                q = !1,
                C = !0,
                x = Y ? "addEventListener" : "attachEvent",
                B = Y ? "removeEventListener" : "detachEvent",
                p = Y ? "" : "on";if ("complete" == A.readyState) g.call(t, "lazy");else {
                if (A.createEventObject && M.doScroll) {
                    try {
                        C = !t.frameElement;
                    } catch (da) {}C && k();
                }A[x](p + "DOMContentLoaded", z, !1);A[x](p + "readystatechange", z, !1);t[x](p + "load", z, !1);
            }
        }function U() {
            V && ba(function () {
                var g = N.length;ca(g ? function () {
                    for (var k = 0; k < g; ++k) {
                        (function (g) {
                            t.setTimeout(function () {
                                t.exports[N[g]].apply(t, arguments);
                            }, 0);
                        })(k);
                    }
                } : void 0);
            });
        }for (var t = window, A = document, M = A.documentElement, O = A.head || A.getElementsByTagName("head")[0] || M, B = "", F = A.getElementsByTagName("script"), q = F.length; 0 <= --q;) {
            var P = F[q],
                Z = P.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if (Z) {
                B = Z[1] || "";P.parentNode.removeChild(P);
                break;
            }
        }var V = !0,
            H = [],
            Q = [],
            N = [];B.replace(/[?&]([^&=]+)=([^&]+)/g, function (g, k, z) {
            z = decodeURIComponent(z);k = decodeURIComponent(k);"autorun" == k ? V = !/^[0fn]/i.test(z) : "lang" == k ? H.push(z) : "skin" == k ? Q.push(z) : "callback" == k && N.push(z);
        });q = 0;for (B = H.length; q < B; ++q) {
            (function () {
                var g = A.createElement("script");g.onload = g.onerror = g.onreadystatechange = function () {
                    !g || g.readyState && !/loaded|complete/.test(g.readyState) || (g.onerror = g.onload = g.onreadystatechange = null, --T, T || t.setTimeout(U, 0), g.parentNode && g.parentNode.removeChild(g), g = null);
                };g.type = "text/javascript";g.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/lang-" + encodeURIComponent(H[q]) + ".js";O.insertBefore(g, O.firstChild);
            })(H[q]);
        }for (var T = H.length, F = [], q = 0, B = Q.length; q < B; ++q) {
            F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/" + encodeURIComponent(Q[q]) + ".css");
        }F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css");(function (g) {
            function k(q) {
                if (q !== z) {
                    var t = A.createElement("link");t.rel = "stylesheet";t.type = "text/css";q + 1 < z && (t.error = t.onerror = function () {
                        k(q + 1);
                    });t.href = g[q];O.appendChild(t);
                }
            }var z = g.length;k(0);
        })(F);var ca = function () {
            window.PR_SHOULD_USE_CONTINUATION = !0;var g;(function () {
                function k(a) {
                    function d(e) {
                        var b = e.charCodeAt(0);if (92 !== b) return b;var a = e.charAt(1);return (b = W[a]) ? b : "0" <= a && "7" >= a ? parseInt(e.substring(1), 8) : "u" === a || "x" === a ? parseInt(e.substring(2), 16) : e.charCodeAt(1);
                    }function f(e) {
                        if (32 > e) return (16 > e ? "\\x0" : "\\x") + e.toString(16);e = String.fromCharCode(e);return "\\" === e || "-" === e || "]" === e || "^" === e ? "\\" + e : e;
                    }function b(e) {
                        var b = e.substring(1, e.length - 1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e = [];var a = "^" === b[0],
                            c = ["["];a && c.push("^");for (var a = a ? 1 : 0, h = b.length; a < h; ++a) {
                            var l = b[a];if (/\\[bdsw]/i.test(l)) c.push(l);else {
                                var l = d(l),
                                    n;a + 2 < h && "-" === b[a + 1] ? (n = d(b[a + 2]), a += 2) : n = l;e.push([l, n]);65 > n || 122 < l || (65 > n || 90 < l || e.push([Math.max(65, l) | 32, Math.min(n, 90) | 32]), 97 > n || 122 < l || e.push([Math.max(97, l) & -33, Math.min(n, 122) & -33]));
                            }
                        }e.sort(function (e, a) {
                            return e[0] - a[0] || a[1] - e[1];
                        });b = [];h = [];for (a = 0; a < e.length; ++a) {
                            l = e[a], l[0] <= h[1] + 1 ? h[1] = Math.max(h[1], l[1]) : b.push(h = l);
                        }for (a = 0; a < b.length; ++a) {
                            l = b[a], c.push(f(l[0])), l[1] > l[0] && (l[1] + 1 > l[0] && c.push("-"), c.push(f(l[1])));
                        }c.push("]");return c.join("");
                    }function g(e) {
                        for (var a = e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g), c = a.length, d = [], h = 0, l = 0; h < c; ++h) {
                            var n = a[h];"(" === n ? ++l : "\\" === n.charAt(0) && (n = +n.substring(1)) && (n <= l ? d[n] = -1 : a[h] = f(n));
                        }for (h = 1; h < d.length; ++h) {
                            -1 === d[h] && (d[h] = ++k);
                        }for (l = h = 0; h < c; ++h) {
                            n = a[h], "(" === n ? (++l, d[l] || (a[h] = "(?:")) : "\\" === n.charAt(0) && (n = +n.substring(1)) && n <= l && (a[h] = "\\" + d[n]);
                        }for (h = 0; h < c; ++h) {
                            "^" === a[h] && "^" !== a[h + 1] && (a[h] = "");
                        }if (e.ignoreCase && I) for (h = 0; h < c; ++h) {
                            n = a[h], e = n.charAt(0), 2 <= n.length && "[" === e ? a[h] = b(n) : "\\" !== e && (a[h] = n.replace(/[a-zA-Z]/g, function (a) {
                                a = a.charCodeAt(0);return "[" + String.fromCharCode(a & -33, a | 32) + "]";
                            }));
                        }return a.join("");
                    }for (var k = 0, I = !1, m = !1, J = 0, c = a.length; J < c; ++J) {
                        var r = a[J];if (r.ignoreCase) m = !0;else if (/[a-z]/i.test(r.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                            I = !0;m = !1;break;
                        }
                    }for (var W = { b: 8, t: 9, n: 10, v: 11, f: 12, r: 13 }, u = [], J = 0, c = a.length; J < c; ++J) {
                        r = a[J];if (r.global || r.multiline) throw Error("" + r);u.push("(?:" + g(r) + ")");
                    }return new RegExp(u.join("|"), m ? "gi" : "g");
                }function q(a, d) {
                    function f(a) {
                        var c = a.nodeType;if (1 == c) {
                            if (!b.test(a.className)) {
                                for (c = a.firstChild; c; c = c.nextSibling) {
                                    f(c);
                                }c = a.nodeName.toLowerCase();if ("br" === c || "li" === c) g[m] = "\n", I[m << 1] = k++, I[m++ << 1 | 1] = a;
                            }
                        } else if (3 == c || 4 == c) c = a.nodeValue, c.length && (c = d ? c.replace(/\r\n?/g, "\n") : c.replace(/[ \t\r\n]+/g, " "), g[m] = c, I[m << 1] = k, k += c.length, I[m++ << 1 | 1] = a);
                    }var b = /(?:^|\s)nocode(?:\s|$)/,
                        g = [],
                        k = 0,
                        I = [],
                        m = 0;f(a);return { a: g.join("").replace(/\n$/, ""), c: I };
                }function t(a, d, f, b, g) {
                    f && (a = { h: a, l: 1, j: null, m: null, a: f, c: null, i: d, g: null }, b(a), g.push.apply(g, a.g));
                }function A(a) {
                    for (var d = void 0, f = a.firstChild; f; f = f.nextSibling) {
                        var b = f.nodeType,
                            d = 1 === b ? d ? a : f : 3 === b ? T.test(f.nodeValue) ? a : d : d;
                    }return d === a ? void 0 : d;
                }function C(a, d) {
                    function f(a) {
                        for (var m = a.i, k = a.h, c = [m, "pln"], r = 0, W = a.a.match(g) || [], u = {}, e = 0, q = W.length; e < q; ++e) {
                            var D = W[e],
                                w = u[D],
                                h = void 0,
                                l;if ("string" === typeof w) l = !1;else {
                                var n = b[D.charAt(0)];if (n) h = D.match(n[1]), w = n[0];else {
                                    for (l = 0; l < p; ++l) {
                                        if (n = d[l], h = D.match(n[1])) {
                                            w = n[0];break;
                                        }
                                    }h || (w = "pln");
                                }!(l = 5 <= w.length && "lang-" === w.substring(0, 5)) || h && "string" === typeof h[1] || (l = !1, w = "src");l || (u[D] = w);
                            }n = r;r += D.length;if (l) {
                                l = h[1];var E = D.indexOf(l),
                                    G = E + l.length;h[2] && (G = D.length - h[2].length, E = G - l.length);w = w.substring(5);t(k, m + n, D.substring(0, E), f, c);t(k, m + n + E, l, F(w, l), c);t(k, m + n + G, D.substring(G), f, c);
                            } else c.push(m + n, w);
                        }a.g = c;
                    }var b = {},
                        g;(function () {
                        for (var f = a.concat(d), m = [], p = {}, c = 0, r = f.length; c < r; ++c) {
                            var q = f[c],
                                u = q[3];if (u) for (var e = u.length; 0 <= --e;) {
                                b[u.charAt(e)] = q;
                            }q = q[1];u = "" + q;p.hasOwnProperty(u) || (m.push(q), p[u] = null);
                        }m.push(/[\0-\uffff]/);g = k(m);
                    })();var p = d.length;return f;
                }function x(a) {
                    var d = [],
                        f = [];a.tripleQuotedStrings ? d.push(["str", /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : a.multiLineStrings ? d.push(["str", /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : d.push(["str", /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]);a.verbatimStrings && f.push(["str", /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);var b = a.hashComments;b && (a.cStyleComments ? (1 < b ? d.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : d.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), f.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : d.push(["com", /^#[^\r\n]*/, null, "#"]));a.cStyleComments && (f.push(["com", /^\/\/[^\r\n]*/, null]), f.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/, null]));if (b = a.regexLiterals) {
                        var g = (b = 1 < b ? "" : "\n\r") ? "." : "[\\S\\s]";f.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + b + "])(?:[^/\\x5B\\x5C" + b + "]|\\x5C" + g + "|\\x5B(?:[^\\x5C\\x5D" + b + "]|\\x5C" + g + ")*(?:\\x5D|$))+/") + ")")]);
                    }(b = a.types) && f.push(["typ", b]);b = ("" + a.keywords).replace(/^ | $/g, "");b.length && f.push(["kwd", new RegExp("^(?:" + b.replace(/[\s,]+/g, "|") + ")\\b"), null]);d.push(["pln", /^\s+/, null, " \r\n\t\xA0"]);b = "^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals && (b += "(?!s*/)");f.push(["lit", /^@[a-z_$][a-z_$@0-9]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], ["pln", /^[a-z_$][a-z_$@0-9]*/i, null], ["lit", /^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i, null, "0123456789"], ["pln", /^\\[\s\S]?/, null], ["pun", new RegExp(b), null]);return C(d, f);
                }function B(a, d, f) {
                    function b(a) {
                        var c = a.nodeType;if (1 == c && !k.test(a.className)) {
                            if ("br" === a.nodeName) g(a), a.parentNode && a.parentNode.removeChild(a);else for (a = a.firstChild; a; a = a.nextSibling) {
                                b(a);
                            }
                        } else if ((3 == c || 4 == c) && f) {
                            var d = a.nodeValue,
                                p = d.match(q);p && (c = d.substring(0, p.index), a.nodeValue = c, (d = d.substring(p.index + p[0].length)) && a.parentNode.insertBefore(m.createTextNode(d), a.nextSibling), g(a), c || a.parentNode.removeChild(a));
                        }
                    }function g(a) {
                        function b(a, c) {
                            var d = c ? a.cloneNode(!1) : a,
                                n = a.parentNode;if (n) {
                                var n = b(n, 1),
                                    e = a.nextSibling;n.appendChild(d);for (var f = e; f; f = e) {
                                    e = f.nextSibling, n.appendChild(f);
                                }
                            }return d;
                        }for (; !a.nextSibling;) {
                            if (a = a.parentNode, !a) return;
                        }a = b(a.nextSibling, 0);for (var d; (d = a.parentNode) && 1 === d.nodeType;) {
                            a = d;
                        }c.push(a);
                    }for (var k = /(?:^|\s)nocode(?:\s|$)/, q = /\r\n?|\n/, m = a.ownerDocument, p = m.createElement("li"); a.firstChild;) {
                        p.appendChild(a.firstChild);
                    }for (var c = [p], r = 0; r < c.length; ++r) {
                        b(c[r]);
                    }d === (d | 0) && c[0].setAttribute("value", d);var t = m.createElement("ol");t.className = "linenums";d = Math.max(0, d - 1 | 0) || 0;for (var r = 0, u = c.length; r < u; ++r) {
                        p = c[r], p.className = "L" + (r + d) % 10, p.firstChild || p.appendChild(m.createTextNode("\xA0")), t.appendChild(p);
                    }a.appendChild(t);
                }function p(a, d) {
                    for (var f = d.length; 0 <= --f;) {
                        var b = d[f];X.hasOwnProperty(b) ? R.console && console.warn("cannot override language handler %s", b) : X[b] = a;
                    }
                }function F(a, d) {
                    a && X.hasOwnProperty(a) || (a = /^\s*</.test(d) ? "default-markup" : "default-code");return X[a];
                }function H(a) {
                    var d = a.j;try {
                        var f = q(a.h, a.l),
                            b = f.a;a.a = b;a.c = f.c;a.i = 0;F(d, b)(a);var g = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
                            g = g && 8 >= +g[1],
                            d = /\n/g,
                            p = a.a,
                            k = p.length,
                            f = 0,
                            m = a.c,
                            t = m.length,
                            b = 0,
                            c = a.g,
                            r = c.length,
                            x = 0;c[r] = k;var u, e;for (e = u = 0; e < r;) {
                            c[e] !== c[e + 2] ? (c[u++] = c[e++], c[u++] = c[e++]) : e += 2;
                        }r = u;for (e = u = 0; e < r;) {
                            for (var A = c[e], D = c[e + 1], w = e + 2; w + 2 <= r && c[w + 1] === D;) {
                                w += 2;
                            }c[u++] = A;c[u++] = D;e = w;
                        }c.length = u;var h = a.h;a = "";h && (a = h.style.display, h.style.display = "none");
                        try {
                            for (; b < t;) {
                                var l = m[b + 2] || k,
                                    n = c[x + 2] || k,
                                    w = Math.min(l, n),
                                    E = m[b + 1],
                                    G;if (1 !== E.nodeType && (G = p.substring(f, w))) {
                                    g && (G = G.replace(d, "\r"));E.nodeValue = G;var aa = E.ownerDocument,
                                        v = aa.createElement("span");v.className = c[x + 1];var B = E.parentNode;B.replaceChild(v, E);v.appendChild(E);f < l && (m[b + 1] = E = aa.createTextNode(p.substring(w, l)), B.insertBefore(E, v.nextSibling));
                                }f = w;f >= l && (b += 2);f >= n && (x += 2);
                            }
                        } finally {
                            h && (h.style.display = a);
                        }
                    } catch (y) {
                        R.console && console.log(y && y.stack || y);
                    }
                }var R = window,
                    K = ["break,continue,do,else,for,if,return,while"],
                    L = [[K, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
                    S = [L, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
                    M = [L, "abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
                    N = [L, "abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
                    L = [L, "debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],
                    O = [K, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
                    P = [K, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
                    K = [K, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
                    Q = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
                    T = /\S/,
                    U = x({ keywords: [S, N, M, L, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", O, P, K], hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0 }),
                    X = {};p(U, ["default-code"]);p(C([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\s\S]*?(?:-\->|$)/], ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/], ["lang-", /^<%([\s\S]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), "default-markup htm html mxml xhtml xml xsl".split(" "));p(C([["pln", /^[\s]+/, null, " \t\r\n"], ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/], ["pun", /^[=<>\/]+/], ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i], ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i], ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i], ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i], ["lang-css", /^style\s*=\s*\'([^\']+)\'/i], ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]]), ["in.tag"]);p(C([], [["atv", /^[\s\S]+/]]), ["uq.val"]);p(x({ keywords: S, hashComments: !0, cStyleComments: !0, types: Q }), "c cc cpp cxx cyc m".split(" "));p(x({ keywords: "null,true,false" }), ["json"]);p(x({ keywords: N, hashComments: !0, cStyleComments: !0,
                    verbatimStrings: !0, types: Q }), ["cs"]);p(x({ keywords: M, cStyleComments: !0 }), ["java"]);p(x({ keywords: K, hashComments: !0, multiLineStrings: !0 }), ["bash", "bsh", "csh", "sh"]);p(x({ keywords: O, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0 }), ["cv", "py", "python"]);p(x({ keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", hashComments: !0, multiLineStrings: !0, regexLiterals: 2 }), ["perl", "pl", "pm"]);p(x({ keywords: P, hashComments: !0, multiLineStrings: !0, regexLiterals: !0 }), ["rb", "ruby"]);p(x({ keywords: L, cStyleComments: !0, regexLiterals: !0 }), ["javascript", "js"]);p(x({ keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0 }), ["coffee"]);p(C([], [["str", /^[\s\S]+/]]), ["regex"]);
                var V = R.PR = { createSimpleLexer: C, registerLangHandler: p, sourceDecorator: x, PR_ATTRIB_NAME: "atn", PR_ATTRIB_VALUE: "atv", PR_COMMENT: "com", PR_DECLARATION: "dec", PR_KEYWORD: "kwd", PR_LITERAL: "lit", PR_NOCODE: "nocode", PR_PLAIN: "pln", PR_PUNCTUATION: "pun", PR_SOURCE: "src", PR_STRING: "str", PR_TAG: "tag", PR_TYPE: "typ", prettyPrintOne: function prettyPrintOne(a, d, f) {
                        f = f || !1;d = d || null;var b = document.createElement("div");b.innerHTML = "<pre>" + a + "</pre>";b = b.firstChild;f && B(b, f, !0);H({ j: d, m: f, h: b, l: 1, a: null, i: null, c: null, g: null });return b.innerHTML;
                    },
                    prettyPrint: g = g = function g(a, d) {
                        function f() {
                            for (var b = R.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : Infinity; r < p.length && c.now() < b; r++) {
                                for (var d = p[r], k = h, q = d; q = q.previousSibling;) {
                                    var m = q.nodeType,
                                        v = (7 === m || 8 === m) && q.nodeValue;if (v ? !/^\??prettify\b/.test(v) : 3 !== m || /\S/.test(q.nodeValue)) break;if (v) {
                                        k = {};v.replace(/\b(\w+)=([\w:.%+-]+)/g, function (a, b, c) {
                                            k[b] = c;
                                        });break;
                                    }
                                }q = d.className;if ((k !== h || u.test(q)) && !e.test(q)) {
                                    m = !1;for (v = d.parentNode; v; v = v.parentNode) {
                                        if (w.test(v.tagName) && v.className && u.test(v.className)) {
                                            m = !0;break;
                                        }
                                    }if (!m) {
                                        d.className += " prettyprinted";m = k.lang;if (!m) {
                                            var m = q.match(t),
                                                C;!m && (C = A(d)) && z.test(C.tagName) && (m = C.className.match(t));m && (m = m[1]);
                                        }if (x.test(d.tagName)) v = 1;else var v = d.currentStyle,
                                            y = g.defaultView,
                                            v = (v = v ? v.whiteSpace : y && y.getComputedStyle ? y.getComputedStyle(d, null).getPropertyValue("white-space") : 0) && "pre" === v.substring(0, 3);y = k.linenums;(y = "true" === y || +y) || (y = (y = q.match(/\blinenums\b(?::(\d+))?/)) ? y[1] && y[1].length ? +y[1] : !0 : !1);y && B(d, y, v);H({ j: m, h: d, m: y, l: v, a: null, i: null, c: null,
                                            g: null });
                                    }
                                }
                            }r < p.length ? R.setTimeout(f, 250) : "function" === typeof a && a();
                        }for (var b = d || document.body, g = b.ownerDocument || document, b = [b.getElementsByTagName("pre"), b.getElementsByTagName("code"), b.getElementsByTagName("xmp")], p = [], k = 0; k < b.length; ++k) {
                            for (var m = 0, q = b[k].length; m < q; ++m) {
                                p.push(b[k][m]);
                            }
                        }var b = null,
                            c = Date;c.now || (c = { now: function now() {
                                return +new Date();
                            } });var r = 0,
                            t = /\blang(?:uage)?-([\w.]+)(?!\S)/,
                            u = /\bprettyprint\b/,
                            e = /\bprettyprinted\b/,
                            x = /pre|xmp/i,
                            z = /^code$/i,
                            w = /^(?:pre|code|xmp)$/i,
                            h = {};f();
                    } },
                    S = R.define;"function" === typeof S && S.amd && S("google-code-prettify", [], function () {
                    return V;
                });
            })();return g;
        }();T || t.setTimeout(U, 0);
    })();
}(); /*
     Copyright (c) 2014 lonely-pixel.com
     
     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:
     
     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     */

var Picker = function Picker(options) {

    /* default settings */

    this.settings = {

        parent: document.body,
        orientation: 'right',
        x: 'auto',
        y: 'auto',
        arrow_size: 20
    };

    if (options instanceof HTMLElement) {

        this.settings.parent = options;
    } else {

        for (var name in options) {

            this.settings[name] = options[name];
        }
    }

    /* slider variables and settings */

    this.sliders = {

        'picker_selector': {
            down: false
        },
        'picker_hue': {
            down: false,
            vertical: true
        },
        'picker_opacity': {
            down: false,
            vertical: true
        }
    };

    /* colour storage and conversion */

    this.colour = this.color = {

        hue: 0,
        saturation: 1,
        value: 1,
        alpha: 1,

        /* convert to HSL */

        hsl: function hsl() {

            var h = this.hue;
            var l = (2 - this.saturation) * this.value;
            var s = this.saturation * this.value;
            s /= l <= 1 ? l : 2 - l;
            l /= 2;

            s *= 100;
            l *= 100;

            return {
                h: h,
                s: s,
                l: l,
                toString: function toString() {

                    return 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%)';
                }
            };
        },

        /* convert to HSLA */

        hsla: function hsla() {

            var hsl = this.hsl();

            hsl.a = this.alpha;

            hsl.toString = function () {

                return 'hsla(' + this.h + ', ' + this.s + '%, ' + this.l + '%, ' + this.a + ')';
            };

            return hsl;
        },

        /* convert to RGB */

        rgb: function rgb() {

            var r, g, b;

            var h = this.hue;
            var s = this.saturation;
            var v = this.value;

            h /= 60;

            var i = Math.floor(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            r = [v, q, p, p, t, v][i];
            g = [t, v, v, q, p, p][i];
            b = [p, p, t, v, v, q][i];

            return {
                r: Math.floor(r * 255),
                g: Math.floor(g * 255),
                b: Math.floor(b * 255),
                toString: function toString() {

                    return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
                }
            };
        },

        /* convert to RGBA */

        rgba: function rgba() {

            var rgb = this.rgb();

            rgb.a = this.alpha;

            rgb.toString = function () {

                return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
            };

            return rgb;
        },

        /* convert to hex */

        hex: function hex() {

            var rgb = this.rgb();

            function to_hex(c) {

                var hex = c.toString(16);

                return hex.length == 1 ? '0' + hex : hex;
            }

            return {
                r: to_hex(rgb.r),
                g: to_hex(rgb.g),
                b: to_hex(rgb.b),
                toString: function toString() {

                    return '#' + this.r + this.g + this.b;
                }
            };
        }
    };

    /* event functions */

    this.on_done = null;
    this.on_change = null;
};

/******************************************************

CSS applied to Picker's elements.

You can customise it here or dynamically via Javascript.
e.g your_picker_object.css.wrapper.padding = '20px'

******************************************************/

Picker.prototype.css = {

    wrapper: {
        selector: '#picker_wrapper',
        background: '#f2f2f2',
        position: 'absolute',
        whiteSpace: 'nowrap',
        padding: '10px',
        cursor: 'default',
        fontFamily: 'sans-serif',
        fontWeight: '100',
        display: 'inline-block',
        boxShadow: '0 0 10px 1px rgba(0,0,0,0.4)',
        overflow: 'visible',
        textAlign: 'left',
        fontSize: '16px'
    },

    arrow: {
        selector: '#picker_arrow',
        height: '0',
        width: '0',
        borderLeft: '20px solid transparent',
        borderRight: '20px solid transparent',
        borderBottom: '20px solid #f2f2f2',
        position: 'absolute',
        top: '-20px',
        left: '0'
    },

    colour_picker: {
        selector: '#picker_selector',
        width: '180px',
        height: '150px',
        position: 'relative',
        background: 'hsl(0, 100%, 50%)',
        display: 'inline-block',
        border: '1px solid #ccc'
    },

    saturation_overlay: {

        selector: '#picker_saturation',
        width: '180px',
        height: '150px',
        position: 'absolute',
        background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACWCAYAAAB3qaIPAAADB0lEQVR4Ae3SQQrCMABE0cb7n9nYIgUXIW7ExecJUkmlOjNvzDmfx3HM831fPz/fZ/d1dW91tvv+7t4vn/Wv3/Gf335WPazOdrvs7n191hhjPk7IXhrINAB0ZkpBrgaA5iDVANCpOYUBmoFUA0Cn5hQGaAZSDQCdmlMYoBlINQB0ak5hgGYg1QDQqTmFAZqBVANAp+YUBmgGUg0AnZpTGKAZSDUAdGpOYYBmINUA0Kk5hQGagVQDQKfmFAZoBlINAJ2aUxigGUg1AHRqTmGAZiDVANCpOYUBmoFUA0Cn5hQGaAZSDQCdmlMYoBlINQB0ak5hgGYg1QDQqTmFAZqBVANAp+YUBmgGUg0AnZpTGKAZSDUAdGpOYYBmINUA0Kk5hQGagVQDQKfmFAZoBlINAJ2aUxigGUg1AHRqTmGAZiDVANCpOYUBmoFUA0Cn5hQGaAZSDQCdmlMYoBlINQB0ak5hgGYg1QDQqTmFAZqBVANAp+YUBmgGUg0AnZpTGKAZSDUAdGpOYYBmINUA0Kk5hQGagVQDQKfmFAZoBlINAJ2aUxigGUg1AHRqTmGAZiDVANCpOYUBmoFUA0Cn5hQGaAZSDQCdmlMYoBlINQB0ak5hgGYg1QDQqTmFAZqBVANAp+YUBmgGUg0AnZpTGKAZSDUAdGpOYYBmINUA0Kk5hQGagVQDQKfmFAZoBlINAJ2aUxigGUg1AHRqTmGAZiDVANCpOYUBmoFUA0Cn5hQGaAZSDQCdmlMYoBlINQB0ak5hgGYg1QDQqTmFAZqBVANAp+YUBmgGUg0AnZpTGKAZSDUAdGpOYYBmINUA0Kk5hQGagVQDQKfmFAZoBlINAJ2aUxigGUg1AHRqTmGAZiDVANCpOYUBmoFUA0Cn5hQGaAZSDQCdmlMYoBlINQB0ak5hgGYg1QDQqTmFAZqBVANAp+YUBmgGUg0AnZpTGKAZSDUAdGpOYYBmINUA0Kk5hQGagVQDQKfmFAZoBlINAJ2aUxigGUg1AHRqTmGAZiDVANCpOYUBmoFUAy+AUbcs6wwU4wAAAABJRU5ErkJggg==)'
    },

    value_overlay: {

        selector: '#picker_value',
        width: '180px',
        height: '150px',
        position: 'absolute',
        background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACWCAYAAAB3qaIPAAADFUlEQVR4Ae3WgQ3AMAzDsHbY/ycPa95QmQ9kC0bWchIIJbAPyxPigXJ5Au/hH6mdBBIJjNAWOlEliEmA0DxIJeDlSNUJxkJzIJUAoVN1giE0B1IJ+KFTdYKx0BxIJUDoVJ1gvBwcSCVgoVN1giE0B1IJeDlSdYKx0BxIJUDoVJ1gCM2BVAJ+6FSdYCw0B1IJEDpVJxgvBwdSCVjoVJ1gCM2BVAKETtUJxg/NgVQCFjpVJxhCcyCVgJcjVScYC82BVAKETtUJxsvBgVQCFjpVJxhCcyCVAKFTdYLxQ3MglYCFTtUJhtAcSCXg5UjVCcZCcyCVAKFTdYIhNAdSCfihU3WCsdAcSCVA6FSdYLwcHEglYKFTdYIhNAdSCXg5UnWCsdAcSCVA6FSdYAjNgVQCfuhUnWAsNAdSCRA6VScYLwcHUglY6FSdYAjNgVQChE7VCcYPzYFUAhY6VScYQnMglYCXI1UnGAvNgVQChE7VCcbLwYFUAhY6VScYQnMglQChU3WC8UNzIJWAhU7VCYbQHEgl4OVI1QnGQnMglQChU3WCITQHUgn4oVN1grHQHEglQOhUnWC8HBxIJWChU3WCITQHUgkQOlUnGD80B1IJWOhUnWAIzYFUAl6OVJ1gLDQHUgkQOlUnGC8HB1IJWOhUnWAIzYFUAoRO1QnGD82BVAIWOlUnGEJzIJWAlyNVJxgLzYFUAoRO1QmG0BxIJeCHTtUJxkJzIJUAoVN1gvFycCCVgIVO1QmG0BxIJeDlSNUJxkJzIJUAoVN1giE0B1IJ+KFTdYKx0BxIJUDoVJ1gvBwcSCVgoVN1giE0B1IJEDpVJxg/NAdSCVjoVJ1gCM2BVAJejlSdYCw0B1IJEDpVJxgvBwdSCVjoVJ1gCM2BVAKETtUJxg/NgVQCFjpVJxhCcyCVgJcjVScYC82BVAKETtUJhtAcSCXgh07VCcZCcyCVAKFTdYLxcnAglYCFTtUJhtAcSCXg5UjVCcZCcyCVAKFTdYIhNAdSCfihU3WCsdAcSCVA6FSdYLwcHEglsA/NlyICc3UCP/PSBEmeyvh+AAAAAElFTkSuQmCC)'
    },

    hue_slider: {

        selector: '#picker_hue',
        width: '16px',
        height: '150px',
        position: 'relative',
        display: 'inline-block',
        marginLeft: '10px',
        background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAACWCAYAAADe8ajeAAABUklEQVRoBe2ZwQ4CMQhEIXJR//9T1biXyp1DJT4SzOKxRcLM0AJdXWJLwJ+J3EF3IhUOb+0jxDkcyD9qXpGHJ1R58nDyMMtA/6OnS95oGdVDFurQnlnWN/bjcEPQF9vD4RckbUzssTHIbtsr+4+NPa9yf8j9I8Tvw/6Q8QhxDvGj1x6yCl3o5bq5j5LbJmzP7hP9OExqEMwLOGSHUVe5fx72h9w/Qvws94eMR4hziB+9/pBxDmGHKgc70ausg30iEGHbJX+3wR2yLWdFhAM5dCu5BRdlVM5RFqwrEntECTTnFipEmdsmp0Gw9jLKfgFXd8fWZbgTEevvEO43xeCOuIDD/pDxCPE8xFXuDxnncByGGpFd+IMLdlTOihrs1ed5ttDDc4+/wbLtoTuEv9DYGSHjorCTWYXK/SHjHI7DcGMmFwouhxElqUEwP6Eoui5sof8A9nlhGxrI9UUAAAAASUVORK5CYII=)',
        border: '1px solid #ccc'
    },

    opacity_slider: {

        selector: '#picker_opacity',
        width: '16px',
        height: '150px',
        position: 'relative',
        display: 'inline-block',
        marginLeft: '10px',
        background: '#f00',
        border: '1px solid #ccc'
    },

    opacity_slider_overlay: {

        selector: '#picker_opacity_fade',
        width: '16px',
        height: '150px',
        display: 'inline-block',
        position: 'absolute',
        background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAACWCAYAAADXGgikAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBklEQVRo3q1ay6HUQAyz8+ZKIZzTAn3QB4VQB4Vs6qAMcdnAZCLJDvAu7C/J2JZl2SbiH//y9XptEYGIyOU7RETu+36+/n3N/KMREdt8wfR6Izecb4KIyDFdlPMX7LTs/SBPSnKiUJ+N6cnsByCnwmzGfIIUtsb7NyCm5Ji+TOE8a1oC+LR6dr7qOA4WiWRhzOX4QT5fT3uLQhbHjyXswXwQBR4uETrDyFDHbnxzKDMB6zGJCWBhjAVUYVCYDIkUaeLzP1A+jmMzjjvTeUXjDYlVGOX3w0AXDbMoDlhOQEVoTed05NExAQ0/RIdQIIAT1QkqE26ITQCf3RHffMCSjZoQDW6MlQ8+TJzX9zduZCeQ9jLOHAYwsVyEpYpRVmY3mr/P9bVyYkUol2zMZjmjp5z5gD5p33eJAcaJigMoBhQnuvIOVRc6hEL9MIqnsahQEyoOhArlMNB1Ja/0wWYKClY++NLgg+gwEtRTHEodobBaeaP/lVC6SiVVMkVhRiqBoRCXTmApgRFP8mM0dKGq2hc+kJS277ut0KtCUeShkqtd2qT4GELiZcEPti4owZEMZMPJWJInsmfCw3bngkQnacOgFGe/8NVx4XEccJSnkKhQaBuOyg+SD1J0JQqByZxoK7BLtlHEutSNQ3BAGL14A9KH6gUa72Mcx5GCNLH0CzSx5qYLBtZQ7fHpxFRQrUxhhJLN7sUiURUSKnU3Qxhp/LGp2pgPkivVEKb7hwTwTdTDWR+w6Yal9c3goCWyUDSkpcgKw4PJkKgycCP9wvyvHURV0t/KPBiVEqo640GF2li/QEG08EEyTswH1RhOI3U54BKlihNL7TTMILKTXBhmglOVtmCVCcXR0RVZ7SlOAvjumsxJH1Az3TRPlfoLKkdB5VmZ4wbT2UBmVIPprDJzLW0VH9zgrhQKuppZlbatMZCLkw8UlZ/9guKC7CCxzM5hMIAGT/zuG13GKQFWFpaWOcOM/lsspfQBTCNGFYpzVLobJIAf7pjTPFHOVDvduwx1NUuruDI7kyyl3qGKa2dNdBuJKhS6rnZjk6xK5ubf+kDO1mZ9QLXye35QjkSr8WeKzJRD2apCJ+udwwzpU62RHBLdlD+dWmeDJygtpZBYLTDL1tcl1WVgmQBe/2OeiILWW41nmIZLNuTdjWd0mq54aEY4jdR5OpQTO51re8fSmh/YbHzrAxkN1y+EUCqPFxSWI7ubrnDDOCUwWKmXPqiOmx2p+2g1Us3SWANOt18J4KeZI618cPuNS6bWfyUYZobmeDHCLOuyGAtt3TVRq9SpdG6lspsrpwkdlboqpcuV+tkvyE3PtF+IipXDVGQbxq1oOl2pt7Wxsl/uF8L1yswHGX4h5fYL+Qv+btsS2cFCRgAAAABJRU5ErkJggg==)'
    },

    colour_selector: {

        selector: '.picker_selector',
        width: '10px',
        height: '10px',
        position: 'absolute',
        display: 'inline-block',
        borderRadius: '20px',
        cursor: 'pointer',
        border: '2px solid #fff',
        boxShadow: '0 0 3px 1px #67b9ff',
        background: '#f00',
        left: '173px',
        top: '-7px'
    },

    slider_bar: {

        selector: '.picker_slider_bar',
        width: '100%',
        height: '10px',
        position: 'absolute',
        top: '-7px',
        borderRadius: '2px',
        cursor: 'pointer',
        border: '2px solid #fff',
        boxShadow: '0 0 3px 1px #67b9ff',
        marginLeft: '-2px',
        background: '#f00',
        fontSize: '16px'
    },

    sample: {

        selector: '#picker_sample',
        width: '180px',
        height: '24px',
        background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mM4c+bMf3yYEGAYNWBYGEBIASELRg0YFgYAAMoUr64OfmpAAAAAAElFTkSuQmCC)',
        display: 'inline-block',
        position: 'relative',
        marginTop: '10px',
        border: '1px solid #aaa'
    },

    sample_colour: {

        selector: '#picker_sample_colour',
        width: '100%',
        height: '100%',
        background: 'rgba(255,0,0,0.4)',
        position: 'absolute'

    },

    done_button: {

        selector: '#picker_done',
        width: '54px',
        height: '22px',
        lineHeight: '22px',
        background: '#e2e2e2',
        display: 'inline-block',
        border: '1px solid #ccc',
        marginLeft: '10px',
        textAlign: 'center',
        color: '#aaa',
        position: 'absolute',
        right: '12px',
        bottom: '15px',
        cursor: 'pointer',
        boxShadow: '0 0 3px 1px #eee'
    }
};

/******************************************************

Apply the CSS to Picker's elements.

You need to call this if you customise the CSS after
you call show().

******************************************************/

Picker.prototype.apply_style = function () {

    for (var name in this.css) {

        var element = this.css[name];

        var tags = document.querySelectorAll(element.selector);

        if (!tags.length) continue;

        var i = tags.length;

        while (i--) {

            var tag = tags[i];

            for (var name in element) {

                if (name == 'selector') continue;

                var property = element[name];

                tag.style[name] = property;
            }
        }
    }
};

/********************************

Show or create the picker HTML.

********************************/

Picker.prototype.show = function () {

    /* unhide html if it exists */

    var wrapper = document.getElementById('picker_wrapper');

    if (wrapper) {

        wrapper.style.display = 'inline-block';

        return;
    }

    /* append new html */

    var html = '';

    html += '<div id="picker_wrapper">';
    html += '   <div id="picker_arrow"></div>';
    html += '   <div id="picker_selector">';
    html += '       <div id="picker_saturation"></div>';
    html += '       <div id="picker_value"></div>';
    html += '       <div class="picker_selector"></div>';
    html += '   </div>';
    html += '   <div id="picker_hue" class="picker_slider">';
    html += '       <div class="picker_slider_bar"></div>';
    html += '   </div>';
    html += '   <div id="picker_opacity" class="picker_slider">';
    html += '       <div id="picker_opacity_fade"></div>';
    html += '       <div class="picker_slider_bar"></div>';
    html += '   </div>';
    html += '   <br>';
    html += '   <div id="picker_sample">';
    html += '   <div id="picker_sample_colour"></div>';
    html += '   </div>';
    html += '   <div id="picker_done">ok</div>';
    html += '</div>';

    var parent = this.settings.parent;

    if (parent.style.position != 'absolute') {

        parent.style.position = 'relative';
    }

    parent.innerHTML += html;

    /* apply css */

    this.apply_style();

    /* set positioning */

    var wrapper = document.getElementById('picker_wrapper');
    var arrow = document.getElementById('picker_arrow');

    if (this.settings.x === 'auto') {

        switch (this.settings.orientation) {

            case 'left':
                wrapper.style.left = -wrapper.offsetWidth - this.settings.arrow_size - 4 + 'px';
                break;

            case 'top':
            case 'bottom':
                wrapper.style.left = parent.offsetWidth / 2 - this.settings.arrow_size + 'px';
                break;

            case 'center':
            case 'centre':
                wrapper.style.left = -wrapper.offsetWidth / 2 + parent.offsetWidth / 2 + 'px';
                break;

            default:
                wrapper.style.left = parent.offsetWidth + this.settings.arrow_size + 4 + 'px';
                break;
        }
    } else {

        wrapper.style.left = parseInt(this.settings.x) + 'px';
    }

    if (this.settings.y === 'auto') {

        switch (this.settings.orientation) {

            case 'top':
                wrapper.style.top = -wrapper.offsetHeight - this.settings.arrow_size - 4 + 'px';
                break;

            case 'bottom':
                wrapper.style.top = parent.offsetHeight + this.settings.arrow_size + 4 + 'px';
                break;

            case 'center':
            case 'centre':
                wrapper.style.top = -parent.offsetHeight / 2 + -wrapper.offsetHeight / 2 + 'px';
                break;

            default:
                wrapper.style.top = parent.offsetHeight / 2 - this.settings.arrow_size + 'px';
                break;
        }
    } else {

        wrapper.style.top = parseInt(this.settings.y) + 'px';
    }

    /* set arrow position */

    switch (this.settings.orientation) {

        case 'left':
            arrow.style.borderLeft = this.settings.arrow_size + 'px solid' + this.css.wrapper.background;
            arrow.style.borderRight = 'none';
            arrow.style.borderTop = this.settings.arrow_size + 'px solid transparent';
            arrow.style.borderBottom = this.settings.arrow_size + 'px solid transparent';

            arrow.style.top = '0';
            arrow.style.right = -this.settings.arrow_size + 'px';
            arrow.style.left = '';
            break;

        case 'top':
            arrow.style.borderLeft = this.settings.arrow_size + 'px solid transparent';
            arrow.style.borderRight = this.settings.arrow_size + 'px solid transparent';
            arrow.style.borderTop = this.settings.arrow_size + 'px solid' + this.css.wrapper.background;
            arrow.style.borderBottom = 'none';

            arrow.style.bottom = -this.settings.arrow_size + 'px';
            arrow.style.top = '';
            arrow.style.left = '0';
            break;

        case 'bottom':
            arrow.style.borderLeft = this.settings.arrow_size + 'px solid transparent';
            arrow.style.borderRight = this.settings.arrow_size + 'px solid transparent';
            arrow.style.borderTop = 'none';
            arrow.style.borderBottom = this.settings.arrow_size + 'px solid' + this.css.wrapper.background;

            arrow.style.top = -this.settings.arrow_size + 'px';
            arrow.style.left = '0';
            break;

        case 'center':
        case 'centre':
            arrow.style.borderLeft = 'none';
            arrow.style.borderRight = 'none';
            arrow.style.borderTop = 'none';
            arrow.style.borderBottom = 'none';
            break;

        default:
            arrow.style.borderLeft = 'none';
            arrow.style.borderRight = this.settings.arrow_size + 'px solid' + this.css.wrapper.background;
            arrow.style.borderTop = this.settings.arrow_size + 'px solid transparent';
            arrow.style.borderBottom = this.settings.arrow_size + 'px solid transparent';

            arrow.style.top = '0';
            arrow.style.left = -this.settings.arrow_size + 'px';
            break;
    }

    this.bind_events();

    this.update_sample();
};

/*************************

Hides the picker window.

*************************/

Picker.prototype.hide = function () {

    var element = document.getElementById('picker_wrapper');

    if (element) {

        element.style.display = 'none';
    }
};

/*****************************************

Update the saturation and value variables.

*****************************************/

Picker.prototype.update_picker_selector = function (element, x, y) {

    this.colour.saturation = x / (element.offsetWidth - 2);

    this.colour.value = 1 - y / (element.offsetHeight - 2);

    this.update_opacity_slider();

    this.update_sample();

    this.update_picker_slider();
};

/***********************

Update the hue variable.

***********************/

Picker.prototype.update_picker_hue = function (element, x, y) {

    this.colour.hue = (1 - y / (element.offsetHeight - 2)) * 360;

    this.update_selector_hue();

    this.update_sample();

    this.update_hue_slider();
};

/*************************

Update the alpha variable.

*************************/

Picker.prototype.update_picker_opacity = function (element, x, y) {

    this.colour.alpha = 1 - y / (element.offsetHeight - 2);

    this.update_sample();

    this.update_opacity_slider();
};

/*************************************

Update the selected colour sample
The on_change function is called here.

*************************************/

Picker.prototype.update_sample = function () {

    var sample = document.getElementById('picker_sample_colour');

    sample.style.background = this.colour.hsla().toString();

    this.update_opacity_hue();

    if (this.on_change) {

        this.on_change(this.colour);
    }
};

/******************************

Update the colour picker's hue.

******************************/

Picker.prototype.update_selector_hue = function () {

    var picker = document.getElementById('picker_selector');

    picker.style.background = 'hsl(' + this.colour.hue + ', 100%, 50%)';

    this.update_picker_slider();

    this.update_opacity_slider();
};

/************************

Update the opaciy slider.

************************/

Picker.prototype.update_opacity_hue = function () {

    var picker = document.getElementById('picker_opacity');

    picker.style.background = this.colour.hsl().toString();
};

/*******************************

Update the colour picker slider.

*******************************/

Picker.prototype.update_picker_slider = function () {

    var slider = document.querySelector('#picker_selector .picker_selector');

    slider.style.background = this.colour.hsl().toString();
};

/*************************

Update the hue slider bar.

*************************/

Picker.prototype.update_hue_slider = function () {

    var slider = document.querySelector('#picker_hue .picker_slider_bar');

    slider.style.background = 'hsl(' + this.colour.hue + ', 100%, 50%)';
};

/*****************************

Update the opacity slider bar.

*****************************/

Picker.prototype.update_opacity_slider = function () {

    var slider = document.querySelector('#picker_opacity .picker_slider_bar');

    slider.style.background = this.colour.hsla().toString();
};

/***********************

Handle slider movements.

***********************/

Picker.prototype.mouse_move = function (e, element, _this, override) {

    var rect = element.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    if (override || _this.sliders[element.id] && _this.sliders[element.id].down) {

        var slider_info = _this.sliders[element.id];

        var slider = element.querySelectorAll('.picker_selector')[0] || element.querySelectorAll('.picker_slider_bar')[0];

        if (!slider) return;

        if (!slider_info.vertical) {

            x = Math.min(Math.max(x - slider.offsetWidth / 2, -(slider.offsetWidth / 2)), element.offsetWidth - slider.offsetWidth / 2 - 2);

            slider.style.left = x + 'px';
        }

        y = Math.min(Math.max(y - slider.offsetHeight / 2, -(slider.offsetHeight / 2)), element.offsetHeight - slider.offsetHeight / 2 - 2);

        slider.style.top = y + 'px';

        if (_this['update_' + element.id]) {

            _this['update_' + element.id](element, x + slider.offsetWidth / 2, y + slider.offsetHeight / 2);
        }
    }
};

/*****************

Bind mouse events.

*****************/

Picker.prototype.bind_events = function () {

    var wrapper = document.getElementById('picker_wrapper');

    var done = document.getElementById('picker_done');

    var colour_select = document.getElementById('picker_selector');
    var hue_select = document.getElementById('picker_hue');
    var opacity_select = document.getElementById('picker_opacity');

    var picker_slider = document.querySelector('#picker_selector .picker_selector');
    var hue_slider = document.querySelector('#picker_hue .picker_slider_bar');
    var opacity_slider = document.querySelector('#picker_opacity .picker_slider_bar');

    var _this = this;

    colour_select.onmousemove = hue_select.onmousemove = opacity_select.onmousemove = function (e) {

        _this.mouse_move(e, this, _this);

        e.preventDefault();
    };

    colour_select.onmousedown = hue_select.onmousedown = opacity_select.onmousedown = function (e) {

        _this.sliders[this.id].down = true;

        _this.mouse_move(e, this, _this, true);

        e.preventDefault();
    };

    picker_slider.onmousedown = hue_slider.onmousedown = opacity_slider.onmousedown = function () {

        _this.sliders[this.parentNode.id].down = true;
    };

    wrapper.onclick = wrapper.onmousedown = function (e) {

        e.stopPropagation();
        e.preventDefault();
        return false;
    };

    document.getElementsByTagName('html')[0].onmouseup = function () {

        for (var name in _this.sliders) {

            _this.sliders[name].down = false;
        }
    };

    document.getElementsByTagName('html')[0].onclick = function (e) {

        if (e.target && e.target != _this.settings.parent) {

            _this.hide();
        }
    };

    done.onclick = function () {

        _this.done();
    };
};

/********************************************************

Hides the window when, called when the button is clicked.
The on_done function is called here.

********************************************************/

Picker.prototype.done = function () {

    this.hide();

    if (this.on_done) {

        this.on_done(this.colour);
    }
};; /**
    *  VeCaretta Alerts
    *  Date: 13/10/2016
    *  Caretta Framework
    */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Alerts = function () {
    /**
     * Create alert
     * text {string}       - content of the alert
     * type {string}       - type of the alert (success, info, error, warning)
     */
    var popupAlert = function popupAlert(text, type) {
        var alert = document.createElement('DIV'),
            closeBtn = document.createElement('BUTTON'),
            closeIcon = document.createElement('SPAN');

        closeIcon.setAttribute('aria-hidden', 'true');
        closeIcon.appendChild(document.createTextNode('x'));
        closeBtn.appendChild(closeIcon);
        closeBtn.setAttribute('type', 'button');
        closeBtn.setAttribute('caretta-dismiss', 'alert');
        closeBtn.className = 'close';
        closeBtn.addEventListener('click', triggerCloseAlert);
        alert.appendChild(document.createTextNode(text));
        alert.appendChild(closeBtn);
        alert.className = 'caretta-alert caretta-alert-' + type + ' caretta-alert-dismissible';
        alert.setAttribute('role', 'alert');
        document.body.appendChild(alert);
    },


    /**
     * Close target alert
     * e {object}       - event
     */
    triggerCloseAlert = function triggerCloseAlert(e) {
        e.preventDefault();
        var alert = Caretta.Helpers.findAncestor(e.target, 'caretta-alert');

        alert.parentNode.removeChild(alert);
    },


    /**
     * Initialize click event for already existing alerts
     */
    initCloseAlerts = function initCloseAlerts() {
        var closeAlerts = document.querySelectorAll('[caretta-dismiss="alert"]');

        for (var i = 0; i < closeAlerts.length; i++) {
            closeAlerts[i].addEventListener('click', triggerCloseAlert);
        }
    },


    /**
     * Initialize click event for already existing alerts
     */
    initDynamicCloseAlerts = function initDynamicCloseAlerts() {
        document.querySelector('body').addEventListener('click', function (event) {
            var carettaDismiss = event.target.attributes.carettaDismiss;

            if (carettaDismiss !== undefined && carettaDismiss.value === 'alert') {
                triggerCloseAlert(event);
            }
        });
    };

    return {
        popupAlert: popupAlert,
        initCloseAlerts: initCloseAlerts,
        initDynamicCloseAlerts: initDynamicCloseAlerts
    };
}();
; /**
  *  VeCaretta Helper Functions
  *  Date: 17/10/2016
  *  Caretta Framework
  */
'use strict';
/* eslint no-cond-assign: 1 */

var Caretta;

Caretta = Caretta || {};

Caretta.Helpers = function () {

    /**
    * Get the parent with specific class
    * el {object}       - child element
    * cls {string}      - parent class
    */
    var findAncestor = function findAncestor(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls)) {}

        return el;
    };

    return {
        findAncestor: findAncestor
    };
}();
; /**
  *  VeCaretta Accordion
  *  Date: 11/10/2016
  *  Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Accordions = function () {

    var toggleSection = function toggleSection() {
        var sectionClasses = this.parentNode.className,
            siblingSections = this.parentNode.parentNode.getElementsByClassName('caretta-accordionItem'),
            z;

        if (this.parentNode.parentNode.getElementsByClassName('open').length === 0) {
            this.parentNode.parentNode.className = 'caretta-accordionWrapper oneVisible';
        } else {
            this.parentNode.parentNode.className = 'caretta-accordionWrapper oneVisible showHeadings';
        }

        if (sectionClasses === 'caretta-accordionItem open') {
            this.parentNode.className = 'caretta-accordionItem';
        } else {
            for (z = 0; z < siblingSections.length; z++) {
                siblingSections[z].className = 'caretta-accordionItem';
            }
            this.parentNode.className = 'caretta-accordionItem open';
        }
    },
        initAccordions = function initAccordions() {
        var accordions = document.getElementsByClassName('caretta-accordionWrapper'),
            i,
            j,
            accordionSectionsHeadings;

        for (i = 0; i < accordions.length; i++) {
            accordionSectionsHeadings = accordions[i].getElementsByClassName('caretta-accordionItemHeading');

            for (j = 0; j < accordionSectionsHeadings.length; j++) {
                accordionSectionsHeadings[j].addEventListener('click', toggleSection, false);
            }
        }
    };

    return {
        initAccordions: initAccordions
    };
}();
; /**
  *   Dropdown Functions
  *   Date: 11/10/2016
  *  Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Dropdown = function () {

    /**
     * Close open dropdowns on click outside
     */
    var closeDropdowns = function closeDropdowns() {
        document.onclick = function (e) {
            if (e.target !== null && Caretta.Helpers.findAncestor(e.target, 'caretta-dropdown') === null) {
                var simpleDropdowns = document.getElementsByClassName('caretta-dropdown');

                for (var i = 0; i < simpleDropdowns.length; i++) {
                    simpleDropdowns[i].classList.remove('open');
                }
            }
        };
    },


    /**
     * Toggle dropdown parent class
     * e {object}       - event
     */
    toggleDropdown = function toggleDropdown(e) {
        e.preventDefault();
        var simpleDropdowns = document.getElementsByClassName('caretta-dropdown'),
            divParrent = Caretta.Helpers.findAncestor(e.target, 'caretta-dropdown');

        for (var i = 0; i < simpleDropdowns.length; i++) {
            if (simpleDropdowns[i] !== divParrent) {
                simpleDropdowns[i].classList.remove('open');
            }
        }

        if (divParrent.classList.contains('open')) {
            divParrent.classList.remove('open');
        } else {
            divParrent.classList.add('open');
        }
    },


    /**
     * Add click event to all dropdowns
     */
    setupSimpleDropdowns = function setupSimpleDropdowns() {
        var dropdowns = document.querySelectorAll('[caretta-toggle="dropdown"]');

        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].addEventListener('click', toggleDropdown);
        }
    },


    /**
     * Add click event to dynamic added dropdowns
     */
    setupDynamicAddedSimpleDropdowns = function setupDynamicAddedSimpleDropdowns() {
        document.querySelector('body').addEventListener('click', function (event) {
            var carettaToggle = event.target.attributes.carettaToggle;

            if (carettaToggle !== undefined && carettaToggle.value === 'dropdown') {
                toggleDropdown(event);
            }
        });
    };

    return {
        closeDropdowns: closeDropdowns,
        setupSimpleDropdowns: setupSimpleDropdowns,
        setupDynamicAddedSimpleDropdowns: setupDynamicAddedSimpleDropdowns
    };
}();
; /**
  *  VeCaretta Modals
  *  Date: 13/10/2016
  *  Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Modals = function () {

    /**
     * Open modal
     * e {object}       - event
     */
    var triggerModal = function triggerModal(e) {
        e.preventDefault();
        var modalId = e.target.getAttribute('data-modal'),
            overlay = document.createElement('DIV');

        overlay.id = 'body-overlay';

        var existingOverlays = document.getElementById('body-overlay');
        if (!existingOverlays) {
            document.body.appendChild(overlay);
        }
        document.getElementById(modalId).classList.add('open');
        document.getElementById(modalId).focus();
    },


    /**
     * Close current modal
     * e {object}       - event
     */
    triggerCloseModal = function triggerCloseModal(e) {
        e.preventDefault();
        var modal = Caretta.Helpers.findAncestor(e.target, 'caretta-modal'),
            overlay = document.getElementById('body-overlay');

        document.body.removeChild(overlay);
        modal.classList.remove('open');
    },


    /**
     * Initialize click event for modals triggering
     */
    initModals = function initModals() {
        var modals = document.querySelectorAll('[caretta-toggle="modal"]');

        for (var i = 0; i < modals.length; i++) {
            modals[i].addEventListener('click', triggerModal);
        }
    },


    /**
     * Initialize click event for closing modals
     */
    initCloseModals = function initCloseModals() {
        var closeModals = document.querySelectorAll('[caretta-dismiss="modal"]');

        for (var i = 0; i < closeModals.length; i++) {
            closeModals[i].addEventListener('click', triggerCloseModal);
        }
    },


    /**
     * Add click event to dynamic added dropdowns
     */
    setupDynamicAddedModals = function setupDynamicAddedModals() {
        document.querySelector('body').addEventListener('click', function (event) {
            var carettaToggle = event.target.attributes.carettaToggle;

            if (carettaToggle !== undefined && carettaToggle.value === 'modal') {
                triggerModal(event);
            }
        });
    },


    /**
     * Add click event to dynamic added dropdowns
     */
    setupDynamicAddedCloseModals = function setupDynamicAddedCloseModals() {
        document.querySelector('body').addEventListener('click', function (event) {
            var carettaDismiss = event.target.attributes.carettaDismiss;

            if (carettaDismiss !== undefined && carettaDismiss.value === 'modal') {
                triggerCloseModal(event);
            }
        });
    };

    return {
        initModals: initModals,
        initCloseModals: initCloseModals,
        setupDynamicAddedModals: setupDynamicAddedModals,
        setupDynamicAddedCloseModals: setupDynamicAddedCloseModals
    };
}();
; /**
  *  VeCaretta Tabs
  *  Date: 17/10/2016
  *  Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Tabs = function () {

    /**
     * Toggles active tab
     * event {event}      - Click event
     */
    var toggleActiveTab = function toggleActiveTab(event) {
        var actives = void 0,
            i = void 0;

        event.preventDefault();
        actives = document.querySelectorAll('.active');

        for (i = 0; i < actives.length; i++) {
            actives[i].className = actives[i].className.replace('active', '');
        }

        event.target.parentElement.className += ' active';
        document.getElementById(event.target.href.split('#')[1]).className += ' active';
    },


    /**
     * Registers event listenter
     */
    initTabs = function initTabs() {
        var el;

        el = document.getElementById('nav-tab');
        if (el) {
            el.addEventListener('click', toggleActiveTab, false);
        }
    };

    return {
        initTabs: initTabs
    };
}();
; /**
  *   Forms Functions
  *   Date: 18/10/2016
  *   Caretta Framework
  */
'use strict';

/* global Picker, Pikaday */

var Caretta;

Caretta = Caretta || {};

Caretta.Forms = function () {

    /**
     * Colorpicker initialization
     */
    var initColorPicker = function initColorPicker() {
        var colorpickers = document.querySelectorAll('[caretta-toggle="colorpicker"]');

        var _loop = function _loop(i) {
            var picker = new Picker({ parent: colorpickers[i], orientation: 'top' });

            colorpickers[i].onclick = function () {
                picker.show();
            };

            picker.on_done = function (colour) {
                var val = colour.rgba().toString(),
                    input = document.createElement('INPUT'),
                    colorpickerId = colorpickers[i].getAttribute('data-colorpickerId');

                input.type = 'text';
                input.className = 'colorpicker-input';
                input.value = val;
                if (colorpickerId !== null) {
                    input.id = colorpickerId;
                }

                colorpickers[i].style.background = val;
                colorpickers[i].innerHTML = val;
                colorpickers[i].appendChild(input);
            };
        };

        for (var i = 0; i < colorpickers.length; i++) {
            _loop(i);
        }
    },
        initDatePicker = function initDatePicker() {
        var datepickers = document.querySelectorAll('[caretta-toggle="datepicker"]');

        for (var i = 0; i < datepickers.length; i++) {
            var _picker = new Pikaday({ field: datepickers[i] });

            _picker.getDate();
        }
    };

    return {
        initColorPicker: initColorPicker,
        initDatePicker: initDatePicker
    };
}();
; /**
  *   Attaches event listeners
  *   Date: 17/10/2016
  *	Caretta Framework
  */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Init = function () {
    Caretta.Tabs.initTabs();
    Caretta.Accordions.initAccordions();
    Caretta.Alerts.initCloseAlerts();
    Caretta.Alerts.initDynamicCloseAlerts();
    Caretta.Modals.initModals();
    Caretta.Modals.initCloseModals();
    Caretta.Modals.setupDynamicAddedModals();
    Caretta.Modals.setupDynamicAddedCloseModals();
    Caretta.Dropdown.closeDropdowns();
    Caretta.Dropdown.setupSimpleDropdowns();
    Caretta.Dropdown.setupDynamicAddedSimpleDropdowns();
    Caretta.Forms.initColorPicker();
    Caretta.Forms.initDatePicker();
};

window.onload = Caretta.Init;
