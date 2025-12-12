import {o as C, r as a, v as l, c as d, d as z, a as N, u as R, e as w, t as H, R as M, b, j as s, P as k, f as P, p as W, g as q, h, i as o, k as O} from "./Providers-CTFhomsf.js";
const D = ["1", "2", "3", "4"]
  , I = ["none", "initial"]
  , L = ["left", "center", "right"]
  , S = {
    ...C,
    size: {
        type: "enum",
        className: "rt-r-size",
        values: D,
        default: "4",
        responsive: !0
    },
    display: {
        type: "enum",
        className: "rt-r-display",
        values: I,
        parseValue: V,
        responsive: !0
    },
    align: {
        type: "enum",
        className: "rt-r-ai",
        values: L,
        parseValue: A,
        responsive: !0
    }
};
function V(e) {
    return e === "initial" ? "flex" : e
}
function A(e) {
    return e === "left" ? "start" : e === "right" ? "end" : e
}
const m = a.forwardRef( ({width: e, minWidth: t, maxWidth: n, height: i, minHeight: r, maxHeight: p, ...u}, g) => {
    const {asChild: c, children: x, className: f, ...v} = l(u, S, R, N)
      , {className: y, style: j} = l({
        width: e,
        minWidth: t,
        maxWidth: n,
        height: i,
        minHeight: r,
        maxHeight: p
    }, H, w)
      , $ = c ? M : "div";
    return a.createElement($, {
        ...v,
        ref: g,
        className: d("rt-Container", f)
    }, z({
        asChild: c,
        children: x
    }, E => a.createElement("div", {
        className: d("rt-ContainerInner", y),
        style: j
    }, E)))
}
);
m.displayName = "Container";
function B() {
    const [e,t] = P.useState({
        message: "",
        type: null
    });
    function n() {
        navigator.mediaDevices.getUserMedia({
            audio: !0
        }).then(function(i) {
            t({
                message: "Microphone permission granted!",
                type: "success"
            }),
            i.getTracks().forEach(r => r.stop())
        }).catch(function(i) {
            t({
                message: `Error: ${i.message}`,
                type: "error"
            })
        })
    }
    return s.jsx(W, {
        style: {
            minHeight: "100vh"
        },
        p: "6",
        children: s.jsx(m, {
            size: "1",
            children: s.jsx(q, {
                size: "2",
                children: s.jsxs(h, {
                    direction: "column",
                    gap: "5",
                    children: [s.jsx(o, {
                        size: "8",
                        weight: "bold",
                        as: "div",
                        children: "Extension Options"
                    }), s.jsx(o, {
                        as: "p",
                        size: "3",
                        color: "gray",
                        children: "Click the button below to request microphone permissions:"
                    }), s.jsxs(h, {
                        direction: "column",
                        gap: "3",
                        children: [s.jsx(O, {
                            size: "3",
                            variant: "soft",
                            onClick: n,
                            children: "Request Microphone Permission"
                        }), e.message && s.jsx(o, {
                            size: "2",
                            color: e.type === "success" ? "green" : "red",
                            weight: "medium",
                            children: e.message
                        })]
                    })]
                })
            })
        })
    })
}
document.addEventListener("DOMContentLoaded", function() {
    const e = document.getElementById("root");
    e && b.createRoot(e).render(s.jsx(k, {
        children: s.jsx(B, {})
    }))
});
//# sourceMappingURL=options-Dv-3MBf5.js.map
