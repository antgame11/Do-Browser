var jm = Object.defineProperty;
var Fm = Object.getPrototypeOf;
var $m = Reflect.get;
var Zu = i => {
    throw TypeError(i)
}
;
var Um = (i, e, t) => e in i ? jm(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t;
var O = (i, e, t) => Um(i, typeof e != "symbol" ? e + "" : e, t)
  , ed = (i, e, t) => e.has(i) || Zu("Cannot " + t)
  , Va = (i, e) => Object(e) !== e ? Zu('Cannot use the "in" operator on this value') : i.has(e)
  , s = (i, e, t) => (ed(i, e, "read from private field"),
t ? t.call(i) : e.get(i))
  , u = (i, e, t) => e.has(i) ? Zu("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t)
  , m = (i, e, t, r) => (ed(i, e, "write to private field"),
r ? r.call(i, t) : e.set(i, t),
t)
  , g = (i, e, t) => (ed(i, e, "access private method"),
t);
var ih = (i, e, t, r) => ({
    set _(n) {
        m(i, e, n, t)
    },
    get _() {
        return s(i, e, r)
    }
})
  , oh = (i, e, t) => $m(Fm(i), t, e);
import {aq as rp, ar as yt} from "./Providers-CTFhomsf.js";
import {C as Lm, D as np, U as X, T as Ml, E as J, a as qm, c as Hm, d as Be, e as Bl, f as Mt, g as le, h as $s, t as L, s as ip, P as Tc, j as ze, J as zm, A as op, k as Km, l as Wm, m as Gm, n as Vm, o as ap, q as Xm, u as Jm, H as Ym, v as Qm, w as ah, I as Zm, x as eg, y as tg, z as sg, B as rg, F as ng, G as ig, K as ic, L as og, R as ag, M as cg, N as ug, O as dg, Q as cp, V as ch, W as uh, X as dh, Y as lg, Z as cs, _ as Xa, $ as gt, a0 as Ni, a1 as lh, a2 as Xs, a3 as Dc, a4 as hg, a5 as pg, a6 as fg, a7 as mg, a8 as gg, a9 as Nc, aa as wg, ab as td, ac as yg, ad as vg, ae as bg, af as qs, ag as Cg, ah as xg, ai as fs, aj as Eg, ak as Sg, al as Pg, am as _g, an as Ig, ao as kg, ap as hh, aq as Tg, ar as Dg, as as Ng, at as du, au as lu, av as hu, aw as ph, ax as Og, ay as Rg} from "./index-vkF7KXw7.js";
var pu = {}
  , fu = {}
  , Us = {};
function Ag(i) {
    return {
        all: i = i || new Map,
        on: function(e, t) {
            var r = i.get(e);
            r ? r.push(t) : i.set(e, [t])
        },
        off: function(e, t) {
            var r = i.get(e);
            r && (t ? r.splice(r.indexOf(t) >>> 0, 1) : i.set(e, []))
        },
        emit: function(e, t) {
            var r = i.get(e);
            r && r.slice().map(function(n) {
                n(t)
            }),
            (r = i.get("*")) && r.slice().map(function(n) {
                n(e, t)
            })
        }
    }
}
const Mg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ag
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Bg = rp(Mg);
var jg = yt && yt.__importDefault || function(i) {
    return i && i.__esModule ? i : {
        default: i
    }
}
;
Object.defineProperty(Us, "__esModule", {
    value: !0
});
Us.EventEmitter = void 0;
const Fg = jg(Bg);
var ms;
class $g {
    constructor() {
        u(this, ms, (0,
        Fg.default)())
    }
    on(e, t) {
        return s(this, ms).on(e, t),
        this
    }
    once(e, t) {
        const r = n => {
            t(n),
            this.off(e, r)
        }
        ;
        return this.on(e, r)
    }
    off(e, t) {
        return s(this, ms).off(e, t),
        this
    }
    emit(e, t) {
        s(this, ms).emit(e, t)
    }
    removeAllListeners(e) {
        return e ? s(this, ms).all.delete(e) : s(this, ms).all.clear(),
        this
    }
}
ms = new WeakMap;
Us.EventEmitter = $g;
var De = {};
Object.defineProperty(De, "__esModule", {
    value: !0
});
De.LogType = void 0;
var fh;
(function(i) {
    i.bidi = "bidi",
    i.cdp = "cdp",
    i.debug = "debug",
    i.debugError = "debug:error",
    i.debugInfo = "debug:info",
    i.debugWarn = "debug:warn"
}
)(fh || (De.LogType = fh = {}));
var mu = {}, up;
Object.defineProperty(mu, "__esModule", {
    value: !0
});
mu.ProcessingQueue = void 0;
const sd = De;
var Ys, eo, mn, gn, jc, dp;
class jl {
    constructor(e, t) {
        u(this, jc);
        u(this, Ys);
        u(this, eo);
        u(this, mn, []);
        u(this, gn, !1);
        m(this, eo, e),
        m(this, Ys, t)
    }
    add(e, t) {
        s(this, mn).push([e, t]),
        g(this, jc, dp).call(this)
    }
}
Ys = new WeakMap,
eo = new WeakMap,
mn = new WeakMap,
gn = new WeakMap,
jc = new WeakSet,
dp = async function() {
    var e;
    if (!s(this, gn)) {
        for (m(this, gn, !0); s(this, mn).length > 0; ) {
            const t = s(this, mn).shift();
            if (!t)
                continue;
            const [r,n] = t;
            (e = s(this, Ys)) == null || e.call(this, up.LOGGER_PREFIX, "Processing event:", n),
            await r.then(o => {
                var a;
                if (o.kind === "error") {
                    (a = s(this, Ys)) == null || a.call(this, sd.LogType.debugError, "Event threw before sending:", o.error.message, o.error.stack);
                    return
                }
                return s(this, eo).call(this, o.value)
            }
            ).catch(o => {
                var a;
                (a = s(this, Ys)) == null || a.call(this, sd.LogType.debugError, "Event was not processed:", o == null ? void 0 : o.message)
            }
            )
        }
        m(this, gn, !1)
    }
}
,
O(jl, "LOGGER_PREFIX", `${sd.LogType.debug}:queue`);
mu.ProcessingQueue = jl;
up = jl;
var gu = {}
  , ee = {}
  , lp = {};
Object.defineProperty(lp, "__esModule", {
    value: !0
});
var ve = {};
Object.defineProperty(ve, "__esModule", {
    value: !0
});
ve.EVENT_NAMES = ve.Speculation = ve.Bluetooth = ve.Network = ve.Input = ve.BrowsingContext = ve.Log = ve.Script = ve.BiDiModule = void 0;
var yd;
(function(i) {
    i.Bluetooth = "bluetooth",
    i.Browser = "browser",
    i.BrowsingContext = "browsingContext",
    i.Cdp = "goog:cdp",
    i.Input = "input",
    i.Log = "log",
    i.Network = "network",
    i.Script = "script",
    i.Session = "session",
    i.Speculation = "speculation"
}
)(yd || (ve.BiDiModule = yd = {}));
var vd;
(function(i) {
    (function(e) {
        e.Message = "script.message",
        e.RealmCreated = "script.realmCreated",
        e.RealmDestroyed = "script.realmDestroyed"
    }
    )(i.EventNames || (i.EventNames = {}))
}
)(vd || (ve.Script = vd = {}));
var bd;
(function(i) {
    (function(e) {
        e.LogEntryAdded = "log.entryAdded"
    }
    )(i.EventNames || (i.EventNames = {}))
}
)(bd || (ve.Log = bd = {}));
var Cd;
(function(i) {
    (function(e) {
        e.ContextCreated = "browsingContext.contextCreated",
        e.ContextDestroyed = "browsingContext.contextDestroyed",
        e.DomContentLoaded = "browsingContext.domContentLoaded",
        e.DownloadEnd = "browsingContext.downloadEnd",
        e.DownloadWillBegin = "browsingContext.downloadWillBegin",
        e.FragmentNavigated = "browsingContext.fragmentNavigated",
        e.HistoryUpdated = "browsingContext.historyUpdated",
        e.Load = "browsingContext.load",
        e.NavigationAborted = "browsingContext.navigationAborted",
        e.NavigationCommitted = "browsingContext.navigationCommitted",
        e.NavigationFailed = "browsingContext.navigationFailed",
        e.NavigationStarted = "browsingContext.navigationStarted",
        e.UserPromptClosed = "browsingContext.userPromptClosed",
        e.UserPromptOpened = "browsingContext.userPromptOpened"
    }
    )(i.EventNames || (i.EventNames = {}))
}
)(Cd || (ve.BrowsingContext = Cd = {}));
var xd;
(function(i) {
    (function(e) {
        e.FileDialogOpened = "input.fileDialogOpened"
    }
    )(i.EventNames || (i.EventNames = {}))
}
)(xd || (ve.Input = xd = {}));
var Ed;
(function(i) {
    (function(e) {
        e.AuthRequired = "network.authRequired",
        e.BeforeRequestSent = "network.beforeRequestSent",
        e.FetchError = "network.fetchError",
        e.ResponseCompleted = "network.responseCompleted",
        e.ResponseStarted = "network.responseStarted"
    }
    )(i.EventNames || (i.EventNames = {}))
}
)(Ed || (ve.Network = Ed = {}));
var Sd;
(function(i) {
    (function(e) {
        e.RequestDevicePromptUpdated = "bluetooth.requestDevicePromptUpdated",
        e.GattConnectionAttempted = "bluetooth.gattConnectionAttempted",
        e.CharacteristicEventGenerated = "bluetooth.characteristicEventGenerated",
        e.DescriptorEventGenerated = "bluetooth.descriptorEventGenerated"
    }
    )(i.EventNames || (i.EventNames = {}))
}
)(Sd || (ve.Bluetooth = Sd = {}));
var Pd;
(function(i) {
    (function(e) {
        e.PrefetchStatusUpdated = "speculation.prefetchStatusUpdated"
    }
    )(i.EventNames || (i.EventNames = {}))
}
)(Pd || (ve.Speculation = Pd = {}));
ve.EVENT_NAMES = new Set([...Object.values(yd), ...Object.values(Sd.EventNames), ...Object.values(Cd.EventNames), ...Object.values(xd.EventNames), ...Object.values(bd.EventNames), ...Object.values(Ed.EventNames), ...Object.values(vd.EventNames), ...Object.values(Pd.EventNames)]);
var hp = {};
Object.defineProperty(hp, "__esModule", {
    value: !0
});
var F = {};
Object.defineProperty(F, "__esModule", {
    value: !0
});
F.UnavailableNetworkDataException = F.NoSuchNetworkDataException = F.NoSuchNetworkCollectorException = F.NoSuchWebExtensionException = F.InvalidWebExtensionException = F.UnderspecifiedStoragePartitionException = F.UnableToSetFileInputException = F.UnableToSetCookieException = F.NoSuchStoragePartitionException = F.UnsupportedOperationException = F.UnableToCloseBrowserException = F.UnableToCaptureScreenException = F.UnknownErrorException = F.UnknownCommandException = F.SessionNotCreatedException = F.NoSuchUserContextException = F.NoSuchScriptException = F.NoSuchRequestException = F.NoSuchNodeException = F.NoSuchInterceptException = F.NoSuchHistoryEntryException = F.NoSuchHandleException = F.NoSuchFrameException = F.NoSuchElementException = F.NoSuchAlertException = F.MoveTargetOutOfBoundsException = F.InvalidSessionIdException = F.InvalidSelectorException = F.InvalidArgumentException = F.Exception = void 0;
class te extends Error {
    constructor(t, r, n) {
        super();
        O(this, "error");
        O(this, "message");
        O(this, "stacktrace");
        this.error = t,
        this.message = r,
        this.stacktrace = n
    }
    toErrorResponse(t) {
        return {
            type: "error",
            id: t,
            error: this.error,
            message: this.message,
            stacktrace: this.stacktrace
        }
    }
}
F.Exception = te;
class Ug extends te {
    constructor(e, t) {
        super("invalid argument", e, t)
    }
}
F.InvalidArgumentException = Ug;
class Lg extends te {
    constructor(e, t) {
        super("invalid selector", e, t)
    }
}
F.InvalidSelectorException = Lg;
class qg extends te {
    constructor(e, t) {
        super("invalid session id", e, t)
    }
}
F.InvalidSessionIdException = qg;
class Hg extends te {
    constructor(e, t) {
        super("move target out of bounds", e, t)
    }
}
F.MoveTargetOutOfBoundsException = Hg;
class zg extends te {
    constructor(e, t) {
        super("no such alert", e, t)
    }
}
F.NoSuchAlertException = zg;
class Kg extends te {
    constructor(e, t) {
        super("no such element", e, t)
    }
}
F.NoSuchElementException = Kg;
class Wg extends te {
    constructor(e, t) {
        super("no such frame", e, t)
    }
}
F.NoSuchFrameException = Wg;
class Gg extends te {
    constructor(e, t) {
        super("no such handle", e, t)
    }
}
F.NoSuchHandleException = Gg;
class Vg extends te {
    constructor(e, t) {
        super("no such history entry", e, t)
    }
}
F.NoSuchHistoryEntryException = Vg;
class Xg extends te {
    constructor(e, t) {
        super("no such intercept", e, t)
    }
}
F.NoSuchInterceptException = Xg;
class Jg extends te {
    constructor(e, t) {
        super("no such node", e, t)
    }
}
F.NoSuchNodeException = Jg;
class Yg extends te {
    constructor(e, t) {
        super("no such request", e, t)
    }
}
F.NoSuchRequestException = Yg;
class Qg extends te {
    constructor(e, t) {
        super("no such script", e, t)
    }
}
F.NoSuchScriptException = Qg;
class Zg extends te {
    constructor(e, t) {
        super("no such user context", e, t)
    }
}
F.NoSuchUserContextException = Zg;
class ew extends te {
    constructor(e, t) {
        super("session not created", e, t)
    }
}
F.SessionNotCreatedException = ew;
class tw extends te {
    constructor(e, t) {
        super("unknown command", e, t)
    }
}
F.UnknownCommandException = tw;
class sw extends te {
    constructor(e, t=new Error().stack) {
        super("unknown error", e, t)
    }
}
F.UnknownErrorException = sw;
class rw extends te {
    constructor(e, t) {
        super("unable to capture screen", e, t)
    }
}
F.UnableToCaptureScreenException = rw;
class nw extends te {
    constructor(e, t) {
        super("unable to close browser", e, t)
    }
}
F.UnableToCloseBrowserException = nw;
class iw extends te {
    constructor(e, t) {
        super("unsupported operation", e, t)
    }
}
F.UnsupportedOperationException = iw;
class ow extends te {
    constructor(e, t) {
        super("no such storage partition", e, t)
    }
}
F.NoSuchStoragePartitionException = ow;
class aw extends te {
    constructor(e, t) {
        super("unable to set cookie", e, t)
    }
}
F.UnableToSetCookieException = aw;
class cw extends te {
    constructor(e, t) {
        super("unable to set file input", e, t)
    }
}
F.UnableToSetFileInputException = cw;
class uw extends te {
    constructor(e, t) {
        super("underspecified storage partition", e, t)
    }
}
F.UnderspecifiedStoragePartitionException = uw;
class dw extends te {
    constructor(e, t) {
        super("invalid web extension", e, t)
    }
}
F.InvalidWebExtensionException = dw;
class lw extends te {
    constructor(e, t) {
        super("no such web extension", e, t)
    }
}
F.NoSuchWebExtensionException = lw;
class hw extends te {
    constructor(e, t) {
        super("no such network collector", e, t)
    }
}
F.NoSuchNetworkCollectorException = hw;
class pw extends te {
    constructor(e, t) {
        super("no such network data", e, t)
    }
}
F.NoSuchNetworkDataException = pw;
class fw extends te {
    constructor(e, t) {
        super("unavailable network data", e, t)
    }
}
F.UnavailableNetworkDataException = fw;
var pp = {};
Object.defineProperty(pp, "__esModule", {
    value: !0
});
var fp = {};
Object.defineProperty(fp, "__esModule", {
    value: !0
});
var mp = {};
Object.defineProperty(mp, "__esModule", {
    value: !0
});
(function(i) {
    var e = yt && yt.__createBinding || (Object.create ? function(o, a, c, p) {
        p === void 0 && (p = c);
        var h = Object.getOwnPropertyDescriptor(a, c);
        (!h || ("get"in h ? !a.__esModule : h.writable || h.configurable)) && (h = {
            enumerable: !0,
            get: function() {
                return a[c]
            }
        }),
        Object.defineProperty(o, p, h)
    }
    : function(o, a, c, p) {
        p === void 0 && (p = c),
        o[p] = a[c]
    }
    )
      , t = yt && yt.__setModuleDefault || (Object.create ? function(o, a) {
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: a
        })
    }
    : function(o, a) {
        o.default = a
    }
    )
      , r = yt && yt.__importStar || function() {
        var o = function(a) {
            return o = Object.getOwnPropertyNames || function(c) {
                var p = [];
                for (var h in c)
                    Object.prototype.hasOwnProperty.call(c, h) && (p[p.length] = h);
                return p
            }
            ,
            o(a)
        };
        return function(a) {
            if (a && a.__esModule)
                return a;
            var c = {};
            if (a != null)
                for (var p = o(a), h = 0; h < p.length; h++)
                    p[h] !== "default" && e(c, a, p[h]);
            return t(c, a),
            c
        }
    }()
      , n = yt && yt.__exportStar || function(o, a) {
        for (var c in o)
            c !== "default" && !Object.prototype.hasOwnProperty.call(a, c) && e(a, o, c)
    }
    ;
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.ChromiumBidi = i.Cdp = void 0,
    i.Cdp = r(lp),
    i.ChromiumBidi = r(ve),
    n(hp, i),
    n(F, i),
    n(pp, i),
    n(fp, i),
    n(mp, i)
}
)(ee);
var wu = {};
Object.defineProperty(wu, "__esModule", {
    value: !0
});
wu.BidiNoOpParser = void 0;
class mw {
    parseDisableSimulationParameters(e) {
        return e
    }
    parseHandleRequestDevicePromptParams(e) {
        return e
    }
    parseSimulateAdapterParameters(e) {
        return e
    }
    parseSimulateAdvertisementParameters(e) {
        return e
    }
    parseSimulateCharacteristicParameters(e) {
        return e
    }
    parseSimulateCharacteristicResponseParameters(e) {
        return e
    }
    parseSimulateDescriptorParameters(e) {
        return e
    }
    parseSimulateDescriptorResponseParameters(e) {
        return e
    }
    parseSimulateGattConnectionResponseParameters(e) {
        return e
    }
    parseSimulateGattDisconnectionParameters(e) {
        return e
    }
    parseSimulatePreconnectedPeripheralParameters(e) {
        return e
    }
    parseSimulateServiceParameters(e) {
        return e
    }
    parseCreateUserContextParameters(e) {
        return e
    }
    parseRemoveUserContextParameters(e) {
        return e
    }
    parseSetClientWindowStateParameters(e) {
        return e
    }
    parseSetDownloadBehaviorParameters(e) {
        return e
    }
    parseActivateParams(e) {
        return e
    }
    parseCaptureScreenshotParams(e) {
        return e
    }
    parseCloseParams(e) {
        return e
    }
    parseCreateParams(e) {
        return e
    }
    parseGetTreeParams(e) {
        return e
    }
    parseHandleUserPromptParams(e) {
        return e
    }
    parseLocateNodesParams(e) {
        return e
    }
    parseNavigateParams(e) {
        return e
    }
    parsePrintParams(e) {
        return e
    }
    parseReloadParams(e) {
        return e
    }
    parseSetViewportParams(e) {
        return e
    }
    parseTraverseHistoryParams(e) {
        return e
    }
    parseGetSessionParams(e) {
        return e
    }
    parseResolveRealmParams(e) {
        return e
    }
    parseSendCommandParams(e) {
        return e
    }
    parseSetForcedColorsModeThemeOverrideParams(e) {
        return e
    }
    parseSetGeolocationOverrideParams(e) {
        return e
    }
    parseSetLocaleOverrideParams(e) {
        return e
    }
    parseSetNetworkConditionsParams(e) {
        return e
    }
    parseSetScreenOrientationOverrideParams(e) {
        return e
    }
    parseSetScriptingEnabledParams(e) {
        return e
    }
    parseSetTimezoneOverrideParams(e) {
        return e
    }
    parseSetUserAgentOverrideParams(e) {
        return e
    }
    parseAddPreloadScriptParams(e) {
        return e
    }
    parseCallFunctionParams(e) {
        return e
    }
    parseDisownParams(e) {
        return e
    }
    parseEvaluateParams(e) {
        return e
    }
    parseGetRealmsParams(e) {
        return e
    }
    parseRemovePreloadScriptParams(e) {
        return e
    }
    parsePerformActionsParams(e) {
        return e
    }
    parseReleaseActionsParams(e) {
        return e
    }
    parseSetFilesParams(e) {
        return e
    }
    parseAddDataCollectorParams(e) {
        return e
    }
    parseAddInterceptParams(e) {
        return e
    }
    parseContinueRequestParams(e) {
        return e
    }
    parseContinueResponseParams(e) {
        return e
    }
    parseContinueWithAuthParams(e) {
        return e
    }
    parseDisownDataParams(e) {
        return e
    }
    parseFailRequestParams(e) {
        return e
    }
    parseGetDataParams(e) {
        return e
    }
    parseProvideResponseParams(e) {
        return e
    }
    parseRemoveDataCollectorParams(e) {
        return e
    }
    parseRemoveInterceptParams(e) {
        return e
    }
    parseSetCacheBehaviorParams(e) {
        return e
    }
    parseSetExtraHeadersParams(e) {
        return e
    }
    parseSetPermissionsParams(e) {
        return e
    }
    parseSubscribeParams(e) {
        return e
    }
    parseUnsubscribeParams(e) {
        return e
    }
    parseDeleteCookiesParams(e) {
        return e
    }
    parseGetCookiesParams(e) {
        return e
    }
    parseSetCookieParams(e) {
        return e
    }
    parseInstallParams(e) {
        return e
    }
    parseUninstallParams(e) {
        return e
    }
}
wu.BidiNoOpParser = mw;
var Ua = {};
Object.defineProperty(Ua, "__esModule", {
    value: !0
});
Ua.BrowserProcessor = void 0;
Ua.getProxyStr = yp;
const ns = ee;
var qt, to, Ht, Qs, is, gp, wp, _d;
class gw {
    constructor(e, t, r, n) {
        u(this, is);
        u(this, qt);
        u(this, to);
        u(this, Ht);
        u(this, Qs);
        m(this, qt, e),
        m(this, to, t),
        m(this, Ht, r),
        m(this, Qs, n)
    }
    close() {
        return setTimeout( () => s(this, qt).sendCommand("Browser.close"), 0),
        {}
    }
    async createUserContext(e) {
        const t = e
          , r = s(this, Ht).getGlobalConfig();
        if (t.acceptInsecureCerts !== void 0 && t.acceptInsecureCerts === !1 && r.acceptInsecureCerts === !0)
            throw new ns.UnknownErrorException(`Cannot set user context's "acceptInsecureCerts" to false, when a capability "acceptInsecureCerts" is set to true`);
        const n = {};
        if (t.proxy) {
            const a = yp(t.proxy);
            a && (n.proxyServer = a),
            t.proxy.noProxy && (n.proxyBypassList = t.proxy.noProxy.join(","))
        } else {
            e["goog:proxyServer"] !== void 0 && (n.proxyServer = e["goog:proxyServer"]);
            const a = e["goog:proxyBypassList"] ?? void 0;
            a && (n.proxyBypassList = a.join(","))
        }
        const o = await s(this, qt).sendCommand("Target.createBrowserContext", n);
        return await g(this, is, _d).call(this, r.downloadBehavior ?? null, o.browserContextId),
        s(this, Ht).updateUserContextConfig(o.browserContextId, {
            acceptInsecureCerts: e.acceptInsecureCerts,
            userPromptHandler: e.unhandledPromptBehavior
        }),
        {
            userContext: o.browserContextId
        }
    }
    async removeUserContext(e) {
        const t = e.userContext;
        if (t === "default")
            throw new ns.InvalidArgumentException("`default` user context cannot be removed");
        try {
            await s(this, qt).sendCommand("Target.disposeBrowserContext", {
                browserContextId: t
            })
        } catch (r) {
            throw r.message.startsWith("Failed to find context with id") ? new ns.NoSuchUserContextException(r.message) : r
        }
        return {}
    }
    async getUserContexts() {
        return {
            userContexts: await s(this, Qs).getUserContexts()
        }
    }
    async getClientWindows() {
        const e = s(this, to).getTopLevelContexts().map(o => o.cdpTarget.id)
          , t = await Promise.all(e.map(async o => await g(this, is, gp).call(this, o)))
          , r = new Set
          , n = new Array;
        for (const o of t)
            r.has(o.clientWindow) || (r.add(o.clientWindow),
            n.push(o));
        return {
            clientWindows: n
        }
    }
    async setDownloadBehavior(e) {
        let t;
        return e.userContexts === void 0 ? t = (await s(this, Qs).getUserContexts()).map(r => r.userContext) : t = Array.from(await s(this, Qs).verifyUserContextIdList(e.userContexts)),
        e.userContexts === void 0 ? s(this, Ht).updateGlobalConfig({
            downloadBehavior: e.downloadBehavior
        }) : e.userContexts.map(r => s(this, Ht).updateUserContextConfig(r, {
            downloadBehavior: e.downloadBehavior
        })),
        await Promise.all(t.map(async r => {
            const n = s(this, Ht).getActiveConfig(void 0, r).downloadBehavior ?? null;
            await g(this, is, _d).call(this, n, r)
        }
        )),
        {}
    }
}
qt = new WeakMap,
to = new WeakMap,
Ht = new WeakMap,
Qs = new WeakMap,
is = new WeakSet,
gp = async function(e) {
    const t = await s(this, qt).sendCommand("Browser.getWindowForTarget", {
        targetId: e
    });
    return {
        active: !1,
        clientWindow: `${t.windowId}`,
        state: t.bounds.windowState ?? "normal",
        height: t.bounds.height ?? 0,
        width: t.bounds.width ?? 0,
        x: t.bounds.left ?? 0,
        y: t.bounds.top ?? 0
    }
}
,
wp = function(e) {
    if (e === null)
        return {
            behavior: "default"
        };
    if ((e == null ? void 0 : e.type) === "denied")
        return {
            behavior: "deny"
        };
    if ((e == null ? void 0 : e.type) === "allowed")
        return {
            behavior: "allow",
            downloadPath: e.destinationFolder
        };
    throw new ns.UnknownErrorException("Unexpected download behavior")
}
,
_d = async function(e, t) {
    await s(this, qt).sendCommand("Browser.setDownloadBehavior", {
        ...g(this, is, wp).call(this, e),
        browserContextId: t === "default" ? void 0 : t,
        eventsEnabled: !0
    })
}
;
Ua.BrowserProcessor = gw;
function yp(i) {
    if (!(i.proxyType === "direct" || i.proxyType === "system")) {
        if (i.proxyType === "pac")
            throw new ns.UnsupportedOperationException("PAC proxy configuration is not supported per user context");
        if (i.proxyType === "autodetect")
            throw new ns.UnsupportedOperationException("Autodetect proxy is not supported per user context");
        if (i.proxyType === "manual") {
            const e = [];
            if (i.httpProxy !== void 0 && e.push(`http=${i.httpProxy}`),
            i.sslProxy !== void 0 && e.push(`https=${i.sslProxy}`),
            i.socksProxy !== void 0 || i.socksVersion !== void 0) {
                if (i.socksProxy === void 0)
                    throw new ns.InvalidArgumentException("'socksVersion' cannot be set without 'socksProxy'");
                if (i.socksVersion === void 0 || typeof i.socksVersion != "number" || !Number.isInteger(i.socksVersion) || i.socksVersion < 0 || i.socksVersion > 255)
                    throw new ns.InvalidArgumentException("'socksVersion' must be between 0 and 255");
                e.push(`socks=socks${i.socksVersion}://${i.socksProxy}`)
            }
            return e.length === 0 ? void 0 : e.join(";")
        }
        throw new ns.UnknownErrorException("Unknown proxy type")
    }
}
var yu = {};
Object.defineProperty(yu, "__esModule", {
    value: !0
});
yu.CdpProcessor = void 0;
const ww = ee;
var so, ro, no, io;
class yw {
    constructor(e, t, r, n) {
        u(this, so);
        u(this, ro);
        u(this, no);
        u(this, io);
        m(this, so, e),
        m(this, ro, t),
        m(this, no, r),
        m(this, io, n)
    }
    getSession(e) {
        const t = e.context
          , r = s(this, so).getContext(t).cdpTarget.cdpSessionId;
        return r === void 0 ? {} : {
            session: r
        }
    }
    resolveRealm(e) {
        const t = e.realm
          , r = s(this, ro).getRealm({
            realmId: t
        });
        if (r === void 0)
            throw new ww.UnknownErrorException(`Could not find realm ${e.realm}`);
        return {
            executionContextId: r.executionContextId
        }
    }
    async sendCommand(e) {
        return {
            result: await (e.session ? s(this, no).getCdpClient(e.session) : s(this, io)).sendCommand(e.method, e.params),
            session: e.session
        }
    }
}
so = new WeakMap,
ro = new WeakMap,
no = new WeakMap,
io = new WeakMap;
yu.CdpProcessor = yw;
var vu = {};
Object.defineProperty(vu, "__esModule", {
    value: !0
});
vu.BrowsingContextProcessor = void 0;
const Le = ee;
var oo, me, Zs, wn, ao, Si, vp, bp;
class vw {
    constructor(e, t, r, n, o) {
        u(this, Si);
        u(this, oo);
        u(this, me);
        u(this, Zs);
        u(this, wn);
        u(this, ao);
        m(this, Zs, n),
        m(this, ao, r),
        m(this, oo, e),
        m(this, me, t),
        m(this, wn, o),
        s(this, wn).addSubscribeHook(Le.ChromiumBidi.BrowsingContext.EventNames.ContextCreated, g(this, Si, bp).bind(this))
    }
    getTree(e) {
        return {
            contexts: (e.root === void 0 ? s(this, me).getTopLevelContexts() : [s(this, me).getContext(e.root)]).map(r => r.serializeToBidiValue(e.maxDepth ?? Number.MAX_VALUE))
        }
    }
    async create(e) {
        let t, r = "default";
        if (e.referenceContext !== void 0) {
            if (t = s(this, me).getContext(e.referenceContext),
            !t.isTopLevelContext())
                throw new Le.InvalidArgumentException("referenceContext should be a top-level context");
            r = t.userContext
        }
        e.userContext !== void 0 && (r = e.userContext);
        const n = s(this, me).getAllContexts().filter(p => p.userContext === r);
        let o = !1;
        switch (e.type) {
        case "tab":
            o = !1;
            break;
        case "window":
            o = !0;
            break
        }
        n.length || (o = !0);
        let a;
        try {
            a = await s(this, oo).sendCommand("Target.createTarget", {
                url: "about:blank",
                newWindow: o,
                browserContextId: r === "default" ? void 0 : r,
                background: e.background === !0
            })
        } catch (p) {
            throw p.message.startsWith("Failed to find browser context with id") || p.message === "browserContextId" ? new Le.NoSuchUserContextException(`The context ${r} was not found`) : p
        }
        const c = await s(this, me).waitForContext(a.targetId);
        return await c.lifecycleLoaded(),
        {
            context: c.id
        }
    }
    navigate(e) {
        return s(this, me).getContext(e.context).navigate(e.url, e.wait ?? "none")
    }
    reload(e) {
        return s(this, me).getContext(e.context).reload(e.ignoreCache ?? !1, e.wait ?? "none")
    }
    async activate(e) {
        const t = s(this, me).getContext(e.context);
        if (!t.isTopLevelContext())
            throw new Le.InvalidArgumentException("Activation is only supported on the top-level context");
        return await t.activate(),
        {}
    }
    async captureScreenshot(e) {
        return await s(this, me).getContext(e.context).captureScreenshot(e)
    }
    async print(e) {
        return await s(this, me).getContext(e.context).print(e)
    }
    async setViewport(e) {
        var o, a;
        if ((((o = e.viewport) == null ? void 0 : o.height) ?? 0) > 1e7 || (((a = e.viewport) == null ? void 0 : a.width) ?? 0) > 1e7)
            throw new Le.UnsupportedOperationException("Viewport dimension over 10000000 are not supported");
        const r = {};
        e.devicePixelRatio !== void 0 && (r.devicePixelRatio = e.devicePixelRatio),
        e.viewport !== void 0 && (r.viewport = e.viewport);
        const n = await g(this, Si, vp).call(this, e.context, e.userContexts);
        for (const c of e.userContexts ?? [])
            s(this, Zs).updateUserContextConfig(c, r);
        return e.context !== void 0 && s(this, Zs).updateBrowsingContextConfig(e.context, r),
        await Promise.all(n.map(async c => {
            const p = s(this, Zs).getActiveConfig(c.id, c.userContext);
            await c.setViewport(p.viewport ?? null, p.devicePixelRatio ?? null, p.screenOrientation ?? null)
        }
        )),
        {}
    }
    async traverseHistory(e) {
        const t = s(this, me).getContext(e.context);
        if (!t)
            throw new Le.InvalidArgumentException(`No browsing context with id ${e.context}`);
        if (!t.isTopLevelContext())
            throw new Le.InvalidArgumentException("Traversing history is only supported on the top-level context");
        return await t.traverseHistory(e.delta),
        {}
    }
    async handleUserPrompt(e) {
        var r;
        const t = s(this, me).getContext(e.context);
        try {
            await t.handleUserPrompt(e.accept, e.userText)
        } catch (n) {
            throw (r = n.message) != null && r.includes("No dialog is showing") ? new Le.NoSuchAlertException("No dialog is showing") : n
        }
        return {}
    }
    async close(e) {
        const t = s(this, me).getContext(e.context);
        if (!t.isTopLevelContext())
            throw new Le.InvalidArgumentException(`Non top-level browsing context ${t.id} cannot be closed.`);
        const r = t.cdpTarget.parentCdpClient;
        try {
            const n = new Promise(o => {
                const a = c => {
                    c.targetId === e.context && (r.off("Target.detachedFromTarget", a),
                    o())
                }
                ;
                r.on("Target.detachedFromTarget", a)
            }
            );
            try {
                e.promptUnload ? await t.close() : await r.sendCommand("Target.closeTarget", {
                    targetId: e.context
                })
            } catch (o) {
                if (!r.isCloseError(o))
                    throw o
            }
            await n
        } catch (n) {
            if (!(n.code === -32e3 && n.message === "Not attached to an active page"))
                throw n
        }
        return {}
    }
    async locateNodes(e) {
        return await s(this, me).getContext(e.context).locateNodes(e)
    }
}
oo = new WeakMap,
me = new WeakMap,
Zs = new WeakMap,
wn = new WeakMap,
ao = new WeakMap,
Si = new WeakSet,
vp = async function(e, t) {
    if (e === void 0 && t === void 0)
        throw new Le.InvalidArgumentException("Either userContexts or context must be provided");
    if (e !== void 0 && t !== void 0)
        throw new Le.InvalidArgumentException("userContexts and context are mutually exclusive");
    if (e !== void 0) {
        const n = s(this, me).getContext(e);
        if (!n.isTopLevelContext())
            throw new Le.InvalidArgumentException("Emulating viewport is only supported on the top-level context");
        return [n]
    }
    await s(this, ao).verifyUserContextIdList(t);
    const r = [];
    for (const n of t) {
        const o = s(this, me).getTopLevelContexts().filter(a => a.userContext === n);
        r.push(...o)
    }
    return [...new Set(r).values()]
}
,
bp = function(e) {
    return [s(this, me).getContext(e), ...s(this, me).getContext(e).allChildren].forEach(n => {
        s(this, wn).registerEvent({
            type: "event",
            method: Le.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
            params: n.serializeToBidiValue()
        }, n.id)
    }
    ),
    Promise.resolve()
}
;
vu.BrowsingContextProcessor = vw;
var zr = {};
Object.defineProperty(zr, "__esModule", {
    value: !0
});
zr.EmulationProcessor = void 0;
zr.isValidLocale = Cp;
zr.isValidTimezone = xp;
zr.isTimeZoneOffsetString = Ep;
const qe = F;
var co, er, oe, vt, hs;
class bw {
    constructor(e, t, r) {
        u(this, vt);
        u(this, co);
        u(this, er);
        u(this, oe);
        m(this, co, t),
        m(this, er, e),
        m(this, oe, r)
    }
    async setGeolocationOverride(e) {
        var n, o;
        if ("coordinates"in e && "error"in e)
            throw new qe.InvalidArgumentException("Coordinates and error cannot be set at the same time");
        let t = null;
        if ("coordinates"in e) {
            if ((((n = e.coordinates) == null ? void 0 : n.altitude) ?? null) === null && (((o = e.coordinates) == null ? void 0 : o.altitudeAccuracy) ?? null) !== null)
                throw new qe.InvalidArgumentException("Geolocation altitudeAccuracy can be set only with altitude");
            t = e.coordinates
        } else if ("error"in e) {
            if (e.error.type !== "positionUnavailable")
                throw new qe.InvalidArgumentException(`Unknown geolocation error ${e.error.type}`);
            t = e.error
        } else
            throw new qe.InvalidArgumentException("Coordinates or error should be set");
        const r = await g(this, vt, hs).call(this, e.contexts, e.userContexts);
        for (const a of e.contexts ?? [])
            s(this, oe).updateBrowsingContextConfig(a, {
                geolocation: t
            });
        for (const a of e.userContexts ?? [])
            s(this, oe).updateUserContextConfig(a, {
                geolocation: t
            });
        return await Promise.all(r.map(async a => {
            const c = s(this, oe).getActiveConfig(a.id, a.userContext);
            await a.setGeolocationOverride(c.geolocation ?? null)
        }
        )),
        {}
    }
    async setLocaleOverride(e) {
        const t = e.locale ?? null;
        if (t !== null && !Cp(t))
            throw new qe.InvalidArgumentException(`Invalid locale "${t}"`);
        const r = await g(this, vt, hs).call(this, e.contexts, e.userContexts);
        for (const n of e.contexts ?? [])
            s(this, oe).updateBrowsingContextConfig(n, {
                locale: t
            });
        for (const n of e.userContexts ?? [])
            s(this, oe).updateUserContextConfig(n, {
                locale: t
            });
        return await Promise.all(r.map(async n => {
            const o = s(this, oe).getActiveConfig(n.id, n.userContext);
            await Promise.all([n.setLocaleOverride(o.locale ?? null), n.setUserAgentAndAcceptLanguage(o.userAgent, o.locale)])
        }
        )),
        {}
    }
    async setScriptingEnabled(e) {
        const t = e.enabled
          , r = await g(this, vt, hs).call(this, e.contexts, e.userContexts);
        for (const n of e.contexts ?? [])
            s(this, oe).updateBrowsingContextConfig(n, {
                scriptingEnabled: t
            });
        for (const n of e.userContexts ?? [])
            s(this, oe).updateUserContextConfig(n, {
                scriptingEnabled: t
            });
        return await Promise.all(r.map(async n => {
            const o = s(this, oe).getActiveConfig(n.id, n.userContext);
            await n.setScriptingEnabled(o.scriptingEnabled ?? null)
        }
        )),
        {}
    }
    async setScreenOrientationOverride(e) {
        const t = await g(this, vt, hs).call(this, e.contexts, e.userContexts);
        for (const r of e.contexts ?? [])
            s(this, oe).updateBrowsingContextConfig(r, {
                screenOrientation: e.screenOrientation
            });
        for (const r of e.userContexts ?? [])
            s(this, oe).updateUserContextConfig(r, {
                screenOrientation: e.screenOrientation
            });
        return await Promise.all(t.map(async r => {
            const n = s(this, oe).getActiveConfig(r.id, r.userContext);
            await r.setViewport(n.viewport ?? null, n.devicePixelRatio ?? null, n.screenOrientation ?? null)
        }
        )),
        {}
    }
    async setTimezoneOverride(e) {
        let t = e.timezone ?? null;
        if (t !== null && !xp(t))
            throw new qe.InvalidArgumentException(`Invalid timezone "${t}"`);
        t !== null && Ep(t) && (t = `GMT${t}`);
        const r = await g(this, vt, hs).call(this, e.contexts, e.userContexts);
        for (const n of e.contexts ?? [])
            s(this, oe).updateBrowsingContextConfig(n, {
                timezone: t
            });
        for (const n of e.userContexts ?? [])
            s(this, oe).updateUserContextConfig(n, {
                timezone: t
            });
        return await Promise.all(r.map(async n => {
            const o = s(this, oe).getActiveConfig(n.id, n.userContext);
            await n.setTimezoneOverride(o.timezone ?? null)
        }
        )),
        {}
    }
    async setUserAgentOverrideParams(e) {
        if (e.userAgent === "")
            throw new qe.UnsupportedOperationException("empty user agent string is not supported");
        const t = await g(this, vt, hs).call(this, e.contexts, e.userContexts, !0);
        for (const r of e.contexts ?? [])
            s(this, oe).updateBrowsingContextConfig(r, {
                userAgent: e.userAgent
            });
        for (const r of e.userContexts ?? [])
            s(this, oe).updateUserContextConfig(r, {
                userAgent: e.userAgent
            });
        return e.contexts === void 0 && e.userContexts === void 0 && s(this, oe).updateGlobalConfig({
            userAgent: e.userAgent
        }),
        await Promise.all(t.map(async r => {
            const n = s(this, oe).getActiveConfig(r.id, r.userContext);
            await r.setUserAgentAndAcceptLanguage(n.userAgent, n.locale)
        }
        )),
        {}
    }
    async setNetworkConditions(e) {
        const t = await g(this, vt, hs).call(this, e.contexts, e.userContexts, !0);
        for (const r of e.contexts ?? [])
            s(this, oe).updateBrowsingContextConfig(r, {
                emulatedNetworkConditions: e.networkConditions
            });
        for (const r of e.userContexts ?? [])
            s(this, oe).updateUserContextConfig(r, {
                emulatedNetworkConditions: e.networkConditions
            });
        if (e.contexts === void 0 && e.userContexts === void 0 && s(this, oe).updateGlobalConfig({
            emulatedNetworkConditions: e.networkConditions
        }),
        e.networkConditions !== null && e.networkConditions.type !== "offline")
            throw new qe.UnsupportedOperationException(`Unsupported network conditions ${e.networkConditions.type}`);
        return await Promise.all(t.map(async r => {
            const n = s(this, oe).getActiveConfig(r.id, r.userContext);
            await r.setEmulatedNetworkConditions(n.emulatedNetworkConditions ?? null)
        }
        )),
        {}
    }
}
co = new WeakMap,
er = new WeakMap,
oe = new WeakMap,
vt = new WeakSet,
hs = async function(e, t, r=!1) {
    if (e === void 0 && t === void 0) {
        if (r)
            return s(this, er).getTopLevelContexts();
        throw new qe.InvalidArgumentException("Either user contexts or browsing contexts must be provided")
    }
    if (e !== void 0 && t !== void 0)
        throw new qe.InvalidArgumentException("User contexts and browsing contexts are mutually exclusive");
    const n = [];
    if (e === void 0) {
        if (t.length === 0)
            throw new qe.InvalidArgumentException("user context should be provided");
        await s(this, co).verifyUserContextIdList(t);
        for (const o of t) {
            const a = s(this, er).getTopLevelContexts().filter(c => c.userContext === o);
            n.push(...a)
        }
    } else {
        if (e.length === 0)
            throw new qe.InvalidArgumentException("browsing context should be provided");
        for (const o of e) {
            const a = s(this, er).getContext(o);
            if (!a.isTopLevelContext())
                throw new qe.InvalidArgumentException("The command is only supported on the top-level context");
            n.push(a)
        }
    }
    return [...new Set(n).values()]
}
;
zr.EmulationProcessor = bw;
function Cp(i) {
    try {
        return new Intl.Locale(i),
        !0
    } catch (e) {
        if (e instanceof RangeError)
            return !1;
        throw e
    }
}
function xp(i) {
    try {
        return Intl.DateTimeFormat(void 0, {
            timeZone: i
        }),
        !0
    } catch (e) {
        if (e instanceof RangeError)
            return !1;
        throw e
    }
}
function Ep(i) {
    return /^[+-](?:2[0-3]|[01]\d)(?::[0-5]\d)?$/.test(i)
}
var bu = {}
  , as = {};
Object.defineProperty(as, "__esModule", {
    value: !0
});
as.assert = Cw;
function Cw(i, e) {
    if (!i)
        throw new Error(e ?? "Internal assertion failed.")
}
var Cu = {}
  , xu = {};
Object.defineProperty(xu, "__esModule", {
    value: !0
});
xu.isSingleComplexGrapheme = xw;
xu.isSingleGrapheme = Sp;
function xw(i) {
    return Sp(i) && i.length > 1
}
function Sp(i) {
    return [...new Intl.Segmenter("en",{
        granularity: "grapheme"
    }).segment(i)].length === 1
}
var pt = {};
Object.defineProperty(pt, "__esModule", {
    value: !0
});
pt.WheelSource = pt.PointerSource = pt.KeySource = pt.NoneSource = void 0;
class Ew {
    constructor() {
        O(this, "type", "none")
    }
}
pt.NoneSource = Ew;
var bt, tr, Ui;
class Sw {
    constructor() {
        u(this, tr);
        O(this, "type", "key");
        O(this, "pressed", new Set);
        u(this, bt, 0)
    }
    get modifiers() {
        return s(this, bt)
    }
    get alt() {
        return (s(this, bt) & 1) === 1
    }
    set alt(e) {
        g(this, tr, Ui).call(this, e, 1)
    }
    get ctrl() {
        return (s(this, bt) & 2) === 2
    }
    set ctrl(e) {
        g(this, tr, Ui).call(this, e, 2)
    }
    get meta() {
        return (s(this, bt) & 4) === 4
    }
    set meta(e) {
        g(this, tr, Ui).call(this, e, 4)
    }
    get shift() {
        return (s(this, bt) & 8) === 8
    }
    set shift(e) {
        g(this, tr, Ui).call(this, e, 8)
    }
}
bt = new WeakMap,
tr = new WeakSet,
Ui = function(e, t) {
    e ? m(this, bt, s(this, bt) | t) : m(this, bt, s(this, bt) & ~t)
}
;
pt.KeySource = Sw;
var At, Fc, uo, yn, vn, bn, sr;
class Pp {
    constructor(e, t) {
        O(this, "type", "pointer");
        O(this, "subtype");
        O(this, "pointerId");
        O(this, "pressed", new Set);
        O(this, "x", 0);
        O(this, "y", 0);
        O(this, "radiusX");
        O(this, "radiusY");
        O(this, "force");
        u(this, sr, new Map);
        this.pointerId = e,
        this.subtype = t
    }
    get buttons() {
        let e = 0;
        for (const t of this.pressed)
            switch (t) {
            case 0:
                e |= 1;
                break;
            case 1:
                e |= 4;
                break;
            case 2:
                e |= 2;
                break;
            case 3:
                e |= 8;
                break;
            case 4:
                e |= 16;
                break
            }
        return e
    }
    setClickCount(e, t) {
        let r = s(this, sr).get(e);
        return (!r || r.compare(t)) && (r = t),
        ++r.count,
        s(this, sr).set(e, r),
        r.count
    }
    getClickCount(e) {
        var t;
        return ((t = s(this, sr).get(e)) == null ? void 0 : t.count) ?? 0
    }
    resetClickCount() {
        m(this, sr, new Map)
    }
}
sr = new WeakMap,
O(Pp, "ClickContext", (At = class {
    constructor(t, r, n) {
        O(this, "count", 0);
        u(this, yn);
        u(this, vn);
        u(this, bn);
        m(this, yn, t),
        m(this, vn, r),
        m(this, bn, n)
    }
    compare(t) {
        return s(t, bn) - s(this, bn) > s(At, Fc) || Math.abs(s(t, yn) - s(this, yn)) > s(At, uo) || Math.abs(s(t, vn) - s(this, vn)) > s(At, uo)
    }
}
,
Fc = new WeakMap,
uo = new WeakMap,
yn = new WeakMap,
vn = new WeakMap,
bn = new WeakMap,
u(At, Fc, 500),
u(At, uo, 2),
At));
pt.PointerSource = Pp;
class Pw {
    constructor() {
        O(this, "type", "wheel")
    }
}
pt.WheelSource = Pw;
var La = {};
Object.defineProperty(La, "__esModule", {
    value: !0
});
La.getNormalizedKey = _w;
La.getKeyCode = Iw;
La.getKeyLocation = kw;
function _w(i) {
    switch (i) {
    case "":
        return "Unidentified";
    case "":
        return "Cancel";
    case "":
        return "Help";
    case "":
        return "Backspace";
    case "":
        return "Tab";
    case "":
        return "Clear";
    case "":
    case "":
        return "Enter";
    case "":
        return "Shift";
    case "":
        return "Control";
    case "":
        return "Alt";
    case "":
        return "Pause";
    case "":
        return "Escape";
    case "":
        return " ";
    case "":
        return "PageUp";
    case "":
        return "PageDown";
    case "":
        return "End";
    case "":
        return "Home";
    case "":
        return "ArrowLeft";
    case "":
        return "ArrowUp";
    case "":
        return "ArrowRight";
    case "":
        return "ArrowDown";
    case "":
        return "Insert";
    case "":
        return "Delete";
    case "":
        return ";";
    case "":
        return "=";
    case "":
        return "0";
    case "":
        return "1";
    case "":
        return "2";
    case "":
        return "3";
    case "":
        return "4";
    case "":
        return "5";
    case "":
        return "6";
    case "":
        return "7";
    case "":
        return "8";
    case "":
        return "9";
    case "":
        return "*";
    case "":
        return "+";
    case "":
        return ",";
    case "":
        return "-";
    case "":
        return ".";
    case "":
        return "/";
    case "":
        return "F1";
    case "":
        return "F2";
    case "":
        return "F3";
    case "":
        return "F4";
    case "":
        return "F5";
    case "":
        return "F6";
    case "":
        return "F7";
    case "":
        return "F8";
    case "":
        return "F9";
    case "":
        return "F10";
    case "":
        return "F11";
    case "":
        return "F12";
    case "":
        return "Meta";
    case "":
        return "ZenkakuHankaku";
    case "":
        return "Shift";
    case "":
        return "Control";
    case "":
        return "Alt";
    case "":
        return "Meta";
    case "":
        return "PageUp";
    case "":
        return "PageDown";
    case "":
        return "End";
    case "":
        return "Home";
    case "":
        return "ArrowLeft";
    case "":
        return "ArrowUp";
    case "":
        return "ArrowRight";
    case "":
        return "ArrowDown";
    case "":
        return "Insert";
    case "":
        return "Delete";
    default:
        return i
    }
}
function Iw(i) {
    switch (i) {
    case "`":
    case "~":
        return "Backquote";
    case "\\":
    case "|":
        return "Backslash";
    case "":
        return "Backspace";
    case "[":
    case "{":
        return "BracketLeft";
    case "]":
    case "}":
        return "BracketRight";
    case ",":
    case "<":
        return "Comma";
    case "0":
    case ")":
        return "Digit0";
    case "1":
    case "!":
        return "Digit1";
    case "2":
    case "@":
        return "Digit2";
    case "3":
    case "#":
        return "Digit3";
    case "4":
    case "$":
        return "Digit4";
    case "5":
    case "%":
        return "Digit5";
    case "6":
    case "^":
        return "Digit6";
    case "7":
    case "&":
        return "Digit7";
    case "8":
    case "*":
        return "Digit8";
    case "9":
    case "(":
        return "Digit9";
    case "=":
    case "+":
        return "Equal";
    case ">":
        return "IntlBackslash";
    case "a":
    case "A":
        return "KeyA";
    case "b":
    case "B":
        return "KeyB";
    case "c":
    case "C":
        return "KeyC";
    case "d":
    case "D":
        return "KeyD";
    case "e":
    case "E":
        return "KeyE";
    case "f":
    case "F":
        return "KeyF";
    case "g":
    case "G":
        return "KeyG";
    case "h":
    case "H":
        return "KeyH";
    case "i":
    case "I":
        return "KeyI";
    case "j":
    case "J":
        return "KeyJ";
    case "k":
    case "K":
        return "KeyK";
    case "l":
    case "L":
        return "KeyL";
    case "m":
    case "M":
        return "KeyM";
    case "n":
    case "N":
        return "KeyN";
    case "o":
    case "O":
        return "KeyO";
    case "p":
    case "P":
        return "KeyP";
    case "q":
    case "Q":
        return "KeyQ";
    case "r":
    case "R":
        return "KeyR";
    case "s":
    case "S":
        return "KeyS";
    case "t":
    case "T":
        return "KeyT";
    case "u":
    case "U":
        return "KeyU";
    case "v":
    case "V":
        return "KeyV";
    case "w":
    case "W":
        return "KeyW";
    case "x":
    case "X":
        return "KeyX";
    case "y":
    case "Y":
        return "KeyY";
    case "z":
    case "Z":
        return "KeyZ";
    case "-":
    case "_":
        return "Minus";
    case ".":
        return "Period";
    case "'":
    case '"':
        return "Quote";
    case ";":
    case ":":
        return "Semicolon";
    case "/":
    case "?":
        return "Slash";
    case "":
        return "AltLeft";
    case "":
        return "AltRight";
    case "":
        return "ControlLeft";
    case "":
        return "ControlRight";
    case "":
        return "Enter";
    case "":
        return "Pause";
    case "":
        return "MetaLeft";
    case "":
        return "MetaRight";
    case "":
        return "ShiftLeft";
    case "":
        return "ShiftRight";
    case " ":
    case "":
        return "Space";
    case "":
        return "Tab";
    case "":
        return "Delete";
    case "":
        return "End";
    case "":
        return "Help";
    case "":
        return "Home";
    case "":
        return "Insert";
    case "":
        return "PageDown";
    case "":
        return "PageUp";
    case "":
        return "ArrowDown";
    case "":
        return "ArrowLeft";
    case "":
        return "ArrowRight";
    case "":
        return "ArrowUp";
    case "":
        return "Escape";
    case "":
        return "F1";
    case "":
        return "F2";
    case "":
        return "F3";
    case "":
        return "F4";
    case "":
        return "F5";
    case "":
        return "F6";
    case "":
        return "F7";
    case "":
        return "F8";
    case "":
        return "F9";
    case "":
        return "F10";
    case "":
        return "F11";
    case "":
        return "F12";
    case "":
        return "NumpadEqual";
    case "":
    case "":
        return "Numpad0";
    case "":
    case "":
        return "Numpad1";
    case "":
    case "":
        return "Numpad2";
    case "":
    case "":
        return "Numpad3";
    case "":
    case "":
        return "Numpad4";
    case "":
        return "Numpad5";
    case "":
    case "":
        return "Numpad6";
    case "":
    case "":
        return "Numpad7";
    case "":
    case "":
        return "Numpad8";
    case "":
    case "":
        return "Numpad9";
    case "":
        return "NumpadAdd";
    case "":
        return "NumpadComma";
    case "":
    case "":
        return "NumpadDecimal";
    case "":
        return "NumpadDivide";
    case "":
        return "NumpadEnter";
    case "":
        return "NumpadMultiply";
    case "":
        return "NumpadSubtract";
    default:
        return
    }
}
function kw(i) {
    switch (i) {
    case "":
    case "":
    case "":
    case "":
    case "":
        return 1;
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
    case "":
        return 3;
    case "":
    case "":
    case "":
    case "":
        return 2;
    default:
        return 0
    }
}
var Eu = {};
Object.defineProperty(Eu, "__esModule", {
    value: !0
});
Eu.KeyToKeyCode = void 0;
Eu.KeyToKeyCode = {
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    Abort: 3,
    Help: 6,
    Backspace: 8,
    Tab: 9,
    Numpad5: 12,
    NumpadEnter: 13,
    Enter: 13,
    "\\r": 13,
    "\\n": 13,
    ShiftLeft: 16,
    ShiftRight: 16,
    ControlLeft: 17,
    ControlRight: 17,
    AltLeft: 18,
    AltRight: 18,
    Pause: 19,
    CapsLock: 20,
    Escape: 27,
    Convert: 28,
    NonConvert: 29,
    Space: 32,
    Numpad9: 33,
    PageUp: 33,
    Numpad3: 34,
    PageDown: 34,
    End: 35,
    Numpad1: 35,
    Home: 36,
    Numpad7: 36,
    ArrowLeft: 37,
    Numpad4: 37,
    Numpad8: 38,
    ArrowUp: 38,
    ArrowRight: 39,
    Numpad6: 39,
    Numpad2: 40,
    ArrowDown: 40,
    Select: 41,
    Open: 43,
    PrintScreen: 44,
    Insert: 45,
    Numpad0: 45,
    Delete: 46,
    NumpadDecimal: 46,
    Digit0: 48,
    Digit1: 49,
    Digit2: 50,
    Digit3: 51,
    Digit4: 52,
    Digit5: 53,
    Digit6: 54,
    Digit7: 55,
    Digit8: 56,
    Digit9: 57,
    KeyA: 65,
    KeyB: 66,
    KeyC: 67,
    KeyD: 68,
    KeyE: 69,
    KeyF: 70,
    KeyG: 71,
    KeyH: 72,
    KeyI: 73,
    KeyJ: 74,
    KeyK: 75,
    KeyL: 76,
    KeyM: 77,
    KeyN: 78,
    KeyO: 79,
    KeyP: 80,
    KeyQ: 81,
    KeyR: 82,
    KeyS: 83,
    KeyT: 84,
    KeyU: 85,
    KeyV: 86,
    KeyW: 87,
    KeyX: 88,
    KeyY: 89,
    KeyZ: 90,
    MetaLeft: 91,
    MetaRight: 92,
    ContextMenu: 93,
    NumpadMultiply: 106,
    NumpadAdd: 107,
    NumpadSubtract: 109,
    NumpadDivide: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    F13: 124,
    F14: 125,
    F15: 126,
    F16: 127,
    F17: 128,
    F18: 129,
    F19: 130,
    F20: 131,
    F21: 132,
    F22: 133,
    F23: 134,
    F24: 135,
    NumLock: 144,
    ScrollLock: 145,
    AudioVolumeMute: 173,
    AudioVolumeDown: 174,
    AudioVolumeUp: 175,
    MediaTrackNext: 176,
    MediaTrackPrevious: 177,
    MediaStop: 178,
    MediaPlayPause: 179,
    Semicolon: 186,
    Equal: 187,
    NumpadEqual: 187,
    Comma: 188,
    Minus: 189,
    Period: 190,
    Slash: 191,
    Backquote: 192,
    BracketLeft: 219,
    Backslash: 220,
    BracketRight: 221,
    Quote: 222,
    AltGraph: 225,
    Props: 247,
    Cancel: 3,
    Clear: 12,
    Shift: 16,
    Control: 17,
    Alt: 18,
    Accept: 30,
    ModeChange: 31,
    " ": 32,
    Print: 42,
    Execute: 43,
    "\\u0000": 46,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    Meta: 91,
    "*": 106,
    "+": 107,
    "-": 109,
    "/": 111,
    ";": 186,
    "=": 187,
    ",": 188,
    ".": 190,
    "`": 192,
    "[": 219,
    "\\\\": 220,
    "]": 221,
    "'": 222,
    Attn: 246,
    CrSel: 247,
    ExSel: 248,
    EraseEof: 249,
    Play: 250,
    ZoomOut: 251,
    ")": 48,
    "!": 49,
    "@": 50,
    "#": 51,
    $: 52,
    "%": 53,
    "^": 54,
    "&": 55,
    "(": 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    ":": 186,
    "<": 188,
    _: 189,
    ">": 190,
    "?": 191,
    "~": 192,
    "{": 219,
    "|": 220,
    "}": 221,
    '"': 222,
    Camera: 44,
    EndCall: 95,
    VolumeDown: 182,
    VolumeUp: 183
};
Object.defineProperty(Cu, "__esModule", {
    value: !0
});
Cu.ActionDispatcher = void 0;
const nn = ee
  , Xi = as
  , Ja = xu
  , Tw = pt
  , Xr = La
  , mh = Eu
  , Dw = (i => {
    const e = i.getClientRects()[0]
      , t = Math.max(0, Math.min(e.x, e.x + e.width))
      , r = Math.min(window.innerWidth, Math.max(e.x, e.x + e.width))
      , n = Math.max(0, Math.min(e.y, e.y + e.height))
      , o = Math.min(window.innerHeight, Math.max(e.y, e.y + e.height));
    return [t + (r - t >> 1), n + (o - n >> 1)]
}
).toString()
  , Nw = ( () => navigator.platform.toLowerCase().includes("mac")).toString();
async function Ow(i, e) {
    var a, c, p, h;
    const r = await (await i.getOrCreateHiddenSandbox()).callFunction(Dw, !1, {
        type: "undefined"
    }, [e]);
    if (r.type === "exception")
        throw new nn.NoSuchElementException(`Origin element ${e.sharedId} was not found`);
    (0,
    Xi.assert)(r.result.type === "array"),
    (0,
    Xi.assert)(((c = (a = r.result.value) == null ? void 0 : a[0]) == null ? void 0 : c.type) === "number"),
    (0,
    Xi.assert)(((h = (p = r.result.value) == null ? void 0 : p[1]) == null ? void 0 : h.type) === "number");
    const {result: {value: [{value: n},{value: o}]}} = r;
    return {
        x: n,
        y: o
    }
}
var lo, Cn, zt, Kt, ho, rr, V, xe, Ip, kp, Tp, Dp, Np, Id, Op, Rp, Ap;
class _p {
    constructor(e, t, r, n) {
        u(this, V);
        u(this, lo);
        u(this, Cn, 0);
        u(this, zt, 0);
        u(this, Kt);
        u(this, ho);
        u(this, rr);
        m(this, lo, t),
        m(this, Kt, e),
        m(this, ho, r),
        m(this, rr, n)
    }
    async dispatchActions(e) {
        await s(this, Kt).queue.run(async () => {
            for (const t of e)
                await this.dispatchTickActions(t)
        }
        )
    }
    async dispatchTickActions(e) {
        m(this, Cn, performance.now()),
        m(this, zt, 0);
        for (const {action: r} of e)
            "duration"in r && r.duration !== void 0 && m(this, zt, Math.max(s(this, zt), r.duration));
        const t = [new Promise(r => setTimeout(r, s(this, zt)))];
        for (const r of e)
            t.push(g(this, V, Ip).call(this, r));
        await Promise.all(t)
    }
}
lo = new WeakMap,
Cn = new WeakMap,
zt = new WeakMap,
Kt = new WeakMap,
ho = new WeakMap,
rr = new WeakMap,
V = new WeakSet,
xe = function() {
    return s(this, lo).getContext(s(this, ho))
}
,
Ip = async function({id: e, action: t}) {
    const r = s(this, Kt).get(e)
      , n = s(this, Kt).getGlobalKeyState();
    switch (t.type) {
    case "keyDown":
        {
            await g(this, V, Rp).call(this, r, t),
            s(this, Kt).cancelList.push({
                id: e,
                action: {
                    ...t,
                    type: "keyUp"
                }
            });
            break
        }
    case "keyUp":
        {
            await g(this, V, Ap).call(this, r, t);
            break
        }
    case "pause":
        break;
    case "pointerDown":
        {
            await g(this, V, kp).call(this, r, n, t),
            s(this, Kt).cancelList.push({
                id: e,
                action: {
                    ...t,
                    type: "pointerUp"
                }
            });
            break
        }
    case "pointerMove":
        {
            await g(this, V, Dp).call(this, r, n, t);
            break
        }
    case "pointerUp":
        {
            await g(this, V, Tp).call(this, r, n, t);
            break
        }
    case "scroll":
        {
            await g(this, V, Op).call(this, r, n, t);
            break
        }
    }
}
,
kp = async function(e, t, r) {
    const {button: n} = r;
    if (e.pressed.has(n))
        return;
    e.pressed.add(n);
    const {x: o, y: a, subtype: c} = e
      , {width: p, height: h, pressure: d, twist: l, tangentialPressure: w} = r
      , {tiltX: C, tiltY: E} = yh(r)
      , {modifiers: S} = t
      , {radiusX: b, radiusY: y} = vh(p ?? 1, h ?? 1);
    switch (c) {
    case "mouse":
    case "pen":
        await s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
            type: "mousePressed",
            x: o,
            y: a,
            modifiers: S,
            button: Ya(n),
            buttons: e.buttons,
            clickCount: e.setClickCount(n, new Tw.PointerSource.ClickContext(o,a,performance.now())),
            pointerType: c,
            tangentialPressure: w,
            tiltX: C,
            tiltY: E,
            twist: l,
            force: d
        });
        break;
    case "touch":
        await s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
            type: "touchStart",
            touchPoints: [{
                x: o,
                y: a,
                radiusX: b,
                radiusY: y,
                tangentialPressure: w,
                tiltX: C,
                tiltY: E,
                twist: l,
                force: d,
                id: e.pointerId
            }],
            modifiers: S
        });
        break
    }
    e.radiusX = b,
    e.radiusY = y,
    e.force = d
}
,
Tp = function(e, t, r) {
    const {button: n} = r;
    if (!e.pressed.has(n))
        return;
    e.pressed.delete(n);
    const {x: o, y: a, force: c, radiusX: p, radiusY: h, subtype: d} = e
      , {modifiers: l} = t;
    switch (d) {
    case "mouse":
    case "pen":
        return s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
            type: "mouseReleased",
            x: o,
            y: a,
            modifiers: l,
            button: Ya(n),
            buttons: e.buttons,
            clickCount: e.getClickCount(n),
            pointerType: d
        });
    case "touch":
        return s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
            type: "touchEnd",
            touchPoints: [{
                x: o,
                y: a,
                id: e.pointerId,
                force: c,
                radiusX: p,
                radiusY: h
            }],
            modifiers: l
        })
    }
}
,
Dp = async function(e, t, r) {
    const {x: n, y: o, subtype: a} = e
      , {width: c, height: p, pressure: h, twist: d, tangentialPressure: l, x: w, y: C, origin: E="viewport", duration: S=s(this, zt)} = r
      , {tiltX: b, tiltY: y} = yh(r)
      , {radiusX: D, radiusY: v} = vh(c ?? 1, p ?? 1)
      , {targetX: P, targetY: A} = await g(this, V, Id).call(this, E, w, C, n, o);
    if (P < 0 || A < 0)
        throw new nn.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${P}, y: ${A})`);
    let M;
    do {
        const x = S > 0 ? (performance.now() - s(this, Cn)) / S : 1;
        M = x >= 1;
        let f, _;
        if (M ? (f = P,
        _ = A) : (f = Math.round(x * (P - n) + n),
        _ = Math.round(x * (A - o) + o)),
        e.x !== f || e.y !== _) {
            const {modifiers: N} = t;
            switch (a) {
            case "mouse":
                await s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
                    type: "mouseMoved",
                    x: f,
                    y: _,
                    modifiers: N,
                    clickCount: 0,
                    button: Ya(e.pressed.values().next().value ?? 5),
                    buttons: e.buttons,
                    pointerType: a,
                    tangentialPressure: l,
                    tiltX: b,
                    tiltY: y,
                    twist: d,
                    force: h
                });
                break;
            case "pen":
                e.pressed.size !== 0 && await s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
                    type: "mouseMoved",
                    x: f,
                    y: _,
                    modifiers: N,
                    clickCount: 0,
                    button: Ya(e.pressed.values().next().value ?? 5),
                    buttons: e.buttons,
                    pointerType: a,
                    tangentialPressure: l,
                    tiltX: b,
                    tiltY: y,
                    twist: d,
                    force: h ?? .5
                });
                break;
            case "touch":
                e.pressed.size !== 0 && await s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
                    type: "touchMove",
                    touchPoints: [{
                        x: f,
                        y: _,
                        radiusX: D,
                        radiusY: v,
                        tangentialPressure: l,
                        tiltX: b,
                        tiltY: y,
                        twist: d,
                        force: h,
                        id: e.pointerId
                    }],
                    modifiers: N
                });
                break
            }
            e.x = f,
            e.y = _,
            e.radiusX = D,
            e.radiusY = v,
            e.force = h
        }
    } while (!M)
}
,
Np = async function() {
    if (s(this, V, xe).id === s(this, V, xe).cdpTarget.id)
        return {
            x: 0,
            y: 0
        };
    const {backendNodeId: e} = await s(this, V, xe).cdpTarget.cdpClient.sendCommand("DOM.getFrameOwner", {
        frameId: s(this, V, xe).id
    })
      , {model: t} = await s(this, V, xe).cdpTarget.cdpClient.sendCommand("DOM.getBoxModel", {
        backendNodeId: e
    });
    return {
        x: t.content[0],
        y: t.content[1]
    }
}
,
Id = async function(e, t, r, n, o) {
    let a, c;
    const p = await g(this, V, Np).call(this);
    switch (e) {
    case "viewport":
        a = t + p.x,
        c = r + p.y;
        break;
    case "pointer":
        a = n + t + p.x,
        c = o + r + p.y;
        break;
    default:
        {
            const {x: h, y: d} = await Ow(s(this, V, xe), e.element);
            a = h + t + p.x,
            c = d + r + p.y;
            break
        }
    }
    return {
        targetX: a,
        targetY: c
    }
}
,
Op = async function(e, t, r) {
    const {deltaX: n, deltaY: o, x: a, y: c, origin: p="viewport", duration: h=s(this, zt)} = r;
    if (p === "pointer")
        throw new nn.InvalidArgumentException('"pointer" origin is invalid for scrolling.');
    const {targetX: d, targetY: l} = await g(this, V, Id).call(this, p, a, c, 0, 0);
    if (d < 0 || l < 0)
        throw new nn.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${d}, y: ${l})`);
    let w = 0, C = 0, E;
    do {
        const S = h > 0 ? (performance.now() - s(this, Cn)) / h : 1;
        E = S >= 1;
        let b, y;
        if (E ? (b = n - w,
        y = o - C) : (b = Math.round(S * n - w),
        y = Math.round(S * o - C)),
        b !== 0 || y !== 0) {
            const {modifiers: D} = t;
            await s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
                type: "mouseWheel",
                deltaX: b,
                deltaY: y,
                x: d,
                y: l,
                modifiers: D
            }),
            w += b,
            C += y
        }
    } while (!E)
}
,
Rp = async function(e, t) {
    const r = t.value;
    if (!(0,
    Ja.isSingleGrapheme)(r))
        throw new nn.InvalidArgumentException(`Invalid key value: ${r}`);
    const n = (0,
    Ja.isSingleComplexGrapheme)(r)
      , o = (0,
    Xr.getNormalizedKey)(r)
      , a = e.pressed.has(o)
      , c = (0,
    Xr.getKeyCode)(r)
      , p = (0,
    Xr.getKeyLocation)(r);
    switch (o) {
    case "Alt":
        e.alt = !0;
        break;
    case "Shift":
        e.shift = !0;
        break;
    case "Control":
        e.ctrl = !0;
        break;
    case "Meta":
        e.meta = !0;
        break
    }
    e.pressed.add(o);
    const {modifiers: h} = e
      , d = gh(o, e, n)
      , l = wh(c ?? "", e) ?? d;
    let w;
    if (s(this, rr) && e.meta)
        switch (c) {
        case "KeyA":
            w = "SelectAll";
            break;
        case "KeyC":
            w = "Copy";
            break;
        case "KeyV":
            w = e.shift ? "PasteAndMatchStyle" : "Paste";
            break;
        case "KeyX":
            w = "Cut";
            break;
        case "KeyZ":
            w = e.shift ? "Redo" : "Undo";
            break
        }
    const C = [s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
        type: l ? "keyDown" : "rawKeyDown",
        windowsVirtualKeyCode: mh.KeyToKeyCode[o],
        key: o,
        code: c,
        text: l,
        unmodifiedText: d,
        autoRepeat: a,
        isSystemKey: e.alt || void 0,
        location: p < 3 ? p : void 0,
        isKeypad: p === 3,
        modifiers: h,
        commands: w ? [w] : void 0
    })];
    o === "Escape" && !e.alt && (s(this, rr) && !e.ctrl && !e.meta || !s(this, rr)) && C.push(s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.cancelDragging")),
    await Promise.all(C)
}
,
Ap = function(e, t) {
    const r = t.value;
    if (!(0,
    Ja.isSingleGrapheme)(r))
        throw new nn.InvalidArgumentException(`Invalid key value: ${r}`);
    const n = (0,
    Ja.isSingleComplexGrapheme)(r)
      , o = (0,
    Xr.getNormalizedKey)(r);
    if (!e.pressed.has(o))
        return;
    const a = (0,
    Xr.getKeyCode)(r)
      , c = (0,
    Xr.getKeyLocation)(r);
    switch (o) {
    case "Alt":
        e.alt = !1;
        break;
    case "Shift":
        e.shift = !1;
        break;
    case "Control":
        e.ctrl = !1;
        break;
    case "Meta":
        e.meta = !1;
        break
    }
    e.pressed.delete(o);
    const {modifiers: p} = e
      , h = gh(o, e, n)
      , d = wh(a ?? "", e) ?? h;
    return s(this, V, xe).cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
        type: "keyUp",
        windowsVirtualKeyCode: mh.KeyToKeyCode[o],
        key: o,
        code: a,
        text: d,
        unmodifiedText: h,
        location: c < 3 ? c : void 0,
        isSystemKey: e.alt || void 0,
        isKeypad: c === 3,
        modifiers: p
    })
}
,
O(_p, "isMacOS", async e => {
    const r = await (await e.getOrCreateHiddenSandbox()).callFunction(Nw, !1);
    return (0,
    Xi.assert)(r.type !== "exception"),
    (0,
    Xi.assert)(r.result.type === "boolean"),
    r.result.value
}
);
Cu.ActionDispatcher = _p;
const gh = (i, e, t) => t ? i : i === "Enter" ? "\r" : [...i].length === 1 ? e.shift ? i.toLocaleUpperCase("en-US") : i : void 0
  , wh = (i, e) => {
    if (e.ctrl) {
        switch (i) {
        case "Digit2":
            if (e.shift)
                return "\0";
            break;
        case "KeyA":
            return "";
        case "KeyB":
            return "";
        case "KeyC":
            return "";
        case "KeyD":
            return "";
        case "KeyE":
            return "";
        case "KeyF":
            return "";
        case "KeyG":
            return "\x07";
        case "KeyH":
            return "\b";
        case "KeyI":
            return "	";
        case "KeyJ":
            return `
`;
        case "KeyK":
            return "\v";
        case "KeyL":
            return "\f";
        case "KeyM":
            return "\r";
        case "KeyN":
            return "";
        case "KeyO":
            return "";
        case "KeyP":
            return "";
        case "KeyQ":
            return "";
        case "KeyR":
            return "";
        case "KeyS":
            return "";
        case "KeyT":
            return "";
        case "KeyU":
            return "";
        case "KeyV":
            return "";
        case "KeyW":
            return "";
        case "KeyX":
            return "";
        case "KeyY":
            return "";
        case "KeyZ":
            return "";
        case "BracketLeft":
            return "\x1B";
        case "Backslash":
            return "";
        case "BracketRight":
            return "";
        case "Digit6":
            if (e.shift)
                return "";
            break;
        case "Minus":
            return ""
        }
        return ""
    }
    if (e.alt)
        return ""
}
;
function Ya(i) {
    switch (i) {
    case 0:
        return "left";
    case 1:
        return "middle";
    case 2:
        return "right";
    case 3:
        return "back";
    case 4:
        return "forward";
    default:
        return "none"
    }
}
function yh(i) {
    const e = i.altitudeAngle ?? Math.PI / 2
      , t = i.azimuthAngle ?? 0;
    let r = 0
      , n = 0;
    if (e === 0 && ((t === 0 || t === 2 * Math.PI) && (r = Math.PI / 2),
    t === Math.PI / 2 && (n = Math.PI / 2),
    t === Math.PI && (r = -Math.PI / 2),
    t === 3 * Math.PI / 2 && (n = -Math.PI / 2),
    t > 0 && t < Math.PI / 2 && (r = Math.PI / 2,
    n = Math.PI / 2),
    t > Math.PI / 2 && t < Math.PI && (r = -Math.PI / 2,
    n = Math.PI / 2),
    t > Math.PI && t < 3 * Math.PI / 2 && (r = -Math.PI / 2,
    n = -Math.PI / 2),
    t > 3 * Math.PI / 2 && t < 2 * Math.PI && (r = Math.PI / 2,
    n = -Math.PI / 2)),
    e !== 0) {
        const a = Math.tan(e);
        r = Math.atan(Math.cos(t) / a),
        n = Math.atan(Math.sin(t) / a)
    }
    const o = 180 / Math.PI;
    return {
        tiltX: Math.round(r * o),
        tiltY: Math.round(n * o)
    }
}
function vh(i, e) {
    return {
        radiusX: i ? i / 2 : .5,
        radiusY: e ? e / 2 : .5
    }
}
var Su = {}
  , Pu = {}
  , _u = {};
Object.defineProperty(_u, "__esModule", {
    value: !0
});
_u.Mutex = void 0;
var xn, po, fo, kd;
class Rw {
    constructor() {
        u(this, fo);
        u(this, xn, !1);
        u(this, po, [])
    }
    acquire() {
        const e = {
            resolved: !1
        };
        return s(this, xn) ? new Promise(t => {
            s(this, po).push( () => t(g(this, fo, kd).bind(this, e)))
        }
        ) : (m(this, xn, !0),
        Promise.resolve(g(this, fo, kd).bind(this, e)))
    }
    async run(e) {
        const t = await this.acquire();
        try {
            return await e()
        } finally {
            t()
        }
    }
}
xn = new WeakMap,
po = new WeakMap,
fo = new WeakSet,
kd = function(e) {
    if (e.resolved)
        throw new Error("Cannot release more than once.");
    e.resolved = !0;
    const t = s(this, po).shift();
    if (!t) {
        m(this, xn, !1);
        return
    }
    t()
}
;
_u.Mutex = Rw;
Object.defineProperty(Pu, "__esModule", {
    value: !0
});
Pu.InputState = void 0;
const rd = ee
  , Aw = _u
  , Oi = pt;
var gs, $c;
class Mw {
    constructor() {
        O(this, "cancelList", []);
        u(this, gs, new Map);
        u(this, $c, new Aw.Mutex)
    }
    getOrCreate(e, t, r) {
        let n = s(this, gs).get(e);
        if (!n) {
            switch (t) {
            case "none":
                n = new Oi.NoneSource;
                break;
            case "key":
                n = new Oi.KeySource;
                break;
            case "pointer":
                {
                    let o = r === "mouse" ? 0 : 2;
                    const a = new Set;
                    for (const [,c] of s(this, gs))
                        c.type === "pointer" && a.add(c.pointerId);
                    for (; a.has(o); )
                        ++o;
                    n = new Oi.PointerSource(o,r);
                    break
                }
            case "wheel":
                n = new Oi.WheelSource;
                break;
            default:
                throw new rd.InvalidArgumentException(`Expected "none", "key", "pointer", or "wheel". Found unknown source type ${t}.`)
            }
            return s(this, gs).set(e, n),
            n
        }
        if (n.type !== t)
            throw new rd.InvalidArgumentException(`Input source type of ${e} is ${n.type}, but received ${t}.`);
        return n
    }
    get(e) {
        const t = s(this, gs).get(e);
        if (!t)
            throw new rd.UnknownErrorException("Internal error.");
        return t
    }
    getGlobalKeyState() {
        const e = new Oi.KeySource;
        for (const [,t] of s(this, gs))
            if (t.type === "key") {
                for (const r of t.pressed)
                    e.pressed.add(r);
                e.alt || (e.alt = t.alt),
                e.ctrl || (e.ctrl = t.ctrl),
                e.meta || (e.meta = t.meta),
                e.shift || (e.shift = t.shift)
            }
        return e
    }
    get queue() {
        return s(this, $c)
    }
}
gs = new WeakMap,
$c = new WeakMap;
Pu.InputState = Mw;
Object.defineProperty(Su, "__esModule", {
    value: !0
});
Su.InputStateManager = void 0;
const Bw = as
  , jw = Pu;
class Fw extends WeakMap {
    get(e) {
        return (0,
        Bw.assert)(e.isTopLevelContext()),
        this.has(e) || this.set(e, new jw.InputState),
        super.get(e)
    }
}
Su.InputStateManager = Fw;
Object.defineProperty(bu, "__esModule", {
    value: !0
});
bu.InputProcessor = void 0;
const Hs = ee
  , Qa = as
  , Za = Cu
  , $w = Su;
var Wt, En, Uc, Mp;
class Uw {
    constructor(e) {
        u(this, Uc);
        u(this, Wt);
        u(this, En, new $w.InputStateManager);
        m(this, Wt, e)
    }
    async performActions(e) {
        const t = s(this, Wt).getContext(e.context)
          , r = s(this, En).get(t.top)
          , n = g(this, Uc, Mp).call(this, e, r);
        return await new Za.ActionDispatcher(r,s(this, Wt),e.context,await Za.ActionDispatcher.isMacOS(t).catch( () => !1)).dispatchActions(n),
        {}
    }
    async releaseActions(e) {
        const t = s(this, Wt).getContext(e.context)
          , r = t.top
          , n = s(this, En).get(r);
        return await new Za.ActionDispatcher(n,s(this, Wt),e.context,await Za.ActionDispatcher.isMacOS(t).catch( () => !1)).dispatchTickActions(n.cancelList.reverse()),
        s(this, En).delete(r),
        {}
    }
    async setFiles(e) {
        const r = await s(this, Wt).getContext(e.context).getOrCreateHiddenSandbox();
        let n;
        try {
            n = await r.callFunction(String(function(p) {
                if (!(this instanceof HTMLInputElement))
                    return this instanceof Element ? 1 : 0;
                if (this.type !== "file")
                    return 2;
                if (this.disabled)
                    return 3;
                if (p > 1 && !this.multiple)
                    return 4
            }), !1, e.element, [{
                type: "number",
                value: e.files.length
            }])
        } catch {
            throw new Hs.NoSuchNodeException(`Could not find element ${e.element.sharedId}`)
        }
        if ((0,
        Qa.assert)(n.type === "success"),
        n.result.type === "number")
            switch (n.result.value) {
            case 0:
                throw new Hs.NoSuchElementException(`Could not find element ${e.element.sharedId}`);
            case 1:
                throw new Hs.UnableToSetFileInputException(`Element ${e.element.sharedId} is not a input`);
            case 2:
                throw new Hs.UnableToSetFileInputException(`Input element ${e.element.sharedId} is not a file type`);
            case 3:
                throw new Hs.UnableToSetFileInputException(`Input element ${e.element.sharedId} is disabled`);
            case 4:
                throw new Hs.UnableToSetFileInputException("Cannot set multiple files on a non-multiple input element")
            }
        if (e.files.length === 0)
            return await r.callFunction(String(function() {
                var p;
                if (((p = this.files) == null ? void 0 : p.length) === 0) {
                    this.dispatchEvent(new Event("cancel",{
                        bubbles: !0
                    }));
                    return
                }
                this.files = new DataTransfer().files,
                this.dispatchEvent(new Event("input",{
                    bubbles: !0,
                    composed: !0
                })),
                this.dispatchEvent(new Event("change",{
                    bubbles: !0
                }))
            }), !1, e.element),
            {};
        const o = [];
        for (let c = 0; c < e.files.length; ++c) {
            const p = await r.callFunction(String(function(w) {
                var C;
                return (C = this.files) == null ? void 0 : C.item(w)
            }), !1, e.element, [{
                type: "number",
                value: 0
            }], "root");
            if ((0,
            Qa.assert)(p.type === "success"),
            p.result.type !== "object")
                break;
            const {handle: h} = p.result;
            (0,
            Qa.assert)(h !== void 0);
            const {path: d} = await r.cdpClient.sendCommand("DOM.getFileInfo", {
                objectId: h
            });
            o.push(d),
            r.disown(h).catch(void 0)
        }
        o.sort();
        const a = [...e.files].sort();
        if (o.length !== e.files.length || a.some( (c, p) => o[p] !== c)) {
            const {objectId: c} = await r.deserializeForCdp(e.element);
            (0,
            Qa.assert)(c !== void 0),
            await r.cdpClient.sendCommand("DOM.setFileInputFiles", {
                files: e.files,
                objectId: c
            })
        } else
            await r.callFunction(String(function() {
                this.dispatchEvent(new Event("cancel",{
                    bubbles: !0
                }))
            }), !1, e.element);
        return {}
    }
}
Wt = new WeakMap,
En = new WeakMap,
Uc = new WeakSet,
Mp = function(e, t) {
    var n;
    const r = [];
    for (const o of e.actions) {
        switch (o.type) {
        case "pointer":
            {
                o.parameters ?? (o.parameters = {
                    pointerType: "mouse"
                }),
                (n = o.parameters).pointerType ?? (n.pointerType = "mouse");
                const c = t.getOrCreate(o.id, "pointer", o.parameters.pointerType);
                if (c.subtype !== o.parameters.pointerType)
                    throw new Hs.InvalidArgumentException(`Expected input source ${o.id} to be ${c.subtype}; got ${o.parameters.pointerType}.`);
                c.resetClickCount();
                break
            }
        default:
            t.getOrCreate(o.id, o.type)
        }
        const a = o.actions.map(c => ({
            id: o.id,
            action: c
        }));
        for (let c = 0; c < a.length; c++)
            r.length === c && r.push([]),
            r[c].push(a[c])
    }
    return r
}
;
bu.InputProcessor = Uw;
var ki = {}
  , ye = {}
  , Fl = {};
Object.defineProperty(Fl, "__esModule", {
    value: !0
});
Fl.base64ToString = Lw;
function Lw(i) {
    return "atob"in globalThis ? globalThis.atob(i) : Buffer.from(i, "base64").toString("ascii")
}
Object.defineProperty(ye, "__esModule", {
    value: !0
});
ye.computeHeadersSize = zw;
ye.stringToBase64 = Kw;
ye.bidiNetworkHeadersFromCdpNetworkHeaders = Gw;
ye.bidiNetworkHeadersFromCdpNetworkHeadersEntries = Vw;
ye.cdpNetworkHeadersFromBidiNetworkHeaders = Xw;
ye.bidiNetworkHeadersFromCdpFetchHeaders = Jw;
ye.cdpFetchHeadersFromBidiNetworkHeaders = Yw;
ye.networkHeaderFromCookieHeaders = Qw;
ye.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = Zw;
ye.cdpToBiDiCookie = ey;
ye.deserializeByteValue = Bp;
ye.bidiToCdpCookie = ty;
ye.sameSiteBiDiToCdp = jp;
ye.isSpecialScheme = ry;
ye.matchUrlPattern = iy;
ye.bidiBodySizeFromCdpPostDataEntries = oy;
ye.getTiming = ay;
const qw = F
  , Hw = Fl;
function zw(i) {
    const e = i.reduce( (t, r) => `${t}${r.name}: ${r.value.value}\r
`, "");
    return new TextEncoder().encode(e).length
}
function Kw(i) {
    return Ww(new TextEncoder().encode(i))
}
function Ww(i) {
    const t = [];
    for (let n = 0; n < i.length; n += 65534) {
        const o = i.subarray(n, n + 65534);
        t.push(String.fromCodePoint.apply(null, o))
    }
    const r = t.join("");
    return btoa(r)
}
function Gw(i) {
    return i ? Object.entries(i).map( ([e,t]) => ({
        name: e,
        value: {
            type: "string",
            value: t
        }
    })) : []
}
function Vw(i) {
    return i ? i.map( ({name: e, value: t}) => ({
        name: e,
        value: {
            type: "string",
            value: t
        }
    })) : []
}
function Xw(i) {
    if (i !== void 0)
        return i.reduce( (e, t) => (e[t.name] = t.value.value,
        e), {})
}
function Jw(i) {
    return i ? i.map( ({name: e, value: t}) => ({
        name: e,
        value: {
            type: "string",
            value: t
        }
    })) : []
}
function Yw(i) {
    if (i !== void 0)
        return i.map( ({name: e, value: t}) => ({
            name: e,
            value: t.value
        }))
}
function Qw(i) {
    return i === void 0 ? void 0 : {
        name: "Cookie",
        value: {
            type: "string",
            value: i.reduce( (t, r, n) => {
                n > 0 && (t += ";");
                const o = r.value.type === "base64" ? btoa(r.value.value) : r.value.value;
                return t += `${r.name}=${o}`,
                t
            }
            , "")
        }
    }
}
function Zw(i) {
    switch (i) {
    case "default":
        return "Default";
    case "cancel":
        return "CancelAuth";
    case "provideCredentials":
        return "ProvideCredentials"
    }
}
function ey(i) {
    const e = {
        name: i.name,
        value: {
            type: "string",
            value: i.value
        },
        domain: i.domain,
        path: i.path,
        size: i.size,
        httpOnly: i.httpOnly,
        secure: i.secure,
        sameSite: i.sameSite === void 0 ? "none" : sy(i.sameSite),
        ...i.expires >= 0 ? {
            expiry: i.expires
        } : void 0
    };
    return e["goog:session"] = i.session,
    e["goog:priority"] = i.priority,
    e["goog:sameParty"] = i.sameParty,
    e["goog:sourceScheme"] = i.sourceScheme,
    e["goog:sourcePort"] = i.sourcePort,
    i.partitionKey !== void 0 && (e["goog:partitionKey"] = i.partitionKey),
    i.partitionKeyOpaque !== void 0 && (e["goog:partitionKeyOpaque"] = i.partitionKeyOpaque),
    e
}
function Bp(i) {
    return i.type === "base64" ? (0,
    Hw.base64ToString)(i.value) : i.value
}
function ty(i, e) {
    const t = Bp(i.cookie.value)
      , r = {
        name: i.cookie.name,
        value: t,
        domain: i.cookie.domain,
        path: i.cookie.path ?? "/",
        secure: i.cookie.secure ?? !1,
        httpOnly: i.cookie.httpOnly ?? !1,
        ...e.sourceOrigin !== void 0 && {
            partitionKey: {
                hasCrossSiteAncestor: !1,
                topLevelSite: e.sourceOrigin
            }
        },
        ...i.cookie.expiry !== void 0 && {
            expires: i.cookie.expiry
        },
        ...i.cookie.sameSite !== void 0 && {
            sameSite: jp(i.cookie.sameSite)
        }
    };
    return i.cookie["goog:url"] !== void 0 && (r.url = i.cookie["goog:url"]),
    i.cookie["goog:priority"] !== void 0 && (r.priority = i.cookie["goog:priority"]),
    i.cookie["goog:sameParty"] !== void 0 && (r.sameParty = i.cookie["goog:sameParty"]),
    i.cookie["goog:sourceScheme"] !== void 0 && (r.sourceScheme = i.cookie["goog:sourceScheme"]),
    i.cookie["goog:sourcePort"] !== void 0 && (r.sourcePort = i.cookie["goog:sourcePort"]),
    r
}
function sy(i) {
    switch (i) {
    case "Strict":
        return "strict";
    case "None":
        return "none";
    case "Lax":
        return "lax";
    default:
        return "lax"
    }
}
function jp(i) {
    switch (i) {
    case "none":
        return "None";
    case "strict":
        return "Strict";
    case "default":
    case "lax":
        return "Lax"
    }
    throw new qw.InvalidArgumentException(`Unknown 'sameSite' value ${i}`)
}
function ry(i) {
    return ["ftp", "file", "http", "https", "ws", "wss"].includes(i.replace(/:$/, ""))
}
function ny(i) {
    return i.protocol.replace(/:$/, "")
}
function iy(i, e) {
    const t = new URL(e);
    return !(i.protocol !== void 0 && i.protocol !== ny(t) || i.hostname !== void 0 && i.hostname !== t.hostname || i.port !== void 0 && i.port !== t.port || i.pathname !== void 0 && i.pathname !== t.pathname || i.search !== void 0 && i.search !== t.search)
}
function oy(i) {
    let e = 0;
    for (const t of i)
        e += atob(t.bytes ?? "").length;
    return e
}
function ay(i, e=0) {
    return !i || i <= 0 || i + e <= 0 ? 0 : i + e
}
Object.defineProperty(ki, "__esModule", {
    value: !0
});
ki.NetworkProcessor = void 0;
ki.parseBiDiHeaders = $p;
const Z = ee
  , bh = ye;
var Je, Ye, Sn, ws, Te, Li, Dd, qi, Fp;
const rt = class rt {
    constructor(e, t, r, n) {
        u(this, Te);
        u(this, Je);
        u(this, Ye);
        u(this, Sn);
        u(this, ws);
        m(this, Sn, r),
        m(this, Je, e),
        m(this, Ye, t),
        m(this, ws, n)
    }
    async addIntercept(e) {
        s(this, Je).verifyTopLevelContextsList(e.contexts);
        const t = e.urlPatterns ?? []
          , r = rt.parseUrlPatterns(t)
          , n = s(this, Ye).addIntercept({
            urlPatterns: r,
            phases: e.phases,
            contexts: e.contexts
        });
        return await g(this, Te, Li).call(this),
        {
            intercept: n
        }
    }
    async continueRequest(e) {
        if (e.url !== void 0 && rt.parseUrlString(e.url),
        e.method !== void 0 && !rt.isMethodValid(e.method))
            throw new Z.InvalidArgumentException(`Method '${e.method}' is invalid.`);
        e.headers && rt.validateHeaders(e.headers);
        const t = g(this, Te, qi).call(this, e.request, ["beforeRequestSent"]);
        try {
            await t.continueRequest(e)
        } catch (r) {
            throw rt.wrapInterceptionError(r)
        }
        return {}
    }
    async continueResponse(e) {
        e.headers && rt.validateHeaders(e.headers);
        const t = g(this, Te, qi).call(this, e.request, ["authRequired", "responseStarted"]);
        try {
            await t.continueResponse(e)
        } catch (r) {
            throw rt.wrapInterceptionError(r)
        }
        return {}
    }
    async continueWithAuth(e) {
        const t = e.request;
        return await g(this, Te, qi).call(this, t, ["authRequired"]).continueWithAuth(e),
        {}
    }
    async failRequest({request: e}) {
        const t = g(this, Te, Dd).call(this, e);
        if (t.interceptPhase === "authRequired")
            throw new Z.InvalidArgumentException(`Request '${e}' in 'authRequired' phase cannot be failed`);
        if (!t.interceptPhase)
            throw new Z.NoSuchRequestException(`No blocked request found for network id '${e}'`);
        return await t.failRequest("Failed"),
        {}
    }
    async provideResponse(e) {
        e.headers && rt.validateHeaders(e.headers);
        const t = g(this, Te, qi).call(this, e.request, ["beforeRequestSent", "responseStarted", "authRequired"]);
        try {
            await t.provideResponse(e)
        } catch (r) {
            throw rt.wrapInterceptionError(r)
        }
        return {}
    }
    async removeIntercept(e) {
        return s(this, Ye).removeIntercept(e.intercept),
        await g(this, Te, Li).call(this),
        {}
    }
    async setCacheBehavior(e) {
        const t = s(this, Je).verifyTopLevelContextsList(e.contexts);
        if (t.size === 0)
            return s(this, Ye).defaultCacheBehavior = e.cacheBehavior,
            await Promise.all(s(this, Je).getAllContexts().map(n => n.cdpTarget.toggleSetCacheDisabled())),
            {};
        const r = e.cacheBehavior === "bypass";
        return await Promise.all([...t.values()].map(n => n.cdpTarget.toggleSetCacheDisabled(r))),
        {}
    }
    static validateHeaders(e) {
        for (const t of e) {
            let r;
            if (t.value.type === "string" ? r = t.value.value : r = atob(t.value.value),
            r !== r.trim() || r.includes(`
`) || r.includes("\0"))
                throw new Z.InvalidArgumentException(`Header value '${r}' is not acceptable value`)
        }
    }
    static isMethodValid(e) {
        return /^[!#$%&'*+\-.^_`|~a-zA-Z\d]+$/.test(e)
    }
    static parseUrlString(e) {
        try {
            return new URL(e)
        } catch (t) {
            throw new Z.InvalidArgumentException(`Invalid URL '${e}': ${t}`)
        }
    }
    static parseUrlPatterns(e) {
        return e.map(t => {
            let r = ""
              , n = !0
              , o = !0
              , a = !0
              , c = !0
              , p = !0;
            switch (t.type) {
            case "string":
                {
                    r = Jr(t.pattern);
                    break
                }
            case "pattern":
                {
                    if (t.protocol === void 0)
                        n = !1,
                        r += "http";
                    else {
                        if (t.protocol === "")
                            throw new Z.InvalidArgumentException("URL pattern must specify a protocol");
                        if (t.protocol = Jr(t.protocol),
                        !t.protocol.match(/^[a-zA-Z+-.]+$/))
                            throw new Z.InvalidArgumentException("Forbidden characters");
                        r += t.protocol
                    }
                    const d = r.toLocaleLowerCase();
                    if (r += ":",
                    (0,
                    bh.isSpecialScheme)(d) && (r += "//"),
                    t.hostname === void 0)
                        d !== "file" && (r += "placeholder"),
                        o = !1;
                    else {
                        if (t.hostname === "")
                            throw new Z.InvalidArgumentException("URL pattern must specify a hostname");
                        if (t.protocol === "file")
                            throw new Z.InvalidArgumentException("URL pattern protocol cannot be 'file'");
                        t.hostname = Jr(t.hostname);
                        let l = !1;
                        for (const w of t.hostname) {
                            if (w === "/" || w === "?" || w === "#")
                                throw new Z.InvalidArgumentException("'/', '?', '#' are forbidden in hostname");
                            if (!l && w === ":")
                                throw new Z.InvalidArgumentException("':' is only allowed inside brackets in hostname");
                            w === "[" && (l = !0),
                            w === "]" && (l = !1)
                        }
                        r += t.hostname
                    }
                    if (t.port === void 0)
                        a = !1;
                    else {
                        if (t.port === "")
                            throw new Z.InvalidArgumentException("URL pattern must specify a port");
                        if (t.port = Jr(t.port),
                        r += ":",
                        !t.port.match(/^\d+$/))
                            throw new Z.InvalidArgumentException("Forbidden characters");
                        r += t.port
                    }
                    if (t.pathname === void 0)
                        c = !1;
                    else {
                        if (t.pathname = Jr(t.pathname),
                        t.pathname[0] !== "/" && (r += "/"),
                        t.pathname.includes("#") || t.pathname.includes("?"))
                            throw new Z.InvalidArgumentException("Forbidden characters");
                        r += t.pathname
                    }
                    if (t.search === void 0)
                        p = !1;
                    else {
                        if (t.search = Jr(t.search),
                        t.search[0] !== "?" && (r += "?"),
                        t.search.includes("#"))
                            throw new Z.InvalidArgumentException("Forbidden characters");
                        r += t.search
                    }
                    break
                }
            }
            const h = d => {
                const l = {
                    "ftp:": 21,
                    "file:": null,
                    "http:": 80,
                    "https:": 443,
                    "ws:": 80,
                    "wss:": 443
                };
                if ((0,
                bh.isSpecialScheme)(d.protocol) && l[d.protocol] !== null && (!d.port || String(l[d.protocol]) === d.port))
                    return "";
                if (d.port)
                    return d.port
            }
            ;
            try {
                const d = new URL(r);
                return {
                    protocol: n ? d.protocol.replace(/:$/, "") : void 0,
                    hostname: o ? d.hostname : void 0,
                    port: a ? h(d) : void 0,
                    pathname: c && d.pathname ? d.pathname : void 0,
                    search: p ? d.search : void 0
                }
            } catch (d) {
                throw new Z.InvalidArgumentException(`${d.message} '${r}'`)
            }
        }
        )
    }
    static wrapInterceptionError(e) {
        return e != null && e.message.includes("Invalid header") || e != null && e.message.includes("Unsafe header") ? new Z.InvalidArgumentException(e.message) : e
    }
    async addDataCollector(e) {
        if (e.userContexts !== void 0 && e.contexts !== void 0)
            throw new Z.InvalidArgumentException("'contexts' and 'userContexts' are mutually exclusive");
        if (e.userContexts !== void 0 && await s(this, Sn).verifyUserContextIdList(e.userContexts),
        e.contexts !== void 0) {
            for (const r of e.contexts)
                if (!s(this, Je).getContext(r).isTopLevelContext())
                    throw new Z.InvalidArgumentException("Data collectors are available only on top-level browsing contexts")
        }
        const t = s(this, Ye).addDataCollector(e);
        return await g(this, Te, Li).call(this),
        {
            collector: t
        }
    }
    async getData(e) {
        return await s(this, Ye).getCollectedData(e)
    }
    async removeDataCollector(e) {
        return s(this, Ye).removeDataCollector(e),
        await g(this, Te, Li).call(this),
        {}
    }
    disownData(e) {
        return s(this, Ye).disownData(e),
        {}
    }
    async setExtraHeaders(e) {
        const t = await g(this, Te, Fp).call(this, e.contexts, e.userContexts)
          , r = $p(e.headers);
        return e.userContexts === void 0 && e.contexts === void 0 && s(this, ws).updateGlobalConfig({
            extraHeaders: r
        }),
        e.userContexts !== void 0 && e.userContexts.forEach(n => {
            s(this, ws).updateUserContextConfig(n, {
                extraHeaders: r
            })
        }
        ),
        e.contexts !== void 0 && e.contexts.forEach(n => {
            s(this, ws).updateBrowsingContextConfig(n, {
                extraHeaders: r
            })
        }
        ),
        await Promise.all(t.map(async n => {
            const o = s(this, ws).getActiveConfig(n.id, n.userContext).extraHeaders ?? {};
            await n.setExtraHeaders(o)
        }
        )),
        {}
    }
}
;
Je = new WeakMap,
Ye = new WeakMap,
Sn = new WeakMap,
ws = new WeakMap,
Te = new WeakSet,
Li = async function() {
    await Promise.all(s(this, Je).getAllContexts().map(e => e.cdpTarget.toggleNetwork()))
}
,
Dd = function(e) {
    const t = s(this, Ye).getRequestById(e);
    if (!t)
        throw new Z.NoSuchRequestException(`Network request with ID '${e}' doesn't exist`);
    return t
}
,
qi = function(e, t) {
    const r = g(this, Te, Dd).call(this, e);
    if (!r.interceptPhase)
        throw new Z.NoSuchRequestException(`No blocked request found for network id '${e}'`);
    if (r.interceptPhase && !t.includes(r.interceptPhase))
        throw new Z.InvalidArgumentException(`Blocked request for network id '${e}' is in '${r.interceptPhase}' phase`);
    return r
}
,
Fp = async function(e, t) {
    if (e === void 0 && t === void 0)
        return s(this, Je).getTopLevelContexts();
    if (e !== void 0 && t !== void 0)
        throw new Z.InvalidArgumentException("User contexts and browsing contexts are mutually exclusive");
    const r = [];
    if (t !== void 0) {
        if (t.length === 0)
            throw new Z.InvalidArgumentException("user context should be provided");
        await s(this, Sn).verifyUserContextIdList(t);
        for (const n of t) {
            const o = s(this, Je).getTopLevelContexts().filter(a => a.userContext === n);
            r.push(...o)
        }
    }
    if (e !== void 0) {
        if (e.length === 0)
            throw new Z.InvalidArgumentException("browsing context should be provided");
        for (const n of e) {
            const o = s(this, Je).getContext(n);
            if (!o.isTopLevelContext())
                throw new Z.InvalidArgumentException("The command is only supported on the top-level context");
            r.push(o)
        }
    }
    return [...new Set(r).values()]
}
;
let Td = rt;
ki.NetworkProcessor = Td;
function Jr(i) {
    const e = new Set(["(", ")", "*", "{", "}"]);
    let t = ""
      , r = !1;
    for (const n of i) {
        if (!r) {
            if (e.has(n))
                throw new Z.InvalidArgumentException("Forbidden characters");
            if (n === "\\") {
                r = !0;
                continue
            }
        }
        t += n,
        r = !1
    }
    return t
}
const cy = new Set([" ", "	", `
`, '"', "(", ")", ",", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "{", "}"])
  , uy = new Set(["\0", `
`, "\r"]);
function Ch(i, e) {
    for (const t of i)
        if (e.has(t))
            return !0;
    return !1
}
function $p(i) {
    const e = {};
    for (const t of i)
        if (t.value.type === "string") {
            const r = t.name
              , n = t.value.value;
            if (r.length === 0)
                throw new Z.InvalidArgumentException("Empty header name is not allowed");
            if (Ch(r, cy))
                throw new Z.InvalidArgumentException(`Header name '${r}' contains forbidden symbols`);
            if (Ch(n, uy))
                throw new Z.InvalidArgumentException(`Header value '${n}' contains forbidden symbols`);
            if (n.trim() !== n)
                throw new Z.InvalidArgumentException("Header value should not contain trailing or ending whitespaces");
            e[t.name] = t.value.value
        } else
            throw new Z.UnsupportedOperationException("Only string headers values are supported");
    return e
}
var Iu = {};
Object.defineProperty(Iu, "__esModule", {
    value: !0
});
Iu.PermissionsProcessor = void 0;
const dy = ee;
var mo;
class ly {
    constructor(e) {
        u(this, mo);
        m(this, mo, e)
    }
    async setPermissions(e) {
        try {
            const t = e["goog:userContext"] || e.userContext;
            await s(this, mo).sendCommand("Browser.setPermission", {
                origin: e.origin,
                embeddedOrigin: e.embeddedOrigin,
                browserContextId: t && t !== "default" ? t : void 0,
                permission: {
                    name: e.descriptor.name
                },
                setting: e.state
            })
        } catch (t) {
            if (t.message === "Permission can't be granted to opaque origins.")
                return {};
            throw new dy.InvalidArgumentException(t.message)
        }
        return {}
    }
}
mo = new WeakMap;
Iu.PermissionsProcessor = ly;
var ku = {}
  , Tu = {}
  , Ft = {};
const hy = {}
  , py = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: hy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , fy = rp(py);
Object.defineProperty(Ft, "__esModule", {
    value: !0
});
Ft.uuidv4 = my;
function Ri(i) {
    return i.reduce( (e, t) => e + t.toString(16).padStart(2, "0"), "")
}
function my() {
    if ("crypto"in globalThis && "randomUUID"in globalThis.crypto)
        return globalThis.crypto.randomUUID();
    const i = new Uint8Array(16);
    return "crypto"in globalThis && "getRandomValues"in globalThis.crypto ? globalThis.crypto.getRandomValues(i) : fy.webcrypto.getRandomValues(i),
    i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    [Ri(i.subarray(0, 4)), Ri(i.subarray(4, 6)), Ri(i.subarray(6, 8)), Ri(i.subarray(8, 10)), Ri(i.subarray(10, 16))].join("-")
}
var qa = {};
Object.defineProperty(qa, "__esModule", {
    value: !0
});
qa.ChannelProxy = void 0;
const gy = ee
  , xh = De
  , wy = Ft;
var nr, Pn, _n, os, Od, Up, Lp, qr, Rd, qp;
const fn = class fn {
    constructor(e, t) {
        u(this, qr);
        u(this, nr);
        u(this, Pn, (0,
        wy.uuidv4)());
        u(this, _n);
        m(this, nr, e),
        m(this, _n, t)
    }
    async init(e, t) {
        var o, a;
        const r = await g(o = fn, os, Up).call(o, e)
          , n = await g(a = fn, os, Lp).call(a, e, r);
        return g(this, qr, Rd).call(this, e, r, t),
        n
    }
    async startListenerFromWindow(e, t) {
        var r;
        try {
            const n = await g(this, qr, qp).call(this, e);
            g(this, qr, Rd).call(this, e, n, t)
        } catch (n) {
            (r = s(this, _n)) == null || r.call(this, xh.LogType.debugError, n)
        }
    }
    getEvalInWindowStr() {
        var r;
        const e = String( (n, o) => {
            const a = window;
            return a[n] === void 0 ? a[n] = o : (a[n](o),
            delete a[n]),
            o.sendMessage
        }
        )
          , t = g(r = fn, os, Od).call(r);
        return `(${e})('${s(this, Pn)}',${t})`
    }
}
;
nr = new WeakMap,
Pn = new WeakMap,
_n = new WeakMap,
os = new WeakSet,
Od = function() {
    return `(${String( () => {
        const t = [];
        letr = null;
        return {
            asyncgetMessage() {
                return await (t.length > 0 ? Promise.resolve() : new Promise(o => {
                    r = o
                }
                )),
                t.shift()
            },
            sendMessage(n) {
                t.push(n),
                r !== null && (r(),
                r = null)
            }
        }
    }
    )})()`
}
,
Up = async function(e) {
    const t = await e.cdpClient.sendCommand("Runtime.evaluate", {
        expression: g(this, os, Od).call(this),
        contextId: e.executionContextId,
        serializationOptions: {
            serialization: "idOnly"
        }
    });
    if (t.exceptionDetails || t.result.objectId === void 0)
        throw new Error("Cannot create channel");
    return t.result.objectId
}
,
Lp = async function(e, t) {
    return (await e.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String(n => n.sendMessage),
        arguments: [{
            objectId: t
        }],
        executionContextId: e.executionContextId,
        serializationOptions: {
            serialization: "idOnly"
        }
    })).result.objectId
}
,
qr = new WeakSet,
Rd = async function(e, t, r) {
    var n, o;
    for (; ; )
        try {
            const a = await e.cdpClient.sendCommand("Runtime.callFunctionOn", {
                functionDeclaration: String(async c => await c.getMessage()),
                arguments: [{
                    objectId: t
                }],
                awaitPromise: !0,
                executionContextId: e.executionContextId,
                serializationOptions: {
                    serialization: "deep",
                    maxDepth: ((n = s(this, nr).serializationOptions) == null ? void 0 : n.maxObjectDepth) ?? void 0
                }
            });
            if (a.exceptionDetails)
                throw new Error("Runtime.callFunctionOn in ChannelProxy",{
                    cause: a.exceptionDetails
                });
            for (const c of e.associatedBrowsingContexts)
                r.registerEvent({
                    type: "event",
                    method: gy.ChromiumBidi.Script.EventNames.Message,
                    params: {
                        channel: s(this, nr).channel,
                        data: e.cdpToBidiValue(a, s(this, nr).ownership ?? "none"),
                        source: e.source
                    }
                }, c.id)
        } catch (a) {
            (o = s(this, _n)) == null || o.call(this, xh.LogType.debugError, a);
            break
        }
}
,
qp = async function(e) {
    const t = await e.cdpClient.sendCommand("Runtime.callFunctionOn", {
        functionDeclaration: String(r => {
            const n = window;
            if (n[r] === void 0)
                return new Promise(a => n[r] = a);
            const o = n[r];
            return delete n[r],
            o
        }
        ),
        arguments: [{
            value: s(this, Pn)
        }],
        executionContextId: e.executionContextId,
        awaitPromise: !0,
        serializationOptions: {
            serialization: "idOnly"
        }
    });
    if (t.exceptionDetails !== void 0 || t.result.objectId === void 0)
        throw new Error(`ChannelHandle not found in window["${s(this, Pn)}"]`);
    return t.result.objectId
}
,
u(fn, os);
let Nd = fn;
qa.ChannelProxy = Nd;
Object.defineProperty(Tu, "__esModule", {
    value: !0
});
Tu.PreloadScript = void 0;
const yy = Ft
  , vy = qa;
var Lc, ir, go, In, wo, yo, vo, bo, qc, Hp;
class by {
    constructor(e, t) {
        u(this, qc);
        u(this, Lc, (0,
        yy.uuidv4)());
        u(this, ir, []);
        u(this, go);
        u(this, In, new Set);
        u(this, wo);
        u(this, yo);
        u(this, vo);
        u(this, bo);
        var r;
        m(this, wo, ((r = e.arguments) == null ? void 0 : r.map(n => new vy.ChannelProxy(n.value,t))) ?? []),
        m(this, go, e.functionDeclaration),
        m(this, yo, e.sandbox),
        m(this, vo, e.contexts),
        m(this, bo, e.userContexts)
    }
    get id() {
        return s(this, Lc)
    }
    get targetIds() {
        return s(this, In)
    }
    get channels() {
        return s(this, wo)
    }
    get contexts() {
        return s(this, vo)
    }
    get userContexts() {
        return s(this, bo)
    }
    async initInTargets(e, t) {
        await Promise.all(Array.from(e).map(r => this.initInTarget(r, t)))
    }
    async initInTarget(e, t) {
        const r = await e.cdpClient.sendCommand("Page.addScriptToEvaluateOnNewDocument", {
            source: g(this, qc, Hp).call(this),
            worldName: s(this, yo),
            runImmediately: t
        });
        s(this, ir).push({
            target: e,
            preloadScriptId: r.identifier
        }),
        s(this, In).add(e.id)
    }
    async remove() {
        await Promise.all([s(this, ir).map(async e => {
            const t = e.target
              , r = e.preloadScriptId;
            return await t.cdpClient.sendCommand("Page.removeScriptToEvaluateOnNewDocument", {
                identifier: r
            })
        }
        )])
    }
    dispose(e) {
        m(this, ir, s(this, ir).filter(t => {
            var r;
            return ((r = t.target) == null ? void 0 : r.id) !== e
        }
        )),
        s(this, In).delete(e)
    }
}
Lc = new WeakMap,
ir = new WeakMap,
go = new WeakMap,
In = new WeakMap,
wo = new WeakMap,
yo = new WeakMap,
vo = new WeakMap,
bo = new WeakMap,
qc = new WeakSet,
Hp = function() {
    const e = `[${this.channels.map(t => t.getEvalInWindowStr()).join(", ")}]`;
    return `(()=>{(${s(this, go)})(...${e})})()`
}
;
Tu.PreloadScript = by;
Object.defineProperty(ku, "__esModule", {
    value: !0
});
ku.ScriptProcessor = void 0;
const nd = ee
  , Cy = Tu;
var kn, nt, or, ar, Co, xo, Bs, zp, oc;
class xy {
    constructor(e, t, r, n, o, a) {
        u(this, Bs);
        u(this, kn);
        u(this, nt);
        u(this, or);
        u(this, ar);
        u(this, Co);
        u(this, xo);
        m(this, nt, t),
        m(this, or, r),
        m(this, ar, n),
        m(this, Co, o),
        m(this, xo, a),
        m(this, kn, e),
        s(this, kn).addSubscribeHook(nd.ChromiumBidi.Script.EventNames.RealmCreated, g(this, Bs, zp).bind(this))
    }
    async addPreloadScript(e) {
        var c, p;
        if ((c = e.userContexts) != null && c.length && ((p = e.contexts) != null && p.length))
            throw new nd.InvalidArgumentException("Both userContexts and contexts cannot be specified.");
        const t = await s(this, Co).verifyUserContextIdList(e.userContexts ?? [])
          , r = s(this, nt).verifyTopLevelContextsList(e.contexts)
          , n = new Cy.PreloadScript(e,s(this, xo));
        s(this, ar).add(n);
        let o = [];
        t.size ? o = s(this, nt).getTopLevelContexts().filter(h => t.has(h.userContext)) : r.size ? o = [...r.values()] : o = s(this, nt).getTopLevelContexts();
        const a = new Set(o.map(h => h.cdpTarget));
        return await n.initInTargets(a, !1),
        {
            script: n.id
        }
    }
    async removePreloadScript(e) {
        const {script: t} = e;
        return await s(this, ar).getPreloadScript(t).remove(),
        s(this, ar).remove(t),
        {}
    }
    async callFunction(e) {
        return await (await g(this, Bs, oc).call(this, e.target)).callFunction(e.functionDeclaration, e.awaitPromise, e.this, e.arguments, e.resultOwnership, e.serializationOptions, e.userActivation)
    }
    async evaluate(e) {
        return await (await g(this, Bs, oc).call(this, e.target)).evaluate(e.expression, e.awaitPromise, e.resultOwnership, e.serializationOptions, e.userActivation)
    }
    async disown(e) {
        const t = await g(this, Bs, oc).call(this, e.target);
        return await Promise.all(e.handles.map(async r => await t.disown(r))),
        {}
    }
    getRealms(e) {
        return e.context !== void 0 && s(this, nt).getContext(e.context),
        {
            realms: s(this, or).findRealms({
                browsingContextId: e.context,
                type: e.type,
                isHidden: !1
            }).map(r => r.realmInfo)
        }
    }
}
kn = new WeakMap,
nt = new WeakMap,
or = new WeakMap,
ar = new WeakMap,
Co = new WeakMap,
xo = new WeakMap,
Bs = new WeakSet,
zp = function(e) {
    const t = s(this, nt).getContext(e)
      , r = [t, ...s(this, nt).getContext(e).allChildren]
      , n = new Set;
    for (const o of r) {
        const a = s(this, or).findRealms({
            browsingContextId: o.id
        });
        for (const c of a)
            n.add(c)
    }
    for (const o of n)
        s(this, kn).registerEvent({
            type: "event",
            method: nd.ChromiumBidi.Script.EventNames.RealmCreated,
            params: o.realmInfo
        }, t.id);
    return Promise.resolve()
}
,
oc = async function(e) {
    return "context"in e ? await s(this, nt).getContext(e.context).getOrCreateUserSandbox(e.sandbox) : s(this, or).getRealm({
        realmId: e.realm,
        isHidden: !1
    })
}
;
ku.ScriptProcessor = xy;
var Du = {};
Object.defineProperty(Du, "__esModule", {
    value: !0
});
Du.SessionProcessor = void 0;
const id = ee;
var cr, Eo, So, Po, Pi, Kp, Wp;
class Ey {
    constructor(e, t, r) {
        u(this, Pi);
        u(this, cr);
        u(this, Eo);
        u(this, So);
        u(this, Po, !1);
        m(this, cr, e),
        m(this, Eo, t),
        m(this, So, r)
    }
    status() {
        return {
            ready: !1,
            message: "already connected"
        }
    }
    async new(e) {
        if (s(this, Po))
            throw new Error("Session has been already created.");
        m(this, Po, !0);
        const t = g(this, Pi, Kp).call(this, e.capabilities);
        await s(this, So).call(this, t);
        const r = await s(this, Eo).sendCommand("Browser.getVersion");
        return {
            sessionId: "unknown",
            capabilities: {
                ...t,
                acceptInsecureCerts: t.acceptInsecureCerts ?? !1,
                browserName: r.product,
                browserVersion: r.revision,
                platformName: "",
                setWindowRect: !1,
                webSocketUrl: "",
                userAgent: r.userAgent
            }
        }
    }
    async subscribe(e, t=null) {
        return {
            subscription: await s(this, cr).subscribe(e.events, e.contexts ?? [], e.userContexts ?? [], t)
        }
    }
    async unsubscribe(e, t=null) {
        return "subscriptions"in e ? (await s(this, cr).unsubscribeByIds(e.subscriptions),
        {}) : (await s(this, cr).unsubscribe(e.events, t),
        {})
    }
}
cr = new WeakMap,
Eo = new WeakMap,
So = new WeakMap,
Po = new WeakMap,
Pi = new WeakSet,
Kp = function(e) {
    const t = [];
    for (const n of e.firstMatch ?? [{}]) {
        const o = {
            ...e.alwaysMatch
        };
        for (const a of Object.keys(n)) {
            if (o[a] !== void 0)
                throw new id.InvalidArgumentException(`Capability ${a} in firstMatch is already defined in alwaysMatch`);
            o[a] = n[a]
        }
        t.push(o)
    }
    const r = t.find(n => n.browserName === "chrome") ?? t[0] ?? {};
    return r.unhandledPromptBehavior = g(this, Pi, Wp).call(this, r.unhandledPromptBehavior),
    r
}
,
Wp = function(e) {
    if (e !== void 0) {
        if (typeof e == "object")
            return e;
        if (typeof e != "string")
            throw new id.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' type: ${typeof e}`);
        switch (e) {
        case "accept":
        case "accept and notify":
            return {
                default: "accept",
                beforeUnload: "accept"
            };
        case "dismiss":
        case "dismiss and notify":
            return {
                default: "dismiss",
                beforeUnload: "accept"
            };
        case "ignore":
            return {
                default: "ignore",
                beforeUnload: "accept"
            };
        default:
            throw new id.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' value: ${e}`)
        }
    }
}
;
Du.SessionProcessor = Ey;
var Nu = {};
Object.defineProperty(Nu, "__esModule", {
    value: !0
});
Nu.StorageProcessor = void 0;
const ec = ee
  , Sy = as
  , Eh = De
  , Py = ki
  , Ai = ye;
var ys, _o, Tn, we, ac, Hi, Gp, Vp, cc, Ad;
class _y {
    constructor(e, t, r) {
        u(this, we);
        u(this, ys);
        u(this, _o);
        u(this, Tn);
        m(this, _o, t),
        m(this, ys, e),
        m(this, Tn, r)
    }
    async deleteCookies(e) {
        const t = g(this, we, cc).call(this, e.partition);
        let r;
        try {
            r = await s(this, ys).sendCommand("Storage.getCookies", {
                browserContextId: g(this, we, Hi).call(this, t)
            })
        } catch (o) {
            throw g(this, we, ac).call(this, o) ? new ec.NoSuchUserContextException(o.message) : o
        }
        const n = r.cookies.filter(o => {
            var a;
            return t.sourceOrigin === void 0 || ((a = o.partitionKey) == null ? void 0 : a.topLevelSite) === t.sourceOrigin
        }
        ).filter(o => {
            const a = (0,
            Ai.cdpToBiDiCookie)(o);
            return g(this, we, Ad).call(this, a, e.filter)
        }
        ).map(o => ({
            ...o,
            expires: 1
        }));
        return await s(this, ys).sendCommand("Storage.setCookies", {
            cookies: n,
            browserContextId: g(this, we, Hi).call(this, t)
        }),
        {
            partitionKey: t
        }
    }
    async getCookies(e) {
        const t = g(this, we, cc).call(this, e.partition);
        let r;
        try {
            r = await s(this, ys).sendCommand("Storage.getCookies", {
                browserContextId: g(this, we, Hi).call(this, t)
            })
        } catch (o) {
            throw g(this, we, ac).call(this, o) ? new ec.NoSuchUserContextException(o.message) : o
        }
        return {
            cookies: r.cookies.filter(o => {
                var a;
                return t.sourceOrigin === void 0 || ((a = o.partitionKey) == null ? void 0 : a.topLevelSite) === t.sourceOrigin
            }
            ).map(o => (0,
            Ai.cdpToBiDiCookie)(o)).filter(o => g(this, we, Ad).call(this, o, e.filter)),
            partitionKey: t
        }
    }
    async setCookie(e) {
        var n;
        const t = g(this, we, cc).call(this, e.partition)
          , r = (0,
        Ai.bidiToCdpCookie)(e, t);
        try {
            await s(this, ys).sendCommand("Storage.setCookies", {
                cookies: [r],
                browserContextId: g(this, we, Hi).call(this, t)
            })
        } catch (o) {
            throw g(this, we, ac).call(this, o) ? new ec.NoSuchUserContextException(o.message) : ((n = s(this, Tn)) == null || n.call(this, Eh.LogType.debugError, o),
            new ec.UnableToSetCookieException(o.toString()))
        }
        return {
            partitionKey: t
        }
    }
}
ys = new WeakMap,
_o = new WeakMap,
Tn = new WeakMap,
we = new WeakSet,
ac = function(e) {
    var t;
    return (t = e.message) == null ? void 0 : t.startsWith("Failed to find browser context for id")
}
,
Hi = function(e) {
    return e.userContext === "default" ? void 0 : e.userContext
}
,
Gp = function(e) {
    const t = e.context;
    return {
        userContext: s(this, _o).getContext(t).userContext
    }
}
,
Vp = function(e) {
    var o;
    const t = new Map;
    let r = e.sourceOrigin;
    if (r !== void 0) {
        const a = Py.NetworkProcessor.parseUrlString(r);
        a.origin === "null" ? r = a.origin : r = `${a.protocol}//${a.hostname}`
    }
    for (const [a,c] of Object.entries(e))
        a !== void 0 && c !== void 0 && !["type", "sourceOrigin", "userContext"].includes(a) && t.set(a, c);
    return t.size > 0 && ((o = s(this, Tn)) == null || o.call(this, Eh.LogType.debugInfo, `Unsupported partition keys: ${JSON.stringify(Object.fromEntries(t))}`)),
    {
        userContext: e.userContext ?? "default",
        ...r === void 0 ? {} : {
            sourceOrigin: r
        }
    }
}
,
cc = function(e) {
    return e === void 0 ? {
        userContext: "default"
    } : e.type === "context" ? g(this, we, Gp).call(this, e) : ((0,
    Sy.assert)(e.type === "storageKey", "Unknown partition type"),
    g(this, we, Vp).call(this, e))
}
,
Ad = function(e, t) {
    return t === void 0 ? !0 : (t.domain === void 0 || t.domain === e.domain) && (t.name === void 0 || t.name === e.name) && (t.value === void 0 || (0,
    Ai.deserializeByteValue)(t.value) === (0,
    Ai.deserializeByteValue)(e.value)) && (t.path === void 0 || t.path === e.path) && (t.size === void 0 || t.size === e.size) && (t.httpOnly === void 0 || t.httpOnly === e.httpOnly) && (t.secure === void 0 || t.secure === e.secure) && (t.sameSite === void 0 || t.sameSite === e.sameSite) && (t.expiry === void 0 || t.expiry === e.expiry)
}
;
Nu.StorageProcessor = _y;
var Ou = {};
Object.defineProperty(Ou, "__esModule", {
    value: !0
});
Ou.WebExtensionProcessor = void 0;
const od = ee;
var Dn;
class Iy {
    constructor(e) {
        u(this, Dn);
        m(this, Dn, e)
    }
    async install(e) {
        switch (e.extensionData.type) {
        case "archivePath":
        case "base64":
            throw new od.UnsupportedOperationException("Archived and Base64 extensions are not supported")
        }
        try {
            return {
                extension: (await s(this, Dn).sendCommand("Extensions.loadUnpacked", {
                    path: e.extensionData.path
                })).id
            }
        } catch (t) {
            throw t.message.startsWith("invalid web extension") ? new od.InvalidWebExtensionException(t.message) : t
        }
    }
    async uninstall(e) {
        try {
            return await s(this, Dn).sendCommand("Extensions.uninstall", {
                id: e.extension
            }),
            {}
        } catch (t) {
            throw t.message === "Uninstall failed. Reason: could not find extension." ? new od.NoSuchWebExtensionException("no such web extension") : t
        }
    }
}
Dn = new WeakMap;
Ou.WebExtensionProcessor = Iy;
var Ti = {};
Object.defineProperty(Ti, "__esModule", {
    value: !0
});
Ti.OutgoingMessage = void 0;
var Io, ko;
const Hc = class Hc {
    constructor(e, t=null) {
        u(this, Io);
        u(this, ko);
        m(this, Io, e),
        m(this, ko, t)
    }
    static createFromPromise(e, t) {
        return e.then(r => r.kind === "success" ? {
            kind: "success",
            value: new Hc(r.value,t)
        } : r)
    }
    static createResolved(e, t=null) {
        return Promise.resolve({
            kind: "success",
            value: new Hc(e,t)
        })
    }
    get message() {
        return s(this, Io)
    }
    get googChannel() {
        return s(this, ko)
    }
}
;
Io = new WeakMap,
ko = new WeakMap;
let Md = Hc;
Ti.OutgoingMessage = Md;
Object.defineProperty(gu, "__esModule", {
    value: !0
});
gu.CommandProcessor = void 0;
const zs = ee
  , ky = Us
  , Ty = De
  , Dy = wu
  , Ny = Ua
  , Oy = yu
  , Ry = vu
  , Ay = zr
  , My = bu
  , By = ki
  , jy = Iu
  , Fy = ku
  , $y = Du
  , Uy = Nu
  , Ly = Ou
  , ad = Ti;
var Ne, To, Ct, Oe, ur, it, dr, Ie, Do, xt, vs, lr, Nn, B, No, js, Xp, uc;
class qy extends ky.EventEmitter {
    constructor(t, r, n, o, a, c, p, h, d, l, w=new Dy.BidiNoOpParser, C, E) {
        super();
        u(this, js);
        u(this, Ne);
        u(this, To);
        u(this, Ct);
        u(this, Oe);
        u(this, ur);
        u(this, it);
        u(this, dr);
        u(this, Ie);
        u(this, Do);
        u(this, xt);
        u(this, vs);
        u(this, lr);
        u(this, Nn);
        u(this, B);
        u(this, No);
        m(this, To, r),
        m(this, B, w),
        m(this, No, E),
        m(this, Ne, d),
        m(this, Ct, new Ny.BrowserProcessor(r,o,h,l)),
        m(this, Oe, new Ry.BrowsingContextProcessor(r,o,l,h,n)),
        m(this, ur, new Oy.CdpProcessor(o,a,t,r)),
        m(this, it, new Ay.EmulationProcessor(o,l,h)),
        m(this, dr, new My.InputProcessor(o)),
        m(this, Ie, new By.NetworkProcessor(o,p,l,h)),
        m(this, Do, new jy.PermissionsProcessor(r)),
        m(this, xt, new Fy.ScriptProcessor(n,o,a,c,l,E)),
        m(this, vs, new $y.SessionProcessor(n,r,C)),
        m(this, lr, new Uy.StorageProcessor(r,o,E)),
        m(this, Nn, new Ly.WebExtensionProcessor(r))
    }
    async processCommand(t) {
        var r;
        try {
            const n = await g(this, js, Xp).call(this, t)
              , o = {
                type: "success",
                id: t.id,
                result: n
            };
            this.emit("response", {
                message: ad.OutgoingMessage.createResolved(o, t["goog:channel"]),
                event: t.method
            })
        } catch (n) {
            if (n instanceof zs.Exception)
                this.emit("response", {
                    message: ad.OutgoingMessage.createResolved(n.toErrorResponse(t.id), t["goog:channel"]),
                    event: t.method
                });
            else {
                const o = n;
                (r = s(this, No)) == null || r.call(this, Ty.LogType.bidi, o);
                const a = s(this, To).isCloseError(n) ? new zs.NoSuchFrameException("Browsing context is gone") : new zs.UnknownErrorException(o.message,o.stack);
                this.emit("response", {
                    message: ad.OutgoingMessage.createResolved(a.toErrorResponse(t.id), t["goog:channel"]),
                    event: t.method
                })
            }
        }
    }
}
Ne = new WeakMap,
To = new WeakMap,
Ct = new WeakMap,
Oe = new WeakMap,
ur = new WeakMap,
it = new WeakMap,
dr = new WeakMap,
Ie = new WeakMap,
Do = new WeakMap,
xt = new WeakMap,
vs = new WeakMap,
lr = new WeakMap,
Nn = new WeakMap,
B = new WeakMap,
No = new WeakMap,
js = new WeakSet,
Xp = async function(t) {
    switch (t.method) {
    case "bluetooth.disableSimulation":
        return await s(this, Ne).disableSimulation(s(this, B).parseDisableSimulationParameters(t.params));
    case "bluetooth.handleRequestDevicePrompt":
        return await s(this, Ne).handleRequestDevicePrompt(s(this, B).parseHandleRequestDevicePromptParams(t.params));
    case "bluetooth.simulateAdapter":
        return await s(this, Ne).simulateAdapter(s(this, B).parseSimulateAdapterParameters(t.params));
    case "bluetooth.simulateAdvertisement":
        return await s(this, Ne).simulateAdvertisement(s(this, B).parseSimulateAdvertisementParameters(t.params));
    case "bluetooth.simulateCharacteristic":
        return await s(this, Ne).simulateCharacteristic(s(this, B).parseSimulateCharacteristicParameters(t.params));
    case "bluetooth.simulateCharacteristicResponse":
        return await s(this, Ne).simulateCharacteristicResponse(s(this, B).parseSimulateCharacteristicResponseParameters(t.params));
    case "bluetooth.simulateDescriptor":
        return await s(this, Ne).simulateDescriptor(s(this, B).parseSimulateDescriptorParameters(t.params));
    case "bluetooth.simulateDescriptorResponse":
        return await s(this, Ne).simulateDescriptorResponse(s(this, B).parseSimulateDescriptorResponseParameters(t.params));
    case "bluetooth.simulateGattConnectionResponse":
        return await s(this, Ne).simulateGattConnectionResponse(s(this, B).parseSimulateGattConnectionResponseParameters(t.params));
    case "bluetooth.simulateGattDisconnection":
        return await s(this, Ne).simulateGattDisconnection(s(this, B).parseSimulateGattDisconnectionParameters(t.params));
    case "bluetooth.simulatePreconnectedPeripheral":
        return await s(this, Ne).simulatePreconnectedPeripheral(s(this, B).parseSimulatePreconnectedPeripheralParameters(t.params));
    case "bluetooth.simulateService":
        return await s(this, Ne).simulateService(s(this, B).parseSimulateServiceParameters(t.params));
    case "browser.close":
        return s(this, Ct).close();
    case "browser.createUserContext":
        return await s(this, Ct).createUserContext(s(this, B).parseCreateUserContextParameters(t.params));
    case "browser.getClientWindows":
        return await s(this, Ct).getClientWindows();
    case "browser.getUserContexts":
        return await s(this, Ct).getUserContexts();
    case "browser.removeUserContext":
        return await s(this, Ct).removeUserContext(s(this, B).parseRemoveUserContextParameters(t.params));
    case "browser.setClientWindowState":
        throw s(this, B).parseSetClientWindowStateParameters(t.params),
        new zs.UnsupportedOperationException(`Method ${t.method} is not implemented.`);
    case "browser.setDownloadBehavior":
        return await s(this, Ct).setDownloadBehavior(s(this, B).parseSetDownloadBehaviorParameters(t.params));
    case "browsingContext.activate":
        return await s(this, Oe).activate(s(this, B).parseActivateParams(t.params));
    case "browsingContext.captureScreenshot":
        return await s(this, Oe).captureScreenshot(s(this, B).parseCaptureScreenshotParams(t.params));
    case "browsingContext.close":
        return await s(this, Oe).close(s(this, B).parseCloseParams(t.params));
    case "browsingContext.create":
        return await s(this, Oe).create(s(this, B).parseCreateParams(t.params));
    case "browsingContext.getTree":
        return s(this, Oe).getTree(s(this, B).parseGetTreeParams(t.params));
    case "browsingContext.handleUserPrompt":
        return await s(this, Oe).handleUserPrompt(s(this, B).parseHandleUserPromptParams(t.params));
    case "browsingContext.locateNodes":
        return await s(this, Oe).locateNodes(s(this, B).parseLocateNodesParams(t.params));
    case "browsingContext.navigate":
        return await s(this, Oe).navigate(s(this, B).parseNavigateParams(t.params));
    case "browsingContext.print":
        return await s(this, Oe).print(s(this, B).parsePrintParams(t.params));
    case "browsingContext.reload":
        return await s(this, Oe).reload(s(this, B).parseReloadParams(t.params));
    case "browsingContext.setViewport":
        return await s(this, Oe).setViewport(s(this, B).parseSetViewportParams(t.params));
    case "browsingContext.traverseHistory":
        return await s(this, Oe).traverseHistory(s(this, B).parseTraverseHistoryParams(t.params));
    case "goog:cdp.getSession":
        return s(this, ur).getSession(s(this, B).parseGetSessionParams(t.params));
    case "goog:cdp.resolveRealm":
        return s(this, ur).resolveRealm(s(this, B).parseResolveRealmParams(t.params));
    case "goog:cdp.sendCommand":
        return await s(this, ur).sendCommand(s(this, B).parseSendCommandParams(t.params));
    case "emulation.setForcedColorsModeThemeOverride":
        throw s(this, B).parseSetForcedColorsModeThemeOverrideParams(t.params),
        new zs.UnsupportedOperationException(`Method ${t.method} is not implemented.`);
    case "emulation.setGeolocationOverride":
        return await s(this, it).setGeolocationOverride(s(this, B).parseSetGeolocationOverrideParams(t.params));
    case "emulation.setLocaleOverride":
        return await s(this, it).setLocaleOverride(s(this, B).parseSetLocaleOverrideParams(t.params));
    case "emulation.setNetworkConditions":
        return await s(this, it).setNetworkConditions(s(this, B).parseSetNetworkConditionsParams(t.params));
    case "emulation.setScreenOrientationOverride":
        return await s(this, it).setScreenOrientationOverride(s(this, B).parseSetScreenOrientationOverrideParams(t.params));
    case "emulation.setScriptingEnabled":
        return await s(this, it).setScriptingEnabled(s(this, B).parseSetScriptingEnabledParams(t.params));
    case "emulation.setTimezoneOverride":
        return await s(this, it).setTimezoneOverride(s(this, B).parseSetTimezoneOverrideParams(t.params));
    case "emulation.setUserAgentOverride":
        return await s(this, it).setUserAgentOverrideParams(s(this, B).parseSetUserAgentOverrideParams(t.params));
    case "input.performActions":
        return await s(this, dr).performActions(s(this, B).parsePerformActionsParams(t.params));
    case "input.releaseActions":
        return await s(this, dr).releaseActions(s(this, B).parseReleaseActionsParams(t.params));
    case "input.setFiles":
        return await s(this, dr).setFiles(s(this, B).parseSetFilesParams(t.params));
    case "network.addDataCollector":
        return await s(this, Ie).addDataCollector(s(this, B).parseAddDataCollectorParams(t.params));
    case "network.addIntercept":
        return await s(this, Ie).addIntercept(s(this, B).parseAddInterceptParams(t.params));
    case "network.continueRequest":
        return await s(this, Ie).continueRequest(s(this, B).parseContinueRequestParams(t.params));
    case "network.continueResponse":
        return await s(this, Ie).continueResponse(s(this, B).parseContinueResponseParams(t.params));
    case "network.continueWithAuth":
        return await s(this, Ie).continueWithAuth(s(this, B).parseContinueWithAuthParams(t.params));
    case "network.disownData":
        return s(this, Ie).disownData(s(this, B).parseDisownDataParams(t.params));
    case "network.failRequest":
        return await s(this, Ie).failRequest(s(this, B).parseFailRequestParams(t.params));
    case "network.getData":
        return await s(this, Ie).getData(s(this, B).parseGetDataParams(t.params));
    case "network.provideResponse":
        return await s(this, Ie).provideResponse(s(this, B).parseProvideResponseParams(t.params));
    case "network.removeDataCollector":
        return await s(this, Ie).removeDataCollector(s(this, B).parseRemoveDataCollectorParams(t.params));
    case "network.removeIntercept":
        return await s(this, Ie).removeIntercept(s(this, B).parseRemoveInterceptParams(t.params));
    case "network.setCacheBehavior":
        return await s(this, Ie).setCacheBehavior(s(this, B).parseSetCacheBehaviorParams(t.params));
    case "network.setExtraHeaders":
        return await s(this, Ie).setExtraHeaders(s(this, B).parseSetExtraHeadersParams(t.params));
    case "permissions.setPermission":
        return await s(this, Do).setPermissions(s(this, B).parseSetPermissionsParams(t.params));
    case "script.addPreloadScript":
        return await s(this, xt).addPreloadScript(s(this, B).parseAddPreloadScriptParams(t.params));
    case "script.callFunction":
        return await s(this, xt).callFunction(s(this, B).parseCallFunctionParams(g(this, js, uc).call(this, t.params)));
    case "script.disown":
        return await s(this, xt).disown(s(this, B).parseDisownParams(g(this, js, uc).call(this, t.params)));
    case "script.evaluate":
        return await s(this, xt).evaluate(s(this, B).parseEvaluateParams(g(this, js, uc).call(this, t.params)));
    case "script.getRealms":
        return s(this, xt).getRealms(s(this, B).parseGetRealmsParams(t.params));
    case "script.removePreloadScript":
        return await s(this, xt).removePreloadScript(s(this, B).parseRemovePreloadScriptParams(t.params));
    case "session.end":
        throw new zs.UnsupportedOperationException(`Method ${t.method} is not implemented.`);
    case "session.new":
        return await s(this, vs).new(t.params);
    case "session.status":
        return s(this, vs).status();
    case "session.subscribe":
        return await s(this, vs).subscribe(s(this, B).parseSubscribeParams(t.params), t["goog:channel"]);
    case "session.unsubscribe":
        return await s(this, vs).unsubscribe(s(this, B).parseUnsubscribeParams(t.params), t["goog:channel"]);
    case "storage.deleteCookies":
        return await s(this, lr).deleteCookies(s(this, B).parseDeleteCookiesParams(t.params));
    case "storage.getCookies":
        return await s(this, lr).getCookies(s(this, B).parseGetCookiesParams(t.params));
    case "storage.setCookie":
        return await s(this, lr).setCookie(s(this, B).parseSetCookieParams(t.params));
    case "webExtension.install":
        return await s(this, Nn).install(s(this, B).parseInstallParams(t.params));
    case "webExtension.uninstall":
        return await s(this, Nn).uninstall(s(this, B).parseUninstallParams(t.params))
    }
    throw new zs.UnknownCommandException(`Unknown command '${t == null ? void 0 : t.method}'.`)
}
,
uc = function(t) {
    return typeof t == "object" && t && "target"in t && typeof t.target == "object" && t.target && "context"in t.target && delete t.target.realm,
    t
}
;
gu.CommandProcessor = qy;
var Ru = {};
Object.defineProperty(Ru, "__esModule", {
    value: !0
});
Ru.BluetoothProcessor = void 0;
const Fe = ee;
class $l {
    constructor(e, t) {
        O(this, "id");
        O(this, "uuid");
        this.id = e,
        this.uuid = t
    }
}
class Hy extends $l {
    constructor(t, r, n) {
        super(t, r);
        O(this, "characteristic");
        this.characteristic = n
    }
}
class zy extends $l {
    constructor(t, r, n) {
        super(t, r);
        O(this, "descriptors", new Map);
        O(this, "service");
        this.service = n
    }
}
class Ky extends $l {
    constructor(t, r, n) {
        super(t, r);
        O(this, "characteristics", new Map);
        O(this, "device");
        this.device = n
    }
}
class Wy {
    constructor(e) {
        O(this, "address");
        O(this, "services", new Map);
        this.address = e
    }
}
var bs, Re, Cs, Gt, Vt, ge, on, an, zi, Bd;
class Gy {
    constructor(e, t) {
        u(this, ge);
        u(this, bs);
        u(this, Re);
        u(this, Cs, new Map);
        u(this, Gt, new Map);
        u(this, Vt, new Map);
        m(this, bs, e),
        m(this, Re, t)
    }
    async simulateAdapter(e) {
        if (e.state === void 0)
            throw new Fe.InvalidArgumentException('Parameter "state" is required for creating a Bluetooth adapter');
        const t = s(this, Re).getContext(e.context);
        return await t.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.disable"),
        s(this, Cs).clear(),
        s(this, Gt).clear(),
        s(this, Vt).clear(),
        await t.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.enable", {
            state: e.state,
            leSupported: e.leSupported ?? !0
        }),
        {}
    }
    async disableSimulation(e) {
        return await s(this, Re).getContext(e.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.disable"),
        s(this, Cs).clear(),
        s(this, Gt).clear(),
        s(this, Vt).clear(),
        {}
    }
    async simulatePreconnectedPeripheral(e) {
        if (s(this, Cs).has(e.address))
            throw new Fe.InvalidArgumentException(`Bluetooth device with address ${e.address} already exists`);
        return await s(this, Re).getContext(e.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulatePreconnectedPeripheral", {
            address: e.address,
            name: e.name,
            knownServiceUuids: e.knownServiceUuids,
            manufacturerData: e.manufacturerData
        }),
        s(this, Cs).set(e.address, new Wy(e.address)),
        {}
    }
    async simulateAdvertisement(e) {
        return await s(this, Re).getContext(e.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateAdvertisement", {
            entry: e.scanEntry
        }),
        {}
    }
    async simulateCharacteristic(e) {
        const t = g(this, ge, on).call(this, e.address)
          , r = g(this, ge, an).call(this, t, e.serviceUuid)
          , n = s(this, Re).getContext(e.context);
        switch (e.type) {
        case "add":
            {
                if (e.characteristicProperties === void 0)
                    throw new Fe.InvalidArgumentException('Parameter "characteristicProperties" is required for adding a Bluetooth characteristic');
                if (r.characteristics.has(e.characteristicUuid))
                    throw new Fe.InvalidArgumentException(`Characteristic with UUID ${e.characteristicUuid} already exists`);
                const o = await n.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.addCharacteristic", {
                    serviceId: r.id,
                    characteristicUuid: e.characteristicUuid,
                    properties: e.characteristicProperties
                })
                  , a = new zy(o.characteristicId,e.characteristicUuid,r);
                return r.characteristics.set(e.characteristicUuid, a),
                s(this, Gt).set(a.id, a),
                {}
            }
        case "remove":
            {
                if (e.characteristicProperties !== void 0)
                    throw new Fe.InvalidArgumentException('Parameter "characteristicProperties" should not be provided for removing a Bluetooth characteristic');
                const o = g(this, ge, zi).call(this, r, e.characteristicUuid);
                return await n.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.removeCharacteristic", {
                    characteristicId: o.id
                }),
                r.characteristics.delete(e.characteristicUuid),
                s(this, Gt).delete(o.id),
                {}
            }
        default:
            throw new Fe.InvalidArgumentException(`Parameter "type" of ${e.type} is not supported`)
        }
    }
    async simulateCharacteristicResponse(e) {
        const t = s(this, Re).getContext(e.context)
          , r = g(this, ge, on).call(this, e.address)
          , n = g(this, ge, an).call(this, r, e.serviceUuid)
          , o = g(this, ge, zi).call(this, n, e.characteristicUuid);
        return await t.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateCharacteristicOperationResponse", {
            characteristicId: o.id,
            type: e.type,
            code: e.code,
            ...e.data && {
                data: btoa(String.fromCharCode(...e.data))
            }
        }),
        {}
    }
    async simulateDescriptor(e) {
        const t = g(this, ge, on).call(this, e.address)
          , r = g(this, ge, an).call(this, t, e.serviceUuid)
          , n = g(this, ge, zi).call(this, r, e.characteristicUuid)
          , o = s(this, Re).getContext(e.context);
        switch (e.type) {
        case "add":
            {
                if (n.descriptors.has(e.descriptorUuid))
                    throw new Fe.InvalidArgumentException(`Descriptor with UUID ${e.descriptorUuid} already exists`);
                const a = await o.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.addDescriptor", {
                    characteristicId: n.id,
                    descriptorUuid: e.descriptorUuid
                })
                  , c = new Hy(a.descriptorId,e.descriptorUuid,n);
                return n.descriptors.set(e.descriptorUuid, c),
                s(this, Vt).set(c.id, c),
                {}
            }
        case "remove":
            {
                const a = g(this, ge, Bd).call(this, n, e.descriptorUuid);
                return await o.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.removeDescriptor", {
                    descriptorId: a.id
                }),
                n.descriptors.delete(e.descriptorUuid),
                s(this, Vt).delete(a.id),
                {}
            }
        default:
            throw new Fe.InvalidArgumentException(`Parameter "type" of ${e.type} is not supported`)
        }
    }
    async simulateDescriptorResponse(e) {
        const t = s(this, Re).getContext(e.context)
          , r = g(this, ge, on).call(this, e.address)
          , n = g(this, ge, an).call(this, r, e.serviceUuid)
          , o = g(this, ge, zi).call(this, n, e.characteristicUuid)
          , a = g(this, ge, Bd).call(this, o, e.descriptorUuid);
        return await t.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateDescriptorOperationResponse", {
            descriptorId: a.id,
            type: e.type,
            code: e.code,
            ...e.data && {
                data: btoa(String.fromCharCode(...e.data))
            }
        }),
        {}
    }
    async simulateGattConnectionResponse(e) {
        return await s(this, Re).getContext(e.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateGATTOperationResponse", {
            address: e.address,
            type: "connection",
            code: e.code
        }),
        {}
    }
    async simulateGattDisconnection(e) {
        return await s(this, Re).getContext(e.context).cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateGATTDisconnection", {
            address: e.address
        }),
        {}
    }
    async simulateService(e) {
        const t = g(this, ge, on).call(this, e.address)
          , r = s(this, Re).getContext(e.context);
        switch (e.type) {
        case "add":
            {
                if (t.services.has(e.uuid))
                    throw new Fe.InvalidArgumentException(`Service with UUID ${e.uuid} already exists`);
                const n = await r.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.addService", {
                    address: e.address,
                    serviceUuid: e.uuid
                });
                return t.services.set(e.uuid, new Ky(n.serviceId,e.uuid,t)),
                {}
            }
        case "remove":
            {
                const n = g(this, ge, an).call(this, t, e.uuid);
                return await r.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.removeService", {
                    serviceId: n.id
                }),
                t.services.delete(e.uuid),
                {}
            }
        default:
            throw new Fe.InvalidArgumentException(`Parameter "type" of ${e.type} is not supported`)
        }
    }
    onCdpTargetCreated(e) {
        e.cdpClient.on("DeviceAccess.deviceRequestPrompted", t => {
            s(this, bs).registerEvent({
                type: "event",
                method: "bluetooth.requestDevicePromptUpdated",
                params: {
                    context: e.id,
                    prompt: t.id,
                    devices: t.devices
                }
            }, e.id)
        }
        ),
        e.browserCdpClient.on("BluetoothEmulation.gattOperationReceived", async t => {
            switch (t.type) {
            case "connection":
                s(this, bs).registerEvent({
                    type: "event",
                    method: "bluetooth.gattConnectionAttempted",
                    params: {
                        context: e.id,
                        address: t.address
                    }
                }, e.id);
                return;
            case "discovery":
                await e.browserCdpClient.sendCommand("BluetoothEmulation.simulateGATTOperationResponse", {
                    address: t.address,
                    type: "discovery",
                    code: 0
                })
            }
        }
        ),
        e.browserCdpClient.on("BluetoothEmulation.characteristicOperationReceived", t => {
            if (!s(this, Gt).has(t.characteristicId))
                return;
            let r;
            if (t.type === "write") {
                if (t.writeType === "write-default-deprecated")
                    return;
                r = t.writeType
            } else
                r = t.type;
            const n = s(this, Gt).get(t.characteristicId);
            s(this, bs).registerEvent({
                type: "event",
                method: "bluetooth.characteristicEventGenerated",
                params: {
                    context: e.id,
                    address: n.service.device.address,
                    serviceUuid: n.service.uuid,
                    characteristicUuid: n.uuid,
                    type: r,
                    ...t.data && {
                        data: Array.from(atob(t.data), o => o.charCodeAt(0))
                    }
                }
            }, e.id)
        }
        ),
        e.browserCdpClient.on("BluetoothEmulation.descriptorOperationReceived", t => {
            if (!s(this, Vt).has(t.descriptorId))
                return;
            const r = s(this, Vt).get(t.descriptorId);
            s(this, bs).registerEvent({
                type: "event",
                method: "bluetooth.descriptorEventGenerated",
                params: {
                    context: e.id,
                    address: r.characteristic.service.device.address,
                    serviceUuid: r.characteristic.service.uuid,
                    characteristicUuid: r.characteristic.uuid,
                    descriptorUuid: r.uuid,
                    type: t.type,
                    ...t.data && {
                        data: Array.from(atob(t.data), n => n.charCodeAt(0))
                    }
                }
            }, e.id)
        }
        )
    }
    async handleRequestDevicePrompt(e) {
        const t = s(this, Re).getContext(e.context);
        return e.accept ? await t.cdpTarget.cdpClient.sendCommand("DeviceAccess.selectPrompt", {
            id: e.prompt,
            deviceId: e.device
        }) : await t.cdpTarget.cdpClient.sendCommand("DeviceAccess.cancelPrompt", {
            id: e.prompt
        }),
        {}
    }
}
bs = new WeakMap,
Re = new WeakMap,
Cs = new WeakMap,
Gt = new WeakMap,
Vt = new WeakMap,
ge = new WeakSet,
on = function(e) {
    const t = s(this, Cs).get(e);
    if (!t)
        throw new Fe.InvalidArgumentException(`Bluetooth device with address ${e} does not exist`);
    return t
}
,
an = function(e, t) {
    const r = e.services.get(t);
    if (!r)
        throw new Fe.InvalidArgumentException(`Service with UUID ${t} on device ${e.address} does not exist`);
    return r
}
,
zi = function(e, t) {
    const r = e.characteristics.get(t);
    if (!r)
        throw new Fe.InvalidArgumentException(`Characteristic with UUID ${t} does not exist for service ${e.uuid} on device ${e.device.address}`);
    return r
}
,
Bd = function(e, t) {
    const r = e.descriptors.get(t);
    if (!r)
        throw new Fe.InvalidArgumentException(`Descriptor with UUID ${t} does not exist for characteristic ${e.uuid} on service ${e.service.uuid} on device ${e.service.device.address}`);
    return r
}
;
Ru.BluetoothProcessor = Gy;
var Au = {}
  , Mu = {};
Object.defineProperty(Mu, "__esModule", {
    value: !0
});
Mu.ContextConfig = void 0;
class Ul {
    constructor() {
        O(this, "acceptInsecureCerts");
        O(this, "devicePixelRatio");
        O(this, "disableNetworkDurableMessages");
        O(this, "downloadBehavior");
        O(this, "emulatedNetworkConditions");
        O(this, "extraHeaders");
        O(this, "geolocation");
        O(this, "locale");
        O(this, "prerenderingDisabled");
        O(this, "screenOrientation");
        O(this, "scriptingEnabled");
        O(this, "timezone");
        O(this, "userAgent");
        O(this, "userPromptHandler");
        O(this, "viewport")
    }
    static merge(...e) {
        const t = new Ul;
        for (const r of e)
            if (r)
                for (const n in r) {
                    const o = r[n];
                    o === null ? delete t[n] : o !== void 0 && (t[n] = o)
                }
        return t
    }
}
Mu.ContextConfig = Ul;
Object.defineProperty(Au, "__esModule", {
    value: !0
});
Au.ContextConfigStorage = void 0;
const Yr = Mu;
var xs, hr, pr, zc, Jp;
class Vy {
    constructor() {
        u(this, zc);
        u(this, xs, new Yr.ContextConfig);
        u(this, hr, new Map);
        u(this, pr, new Map)
    }
    updateGlobalConfig(e) {
        m(this, xs, Yr.ContextConfig.merge(s(this, xs), e))
    }
    updateBrowsingContextConfig(e, t) {
        s(this, pr).set(e, Yr.ContextConfig.merge(s(this, pr).get(e), t))
    }
    updateUserContextConfig(e, t) {
        s(this, hr).set(e, Yr.ContextConfig.merge(s(this, hr).get(e), t))
    }
    getGlobalConfig() {
        return s(this, xs)
    }
    getActiveConfig(e, t) {
        let r = Yr.ContextConfig.merge(s(this, xs), s(this, hr).get(t));
        e !== void 0 && (r = Yr.ContextConfig.merge(r, s(this, pr).get(e)));
        const n = g(this, zc, Jp).call(this, e, t);
        return r.extraHeaders = Object.keys(n).length > 0 ? n : void 0,
        r
    }
}
xs = new WeakMap,
hr = new WeakMap,
pr = new WeakMap,
zc = new WeakSet,
Jp = function(e, t) {
    var a, c;
    const r = s(this, xs).extraHeaders ?? {}
      , n = ((a = s(this, hr).get(t)) == null ? void 0 : a.extraHeaders) ?? {}
      , o = e === void 0 ? {} : ((c = s(this, pr).get(e)) == null ? void 0 : c.extraHeaders) ?? {};
    return {
        ...r,
        ...n,
        ...o
    }
}
;
Au.ContextConfigStorage = Vy;
var Bu = {};
Object.defineProperty(Bu, "__esModule", {
    value: !0
});
Bu.UserContextStorage = void 0;
const Xy = ee;
var Oo;
class Jy {
    constructor(e) {
        u(this, Oo);
        m(this, Oo, e)
    }
    async getUserContexts() {
        const e = await s(this, Oo).sendCommand("Target.getBrowserContexts");
        return [{
            userContext: "default"
        }, ...e.browserContextIds.map(t => ({
            userContext: t
        }))]
    }
    async verifyUserContextIdList(e) {
        const t = new Set;
        if (!e.length)
            return t;
        const r = await this.getUserContexts()
          , n = new Set(r.map(o => o.userContext));
        for (const o of e) {
            if (!n.has(o))
                throw new Xy.NoSuchUserContextException(`User context ${o} not found`);
            t.add(o)
        }
        return t
    }
}
Oo = new WeakMap;
Bu.UserContextStorage = Jy;
var ju = {}
  , Di = {}
  , Kr = {};
Object.defineProperty(Kr, "__esModule", {
    value: !0
});
Kr.Deferred = void 0;
var ep, Xt, Es, Ro, Ao, Mo;
ep = Symbol.toStringTag;
class Yy {
    constructor() {
        u(this, Xt, !1);
        u(this, Es);
        u(this, Ro);
        u(this, Ao);
        u(this, Mo);
        O(this, ep, "Promise");
        m(this, Es, new Promise( (e, t) => {
            m(this, Ao, e),
            m(this, Mo, t)
        }
        )),
        s(this, Es).catch(e => {}
        )
    }
    get isFinished() {
        return s(this, Xt)
    }
    get result() {
        if (!s(this, Xt))
            throw new Error("Deferred is not finished yet");
        return s(this, Ro)
    }
    then(e, t) {
        return s(this, Es).then(e, t)
    }
    catch(e) {
        return s(this, Es).catch(e)
    }
    resolve(e) {
        m(this, Ro, e),
        s(this, Xt) || (m(this, Xt, !0),
        s(this, Ao).call(this, e))
    }
    reject(e) {
        s(this, Xt) || (m(this, Xt, !0),
        s(this, Mo).call(this, e))
    }
    finally(e) {
        return s(this, Es).finally(e)
    }
}
Xt = new WeakMap,
Es = new WeakMap,
Ro = new WeakMap,
Ao = new WeakMap,
Mo = new WeakMap;
Kr.Deferred = Yy;
var Fu = {};
Object.defineProperty(Fu, "__esModule", {
    value: !0
});
Fu.getTimestamp = Qy;
function Qy() {
    return new Date().getTime()
}
var Ll = {};
Object.defineProperty(Ll, "__esModule", {
    value: !0
});
Ll.inchesFromCm = Zy;
function Zy(i) {
    return i / 2.54
}
var Ha = {};
Object.defineProperty(Ha, "__esModule", {
    value: !0
});
Ha.getSharedId = tv;
Ha.parseSharedId = rv;
const ev = "_element_";
function tv(i, e, t) {
    return `f.${i}.d.${e}.e.${t}`
}
function sv(i) {
    const e = i.match(new RegExp(`(.*)${ev}(.*)`));
    if (!e)
        return null;
    const t = e[1]
      , r = e[2];
    if (t === void 0 || r === void 0)
        return null;
    const n = parseInt(r ?? "");
    return isNaN(n) ? null : {
        documentId: t,
        backendNodeId: n
    }
}
function rv(i) {
    const e = sv(i);
    if (e !== null)
        return {
            ...e,
            frameId: void 0
        };
    const t = i.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
    if (!t)
        return null;
    const r = t[1]
      , n = t[2]
      , o = t[3];
    if (r === void 0 || n === void 0 || o === void 0)
        return null;
    const a = parseInt(o ?? "");
    return isNaN(a) ? null : {
        frameId: r,
        documentId: n,
        backendNodeId: a
    }
}
var za = {}
  , Ka = {};
Object.defineProperty(Ka, "__esModule", {
    value: !0
});
Ka.Realm = void 0;
const tc = ee
  , nv = De
  , iv = Ft
  , ov = qa;
var Bo, fr, jo, On, Fo, $o, Ce, jd, ft, ht, Yp, Fd, $d, Qp, Ud, Ld, Zp, ef, qd;
let av = (ht = class {
    constructor(e, t, r, n, o, a, c) {
        u(this, Ce);
        u(this, Bo);
        u(this, fr);
        u(this, jo);
        u(this, On);
        u(this, Fo);
        u(this, $o);
        O(this, "realmStorage");
        m(this, Bo, e),
        m(this, fr, t),
        m(this, jo, r),
        m(this, On, n),
        m(this, Fo, o),
        m(this, $o, a),
        this.realmStorage = c,
        this.realmStorage.addRealm(this)
    }
    cdpToBidiValue(e, t) {
        const r = this.serializeForBiDi(e.result.deepSerializedValue, new Map);
        if (e.result.objectId) {
            const n = e.result.objectId;
            t === "root" ? (r.handle = n,
            this.realmStorage.knownHandlesToRealmMap.set(n, this.realmId)) : g(this, Ce, qd).call(this, n).catch(o => {
                var a;
                return (a = s(this, On)) == null ? void 0 : a.call(this, nv.LogType.debugError, o)
            }
            )
        }
        return r
    }
    isHidden() {
        return !1
    }
    serializeForBiDi(e, t) {
        if (Object.hasOwn(e, "weakLocalObjectReference")) {
            const n = e.weakLocalObjectReference;
            t.has(n) || t.set(n, (0,
            iv.uuidv4)()),
            e.internalId = t.get(n),
            delete e.weakLocalObjectReference
        }
        if (e.type === "node" && e.value && Object.hasOwn(e.value, "frameId") && delete e.value.frameId,
        e.type === "platformobject")
            return {
                type: "object"
            };
        const r = e.value;
        if (r === void 0)
            return e;
        if (["array", "set", "htmlcollection", "nodelist"].includes(e.type))
            for (const n in r)
                r[n] = this.serializeForBiDi(r[n], t);
        if (["object", "map"].includes(e.type))
            for (const n in r)
                r[n] = [this.serializeForBiDi(r[n][0], t), this.serializeForBiDi(r[n][1], t)];
        return e
    }
    get realmId() {
        return s(this, $o)
    }
    get executionContextId() {
        return s(this, jo)
    }
    get origin() {
        return s(this, Fo)
    }
    get source() {
        return {
            realm: this.realmId
        }
    }
    get cdpClient() {
        return s(this, Bo)
    }
    get baseInfo() {
        return {
            realm: this.realmId,
            origin: this.origin
        }
    }
    async evaluate(e, t, r="none", n={}, o=!1, a=!1) {
        var p;
        const c = await this.cdpClient.sendCommand("Runtime.evaluate", {
            contextId: this.executionContextId,
            expression: e,
            awaitPromise: t,
            serializationOptions: g(p = ht, ft, Ld).call(p, "deep", n),
            userGesture: o,
            includeCommandLineAPI: a
        });
        return c.exceptionDetails ? await g(this, Ce, Ud).call(this, c.exceptionDetails, 0, r) : {
            realm: this.realmId,
            result: this.cdpToBidiValue(c, r),
            type: "success"
        }
    }
    initialize() {
        this.isHidden() || g(this, Ce, jd).call(this, {
            type: "event",
            method: tc.ChromiumBidi.Script.EventNames.RealmCreated,
            params: this.realmInfo
        })
    }
    async serializeCdpObject(e, t) {
        var o;
        const r = g(o = ht, ft, Yp).call(o, e)
          , n = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String(a => a),
            awaitPromise: !1,
            arguments: [r],
            serializationOptions: {
                serialization: "deep"
            },
            executionContextId: this.executionContextId
        });
        return this.cdpToBidiValue(n, t)
    }
    async stringifyObject(e) {
        const {result: t} = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: String(r => String(r)),
            awaitPromise: !1,
            arguments: [e],
            returnByValue: !0,
            executionContextId: this.executionContextId
        });
        return t.value
    }
    async callFunction(e, t, r={
        type: "undefined"
    }, n=[], o="none", a={}, c=!1) {
        var l;
        const p = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${e}
      ), args);
    }`
          , h = [await this.deserializeForCdp(r), ...await Promise.all(n.map(async w => await this.deserializeForCdp(w)))];
        let d;
        try {
            d = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
                functionDeclaration: p,
                awaitPromise: t,
                arguments: h,
                serializationOptions: g(l = ht, ft, Ld).call(l, "deep", a),
                executionContextId: this.executionContextId,
                userGesture: c
            })
        } catch (w) {
            throw w.code === -32e3 && ["Could not find object with given id", "Argument should belong to the same JavaScript world as target object", "Invalid remote object id"].includes(w.message) ? new tc.NoSuchHandleException("Handle was not found.") : w
        }
        return d.exceptionDetails ? await g(this, Ce, Ud).call(this, d.exceptionDetails, 1, o) : {
            type: "success",
            result: this.cdpToBidiValue(d, o),
            realm: this.realmId
        }
    }
    async deserializeForCdp(e) {
        if ("handle"in e && e.handle)
            return {
                objectId: e.handle
            };
        if ("handle"in e || "sharedId"in e)
            throw new tc.NoSuchHandleException("Handle was not found.");
        switch (e.type) {
        case "undefined":
            return {
                unserializableValue: "undefined"
            };
        case "null":
            return {
                unserializableValue: "null"
            };
        case "string":
            return {
                value: e.value
            };
        case "number":
            return e.value === "NaN" ? {
                unserializableValue: "NaN"
            } : e.value === "-0" ? {
                unserializableValue: "-0"
            } : e.value === "Infinity" ? {
                unserializableValue: "Infinity"
            } : e.value === "-Infinity" ? {
                unserializableValue: "-Infinity"
            } : {
                value: e.value
            };
        case "boolean":
            return {
                value: !!e.value
            };
        case "bigint":
            return {
                unserializableValue: `BigInt(${JSON.stringify(e.value)})`
            };
        case "date":
            return {
                unserializableValue: `new Date(Date.parse(${JSON.stringify(e.value)}))`
            };
        case "regexp":
            return {
                unserializableValue: `new RegExp(${JSON.stringify(e.value.pattern)}, ${JSON.stringify(e.value.flags)})`
            };
        case "map":
            {
                const t = await g(this, Ce, Fd).call(this, e.value)
                  , {result: r} = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
                    functionDeclaration: String( (...n) => {
                        const o = new Map;
                        for (let a = 0; a < n.length; a += 2)
                            o.set(n[a], n[a + 1]);
                        return o
                    }
                    ),
                    awaitPromise: !1,
                    arguments: t,
                    returnByValue: !1,
                    executionContextId: this.executionContextId
                });
                return {
                    objectId: r.objectId
                }
            }
        case "object":
            {
                const t = await g(this, Ce, Fd).call(this, e.value)
                  , {result: r} = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
                    functionDeclaration: String( (...n) => {
                        const o = {};
                        for (let a = 0; a < n.length; a += 2) {
                            const c = n[a];
                            o[c] = n[a + 1]
                        }
                        return o
                    }
                    ),
                    awaitPromise: !1,
                    arguments: t,
                    returnByValue: !1,
                    executionContextId: this.executionContextId
                });
                return {
                    objectId: r.objectId
                }
            }
        case "array":
            {
                const t = await g(this, Ce, $d).call(this, e.value)
                  , {result: r} = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
                    functionDeclaration: String( (...n) => n),
                    awaitPromise: !1,
                    arguments: t,
                    returnByValue: !1,
                    executionContextId: this.executionContextId
                });
                return {
                    objectId: r.objectId
                }
            }
        case "set":
            {
                const t = await g(this, Ce, $d).call(this, e.value)
                  , {result: r} = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
                    functionDeclaration: String( (...n) => new Set(n)),
                    awaitPromise: !1,
                    arguments: t,
                    returnByValue: !1,
                    executionContextId: this.executionContextId
                });
                return {
                    objectId: r.objectId
                }
            }
        case "channel":
            return {
                objectId: await new ov.ChannelProxy(e.value,s(this, On)).init(this, s(this, fr))
            }
        }
        throw new Error(`Value ${JSON.stringify(e)} is not deserializable.`)
    }
    async disown(e) {
        this.realmStorage.knownHandlesToRealmMap.get(e) === this.realmId && (await g(this, Ce, qd).call(this, e),
        this.realmStorage.knownHandlesToRealmMap.delete(e))
    }
    dispose() {
        g(this, Ce, jd).call(this, {
            type: "event",
            method: tc.ChromiumBidi.Script.EventNames.RealmDestroyed,
            params: {
                realm: this.realmId
            }
        })
    }
}
,
Bo = new WeakMap,
fr = new WeakMap,
jo = new WeakMap,
On = new WeakMap,
Fo = new WeakMap,
$o = new WeakMap,
Ce = new WeakSet,
jd = function(e) {
    if (this.associatedBrowsingContexts.length === 0)
        s(this, fr).registerGlobalEvent(e);
    else
        for (const t of this.associatedBrowsingContexts)
            s(this, fr).registerEvent(e, t.id)
}
,
ft = new WeakSet,
Yp = function(e) {
    return e.objectId !== void 0 ? {
        objectId: e.objectId
    } : e.unserializableValue !== void 0 ? {
        unserializableValue: e.unserializableValue
    } : {
        value: e.value
    }
}
,
Fd = async function(e) {
    return (await Promise.all(e.map(async ([r,n]) => {
        let o;
        typeof r == "string" ? o = {
            value: r
        } : o = await this.deserializeForCdp(r);
        const a = await this.deserializeForCdp(n);
        return [o, a]
    }
    ))).flat()
}
,
$d = async function(e) {
    return await Promise.all(e.map(t => this.deserializeForCdp(t)))
}
,
Qp = async function(e, t, r) {
    var a;
    const n = ((a = e.stackTrace) == null ? void 0 : a.callFrames.map(c => ({
        url: c.url,
        functionName: c.functionName,
        lineNumber: c.lineNumber - t,
        columnNumber: c.columnNumber
    }))) ?? []
      , o = e.exception;
    return {
        exception: await this.serializeCdpObject(o, r),
        columnNumber: e.columnNumber,
        lineNumber: e.lineNumber - t,
        stackTrace: {
            callFrames: n
        },
        text: await this.stringifyObject(o) || e.text
    }
}
,
Ud = async function(e, t, r) {
    return {
        exceptionDetails: await g(this, Ce, Qp).call(this, e, t, r),
        realm: this.realmId,
        type: "exception"
    }
}
,
Ld = function(e, t) {
    var r, n;
    return {
        serialization: e,
        additionalParameters: g(r = ht, ft, Zp).call(r, t),
        ...g(n = ht, ft, ef).call(n, t)
    }
}
,
Zp = function(e) {
    const t = {};
    return e.maxDomDepth !== void 0 && (t.maxNodeDepth = e.maxDomDepth === null ? 1e3 : e.maxDomDepth),
    e.includeShadowTree !== void 0 && (t.includeShadowTree = e.includeShadowTree),
    t
}
,
ef = function(e) {
    return e.maxObjectDepth === void 0 || e.maxObjectDepth === null ? {} : {
        maxDepth: e.maxObjectDepth
    }
}
,
qd = async function(e) {
    try {
        await this.cdpClient.sendCommand("Runtime.releaseObject", {
            objectId: e
        })
    } catch (t) {
        if (!(t.code === -32e3 && t.message === "Invalid remote object id"))
            throw t
    }
}
,
u(ht, ft),
ht);
Ka.Realm = av;
Object.defineProperty(za, "__esModule", {
    value: !0
});
za.WindowRealm = void 0;
const sc = ee
  , cv = Ka
  , Sh = Ha;
var Ss, Ps, Kc, tf, tp;
let uv = (tp = class extends cv.Realm {
    constructor(t, r, n, o, a, c, p, h, d, l) {
        super(n, o, a, c, p, h, d);
        u(this, Kc);
        u(this, Ss);
        u(this, Ps);
        O(this, "sandbox");
        m(this, Ss, t),
        m(this, Ps, r),
        this.sandbox = l,
        this.initialize()
    }
    get browsingContext() {
        return s(this, Ps).getContext(s(this, Ss))
    }
    isHidden() {
        return this.realmStorage.hiddenSandboxes.has(this.sandbox)
    }
    get associatedBrowsingContexts() {
        return [this.browsingContext]
    }
    get realmType() {
        return "window"
    }
    get realmInfo() {
        return {
            ...this.baseInfo,
            type: this.realmType,
            context: s(this, Ss),
            sandbox: this.sandbox
        }
    }
    get source() {
        return {
            realm: this.realmId,
            context: this.browsingContext.id
        }
    }
    serializeForBiDi(t, r) {
        const n = t.value;
        if (t.type === "node" && n !== void 0) {
            if (Object.hasOwn(n, "backendNodeId")) {
                let o = this.browsingContext.navigableId ?? "UNKNOWN";
                Object.hasOwn(n, "loaderId") && (o = n.loaderId,
                delete n.loaderId),
                t.sharedId = (0,
                Sh.getSharedId)(g(this, Kc, tf).call(this, o), o, n.backendNodeId),
                delete n.backendNodeId
            }
            if (Object.hasOwn(n, "children"))
                for (const o in n.children)
                    n.children[o] = this.serializeForBiDi(n.children[o], r);
            Object.hasOwn(n, "shadowRoot") && n.shadowRoot !== null && (n.shadowRoot = this.serializeForBiDi(n.shadowRoot, r)),
            n.namespaceURI === "" && (n.namespaceURI = null)
        }
        return super.serializeForBiDi(t, r)
    }
    async deserializeForCdp(t) {
        if ("sharedId"in t && t.sharedId) {
            const r = (0,
            Sh.parseSharedId)(t.sharedId);
            if (r === null)
                throw new sc.NoSuchNodeException(`SharedId "${t.sharedId}" was not found.`);
            const {documentId: n, backendNodeId: o} = r;
            if (this.browsingContext.navigableId !== n)
                throw new sc.NoSuchNodeException(`SharedId "${t.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
            try {
                const {object: a} = await this.cdpClient.sendCommand("DOM.resolveNode", {
                    backendNodeId: o,
                    executionContextId: this.executionContextId
                });
                return {
                    objectId: a.objectId
                }
            } catch (a) {
                throw a.code === -32e3 && a.message === "No node with given id found" ? new sc.NoSuchNodeException(`SharedId "${t.sharedId}" was not found.`) : new sc.UnknownErrorException(a.message,a.stack)
            }
        }
        return await super.deserializeForCdp(t)
    }
    async evaluate(t, r, n, o, a, c) {
        return await s(this, Ps).getContext(s(this, Ss)).targetUnblockedOrThrow(),
        await super.evaluate(t, r, n, o, a, c)
    }
    async callFunction(t, r, n, o, a, c, p) {
        return await s(this, Ps).getContext(s(this, Ss)).targetUnblockedOrThrow(),
        await super.callFunction(t, r, n, o, a, c, p)
    }
}
,
Ss = new WeakMap,
Ps = new WeakMap,
Kc = new WeakSet,
tf = function(t) {
    const r = s(this, Ps).getAllContexts().find(n => n.navigableId === t);
    return (r == null ? void 0 : r.id) ?? "UNKNOWN"
}
,
tp);
za.WindowRealm = uv;
var Ms = {}
  , ql = {};
Object.defineProperty(ql, "__esModule", {
    value: !0
});
ql.urlMatchesAboutBlank = dv;
function dv(i) {
    if (i === "")
        return !0;
    try {
        const e = new URL(i);
        return e.protocol.replace(/:$/, "").toLowerCase() === "about" && e.pathname.toLowerCase() === "blank" && e.username === "" && e.password === "" && e.host === ""
    } catch (e) {
        if (e instanceof TypeError)
            return !1;
        throw e
    }
}
Object.defineProperty(Ms, "__esModule", {
    value: !0
});
Ms.NavigationTracker = Ms.NavigationState = Ms.NavigationResult = void 0;
const Ph = ee
  , _h = Kr
  , us = De
  , lv = Fu
  , Ih = ql
  , hv = Ft;
class dc {
    constructor(e, t) {
        O(this, "eventName");
        O(this, "message");
        this.eventName = e,
        this.message = t
    }
}
Ms.NavigationResult = dc;
var _s, Rn, An, mr, gr, Mn, hc;
class lc {
    constructor(e, t, r, n) {
        u(this, Mn);
        O(this, "navigationId", (0,
        hv.uuidv4)());
        u(this, _s);
        u(this, Rn, !1);
        u(this, An, new _h.Deferred);
        O(this, "url");
        O(this, "loaderId");
        u(this, mr);
        u(this, gr);
        O(this, "committed", new _h.Deferred);
        O(this, "isFragmentNavigation");
        m(this, _s, t),
        this.url = e,
        m(this, mr, r),
        m(this, gr, n)
    }
    get finished() {
        return s(this, An)
    }
    navigationInfo() {
        return {
            context: s(this, _s),
            navigation: this.navigationId,
            timestamp: (0,
            lv.getTimestamp)(),
            url: this.url
        }
    }
    start() {
        !s(this, mr) && !s(this, Rn) && !this.isFragmentNavigation && s(this, gr).registerEvent({
            type: "event",
            method: Ph.ChromiumBidi.BrowsingContext.EventNames.NavigationStarted,
            params: this.navigationInfo()
        }, s(this, _s)),
        m(this, Rn, !0)
    }
    frameNavigated() {
        this.committed.resolve(),
        s(this, mr) || s(this, gr).registerEvent({
            type: "event",
            method: Ph.ChromiumBidi.BrowsingContext.EventNames.NavigationCommitted,
            params: this.navigationInfo()
        }, s(this, _s))
    }
    fragmentNavigated() {
        this.committed.resolve(),
        g(this, Mn, hc).call(this, new dc("browsingContext.fragmentNavigated"))
    }
    load() {
        g(this, Mn, hc).call(this, new dc("browsingContext.load"))
    }
    fail(e) {
        g(this, Mn, hc).call(this, new dc(this.committed.isFinished ? "browsingContext.navigationAborted" : "browsingContext.navigationFailed",e))
    }
}
_s = new WeakMap,
Rn = new WeakMap,
An = new WeakMap,
mr = new WeakMap,
gr = new WeakMap,
Mn = new WeakSet,
hc = function(e) {
    m(this, Rn, !0),
    !s(this, mr) && !s(this, An).isFinished && e.eventName !== "browsingContext.load" && s(this, gr).registerEvent({
        type: "event",
        method: e.eventName,
        params: this.navigationInfo()
    }, s(this, _s)),
    s(this, An).resolve(e)
}
;
Ms.NavigationState = lc;
var wr, Qe, Ke, Bn, Ze, ce, Jt, Wc, sf, Uo, zd;
const Ji = class Ji {
    constructor(e, t, r, n) {
        u(this, Wc);
        u(this, wr);
        u(this, Qe);
        u(this, Ke, new Map);
        u(this, Bn);
        u(this, Ze);
        u(this, ce);
        u(this, Jt, !0);
        m(this, Bn, t),
        m(this, wr, r),
        m(this, Qe, n),
        m(this, Jt, !0),
        m(this, Ze, new lc(e,t,(0,
        Ih.urlMatchesAboutBlank)(e),s(this, wr)))
    }
    get currentNavigationId() {
        var e;
        return ((e = s(this, ce)) == null ? void 0 : e.isFragmentNavigation) === !1 ? s(this, ce).navigationId : s(this, Ze).navigationId
    }
    get isInitialNavigation() {
        return s(this, Jt)
    }
    get url() {
        return s(this, Ze).url
    }
    createPendingNavigation(e, t=!1) {
        var n, o;
        (n = s(this, Qe)) == null || n.call(this, us.LogType.debug, "createCommandNavigation"),
        m(this, Jt, t && s(this, Jt) && (0,
        Ih.urlMatchesAboutBlank)(e)),
        (o = s(this, ce)) == null || o.fail("navigation canceled by concurrent navigation");
        const r = new lc(e,s(this, Bn),s(this, Jt),s(this, wr));
        return m(this, ce, r),
        r
    }
    dispose() {
        var e;
        (e = s(this, ce)) == null || e.fail("navigation canceled by context disposal"),
        s(this, Ze).fail("navigation canceled by context disposal")
    }
    onTargetInfoChanged(e) {
        var t;
        (t = s(this, Qe)) == null || t.call(this, us.LogType.debug, `onTargetInfoChanged ${e}`),
        s(this, Ze).url = e
    }
    frameNavigated(e, t, r) {
        var o;
        if ((o = s(this, Qe)) == null || o.call(this, us.LogType.debug, `frameNavigated ${e}`),
        r !== void 0) {
            const a = s(this, Ke).get(t) ?? s(this, ce) ?? this.createPendingNavigation(r, !0);
            a.url = r,
            a.start(),
            a.fail("the requested url is unreachable");
            return
        }
        const n = g(this, Wc, sf).call(this, e, t);
        n !== s(this, Ze) && s(this, Ze).fail("navigation canceled by concurrent navigation"),
        n.url = e,
        n.loaderId = t,
        s(this, Ke).set(t, n),
        n.start(),
        n.frameNavigated(),
        m(this, Ze, n),
        s(this, ce) === n && m(this, ce, void 0)
    }
    navigatedWithinDocument(e, t) {
        var n, o;
        if ((n = s(this, Qe)) == null || n.call(this, us.LogType.debug, `navigatedWithinDocument ${e}, ${t}`),
        s(this, Ze).url = e,
        t !== "fragment")
            return;
        const r = ((o = s(this, ce)) == null ? void 0 : o.isFragmentNavigation) === !0 ? s(this, ce) : new lc(e,s(this, Bn),!1,s(this, wr));
        r.fragmentNavigated(),
        r === s(this, ce) && m(this, ce, void 0)
    }
    loadPageEvent(e) {
        var t, r;
        (t = s(this, Qe)) == null || t.call(this, us.LogType.debug, "loadPageEvent"),
        m(this, Jt, !1),
        (r = s(this, Ke).get(e)) == null || r.load()
    }
    failNavigation(e, t) {
        var r;
        (r = s(this, Qe)) == null || r.call(this, us.LogType.debug, "failCommandNavigation"),
        e.fail(t)
    }
    navigationCommandFinished(e, t) {
        var r;
        (r = s(this, Qe)) == null || r.call(this, us.LogType.debug, `finishCommandNavigation ${e.navigationId}, ${t}`),
        t !== void 0 && (e.loaderId = t,
        s(this, Ke).set(t, e)),
        e.isFragmentNavigation = t === void 0
    }
    frameStartedNavigating(e, t, r) {
        var o, a, c, p, h, d;
        if ((o = s(this, Qe)) == null || o.call(this, us.LogType.debug, `frameStartedNavigating ${e}, ${t}`),
        s(this, ce) && ((a = s(this, ce)) == null ? void 0 : a.loaderId) !== void 0 && ((c = s(this, ce)) == null ? void 0 : c.loaderId) !== t && ((p = s(this, ce)) == null || p.fail("navigation canceled by concurrent navigation"),
        m(this, ce, void 0)),
        s(this, Ke).has(t)) {
            const l = s(this, Ke).get(t);
            l.isFragmentNavigation = g(h = Ji, Uo, zd).call(h, r),
            m(this, ce, l);
            return
        }
        const n = s(this, ce) ?? this.createPendingNavigation(e, !0);
        s(this, Ke).set(t, n),
        n.isFragmentNavigation = g(d = Ji, Uo, zd).call(d, r),
        n.url = e,
        n.loaderId = t,
        n.start()
    }
    networkLoadingFailed(e, t) {
        var r;
        (r = s(this, Ke).get(e)) == null || r.fail(t)
    }
}
;
wr = new WeakMap,
Qe = new WeakMap,
Ke = new WeakMap,
Bn = new WeakMap,
Ze = new WeakMap,
ce = new WeakMap,
Jt = new WeakMap,
Wc = new WeakSet,
sf = function(e, t) {
    return s(this, Ke).has(t) ? s(this, Ke).get(t) : s(this, ce) !== void 0 && s(this, ce).loaderId === void 0 ? s(this, ce) : this.createPendingNavigation(e, !0)
}
,
Uo = new WeakSet,
zd = function(e) {
    return ["historySameDocument", "sameDocument"].includes(e)
}
,
u(Ji, Uo);
let Hd = Ji;
Ms.NavigationTracker = Hd;
var cn;
Object.defineProperty(Di, "__esModule", {
    value: !0
});
Di.BrowsingContextImpl = void 0;
Di.serializeOrigin = df;
const H = ee
  , Mi = as
  , Ks = Kr
  , Bi = De
  , Qr = Fu
  , Zr = Ll
  , pv = Ft
  , fv = Ha
  , mv = za
  , cd = Ms;
var jn, Fn, Lo, $n, et, We, qo, Ae, z, je, ot, ke, tt, ue, at, Ho, yr, G, pc, Kd, Wd, Gc, rf, nf, fc, Gd, of, Vd, af, cf, uf, ps;
class Oc {
    constructor(e, t, r, n, o, a, c, p, h, d, l) {
        u(this, G);
        u(this, jn, new Set);
        u(this, Fn);
        O(this, "userContext");
        u(this, Lo, (0,
        pv.uuidv4)());
        u(this, $n, new Map);
        u(this, et);
        u(this, We, null);
        u(this, qo);
        u(this, Ae, {
            DOMContentLoaded: new Ks.Deferred,
            load: new Ks.Deferred
        });
        u(this, z);
        u(this, je, new Ks.Deferred);
        u(this, ot);
        u(this, ke);
        u(this, tt);
        u(this, ue);
        u(this, at);
        u(this, Ho);
        u(this, yr);
        m(this, z, n),
        m(this, Fn, e),
        m(this, We, t),
        this.userContext = r,
        m(this, ke, o),
        m(this, ot, a),
        m(this, at, c),
        m(this, Ho, p),
        m(this, tt, l),
        m(this, qo, d),
        s(this, at).hiddenSandboxes.add(s(this, Lo)),
        m(this, ue, new cd.NavigationTracker(h,e,o,l))
    }
    static create(e, t, r, n, o, a, c, p, h, d, l) {
        var C;
        const w = new cn(e,t,r,n,o,a,c,p,h,d,l);
        return g(C = w, G, Wd).call(C),
        a.addContext(w),
        w.isTopLevelContext() || w.parent.addChild(w.id),
        o.registerPromiseEvent(w.targetUnblockedOrThrow().then( () => ({
            kind: "success",
            value: {
                type: "event",
                method: H.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
                params: {
                    ...w.serializeToBidiValue(),
                    url: h
                }
            }
        }), E => ({
            kind: "error",
            error: E
        })), w.id, H.ChromiumBidi.BrowsingContext.EventNames.ContextCreated),
        w
    }
    get navigableId() {
        return s(this, et)
    }
    get navigationId() {
        return s(this, ue).currentNavigationId
    }
    dispose(e) {
        s(this, ue).dispose(),
        s(this, at).deleteRealms({
            browsingContextId: this.id
        }),
        this.isTopLevelContext() || s(this.parent, jn).delete(this.id),
        g(this, G, of).call(this),
        e && s(this, ke).registerEvent({
            type: "event",
            method: H.ChromiumBidi.BrowsingContext.EventNames.ContextDestroyed,
            params: this.serializeToBidiValue(null)
        }, this.id),
        g(this, G, pc).call(this),
        s(this, ke).clearBufferedEvents(this.id),
        s(this, ot).deleteContextById(this.id)
    }
    get id() {
        return s(this, Fn)
    }
    get parentId() {
        return s(this, We)
    }
    set parentId(e) {
        var t;
        if (s(this, We) !== null) {
            (t = s(this, tt)) == null || t.call(this, Bi.LogType.debugError, "Parent context already set");
            return
        }
        m(this, We, e),
        this.isTopLevelContext() || this.parent.addChild(this.id)
    }
    get parent() {
        return this.parentId === null ? null : s(this, ot).getContext(this.parentId)
    }
    get directChildren() {
        return [...s(this, jn)].map(e => s(this, ot).getContext(e))
    }
    get allChildren() {
        const e = this.directChildren;
        return e.concat(...e.map(t => t.allChildren))
    }
    isTopLevelContext() {
        return s(this, We) === null
    }
    get top() {
        let e = this
          , t = e.parent;
        for (; t; )
            e = t,
            t = e.parent;
        return e
    }
    addChild(e) {
        s(this, jn).add(e)
    }
    get cdpTarget() {
        return s(this, z)
    }
    updateCdpTarget(e) {
        m(this, z, e),
        g(this, G, Wd).call(this)
    }
    get url() {
        return s(this, ue).url
    }
    async lifecycleLoaded() {
        await s(this, Ae).load
    }
    async targetUnblockedOrThrow() {
        const e = await s(this, z).unblocked;
        if (e.kind === "error")
            throw e.error
    }
    async getOrCreateHiddenSandbox() {
        return await g(this, G, Kd).call(this, s(this, Lo))
    }
    async getOrCreateUserSandbox(e) {
        const t = await g(this, G, Kd).call(this, e);
        if (t.isHidden())
            throw new H.NoSuchFrameException(`Realm "${e}" not found`);
        return t
    }
    serializeToBidiValue(e=0, t=!0) {
        return {
            context: s(this, Fn),
            url: this.url,
            userContext: this.userContext,
            originalOpener: s(this, qo) ?? null,
            clientWindow: `${this.cdpTarget.windowId}`,
            children: e === null || e > 0 ? this.directChildren.map(r => r.serializeToBidiValue(e === null ? e : e - 1, !1)) : null,
            ...t ? {
                parent: s(this, We)
            } : {}
        }
    }
    onTargetInfoChanged(e) {
        s(this, ue).onTargetInfoChanged(e.targetInfo.url)
    }
    async navigate(e, t) {
        try {
            new URL(e)
        } catch {
            throw new H.InvalidArgumentException(`Invalid URL: ${e}`)
        }
        const r = s(this, ue).createPendingNavigation(e)
          , n = (async () => {
            const a = await s(this, z).cdpClient.sendCommand("Page.navigate", {
                url: e,
                frameId: this.id
            });
            if (a.errorText)
                throw s(this, ue).failNavigation(r, a.errorText),
                new H.UnknownErrorException(a.errorText);
            s(this, ue).navigationCommandFinished(r, a.loaderId),
            g(this, G, fc).call(this, a.loaderId)
        }
        )()
          , o = await Promise.race([g(this, G, Vd).call(this, t, n, r), r.finished]);
        if (o instanceof cd.NavigationResult && (o.eventName === "browsingContext.navigationAborted" || o.eventName === "browsingContext.navigationFailed"))
            throw new H.UnknownErrorException(o.message ?? "unknown exception");
        return {
            navigation: r.navigationId,
            url: r.url
        }
    }
    async reload(e, t) {
        await this.targetUnblockedOrThrow(),
        g(this, G, Gd).call(this);
        const r = s(this, ue).createPendingNavigation(s(this, ue).url)
          , n = s(this, z).cdpClient.sendCommand("Page.reload", {
            ignoreCache: e
        })
          , o = await Promise.race([g(this, G, Vd).call(this, t, n, r), r.finished]);
        if (o instanceof cd.NavigationResult && (o.eventName === "browsingContext.navigationAborted" || o.eventName === "browsingContext.navigationFailed"))
            throw new H.UnknownErrorException(o.message ?? "unknown exception");
        return {
            navigation: r.navigationId,
            url: r.url
        }
    }
    async setViewport(e, t, r) {
        await this.cdpTarget.setDeviceMetricsOverride(e, t, r)
    }
    async handleUserPrompt(e, t) {
        await s(this.top, z).cdpClient.sendCommand("Page.handleJavaScriptDialog", {
            accept: e ?? !0,
            promptText: t
        })
    }
    async activate() {
        await s(this, z).cdpClient.sendCommand("Page.bringToFront")
    }
    async captureScreenshot(e) {
        if (!this.isTopLevelContext())
            throw new H.UnsupportedOperationException(`Non-top-level 'context' (${e.context}) is currently not supported`);
        const t = gv(e);
        let r = !1, n;
        switch (e.origin ?? (e.origin = "viewport"),
        e.origin) {
        case "document":
            {
                n = String( () => {
                    const h = document.documentElement;
                    return {
                        x: 0,
                        y: 0,
                        width: h.scrollWidth,
                        height: h.scrollHeight
                    }
                }
                ),
                r = !0;
                break
            }
        case "viewport":
            {
                n = String( () => {
                    const h = window.visualViewport;
                    return {
                        x: h.pageLeft,
                        y: h.pageTop,
                        width: h.width,
                        height: h.height
                    }
                }
                );
                break
            }
        }
        const a = await (await this.getOrCreateHiddenSandbox()).callFunction(n, !1);
        (0,
        Mi.assert)(a.type === "success");
        const c = kh(a.result);
        (0,
        Mi.assert)(c);
        let p = c;
        if (e.clip) {
            const h = e.clip;
            e.origin === "viewport" && h.type === "box" && (h.x += c.x,
            h.y += c.y),
            p = wv(await g(this, G, af).call(this, h), c)
        }
        if (p.width === 0 || p.height === 0)
            throw new H.UnableToCaptureScreenException(`Unable to capture screenshot with zero dimensions: width=${p.width}, height=${p.height}`);
        return await s(this, z).cdpClient.sendCommand("Page.captureScreenshot", {
            clip: {
                ...p,
                scale: 1
            },
            ...t,
            captureBeyondViewport: r
        })
    }
    async print(e) {
        var r, n, o, a, c, p;
        if (!this.isTopLevelContext())
            throw new H.UnsupportedOperationException("Printing of non-top level contexts is not supported");
        const t = {};
        if (e.background !== void 0 && (t.printBackground = e.background),
        ((r = e.margin) == null ? void 0 : r.bottom) !== void 0 && (t.marginBottom = (0,
        Zr.inchesFromCm)(e.margin.bottom)),
        ((n = e.margin) == null ? void 0 : n.left) !== void 0 && (t.marginLeft = (0,
        Zr.inchesFromCm)(e.margin.left)),
        ((o = e.margin) == null ? void 0 : o.right) !== void 0 && (t.marginRight = (0,
        Zr.inchesFromCm)(e.margin.right)),
        ((a = e.margin) == null ? void 0 : a.top) !== void 0 && (t.marginTop = (0,
        Zr.inchesFromCm)(e.margin.top)),
        e.orientation !== void 0 && (t.landscape = e.orientation === "landscape"),
        ((c = e.page) == null ? void 0 : c.height) !== void 0 && (t.paperHeight = (0,
        Zr.inchesFromCm)(e.page.height)),
        ((p = e.page) == null ? void 0 : p.width) !== void 0 && (t.paperWidth = (0,
        Zr.inchesFromCm)(e.page.width)),
        e.pageRanges !== void 0) {
            for (const h of e.pageRanges) {
                if (typeof h == "number")
                    continue;
                const d = h.split("-");
                if (d.length < 1 || d.length > 2)
                    throw new H.InvalidArgumentException(`Invalid page range: ${h} is not a valid integer range.`);
                if (d.length === 1) {
                    ud(d[0] ?? "");
                    continue
                }
                let l, w;
                const [C="",E=""] = d;
                if (C === "" ? l = 1 : l = ud(C),
                E === "" ? w = Number.MAX_SAFE_INTEGER : w = ud(E),
                l > w)
                    throw new H.InvalidArgumentException(`Invalid page range: ${C} > ${E}`)
            }
            t.pageRanges = e.pageRanges.join(",")
        }
        e.scale !== void 0 && (t.scale = e.scale),
        e.shrinkToFit !== void 0 && (t.preferCSSPageSize = !e.shrinkToFit);
        try {
            return {
                data: (await s(this, z).cdpClient.sendCommand("Page.printToPDF", t)).data
            }
        } catch (h) {
            throw h.message === "invalid print parameters: content area is empty" ? new H.UnsupportedOperationException(h.message) : h
        }
    }
    async close() {
        await s(this, z).cdpClient.sendCommand("Page.close")
    }
    async traverseHistory(e) {
        if (e === 0)
            return;
        const t = await s(this, z).cdpClient.sendCommand("Page.getNavigationHistory")
          , r = t.entries[t.currentIndex + e];
        if (!r)
            throw new H.NoSuchHistoryEntryException(`No history entry at delta ${e}`);
        await s(this, z).cdpClient.sendCommand("Page.navigateToHistoryEntry", {
            entryId: r.id
        })
    }
    async toggleModulesIfNeeded() {
        await Promise.all([s(this, z).toggleNetworkIfNeeded(), s(this, z).toggleDeviceAccessIfNeeded(), s(this, z).togglePreloadIfNeeded()])
    }
    async locateNodes(e) {
        return await g(this, G, uf).call(this, await s(this, je), e.locator, e.startNodes ?? [], e.maxNodeCount, e.serializationOptions)
    }
    async setTimezoneOverride(e) {
        await Promise.all(g(this, G, ps).call(this).map(async t => await t.setTimezoneOverride(e)))
    }
    async setLocaleOverride(e) {
        await Promise.all(g(this, G, ps).call(this).map(async t => await t.setLocaleOverride(e)))
    }
    async setGeolocationOverride(e) {
        await Promise.all(g(this, G, ps).call(this).map(async t => await t.setGeolocationOverride(e)))
    }
    async setScriptingEnabled(e) {
        await Promise.all(g(this, G, ps).call(this).map(async t => await t.setScriptingEnabled(e)))
    }
    async setUserAgentAndAcceptLanguage(e, t) {
        await Promise.all(g(this, G, ps).call(this).map(async r => await r.setUserAgentAndAcceptLanguage(e, t)))
    }
    async setEmulatedNetworkConditions(e) {
        await Promise.all(g(this, G, ps).call(this).map(async t => await t.setEmulatedNetworkConditions(e)))
    }
    async setExtraHeaders(e) {
        await Promise.all(g(this, G, ps).call(this).map(async t => await t.setExtraHeaders(e)))
    }
}
jn = new WeakMap,
Fn = new WeakMap,
Lo = new WeakMap,
$n = new WeakMap,
et = new WeakMap,
We = new WeakMap,
qo = new WeakMap,
Ae = new WeakMap,
z = new WeakMap,
je = new WeakMap,
ot = new WeakMap,
ke = new WeakMap,
tt = new WeakMap,
ue = new WeakMap,
at = new WeakMap,
Ho = new WeakMap,
yr = new WeakMap,
G = new WeakSet,
pc = function(e=!1) {
    this.directChildren.map(t => t.dispose(e))
}
,
Kd = async function(e) {
    if (e === void 0 || e === "")
        return await s(this, je);
    let t = s(this, at).findRealms({
        browsingContextId: this.id,
        sandbox: e
    });
    return t.length === 0 && (await s(this, z).cdpClient.sendCommand("Page.createIsolatedWorld", {
        frameId: this.id,
        worldName: e
    }),
    t = s(this, at).findRealms({
        browsingContextId: this.id,
        sandbox: e
    }),
    (0,
    Mi.assert)(t.length !== 0)),
    t[0]
}
,
Wd = function() {
    s(this, z).cdpClient.on("Network.loadingFailed", e => {
        s(this, ue).networkLoadingFailed(e.requestId, e.errorText)
    }
    ),
    s(this, z).cdpClient.on("Page.fileChooserOpened", e => {
        var r;
        if (this.id !== e.frameId)
            return;
        if (s(this, et) === void 0) {
            (r = s(this, tt)) == null || r.call(this, Bi.LogType.debugError, "LoaderId should be defined when file upload is shown", e);
            return
        }
        const t = e.backendNodeId === void 0 ? void 0 : {
            sharedId: (0,
            fv.getSharedId)(this.id, s(this, et), e.backendNodeId)
        };
        s(this, ke).registerEvent({
            type: "event",
            method: H.ChromiumBidi.Input.EventNames.FileDialogOpened,
            params: {
                context: this.id,
                multiple: e.mode === "selectMultiple",
                element: t
            }
        }, this.id)
    }
    ),
    s(this, z).cdpClient.on("Page.frameNavigated", e => {
        this.id === e.frame.id && (s(this, ue).frameNavigated(e.frame.url + (e.frame.urlFragment ?? ""), e.frame.loaderId, e.frame.unreachableUrl),
        g(this, G, pc).call(this),
        g(this, G, fc).call(this, e.frame.loaderId))
    }
    ),
    s(this, z).cdpClient.on("Page.frameStartedNavigating", e => {
        this.id === e.frameId && s(this, ue).frameStartedNavigating(e.url, e.loaderId, e.navigationType)
    }
    ),
    s(this, z).cdpClient.on("Page.navigatedWithinDocument", e => {
        if (this.id === e.frameId && (s(this, ue).navigatedWithinDocument(e.url, e.navigationType),
        e.navigationType === "historyApi")) {
            s(this, ke).registerEvent({
                type: "event",
                method: "browsingContext.historyUpdated",
                params: {
                    context: this.id,
                    timestamp: (0,
                    Qr.getTimestamp)(),
                    url: s(this, ue).url
                }
            }, this.id);
            return
        }
    }
    ),
    s(this, z).cdpClient.on("Page.lifecycleEvent", e => {
        if (this.id === e.frameId) {
            if (e.name === "init") {
                g(this, G, fc).call(this, e.loaderId);
                return
            }
            if (e.name === "commit") {
                m(this, et, e.loaderId);
                return
            }
            if (s(this, et) || m(this, et, e.loaderId),
            e.loaderId === s(this, et))
                switch (e.name) {
                case "DOMContentLoaded":
                    s(this, ue).isInitialNavigation || s(this, ke).registerEvent({
                        type: "event",
                        method: H.ChromiumBidi.BrowsingContext.EventNames.DomContentLoaded,
                        params: {
                            context: this.id,
                            navigation: s(this, ue).currentNavigationId,
                            timestamp: (0,
                            Qr.getTimestamp)(),
                            url: s(this, ue).url
                        }
                    }, this.id),
                    s(this, Ae).DOMContentLoaded.resolve();
                    break;
                case "load":
                    s(this, ue).isInitialNavigation || s(this, ke).registerEvent({
                        type: "event",
                        method: H.ChromiumBidi.BrowsingContext.EventNames.Load,
                        params: {
                            context: this.id,
                            navigation: s(this, ue).currentNavigationId,
                            timestamp: (0,
                            Qr.getTimestamp)(),
                            url: s(this, ue).url
                        }
                    }, this.id),
                    s(this, ue).loadPageEvent(e.loaderId),
                    s(this, Ae).load.resolve();
                    break
                }
        }
    }
    ),
    s(this, z).cdpClient.on("Runtime.executionContextCreated", e => {
        var h;
        const {auxData: t, name: r, uniqueId: n, id: o} = e.context;
        if (!t || t.frameId !== this.id)
            return;
        let a, c;
        switch (t.type) {
        case "isolated":
            c = r,
            s(this, je).isFinished || (h = s(this, tt)) == null || h.call(this, Bi.LogType.debugError, "Unexpectedly, isolated realm created before the default one"),
            a = s(this, je).isFinished ? s(this, je).result.origin : "";
            break;
        case "default":
            a = df(e.context.origin);
            break;
        default:
            return
        }
        const p = new mv.WindowRealm(this.id,s(this, ot),s(this, z).cdpClient,s(this, ke),o,s(this, tt),a,n,s(this, at),c);
        t.isDefault && (s(this, je).resolve(p),
        Promise.all(s(this, z).getChannels().map(d => d.startListenerFromWindow(p, s(this, ke)))))
    }
    ),
    s(this, z).cdpClient.on("Runtime.executionContextDestroyed", e => {
        s(this, je).isFinished && s(this, je).result.executionContextId === e.executionContextId && m(this, je, new Ks.Deferred),
        s(this, at).deleteRealms({
            cdpSessionId: s(this, z).cdpSessionId,
            executionContextId: e.executionContextId
        })
    }
    ),
    s(this, z).cdpClient.on("Runtime.executionContextsCleared", () => {
        s(this, je).isFinished || s(this, je).reject(new H.UnknownErrorException("execution contexts cleared")),
        m(this, je, new Ks.Deferred),
        s(this, at).deleteRealms({
            cdpSessionId: s(this, z).cdpSessionId
        })
    }
    ),
    s(this, z).cdpClient.on("Page.javascriptDialogClosed", e => {
        var r, n;
        if (e.frameId && this.id !== e.frameId || !e.frameId && s(this, We) && s(this, z).cdpClient !== ((r = s(this, ot).getContext(s(this, We))) == null ? void 0 : r.cdpTarget.cdpClient))
            return;
        const t = e.result;
        s(this, yr) === void 0 && ((n = s(this, tt)) == null || n.call(this, Bi.LogType.debugError, "Unexpectedly no opening prompt event before closing one")),
        s(this, ke).registerEvent({
            type: "event",
            method: H.ChromiumBidi.BrowsingContext.EventNames.UserPromptClosed,
            params: {
                context: this.id,
                accepted: t,
                type: s(this, yr) ?? "UNKNOWN",
                userText: t && e.userInput ? e.userInput : void 0
            }
        }, this.id),
        m(this, yr, void 0)
    }
    ),
    s(this, z).cdpClient.on("Page.javascriptDialogOpening", e => {
        var n, o;
        if (e.frameId && this.id !== e.frameId || !e.frameId && s(this, We) && s(this, z).cdpClient !== ((n = s(this, ot).getContext(s(this, We))) == null ? void 0 : n.cdpTarget.cdpClient))
            return;
        const t = g(o = cn, Gc, rf).call(o, e.type);
        m(this, yr, t);
        const r = g(this, G, nf).call(this, t);
        switch (s(this, ke).registerEvent({
            type: "event",
            method: H.ChromiumBidi.BrowsingContext.EventNames.UserPromptOpened,
            params: {
                context: this.id,
                handler: r,
                type: t,
                message: e.message,
                ...e.type === "prompt" ? {
                    defaultValue: e.defaultPrompt
                } : {}
            }
        }, this.id),
        r) {
        case "accept":
            this.handleUserPrompt(!0);
            break;
        case "dismiss":
            this.handleUserPrompt(!1);
            break
        }
    }
    ),
    s(this, z).browserCdpClient.on("Browser.downloadWillBegin", e => {
        this.id === e.frameId && (s(this, $n).set(e.guid, e.url),
        s(this, ke).registerEvent({
            type: "event",
            method: H.ChromiumBidi.BrowsingContext.EventNames.DownloadWillBegin,
            params: {
                context: this.id,
                suggestedFilename: e.suggestedFilename,
                navigation: e.guid,
                timestamp: (0,
                Qr.getTimestamp)(),
                url: e.url
            }
        }, this.id))
    }
    ),
    s(this, z).browserCdpClient.on("Browser.downloadProgress", e => {
        if (!s(this, $n).has(e.guid) || e.state === "inProgress")
            return;
        const t = s(this, $n).get(e.guid);
        switch (e.state) {
        case "canceled":
            s(this, ke).registerEvent({
                type: "event",
                method: H.ChromiumBidi.BrowsingContext.EventNames.DownloadEnd,
                params: {
                    status: "canceled",
                    context: this.id,
                    navigation: e.guid,
                    timestamp: (0,
                    Qr.getTimestamp)(),
                    url: t
                }
            }, this.id);
            break;
        case "completed":
            s(this, ke).registerEvent({
                type: "event",
                method: H.ChromiumBidi.BrowsingContext.EventNames.DownloadEnd,
                params: {
                    filepath: e.filePath ?? null,
                    status: "complete",
                    context: this.id,
                    navigation: e.guid,
                    timestamp: (0,
                    Qr.getTimestamp)(),
                    url: t
                }
            }, this.id);
            break;
        default:
            throw new H.UnknownErrorException(`Unknown download state: ${e.state}`)
        }
    }
    )
}
,
Gc = new WeakSet,
rf = function(e) {
    switch (e) {
    case "alert":
        return "alert";
    case "beforeunload":
        return "beforeunload";
    case "confirm":
        return "confirm";
    case "prompt":
        return "prompt"
    }
}
,
nf = function(e) {
    var n, o, a, c, p, h, d, l;
    const t = "dismiss"
      , r = s(this, Ho).getActiveConfig(this.top.id, this.userContext);
    switch (e) {
    case "alert":
        return ((n = r.userPromptHandler) == null ? void 0 : n.alert) ?? ((o = r.userPromptHandler) == null ? void 0 : o.default) ?? t;
    case "beforeunload":
        return ((a = r.userPromptHandler) == null ? void 0 : a.beforeUnload) ?? ((c = r.userPromptHandler) == null ? void 0 : c.default) ?? "accept";
    case "confirm":
        return ((p = r.userPromptHandler) == null ? void 0 : p.confirm) ?? ((h = r.userPromptHandler) == null ? void 0 : h.default) ?? t;
    case "prompt":
        return ((d = r.userPromptHandler) == null ? void 0 : d.prompt) ?? ((l = r.userPromptHandler) == null ? void 0 : l.default) ?? t
    }
}
,
fc = function(e) {
    e === void 0 || s(this, et) === e || (g(this, G, Gd).call(this),
    m(this, et, e),
    g(this, G, pc).call(this, !0))
}
,
Gd = function() {
    var e, t;
    s(this, Ae).DOMContentLoaded.isFinished ? s(this, Ae).DOMContentLoaded = new Ks.Deferred : (e = s(this, tt)) == null || e.call(this, cn.LOGGER_PREFIX, "Document changed (DOMContentLoaded)"),
    s(this, Ae).load.isFinished ? s(this, Ae).load = new Ks.Deferred : (t = s(this, tt)) == null || t.call(this, cn.LOGGER_PREFIX, "Document changed (load)")
}
,
of = function() {
    s(this, Ae).DOMContentLoaded.isFinished || s(this, Ae).DOMContentLoaded.reject(new H.UnknownErrorException("navigation canceled")),
    s(this, Ae).load.isFinished || s(this, Ae).load.reject(new H.UnknownErrorException("navigation canceled"))
}
,
Vd = async function(e, t, r) {
    if (await Promise.all([r.committed, t]),
    e !== "none") {
        if (r.isFragmentNavigation === !0) {
            await r.finished;
            return
        }
        if (e === "interactive") {
            await s(this, Ae).DOMContentLoaded;
            return
        }
        if (e === "complete") {
            await s(this, Ae).load;
            return
        }
        throw new H.InvalidArgumentException(`Wait condition ${e} is not supported`)
    }
}
,
af = async function(e) {
    switch (e.type) {
    case "box":
        return {
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height
        };
    case "element":
        {
            const t = await this.getOrCreateHiddenSandbox()
              , r = await t.callFunction(String(n => n instanceof Element), !1, {
                type: "undefined"
            }, [e.element]);
            if (r.type === "exception")
                throw new H.NoSuchElementException(`Element '${e.element.sharedId}' was not found`);
            if ((0,
            Mi.assert)(r.result.type === "boolean"),
            !r.result.value)
                throw new H.NoSuchElementException(`Node '${e.element.sharedId}' is not an Element`);
            {
                const n = await t.callFunction(String(a => {
                    const c = a.getBoundingClientRect();
                    return {
                        x: c.x,
                        y: c.y,
                        height: c.height,
                        width: c.width
                    }
                }
                ), !1, {
                    type: "undefined"
                }, [e.element]);
                (0,
                Mi.assert)(n.type === "success");
                const o = kh(n.result);
                if (!o)
                    throw new H.UnableToCaptureScreenException(`Could not get bounding box for Element '${e.element.sharedId}'`);
                return o
            }
        }
    }
}
,
cf = async function(e, t, r, n) {
    switch (t.type) {
    case "context":
        throw new Error("Unreachable");
    case "css":
        return {
            functionDeclaration: String( (o, a, ...c) => {
                const p = d => {
                    if (!(d instanceof HTMLElement || d instanceof Document || d instanceof DocumentFragment || d instanceof SVGElement))
                        throw new Error("startNodes in css selector should be HTMLElement, SVGElement or Document or DocumentFragment");
                    return [...d.querySelectorAll(o)]
                }
                ;
                c = c.length > 0 ? c : [document];
                const h = c.map(d => p(d)).flat(1);
                return a === 0 ? h : h.slice(0, a)
            }
            ),
            argumentsLocalValues: [{
                type: "string",
                value: t.value
            }, {
                type: "number",
                value: r ?? 0
            }, ...n]
        };
    case "xpath":
        return {
            functionDeclaration: String( (o, a, ...c) => {
                const h = new XPathEvaluator().createExpression(o)
                  , d = w => {
                    const C = h.evaluate(w, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE)
                      , E = [];
                    for (let S = 0; S < C.snapshotLength; S++)
                        E.push(C.snapshotItem(S));
                    return E
                }
                ;
                c = c.length > 0 ? c : [document];
                const l = c.map(w => d(w)).flat(1);
                return a === 0 ? l : l.slice(0, a)
            }
            ),
            argumentsLocalValues: [{
                type: "string",
                value: t.value
            }, {
                type: "number",
                value: r ?? 0
            }, ...n]
        };
    case "innerText":
        if (t.value === "")
            throw new H.InvalidSelectorException("innerText locator cannot be empty");
        return {
            functionDeclaration: String( (o, a, c, p, h, ...d) => {
                const l = c ? o.toUpperCase() : o
                  , w = (E, S) => {
                    var P;
                    const b = [];
                    if (E instanceof DocumentFragment || E instanceof Document)
                        return [...E.children].forEach(M => b.push(...w(M, S))),
                        b;
                    if (!(E instanceof HTMLElement))
                        return [];
                    const y = E
                      , D = c ? (P = y.innerText) == null ? void 0 : P.toUpperCase() : y.innerText;
                    if (!D.includes(l))
                        return [];
                    const v = [];
                    for (const A of y.children)
                        A instanceof HTMLElement && v.push(A);
                    if (v.length === 0)
                        a && D === l ? b.push(y) : a || b.push(y);
                    else {
                        const A = S <= 0 ? [] : v.map(M => w(M, S - 1)).flat(1);
                        A.length === 0 ? (!a || D === l) && b.push(y) : b.push(...A)
                    }
                    return b
                }
                ;
                d = d.length > 0 ? d : [document];
                const C = d.map(E => w(E, h)).flat(1);
                return p === 0 ? C : C.slice(0, p)
            }
            ),
            argumentsLocalValues: [{
                type: "string",
                value: t.value
            }, {
                type: "boolean",
                value: t.matchType !== "partial"
            }, {
                type: "boolean",
                value: t.ignoreCase === !0
            }, {
                type: "number",
                value: r ?? 0
            }, {
                type: "number",
                value: t.maxDepth ?? 1e3
            }, ...n]
        };
    case "accessibility":
        {
            if (!t.value.name && !t.value.role)
                throw new H.InvalidSelectorException("Either name or role has to be specified");
            await Promise.all([s(this, z).cdpClient.sendCommand("Accessibility.enable"), s(this, z).cdpClient.sendCommand("Accessibility.getRootAXNode")]);
            const o = await e.evaluate("({getAccessibleName, getAccessibleRole})", !1, "root", void 0, !1, !0);
            if (o.type !== "success")
                throw new Error("Could not get bindings");
            if (o.result.type !== "object")
                throw new Error("Could not get bindings");
            return {
                functionDeclaration: String( (a, c, p, h, ...d) => {
                    const l = [];
                    let w = !1;
                    function C(E, S) {
                        if (!w)
                            for (const b of E) {
                                let y = !0;
                                if (S.role) {
                                    const v = p.getAccessibleRole(b);
                                    S.role !== v && (y = !1)
                                }
                                if (S.name) {
                                    const v = p.getAccessibleName(b);
                                    S.name !== v && (y = !1)
                                }
                                if (y) {
                                    if (h !== 0 && l.length === h) {
                                        w = !0;
                                        break
                                    }
                                    l.push(b)
                                }
                                const D = [];
                                for (const v of b.children)
                                    v instanceof HTMLElement && D.push(v);
                                C(D, S)
                            }
                    }
                    return d = d.length > 0 ? d : Array.from(document.documentElement.children).filter(E => E instanceof HTMLElement),
                    C(d, {
                        role: c,
                        name: a
                    }),
                    l
                }
                ),
                argumentsLocalValues: [{
                    type: "string",
                    value: t.value.name || ""
                }, {
                    type: "string",
                    value: t.value.role || ""
                }, {
                    handle: o.result.handle
                }, {
                    type: "number",
                    value: r ?? 0
                }, ...n]
            }
        }
    }
}
,
uf = async function(e, t, r, n, o) {
    var h, d, l;
    if (t.type === "context") {
        if (r.length !== 0)
            throw new H.InvalidArgumentException("Start nodes are not supported");
        const w = t.value.context;
        if (!w)
            throw new H.InvalidSelectorException("Invalid context");
        const E = s(this, ot).getContext(w).parent;
        if (!E)
            throw new H.InvalidArgumentException("This context has no container");
        try {
            const {backendNodeId: S} = await s(E, z).cdpClient.sendCommand("DOM.getFrameOwner", {
                frameId: w
            })
              , {object: b} = await s(E, z).cdpClient.sendCommand("DOM.resolveNode", {
                backendNodeId: S
            })
              , y = await e.callFunction("function () { return this; }", !1, {
                handle: b.objectId
            }, [], "none", o);
            if (y.type === "exception")
                throw new Error("Unknown exception");
            return {
                nodes: [y.result]
            }
        } catch {
            throw new H.InvalidArgumentException("Context does not exist")
        }
    }
    const a = await g(this, G, cf).call(this, e, t, n, r);
    o = {
        ...o,
        maxObjectDepth: 1
    };
    const c = await e.callFunction(a.functionDeclaration, !1, {
        type: "undefined"
    }, a.argumentsLocalValues, "none", o);
    if (c.type !== "success")
        throw (h = s(this, tt)) == null || h.call(this, cn.LOGGER_PREFIX, "Failed locateNodesByLocator", c),
        (d = c.exceptionDetails.text) != null && d.endsWith("is not a valid selector.") || (l = c.exceptionDetails.text) != null && l.endsWith("is not a valid XPath expression.") ? new H.InvalidSelectorException(`Not valid selector ${typeof t.value == "string" ? t.value : JSON.stringify(t.value)}`) : c.exceptionDetails.text === "Error: startNodes in css selector should be HTMLElement, SVGElement or Document or DocumentFragment" ? new H.InvalidArgumentException("startNodes in css selector should be HTMLElement, SVGElement or Document or DocumentFragment") : new H.UnknownErrorException(`Unexpected error in selector script: ${c.exceptionDetails.text}`);
    if (c.result.type !== "array")
        throw new H.UnknownErrorException(`Unexpected selector script result type: ${c.result.type}`);
    return {
        nodes: c.result.value.map(w => {
            if (w.type !== "node")
                throw new H.UnknownErrorException(`Unexpected selector script result element: ${w.type}`);
            return w
        }
        )
    }
}
,
ps = function() {
    const e = new Set;
    return e.add(this.cdpTarget),
    this.allChildren.forEach(t => e.add(t.cdpTarget)),
    Array.from(e)
}
,
u(Oc, Gc),
O(Oc, "LOGGER_PREFIX", `${Bi.LogType.debug}:browsingContext`);
Di.BrowsingContextImpl = Oc;
cn = Oc;
function df(i) {
    return ["://", ""].includes(i) && (i = "null"),
    i
}
function gv(i) {
    const {quality: e, type: t} = i.format ?? {
        type: "image/png"
    };
    switch (t) {
    case "image/png":
        return {
            format: "png"
        };
    case "image/jpeg":
        return {
            format: "jpeg",
            ...e === void 0 ? {} : {
                quality: Math.round(e * 100)
            }
        };
    case "image/webp":
        return {
            format: "webp",
            ...e === void 0 ? {} : {
                quality: Math.round(e * 100)
            }
        }
    }
    throw new H.InvalidArgumentException(`Image format '${t}' is not a supported format`)
}
function kh(i) {
    var o, a, c, p;
    if (i.type !== "object" || i.value === void 0)
        return;
    const e = (o = i.value.find( ([h]) => h === "x")) == null ? void 0 : o[1]
      , t = (a = i.value.find( ([h]) => h === "y")) == null ? void 0 : a[1]
      , r = (c = i.value.find( ([h]) => h === "height")) == null ? void 0 : c[1]
      , n = (p = i.value.find( ([h]) => h === "width")) == null ? void 0 : p[1];
    if (!((e == null ? void 0 : e.type) !== "number" || (t == null ? void 0 : t.type) !== "number" || (r == null ? void 0 : r.type) !== "number" || (n == null ? void 0 : n.type) !== "number"))
        return {
            x: e.value,
            y: t.value,
            width: n.value,
            height: r.value
        }
}
function Th(i) {
    return {
        ...i.width < 0 ? {
            x: i.x + i.width,
            width: -i.width
        } : {
            x: i.x,
            width: i.width
        },
        ...i.height < 0 ? {
            y: i.y + i.height,
            height: -i.height
        } : {
            y: i.y,
            height: i.height
        }
    }
}
function wv(i, e) {
    i = Th(i),
    e = Th(e);
    const t = Math.max(i.x, e.x)
      , r = Math.max(i.y, e.y);
    return {
        x: t,
        y: r,
        width: Math.max(Math.min(i.x + i.width, e.x + e.width) - t, 0),
        height: Math.max(Math.min(i.y + i.height, e.y + e.height) - r, 0)
    }
}
function ud(i) {
    if (i = i.trim(),
    !/^[0-9]+$/.test(i))
        throw new H.InvalidArgumentException(`Invalid integer: ${i}`);
    return parseInt(i)
}
var $u = {};
Object.defineProperty($u, "__esModule", {
    value: !0
});
$u.WorkerRealm = void 0;
const yv = Ka;
var zo, Un;
class vv extends yv.Realm {
    constructor(t, r, n, o, a, c, p, h, d) {
        super(t, r, n, o, a, p, h);
        u(this, zo);
        u(this, Un);
        m(this, Un, c),
        m(this, zo, d),
        this.initialize()
    }
    get associatedBrowsingContexts() {
        return s(this, Un).flatMap(t => t.associatedBrowsingContexts)
    }
    get realmType() {
        return s(this, zo)
    }
    get source() {
        var t;
        return {
            realm: this.realmId,
            context: (t = this.associatedBrowsingContexts[0]) == null ? void 0 : t.id
        }
    }
    get realmInfo() {
        const t = s(this, Un).map(n => n.realmId)
          , {realmType: r} = this;
        switch (r) {
        case "dedicated-worker":
            {
                const n = t[0];
                if (n === void 0 || t.length !== 1)
                    throw new Error("Dedicated worker must have exactly one owner");
                return {
                    ...this.baseInfo,
                    type: r,
                    owners: [n]
                }
            }
        case "service-worker":
        case "shared-worker":
            return {
                ...this.baseInfo,
                type: r
            }
        }
    }
}
zo = new WeakMap,
Un = new WeakMap;
$u.WorkerRealm = vv;
var Uu = {}
  , Lu = {}
  , qu = {};
Object.defineProperty(qu, "__esModule", {
    value: !0
});
qu.logMessageFormatter = pf;
qu.getRemoteValuesText = Jd;
const bv = as
  , lf = ["%s", "%d", "%i", "%f", "%o", "%O", "%c"];
function hf(i) {
    return lf.some(e => i.includes(e))
}
function pf(i) {
    let e = "";
    const t = i[0].value.toString()
      , r = i.slice(1, void 0)
      , n = t.split(new RegExp(lf.map(o => `(${o})`).join("|"),"g"));
    for (const o of n)
        if (!(o === void 0 || o === ""))
            if (hf(o)) {
                const a = r.shift();
                (0,
                bv.assert)(a, `Less value is provided: "${Jd(i, !1)}"`),
                o === "%s" ? e += Hl(a) : o === "%d" || o === "%i" ? a.type === "bigint" || a.type === "number" || a.type === "string" ? e += parseInt(a.value.toString(), 10) : e += "NaN" : o === "%f" ? a.type === "bigint" || a.type === "number" || a.type === "string" ? e += parseFloat(a.value.toString()) : e += "NaN" : e += Xd(a)
            } else
                e += o;
    if (r.length > 0)
        throw new Error(`More value is provided: "${Jd(i, !1)}"`);
    return e
}
function Xd(i) {
    var e;
    if (i.type !== "array" && i.type !== "bigint" && i.type !== "date" && i.type !== "number" && i.type !== "object" && i.type !== "string")
        return Hl(i);
    if (i.type === "bigint")
        return `${i.value.toString()}n`;
    if (i.type === "number")
        return i.value.toString();
    if (["date", "string"].includes(i.type))
        return JSON.stringify(i.value);
    if (i.type === "object")
        return `{${i.value.map(t => `${JSON.stringify(t[0])}:${Xd(t[1])}`).join(",")}}`;
    if (i.type === "array")
        return `[${((e = i.value) == null ? void 0 : e.map(t => Xd(t)).join(",")) ?? ""}]`;
    throw Error(`Invalid value type: ${i}`)
}
function Hl(i) {
    var e, t, r, n;
    if (!Object.hasOwn(i, "value"))
        return i.type;
    switch (i.type) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
        return String(i.value);
    case "regexp":
        return `/${i.value.pattern}/${i.value.flags ?? ""}`;
    case "date":
        return new Date(i.value).toString();
    case "object":
        return `Object(${((e = i.value) == null ? void 0 : e.length) ?? ""})`;
    case "array":
        return `Array(${((t = i.value) == null ? void 0 : t.length) ?? ""})`;
    case "map":
        return `Map(${(r = i.value) == null ? void 0 : r.length})`;
    case "set":
        return `Set(${(n = i.value) == null ? void 0 : n.length})`;
    default:
        return i.type
    }
}
function Jd(i, e) {
    const t = i[0];
    return t ? t.type === "string" && hf(t.value.toString()) && e ? pf(i) : i.map(r => Hl(r)).join(" ") : ""
}
var Yd;
Object.defineProperty(Lu, "__esModule", {
    value: !0
});
Lu.LogManager = void 0;
const rc = ee
  , Dh = De
  , Cv = qu;
function Nh(i) {
    const e = i == null ? void 0 : i.callFrames.map(t => ({
        columnNumber: t.columnNumber,
        functionName: t.functionName,
        lineNumber: t.lineNumber,
        url: t.url
    }));
    return e ? {
        callFrames: e
    } : void 0
}
function xv(i) {
    return ["error", "assert"].includes(i) ? "error" : ["debug", "trace"].includes(i) ? "debug" : ["warn", "warning"].includes(i) ? "warn" : "info"
}
function Ev(i) {
    switch (i) {
    case "warning":
        return "warn";
    case "startGroup":
        return "group";
    case "startGroupCollapsed":
        return "groupCollapsed";
    case "endGroup":
        return "groupEnd"
    }
    return i
}
var Ln, qn, Is, Hn, _i, ff, mf, Vc, gf;
class zl {
    constructor(e, t, r, n) {
        u(this, _i);
        u(this, Ln);
        u(this, qn);
        u(this, Is);
        u(this, Hn);
        m(this, Is, e),
        m(this, qn, t),
        m(this, Ln, r),
        m(this, Hn, n)
    }
    static create(e, t, r, n) {
        var a;
        const o = new Yd(e,t,r,n);
        return g(a = o, _i, mf).call(a),
        o
    }
}
Ln = new WeakMap,
qn = new WeakMap,
Is = new WeakMap,
Hn = new WeakMap,
_i = new WeakSet,
ff = async function(e, t) {
    switch (e.type) {
    case "undefined":
        return {
            type: "undefined"
        };
    case "boolean":
        return {
            type: "boolean",
            value: e.value
        };
    case "string":
        return {
            type: "string",
            value: e.value
        };
    case "number":
        return {
            type: "number",
            value: e.unserializableValue ?? e.value
        };
    case "bigint":
        if (e.unserializableValue !== void 0 && e.unserializableValue[e.unserializableValue.length - 1] === "n")
            return {
                type: e.type,
                value: e.unserializableValue.slice(0, -1)
            };
        break;
    case "object":
        if (e.subtype === "null")
            return {
                type: "null"
            };
        break
    }
    return await t.serializeCdpObject(e, "none")
}
,
mf = function() {
    s(this, Is).cdpClient.on("Runtime.consoleAPICalled", e => {
        var n;
        const t = s(this, qn).findRealm({
            cdpSessionId: s(this, Is).cdpSessionId,
            executionContextId: e.executionContextId
        });
        if (t === void 0) {
            (n = s(this, Hn)) == null || n.call(this, Dh.LogType.cdp, e);
            return
        }
        const r = Promise.all(e.args.map(o => g(this, _i, ff).call(this, o, t)));
        for (const o of t.associatedBrowsingContexts)
            s(this, Ln).registerPromiseEvent(r.then(a => ({
                kind: "success",
                value: {
                    type: "event",
                    method: rc.ChromiumBidi.Log.EventNames.LogEntryAdded,
                    params: {
                        level: xv(e.type),
                        source: t.source,
                        text: (0,
                        Cv.getRemoteValuesText)(a, !0),
                        timestamp: Math.round(e.timestamp),
                        stackTrace: Nh(e.stackTrace),
                        type: "console",
                        method: Ev(e.type),
                        args: a
                    }
                }
            }), a => ({
                kind: "error",
                error: a
            })), o.id, rc.ChromiumBidi.Log.EventNames.LogEntryAdded)
    }
    ),
    s(this, Is).cdpClient.on("Runtime.exceptionThrown", e => {
        var r, n;
        const t = s(this, qn).findRealm({
            cdpSessionId: s(this, Is).cdpSessionId,
            executionContextId: e.exceptionDetails.executionContextId
        });
        if (t === void 0) {
            (r = s(this, Hn)) == null || r.call(this, Dh.LogType.cdp, e);
            return
        }
        for (const o of t.associatedBrowsingContexts)
            s(this, Ln).registerPromiseEvent(g(n = Yd, Vc, gf).call(n, e, t).then(a => ({
                kind: "success",
                value: {
                    type: "event",
                    method: rc.ChromiumBidi.Log.EventNames.LogEntryAdded,
                    params: {
                        level: "error",
                        source: t.source,
                        text: a,
                        timestamp: Math.round(e.timestamp),
                        stackTrace: Nh(e.exceptionDetails.stackTrace),
                        type: "javascript"
                    }
                }
            }), a => ({
                kind: "error",
                error: a
            })), o.id, rc.ChromiumBidi.Log.EventNames.LogEntryAdded)
    }
    )
}
,
Vc = new WeakSet,
gf = async function(e, t) {
    return e.exceptionDetails.exception ? t === void 0 ? JSON.stringify(e.exceptionDetails.exception) : await t.stringifyObject(e.exceptionDetails.exception) : e.exceptionDetails.text
}
,
u(zl, Vc);
Lu.LogManager = zl;
Yd = zl;
var Kl = {}
  , Hu = {};
Object.defineProperty(Hu, "__esModule", {
    value: !0
});
Hu.CollectorsStorage = void 0;
const ji = F
  , dd = De
  , Sv = Ft;
var Yt, zn, Kn, Wn, vr, Fs, mc, wf;
class Pv {
    constructor(e, t) {
        u(this, Fs);
        u(this, Yt, new Map);
        u(this, zn, new Map);
        u(this, Kn, new Map);
        u(this, Wn);
        u(this, vr);
        m(this, Wn, e),
        m(this, vr, t)
    }
    addDataCollector(e) {
        if (e.maxEncodedDataSize < 1 || e.maxEncodedDataSize > s(this, Wn))
            throw new ji.InvalidArgumentException(`Max encoded data size should be between 1 and ${s(this, Wn)}`);
        const t = (0,
        Sv.uuidv4)();
        return s(this, Yt).set(t, e),
        t
    }
    isCollected(e, t, r) {
        if (r !== void 0 && !s(this, Yt).has(r))
            throw new ji.NoSuchNetworkCollectorException(`Unknown collector ${r}`);
        if (t === void 0)
            return this.isCollected(e, "response", r) || this.isCollected(e, "request", r);
        const n = g(this, Fs, mc).call(this, t).get(e);
        return n === void 0 || n.size === 0 ? !1 : r === void 0 ? !0 : !!n.has(r)
    }
    disownData(e, t, r) {
        var o, a;
        const n = g(this, Fs, mc).call(this, t);
        r !== void 0 && ((o = n.get(e)) == null || o.delete(r)),
        (r === void 0 || ((a = n.get(e)) == null ? void 0 : a.size) === 0) && n.delete(e)
    }
    collectIfNeeded(e, t, r, n) {
        const o = [...s(this, Yt).keys()].filter(a => g(this, Fs, wf).call(this, a, e, t, r, n));
        o.length > 0 && g(this, Fs, mc).call(this, t).set(e.id, new Set(o))
    }
    removeDataCollector(e) {
        if (!s(this, Yt).has(e))
            throw new ji.NoSuchNetworkCollectorException(`Collector ${e} does not exist`);
        s(this, Yt).delete(e);
        const t = [];
        for (const [r,n] of s(this, zn))
            n.has(e) && (n.delete(e),
            n.size === 0 && (s(this, zn).delete(r),
            t.push(r)));
        for (const [r,n] of s(this, Kn))
            n.has(e) && (n.delete(e),
            n.size === 0 && (s(this, Kn).delete(r),
            t.push(r)));
        return t
    }
}
Yt = new WeakMap,
zn = new WeakMap,
Kn = new WeakMap,
Wn = new WeakMap,
vr = new WeakMap,
Fs = new WeakSet,
mc = function(e) {
    switch (e) {
    case "response":
        return s(this, zn);
    case "request":
        return s(this, Kn);
    default:
        throw new ji.UnsupportedOperationException(`Unsupported data type ${e}`)
    }
}
,
wf = function(e, t, r, n, o) {
    var c, p, h;
    const a = s(this, Yt).get(e);
    if (a === void 0)
        throw new ji.NoSuchNetworkCollectorException(`Unknown collector ${e}`);
    return a.userContexts && !a.userContexts.includes(o) || a.contexts && !a.contexts.includes(n) || !a.dataTypes.includes(r) ? !1 : r === "request" && t.bodySize > a.maxEncodedDataSize ? ((c = s(this, vr)) == null || c.call(this, dd.LogType.debug, `Request's ${t.id} body size is too big for the collector ${e}`),
    !1) : r === "response" && t.bytesReceived > a.maxEncodedDataSize ? ((p = s(this, vr)) == null || p.call(this, dd.LogType.debug, `Request's ${t.id} response is too big for the collector ${e}`),
    !1) : ((h = s(this, vr)) == null || h.call(this, dd.LogType.debug, `Collector ${e} collected ${r} of ${t.id}`),
    !0)
}
;
Hu.CollectorsStorage = Pv;
var zu = {}
  , Wa = {};
Object.defineProperty(Wa, "__esModule", {
    value: !0
});
Wa.DefaultMap = void 0;
var Ko;
class _v extends Map {
    constructor(t, r) {
        super(r);
        u(this, Ko);
        m(this, Ko, t)
    }
    get(t) {
        return this.has(t) || this.set(t, s(this, Ko).call(this, t)),
        super.get(t)
    }
}
Ko = new WeakMap;
Wa.DefaultMap = _v;
var gc;
Object.defineProperty(zu, "__esModule", {
    value: !0
});
zu.NetworkRequest = void 0;
const He = ee
  , en = as
  , Iv = Wa
  , Oh = Kr
  , ld = De
  , ie = ye
  , kv = new RegExp('(?<=realm=").*(?=")');
var Gn, be, Ge, ks, Vn, $, Et, Xn, U, Jn, St, Pt, br, Cr, R, Qd, Zd, yf, vf, bf, el, Ki, un, tl, Cf, xf, Ef, sl, dn, Ut, wc, rl, ln, hn, pn, yc, Sf, Pf, _f, If, kf, Tf, Df, vc, Xc, Nf;
class Rc {
    constructor(e, t, r, n, o=0, a) {
        u(this, R);
        u(this, Gn);
        u(this, be);
        u(this, Ge);
        u(this, ks, !1);
        u(this, Vn);
        u(this, $, {});
        u(this, Et);
        u(this, Xn);
        u(this, U, {});
        u(this, Jn);
        u(this, St);
        u(this, Pt);
        u(this, br);
        u(this, Cr, {
            [He.ChromiumBidi.Network.EventNames.AuthRequired]: !1,
            [He.ChromiumBidi.Network.EventNames.BeforeRequestSent]: !1,
            [He.ChromiumBidi.Network.EventNames.FetchError]: !1,
            [He.ChromiumBidi.Network.EventNames.ResponseCompleted]: !1,
            [He.ChromiumBidi.Network.EventNames.ResponseStarted]: !1
        });
        O(this, "waitNextPhase", new Oh.Deferred);
        m(this, Gn, e),
        m(this, Jn, t),
        m(this, St, r),
        m(this, Pt, n),
        m(this, Vn, o),
        m(this, br, a)
    }
    get id() {
        return s(this, Gn)
    }
    get fetchId() {
        return s(this, be)
    }
    get interceptPhase() {
        return s(this, Ge)
    }
    get url() {
        var r, n, o, a, c, p, h, d;
        const e = ((r = s(this, $).info) == null ? void 0 : r.request.urlFragment) ?? ((n = s(this, $).paused) == null ? void 0 : n.request.urlFragment) ?? "";
        return `${((o = s(this, U).paused) == null ? void 0 : o.request.url) ?? ((a = s(this, Et)) == null ? void 0 : a.url) ?? ((c = s(this, U).info) == null ? void 0 : c.url) ?? ((p = s(this, $).auth) == null ? void 0 : p.request.url) ?? ((h = s(this, $).info) == null ? void 0 : h.request.url) ?? ((d = s(this, $).paused) == null ? void 0 : d.request.url) ?? gc.unknownParameter}${e}`
    }
    get redirectCount() {
        return s(this, Vn)
    }
    get cdpTarget() {
        return s(this, Pt)
    }
    updateCdpTarget(e) {
        var t;
        e !== s(this, Pt) && ((t = s(this, br)) == null || t.call(this, ld.LogType.debugInfo, `Request ${this.id} was moved from ${s(this, Pt).id} to ${e.id}`),
        m(this, Pt, e))
    }
    get cdpClient() {
        return s(this, Pt).cdpClient
    }
    isRedirecting() {
        return !!s(this, $).info
    }
    get bodySize() {
        var e, t, r, n, o;
        return typeof ((e = s(this, Et)) == null ? void 0 : e.bodySize) == "number" ? s(this, Et).bodySize : ((t = s(this, $).info) == null ? void 0 : t.request.postDataEntries) !== void 0 ? (0,
        ie.bidiBodySizeFromCdpPostDataEntries)((r = s(this, $).info) == null ? void 0 : r.request.postDataEntries) : g(this, R, el).call(this, (n = s(this, $).info) == null ? void 0 : n.request.headers) ?? g(this, R, el).call(this, (o = s(this, $).extraInfo) == null ? void 0 : o.headers) ?? 0
    }
    handleRedirect(e) {
        s(this, U).hasExtraInfo = !1,
        s(this, U).info = e.redirectResponse,
        g(this, R, Ut).call(this, {
            wasRedirected: !0
        })
    }
    onRequestWillBeSentEvent(e) {
        s(this, $).info = e,
        s(this, St).collectIfNeeded(this, "request"),
        g(this, R, Ut).call(this)
    }
    onRequestWillBeSentExtraInfoEvent(e) {
        s(this, $).extraInfo = e,
        g(this, R, Ut).call(this)
    }
    onResponseReceivedExtraInfoEvent(e) {
        e.statusCode >= 300 && e.statusCode <= 399 && s(this, $).info && e.headers.location === s(this, $).info.request.url || (s(this, U).extraInfo = e,
        g(this, R, Ut).call(this))
    }
    onResponseReceivedEvent(e) {
        s(this, U).hasExtraInfo = e.hasExtraInfo,
        s(this, U).info = e.response,
        s(this, St).collectIfNeeded(this, "response"),
        g(this, R, Ut).call(this)
    }
    onServedFromCache() {
        m(this, ks, !0),
        g(this, R, Ut).call(this)
    }
    onLoadingFailedEvent(e) {
        g(this, R, Ut).call(this, {
            hasFailed: !0
        }),
        g(this, R, hn).call(this, () => ({
            method: He.ChromiumBidi.Network.EventNames.FetchError,
            params: {
                ...g(this, R, pn).call(this),
                errorText: e.errorText
            }
        }))
    }
    async failRequest(e) {
        (0,
        en.assert)(s(this, be), "Network Interception not set-up."),
        await this.cdpClient.sendCommand("Fetch.failRequest", {
            requestId: s(this, be),
            errorReason: e
        }),
        m(this, Ge, void 0)
    }
    onRequestPaused(e) {
        m(this, be, e.requestId),
        e.responseStatusCode || e.responseErrorReason ? (s(this, U).paused = e,
        g(this, R, dn).call(this, "responseStarted") && !s(this, Cr)[He.ChromiumBidi.Network.EventNames.ResponseStarted] && s(this, be) !== this.id ? m(this, Ge, "responseStarted") : g(this, R, rl).call(this)) : (s(this, $).paused = e,
        g(this, R, dn).call(this, "beforeRequestSent") && !s(this, Cr)[He.ChromiumBidi.Network.EventNames.BeforeRequestSent] && s(this, be) !== this.id ? m(this, Ge, "beforeRequestSent") : g(this, R, wc).call(this)),
        g(this, R, Ut).call(this)
    }
    onAuthRequired(e) {
        m(this, be, e.requestId),
        s(this, $).auth = e,
        g(this, R, dn).call(this, "authRequired") && s(this, be) !== this.id ? m(this, Ge, "authRequired") : g(this, R, ln).call(this, {
            response: "Default"
        }),
        g(this, R, hn).call(this, () => ({
            method: He.ChromiumBidi.Network.EventNames.AuthRequired,
            params: {
                ...g(this, R, pn).call(this, "authRequired"),
                response: g(this, R, yc).call(this)
            }
        }))
    }
    async continueRequest(e={}) {
        const t = g(this, R, vc).call(this, e.headers, e.cookies)
          , r = (0,
        ie.cdpFetchHeadersFromBidiNetworkHeaders)(t)
          , n = Rh(e.body);
        await g(this, R, wc).call(this, {
            url: e.url,
            method: e.method,
            headers: r,
            postData: n
        }),
        m(this, Et, {
            url: e.url,
            method: e.method,
            headers: e.headers,
            cookies: e.cookies,
            bodySize: Tv(e.body)
        })
    }
    async continueResponse(e={}) {
        var t, r, n;
        if (this.interceptPhase === "authRequired")
            if (e.credentials)
                await Promise.all([this.waitNextPhase, await g(this, R, ln).call(this, {
                    response: "ProvideCredentials",
                    username: e.credentials.username,
                    password: e.credentials.password
                })]);
            else
                return await g(this, R, ln).call(this, {
                    response: "ProvideCredentials"
                });
        if (s(this, Ge) === "responseStarted") {
            const o = g(this, R, vc).call(this, e.headers, e.cookies)
              , a = (0,
            ie.cdpFetchHeadersFromBidiNetworkHeaders)(o);
            await g(this, R, rl).call(this, {
                responseCode: e.statusCode ?? ((t = s(this, U).paused) == null ? void 0 : t.responseStatusCode),
                responsePhrase: e.reasonPhrase ?? ((r = s(this, U).paused) == null ? void 0 : r.responseStatusText),
                responseHeaders: a ?? ((n = s(this, U).paused) == null ? void 0 : n.responseHeaders)
            }),
            m(this, Xn, {
                statusCode: e.statusCode,
                headers: o
            })
        }
    }
    async continueWithAuth(e) {
        let t, r;
        if (e.action === "provideCredentials") {
            const {credentials: o} = e;
            t = o.username,
            r = o.password
        }
        const n = (0,
        ie.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction)(e.action);
        await g(this, R, ln).call(this, {
            response: n,
            username: t,
            password: r
        })
    }
    async provideResponse(e) {
        if ((0,
        en.assert)(s(this, be), "Network Interception not set-up."),
        this.interceptPhase === "authRequired")
            return await g(this, R, ln).call(this, {
                response: "ProvideCredentials"
            });
        if (!e.body && !e.headers)
            return await g(this, R, wc).call(this);
        const t = g(this, R, vc).call(this, e.headers, e.cookies)
          , r = (0,
        ie.cdpFetchHeadersFromBidiNetworkHeaders)(t)
          , n = e.statusCode ?? s(this, R, un) ?? 200;
        await this.cdpClient.sendCommand("Fetch.fulfillRequest", {
            requestId: s(this, be),
            responseCode: n,
            responsePhrase: e.reasonPhrase,
            responseHeaders: r,
            body: Rh(e.body)
        }),
        m(this, Ge, void 0)
    }
    dispose() {
        this.waitNextPhase.reject(new Error("waitNextPhase disposed"))
    }
    get bytesReceived() {
        var e;
        return ((e = s(this, U).info) == null ? void 0 : e.encodedDataLength) || 0
    }
}
Gn = new WeakMap,
be = new WeakMap,
Ge = new WeakMap,
ks = new WeakMap,
Vn = new WeakMap,
$ = new WeakMap,
Et = new WeakMap,
Xn = new WeakMap,
U = new WeakMap,
Jn = new WeakMap,
St = new WeakMap,
Pt = new WeakMap,
br = new WeakMap,
Cr = new WeakMap,
R = new WeakSet,
Qd = function() {
    return this.url.startsWith("data:")
}
,
Zd = function() {
    return g(this, R, Qd).call(this) || s(this, ks)
}
,
yf = function() {
    var e, t, r, n, o;
    return ((e = s(this, Et)) == null ? void 0 : e.method) ?? ((t = s(this, $).info) == null ? void 0 : t.request.method) ?? ((r = s(this, $).paused) == null ? void 0 : r.request.method) ?? ((n = s(this, $).auth) == null ? void 0 : n.request.method) ?? ((o = s(this, U).paused) == null ? void 0 : o.request.method)
}
,
vf = function() {
    return !s(this, $).info || !s(this, $).info.loaderId || s(this, $).info.loaderId !== s(this, $).info.requestId ? null : s(this, St).getNavigationId(s(this, R, Ki) ?? void 0)
}
,
bf = function() {
    let e = [];
    return s(this, $).extraInfo && (e = s(this, $).extraInfo.associatedCookies.filter( ({blockedReasons: t}) => !Array.isArray(t) || t.length === 0).map( ({cookie: t}) => (0,
    ie.cdpToBiDiCookie)(t))),
    e
}
,
el = function(e) {
    var t;
    if (e !== void 0 && e["Content-Length"] !== void 0) {
        const r = Number.parseInt(e["Content-Length"]);
        if (Number.isInteger(r))
            return r;
        (t = s(this, br)) == null || t.call(this, ld.LogType.debugError, "Unexpected non-integer 'Content-Length' header")
    }
}
,
Ki = function() {
    var t, r, n, o, a, c, p, h, d, l, w;
    const e = ((t = s(this, U).paused) == null ? void 0 : t.frameId) ?? ((r = s(this, $).info) == null ? void 0 : r.frameId) ?? ((n = s(this, $).paused) == null ? void 0 : n.frameId) ?? ((o = s(this, $).auth) == null ? void 0 : o.frameId);
    if (e !== void 0)
        return e;
    if (((c = (a = s(this, $)) == null ? void 0 : a.info) == null ? void 0 : c.initiator.type) === "preflight" && ((h = (p = s(this, $)) == null ? void 0 : p.info) == null ? void 0 : h.initiator.requestId) !== void 0) {
        const C = s(this, St).getRequestById((l = (d = s(this, $)) == null ? void 0 : d.info) == null ? void 0 : l.initiator.requestId);
        if (C !== void 0)
            return ((w = s(C, $).info) == null ? void 0 : w.frameId) ?? null
    }
    return null
}
,
un = function() {
    var e, t, r, n;
    return ((e = s(this, Xn)) == null ? void 0 : e.statusCode) ?? ((t = s(this, U).paused) == null ? void 0 : t.responseStatusCode) ?? ((r = s(this, U).extraInfo) == null ? void 0 : r.statusCode) ?? ((n = s(this, U).info) == null ? void 0 : n.status)
}
,
tl = function() {
    var t, r, n;
    let e = [];
    if ((t = s(this, Et)) != null && t.headers) {
        const o = new Iv.DefaultMap( () => []);
        for (const a of s(this, Et).headers)
            o.get(a.name).push(a.value.value);
        for (const [a,c] of o.entries())
            e.push({
                name: a,
                value: {
                    type: "string",
                    value: c.join(`
`).trimEnd()
                }
            })
    } else
        e = [...(0,
        ie.bidiNetworkHeadersFromCdpNetworkHeaders)((r = s(this, $).info) == null ? void 0 : r.request.headers), ...(0,
        ie.bidiNetworkHeadersFromCdpNetworkHeaders)((n = s(this, $).extraInfo) == null ? void 0 : n.headers)];
    return e
}
,
Cf = function() {
    var r;
    if (!s(this, U).info || !(s(this, R, un) === 401 || s(this, R, un) === 407))
        return;
    const e = s(this, R, un) === 401 ? "WWW-Authenticate" : "Proxy-Authenticate"
      , t = [];
    for (const [n,o] of Object.entries(s(this, U).info.headers))
        n.localeCompare(e, void 0, {
            sensitivity: "base"
        }) === 0 && t.push({
            scheme: o.split(" ").at(0) ?? "",
            realm: ((r = o.match(kv)) == null ? void 0 : r.at(0)) ?? ""
        });
    return t
}
,
xf = function() {
    var t, r, n, o, a, c, p, h, d, l, w, C, E, S, b, y, D, v, P, A, M, x;
    const e = (0,
    ie.getTiming)((0,
    ie.getTiming)((r = (t = s(this, U).info) == null ? void 0 : t.timing) == null ? void 0 : r.requestTime) - (0,
    ie.getTiming)((n = s(this, $).info) == null ? void 0 : n.timestamp));
    return {
        timeOrigin: Math.round((0,
        ie.getTiming)((o = s(this, $).info) == null ? void 0 : o.wallTime) * 1e3),
        requestTime: 0,
        redirectStart: 0,
        redirectEnd: 0,
        fetchStart: (0,
        ie.getTiming)((c = (a = s(this, U).info) == null ? void 0 : a.timing) == null ? void 0 : c.workerFetchStart, e),
        dnsStart: (0,
        ie.getTiming)((h = (p = s(this, U).info) == null ? void 0 : p.timing) == null ? void 0 : h.dnsStart, e),
        dnsEnd: (0,
        ie.getTiming)((l = (d = s(this, U).info) == null ? void 0 : d.timing) == null ? void 0 : l.dnsEnd, e),
        connectStart: (0,
        ie.getTiming)((C = (w = s(this, U).info) == null ? void 0 : w.timing) == null ? void 0 : C.connectStart, e),
        connectEnd: (0,
        ie.getTiming)((S = (E = s(this, U).info) == null ? void 0 : E.timing) == null ? void 0 : S.connectEnd, e),
        tlsStart: (0,
        ie.getTiming)((y = (b = s(this, U).info) == null ? void 0 : b.timing) == null ? void 0 : y.sslStart, e),
        requestStart: (0,
        ie.getTiming)((v = (D = s(this, U).info) == null ? void 0 : D.timing) == null ? void 0 : v.sendStart, e),
        responseStart: (0,
        ie.getTiming)((A = (P = s(this, U).info) == null ? void 0 : P.timing) == null ? void 0 : A.receiveHeadersStart, e),
        responseEnd: (0,
        ie.getTiming)((x = (M = s(this, U).info) == null ? void 0 : M.timing) == null ? void 0 : x.receiveHeadersEnd, e)
    }
}
,
Ef = function() {
    this.waitNextPhase.resolve(),
    this.waitNextPhase = new Oh.Deferred
}
,
sl = function(e) {
    return g(this, R, Zd).call(this) || !s(this, Pt).isSubscribedTo(`network.${e}`) ? new Set : s(this, St).getInterceptsForPhase(this, e)
}
,
dn = function(e) {
    return g(this, R, sl).call(this, e).size > 0
}
,
Ut = function(e={}) {
    const t = e.wasRedirected || e.hasFailed || g(this, R, Qd).call(this) || !!s(this, $).extraInfo || s(this, ks) || !!(s(this, U).info && !s(this, U).hasExtraInfo)
      , r = g(this, R, Zd).call(this)
      , n = !r && g(this, R, dn).call(this, "beforeRequestSent")
      , o = !n || n && !!s(this, $).paused;
    s(this, $).info && (n ? o : t) && g(this, R, hn).call(this, g(this, R, If).bind(this));
    const a = !!s(this, U).extraInfo || s(this, ks) || !!(s(this, U).info && !s(this, U).hasExtraInfo)
      , c = !r && g(this, R, dn).call(this, "responseStarted");
    (s(this, U).info || c && s(this, U).paused) && g(this, R, hn).call(this, g(this, R, kf).bind(this));
    const p = !c || c && !!s(this, U).paused;
    s(this, U).info && a && p && (g(this, R, hn).call(this, g(this, R, Tf).bind(this)),
    s(this, St).disposeRequest(this.id))
}
,
wc = async function(e={}) {
    (0,
    en.assert)(s(this, be), "Network Interception not set-up."),
    await this.cdpClient.sendCommand("Fetch.continueRequest", {
        requestId: s(this, be),
        url: e.url,
        method: e.method,
        headers: e.headers,
        postData: e.postData
    }),
    m(this, Ge, void 0)
}
,
rl = async function({responseCode: e, responsePhrase: t, responseHeaders: r}={}) {
    (0,
    en.assert)(s(this, be), "Network Interception not set-up."),
    await this.cdpClient.sendCommand("Fetch.continueResponse", {
        requestId: s(this, be),
        responseCode: e,
        responsePhrase: t,
        responseHeaders: r
    }),
    m(this, Ge, void 0)
}
,
ln = async function(e) {
    (0,
    en.assert)(s(this, be), "Network Interception not set-up."),
    await this.cdpClient.sendCommand("Fetch.continueWithAuth", {
        requestId: s(this, be),
        authChallengeResponse: e
    }),
    m(this, Ge, void 0)
}
,
hn = function(e) {
    var r;
    let t;
    try {
        t = e()
    } catch (n) {
        (r = s(this, br)) == null || r.call(this, ld.LogType.debugError, n);
        return
    }
    g(this, R, Df).call(this) || s(this, Cr)[t.method] && t.method !== He.ChromiumBidi.Network.EventNames.AuthRequired || (g(this, R, Ef).call(this),
    s(this, Cr)[t.method] = !0,
    s(this, R, Ki) ? s(this, Jn).registerEvent(Object.assign(t, {
        type: "event"
    }), s(this, R, Ki)) : s(this, Jn).registerGlobalEvent(Object.assign(t, {
        type: "event"
    })))
}
,
pn = function(e) {
    var r;
    const t = {
        isBlocked: !1
    };
    if (e) {
        const n = g(this, R, sl).call(this, e);
        t.isBlocked = n.size > 0,
        t.isBlocked && (t.intercepts = [...n])
    }
    return {
        context: s(this, R, Ki),
        navigation: s(this, R, vf),
        redirectCount: s(this, Vn),
        request: g(this, R, Sf).call(this),
        timestamp: Math.round((0,
        ie.getTiming)((r = s(this, $).info) == null ? void 0 : r.wallTime) * 1e3),
        ...t
    }
}
,
yc = function() {
    var a, c, p, h, d, l, w, C, E, S, b;
    (a = s(this, U).info) != null && a.fromDiskCache && (s(this, U).extraInfo = void 0);
    const e = ((c = s(this, U).info) == null ? void 0 : c.headers) ?? {}
      , t = ((p = s(this, U).extraInfo) == null ? void 0 : p.headers) ?? {};
    for (const [y,D] of Object.entries(t))
        e[y] = D;
    const r = (0,
    ie.bidiNetworkHeadersFromCdpNetworkHeaders)(e)
      , n = s(this, R, Cf);
    return {
        ...{
            url: this.url,
            protocol: ((h = s(this, U).info) == null ? void 0 : h.protocol) ?? "",
            status: s(this, R, un) ?? -1,
            statusText: ((d = s(this, U).info) == null ? void 0 : d.statusText) || ((l = s(this, U).paused) == null ? void 0 : l.responseStatusText) || "",
            fromCache: ((w = s(this, U).info) == null ? void 0 : w.fromDiskCache) || ((C = s(this, U).info) == null ? void 0 : C.fromPrefetchCache) || s(this, ks),
            headers: ((E = s(this, Xn)) == null ? void 0 : E.headers) ?? r,
            mimeType: ((S = s(this, U).info) == null ? void 0 : S.mimeType) || "",
            bytesReceived: this.bytesReceived,
            headersSize: (0,
            ie.computeHeadersSize)(r),
            bodySize: 0,
            content: {
                size: 0
            },
            ...n ? {
                authChallenges: n
            } : {}
        },
        "goog:securityDetails": (b = s(this, U).info) == null ? void 0 : b.securityDetails
    }
}
,
Sf = function() {
    var r, n, o, a, c, p;
    const e = s(this, R, tl);
    return {
        ...{
            request: s(this, Gn),
            url: this.url,
            method: s(this, R, yf) ?? gc.unknownParameter,
            headers: e,
            cookies: s(this, R, bf),
            headersSize: (0,
            ie.computeHeadersSize)(e),
            bodySize: this.bodySize,
            destination: g(this, R, Pf).call(this),
            initiatorType: g(this, R, _f).call(this),
            timings: s(this, R, xf)
        },
        "goog:postData": (n = (r = s(this, $).info) == null ? void 0 : r.request) == null ? void 0 : n.postData,
        "goog:hasPostData": (a = (o = s(this, $).info) == null ? void 0 : o.request) == null ? void 0 : a.hasPostData,
        "goog:resourceType": (c = s(this, $).info) == null ? void 0 : c.type,
        "goog:resourceInitiator": (p = s(this, $).info) == null ? void 0 : p.initiator
    }
}
,
Pf = function() {
    var e, t;
    switch ((e = s(this, $).info) == null ? void 0 : e.type) {
    case "Script":
        return "script";
    case "Stylesheet":
        return "style";
    case "Image":
        return "image";
    case "Document":
        return ((t = s(this, $).info) == null ? void 0 : t.initiator.type) === "parser" ? "iframe" : "document";
    default:
        return ""
    }
}
,
_f = function() {
    var e, t, r, n, o, a, c, p, h, d;
    if (((e = s(this, $).info) == null ? void 0 : e.initiator.type) === "parser")
        switch ((t = s(this, $).info) == null ? void 0 : t.type) {
        case "Document":
            return "iframe";
        case "Font":
            return ((n = (r = s(this, $).info) == null ? void 0 : r.initiator) == null ? void 0 : n.url) === ((o = s(this, $).info) == null ? void 0 : o.documentURL) ? "font" : "css";
        case "Image":
            return ((c = (a = s(this, $).info) == null ? void 0 : a.initiator) == null ? void 0 : c.url) === ((p = s(this, $).info) == null ? void 0 : p.documentURL) ? "img" : "css";
        case "Script":
            return "script";
        case "Stylesheet":
            return "link";
        default:
            return null
        }
    return ((d = (h = s(this, $)) == null ? void 0 : h.info) == null ? void 0 : d.type) === "Fetch" ? "fetch" : null
}
,
If = function() {
    var e;
    return (0,
    en.assert)(s(this, $).info, "RequestWillBeSentEvent is not set"),
    {
        method: He.ChromiumBidi.Network.EventNames.BeforeRequestSent,
        params: {
            ...g(this, R, pn).call(this, "beforeRequestSent"),
            initiator: {
                type: g(e = gc, Xc, Nf).call(e, s(this, $).info.initiator.type),
                columnNumber: s(this, $).info.initiator.columnNumber,
                lineNumber: s(this, $).info.initiator.lineNumber,
                stackTrace: s(this, $).info.initiator.stack,
                request: s(this, $).info.initiator.requestId
            }
        }
    }
}
,
kf = function() {
    return {
        method: He.ChromiumBidi.Network.EventNames.ResponseStarted,
        params: {
            ...g(this, R, pn).call(this, "responseStarted"),
            response: g(this, R, yc).call(this)
        }
    }
}
,
Tf = function() {
    return {
        method: He.ChromiumBidi.Network.EventNames.ResponseCompleted,
        params: {
            ...g(this, R, pn).call(this),
            response: g(this, R, yc).call(this)
        }
    }
}
,
Df = function() {
    var t, r;
    const e = "/favicon.ico";
    return ((t = s(this, $).paused) == null ? void 0 : t.request.url.endsWith(e)) ?? ((r = s(this, $).info) == null ? void 0 : r.request.url.endsWith(e)) ?? !1
}
,
vc = function(e, t) {
    if (!e && !t)
        return;
    let r = e;
    const n = (0,
    ie.networkHeaderFromCookieHeaders)(t);
    return n && !r && (r = s(this, R, tl)),
    n && r && (r.filter(o => o.name.localeCompare("cookie", void 0, {
        sensitivity: "base"
    }) !== 0),
    r.push(n)),
    r
}
,
Xc = new WeakSet,
Nf = function(e) {
    switch (e) {
    case "parser":
    case "script":
    case "preflight":
        return e;
    default:
        return "other"
    }
}
,
u(Rc, Xc),
O(Rc, "unknownParameter", "UNKNOWN");
zu.NetworkRequest = Rc;
gc = Rc;
function Rh(i) {
    let e;
    return (i == null ? void 0 : i.type) === "string" ? e = (0,
    ie.stringToBase64)(i.value) : (i == null ? void 0 : i.type) === "base64" && (e = i.value),
    e
}
function Tv(i) {
    return (i == null ? void 0 : i.type) === "string" ? i.value.length : (i == null ? void 0 : i.type) === "base64" ? atob(i.value).length : 0
}
(function(i) {
    var c, p, h, d, l, w, C, E, wt, Of, Rf;
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.NetworkStorage = i.MAX_TOTAL_COLLECTED_SIZE = void 0;
    const e = ee
      , t = Ft
      , r = Hu
      , n = zu
      , o = ye;
    i.MAX_TOTAL_COLLECTED_SIZE = 2e8;
    class a {
        constructor(v, P, A, M) {
            u(this, E);
            u(this, c);
            u(this, p);
            u(this, h);
            u(this, d);
            u(this, l, new Map);
            u(this, w, new Map);
            u(this, C, "default");
            m(this, c, P),
            m(this, p, v),
            m(this, h, new r.CollectorsStorage(i.MAX_TOTAL_COLLECTED_SIZE,M)),
            A.on("Target.detachedFromTarget", ({sessionId: x}) => {
                this.disposeRequestMap(x)
            }
            ),
            m(this, d, M)
        }
        onCdpTargetCreated(v) {
            const P = v.cdpClient
              , A = [["Network.requestWillBeSent", M => {
                const x = this.getRequestById(M.requestId);
                x == null || x.updateCdpTarget(v),
                x && x.isRedirecting() ? (x.handleRedirect(M),
                this.disposeRequest(M.requestId),
                g(this, E, wt).call(this, M.requestId, v, x.redirectCount + 1).onRequestWillBeSentEvent(M)) : g(this, E, wt).call(this, M.requestId, v).onRequestWillBeSentEvent(M)
            }
            ], ["Network.requestWillBeSentExtraInfo", M => {
                const x = g(this, E, wt).call(this, M.requestId, v);
                x.updateCdpTarget(v),
                x.onRequestWillBeSentExtraInfoEvent(M)
            }
            ], ["Network.responseReceived", M => {
                const x = g(this, E, wt).call(this, M.requestId, v);
                x.updateCdpTarget(v),
                x.onResponseReceivedEvent(M)
            }
            ], ["Network.responseReceivedExtraInfo", M => {
                const x = g(this, E, wt).call(this, M.requestId, v);
                x.updateCdpTarget(v),
                x.onResponseReceivedExtraInfoEvent(M)
            }
            ], ["Network.requestServedFromCache", M => {
                const x = g(this, E, wt).call(this, M.requestId, v);
                x.updateCdpTarget(v),
                x.onServedFromCache()
            }
            ], ["Network.loadingFailed", M => {
                const x = g(this, E, wt).call(this, M.requestId, v);
                x.updateCdpTarget(v),
                x.onLoadingFailedEvent(M)
            }
            ], ["Fetch.requestPaused", M => {
                const x = g(this, E, wt).call(this, M.networkId ?? M.requestId, v);
                x.updateCdpTarget(v),
                x.onRequestPaused(M)
            }
            ], ["Fetch.authRequired", M => {
                let x = this.getRequestByFetchId(M.requestId);
                x || (x = g(this, E, wt).call(this, M.requestId, v)),
                x.updateCdpTarget(v),
                x.onAuthRequired(M)
            }
            ], ["Network.dataReceived", M => {
                var x;
                (x = this.getRequestById(M.requestId)) == null || x.updateCdpTarget(v)
            }
            ], ["Network.loadingFinished", M => {
                var x;
                (x = this.getRequestById(M.requestId)) == null || x.updateCdpTarget(v)
            }
            ]];
            for (const [M,x] of A)
                P.on(M, x)
        }
        async getCollectedData(v) {
            if (!s(this, h).isCollected(v.request, v.dataType, v.collector))
                throw new e.NoSuchNetworkDataException(v.collector === void 0 ? `No collected ${v.dataType} data` : `Collector ${v.collector} didn't collect ${v.dataType} data`);
            if (v.disown && v.collector === void 0)
                throw new e.InvalidArgumentException("Cannot disown collected data without collector ID");
            const P = this.getRequestById(v.request);
            if (P === void 0)
                throw new e.NoSuchNetworkDataException(`No data for ${v.request}`);
            let A;
            switch (v.dataType) {
            case "response":
                A = await g(this, E, Of).call(this, P);
                break;
            case "request":
                A = await g(this, E, Rf).call(this, P);
                break;
            default:
                throw new e.UnsupportedOperationException(`Unsupported data type ${v.dataType}`)
            }
            return v.disown && v.collector !== void 0 && (s(this, h).disownData(P.id, v.dataType, v.collector),
            this.disposeRequest(P.id)),
            A
        }
        collectIfNeeded(v, P) {
            s(this, h).collectIfNeeded(v, P, v.cdpTarget.topLevelId, v.cdpTarget.userContext)
        }
        getInterceptionStages(v) {
            const P = {
                request: !1,
                response: !1,
                auth: !1
            };
            for (const A of s(this, w).values())
                A.contexts && !A.contexts.includes(v) || (P.request || (P.request = A.phases.includes("beforeRequestSent")),
                P.response || (P.response = A.phases.includes("responseStarted")),
                P.auth || (P.auth = A.phases.includes("authRequired")));
            return P
        }
        getInterceptsForPhase(v, P) {
            if (v.url === n.NetworkRequest.unknownParameter)
                return new Set;
            const A = new Set;
            for (const [M,x] of s(this, w).entries())
                if (!(!x.phases.includes(P) || x.contexts && !x.contexts.includes(v.cdpTarget.topLevelId))) {
                    if (x.urlPatterns.length === 0) {
                        A.add(M);
                        continue
                    }
                    for (const f of x.urlPatterns)
                        if ((0,
                        o.matchUrlPattern)(f, v.url)) {
                            A.add(M);
                            break
                        }
                }
            return A
        }
        disposeRequestMap(v) {
            for (const P of s(this, l).values())
                P.cdpClient.sessionId === v && (s(this, l).delete(P.id),
                P.dispose())
        }
        addIntercept(v) {
            const P = (0,
            t.uuidv4)();
            return s(this, w).set(P, v),
            P
        }
        removeIntercept(v) {
            if (!s(this, w).has(v))
                throw new e.NoSuchInterceptException(`Intercept '${v}' does not exist.`);
            s(this, w).delete(v)
        }
        getRequestsByTarget(v) {
            const P = [];
            for (const A of s(this, l).values())
                A.cdpTarget === v && P.push(A);
            return P
        }
        getRequestById(v) {
            return s(this, l).get(v)
        }
        getRequestByFetchId(v) {
            for (const P of s(this, l).values())
                if (P.fetchId === v)
                    return P
        }
        addRequest(v) {
            s(this, l).set(v.id, v)
        }
        disposeRequest(v) {
            s(this, h).isCollected(v) || s(this, l).delete(v)
        }
        getNavigationId(v) {
            var P;
            return v === void 0 ? null : ((P = s(this, c).findContext(v)) == null ? void 0 : P.navigationId) ?? null
        }
        set defaultCacheBehavior(v) {
            m(this, C, v)
        }
        get defaultCacheBehavior() {
            return s(this, C)
        }
        addDataCollector(v) {
            return s(this, h).addDataCollector(v)
        }
        removeDataCollector(v) {
            s(this, h).removeDataCollector(v.collector).map(A => this.disposeRequest(A))
        }
        disownData(v) {
            if (!s(this, h).isCollected(v.request, v.dataType, v.collector))
                throw new e.NoSuchNetworkDataException(`Collector ${v.collector} didn't collect ${v.dataType} data`);
            s(this, h).disownData(v.request, v.dataType, v.collector),
            this.disposeRequest(v.request)
        }
    }
    c = new WeakMap,
    p = new WeakMap,
    h = new WeakMap,
    d = new WeakMap,
    l = new WeakMap,
    w = new WeakMap,
    C = new WeakMap,
    E = new WeakSet,
    wt = function(v, P, A) {
        let M = this.getRequestById(v);
        return A === void 0 && M || (M = new n.NetworkRequest(v,s(this, p),this,P,A,s(this, d)),
        this.addRequest(M)),
        M
    }
    ,
    Of = async function(v) {
        try {
            const P = await v.cdpClient.sendCommand("Network.getResponseBody", {
                requestId: v.id
            });
            return {
                bytes: {
                    type: P.base64Encoded ? "base64" : "string",
                    value: P.body
                }
            }
        } catch (P) {
            throw P.code === -32e3 && P.message === "No resource with given identifier found" ? new e.NoSuchNetworkDataException("Response data was disposed") : P.code === -32001 ? new e.NoSuchNetworkDataException("Response data is disposed after the related page") : P
        }
    }
    ,
    Rf = async function(v) {
        return {
            bytes: {
                type: "string",
                value: (await v.cdpClient.sendCommand("Network.getRequestPostData", {
                    requestId: v.id
                })).postData
            }
        }
    }
    ,
    i.NetworkStorage = a
}
)(Kl);
Object.defineProperty(Uu, "__esModule", {
    value: !0
});
Uu.CdpTarget = void 0;
const Ah = ve
  , tn = ee
  , Dv = Kr
  , ds = De
  , Nv = Di
  , Ov = Lu
  , Rv = Kl;
var Wo, fe, Yn, Qn, Go, xr, Zn, Ts, _t, Vo, Ve, ei, ti, si, ri, $e, re, Af, il, Wi, Mf, Bf, jf, Ff, $f, Uf, Lf, qf;
const Xl = class Xl {
    constructor(e, t, r, n, o, a, c, p, h, d, l, w) {
        u(this, re);
        u(this, Wo);
        O(this, "userContext");
        u(this, fe);
        u(this, Yn);
        u(this, Qn);
        u(this, Go);
        u(this, xr);
        u(this, Zn);
        u(this, Ts);
        u(this, _t);
        O(this, "contextConfigStorage");
        u(this, Vo, new Dv.Deferred);
        u(this, Ve);
        u(this, ei);
        u(this, ti, !1);
        u(this, si, !1);
        u(this, ri, !1);
        u(this, $e, {
            request: !1,
            response: !1,
            auth: !1
        });
        this.userContext = l,
        m(this, Wo, e),
        m(this, fe, t),
        m(this, Yn, r),
        m(this, Qn, n),
        m(this, xr, o),
        m(this, Go, a),
        m(this, Zn, c),
        m(this, _t, d),
        m(this, Ts, p),
        this.contextConfigStorage = h,
        m(this, Ve, w)
    }
    static create(e, t, r, n, o, a, c, p, h, d, l, w) {
        var E, S;
        const C = new Xl(e,t,r,n,a,o,c,p,d,h,l,w);
        return Ov.LogManager.create(C, o, a, w),
        g(E = C, re, Mf).call(E),
        g(S = C, re, Af).call(S),
        C
    }
    get unblocked() {
        return s(this, Vo)
    }
    get id() {
        return s(this, Wo)
    }
    get cdpClient() {
        return s(this, fe)
    }
    get parentCdpClient() {
        return s(this, Qn)
    }
    get browserCdpClient() {
        return s(this, Yn)
    }
    get cdpSessionId() {
        return s(this, fe).sessionId
    }
    get windowId() {
        var e;
        return s(this, ei) === void 0 && ((e = s(this, Ve)) == null || e.call(this, ds.LogType.debugError, "Getting windowId before it was set, returning 0")),
        s(this, ei) ?? 0
    }
    async toggleFetchIfNeeded() {
        const e = s(this, _t).getInterceptionStages(this.topLevelId);
        if (s(this, $e).request === e.request && s(this, $e).response === e.response && s(this, $e).auth === e.auth)
            return;
        const t = [];
        if (m(this, $e, e),
        (e.request || e.auth) && t.push({
            urlPattern: "*",
            requestStage: "Request"
        }),
        e.response && t.push({
            urlPattern: "*",
            requestStage: "Response"
        }),
        t.length)
            await s(this, fe).sendCommand("Fetch.enable", {
                patterns: t,
                handleAuthRequests: e.auth
            });
        else {
            const r = s(this, _t).getRequestsByTarget(this).filter(n => n.interceptPhase);
            Promise.allSettled(r.map(n => n.waitNextPhase)).then(async () => s(this, _t).getRequestsByTarget(this).filter(o => o.interceptPhase).length ? await this.toggleFetchIfNeeded() : await s(this, fe).sendCommand("Fetch.disable")).catch(n => {
                var o;
                (o = s(this, Ve)) == null || o.call(this, ds.LogType.bidi, "Disable failed", n)
            }
            )
        }
    }
    async toggleNetworkIfNeeded() {
        var e;
        try {
            await Promise.all([this.toggleSetCacheDisabled(), this.toggleFetchIfNeeded()])
        } catch (t) {
            if ((e = s(this, Ve)) == null || e.call(this, ds.LogType.debugError, t),
            !g(this, re, Wi).call(this, t))
                throw t
        }
    }
    async toggleSetCacheDisabled(e) {
        var n;
        const t = s(this, _t).defaultCacheBehavior === "bypass"
          , r = e ?? t;
        if (s(this, si) !== r) {
            m(this, si, r);
            try {
                await s(this, fe).sendCommand("Network.setCacheDisabled", {
                    cacheDisabled: r
                })
            } catch (o) {
                if ((n = s(this, Ve)) == null || n.call(this, ds.LogType.debugError, o),
                m(this, si, !r),
                !g(this, re, Wi).call(this, o))
                    throw o
            }
        }
    }
    async toggleDeviceAccessIfNeeded() {
        var t;
        const e = this.isSubscribedTo(Ah.Bluetooth.EventNames.RequestDevicePromptUpdated);
        if (s(this, ti) !== e) {
            m(this, ti, e);
            try {
                await s(this, fe).sendCommand(e ? "DeviceAccess.enable" : "DeviceAccess.disable")
            } catch (r) {
                if ((t = s(this, Ve)) == null || t.call(this, ds.LogType.debugError, r),
                m(this, ti, !e),
                !g(this, re, Wi).call(this, r))
                    throw r
            }
        }
    }
    async togglePreloadIfNeeded() {
        var t;
        const e = this.isSubscribedTo(Ah.Speculation.EventNames.PrefetchStatusUpdated);
        if (s(this, ri) !== e) {
            m(this, ri, e);
            try {
                await s(this, fe).sendCommand(e ? "Preload.enable" : "Preload.disable")
            } catch (r) {
                if ((t = s(this, Ve)) == null || t.call(this, ds.LogType.debugError, r),
                m(this, ri, !e),
                !g(this, re, Wi).call(this, r))
                    throw r
            }
        }
    }
    async toggleNetwork() {
        var n;
        const e = s(this, _t).getInterceptionStages(this.topLevelId)
          , t = Object.values(e).some(o => o)
          , r = s(this, $e).request !== e.request || s(this, $e).response !== e.response || s(this, $e).auth !== e.auth;
        (n = s(this, Ve)) == null || n.call(this, ds.LogType.debugInfo, "Toggle Network", `Fetch (${t}) ${r}`),
        t && r && await g(this, re, Bf).call(this, e),
        !t && r && await g(this, re, jf).call(this)
    }
    getChannels() {
        return s(this, Zn).find().flatMap(e => e.channels)
    }
    async setDeviceMetricsOverride(e, t, r) {
        if (e === null && t === null && r === null) {
            await this.cdpClient.sendCommand("Emulation.clearDeviceMetricsOverride");
            return
        }
        const n = {
            width: (e == null ? void 0 : e.width) ?? 0,
            height: (e == null ? void 0 : e.height) ?? 0,
            deviceScaleFactor: t ?? 0,
            screenOrientation: g(this, re, qf).call(this, r) ?? void 0,
            mobile: !1
        };
        await this.cdpClient.sendCommand("Emulation.setDeviceMetricsOverride", n)
    }
    get topLevelId() {
        return s(this, Ts).findTopLevelContextId(this.id) ?? this.id
    }
    isSubscribedTo(e) {
        return s(this, xr).subscriptionManager.isSubscribedTo(e, this.topLevelId)
    }
    async setGeolocationOverride(e) {
        if (e === null)
            await this.cdpClient.sendCommand("Emulation.clearGeolocationOverride");
        else if ("type"in e) {
            if (e.type !== "positionUnavailable")
                throw new tn.UnknownErrorException(`Unknown geolocation error ${e.type}`);
            await this.cdpClient.sendCommand("Emulation.setGeolocationOverride", {})
        } else if ("latitude"in e)
            await this.cdpClient.sendCommand("Emulation.setGeolocationOverride", {
                latitude: e.latitude,
                longitude: e.longitude,
                accuracy: e.accuracy ?? 1,
                altitude: e.altitude ?? void 0,
                altitudeAccuracy: e.altitudeAccuracy ?? void 0,
                heading: e.heading ?? void 0,
                speed: e.speed ?? void 0
            });
        else
            throw new tn.UnknownErrorException("Unexpected geolocation coordinates value")
    }
    async setLocaleOverride(e) {
        e === null ? await this.cdpClient.sendCommand("Emulation.setLocaleOverride", {}) : await this.cdpClient.sendCommand("Emulation.setLocaleOverride", {
            locale: e
        })
    }
    async setScriptingEnabled(e) {
        await this.cdpClient.sendCommand("Emulation.setScriptExecutionDisabled", {
            value: e === !1
        })
    }
    async setTimezoneOverride(e) {
        e === null ? await this.cdpClient.sendCommand("Emulation.setTimezoneOverride", {
            timezoneId: ""
        }) : await this.cdpClient.sendCommand("Emulation.setTimezoneOverride", {
            timezoneId: e
        })
    }
    async setExtraHeaders(e) {
        await this.cdpClient.sendCommand("Network.setExtraHTTPHeaders", {
            headers: e
        })
    }
    async setUserAgentAndAcceptLanguage(e, t) {
        await this.cdpClient.sendCommand("Emulation.setUserAgentOverride", {
            userAgent: e ?? "",
            acceptLanguage: t ?? void 0
        })
    }
    async setEmulatedNetworkConditions(e) {
        if (e !== null && e.type !== "offline")
            throw new tn.UnsupportedOperationException(`Unsupported network conditions ${e.type}`);
        await Promise.all([this.cdpClient.sendCommand("Network.emulateNetworkConditionsByRule", {
            offline: (e == null ? void 0 : e.type) === "offline",
            matchedNetworkConditions: [{
                urlPattern: "",
                latency: 0,
                downloadThroughput: -1,
                uploadThroughput: -1
            }]
        }), this.cdpClient.sendCommand("Network.overrideNetworkState", {
            offline: (e == null ? void 0 : e.type) === "offline",
            latency: 0,
            downloadThroughput: -1,
            uploadThroughput: -1
        })])
    }
}
;
Wo = new WeakMap,
fe = new WeakMap,
Yn = new WeakMap,
Qn = new WeakMap,
Go = new WeakMap,
xr = new WeakMap,
Zn = new WeakMap,
Ts = new WeakMap,
_t = new WeakMap,
Vo = new WeakMap,
Ve = new WeakMap,
ei = new WeakMap,
ti = new WeakMap,
si = new WeakMap,
ri = new WeakMap,
$e = new WeakMap,
re = new WeakSet,
Af = async function() {
    var r;
    const e = this.contextConfigStorage.getActiveConfig(this.topLevelId, this.userContext)
      , t = await Promise.allSettled([s(this, fe).sendCommand("Page.enable", {
        enableFileChooserOpenedEvent: !0
    }), ...g(this, re, Lf).call(this) ? [] : [s(this, fe).sendCommand("Page.setInterceptFileChooserDialog", {
        enabled: !0,
        cancel: !0
    })], s(this, fe).sendCommand("Page.getFrameTree").then(n => g(this, re, il).call(this, n.frameTree)), s(this, fe).sendCommand("Runtime.enable"), s(this, fe).sendCommand("Page.setLifecycleEventsEnabled", {
        enabled: !0
    }), s(this, fe).sendCommand("Network.enable", {
        enableDurableMessages: e.disableNetworkDurableMessages !== !0,
        maxTotalBufferSize: Rv.MAX_TOTAL_COLLECTED_SIZE
    }).then( () => this.toggleNetworkIfNeeded()), s(this, fe).sendCommand("Target.setAutoAttach", {
        autoAttach: !0,
        waitForDebuggerOnStart: !0,
        flatten: !0
    }), g(this, re, Ff).call(this), g(this, re, Uf).call(this, e), g(this, re, $f).call(this), s(this, fe).sendCommand("Runtime.runIfWaitingForDebugger"), s(this, Qn).sendCommand("Runtime.runIfWaitingForDebugger"), this.toggleDeviceAccessIfNeeded(), this.togglePreloadIfNeeded()]);
    for (const n of t)
        n instanceof Error && ((r = s(this, Ve)) == null || r.call(this, ds.LogType.debugError, "Error happened when configuring a new target", n));
    s(this, Vo).resolve({
        kind: "success",
        value: void 0
    })
}
,
il = function(e) {
    var n;
    const t = e.frame
      , r = s(this, Ts).findContext(t.id);
    if (r !== void 0 && r.parentId === null && t.parentId !== null && t.parentId !== void 0 && (r.parentId = t.parentId),
    r === void 0 && t.parentId !== void 0) {
        const o = s(this, Ts).getContext(t.parentId);
        Nv.BrowsingContextImpl.create(t.id, t.parentId, this.userContext, o.cdpTarget, s(this, xr), s(this, Ts), s(this, Go), this.contextConfigStorage, t.url, void 0, s(this, Ve))
    }
    (n = e.childFrames) == null || n.map(o => g(this, re, il).call(this, o))
}
,
Wi = function(e) {
    const t = e;
    return t.code === -32001 && t.message === "Session with given id not found." || s(this, fe).isCloseError(e)
}
,
Mf = function() {
    s(this, fe).on("*", (e, t) => {
        typeof e == "string" && s(this, xr).registerEvent({
            type: "event",
            method: `goog:cdp.${e}`,
            params: {
                event: e,
                params: t,
                session: this.cdpSessionId
            }
        }, this.id)
    }
    )
}
,
Bf = async function(e) {
    const t = [];
    if ((e.request || e.auth) && t.push({
        urlPattern: "*",
        requestStage: "Request"
    }),
    e.response && t.push({
        urlPattern: "*",
        requestStage: "Response"
    }),
    t.length) {
        const r = s(this, $e);
        m(this, $e, e);
        try {
            await s(this, fe).sendCommand("Fetch.enable", {
                patterns: t,
                handleAuthRequests: e.auth
            })
        } catch {
            m(this, $e, r)
        }
    }
}
,
jf = async function() {
    s(this, _t).getRequestsByTarget(this).filter(t => t.interceptPhase).length === 0 && (m(this, $e, {
        request: !1,
        response: !1,
        auth: !1
    }),
    await s(this, fe).sendCommand("Fetch.disable"))
}
,
Ff = async function() {
    const {windowId: e} = await s(this, Yn).sendCommand("Browser.getWindowForTarget", {
        targetId: this.id
    });
    m(this, ei, e)
}
,
$f = async function() {
    await Promise.all(s(this, Zn).find({
        targetId: this.topLevelId
    }).map(e => e.initInTarget(this, !0)))
}
,
Uf = async function(e) {
    const t = [];
    t.push(s(this, fe).sendCommand("Page.setPrerenderingAllowed", {
        isAllowed: !e.prerenderingDisabled
    }).catch( () => {}
    )),
    (e.viewport !== void 0 || e.devicePixelRatio !== void 0 || e.screenOrientation !== void 0) && t.push(this.setDeviceMetricsOverride(e.viewport ?? null, e.devicePixelRatio ?? null, e.screenOrientation ?? null).catch( () => {}
    )),
    e.geolocation !== void 0 && e.geolocation !== null && t.push(this.setGeolocationOverride(e.geolocation)),
    e.locale !== void 0 && t.push(this.setLocaleOverride(e.locale)),
    e.timezone !== void 0 && t.push(this.setTimezoneOverride(e.timezone)),
    e.extraHeaders !== void 0 && t.push(this.setExtraHeaders(e.extraHeaders)),
    (e.userAgent !== void 0 || e.locale !== void 0) && t.push(this.setUserAgentAndAcceptLanguage(e.userAgent, e.locale)),
    e.scriptingEnabled !== void 0 && t.push(this.setScriptingEnabled(e.scriptingEnabled)),
    e.acceptInsecureCerts !== void 0 && t.push(this.cdpClient.sendCommand("Security.setIgnoreCertificateErrors", {
        ignore: e.acceptInsecureCerts
    })),
    e.emulatedNetworkConditions !== void 0 && t.push(this.setEmulatedNetworkConditions(e.emulatedNetworkConditions)),
    await Promise.all(t)
}
,
Lf = function() {
    var t, r;
    const e = this.contextConfigStorage.getActiveConfig(this.topLevelId, this.userContext);
    return (((t = e.userPromptHandler) == null ? void 0 : t.file) ?? ((r = e.userPromptHandler) == null ? void 0 : r.default) ?? "ignore") === "ignore"
}
,
qf = function(e) {
    if (e === null)
        return null;
    if (e.natural === "portrait")
        switch (e.type) {
        case "portrait-primary":
            return {
                angle: 0,
                type: "portraitPrimary"
            };
        case "landscape-primary":
            return {
                angle: 90,
                type: "landscapePrimary"
            };
        case "portrait-secondary":
            return {
                angle: 180,
                type: "portraitSecondary"
            };
        case "landscape-secondary":
            return {
                angle: 270,
                type: "landscapeSecondary"
            };
        default:
            throw new tn.UnknownErrorException(`Unexpected screen orientation type ${e.type}`)
        }
    if (e.natural === "landscape")
        switch (e.type) {
        case "landscape-primary":
            return {
                angle: 0,
                type: "landscapePrimary"
            };
        case "portrait-primary":
            return {
                angle: 90,
                type: "portraitPrimary"
            };
        case "landscape-secondary":
            return {
                angle: 180,
                type: "landscapeSecondary"
            };
        case "portrait-secondary":
            return {
                angle: 270,
                type: "portraitSecondary"
            };
        default:
            throw new tn.UnknownErrorException(`Unexpected screen orientation type ${e.type}`)
        }
    throw new tn.UnknownErrorException(`Unexpected orientation natural ${e.natural}`)
}
;
let nl = Xl;
Uu.CdpTarget = nl;
Object.defineProperty(ju, "__esModule", {
    value: !0
});
ju.CdpTargetManager = void 0;
const Av = De
  , hd = Di
  , Mv = $u
  , Bv = Uu
  , Mh = {
    service_worker: "service-worker",
    shared_worker: "shared-worker",
    worker: "dedicated-worker"
};
var Xo, Jo, ni, Yo, Ds, Xe, ii, Qo, Er, ct, Sr, Zo, ea, Qt, ae, bc, Hf, zf, Kf, Wf, Cc, ta, ol, Gf, Vf, Xf;
class jv {
    constructor(e, t, r, n, o, a, c, p, h, d, l, w, C) {
        u(this, ae);
        u(this, Xo);
        u(this, Jo);
        u(this, ni, new Set);
        u(this, Yo);
        u(this, Ds);
        u(this, Xe);
        u(this, ii);
        u(this, Qo);
        u(this, Er);
        u(this, ct);
        u(this, Sr);
        u(this, Zo);
        u(this, ea);
        u(this, Qt);
        u(this, ta, new Map);
        m(this, Jo, e),
        m(this, Xo, t),
        s(this, ni).add(r),
        m(this, Yo, r),
        m(this, Ds, n),
        m(this, Xe, o),
        m(this, Er, l),
        m(this, ii, c),
        m(this, Sr, p),
        m(this, Qo, h),
        m(this, Zo, d),
        m(this, ct, a),
        m(this, ea, w),
        m(this, Qt, C),
        g(this, ae, bc).call(this, t)
    }
}
Xo = new WeakMap,
Jo = new WeakMap,
ni = new WeakMap,
Yo = new WeakMap,
Ds = new WeakMap,
Xe = new WeakMap,
ii = new WeakMap,
Qo = new WeakMap,
Er = new WeakMap,
ct = new WeakMap,
Sr = new WeakMap,
Zo = new WeakMap,
ea = new WeakMap,
Qt = new WeakMap,
ae = new WeakSet,
bc = function(e) {
    e.on("Target.attachedToTarget", t => {
        g(this, ae, Kf).call(this, t, e)
    }
    ),
    e.on("Target.detachedFromTarget", g(this, ae, Gf).bind(this)),
    e.on("Target.targetInfoChanged", g(this, ae, Vf).bind(this)),
    e.on("Inspector.targetCrashed", () => {
        g(this, ae, Xf).call(this, e)
    }
    ),
    e.on("Page.frameAttached", g(this, ae, Hf).bind(this)),
    e.on("Page.frameSubtreeWillBeDetached", g(this, ae, zf).bind(this))
}
,
Hf = function(e) {
    const t = s(this, Xe).findContext(e.parentFrameId);
    t !== void 0 && hd.BrowsingContextImpl.create(e.frameId, e.parentFrameId, t.userContext, t.cdpTarget, s(this, Ds), s(this, Xe), s(this, ct), s(this, Sr), "about:blank", void 0, s(this, Qt))
}
,
zf = function(e) {
    var t;
    (t = s(this, Xe).findContext(e.frameId)) == null || t.dispose(!0)
}
,
Kf = function(e, t) {
    const {sessionId: r, targetInfo: n} = e
      , o = s(this, Jo).getCdpClient(r)
      , a = async () => {
        await o.sendCommand("Runtime.runIfWaitingForDebugger").then( () => t.sendCommand("Target.detachFromTarget", e)).catch(h => {
            var d;
            return (d = s(this, Qt)) == null ? void 0 : d.call(this, Av.LogType.debugError, h)
        }
        )
    }
    ;
    if (s(this, Yo) === n.targetId) {
        a();
        return
    }
    const c = n.type === "service_worker" ? `${t.sessionId}_${n.targetId}` : n.targetId;
    if (s(this, ni).has(c))
        return;
    s(this, ni).add(c);
    const p = n.browserContextId && n.browserContextId !== s(this, ea) ? n.browserContextId : "default";
    switch (n.type) {
    case "tab":
        {
            g(this, ae, bc).call(this, o),
            (async () => await o.sendCommand("Target.setAutoAttach", {
                autoAttach: !0,
                waitForDebuggerOnStart: !0,
                flatten: !0
            }))();
            return
        }
    case "page":
    case "iframe":
        {
            const h = g(this, ae, Cc).call(this, o, t, n, p)
              , d = s(this, Xe).findContext(n.targetId);
            if (d && n.type === "iframe")
                d.updateCdpTarget(h);
            else {
                const l = g(this, ae, Wf).call(this, n, t.sessionId);
                hd.BrowsingContextImpl.create(n.targetId, l, p, h, s(this, Ds), s(this, Xe), s(this, ct), s(this, Sr), n.url === "" ? "about:blank" : n.url, n.openerFrameId ?? n.openerId, s(this, Qt))
            }
            return
        }
    case "service_worker":
    case "worker":
        {
            const h = s(this, ct).findRealm({
                cdpSessionId: t.sessionId,
                sandbox: null
            });
            if (!h) {
                a();
                return
            }
            const d = g(this, ae, Cc).call(this, o, t, n, p);
            g(this, ae, ol).call(this, Mh[n.type], d, h);
            return
        }
    case "shared_worker":
        {
            const h = g(this, ae, Cc).call(this, o, t, n, p);
            g(this, ae, ol).call(this, Mh[n.type], h);
            return
        }
    }
    a()
}
,
Wf = function(e, t) {
    var n;
    if (e.type !== "iframe")
        return null;
    const r = e.openerFrameId ?? e.openerId;
    return r !== void 0 ? r : t !== void 0 ? ((n = s(this, Xe).findContextBySession(t)) == null ? void 0 : n.id) ?? null : null
}
,
Cc = function(e, t, r, n) {
    g(this, ae, bc).call(this, e),
    s(this, Er).onCdpTargetCreated(r.targetId, n);
    const o = Bv.CdpTarget.create(r.targetId, e, s(this, Xo), t, s(this, ct), s(this, Ds), s(this, Er), s(this, Xe), s(this, ii), s(this, Sr), n, s(this, Qt));
    return s(this, ii).onCdpTargetCreated(o),
    s(this, Qo).onCdpTargetCreated(o),
    s(this, Zo).onCdpTargetCreated(o),
    o
}
,
ta = new WeakMap,
ol = function(e, t, r) {
    t.cdpClient.on("Runtime.executionContextCreated", n => {
        const {uniqueId: o, id: a, origin: c} = n.context
          , p = new Mv.WorkerRealm(t.cdpClient,s(this, Ds),a,s(this, Qt),(0,
        hd.serializeOrigin)(c),r ? [r] : [],o,s(this, ct),e);
        s(this, ta).set(t.cdpSessionId, p)
    }
    )
}
,
Gf = function({sessionId: e, targetId: t}) {
    t && s(this, Er).find({
        targetId: t
    }).map(o => {
        o.dispose(t)
    }
    );
    const r = s(this, Xe).findContextBySession(e);
    if (r) {
        r.dispose(!0);
        return
    }
    const n = s(this, ta).get(e);
    n && s(this, ct).deleteRealms({
        cdpSessionId: n.cdpClient.sessionId
    })
}
,
Vf = function(e) {
    const t = s(this, Xe).findContext(e.targetInfo.targetId);
    t && t.onTargetInfoChanged(e)
}
,
Xf = function(e) {
    const t = s(this, ct).findRealms({
        cdpSessionId: e.sessionId
    });
    for (const r of t)
        r.dispose()
}
;
ju.CdpTargetManager = jv;
var Ku = {};
Object.defineProperty(Ku, "__esModule", {
    value: !0
});
Ku.BrowsingContextStorage = void 0;
const Bh = ee
  , Fv = Us;
var ut, oi;
class $v {
    constructor() {
        u(this, ut, new Map);
        u(this, oi, new Fv.EventEmitter)
    }
    getTopLevelContexts() {
        return this.getAllContexts().filter(e => e.isTopLevelContext())
    }
    getAllContexts() {
        return Array.from(s(this, ut).values())
    }
    deleteContextById(e) {
        s(this, ut).delete(e)
    }
    deleteContext(e) {
        s(this, ut).delete(e.id)
    }
    addContext(e) {
        s(this, ut).set(e.id, e),
        s(this, oi).emit("added", {
            browsingContext: e
        })
    }
    waitForContext(e) {
        return s(this, ut).has(e) ? Promise.resolve(this.getContext(e)) : new Promise(t => {
            const r = n => {
                n.browsingContext.id === e && (s(this, oi).off("added", r),
                t(n.browsingContext))
            }
            ;
            s(this, oi).on("added", r)
        }
        )
    }
    hasContext(e) {
        return s(this, ut).has(e)
    }
    findContext(e) {
        return s(this, ut).get(e)
    }
    findTopLevelContextId(e) {
        if (e === null)
            return null;
        const t = this.findContext(e);
        if (!t)
            return null;
        const r = t.parentId ?? null;
        return r === null ? e : this.findTopLevelContextId(r)
    }
    findContextBySession(e) {
        for (const t of s(this, ut).values())
            if (t.cdpTarget.cdpSessionId === e)
                return t
    }
    getContext(e) {
        const t = this.findContext(e);
        if (t === void 0)
            throw new Bh.NoSuchFrameException(`Context ${e} not found`);
        return t
    }
    verifyTopLevelContextsList(e) {
        const t = new Set;
        if (!e)
            return t;
        for (const r of e) {
            const n = this.getContext(r);
            if (n.isTopLevelContext())
                t.add(n);
            else
                throw new Bh.InvalidArgumentException(`Non top-level context '${r}' given.`)
        }
        return t
    }
    verifyContextsList(e) {
        if (e.length)
            for (const t of e)
                this.getContext(t)
    }
}
ut = new WeakMap,
oi = new WeakMap;
Ku.BrowsingContextStorage = $v;
var Wu = {};
Object.defineProperty(Wu, "__esModule", {
    value: !0
});
Wu.PreloadScriptStorage = void 0;
const jh = F;
var It;
class Uv {
    constructor() {
        u(this, It, new Set)
    }
    find(e) {
        return e ? [...s(this, It)].filter(t => !!(t.contexts === void 0 && t.userContexts === void 0 || e.targetId !== void 0 && t.targetIds.has(e.targetId))) : [...s(this, It)]
    }
    add(e) {
        s(this, It).add(e)
    }
    remove(e) {
        const t = [...s(this, It)].find(r => r.id === e);
        if (t === void 0)
            throw new jh.NoSuchScriptException(`No preload script with id '${e}'`);
        s(this, It).delete(t)
    }
    getPreloadScript(e) {
        const t = [...s(this, It)].find(r => r.id === e);
        if (t === void 0)
            throw new jh.NoSuchScriptException(`No preload script with id '${e}'`);
        return t
    }
    onCdpTargetCreated(e, t) {
        const r = [...s(this, It)].filter(n => {
            var o;
            return !n.userContexts && !n.contexts ? !0 : (o = n.userContexts) == null ? void 0 : o.includes(t)
        }
        );
        for (const n of r)
            n.targetIds.add(e)
    }
}
It = new WeakMap;
Wu.PreloadScriptStorage = Uv;
var Gu = {};
Object.defineProperty(Gu, "__esModule", {
    value: !0
});
Gu.RealmStorage = void 0;
const Lv = ee
  , qv = za;
var Jc, ai;
class Hv {
    constructor() {
        u(this, Jc, new Map);
        u(this, ai, new Map);
        O(this, "hiddenSandboxes", new Set)
    }
    get knownHandlesToRealmMap() {
        return s(this, Jc)
    }
    addRealm(e) {
        s(this, ai).set(e.realmId, e)
    }
    findRealms(e) {
        const t = e.sandbox === null ? void 0 : e.sandbox;
        return Array.from(s(this, ai).values()).filter(r => !(e.realmId !== void 0 && e.realmId !== r.realmId || e.browsingContextId !== void 0 && !r.associatedBrowsingContexts.map(n => n.id).includes(e.browsingContextId) || e.sandbox !== void 0 && (!(r instanceof qv.WindowRealm) || t !== r.sandbox) || e.executionContextId !== void 0 && e.executionContextId !== r.executionContextId || e.origin !== void 0 && e.origin !== r.origin || e.type !== void 0 && e.type !== r.realmType || e.cdpSessionId !== void 0 && e.cdpSessionId !== r.cdpClient.sessionId || e.isHidden !== void 0 && e.isHidden !== r.isHidden()))
    }
    findRealm(e) {
        return this.findRealms(e)[0]
    }
    getRealm(e) {
        const t = this.findRealm(e);
        if (t === void 0)
            throw new Lv.NoSuchFrameException(`Realm ${JSON.stringify(e)} not found`);
        return t
    }
    deleteRealms(e) {
        this.findRealms(e).map(t => {
            t.dispose(),
            s(this, ai).delete(t.realmId),
            Array.from(this.knownHandlesToRealmMap.entries()).filter( ([,r]) => r === t.realmId).map( ([r]) => this.knownHandlesToRealmMap.delete(r))
        }
        )
    }
}
Jc = new WeakMap,
ai = new WeakMap;
Gu.RealmStorage = Hv;
var Vu = {}
  , Xu = {};
Object.defineProperty(Xu, "__esModule", {
    value: !0
});
Xu.Buffer = void 0;
var sa, Pr, ra, sp;
let zv = (sp = class {
    constructor(e, t) {
        u(this, sa);
        u(this, Pr, []);
        u(this, ra);
        m(this, sa, e),
        m(this, ra, t)
    }
    get() {
        return s(this, Pr)
    }
    add(e) {
        var t;
        for (s(this, Pr).push(e); s(this, Pr).length > s(this, sa); ) {
            const r = s(this, Pr).shift();
            r !== void 0 && ((t = s(this, ra)) == null || t.call(this, r))
        }
    }
}
,
sa = new WeakMap,
Pr = new WeakMap,
ra = new WeakMap,
sp);
Xu.Buffer = zv;
var Ju = {};
Object.defineProperty(Ju, "__esModule", {
    value: !0
});
Ju.IdWrapper = void 0;
var Yc, na;
const Qc = class Qc {
    constructor() {
        u(this, na);
        m(this, na, ++ih(Qc, Yc)._)
    }
    get id() {
        return s(this, na)
    }
}
;
Yc = new WeakMap,
na = new WeakMap,
u(Qc, Yc, 0);
let al = Qc;
Ju.IdWrapper = al;
var Yu = {};
Object.defineProperty(Yu, "__esModule", {
    value: !0
});
Yu.isCdpEvent = Jf;
Yu.assertSupportedEvent = Kv;
const cl = ee;
function Jf(i) {
    var e;
    return ((e = i.split(".").at(0)) == null ? void 0 : e.startsWith(cl.ChromiumBidi.BiDiModule.Cdp)) ?? !1
}
function Kv(i) {
    if (!cl.ChromiumBidi.EVENT_NAMES.has(i) && !Jf(i))
        throw new cl.InvalidArgumentException(`Unknown event: ${i}`)
}
var Wr = {};
Object.defineProperty(Wr, "__esModule", {
    value: !0
});
Wr.SubscriptionManager = void 0;
Wr.cartesianProduct = Gv;
Wr.unrollEvents = ul;
Wr.difference = dl;
const _e = ee
  , Wv = Ft;
function Gv(...i) {
    return i.reduce( (e, t) => e.flatMap(r => t.map(n => [r, n].flat())))
}
function ul(i) {
    const e = new Set;
    function t(r) {
        for (const n of r)
            e.add(n)
    }
    for (const r of i)
        switch (r) {
        case _e.ChromiumBidi.BiDiModule.Bluetooth:
            t(Object.values(_e.ChromiumBidi.Bluetooth.EventNames));
            break;
        case _e.ChromiumBidi.BiDiModule.BrowsingContext:
            t(Object.values(_e.ChromiumBidi.BrowsingContext.EventNames));
            break;
        case _e.ChromiumBidi.BiDiModule.Input:
            t(Object.values(_e.ChromiumBidi.Input.EventNames));
            break;
        case _e.ChromiumBidi.BiDiModule.Log:
            t(Object.values(_e.ChromiumBidi.Log.EventNames));
            break;
        case _e.ChromiumBidi.BiDiModule.Network:
            t(Object.values(_e.ChromiumBidi.Network.EventNames));
            break;
        case _e.ChromiumBidi.BiDiModule.Script:
            t(Object.values(_e.ChromiumBidi.Script.EventNames));
            break;
        case _e.ChromiumBidi.BiDiModule.Speculation:
            t(Object.values(_e.ChromiumBidi.Speculation.EventNames));
            break;
        default:
            e.add(r)
        }
    return e.values()
}
var dt, _r, Ir, ci, xc;
class Vv {
    constructor(e) {
        u(this, ci);
        u(this, dt, []);
        u(this, _r, new Set);
        u(this, Ir);
        m(this, Ir, e)
    }
    getGoogChannelsSubscribedToEvent(e, t) {
        const r = new Set;
        for (const n of s(this, dt))
            g(this, ci, xc).call(this, n, e, t) && r.add(n.googChannel);
        return Array.from(r)
    }
    getGoogChannelsSubscribedToEventGlobally(e) {
        const t = new Set;
        for (const r of s(this, dt))
            g(this, ci, xc).call(this, r, e) && t.add(r.googChannel);
        return Array.from(t)
    }
    isSubscribedTo(e, t) {
        for (const r of s(this, dt))
            if (g(this, ci, xc).call(this, r, e, t))
                return !0;
        return !1
    }
    subscribe(e, t, r, n) {
        const o = {
            id: (0,
            Wv.uuidv4)(),
            eventNames: new Set(ul(e)),
            topLevelTraversableIds: new Set(t.map(a => {
                const c = s(this, Ir).findTopLevelContextId(a);
                if (!c)
                    throw new _e.NoSuchFrameException(`Top-level navigable not found for context id ${a}`);
                return c
            }
            )),
            userContextIds: new Set(r),
            googChannel: n
        };
        return s(this, dt).push(o),
        s(this, _r).add(o.id),
        o
    }
    unsubscribe(e, t) {
        const r = new Set(ul(e))
          , n = []
          , o = new Set;
        for (const a of s(this, dt)) {
            if (a.googChannel !== t) {
                n.push(a);
                continue
            }
            if (a.userContextIds.size !== 0) {
                n.push(a);
                continue
            }
            if (Xv(a.eventNames, r).size === 0) {
                n.push(a);
                continue
            }
            if (a.topLevelTraversableIds.size !== 0) {
                n.push(a);
                continue
            }
            const c = new Set(a.eventNames);
            for (const p of r)
                c.has(p) && (o.add(p),
                c.delete(p));
            c.size !== 0 && n.push({
                ...a,
                eventNames: c
            })
        }
        if (!Jv(o, r))
            throw new _e.InvalidArgumentException("No subscription found");
        m(this, dt, n)
    }
    unsubscribeById(e) {
        const t = new Set(e);
        if (dl(t, s(this, _r)).size !== 0)
            throw new _e.InvalidArgumentException("No subscription found");
        m(this, dt, s(this, dt).filter(n => !t.has(n.id))),
        m(this, _r, dl(s(this, _r), t))
    }
}
dt = new WeakMap,
_r = new WeakMap,
Ir = new WeakMap,
ci = new WeakSet,
xc = function(e, t, r) {
    let n = !1;
    for (const o of e.eventNames)
        if (o === t || o === t.split(".").at(0) || o.split(".").at(0) === t) {
            n = !0;
            break
        }
    if (!n)
        return !1;
    if (e.userContextIds.size !== 0) {
        if (!r)
            return !1;
        const o = s(this, Ir).findContext(r);
        return o ? e.userContextIds.has(o.userContext) : !1
    }
    if (e.topLevelTraversableIds.size !== 0) {
        if (!r)
            return !1;
        const o = s(this, Ir).findTopLevelContextId(r);
        return o !== null && e.topLevelTraversableIds.has(o)
    }
    return !0
}
;
Wr.SubscriptionManager = Vv;
function Xv(i, e) {
    const t = new Set;
    for (const r of i)
        e.has(r) && t.add(r);
    return t
}
function dl(i, e) {
    const t = new Set;
    for (const r of i)
        e.has(r) || t.add(r);
    return t
}
function Jv(i, e) {
    if (i.size !== e.size)
        return !1;
    for (const t of i)
        if (!e.has(t))
            return !1;
    return !0
}
var Gi;
Object.defineProperty(Vu, "__esModule", {
    value: !0
});
Vu.EventManager = void 0;
const ll = ee
  , Yv = Xu
  , Fh = Wa
  , Qv = Us
  , Zv = Ju
  , pd = Ti
  , $h = Yu
  , fd = Wr;
var Zc, ia, oa;
class Uh {
    constructor(e, t) {
        u(this, Zc, new Zv.IdWrapper);
        u(this, ia);
        u(this, oa);
        m(this, oa, e),
        m(this, ia, t)
    }
    get id() {
        return s(this, Zc).id
    }
    get contextId() {
        return s(this, ia)
    }
    get event() {
        return s(this, oa)
    }
}
Zc = new WeakMap,
ia = new WeakMap,
oa = new WeakMap;
const nc = new Map([[ll.ChromiumBidi.Log.EventNames.LogEntryAdded, 100]]);
var aa, Ns, kr, lt, kt, ui, ca, Tr, Vi, st, hl, Ec, pl;
class Wl extends Qv.EventEmitter {
    constructor(t, r) {
        super();
        u(this, st);
        u(this, aa, new Fh.DefaultMap( () => new Set));
        u(this, Ns, new Map);
        u(this, kr, new Map);
        u(this, lt);
        u(this, kt);
        u(this, ui);
        u(this, ca);
        m(this, kt, t),
        m(this, ca, r),
        m(this, lt, new fd.SubscriptionManager(t)),
        m(this, ui, new Fh.DefaultMap( () => []))
    }
    get subscriptionManager() {
        return s(this, lt)
    }
    addSubscribeHook(t, r) {
        s(this, ui).get(t).push(r)
    }
    registerEvent(t, r) {
        this.registerPromiseEvent(Promise.resolve({
            kind: "success",
            value: t
        }), r, t.method)
    }
    registerGlobalEvent(t) {
        this.registerGlobalPromiseEvent(Promise.resolve({
            kind: "success",
            value: t
        }), t.method)
    }
    registerPromiseEvent(t, r, n) {
        const o = new Uh(t,r)
          , a = s(this, lt).getGoogChannelsSubscribedToEvent(n, r);
        g(this, st, hl).call(this, o, n);
        for (const c of a)
            this.emit("event", {
                message: pd.OutgoingMessage.createFromPromise(t, c),
                event: n
            }),
            g(this, st, Ec).call(this, o, c, n)
    }
    registerGlobalPromiseEvent(t, r) {
        const n = new Uh(t,null)
          , o = s(this, lt).getGoogChannelsSubscribedToEventGlobally(r);
        g(this, st, hl).call(this, n, r);
        for (const a of o)
            this.emit("event", {
                message: pd.OutgoingMessage.createFromPromise(t, a),
                event: r
            }),
            g(this, st, Ec).call(this, n, a, r)
    }
    async subscribe(t, r, n, o) {
        for (const d of t)
            (0,
            $h.assertSupportedEvent)(d);
        if (n.length && r.length)
            throw new ll.InvalidArgumentException("Both userContexts and contexts cannot be specified.");
        s(this, kt).verifyContextsList(r),
        await s(this, ca).verifyUserContextIdList(n);
        const a = new Set((0,
        fd.unrollEvents)(t))
          , c = new Map
          , p = new Set(r.length ? r.map(d => {
            const l = s(this, kt).findTopLevelContextId(d);
            if (!l)
                throw new ll.InvalidArgumentException("Invalid context id");
            return l
        }
        ) : s(this, kt).getTopLevelContexts().map(d => d.id));
        for (const d of a) {
            const l = new Set(s(this, kt).getTopLevelContexts().map(w => w.id).filter(w => s(this, lt).isSubscribedTo(d, w)));
            c.set(d, (0,
            fd.difference)(p, l))
        }
        const h = s(this, lt).subscribe(t, r, n, o);
        for (const d of h.eventNames)
            for (const l of p)
                for (const w of g(this, st, pl).call(this, d, l, o))
                    this.emit("event", {
                        message: pd.OutgoingMessage.createFromPromise(w.event, o),
                        event: d
                    }),
                    g(this, st, Ec).call(this, w, o, d);
        for (const [d,l] of c)
            for (const w of l)
                s(this, ui).get(d).forEach(C => C(w));
        return await this.toggleModulesIfNeeded(),
        h.id
    }
    async unsubscribe(t, r) {
        for (const n of t)
            (0,
            $h.assertSupportedEvent)(n);
        s(this, lt).unsubscribe(t, r),
        await this.toggleModulesIfNeeded()
    }
    async unsubscribeByIds(t) {
        s(this, lt).unsubscribeById(t),
        await this.toggleModulesIfNeeded()
    }
    async toggleModulesIfNeeded() {
        await Promise.all(s(this, kt).getAllContexts().map(async t => await t.toggleModulesIfNeeded()))
    }
    clearBufferedEvents(t) {
        var r;
        for (const n of nc.keys()) {
            const o = g(r = Gi, Tr, Vi).call(r, n, t);
            s(this, Ns).delete(o)
        }
    }
}
aa = new WeakMap,
Ns = new WeakMap,
kr = new WeakMap,
lt = new WeakMap,
kt = new WeakMap,
ui = new WeakMap,
ca = new WeakMap,
Tr = new WeakSet,
Vi = function(t, r) {
    return JSON.stringify({
        eventName: t,
        browsingContext: r
    })
}
,
st = new WeakSet,
hl = function(t, r) {
    var o;
    if (!nc.has(r))
        return;
    const n = g(o = Gi, Tr, Vi).call(o, r, t.contextId);
    s(this, Ns).has(n) || s(this, Ns).set(n, new Yv.Buffer(nc.get(r))),
    s(this, Ns).get(n).add(t),
    s(this, aa).get(r).add(t.contextId)
}
,
Ec = function(t, r, n) {
    var p, h;
    if (!nc.has(n))
        return;
    const o = g(p = Gi, Tr, Vi).call(p, n, t.contextId)
      , a = Math.max(((h = s(this, kr).get(o)) == null ? void 0 : h.get(r)) ?? 0, t.id)
      , c = s(this, kr).get(o);
    c ? c.set(r, a) : s(this, kr).set(o, new Map([[r, a]]))
}
,
pl = function(t, r, n) {
    var p, h, d;
    const o = g(p = Gi, Tr, Vi).call(p, t, r)
      , a = ((h = s(this, kr).get(o)) == null ? void 0 : h.get(n)) ?? -1 / 0
      , c = ((d = s(this, Ns).get(o)) == null ? void 0 : d.get().filter(l => l.id > a)) ?? [];
    return r === null && Array.from(s(this, aa).get(t).keys()).filter(l => l !== null && s(this, kt).hasContext(l)).map(l => g(this, st, pl).call(this, t, l, n)).forEach(l => c.push(...l)),
    c.sort( (l, w) => l.id - w.id)
}
,
u(Wl, Tr);
Vu.EventManager = Wl;
Gi = Wl;
var Qu = {};
Object.defineProperty(Qu, "__esModule", {
    value: !0
});
Qu.SpeculationProcessor = void 0;
const eb = De;
var ua, da;
class tb {
    constructor(e, t) {
        u(this, ua);
        u(this, da);
        m(this, ua, e),
        m(this, da, t)
    }
    onCdpTargetCreated(e) {
        e.cdpClient.on("Preload.prefetchStatusUpdated", t => {
            var n;
            let r;
            switch (t.status) {
            case "Running":
                r = "pending";
                break;
            case "Ready":
                r = "ready";
                break;
            case "Success":
                r = "success";
                break;
            case "Failure":
                r = "failure";
                break;
            default:
                (n = s(this, da)) == null || n.call(this, eb.LogType.debugWarn, `Unknown prefetch status: ${t.status}`);
                return
            }
            s(this, ua).registerEvent({
                type: "event",
                method: "speculation.prefetchStatusUpdated",
                params: {
                    context: t.initiatingFrameId,
                    url: t.prefetchUrl,
                    status: r
                }
            }, e.id)
        }
        )
    }
}
ua = new WeakMap,
da = new WeakMap;
Qu.SpeculationProcessor = tb;
Object.defineProperty(fu, "__esModule", {
    value: !0
});
fu.BidiServer = void 0;
const sb = Us
  , rb = De
  , nb = mu
  , ib = gu
  , ob = Ru
  , ab = Au
  , cb = Bu
  , ub = ju
  , db = Ku
  , lb = Kl
  , hb = Wu
  , pb = Gu
  , fb = Vu
  , mb = Qu;
var la, Dr, di, Tt, Zt, ha, pa, li, fa, Os, eu, tu, su, Yf;
const Jl = class Jl extends sb.EventEmitter {
    constructor(t, r, n, o, a, c, p) {
        super();
        u(this, su);
        u(this, la);
        u(this, Dr);
        u(this, di);
        u(this, Tt);
        u(this, Zt, new db.BrowsingContextStorage);
        u(this, ha, new pb.RealmStorage);
        u(this, pa, new hb.PreloadScriptStorage);
        u(this, li);
        u(this, fa);
        u(this, Os);
        u(this, eu, t => {
            s(this, di).processCommand(t).catch(r => {
                var n;
                (n = s(this, Os)) == null || n.call(this, rb.LogType.debugError, r)
            }
            )
        }
        );
        u(this, tu, async t => {
            const r = t.message;
            t.googChannel !== null && (r["goog:channel"] = t.googChannel),
            await s(this, Dr).sendMessage(r)
        }
        );
        m(this, Os, p),
        m(this, la, new nb.ProcessingQueue(s(this, tu),s(this, Os))),
        m(this, Dr, t),
        s(this, Dr).setOnMessage(s(this, eu));
        const h = new ab.ContextConfigStorage
          , d = new cb.UserContextStorage(n);
        m(this, Tt, new fb.EventManager(s(this, Zt),d));
        const l = new lb.NetworkStorage(s(this, Tt),s(this, Zt),n,p);
        m(this, li, new ob.BluetoothProcessor(s(this, Tt),s(this, Zt))),
        m(this, fa, new mb.SpeculationProcessor(s(this, Tt),s(this, Os))),
        m(this, di, new ib.CommandProcessor(r,n,s(this, Tt),s(this, Zt),s(this, ha),s(this, pa),l,h,s(this, li),d,c,async w => {
            await n.sendCommand("Security.setIgnoreCertificateErrors", {
                ignore: w.acceptInsecureCerts ?? !1
            }),
            h.updateGlobalConfig({
                acceptInsecureCerts: w.acceptInsecureCerts ?? !1,
                userPromptHandler: w.unhandledPromptBehavior,
                prerenderingDisabled: (w == null ? void 0 : w["goog:prerenderingDisabled"]) ?? !1,
                disableNetworkDurableMessages: w == null ? void 0 : w["goog:disableNetworkDurableMessages"]
            }),
            new ub.CdpTargetManager(r,n,o,s(this, Tt),s(this, Zt),s(this, ha),l,h,s(this, li),s(this, fa),s(this, pa),a,p),
            await n.sendCommand("Target.setDiscoverTargets", {
                discover: !0
            }),
            await n.sendCommand("Target.setAutoAttach", {
                autoAttach: !0,
                waitForDebuggerOnStart: !0,
                flatten: !0,
                filter: [{
                    type: "page",
                    exclude: !0
                }, {}]
            }),
            await g(this, su, Yf).call(this)
        }
        ,s(this, Os))),
        s(this, Tt).on("event", ({message: w, event: C}) => {
            this.emitOutgoingMessage(w, C)
        }
        ),
        s(this, di).on("response", ({message: w, event: C}) => {
            this.emitOutgoingMessage(w, C)
        }
        )
    }
    static async createAndStart(t, r, n, o, a, c) {
        const [{browserContextIds: p},{targetInfos: h}] = await Promise.all([n.sendCommand("Target.getBrowserContexts"), n.sendCommand("Target.getTargets"), n.sendCommand("Browser.setDownloadBehavior", {
            behavior: "default",
            eventsEnabled: !0
        })]);
        let d = "default";
        for (const w of h)
            if (w.browserContextId && !p.includes(w.browserContextId)) {
                d = w.browserContextId;
                break
            }
        return new Jl(t,r,n,o,d,a,c)
    }
    emitOutgoingMessage(t, r) {
        s(this, la).add(t, r)
    }
    close() {
        s(this, Dr).close()
    }
}
;
la = new WeakMap,
Dr = new WeakMap,
di = new WeakMap,
Tt = new WeakMap,
Zt = new WeakMap,
ha = new WeakMap,
pa = new WeakMap,
li = new WeakMap,
fa = new WeakMap,
Os = new WeakMap,
eu = new WeakMap,
tu = new WeakMap,
su = new WeakSet,
Yf = async function() {
    await Promise.all(s(this, Zt).getTopLevelContexts().map(t => t.lifecycleLoaded()))
}
;
let fl = Jl;
fu.BidiServer = fl;
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }),
    i.OutgoingMessage = i.EventEmitter = i.BidiServer = void 0;
    var e = fu;
    Object.defineProperty(i, "BidiServer", {
        enumerable: !0,
        get: function() {
            return e.BidiServer
        }
    });
    var t = Us;
    Object.defineProperty(i, "EventEmitter", {
        enumerable: !0,
        get: function() {
            return t.EventEmitter
        }
    });
    var r = Ti;
    Object.defineProperty(i, "OutgoingMessage", {
        enumerable: !0,
        get: function() {
            return r.OutgoingMessage
        }
    })
}
)(pu);
var Nr, Rs, es;
const Js = class Js extends Lm {
    constructor(t, r) {
        super();
        u(this, Nr, !1);
        u(this, Rs);
        u(this, es, np.create());
        O(this, "frame");
        O(this, "onClose", () => {
            Js.sessions.delete(this.id()),
            m(this, Nr, !0)
        }
        );
        if (this.frame = t,
        !this.frame.page().browser().cdpSupported)
            return;
        const n = this.frame.page().browser().connection;
        m(this, Rs, n),
        r ? (s(this, es).resolve(r),
        Js.sessions.set(r, this)) : (async () => {
            try {
                const {result: o} = await n.send("goog:cdp.getSession", {
                    context: t._id
                });
                s(this, es).resolve(o.session),
                Js.sessions.set(o.session, this)
            } catch (o) {
                s(this, es).reject(o)
            }
        }
        )(),
        Js.sessions.set(s(this, es).value(), this)
    }
    connection() {}
    get detached() {
        return s(this, Nr)
    }
    async send(t, r, n) {
        if (s(this, Rs) === void 0)
            throw new X("CDP support is required for this feature. The current browser does not support CDP.");
        if (s(this, Nr))
            throw new Ml(`Protocol error (${t}): Session closed. Most likely the page has been closed.`);
        const o = await s(this, es).valueOrThrow()
          , {result: a} = await s(this, Rs).send("goog:cdp.sendCommand", {
            method: t,
            params: r,
            session: o
        }, n == null ? void 0 : n.timeout);
        return a.result
    }
    async detach() {
        if (!(s(this, Rs) === void 0 || s(this, Rs).closed || s(this, Nr)))
            try {
                await this.frame.client.send("Target.detachFromTarget", {
                    sessionId: this.id()
                })
            } finally {
                this.onClose()
            }
    }
    id() {
        const t = s(this, es).value();
        return typeof t == "string" ? t : ""
    }
}
;
Nr = new WeakMap,
Rs = new WeakMap,
es = new WeakMap,
O(Js, "sessions", new Map);
let Yi = Js;
var gb = {};
const wb = Bl("puppeteer:webDriverBiDi:SEND ►")
  , yb = Bl("puppeteer:webDriverBiDi:RECV ◀");
var ma, Dt, hi, ga, Or, Nt, wa, ya, ml;
class vb extends J {
    constructor(t, r, n, o=0, a) {
        super();
        u(this, ya);
        u(this, ma);
        u(this, Dt);
        u(this, hi);
        u(this, ga, 0);
        u(this, Or, !1);
        u(this, Nt);
        u(this, wa, []);
        m(this, ma, t),
        m(this, hi, o),
        m(this, ga, a ?? 18e4),
        m(this, Nt, new qm(n)),
        m(this, Dt, r),
        s(this, Dt).onmessage = this.onMessage.bind(this),
        s(this, Dt).onclose = this.unbind.bind(this)
    }
    get closed() {
        return s(this, Or)
    }
    get url() {
        return s(this, ma)
    }
    pipeTo(t) {
        s(this, wa).push(t)
    }
    emit(t, r) {
        gb.PUPPETEER_WEBDRIVER_BIDI_ONLY === "true" && g(this, ya, ml).call(this, r);
        for (const n of s(this, wa))
            n.emit(t, r);
        return super.emit(t, r)
    }
    send(t, r, n) {
        return s(this, Or) ? Promise.reject(new Hm("Connection closed.")) : s(this, Nt).create(t, n ?? s(this, ga), o => {
            const a = JSON.stringify({
                id: o,
                method: t,
                params: r
            });
            wb(a),
            s(this, Dt).send(a)
        }
        )
    }
    async onMessage(t) {
        var n;
        s(this, hi) && await new Promise(o => setTimeout(o, s(this, hi))),
        yb(t);
        const r = JSON.parse(t);
        if ("type"in r)
            switch (r.type) {
            case "success":
                s(this, Nt).resolve(r.id, r);
                return;
            case "error":
                if (r.id === null)
                    break;
                s(this, Nt).reject(r.id, bb(r), `${r.error}: ${r.message}`);
                return;
            case "event":
                if (Cb(r)) {
                    (n = Yi.sessions.get(r.params.session)) == null || n.emit(r.params.event, r.params.params);
                    return
                }
                this.emit(r.method, r.params);
                return
            }
        "id"in r && s(this, Nt).reject(r.id, `Protocol Error. Message is not in BiDi protocol format: '${t}'`, r.message),
        Be(r)
    }
    unbind() {
        s(this, Or) || (m(this, Or, !0),
        s(this, Dt).onmessage = () => {}
        ,
        s(this, Dt).onclose = () => {}
        ,
        s(this, Nt).clear())
    }
    dispose() {
        this.unbind(),
        s(this, Dt).close()
    }
    getPendingProtocolErrors() {
        return s(this, Nt).getPendingProtocolErrors()
    }
}
ma = new WeakMap,
Dt = new WeakMap,
hi = new WeakMap,
ga = new WeakMap,
Or = new WeakMap,
Nt = new WeakMap,
wa = new WeakMap,
ya = new WeakSet,
ml = function(t) {
    for (const r in t)
        r.startsWith("goog:") ? delete t[r] : typeof t[r] == "object" && t[r] !== null && g(this, ya, ml).call(this, t[r])
}
;
function bb(i) {
    let e = `${i.error} ${i.message}`;
    return i.stacktrace && (e += ` ${i.stacktrace}`),
    e
}
function Cb(i) {
    return i.method.startsWith("goog:cdp.")
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const xb = (i, ...e) => {
    Bl(`bidi:${i}`)(e)
}
;
async function DC(i) {
    const e = new Sb
      , t = new Eb(i)
      , r = {
        send(a) {
            e.emitMessage(JSON.parse(a))
        },
        close() {
            o.close(),
            t.close(),
            i.dispose()
        },
        onmessage(a) {}
    };
    e.on("bidiResponse", a => {
        r.onmessage(JSON.stringify(a))
    }
    );
    const n = new vb(i.url(),r,i._idGenerator,i.delay,i.timeout)
      , o = await pu.BidiServer.createAndStart(e, t, t.browserClient(), "", void 0, xb);
    return n
}
var va, Rr, Ar;
class Eb {
    constructor(e) {
        u(this, va);
        u(this, Rr, new Map);
        u(this, Ar);
        m(this, va, e),
        m(this, Ar, new Lh(e))
    }
    browserClient() {
        return s(this, Ar)
    }
    getCdpClient(e) {
        const t = s(this, va).session(e);
        if (!t)
            throw new Error(`Unknown CDP session with id ${e}`);
        if (!s(this, Rr).has(t)) {
            const r = new Lh(t,e,s(this, Ar));
            return s(this, Rr).set(t, r),
            r
        }
        return s(this, Rr).get(t)
    }
    close() {
        s(this, Ar).close();
        for (const e of s(this, Rr).values())
            e.close()
    }
}
va = new WeakMap,
Rr = new WeakMap,
Ar = new WeakMap;
var pi, Mr, ba, Ca;
class Lh extends pu.EventEmitter {
    constructor(t, r, n) {
        super();
        u(this, pi, !1);
        u(this, Mr);
        O(this, "sessionId");
        u(this, ba);
        u(this, Ca, (t, r) => {
            this.emit(t, r)
        }
        );
        m(this, Mr, t),
        this.sessionId = r,
        m(this, ba, n),
        s(this, Mr).on("*", s(this, Ca))
    }
    browserClient() {
        return s(this, ba)
    }
    async sendCommand(t, ...r) {
        if (!s(this, pi))
            try {
                return await s(this, Mr).send(t, ...r)
            } catch (n) {
                if (s(this, pi))
                    return;
                throw n
            }
    }
    close() {
        s(this, Mr).off("*", s(this, Ca)),
        m(this, pi, !0)
    }
    isCloseError(t) {
        return t instanceof Ml
    }
}
pi = new WeakMap,
Mr = new WeakMap,
ba = new WeakMap,
Ca = new WeakMap;
var fi;
class Sb extends pu.EventEmitter {
    constructor() {
        super(...arguments);
        u(this, fi, async t => {}
        )
    }
    emitMessage(t) {
        s(this, fi).call(this, t)
    }
    setOnMessage(t) {
        m(this, fi, t)
    }
    async sendMessage(t) {
        this.emit("bidiResponse", t)
    }
    close() {
        m(this, fi, async t => {}
        )
    }
}
fi = new WeakMap;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Pb = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , _b = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
};
let Ib = ( () => {
    var r, n, o, a, c, p, Qf, Sc, Zf, w;
    let i = J, e = [], t;
    return w = class extends i {
        constructor(S) {
            super();
            u(this, p);
            u(this, r, Pb(this, e));
            u(this, n);
            u(this, o);
            u(this, a, new Mt);
            u(this, c);
            m(this, o, S)
        }
        static from(S) {
            var y;
            const b = new w(S);
            return g(y = b, p, Qf).call(y),
            b
        }
        get disposed() {
            return s(this, a).disposed
        }
        get request() {
            return s(this, r)
        }
        get navigation() {
            return s(this, n)
        }
        dispose() {
            this[le]()
        }
        [(t = [$s],
        le)]() {
            s(this, a).dispose(),
            super[le]()
        }
    }
    ,
    r = new WeakMap,
    n = new WeakMap,
    o = new WeakMap,
    a = new WeakMap,
    c = new WeakMap,
    p = new WeakSet,
    Qf = function() {
        const S = s(this, a).use(new J(s(this, o)));
        S.once("closed", () => {
            this.emit("failed", {
                url: s(this, o).url,
                timestamp: new Date
            }),
            this.dispose()
        }
        ),
        S.on("request", ({request: y}) => {
            if (y.navigation === void 0 || !g(this, p, Sc).call(this, y.navigation))
                return;
            m(this, r, y),
            this.emit("request", y),
            s(this, a).use(new J(s(this, r))).on("redirect", v => {
                m(this, r, v)
            }
            )
        }
        );
        const b = s(this, a).use(new J(s(this, p, Zf)));
        b.on("browsingContext.navigationStarted", y => {
            y.context !== s(this, o).id || s(this, n) !== void 0 || m(this, n, w.from(s(this, o)))
        }
        );
        for (const y of ["browsingContext.domContentLoaded", "browsingContext.load"])
            b.on(y, D => {
                D.context !== s(this, o).id || D.navigation === null || !g(this, p, Sc).call(this, D.navigation) || this.dispose()
            }
            );
        for (const [y,D] of [["browsingContext.fragmentNavigated", "fragment"], ["browsingContext.navigationFailed", "failed"], ["browsingContext.navigationAborted", "aborted"]])
            b.on(y, v => {
                v.context !== s(this, o).id || !g(this, p, Sc).call(this, v.navigation) || (this.emit(D, {
                    url: v.url,
                    timestamp: new Date(v.timestamp)
                }),
                this.dispose())
            }
            )
    }
    ,
    Sc = function(S) {
        return s(this, n) !== void 0 && !s(this, n).disposed ? !1 : s(this, c) === void 0 ? (m(this, c, S),
        !0) : s(this, c) === S
    }
    ,
    Zf = function() {
        return s(this, o).userContext.browser.session
    }
    ,
    ( () => {
        const S = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        _b(w, null, t, {
            kind: "method",
            name: "dispose",
            static: !1,
            private: !1,
            access: {
                has: b => "dispose"in b,
                get: b => b.dispose
            },
            metadata: S
        }, null, e),
        S && Object.defineProperty(w, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: S
        })
    }
    )(),
    w
}
)();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var kb = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}, Fi = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
}, gl;
let Gl = ( () => {
    var c, p;
    let i = J, e = [], t, r, n, o, a;
    return p = class extends i {
        constructor(l, w) {
            super();
            u(this, c, kb(this, e));
            O(this, "disposables", new Mt);
            O(this, "id");
            O(this, "origin");
            O(this, "executionContextId");
            this.id = l,
            this.origin = w
        }
        get disposed() {
            return s(this, c) !== void 0
        }
        get target() {
            return {
                realm: this.id
            }
        }
        dispose(l) {
            m(this, c, l),
            this[le]()
        }
        async disown(l) {
            await this.session.send("script.disown", {
                target: this.target,
                handles: l
            })
        }
        async callFunction(l, w, C={}) {
            const {result: E} = await this.session.send("script.callFunction", {
                functionDeclaration: l,
                awaitPromise: w,
                target: this.target,
                ...C
            });
            return E
        }
        async evaluate(l, w, C={}) {
            const {result: E} = await this.session.send("script.evaluate", {
                expression: l,
                awaitPromise: w,
                target: this.target,
                ...C
            });
            return E
        }
        async resolveExecutionContextId() {
            if (!this.executionContextId) {
                const {result: l} = await this.session.connection.send("goog:cdp.resolveRealm", {
                    realm: this.id
                });
                this.executionContextId = l.executionContextId
            }
            return this.executionContextId
        }
        [(t = [$s],
        r = [L(l => s(l, c))],
        n = [L(l => s(l, c))],
        o = [L(l => s(l, c))],
        a = [L(l => s(l, c))],
        le)]() {
            s(this, c) ?? m(this, c, "Realm already destroyed, probably because all associated browsing contexts closed."),
            this.emit("destroyed", {
                reason: s(this, c)
            }),
            this.disposables.dispose(),
            super[le]()
        }
    }
    ,
    c = new WeakMap,
    ( () => {
        const l = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        Fi(p, null, t, {
            kind: "method",
            name: "dispose",
            static: !1,
            private: !1,
            access: {
                has: w => "dispose"in w,
                get: w => w.dispose
            },
            metadata: l
        }, null, e),
        Fi(p, null, r, {
            kind: "method",
            name: "disown",
            static: !1,
            private: !1,
            access: {
                has: w => "disown"in w,
                get: w => w.disown
            },
            metadata: l
        }, null, e),
        Fi(p, null, n, {
            kind: "method",
            name: "callFunction",
            static: !1,
            private: !1,
            access: {
                has: w => "callFunction"in w,
                get: w => w.callFunction
            },
            metadata: l
        }, null, e),
        Fi(p, null, o, {
            kind: "method",
            name: "evaluate",
            static: !1,
            private: !1,
            access: {
                has: w => "evaluate"in w,
                get: w => w.evaluate
            },
            metadata: l
        }, null, e),
        Fi(p, null, a, {
            kind: "method",
            name: "resolveExecutionContextId",
            static: !1,
            private: !1,
            access: {
                has: w => "resolveExecutionContextId"in w,
                get: w => w.resolveExecutionContextId
            },
            metadata: l
        }, null, e),
        l && Object.defineProperty(p, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: l
        })
    }
    )(),
    p
}
)();
var xa, ru, em;
const Yl = class Yl extends Gl {
    constructor(t, r) {
        super("", "");
        u(this, ru);
        O(this, "browsingContext");
        O(this, "sandbox");
        u(this, xa, new Map);
        this.browsingContext = t,
        this.sandbox = r
    }
    static from(t, r) {
        var o;
        const n = new Yl(t,r);
        return g(o = n, ru, em).call(o),
        n
    }
    get session() {
        return this.browsingContext.userContext.browser.session
    }
    get target() {
        return {
            context: this.browsingContext.id,
            sandbox: this.sandbox
        }
    }
}
;
xa = new WeakMap,
ru = new WeakSet,
em = function() {
    this.disposables.use(new J(this.browsingContext)).on("closed", ({reason: n}) => {
        this.dispose(n)
    }
    );
    const r = this.disposables.use(new J(this.session));
    r.on("script.realmCreated", n => {
        n.type !== "window" || n.context !== this.browsingContext.id || n.sandbox !== this.sandbox || (this.id = n.realm,
        this.origin = n.origin,
        this.executionContextId = void 0,
        this.emit("updated", this))
    }
    ),
    r.on("script.realmCreated", n => {
        if (n.type !== "dedicated-worker" || !n.owners.includes(this.id))
            return;
        const o = Vl.from(this, n.realm, n.origin);
        s(this, xa).set(o.id, o);
        const a = this.disposables.use(new J(o));
        a.once("destroyed", () => {
            a.removeAllListeners(),
            s(this, xa).delete(o.id)
        }
        ),
        this.emit("worker", o)
    }
    )
}
;
let wl = Yl;
var Ea, nu, tm;
class Vl extends Gl {
    constructor(t, r, n) {
        super(r, n);
        u(this, nu);
        u(this, Ea, new Map);
        O(this, "owners");
        this.owners = new Set([t])
    }
    static from(t, r, n) {
        var a;
        const o = new gl(t,r,n);
        return g(a = o, nu, tm).call(a),
        o
    }
    get session() {
        return this.owners.values().next().value.session
    }
}
Ea = new WeakMap,
nu = new WeakSet,
tm = function() {
    const t = this.disposables.use(new J(this.session));
    t.on("script.realmDestroyed", r => {
        r.realm === this.id && this.dispose("Realm already destroyed.")
    }
    ),
    t.on("script.realmCreated", r => {
        if (r.type !== "dedicated-worker" || !r.owners.includes(this.id))
            return;
        const n = gl.from(this, r.realm, r.origin);
        s(this, Ea).set(n.id, n),
        this.disposables.use(new J(n)).once("destroyed", () => {
            s(this, Ea).delete(n.id)
        }
        ),
        this.emit("worker", n)
    }
    )
}
;
gl = Vl;
var Sa, iu, sm;
const Ql = class Ql extends Gl {
    constructor(t, r, n) {
        super(r, n);
        u(this, iu);
        u(this, Sa, new Map);
        O(this, "browser");
        this.browser = t
    }
    static from(t, r, n) {
        var a;
        const o = new Ql(t,r,n);
        return g(a = o, iu, sm).call(a),
        o
    }
    get session() {
        return this.browser.session
    }
}
;
Sa = new WeakMap,
iu = new WeakSet,
sm = function() {
    const t = this.disposables.use(new J(this.session));
    t.on("script.realmDestroyed", r => {
        r.realm === this.id && this.dispose("Realm already destroyed.")
    }
    ),
    t.on("script.realmCreated", r => {
        if (r.type !== "dedicated-worker" || !r.owners.includes(this.id))
            return;
        const n = Vl.from(this, r.realm, r.origin);
        s(this, Sa).set(n.id, n),
        this.disposables.use(new J(n)).once("destroyed", () => {
            s(this, Sa).delete(n.id)
        }
        ),
        this.emit("worker", n)
    }
    )
}
;
let yl = Ql;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Tb = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , Db = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
};
let Nb = ( () => {
    var r, n, o, a, c, p, h, d, l, rm, Lt, E;
    let i = J, e = [], t;
    return E = class extends i {
        constructor(y, D) {
            super();
            u(this, l);
            u(this, r, (Tb(this, e),
            null));
            u(this, n, null);
            u(this, o);
            u(this, a);
            u(this, c);
            u(this, p);
            u(this, h, new Mt);
            u(this, d);
            m(this, p, y),
            m(this, d, D)
        }
        static from(y, D) {
            var P;
            const v = new E(y,D);
            return g(P = v, l, rm).call(P),
            v
        }
        get disposed() {
            return s(this, h).disposed
        }
        get error() {
            return s(this, o)
        }
        get headers() {
            return s(this, d).request.headers
        }
        get id() {
            return s(this, d).request.request
        }
        get initiator() {
            var y, D;
            return {
                ...s(this, d).initiator,
                url: (y = s(this, d).request["goog:resourceInitiator"]) == null ? void 0 : y.url,
                stack: (D = s(this, d).request["goog:resourceInitiator"]) == null ? void 0 : D.stack
            }
        }
        get method() {
            return s(this, d).request.method
        }
        get navigation() {
            return s(this, d).navigation ?? void 0
        }
        get redirect() {
            return s(this, a)
        }
        get lastRedirect() {
            let y = s(this, a);
            for (; y; ) {
                if (y && !s(y, a))
                    return y;
                y = s(y, a)
            }
            return y
        }
        get response() {
            return s(this, c)
        }
        get url() {
            return s(this, d).request.url
        }
        get isBlocked() {
            return s(this, d).isBlocked
        }
        get resourceType() {
            return s(this, d).request["goog:resourceType"] ?? void 0
        }
        get postData() {
            return s(this, d).request["goog:postData"] ?? void 0
        }
        get hasPostData() {
            return (s(this, d).request.bodySize ?? 0) > 0
        }
        async continueRequest({url: y, method: D, headers: v, cookies: P, body: A}) {
            await s(this, l, Lt).send("network.continueRequest", {
                request: this.id,
                url: y,
                method: D,
                headers: v,
                body: A,
                cookies: P
            })
        }
        async failRequest() {
            await s(this, l, Lt).send("network.failRequest", {
                request: this.id
            })
        }
        async provideResponse({statusCode: y, reasonPhrase: D, headers: v, body: P}) {
            await s(this, l, Lt).send("network.provideResponse", {
                request: this.id,
                statusCode: y,
                reasonPhrase: D,
                headers: v,
                body: P
            })
        }
        async fetchPostData() {
            if (this.hasPostData)
                return s(this, n) || m(this, n, (async () => {
                    const y = await s(this, l, Lt).send("network.getData", {
                        dataType: "request",
                        request: this.id
                    });
                    if (y.result.bytes.type === "string")
                        return y.result.bytes.value;
                    throw new X(`Collected request body data of type ${y.result.bytes.type} is not supported`)
                }
                )()),
                await s(this, n)
        }
        async getResponseContent() {
            return s(this, r) || m(this, r, (async () => {
                try {
                    const y = await s(this, l, Lt).send("network.getData", {
                        dataType: "response",
                        request: this.id
                    });
                    return ip(y.result.bytes.value, y.result.bytes.type === "base64")
                } catch (y) {
                    throw y instanceof Tc && y.originalMessage.includes("No resource with given identifier found") ? new Tc("Could not load response body for this request. This might happen if the request is a preflight request.") : y
                }
            }
            )()),
            await s(this, r)
        }
        async continueWithAuth(y) {
            y.action === "provideCredentials" ? await s(this, l, Lt).send("network.continueWithAuth", {
                request: this.id,
                action: y.action,
                credentials: y.credentials
            }) : await s(this, l, Lt).send("network.continueWithAuth", {
                request: this.id,
                action: y.action
            })
        }
        dispose() {
            this[le]()
        }
        [(t = [$s],
        le)]() {
            s(this, h).dispose(),
            super[le]()
        }
        timing() {
            return s(this, d).request.timings
        }
    }
    ,
    r = new WeakMap,
    n = new WeakMap,
    o = new WeakMap,
    a = new WeakMap,
    c = new WeakMap,
    p = new WeakMap,
    h = new WeakMap,
    d = new WeakMap,
    l = new WeakSet,
    rm = function() {
        s(this, h).use(new J(s(this, p))).once("closed", ({reason: v}) => {
            m(this, o, v),
            this.emit("error", s(this, o)),
            this.dispose()
        }
        );
        const D = s(this, h).use(new J(s(this, l, Lt)));
        D.on("network.beforeRequestSent", v => {
            if (v.context !== s(this, p).id || v.request.request !== this.id)
                return;
            const P = s(this, d).request.headers.find(x => x.name.toLowerCase() === "authorization")
              , M = v.request.headers.find(x => x.name.toLowerCase() === "authorization") && !P;
            v.redirectCount !== s(this, d).redirectCount + 1 && !M || (m(this, a, E.from(s(this, p), v)),
            this.emit("redirect", s(this, a)),
            this.dispose())
        }
        ),
        D.on("network.authRequired", v => {
            v.context !== s(this, p).id || v.request.request !== this.id || !v.isBlocked || this.emit("authenticate", void 0)
        }
        ),
        D.on("network.fetchError", v => {
            v.context !== s(this, p).id || v.request.request !== this.id || s(this, d).redirectCount !== v.redirectCount || (m(this, o, v.errorText),
            this.emit("error", s(this, o)),
            this.dispose())
        }
        ),
        D.on("network.responseCompleted", v => {
            v.context !== s(this, p).id || v.request.request !== this.id || s(this, d).redirectCount !== v.redirectCount || (m(this, c, v.response),
            s(this, d).request.timings = v.request.timings,
            this.emit("success", s(this, c)),
            !(s(this, c).status >= 300 && s(this, c).status < 400) && this.dispose())
        }
        )
    }
    ,
    Lt = function() {
        return s(this, p).userContext.browser.session
    }
    ,
    ( () => {
        const y = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        Db(E, null, t, {
            kind: "method",
            name: "dispose",
            static: !1,
            private: !1,
            access: {
                has: D => "dispose"in D,
                get: D => D.dispose
            },
            metadata: y
        }, null, e),
        y && Object.defineProperty(E, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: y
        })
    }
    )(),
    E
}
)();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ob = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , qh = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
};
let Rb = ( () => {
    var n, o, a, c, nm, vl, d;
    let i = J, e = [], t, r;
    return d = class extends i {
        constructor(C, E) {
            super();
            u(this, c);
            u(this, n, Ob(this, e));
            u(this, o);
            u(this, a, new Mt);
            O(this, "browsingContext");
            O(this, "info");
            this.browsingContext = C,
            this.info = E
        }
        static from(C, E) {
            var b;
            const S = new d(C,E);
            return g(b = S, c, nm).call(b),
            S
        }
        get closed() {
            return s(this, n) !== void 0
        }
        get disposed() {
            return this.closed
        }
        get handled() {
            return this.info.handler === "accept" || this.info.handler === "dismiss" ? !0 : s(this, o) !== void 0
        }
        get result() {
            return s(this, o)
        }
        dispose(C) {
            m(this, n, C),
            this[le]()
        }
        async handle(C={}) {
            return await s(this, c, vl).send("browsingContext.handleUserPrompt", {
                ...C,
                context: this.info.context
            }),
            s(this, o)
        }
        [(t = [$s],
        r = [L(C => s(C, n))],
        le)]() {
            s(this, n) ?? m(this, n, "User prompt already closed, probably because the associated browsing context was destroyed."),
            this.emit("closed", {
                reason: s(this, n)
            }),
            s(this, a).dispose(),
            super[le]()
        }
    }
    ,
    n = new WeakMap,
    o = new WeakMap,
    a = new WeakMap,
    c = new WeakSet,
    nm = function() {
        s(this, a).use(new J(this.browsingContext)).once("closed", ({reason: S}) => {
            this.dispose(`User prompt already closed: ${S}`)
        }
        ),
        s(this, a).use(new J(s(this, c, vl))).on("browsingContext.userPromptClosed", S => {
            S.context === this.browsingContext.id && (m(this, o, S),
            this.emit("handled", S),
            this.dispose("User prompt already handled."))
        }
        )
    }
    ,
    vl = function() {
        return this.browsingContext.userContext.browser.session
    }
    ,
    ( () => {
        const C = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        qh(d, null, t, {
            kind: "method",
            name: "dispose",
            static: !1,
            private: !1,
            access: {
                has: E => "dispose"in E,
                get: E => E.dispose
            },
            metadata: C
        }, null, e),
        qh(d, null, r, {
            kind: "method",
            name: "handle",
            static: !1,
            private: !1,
            access: {
                has: E => "handle"in E,
                get: E => E.handle
            },
            metadata: C
        }, null, e),
        C && Object.defineProperty(d, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: C
        })
    }
    )(),
    d
}
)();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ab = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , ne = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
};
let Mb = ( () => {
    var K, q, he, Ee, Se, Gr, $t, Ls, Q, im, pe, bl, Y;
    let i = J, e = [], t, r, n, o, a, c, p, h, d, l, w, C, E, S, b, y, D, v, P, A, M, x, f, _, N, T, j;
    return Y = class extends i {
        constructor(I, k, W, Pe, mt) {
            super();
            u(this, Q);
            u(this, K, Ab(this, e));
            u(this, q);
            u(this, he);
            u(this, Ee, new Map);
            u(this, Se, new Mt);
            u(this, Gr, new Map);
            u(this, $t, new Map);
            O(this, "defaultRealm");
            O(this, "id");
            O(this, "parent");
            O(this, "userContext");
            O(this, "originalOpener");
            u(this, Ls, {
                javaScriptEnabled: !0
            });
            m(this, he, Pe),
            this.id = W,
            this.parent = k,
            this.userContext = I,
            this.originalOpener = mt,
            this.defaultRealm = g(this, Q, bl).call(this)
        }
        static from(I, k, W, Pe, mt) {
            var nh;
            const Vr = new Y(I,k,W,Pe,mt);
            return g(nh = Vr, Q, im).call(nh),
            Vr
        }
        get children() {
            return s(this, Ee).values()
        }
        get closed() {
            return s(this, q) !== void 0
        }
        get disposed() {
            return this.closed
        }
        get realms() {
            const I = this;
            return function*() {
                yield I.defaultRealm,
                yield*s(I, Gr).values()
            }()
        }
        get top() {
            let I = this;
            for (let {parent: k} = I; k; {parent: k} = I)
                I = k;
            return I
        }
        get url() {
            return s(this, he)
        }
        dispose(I) {
            m(this, q, I);
            for (const k of s(this, Ee).values())
                k.dispose("Parent browsing context was disposed");
            this[le]()
        }
        async activate() {
            await s(this, Q, pe).send("browsingContext.activate", {
                context: this.id
            })
        }
        async captureScreenshot(I={}) {
            const {result: {data: k}} = await s(this, Q, pe).send("browsingContext.captureScreenshot", {
                context: this.id,
                ...I
            });
            return k
        }
        async close(I) {
            await Promise.all([...s(this, Ee).values()].map(async k => {
                await k.close(I)
            }
            )),
            await s(this, Q, pe).send("browsingContext.close", {
                context: this.id,
                promptUnload: I
            })
        }
        async traverseHistory(I) {
            await s(this, Q, pe).send("browsingContext.traverseHistory", {
                context: this.id,
                delta: I
            })
        }
        async navigate(I, k) {
            await s(this, Q, pe).send("browsingContext.navigate", {
                context: this.id,
                url: I,
                wait: k
            })
        }
        async reload(I={}) {
            await s(this, Q, pe).send("browsingContext.reload", {
                context: this.id,
                ...I
            })
        }
        async setCacheBehavior(I) {
            await s(this, Q, pe).send("network.setCacheBehavior", {
                contexts: [this.id],
                cacheBehavior: I
            })
        }
        async print(I={}) {
            const {result: {data: k}} = await s(this, Q, pe).send("browsingContext.print", {
                context: this.id,
                ...I
            });
            return k
        }
        async handleUserPrompt(I={}) {
            await s(this, Q, pe).send("browsingContext.handleUserPrompt", {
                context: this.id,
                ...I
            })
        }
        async setViewport(I={}) {
            await s(this, Q, pe).send("browsingContext.setViewport", {
                context: this.id,
                ...I
            })
        }
        async performActions(I) {
            await s(this, Q, pe).send("input.performActions", {
                context: this.id,
                actions: I
            })
        }
        async releaseActions() {
            await s(this, Q, pe).send("input.releaseActions", {
                context: this.id
            })
        }
        createWindowRealm(I) {
            return g(this, Q, bl).call(this, I)
        }
        async addPreloadScript(I, k={}) {
            return await this.userContext.browser.addPreloadScript(I, {
                ...k,
                contexts: [this]
            })
        }
        async addIntercept(I) {
            const {result: {intercept: k}} = await this.userContext.browser.session.send("network.addIntercept", {
                ...I,
                contexts: [this.id]
            });
            return k
        }
        async removePreloadScript(I) {
            await this.userContext.browser.removePreloadScript(I)
        }
        async setGeolocationOverride(I) {
            if (!("coordinates"in I))
                throw new Error("Missing coordinates");
            await this.userContext.browser.session.send("emulation.setGeolocationOverride", {
                coordinates: I.coordinates,
                contexts: [this.id]
            })
        }
        async setTimezoneOverride(I) {
            I != null && I.startsWith("GMT") && (I = I == null ? void 0 : I.replace("GMT", "")),
            await this.userContext.browser.session.send("emulation.setTimezoneOverride", {
                timezone: I ?? null,
                contexts: [this.id]
            })
        }
        async setScreenOrientationOverride(I) {
            await s(this, Q, pe).send("emulation.setScreenOrientationOverride", {
                screenOrientation: I,
                contexts: [this.id]
            })
        }
        async getCookies(I={}) {
            const {result: {cookies: k}} = await s(this, Q, pe).send("storage.getCookies", {
                ...I,
                partition: {
                    type: "context",
                    context: this.id
                }
            });
            return k
        }
        async setCookie(I) {
            await s(this, Q, pe).send("storage.setCookie", {
                cookie: I,
                partition: {
                    type: "context",
                    context: this.id
                }
            })
        }
        async setFiles(I, k) {
            await s(this, Q, pe).send("input.setFiles", {
                context: this.id,
                element: I,
                files: k
            })
        }
        async subscribe(I) {
            await s(this, Q, pe).subscribe(I, [this.id])
        }
        async addInterception(I) {
            await s(this, Q, pe).subscribe(I, [this.id])
        }
        [(t = [$s],
        r = [L(I => s(I, q))],
        n = [L(I => s(I, q))],
        o = [L(I => s(I, q))],
        a = [L(I => s(I, q))],
        c = [L(I => s(I, q))],
        p = [L(I => s(I, q))],
        h = [L(I => s(I, q))],
        d = [L(I => s(I, q))],
        l = [L(I => s(I, q))],
        w = [L(I => s(I, q))],
        C = [L(I => s(I, q))],
        E = [L(I => s(I, q))],
        S = [L(I => s(I, q))],
        b = [L(I => s(I, q))],
        y = [L(I => s(I, q))],
        D = [L(I => s(I, q))],
        v = [L(I => s(I, q))],
        P = [L(I => s(I, q))],
        A = [L(I => s(I, q))],
        M = [L(I => s(I, q))],
        x = [L(I => s(I, q))],
        f = [L(I => s(I, q))],
        _ = [L(I => s(I, q))],
        N = [L(I => s(I, q))],
        le)]() {
            s(this, q) ?? m(this, q, "Browsing context already closed, probably because the user context closed."),
            this.emit("closed", {
                reason: s(this, q)
            }),
            s(this, Se).dispose(),
            super[le]()
        }
        async deleteCookie(...I) {
            await Promise.all(I.map(async k => {
                await s(this, Q, pe).send("storage.deleteCookies", {
                    filter: k,
                    partition: {
                        type: "context",
                        context: this.id
                    }
                })
            }
            ))
        }
        async locateNodes(I, k) {
            return (await s(this, Q, pe).send("browsingContext.locateNodes", {
                context: this.id,
                locator: I,
                startNodes: k.length ? k : void 0
            })).result.nodes
        }
        async setJavaScriptEnabled(I) {
            await this.userContext.browser.session.send("emulation.setScriptingEnabled", {
                enabled: I ? null : !1,
                contexts: [this.id]
            }),
            s(this, Ls).javaScriptEnabled = I
        }
        isJavaScriptEnabled() {
            return s(this, Ls).javaScriptEnabled
        }
        async setUserAgent(I) {
            await s(this, Q, pe).send("emulation.setUserAgentOverride", {
                userAgent: I,
                contexts: [this.id]
            })
        }
        async setOfflineMode(I) {
            await s(this, Q, pe).send("emulation.setNetworkConditions", {
                networkConditions: I ? {
                    type: "offline"
                } : null,
                contexts: [this.id]
            })
        }
    }
    ,
    K = new WeakMap,
    q = new WeakMap,
    he = new WeakMap,
    Ee = new WeakMap,
    Se = new WeakMap,
    Gr = new WeakMap,
    $t = new WeakMap,
    Ls = new WeakMap,
    Q = new WeakSet,
    im = function() {
        s(this, Se).use(new J(this.userContext)).once("closed", ({reason: W}) => {
            this.dispose(`Browsing context already closed: ${W}`)
        }
        );
        const k = s(this, Se).use(new J(s(this, Q, pe)));
        k.on("input.fileDialogOpened", W => {
            this.id === W.context && this.emit("filedialogopened", W)
        }
        ),
        k.on("browsingContext.contextCreated", W => {
            if (W.parent !== this.id)
                return;
            const Pe = Y.from(this.userContext, this, W.context, W.url, W.originalOpener);
            s(this, Ee).set(W.context, Pe);
            const mt = s(this, Se).use(new J(Pe));
            mt.once("closed", () => {
                mt.removeAllListeners(),
                s(this, Ee).delete(Pe.id)
            }
            ),
            this.emit("browsingcontext", {
                browsingContext: Pe
            })
        }
        ),
        k.on("browsingContext.contextDestroyed", W => {
            W.context === this.id && this.dispose("Browsing context already closed.")
        }
        ),
        k.on("browsingContext.historyUpdated", W => {
            W.context === this.id && (m(this, he, W.url),
            this.emit("historyUpdated", void 0))
        }
        ),
        k.on("browsingContext.domContentLoaded", W => {
            W.context === this.id && (m(this, he, W.url),
            this.emit("DOMContentLoaded", void 0))
        }
        ),
        k.on("browsingContext.load", W => {
            W.context === this.id && (m(this, he, W.url),
            this.emit("load", void 0))
        }
        ),
        k.on("browsingContext.navigationStarted", W => {
            if (W.context !== this.id)
                return;
            for (const [mt,Vr] of s(this, $t))
                Vr.disposed && s(this, $t).delete(mt);
            if (s(this, K) !== void 0 && !s(this, K).disposed)
                return;
            m(this, K, Ib.from(this));
            const Pe = s(this, Se).use(new J(s(this, K)));
            for (const mt of ["fragment", "failed", "aborted"])
                Pe.once(mt, ({url: Vr}) => {
                    Pe[le](),
                    m(this, he, Vr)
                }
                );
            this.emit("navigation", {
                navigation: s(this, K)
            })
        }
        ),
        k.on("network.beforeRequestSent", W => {
            if (W.context !== this.id || s(this, $t).has(W.request.request))
                return;
            const Pe = Nb.from(this, W);
            s(this, $t).set(Pe.id, Pe),
            this.emit("request", {
                request: Pe
            })
        }
        ),
        k.on("log.entryAdded", W => {
            W.source.context === this.id && this.emit("log", {
                entry: W
            })
        }
        ),
        k.on("browsingContext.userPromptOpened", W => {
            if (W.context !== this.id)
                return;
            const Pe = Rb.from(this, W);
            this.emit("userprompt", {
                userPrompt: Pe
            })
        }
        )
    }
    ,
    pe = function() {
        return this.userContext.browser.session
    }
    ,
    bl = function(I) {
        const k = wl.from(this, I);
        return k.on("worker", W => {
            this.emit("worker", {
                realm: W
            })
        }
        ),
        k
    }
    ,
    ( () => {
        const I = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        T = [L(k => s(k, q))],
        j = [L(k => s(k, q))],
        ne(Y, null, t, {
            kind: "method",
            name: "dispose",
            static: !1,
            private: !1,
            access: {
                has: k => "dispose"in k,
                get: k => k.dispose
            },
            metadata: I
        }, null, e),
        ne(Y, null, r, {
            kind: "method",
            name: "activate",
            static: !1,
            private: !1,
            access: {
                has: k => "activate"in k,
                get: k => k.activate
            },
            metadata: I
        }, null, e),
        ne(Y, null, n, {
            kind: "method",
            name: "captureScreenshot",
            static: !1,
            private: !1,
            access: {
                has: k => "captureScreenshot"in k,
                get: k => k.captureScreenshot
            },
            metadata: I
        }, null, e),
        ne(Y, null, o, {
            kind: "method",
            name: "close",
            static: !1,
            private: !1,
            access: {
                has: k => "close"in k,
                get: k => k.close
            },
            metadata: I
        }, null, e),
        ne(Y, null, a, {
            kind: "method",
            name: "traverseHistory",
            static: !1,
            private: !1,
            access: {
                has: k => "traverseHistory"in k,
                get: k => k.traverseHistory
            },
            metadata: I
        }, null, e),
        ne(Y, null, c, {
            kind: "method",
            name: "navigate",
            static: !1,
            private: !1,
            access: {
                has: k => "navigate"in k,
                get: k => k.navigate
            },
            metadata: I
        }, null, e),
        ne(Y, null, p, {
            kind: "method",
            name: "reload",
            static: !1,
            private: !1,
            access: {
                has: k => "reload"in k,
                get: k => k.reload
            },
            metadata: I
        }, null, e),
        ne(Y, null, h, {
            kind: "method",
            name: "setCacheBehavior",
            static: !1,
            private: !1,
            access: {
                has: k => "setCacheBehavior"in k,
                get: k => k.setCacheBehavior
            },
            metadata: I
        }, null, e),
        ne(Y, null, d, {
            kind: "method",
            name: "print",
            static: !1,
            private: !1,
            access: {
                has: k => "print"in k,
                get: k => k.print
            },
            metadata: I
        }, null, e),
        ne(Y, null, l, {
            kind: "method",
            name: "handleUserPrompt",
            static: !1,
            private: !1,
            access: {
                has: k => "handleUserPrompt"in k,
                get: k => k.handleUserPrompt
            },
            metadata: I
        }, null, e),
        ne(Y, null, w, {
            kind: "method",
            name: "setViewport",
            static: !1,
            private: !1,
            access: {
                has: k => "setViewport"in k,
                get: k => k.setViewport
            },
            metadata: I
        }, null, e),
        ne(Y, null, C, {
            kind: "method",
            name: "performActions",
            static: !1,
            private: !1,
            access: {
                has: k => "performActions"in k,
                get: k => k.performActions
            },
            metadata: I
        }, null, e),
        ne(Y, null, E, {
            kind: "method",
            name: "releaseActions",
            static: !1,
            private: !1,
            access: {
                has: k => "releaseActions"in k,
                get: k => k.releaseActions
            },
            metadata: I
        }, null, e),
        ne(Y, null, S, {
            kind: "method",
            name: "createWindowRealm",
            static: !1,
            private: !1,
            access: {
                has: k => "createWindowRealm"in k,
                get: k => k.createWindowRealm
            },
            metadata: I
        }, null, e),
        ne(Y, null, b, {
            kind: "method",
            name: "addPreloadScript",
            static: !1,
            private: !1,
            access: {
                has: k => "addPreloadScript"in k,
                get: k => k.addPreloadScript
            },
            metadata: I
        }, null, e),
        ne(Y, null, y, {
            kind: "method",
            name: "addIntercept",
            static: !1,
            private: !1,
            access: {
                has: k => "addIntercept"in k,
                get: k => k.addIntercept
            },
            metadata: I
        }, null, e),
        ne(Y, null, D, {
            kind: "method",
            name: "removePreloadScript",
            static: !1,
            private: !1,
            access: {
                has: k => "removePreloadScript"in k,
                get: k => k.removePreloadScript
            },
            metadata: I
        }, null, e),
        ne(Y, null, v, {
            kind: "method",
            name: "setGeolocationOverride",
            static: !1,
            private: !1,
            access: {
                has: k => "setGeolocationOverride"in k,
                get: k => k.setGeolocationOverride
            },
            metadata: I
        }, null, e),
        ne(Y, null, P, {
            kind: "method",
            name: "setTimezoneOverride",
            static: !1,
            private: !1,
            access: {
                has: k => "setTimezoneOverride"in k,
                get: k => k.setTimezoneOverride
            },
            metadata: I
        }, null, e),
        ne(Y, null, A, {
            kind: "method",
            name: "setScreenOrientationOverride",
            static: !1,
            private: !1,
            access: {
                has: k => "setScreenOrientationOverride"in k,
                get: k => k.setScreenOrientationOverride
            },
            metadata: I
        }, null, e),
        ne(Y, null, M, {
            kind: "method",
            name: "getCookies",
            static: !1,
            private: !1,
            access: {
                has: k => "getCookies"in k,
                get: k => k.getCookies
            },
            metadata: I
        }, null, e),
        ne(Y, null, x, {
            kind: "method",
            name: "setCookie",
            static: !1,
            private: !1,
            access: {
                has: k => "setCookie"in k,
                get: k => k.setCookie
            },
            metadata: I
        }, null, e),
        ne(Y, null, f, {
            kind: "method",
            name: "setFiles",
            static: !1,
            private: !1,
            access: {
                has: k => "setFiles"in k,
                get: k => k.setFiles
            },
            metadata: I
        }, null, e),
        ne(Y, null, _, {
            kind: "method",
            name: "subscribe",
            static: !1,
            private: !1,
            access: {
                has: k => "subscribe"in k,
                get: k => k.subscribe
            },
            metadata: I
        }, null, e),
        ne(Y, null, N, {
            kind: "method",
            name: "addInterception",
            static: !1,
            private: !1,
            access: {
                has: k => "addInterception"in k,
                get: k => k.addInterception
            },
            metadata: I
        }, null, e),
        ne(Y, null, T, {
            kind: "method",
            name: "deleteCookie",
            static: !1,
            private: !1,
            access: {
                has: k => "deleteCookie"in k,
                get: k => k.deleteCookie
            },
            metadata: I
        }, null, e),
        ne(Y, null, j, {
            kind: "method",
            name: "locateNodes",
            static: !1,
            private: !1,
            access: {
                has: k => "locateNodes"in k,
                get: k => k.locateNodes
            },
            metadata: I
        }, null, e),
        I && Object.defineProperty(Y, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: I
        })
    }
    )(),
    Y
}
)();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Bb = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , sn = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
};
let Ac = ( () => {
    var p, h, d, l, w, C, om, Gs;
    let i = J, e = [], t, r, n, o, a, c;
    return p = class extends i {
        constructor(D, v) {
            super();
            u(this, C);
            u(this, h, Bb(this, e));
            u(this, d, new Map);
            u(this, l, new Mt);
            u(this, w);
            O(this, "browser");
            m(this, w, v),
            this.browser = D
        }
        static create(D, v) {
            var A;
            const P = new p(D,v);
            return g(A = P, C, om).call(A),
            P
        }
        get browsingContexts() {
            return s(this, d).values()
        }
        get closed() {
            return s(this, h) !== void 0
        }
        get disposed() {
            return this.closed
        }
        get id() {
            return s(this, w)
        }
        dispose(D) {
            m(this, h, D),
            this[le]()
        }
        async createBrowsingContext(D, v={}) {
            var M;
            const {result: {context: P}} = await s(this, C, Gs).send("browsingContext.create", {
                type: D,
                ...v,
                referenceContext: (M = v.referenceContext) == null ? void 0 : M.id,
                userContext: s(this, w)
            })
              , A = s(this, d).get(P);
            return ze(A, "The WebDriver BiDi implementation is failing to create a browsing context correctly."),
            A
        }
        async remove() {
            try {
                await s(this, C, Gs).send("browser.removeUserContext", {
                    userContext: s(this, w)
                })
            } finally {
                this.dispose("User context already closed.")
            }
        }
        async getCookies(D={}, v=void 0) {
            const {result: {cookies: P}} = await s(this, C, Gs).send("storage.getCookies", {
                ...D,
                partition: {
                    type: "storageKey",
                    userContext: s(this, w),
                    sourceOrigin: v
                }
            });
            return P
        }
        async setCookie(D, v) {
            await s(this, C, Gs).send("storage.setCookie", {
                cookie: D,
                partition: {
                    type: "storageKey",
                    sourceOrigin: v,
                    userContext: this.id
                }
            })
        }
        async setPermissions(D, v, P) {
            await s(this, C, Gs).send("permissions.setPermission", {
                origin: D,
                descriptor: v,
                state: P,
                userContext: s(this, w)
            })
        }
        [(t = [$s],
        r = [L(D => s(D, h))],
        n = [L(D => s(D, h))],
        o = [L(D => s(D, h))],
        a = [L(D => s(D, h))],
        c = [L(D => s(D, h))],
        le)]() {
            s(this, h) ?? m(this, h, "User context already closed, probably because the browser disconnected/closed."),
            this.emit("closed", {
                reason: s(this, h)
            }),
            s(this, l).dispose(),
            super[le]()
        }
    }
    ,
    h = new WeakMap,
    d = new WeakMap,
    l = new WeakMap,
    w = new WeakMap,
    C = new WeakSet,
    om = function() {
        const D = s(this, l).use(new J(this.browser));
        D.once("closed", ({reason: P}) => {
            this.dispose(`User context was closed: ${P}`)
        }
        ),
        D.once("disconnected", ({reason: P}) => {
            this.dispose(`User context was closed: ${P}`)
        }
        ),
        s(this, l).use(new J(s(this, C, Gs))).on("browsingContext.contextCreated", P => {
            if (P.parent || P.userContext !== s(this, w))
                return;
            const A = Mb.from(this, void 0, P.context, P.url, P.originalOpener);
            s(this, d).set(A.id, A);
            const M = s(this, l).use(new J(A));
            M.on("closed", () => {
                M.removeAllListeners(),
                s(this, d).delete(A.id)
            }
            ),
            this.emit("browsingcontext", {
                browsingContext: A
            })
        }
        )
    }
    ,
    Gs = function() {
        return this.browser.session
    }
    ,
    ( () => {
        const D = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        sn(p, null, t, {
            kind: "method",
            name: "dispose",
            static: !1,
            private: !1,
            access: {
                has: v => "dispose"in v,
                get: v => v.dispose
            },
            metadata: D
        }, null, e),
        sn(p, null, r, {
            kind: "method",
            name: "createBrowsingContext",
            static: !1,
            private: !1,
            access: {
                has: v => "createBrowsingContext"in v,
                get: v => v.createBrowsingContext
            },
            metadata: D
        }, null, e),
        sn(p, null, n, {
            kind: "method",
            name: "remove",
            static: !1,
            private: !1,
            access: {
                has: v => "remove"in v,
                get: v => v.remove
            },
            metadata: D
        }, null, e),
        sn(p, null, o, {
            kind: "method",
            name: "getCookies",
            static: !1,
            private: !1,
            access: {
                has: v => "getCookies"in v,
                get: v => v.getCookies
            },
            metadata: D
        }, null, e),
        sn(p, null, a, {
            kind: "method",
            name: "setCookie",
            static: !1,
            private: !1,
            access: {
                has: v => "setCookie"in v,
                get: v => v.setCookie
            },
            metadata: D
        }, null, e),
        sn(p, null, c, {
            kind: "method",
            name: "setPermissions",
            static: !1,
            private: !1,
            access: {
                has: v => "setPermissions"in v,
                get: v => v.setPermissions
            },
            metadata: D
        }, null, e),
        D && Object.defineProperty(p, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D
        })
    }
    )(),
    O(p, "DEFAULT", "default"),
    p
}
)();
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Hr, am, Cl;
class Ga {
    static deserialize(e) {
        var t, r, n, o;
        if (!e) {
            Be("Service did not produce a result.");
            return
        }
        switch (e.type) {
        case "array":
            return (t = e.value) == null ? void 0 : t.map(a => this.deserialize(a));
        case "set":
            return (r = e.value) == null ? void 0 : r.reduce( (a, c) => a.add(this.deserialize(c)), new Set);
        case "object":
            return (n = e.value) == null ? void 0 : n.reduce( (a, c) => {
                const {key: p, value: h} = g(this, Hr, Cl).call(this, c);
                return a[p] = h,
                a
            }
            , {});
        case "map":
            return (o = e.value) == null ? void 0 : o.reduce( (a, c) => {
                const {key: p, value: h} = g(this, Hr, Cl).call(this, c);
                return a.set(p, h)
            }
            , new Map);
        case "promise":
            return {};
        case "regexp":
            return new RegExp(e.value.pattern,e.value.flags);
        case "date":
            return new Date(e.value);
        case "undefined":
            return;
        case "null":
            return null;
        case "number":
            return g(this, Hr, am).call(this, e.value);
        case "bigint":
            return BigInt(e.value);
        case "boolean":
            return !!e.value;
        case "string":
            return e.value
        }
        Be(`Deserialization of type ${e.type} not supported.`)
    }
}
Hr = new WeakSet,
am = function(e) {
    switch (e) {
    case "-0":
        return -0;
    case "NaN":
        return NaN;
    case "Infinity":
        return 1 / 0;
    case "-Infinity":
        return -1 / 0;
    default:
        return e
    }
}
,
Cl = function([e,t]) {
    const r = typeof e == "string" ? e : this.deserialize(e)
      , n = this.deserialize(t);
    return {
        key: r,
        value: n
    }
}
,
u(Ga, Hr);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ot, mi;
const Zl = class Zl extends zm {
    constructor(t, r) {
        super();
        u(this, Ot);
        O(this, "realm");
        u(this, mi, !1);
        m(this, Ot, t),
        this.realm = r
    }
    static from(t, r) {
        return new Zl(t,r)
    }
    get disposed() {
        return s(this, mi)
    }
    async jsonValue() {
        return await this.evaluate(t => t)
    }
    asElement() {
        return null
    }
    async dispose() {
        s(this, mi) || (m(this, mi, !0),
        await this.realm.destroyHandles([this]))
    }
    get isPrimitiveValue() {
        switch (s(this, Ot).type) {
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "undefined":
        case "null":
            return !0;
        default:
            return !1
        }
    }
    toString() {
        return this.isPrimitiveValue ? "JSHandle:" + Ga.deserialize(s(this, Ot)) : "JSHandle@" + s(this, Ot).type
    }
    get id() {
        return "handle"in s(this, Ot) ? s(this, Ot).handle : void 0
    }
    remoteValue() {
        return s(this, Ot)
    }
    remoteObject() {
        throw new X("Not available in WebDriver BiDi")
    }
}
;
Ot = new WeakMap,
mi = new WeakMap;
let Lr = Zl;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var jb = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , Hh = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
}
  , Fb = function(i, e, t) {
    if (e != null) {
        if (typeof e != "object" && typeof e != "function")
            throw new TypeError("Object expected.");
        var r, n;
        if (t) {
            if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose]
        }
        if (r === void 0) {
            if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose],
            t && (n = r)
        }
        if (typeof r != "function")
            throw new TypeError("Object not disposable.");
        n && (r = function() {
            try {
                n.call(this)
            } catch (o) {
                return Promise.reject(o)
            }
        }
        ),
        i.stack.push({
            value: e,
            dispose: r,
            async: t
        })
    } else
        t && i.stack.push({
            async: !0
        });
    return e
}
  , $b = function(i) {
    return function(e) {
        function t(a) {
            e.error = e.hasError ? new i(a,e.error,"An error was suppressed during disposal.") : a,
            e.hasError = !0
        }
        var r, n = 0;
        function o() {
            for (; r = e.stack.pop(); )
                try {
                    if (!r.async && n === 1)
                        return n = 0,
                        e.stack.push(r),
                        Promise.resolve().then(o);
                    if (r.dispose) {
                        var a = r.dispose.call(r.value);
                        if (r.async)
                            return n |= 2,
                            Promise.resolve(a).then(o, function(c) {
                                return t(c),
                                o()
                            })
                    } else
                        n |= 1
                } catch (c) {
                    t(c)
                }
            if (n === 1)
                return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError)
                throw e.error
        }
        return o()
    }
}(typeof SuppressedError == "function" ? SuppressedError : function(i, e, t) {
    var r = new Error(t);
    return r.name = "SuppressedError",
    r.error = i,
    r.suppressed = e,
    r
}
);
let Qi = ( () => {
    var n, o;
    let i = Km, e = [], t, r;
    return o = class extends i {
        constructor(p, h) {
            super(Lr.from(p, h));
            u(this, n, jb(this, e))
        }
        static from(p, h) {
            return new o(p,h)
        }
        get realm() {
            return this.handle.realm
        }
        get frame() {
            return this.realm.environment
        }
        remoteValue() {
            return this.handle.remoteValue()
        }
        async autofill(p) {
            const h = this.frame.client
              , l = (await h.send("DOM.describeNode", {
                objectId: this.handle.id
            })).node.backendNodeId
              , w = this.frame._id;
            await h.send("Autofill.trigger", {
                fieldId: l,
                frameId: w,
                card: p.creditCard
            })
        }
        async contentFrame() {
            const p = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                const d = Fb(p, await this.evaluateHandle(l => {
                    if (l instanceof HTMLIFrameElement || l instanceof HTMLFrameElement)
                        return l.contentWindow
                }
                ), !1).remoteValue();
                return d.type === "window" ? this.frame.page().frames().find(l => l._id === d.value.context) ?? null : null
            } catch (h) {
                p.error = h,
                p.hasError = !0
            } finally {
                $b(p)
            }
        }
        async uploadFile(...p) {
            const h = Gm.value.path;
            h && (p = p.map(d => h.win32.isAbsolute(d) || h.posix.isAbsolute(d) ? d : h.resolve(d))),
            await this.frame.setFiles(this, p)
        }
        async*queryAXTree(p, h) {
            const d = await this.frame.locateNodes(this, {
                type: "accessibility",
                value: {
                    role: h,
                    name: p
                }
            });
            return yield*op.map(d, l => Promise.resolve(o.from(l, this.realm)))
        }
        async backendNodeId() {
            if (!this.frame.page().browser().cdpSupported)
                throw new X;
            if (s(this, n))
                return s(this, n);
            const {node: p} = await this.frame.client.send("DOM.describeNode", {
                objectId: this.handle.id
            });
            return m(this, n, p.backendNodeId),
            s(this, n)
        }
    }
    ,
    n = new WeakMap,
    ( () => {
        const p = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        t = [L()],
        r = [L(), Wm],
        Hh(o, null, t, {
            kind: "method",
            name: "autofill",
            static: !1,
            private: !1,
            access: {
                has: h => "autofill"in h,
                get: h => h.autofill
            },
            metadata: p
        }, null, e),
        Hh(o, null, r, {
            kind: "method",
            name: "contentFrame",
            static: !1,
            private: !1,
            access: {
                has: h => "contentFrame"in h,
                get: h => h.contentFrame
            },
            metadata: p
        }, null, e),
        p && Object.defineProperty(o, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: p
        })
    }
    )(),
    o
}
)();
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Pa;
const eh = class eh extends Vm {
    constructor(t) {
        super(t.info.type, t.info.message, t.info.defaultValue);
        u(this, Pa);
        m(this, Pa, t),
        this.handled = t.handled
    }
    static from(t) {
        return new eh(t)
    }
    async handle(t) {
        await s(this, Pa).handle({
            accept: t.accept,
            userText: t.text
        })
    }
}
;
Pa = new WeakMap;
let xl = eh;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var md = function(i, e, t) {
    if (e != null) {
        if (typeof e != "object" && typeof e != "function")
            throw new TypeError("Object expected.");
        var r, n;
        if (t) {
            if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose]
        }
        if (r === void 0) {
            if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose],
            t && (n = r)
        }
        if (typeof r != "function")
            throw new TypeError("Object not disposable.");
        n && (r = function() {
            try {
                n.call(this)
            } catch (o) {
                return Promise.reject(o)
            }
        }
        ),
        i.stack.push({
            value: e,
            dispose: r,
            async: t
        })
    } else
        t && i.stack.push({
            async: !0
        });
    return e
}, zh = function(i) {
    return function(e) {
        function t(a) {
            e.error = e.hasError ? new i(a,e.error,"An error was suppressed during disposal.") : a,
            e.hasError = !0
        }
        var r, n = 0;
        function o() {
            for (; r = e.stack.pop(); )
                try {
                    if (!r.async && n === 1)
                        return n = 0,
                        e.stack.push(r),
                        Promise.resolve().then(o);
                    if (r.dispose) {
                        var a = r.dispose.call(r.value);
                        if (r.async)
                            return n |= 2,
                            Promise.resolve(a).then(o, function(c) {
                                return t(c),
                                o()
                            })
                    } else
                        n |= 1
                } catch (c) {
                    t(c)
                }
            if (n === 1)
                return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError)
                throw e.error
        }
        return o()
    }
}(typeof SuppressedError == "function" ? SuppressedError : function(i, e, t) {
    var r = new Error(t);
    return r.name = "SuppressedError",
    r.error = i,
    r.suppressed = e,
    r
}
), As, _a, gi, wi, Ia, ka, Bt, cm, um, ou, dm, lm;
const th = class th {
    constructor(e, t, r, n=!1) {
        u(this, Bt);
        u(this, As);
        O(this, "name");
        u(this, _a);
        u(this, gi);
        u(this, wi);
        u(this, Ia, []);
        u(this, ka, new Mt);
        u(this, ou, async e => {
            const t = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                if (e.channel !== s(this, wi))
                    return;
                const r = g(this, Bt, dm).call(this, e.source);
                if (!r)
                    return;
                const n = md(t, Lr.from(e.data, r), !1)
                  , o = md(t, new Mt, !1)
                  , a = [];
                let c;
                try {
                    const p = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        const h = md(p, await n.evaluateHandle( ([,,d]) => d), !1);
                        for (const [d,l] of await h.getProperties()) {
                            if (o.use(l),
                            l instanceof Qi) {
                                a[+d] = l,
                                o.use(l);
                                continue
                            }
                            a[+d] = l.jsonValue()
                        }
                        c = await s(this, _a).call(this, ...await Promise.all(a))
                    } catch (h) {
                        p.error = h,
                        p.hasError = !0
                    } finally {
                        zh(p)
                    }
                } catch (p) {
                    try {
                        p instanceof Error ? await n.evaluate( ([,h], d, l, w) => {
                            const C = new Error(l);
                            C.name = d,
                            w && (C.stack = w),
                            h(C)
                        }
                        , p.name, p.message, p.stack) : await n.evaluate( ([,h], d) => {
                            h(d)
                        }
                        , p)
                    } catch (h) {
                        Be(h)
                    }
                    return
                }
                try {
                    await n.evaluate( ([p], h) => {
                        p(h)
                    }
                    , c)
                } catch (p) {
                    Be(p)
                }
            } catch (r) {
                t.error = r,
                t.hasError = !0
            } finally {
                zh(t)
            }
        }
        );
        m(this, As, e),
        this.name = t,
        m(this, _a, r),
        m(this, gi, n),
        m(this, wi, `__puppeteer__${s(this, As)._id}_page_exposeFunction_${this.name}`)
    }
    static async from(e, t, r, n=!1) {
        var a;
        const o = new th(e,t,r,n);
        return await g(a = o, Bt, cm).call(a),
        o
    }
    [Symbol.dispose]() {
        this[Symbol.asyncDispose]().catch(Be)
    }
    async[Symbol.asyncDispose]() {
        s(this, ka).dispose(),
        await Promise.all(s(this, Ia).map(async ([e,t]) => {
            const r = s(this, gi) ? e.isolatedRealm() : e.mainRealm();
            try {
                await Promise.all([r.evaluate(n => {
                    delete globalThis[n]
                }
                , this.name), ...e.childFrames().map(n => n.evaluate(o => {
                    delete globalThis[o]
                }
                , this.name)), e.browsingContext.removePreloadScript(t)])
            } catch (n) {
                Be(n)
            }
        }
        ))
    }
}
;
As = new WeakMap,
_a = new WeakMap,
gi = new WeakMap,
wi = new WeakMap,
Ia = new WeakMap,
ka = new WeakMap,
Bt = new WeakSet,
cm = async function() {
    const e = s(this, Bt, um)
      , t = {
        type: "channel",
        value: {
            channel: s(this, wi),
            ownership: "root"
        }
    };
    s(this, ka).use(new J(e)).on("script.message", s(this, ou));
    const n = ap(Xm(a => {
        Object.assign(globalThis, {
            [PLACEHOLDER("name")]: function(...c) {
                return new Promise( (p, h) => {
                    a([p, h, c])
                }
                )
            }
        })
    }
    , {
        name: JSON.stringify(this.name)
    }))
      , o = [s(this, As)];
    for (const a of o)
        o.push(...a.childFrames());
    await Promise.all(o.map(async a => {
        const c = s(this, gi) ? a.isolatedRealm() : a.mainRealm();
        try {
            const [p] = await Promise.all([a.browsingContext.addPreloadScript(n, {
                arguments: [t],
                sandbox: c.sandbox
            }), c.realm.callFunction(n, !1, {
                arguments: [t]
            })]);
            s(this, Ia).push([a, p])
        } catch (p) {
            Be(p)
        }
    }
    ))
}
,
um = function() {
    return s(this, As).page().browser().connection
}
,
ou = new WeakMap,
dm = function(e) {
    const t = g(this, Bt, lm).call(this, e.context);
    if (t)
        return t.realm(e.realm)
}
,
lm = function(e) {
    const t = [s(this, As)];
    for (const r of t) {
        if (r._id === e)
            return r;
        t.push(...r.childFrames())
    }
}
;
let Zi = th;
var Ub = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , Lb = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
};
let qb = ( () => {
    var r, n, o, a, c, hm, h;
    let i = Ym, e = [], t;
    return h = class extends i {
        constructor(w, C, E) {
            super();
            u(this, c);
            u(this, r, Ub(this, e));
            u(this, n);
            u(this, o);
            u(this, a, !1);
            m(this, r, w),
            m(this, n, C),
            m(this, a, E);
            const S = w["goog:securityDetails"];
            E && S && m(this, o, new Jm(S))
        }
        static from(w, C, E) {
            var b;
            const S = new h(w,C,E);
            return g(b = S, c, hm).call(b),
            S
        }
        remoteAddress() {
            return {
                ip: "",
                port: -1
            }
        }
        url() {
            return s(this, r).url
        }
        status() {
            return s(this, r).status
        }
        statusText() {
            return s(this, r).statusText
        }
        headers() {
            const w = {};
            for (const C of s(this, r).headers)
                C.value.type === "string" && (w[C.name.toLowerCase()] = C.value.value);
            return w
        }
        request() {
            return s(this, n)
        }
        fromCache() {
            return s(this, r).fromCache
        }
        timing() {
            const w = s(this, n).timing();
            return {
                requestTime: w.requestTime,
                proxyStart: -1,
                proxyEnd: -1,
                dnsStart: w.dnsStart,
                dnsEnd: w.dnsEnd,
                connectStart: w.connectStart,
                connectEnd: w.connectEnd,
                sslStart: w.tlsStart,
                sslEnd: -1,
                workerStart: -1,
                workerReady: -1,
                workerFetchStart: -1,
                workerRespondWithSettled: -1,
                workerRouterEvaluationStart: -1,
                workerCacheLookupStart: -1,
                sendStart: w.requestStart,
                sendEnd: -1,
                pushStart: -1,
                pushEnd: -1,
                receiveHeadersStart: w.responseStart,
                receiveHeadersEnd: w.responseEnd
            }
        }
        frame() {
            return s(this, n).frame()
        }
        fromServiceWorker() {
            return !1
        }
        securityDetails() {
            if (!s(this, a))
                throw new X;
            return s(this, o) ?? null
        }
        async content() {
            return await s(this, n).getResponseContent()
        }
    }
    ,
    r = new WeakMap,
    n = new WeakMap,
    o = new WeakMap,
    a = new WeakMap,
    c = new WeakSet,
    hm = function() {
        var w, C;
        s(this, r).fromCache && (s(this, n)._fromMemoryCache = !0,
        (w = s(this, n).frame()) == null || w.page().trustedEmitter.emit("requestservedfromcache", s(this, n))),
        (C = s(this, n).frame()) == null || C.page().trustedEmitter.emit("response", this)
    }
    ,
    ( () => {
        const w = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        t = [Qm],
        Lb(h, null, t, {
            kind: "method",
            name: "remoteAddress",
            static: !1,
            private: !1,
            access: {
                has: C => "remoteAddress"in C,
                get: C => C.remoteAddress
            },
            metadata: w
        }, null, e),
        w && Object.defineProperty(h, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: w
        })
    }
    )(),
    h
}
)();
var El;
const pm = new WeakMap;
var Br, Ta, Me, se, jt, mm, Sl, Pl, Da, au;
class fm extends ah {
    constructor(t, r, n, o) {
        super();
        u(this, jt);
        u(this, Br);
        u(this, Ta, null);
        O(this, "id");
        u(this, Me);
        u(this, se);
        u(this, Da, !1);
        u(this, au, async () => {
            if (!s(this, Me))
                return;
            const t = s(this, Me).page()._credentials;
            t && !s(this, Da) ? (m(this, Da, !0),
            s(this, se).continueWithAuth({
                action: "provideCredentials",
                credentials: {
                    type: "password",
                    username: t.username,
                    password: t.password
                }
            })) : s(this, se).continueWithAuth({
                action: "cancel"
            })
        }
        );
        pm.set(t, this),
        this.interception.enabled = n,
        m(this, se, t),
        m(this, Me, r),
        m(this, Br, o ? s(o, Br) : []),
        this.id = t.id
    }
    static from(t, r, n, o) {
        var c;
        const a = new El(t,r,n,o);
        return g(c = a, jt, mm).call(c),
        a
    }
    get client() {
        return s(this, Me).client
    }
    canBeIntercepted() {
        return s(this, se).isBlocked
    }
    interceptResolutionState() {
        return s(this, se).isBlocked ? super.interceptResolutionState() : {
            action: Zm.Disabled
        }
    }
    url() {
        return s(this, se).url
    }
    resourceType() {
        if (!s(this, Me).page().browser().cdpSupported)
            throw new X;
        return (s(this, se).resourceType || "other").toLowerCase()
    }
    method() {
        return s(this, se).method
    }
    postData() {
        if (!s(this, Me).page().browser().cdpSupported)
            throw new X;
        return s(this, se).postData
    }
    hasPostData() {
        return s(this, se).hasPostData
    }
    async fetchPostData() {
        return await s(this, se).fetchPostData()
    }
    headers() {
        const t = {};
        for (const r of s(this, se).headers)
            t[r.name.toLowerCase()] = r.value.value;
        return {
            ...t,
            ...s(this, jt, Pl)
        }
    }
    response() {
        return s(this, Ta)
    }
    failure() {
        return s(this, se).error === void 0 ? null : {
            errorText: s(this, se).error
        }
    }
    isNavigationRequest() {
        return s(this, se).navigation !== void 0
    }
    initiator() {
        var t;
        return {
            ...s(this, se).initiator,
            type: ((t = s(this, se).initiator) == null ? void 0 : t.type) ?? "other"
        }
    }
    redirectChain() {
        return s(this, Br).slice()
    }
    frame() {
        return s(this, Me)
    }
    async continue(t, r) {
        return await super.continue({
            headers: s(this, jt, Sl) ? this.headers() : void 0,
            ...t
        }, r)
    }
    async _continue(t={}) {
        const r = Kh(t.headers);
        return this.interception.handled = !0,
        await s(this, se).continueRequest({
            url: t.url,
            method: t.method,
            body: t.postData ? {
                type: "base64",
                value: eg(t.postData)
            } : void 0,
            headers: r.length > 0 ? r : void 0
        }).catch(n => (this.interception.handled = !1,
        tg(n)))
    }
    async _abort() {
        return this.interception.handled = !0,
        await s(this, se).failRequest().catch(t => {
            throw this.interception.handled = !1,
            t
        }
        )
    }
    async _respond(t, r) {
        this.interception.handled = !0;
        let n;
        t.body && (n = ah.getResponse(t.body));
        const o = Kh(t.headers)
          , a = o.some(p => p.name === "content-length");
        t.contentType && o.push({
            name: "content-type",
            value: {
                type: "string",
                value: t.contentType
            }
        }),
        n != null && n.contentLength && !a && o.push({
            name: "content-length",
            value: {
                type: "string",
                value: String(n.contentLength)
            }
        });
        const c = t.status || 200;
        return await s(this, se).provideResponse({
            statusCode: c,
            headers: o.length > 0 ? o : void 0,
            reasonPhrase: sg[c],
            body: n != null && n.base64 ? {
                type: "base64",
                value: n == null ? void 0 : n.base64
            } : void 0
        }).catch(p => {
            throw this.interception.handled = !1,
            p
        }
        )
    }
    timing() {
        return s(this, se).timing()
    }
    getResponseContent() {
        return s(this, se).getResponseContent()
    }
}
Br = new WeakMap,
Ta = new WeakMap,
Me = new WeakMap,
se = new WeakMap,
jt = new WeakSet,
mm = function() {
    s(this, se).on("redirect", t => {
        const r = El.from(t, s(this, Me), this.interception.enabled, this);
        s(this, Br).push(this),
        t.once("success", () => {
            s(this, Me).page().trustedEmitter.emit("requestfinished", r)
        }
        ),
        t.once("error", () => {
            s(this, Me).page().trustedEmitter.emit("requestfailed", r)
        }
        ),
        r.finalizeInterceptions()
    }
    ),
    s(this, se).once("success", t => {
        m(this, Ta, qb.from(t, this, s(this, Me).page().browser().cdpSupported))
    }
    ),
    s(this, se).on("authenticate", s(this, au)),
    s(this, Me).page().trustedEmitter.emit("request", this),
    s(this, jt, Sl) && this.interception.handlers.push(async () => {
        await this.continue({
            headers: this.headers()
        }, 0)
    }
    )
}
,
Sl = function() {
    return !!Object.keys(s(this, jt, Pl)).length
}
,
Pl = function() {
    var t;
    return ((t = s(this, Me)) == null ? void 0 : t.page()._extraHTTPHeaders) ?? {}
}
,
Da = new WeakMap,
au = new WeakMap;
El = fm;
function Kh(i) {
    const e = [];
    for (const [t,r] of Object.entries(i ?? []))
        if (!Object.is(r, void 0)) {
            const n = Array.isArray(r) ? r : [r];
            for (const o of n)
                e.push({
                    name: t.toLowerCase(),
                    value: {
                        type: "string",
                        value: String(o)
                    }
                })
        }
    return e
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
class Wh extends Error {
}
var Ii, wm, ym;
class gm {
    static serialize(e) {
        switch (typeof e) {
        case "symbol":
        case "function":
            throw new Wh(`Unable to serializable ${typeof e}`);
        case "object":
            return g(this, Ii, ym).call(this, e);
        case "undefined":
            return {
                type: "undefined"
            };
        case "number":
            return g(this, Ii, wm).call(this, e);
        case "bigint":
            return {
                type: "bigint",
                value: e.toString()
            };
        case "string":
            return {
                type: "string",
                value: e
            };
        case "boolean":
            return {
                type: "boolean",
                value: e
            }
        }
    }
}
Ii = new WeakSet,
wm = function(e) {
    let t;
    return Object.is(e, -0) ? t = "-0" : Object.is(e, 1 / 0) ? t = "Infinity" : Object.is(e, -1 / 0) ? t = "-Infinity" : Object.is(e, NaN) ? t = "NaN" : t = e,
    {
        type: "number",
        value: t
    }
}
,
ym = function(e) {
    if (e === null)
        return {
            type: "null"
        };
    if (Array.isArray(e))
        return {
            type: "array",
            value: e.map(r => this.serialize(r))
        };
    if (rg(e)) {
        try {
            JSON.stringify(e)
        } catch (r) {
            throw r instanceof TypeError && r.message.startsWith("Converting circular structure to JSON") && (r.message += " Recursive objects are not allowed."),
            r
        }
        const t = [];
        for (const r in e)
            t.push([this.serialize(r), this.serialize(e[r])]);
        return {
            type: "object",
            value: t
        }
    } else {
        if (ng(e))
            return {
                type: "regexp",
                value: {
                    pattern: e.source,
                    flags: e.flags
                }
            };
        if (ig(e))
            return {
                type: "date",
                value: e.toISOString()
            }
    }
    throw new Wh("Custom object serialization not possible. Use plain objects instead.")
}
,
u(gm, Ii);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
function Hb(i) {
    if (i.exception.type !== "error")
        return Ga.deserialize(i.exception);
    const [e="",...t] = i.text.split(": ")
      , r = t.join(": ")
      , n = new Error(r);
    n.name = e;
    const o = [];
    if (i.stackTrace && o.length < Error.stackTraceLimit)
        for (const a of i.stackTrace.callFrames.reverse()) {
            if (ic.isPuppeteerURL(a.url) && a.url !== ic.INTERNAL_URL) {
                const c = ic.parse(a.url);
                o.unshift(`    at ${a.functionName || c.functionName} (${c.functionName} at ${c.siteString}, <anonymous>:${a.lineNumber}:${a.columnNumber})`)
            } else
                o.push(`    at ${a.functionName || "<anonymous>"} (${a.url}:${a.lineNumber}:${a.columnNumber})`);
            if (o.length >= Error.stackTraceLimit)
                break
        }
    return n.stack = [i.text, ...o].join(`
`),
    n
}
function vm(i, e) {
    return t => {
        throw t instanceof Tc ? t.message += ` at ${i}` : t instanceof og && (t.message = `Navigation timeout of ${e} ms exceeded`),
        t
    }
}
var zb = function(i, e, t) {
    if (e != null) {
        if (typeof e != "object" && typeof e != "function")
            throw new TypeError("Object expected.");
        var r, n;
        if (t) {
            if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose]
        }
        if (r === void 0) {
            if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose],
            t && (n = r)
        }
        if (typeof r != "function")
            throw new TypeError("Object not disposable.");
        n && (r = function() {
            try {
                n.call(this)
            } catch (o) {
                return Promise.reject(o)
            }
        }
        ),
        i.stack.push({
            value: e,
            dispose: r,
            async: t
        })
    } else
        t && i.stack.push({
            async: !0
        });
    return e
}, Kb = function(i) {
    return function(e) {
        function t(a) {
            e.error = e.hasError ? new i(a,e.error,"An error was suppressed during disposal.") : a,
            e.hasError = !0
        }
        var r, n = 0;
        function o() {
            for (; r = e.stack.pop(); )
                try {
                    if (!r.async && n === 1)
                        return n = 0,
                        e.stack.push(r),
                        Promise.resolve().then(o);
                    if (r.dispose) {
                        var a = r.dispose.call(r.value);
                        if (r.async)
                            return n |= 2,
                            Promise.resolve(a).then(o, function(c) {
                                return t(c),
                                o()
                            })
                    } else
                        n |= 1
                } catch (c) {
                    t(c)
                }
            if (n === 1)
                return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError)
                throw e.error
        }
        return o()
    }
}(typeof SuppressedError == "function" ? SuppressedError : function(i, e, t) {
    var r = new Error(t);
    return r.name = "SuppressedError",
    r.error = i,
    r.suppressed = e,
    r
}
), Na, _l;
class bm extends ag {
    constructor(t, r) {
        super(r);
        u(this, Na);
        O(this, "realm");
        O(this, "internalPuppeteerUtil");
        this.realm = t
    }
    initialize() {
        this.realm.on("destroyed", ({reason: t}) => {
            this.taskManager.terminateAll(new Error(t)),
            this.dispose()
        }
        ),
        this.realm.on("updated", () => {
            this.internalPuppeteerUtil = void 0,
            this.taskManager.rerunAll()
        }
        )
    }
    get puppeteerUtil() {
        const t = Promise.resolve();
        return cg.inject(r => {
            this.internalPuppeteerUtil && this.internalPuppeteerUtil.then(n => {
                n.dispose()
            }
            ),
            this.internalPuppeteerUtil = t.then( () => this.evaluateHandle(r))
        }
        , !this.internalPuppeteerUtil),
        this.internalPuppeteerUtil
    }
    async evaluateHandle(t, ...r) {
        return await g(this, Na, _l).call(this, !1, t, ...r)
    }
    async evaluate(t, ...r) {
        return await g(this, Na, _l).call(this, !0, t, ...r)
    }
    createHandle(t) {
        return (t.type === "node" || t.type === "window") && this instanceof Ur ? Qi.from(t, this) : Lr.from(t, this)
    }
    async serializeAsync(t) {
        return t instanceof ch && (t = await t.get(this)),
        this.serialize(t)
    }
    serialize(t) {
        if (t instanceof Lr || t instanceof Qi) {
            if (t.realm !== this) {
                if (!(t.realm instanceof Ur) || !(this instanceof Ur))
                    throw new Error("Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.");
                if (t.realm.environment !== this.environment)
                    throw new Error("Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.")
            }
            if (t.disposed)
                throw new Error("JSHandle is disposed!");
            return t.remoteValue()
        }
        return gm.serialize(t)
    }
    async destroyHandles(t) {
        if (this.disposed)
            return;
        const r = t.map( ({id: n}) => n).filter(n => n !== void 0);
        r.length !== 0 && await this.realm.disown(r).catch(n => {
            Be(n)
        }
        )
    }
    async adoptHandle(t) {
        return await this.evaluateHandle(r => r, t)
    }
    async transferHandle(t) {
        if (t.realm === this)
            return t;
        const r = this.adoptHandle(t);
        return await t.dispose(),
        await r
    }
}
Na = new WeakSet,
_l = async function(t, r, ...n) {
    var d;
    const o = ug(((d = dg(r)) == null ? void 0 : d.toString()) ?? ic.INTERNAL_URL);
    let a;
    const c = t ? "none" : "root"
      , p = t ? {} : {
        maxObjectDepth: 0,
        maxDomDepth: 0
    };
    if (cp(r)) {
        const l = dh.test(r) ? r : `${r}
${o}
`;
        a = this.realm.evaluate(l, !0, {
            resultOwnership: c,
            userActivation: !0,
            serializationOptions: p
        })
    } else {
        let l = ap(r);
        l = dh.test(l) ? l : `${l}
${o}
`,
        a = this.realm.callFunction(l, !0, {
            arguments: n.some(w => w instanceof ch) ? await Promise.all(n.map(w => this.serializeAsync(w))) : n.map(w => this.serialize(w)),
            resultOwnership: c,
            userActivation: !0,
            serializationOptions: p
        })
    }
    const h = await a;
    if ("type"in h && h.type === "exception")
        throw Hb(h.exceptionDetails);
    return t ? Ga.deserialize(h.result) : this.createHandle(h.result)
}
;
var yi, cu, Cm, vi;
const uu = class uu extends bm {
    constructor(t, r) {
        super(t, r.timeoutSettings);
        u(this, cu);
        u(this, yi);
        u(this, vi, !1);
        m(this, yi, r)
    }
    static from(t, r) {
        var o;
        const n = new uu(t,r);
        return g(o = n, cu, Cm).call(o),
        n
    }
    get puppeteerUtil() {
        let t = Promise.resolve();
        return s(this, vi) || (t = Promise.all([Zi.from(this.environment, "__ariaQuerySelector", uh.queryOne, !!this.sandbox), Zi.from(this.environment, "__ariaQuerySelectorAll", async (r, n) => {
            const o = uh.queryAll(r, n);
            return await r.realm.evaluateHandle( (...a) => a, ...await op.collect(o))
        }
        , !!this.sandbox)]),
        m(this, vi, !0)),
        t.then( () => super.puppeteerUtil)
    }
    get sandbox() {
        return this.realm.sandbox
    }
    get environment() {
        return s(this, yi)
    }
    async adoptBackendNode(t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const {object: n} = await s(this, yi).client.send("DOM.resolveNode", {
                backendNodeId: t,
                executionContextId: await this.realm.resolveExecutionContextId()
            });
            return await zb(r, Qi.from({
                handle: n.objectId,
                type: "node"
            }, this), !1).evaluateHandle(a => a)
        } catch (n) {
            r.error = n,
            r.hasError = !0
        } finally {
            Kb(r)
        }
    }
}
;
yi = new WeakMap,
cu = new WeakSet,
Cm = function() {
    oh(uu.prototype, this, "initialize").call(this),
    this.realm.on("updated", () => {
        this.environment.clearDocumentHandle(),
        m(this, vi, !1)
    }
    )
}
,
vi = new WeakMap;
let Ur = uu;
var Oa;
const sh = class sh extends bm {
    constructor(t, r) {
        super(t, r.timeoutSettings);
        u(this, Oa);
        m(this, Oa, r)
    }
    static from(t, r) {
        const n = new sh(t,r);
        return n.initialize(),
        n
    }
    get environment() {
        return s(this, Oa)
    }
    async adoptBackendNode() {
        throw new Error("Cannot adopt DOM nodes into a worker.")
    }
}
;
Oa = new WeakMap;
let Il = sh;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ra, Aa;
const rh = class rh extends lg {
    constructor(t, r) {
        super(r.origin);
        u(this, Ra);
        u(this, Aa);
        m(this, Ra, t),
        m(this, Aa, Il.from(r, this))
    }
    static from(t, r) {
        return new rh(t,r)
    }
    get frame() {
        return s(this, Ra)
    }
    mainRealm() {
        return s(this, Aa)
    }
    get client() {
        throw new X
    }
}
;
Ra = new WeakMap,
Aa = new WeakMap;
let kl = rh;
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Wb = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , Ws = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
}
  , Gh = function(i, e, t) {
    return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""),
    Object.defineProperty(i, "name", {
        configurable: !0,
        value: t ? "".concat(t, " ", e) : e
    })
};
function Gb(i) {
    switch (i) {
    case "group":
        return "startGroup";
    case "groupCollapsed":
        return "startGroupCollapsed";
    case "groupEnd":
        return "endGroup";
    default:
        return i
    }
}
let Vb = ( () => {
    var l, w, C, xm, Tl, Pc, y, _c, Ic, P;
    let i = bg, e = [], t, r, n, o, a, c, p, h, d;
    return P = class extends i {
        constructor(x, f) {
            super();
            u(this, C);
            u(this, l, Wb(this, e));
            O(this, "browsingContext");
            u(this, w, new WeakMap);
            O(this, "realms");
            O(this, "_id");
            O(this, "client");
            O(this, "accessibility");
            u(this, y, new Map);
            m(this, l, x),
            this.browsingContext = f,
            this._id = f.id,
            this.client = new Yi(this),
            this.realms = {
                default: Ur.from(this.browsingContext.defaultRealm, this),
                internal: Ur.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 1e4)}`), this)
            },
            this.accessibility = new hg(this.realms.default,this._id)
        }
        static from(x, f) {
            var N;
            const _ = new P(x,f);
            return g(N = _, C, xm).call(N),
            _
        }
        get timeoutSettings() {
            return this.page()._timeoutSettings
        }
        mainRealm() {
            return this.realms.default
        }
        isolatedRealm() {
            return this.realms.internal
        }
        realm(x) {
            for (const f of Object.values(this.realms))
                if (f.realm.id === x)
                    return f
        }
        page() {
            let x = s(this, l);
            for (; x instanceof P; )
                x = s(x, l);
            return x
        }
        url() {
            return this.browsingContext.url
        }
        parentFrame() {
            return s(this, l)instanceof P ? s(this, l) : null
        }
        childFrames() {
            return [...this.browsingContext.children].map(x => s(this, w).get(x))
        }
        async goto(x, f={}) {
            const [_] = await Promise.all([this.waitForNavigation(f), this.browsingContext.navigate(x, "interactive").catch(N => {
                if (!(gg(N) && N.message.includes("net::ERR_HTTP_RESPONSE_CODE_FAILURE")) && !N.message.includes("navigation canceled") && !N.message.includes("Navigation was aborted by another navigation"))
                    throw N
            }
            )]).catch(vm(x, f.timeout ?? this.timeoutSettings.navigationTimeout()));
            return _
        }
        async setContent(x, f={}) {
            await Promise.all([this.setFrameContent(x), Nc(Xa([s(this, C, _c).call(this, f), s(this, C, Ic).call(this, f)]))])
        }
        async waitForNavigation(x={}) {
            const {timeout: f=this.timeoutSettings.navigationTimeout(), signal: _} = x
              , N = this.childFrames().map(T => {
                var j;
                return g(j = T, C, Pc).call(j)
            }
            );
            return await Nc(Xa([wg(gt(this.browsingContext, "navigation"), gt(this.browsingContext, "historyUpdated").pipe(Ni( () => ({
                navigation: null
            })))).pipe(lh()).pipe(td( ({navigation: T}) => T === null ? cs(null) : s(this, C, _c).call(this, x).pipe(yg( () => N.length === 0 ? cs(void 0) : Xa(N)), Xs(gt(T, "fragment"), gt(T, "failed"), gt(T, "aborted")), td( () => {
                if (T.request) {
                    let j = function(K) {
                        return T === null ? cs(null) : K.response || K.error ? cs(T) : K.redirect ? j(K.redirect) : gt(K, "success").pipe(Xs(gt(K, "error")), Xs(gt(K, "redirect"))).pipe(td( () => j(K)))
                    };
                    return j(T.request)
                }
                return cs(T)
            }
            )))), s(this, C, Ic).call(this, x)]).pipe(Ni( ([T]) => {
                if (!T)
                    return null;
                const j = T.request;
                if (!j)
                    return null;
                const K = j.lastRedirect ?? j;
                return pm.get(K).response()
            }
            ), Xs(Dc(f), vg(_), g(this, C, Pc).call(this).pipe(Ni( () => {
                throw new Ml("Frame detached.")
            }
            )))))
        }
        waitForDevicePrompt() {
            throw new X
        }
        get detached() {
            return this.browsingContext.closed
        }
        async exposeFunction(x, f) {
            if (s(this, y).has(x))
                throw new Error(`Failed to add page binding with name ${x}: globalThis['${x}'] already exists!`);
            const _ = await Zi.from(this, x, f);
            s(this, y).set(x, _)
        }
        async removeExposedFunction(x) {
            const f = s(this, y).get(x);
            if (!f)
                throw new Error(`Failed to remove page binding with name ${x}: window['${x}'] does not exists!`);
            s(this, y).delete(x),
            await f[Symbol.asyncDispose]()
        }
        async createCDPSession() {
            if (!this.page().browser().cdpSupported)
                throw new X;
            return await this.page().browser().cdpConnection._createSession({
                targetId: this._id
            })
        }
        async setFiles(x, f) {
            await this.browsingContext.setFiles(x.remoteValue(), f)
        }
        async locateNodes(x, f) {
            return await this.browsingContext.locateNodes(f, [x.remoteValue()])
        }
    }
    ,
    l = new WeakMap,
    w = new WeakMap,
    C = new WeakSet,
    xm = function() {
        for (const x of this.browsingContext.children)
            g(this, C, Tl).call(this, x);
        this.browsingContext.on("browsingcontext", ({browsingContext: x}) => {
            g(this, C, Tl).call(this, x)
        }
        ),
        this.browsingContext.on("closed", () => {
            for (const x of Yi.sessions.values())
                x.frame === this && x.onClose();
            this.page().trustedEmitter.emit("framedetached", this)
        }
        ),
        this.browsingContext.on("request", ({request: x}) => {
            const f = fm.from(x, this, this.page().isNetworkInterceptionEnabled);
            x.once("success", () => {
                this.page().trustedEmitter.emit("requestfinished", f)
            }
            ),
            x.once("error", () => {
                this.page().trustedEmitter.emit("requestfailed", f)
            }
            ),
            f.finalizeInterceptions()
        }
        ),
        this.browsingContext.on("navigation", ({navigation: x}) => {
            x.once("fragment", () => {
                this.page().trustedEmitter.emit("framenavigated", this)
            }
            )
        }
        ),
        this.browsingContext.on("load", () => {
            this.page().trustedEmitter.emit("load", void 0)
        }
        ),
        this.browsingContext.on("DOMContentLoaded", () => {
            this._hasStartedLoading = !0,
            this.page().trustedEmitter.emit("domcontentloaded", void 0),
            this.page().trustedEmitter.emit("framenavigated", this)
        }
        ),
        this.browsingContext.on("userprompt", ({userPrompt: x}) => {
            this.page().trustedEmitter.emit("dialog", xl.from(x))
        }
        ),
        this.browsingContext.on("log", ({entry: x}) => {
            if (this._id === x.source.context)
                if (Xb(x)) {
                    const f = x.args.map(N => this.mainRealm().createHandle(N))
                      , _ = f.reduce( (N, T) => {
                        const j = T instanceof Lr && T.isPrimitiveValue ? Ga.deserialize(T.remoteValue()) : T.toString();
                        return `${N} ${j}`
                    }
                    , "").slice(1);
                    this.page().trustedEmitter.emit("console", new pg(Gb(x.method),_,f,Yb(x.stackTrace),this))
                } else if (Jb(x)) {
                    const f = new Error(x.text ?? "")
                      , _ = f.message.split(`
`).length
                      , N = f.stack.split(`
`).splice(0, _)
                      , T = [];
                    if (x.stackTrace) {
                        for (const j of x.stackTrace.callFrames)
                            if (T.push(`    at ${j.functionName || "<anonymous>"} (${j.url}:${j.lineNumber + 1}:${j.columnNumber + 1})`),
                            T.length >= Error.stackTraceLimit)
                                break
                    }
                    f.stack = [...N, ...T].join(`
`),
                    this.page().trustedEmitter.emit("pageerror", f)
                } else
                    Be(`Unhandled LogEntry with type "${x.type}", text "${x.text}" and level "${x.level}"`)
        }
        ),
        this.browsingContext.on("worker", ({realm: x}) => {
            const f = kl.from(this, x);
            x.on("destroyed", () => {
                this.page().trustedEmitter.emit("workerdestroyed", f)
            }
            ),
            this.page().trustedEmitter.emit("workercreated", f)
        }
        )
    }
    ,
    Tl = function(x) {
        const f = P.from(this, x);
        return s(this, w).set(x, f),
        this.page().trustedEmitter.emit("frameattached", f),
        x.on("closed", () => {
            s(this, w).delete(x)
        }
        ),
        f
    }
    ,
    Pc = function() {
        return fg( () => this.detached ? cs(this) : gt(this.page().trustedEmitter, "framedetached").pipe(mg(x => x === this)))
    }
    ,
    y = new WeakMap,
    _c = function() {
        return a.value
    }
    ,
    Ic = function() {
        return p.value
    }
    ,
    ( () => {
        const x = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        t = [qs],
        r = [qs],
        n = [qs],
        o = [qs],
        c = [qs],
        h = [qs],
        d = [qs],
        Ws(P, null, t, {
            kind: "method",
            name: "goto",
            static: !1,
            private: !1,
            access: {
                has: f => "goto"in f,
                get: f => f.goto
            },
            metadata: x
        }, null, e),
        Ws(P, null, r, {
            kind: "method",
            name: "setContent",
            static: !1,
            private: !1,
            access: {
                has: f => "setContent"in f,
                get: f => f.setContent
            },
            metadata: x
        }, null, e),
        Ws(P, null, n, {
            kind: "method",
            name: "waitForNavigation",
            static: !1,
            private: !1,
            access: {
                has: f => "waitForNavigation"in f,
                get: f => f.waitForNavigation
            },
            metadata: x
        }, null, e),
        Ws(P, a = {
            value: Gh(function(f={}) {
                let {waitUntil: _="load"} = f;
                const {timeout: N=this.timeoutSettings.navigationTimeout()} = f;
                Array.isArray(_) || (_ = [_]);
                const T = new Set;
                for (const j of _)
                    switch (j) {
                    case "load":
                        {
                            T.add("load");
                            break
                        }
                    case "domcontentloaded":
                        {
                            T.add("DOMContentLoaded");
                            break
                        }
                    }
                return T.size === 0 ? cs(void 0) : Xa([...T].map(j => gt(this.browsingContext, j))).pipe(Ni( () => {}
                ), lh(), Xs(Dc(N), g(this, C, Pc).call(this).pipe(Ni( () => {
                    throw new Error("Frame detached.")
                }
                ))))
            }, "#waitForLoad$")
        }, o, {
            kind: "method",
            name: "#waitForLoad$",
            static: !1,
            private: !0,
            access: {
                has: f => Va(C, f),
                get: f => s(f, C, _c)
            },
            metadata: x
        }, null, e),
        Ws(P, p = {
            value: Gh(function(f={}) {
                let {waitUntil: _="load"} = f;
                Array.isArray(_) || (_ = [_]);
                let N = 1 / 0;
                for (const T of _)
                    switch (T) {
                    case "networkidle0":
                        {
                            N = Math.min(0, N);
                            break
                        }
                    case "networkidle2":
                        {
                            N = Math.min(2, N);
                            break
                        }
                    }
                return N === 1 / 0 ? cs(void 0) : this.page().waitForNetworkIdle$({
                    idleTime: 500,
                    timeout: f.timeout ?? this.timeoutSettings.timeout(),
                    concurrency: N
                })
            }, "#waitForNetworkIdle$")
        }, c, {
            kind: "method",
            name: "#waitForNetworkIdle$",
            static: !1,
            private: !0,
            access: {
                has: f => Va(C, f),
                get: f => s(f, C, Ic)
            },
            metadata: x
        }, null, e),
        Ws(P, null, h, {
            kind: "method",
            name: "setFiles",
            static: !1,
            private: !1,
            access: {
                has: f => "setFiles"in f,
                get: f => f.setFiles
            },
            metadata: x
        }, null, e),
        Ws(P, null, d, {
            kind: "method",
            name: "locateNodes",
            static: !1,
            private: !1,
            access: {
                has: f => "locateNodes"in f,
                get: f => f.locateNodes
            },
            metadata: x
        }, null, e),
        x && Object.defineProperty(P, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: x
        })
    }
    )(),
    P
}
)();
function Xb(i) {
    return i.type === "console"
}
function Jb(i) {
    return i.type === "javascript"
}
function Yb(i) {
    const e = [];
    if (i)
        for (const t of i.callFrames)
            e.push({
                url: t.url,
                lineNumber: t.lineNumber,
                columnNumber: t.columnNumber
            });
    return e
}
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ue;
(function(i) {
    i.None = "none",
    i.Key = "key",
    i.Pointer = "pointer",
    i.Wheel = "wheel"
}
)(Ue || (Ue = {}));
var de;
(function(i) {
    i.Pause = "pause",
    i.KeyDown = "keyDown",
    i.KeyUp = "keyUp",
    i.PointerUp = "pointerUp",
    i.PointerDown = "pointerDown",
    i.PointerMove = "pointerMove",
    i.Scroll = "scroll"
}
)(de || (de = {}));
const $i = i => {
    switch (i) {
    case "\r":
    case `
`:
        i = "Enter";
        break
    }
    if ([...i].length === 1)
        return i;
    switch (i) {
    case "Cancel":
        return "";
    case "Help":
        return "";
    case "Backspace":
        return "";
    case "Tab":
        return "";
    case "Clear":
        return "";
    case "Enter":
        return "";
    case "Shift":
    case "ShiftLeft":
        return "";
    case "Control":
    case "ControlLeft":
        return "";
    case "Alt":
    case "AltLeft":
        return "";
    case "Pause":
        return "";
    case "Escape":
        return "";
    case "PageUp":
        return "";
    case "PageDown":
        return "";
    case "End":
        return "";
    case "Home":
        return "";
    case "ArrowLeft":
        return "";
    case "ArrowUp":
        return "";
    case "ArrowRight":
        return "";
    case "ArrowDown":
        return "";
    case "Insert":
        return "";
    case "Delete":
        return "";
    case "NumpadEqual":
        return "";
    case "Numpad0":
        return "";
    case "Numpad1":
        return "";
    case "Numpad2":
        return "";
    case "Numpad3":
        return "";
    case "Numpad4":
        return "";
    case "Numpad5":
        return "";
    case "Numpad6":
        return "";
    case "Numpad7":
        return "";
    case "Numpad8":
        return "";
    case "Numpad9":
        return "";
    case "NumpadMultiply":
        return "";
    case "NumpadAdd":
        return "";
    case "NumpadSubtract":
        return "";
    case "NumpadDecimal":
        return "";
    case "NumpadDivide":
        return "";
    case "F1":
        return "";
    case "F2":
        return "";
    case "F3":
        return "";
    case "F4":
        return "";
    case "F5":
        return "";
    case "F6":
        return "";
    case "F7":
        return "";
    case "F8":
        return "";
    case "F9":
        return "";
    case "F10":
        return "";
    case "F11":
        return "";
    case "F12":
        return "";
    case "Meta":
    case "MetaLeft":
        return "";
    case "ShiftRight":
        return "";
    case "ControlRight":
        return "";
    case "AltRight":
        return "";
    case "MetaRight":
        return "";
    case "Digit0":
        return "0";
    case "Digit1":
        return "1";
    case "Digit2":
        return "2";
    case "Digit3":
        return "3";
    case "Digit4":
        return "4";
    case "Digit5":
        return "5";
    case "Digit6":
        return "6";
    case "Digit7":
        return "7";
    case "Digit8":
        return "8";
    case "Digit9":
        return "9";
    case "KeyA":
        return "a";
    case "KeyB":
        return "b";
    case "KeyC":
        return "c";
    case "KeyD":
        return "d";
    case "KeyE":
        return "e";
    case "KeyF":
        return "f";
    case "KeyG":
        return "g";
    case "KeyH":
        return "h";
    case "KeyI":
        return "i";
    case "KeyJ":
        return "j";
    case "KeyK":
        return "k";
    case "KeyL":
        return "l";
    case "KeyM":
        return "m";
    case "KeyN":
        return "n";
    case "KeyO":
        return "o";
    case "KeyP":
        return "p";
    case "KeyQ":
        return "q";
    case "KeyR":
        return "r";
    case "KeyS":
        return "s";
    case "KeyT":
        return "t";
    case "KeyU":
        return "u";
    case "KeyV":
        return "v";
    case "KeyW":
        return "w";
    case "KeyX":
        return "x";
    case "KeyY":
        return "y";
    case "KeyZ":
        return "z";
    case "Semicolon":
        return ";";
    case "Equal":
        return "=";
    case "Comma":
        return ",";
    case "Minus":
        return "-";
    case "Period":
        return ".";
    case "Slash":
        return "/";
    case "Backquote":
        return "`";
    case "BracketLeft":
        return "[";
    case "Backslash":
        return "\\";
    case "BracketRight":
        return "]";
    case "Quote":
        return '"';
    default:
        throw new Error(`Unknown key: "${i}"`)
    }
}
;
var ts;
class Qb extends Cg {
    constructor(t) {
        super();
        u(this, ts);
        m(this, ts, t)
    }
    async down(t, r) {
        await s(this, ts).mainFrame().browsingContext.performActions([{
            type: Ue.Key,
            id: "__puppeteer_keyboard",
            actions: [{
                type: de.KeyDown,
                value: $i(t)
            }]
        }])
    }
    async up(t) {
        await s(this, ts).mainFrame().browsingContext.performActions([{
            type: Ue.Key,
            id: "__puppeteer_keyboard",
            actions: [{
                type: de.KeyUp,
                value: $i(t)
            }]
        }])
    }
    async press(t, r={}) {
        const {delay: n=0} = r
          , o = [{
            type: de.KeyDown,
            value: $i(t)
        }];
        n > 0 && o.push({
            type: de.Pause,
            duration: n
        }),
        o.push({
            type: de.KeyUp,
            value: $i(t)
        }),
        await s(this, ts).mainFrame().browsingContext.performActions([{
            type: Ue.Key,
            id: "__puppeteer_keyboard",
            actions: o
        }])
    }
    async type(t, r={}) {
        const {delay: n=0} = r
          , o = [...t].map($i)
          , a = [];
        if (n <= 0)
            for (const c of o)
                a.push({
                    type: de.KeyDown,
                    value: c
                }, {
                    type: de.KeyUp,
                    value: c
                });
        else
            for (const c of o)
                a.push({
                    type: de.KeyDown,
                    value: c
                }, {
                    type: de.Pause,
                    duration: n
                }, {
                    type: de.KeyUp,
                    value: c
                });
        await s(this, ts).mainFrame().browsingContext.performActions([{
            type: Ue.Key,
            id: "__puppeteer_keyboard",
            actions: a
        }])
    }
    async sendCharacter(t) {
        if ([...t].length > 1)
            throw new Error("Cannot send more than 1 character.");
        await (await s(this, ts).focusedFrame()).isolatedRealm().evaluate(async n => {
            document.execCommand("insertText", !1, n)
        }
        , t)
    }
}
ts = new WeakMap;
const gd = i => {
    switch (i) {
    case fs.Left:
        return 0;
    case fs.Middle:
        return 1;
    case fs.Right:
        return 2;
    case fs.Back:
        return 3;
    case fs.Forward:
        return 4
    }
}
;
var Rt, jr;
class Zb extends xg {
    constructor(t) {
        super();
        u(this, Rt);
        u(this, jr, {
            x: 0,
            y: 0
        });
        m(this, Rt, t)
    }
    async reset() {
        m(this, jr, {
            x: 0,
            y: 0
        }),
        await s(this, Rt).mainFrame().browsingContext.releaseActions()
    }
    async move(t, r, n={}) {
        const o = s(this, jr)
          , a = {
            x: Math.round(t),
            y: Math.round(r)
        }
          , c = []
          , p = n.steps ?? 0;
        for (let h = 0; h < p; ++h)
            c.push({
                type: de.PointerMove,
                x: o.x + (a.x - o.x) * (h / p),
                y: o.y + (a.y - o.y) * (h / p),
                origin: n.origin
            });
        c.push({
            type: de.PointerMove,
            ...a,
            origin: n.origin
        }),
        m(this, jr, a),
        await s(this, Rt).mainFrame().browsingContext.performActions([{
            type: Ue.Pointer,
            id: "__puppeteer_mouse",
            actions: c
        }])
    }
    async down(t={}) {
        await s(this, Rt).mainFrame().browsingContext.performActions([{
            type: Ue.Pointer,
            id: "__puppeteer_mouse",
            actions: [{
                type: de.PointerDown,
                button: gd(t.button ?? fs.Left)
            }]
        }])
    }
    async up(t={}) {
        await s(this, Rt).mainFrame().browsingContext.performActions([{
            type: Ue.Pointer,
            id: "__puppeteer_mouse",
            actions: [{
                type: de.PointerUp,
                button: gd(t.button ?? fs.Left)
            }]
        }])
    }
    async click(t, r, n={}) {
        const o = [{
            type: de.PointerMove,
            x: Math.round(t),
            y: Math.round(r),
            origin: n.origin
        }]
          , a = {
            type: de.PointerDown,
            button: gd(n.button ?? fs.Left)
        }
          , c = {
            type: de.PointerUp,
            button: a.button
        };
        for (let p = 1; p < (n.count ?? 1); ++p)
            o.push(a, c);
        o.push(a),
        n.delay && o.push({
            type: de.Pause,
            duration: n.delay
        }),
        o.push(c),
        await s(this, Rt).mainFrame().browsingContext.performActions([{
            type: Ue.Pointer,
            id: "__puppeteer_mouse",
            actions: o
        }])
    }
    async wheel(t={}) {
        await s(this, Rt).mainFrame().browsingContext.performActions([{
            type: Ue.Wheel,
            id: "__puppeteer_wheel",
            actions: [{
                type: de.Scroll,
                ...s(this, jr) ?? {
                    x: 0,
                    y: 0
                },
                deltaX: t.deltaX ?? 0,
                deltaY: t.deltaY ?? 0
            }]
        }])
    }
    drag() {
        throw new X
    }
    dragOver() {
        throw new X
    }
    dragEnter() {
        throw new X
    }
    drop() {
        throw new X
    }
    dragAndDrop() {
        throw new X
    }
}
Rt = new WeakMap,
jr = new WeakMap;
var Ma, Ba, ja, Fr, $r, Fa, bi;
class eC {
    constructor(e, t, r, n, o, a) {
        u(this, Ma, !1);
        u(this, Ba);
        u(this, ja);
        u(this, Fr);
        u(this, $r);
        u(this, Fa);
        u(this, bi);
        m(this, $r, e),
        m(this, Fa, t),
        m(this, Ba, Math.round(n)),
        m(this, ja, Math.round(o)),
        m(this, bi, a),
        m(this, Fr, `__puppeteer_finger_${r}`)
    }
    async start(e={}) {
        if (s(this, Ma))
            throw new Sg("Touch has already started");
        await s(this, $r).mainFrame().browsingContext.performActions([{
            type: Ue.Pointer,
            id: s(this, Fr),
            parameters: {
                pointerType: "touch"
            },
            actions: [{
                type: de.PointerMove,
                x: s(this, Ba),
                y: s(this, ja),
                origin: e.origin
            }, {
                ...s(this, bi),
                type: de.PointerDown,
                button: 0
            }]
        }]),
        m(this, Ma, !0)
    }
    move(e, t) {
        const r = Math.round(e)
          , n = Math.round(t);
        return s(this, $r).mainFrame().browsingContext.performActions([{
            type: Ue.Pointer,
            id: s(this, Fr),
            parameters: {
                pointerType: "touch"
            },
            actions: [{
                ...s(this, bi),
                type: de.PointerMove,
                x: r,
                y: n
            }]
        }])
    }
    async end() {
        await s(this, $r).mainFrame().browsingContext.performActions([{
            type: Ue.Pointer,
            id: s(this, Fr),
            parameters: {
                pointerType: "touch"
            },
            actions: [{
                type: de.PointerUp,
                button: 0
            }]
        }]),
        s(this, Fa).removeHandle(this)
    }
}
Ma = new WeakMap,
Ba = new WeakMap,
ja = new WeakMap,
Fr = new WeakMap,
$r = new WeakMap,
Fa = new WeakMap,
bi = new WeakMap;
var $a;
class tC extends Eg {
    constructor(t) {
        super();
        u(this, $a);
        m(this, $a, t)
    }
    async touchStart(t, r, n={}) {
        const o = this.idGenerator()
          , a = {
            width: .5 * 2,
            height: .5 * 2,
            pressure: .5,
            altitudeAngle: Math.PI / 2
        }
          , c = new eC(s(this, $a),this,o,t,r,a);
        return await c.start(n),
        this.touches.push(c),
        c
    }
}
$a = new WeakMap;
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var sC = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
}
  , Vh = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , Xh = function(i, e, t) {
    if (e != null) {
        if (typeof e != "object" && typeof e != "function")
            throw new TypeError("Object expected.");
        var r, n;
        if (t) {
            if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose]
        }
        if (r === void 0) {
            if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose],
            t && (n = r)
        }
        if (typeof r != "function")
            throw new TypeError("Object not disposable.");
        n && (r = function() {
            try {
                n.call(this)
            } catch (o) {
                return Promise.reject(o)
            }
        }
        ),
        i.stack.push({
            value: e,
            dispose: r,
            async: t
        })
    } else
        t && i.stack.push({
            async: !0
        });
    return e
}
  , Jh = function(i) {
    return function(e) {
        function t(a) {
            e.error = e.hasError ? new i(a,e.error,"An error was suppressed during disposal.") : a,
            e.hasError = !0
        }
        var r, n = 0;
        function o() {
            for (; r = e.stack.pop(); )
                try {
                    if (!r.async && n === 1)
                        return n = 0,
                        e.stack.push(r),
                        Promise.resolve().then(o);
                    if (r.dispose) {
                        var a = r.dispose.call(r.value);
                        if (r.async)
                            return n |= 2,
                            Promise.resolve(a).then(o, function(c) {
                                return t(c),
                                o()
                            })
                    } else
                        n |= 1
                } catch (c) {
                    t(c)
                }
            if (n === 1)
                return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError)
                throw e.error
        }
        return o()
    }
}(typeof SuppressedError == "function" ? SuppressedError : function(i, e, t) {
    var r = new Error(t);
    return r.name = "SuppressedError",
    r.error = i,
    r.suppressed = e,
    r
}
);
let Mc = ( () => {
    var n, o, a, c, p, h, d, l, w, Em, E, S, b, y, kc, Dl, Nl, A;
    let i = Ng, e, t = [], r = [];
    return A = class extends i {
        constructor(f, _) {
            super();
            u(this, w);
            u(this, n, Vh(this, t, new J));
            u(this, o, Vh(this, r));
            u(this, a);
            u(this, c, null);
            u(this, p, new Set);
            O(this, "keyboard");
            O(this, "mouse");
            O(this, "touchscreen");
            O(this, "tracing");
            O(this, "coverage");
            u(this, h);
            u(this, d);
            u(this, l, new Set);
            u(this, E);
            u(this, S);
            O(this, "_extraHTTPHeaders", {});
            u(this, b);
            O(this, "_credentials", null);
            u(this, y);
            m(this, o, f),
            m(this, a, Vb.from(this, _)),
            m(this, h, new Pg(s(this, a).client)),
            this.tracing = new _g(s(this, a).client),
            this.coverage = new Ig(s(this, a).client),
            this.keyboard = new Qb(this),
            this.mouse = new Zb(this),
            this.touchscreen = new tC(this)
        }
        static from(f, _) {
            var T;
            const N = new A(f,_);
            return g(T = N, w, Em).call(T),
            N
        }
        get trustedEmitter() {
            return s(this, n)
        }
        set trustedEmitter(f) {
            m(this, n, f)
        }
        _client() {
            return s(this, a).client
        }
        async setUserAgent(f, _) {
            let N, T, j;
            if (typeof f == "string" ? (N = f,
            T = _) : (N = f.userAgent ?? await s(this, o).browser().userAgent(),
            T = f.userAgentMetadata,
            j = f.platform),
            !s(this, o).browser().cdpSupported && (T || j))
                throw new X("Current Browser does not support `userAgentMetadata` or `platform`");
            if (s(this, o).browser().cdpSupported && (T || j))
                return await this._client().send("Network.setUserAgentOverride", {
                    userAgent: N,
                    userAgentMetadata: T,
                    platform: j
                });
            const K = N !== "";
            N = N ?? await s(this, o).browser().userAgent(),
            await s(this, a).browsingContext.setUserAgent(K ? N : null);
            const q = Se => {
                Se && Object.defineProperty(navigator, "platform", {
                    value: Se,
                    configurable: !0
                })
            }
              , he = [s(this, a)];
            for (const Se of he)
                he.push(...Se.childFrames());
            s(this, E) && await this.removeScriptToEvaluateOnNewDocument(s(this, E));
            const [Ee] = await Promise.all([K ? this.evaluateOnNewDocument(q, j || void 0) : void 0, ...he.map(Se => Se.evaluate(q, j || void 0))]);
            m(this, E, Ee == null ? void 0 : Ee.identifier)
        }
        async setBypassCSP(f) {
            await this._client().send("Page.setBypassCSP", {
                enabled: f
            })
        }
        async queryObjects(f) {
            ze(!f.disposed, "Prototype JSHandle is disposed!"),
            ze(f.id, "Prototype JSHandle must not be referencing primitive value");
            const _ = await s(this, a).client.send("Runtime.queryObjects", {
                prototypeObjectId: f.id
            });
            return s(this, a).mainRealm().createHandle({
                type: "array",
                handle: _.objects.objectId
            })
        }
        browser() {
            return this.browserContext().browser()
        }
        browserContext() {
            return s(this, o)
        }
        mainFrame() {
            return s(this, a)
        }
        resize(f) {
            throw new Error("Method not implemented for WebDriver BiDi yet.")
        }
        openDevTools() {
            throw new Error("Method not implemented for WebDriver BiDi yet.")
        }
        async focusedFrame() {
            const f = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                const N = Xh(f, await this.mainFrame().isolatedRealm().evaluateHandle( () => {
                    let j = window;
                    for (; (j.document.activeElement instanceof j.HTMLIFrameElement || j.document.activeElement instanceof j.HTMLFrameElement) && j.document.activeElement.contentWindow !== null; )
                        j = j.document.activeElement.contentWindow;
                    return j
                }
                ), !1).remoteValue();
                ze(N.type === "window");
                const T = this.frames().find(j => j._id === N.value.context);
                return ze(T),
                T
            } catch (_) {
                f.error = _,
                f.hasError = !0
            } finally {
                Jh(f)
            }
        }
        frames() {
            const f = [s(this, a)];
            for (const _ of f)
                f.push(..._.childFrames());
            return f
        }
        isClosed() {
            return s(this, a).detached
        }
        async close(f) {
            const _ = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                const N = Xh(_, await s(this, o).waitForScreenshotOperations(), !1);
                try {
                    await s(this, a).browsingContext.close(f == null ? void 0 : f.runBeforeUnload)
                } catch {
                    return
                }
            } catch (N) {
                _.error = N,
                _.hasError = !0
            } finally {
                Jh(_)
            }
        }
        async reload(f={}) {
            const [_] = await Promise.all([s(this, a).waitForNavigation(f), s(this, a).browsingContext.reload({
                ignoreCache: f.ignoreCache ? !0 : void 0
            })]).catch(vm(this.url(), f.timeout ?? this._timeoutSettings.navigationTimeout()));
            return _
        }
        setDefaultNavigationTimeout(f) {
            this._timeoutSettings.setDefaultNavigationTimeout(f)
        }
        setDefaultTimeout(f) {
            this._timeoutSettings.setDefaultTimeout(f)
        }
        getDefaultTimeout() {
            return this._timeoutSettings.timeout()
        }
        getDefaultNavigationTimeout() {
            return this._timeoutSettings.navigationTimeout()
        }
        isJavaScriptEnabled() {
            return s(this, a).browsingContext.isJavaScriptEnabled()
        }
        async setGeolocation(f) {
            const {longitude: _, latitude: N, accuracy: T=0} = f;
            if (_ < -180 || _ > 180)
                throw new Error(`Invalid longitude "${_}": precondition -180 <= LONGITUDE <= 180 failed.`);
            if (N < -90 || N > 90)
                throw new Error(`Invalid latitude "${N}": precondition -90 <= LATITUDE <= 90 failed.`);
            if (T < 0)
                throw new Error(`Invalid accuracy "${T}": precondition 0 <= ACCURACY failed.`);
            return await s(this, a).browsingContext.setGeolocationOverride({
                coordinates: {
                    latitude: f.latitude,
                    longitude: f.longitude,
                    accuracy: f.accuracy
                }
            })
        }
        async setJavaScriptEnabled(f) {
            return await s(this, a).browsingContext.setJavaScriptEnabled(f)
        }
        async emulateMediaType(f) {
            return await s(this, h).emulateMediaType(f)
        }
        async emulateCPUThrottling(f) {
            return await s(this, h).emulateCPUThrottling(f)
        }
        async emulateMediaFeatures(f) {
            return await s(this, h).emulateMediaFeatures(f)
        }
        async emulateTimezone(f) {
            return await s(this, a).browsingContext.setTimezoneOverride(f)
        }
        async emulateIdleState(f) {
            return await s(this, h).emulateIdleState(f)
        }
        async emulateVisionDeficiency(f) {
            return await s(this, h).emulateVisionDeficiency(f)
        }
        async setViewport(f) {
            if (!this.browser().cdpSupported) {
                const N = f != null && f.width && (f != null && f.height) ? {
                    width: f.width,
                    height: f.height
                } : null
                  , T = f != null && f.deviceScaleFactor ? f.deviceScaleFactor : null
                  , j = f ? f.isLandscape ? {
                    natural: "landscape",
                    type: "landscape-primary"
                } : {
                    natural: "portrait",
                    type: "portrait-primary"
                } : null;
                await Promise.all([s(this, a).browsingContext.setViewport({
                    viewport: N,
                    devicePixelRatio: T
                }), s(this, a).browsingContext.setScreenOrientationOverride(j)]),
                m(this, c, f);
                return
            }
            const _ = await s(this, h).emulateViewport(f);
            m(this, c, f),
            _ && await this.reload()
        }
        viewport() {
            return s(this, c)
        }
        async pdf(f={}) {
            const {timeout: _=this._timeoutSettings.timeout(), path: N=void 0} = f
              , {printBackground: T, margin: j, landscape: K, width: q, height: he, pageRanges: Ee, scale: Se, preferCSSPageSize: Gr} = kg(f, "cm")
              , $t = Ee ? Ee.split(", ") : [];
            await Nc(hh(this.mainFrame().isolatedRealm().evaluate( () => document.fonts.ready)).pipe(Xs(Dc(_))));
            const Ls = await Nc(hh(s(this, a).browsingContext.print({
                background: T,
                margin: j,
                orientation: K ? "landscape" : "portrait",
                page: {
                    width: q,
                    height: he
                },
                pageRanges: $t,
                scale: Se,
                shrinkToFit: !Gr
            })).pipe(Xs(Dc(_))))
              , Q = ip(Ls, !0);
            return await this._maybeWriteTypedArrayToFile(N, Q),
            Q
        }
        async createPDFStream(f) {
            const _ = await this.pdf(f);
            return new ReadableStream({
                start(N) {
                    N.enqueue(_),
                    N.close()
                }
            })
        }
        async _screenshot(f) {
            const {clip: _, type: N, captureBeyondViewport: T, quality: j} = f;
            if (f.omitBackground !== void 0 && f.omitBackground)
                throw new X("BiDi does not support 'omitBackground'.");
            if (f.optimizeForSpeed !== void 0 && f.optimizeForSpeed)
                throw new X("BiDi does not support 'optimizeForSpeed'.");
            if (f.fromSurface !== void 0 && !f.fromSurface)
                throw new X("BiDi does not support 'fromSurface'.");
            if (_ !== void 0 && _.scale !== void 0 && _.scale !== 1)
                throw new X("BiDi does not support 'scale' in 'clip'.");
            let K;
            if (_)
                if (T)
                    K = _;
                else {
                    const [he,Ee] = await this.evaluate( () => {
                        if (!window.visualViewport)
                            throw new Error("window.visualViewport is not supported.");
                        return [window.visualViewport.pageLeft, window.visualViewport.pageTop]
                    }
                    );
                    K = {
                        ..._,
                        x: _.x - he,
                        y: _.y - Ee
                    }
                }
            return await s(this, a).browsingContext.captureScreenshot({
                origin: T ? "document" : "viewport",
                format: {
                    type: `image/${N}`,
                    ...j !== void 0 ? {
                        quality: j / 100
                    } : {}
                },
                ...K ? {
                    clip: {
                        type: "box",
                        ...K
                    }
                } : {}
            })
        }
        async createCDPSession() {
            return await s(this, a).createCDPSession()
        }
        async bringToFront() {
            await s(this, a).browsingContext.activate()
        }
        async evaluateOnNewDocument(f, ..._) {
            const N = rC(f, ..._);
            return {
                identifier: await s(this, a).browsingContext.addPreloadScript(N)
            }
        }
        async removeScriptToEvaluateOnNewDocument(f) {
            await s(this, a).browsingContext.removePreloadScript(f)
        }
        async exposeFunction(f, _) {
            return await this.mainFrame().exposeFunction(f, "default"in _ ? _.default : _)
        }
        isDragInterceptionEnabled() {
            return !1
        }
        async setCacheEnabled(f) {
            if (!s(this, o).browser().cdpSupported) {
                await s(this, a).browsingContext.setCacheBehavior(f ? "default" : "bypass");
                return
            }
            await this._client().send("Network.setCacheDisabled", {
                cacheDisabled: !f
            })
        }
        async cookies(...f) {
            const _ = (f.length ? f : [this.url()]).map(T => new URL(T));
            return (await s(this, a).browsingContext.getCookies()).map(T => Sm(T)).filter(T => _.some(j => oC(T, j)))
        }
        isServiceWorkerBypassed() {
            throw new X
        }
        target() {
            throw new X
        }
        async waitForFileChooser(f={}) {
            const {timeout: _=this._timeoutSettings.timeout()} = f
              , N = np.create({
                message: `Waiting for \`FileChooser\` failed: ${_}ms exceeded`,
                timeout: _
            });
            s(this, l).add(N),
            f.signal && f.signal.addEventListener("abort", () => {
                var T;
                N.reject((T = f.signal) == null ? void 0 : T.reason)
            }
            , {
                once: !0
            }),
            s(this, a).browsingContext.once("filedialogopened", T => {
                if (!T.element)
                    return;
                const j = new Tg(Qi.from({
                    sharedId: T.element.sharedId,
                    handle: T.element.handle,
                    type: "node"
                }, s(this, a).mainRealm()),T.multiple);
                for (const K of s(this, l))
                    K.resolve(j),
                    s(this, l).delete(K)
            }
            );
            try {
                return await N.valueOrThrow()
            } catch (T) {
                throw s(this, l).delete(N),
                T
            }
        }
        workers() {
            return [...s(this, p)]
        }
        get isNetworkInterceptionEnabled() {
            return !!s(this, S) || !!s(this, b) || !!s(this, y)
        }
        async setRequestInterception(f) {
            m(this, S, await g(this, w, kc).call(this, ["beforeRequestSent"], s(this, S), f))
        }
        async setExtraHTTPHeaders(f) {
            const _ = {};
            for (const [N,T] of Object.entries(f))
                ze(cp(T), `Expected value of header "${N}" to be String, but "${typeof T}" is found.`),
                _[N.toLowerCase()] = T;
            this._extraHTTPHeaders = _,
            m(this, b, await g(this, w, kc).call(this, ["beforeRequestSent"], s(this, b), !!Object.keys(this._extraHTTPHeaders).length))
        }
        async authenticate(f) {
            m(this, y, await g(this, w, kc).call(this, ["authRequired"], s(this, y), !!f)),
            this._credentials = f
        }
        setDragInterception() {
            throw new X
        }
        setBypassServiceWorker() {
            throw new X
        }
        async setOfflineMode(f) {
            return s(this, o).browser().cdpSupported ? (s(this, d) || m(this, d, {
                offline: !1,
                upload: -1,
                download: -1,
                latency: 0
            }),
            s(this, d).offline = f,
            await g(this, w, Dl).call(this)) : await s(this, a).browsingContext.setOfflineMode(f)
        }
        async emulateNetworkConditions(f) {
            if (!s(this, o).browser().cdpSupported) {
                if (!(f != null && f.offline) && (((f == null ? void 0 : f.upload) ?? -1) >= 0 || ((f == null ? void 0 : f.download) ?? -1) >= 0 || ((f == null ? void 0 : f.latency) ?? 0) > 0))
                    throw new X;
                return await s(this, a).browsingContext.setOfflineMode((f == null ? void 0 : f.offline) ?? !1)
            }
            return s(this, d) || m(this, d, {
                offline: (f == null ? void 0 : f.offline) ?? !1,
                upload: -1,
                download: -1,
                latency: 0
            }),
            s(this, d).upload = f ? f.upload : -1,
            s(this, d).download = f ? f.download : -1,
            s(this, d).latency = f ? f.latency : 0,
            s(this, d).offline = (f == null ? void 0 : f.offline) ?? !1,
            await g(this, w, Dl).call(this)
        }
        async setCookie(...f) {
            const _ = this.url()
              , N = _.startsWith("http");
            for (const T of f) {
                let j = T.url || "";
                !j && N && (j = _),
                ze(j !== "about:blank", `Blank page can not have cookie "${T.name}"`),
                ze(!String.prototype.startsWith.call(j || "", "data:"), `Data URL page can not have cookie "${T.name}"`),
                ze(T.partitionKey === void 0 || typeof T.partitionKey == "string", "BiDi only allows domain partition keys");
                const K = URL.canParse(j) ? new URL(j) : void 0
                  , q = T.domain ?? (K == null ? void 0 : K.hostname);
                ze(q !== void 0, "At least one of the url and domain needs to be specified");
                const he = {
                    domain: q,
                    name: T.name,
                    value: {
                        type: "string",
                        value: T.value
                    },
                    ...T.path !== void 0 ? {
                        path: T.path
                    } : {},
                    ...T.httpOnly !== void 0 ? {
                        httpOnly: T.httpOnly
                    } : {},
                    ...T.secure !== void 0 ? {
                        secure: T.secure
                    } : {},
                    ...T.sameSite !== void 0 ? {
                        sameSite: _m(T.sameSite)
                    } : {},
                    expiry: Im(T.expires),
                    ...Pm(T, "sameParty", "sourceScheme", "priority", "url")
                };
                T.partitionKey !== void 0 ? await this.browserContext().userContext.setCookie(he, T.partitionKey) : await s(this, a).browsingContext.setCookie(he)
            }
        }
        async deleteCookie(...f) {
            await Promise.all(f.map(async _ => {
                const N = _.url ?? this.url()
                  , T = URL.canParse(N) ? new URL(N) : void 0
                  , j = _.domain ?? (T == null ? void 0 : T.hostname);
                ze(j !== void 0, "At least one of the url and domain needs to be specified");
                const K = {
                    domain: j,
                    name: _.name,
                    ..._.path !== void 0 ? {
                        path: _.path
                    } : {}
                };
                await s(this, a).browsingContext.deleteCookie(K)
            }
            ))
        }
        async removeExposedFunction(f) {
            await s(this, a).removeExposedFunction(f)
        }
        metrics() {
            throw new X
        }
        async goBack(f={}) {
            return await g(this, w, Nl).call(this, -1, f)
        }
        async goForward(f={}) {
            return await g(this, w, Nl).call(this, 1, f)
        }
        waitForDevicePrompt() {
            throw new X
        }
    }
    ,
    n = new WeakMap,
    o = new WeakMap,
    a = new WeakMap,
    c = new WeakMap,
    p = new WeakMap,
    h = new WeakMap,
    d = new WeakMap,
    l = new WeakMap,
    w = new WeakSet,
    Em = function() {
        s(this, a).browsingContext.on("closed", () => {
            this.trustedEmitter.emit("close", void 0),
            this.trustedEmitter.removeAllListeners()
        }
        ),
        this.trustedEmitter.on("workercreated", f => {
            s(this, p).add(f)
        }
        ),
        this.trustedEmitter.on("workerdestroyed", f => {
            s(this, p).delete(f)
        }
        )
    }
    ,
    E = new WeakMap,
    S = new WeakMap,
    b = new WeakMap,
    y = new WeakMap,
    kc = async function(f, _, N) {
        if (N && !_)
            return await s(this, a).browsingContext.addIntercept({
                phases: f
            });
        if (!N && _) {
            await s(this, a).browsingContext.userContext.browser.removeIntercept(_);
            return
        }
        return _
    }
    ,
    Dl = async function() {
        s(this, d) && await this._client().send("Network.emulateNetworkConditions", {
            offline: s(this, d).offline,
            latency: s(this, d).latency,
            uploadThroughput: s(this, d).upload,
            downloadThroughput: s(this, d).download
        })
    }
    ,
    Nl = async function(f, _) {
        const N = new AbortController;
        try {
            const [T] = await Promise.all([this.waitForNavigation({
                ..._,
                signal: N.signal
            }), s(this, a).browsingContext.traverseHistory(f)]);
            return T
        } catch (T) {
            throw N.abort(),
            T
        }
    }
    ,
    ( () => {
        const f = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        e = [du()],
        sC(A, null, e, {
            kind: "accessor",
            name: "trustedEmitter",
            static: !1,
            private: !1,
            access: {
                has: _ => "trustedEmitter"in _,
                get: _ => _.trustedEmitter,
                set: (_, N) => {
                    _.trustedEmitter = N
                }
            },
            metadata: f
        }, t, r),
        f && Object.defineProperty(A, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: f
        })
    }
    )(),
    A
}
)();
function rC(i, ...e) {
    return `() => {${Dg(i, ...e)}}`
}
function nC(i, e) {
    const t = i.domain.toLowerCase()
      , r = e.hostname.toLowerCase();
    return t === r ? !0 : t.startsWith(".") && r.endsWith(t)
}
function iC(i, e) {
    const t = e.pathname
      , r = i.path;
    return !!(t === r || t.startsWith(r) && (r.endsWith("/") || t[r.length] === "/"))
}
function oC(i, e) {
    const t = new URL(e);
    return ze(i !== void 0),
    nC(i, t) ? iC(i, t) : !1
}
function Sm(i, e=!1) {
    const t = i[Bc + "partitionKey"];
    function r() {
        return typeof t == "string" ? {
            partitionKey: t
        } : typeof t == "object" && t !== null ? e ? {
            partitionKey: {
                sourceOrigin: t.topLevelSite,
                hasCrossSiteAncestor: t.hasCrossSiteAncestor ?? !1
            }
        } : {
            partitionKey: t.topLevelSite
        } : {}
    }
    return {
        name: i.name,
        value: i.value.value,
        domain: i.domain,
        path: i.path,
        size: i.size,
        httpOnly: i.httpOnly,
        secure: i.secure,
        sameSite: cC(i.sameSite),
        expires: i.expiry ?? -1,
        session: i.expiry === void 0 || i.expiry <= 0,
        ...aC(i, "sameParty", "sourceScheme", "partitionKeyOpaque", "priority"),
        ...r()
    }
}
const Bc = "goog:";
function aC(i, ...e) {
    const t = {};
    for (const r of e)
        i[Bc + r] !== void 0 && (t[r] = i[Bc + r]);
    return t
}
function Pm(i, ...e) {
    const t = {};
    for (const r of e)
        i[r] !== void 0 && (t[Bc + r] = i[r]);
    return t
}
function cC(i) {
    return i === "strict" ? "Strict" : i === "lax" ? "Lax" : "None"
}
function _m(i) {
    return i === "Strict" ? "strict" : i === "Lax" ? "lax" : "none"
}
function Im(i) {
    return [void 0, -1].includes(i) ? void 0 : i
}
function uC(i) {
    if (i === void 0 || typeof i == "string")
        return i;
    if (i.hasCrossSiteAncestor)
        throw new X("WebDriver BiDi does not support `hasCrossSiteAncestor` yet.");
    return i.sourceOrigin
}
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ci;
class dC extends lu {
    constructor(t) {
        super();
        u(this, Ci);
        m(this, Ci, t)
    }
    asPage() {
        throw new X
    }
    url() {
        return ""
    }
    createCDPSession() {
        throw new X
    }
    type() {
        return hu.BROWSER
    }
    browser() {
        return s(this, Ci)
    }
    browserContext() {
        return s(this, Ci).defaultBrowserContext()
    }
    opener() {
        throw new X
    }
}
Ci = new WeakMap;
var ss;
class lC extends lu {
    constructor(t) {
        super();
        u(this, ss);
        m(this, ss, t)
    }
    async page() {
        return s(this, ss)
    }
    async asPage() {
        return Mc.from(this.browserContext(), s(this, ss).mainFrame().browsingContext)
    }
    url() {
        return s(this, ss).url()
    }
    createCDPSession() {
        return s(this, ss).createCDPSession()
    }
    type() {
        return hu.PAGE
    }
    browser() {
        return this.browserContext().browser()
    }
    browserContext() {
        return s(this, ss).browserContext()
    }
    opener() {
        throw new X
    }
}
ss = new WeakMap;
var rs, xi;
class hC extends lu {
    constructor(t) {
        super();
        u(this, rs);
        u(this, xi);
        m(this, rs, t)
    }
    async page() {
        return s(this, xi) === void 0 && m(this, xi, Mc.from(this.browserContext(), s(this, rs).browsingContext)),
        s(this, xi)
    }
    async asPage() {
        return Mc.from(this.browserContext(), s(this, rs).browsingContext)
    }
    url() {
        return s(this, rs).url()
    }
    createCDPSession() {
        return s(this, rs).createCDPSession()
    }
    type() {
        return hu.PAGE
    }
    browser() {
        return this.browserContext().browser()
    }
    browserContext() {
        return s(this, rs).page().browserContext()
    }
    opener() {
        throw new X
    }
}
rs = new WeakMap,
xi = new WeakMap;
var Ei;
class pC extends lu {
    constructor(t) {
        super();
        u(this, Ei);
        m(this, Ei, t)
    }
    async page() {
        throw new X
    }
    async asPage() {
        throw new X
    }
    url() {
        return s(this, Ei).url()
    }
    createCDPSession() {
        throw new X
    }
    type() {
        return hu.OTHER
    }
    browser() {
        return this.browserContext().browser()
    }
    browserContext() {
        return s(this, Ei).frame.page().browserContext()
    }
    opener() {
        throw new X
    }
}
Ei = new WeakMap;
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var fC = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
}
  , Yh = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , mC = function(i, e, t) {
    if (e != null) {
        if (typeof e != "object" && typeof e != "function")
            throw new TypeError("Object expected.");
        var r, n;
        if (t) {
            if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose]
        }
        if (r === void 0) {
            if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose],
            t && (n = r)
        }
        if (typeof r != "function")
            throw new TypeError("Object not disposable.");
        n && (r = function() {
            try {
                n.call(this)
            } catch (o) {
                return Promise.reject(o)
            }
        }
        ),
        i.stack.push({
            value: e,
            dispose: r,
            async: t
        })
    } else
        t && i.stack.push({
            async: !0
        });
    return e
}
  , gC = function(i) {
    return function(e) {
        function t(a) {
            e.error = e.hasError ? new i(a,e.error,"An error was suppressed during disposal.") : a,
            e.hasError = !0
        }
        var r, n = 0;
        function o() {
            for (; r = e.stack.pop(); )
                try {
                    if (!r.async && n === 1)
                        return n = 0,
                        e.stack.push(r),
                        Promise.resolve().then(o);
                    if (r.dispose) {
                        var a = r.dispose.call(r.value);
                        if (r.async)
                            return n |= 2,
                            Promise.resolve(a).then(o, function(c) {
                                return t(c),
                                o()
                            })
                    } else
                        n |= 1
                } catch (c) {
                    t(c)
                }
            if (n === 1)
                return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError)
                throw e.error
        }
        return o()
    }
}(typeof SuppressedError == "function" ? SuppressedError : function(i, e, t) {
    var r = new Error(t);
    return r.name = "SuppressedError",
    r.error = i,
    r.suppressed = e,
    r
}
);
let wC = ( () => {
    var n, o, a, c, p, h, d, km, Ol, C;
    let i = Og, e, t = [], r = [];
    return C = class extends i {
        constructor(b, y, D) {
            super();
            u(this, d);
            u(this, n, Yh(this, t, new J));
            u(this, o, Yh(this, r));
            u(this, a);
            O(this, "userContext");
            u(this, c, new WeakMap);
            u(this, p, new Map);
            u(this, h, []);
            m(this, o, b),
            this.userContext = y,
            m(this, a, D.defaultViewport)
        }
        static from(b, y, D) {
            var P;
            const v = new C(b,y,D);
            return g(P = v, d, km).call(P),
            v
        }
        get trustedEmitter() {
            return s(this, n)
        }
        set trustedEmitter(b) {
            m(this, n, b)
        }
        targets() {
            return [...s(this, p).values()].flatMap( ([b,y]) => [b, ...y.values()])
        }
        async newPage(b) {
            const y = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                const D = mC(y, await this.waitForScreenshotOperations(), !1)
                  , v = (b == null ? void 0 : b.type) === "window" ? "window" : "tab"
                  , P = await this.userContext.createBrowsingContext(v)
                  , A = s(this, c).get(P);
                if (!A)
                    throw new Error("Page is not found");
                if (s(this, a))
                    try {
                        await A.setViewport(s(this, a))
                    } catch {}
                return A
            } catch (D) {
                y.error = D,
                y.hasError = !0
            } finally {
                gC(y)
            }
        }
        async close() {
            ze(this.userContext.id !== Ac.DEFAULT, "Default BrowserContext cannot be closed!");
            try {
                await this.userContext.remove()
            } catch (b) {
                Be(b)
            }
            s(this, p).clear()
        }
        browser() {
            return s(this, o)
        }
        async pages(b=!1) {
            return [...this.userContext.browsingContexts].map(y => s(this, c).get(y))
        }
        async overridePermissions(b, y) {
            const D = new Set(y.map(v => {
                if (!ph.get(v))
                    throw new Error("Unknown permission: " + v);
                return v
            }
            ));
            await Promise.all(Array.from(ph.keys()).map(v => {
                const P = this.userContext.setPermissions(b, {
                    name: v
                }, D.has(v) ? "granted" : "denied");
                return s(this, h).push({
                    origin: b,
                    permission: v
                }),
                D.has(v) ? P : P.catch(Be)
            }
            ))
        }
        async clearPermissionOverrides() {
            const b = s(this, h).map( ({permission: y, origin: D}) => this.userContext.setPermissions(D, {
                name: y
            }, "prompt").catch(Be));
            m(this, h, []),
            await Promise.all(b)
        }
        get id() {
            if (this.userContext.id !== Ac.DEFAULT)
                return this.userContext.id
        }
        async cookies() {
            return (await this.userContext.getCookies()).map(y => Sm(y, !0))
        }
        async setCookie(...b) {
            await Promise.all(b.map(async y => {
                const D = {
                    domain: y.domain,
                    name: y.name,
                    value: {
                        type: "string",
                        value: y.value
                    },
                    ...y.path !== void 0 ? {
                        path: y.path
                    } : {},
                    ...y.httpOnly !== void 0 ? {
                        httpOnly: y.httpOnly
                    } : {},
                    ...y.secure !== void 0 ? {
                        secure: y.secure
                    } : {},
                    ...y.sameSite !== void 0 ? {
                        sameSite: _m(y.sameSite)
                    } : {},
                    expiry: Im(y.expires),
                    ...Pm(y, "sameParty", "sourceScheme", "priority", "url")
                };
                return await this.userContext.setCookie(D, uC(y.partitionKey))
            }
            ))
        }
    }
    ,
    n = new WeakMap,
    o = new WeakMap,
    a = new WeakMap,
    c = new WeakMap,
    p = new WeakMap,
    h = new WeakMap,
    d = new WeakSet,
    km = function() {
        for (const b of this.userContext.browsingContexts)
            g(this, d, Ol).call(this, b);
        this.userContext.on("browsingcontext", ({browsingContext: b}) => {
            const y = g(this, d, Ol).call(this, b);
            if (b.originalOpener)
                for (const D of this.userContext.browsingContexts)
                    D.id === b.originalOpener && s(this, c).get(D).trustedEmitter.emit("popup", y)
        }
        ),
        this.userContext.on("closed", () => {
            this.trustedEmitter.removeAllListeners()
        }
        )
    }
    ,
    Ol = function(b) {
        const y = Mc.from(this, b);
        s(this, c).set(b, y),
        y.trustedEmitter.on("close", () => {
            s(this, c).delete(b)
        }
        );
        const D = new lC(y)
          , v = new Map;
        return s(this, p).set(y, [D, v]),
        y.trustedEmitter.on("frameattached", P => {
            const A = P
              , M = new hC(A);
            v.set(A, M),
            this.trustedEmitter.emit("targetcreated", M)
        }
        ),
        y.trustedEmitter.on("framenavigated", P => {
            const A = P
              , M = v.get(A);
            M === void 0 ? this.trustedEmitter.emit("targetchanged", D) : this.trustedEmitter.emit("targetchanged", M)
        }
        ),
        y.trustedEmitter.on("framedetached", P => {
            const A = P
              , M = v.get(A);
            M !== void 0 && (v.delete(A),
            this.trustedEmitter.emit("targetdestroyed", M))
        }
        ),
        y.trustedEmitter.on("workercreated", P => {
            const A = P
              , M = new pC(A);
            v.set(A, M),
            this.trustedEmitter.emit("targetcreated", M)
        }
        ),
        y.trustedEmitter.on("workerdestroyed", P => {
            const A = P
              , M = v.get(A);
            M !== void 0 && (v.delete(P),
            this.trustedEmitter.emit("targetdestroyed", M))
        }
        ),
        y.trustedEmitter.on("close", () => {
            s(this, p).delete(y),
            this.trustedEmitter.emit("targetdestroyed", D)
        }
        ),
        this.trustedEmitter.emit("targetcreated", D),
        y
    }
    ,
    ( () => {
        const b = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        e = [du()],
        fC(C, null, e, {
            kind: "accessor",
            name: "trustedEmitter",
            static: !1,
            private: !1,
            access: {
                has: y => "trustedEmitter"in y,
                get: y => y.trustedEmitter,
                set: (y, D) => {
                    y.trustedEmitter = D
                }
            },
            metadata: b
        }, t, r),
        b && Object.defineProperty(C, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b
        })
    }
    )(),
    C
}
)();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var yC = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , ls = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
}
  , vC = function(i, e, t) {
    if (e != null) {
        if (typeof e != "object" && typeof e != "function")
            throw new TypeError("Object expected.");
        var r, n;
        if (t) {
            if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose]
        }
        if (r === void 0) {
            if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose],
            t && (n = r)
        }
        if (typeof r != "function")
            throw new TypeError("Object not disposable.");
        n && (r = function() {
            try {
                n.call(this)
            } catch (o) {
                return Promise.reject(o)
            }
        }
        ),
        i.stack.push({
            value: e,
            dispose: r,
            async: t
        })
    } else
        t && i.stack.push({
            async: !0
        });
    return e
}
  , bC = function(i) {
    return function(e) {
        function t(a) {
            e.error = e.hasError ? new i(a,e.error,"An error was suppressed during disposal.") : a,
            e.hasError = !0
        }
        var r, n = 0;
        function o() {
            for (; r = e.stack.pop(); )
                try {
                    if (!r.async && n === 1)
                        return n = 0,
                        e.stack.push(r),
                        Promise.resolve().then(o);
                    if (r.dispose) {
                        var a = r.dispose.call(r.value);
                        if (r.async)
                            return n |= 2,
                            Promise.resolve(a).then(o, function(c) {
                                return t(c),
                                o()
                            })
                    } else
                        n |= 1
                } catch (c) {
                    t(c)
                }
            if (n === 1)
                return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError)
                throw e.error
        }
        return o()
    }
}(typeof SuppressedError == "function" ? SuppressedError : function(i, e, t) {
    var r = new Error(t);
    return r.name = "SuppressedError",
    r.error = i,
    r.suppressed = e,
    r
}
);
let CC = ( () => {
    var d, l, w, C, E, S, Tm, Dm, Nm, Rl, P;
    let i = J, e = [], t, r, n, o, a, c, p, h;
    return P = class extends i {
        constructor(x) {
            super();
            u(this, S);
            u(this, d, (yC(this, e),
            !1));
            u(this, l);
            u(this, w, new Mt);
            u(this, C, new Map);
            O(this, "session");
            u(this, E, new Map);
            this.session = x
        }
        static async from(x) {
            var _;
            const f = new P(x);
            return await g(_ = f, S, Tm).call(_),
            f
        }
        get closed() {
            return s(this, d)
        }
        get defaultUserContext() {
            return s(this, C).get(Ac.DEFAULT)
        }
        get disconnected() {
            return s(this, l) !== void 0
        }
        get disposed() {
            return this.disconnected
        }
        get userContexts() {
            return s(this, C).values()
        }
        dispose(x, f=!1) {
            m(this, d, f),
            m(this, l, x),
            this[le]()
        }
        async close() {
            try {
                await this.session.send("browser.close", {})
            } finally {
                this.dispose("Browser already closed.", !0)
            }
        }
        async addPreloadScript(x, f={}) {
            var N;
            const {result: {script: _}} = await this.session.send("script.addPreloadScript", {
                functionDeclaration: x,
                ...f,
                contexts: (N = f.contexts) == null ? void 0 : N.map(T => T.id)
            });
            return _
        }
        async removeIntercept(x) {
            await this.session.send("network.removeIntercept", {
                intercept: x
            })
        }
        async removePreloadScript(x) {
            await this.session.send("script.removePreloadScript", {
                script: x
            })
        }
        async createUserContext(x) {
            var N, T, j;
            const f = x.proxyServer === void 0 ? void 0 : {
                proxyType: "manual",
                httpProxy: x.proxyServer,
                sslProxy: x.proxyServer,
                noProxy: x.proxyBypassList
            }
              , {result: {userContext: _}} = await this.session.send("browser.createUserContext", {
                proxy: f
            });
            if (((N = x.downloadBehavior) == null ? void 0 : N.policy) === "allowAndName")
                throw new X("`allowAndName` is not supported in WebDriver BiDi");
            if (((T = x.downloadBehavior) == null ? void 0 : T.policy) === "allow") {
                if (x.downloadBehavior.downloadPath === void 0)
                    throw new X("`downloadPath` is required in `allow` download behavior");
                await this.session.send("browser.setDownloadBehavior", {
                    downloadBehavior: {
                        type: "allowed",
                        destinationFolder: x.downloadBehavior.downloadPath
                    },
                    userContexts: [_]
                })
            }
            return ((j = x.downloadBehavior) == null ? void 0 : j.policy) === "deny" && await this.session.send("browser.setDownloadBehavior", {
                downloadBehavior: {
                    type: "denied"
                },
                userContexts: [_]
            }),
            g(this, S, Rl).call(this, _)
        }
        async installExtension(x) {
            const {result: {extension: f}} = await this.session.send("webExtension.install", {
                extensionData: {
                    type: "path",
                    path: x
                }
            });
            return f
        }
        async uninstallExtension(x) {
            await this.session.send("webExtension.uninstall", {
                extension: x
            })
        }
        [(t = [$s],
        r = [L(x => s(x, l))],
        n = [L(x => s(x, l))],
        o = [L(x => s(x, l))],
        a = [L(x => s(x, l))],
        c = [L(x => s(x, l))],
        p = [L(x => s(x, l))],
        h = [L(x => s(x, l))],
        le)]() {
            s(this, l) ?? m(this, l, "Browser was disconnected, probably because the session ended."),
            this.closed && this.emit("closed", {
                reason: s(this, l)
            }),
            this.emit("disconnected", {
                reason: s(this, l)
            }),
            s(this, w).dispose(),
            super[le]()
        }
    }
    ,
    d = new WeakMap,
    l = new WeakMap,
    w = new WeakMap,
    C = new WeakMap,
    E = new WeakMap,
    S = new WeakSet,
    Tm = async function() {
        const x = s(this, w).use(new J(this.session));
        x.once("ended", ({reason: f}) => {
            this.dispose(f)
        }
        ),
        x.on("script.realmCreated", f => {
            f.type === "shared-worker" && s(this, E).set(f.realm, yl.from(this, f.realm, f.origin))
        }
        ),
        await g(this, S, Dm).call(this),
        await g(this, S, Nm).call(this)
    }
    ,
    Dm = async function() {
        const {result: {userContexts: x}} = await this.session.send("browser.getUserContexts", {});
        for (const f of x)
            g(this, S, Rl).call(this, f.userContext)
    }
    ,
    Nm = async function() {
        const x = new Set;
        let f;
        {
            const _ = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                vC(_, new J(this.session), !1).on("browsingContext.contextCreated", j => {
                    x.add(j.context)
                }
                );
                const {result: T} = await this.session.send("browsingContext.getTree", {});
                f = T.contexts
            } catch (N) {
                _.error = N,
                _.hasError = !0
            } finally {
                bC(_)
            }
        }
        for (const _ of f)
            x.has(_.context) || this.session.emit("browsingContext.contextCreated", _),
            _.children && f.push(..._.children)
    }
    ,
    Rl = function(x) {
        const f = Ac.create(this, x);
        s(this, C).set(f.id, f);
        const _ = s(this, w).use(new J(f));
        return _.once("closed", () => {
            _.removeAllListeners(),
            s(this, C).delete(f.id)
        }
        ),
        f
    }
    ,
    ( () => {
        const x = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        ls(P, null, t, {
            kind: "method",
            name: "dispose",
            static: !1,
            private: !1,
            access: {
                has: f => "dispose"in f,
                get: f => f.dispose
            },
            metadata: x
        }, null, e),
        ls(P, null, r, {
            kind: "method",
            name: "close",
            static: !1,
            private: !1,
            access: {
                has: f => "close"in f,
                get: f => f.close
            },
            metadata: x
        }, null, e),
        ls(P, null, n, {
            kind: "method",
            name: "addPreloadScript",
            static: !1,
            private: !1,
            access: {
                has: f => "addPreloadScript"in f,
                get: f => f.addPreloadScript
            },
            metadata: x
        }, null, e),
        ls(P, null, o, {
            kind: "method",
            name: "removeIntercept",
            static: !1,
            private: !1,
            access: {
                has: f => "removeIntercept"in f,
                get: f => f.removeIntercept
            },
            metadata: x
        }, null, e),
        ls(P, null, a, {
            kind: "method",
            name: "removePreloadScript",
            static: !1,
            private: !1,
            access: {
                has: f => "removePreloadScript"in f,
                get: f => f.removePreloadScript
            },
            metadata: x
        }, null, e),
        ls(P, null, c, {
            kind: "method",
            name: "createUserContext",
            static: !1,
            private: !1,
            access: {
                has: f => "createUserContext"in f,
                get: f => f.createUserContext
            },
            metadata: x
        }, null, e),
        ls(P, null, p, {
            kind: "method",
            name: "installExtension",
            static: !1,
            private: !1,
            access: {
                has: f => "installExtension"in f,
                get: f => f.installExtension
            },
            metadata: x
        }, null, e),
        ls(P, null, h, {
            kind: "method",
            name: "uninstallExtension",
            static: !1,
            private: !1,
            access: {
                has: f => "uninstallExtension"in f,
                get: f => f.uninstallExtension
            },
            metadata: x
        }, null, e),
        x && Object.defineProperty(P, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: x
        })
    }
    )(),
    P
}
)();
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var wd = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , rn = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
};
let xC = ( () => {
    var d, l, w, C, E, Om, b;
    let i = J, e = [], t, r = [], n = [], o, a, c, p, h;
    return b = class extends i {
        constructor(v, P) {
            super();
            u(this, E);
            u(this, d, wd(this, e));
            u(this, l, new Mt);
            u(this, w);
            O(this, "browser");
            u(this, C, wd(this, r, void 0));
            wd(this, n),
            m(this, w, P),
            this.connection = v
        }
        static async from(v, P) {
            var x;
            const {result: A} = await v.send("session.new", {
                capabilities: P
            })
              , M = new b(v,A);
            return await g(x = M, E, Om).call(x),
            M
        }
        get connection() {
            return s(this, C)
        }
        set connection(v) {
            m(this, C, v)
        }
        get capabilities() {
            return s(this, w).capabilities
        }
        get disposed() {
            return this.ended
        }
        get ended() {
            return s(this, d) !== void 0
        }
        get id() {
            return s(this, w).sessionId
        }
        dispose(v) {
            m(this, d, v),
            this[le]()
        }
        async send(v, P) {
            return await this.connection.send(v, P)
        }
        async subscribe(v, P) {
            await this.send("session.subscribe", {
                events: v,
                contexts: P
            })
        }
        async addIntercepts(v, P) {
            await this.send("session.subscribe", {
                events: v,
                contexts: P
            })
        }
        async end() {
            try {
                await this.send("session.end", {})
            } finally {
                this.dispose("Session already ended.")
            }
        }
        [(t = [du()],
        o = [$s],
        a = [L(v => s(v, d))],
        c = [L(v => s(v, d))],
        p = [L(v => s(v, d))],
        h = [L(v => s(v, d))],
        le)]() {
            s(this, d) ?? m(this, d, "Session already destroyed, probably because the connection broke."),
            this.emit("ended", {
                reason: s(this, d)
            }),
            s(this, l).dispose(),
            super[le]()
        }
    }
    ,
    d = new WeakMap,
    l = new WeakMap,
    w = new WeakMap,
    C = new WeakMap,
    E = new WeakSet,
    Om = async function() {
        this.browser = await CC.from(this),
        s(this, l).use(this.browser).once("closed", ({reason: A}) => {
            this.dispose(A)
        }
        );
        const P = new WeakSet;
        this.on("browsingContext.fragmentNavigated", A => {
            P.has(A) || (P.add(A),
            this.emit("browsingContext.navigationStarted", A),
            this.emit("browsingContext.fragmentNavigated", A))
        }
        )
    }
    ,
    ( () => {
        const v = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        rn(b, null, t, {
            kind: "accessor",
            name: "connection",
            static: !1,
            private: !1,
            access: {
                has: P => "connection"in P,
                get: P => P.connection,
                set: (P, A) => {
                    P.connection = A
                }
            },
            metadata: v
        }, r, n),
        rn(b, null, o, {
            kind: "method",
            name: "dispose",
            static: !1,
            private: !1,
            access: {
                has: P => "dispose"in P,
                get: P => P.dispose
            },
            metadata: v
        }, null, e),
        rn(b, null, a, {
            kind: "method",
            name: "send",
            static: !1,
            private: !1,
            access: {
                has: P => "send"in P,
                get: P => P.send
            },
            metadata: v
        }, null, e),
        rn(b, null, c, {
            kind: "method",
            name: "subscribe",
            static: !1,
            private: !1,
            access: {
                has: P => "subscribe"in P,
                get: P => P.subscribe
            },
            metadata: v
        }, null, e),
        rn(b, null, p, {
            kind: "method",
            name: "addIntercepts",
            static: !1,
            private: !1,
            access: {
                has: P => "addIntercepts"in P,
                get: P => P.addIntercepts
            },
            metadata: v
        }, null, e),
        rn(b, null, h, {
            kind: "method",
            name: "end",
            static: !1,
            private: !1,
            access: {
                has: P => "end"in P,
                get: P => P.end
            },
            metadata: v
        }, null, e),
        v && Object.defineProperty(b, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: v
        })
    }
    )(),
    b
}
)();
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var EC = function(i, e, t, r, n, o) {
    function a(y) {
        if (y !== void 0 && typeof y != "function")
            throw new TypeError("Function expected");
        return y
    }
    for (var c = r.kind, p = c === "getter" ? "get" : c === "setter" ? "set" : "value", h = !e && i ? r.static ? i : i.prototype : null, d = e || (h ? Object.getOwnPropertyDescriptor(h, r.name) : {}), l, w = !1, C = t.length - 1; C >= 0; C--) {
        var E = {};
        for (var S in r)
            E[S] = S === "access" ? {} : r[S];
        for (var S in r.access)
            E.access[S] = r.access[S];
        E.addInitializer = function(y) {
            if (w)
                throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(y || null))
        }
        ;
        var b = (0,
        t[C])(c === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[p], E);
        if (c === "accessor") {
            if (b === void 0)
                continue;
            if (b === null || typeof b != "object")
                throw new TypeError("Object expected");
            (l = a(b.get)) && (d.get = l),
            (l = a(b.set)) && (d.set = l),
            (l = a(b.init)) && n.unshift(l)
        } else
            (l = a(b)) && (c === "field" ? n.unshift(l) : d[p] = l)
    }
    h && Object.defineProperty(h, r.name, d),
    w = !0
}
  , Qh = function(i, e, t) {
    for (var r = arguments.length > 2, n = 0; n < e.length; n++)
        t = r ? e[n].call(i, t) : e[n].call(i);
    return r ? t : void 0
}
  , Zh = function(i, e, t) {
    return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""),
    Object.defineProperty(i, "name", {
        configurable: !0,
        value: t ? "".concat(t, " ", e) : e
    })
};
let NC = ( () => {
    var o, a, c, Vs, Rm, d, l, w, C, E, S, b, y, Am, Mm, Bm, Al;
    let i = Rg, e, t = [], r = [], n;
    return o = class extends i {
        constructor(f, _) {
            super();
            u(this, c);
            O(this, "protocol", "webDriverBiDi");
            u(this, a, Qh(this, t, new J));
            u(this, d, Qh(this, r));
            u(this, l);
            u(this, w);
            u(this, C);
            u(this, E, new WeakMap);
            u(this, S, new dC(this));
            u(this, b);
            u(this, y);
            m(this, d, _.process),
            m(this, l, _.closeCallback),
            m(this, w, f),
            m(this, C, _.defaultViewport),
            m(this, b, _.cdpConnection),
            m(this, y, _.networkEnabled)
        }
        static async create(f) {
            var T, j, K;
            const _ = await xC.from(f.connection, {
                firstMatch: (T = f.capabilities) == null ? void 0 : T.firstMatch,
                alwaysMatch: {
                    ...(j = f.capabilities) == null ? void 0 : j.alwaysMatch,
                    acceptInsecureCerts: f.acceptInsecureCerts,
                    unhandledPromptBehavior: {
                        default: "ignore"
                    },
                    webSocketUrl: !0,
                    "goog:prerenderingDisabled": !0,
                    "goog:disableNetworkDurableMessages": !0
                }
            });
            await _.subscribe((f.cdpConnection ? [...o.subscribeModules, ...o.subscribeCdpEvents] : o.subscribeModules).filter(q => f.networkEnabled ? !0 : q !== "network" && q !== "goog:cdp.Network.requestWillBeSent")),
            await Promise.all(["request", "response"].map(async q => {
                try {
                    await _.send("network.addDataCollector", {
                        dataTypes: [q],
                        maxEncodedDataSize: 2e7
                    })
                } catch (he) {
                    if (he instanceof Tc)
                        Be(he);
                    else
                        throw he
                }
            }
            ));
            const N = new o(_.browser,f);
            return g(K = N, c, Am).call(K),
            N
        }
        get cdpSupported() {
            return s(this, b) !== void 0
        }
        get cdpConnection() {
            return s(this, b)
        }
        async userAgent() {
            return s(this, w).session.capabilities.userAgent
        }
        get connection() {
            return s(this, w).session.connection
        }
        wsEndpoint() {
            return this.connection.url
        }
        async close() {
            var f;
            if (!this.connection.closed)
                try {
                    await s(this, w).close(),
                    await ((f = s(this, l)) == null ? void 0 : f.call(null))
                } catch (_) {
                    Be(_)
                } finally {
                    this.connection.dispose()
                }
        }
        get connected() {
            return !s(this, w).disconnected
        }
        process() {
            return s(this, d) ?? null
        }
        async createBrowserContext(f={}) {
            const _ = await s(this, w).createUserContext(f);
            return g(this, c, Al).call(this, _)
        }
        async version() {
            return `${s(this, c, Mm)}/${s(this, c, Bm)}`
        }
        browserContexts() {
            return [...s(this, w).userContexts].map(f => s(this, E).get(f))
        }
        defaultBrowserContext() {
            return s(this, E).get(s(this, w).defaultUserContext)
        }
        newPage() {
            return this.defaultBrowserContext().newPage()
        }
        installExtension(f) {
            return s(this, w).installExtension(f)
        }
        async uninstallExtension(f) {
            await s(this, w).uninstallExtension(f)
        }
        targets() {
            return [s(this, S), ...this.browserContexts().flatMap(f => f.targets())]
        }
        target() {
            return s(this, S)
        }
        async disconnect() {
            try {
                await s(this, w).session.end()
            } catch (f) {
                Be(f)
            } finally {
                this.connection.dispose()
            }
        }
        get debugInfo() {
            return {
                pendingProtocolErrors: this.connection.getPendingProtocolErrors()
            }
        }
        isNetworkEnabled() {
            return s(this, y)
        }
    }
    ,
    a = new WeakMap,
    c = new WeakSet,
    Vs = function() {
        return n.get.call(this)
    }
    ,
    Rm = function(f) {
        return n.set.call(this, f)
    }
    ,
    d = new WeakMap,
    l = new WeakMap,
    w = new WeakMap,
    C = new WeakMap,
    E = new WeakMap,
    S = new WeakMap,
    b = new WeakMap,
    y = new WeakMap,
    Am = function() {
        var f;
        for (const _ of s(this, w).userContexts)
            g(this, c, Al).call(this, _);
        s(this, w).once("disconnected", () => {
            s(this, c, Vs).emit("disconnected", void 0),
            s(this, c, Vs).removeAllListeners()
        }
        ),
        (f = s(this, d)) == null || f.once("close", () => {
            s(this, w).dispose("Browser process exited.", !0),
            this.connection.dispose()
        }
        )
    }
    ,
    Mm = function() {
        return s(this, w).session.capabilities.browserName
    }
    ,
    Bm = function() {
        return s(this, w).session.capabilities.browserVersion
    }
    ,
    Al = function(f) {
        const _ = wC.from(this, f, {
            defaultViewport: s(this, C)
        });
        return s(this, E).set(f, _),
        _.trustedEmitter.on("targetcreated", N => {
            s(this, c, Vs).emit("targetcreated", N)
        }
        ),
        _.trustedEmitter.on("targetchanged", N => {
            s(this, c, Vs).emit("targetchanged", N)
        }
        ),
        _.trustedEmitter.on("targetdestroyed", N => {
            s(this, c, Vs).emit("targetdestroyed", N)
        }
        ),
        _
    }
    ,
    ( () => {
        const f = typeof Symbol == "function" && Symbol.metadata ? Object.create(i[Symbol.metadata] ?? null) : void 0;
        e = [du()],
        EC(o, n = {
            get: Zh(function() {
                return s(this, a)
            }, "#trustedEmitter", "get"),
            set: Zh(function(_) {
                m(this, a, _)
            }, "#trustedEmitter", "set")
        }, e, {
            kind: "accessor",
            name: "#trustedEmitter",
            static: !1,
            private: !0,
            access: {
                has: _ => Va(c, _),
                get: _ => s(_, c, Vs),
                set: (_, N) => {
                    m(_, c, N, Rm)
                }
            },
            metadata: f
        }, t, r),
        f && Object.defineProperty(o, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: f
        })
    }
    )(),
    O(o, "subscribeModules", ["browsingContext", "network", "log", "script", "input"]),
    O(o, "subscribeCdpEvents", ["goog:cdp.Debugger.scriptParsed", "goog:cdp.CSS.styleSheetAdded", "goog:cdp.Runtime.executionContextsCleared", "goog:cdp.Tracing.tracingComplete", "goog:cdp.Network.requestWillBeSent", "goog:cdp.Debugger.scriptParsed", "goog:cdp.Page.screencastFrame"]),
    o
}
)();
export {NC as BidiBrowser, wC as BidiBrowserContext, vb as BidiConnection, Qi as BidiElementHandle, Vb as BidiFrame, Ur as BidiFrameRealm, fm as BidiHTTPRequest, qb as BidiHTTPResponse, Lr as BidiJSHandle, Qb as BidiKeyboard, Zb as BidiMouse, Mc as BidiPage, bm as BidiRealm, tC as BidiTouchscreen, Il as BidiWorkerRealm, Sm as bidiToPuppeteerCookie, Pm as cdpSpecificCookiePropertiesFromPuppeteerToBidi, DC as connectBidiOverCdp, Im as convertCookiesExpiryCdpToBiDi, uC as convertCookiesPartitionKeyFromPuppeteerToBiDi, _m as convertCookiesSameSiteCdpToBiDi, pm as requests};
//# sourceMappingURL=bidi-CuVoO1Er.js.map
