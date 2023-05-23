/*! For license information please see Grammarly-check.js.LICENSE.txt */
var e = {
    97924: (e,t,n)=>{
        var r = n(40382)
          , i = "chrome-extension://__MSG_@@extension_id__/"
          , s = "moz-extension://__MSG_@@extension_id__/"
          , o = "safari-web-extension://__MSG_@@extension_id__/"
          , a = self.GR_RESOURCE_ROOT || i
          , c = self.GR_RESOURCE_ROOT || s
          , u = self.GR_RESOURCE_ROOT || o;
        e.exports = {
            __css: r.toString().replace(new RegExp(i,"g"), a).replace(new RegExp(s,"g"), c).replace(new RegExp(o,"g"), u),
            ...r.locals
        }
    }
    ,
    40382: (e,t,n)=>{
        var r = n(54933)
          , i = n(93476)(r);
        i.push([e.id, "._cWTM9-animatedUnderline{visibility:hidden;position:fixed;}._cWTM9-animatedUnderline:after{content:'';position:absolute;visibility:visible;height:3px;bottom:0;border-radius:10px;background:#488cc8;animation:_Axb1F-showUnderline 1.3s ease forwards}._cWTM9-animatedUnderline._qSuCO-completeAnimation:after{animation:_Axb1F-showUnderline .2s ease forwards}@keyframes _Axb1F-showUnderline{0%{width:0%}100%{width:100%}}._hoLGP-checkAnimatedUnderline{animation:_Axb1F-showUnderline 2s ease forwards;}._hoLGP-checkAnimatedUnderline._qSuCO-completeAnimation{animation:_Axb1F-showUnderline .2s ease forwards}", ""]),
        i.locals = {
            animatedUnderline: "_cWTM9-animatedUnderline",
            showUnderline: "_Axb1F-showUnderline",
            completeAnimation: "_qSuCO-completeAnimation",
            checkAnimatedUnderline: "_hoLGP-checkAnimatedUnderline"
        },
        e.exports = i
    }
    ,
    93476: e=>{
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map((function(t) {
                    var n = ""
                      , r = void 0 !== t[5];
                    return t[4] && (n += "@supports (".concat(t[4], ") {")),
                    t[2] && (n += "@media ".concat(t[2], " {")),
                    r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                    n += e(t),
                    r && (n += "}"),
                    t[2] && (n += "}"),
                    t[4] && (n += "}"),
                    n
                }
                )).join("")
            }
            ,
            t.i = function(e, n, r, i, s) {
                "string" == typeof e && (e = [[null, e, void 0]]);
                var o = {};
                if (r)
                    for (var a = 0; a < this.length; a++) {
                        var c = this[a][0];
                        null != c && (o[c] = !0)
                    }
                for (var u = 0; u < e.length; u++) {
                    var l = [].concat(e[u]);
                    r && o[l[0]] || (void 0 !== s && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")),
                    l[5] = s),
                    n && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"),
                    l[2] = n) : l[2] = n),
                    i && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"),
                    l[4] = i) : l[4] = "".concat(i)),
                    t.push(l))
                }
            }
            ,
            t
        }
    }
    ,
    54933: e=>{
        e.exports = function(e) {
            return e[1]
        }
    }
    ,
    47598: e=>{
        e.exports = {
            animatedUnderline: "ymqHP",
            showUnderline: "JQguZ",
            completeAnimation: "ExcM8"
        }
    }
    ,
    27061: e=>{
        var t, n, r = e.exports = {};
        function i() {
            throw new Error("setTimeout has not been defined")
        }
        function s() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === i || !t) && setTimeout)
                return t = setTimeout,
                setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (n) {
                    return t.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                t = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                t = i
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                n = s
            }
        }();
        var a, c = [], u = !1, l = -1;
        function d() {
            u && a && (u = !1,
            a.length ? c = a.concat(c) : l = -1,
            c.length && h())
        }
        function h() {
            if (!u) {
                var e = o(d);
                u = !0;
                for (var t = c.length; t; ) {
                    for (a = c,
                    c = []; ++l < t; )
                        a && a[l].run();
                    l = -1,
                    t = c.length
                }
                a = null,
                u = !1,
                function(e) {
                    if (n === clearTimeout)
                        return clearTimeout(e);
                    if ((n === s || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function p(e, t) {
            this.fun = e,
            this.array = t
        }
        function f() {}
        r.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            c.push(new p(e,t)),
            1 !== c.length || u || o(h)
        }
        ,
        p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = f,
        r.addListener = f,
        r.once = f,
        r.off = f,
        r.removeListener = f,
        r.removeAllListeners = f,
        r.emit = f,
        r.prependListener = f,
        r.prependOnceListener = f,
        r.listeners = function(e) {
            return []
        }
        ,
        r.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    }
}
  , t = {};
function n(r) {
    var i = t[r];
    if (void 0 !== i)
        return i.exports;
    var s = t[r] = {
        id: r,
        exports: {}
    };
    return e[r](s, s.exports, n),
    s.exports
}
(()=>{
    function e(e) {
        const t = [];
        let n;
        for (; !(n = e.next()).done; )
            t.push(n.value);
        return t
    }
    function t(e, t) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    function r(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    const i = function() {
        const e = Object.prototype.toString;
        return "[object Arguments]" === e.call(arguments) ? function(t) {
            return "[object Arguments]" === e.call(t)
        }
        : function(e) {
            return t("callee", e)
        }
    }()
      , s = function() {
        const e = !{
            toString: null
        }.propertyIsEnumerable("toString")
          , n = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]
          , r = function() {
            return arguments.propertyIsEnumerable("length")
        }()
          , s = function(e, t) {
            for (var n = 0; n < e.length; ) {
                if (e[n] === t)
                    return !0;
                n += 1
            }
            return !1
        };
        return "function" != typeof Object.keys || r ? function(o) {
            if (Object(o) !== o)
                return [];
            let a, c;
            const u = []
              , l = r && i(o);
            for (a in o)
                !t(a, o) || l && "length" === a || (u[u.length] = a);
            if (e)
                for (c = n.length - 1; c >= 0; )
                    a = n[c],
                    t(a, o) && !s(u, a) && (u[u.length] = a),
                    c -= 1;
            return u
        }
        : function(e) {
            return Object(e) !== e ? [] : Object.keys(e)
        }
    }();
    function o(e) {
        return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
    }
    function a(e) {
        return new Promise((t=>setTimeout(t, e)))
    }
    function c() {
        let e, t;
        return {
            promise: new Promise(((n,r)=>{
                e = n,
                t = r
            }
            )),
            resolve: e,
            reject: t
        }
    }
    function u(e) {
        return new Promise(((t,n)=>{
            e.then(n, t)
        }
        ))
    }
    class l extends Error {
    }
    const d = function n(i, a, c=[], u=[]) {
        if (r(i, a))
            return !0;
        if (o(i) !== o(a))
            return !1;
        if (null == i || null == a)
            return !1;
        if ("function" == typeof i.equals || "function" == typeof a.equals)
            return "function" == typeof i.equals && i.equals(a) && "function" == typeof a.equals && a.equals(i);
        switch (o(i)) {
        case "Arguments":
        case "Array":
        case "Object":
            if ("function" == typeof i.constructor && "Promise" === function(e) {
                const t = String(e).match(/^function (\w*)/);
                return null == t ? "" : t[1]
            }(i.constructor))
                return i === a;
            break;
        case "Boolean":
        case "Number":
        case "String":
            if (typeof i != typeof a || !r(i.valueOf(), a.valueOf()))
                return !1;
            break;
        case "Date":
            if (!r(i.valueOf(), a.valueOf()))
                return !1;
            break;
        case "Error":
            return i.name === a.name && i.message === a.message;
        case "RegExp":
            if (i.source !== a.source || i.global !== a.global || i.ignoreCase !== a.ignoreCase || i.multiline !== a.multiline || i.sticky !== a.sticky || i.unicode !== a.unicode)
                return !1;
            break;
        case "Map":
        case "Set":
            if (!n(e(i.entries()), e(a.entries()), c, u))
                return !1;
            break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
            break;
        default:
            return !1
        }
        const l = s(i);
        if (l.length !== s(a).length)
            return !1;
        let d = c.length - 1;
        for (; d >= 0; ) {
            if (c[d] === i)
                return u[d] === a;
            d -= 1
        }
        for (c.push(i),
        u.push(a),
        d = l.length - 1; d >= 0; ) {
            const e = l[d];
            if (!t(e, a) || !n(a[e], i[e], c, u))
                return !1;
            d -= 1
        }
        return c.pop(),
        u.pop(),
        !0
    };
    function h(e, t) {
        return e.some((e=>e === t)) ? t : void 0
    }
    class p extends Error {
        constructor(e) {
            super(`Matching not exhaustive: unexpected value ${JSON.stringify(e)}`)
        }
    }
    function f(e) {
        throw new p(e)
    }
    function g(e) {
        if ("string" == typeof e) {
            const t = parseInt(e, 10);
            return isNaN(t) ? void 0 : t
        }
        return "number" == typeof e ? e : void 0
    }
    function m(e, t) {
        try {
            return e()
        } catch (e) {
            return t(e)
        }
    }
    function b() {}
    function _(e) {
        let t, n = !1;
        return (...r)=>(n || (n = !0,
        t = e(...r)),
        t)
    }
    function v(e, t) {
        const n = new Set;
        let r;
        return (...i)=>{
            const s = t(...i);
            return n.has(s) || (n.add(s),
            r = e(...i)),
            r
        }
    }
    async function y(e, t, n) {
        const r = n();
        if (!(e > 0))
            return r;
        try {
            return await r
        } catch (r) {
            return await a(t),
            y(e - 1, t, n)
        }
    }
    var w;
    !function(e) {
        function t() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        e.create = function() {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }(w || (w = {}));
    void 0 !== self.requestIdleCallback && self.requestIdleCallback;
    class x extends Error {
        constructor(e) {
            super(`Assertion failed: ${e ? "string" == typeof e ? e : e() : "(unnamed)"}`)
        }
    }
    function E(e, t) {
        if (!e)
            throw new x(t)
    }
    function S(e, t) {
        if (null == e)
            throw new x((()=>t ? `Expected ${t} to be non-null` : "Expected non-null"));
        return e
    }
    var I, A, T, O, R, F, k;
    function C(e, t) {
        return e.filter((e=>!!e)).join(t)
    }
    !function(e) {
        const t = {
            chromiumWebExtension: "chromeExt",
            firefoxWebExtension: "firefoxExt",
            safariAppExtension: "safariExt",
            safariWebExtension: "safariWebExt",
            safariIOSWebExtension: "safariIOSExt"
        };
        function n(e, n, r) {
            return "retail" === r && "safariIOSWebExtension" === n ? "safariIOSExt-retail" : "edge" === e ? "chromiumEdgeExt" : t[n]
        }
        e.getAppName = n,
        e.create = function(e, t, r, i) {
            return {
                appName: S(n(e, t, r), "gnar app name"),
                url: `https://gnar.${i}`,
                domain: `.${i}`,
                sendEmailInfoTracking: !0,
                sendFluidExperimentData: !1
            }
        }
    }(I || (I = {})),
    function(e) {
        const t = {
            chromiumWebExtension: "extensionChrome",
            firefoxWebExtension: "extensionFirefox",
            safariAppExtension: "extensionSafari",
            safariWebExtension: "extensionSafariWeb",
            safariIOSWebExtension: "extensionSafariIOS"
        };
        e.create = function(e, n, r, i) {
            return {
                appName: "retail" === r && "safariIOSWebExtension" === n ? "extensionSafariIOS-retail" : "edge" === e ? "extensionEdge" : S(t[n], "felog app name"),
                sendUsageMetrics: !0,
                sendPerfMetricsType: "dev" === i ? "local" : Math.random() <= .01 ? "send" : "off"
            }
        }
    }(A || (A = {})),
    function(e) {
        const t = {
            chromiumWebExtension: "extension_chrome",
            firefoxWebExtension: "extension_firefox",
            safariAppExtension: "extension_safari",
            safariWebExtension: "extension_safari_web",
            safariIOSWebExtension: "extension_safari_ios"
        }
          , n = {
            regular: "inline",
            retail: "retail_demo"
        };
        e.create = (e,r,i)=>({
            clientType: "edge" === e ? "extension_chromium_edge" : S(t[r], "capi client type"),
            clientSubType: S(n[i], "capi client subType")
        })
    }(T || (T = {})),
    function(e) {
        e.create = function(e) {
            return {
                urls: {
                    fetchMessages: `${e}/api/v1/messages`,
                    acknowledgeMessage: `${e}/api/v1/messages/acknowledge`,
                    dismissMessage: `${e}/api/v1/messages/dismiss`
                }
            }
        }
    }(O || (O = {})),
    function(e) {
        const t = {
            chromiumWebExtension: "chromeExt",
            firefoxWebExtension: "firefoxExt",
            safariAppExtension: "safariExt",
            safariWebExtension: "safariWebExt",
            safariIOSWebExtension: "safariIOSExt"
        };
        e.create = function(e, n) {
            return {
                xClientType: "edge" === e ? "chromiumEdgeExt" : t[n]
            }
        }
    }(R || (R = {})),
    function(e) {
        let t;
        var n;
        n = t = e.GrStaticUrl || (e.GrStaticUrl = {}),
        n.toGrStaticUrl = e=>"https://d201kpdrh73vuz.cloudfront.net/" + e
    }(F || (F = {})),
    function(e) {
        e.create = function(t, n, r, i, s) {
            const o = "safari" === t ? "disableAppsPromotion=true" : "";
            function a(e) {
                const t = `https://${e}.${n}`;
                return (e="",n="")=>{
                    const r = C([o, n], "&");
                    return C([t + e, r], "?")
                }
            }
            const c = a("www")
              , u = a("app")
              , l = a("account")
              , d = a("redirect")
              , h = e.GrStaticUrl.toGrStaticUrl
              , p = `https://data.${n}`
              , f = `https://auth.${n}/v3`
              , g = `https://auth.${n}/v4`
              , m = `https://capi.${n}`;
            return {
                accountSubscription: l("/subscription"),
                accountSubscriptionAddBillingInfo: l("/admin/subscription", "popup=add_billing_info"),
                adminAccountSubscription: l("/admin/subscription"),
                accountAdminSubscriptionAddBillingInfoToUngatedTrial: l("/admin/subscription", "popup=ungated_trial"),
                app: u(),
                appPersonalDictionary: l("/customize"),
                capi: `wss://capi.${n}/freews`,
                capiStatic: `wss://capi.${n}/freews`,
                capiGDocs: `wss://capi.${n}/gdocs`,
                dapi: p,
                editorDictionary: u("/profile/dictionary"),
                dictionary: `https://capi.${n}/api/defs`,
                docs: u("/docs"),
                docsApi: `https://dox.${n}/documents`,
                newDoc: u("/docs/new"),
                tokens: `${g}/api`,
                auth: f,
                userOrAnonymous: `${f}/user/oranonymous`,
                signin: c("/signin"),
                signup: c("/signup"),
                fbSignin: c("/signin", "fromExtensionFb=true"),
                fbSignup: c("/signup", "fromExtensionFb=true"),
                googleSignin: c("/signin", "fromExtensionGoogle=true"),
                googleSignup: c("/signup", "fromExtensionGoogle=true"),
                resetPassword: c("/resetpassword"),
                newFelog: r,
                sumoLogic: i,
                vmetrics: s,
                welcomeC: c("/extension-success"),
                afterInstall: c("/after_install_page/"),
                upgrade: c("/upgrade"),
                planComparison: c("/plans"),
                businessHomepage: c("/business"),
                businessPricing: c("/business/pricing"),
                businessStyleGuide: c("/business/styleguide"),
                businessBrandTones: c("/business/brand-tones"),
                uninstall: c("/extension-uninstall"),
                terms: c("/terms"),
                policy: c("/privacy-policy"),
                californiaPolicy: c("/privacy-policy#for-california-users"),
                extensionSuccess: c("/extension-success"),
                firefoxPrivatePolicy: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/privacy/",
                dynamicConfigUrl: "https://d27xxe7juh1us6.cloudfront.net/dynamicConfig.json",
                pageConfigUrl: "https://d27xxe7juh1us6.cloudfront.net/browserplugin/config.json",
                grammarlyDomain: n,
                grammarlyProtocol: "https:",
                redirect: d("/redirect"),
                snippetsApi: `https://goldengate.${n}/snippets/v1/snippets`,
                snippetsNew: l("/admin/snippets", "action=create"),
                snippetsAdmin: l("/admin/snippets"),
                snippetsSettings: l("/customize/snippets"),
                clientControlsApi: `https://goldengate.${n}/client-controls`,
                readerMailApi: {
                    summaries: `${m}/api/v2/reader/process`,
                    annotations: `${m}/api/v2/reader/annotate`,
                    eventsV1: `${m}/api/v3/reader/events`
                },
                freeEmailDomainsSortedList: h("reader/free-email-domains.json"),
                suggestionsSettings: l("/customize/suggestions"),
                allSettings: l(),
                styleGuideSettings: l("/admin/style-guide"),
                writingStyleSettings: l("/admin/style-guide-writing-style"),
                brandTones: l("/admin/brand-tones"),
                grammarlyIdeasSelf: u("/ideas/grow/self"),
                grammarlyIdeasPeer: u("/ideas/grow/peer"),
                grammarlyIdeasSales: u("/ideas/sales"),
                iOSApp: "grammarly://home",
                standWithUkraine: c("/stand-with-ukraine"),
                standWithUkraineBlockedUserPing: "https://rwsgfy.grammarly.com/stand-with-ukraine",
                tourGdocs: c("/tour-gdocs"),
                assets: {
                    assistantOnboardingTourGif: h("assets/assistant/assistant-onboarding-tour"),
                    ownerActivationIPMHeader: h("assets/ipm/owner-activation-ipm-header"),
                    graduationIpmSvg: h("assets/ipm/graduation-campaign-ipm"),
                    writingProgressIpmGif: h("assets/ipm/writing-progress-ipm-header"),
                    onboardingTour: {
                        inlineSuggestionsPreviewImage: h("assets/onboarding/inline-suggestions-preview-image.jpg"),
                        inlineSuggestionsAnimation: h("assets/onboarding/inline-suggestions.mp4"),
                        clickToAcceptAnimation: h("assets/onboarding/click-to-accept.mp4"),
                        happyWritingAnimation: h("assets/onboarding/happy-writing.mp4")
                    },
                    knowledgeHubOnboardingTour: {
                        step1: h("assets/knowledgeHubOnboarding/kh-onboarding-step1.mp4"),
                        step2: h("assets/knowledgeHubOnboarding/kh-onboarding-step2.mp4"),
                        step3: h("assets/knowledgeHubOnboarding/kh-onboarding-step3.mp4")
                    }
                },
                support: `https://support.${n}/hc/en-us/requests/new#/`
            }
        }
    }(F || (F = {})),
    function(e) {
        const t = "grammarly.com"
          , n = "qagr.io"
          , r = "ppgr.io";
        e.create = function(e, i, s, o) {
            const a = (e,t,n,r,i)=>"prod" === o ? e : "qa" === o ? t : "dev-qa" === o ? n : "dev-preprod" === o ? r : "dev" === o ? i : void f(o)
              , c = "https://127.0.0.1:8000"
              , u = a("https://f-log-extension.grammarly.io", c, c, c, c)
              , l = a("https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==", c, c, c, c)
              , d = a("https://femetrics.grammarly.io/batch/import", "https://femetrics.qagr.io/batch/import", "https://femetrics.qagr.io/batch/import", "https://femetrics.ppgr.io/batch/import", "https://femetrics.qagr.io/batch/import")
              , h = a(t, n, n, r, n)
              , p = a(t, n, n, r, t);
            return {
                url: F.create(e, p, u, l, d),
                gnar: I.create(e, i, s, h),
                felog: A.create(e, i, s, o),
                capi: T.create(e, i, s),
                chipmunk: O.create("https://chipmunk.grammarly.com"),
                auth: R.create(e, i),
                extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4"
            }
        }
    }(k || (k = {}));
    const M = m((()=>browser), (()=>self.browser))
      , P = m((()=>browser), (()=>self.browser));
    self.chrome = self.chrome;
    var N, L, U, j, D, B, $, W, V, H, G;
    !function(e) {
        e.create = function(e, t, n, r, i, s, o, a) {
            const c = void 0 !== s && void 0 !== o ? s : "UNVERSIONED"
              , u = `${e}.${t}.${n}`;
            return {
                version: u,
                fullVersion: `${u}-${[r, ["prod" !== i ? i : null, c !== r ? c : null].filter((e=>!!e)).join(".")].filter((e=>"" !== e)).join("/")}`,
                commitHash: o,
                gitBranch: s,
                manifestVersion: a
            }
        }
        ,
        e.getManifestVersion = function(e, t, n) {
            switch (e) {
            case "safariAppExtension":
                switch (t) {
                case "bg":
                case "popup":
                    return n.safari.extension.displayVersion;
                default:
                    return
                }
            case "chromiumWebExtension":
                return n.chrome.runtime.getManifest().version;
            case "firefoxWebExtension":
                return M.runtime.getManifest().version;
            case "safariWebExtension":
            case "safariIOSWebExtension":
                return P.runtime.getManifest().version;
            default:
                return f(e)
            }
        }
    }(N || (N = {})),
    function(e) {
        e.create = function(e) {
            return h(["chrome", "safari", "firefox", "edge"], e)
        }
        ,
        e.isValidTargetBrowser = function(e) {
            return ["chrome", "safari", "firefox", "edge"].includes(e)
        }
        ,
        e.detect = function(e) {
            return e.chrome && /google/i.test(e.navigator.vendor) ? e.navigator.userAgent.indexOf("Edg") > -1 ? "edge" : "chrome" : -1 !== e.navigator.userAgent.indexOf("Firefox") ? "firefox" : /^((?!chrome).)*safari/i.test(e.navigator.userAgent) ? "safari" : void 0
        }
    }(L || (L = {})),
    function(e) {
        e.create = function(e) {
            return h(["dev", "prod", "qa", "dev-qa", "dev-preprod"], e)
        }
    }(U || (U = {})),
    function(e) {
        e.create = function(e) {
            return h(["regular", "retail"], e)
        }
    }(j || (j = {})),
    function(e) {
        e.create = function(e) {
            return h(["chromiumWebExtension", "firefoxWebExtension", "safariAppExtension", "safariWebExtension", "safariIOSWebExtension"], e)
        }
    }(D || (D = {})),
    function(e) {
        e.create = function(e, t, n, r, i) {
            return {
                browser: e,
                extensionType: t,
                deploymentType: n,
                env: r,
                context: i
            }
        }
    }(B || (B = {})),
    function(e) {
        e.create = function(e) {
            return {
                type: L.detect(e) || "other"
            }
        }
    }($ || ($ = {})),
    function(e) {
        e.create = function(e) {
            return {
                isWindows: -1 !== e.navigator.appVersion.indexOf("Win"),
                isMac: -1 !== e.navigator.appVersion.indexOf("Mac"),
                isChromeOS: -1 !== e.navigator.appVersion.indexOf("CrOS")
            }
        }
    }(W || (W = {})),
    function(e) {
        e.create = function(e) {
            return {
                browser: $.create(e),
                os: W.create(e)
            }
        }
    }(V || (V = {})),
    function(e) {
        function t(e, t, n, r, i, s, o) {
            return {
                env: e,
                major_number: t,
                build_number: n,
                release_number: r,
                git_branch: i,
                git_commit: s,
                manifest_version: o
            }
        }
        e.create = t,
        e.fromBrowserify = function() {
            return t("prod", "14", "1103", "0", "UNVERSIONED", "UNVERSIONED", "3")
        }
    }(H || (H = {})),
    function(e) {
        e.getTargetEnv = function(e) {
            if (!e.env)
                throw new Error("processEnv.env is null or undefined");
            const t = U.create(e.env);
            if (!t)
                throw new Error(`Invalid processEnv.env: ${e.env}`);
            return t
        }
        ,
        e.create = function(e, t, n, r, i, s) {
            const o = [i.major_number, i.build_number, i.release_number].map(g);
            let a;
            if (3 === o.length && o.every((e=>void 0 !== e)))
                a = o;
            else {
                let e;
                try {
                    e = N.getManifestVersion(t, r, self)
                } catch (e) {}
                const n = (e || "").split(".").map(g);
                a = 3 === n.length && n.every((e=>void 0 !== e)) ? n : [0, 0, 0]
            }
            const [c,u,l] = a;
            return {
                buildInfo: N.create(c, u, l, e, s, i.git_branch, i.git_commit, i.manifest_version),
                bundleInfo: B.create(e, t, n, s, r),
                appConfig: k.create(e, t, n, s),
                systemInfo: V.create(self)
            }
        }
    }(G || (G = {}));
    const q = new class {
        constructor(e) {
            this._getFallbackValue = e
        }
        init(e) {
            if (void 0 !== this._value)
                throw new Error("Global value already initialized.");
            this._value = e
        }
        get() {
            if (void 0 === this._value) {
                if (void 0 === this._getFallbackValue)
                    throw new Error("Global value not initialized and no fallback value provided.");
                this._value = this._getFallbackValue()
            }
            return this._value
        }
    }
    ((()=>{
        throw new Error("Global config not initialized")
    }
    ));
    let z = ()=>q.get();
    function K() {
        return z()
    }
    function J() {
        return K().appConfig.extensionId
    }
    function Y() {
        return "edge" === K().bundleInfo.browser
    }
    function X() {
        return K().bundleInfo.browser
    }
    function Q() {
        return K().bundleInfo.env
    }
    function Z() {
        try {
            return self.parent !== self
        } catch (e) {
            return !0
        }
    }
    const ee = 1e3
      , te = 36e5
      , ne = 24 * te;
    function re(e) {
        return e * ne
    }
    class ie {
        constructor(e) {
            if (this.capacity = e,
            this._start = 0,
            this._end = 0,
            this._isFull = !1,
            e <= 0)
                throw new Error("Invalid capacity " + e);
            this._buffer = new Array(e)
        }
        get size() {
            return this._isFull ? this._buffer.length : (this._end - this._start + this._buffer.length) % this._buffer.length
        }
        get isEmpty() {
            return 0 === this.size
        }
        get isFull() {
            return this._isFull
        }
        get head() {
            return this.isEmpty ? null : this._buffer[this._start]
        }
        get tail() {
            return this.isEmpty ? null : this._buffer[0 === this._end ? this.capacity - 1 : this._end - 1]
        }
        enqueue(e) {
            let t = null;
            return this.isFull && (t = this._buffer[this._start],
            this._startInc()),
            this._buffer[this._end] = e,
            this._endInc(),
            this._start === this._end && (this._isFull = !0),
            t
        }
        dequeue() {
            if (this.isEmpty)
                return null;
            const e = this._buffer[this._start];
            return this._buffer[this._start] = null,
            this._startInc(),
            this._isFull = !1,
            e
        }
        delete(e) {
            const t = this._buffer.indexOf(e);
            if (t >= 0) {
                if (t < this._end) {
                    for (let e = t; e < this._end - 1; e++)
                        this._buffer[e] = this._buffer[e + 1];
                    this._buffer[--this._end] = null
                } else {
                    for (let e = this._start; e < t; e++)
                        this._buffer[e + 1] = this._buffer[e];
                    this._buffer[this._start] = null,
                    this._startInc()
                }
                return this._isFull = !1,
                !0
            }
            return !1
        }
        _startInc() {
            this._start++,
            this._start === this.capacity && (this._start = 0)
        }
        _endInc() {
            this._end++,
            this._end === this.capacity && (this._end = 0)
        }
        clear() {
            this._buffer = new Array(this.capacity),
            this._start = this._end = 0,
            this._isFull = !1
        }
        toArray() {
            let e;
            if (this.isEmpty)
                e = [];
            else if (this._start < this._end)
                e = this._buffer.slice(this._start, this._end);
            else {
                e = new Array(this.size);
                let t = 0;
                for (let n = this._start; n < this.capacity; ++n,
                ++t)
                    e[t] = this._buffer[n];
                for (let n = 0; n < this._end; ++n,
                ++t)
                    e[t] = this._buffer[n]
            }
            return e
        }
    }
    const se = "common"
      , oe = 5 * ee;
    const ae = (e,t="")=>{
        const n = e=>{
            try {
                return JSON.stringify(e)
            } catch (t) {
                return String(e)
            }
        }
          , r = e instanceof ie ? e.toArray() : e;
        return [["Level", "Logger", "Timestamp", "Message"].join("\t"), ...r.map((e=>{
            const r = [e.level, t + e.loggerName, e.timestamp, e.message];
            return e.data && r.push(n(e.data)),
            e.exception && r.push(n(e.exception)),
            r.join("\t")
        }
        ))].join("\n")
    }
    ;
    function ce(e) {
        return e === se ? "common." : ""
    }
    class ue {
        constructor(e) {
            var t;
            this._historyArgs = e,
            this._historyBuffers = {},
            this.isHistoryEnabled = ()=>{
                var e;
                return Boolean("prod" !== Q() || (null === (e = this._historyArgs.enabledInProd) || void 0 === e ? void 0 : e.get()))
            }
            ,
            this.isAdvancedHistoryEnabled = ()=>{
                var e, t;
                return Boolean("prod" !== Q() || (null === (e = this._historyArgs.enabledInProd) || void 0 === e ? void 0 : e.get()) && (null === (t = this._historyArgs.enableAdvancedInProd) || void 0 === t ? void 0 : t.get()))
            }
            ,
            this.getLogs = ()=>Object.entries(this._historyBuffers).map((([e,t])=>t.toArray().map((t=>({
                ...t,
                loggerName: ce(e) + t.loggerName
            }))))).flat(),
            this.downloadLogs = async()=>{
                var e, t;
                if (!Z())
                    if (this.isHistoryEnabled()) {
                        if (!self.confirm('Click on "OK," will attempt to download a file with the information needed to investigate the issue you are experiencing. This archive may include domains you have recently visited and the text from the document you are typing in. To minimize the amount of sensitive information you share with us, we recommend that you (1) open a new browser window, (2) visit only the website where you can reproduce this issue, and (3) type in a document that includes only text you are comfortable sharing. For more details, see our Privacy Policy (https://www.grammarly.com/privacy-policy).'))
                            return;
                        const n = Object.entries(this._historyBuffers).map((([e,t])=>ae(t, ce(e))))
                          , r = await (null === (t = (e = this._historyArgs).getBGLogs) || void 0 === t ? void 0 : t.call(e));
                        if (r && n.push(ae(r, "bg.")),
                        self.document) {
                            const e = self.document.createElement("a");
                            e.href = "data:application/octet-stream," + encodeURIComponent(n.join("\n")),
                            e.target = "_blank",
                            e.download = "grammarly-logs.tsv",
                            e.click()
                        }
                    } else
                        alert("Logging is not enabled")
            }
            ,
            this._initCliCommands(),
            this._historyBuffers.common = new ie(null !== (t = this._historyArgs.maxEventsToStore) && void 0 !== t ? t : 1e3)
        }
        _getBuffer(e) {
            return e ? (this._historyBuffers[e.name] || (this._historyBuffers[e.name] = new ie(e.settings.limit)),
            this._historyBuffers[e.name]) : this._historyBuffers.common
        }
        pushLog(e, t) {
            this._getBuffer(e).enqueue(t)
        }
        _initCliCommands() {
            self.GRDownloadReport = async()=>{
                await this.downloadLogs()
            }
            ,
            self.GRIsDebugEnabled = ()=>this.isHistoryEnabled(),
            self.GREnableHistoryLogger = (e=60)=>{
                var t, n;
                null === (n = (t = this._historyArgs).enableHistoryLoggerUntil) || void 0 === n || n.call(t, Date.now() + 60 * e * 1e3)
            }
            ,
            self.GRDisableHistoryLogger = ()=>{
                var e, t;
                null === (t = (e = this._historyArgs).disableHistoryLogger) || void 0 === t || t.call(e)
            }
        }
        static create(e) {
            return e.isBG ? new le(e) : new de(e)
        }
    }
    class le extends ue {
        constructor(e) {
            var t;
            super(e),
            this._historyArgs = e,
            this._setToBgSessionStorage = function(e, t) {
                let n;
                return (...r)=>{
                    null !== n && clearTimeout(n),
                    n = setTimeout((()=>{
                        n = null,
                        e(r)
                    }
                    ), t)
                }
            }((()=>{
                var e;
                null === (e = this._historyArgs.bgSessionStorage) || void 0 === e || e.set({
                    bgHistoryDefaultLogs: this._getBuffer(null).toArray().slice(-100)
                })
            }
            ), oe),
            null === (t = this._historyArgs.bgSessionStorage) || void 0 === t || t.get("bgHistoryDefaultLogs").then((e=>{
                const t = e.bgHistoryDefaultLogs;
                if (!t)
                    return;
                const n = this._getBuffer(null)
                  , r = n.toArray();
                n.clear(),
                t.forEach((e=>n.enqueue(e))),
                r.forEach((e=>n.enqueue(e))),
                this._setToBgSessionStorage()
            }
            ))
        }
        pushLog(e, t) {
            super.pushLog(e, t),
            this._setToBgSessionStorage()
        }
    }
    class de extends ue {
    }
    var he;
    !function(e) {
        e.TRACE = "TRACE",
        e.DEBUG = "DEBUG",
        e.INFO = "INFO",
        e.WARN = "WARN",
        e.ERROR = "ERROR",
        e.FATAL = "FATAL"
    }(he || (he = {}));
    const pe = {
        [he.TRACE]: 1,
        [he.DEBUG]: 2,
        [he.INFO]: 3,
        [he.WARN]: 4,
        [he.ERROR]: 5,
        [he.FATAL]: 6
    };
    function fe(e) {
        return pe[e] || 0
    }
    class ge {
        constructor(e) {
            this.name = e,
            this._isError = e=>{
                const t = e;
                return t && (void 0 !== t.message && void 0 !== t.name || void 0 !== t.stack)
            }
        }
        trace(e, t, n) {
            this._logMessage(he.TRACE, e, t, n)
        }
        debug(e, t, n) {
            this._logMessage(he.DEBUG, e, t, n)
        }
        info(e, t, n) {
            this._logMessage(he.INFO, e, t, n)
        }
        warn(e, t, n) {
            this._logMessage(he.WARN, e, t, n)
        }
        error(e, t, n) {
            this._logMessage(he.ERROR, e, t, n)
        }
        fatal(e, t, n) {
            this._logMessage(he.FATAL, e, t, n)
        }
        _logMessage(e, t, n, r) {
            const i = {
                level: e,
                loggerName: this.name,
                message: t,
                timestamp: (new Date).toISOString()
            };
            n && (this._isError(n) ? i.exception = n : i.data = n),
            i.data = i.data || r,
            this.handleEvent(i)
        }
    }
    class me {
        constructor(e, t) {
            this.name = e,
            this._createLogger = t
        }
        trace(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)),
            this._logger.trace(e, t, n)
        }
        debug(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)),
            this._logger.debug(e, t, n)
        }
        info(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)),
            this._logger.info(e, t, n)
        }
        warn(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)),
            this._logger.warn(e, t, n)
        }
        error(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)),
            this._logger.error(e, t, n)
        }
        fatal(e, t, n) {
            void 0 === this._logger && (this._logger = this._createLogger(this.name)),
            this._logger.fatal(e, t, n)
        }
        isHistoryEnabled() {
            return !1
        }
        isAdvancedHistoryEnabled() {
            return !1
        }
    }
    class be extends ge {
        constructor(e, t, n, r) {
            super(e),
            this._config = t,
            this._historyLogsService = n,
            this._historyBufferSettings = r,
            this._buffer = this._historyBufferSettings ? {
                name: this.name,
                settings: this._historyBufferSettings
            } : null
        }
        handleEvent(e) {
            this._config.filterFn(e) && this._config.writer.write(e),
            this._historyLogsService.isHistoryEnabled() && this._historyLogsService.pushLog(this._buffer, e)
        }
        isHistoryEnabled() {
            return this._historyLogsService.isHistoryEnabled()
        }
        isAdvancedHistoryEnabled() {
            return this._historyLogsService.isAdvancedHistoryEnabled()
        }
    }
    function _e(e) {
        return new Proxy({},{
            get(t, n) {
                const r = e[n];
                return r && "function" == typeof r ? r.bind(e) : void 0
            }
        })
    }
    class ve {
        constructor() {
            this._writeFunc = ve._commonWriteFunc
        }
        write(e) {
            try {
                const t = [`grm ${e.level} 【${e.loggerName}】░░ ${e.message}`];
                e.data && t.push(e.data),
                e.exception && t.push(e.exception),
                this._writeFunc[e.level].apply(null, t)
            } catch (e) {}
        }
    }
    ve._commonWriteFunc = function() {
        const {log: e, info: t, warn: n, error: r} = _e(console);
        return {
            [he.TRACE]: e,
            [he.DEBUG]: e,
            [he.INFO]: t,
            [he.WARN]: n,
            [he.ERROR]: r,
            [he.FATAL]: r
        }
    }();
    var ye = function(e, t) {
        return ye = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        ,
        ye(e, t)
    };
    function we(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        ye(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    Object.create;
    Object.create;
    function xe(e) {
        return "function" == typeof e
    }
    var Ee = !1
      , Se = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
            e && (new Error).stack;
            Ee = e
        },
        get useDeprecatedSynchronousErrorHandling() {
            return Ee
        }
    };
    function Ie(e) {
        setTimeout((function() {
            throw e
        }
        ), 0)
    }
    var Ae = {
        closed: !0,
        next: function(e) {},
        error: function(e) {
            if (Se.useDeprecatedSynchronousErrorHandling)
                throw e;
            Ie(e)
        },
        complete: function() {}
    }
      , Te = function() {
        return Array.isArray || function(e) {
            return e && "number" == typeof e.length
        }
    }();
    function Oe(e) {
        return null !== e && "object" == typeof e
    }
    var Re = function() {
        function e(e) {
            return Error.call(this),
            this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function(e, t) {
                return t + 1 + ") " + e.toString()
            }
            )).join("\n  ") : "",
            this.name = "UnsubscriptionError",
            this.errors = e,
            this
        }
        return e.prototype = Object.create(Error.prototype),
        e
    }()
      , Fe = function() {
        function e(e) {
            this.closed = !1,
            this._parentOrParents = null,
            this._subscriptions = null,
            e && (this._ctorUnsubscribe = !0,
            this._unsubscribe = e)
        }
        return e.prototype.unsubscribe = function() {
            var t;
            if (!this.closed) {
                var n = this
                  , r = n._parentOrParents
                  , i = n._ctorUnsubscribe
                  , s = n._unsubscribe
                  , o = n._subscriptions;
                if (this.closed = !0,
                this._parentOrParents = null,
                this._subscriptions = null,
                r instanceof e)
                    r.remove(this);
                else if (null !== r)
                    for (var a = 0; a < r.length; ++a) {
                        r[a].remove(this)
                    }
                if (xe(s)) {
                    i && (this._unsubscribe = void 0);
                    try {
                        s.call(this)
                    } catch (e) {
                        t = e instanceof Re ? ke(e.errors) : [e]
                    }
                }
                if (Te(o)) {
                    a = -1;
                    for (var c = o.length; ++a < c; ) {
                        var u = o[a];
                        if (Oe(u))
                            try {
                                u.unsubscribe()
                            } catch (e) {
                                t = t || [],
                                e instanceof Re ? t = t.concat(ke(e.errors)) : t.push(e)
                            }
                    }
                }
                if (t)
                    throw new Re(t)
            }
        }
        ,
        e.prototype.add = function(t) {
            var n = t;
            if (!t)
                return e.EMPTY;
            switch (typeof t) {
            case "function":
                n = new e(t);
            case "object":
                if (n === this || n.closed || "function" != typeof n.unsubscribe)
                    return n;
                if (this.closed)
                    return n.unsubscribe(),
                    n;
                if (!(n instanceof e)) {
                    var r = n;
                    (n = new e)._subscriptions = [r]
                }
                break;
            default:
                throw new Error("unrecognized teardown " + t + " added to Subscription.")
            }
            var i = n._parentOrParents;
            if (null === i)
                n._parentOrParents = this;
            else if (i instanceof e) {
                if (i === this)
                    return n;
                n._parentOrParents = [i, this]
            } else {
                if (-1 !== i.indexOf(this))
                    return n;
                i.push(this)
            }
            var s = this._subscriptions;
            return null === s ? this._subscriptions = [n] : s.push(n),
            n
        }
        ,
        e.prototype.remove = function(e) {
            var t = this._subscriptions;
            if (t) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1)
            }
        }
        ,
        e.EMPTY = function(e) {
            return e.closed = !0,
            e
        }(new e),
        e
    }();
    function ke(e) {
        return e.reduce((function(e, t) {
            return e.concat(t instanceof Re ? t.errors : t)
        }
        ), [])
    }
    var Ce = function() {
        return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
    }()
      , Me = function(e) {
        function t(n, r, i) {
            var s = e.call(this) || this;
            switch (s.syncErrorValue = null,
            s.syncErrorThrown = !1,
            s.syncErrorThrowable = !1,
            s.isStopped = !1,
            arguments.length) {
            case 0:
                s.destination = Ae;
                break;
            case 1:
                if (!n) {
                    s.destination = Ae;
                    break
                }
                if ("object" == typeof n) {
                    n instanceof t ? (s.syncErrorThrowable = n.syncErrorThrowable,
                    s.destination = n,
                    n.add(s)) : (s.syncErrorThrowable = !0,
                    s.destination = new Pe(s,n));
                    break
                }
            default:
                s.syncErrorThrowable = !0,
                s.destination = new Pe(s,n,r,i)
            }
            return s
        }
        return we(t, e),
        t.prototype[Ce] = function() {
            return this
        }
        ,
        t.create = function(e, n, r) {
            var i = new t(e,n,r);
            return i.syncErrorThrowable = !1,
            i
        }
        ,
        t.prototype.next = function(e) {
            this.isStopped || this._next(e)
        }
        ,
        t.prototype.error = function(e) {
            this.isStopped || (this.isStopped = !0,
            this._error(e))
        }
        ,
        t.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0,
            this._complete())
        }
        ,
        t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0,
            e.prototype.unsubscribe.call(this))
        }
        ,
        t.prototype._next = function(e) {
            this.destination.next(e)
        }
        ,
        t.prototype._error = function(e) {
            this.destination.error(e),
            this.unsubscribe()
        }
        ,
        t.prototype._complete = function() {
            this.destination.complete(),
            this.unsubscribe()
        }
        ,
        t.prototype._unsubscribeAndRecycle = function() {
            var e = this._parentOrParents;
            return this._parentOrParents = null,
            this.unsubscribe(),
            this.closed = !1,
            this.isStopped = !1,
            this._parentOrParents = e,
            this
        }
        ,
        t
    }(Fe)
      , Pe = function(e) {
        function t(t, n, r, i) {
            var s, o = e.call(this) || this;
            o._parentSubscriber = t;
            var a = o;
            return xe(n) ? s = n : n && (s = n.next,
            r = n.error,
            i = n.complete,
            n !== Ae && (xe((a = Object.create(n)).unsubscribe) && o.add(a.unsubscribe.bind(a)),
            a.unsubscribe = o.unsubscribe.bind(o))),
            o._context = a,
            o._next = s,
            o._error = r,
            o._complete = i,
            o
        }
        return we(t, e),
        t.prototype.next = function(e) {
            if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                Se.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
            }
        }
        ,
        t.prototype.error = function(e) {
            if (!this.isStopped) {
                var t = this._parentSubscriber
                  , n = Se.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                    n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e),
                    this.unsubscribe()) : (this.__tryOrUnsub(this._error, e),
                    this.unsubscribe());
                else if (t.syncErrorThrowable)
                    n ? (t.syncErrorValue = e,
                    t.syncErrorThrown = !0) : Ie(e),
                    this.unsubscribe();
                else {
                    if (this.unsubscribe(),
                    n)
                        throw e;
                    Ie(e)
                }
            }
        }
        ,
        t.prototype.complete = function() {
            var e = this;
            if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._complete) {
                    var n = function() {
                        return e._complete.call(e._context)
                    };
                    Se.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n),
                    this.unsubscribe()) : (this.__tryOrUnsub(n),
                    this.unsubscribe())
                } else
                    this.unsubscribe()
            }
        }
        ,
        t.prototype.__tryOrUnsub = function(e, t) {
            try {
                e.call(this._context, t)
            } catch (e) {
                if (this.unsubscribe(),
                Se.useDeprecatedSynchronousErrorHandling)
                    throw e;
                Ie(e)
            }
        }
        ,
        t.prototype.__tryOrSetError = function(e, t, n) {
            if (!Se.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
            try {
                t.call(this._context, n)
            } catch (t) {
                return Se.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t,
                e.syncErrorThrown = !0,
                !0) : (Ie(t),
                !0)
            }
            return !1
        }
        ,
        t.prototype._unsubscribe = function() {
            var e = this._parentSubscriber;
            this._context = null,
            this._parentSubscriber = null,
            e.unsubscribe()
        }
        ,
        t
    }(Me);
    var Ne = function() {
        return "function" == typeof Symbol && Symbol.observable || "@@observable"
    }();
    function Le(e) {
        return e
    }
    function Ue(e) {
        return 0 === e.length ? Le : 1 === e.length ? e[0] : function(t) {
            return e.reduce((function(e, t) {
                return t(e)
            }
            ), t)
        }
    }
    var je = function() {
        function e(e) {
            this._isScalar = !1,
            e && (this._subscribe = e)
        }
        return e.prototype.lift = function(t) {
            var n = new e;
            return n.source = this,
            n.operator = t,
            n
        }
        ,
        e.prototype.subscribe = function(e, t, n) {
            var r = this.operator
              , i = function(e, t, n) {
                if (e) {
                    if (e instanceof Me)
                        return e;
                    if (e[Ce])
                        return e[Ce]()
                }
                return e || t || n ? new Me(e,t,n) : new Me(Ae)
            }(e, t, n);
            if (r ? i.add(r.call(i, this.source)) : i.add(this.source || Se.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)),
            Se.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1,
            i.syncErrorThrown))
                throw i.syncErrorValue;
            return i
        }
        ,
        e.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e)
            } catch (t) {
                Se.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0,
                e.syncErrorValue = t),
                !function(e) {
                    for (; e; ) {
                        var t = e
                          , n = t.closed
                          , r = t.destination
                          , i = t.isStopped;
                        if (n || i)
                            return !1;
                        e = r && r instanceof Me ? r : null
                    }
                    return !0
                }(e) ? console.warn(t) : e.error(t)
            }
        }
        ,
        e.prototype.forEach = function(e, t) {
            var n = this;
            return new (t = De(t))((function(t, r) {
                var i;
                i = n.subscribe((function(t) {
                    try {
                        e(t)
                    } catch (e) {
                        r(e),
                        i && i.unsubscribe()
                    }
                }
                ), r, t)
            }
            ))
        }
        ,
        e.prototype._subscribe = function(e) {
            var t = this.source;
            return t && t.subscribe(e)
        }
        ,
        e.prototype[Ne] = function() {
            return this
        }
        ,
        e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return 0 === e.length ? this : Ue(e)(this)
        }
        ,
        e.prototype.toPromise = function(e) {
            var t = this;
            return new (e = De(e))((function(e, n) {
                var r;
                t.subscribe((function(e) {
                    return r = e
                }
                ), (function(e) {
                    return n(e)
                }
                ), (function() {
                    return e(r)
                }
                ))
            }
            ))
        }
        ,
        e.create = function(t) {
            return new e(t)
        }
        ,
        e
    }();
    function De(e) {
        if (e || (e = Se.Promise || Promise),
        !e)
            throw new Error("no Promise impl found");
        return e
    }
    var Be = function() {
        function e() {
            return Error.call(this),
            this.message = "object unsubscribed",
            this.name = "ObjectUnsubscribedError",
            this
        }
        return e.prototype = Object.create(Error.prototype),
        e
    }()
      , $e = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.subject = t,
            r.subscriber = n,
            r.closed = !1,
            r
        }
        return we(t, e),
        t.prototype.unsubscribe = function() {
            if (!this.closed) {
                this.closed = !0;
                var e = this.subject
                  , t = e.observers;
                if (this.subject = null,
                t && 0 !== t.length && !e.isStopped && !e.closed) {
                    var n = t.indexOf(this.subscriber);
                    -1 !== n && t.splice(n, 1)
                }
            }
        }
        ,
        t
    }(Fe)
      , We = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.destination = t,
            n
        }
        return we(t, e),
        t
    }(Me)
      , Ve = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.observers = [],
            t.closed = !1,
            t.isStopped = !1,
            t.hasError = !1,
            t.thrownError = null,
            t
        }
        return we(t, e),
        t.prototype[Ce] = function() {
            return new We(this)
        }
        ,
        t.prototype.lift = function(e) {
            var t = new He(this,this);
            return t.operator = e,
            t
        }
        ,
        t.prototype.next = function(e) {
            if (this.closed)
                throw new Be;
            if (!this.isStopped)
                for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++)
                    r[i].next(e)
        }
        ,
        t.prototype.error = function(e) {
            if (this.closed)
                throw new Be;
            this.hasError = !0,
            this.thrownError = e,
            this.isStopped = !0;
            for (var t = this.observers, n = t.length, r = t.slice(), i = 0; i < n; i++)
                r[i].error(e);
            this.observers.length = 0
        }
        ,
        t.prototype.complete = function() {
            if (this.closed)
                throw new Be;
            this.isStopped = !0;
            for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++)
                n[r].complete();
            this.observers.length = 0
        }
        ,
        t.prototype.unsubscribe = function() {
            this.isStopped = !0,
            this.closed = !0,
            this.observers = null
        }
        ,
        t.prototype._trySubscribe = function(t) {
            if (this.closed)
                throw new Be;
            return e.prototype._trySubscribe.call(this, t)
        }
        ,
        t.prototype._subscribe = function(e) {
            if (this.closed)
                throw new Be;
            return this.hasError ? (e.error(this.thrownError),
            Fe.EMPTY) : this.isStopped ? (e.complete(),
            Fe.EMPTY) : (this.observers.push(e),
            new $e(this,e))
        }
        ,
        t.prototype.asObservable = function() {
            var e = new je;
            return e.source = this,
            e
        }
        ,
        t.create = function(e, t) {
            return new He(e,t)
        }
        ,
        t
    }(je)
      , He = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.destination = t,
            r.source = n,
            r
        }
        return we(t, e),
        t.prototype.next = function(e) {
            var t = this.destination;
            t && t.next && t.next(e)
        }
        ,
        t.prototype.error = function(e) {
            var t = this.destination;
            t && t.error && this.destination.error(e)
        }
        ,
        t.prototype.complete = function() {
            var e = this.destination;
            e && e.complete && this.destination.complete()
        }
        ,
        t.prototype._subscribe = function(e) {
            return this.source ? this.source.subscribe(e) : Fe.EMPTY
        }
        ,
        t
    }(Ve)
      , Ge = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n._value = t,
            n
        }
        return we(t, e),
        Object.defineProperty(t.prototype, "value", {
            get: function() {
                return this.getValue()
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype._subscribe = function(t) {
            var n = e.prototype._subscribe.call(this, t);
            return n && !n.closed && t.next(this._value),
            n
        }
        ,
        t.prototype.getValue = function() {
            if (this.hasError)
                throw this.thrownError;
            if (this.closed)
                throw new Be;
            return this._value
        }
        ,
        t.prototype.next = function(t) {
            e.prototype.next.call(this, this._value = t)
        }
        ,
        t
    }(Ve);
    function qe() {}
    var ze = function() {
        function e(e, t, n) {
            this.nextOrObserver = e,
            this.error = t,
            this.complete = n
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Ke(e,this.nextOrObserver,this.error,this.complete))
        }
        ,
        e
    }()
      , Ke = function(e) {
        function t(t, n, r, i) {
            var s = e.call(this, t) || this;
            return s._tapNext = qe,
            s._tapError = qe,
            s._tapComplete = qe,
            s._tapError = r || qe,
            s._tapComplete = i || qe,
            xe(n) ? (s._context = s,
            s._tapNext = n) : n && (s._context = n,
            s._tapNext = n.next || qe,
            s._tapError = n.error || qe,
            s._tapComplete = n.complete || qe),
            s
        }
        return we(t, e),
        t.prototype._next = function(e) {
            try {
                this._tapNext.call(this._context, e)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(e)
        }
        ,
        t.prototype._error = function(e) {
            try {
                this._tapError.call(this._context, e)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.error(e)
        }
        ,
        t.prototype._complete = function() {
            try {
                this._tapComplete.call(this._context)
            } catch (e) {
                return void this.destination.error(e)
            }
            return this.destination.complete()
        }
        ,
        t
    }(Me);
    function Je() {
        return function(e) {
            return e.lift(new Ye(e))
        }
    }
    var Ye = function() {
        function e(e) {
            this.connectable = e
        }
        return e.prototype.call = function(e, t) {
            var n = this.connectable;
            n._refCount++;
            var r = new Xe(e,n)
              , i = t.subscribe(r);
            return r.closed || (r.connection = n.connect()),
            i
        }
        ,
        e
    }()
      , Xe = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.connectable = n,
            r
        }
        return we(t, e),
        t.prototype._unsubscribe = function() {
            var e = this.connectable;
            if (e) {
                this.connectable = null;
                var t = e._refCount;
                if (t <= 0)
                    this.connection = null;
                else if (e._refCount = t - 1,
                t > 1)
                    this.connection = null;
                else {
                    var n = this.connection
                      , r = e._connection;
                    this.connection = null,
                    !r || n && r !== n || r.unsubscribe()
                }
            } else
                this.connection = null
        }
        ,
        t
    }(Me)
      , Qe = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.source = t,
            r.subjectFactory = n,
            r._refCount = 0,
            r._isComplete = !1,
            r
        }
        return we(t, e),
        t.prototype._subscribe = function(e) {
            return this.getSubject().subscribe(e)
        }
        ,
        t.prototype.getSubject = function() {
            var e = this._subject;
            return e && !e.isStopped || (this._subject = this.subjectFactory()),
            this._subject
        }
        ,
        t.prototype.connect = function() {
            var e = this._connection;
            return e || (this._isComplete = !1,
            (e = this._connection = new Fe).add(this.source.subscribe(new et(this.getSubject(),this))),
            e.closed && (this._connection = null,
            e = Fe.EMPTY)),
            e
        }
        ,
        t.prototype.refCount = function() {
            return Je()(this)
        }
        ,
        t
    }(je)
      , Ze = function() {
        var e = Qe.prototype;
        return {
            operator: {
                value: null
            },
            _refCount: {
                value: 0,
                writable: !0
            },
            _subject: {
                value: null,
                writable: !0
            },
            _connection: {
                value: null,
                writable: !0
            },
            _subscribe: {
                value: e._subscribe
            },
            _isComplete: {
                value: e._isComplete,
                writable: !0
            },
            getSubject: {
                value: e.getSubject
            },
            connect: {
                value: e.connect
            },
            refCount: {
                value: e.refCount
            }
        }
    }()
      , et = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.connectable = n,
            r
        }
        return we(t, e),
        t.prototype._error = function(t) {
            this._unsubscribe(),
            e.prototype._error.call(this, t)
        }
        ,
        t.prototype._complete = function() {
            this.connectable._isComplete = !0,
            this._unsubscribe(),
            e.prototype._complete.call(this)
        }
        ,
        t.prototype._unsubscribe = function() {
            var e = this.connectable;
            if (e) {
                this.connectable = null;
                var t = e._connection;
                e._refCount = 0,
                e._subject = null,
                e._connection = null,
                t && t.unsubscribe()
            }
        }
        ,
        t
    }(We);
    var tt = function() {
        function e(e, t) {
            this.subjectFactory = e,
            this.selector = t
        }
        return e.prototype.call = function(e, t) {
            var n = this.selector
              , r = this.subjectFactory()
              , i = n(r).subscribe(e);
            return i.add(t.subscribe(r)),
            i
        }
        ,
        e
    }();
    function nt() {
        return new Ve
    }
    function rt() {
        return function(e) {
            return Je()((t = nt,
            function(e) {
                var r;
                if (r = "function" == typeof t ? t : function() {
                    return t
                }
                ,
                "function" == typeof n)
                    return e.lift(new tt(r,n));
                var i = Object.create(e, Ze);
                return i.source = e,
                i.subjectFactory = r,
                i
            }
            )(e));
            var t, n
        }
    }
    function it(e, t) {
        return function(n) {
            return n.lift(new ct(e,t))
        }
    }
    var st, ot, at, ct = function() {
        function e(e, t) {
            this.predicate = e,
            this.thisArg = t
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new ut(e,this.predicate,this.thisArg))
        }
        ,
        e
    }(), ut = function(e) {
        function t(t, n, r) {
            var i = e.call(this, t) || this;
            return i.predicate = n,
            i.thisArg = r,
            i.count = 0,
            i
        }
        return we(t, e),
        t.prototype._next = function(e) {
            var t;
            try {
                t = this.predicate.call(this.thisArg, e, this.count++)
            } catch (e) {
                return void this.destination.error(e)
            }
            t && this.destination.next(e)
        }
        ,
        t
    }(Me);
    function lt(e, t) {
        return function(n, r) {
            return t(n(e(r)), r)
        }
    }
    function dt(e) {
        for (var t, n = []; !(t = e.next()).done; )
            n.push(t.value);
        return n
    }
    function ht(e, t) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    function pt(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
    !function(e) {
        e.optic = function(e, t) {
            return {
                get: e,
                set: t,
                modify: lt(e, t)
            }
        }
    }(st || (st = {})),
    function(e) {
        e.create = function e(t, n) {
            return {
                get: t,
                set: n,
                modify: lt(t, n),
                compose: function(r) {
                    return e((function(e) {
                        var n = t(e);
                        return void 0 !== n ? r.get(n) : void 0
                    }
                    ), (function(e, i) {
                        var s = t(i);
                        return void 0 !== s ? n(r.set(e, s), i) : i
                    }
                    ))
                }
            }
        }
    }(ot || (ot = {})),
    function(e) {
        function t(e, n) {
            return {
                get: e,
                set: n,
                modify: lt(e, n),
                compose: function(r) {
                    return t((function(t) {
                        return r.get(e(t))
                    }
                    ), (function(t, i) {
                        return n(r.set(t, e(i)), i)
                    }
                    ))
                }
            }
        }
        e.create = t,
        e.compose = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            if (0 === e.length)
                throw new TypeError("Can not compose zero lenses. You probably want `Lens.identity`.");
            if (1 === e.length)
                return e[0];
            var n = e[0];
            return e.slice(1).forEach((function(e) {
                n = n.compose(e)
            }
            )),
            n
        }
        ;
        var n = t((function(e) {
            return e
        }
        ), (function(e, t) {
            return e
        }
        ));
        e.identity = function() {
            return n
        }
        ;
        var r = ot.create((function(e) {}
        ), (function(e, t) {
            return t
        }
        ));
        e.nothing = function() {
            return r
        }
    }(at || (at = {}));
    var ft, gt, mt, bt, _t = function() {
        var e = Object.prototype.toString;
        return "[object Arguments]" === e.call(arguments) ? function(t) {
            return "[object Arguments]" === e.call(t)
        }
        : function(e) {
            return ht("callee", e)
        }
    }(), vt = (ft = !{
        toString: null
    }.propertyIsEnumerable("toString"),
    gt = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
    mt = function() {
        return arguments.propertyIsEnumerable("length")
    }(),
    bt = function(e, t) {
        for (var n = 0; n < e.length; ) {
            if (e[n] === t)
                return !0;
            n += 1
        }
        return !1
    }
    ,
    "function" != typeof Object.keys || mt ? function(e) {
        if (Object(e) !== e)
            return [];
        var t, n, r = [], i = mt && _t(e);
        for (t in e)
            !ht(t, e) || i && "length" === t || (r[r.length] = t);
        if (ft)
            for (n = gt.length - 1; n >= 0; )
                ht(t = gt[n], e) && !bt(r, t) && (r[r.length] = t),
                n -= 1;
        return r
    }
    : function(e) {
        return Object(e) !== e ? [] : Object.keys(e)
    }
    );
    function yt(e) {
        return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
    }
    function wt(e, t, n, r) {
        if (void 0 === n && (n = []),
        void 0 === r && (r = []),
        pt(e, t))
            return !0;
        if (yt(e) !== yt(t))
            return !1;
        if (null == e || null == t)
            return !1;
        if ("function" == typeof e.equals || "function" == typeof t.equals)
            return "function" == typeof e.equals && e.equals(t) && "function" == typeof t.equals && t.equals(e);
        switch (yt(e)) {
        case "Arguments":
        case "Array":
        case "Object":
            if ("function" == typeof e.constructor && "Promise" === (i = e.constructor,
            null == (s = String(i).match(/^function (\w*)/)) ? "" : s[1]))
                return e === t;
            break;
        case "Boolean":
        case "Number":
        case "String":
            if (typeof e != typeof t || !pt(e.valueOf(), t.valueOf()))
                return !1;
            break;
        case "Date":
            if (!pt(e.valueOf(), t.valueOf()))
                return !1;
            break;
        case "Error":
            return e.name === t.name && e.message === t.message;
        case "RegExp":
            if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode)
                return !1;
            break;
        case "Map":
        case "Set":
            if (!wt(dt(e.entries()), dt(t.entries()), n, r))
                return !1;
            break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
            break;
        default:
            return !1
        }
        var i, s, o = vt(e);
        if (o.length !== vt(t).length)
            return !1;
        for (var a = n.length - 1; a >= 0; ) {
            if (n[a] === e)
                return r[a] === t;
            a -= 1
        }
        for (n.push(e),
        r.push(t),
        a = o.length - 1; a >= 0; ) {
            var c = o[a];
            if (!ht(c, t) || !wt(t[c], e[c], n, r))
                return !1;
            a -= 1
        }
        return n.pop(),
        r.pop(),
        !0
    }
    var xt = void 0 !== n(27061) && !1;
    function Et(e, t, n) {
        if (e in n && wt(t, n[e]))
            return n;
        var r = {};
        for (var i in n)
            r[i] = n[i];
        return r[e] = t,
        r
    }
    function St(e) {
        return function(t, n) {
            return function(e, t) {
                return wt(e, t) ? t : e
            }(e(t, n), n)
        }
    }
    var It = new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "return\\s", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*"));
    new RegExp(["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "(\\$_\\$wf\\(\\d+\\);)?", "return\\s", "(\\$_\\$w\\(\\d+, \\d+\\),\\s)?", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*"));
    function At(e) {
        return function(e) {
            var t = It
              , n = e.match(t);
            if (n && n[2])
                return n[2].split(".");
            throw new TypeError('Expected a property expression, got "' + e + '".\n\n      A property expression should be a referentially transparent (no side-effects),\n      single-expression "getter" function.\n\n      Correct example: "function (x) { return x.some }" or "x => x.some".\n      Incorrect example: "function (x) { var y = x.some; return y }" or "({some}) => some"')
        }(e.toString())
    }
    function Tt(e) {
        return void 0 === e ? function(e) {
            return at.create((function(t) {
                return t[e]
            }
            ), (function(t, n) {
                return Et(e, t, n)
            }
            ))
        }
        : at.create((function(t) {
            return t[e]
        }
        ), (function(t, n) {
            return Et(e, t, n)
        }
        ))
    }
    var Ot = 0;
    function Rt(e) {
        if (Ot < 10) {
            Ot++;
            var t = "x." + e.join(".")
              , n = "'" + e.join("', '") + "'";
            !function(e) {
                "undefined" != typeof console && "function" == typeof console.error && console.error("[Focal]: " + e);
                try {
                    throw new Error(e)
                } catch (e) {}
            }("The property expression overload of Atom.lens and Lens.prop are deprecated and will be removed in next versions of Focal. Please use the key name overload for Atom.lens and Lens.key instead. You can convert your code by changing the calls:\n  a.lens(x => " + t + ") to a.lens(" + n + "),\n  Lens.prop((x: T) => " + t + ") to Lens.key<T>()(" + n + ").")
        }
    }
    function Ft(e) {
        return e && "function" == typeof e.schedule
    }
    at.key = Tt,
    at.prop = function(e) {
        var t = At(e);
        return xt && Rt(t),
        at.compose.apply(at, t.map(Tt()))
    }
    ,
    at.index = function(e) {
        if (e < 0)
            throw new TypeError(e + " is not a valid array index, expected >= 0");
        return ot.create((function(t) {
            return t[e]
        }
        ), (function(t, n) {
            return n.length <= e ? n.concat(Array(e - n.length), [t]) : wt(t, n[e]) ? n : n.slice(0, e).concat([t], n.slice(e + 1))
        }
        ))
    }
    ,
    at.withDefault = function(e) {
        return at.replace(void 0, e)
    }
    ,
    at.replace = function(e, t) {
        return at.create((function(n) {
            return wt(n, e) ? t : n
        }
        ), St((function(n) {
            return wt(n, t) ? e : n
        }
        )))
    }
    ,
    at.find = function(e) {
        return t = function(t) {
            var n = function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (t(e[n]))
                        return n;
                return -1
            }(t, e);
            return n < 0 ? at.nothing() : at.index(n)
        }
        ,
        at.create((function(e) {
            return t(e).get(e)
        }
        ), (function(e, n) {
            return t(n).set(e, n)
        }
        ));
        var t
    }
    ;
    var kt = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return we(t, e),
        t.prototype.notifyNext = function(e, t, n, r, i) {
            this.destination.next(t)
        }
        ,
        t.prototype.notifyError = function(e, t) {
            this.destination.error(e)
        }
        ,
        t.prototype.notifyComplete = function(e) {
            this.destination.complete()
        }
        ,
        t
    }(Me)
      , Ct = function(e) {
        function t(t, n, r) {
            var i = e.call(this) || this;
            return i.parent = t,
            i.outerValue = n,
            i.outerIndex = r,
            i.index = 0,
            i
        }
        return we(t, e),
        t.prototype._next = function(e) {
            this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
        }
        ,
        t.prototype._error = function(e) {
            this.parent.notifyError(e, this),
            this.unsubscribe()
        }
        ,
        t.prototype._complete = function() {
            this.parent.notifyComplete(this),
            this.unsubscribe()
        }
        ,
        t
    }(Me)
      , Mt = function(e) {
        return function(t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++)
                t.next(e[n]);
            t.complete()
        }
    };
    function Pt() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }
    var Nt = Pt()
      , Lt = function(e) {
        return e && "number" == typeof e.length && "function" != typeof e
    };
    function Ut(e) {
        return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
    }
    var jt = function(e) {
        if (e && "function" == typeof e[Ne])
            return r = e,
            function(e) {
                var t = r[Ne]();
                if ("function" != typeof t.subscribe)
                    throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return t.subscribe(e)
            }
            ;
        if (Lt(e))
            return Mt(e);
        if (Ut(e))
            return n = e,
            function(e) {
                return n.then((function(t) {
                    e.closed || (e.next(t),
                    e.complete())
                }
                ), (function(t) {
                    return e.error(t)
                }
                )).then(null, Ie),
                e
            }
            ;
        if (e && "function" == typeof e[Nt])
            return t = e,
            function(e) {
                for (var n = t[Nt](); ; ) {
                    var r = void 0;
                    try {
                        r = n.next()
                    } catch (t) {
                        return e.error(t),
                        e
                    }
                    if (r.done) {
                        e.complete();
                        break
                    }
                    if (e.next(r.value),
                    e.closed)
                        break
                }
                return "function" == typeof n.return && e.add((function() {
                    n.return && n.return()
                }
                )),
                e
            }
            ;
        var t, n, r, i = Oe(e) ? "an invalid object" : "'" + e + "'";
        throw new TypeError("You provided " + i + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    };
    function Dt(e, t, n, r, i) {
        if (void 0 === i && (i = new Ct(e,n,r)),
        !i.closed)
            return t instanceof je ? t.subscribe(i) : jt(t)(i)
    }
    function Bt(e, t) {
        return new je((function(n) {
            var r = new Fe
              , i = 0;
            return r.add(t.schedule((function() {
                i !== e.length ? (n.next(e[i++]),
                n.closed || r.add(this.schedule())) : n.complete()
            }
            ))),
            r
        }
        ))
    }
    function $t(e, t) {
        return t ? Bt(e, t) : new je(Mt(e))
    }
    var Wt = {};
    function Vt() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var n = void 0
          , r = void 0;
        return Ft(e[e.length - 1]) && (r = e.pop()),
        "function" == typeof e[e.length - 1] && (n = e.pop()),
        1 === e.length && Te(e[0]) && (e = e[0]),
        $t(e, r).lift(new zt(n))
    }
    var Ht, Gt, qt, zt = function() {
        function e(e) {
            this.resultSelector = e
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Kt(e,this.resultSelector))
        }
        ,
        e
    }(), Kt = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.resultSelector = n,
            r.active = 0,
            r.values = [],
            r.observables = [],
            r
        }
        return we(t, e),
        t.prototype._next = function(e) {
            this.values.push(Wt),
            this.observables.push(e)
        }
        ,
        t.prototype._complete = function() {
            var e = this.observables
              , t = e.length;
            if (0 === t)
                this.destination.complete();
            else {
                this.active = t,
                this.toRespond = t;
                for (var n = 0; n < t; n++) {
                    var r = e[n];
                    this.add(Dt(this, r, void 0, n))
                }
            }
        }
        ,
        t.prototype.notifyComplete = function(e) {
            0 == (this.active -= 1) && this.destination.complete()
        }
        ,
        t.prototype.notifyNext = function(e, t, n) {
            var r = this.values
              , i = r[n]
              , s = this.toRespond ? i === Wt ? --this.toRespond : this.toRespond : 0;
            r[n] = t,
            0 === s && (this.resultSelector ? this._tryResultSelector(r) : this.destination.next(r.slice()))
        }
        ,
        t.prototype._tryResultSelector = function(e) {
            var t;
            try {
                t = this.resultSelector.apply(this, e)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(t)
        }
        ,
        t
    }(kt), Jt = function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ,
            e(t, n)
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n),
            t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
            new r)
        }
    }(), Yt = function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , i = 0;
        for (t = 0; t < n; t++)
            for (var s = arguments[t], o = 0, a = s.length; o < a; o++,
            i++)
                r[i] = s[o];
        return r
    }, Xt = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Jt(t, e),
        t.prototype.view = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return void 0 !== e[0] ? "function" == typeof e[0] ? new tn(this,e[0]) : "string" == typeof e[0] ? new tn(this,at.compose.apply(at, e.map(at.key())).get) : new tn(this,(function(t) {
                return e[0].get(t)
            }
            )) : this
        }
        ,
        t
    }(Ge), Qt = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Jt(t, e),
        t.prototype.set = function(e) {
            this.modify((function() {
                return e
            }
            ))
        }
        ,
        t.prototype.lens = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            return new en(this,"function" == typeof e ? at.prop(e) : "string" == typeof e ? at.compose.apply(at, Yt([at.key(e)], t.map((function(e) {
                return at.key(e)
            }
            )))) : e,wt)
        }
        ,
        t
    }(Xt), Zt = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return Jt(t, e),
        t.prototype.get = function() {
            return this.getValue()
        }
        ,
        t.prototype.modify = function(e) {
            var t = this.getValue()
              , n = e(t);
            wt(t, n) || this.next(n)
        }
        ,
        t.prototype.set = function(e) {
            wt(this.getValue(), e) || this.next(e)
        }
        ,
        t
    }(Qt), en = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = wt);
            var i = e.call(this, void 0) || this;
            return i._source = t,
            i._lens = n,
            i._eq = r,
            i._subscription = null,
            i._refCount = 0,
            i
        }
        return Jt(t, e),
        t.prototype.get = function() {
            return this._subscription ? this.getValue() : this._lens.get(this._source.get())
        }
        ,
        t.prototype.modify = function(e) {
            var t = this;
            this._source.modify((function(n) {
                return t._lens.modify(e, n)
            }
            ))
        }
        ,
        t.prototype.set = function(e) {
            var t = this;
            this._source.modify((function(n) {
                return t._lens.set(e, n)
            }
            ))
        }
        ,
        t.prototype._onSourceValue = function(e) {
            var t = this.getValue()
              , n = this._lens.get(e);
            this._eq(t, n) || this.next(n)
        }
        ,
        t.prototype._subscribe = function(t) {
            var n = this;
            this._subscription || (this._subscription = this._source.subscribe((function(e) {
                return n._onSourceValue(e)
            }
            ))),
            this._refCount++;
            var r = new Fe((function() {
                --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(),
                n._subscription = null)
            }
            ));
            return r.add(e.prototype._subscribe.call(this, t)),
            r
        }
        ,
        t.prototype.unsubscribe = function() {
            this._subscription && (this._subscription.unsubscribe(),
            this._subscription = null),
            this._refCount = 0,
            e.prototype.unsubscribe.call(this)
        }
        ,
        t
    }(Qt), tn = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = wt);
            var i = e.call(this, void 0) || this;
            return i._source = t,
            i._getter = n,
            i._eq = r,
            i._subscription = null,
            i._refCount = 0,
            i
        }
        return Jt(t, e),
        t.prototype.get = function() {
            return this._subscription ? this.getValue() : this._getter(this._source.get())
        }
        ,
        t.prototype._onSourceValue = function(e) {
            var t = this.getValue()
              , n = this._getter(e);
            this._eq(t, n) || this.next(n)
        }
        ,
        t.prototype._subscribe = function(t) {
            var n = this;
            this._subscription || (this._subscription = this._source.subscribe((function(e) {
                return n._onSourceValue(e)
            }
            ))),
            this._refCount++;
            var r = new Fe((function() {
                --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(),
                n._subscription = null)
            }
            ));
            return r.add(e.prototype._subscribe.call(this, t)),
            r
        }
        ,
        t.prototype.unsubscribe = function() {
            this._subscription && (this._subscription.unsubscribe(),
            this._subscription = null),
            this._refCount = 0,
            e.prototype.unsubscribe.call(this)
        }
        ,
        t
    }(Xt), nn = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = wt);
            var i = e.call(this, void 0) || this;
            return i._sources = t,
            i._combineFn = n,
            i._eq = r,
            i._subscription = null,
            i._refCount = 0,
            i
        }
        return Jt(t, e),
        t.prototype.get = function() {
            return this._subscription ? this.getValue() : this._combineFn(this._sources.map((function(e) {
                return e.get()
            }
            )))
        }
        ,
        t.prototype._onSourceValues = function(e) {
            var t = this.getValue()
              , n = this._combineFn(e);
            this._eq(t, n) || this.next(n)
        }
        ,
        t.prototype._subscribe = function(t) {
            var n = this;
            this._subscription || (this._subscription = Vt(this._sources).subscribe((function(e) {
                return n._onSourceValues(e)
            }
            ))),
            this._refCount++;
            var r = new Fe((function() {
                --n._refCount <= 0 && n._subscription && (n._subscription.unsubscribe(),
                n._subscription = null)
            }
            ));
            return r.add(e.prototype._subscribe.call(this, t)),
            r
        }
        ,
        t.prototype.unsubscribe = function() {
            this._subscription && (this._subscription.unsubscribe(),
            this._subscription = null),
            this._refCount = 0,
            e.prototype.unsubscribe.call(this)
        }
        ,
        t
    }(Xt);
    !function(e) {
        e.create = function(e) {
            return new Zt(e)
        }
        ,
        e.log = function(e, t) {
            var n = function(e, t, n) {
                return console.log("%c" + e, "color: " + t + "; font-weight: bold", n)
            }
              , r = e.get();
            return e.subscribe((function(e) {
                "function" == typeof t ? t(r, e) : (console.group("UPDATE " + (t ? "TYPE: " + t + " " : "") + "@ " + (new Date).toTimeString()),
                n("prev state", "#9E9E9E", r),
                n("next state", "#4CAF50", e),
                console.groupEnd()),
                r = e
            }
            )),
            e
        }
        ,
        e.combine = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return new nn(e.slice(void 0, -1),(function(t) {
                return e[e.length - 1].apply(e, t)
            }
            ))
        }
        ,
        e.fromObservable = function(t) {
            var n, r, i, s = new Ge(null), o = t.pipe((n = function(t) {
                var n = s.value;
                null === n ? s.next(e.create(t)) : n.set(t)
            }
            ,
            function(e) {
                return e.lift(new ze(n,r,i))
            }
            ), rt());
            return new je((function(e) {
                var t = new Fe;
                return t.add(s.pipe(it((function(e) {
                    return !!e
                }
                ))).subscribe(e)),
                t.add(o.subscribe(void 0, (function(t) {
                    return e.error(t)
                }
                ), (function() {
                    return e.complete()
                }
                ))),
                t
            }
            ))
        }
    }(Ht || (Ht = {}));
    class rn {
        static getInstance() {
            if (void 0 === this._instanceShared)
                throw new Error("Env not inited yet");
            return this._instanceShared
        }
        static initShared(e) {
            if (void 0 !== this._instanceShared)
                throw new Error("Env already inited");
            this._instanceShared = e
        }
        constructor(e, t=Ht.create(!1), n=Ht.create(!1)) {
            this._enableHistoryLoggerInProd = t,
            this._enableAdvancedHistoryLoggerInProd = n,
            this.enableHistoryLoggerInProd = (e=!0)=>{
                e && !this._enableHistoryLoggerInProd.get() ? (console.warn("Debug reports have been enabled"),
                this._enableHistoryLoggerInProd.set(!0)) : !e && this._enableHistoryLoggerInProd.get() && (console.warn("Debug reports have been disabled"),
                this._enableHistoryLoggerInProd.set(!1))
            }
            ,
            this.enableAdvancedHistoryLoggerInProd = (e=!0)=>{
                e && !this._enableAdvancedHistoryLoggerInProd.get() ? (console.warn("Advanced logging has been enabled"),
                this._enableAdvancedHistoryLoggerInProd.set(!0)) : !e && this._enableAdvancedHistoryLoggerInProd.get() && (console.warn("Advanced logging has been disabled"),
                this._enableAdvancedHistoryLoggerInProd.set(!1))
            }
            ;
            const r = e.testArgs
              , i = r && r.processEnv ? r.processEnv : H.fromBrowserify()
              , s = G.getTargetEnv(i);
            this._initLogger(e, s);
            const o = function(e, t, n, r, i, s) {
                const o = G.create(e, t, n, r, i, s);
                return q.init(o),
                self.GR_CFG = q.get(),
                o
            }(e.browser, e.extensionType, e.deploymentType, e.context, i, s);
            this.config = o
        }
        _initLogger(e, t) {
            this.historyLogsService = ue.create({
                ...e.historyLoggerExtraArgs,
                enabledInProd: this._enableHistoryLoggerInProd,
                enableAdvancedInProd: this._enableAdvancedHistoryLoggerInProd
            });
            const n = "prod" !== t || "cs" !== e.context
              , r = {
                create: (e,t)=>{
                    return new be(e,{
                        writer: new ve,
                        filterFn: n ? e=>!0 : (r = he.ERROR,
                        e=>fe(e.level) >= fe(r))
                    },this.historyLogsService,t);
                    var r
                }
            };
            this.logger = r
        }
    }
    function sn() {
        return rn.getInstance()
    }
    !function(e) {
        e.create = function(e, t) {
            return new me(e,(()=>sn().logger.create(e, t)))
        }
    }(Gt || (Gt = {})),
    function(e) {
        e.lessThan1Week = "lessThan1Week",
        e.weekTo4Weeks = "weekTo4Weeks",
        e.moreThan4weeks = "moreThan4weeks",
        e.moreThan3Months = "moreThan3Months"
    }(qt || (qt = {}));
    new Map([[Date.now(), qt.lessThan1Week], [Date.now() - re(7), qt.weekTo4Weeks], [Date.now() - re(28), qt.moreThan4weeks], [Date.now() - re(90), qt.moreThan3Months]]);
    const on = {
        stats: "ex_perfstats",
        csInit: "ex_csInitPerf",
        viewInjection: "viewInjectionPerf"
    };
    function an(e) {
        const {_tag: t, ...n} = e;
        return {
            [on[e._tag]]: n
        }
    }
    var cn;
    function un(e) {
        return "object" == typeof e && null !== e && "message"in e && "string" == typeof e.message
    }
    !function(e) {
        e.INFO = "INFO",
        e.WARN = "WARN",
        e.ERROR = "ERROR"
    }(cn || (cn = {}));
    const ln = (e,t)=>{
        if (0 === e.length)
            return 0;
        const n = [...e].sort(((e,t)=>e - t));
        if (t <= 0)
            return n[0];
        if (t >= 1)
            return n[n.length - 1];
        const r = (n.length - 1) * (100 * t) / 100
          , i = Math.floor(r)
          , s = i + 1
          , o = r % 1;
        return n[i] * (1 - o) + n[s] * o
    }
      , dn = e=>e.reduce(((e,t,n)=>e + (t - e) / (n + 1)), 0)
      , hn = (e,t)=>{
        const n = void 0 === t ? dn(e) : t;
        return e.length > 1 ? Math.sqrt(e.reduce(((e,t)=>e + (t - n) ** 2), 0) / (e.length - 1)) : 0
    }
    ;
    var pn, fn, gn;
    !function(e) {
        function t() {
            return {
                dummy: !0,
                startMeasure: ()=>({
                    endMeasure: ()=>{}
                    ,
                    cancelMeasure: b
                }),
                measure: e=>e(),
                measureAsync: e=>e(),
                custom: b
            }
        }
        e.dummy = t,
        e.dummyFactoryInitialization = ()=>()=>t()
    }(pn || (pn = {})),
    function(e) {
        e.dummy = {
            flushMeasures: e=>[],
            measure: (e,t)=>t(),
            startMeasure: e=>({
                endMeasure() {},
                cancelMeasure() {}
            })
        }
    }(fn || (fn = {})),
    function(e) {
        let t;
        !function(e) {
            let t;
            !function(e) {
                let t;
                !function(e) {
                    e.stats = "stats",
                    e.csInit = "csInit",
                    e.viewInjection = "viewInjection"
                }(t = e.Types || (e.Types = {}))
            }(t = e.Tagged || (e.Tagged = {}))
        }(t = e.Data || (e.Data = {})),
        e.getStats = function(e) {
            if (0 === e.length)
                return {
                    ct: 0
                };
            {
                const t = e.reduce(((e,t)=>Math.min(e, t)), Number.MAX_VALUE)
                  , n = e.reduce(((e,t)=>Math.max(e, t)), Number.MIN_VALUE)
                  , r = e.length >= 6 ? dn(e) : void 0;
                return {
                    ct: e.length,
                    min: t,
                    max: n,
                    range: n - t,
                    avg: r,
                    stddev: void 0 !== r && e.length > 1 ? hn(e, r) : void 0
                }
            }
        }
    }(gn || (gn = {}));
    const mn = e=>e.replace("www.", "");
    function bn(e) {
        const t = e && e.ownerDocument || document
          , n = t.location || t.defaultView.location;
        return n ? mn(n.hostname) : ""
    }
    function _n(e) {
        return "firefox" === K().bundleInfo.browser && /^about:/.test(e) ? e : "" === e ? "" : mn(new URL(e).hostname)
    }
    function vn(e) {
        return wn.includes(e)
    }
    function yn(e=bn(), t="other") {
        var n;
        return vn(e) ? null !== (n = function(e) {
            return wn.getTopSiteId(e)
        }(e)) && void 0 !== n ? n : "null" : t
    }
    const wn = new class {
        constructor(e) {
            function t(e) {
                return `Invalid pattern "${e}": "*" is allowed only at start and/or end position`
            }
            this._equal = new Set,
            this._prefix = [],
            this._suffix = [],
            this._infix = [],
            this._domain = [];
            for (const n of e)
                if (n.startsWith("**."))
                    this._domain.push(n.substring(3));
                else {
                    const e = n.indexOf("*");
                    if (-1 === e)
                        this._equal.add(n);
                    else if (e === n.length - 1)
                        this._prefix.push(n.substring(0, e));
                    else {
                        if (0 !== e)
                            throw new Error(t(n));
                        {
                            const e = n.indexOf("*", 1);
                            if (-1 === e)
                                this._suffix.push(n.substring(1));
                            else {
                                if (e !== n.length - 1)
                                    throw new Error(t(n));
                                this._infix.push(n.substring(1, e))
                            }
                        }
                    }
                }
        }
        getTopSiteId(e) {
            var t, n, r, i, s, o, a;
            return null !== (o = null !== (s = null !== (i = null !== (r = null !== (n = null !== (t = this._equal.has(e) ? e : void 0) && void 0 !== t ? t : this._domain.find((t=>t === e))) && void 0 !== n ? n : (a = this._domain.find((t=>e.endsWith("." + t)))) ? "**." + a : void 0) && void 0 !== r ? r : this._prefix.find((t=>e.startsWith(t)))) && void 0 !== i ? i : this._suffix.find((t=>e.endsWith(t)))) && void 0 !== s ? s : this._infix.find((t=>e.includes(t)))) && void 0 !== o ? o : null
        }
        includes(e) {
            return null !== this.getTopSiteId(e)
        }
    }
    (["mail.google.com", "translate.google.*", "docs.google.com", "web.whatsapp.com", "facebook.com", "outlook.*", "linkedin.com", "zendesk.*", "youtube.com", "twitter.com", "messenger.com", "*.slack.*", "*canvas*", "*instructure*", "trello.com", "editor.wix.com", "quizlet.com", "mail.yahoo.com", "*.force.*", "keep.google.com", "vk.com", "fanyi.baidu.com", "app.bullhornstaffing.com", "app.qa-world.com", "calendar.google.com", "papago.naver.com", "wordcounter.net", "blogger.*", "wattpad.com", "wordpress.com", "amazon.*", "smallseotools.com", "create.kahoot.it", "apps.rackspace.com", "basecamp.com", "varsitytutors.com", "canva.com", "fanyi.youdao.com", "reverso.net", "message.alibaba.com", "*schoology*", "*.blackboard.*", "classroom.google.com", "*upwork*", "business.facebook.com", "medium.com", "mail.aol.com", "workhub.transcribeme.com", "github.com", "**.salesforce.com", "**.force.com", "**.zendesk.com", "**.microsoftonline.com", "**.outlook.com", "**.facebook.com", "**.messenger.com", "**.genesys.com", "**.cisco.com", "**.avaya.com", "**.oraclecloud.com", "**.five9.com", "**.tawk.to", "**.helpscout.com", "**.livechat.com", "**.intercom.com", "**.freshdesk.com", "**.liveagent.com", "**.hubspot.com"]);
    class xn {
        constructor(e) {
            this._onMeasure = e
        }
        measure(e) {
            const t = performance.now();
            let n = !1;
            try {
                const r = e();
                return n = !0,
                r
            } finally {
                this._onMeasure(performance.now() - t, n)
            }
        }
        async measureAsync(e) {
            const t = performance.now();
            let n = !1;
            try {
                const r = await e();
                return n = !0,
                r
            } finally {
                this._onMeasure(performance.now() - t, n)
            }
        }
    }
    function En(e, t) {
        const n = {};
        return Object.keys(t).forEach((r=>{
            e(r, t[r]) && (n[r] = t[r])
        }
        )),
        n
    }
    const Sn = e=>e === Object(e) && !Array.isArray(e);
    function In(e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return JSON.stringify({
                json_error: "Cannot json stringify"
            })
        }
    }
    function An(e, t) {
        return {
            json: In(e),
            exception: t ? {
                name: t.name,
                message: t.message,
                stack: Rn(t.stack),
                ...Sn(t.extra) ? t.extra : {}
            } : void 0
        }
    }
    function Tn() {
        return sn().browserApi.baseUri
    }
    const On = {
        chromium: ["<anonymous>", "native", "unknown location"],
        firefox: [],
        safari: ["[native code]"]
    };
    function Rn(e, {browser: t=sn().config.bundleInfo.browser, extensionBaseUri: n=Tn()}={}) {
        if (!e)
            return e;
        const r = On["chrome" === t || "edge" === t ? "chromium" : t]
          , i = e=>r.some((t=>e.startsWith(t))) || n && e.startsWith(n)
          , s = e.split("\n");
        if ("chrome" === t || "edge" === t) {
            const e = [];
            let t = 0;
            for (; t < s.length && !s[t].startsWith("    at "); )
                e.push(s[t]),
                t++;
            for (; t < s.length; ) {
                const n = (o = s[t],
                a = void 0,
                c = void 0,
                u = void 0,
                null === (u = null !== (c = null !== (a = Fn.exec(o)) && void 0 !== a ? a : kn.exec(o)) && void 0 !== c ? c : Cn.exec(o)) || void 0 === u ? void 0 : u[1]);
                n ? i(n) ? e.push(s[t]) : e.push("    at <hidden>") : e.push("    <unparsed>"),
                t++
            }
            return e.join("\n")
        }
        if ("firefox" === t || "safari" === t)
            return s.map((e=>[e, "firefox" === t ? Mn(e) : Pn(e)])).map((([e,t])=>void 0 === t ? "<unparsed>" : i(t) ? e : "<hidden>")).join("\n");
        var o, a, c, u;
        f(t)
    }
    const Fn = /^ {4}at ([^(]*)$/
      , kn = /^ {4}at [^(]* \(([^()]*)\)$/
      , Cn = /^ {4}at eval \([^(]* \(([^()]*)\)\)$/;
    function Mn(e) {
        return e.split("@", 2)[1]
    }
    function Pn(e) {
        var t;
        return null !== (t = e.split("@", 2)[1]) && void 0 !== t ? t : e
    }
    const Nn = Gt.create("lib.tracking.telemetry")
      , Ln = .1
      , Un = .01;
    class jn {
        constructor(e=b, t=b, n=b, r=b, i=!1, s=pn.dummyFactoryInitialization, o=b, a=b, c=(e=>.01), u=b, l=s(((e,{hideUserInfo: t, ...n})=>{
            this._sendEvent({
                logger: e,
                level: cn.INFO,
                hideUserInfo: t,
                ...an(n)
            })
        }
        )), d=b, h=b, p=b, f=b, g=b) {
            this._sendFelog = e,
            this._sendFelogUsage = t,
            this._setUserInfo = n,
            this._setContainerId = r,
            this._sendUsageMetrics = i,
            this._sendFelogEvent = o,
            this._sendFelogCrashLogs = a,
            this._getUsageMetricsRate = c,
            this._enableDataSharing = u,
            this._createPerfLogger = l,
            this._sendFelogMetricEvent = d,
            this._sendFemetricsRate = h,
            this._startFemetricsTimer = p,
            this._endFemetricsTimer = f,
            this._sendFemetricsTimer = g,
            this._prepareDataString = (e,t)=>{
                let n;
                try {
                    n = JSON.stringify(t)
                } catch (t) {
                    n = `stringify fail: '${String(t)}', '${un(t) ? t.message : "undefined"}'`,
                    Nn.warn(n, e)
                }
                return n
            }
            ,
            this._sendEvent = e=>{
                try {
                    this._sendFelogEvent(e)
                } catch (t) {
                    Nn.warn(`Failed to send felog for ${JSON.stringify(e)}`, t)
                }
            }
            ,
            this._sendException = e=>(t,n,r)=>this._sendEvent({
                message: r || (un(t) ? t.message : String(t)),
                ...e,
                extra: {
                    ...e.extra,
                    ...An(n, t)
                }
            }),
            this._sendUsageMetricsSamplingRatio = this._getUsageMetricsRate(K().bundleInfo.browser),
            this.restoredBgConnection = e=>{
                this._send("cs.connection.bg.restored", cn.INFO, {
                    timeWithoutConnection: e
                })
            }
            ,
            this.initWithoutBgConnection = ()=>{
                this._send("cs.connection.bg.disconnected", cn.INFO)
            }
            ,
            this.fetchDefinitionsFail = ()=>{
                this._send("cs.connection.api.definition.failed", cn.WARN)
            }
            ,
            this.tooLongPageConfigInit = e=>{
                this._send("cs.pageConfig.init.exceeded", cn.WARN, {
                    initTime: e
                })
            }
            ,
            this.tooLongUserUpdateTime = e=>{
                this._send("bg.state.user.update.exceeded", cn.WARN, {
                    updateTime: e
                })
            }
            ,
            this.lostBgPageConnection = ()=>{
                this._send("cs.gbutton.bgСonnection.lost", cn.INFO)
            }
            ,
            this.restoreBgPageConnection = e=>{
                this._send("cs.gbutton.bgСonnection.restored", cn.INFO, {
                    time: e
                })
            }
            ,
            this.dynamicConfigLoadFromPrefsError = e=>{
                this._sendSampled(Un, "bg.dynamicConfig.prefs.load.error", cn.ERROR, {
                    message: e
                })
            }
            ,
            this.dynamicConfigSaveToPrefsError = e=>{
                this._sendSampled(Un, "bg.dynamicConfig.prefs.save.error", cn.ERROR, {
                    message: e
                })
            }
            ,
            this.dynamicConfigLoadFromServerError = e=>{
                this._sendSampled(Un, "bg.dynamicConfig.server.load.error", cn.ERROR, {
                    message: e
                })
            }
            ,
            this.pageConfigCDNError = e=>{
                this._send("cs.pageConfig.cdn.error", cn.ERROR, {
                    message: e
                })
            }
            ,
            this.pageConfigLocalStorageError = (e,t)=>{
                this._send("cs.pageConfig.localStorage.error", cn.INFO, {
                    message: e,
                    name: t
                })
            }
            ,
            this.pageConfigUpdated = (e,t)=>{
                this._send("cs.pageConfig.updated", cn.INFO, {
                    oldVersion: e,
                    newVersion: t
                })
            }
            ,
            this.settingsPopupTimeout = ()=>{
                this._send("settings.popup.init.timeout", cn.WARN)
            }
            ,
            this.settingsUsupportedShow = e=>{
                this._send("settings.popup.state.unsupported.show", cn.INFO, {
                    popupType: e
                })
            }
            ,
            this.gnarClientInitFail = e=>{
                this._send("gnar.bg.tracking.gnar.init.fail", cn.WARN, {
                    message: e
                })
            }
            ,
            this.bgTrackingInitFail = ()=>{
                this._send("debug.tracking.init.fail", cn.INFO)
            }
            ,
            this.userUpgradeClick = e=>{
                this._send("cs.ui.action.upgradeClick", cn.INFO, {
                    placement: e
                })
            }
            ,
            this.gGbUpHookClick = ()=>{
                this._send("cs.ui.gb.uphook.click", cn.INFO)
            }
            ,
            this.gButtonClick = ()=>{
                this._send("cs.ui.gbutton.click", cn.INFO)
            }
            ,
            this.unexpectedAnonymous = e=>{
                this._send("debug.bg.session.unexpectedAnonymous", cn.INFO, e)
            }
            ,
            this.getDapiPropError = (e,t)=>{
                const n = "bg.connection.dapi.getProp.error"
                  , r = this._prepareDataString(n, {
                    statusCode: e,
                    message: t
                });
                this._sendEvent({
                    logger: n,
                    level: cn.WARN,
                    extra: {
                        json: r
                    },
                    sendToFemetrics: !0
                })
            }
            ,
            this.bgApiServiceRequestSuccess = (e,t="GET",n)=>{
                this.sendFemetricsRate("info", {
                    domain: e,
                    context: n ? "accessToken enabled" : "accessToken not enabled",
                    logger: "bg.api.service.request.success",
                    message: `[${t.toUpperCase()}]`
                })
            }
            ,
            this.bgApiServiceRequestFailed = (e,t="GET",n,r)=>{
                this.sendFemetricsRate("warn", {
                    domain: e,
                    context: r ? "accessToken enabled" : "accessToken not enabled",
                    message: `[${t.toUpperCase()}] ${n}`,
                    logger: "bg.api.service.request.failed"
                })
            }
            ,
            this.setDapiPropError = (e,t)=>{
                const n = "bg.connection.dapi.setProp.error"
                  , r = this._prepareDataString(n, {
                    statusCode: e,
                    message: t
                });
                this._sendEvent({
                    logger: n,
                    level: cn.WARN,
                    extra: {
                        json: r
                    },
                    sendToFemetrics: !0
                })
            }
            ,
            this.toggleExtensionDefs = e=>{
                this._send("bg.settings.definitions.toggle", cn.INFO, {
                    enabled: e
                })
            }
            ,
            this.toggleExtension = (e,t,n)=>{
                const r = {
                    enabled: e,
                    placement: t,
                    domain: n
                };
                this._sendEvent({
                    logger: "bg.settings.extension.toggle",
                    level: cn.INFO,
                    sendToFemetrics: !0,
                    extra: {
                        json: In(r)
                    },
                    femetricsExtra: r
                })
            }
            ,
            this.disableUntilNextVisit = ()=>{
                this._send("cs.gbutton.disableUntilNextVisit", cn.INFO)
            }
            ,
            this.disableButtonClick = ()=>{
                this._send("cs.gbutton.disableButtonClick", cn.INFO)
            }
            ,
            this.cookieOverflow = (e,t)=>{
                this._send("debug.bg.state.cookie.overflow", cn.INFO, {
                    size: e,
                    biggestCookie: t
                })
            }
            ,
            this.externalChangePlan = ()=>{
                this._send("bg.api.external.changePlan", cn.INFO)
            }
            ,
            this.externalChangeDialect = ()=>{
                this._send("bg.api.external.changeDialect", cn.INFO)
            }
            ,
            this.externalChangeUser = ()=>{
                this._send("bg.api.external.changeUsed", cn.INFO)
            }
            ,
            this.externalLogout = ()=>{
                this._send("bg.api.external.logout", cn.INFO)
            }
            ,
            this.safariLogoutFail = e=>{
                this._sendEvent({
                    logger: "bg.safari.logout.error",
                    level: cn.INFO,
                    message: e,
                    sendToFemetrics: !0
                })
            }
            ,
            this.bgPageStartFail = this._sendException({
                logger: "bg.start.fail",
                level: cn.ERROR
            }),
            this.acceptDataControl = ()=>{
                this._send("bg.dataControl.accepted", cn.INFO)
            }
            ,
            this.bgPageInitTimeout = e=>{
                this._send("bg.state.start.timeout", cn.WARN, {
                    initTime: e
                })
            }
            ,
            this.bgPageInitFail = e=>{
                this._send("bg.state.init.fail", cn.ERROR, {
                    initAttempts: e
                })
            }
            ,
            this.bgPage = {
                bgPageStarted: (e,t)=>{
                    this._sendFemetricsRate("bgPageStarted", {
                        context: e,
                        time: t
                    })
                }
            },
            this.extensionUpdated = (e,t)=>{
                this._send("bg.state.updated", cn.INFO, {
                    currentVersion: e,
                    previousVersion: t
                })
            }
            ,
            this.extensionUpdateFail = e=>{
                this._send("bg.state.update.fail", cn.INFO, {
                    previousVersion: e
                })
            }
            ,
            this.cannotGetInstallSource = ()=>{
                this._send("bg.getSource.fail", cn.WARN)
            }
            ,
            this.extensionInstall = e=>{
                this._sendEvent({
                    logger: "bg.state.install",
                    level: cn.INFO,
                    extra: {
                        json: JSON.stringify({
                            source: e
                        })
                    },
                    sendToFemetrics: !0
                })
            }
            ,
            this.chromeContentScriptLoadError = (e,t)=>{
                this._send("bg.chrome.cs.load.error", cn.WARN, {
                    message: e,
                    type: t
                })
            }
            ,
            this.reloadNotificationShow = ()=>{
                this._send("bg.ui.notification.tabsReload.show", cn.WARN)
            }
            ,
            this.reloadNotificationClick = ()=>{
                this._send("bg.ui.notification.tabsReload.click", cn.INFO)
            }
            ,
            this.fetchUserFail = (e,t,n)=>{
                const r = "bg.user.fetch.fail"
                  , i = this._prepareDataString(r, {
                    body: t,
                    statusCode: n,
                    reason: e
                });
                this._sendEvent({
                    logger: r,
                    level: cn.WARN,
                    extra: {
                        json: i
                    },
                    sendToFemetrics: !0
                })
            }
            ,
            this.getAccessTokenError = (e,t)=>this.sendFemetricsRate("warn", {
                logger: "bg.api.service.accessToken.error",
                level: cn.WARN,
                message: String(e),
                context: t ? "ignoreCache" : "withCache"
            }),
            this.getAccessTokenSuccess = e=>this.sendFemetricsRate("info", {
                logger: "bg.api.service.accessToken.success",
                level: cn.INFO,
                context: e ? "ignoreCache" : "withCache"
            }),
            this.frequentCookieChanges = e=>{
                this._send("debug.cookie.onChange.error", cn.INFO, {
                    canceled: e
                })
            }
            ,
            this.initializePropFromDapi = e=>{
                this._send("bg.state.dapi.prop.initialize", cn.INFO, {
                    name: e
                })
            }
            ,
            this.onboardingPopupShow = ()=>{
                this._send("cs.onboarding.popup.show", cn.INFO)
            }
            ,
            this.onboardingPopupCancel = ()=>{
                this._send("cs.onboarding.popup.cancel", cn.INFO)
            }
            ,
            this.onboardingTutorialShow = ()=>{
                this._send("cs.onboarding.tutorial.show", cn.INFO)
            }
            ,
            this.loginReminderPopupShow = ()=>{
                this._send("cs.gbutton.popup.loginReminder.show", cn.INFO)
            }
            ,
            this.loginReminderBadgeShow = ()=>{
                this._send("bg.state.user.loginReminder.enable", cn.INFO)
            }
            ,
            this.unhandledBgPageException = e=>{
                this._sendSampledEvent(.05, {
                    logger: "bg.unhandledException",
                    level: cn.ERROR,
                    message: e.message,
                    extra: An({
                        message: un(e.error) ? e.error.message : e.message,
                        filename: e.filename,
                        lineno: e.lineno,
                        colno: e.colno
                    }, e.error)
                })
            }
            ,
            this.unhandledBgPageRejection = e=>{
                const t = null !== e.reason ? "string" == typeof e.reason ? e.reason : un(e.reason) ? e.reason.message : void 0 : void 0;
                this._sendSampledEvent(.05, {
                    logger: "bg.unhandledRejection",
                    level: cn.ERROR,
                    message: t,
                    extra: An({
                        message: t
                    }, e.reason)
                })
            }
            ,
            this.csCrash = _(((e,t)=>{
                this._sendEvent({
                    logger: "cs.crash",
                    level: cn.ERROR,
                    message: e,
                    femetricsExtra: t
                })
            }
            )),
            this.csUnhandled = (e,t)=>{
                this._sendEvent({
                    logger: "cs.unhandled",
                    level: cn.ERROR,
                    message: e,
                    femetricsMessage: e.substring(0, 5),
                    femetricsExtra: t
                })
            }
            ,
            this.storageMigrationSucceeded = ()=>{
                this._send("bg.storageMigration.success", cn.INFO, {})
            }
            ,
            this.storageMigrationFailed = this._sendException({
                logger: "bg.storageMigration.failure",
                level: cn.ERROR
            }),
            this.storageApplyChangesFailed = this._sendException({
                logger: "bg.storage.applyChanges.failure",
                level: cn.ERROR
            }),
            this.cardShowAction = ()=>{
                this._sendSampled(Ln, "cs.editor.card.show", cn.INFO)
            }
            ,
            this.cardHideAction = ()=>{
                this._sendSampled(Ln, "cs.editor.card.hide", cn.INFO)
            }
            ,
            this.cardReplacementAction = ()=>{
                this._sendSampled(Ln, "cs.editor.card.replacement", cn.INFO)
            }
            ,
            this.cardAddToDictAction = ()=>{
                this._sendSampled(Ln, "cs.editor.card.addToDict", cn.INFO)
            }
            ,
            this.cardIgnoreAction = ()=>{
                this._sendSampled(Ln, "cs.editor.card.ignore", cn.INFO)
            }
            ,
            this.synonymCardShowAction = e=>{
                this._sendSampled(Ln, "cs.editor.synonym.show", cn.INFO, {
                    notFoundCard: e
                })
            }
            ,
            this.synonymCardHideAction = e=>{
                this._sendSampled(Ln, "cs.editor.synonym.hide", cn.INFO, {
                    notFoundCard: e
                })
            }
            ,
            this.synonymReplacementAction = ()=>{
                this._sendSampled(Ln, "cs.editor.synonym.replacement", cn.INFO)
            }
            ,
            this.dictCardShowAction = ()=>{
                this._sendSampled(Ln, "cs.editor.dict.show", cn.INFO)
            }
            ,
            this.dictCardHideAction = ()=>{
                this._sendSampled(Ln, "cs.editor.dict.hide", cn.INFO)
            }
            ,
            this.couldNotParseTransform = (e,t)=>{
                this._send("cs.cards.transforms.parse.error", cn.WARN, {
                    transformHTML: e,
                    fallbackParseSuccessful: t
                })
            }
            ,
            this.disabledTabLoad = e=>{
                this._sendUsage("usage.loadOnDisabledTab", cn.INFO, {
                    accountType: e
                })
            }
            ,
            this.disabledTabByUserLoad = e=>{
                this._sendUsage("usage.loadOnDisabledByUserTab", cn.INFO, {
                    accountType: e
                })
            }
            ,
            this.initSession = (e,t,n,r)=>{
                this._sendUsage("usage.session.init", cn.INFO, {
                    isTopSite: vn(e),
                    accountType: t,
                    fieldType: n,
                    fieldSupported: r
                }),
                this._sendMetric("usage.session.init", {
                    domain: e,
                    accountType: t,
                    fieldType: n,
                    fieldSupported: r
                })
            }
            ,
            this.cardFirstInteraction = (e,t)=>{
                this._sendUsage("usage.card.interaction", cn.INFO, {
                    accountType: e,
                    fieldType: t
                })
            }
            ,
            this.gnar = {
                nextPingDateWriteError: e=>this._send("bg.gnarTracker.nextPingDateWriteError", cn.ERROR, {
                    error: e
                }),
                sendError: this._sendException({
                    logger: "bg.gnarTracker.sendError",
                    level: cn.ERROR
                }),
                trackBeforeSetUser: e=>this._send("bg.gnarTracker.trackBeforeSetUser", cn.INFO, {
                    millisSinceInit: e
                }),
                errorSetUser: this._sendException({
                    logger: "bg.gnarTracker.errorSetUser",
                    level: cn.ERROR
                })
            },
            this.fluidGdocs = {
                sidebarFail: _(((e,t)=>this._sendException({
                    logger: "cs.gdocs.fluid.getSidebarFail",
                    level: cn.ERROR
                })(e, {
                    type: t
                }))),
                noPage: _((()=>this._send("cs.gdocs.fluid.noPage", cn.ERROR))),
                getFullTextFailed: _((e=>this._send("cs.gdocs.fluid.getFullTextFailed", cn.INFO, {
                    type: e
                }))),
                getFullTextSuccess: ()=>{
                    this._sendSampled(1e-4, "cs.gdocs.getFullTextSuccess", cn.INFO)
                }
                ,
                contentMonitoringFailed: _(this._sendException({
                    logger: "cs.gdocs.fluid.contentMonitoringFailed",
                    level: cn.WARN
                })),
                pageToTextMapFail: _((()=>this._send("cs.gdocs.fluid.pageToTextMapFail", cn.INFO))),
                nestedTablesAppearance: _((()=>this._send("cs.gdocs.fluid.nestedTablesAppearance", cn.INFO))),
                mapTableIssue: _((e=>this._send("cs.gdocs.fluid.mapTableIssue", cn.INFO, {
                    type: e
                }))),
                treeStructureFailure: _((()=>this._send("cs.gdocs.fluid.treeStructureFailure", cn.INFO))),
                textFragmentMapFail: _((()=>this._send("cs.gdocs.fluid.textFragmentMapFail", cn.INFO))),
                createMapFail: _(this._sendException({
                    logger: "cs.gdocs.fluid.createMapFail",
                    level: cn.ERROR
                })),
                eventTargetFail: _(this._sendException({
                    logger: "cs.gdocs.fluid.eventTargetFail",
                    level: cn.ERROR
                })),
                updateMapFail: _(this._sendException({
                    logger: "cs.gdocs.fluid.updateMapFail",
                    level: cn.ERROR
                })),
                shiftMapFail: _(this._sendException({
                    logger: "cs.gdocs.fluid.shiftMapFail",
                    level: cn.ERROR
                })),
                init: ()=>this._sendEvent({
                    logger: "cs.gdocs.fluid.init",
                    level: cn.INFO,
                    hideUserInfo: !0
                }),
                initOnCanvasAttempt: ()=>this._send("cs.gdocs.fluid.canvas", cn.INFO),
                getTextPerf: this._createPerfLogger("cs.gdocs.fluid.perf.getText", 30),
                buildTextMapPerf: this._createPerfLogger("cs.gdocs.fluid.perf.textMap", 30),
                updateTextMapPerf: this._createPerfLogger("cs.gdocs.fluid.perf.updateTextMap", 30)
            },
            this._sendGdocsPageExecutionException = this._sendException({
                logger: "cs.gdocs.pageExecution.exception",
                level: cn.ERROR
            }),
            this.gdocs = {
                pageExecutionException: (e,t)=>this._sendGdocsPageExecutionException(e, {
                    isGDocsCanvas: t
                }),
                disabledBeforeForceEnable: _((e=>this._send("cs.gdocs.disabledBeforeForceEnable", cn.INFO, {
                    disabledDate: e
                }))),
                enabledBeforeForceEnable: _((()=>this._send("cs.gdocs.enabledBeforeForceEnable", cn.INFO)))
            },
            this.canvasGdocs = {
                injectedException: _(this._sendException({
                    logger: "cs.gdocs.canvas.injected.exception",
                    level: cn.ERROR
                })),
                injectedError: v(((e,t,n,r)=>this._sendEvent({
                    logger: "cs.gdocs.canvas.injected.error",
                    level: cn.ERROR,
                    message: t,
                    extra: {
                        json: In({
                            context: e,
                            data: n
                        })
                    },
                    gdocsExtra: r,
                    femetricsExtra: {
                        context: e
                    }
                })), (e=>e)),
                injectedInfo: v(((e,t,n)=>this._sendEvent({
                    logger: "cs.gdocs.canvas.injected.info",
                    eventContext: e,
                    level: cn.INFO,
                    sendToFemetrics: !0,
                    gdocsExtra: t,
                    extra: {
                        json: In({
                            context: e,
                            data: n
                        })
                    },
                    femetricsExtra: {
                        context: e
                    }
                })), (e=>e)),
                initializationException: _(((e,t,n)=>this._sendException({
                    logger: "cs.gdocs.canvas.init.exception",
                    level: cn.ERROR,
                    gdocsExtra: n,
                    femetricsExtra: {
                        type: t
                    }
                })(e, {
                    type: t
                }))),
                initializationTimeout: _(((e,t,n)=>this._sendEvent({
                    logger: "cs.gdocs.canvas.init.timeout",
                    level: cn.ERROR,
                    message: `Initialization for ${t} timeout: ${e}ms`,
                    extra: {
                        json: In({
                            type: t
                        })
                    },
                    gdocsExtra: n,
                    femetricsExtra: {
                        type: t
                    }
                }))),
                creatingException: _(((e,t)=>this._sendEvent({
                    logger: "cs.gdocs.canvas.creating.exception",
                    level: cn.ERROR,
                    message: e,
                    gdocsExtra: t
                }))),
                initInterrupted: _((e=>this._sendEvent({
                    logger: "cs.gdocs.canvas.interrupted",
                    level: cn.ERROR,
                    message: "Interrupted",
                    gdocsExtra: e
                }))),
                dataSourceException: _(((e,t)=>this._sendException({
                    logger: "cs.gdocs.canvas.dataSource.exception",
                    level: cn.ERROR,
                    femetricsExtra: {
                        type: t
                    }
                })(e, {
                    type: t
                }))),
                error: v(((e,t,n,r,i)=>this._sendEvent({
                    logger: "cs.gdocs.canvas.error",
                    level: cn.ERROR,
                    message: t,
                    extra: An({
                        type: e,
                        message: t,
                        data: r
                    }, n),
                    femetricsExtra: {
                        type: e,
                        mappingName: null == i ? void 0 : i.mappingName
                    }
                })), (e=>e)),
                warning: v(((e,t,n)=>this._sendEvent({
                    logger: "cs.gdocs.canvas.warning",
                    level: cn.WARN,
                    message: t,
                    extra: An({
                        type: e,
                        message: t,
                        data: n
                    })
                })), (e=>e)),
                started: e=>this._sendEvent({
                    logger: "cs.gdocs.canvas.started",
                    level: cn.INFO,
                    sendToFemetrics: !0,
                    gdocsExtra: e
                }),
                creating: e=>this._sendEvent({
                    logger: "cs.gdocs.canvas.creating",
                    level: cn.INFO,
                    sendToFemetrics: !0,
                    gdocsExtra: e
                }),
                showLongDocPopup: e=>this._sendEvent({
                    logger: "cs.gdocs.canvas.longDocPopup",
                    level: cn.INFO,
                    sendToFemetrics: !0,
                    gdocsExtra: e
                }),
                showSharedDocPopup: e=>this._sendEvent({
                    logger: "cs.gdocs.canvas.sharedDocPopup",
                    level: cn.INFO,
                    sendToFemetrics: !0,
                    gdocsExtra: e
                }),
                debugPageSearchFail: _((e=>this._sendEvent({
                    logger: "cs.gdocs.canvas.pageSearch.debug",
                    level: cn.INFO,
                    extra: {
                        json: In({
                            data: e
                        })
                    }
                }))),
                debugMappingFail: _((e=>this._sendEvent({
                    logger: "cs.gdocs.canvas.mapping.debug",
                    level: cn.INFO,
                    extra: {
                        json: In({
                            data: e
                        })
                    }
                }))),
                buildTextMapPerf: this._createPerfLogger("cs.gdocs.canvas.perf.textMap", 30),
                findPage: this._createPerfLogger("cs.gdocs.canvas.perf.findPage", 100),
                mappingPerf: e=>new xn((t=>{
                    1e-4 > Math.random() && this._sendFemetricsTimer("gdocsMapping", t, {
                        ...e,
                        mapPageCount: void 0 === e.mapPageCount ? void 0 : e.mapPageCount > 10 ? "10+" : e.mapPageCount
                    })
                }
                )),
                fullTextNotFound: _((()=>this._send("cs.gdocs.canvas.fullTextNotFound", cn.WARN))),
                mapping: ({mapPageCount: e, attempts: t, mode: n, tableMode: r})=>{
                    this._sendFemetricsRate("gdocsMapping", {
                        mappingMode: n,
                        tableMode: r,
                        mapPageCount: e > 10 ? "10+" : e,
                        mappingAttempts: t.length,
                        ...t.reduce(((e,t,n)=>({
                            ...e,
                            [`mapping${n}_name`]: t.name,
                            [`mapping${n}_success`]: t.success,
                            [`mapping${n}_mappedPages`]: "number" == typeof t.mappedPageCount && t.mappedPageCount > 10 ? "10+" : t.mappedPageCount
                        })), {})
                    })
                }
                ,
                mappingStats: e=>{
                    this._sendFemetricsRate("gdocsMappingStats", e)
                }
                ,
                mappingPageStats: e=>{
                    this._sendFemetricsRate("gdocsMappingPageStats", e)
                }
                ,
                mappingStatsByTextLength: e=>{
                    this._sendFemetricsRate("gdocsMappingStatsByTextLength", e)
                }
                ,
                mappingPageStatsByTextLength: e=>{
                    this._sendFemetricsRate("gdocsMappingPageStatsByTextLength", e)
                }
                ,
                mappingStatsByTableMode: e=>{
                    this._sendFemetricsRate("gdocsMappingStatsByTableMode", e)
                }
                ,
                mappingPageStatsByTableMode: e=>{
                    this._sendFemetricsRate("gdocsMappingPageStatsByTableMode", e)
                }
                ,
                mappingMinPageGapsStats: e=>{
                    this._sendFemetricsRate("gdocsMappingMinPageGapsStats", e)
                }
                ,
                mappingMaxPageGapsStats: e=>{
                    this._sendFemetricsRate("gdocsMappingMaxPageGapsStats", e)
                }
            },
            this.canvasGdocsSVG = {
                error: v(((e,t,n,r,i)=>this._sendEvent({
                    logger: "cs.gdocs.svg.error",
                    level: cn.ERROR,
                    message: t,
                    extra: An({
                        type: e,
                        message: t,
                        data: r
                    }, n),
                    femetricsExtra: {
                        type: e,
                        mappingName: null == i ? void 0 : i.mappingName
                    }
                })), (e=>e)),
                buildTextMapPerf: this._createPerfLogger("cs.gdocs.svg.perf.textMap", 30)
            },
            this.gmailThreadContext = {
                warning: v(((e,t,n)=>this._sendEvent({
                    logger: "cs.threadContext.gmail.warning",
                    level: cn.WARN,
                    message: t,
                    extra: {
                        json: In({
                            type: e,
                            message: t,
                            data: n
                        })
                    }
                })), (e=>e))
            },
            this.readerGmail = {
                warning: v(((e,t,n)=>this._sendEvent({
                    logger: "cs.reader.gmail.warning",
                    level: cn.WARN,
                    message: t,
                    extra: {
                        json: In({
                            type: e,
                            message: t,
                            data: n
                        })
                    }
                })), (e=>e))
            },
            this._cbLog = e=>v(((t,n,r,i)=>this._sendEvent({
                logger: "cs.citationBuilder",
                level: e,
                citationBuilderExtra: r,
                message: n,
                extra: An(void 0, i)
            })), (e=>e)),
            this.citationBuilder = {
                error: this._cbLog(cn.ERROR),
                warning: this._cbLog(cn.WARN),
                info: this._cbLog(cn.INFO)
            },
            this.performance = {
                processInput: this._createPerfLogger("cs.fluid.processInput", 100),
                processAlerts: this._createPerfLogger("cs.fluid.processAlerts", 10),
                processFilterChange: this._createPerfLogger("cs.fluid.processFilterChange", 10),
                csInitialized: (e,t,n,r,i)=>{
                    this._createPerfLogger("cs.initialized").custom({
                        _tag: gn.Data.Tagged.Types.csInit,
                        domain: self.location.host,
                        hideUserInfo: !0,
                        loadTime: e,
                        initTime: t,
                        pageLoadTime: n,
                        injectTime: r,
                        error: i ? {
                            message: i.message,
                            stack: i.stack
                        } : void 0
                    })
                }
                ,
                viewInjection: e=>{
                    this._createPerfLogger("cs.viewInjection").custom({
                        _tag: gn.Data.Tagged.Types.viewInjection,
                        ...e
                    })
                }
            },
            this.autocorrect = {
                responseTime: this._createPerfLogger("cs.autocorrect.responseTime", 10),
                predictTime: this._createPerfLogger("cs.autocorrect.predictTime", 10)
            },
            this.assistant = {
                initTime: this._createPerfLogger("cs.assistant.initTime", 1),
                renderTime: this._createPerfLogger("cs.assistant.renderTime", 1),
                openTime: this._createPerfLogger("cs.assistant.openTime", 1),
                alertManagerError: this._sendException({
                    logger: "cs.assistant.alertManagerError",
                    level: cn.ERROR
                })
            },
            this.attentionHeatmap = {
                textChangeProcessingTime: this._createPerfLogger("cs.attentionHeatmap.textChangeProcessingTime", 100),
                responseProcessingTime: this._createPerfLogger("cs.attentionHeatmap.responseProcessingTime", 10),
                highlightUpdateTime: this._createPerfLogger("cs.attentionHeatmap.highlightUpdateTime", 100),
                highlightGeometryUpdateTime: this._createPerfLogger("cs.attentionHeatmap.highlightGeometryUpdateTime", 100),
                responseTime: this._createPerfLogger("cs.attentionHeatmap.responseTime", 10),
                canvasRenderTime: this._createPerfLogger("cs.attentionHeatmap.canvasRenderTime", 100)
            },
            this.proofit = {
                availabilityQuotaError: e=>{
                    this._sendEvent({
                        logger: "cs.proofit.availability_quota_error",
                        level: cn.ERROR,
                        extra: {
                            json: JSON.stringify(e)
                        }
                    })
                }
                ,
                submitResponseError: e=>{
                    this._sendEvent({
                        logger: "cs.proofit.submit_response_error",
                        level: cn.ERROR,
                        extra: {
                            json: JSON.stringify(e)
                        }
                    })
                }
                ,
                progressError: e=>{
                    this._sendEvent({
                        logger: "cs.proofit.progress_error",
                        level: cn.ERROR,
                        extra: {
                            json: JSON.stringify(e)
                        }
                    })
                }
                ,
                progressRejected: e=>{
                    this._sendEvent({
                        logger: "cs.proofit.progress_rejected",
                        level: cn.WARN,
                        extra: {
                            json: JSON.stringify(e)
                        }
                    })
                }
            },
            this.oauthExchangeError = e=>{
                this._send("bg.oauth.exchange.error", cn.ERROR, {
                    message: e
                })
            }
            ,
            this.chipmunkAPIError = e=>{
                this._send("bg.chipmunk.api.error", cn.ERROR, {
                    message: e
                })
            }
            ,
            this.sendFemetricsRate = (e,t)=>{
                this._sendFemetricsRate(e, t)
            }
            ,
            this.startFemetricsTimer = (e,t,n)=>{
                this._startFemetricsTimer(e, t, performance.now(), n)
            }
            ,
            this.endFemetricsTimer = (e,t,n)=>{
                this._endFemetricsTimer(e, t, performance.now(), n)
            }
            ,
            this.alerts = {
                inconsistentAlertWithText: e=>{
                    this._sendFemetricsRate("inconsistentAlertWithText", {
                        context: e
                    })
                }
                ,
                cannotShowInlineCard: e=>{
                    this._sendFemetricsRate("cannotShowInlineCard", {
                        context: e
                    })
                }
            },
            this.upgradeHooks = {
                showUpgradeHook: (e,t)=>{
                    this._sendFemetricsRate("showPremiumButton", {
                        upgradeHookName: e,
                        upgradeHookSlot: t
                    })
                }
                ,
                clickUpgradeHook: (e,t)=>{
                    this._sendFemetricsRate("clickPremiumButton", {
                        upgradeHookName: e,
                        upgradeHookSlot: t
                    })
                }
            },
            this.createDocument = ()=>{
                this._sendEvent({
                    logger: "lib.bg.create.document",
                    level: cn.INFO,
                    sendToFemetrics: !0
                })
            }
        }
        _send(e, t, n) {
            const r = this._prepareDataString(e, n);
            try {
                this._sendFelog(e, String(null == n ? void 0 : n.message), t, n ? {
                    json: r
                } : void 0)
            } catch (t) {
                Nn.warn(`Failed to send felog for ${e}: '${un(t) ? t.message : "undefined"}'`, t)
            }
        }
        _sendUsage(e, t, n) {
            if (this._sendUsageMetrics && this._sendUsageMetricsSamplingRatio > Math.random())
                try {
                    this._sendFelogUsage(e, "", t, n)
                } catch (t) {
                    Nn.warn(`Failed to send usage felog for ${e}: '${un(t) ? t.message : "undefined"}'`, t)
                }
        }
        _sendSampled(e, t, n, r) {
            e > Math.random() && this._send(t, n, r)
        }
        _sendSampledEvent(e, t) {
            e > Math.random() && this._sendEvent(t)
        }
        _sendMetric(e, t) {
            this._sendFelogMetricEvent({
                metricName: e,
                data: t
            })
        }
        sendCrashLogs(e, t) {
            try {
                this._sendFelogCrashLogs(t)
            } catch (t) {
                Nn.warn(`Failed to send crash data data for ${e}: '${un(t) ? t.message : "undefined"}'`, t)
            }
        }
        setUserInfo(e) {
            this._setUserInfo(e)
        }
        setContainerId(e) {
            this._setContainerId(e)
        }
        enableDataSharing() {
            this._enableDataSharing()
        }
        notificationShown(e) {
            this._send("cs.notification.show", cn.INFO, {
                type: e
            })
        }
        notificationHide(e) {
            this._send("cs.notification.hide", cn.INFO, {
                type: e
            })
        }
    }
    !function(e) {
        let t;
        !function(e) {
            e.fromPartial = e=>e
        }(t = e.Mock || (e.Mock = {}))
    }(jn || (jn = {}));
    class Dn {
        constructor(e, t, n=b) {
            this.name = e,
            this._source = t,
            this._saveAction = n,
            this.dummy = !1,
            this.data = [],
            this.customBuffer = [],
            this._flush = ()=>{
                this.data.push(...this._source.flushMeasures(this.name)),
                this._saveAction(this.data)
            }
            ,
            this.custom = e=>{
                this.customBuffer.push(e)
            }
            ,
            this.startMeasure = ()=>{
                const e = this._source.startMeasure(this.name)
                  , t = ()=>this._flush();
                return {
                    endMeasure() {
                        try {
                            const n = e.endMeasure();
                            return t(),
                            n
                        } catch (e) {
                            return
                        }
                    },
                    cancelMeasure: ()=>e.cancelMeasure()
                }
            }
            ,
            this.measure = e=>{
                const t = this._source.measure(this.name, e);
                try {
                    this._flush()
                } catch (e) {}
                return t
            }
            ,
            this.measureAsync = e=>{
                const t = this._source.startMeasure(this.name);
                return e().then((e=>{
                    try {
                        t.endMeasure(),
                        this._flush()
                    } catch (e) {}
                    return e
                }
                ))
            }
        }
        getStats() {
            return this.data.length > 0 ? {
                ...gn.getStats(this.data),
                median: (e = this.data,
                ln(e, .5)),
                p90: ln(this.data, .9),
                p99: ln(this.data, .99)
            } : {};
            var e
        }
    }
    class Bn {
        constructor(e) {
            this._perf = e,
            this._log = Gt.create("cs.telemetry.PerformanceMetricsImpl")
        }
        flushMeasures(e) {
            try {
                const t = this._perf.getEntriesByName(e, "measure");
                return this._perf.clearMeasures(e),
                t.map((e=>e.duration))
            } catch (e) {
                return this._log.warn("failed to retrieve perf measurements", e),
                []
            }
        }
        startMeasure(e) {
            const t = Math.random()
              , n = `__${e}_${t}-start`
              , r = `__${e}_${t}-end`;
            try {
                this._perf.mark(n)
            } catch (e) {
                return this._log.warn("could not start measure – ignoring measurement", e),
                {
                    endMeasure: ()=>{}
                    ,
                    cancelMeasure: b
                }
            }
            let i = !1;
            return {
                endMeasure: ()=>{
                    if (!i) {
                        i = !0;
                        try {
                            return this._perf.mark(r),
                            this._perf.measure(e, n, r),
                            this._perf.getEntriesByName(e, "measure")[0]
                        } catch (e) {
                            return void this._log.warn("could not complete measure", e)
                        }
                    }
                }
                ,
                cancelMeasure: ()=>{
                    this._perf.clearMarks(n),
                    this._perf.clearMarks(r)
                }
            }
        }
        measure(e, t) {
            const n = `__${e}-start`
              , r = `__${e}-end`;
            try {
                this._perf.mark(n)
            } catch (e) {
                return this._log.warn("could not start measure – ignoring measurement", e),
                t()
            }
            try {
                return t()
            } finally {
                try {
                    this._perf.mark(r),
                    this._perf.measure(e, n, r)
                } catch (e) {
                    this._log.warn("could not complete measure", e)
                }
            }
        }
    }
    !function(e) {
        e.create = function(t) {
            return void 0 !== t ? new e(t) : fn.dummy
        }
    }(Bn || (Bn = {}));
    const $n = Gt.create("tracking.telemetry.performance.felog");
    class Wn {
        constructor(e, t, n, r=0, i=6e4) {
            this.name = e,
            this._sendMetrics = t,
            this._source = n,
            this._minBufferSize = r,
            this._throttleTimeMs = i,
            this.dummy = !1,
            this._buffer = [],
            this._flush = function(e, t) {
                let n, r, i = !0;
                function s(e, n) {
                    return i && (i = !1,
                    r = c(),
                    setTimeout((()=>{
                        try {
                            r.resolve(t(...n))
                        } catch (e) {
                            r.reject(e)
                        } finally {
                            i = !0
                        }
                    }
                    ), e)),
                    r.promise
                }
                return (...t)=>{
                    const r = n;
                    return n = Date.now(),
                    s(void 0 === r || n - r >= e ? 0 : e - (n - r), t)
                }
            }(this._throttleTimeMs, (()=>{
                if (this._buffer.push(...this._source.flushMeasures(this.name)),
                this._buffer.length >= this._minBufferSize) {
                    const e = gn.getStats(this._buffer);
                    this._buffer = [],
                    $n.info(`sending perf stats for ${this.name}`, e),
                    this._sendMetrics(this.name, {
                        _tag: gn.Data.Tagged.Types.stats,
                        ...e
                    })
                }
            }
            )),
            this.custom = e=>{
                this._sendMetrics(this.name, e)
            }
            ,
            this.startMeasure = ()=>{
                const e = this._source.startMeasure(this.name)
                  , t = ()=>this._flush();
                return {
                    endMeasure() {
                        try {
                            const n = e.endMeasure();
                            return t(),
                            n
                        } catch (e) {
                            return
                        }
                    },
                    cancelMeasure: ()=>e.cancelMeasure()
                }
            }
            ,
            this.measure = e=>{
                const t = this._source.measure(this.name, e);
                try {
                    this._flush()
                } catch (e) {}
                return t
            }
            ,
            this.measureAsync = e=>{
                const t = this._source.startMeasure(this.name);
                return e().then((e=>{
                    try {
                        t.endMeasure(),
                        this._flush()
                    } catch (e) {}
                    return e
                }
                ))
            }
        }
    }
    Gt.create("lib.tracking.logger");
    let Vn;
    function Hn() {
        if (!Vn) {
            const e = sn().telemetryCallProvider;
            Vn = new jn(e.sendFelog,e.sendFelogUsageEvent,e.setUserInfo,e.setContainerId,K().appConfig.felog.sendUsageMetrics,function() {
                const e = K().appConfig.felog.sendPerfMetricsType;
                return "local" === e ? (t = Bn.create(self.performance),
                e=>e=>{
                    const n = self.__GR_PERFORMANCE_STORE__ || {};
                    if (self.__GR_PERFORMANCE_STORE__ = n,
                    e in n)
                        return n[e];
                    {
                        const r = new Dn(e,t);
                        return n[e] = r,
                        r
                    }
                }
                ) : ((e,t,n=6e4)=>r=>(i,s)=>e ? new Wn(i,r,t,s,n) : pn.dummy())("send" === e, Bn.create(self.performance));
                var t
            }(),e.sendFelogEvent,e.sendFelogCrashLogs,void 0,(()=>{
                var t;
                return null === (t = e.enableDataSharing) || void 0 === t ? void 0 : t.call(e)
            }
            ),void 0,e.sendFelogMetricEvent,e.sendFemetricsRate,e.startFemetricsTimer,e.endFemetricsTimer,e.sendFemetricsTimer)
        }
        return Vn
    }
    function Gn(e, t) {
        return function(n) {
            if ("function" != typeof e)
                throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new qn(e,t))
        }
    }
    var qn = function() {
        function e(e, t) {
            this.project = e,
            this.thisArg = t
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new zn(e,this.project,this.thisArg))
        }
        ,
        e
    }()
      , zn = function(e) {
        function t(t, n, r) {
            var i = e.call(this, t) || this;
            return i.project = n,
            i.count = 0,
            i.thisArg = r || i,
            i
        }
        return we(t, e),
        t.prototype._next = function(e) {
            var t;
            try {
                t = this.project.call(this.thisArg, e, this.count++)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(t)
        }
        ,
        t
    }(Me);
    function Kn(e, t, n, r) {
        return xe(n) && (r = n,
        n = void 0),
        r ? Kn(e, t, n).pipe(Gn((function(e) {
            return Te(e) ? r.apply(void 0, e) : r(e)
        }
        ))) : new je((function(r) {
            Jn(e, t, (function(e) {
                arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(e)
            }
            ), r, n)
        }
        ))
    }
    function Jn(e, t, n, r, i) {
        var s;
        if (function(e) {
            return e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener
        }(e)) {
            var o = e;
            e.addEventListener(t, n, i),
            s = function() {
                return o.removeEventListener(t, n, i)
            }
        } else if (function(e) {
            return e && "function" == typeof e.on && "function" == typeof e.off
        }(e)) {
            var a = e;
            e.on(t, n),
            s = function() {
                return a.off(t, n)
            }
        } else if (function(e) {
            return e && "function" == typeof e.addListener && "function" == typeof e.removeListener
        }(e)) {
            var c = e;
            e.addListener(t, n),
            s = function() {
                return c.removeListener(t, n)
            }
        } else {
            if (!e || !e.length)
                throw new TypeError("Invalid event target");
            for (var u = 0, l = e.length; u < l; u++)
                Jn(e[u], t, n, r, i)
        }
        r.add(s)
    }
    var Yn = function(e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.scheduler = t,
            r.work = n,
            r.pending = !1,
            r
        }
        return we(t, e),
        t.prototype.schedule = function(e, t) {
            if (void 0 === t && (t = 0),
            this.closed)
                return this;
            this.state = e;
            var n = this.id
              , r = this.scheduler;
            return null != n && (this.id = this.recycleAsyncId(r, n, t)),
            this.pending = !0,
            this.delay = t,
            this.id = this.id || this.requestAsyncId(r, this.id, t),
            this
        }
        ,
        t.prototype.requestAsyncId = function(e, t, n) {
            return void 0 === n && (n = 0),
            setInterval(e.flush.bind(e, this), n)
        }
        ,
        t.prototype.recycleAsyncId = function(e, t, n) {
            if (void 0 === n && (n = 0),
            null !== n && this.delay === n && !1 === this.pending)
                return t;
            clearInterval(t)
        }
        ,
        t.prototype.execute = function(e, t) {
            if (this.closed)
                return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(e, t);
            if (n)
                return n;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }
        ,
        t.prototype._execute = function(e, t) {
            var n = !1
              , r = void 0;
            try {
                this.work(e)
            } catch (e) {
                n = !0,
                r = !!e && e || new Error(e)
            }
            if (n)
                return this.unsubscribe(),
                r
        }
        ,
        t.prototype._unsubscribe = function() {
            var e = this.id
              , t = this.scheduler
              , n = t.actions
              , r = n.indexOf(this);
            this.work = null,
            this.state = null,
            this.pending = !1,
            this.scheduler = null,
            -1 !== r && n.splice(r, 1),
            null != e && (this.id = this.recycleAsyncId(t, e, null)),
            this.delay = null
        }
        ,
        t
    }(function(e) {
        function t(t, n) {
            return e.call(this) || this
        }
        return we(t, e),
        t.prototype.schedule = function(e, t) {
            return void 0 === t && (t = 0),
            this
        }
        ,
        t
    }(Fe))
      , Xn = function() {
        function e(t, n) {
            void 0 === n && (n = e.now),
            this.SchedulerAction = t,
            this.now = n
        }
        return e.prototype.schedule = function(e, t, n) {
            return void 0 === t && (t = 0),
            new this.SchedulerAction(this,e).schedule(n, t)
        }
        ,
        e.now = function() {
            return Date.now()
        }
        ,
        e
    }()
      , Qn = function(e) {
        function t(n, r) {
            void 0 === r && (r = Xn.now);
            var i = e.call(this, n, (function() {
                return t.delegate && t.delegate !== i ? t.delegate.now() : r()
            }
            )) || this;
            return i.actions = [],
            i.active = !1,
            i.scheduled = void 0,
            i
        }
        return we(t, e),
        t.prototype.schedule = function(n, r, i) {
            return void 0 === r && (r = 0),
            t.delegate && t.delegate !== this ? t.delegate.schedule(n, r, i) : e.prototype.schedule.call(this, n, r, i)
        }
        ,
        t.prototype.flush = function(e) {
            var t = this.actions;
            if (this.active)
                t.push(e);
            else {
                var n;
                this.active = !0;
                do {
                    if (n = e.execute(e.state, e.delay))
                        break
                } while (e = t.shift());
                if (this.active = !1,
                n) {
                    for (; e = t.shift(); )
                        e.unsubscribe();
                    throw n
                }
            }
        }
        ,
        t
    }(Xn)
      , Zn = new Qn(Yn);
    function er(e, t) {
        var n;
        return void 0 === e && (e = 0),
        void 0 === t && (t = Zn),
        (Te(n = e) || !(n - parseFloat(n) + 1 >= 0) || e < 0) && (e = 0),
        t && "function" == typeof t.schedule || (t = Zn),
        new je((function(n) {
            return n.add(t.schedule(tr, e, {
                subscriber: n,
                counter: 0,
                period: e
            })),
            n
        }
        ))
    }
    function tr(e) {
        var t = e.subscriber
          , n = e.counter
          , r = e.period;
        t.next(n),
        this.schedule({
            subscriber: t,
            counter: n + 1,
            period: r
        }, r)
    }
    var nr = function() {
        function e() {
            return Error.call(this),
            this.message = "no elements in sequence",
            this.name = "EmptyError",
            this
        }
        return e.prototype = Object.create(Error.prototype),
        e
    }()
      , rr = function() {
        function e() {
            return Error.call(this),
            this.message = "argument out of range",
            this.name = "ArgumentOutOfRangeError",
            this
        }
        return e.prototype = Object.create(Error.prototype),
        e
    }()
      , ir = new je((function(e) {
        return e.complete()
    }
    ));
    function sr(e) {
        return e ? function(e) {
            return new je((function(t) {
                return e.schedule((function() {
                    return t.complete()
                }
                ))
            }
            ))
        }(e) : ir
    }
    function or(e) {
        return function(t) {
            return 0 === e ? sr() : t.lift(new ar(e))
        }
    }
    var ar = function() {
        function e(e) {
            if (this.total = e,
            this.total < 0)
                throw new rr
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new cr(e,this.total))
        }
        ,
        e
    }()
      , cr = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.total = n,
            r.count = 0,
            r
        }
        return we(t, e),
        t.prototype._next = function(e) {
            var t = this.total
              , n = ++this.count;
            n <= t && (this.destination.next(e),
            n === t && (this.destination.complete(),
            this.unsubscribe()))
        }
        ,
        t
    }(Me);
    function ur(e) {
        return void 0 === e && (e = null),
        function(t) {
            return t.lift(new lr(e))
        }
    }
    var lr = function() {
        function e(e) {
            this.defaultValue = e
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new dr(e,this.defaultValue))
        }
        ,
        e
    }()
      , dr = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.defaultValue = n,
            r.isEmpty = !0,
            r
        }
        return we(t, e),
        t.prototype._next = function(e) {
            this.isEmpty = !1,
            this.destination.next(e)
        }
        ,
        t.prototype._complete = function() {
            this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete()
        }
        ,
        t
    }(Me);
    function hr(e) {
        return void 0 === e && (e = gr),
        function(t) {
            return t.lift(new pr(e))
        }
    }
    var pr = function() {
        function e(e) {
            this.errorFactory = e
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new fr(e,this.errorFactory))
        }
        ,
        e
    }()
      , fr = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.errorFactory = n,
            r.hasValue = !1,
            r
        }
        return we(t, e),
        t.prototype._next = function(e) {
            this.hasValue = !0,
            this.destination.next(e)
        }
        ,
        t.prototype._complete = function() {
            if (this.hasValue)
                return this.destination.complete();
            var e = void 0;
            try {
                e = this.errorFactory()
            } catch (t) {
                e = t
            }
            this.destination.error(e)
        }
        ,
        t
    }(Me);
    function gr() {
        return new nr
    }
    function mr(e, t) {
        var n = arguments.length >= 2;
        return function(r) {
            return r.pipe(e ? it((function(t, n) {
                return e(t, n, r)
            }
            )) : Le, or(1), n ? ur(t) : hr((function() {
                return new nr
            }
            )))
        }
    }
    var br = function() {
        function e(e) {
            this.value = e
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new _r(e,this.value))
        }
        ,
        e
    }()
      , _r = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.value = n,
            r
        }
        return we(t, e),
        t.prototype._next = function(e) {
            this.destination.next(this.value)
        }
        ,
        t
    }(Me);
    function vr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var n = e[e.length - 1];
        return Ft(n) ? (e.pop(),
        Bt(e, n)) : $t(e)
    }
    function yr(e, t) {
        if (null != e) {
            if (function(e) {
                return e && "function" == typeof e[Ne]
            }(e))
                return function(e, t) {
                    return new je((function(n) {
                        var r = new Fe;
                        return r.add(t.schedule((function() {
                            var i = e[Ne]();
                            r.add(i.subscribe({
                                next: function(e) {
                                    r.add(t.schedule((function() {
                                        return n.next(e)
                                    }
                                    )))
                                },
                                error: function(e) {
                                    r.add(t.schedule((function() {
                                        return n.error(e)
                                    }
                                    )))
                                },
                                complete: function() {
                                    r.add(t.schedule((function() {
                                        return n.complete()
                                    }
                                    )))
                                }
                            }))
                        }
                        ))),
                        r
                    }
                    ))
                }(e, t);
            if (Ut(e))
                return function(e, t) {
                    return new je((function(n) {
                        var r = new Fe;
                        return r.add(t.schedule((function() {
                            return e.then((function(e) {
                                r.add(t.schedule((function() {
                                    n.next(e),
                                    r.add(t.schedule((function() {
                                        return n.complete()
                                    }
                                    )))
                                }
                                )))
                            }
                            ), (function(e) {
                                r.add(t.schedule((function() {
                                    return n.error(e)
                                }
                                )))
                            }
                            ))
                        }
                        ))),
                        r
                    }
                    ))
                }(e, t);
            if (Lt(e))
                return Bt(e, t);
            if (function(e) {
                return e && "function" == typeof e[Nt]
            }(e) || "string" == typeof e)
                return function(e, t) {
                    if (!e)
                        throw new Error("Iterable cannot be null");
                    return new je((function(n) {
                        var r, i = new Fe;
                        return i.add((function() {
                            r && "function" == typeof r.return && r.return()
                        }
                        )),
                        i.add(t.schedule((function() {
                            r = e[Nt](),
                            i.add(t.schedule((function() {
                                if (!n.closed) {
                                    var e, t;
                                    try {
                                        var i = r.next();
                                        e = i.value,
                                        t = i.done
                                    } catch (e) {
                                        return void n.error(e)
                                    }
                                    t ? n.complete() : (n.next(e),
                                    this.schedule())
                                }
                            }
                            )))
                        }
                        ))),
                        i
                    }
                    ))
                }(e, t)
        }
        throw new TypeError((null !== e && typeof e || e) + " is not observable")
    }
    function wr(e, t) {
        return t ? yr(e, t) : e instanceof je ? e : new je(jt(e))
    }
    var xr = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.parent = t,
            n
        }
        return we(t, e),
        t.prototype._next = function(e) {
            this.parent.notifyNext(e)
        }
        ,
        t.prototype._error = function(e) {
            this.parent.notifyError(e),
            this.unsubscribe()
        }
        ,
        t.prototype._complete = function() {
            this.parent.notifyComplete(),
            this.unsubscribe()
        }
        ,
        t
    }(Me)
      , Er = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return we(t, e),
        t.prototype.notifyNext = function(e) {
            this.destination.next(e)
        }
        ,
        t.prototype.notifyError = function(e) {
            this.destination.error(e)
        }
        ,
        t.prototype.notifyComplete = function() {
            this.destination.complete()
        }
        ,
        t
    }(Me);
    function Sr(e, t) {
        if (!t.closed)
            return e instanceof je ? e.subscribe(t) : jt(e)(t)
    }
    function Ir(e, t, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY),
        "function" == typeof t ? function(r) {
            return r.pipe(Ir((function(n, r) {
                return wr(e(n, r)).pipe(Gn((function(e, i) {
                    return t(n, e, r, i)
                }
                )))
            }
            ), n))
        }
        : ("number" == typeof t && (n = t),
        function(t) {
            return t.lift(new Ar(e,n))
        }
        )
    }
    var Ar = function() {
        function e(e, t) {
            void 0 === t && (t = Number.POSITIVE_INFINITY),
            this.project = e,
            this.concurrent = t
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Tr(e,this.project,this.concurrent))
        }
        ,
        e
    }()
      , Tr = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var i = e.call(this, t) || this;
            return i.project = n,
            i.concurrent = r,
            i.hasCompleted = !1,
            i.buffer = [],
            i.active = 0,
            i.index = 0,
            i
        }
        return we(t, e),
        t.prototype._next = function(e) {
            this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
        }
        ,
        t.prototype._tryNext = function(e) {
            var t, n = this.index++;
            try {
                t = this.project(e, n)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.active++,
            this._innerSub(t)
        }
        ,
        t.prototype._innerSub = function(e) {
            var t = new xr(this)
              , n = this.destination;
            n.add(t);
            var r = Sr(e, t);
            r !== t && n.add(r)
        }
        ,
        t.prototype._complete = function() {
            this.hasCompleted = !0,
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe()
        }
        ,
        t.prototype.notifyNext = function(e) {
            this.destination.next(e)
        }
        ,
        t.prototype.notifyComplete = function() {
            var e = this.buffer;
            this.active--,
            e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
        }
        ,
        t
    }(Er);
    function Or(e) {
        return void 0 === e && (e = Number.POSITIVE_INFINITY),
        Ir(Le, e)
    }
    function Rr() {
        return Or(1)
    }
    function Fr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return Rr()(vr.apply(void 0, e))
    }
    function kr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var n = e[e.length - 1];
        return Ft(n) ? (e.pop(),
        function(t) {
            return Fr(e, t, n)
        }
        ) : function(t) {
            return Fr(e, t)
        }
    }
    function Cr(e, t) {
        return function(n) {
            return n.lift(new Mr(e,t))
        }
    }
    var Mr = function() {
        function e(e, t) {
            this.compare = e,
            this.keySelector = t
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Pr(e,this.compare,this.keySelector))
        }
        ,
        e
    }()
      , Pr = function(e) {
        function t(t, n, r) {
            var i = e.call(this, t) || this;
            return i.keySelector = r,
            i.hasKey = !1,
            "function" == typeof n && (i.compare = n),
            i
        }
        return we(t, e),
        t.prototype.compare = function(e, t) {
            return e === t
        }
        ,
        t.prototype._next = function(e) {
            var t;
            try {
                var n = this.keySelector;
                t = n ? n(e) : e
            } catch (e) {
                return this.destination.error(e)
            }
            var r = !1;
            if (this.hasKey)
                try {
                    r = (0,
                    this.compare)(this.key, t)
                } catch (e) {
                    return this.destination.error(e)
                }
            else
                this.hasKey = !0;
            r || (this.key = t,
            this.destination.next(e))
        }
        ,
        t
    }(Me);
    class Nr {
        constructor() {
            this._storage = this._storage || {}
        }
        get _storage() {
            return self.__CS_SHARE_STORAGE__
        }
        set _storage(e) {
            self.__CS_SHARE_STORAGE__ = e
        }
        clean() {
            this._storage = {}
        }
        set(e, t) {
            this._storage[e] = t
        }
        get(e) {
            return this._storage[e]
        }
        getOnce(e) {
            const t = this._storage[e];
            return this.remove(e),
            t
        }
        remove(e) {
            delete this._storage[e]
        }
    }
    var Lr, Ur, jr;
    !function(e) {
        class t extends Error {
            constructor(e, t=1e3) {
                super(`SafePromiseError: ${e}`),
                this.stack = (super.stack || "").slice(t)
            }
        }
        function n(e) {
            return e.catch((e=>e instanceof Error && !e.stack ? Promise.reject(new t(e.message)) : Promise.reject(e)))
        }
        e.fromPromise = n,
        e.fromAsync = function(e) {
            return (...t)=>n(e(...t))
        }
        ,
        e.noop = e.fromPromise(Promise.resolve()),
        e.create = function(e) {
            return n(new Promise(e))
        }
        ,
        e.sync = function(e) {
            return n(new Promise(((t,n)=>t(e()))))
        }
        ,
        e.createCompletionSource = c,
        e.delay = a
    }(Lr || (Lr = {}));
    class Dr {
        constructor(e, t) {
            this._transport = e,
            this._log = t,
            this._calls = new Map,
            this._sub = this._transport.inbound.subscribe((e=>{
                var t;
                const n = this._calls.get(e.id);
                if (n)
                    try {
                        "err"in e ? n.reject(e.err) : n.resolve(e.res)
                    } finally {
                        this._calls.delete(e.id)
                    }
                else
                    null === (t = this._log) || void 0 === t || t.warn(`received rpc call response for unregistered call ${e.id}`)
            }
            )),
            this.api = new Proxy({},{
                get: (e,t)=>"then" === t ? void 0 : (...e)=>this._handleCall(t, e)
            })
        }
        _handleCall(e, t) {
            let n = w.create();
            for (; this._calls.has(n); )
                n = w.create();
            const r = Lr.createCompletionSource();
            return this._calls.set(n, r),
            this._transport.outbound({
                id: n,
                method: e,
                args: t
            }),
            r.promise
        }
        dispose() {
            this._sub.unsubscribe()
        }
    }
    class Br {
        constructor(e, t, n=w.create(), r=e) {
            this._rpcMessageName = e,
            this._message = t,
            this._clientId = n,
            this._inboundMessageName = r,
            this.inbound = new je((e=>{
                const t = t=>{
                    t.clientId === this._clientId && e.next(t.data)
                }
                ;
                return this._message.on(this._inboundMessageName, t),
                ()=>this._message.off(this._inboundMessageName, t)
            }
            )),
            this.outbound = e=>{
                this._message.sendBackground(this._rpcMessageName, {
                    clientId: this._clientId,
                    data: e
                })
            }
        }
    }
    class $r extends Dr {
        constructor(e) {
            super(new Br("cs-to-bg-rpc-1557421403805",e))
        }
    }
    function Wr(e) {
        return "tunnel" !== e.tag
    }
    !function(e) {
        e.rpcLegacyMessageName = "cs-to-bg-rpc-1587687052565",
        e.rpcLegacyObservableName = "cs-to-bg-observable-rpc-1587687052565"
    }(Ur || (Ur = {})),
    function(e) {
        e.isSubscribe = e=>"action"in e.data && "subscribe" === e.data.action,
        e.isUnsubscribe = e=>"action"in e.data && "unsubscribe" === e.data.action,
        e.isDispose = e=>"action"in e.data && "dispose" === e.data.action,
        e.isPong = e=>"pong"in e.data,
        e.isPing = e=>"ping"in e.data,
        e.isObservableResult = e=>"subscribableId"in e
    }(jr || (jr = {}));
    const Vr = Symbol();
    var Hr, Gr;
    function qr(e) {
        return e instanceof je ? e : new je((t=>e.subscribe(t)))
    }
    !function(e) {
        e.measure = e=>t=>new je((n=>t.subscribe((t=>e((()=>n.next(t)))), (e=>n.error(e)), (()=>n.complete())))),
        e.using = (e,t)=>function(e, t) {
            return new je((function(n) {
                var r, i;
                try {
                    r = e()
                } catch (e) {
                    return void n.error(e)
                }
                try {
                    i = t(r)
                } catch (e) {
                    return void n.error(e)
                }
                var s = (i ? wr(i) : ir).subscribe(n);
                return function() {
                    s.unsubscribe(),
                    r && r.unsubscribe()
                }
            }
            ))
        }(e, t),
        e.doNothing = e=>e
    }(Hr || (Hr = {}));
    class zr {
        constructor(e, t, n=Gt.create(zr.name), r) {
            this._transport = e,
            this._observableTransport = t,
            this._log = n,
            this._serverId = r,
            this._calls = new Map,
            this._subscribeRelatedCalls = new Map,
            this._observables = new Map,
            this._subscribers = new Map,
            this._transportSubscription = qr(this._transport.inbound).pipe(it(Wr)).subscribe((e=>{
                this._processResponse(e)
            }
            )),
            this._observableTransportSubscription = qr(this._observableTransport.inbound).pipe(it(Wr)).subscribe((e=>{
                this._processObservableMessage(e)
            }
            )),
            this.api = new Proxy({},{
                get: (e,t)=>"then" === t ? void 0 : (...e)=>this._handleCall(t, e)
            })
        }
        _processResponse(e) {
            const t = this._calls.get(e.id);
            if (t)
                try {
                    if ("err"in e)
                        t.reject(e.err);
                    else if (jr.isObservableResult(e))
                        try {
                            const n = new je((t=>this._createSubscribeHandler(e.subscribableId, t)));
                            this._observables.set(e.subscribableId, n),
                            t.resolve(n)
                        } catch (t) {
                            this._observables.delete(e.subscribableId)
                        }
                    else
                        t.resolve(this.transformResult(e.res))
                } finally {
                    this._calls.delete(e.id)
                }
            else
                this._log.warn(`received rpc call response for unregistered call ${e.id}`)
        }
        transformResult(e) {
            return e
        }
        _processObservableMessage(e) {
            if ("subscribed"in e) {
                const t = this._subscribeRelatedCalls.get(e.id);
                if (t)
                    try {
                        t.resolve()
                    } finally {
                        this._subscribeRelatedCalls.delete(e.id)
                    }
                else
                    this._log.warn(`received rpc call subscribed response for unregistered subscribe call ${e.id}`)
            } else if ("unsubscribed"in e) {
                const t = this._subscribeRelatedCalls.get(e.id);
                if (t)
                    try {
                        t.resolve()
                    } finally {
                        this._subscribeRelatedCalls.delete(e.id),
                        this._subscribers.delete(e.id)
                    }
                else
                    this._log.warn(`received rpc call unsubscribed response for unregistered unsubscribe call ${e.id}`)
            } else if ("next"in e)
                try {
                    const t = this._subscribers.get(e.subscriptionId);
                    t ? t.subscriber.next(e.next) : this._log.warn(`received observable next message for unregistered subscription ${e.subscriptionId}`)
                } catch (t) {
                    this._subscribers.delete(e.subscriptionId)
                }
            else if ("complete"in e)
                try {
                    const t = this._subscribers.get(e.subscriptionId);
                    t ? (t.subscriber.complete(),
                    this._subscribers.delete(e.subscriptionId)) : this._log.warn(`received observable complete for unregistered subscription ${e.subscriptionId}`)
                } catch (t) {
                    this._subscribers.delete(e.subscriptionId)
                }
            else if ("err"in e)
                try {
                    const t = this._subscribers.get(e.subscriptionId);
                    t ? t.subscriber.error(e.err) : this._log.warn(`received observable error for unregistered subscription  ${e.subscriptionId}`)
                } finally {
                    this._subscribers.delete(e.subscriptionId)
                }
            else if ("subErr"in e) {
                const t = this._subscribeRelatedCalls.get(e.id);
                try {
                    const n = this._subscribers.get(e.id);
                    n ? n.subscriber.error(e.subErr) : this._log.warn(`received subscription error response for unregistered call ${e.id}`)
                } finally {
                    t && (t.reject(e.subErr),
                    this._subscribeRelatedCalls.delete(e.id)),
                    this._observables.delete(e.subscribableId),
                    this._subscribers.delete(e.id)
                }
            } else if ("ping"in e)
                try {
                    this._observables.get(e.ping) ? this._observableTransport.outbound({
                        pong: e.ping
                    }) : this._log.warn(`received ping for unregistered observable ${e.ping}`)
                } finally {}
        }
        _handleCall(e, t) {
            let n = w.create();
            for (; this._calls.has(n); )
                n = w.create();
            const r = Lr.createCompletionSource();
            this._calls.set(n, r);
            const i = t.map((e=>{
                return t = e,
                Boolean(t) && t._tag === Vr ? e.toJSON() : e;
                var t
            }
            ));
            return this._transport.outbound({
                id: n,
                method: e,
                args: i,
                serverId: this._serverId
            }),
            r.promise
        }
        _createSubscribeHandler(e, t) {
            let n = w.create();
            for (; this._subscribeRelatedCalls.has(n); )
                n = w.create();
            const r = Lr.createCompletionSource();
            return this._subscribeRelatedCalls.set(n, r),
            this._observableTransport.outbound({
                id: n,
                subscribableId: e,
                action: "subscribe"
            }),
            this._subscribers.set(n, {
                subscribableId: e,
                subscriber: t
            }),
            ()=>{
                this._handleUnsubscribe(n, e)
            }
        }
        _handleUnsubscribe(e, t) {
            let n = w.create();
            for (; this._subscribeRelatedCalls.has(n); )
                n = w.create();
            const r = Lr.createCompletionSource();
            return this._subscribeRelatedCalls.set(n, r),
            this._observableTransport.outbound({
                id: n,
                subscriptionId: e,
                subscribableId: t,
                action: "unsubscribe"
            }),
            this._subscribers.delete(e),
            r.promise
        }
        dispose() {
            for (const e of this._observables.keys())
                this._observableTransport.outbound({
                    id: w.create(),
                    subscribableId: e,
                    action: "dispose"
                });
            this._observables.clear(),
            this._transportSubscription.unsubscribe(),
            this._observableTransportSubscription.unsubscribe(),
            this._calls.clear(),
            this._subscribeRelatedCalls.clear()
        }
    }
    class Kr extends zr {
        constructor(e) {
            super(new Br(Ur.rpcLegacyMessageName,e), new Br(Ur.rpcLegacyObservableName,e))
        }
    }
    !function(e) {
        e.rpcLegacyMessageName = "cs-to-bg-static-capi-rpc-1668544923207",
        e.rpcLegacyObservableName = "cs-to-bg-static-capi-observable-rpc-1668544923207"
    }(Gr || (Gr = {}));
    class Jr extends zr {
        constructor(e) {
            super(new Br(Gr.rpcLegacyMessageName,e), new Br(Gr.rpcLegacyObservableName,e))
        }
    }
    class Yr extends rn {
        static getInstance() {
            if (void 0 === this._instanceCSShared)
                throw new Error("Env not inited yet");
            return this._instanceCSShared
        }
        static get isInited() {
            return void 0 !== this._instanceCSShared
        }
        static initShared(e) {
            if (void 0 !== this._instanceCSShared)
                throw new Error("Env already inited");
            this._instanceCSShared = e,
            rn.initShared(e)
        }
    }
    const Xr = Gt.create("extension-api");
    class Qr {
        constructor(e) {
            this._baseApi = e,
            this._log = Gt.create(Qr.name),
            this._initializedListenerEvents = new Set,
            this._listeners = {},
            this._logError = e=>{
                this._log.error(`${Qr.name} handle an error: ${e.message}`)
            }
            ,
            this.on = (e,t)=>{
                var n;
                this._listeners[e] = null !== (n = this._listeners[e]) && void 0 !== n ? n : [],
                this._listeners[e].push(t),
                this._initializedListenerEvents.has(e) || (this._initializedListenerEvents.add(e),
                this._baseApi.listen(e, ((...t)=>{
                    var n;
                    const r = null !== (n = this._listeners[e]) && void 0 !== n ? n : [];
                    for (const e of r)
                        try {
                            e(...t)
                        } catch (e) {
                            this._logError(e)
                        }
                }
                )))
            }
            ,
            this.once = (e,t)=>{
                const n = (...r)=>{
                    this.off(e, n);
                    try {
                        t(...r)
                    } catch (e) {
                        this._logError(e)
                    }
                }
                ;
                this.on(e, n)
            }
            ,
            this.off = (e,t)=>{
                if (!this._listeners[e])
                    return;
                const n = this._listeners[e].indexOf(t);
                -1 !== n && this._listeners[e].splice(n, 1),
                0 === this._listeners[e].length && delete this._listeners[e]
            }
        }
    }
    class Zr extends Qr {
        constructor(e) {
            super(e),
            this._api = e,
            this.sendBackground = (e,t)=>{
                try {
                    this._api.broadcastBackground(e, t)
                } catch (e) {
                    this._logError(e)
                }
            }
        }
    }
    const ei = "tracking/RPC";
    class ti extends Yr {
        static get isInited() {
            return void 0 !== this._instance
        }
        static getInstance() {
            if (void 0 === this._instance)
                throw new Error("Env not inited yet");
            return this._instance
        }
        static init(e) {
            if (void 0 !== this._instance)
                throw new Error("Env already inited");
            const t = new ti(e);
            return this._instance = t,
            Yr.initShared(t),
            t.browserApi.message.start && t.browserApi.message.start(),
            t
        }
        constructor(e) {
            var t;
            super({
                browser: e.browser,
                extensionType: e.extensionType,
                deploymentType: e.deploymentType,
                context: "cs",
                historyLoggerExtraArgs: {
                    enableHistoryLoggerUntil: e=>{
                        var t;
                        null === (t = this.bgRpc) || void 0 === t || t.api.enableHistoryLoggerUntil(e)
                    }
                    ,
                    getBGLogs: ()=>{
                        var e;
                        return null === (e = this.bgRpc) || void 0 === e ? void 0 : e.api.getBGLogs()
                    }
                    ,
                    disableHistoryLogger: ()=>{
                        var e;
                        null === (e = this.bgRpc) || void 0 === e || e.api.disableHistoryLogger()
                    }
                }
            }),
            this.browserApi = e.browserApi,
            this.message = new Zr(e.browserApi.message),
            e.skipInitExtensionApi || (t = e.browserApi,
            self.extensionContentScriptApi && Xr.warn("Content Script Extension Api init called more than once"),
            self.extensionContentScriptApi = self.extensionContentScriptApi || t),
            this.bgRpc = new $r(this.message),
            this.csShareStorage = new Nr,
            this.capiBgRpc = new Kr(this.message),
            this.staticCapiBgRpc = new Jr(this.message),
            this.telemetryCallProvider = function(e, t=Gt.create("lib.tracking.call.transport")) {
                return new Proxy({},{
                    get: (n,r)=>{
                        if ("enableDataSharing" !== r)
                            return (...n)=>{
                                Promise.race([e.api.trackCall(ei, [r, ...n]).then((()=>null)), a(1e4).then((()=>new Error("timeout call through bg page")))]).then((e=>e && t.warn("tracking call timeout", e))).catch((e=>t.warn("tracking call failed, reason:", e)))
                            }
                    }
                })
            }(this.bgRpc)
        }
    }
    const ni = 2147483642;
    var ri;
    !function(e) {
        function t(e, t) {
            try {
                for (const n of Object.keys(t))
                    if (t[n] && t[n](e))
                        return n;
                return null
            } catch (e) {
                return null
            }
        }
        e.isSpecific = {
            draftJs: e=>!(!e.hasAttribute("contenteditable") || !e.querySelector('[data-contents="true"] > [data-editor], [data-block]')),
            quill: e=>e.classList.contains("ql-editor") || e.classList.contains("ql-container"),
            redactor: e=>e.className.indexOf("redactor") > -1,
            prosemirror: e=>e.hasAttribute("pm-container") || e.classList.contains("ProseMirror"),
            scribe: e=>e.className.indexOf("scribe") > -1,
            trix: e=>e.className.indexOf("trix") > -1,
            "medium-editor": e=>e.className.indexOf("medium-editor") > -1,
            tinymce: e=>{
                if ("IFRAME" !== e.tagName)
                    return !1;
                const t = e;
                return t.id.indexOf("mce") > -1 || !!(t.contentDocument && t.contentDocument.querySelectorAll("#tinymce, .mce-content-body").length > 0)
            }
            ,
            ckeditor4: e=>e.matches("iframe.cke_wysiwyg_frame") || e.classList.contains("cke_editable"),
            ckeditor5: e=>e.classList.contains("ck-editor__editable"),
            slate: e=>"true" === e.getAttribute("data-slate-editor"),
            mobiledoc: e=>e.classList.contains("__mobiledoc-editor")
        },
        e.isGeneric = {
            contenteditable: e=>{
                const t = e.attributes.getNamedItem("contenteditable");
                return !(!function(e) {
                    return !(e instanceof HTMLSelectElement)
                }(e) || !t || "true" !== t.value && "" !== t.value && "plaintext-only" !== t.value)
            }
            ,
            textarea: e=>"TEXTAREA" === e.tagName,
            iframe: t=>{
                if ("IFRAME" === t.tagName) {
                    const n = t;
                    return !!(n.contentDocument && n.contentDocument.body && e.isGeneric.contenteditable(n.contentDocument.body))
                }
                return !1
            }
            ,
            iframeHost: t=>{
                if ("IFRAME" === t.tagName) {
                    const n = t;
                    return !(n.contentDocument && n.contentDocument.body && e.isGeneric.contenteditable(n.contentDocument.body))
                }
                return !1
            }
        },
        e.get = function(n) {
            return {
                generic: t(n, e.isGeneric),
                specific: t(n, e.isSpecific)
            }
        }
    }(ri || (ri = {}));
    var ii = 1
      , si = function() {
        return Promise.resolve()
    }()
      , oi = {};
    function ai(e) {
        return e in oi && (delete oi[e],
        !0)
    }
    var ci, ui = function(e) {
        var t = ii++;
        return oi[t] = !0,
        si.then((function() {
            return ai(t) && e()
        }
        )),
        t
    }, li = function(e) {
        ai(e)
    }, di = function(e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.scheduler = t,
            r.work = n,
            r
        }
        return we(t, e),
        t.prototype.requestAsyncId = function(t, n, r) {
            return void 0 === r && (r = 0),
            null !== r && r > 0 ? e.prototype.requestAsyncId.call(this, t, n, r) : (t.actions.push(this),
            t.scheduled || (t.scheduled = ui(t.flush.bind(t, null))))
        }
        ,
        t.prototype.recycleAsyncId = function(t, n, r) {
            if (void 0 === r && (r = 0),
            null !== r && r > 0 || null === r && this.delay > 0)
                return e.prototype.recycleAsyncId.call(this, t, n, r);
            0 === t.actions.length && (li(n),
            t.scheduled = void 0)
        }
        ,
        t
    }(Yn), hi = new (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return we(t, e),
        t.prototype.flush = function(e) {
            this.active = !0,
            this.scheduled = void 0;
            var t, n = this.actions, r = -1, i = n.length;
            e = e || n.shift();
            do {
                if (t = e.execute(e.state, e.delay))
                    break
            } while (++r < i && (e = n.shift()));
            if (this.active = !1,
            t) {
                for (; ++r < i && (e = n.shift()); )
                    e.unsubscribe();
                throw t
            }
        }
        ,
        t
    }(Qn))(di);
    function pi() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var n = Number.POSITIVE_INFINITY
          , r = null
          , i = e[e.length - 1];
        return Ft(i) ? (r = e.pop(),
        e.length > 1 && "number" == typeof e[e.length - 1] && (n = e.pop())) : "number" == typeof i && (n = e.pop()),
        null === r && 1 === e.length && e[0]instanceof je ? e[0] : Or(n)($t(e, r))
    }
    function fi(e, t, n) {
        return n ? fi(e, t).pipe(Gn((function(e) {
            return Te(e) ? n.apply(void 0, e) : n(e)
        }
        ))) : new je((function(n) {
            var r, i = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return n.next(1 === e.length ? e[0] : e)
            };
            try {
                r = e(i)
            } catch (e) {
                return void n.error(e)
            }
            if (xe(t))
                return function() {
                    return t(i, r)
                }
        }
        ))
    }
    function gi(e) {
        var t = e.error;
        e.subscriber.error(t)
    }
    ci || (ci = {});
    var mi = function() {
        function e(e, t, n) {
            this.kind = e,
            this.value = t,
            this.error = n,
            this.hasValue = "N" === e
        }
        return e.prototype.observe = function(e) {
            switch (this.kind) {
            case "N":
                return e.next && e.next(this.value);
            case "E":
                return e.error && e.error(this.error);
            case "C":
                return e.complete && e.complete()
            }
        }
        ,
        e.prototype.do = function(e, t, n) {
            switch (this.kind) {
            case "N":
                return e && e(this.value);
            case "E":
                return t && t(this.error);
            case "C":
                return n && n()
            }
        }
        ,
        e.prototype.accept = function(e, t, n) {
            return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, n)
        }
        ,
        e.prototype.toObservable = function() {
            var e, t;
            switch (this.kind) {
            case "N":
                return vr(this.value);
            case "E":
                return e = this.error,
                new je(t ? function(n) {
                    return t.schedule(gi, 0, {
                        error: e,
                        subscriber: n
                    })
                }
                : function(t) {
                    return t.error(e)
                }
                );
            case "C":
                return sr()
            }
            throw new Error("unexpected notification kind value")
        }
        ,
        e.createNext = function(t) {
            return void 0 !== t ? new e("N",t) : e.undefinedValueNotification
        }
        ,
        e.createError = function(t) {
            return new e("E",void 0,t)
        }
        ,
        e.createComplete = function() {
            return e.completeNotification
        }
        ,
        e.completeNotification = new e("C"),
        e.undefinedValueNotification = new e("N",void 0),
        e
    }();
    function bi(e, t) {
        return void 0 === t && (t = 0),
        function(n) {
            return n.lift(new vi(e,t))
        }
    }
    var _i, vi = function() {
        function e(e, t) {
            void 0 === t && (t = 0),
            this.scheduler = e,
            this.delay = t
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new yi(e,this.scheduler,this.delay))
        }
        ,
        e
    }(), yi = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = 0);
            var i = e.call(this, t) || this;
            return i.scheduler = n,
            i.delay = r,
            i
        }
        return we(t, e),
        t.dispatch = function(e) {
            var t = e.notification
              , n = e.destination;
            t.observe(n),
            this.unsubscribe()
        }
        ,
        t.prototype.scheduleMessage = function(e) {
            this.destination.add(this.scheduler.schedule(t.dispatch, this.delay, new wi(e,this.destination)))
        }
        ,
        t.prototype._next = function(e) {
            this.scheduleMessage(mi.createNext(e))
        }
        ,
        t.prototype._error = function(e) {
            this.scheduleMessage(mi.createError(e)),
            this.unsubscribe()
        }
        ,
        t.prototype._complete = function() {
            this.scheduleMessage(mi.createComplete()),
            this.unsubscribe()
        }
        ,
        t
    }(Me), wi = function() {
        return function(e, t) {
            this.notification = e,
            this.destination = t
        }
    }();
    function xi(e, t) {
        return Ir(e, t, 1)
    }
    function Ei(e, t) {
        var n, r, i;
        const s = null === (i = null === (r = null === (n = null == t ? void 0 : t.citationBuilder) || void 0 === n ? void 0 : n.domains) || void 0 === r ? void 0 : r[e]) || void 0 === i ? void 0 : i.disabled;
        return void 0 !== s ? !s : void 0
    }
    function Si(e, t) {
        return Ri(t).some((t=>new RegExp(t.domain).test(e)))
    }
    function Ii(e) {
        var t, n;
        return !(null !== (n = null === (t = e.citationBuilder) || void 0 === t ? void 0 : t.disabled) && void 0 !== n && n)
    }
    function Ai(e, t) {
        return Ri(t).some((t=>{
            const n = new RegExp(t.domain)
              , r = new RegExp(t.pathname);
            return n.test(e.hostname) && r.test(e.pathname)
        }
        ))
    }
    function Ti(e, t, n) {
        const r = Ei(e, n);
        return Ii(t) && (void 0 === r && Si(e, t) || !0 === r)
    }
    !function(e) {
        const t = Gt.create("universal.cs.integration.observables")
          , n = e=>Kn(e, "focus", {
            capture: !0
        });
        function r(e) {
            return e instanceof Element && e.shadowRoot && e.shadowRoot.activeElement ? r(e.shadowRoot.activeElement) : e
        }
        function i(e, t) {
            return {
                document: e,
                frame: t
            }
        }
        e.createFocusObservable = function(e, s, o=n) {
            return function(e, n) {
                const r = i(e)
                  , s = wr(e.getElementsByTagName("iframe"))
                  , o = n.pipe(xi((e=>Array.from(e.addedNodes))), it((e=>"IFRAME" === e.nodeName)));
                return Fr(s, o).pipe(it((n=>function(e, n) {
                    try {
                        const t = e.src;
                        if (t && "about:blank" !== t && !t.startsWith("javascript")) {
                            return new URL(t,n.baseURI).origin === n.location.origin
                        }
                        return !0
                    } catch (e) {
                        return t.warn("Error converting iframe's src to url", e),
                        !0
                    }
                }(n, e))), Ir((e=>{
                    try {
                        return function(e) {
                            const t = e.contentDocument;
                            return t && "complete" === t.readyState
                        }(e) ? vr(e) : fi((t=>e.addEventListener("load", t, !0)), (t=>e.removeEventListener("load", t))).pipe(Gn((()=>e)), or(1))
                    } catch (e) {
                        return t.warn("failed to receive iframes document", e),
                        vr(null)
                    }
                }
                )), Gn((e=>{
                    try {
                        if (null !== e && null !== e.contentDocument)
                            return i(e.contentDocument, e)
                    } catch (e) {
                        t.warn("failed to receive iframes document", e)
                    }
                    return null
                }
                )), it((e=>null !== e))).pipe(kr(r))
            }(e, s).pipe(Ir((e=>function(e, t, n) {
                const i = e.document
                  , s = er(ee)
                  , o = e.frame ? ir : (l = ()=>vr(i.activeElement).pipe(it((e=>e && i.defaultView && i.defaultView.HTMLElement && e instanceof i.defaultView.HTMLElement))),
                new je((function(e) {
                    var t;
                    try {
                        t = l()
                    } catch (t) {
                        return void e.error(t)
                    }
                    return (t ? wr(t) : sr()).subscribe(e)
                }
                )))
                  , a = t(i).pipe(Gn((e=>e.target)))
                  , c = e.frame ? ir : pi(s, n).pipe(it((e=>!!i.defaultView && "visible" === i.visibilityState && !!i.activeElement)), Gn((e=>i.activeElement)), Cr())
                  , u = pi(c, a).pipe(it((e=>i.defaultView && i.defaultView.HTMLElement && e instanceof i.defaultView.HTMLElement)), Gn((e=>r(e))));
                var l;
                return Fr(o, u).pipe(Cr())
            }(e, o, s).pipe(Gn((t=>({
                element: t,
                owner: e
            })))))), Cr(), bi(hi))
        }
        ,
        e.docInfo = i
    }(_i || (_i = {}));
    const Oi = {
        name: "samples.extension.grammarlyaws.com",
        domain: "^samples.extension.grammarlyaws.com$",
        pathname: ".*"
    };
    function Ri(e) {
        var t, n;
        return (null !== (n = null === (t = e.citationBuilder) || void 0 === t ? void 0 : t.sources) && void 0 !== n ? n : []).concat(Oi)
    }
    _((()=>_n(document.location.href))),
    _((e=>{
        const t = document.location.href;
        return {
            url: t,
            domain: _n(t),
            isUrlAllowlisted: Ai(document.location, e)
        }
    }
    )),
    _((()=>w.create()));
    var Fi, ki;
    !function(e) {
        function t(e, t) {
            if (!e || !t)
                return !0;
            return !t.includes(e)
        }
        function n(e, t) {
            var n;
            return Boolean((null == t ? void 0 : t.isDesktopIntegrationEnabled) && (null === (n = e.llamaIntegration) || void 0 === n ? void 0 : n.enabled))
        }
        function r(e, n, r, i) {
            var s, o;
            const a = i ? _n(i) : void 0
              , c = n.isLlamaInstalled && (null === (s = r.llamaIntegration) || void 0 === s ? void 0 : s.enabled);
            return t(a, null === (o = r.llamaIntegration) || void 0 === o ? void 0 : o.disabledByDomain) && (c || "true" === e.showDesktopIntegrationExtensionToggle)
        }
        e.isEnabled = n,
        e.showSettingPopupToggle = r,
        e.showGrayGButton = function(e, t, i, s) {
            return r(t, e, i, s) && n(i, e)
        }
        ,
        e.isIntegrationEnabled = function(e, r, i) {
            var s;
            return !(!e || !i) && (t(r, null === (s = i.llamaIntegration) || void 0 === s ? void 0 : s.disabledByDomain) && n(i, e))
        }
    }(Fi || (Fi = {})),
    function(e) {
        e.full = "full",
        e.limited = "limited"
    }(ki || (ki = {}));
    const Ci = "grammarly-desktop-integration";
    var Mi, Pi;
    !function(e) {
        class t {
            constructor() {
                this._integration = null
            }
            get integration() {
                if (this._integration)
                    return this._integration;
                return Boolean(document.querySelector(Ci)) ? null : (this._integration = function(e=Ci) {
                    var t, n;
                    const r = `\n  div.${e} {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select:none;\n    user-select:none;\n  }\n\n  div.${e}:before {\n    content: attr(data-content);\n  }\n`
                      , i = document.createElement("style");
                    i.textContent = r;
                    const s = document.createElement("div");
                    s.setAttribute("aria-label", "grammarly-integration"),
                    s.setAttribute("role", "group"),
                    s.setAttribute("tabindex", "-1"),
                    s.setAttribute("class", e);
                    const o = document.createElement(e);
                    return o.attachShadow({
                        mode: "open"
                    }),
                    o.setAttribute("data-grammarly-shadow-root", "true"),
                    null === (t = o.shadowRoot) || void 0 === t || t.appendChild(i),
                    null === (n = o.shadowRoot) || void 0 === n || n.appendChild(s),
                    document.documentElement.appendChild(o),
                    {
                        activate: (e,t,n)=>{
                            null == s || s.setAttribute("data-content", JSON.stringify(t ? {
                                mode: t,
                                isActive: e,
                                isUserDisabled: n
                            } : {
                                isActive: e
                            }))
                        }
                        ,
                        remove: ()=>{
                            var e;
                            null === (e = null == o ? void 0 : o.parentNode) || void 0 === e || e.removeChild(o)
                        }
                    }
                }(Ci),
                this._integration)
            }
            updateState(e, t, n, r) {
                var i;
                this._isActive = !Fi.isIntegrationEnabled(r, e, t),
                this._mode = Fi.isEnabled(t, r) ? ki.limited : ki.full,
                n ? null === (i = this.integration) || void 0 === i || i.activate(this._isActive, this._mode, !n) : this.dispose()
            }
            dispose() {
                this._integration && (this._integration.remove(),
                this._integration = null)
            }
        }
        e.init = function() {
            return new t
        }
    }(Mi || (Mi = {})),
    function(e) {
        function t(e, t) {
            return n(e, t).pipe(rt(), bi(hi))
        }
        function n(e, t) {
            return new je((n=>{
                const r = new MutationObserver((e=>n.next(e)));
                return r.observe(e, t),
                ()=>r.disconnect()
            }
            ))
        }
        e.create = t,
        e.createUnsafe = n,
        e.createFlattenHot = function(e, t) {
            return n(e, t).pipe(xi((e=>e)), rt())
        }
        ,
        e.observeAttribute = function(e, n) {
            return t(e, {
                attributes: !0,
                attributeFilter: [n],
                subtree: !1,
                childList: !1
            }).pipe(Gn((t=>e.getAttribute(n))))
        }
        ,
        e.observeStyle = function(e) {
            return t(e, {
                attributes: !0,
                attributeFilter: ["style"],
                subtree: !1,
                childList: !1
            }).pipe(Gn((t=>e.style)))
        }
        ,
        e.observeChildList = function(e) {
            return t(e, {
                attributes: !1,
                subtree: !1,
                childList: !0
            }).pipe(Gn((t=>e.childNodes)))
        }
    }(Pi || (Pi = {}));
    const Ni = "data-enable-grammarly"
      , Li = ["data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor", "readonly", "disabled"]
      , Ui = ["pm-container", {
        name: "class",
        value: "ProseMirror"
    }, "data-synchrony", {
        name: "data-gramm",
        value: "false"
    }, {
        name: Ni,
        value: "false"
    }, {
        name: "aria-label",
        value: "Search Facebook"
    }]
      , ji = ["changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix", "llama-action"];
    function Di(e, t) {
        let n = e.parentNode;
        for (; null !== n; ) {
            if ($i(n, t))
                return n;
            n = n.parentNode
        }
        return !1
    }
    function Bi(e) {
        return "true" === e.contentEditable || "plaintext-only" === e.contentEditable
    }
    function $i(e, t) {
        if (!e)
            return !1;
        const n = e.matches || e.msMatchesSelector || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector;
        return !!n && n.apply(e, [t])
    }
    function Wi(e, t=null, n) {
        return this.addEventListener(e, t, n),
        {
            off: ()=>Vi.apply(this, [e, t, n])
        }
    }
    function Vi(e, t, n) {
        this.removeEventListener(e, t || null, n)
    }
    var Hi;
    !function(e) {
        e.init = function(e, t) {
            const n = Gt.create("lib.external");
            !function(e, t, n, r=document, i=!1, s=!1, o, a) {
                const c = e
                  , u = r.documentElement;
                if (i) {
                    const e = r.createElement("link");
                    e.href = c,
                    e.rel = "preload",
                    e.as = "script",
                    e.onload = ()=>{
                        e.remove()
                    }
                    ,
                    u.prepend(e)
                }
                const l = r.createElement("script");
                l.async = !1,
                l.defer = !1,
                l.src = c,
                l.type = "text/javascript",
                t && l.setAttribute("data-ext-id", t),
                n && l.setAttribute("data-ext-version", n),
                s && l.setAttribute("data-ext-minimal", "true"),
                l.onload = ()=>{
                    null == o || o(),
                    l.remove()
                }
                ,
                l.onerror = ()=>{
                    null == a || a()
                }
                ,
                u.prepend(l)
            }(t("src/js/Grammarly-externalEventsInjectedCs.js"), J());
            const r = ji.map((t=>{
                const r = `external:${t}`;
                return Wi.call(document, r, (({detail: t})=>{
                    n.trace("external event", {
                        event: r,
                        detail: t
                    }),
                    e.sendBackground(r, t)
                }
                ))
            }
            ));
            return {
                dispose: ()=>{
                    r.forEach((e=>e.off()))
                }
            }
        }
    }(Hi || (Hi = {}));
    var Gi, qi = n(47598);
    function zi(e, t) {
        const n = e.anchorNode;
        if (!n)
            return !1;
        const r = Li.map((e=>Array.isArray(e) ? `[${e[0]}="${e[1]}"]` : `[${e}]`)).join(",")
          , i = t.activeElement
          , s = e.toString().trim()
          , o = "TEXTAREA" !== n.tagName && "INPUT" !== n.tagName
          , a = !i || "INPUT" !== i.tagName && "TEXTAREA" !== i.tagName
          , c = !Bi(n)
          , u = !Di(n, r) && !$i(n, r)
          , l = !Di(n, "[contenteditable=true],[contenteditable=plaintext-only]") && !function(e) {
            let t = e.parentNode;
            for (; null !== t; ) {
                if (Bi(t))
                    return t;
                t = t.parentNode
            }
            return !1
        }(n);
        return !!(s && o && a && c && u && l)
    }
    !function(e) {
        let t;
        !function(e) {
            e.disableOnTab = "disableOnTab",
            e.reloadTab = "reloadTab",
            e.showOnboardingDialog = "showOnboardingDialog",
            e.hideGdocsSigninPopupMessage = "hideGdocsSigninPopupMessage",
            e.downloadLogs = "downloadLogs"
        }(t = e.Kind || (e.Kind = {}))
    }(Gi || (Gi = {}));
    var Ki = function() {
        function e(e, t) {
            this.dueTime = e,
            this.scheduler = t
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new Ji(e,this.dueTime,this.scheduler))
        }
        ,
        e
    }()
      , Ji = function(e) {
        function t(t, n, r) {
            var i = e.call(this, t) || this;
            return i.dueTime = n,
            i.scheduler = r,
            i.debouncedSubscription = null,
            i.lastValue = null,
            i.hasValue = !1,
            i
        }
        return we(t, e),
        t.prototype._next = function(e) {
            this.clearDebounce(),
            this.lastValue = e,
            this.hasValue = !0,
            this.add(this.debouncedSubscription = this.scheduler.schedule(Yi, this.dueTime, this))
        }
        ,
        t.prototype._complete = function() {
            this.debouncedNext(),
            this.destination.complete()
        }
        ,
        t.prototype.debouncedNext = function() {
            if (this.clearDebounce(),
            this.hasValue) {
                var e = this.lastValue;
                this.lastValue = null,
                this.hasValue = !1,
                this.destination.next(e)
            }
        }
        ,
        t.prototype.clearDebounce = function() {
            var e = this.debouncedSubscription;
            null !== e && (this.remove(e),
            e.unsubscribe(),
            this.debouncedSubscription = null)
        }
        ,
        t
    }(Me);
    function Yi(e) {
        e.debouncedNext()
    }
    function Xi(e, t) {
        return "function" == typeof t ? function(n) {
            return n.pipe(Xi((function(n, r) {
                return wr(e(n, r)).pipe(Gn((function(e, i) {
                    return t(n, e, r, i)
                }
                )))
            }
            )))
        }
        : function(t) {
            return t.lift(new es(e))
        }
    }
    var Qi, Zi, es = function() {
        function e(e) {
            this.project = e
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new ts(e,this.project))
        }
        ,
        e
    }(), ts = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.project = n,
            r.index = 0,
            r
        }
        return we(t, e),
        t.prototype._next = function(e) {
            var t, n = this.index++;
            try {
                t = this.project(e, n)
            } catch (e) {
                return void this.destination.error(e)
            }
            this._innerSub(t)
        }
        ,
        t.prototype._innerSub = function(e) {
            var t = this.innerSubscription;
            t && t.unsubscribe();
            var n = new xr(this)
              , r = this.destination;
            r.add(n),
            this.innerSubscription = Sr(e, n),
            this.innerSubscription !== n && r.add(this.innerSubscription)
        }
        ,
        t.prototype._complete = function() {
            var t = this.innerSubscription;
            t && !t.closed || e.prototype._complete.call(this),
            this.unsubscribe()
        }
        ,
        t.prototype._unsubscribe = function() {
            this.innerSubscription = void 0
        }
        ,
        t.prototype.notifyComplete = function() {
            this.innerSubscription = void 0,
            this.isStopped && e.prototype._complete.call(this)
        }
        ,
        t.prototype.notifyNext = function(e) {
            this.destination.next(e)
        }
        ,
        t
    }(Er);
    !function(e) {
        e.anonymous = "anonymous",
        e.registered = "registered",
        e.premium = "premium"
    }(Qi || (Qi = {})),
    function(e) {
        function t(e) {
            var t;
            return ["BUSINESS", "NGO", "GOV"].includes((null === (t = e.institutionInfo) || void 0 === t ? void 0 : t.organizationType) || "")
        }
        function n(e) {
            return !!e.institutionInfo
        }
        function r(e) {
            var t;
            return (null === (t = e.roles) || void 0 === t ? void 0 : t.map((e=>e.type)).includes("WORKSPACE")) || !1
        }
        e.getType = function(e) {
            return e.premium ? Qi.premium : e.anonymous ? Qi.anonymous : Qi.registered
        }
        ,
        e.isFree = function(e) {
            return !e.anonymous && !e.premium
        }
        ,
        e.isPremium = function(e) {
            return !e.anonymous && e.premium
        }
        ,
        e.getUserRole = function(e, t) {
            var n;
            return null === (n = e.roles) || void 0 === n ? void 0 : n.find((e=>e.type === t))
        }
        ,
        e.isEdcBlocked = function(e) {
            return !!e.edc && !e.edc.compliant
        }
        ,
        e.isDocsDisabled = function(e) {
            var t, n;
            return null !== (n = null === (t = e.editorFeatures) || void 0 === t ? void 0 : t.docsDisabled) && void 0 !== n && n
        }
        ,
        e.hasRole = function(e) {
            return !!e.customFields && (void 0 !== e.customFields.frontend_role && "" !== e.customFields.frontend_role)
        }
        ,
        e.hasSoundFluentGoals = function(e) {
            return !!e.customFields && (void 0 !== e.customFields.frontend_soundFluent && "" !== e.customFields.frontend_soundFluent)
        }
        ,
        e.hasPrimaryLanguage = function(e) {
            return !!e.customFields && (void 0 !== e.customFields.frontend_primaryLanguage && "" !== e.customFields.frontend_primaryLanguage)
        }
        ,
        e.isBusinessAdmin = function(e) {
            var n;
            return Boolean(t(e) && (null === (n = null == e ? void 0 : e.institutionInfo) || void 0 === n ? void 0 : n.admin))
        }
        ,
        e.doesUserBelongToBusinessInstitution = t,
        e.doesUserBelongToInstitution = n,
        e.doesUserBelongToEDUInstitution = function(e) {
            var t;
            return "EDU" === (null === (t = e.institutionInfo) || void 0 === t ? void 0 : t.organizationType)
        }
        ,
        e.doesUserBelongToNGOInstitution = function(e) {
            var t;
            return "NGO" === (null === (t = e.institutionInfo) || void 0 === t ? void 0 : t.organizationType)
        }
        ,
        e.doesUserBelongToWorkspace = r,
        e.doesUserBelongToInstitutionOrWorkspace = function(e) {
            return n(e) || r(e)
        }
        ,
        e.isClaimed = function(e) {
            return e.groups.includes("claimed-invitation")
        }
        ;
        e.isGrammarlyEmployee = function(e) {
            var t;
            return e.email.endsWith("@grammarly.com") && 624392205 === (null === (t = e.institutionInfo) || void 0 === t ? void 0 : t.id)
        }
        ,
        e.isTestUser = function(e) {
            return e.email.endsWith("@bh.exacttarget.com")
        }
        ,
        e.isConsumerUser = function(e) {
            return !n(e)
        }
        ,
        e.defaultUser = {
            anonymous: !0,
            groups: [],
            id: "",
            premium: !1,
            isTest: !1,
            settings: {},
            subscriptionFree: !1,
            type: "anonymous",
            email: "",
            registrationDate: (new Date).toString(),
            firstName: ""
        }
    }(Zi || (Zi = {}));
    const ns = {
        source: "local",
        version: "0",
        newRichTextFieldsEnabled: !0,
        fluidDisabledForFirefox: !1,
        fluidDisabledForSafari: !1,
        fullSentenceRewritesDisabled: !1,
        overrideKey: "dynamicConfigOverrideKey",
        ungatingRenewalNotificationEnabled: !1,
        quillJSCatchAllDisabled: !1
    };
    const rs = (e,t)=>{
        const n = {
            getAll: async()=>await r.getAll(),
            get: async e=>await r.get(e),
            view: ()=>{
                throw new Error("not_implemented")
            }
            ,
            patch: async e=>await r.set(e),
            changes: (r = e.browserApi.preferences).changes
        };
        var r;
        const i = Vt(wr(n.changes).pipe(kr(null), (o = 200,
        void 0 === a && (a = Zn),
        function(e) {
            return e.lift(new Ki(o,a))
        }
        ), Xi((()=>n.getAll()))), wr(y(5, (s = 2,
        ee / s), (()=>e.bgRpc.api.getPageConfig(t, self.location.href))).catch((e=>null))).pipe(kr(null)), ((e,n)=>{
            var r, i, s, o, a, c;
            const u = null !== (i = null === (r = e.extensionSettings) || void 0 === r ? void 0 : r[t]) && void 0 !== i ? i : {}
              , l = (null === (s = null == u ? void 0 : u.enabled) || void 0 === s || s) && (null === (o = null == n ? void 0 : n.enabled) || void 0 === o || o);
            return {
                user: null !== (a = e.user) && void 0 !== a ? a : Zi.defaultUser,
                settings: e.extensionSettings,
                dynamicConfig: null !== (c = e.dynamicConfig) && void 0 !== c ? c : ns,
                dapi: e.dapi,
                enabled: l
            }
        }
        ));
        var s, o, a;
        return {
            storeLite: n,
            viewStoreLite: i
        }
    }
    ;
    var is = n(97924);
    const ss = "grExtInstalled"
      , os = "grExtDisabled";
    function as(e) {
        null === e && "next" === document.body.dataset[os] || (null === e ? delete document.body.dataset[os] : document.body.dataset[os] = e)
    }
    class cs {
        constructor(e, t, n) {
            this._csShareStorage = e,
            this._loadContentScript = t,
            this._pageEnable = !0,
            this._citationBuilderEnable = !1,
            this._enabledDefs = !1,
            this._isAnonymous = !0,
            this._wasLoaded = !1,
            this._isDesktopIntegrationEnable = !1,
            this._mutations = Pi.createFlattenHot(self.document, {
                childList: !0,
                subtree: !0
            }),
            this._textFieldsObservable = _i.createFocusObservable(self.document, this._mutations),
            this._subs = [this._textFieldsObservable.subscribe((e=>{
                const t = e.owner.frame || e.element
                  , n = ri.get(t);
                this._pageEnable && (n.generic || n.specific) && this.load()
            }
            )), cs.clickObserver.subscribe((e=>{
                2 === e.detail && this._enabledDefs && this._pageEnable && !this._isAnonymous && ls.isValid() && (this._csShareStorage.set("extensionDictionaryEvent", e),
                this._subs.push(ls.animation()),
                this.load())
            }
            ))],
            n && !Z() && this.load()
        }
        load() {
            this._wasLoaded && !this._isDesktopIntegrationEnable || (this._wasLoaded = !0,
            ds.callExecuteContentScript(),
            this.dispose(),
            this._loadContentScript())
        }
        dispose() {
            this._subs.forEach((e=>e.unsubscribe()))
        }
        updateState(e, t, n, r, i) {
            this._isDesktopIntegrationEnable = r,
            (!this._pageEnable && t || !this._citationBuilderEnable && i) && this.load(),
            this._citationBuilderEnable = i,
            this._isAnonymous = e,
            this._pageEnable = t,
            this._enabledDefs = n,
            as(this._pageEnable ? null : "forever")
        }
    }
    var us, ls, ds;
    function hs() {
        return self.chrome && self.chrome.runtime && self.chrome.runtime.lastError
    }
    function ps() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }
    function fs() {
        return ps() + ps() + "-" + ps() + "-" + ps() + "-" + ps() + "-" + ps() + ps() + ps()
    }
    !function(e) {
        e.clickObserver = Kn(self.document, "click", {
            capture: !0
        }),
        e.start = async function(t, n=!0, r, i=!1) {
            ds.checkScriptInitStart();
            const s = bn()
              , o = ti.init({
                ...t,
                skipInitExtensionApi: n
            })
              , a = []
              , c = new e(o.csShareStorage,(()=>{
                (null != r ? r : o.bgRpc.api.loadContentScript)(),
                a.forEach((e=>e && e.dispose()))
            }
            ),i)
              , u = Mi.init()
              , l = us.init(o.browserApi, o.message, o.config, s)
              , {viewStoreLite: d} = rs(o, s)
              , h = _((e=>{
                Hn().sendFemetricsRate("checkScriptInitialized", {
                    domain: yn(),
                    isExtensionEnabled: e,
                    isIframe: Z()
                })
            }
            ))
              , p = d.subscribe((e=>{
                var t, n, r, i;
                const o = null === (t = e.settings) || void 0 === t ? void 0 : t.common;
                c.updateState(null === (r = null === (n = e.user) || void 0 === n ? void 0 : n.anonymous) || void 0 === r || r, e.enabled, null !== (i = null == o ? void 0 : o.enabledDefs) && void 0 !== i && i, Fi.isIntegrationEnabled(o, s, e.dynamicConfig), Ti(s, e.dynamicConfig, o)),
                u.updateState(s, e.dynamicConfig, e.enabled, o),
                h(e.enabled)
            }
            ))
              , f = [c, l, u];
            o.message.once("contentScript-disconnected", (()=>{
                p.unsubscribe(),
                o.csShareStorage.clean(),
                f.forEach((e=>e && e.dispose()))
            }
            )),
            o.message.once(Gi.Kind.disableOnTab, (()=>{
                u.dispose()
            }
            )),
            o.message.on(Gi.Kind.downloadLogs, o.historyLogsService.downloadLogs),
            a.push({
                dispose: ()=>o.message.off(Gi.Kind.downloadLogs, o.historyLogsService.downloadLogs)
            }),
            ds.checkScriptInitEnd(o.bgRpc),
            (e=>{
                if (self.location.href.includes("grammarly.com/extension-success")) {
                    const t = document.getElementById("click-to-run");
                    t && (t.onclick = ()=>{
                        var t, n;
                        confirm("Always allow Grammarly to run on every website") ? (e.api.enableClickToRunOnAllWebsites(),
                        null === (t = document.getElementById("click-to-run-success")) || void 0 === t || t.click()) : null === (n = document.getElementById("click-to-run-fail")) || void 0 === n || n.click()
                    }
                    )
                }
            }
            )(o.bgRpc)
        }
    }(cs || (cs = {})),
    function(e) {
        function t(e) {
            er(10).pipe(it((()=>!!document.body)), mr()).subscribe((()=>{
                document.body.dataset.newGrCSCheckLoaded = e.buildInfo.version,
                document.body.dataset[ss] = ""
            }
            ))
        }
        e.init = function(e, n, r, i) {
            const s = [];
            return t(r),
            self.location.protocol === r.appConfig.url.grammarlyProtocol && i.match(`^([a-z\\-0-9]+\\.)*${r.appConfig.url.grammarlyDomain}$`) && s.push(Hi.init(n, e.getUrl)),
            {
                dispose: ()=>{
                    s.forEach((e=>e.dispose()))
                }
            }
        }
    }(us || (us = {})),
    function(e) {
        const t = "important";
        function n(e) {
            return String(e) + "px"
        }
        e.isValid = function() {
            const e = self.document.getSelection();
            return !(!e || e.toString().match(/[0-9_±!@#$%^&*:"|<>?~().,:}{’='-/ /]/)) && zi(e, self.document)
        }
        ,
        e.animation = function() {
            const e = document.createElement("div")
              , r = e.attachShadow({
                mode: "open"
            })
              , i = document.createElement("style");
            i.innerHTML = is.__css,
            r.appendChild(i);
            const s = self.document.getSelection().getRangeAt(0).getBoundingClientRect()
              , o = document.createElement("div");
            o.style.setProperty("top", n(s.top), t),
            o.style.setProperty("left", n(s.left), t),
            o.style.setProperty("height", n(s.height), t),
            o.style.setProperty("max-width", n(s.width), t),
            o.style.setProperty("z-index", ni.toString(), t),
            o.classList.add(is.animatedUnderline, is.checkAnimatedUnderline),
            r.appendChild(o),
            document.body.appendChild(e);
            const a = er(10)
              , c = Vt(cs.clickObserver.pipe(mr(), (u = !1,
            function(e) {
                return e.lift(new br(u))
            }
            ), kr(!0), Cr()), a.pipe(Gn((()=>{
                const e = "." + qi.completeAnimation;
                if (document.querySelector(e))
                    return !0;
                const t = Array.from(document.querySelectorAll("grammarly-extension"));
                for (const n of t)
                    if (n.shadowRoot && n.shadowRoot.querySelector(e))
                        return !0;
                return !1
            }
            )), kr(!1), Cr())).pipe(it((([e,t])=>!e || t)), Cr()).subscribe(l);
            var u;
            return {
                unsubscribe: l
            };
            function l() {
                c.unsubscribe(),
                e.remove()
            }
        }
    }(ls || (ls = {})),
    function(e) {
        const t = Date.now()
          , n = e=>self.performance.mark("@grammarly-extension:" + e);
        e.callExecuteContentScript = ()=>n("callExecuteContentScript"),
        e.checkScriptInitEnd = e=>{
            const r = Math.random() < .01;
            if (n("checkScriptInitEnd"),
            r) {
                const n = Date.now();
                e.api.trackCall(ei, ["sendFelogEvent", {
                    ex_csInitPerf: {
                        domain: self.location.host,
                        initTime: n - t,
                        pageLoadTime: n - self.performance.timing.responseEnd
                    },
                    hideUserInfo: !0,
                    level: "INFO",
                    logger: "checkScript.initialized"
                }])
            }
        }
        ,
        e.checkScriptInitStart = ()=>n("checkScriptInitStart")
    }(ds || (ds = {}));
    const gs = "%appName%"
      , ms = {
        extensionSettingsToolbar: "%appName%SettingsToolbar",
        gdocsSidebarCardList: "%appName%AdvancedIssues",
        assistantCardList: "%appName%AdvancedIssues",
        extensionSettingsAssistant: "%appName%AssistantSettings",
        gdocsGoals: "%appName%AssistantGoals",
        extensionBusinessUphookPopup: "gb%appName%UphookPopup",
        gbExtensionSettingsToolbar: "gb%appName%SettingsToolbar",
        gbExtensionSettingsAssistant: "gb%appName%AssistantSettings",
        gdocsSidebarSuccessView: "%appName%GDocsSidebarAssistantSuccessView",
        extensionGButton: "%appName%GButton",
        extPreviewsPopup: "%appName%PreviewsPopup",
        toneSuggestion: "%appName%ToneDetector"
    };
    function bs(e, t) {
        return {
            key: e,
            value: t
        }
    }
    function _s(e) {
        const t = ms[e];
        return t ? t.replace(gs, ((e,t)=>{
            const n = I.getAppName(X(), K().bundleInfo.extensionType, K().bundleInfo.deploymentType);
            return 0 === t ? n : (r = n).charAt(0).toUpperCase() + r.slice(1);
            var r
        }
        )) : e
    }
    function vs(e, t) {
        return bs(e, t)
    }
    function ys(e) {
        return e.map((e=>[e.key, e.value].map(encodeURIComponent).join("="))).join("&")
    }
    function ws(e, t) {
        if (0 === t.length)
            return e;
        const n = e.includes("?");
        return [e, ys(t)].join(n ? "&" : "?")
    }
    function xs(e) {
        const t = [];
        return void 0 !== e.medium && t.push(vs("utm_medium", e.medium)),
        void 0 !== e.source && t.push(vs("utm_source", e.source)),
        void 0 !== e.campaign && t.push(vs("utm_campaign", _s(e.campaign))),
        e.clickToRun && t.push(vs("click_to_run", "true")),
        t
    }
    function Es(e) {
        return xs(e)
    }
    bs("fromExtension", "true");
    xs({
        medium: "internal"
    })[0];
    function Ss(e, t) {
        return ws(K().appConfig.url.planComparison, Es({
            medium: "internal",
            source: e,
            campaign: t
        }))
    }
    function Is(e) {
        const t = e.reduce(((e,t)=>{
            const n = e.get(t.category)
              , r = t.group;
            return n ? n.count++ : e.set(t.category, {
                group: r,
                categoryHuman: t.categoryHuman,
                count: 1
            }),
            e
        }
        ), new Map);
        return Array.from(t.values()).sort(((e,t)=>t.count - e.count))
    }
    function As(e) {
        const t = new Map;
        for (const {isFree: n, cardLayout: {group: r}} of e) {
            t.has(r) || t.set(r, {
                lensName: r,
                free: 0,
                premium: 0
            });
            const e = t.get(r);
            e && (e[n ? "free" : "premium"] += 1)
        }
        return Array.from(t.values()).sort(((e,t)=>t.premium - e.premium))
    }
    function Ts(e) {
        return btoa(JSON.stringify(e))
    }
    const Os = "docs.google.com";
    function Rs(e, t) {
        return (n,r)=>{
            return "extensionSettings" === n && ((i = r) && "object" == typeof i && "common"in i) ? function(e, t, n) {
                const r = e[Os];
                if (!1 !== (null == r ? void 0 : r.enabled) || (null == r ? void 0 : r.forcedEnabledDate_1639893688790))
                    return n(),
                    e;
                {
                    const {disabledDate: n, ...i} = r;
                    return t(n),
                    {
                        ...e,
                        [Os]: {
                            ...i,
                            enabled: !0,
                            forcedEnabledDate_1639893688790: Date.now()
                        }
                    }
                }
            }(r, e, t) : r;
            var i
        }
    }
    function Fs(e, t) {
        chrome.runtime.lastError ? t(chrome.runtime.lastError) : e()
    }
    class ks {
        constructor() {
            this._log = Gt.create("extension-api.managed-storage.validator")
        }
        validate(e, t) {
            switch (e) {
            case "GrammarlyEnrollmentToken":
                return "string" == typeof t && t.length > 0 && /^[a-z0-9_-]+$/i.test(t);
            case "GrammarlyBlockedClients":
            case "GrammarlyBlockedDomains":
                return "string" == typeof t;
            case "GrammarlyConfidentialModeEnabled":
            case "GrammarlyDlpEnabled":
                return "boolean" == typeof t;
            case "GrammarlyExtensionMode":
                return "string" == typeof t && ("limited" === t || "full" === t);
            default:
                return this._log.warn(`Unknown key: ${e}`),
                !1
            }
        }
    }
    class Cs {
        constructor() {
            this._log = Gt.create("extension-api.managed-storage.chrome"),
            this._validator = new ks
        }
        get(e) {
            return Lr.fromPromise(new Promise((t=>{
                chrome.storage.managed.get(e, (n=>{
                    Fs((()=>{
                        const r = n[e];
                        void 0 === r || this._validator.validate(e, r) ? t(r) : (this._log.warn(`Invalid value for "${e}": ${JSON.stringify(n[e])}`),
                        t(void 0))
                    }
                    ), (n=>{
                        this._log.error(`Could not get "${e}"`, n),
                        t(void 0)
                    }
                    ))
                }
                ))
            }
            )))
        }
    }
    const Ms = "message:to-priv";
    var Ps;
    !function(e) {
        e[e.success = 0] = "success",
        e[e.successWithEmpty = 1] = "successWithEmpty",
        e[e.alreadyMigrated = 2] = "alreadyMigrated"
    }(Ps || (Ps = {}));
    const Ns = Gt.create("extension-api.message")
      , Ls = ()=>`cs-bg-runtime-${J()}`
      , Us = ()=>{}
    ;
    class js {
        constructor() {
            this._listeners = {},
            this._queue = {},
            this.fire = (e,t,n=Us,r)=>{
                const i = this._listeners[e] || [];
                i.length ? i.forEach((e=>e(t, n, r))) : (this._queue[e] = this._queue[e] || [],
                this._queue[e].push({
                    content: t,
                    callback: n,
                    sender: r
                }))
            }
            ,
            this.unlisten = (e,t)=>{
                const n = this._listeners[e] || []
                  , r = n.indexOf(t);
                -1 !== r && (1 === n.length ? delete this._listeners[e] : n.splice(r, 1))
            }
            ,
            this.listenOnce = (e,t)=>{
                const n = (r,i,s)=>{
                    this.unlisten(e, n),
                    t && t(r, i, s)
                }
                ;
                this.listen(e, n)
            }
            ,
            this.listen = (e,t)=>{
                this._listeners[e] = this._listeners[e] || [],
                -1 === this._listeners[e].indexOf(t) && this._listeners[e].push(t);
                const n = this._queue[e] || [];
                if (n.length) {
                    for (const e of n)
                        try {
                            t(e.content, e.callback, e.sender)
                        } catch (e) {
                            Ns.error("exception during proccesing buffered messages", e)
                        }
                    delete this._queue[e]
                }
            }
        }
    }
    function Ds(e) {
        return Number.isFinite(e) || e === Number.NEGATIVE_INFINITY || e === Number.POSITIVE_INFINITY
    }
    const Bs = Gt.create("extension-api.message.bg")
      , $s = "popup";
    function Ws(e) {
        const {browser: t, extensionType: n} = K().bundleInfo;
        if (!e)
            return "safariIOSWebExtension" === n || "safariWebExtension" === n;
        const r = "firefox" === t ? /^moz-extension:\/\/.*\/src\/popup.html$/ : "safariWebExtension" === n || "safariIOSWebExtension" === n ? /^safari-web-extension:\/\/.*\/src\/popup.html$/ : "chrome" === t || "edge" === t ? chrome && chrome.runtime && chrome.runtime.id ? new RegExp(chrome.runtime.id + "/src/popup.html") : void 0 : f(t);
        return void 0 !== r && r.test(e)
    }
    class Vs {
        constructor(e, t, n, r) {
            this._getActiveTab = t,
            this._sendMessageToTab = n,
            this._getAllTabs = r,
            this.kind = "background-message-api",
            this.topFrameId = "0",
            this._callbacks = {},
            this._tabPorts = {
                popup: []
            },
            this._messageHelper = new js,
            this.toFocused = (e,t)=>Lr.fromPromise(this._getActiveTab().then((({id: n, url: r}={})=>{
                if (n)
                    return Ws(r) ? Bs.warn(`toFocussed not allowed for popup when it open like regular tab ${e}`, t) : void this._sendMessageToPorts({
                        type: e,
                        content: t,
                        callid: fs()
                    }, n)
            }
            ))),
            this._initPortListener = e=>{
                if (e.name === Ms) {
                    const {sender: t} = e;
                    if (t) {
                        if (t.tab) {
                            const {id: n, url: r} = t.tab;
                            if (n) {
                                let t = this._tabPorts[n];
                                void 0 === t && (t = this._tabPorts[n] = []),
                                t.push(e)
                            }
                            r && 0 === r.indexOf("http") && this._messageHelper.fire("tab-connected", {
                                tab: n,
                                url: r
                            }),
                            e.onDisconnect((()=>{
                                if (!n)
                                    return;
                                const t = this._tabPorts[n];
                                t && t.splice(t.indexOf(e), 1)
                            }
                            ))
                        }
                        if (Ws(t.url ? t.url : t.tab ? t.tab.url : "")) {
                            const t = $s;
                            this._tabPorts[t] = this._tabPorts[t] || [],
                            this._tabPorts[t].push(e),
                            e.onDisconnect((()=>{
                                const n = this._tabPorts[t];
                                n.splice(n.indexOf(e), 1)
                            }
                            ))
                        }
                    }
                    e.onMessage((n=>{
                        const r = ({callid: n, content: r, type: i})=>{
                            this._callbacks[n] && (this._callbacks[n](r),
                            delete this._callbacks[n]);
                            this._messageHelper.fire(i, r, (t=>e.postMessage({
                                content: t,
                                callid: n
                            })), t && t.tab ? {
                                tabId: String(t.tab.id),
                                frameId: void 0 === t.frameId ? void 0 : String(t.frameId)
                            } : {
                                tabId: $s
                            })
                        }
                        ;
                        "tab-connected" === n.type ? this._getActiveTab().then((({url: e}={})=>{
                            n.content = {
                                tab: $s,
                                url: e
                            },
                            r(n)
                        }
                        )) : r(n)
                    }
                    ))
                }
            }
            ,
            e(this._initPortListener)
        }
        async _findDestinationTab(e) {
            return (await this._getAllTabs()).find((t=>String(t.id) === String(e)))
        }
        async _sendMessageToPorts(e, t, n) {
            var r;
            try {
                const i = null === (r = this._tabPorts[t]) || void 0 === r ? void 0 : r.filter((e=>!Ds(n) || Ds(e.sender.frameId) && e.sender.frameId === n));
                if (null == i ? void 0 : i.length)
                    i.forEach((t=>t.postMessage(e)));
                else if (isNaN(Number(t)))
                    Bs.warn(`tab with id ${t} couldn't be found and not valid to send a tab message`);
                else {
                    const r = await this._findDestinationTab(t);
                    if (!r || "complete" !== r.status)
                        return;
                    const i = {
                        type: Ls(),
                        data: e
                    };
                    Bs.warn("no specified port on current destination"),
                    this._sendMessageToTab(i, Number(t), n).catch((async e=>{
                        const r = await this._findDestinationTab(t);
                        throw {
                            message: null == e ? void 0 : e.message,
                            stack: null == e ? void 0 : e.stack,
                            extra: {
                                tabId: t,
                                frameId: n,
                                isOpen: !!r,
                                status: null == r ? void 0 : r.status
                            }
                        }
                    }
                    ))
                }
            } catch (r) {
                Bs.error("send message to tab emit an error", r, {
                    tabId: t,
                    frameId: n,
                    msg: e
                })
            }
        }
        getPortExists(e) {
            return !!this._tabPorts[e]
        }
        sendTo(e, t, n, r) {
            const {tabId: i, frameId: s=null} = "object" == typeof e ? e : {
                tabId: String(e)
            }
              , o = {
                type: t,
                content: n
            };
            r && "function" == typeof r && (o.callid = fs(),
            this._callbacks[o.callid] = r),
            this._sendMessageToPorts(o, i, s ? Number(s) : void 0)
        }
        listen(e, t) {
            this._messageHelper.listen(e, t)
        }
    }
    const Hs = Gt.create("Messaging.extension-api.content");
    class Gs {
        constructor(e, t, n, r) {
            this._bgIsWorking = t,
            this._extensionId = n,
            this._onRuntimeMessageFromBg = r,
            this.kind = "content-script-message-api",
            this._callbacks = {},
            this._messageHelper = new js,
            this._disconnected = !1,
            this.broadcastBackground = async(e,t,n)=>{
                var r, i;
                const s = fs();
                n && "function" == typeof n && (this._callbacks[s] = n);
                try {
                    if (!this.backgroundPort) {
                        if (!await this._bgIsWorking())
                            throw new Error("lost connection to bg port");
                        this.initPort(),
                        Hs.trace("Content script connection was restored")
                    }
                    null === (r = this.backgroundPort) || void 0 === r || r.postMessage({
                        type: e,
                        callid: s,
                        content: t
                    })
                } catch (n) {
                    if (!await this._bgIsWorking())
                        return this._onDisconnect();
                    try {
                        this.initPort(),
                        null === (i = this.backgroundPort) || void 0 === i || i.postMessage({
                            type: e,
                            callid: s,
                            content: t
                        })
                    } catch (n) {
                        throw Hs.error("failed to invoke postMessage() on bg port", n, {
                            type: e,
                            callid: s,
                            content: t
                        }),
                        n
                    }
                }
            }
            ,
            this._onRuntimeMessageHandler = async(e,t,n)=>{
                if (n({
                    status: !0
                }),
                !await this._bgIsWorking())
                    return this._onDisconnect();
                t.id !== this._extensionId && e.type !== Ls() || (this._onBgPortMessage(e.data),
                this.initPort())
            }
            ,
            this._onBgPortMessage = ({callid: e, content: t, type: n})=>{
                this._callbacks[e] ? (this._callbacks[e](t),
                delete this._callbacks[e]) : this._messageHelper.fire(n, t, (t=>{
                    if (!this.backgroundPort)
                        throw new Error("fail reply to bg page - connection lost");
                    this.backgroundPort.postMessage({
                        content: t,
                        callid: e
                    })
                }
                ))
            }
            ,
            this._onDisconnect = async()=>{
                var e, t;
                if (null === (t = null === (e = this.backgroundPort) || void 0 === e ? void 0 : e.removeMessageListeners) || void 0 === t || t.call(e),
                this.backgroundPort = null,
                await this._bgIsWorking())
                    return Hs.trace("BG SW is shutdown, but BG SW page is still available."),
                    void this._messageHelper.fire("bgSW-shutdown", null);
                this._disconnected || (this._onRuntimeMessageFromBg.removeListener(this._onRuntimeMessageHandler),
                this._disconnected = !0,
                Hs.trace("Content script messaging went disconnected."),
                this._messageHelper.fire("contentScript-disconnected", null))
            }
            ,
            this._portInit = e,
            this.initPort(),
            this._onRuntimeMessageFromBg.addListener(this._onRuntimeMessageHandler)
        }
        initPort() {
            const e = this._portInit;
            this.backgroundPort || (this.backgroundPort = e(Ms),
            this.backgroundPort.onMessage(this._onBgPortMessage),
            this.backgroundPort.onDisconnect(this._onDisconnect))
        }
        listen(e, t) {
            this._messageHelper.listen(e, t)
        }
    }
    class qs {
        constructor(e, t) {
            this.port = e.runtime.connect({
                name: t
            })
        }
        onMessage(e) {
            this.port.onMessage.addListener(e)
        }
        onDisconnect(e) {
            this.port.onDisconnect.addListener(e)
        }
        postMessage(e) {
            this.port.postMessage(e)
        }
    }
    const zs = e=>({
        get: t=>Lr.create(((n,r)=>e.storage.local.get(t, (e=>{
            Fs((()=>n(e)), r)
        }
        )))),
        set: t=>Lr.create(((n,r)=>e.storage.local.set(t, (()=>{
            Fs(n, r)
        }
        )))),
        getAll: ()=>Lr.create(((t,n)=>e.storage.local.get(null, (e=>{
            Fs((()=>t(e)), n)
        }
        )))),
        remove: t=>Lr.create(((n,r)=>e.storage.local.remove(t, (()=>{
            Fs(n, r)
        }
        )))),
        removeAll: ()=>Lr.create(((t,n)=>e.storage.local.clear((()=>{
            Fs(t, n)
        }
        ))))
    });
    class Ks {
        constructor(e) {
            this._chromeInstance = e,
            this.get = e=>Lr.create(((t,n)=>{
                this._chromeInstance.storage.session.get(e, (e=>{
                    Fs((()=>t(e)), n)
                }
                ))
            }
            )),
            this.set = e=>Lr.create(((t,n)=>{
                this._chromeInstance.storage.session.set(e, (()=>{
                    Fs(t, n)
                }
                ))
            }
            )),
            this.getAll = ()=>Lr.create(((e,t)=>{
                this._chromeInstance.storage.session.get(null, (n=>{
                    Fs((()=>e(n)), t)
                }
                ))
            }
            )),
            this.remove = e=>Lr.create(((t,n)=>{
                this._chromeInstance.storage.session.remove(e, (()=>{
                    Fs(t, n)
                }
                ))
            }
            )),
            this.removeAll = ()=>Lr.create(((e,t)=>{
                this._chromeInstance.storage.session.clear((()=>{
                    Fs(e, t)
                }
                ))
            }
            ))
        }
    }
    class Js {
        constructor() {
            this._data = {},
            this.get = e=>Lr.sync((()=>(Array.isArray(e) ? e : [e]).reduce(((e,t)=>({
                ...e,
                [t]: this._data[t]
            })), {}))),
            this.set = e=>Lr.sync((()=>this._data = {
                ...this._data,
                ...e
            })),
            this.getAll = ()=>Lr.sync((()=>this._data)),
            this.remove = e=>Lr.sync((()=>{
                (Array.isArray(e) ? e : [e]).forEach((e=>{
                    e in this._data && delete this._data[e]
                }
                ))
            }
            )),
            this.removeAll = ()=>Lr.sync((()=>this._data = {}))
        }
    }
    class Ys {
        constructor(e, t) {
            this._chrome = e,
            this._manifestVersion = t,
            this.kind = "web-extension",
            this.executeScript = (e,t,n)=>Lr.create(((r,i)=>{
                "3" !== this._manifestVersion ? this._chrome.tabs.executeScript(t, {
                    file: e,
                    matchAboutBlank: !0,
                    ...n ? {
                        frameId: Number(n)
                    } : {}
                }, (e=>Xs(null == e ? void 0 : e[0], r, i))) : this._chrome.scripting.executeScript({
                    files: [e],
                    target: {
                        tabId: t,
                        ...n ? {
                            frameIds: [Number(n)]
                        } : {}
                    }
                }, (e=>{
                    var t;
                    return Xs(null === (t = null == e ? void 0 : e[0]) || void 0 === t ? void 0 : t.result, r, i)
                }
                ))
            }
            )),
            this.executeFunction = (e,t,n)=>Lr.create(((r,i)=>{
                "3" !== this._manifestVersion ? this._chrome.tabs.executeScript(t, {
                    code: `(${e.toString()})()`,
                    matchAboutBlank: !0,
                    ...n ? {
                        frameId: Number(n)
                    } : {}
                }, (e=>Xs(null == e ? void 0 : e[0], r, i))) : this._chrome.scripting.executeScript({
                    func: e,
                    target: {
                        tabId: t,
                        ...n ? {
                            frameIds: [Number(n)]
                        } : {}
                    }
                }, (e=>{
                    var t;
                    return Xs(null === (t = null == e ? void 0 : e[0]) || void 0 === t ? void 0 : t.result, r, i)
                }
                ))
            }
            )),
            this.insertCSS = (e,t,n,r)=>Lr.create(((i,s)=>{
                "3" !== this._manifestVersion ? this._chrome.tabs.insertCSS(e, {
                    file: t,
                    code: n,
                    matchAboutBlank: !0,
                    ...r ? {
                        frameId: Number(r)
                    } : {}
                }, (()=>Xs(void 0, i, s))) : this._chrome.scripting.insertCSS({
                    target: {
                        tabId: e,
                        ...r ? {
                            frameIds: [Number(r)]
                        } : {}
                    },
                    files: t ? [t] : void 0,
                    css: n
                }, (()=>Xs(void 0, i, s)))
            }
            ))
        }
        open(e, t) {
            return Lr.create(((n,r)=>{
                this._chrome.tabs.create({
                    url: e,
                    active: t
                }, (e=>{
                    Fs((()=>n(e)), r)
                }
                ))
            }
            ))
        }
        updateCurrent(e) {
            return Lr.create(((t,n)=>{
                this._chrome.tabs.update({
                    url: e
                }, (e=>{
                    Fs((()=>t(e)), n)
                }
                ))
            }
            ))
        }
        getActiveTab() {
            return Lr.create(((e,t)=>{
                const n = this._chrome.tabs;
                n.query({
                    active: !0,
                    lastFocusedWindow: !0
                }, (r=>{
                    Fs((()=>{
                        r && r.length ? e(r[0]) : n.query({
                            active: !0
                        }, (n=>{
                            Fs((()=>{
                                e(n[0])
                            }
                            ), t)
                        }
                        ))
                    }
                    ), t)
                }
                ))
            }
            ))
        }
        getAllTabs() {
            return Lr.create(((e,t)=>this._chrome.tabs.query({}, (n=>Fs((()=>e(n)), t)))))
        }
        getActiveTabUrl() {
            return Lr.create(((e,t)=>this.getActiveTab().then((n=>Fs((()=>e(n && n.url)), t)))))
        }
        onActiveTabChange(e, t) {
            const n = n=>{
                Fs((()=>{
                    n && e(n)
                }
                ), (n=>{
                    t(n),
                    "Tabs cannot be edited right now (user may be dragging a tab)." === (null == n ? void 0 : n.message) && setTimeout((()=>{
                        this.getActiveTab().then((n=>{
                            n && Fs((()=>e(n)), t)
                        }
                        ))
                    }
                    ), 100)
                }
                ))
            }
            ;
            this._chrome.tabs.onActivated.addListener((e=>this._chrome.tabs.get(e.tabId, (e=>n(e))))),
            this._chrome.tabs.onUpdated.addListener(((e,t)=>{
                this.getActiveTab().then((r=>{
                    r && r.id === e && (t.url || t.favIconUrl || "complete" === t.status) && this._chrome.tabs.get(e, (e=>n(e)))
                }
                ))
            }
            )),
            this._chrome.windows.onFocusChanged.addListener((e=>this._chrome.tabs.query({
                active: !0,
                windowId: e,
                lastFocusedWindow: !0
            }, (e=>n(e[0]))))),
            this.getActiveTab().then((e=>n(e)))
        }
        reload(e) {
            return Lr.create(((t,n)=>{
                const r = ()=>Fs((()=>t()), n);
                e.id ? this._chrome.tabs.reload(e.id, {}, r) : this._chrome.tabs.reload(r)
            }
            ))
        }
        focusTab(e) {
            return Lr.create(((t,n)=>{
                this._chrome.tabs.update(e, {
                    highlighted: !0
                }, (()=>{
                    Fs((()=>t()), n)
                }
                ))
            }
            ))
        }
        sendMessageToTab(e, t, n) {
            return Lr.create(((r,i)=>{
                this._chrome.tabs.sendMessage(t, e, {
                    frameId: n
                }, (()=>{
                    Fs((()=>r()), i)
                }
                ))
            }
            ))
        }
    }
    function Xs(e, t, n) {
        hs() ? n(hs()) : t(e)
    }
    var Qs, Zs, eo = function() {
        function e(e) {
            this.notifier = e
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new to(e,this.notifier))
        }
        ,
        e
    }(), to = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            r.hasValue = !1;
            var i = new xr(r);
            r.add(i),
            r.innerSubscription = i;
            var s = Sr(n, i);
            return s !== i && (r.add(s),
            r.innerSubscription = s),
            r
        }
        return we(t, e),
        t.prototype._next = function(t) {
            this.hasValue && e.prototype._next.call(this, t)
        }
        ,
        t.prototype.notifyNext = function() {
            this.hasValue = !0,
            this.innerSubscription && this.innerSubscription.unsubscribe()
        }
        ,
        t.prototype.notifyComplete = function() {}
        ,
        t
    }(Er);
    !function(e) {
        e[e.nonEmptyMigration = 0] = "nonEmptyMigration",
        e[e.emptyMigration = 1] = "emptyMigration"
    }(Qs || (Qs = {}));
    class no {
        constructor(e, t, n, r=[], i=((e,t,n)=>t)) {
            this._name = e,
            this._source = t,
            this._destination = n,
            this._destValuesToKeep = r,
            this._valuesMapper = i,
            this._migrationFlagSuccessfulValue = "ok",
            this._migrationFlagKey = `__migration-${no.migrationFlagUniqueKey}:(${this._name})`,
            this._migrationInProgress = !1,
            this.migrationAwareDestination = function(e, t) {
                const {get: n, set: r, getAll: i, remove: s} = _e(e);
                return {
                    get: n,
                    set: r,
                    getAll: i,
                    remove: s,
                    removeAll: Lr.fromAsync((async()=>{
                        const n = await e.getAll();
                        await e.removeAll(),
                        await e.set(En(t, n))
                    }
                    )),
                    changes: e.changes,
                    dispose: ()=>{}
                }
            }(this._destination, (e=>e === this._migrationFlagKey))
        }
        async _getMigrated() {
            return (await this._destination.get(this._migrationFlagKey))[this._migrationFlagKey] === this._migrationFlagSuccessfulValue
        }
        async _setMigrated() {
            await this._destination.set({
                [this._migrationFlagKey]: this._migrationFlagSuccessfulValue
            });
            const e = await this._destination.get(this._migrationFlagKey);
            if (e[this._migrationFlagKey] !== this._migrationFlagSuccessfulValue)
                throw new Error(`Could not verify status write, actual value: ${e}`)
        }
        async _runMigration() {
            E(!this._migrationInProgress, "migration already in progress"),
            this._migrationInProgress = !0;
            try {
                const e = await this._source.getAll()
                  , t = En(((e,t)=>void 0 !== t), function(e, t) {
                    const n = {};
                    return Object.keys(t).forEach((r=>n[r] = e(r, t[r]))),
                    n
                }(((t,n)=>this._valuesMapper(t, n, e)), e))
                  , n = 0 === Object.keys(t).length
                  , r = await this._destination.get(this._destValuesToKeep)
                  , i = {
                    ...t,
                    ...r
                };
                if (await this._destination.removeAll(),
                await this._destination.set(i),
                !d(i, await this._destination.getAll()))
                    throw new Error("Could not verify write");
                return this._migrationInProgress = !1,
                n ? Qs.emptyMigration : Qs.nonEmptyMigration
            } catch (e) {
                throw this._migrationInProgress = !1,
                e
            }
        }
        async ensureMigrationCompleted() {
            if (await this._getMigrated())
                return Ps.alreadyMigrated;
            {
                const e = await this._runMigration();
                switch (await this._setMigrated(),
                e) {
                case Qs.nonEmptyMigration:
                    return Ps.success;
                case Qs.emptyMigration:
                    return Ps.successWithEmpty;
                default:
                    throw new Error(`Match not exhaustive: ${e}`)
                }
            }
        }
    }
    no.migrationFlagUniqueKey = "104ccd8c-9919-9ae4-931f-782fb197486c",
    function(e) {
        e.MigrationAwarePreferencesApiImpl = class {
            constructor(e, t, n, r=[], i) {
                var s;
                this._source = t,
                this._destination = n,
                this._migrationCompleted = Lr.createCompletionSource(),
                this._ensureMigrationCompletedCalled = !1,
                this.get = this._getMigrationAwareMethod("get"),
                this.set = this._getMigrationAwareMethod("set"),
                this.getAll = this._getMigrationAwareMethod("getAll"),
                this.remove = this._getMigrationAwareMethod("remove"),
                this.removeAll = this._getMigrationAwareMethod("removeAll"),
                this._migration = new no(e,t,n,r,i),
                this.changes = wr(n.changes).pipe((s = wr(this._migrationCompleted.promise),
                function(e) {
                    return e.lift(new eo(s))
                }
                ))
            }
            dispose() {
                var e, t, n, r;
                null === (t = (e = this._source).dispose) || void 0 === t || t.call(e),
                null === (r = (n = this._destination).dispose) || void 0 === r || r.call(n)
            }
            ensureMigrationCompleted() {
                return this._ensureMigrationCompletedCalled = !0,
                Lr.fromPromise(this._migration.ensureMigrationCompleted().then((e=>{
                    var t, n;
                    return null === (n = (t = this._source).dispose) || void 0 === n || n.call(t),
                    this._migrationCompleted.resolve(!0),
                    Promise.resolve(e)
                }
                ), (e=>(this._migrationCompleted.resolve(!1),
                Promise.reject(e)))))
            }
            _getMigrationAwareMethod(e) {
                return (...t)=>(E(!0 === this._ensureMigrationCompletedCalled, "supposed to run data migration before accessing prefs with web-extensions API"),
                Lr.fromPromise(this._migrationCompleted.promise.then((n=>(n ? this._migration.migrationAwareDestination : this._source)[e](...t)))))
            }
        }
        ,
        e.mapValueFromString = e=>{
            if ("undefined" !== e)
                try {
                    return e && JSON.parse(e)
                } catch (t) {
                    return null != e ? e : void 0
                }
        }
        ,
        e.mapValueToString = e=>void 0 === e ? "undefined" : JSON.stringify(e)
    }(Zs || (Zs = {}));
    class ro {
        constructor(e) {
            this._port = e,
            this.sender = {};
            const {sender: t, name: n} = e;
            this.name = n,
            t && (this.sender.url = t.url,
            this.sender.frameId = t.frameId,
            t.tab && t.tab.url && t.tab.id && (this.sender.tab = {
                url: t.tab.url,
                id: t.tab.id
            }))
        }
        onMessage(e) {
            this._port.onMessage.addListener(e)
        }
        onDisconnect(e) {
            this._port.onDisconnect.addListener(e)
        }
        postMessage(e) {
            this._port.postMessage(e)
        }
    }
    class io {
        get button() {
            const e = this._action;
            return {
                kind: "web-extension",
                setBadge(t) {
                    e.setBadgeText({
                        text: t
                    })
                },
                setIconByName(t, n) {
                    const r = "./src/icon/icon"
                      , i = t ? "-" + t : "standWithUkraine" === n.logo ? "ua" : "";
                    e.setIcon({
                        path: {
                            16: `${r}16${i}.png`,
                            32: `${r}32${i}.png`
                        }
                    })
                },
                setBadgeBackgroundColor(t) {
                    e.setBadgeBackgroundColor({
                        color: t
                    })
                }
            }
        }
        get baseUri() {
            var e;
            return null !== (e = this._baseUrl) && void 0 !== e ? e : chrome.runtime.getURL("")
        }
        constructor(e) {
            var t;
            this._isBg = e,
            this._manifestVersion = "3",
            this._isManifestV3 = "3" === this._manifestVersion,
            this._action = this._isManifestV3 ? chrome.action : chrome.browserAction,
            this.managedStorage = new Cs,
            this.sessionStorage = this._isManifestV3 && chrome.storage.session ? new Ks(chrome) : new Js,
            this.tabs = new Ys(chrome,this._manifestVersion),
            this.thirdPartyExtensionsInstalled = {},
            this.notification = {
                kind: "web-extension",
                create: e=>Lr.create(((t,n)=>{
                    const r = chrome.notifications
                      , i = fs();
                    r.create(i, Object.assign({
                        type: "basic"
                    }, e), (()=>{
                        Fs((()=>{
                            const e = new je((e=>{
                                const t = t=>t === i && e.next(t);
                                return r.onClicked.addListener(t),
                                ()=>r.onClicked.removeListener(t)
                            }
                            ))
                              , n = new je((e=>{
                                const t = (t,n)=>t === i && e.next({
                                    id: t,
                                    buttonIndex: n
                                });
                                return r.onButtonClicked.addListener(t),
                                ()=>r.onButtonClicked.removeListener(t)
                            }
                            ))
                              , s = new je((e=>{
                                const t = (t,n)=>t === i && e.next({
                                    id: t,
                                    byUser: n
                                });
                                return r.onClosed.addListener(t),
                                ()=>r.onClosed.removeListener(t)
                            }
                            ));
                            t({
                                id: i,
                                click: e,
                                buttonClick: n,
                                close: s
                            })
                        }
                        ), n)
                    }
                    ))
                }
                )),
                clear: e=>Lr.create(((t,n)=>{
                    chrome.notifications.clear(e, (e=>{
                        Fs((()=>t(e)), n)
                    }
                    ))
                }
                ))
            },
            this.cookies = {
                kind: "web-extension",
                get: e=>Lr.create(((t,n)=>chrome.cookies.get(e, (e=>Fs((()=>t(e)), n))))),
                remove: e=>Lr.fromPromise(new Promise(((t,n)=>chrome.cookies.remove(e, (()=>Fs((()=>t(null)), n)))))),
                getAll: e=>Lr.create(((t,n)=>chrome.cookies.getAll(e, (e=>Fs((()=>t(e)), n))))),
                set: e=>Lr.create(((t,n)=>chrome.cookies.set(e, (e=>Fs((()=>t(e)), n))))),
                watch(e, t) {
                    const n = n=>{
                        const {cookie: r, cause: i} = n;
                        !r || !r.name || e.path && e.path !== r.path || e.name !== r.name || e.domain && -1 === r.domain.indexOf(e.domain) || ("explicit" === i && t(r),
                        "expired_overwrite" === i && t())
                    }
                    ;
                    return chrome.cookies.onChanged.addListener(n),
                    ()=>chrome.cookies.onChanged.removeListener(n)
                },
                getChanges(e) {
                    return new je((t=>this.watch(e, (e=>t.next(e)))))
                }
            },
            this._prefsBeforeMigration = function() {
                var e;
                const t = new Ve;
                return null === (e = chrome.storage) || void 0 === e || e.onChanged.addListener(((e,n)=>{
                    "local" === n && t.next(e)
                }
                )),
                {
                    ...zs(chrome),
                    changes: t
                }
            }(),
            this.preferences = this._isBg ? new Zs.MigrationAwarePreferencesApiImpl("chromeGdocsForceEnableMigration",this._prefsBeforeMigration,this._prefsBeforeMigration,void 0,Rs((e=>Hn().gdocs.disabledBeforeForceEnable(e)), (()=>Hn().gdocs.enabledBeforeForceEnable()))) : this._prefsBeforeMigration,
            this.management = {
                uninstallSelf() {
                    chrome.management.uninstallSelf()
                }
            },
            this._baseUrl = m((()=>chrome.runtime.getURL("")), (e=>null)),
            this.permissions = chrome.permissions ? {
                watchAdded: e=>{
                    chrome.permissions.onAdded.addListener(e)
                }
                ,
                added: new je((e=>{
                    const t = t=>{
                        e.next(t)
                    }
                    ;
                    return chrome.permissions.onAdded.addListener(t),
                    ()=>{
                        chrome.permissions.onAdded.removeListener(t)
                    }
                }
                )),
                watchRemoved: e=>{
                    chrome.permissions.onRemoved.addListener(e)
                }
                ,
                removed: new je((e=>{
                    const t = t=>{
                        e.next(t)
                    }
                    ;
                    return chrome.permissions.onRemoved.addListener(t),
                    ()=>{
                        chrome.permissions.onRemoved.removeListener(t)
                    }
                }
                )),
                getAll: Lr.fromAsync((()=>new Promise((e=>chrome.permissions.getAll(e))))),
                request: Lr.fromAsync((e=>new Promise(((t,n)=>chrome.permissions.request(e, (e=>{
                    chrome.runtime.lastError ? n(chrome.runtime.lastError) : t(e)
                }
                )))))),
                contains: Lr.fromAsync((e=>new Promise(((t,n)=>{
                    chrome.permissions.contains(e, (e=>{
                        chrome.runtime.lastError ? n(chrome.runtime.lastError) : t(e)
                    }
                    ))
                }
                ))))
            } : void 0,
            this.fetchBlocklistConfig = ()=>Lr.noop,
            this.getUrl = e=>this._baseUrl ? this._baseUrl + e : chrome.runtime.getURL(e),
            this.fetchInternalResource = (e,t)=>Lr.fromPromise(fetch(this.getUrl(e)).then((e=>"json" === t ? e.json() : e.arrayBuffer()))),
            this.openUrl = e=>this.tabs.open(e, !0),
            this.openPopupSubscriptionDialog = e=>this.openUrl(Ss(e.utmSource, e.utmCampaign)),
            this.openSubscriptionDialog = e=>function(e) {
                const t = K().appConfig.url;
                self.open(ws(t.planComparison, [...e.isFromEmail ? [bs("isFromEmail", "1")] : [], bs("alerts", Ts(Is(e.currentAlerts))), bs("lensedAlerts", Ts(As(e.currentAlerts))), bs("app_type", "popup"), bs("browser", X()), ...Es({
                    medium: "internal",
                    source: e.isAnonymousUser ? "signupHook" : "upHook",
                    campaign: e.forceUtmCampaign ? e.forceUtmCampaign : e.isAnonymousUser ? "extensionPremiumCta" : "extensionGButton"
                })]))
            }(e),
            this.isExtensionUrl = (e,t)=>this.getUrl(e) === t,
            this.reload = ()=>chrome.runtime.reload(),
            this.i18n = {
                detectLanguage: e=>Lr.create(((t,n)=>chrome.i18n.detectLanguage(e, (e=>Fs((()=>t(e)), n))))),
                getUILanguage: ()=>chrome.i18n.getUILanguage(),
                getAcceptLanguages: ()=>Lr.create(((e,t)=>chrome.i18n.getAcceptLanguages((n=>Fs((()=>e(n)), t)))))
            },
            this.initCodeSplittingListener = ()=>{
                return chrome.runtime.onMessage.addListener((e = this.tabs.executeScript,
                (t,n,r)=>{
                    t && "CODE_SPLITTING_INJECT" === t.type && t.file && n && n.tab && null != n.tab.id && (e(t.file, Number(n.tab.id), n.frameId),
                    r())
                }
                ));
                var e
            }
            ,
            this.isExtensionInstalled = Lr.fromAsync((async(e,t=!1)=>{
                if (!t && void 0 !== this.thirdPartyExtensionsInstalled[e])
                    return this.thirdPartyExtensionsInstalled[e];
                if ("undefined" == typeof fetch)
                    return !1;
                const n = io.thirdPartyExtensionsData[e].publicResources.reduce(((t,n)=>(Y() && t.push(`chrome-extension://${io.thirdPartyExtensionsData[e].MSStoreId}${n}`),
                t.concat(`chrome-extension://${io.thirdPartyExtensionsData[e].id}${n}`))), []);
                return (r = n.map((e=>fetch(e))),
                u(Promise.all([...r].map(u)))).then((e=>!0)).catch((e=>!1));
                var r
            }
            )),
            this.setUninstallURL = e=>chrome.runtime.setUninstallURL(e),
            this.message = e ? new Vs((e=>chrome.runtime.onConnect.addListener((t=>e(new ro(t))))),_e(this.tabs).getActiveTab,_e(this.tabs).sendMessageToTab,_e(this.tabs).getAllTabs) : new Gs((e=>new qs(chrome,e)),(t = ()=>this.preferences.getAll(),
            async()=>{
                try {
                    return await t(),
                    !0
                } catch (e) {
                    return !1
                }
            }
            ),chrome.runtime.id,chrome.runtime.onMessage)
        }
    }
    io.thirdPartyExtensionsData = {
        mseditor: {
            id: "gpaiobkfhnonedkhhfjpmhdalgeoebfa",
            MSStoreId: "hokifickgkhplphjiodbggjmoafhignh",
            publicResources: ["/fonts/fabric-icons.css"]
        },
        office: {
            id: "ndjpnladcallmjemlbaebfadecfhkepb",
            MSStoreId: "gggmmkjegpiggikcnhidnjjhmicpibll",
            publicResources: ["/fonts/fabric-icons.css"]
        }
    },
    cs.start({
        browser: "chrome",
        extensionType: "chromiumWebExtension",
        deploymentType: "regular",
        browserApi: function(e) {
            return new io(e)
        }(!1)
    })
}
)();
