(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function ws(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ss = { exports: {} },
  wl = {},
  Es = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar = Symbol.for("react.element"),
  Kc = Symbol.for("react.portal"),
  Zc = Symbol.for("react.fragment"),
  Gc = Symbol.for("react.strict_mode"),
  Jc = Symbol.for("react.profiler"),
  qc = Symbol.for("react.provider"),
  bc = Symbol.for("react.context"),
  ed = Symbol.for("react.forward_ref"),
  td = Symbol.for("react.suspense"),
  nd = Symbol.for("react.memo"),
  rd = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function ld(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ks = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cs = Object.assign,
  Ns = {};
function xn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ns),
    (this.updater = n || ks);
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _s() {}
_s.prototype = xn.prototype;
function lo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ns),
    (this.updater = n || ks);
}
var io = (lo.prototype = new _s());
io.constructor = lo;
Cs(io, xn.prototype);
io.isPureReactComponent = !0;
var tu = Array.isArray,
  Os = Object.prototype.hasOwnProperty,
  oo = { current: null },
  Ls = { key: !0, ref: !0, __self: !0, __source: !0 };
function js(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Os.call(t, r) && !Ls.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ar,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: oo.current,
  };
}
function id(e, t) {
  return {
    $$typeof: ar,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function uo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ar;
}
function od(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? od("" + e.key)
    : t.toString(36);
}
function Ar(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ar:
          case Kc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Rl(o, 0) : r),
      tu(l)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          Ar(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (uo(l) &&
            (l = id(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(nu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Rl(i, u);
      o += Ar(i, t, n, s, l);
    }
  else if (((s = ld(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Rl(i, u++)), (o += Ar(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ar(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function ud(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Rr = { transition: null },
  sd = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Rr,
    ReactCurrentOwner: oo,
  };
z.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = xn;
z.Fragment = Zc;
z.Profiler = Jc;
z.PureComponent = lo;
z.StrictMode = Gc;
z.Suspense = td;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sd;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Cs({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = oo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Os.call(t, s) &&
        !Ls.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ar, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: bc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: qc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = js;
z.createFactory = function (e) {
  var t = js.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: ed, render: e };
};
z.isValidElement = uo;
z.lazy = function (e) {
  return { $$typeof: rd, _payload: { _status: -1, _result: e }, _init: ud };
};
z.memo = function (e, t) {
  return { $$typeof: nd, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
z.useContext = function (e) {
  return fe.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
z.useId = function () {
  return fe.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return fe.current.useRef(e);
};
z.useState = function (e) {
  return fe.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return fe.current.useTransition();
};
z.version = "18.2.0";
Es.exports = z;
var ie = Es.exports;
const De = ws(ie);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad = ie,
  cd = Symbol.for("react.element"),
  dd = Symbol.for("react.fragment"),
  fd = Object.prototype.hasOwnProperty,
  pd = ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ps(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) fd.call(t, r) && !hd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: cd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: pd.current,
  };
}
wl.Fragment = dd;
wl.jsx = Ps;
wl.jsxs = Ps;
Ss.exports = wl;
var d = Ss.exports,
  si = {},
  Ms = { exports: {} },
  Ce = {},
  zs = { exports: {} },
  Ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, L) {
    var j = C.length;
    C.push(L);
    e: for (; 0 < j; ) {
      var W = (j - 1) >>> 1,
        I = C[W];
      if (0 < l(I, L)) (C[W] = L), (C[j] = I), (j = W);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0],
      j = C.pop();
    if (j !== L) {
      C[0] = j;
      e: for (var W = 0, I = C.length, lt = I >>> 1; W < lt; ) {
        var ae = 2 * (W + 1) - 1,
          ze = C[ae],
          jt = ae + 1,
          mr = C[jt];
        if (0 > l(ze, j))
          jt < I && 0 > l(mr, ze)
            ? ((C[W] = mr), (C[jt] = j), (W = jt))
            : ((C[W] = ze), (C[ae] = j), (W = ae));
        else if (jt < I && 0 > l(mr, j)) (C[W] = mr), (C[jt] = j), (W = jt);
        else break e;
      }
    }
    return L;
  }
  function l(C, L) {
    var j = C.sortIndex - L.sortIndex;
    return j !== 0 ? j : C.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    m = 1,
    v = null,
    h = 3,
    g = !1,
    x = !1,
    S = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= C)
        r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function y(C) {
    if (((S = !1), p(C), !x))
      if (n(s) !== null) (x = !0), Lt(E);
      else {
        var L = n(c);
        L !== null && En(y, L.startTime - C);
      }
  }
  function E(C, L) {
    (x = !1), S && ((S = !1), f(O), (O = -1)), (g = !0);
    var j = h;
    try {
      for (
        p(L), v = n(s);
        v !== null && (!(v.expirationTime > L) || (C && !ue()));

      ) {
        var W = v.callback;
        if (typeof W == "function") {
          (v.callback = null), (h = v.priorityLevel);
          var I = W(v.expirationTime <= L);
          (L = e.unstable_now()),
            typeof I == "function" ? (v.callback = I) : v === n(s) && r(s),
            p(L);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var lt = !0;
      else {
        var ae = n(c);
        ae !== null && En(y, ae.startTime - L), (lt = !1);
      }
      return lt;
    } finally {
      (v = null), (h = j), (g = !1);
    }
  }
  var _ = !1,
    k = null,
    O = -1,
    A = 5,
    M = -1;
  function ue() {
    return !(e.unstable_now() - M < A);
  }
  function se() {
    if (k !== null) {
      var C = e.unstable_now();
      M = C;
      var L = !0;
      try {
        L = k(!0, C);
      } finally {
        L ? xe() : ((_ = !1), (k = null));
      }
    } else _ = !1;
  }
  var xe;
  if (typeof a == "function")
    xe = function () {
      a(se);
    };
  else if (typeof MessageChannel < "u") {
    var Ue = new MessageChannel(),
      hr = Ue.port2;
    (Ue.port1.onmessage = se),
      (xe = function () {
        hr.postMessage(null);
      });
  } else
    xe = function () {
      P(se, 0);
    };
  function Lt(C) {
    (k = C), _ || ((_ = !0), xe());
  }
  function En(C, L) {
    O = P(function () {
      C(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), Lt(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var j = h;
      h = L;
      try {
        return C();
      } finally {
        h = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, L) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var j = h;
      h = C;
      try {
        return L();
      } finally {
        h = j;
      }
    }),
    (e.unstable_scheduleCallback = function (C, L, j) {
      var W = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? W + j : W))
          : (j = W),
        C)
      ) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return (
        (I = j + I),
        (C = {
          id: m++,
          callback: L,
          priorityLevel: C,
          startTime: j,
          expirationTime: I,
          sortIndex: -1,
        }),
        j > W
          ? ((C.sortIndex = j),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (S ? (f(O), (O = -1)) : (S = !0), En(y, j - W)))
          : ((C.sortIndex = I), t(s, C), x || g || ((x = !0), Lt(E))),
        C
      );
    }),
    (e.unstable_shouldYield = ue),
    (e.unstable_wrapCallback = function (C) {
      var L = h;
      return function () {
        var j = h;
        h = L;
        try {
          return C.apply(this, arguments);
        } finally {
          h = j;
        }
      };
    });
})(Ts);
zs.exports = Ts;
var md = zs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Is = ie,
  ke = md;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var As = new Set(),
  Yn = {};
function Ht(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Yn[e] = t, e = 0; e < t.length; e++) As.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ai = Object.prototype.hasOwnProperty,
  vd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  lu = {};
function yd(e) {
  return ai.call(lu, e)
    ? !0
    : ai.call(ru, e)
    ? !1
    : vd.test(e)
    ? (lu[e] = !0)
    : ((ru[e] = !0), !1);
}
function gd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xd(e, t, n, r) {
  if (t === null || typeof t > "u" || gd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var so = /[\-:]([a-z])/g;
function ao(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(so, ao);
    te[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(so, ao);
    te[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(so, ao);
  te[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function co(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xd(t, n, l, r) && (n = null),
    r || l === null
      ? yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = Is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yr = Symbol.for("react.element"),
  Xt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  fo = Symbol.for("react.strict_mode"),
  ci = Symbol.for("react.profiler"),
  Rs = Symbol.for("react.provider"),
  Ds = Symbol.for("react.context"),
  po = Symbol.for("react.forward_ref"),
  di = Symbol.for("react.suspense"),
  fi = Symbol.for("react.suspense_list"),
  ho = Symbol.for("react.memo"),
  ut = Symbol.for("react.lazy"),
  Bs = Symbol.for("react.offscreen"),
  iu = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (iu && e[iu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Dl;
function Mn(e) {
  if (Dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Dl = (t && t[1]) || "";
    }
  return (
    `
` +
    Dl +
    e
  );
}
var Bl = !1;
function Fl(e, t) {
  if (!e || Bl) return "";
  Bl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Bl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function wd(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Fl(e.type, !1)), e;
    case 11:
      return (e = Fl(e.type.render, !1)), e;
    case 1:
      return (e = Fl(e.type, !0)), e;
    default:
      return "";
  }
}
function pi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Xt:
      return "Portal";
    case ci:
      return "Profiler";
    case fo:
      return "StrictMode";
    case di:
      return "Suspense";
    case fi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ds:
        return (e.displayName || "Context") + ".Consumer";
      case Rs:
        return (e._context.displayName || "Context") + ".Provider";
      case po:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ho:
        return (
          (t = e.displayName || null), t !== null ? t : pi(e.type) || "Memo"
        );
      case ut:
        (t = e._payload), (e = e._init);
        try {
          return pi(e(t));
        } catch {}
    }
  return null;
}
function Sd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return pi(t);
    case 8:
      return t === fo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ed(e) {
  var t = Fs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function gr(e) {
  e._valueTracker || (e._valueTracker = Ed(e));
}
function Ws(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Fs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Kr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hi(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $s(e, t) {
  (t = t.checked), t != null && co(e, "checked", t, !1);
}
function mi(e, t) {
  $s(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? vi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && vi(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function vi(e, t, n) {
  (t !== "number" || Kr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zn = Array.isArray;
function on(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (zn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Us(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xr,
  Qs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xr = xr || document.createElement("div"),
          xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  kd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
  kd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function Vs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ys(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Vs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Cd = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xi(e, t) {
  if (t) {
    if (Cd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function wi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Si = null;
function mo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ei = null,
  un = null,
  sn = null;
function cu(e) {
  if ((e = fr(e))) {
    if (typeof Ei != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Nl(t)), Ei(e.stateNode, e.type, t));
  }
}
function Xs(e) {
  un ? (sn ? sn.push(e) : (sn = [e])) : (un = e);
}
function Ks() {
  if (un) {
    var e = un,
      t = sn;
    if (((sn = un = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function Zs(e, t) {
  return e(t);
}
function Gs() {}
var Wl = !1;
function Js(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return Zs(e, t, n);
  } finally {
    (Wl = !1), (un !== null || sn !== null) && (Gs(), Ks());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var ki = !1;
if (be)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        ki = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    ki = !1;
  }
function Nd(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Dn = !1,
  Zr = null,
  Gr = !1,
  Ci = null,
  _d = {
    onError: function (e) {
      (Dn = !0), (Zr = e);
    },
  };
function Od(e, t, n, r, l, i, o, u, s) {
  (Dn = !1), (Zr = null), Nd.apply(_d, arguments);
}
function Ld(e, t, n, r, l, i, o, u, s) {
  if ((Od.apply(this, arguments), Dn)) {
    if (Dn) {
      var c = Zr;
      (Dn = !1), (Zr = null);
    } else throw Error(w(198));
    Gr || ((Gr = !0), (Ci = c));
  }
}
function Qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function du(e) {
  if (Qt(e) !== e) throw Error(w(188));
}
function jd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qt(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return du(l), e;
        if (i === r) return du(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function bs(e) {
  return (e = jd(e)), e !== null ? ea(e) : null;
}
function ea(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ea(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ta = ke.unstable_scheduleCallback,
  fu = ke.unstable_cancelCallback,
  Pd = ke.unstable_shouldYield,
  Md = ke.unstable_requestPaint,
  X = ke.unstable_now,
  zd = ke.unstable_getCurrentPriorityLevel,
  vo = ke.unstable_ImmediatePriority,
  na = ke.unstable_UserBlockingPriority,
  Jr = ke.unstable_NormalPriority,
  Td = ke.unstable_LowPriority,
  ra = ke.unstable_IdlePriority,
  Sl = null,
  Ye = null;
function Id(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Dd,
  Ad = Math.log,
  Rd = Math.LN2;
function Dd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ad(e) / Rd) | 0)) | 0;
}
var wr = 64,
  Sr = 4194304;
function Tn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function qr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Tn(u)) : ((i &= o), i !== 0 && (r = Tn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Tn(o)) : i !== 0 && (r = Tn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Bd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Fd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Be(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Bd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Ni(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function la() {
  var e = wr;
  return (wr <<= 1), !(wr & 4194240) && (wr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function Wd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Be(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function yo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function ia(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var oa,
  go,
  ua,
  sa,
  aa,
  _i = !1,
  Er = [],
  pt = null,
  ht = null,
  mt = null,
  Zn = new Map(),
  Gn = new Map(),
  at = [],
  $d =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      ht = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function Nn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = fr(t)), t !== null && go(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ud(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (pt = Nn(pt, e, t, n, r, l)), !0;
    case "dragenter":
      return (ht = Nn(ht, e, t, n, r, l)), !0;
    case "mouseover":
      return (mt = Nn(mt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Zn.set(i, Nn(Zn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Gn.set(i, Nn(Gn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ca(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qs(n)), t !== null)) {
          (e.blockedOn = t),
            aa(e.priority, function () {
              ua(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Si = r), n.target.dispatchEvent(r), (Si = null);
    } else return (t = fr(n)), t !== null && go(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function hu(e, t, n) {
  Dr(e) && n.delete(t);
}
function Hd() {
  (_i = !1),
    pt !== null && Dr(pt) && (pt = null),
    ht !== null && Dr(ht) && (ht = null),
    mt !== null && Dr(mt) && (mt = null),
    Zn.forEach(hu),
    Gn.forEach(hu);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _i ||
      ((_i = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Hd)));
}
function Jn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < Er.length) {
    _n(Er[0], e);
    for (var n = 1; n < Er.length; n++) {
      var r = Er[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && _n(pt, e),
      ht !== null && _n(ht, e),
      mt !== null && _n(mt, e),
      Zn.forEach(t),
      Gn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    (r = at[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    ca(n), n.blockedOn === null && at.shift();
}
var an = rt.ReactCurrentBatchConfig,
  br = !0;
function Qd(e, t, n, r) {
  var l = R,
    i = an.transition;
  an.transition = null;
  try {
    (R = 1), xo(e, t, n, r);
  } finally {
    (R = l), (an.transition = i);
  }
}
function Vd(e, t, n, r) {
  var l = R,
    i = an.transition;
  an.transition = null;
  try {
    (R = 4), xo(e, t, n, r);
  } finally {
    (R = l), (an.transition = i);
  }
}
function xo(e, t, n, r) {
  if (br) {
    var l = Oi(e, t, n, r);
    if (l === null) Jl(e, t, r, el, n), pu(e, r);
    else if (Ud(l, e, t, n, r)) r.stopPropagation();
    else if ((pu(e, r), t & 4 && -1 < $d.indexOf(e))) {
      for (; l !== null; ) {
        var i = fr(l);
        if (
          (i !== null && oa(i),
          (i = Oi(e, t, n, r)),
          i === null && Jl(e, t, r, el, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Jl(e, t, r, null, n);
  }
}
var el = null;
function Oi(e, t, n, r) {
  if (((el = null), (e = mo(r)), (e = zt(e)), e !== null))
    if (((t = Qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (el = e), null;
}
function da(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zd()) {
        case vo:
          return 1;
        case na:
          return 4;
        case Jr:
        case Td:
          return 16;
        case ra:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null,
  wo = null,
  Br = null;
function fa() {
  if (Br) return Br;
  var e,
    t = wo,
    n = t.length,
    r,
    l = "value" in dt ? dt.value : dt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Br = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Fr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function mu() {
  return !1;
}
function Ne(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? kr
        : mu),
      (this.isPropagationStopped = mu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  So = Ne(wn),
  dr = Q({}, wn, { view: 0, detail: 0 }),
  Yd = Ne(dr),
  Ul,
  Hl,
  On,
  El = Q({}, dr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Eo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== On &&
            (On && e.type === "mousemove"
              ? ((Ul = e.screenX - On.screenX), (Hl = e.screenY - On.screenY))
              : (Hl = Ul = 0),
            (On = e)),
          Ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Hl;
    },
  }),
  vu = Ne(El),
  Xd = Q({}, El, { dataTransfer: 0 }),
  Kd = Ne(Xd),
  Zd = Q({}, dr, { relatedTarget: 0 }),
  Ql = Ne(Zd),
  Gd = Q({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jd = Ne(Gd),
  qd = Q({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bd = Ne(qd),
  ef = Q({}, wn, { data: 0 }),
  yu = Ne(ef),
  tf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  nf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  rf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rf[e]) ? !!t[e] : !1;
}
function Eo() {
  return lf;
}
var of = Q({}, dr, {
    key: function (e) {
      if (e.key) {
        var t = tf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? nf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Eo,
    charCode: function (e) {
      return e.type === "keypress" ? Fr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  uf = Ne(of),
  sf = Q({}, El, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  gu = Ne(sf),
  af = Q({}, dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Eo,
  }),
  cf = Ne(af),
  df = Q({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ff = Ne(df),
  pf = Q({}, El, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hf = Ne(pf),
  mf = [9, 13, 27, 32],
  ko = be && "CompositionEvent" in window,
  Bn = null;
be && "documentMode" in document && (Bn = document.documentMode);
var vf = be && "TextEvent" in window && !Bn,
  pa = be && (!ko || (Bn && 8 < Bn && 11 >= Bn)),
  xu = String.fromCharCode(32),
  wu = !1;
function ha(e, t) {
  switch (e) {
    case "keyup":
      return mf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ma(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zt = !1;
function yf(e, t) {
  switch (e) {
    case "compositionend":
      return ma(t);
    case "keypress":
      return t.which !== 32 ? null : ((wu = !0), xu);
    case "textInput":
      return (e = t.data), e === xu && wu ? null : e;
    default:
      return null;
  }
}
function gf(e, t) {
  if (Zt)
    return e === "compositionend" || (!ko && ha(e, t))
      ? ((e = fa()), (Br = wo = dt = null), (Zt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return pa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xf[e.type] : t === "textarea";
}
function va(e, t, n, r) {
  Xs(r),
    (t = tl(t, "onChange")),
    0 < t.length &&
      ((n = new So("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Fn = null,
  qn = null;
function wf(e) {
  Oa(e, 0);
}
function kl(e) {
  var t = qt(e);
  if (Ws(t)) return e;
}
function Sf(e, t) {
  if (e === "change") return t;
}
var ya = !1;
if (be) {
  var Vl;
  if (be) {
    var Yl = "oninput" in document;
    if (!Yl) {
      var Eu = document.createElement("div");
      Eu.setAttribute("oninput", "return;"),
        (Yl = typeof Eu.oninput == "function");
    }
    Vl = Yl;
  } else Vl = !1;
  ya = Vl && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  Fn && (Fn.detachEvent("onpropertychange", ga), (qn = Fn = null));
}
function ga(e) {
  if (e.propertyName === "value" && kl(qn)) {
    var t = [];
    va(t, qn, e, mo(e)), Js(wf, t);
  }
}
function Ef(e, t, n) {
  e === "focusin"
    ? (ku(), (Fn = t), (qn = n), Fn.attachEvent("onpropertychange", ga))
    : e === "focusout" && ku();
}
function kf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return kl(qn);
}
function Cf(e, t) {
  if (e === "click") return kl(t);
}
function Nf(e, t) {
  if (e === "input" || e === "change") return kl(t);
}
function _f(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var We = typeof Object.is == "function" ? Object.is : _f;
function bn(e, t) {
  if (We(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ai.call(t, l) || !We(e[l], t[l])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nu(e, t) {
  var n = Cu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cu(n);
  }
}
function xa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wa() {
  for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Kr(e.document);
  }
  return t;
}
function Co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Of(e) {
  var t = wa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Co(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Nu(n, i));
        var o = Nu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Lf = be && "documentMode" in document && 11 >= document.documentMode,
  Gt = null,
  Li = null,
  Wn = null,
  ji = !1;
function _u(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ji ||
    Gt == null ||
    Gt !== Kr(r) ||
    ((r = Gt),
    "selectionStart" in r && Co(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wn && bn(Wn, r)) ||
      ((Wn = r),
      (r = tl(Li, "onSelect")),
      0 < r.length &&
        ((t = new So("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gt))));
}
function Cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jt = {
    animationend: Cr("Animation", "AnimationEnd"),
    animationiteration: Cr("Animation", "AnimationIteration"),
    animationstart: Cr("Animation", "AnimationStart"),
    transitionend: Cr("Transition", "TransitionEnd"),
  },
  Xl = {},
  Sa = {};
be &&
  ((Sa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jt.animationend.animation,
    delete Jt.animationiteration.animation,
    delete Jt.animationstart.animation),
  "TransitionEvent" in window || delete Jt.transitionend.transition);
function Cl(e) {
  if (Xl[e]) return Xl[e];
  if (!Jt[e]) return e;
  var t = Jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sa) return (Xl[e] = t[n]);
  return e;
}
var Ea = Cl("animationend"),
  ka = Cl("animationiteration"),
  Ca = Cl("animationstart"),
  Na = Cl("transitionend"),
  _a = new Map(),
  Ou =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Nt(e, t) {
  _a.set(e, t), Ht(t, [e]);
}
for (var Kl = 0; Kl < Ou.length; Kl++) {
  var Zl = Ou[Kl],
    jf = Zl.toLowerCase(),
    Pf = Zl[0].toUpperCase() + Zl.slice(1);
  Nt(jf, "on" + Pf);
}
Nt(Ea, "onAnimationEnd");
Nt(ka, "onAnimationIteration");
Nt(Ca, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(Na, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Ht(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ht(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ht(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var In =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(In));
function Lu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ld(r, t, void 0, e), (e.currentTarget = null);
}
function Oa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Lu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Lu(l, u, c), (i = s);
        }
    }
  }
  if (Gr) throw ((e = Ci), (Gr = !1), (Ci = null), e);
}
function B(e, t) {
  var n = t[Ii];
  n === void 0 && (n = t[Ii] = new Set());
  var r = e + "__bubble";
  n.has(r) || (La(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), La(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      As.forEach(function (n) {
        n !== "selectionchange" && (Mf.has(n) || Gl(n, !1, e), Gl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), Gl("selectionchange", !1, t));
  }
}
function La(e, t, n, r) {
  switch (da(t)) {
    case 1:
      var l = Qd;
      break;
    case 4:
      l = Vd;
      break;
    default:
      l = xo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ki ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Jl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = zt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Js(function () {
    var c = i,
      m = mo(n),
      v = [];
    e: {
      var h = _a.get(e);
      if (h !== void 0) {
        var g = So,
          x = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = uf;
            break;
          case "focusin":
            (x = "focus"), (g = Ql);
            break;
          case "focusout":
            (x = "blur"), (g = Ql);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Kd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = cf;
            break;
          case Ea:
          case ka:
          case Ca:
            g = Jd;
            break;
          case Na:
            g = ff;
            break;
          case "scroll":
            g = Yd;
            break;
          case "wheel":
            g = hf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = bd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = gu;
        }
        var S = (t & 4) !== 0,
          P = !S && e === "scroll",
          f = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var a = c, p; a !== null; ) {
          p = a;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              f !== null && ((y = Kn(a, f)), y != null && S.push(tr(a, y, p)))),
            P)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((h = new g(h, x, null, n, m)), v.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Si &&
            (x = n.relatedTarget || n.fromElement) &&
            (zt(x) || x[et]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            m.window === m
              ? m
              : (h = m.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((x = n.relatedTarget || n.toElement),
              (g = c),
              (x = x ? zt(x) : null),
              x !== null &&
                ((P = Qt(x)), x !== P || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = c)),
          g !== x)
        ) {
          if (
            ((S = vu),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = gu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (P = g == null ? h : qt(g)),
            (p = x == null ? h : qt(x)),
            (h = new S(y, a + "leave", g, n, m)),
            (h.target = P),
            (h.relatedTarget = p),
            (y = null),
            zt(m) === c &&
              ((S = new S(f, a + "enter", x, n, m)),
              (S.target = p),
              (S.relatedTarget = P),
              (y = S)),
            (P = y),
            g && x)
          )
            t: {
              for (S = g, f = x, a = 0, p = S; p; p = Vt(p)) a++;
              for (p = 0, y = f; y; y = Vt(y)) p++;
              for (; 0 < a - p; ) (S = Vt(S)), a--;
              for (; 0 < p - a; ) (f = Vt(f)), p--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Vt(S)), (f = Vt(f));
              }
              S = null;
            }
          else S = null;
          g !== null && ju(v, h, g, S, !1),
            x !== null && P !== null && ju(v, P, x, S, !0);
        }
      }
      e: {
        if (
          ((h = c ? qt(c) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var E = Sf;
        else if (Su(h))
          if (ya) E = Nf;
          else {
            E = kf;
            var _ = Ef;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = Cf);
        if (E && (E = E(e, c))) {
          va(v, E, n, m);
          break e;
        }
        _ && _(e, h, c),
          e === "focusout" &&
            (_ = h._wrapperState) &&
            _.controlled &&
            h.type === "number" &&
            vi(h, "number", h.value);
      }
      switch (((_ = c ? qt(c) : window), e)) {
        case "focusin":
          (Su(_) || _.contentEditable === "true") &&
            ((Gt = _), (Li = c), (Wn = null));
          break;
        case "focusout":
          Wn = Li = Gt = null;
          break;
        case "mousedown":
          ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ji = !1), _u(v, n, m);
          break;
        case "selectionchange":
          if (Lf) break;
        case "keydown":
        case "keyup":
          _u(v, n, m);
      }
      var k;
      if (ko)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        Zt
          ? ha(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (pa &&
          n.locale !== "ko" &&
          (Zt || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Zt && (k = fa())
            : ((dt = m),
              (wo = "value" in dt ? dt.value : dt.textContent),
              (Zt = !0))),
        (_ = tl(c, O)),
        0 < _.length &&
          ((O = new yu(O, e, null, n, m)),
          v.push({ event: O, listeners: _ }),
          k ? (O.data = k) : ((k = ma(n)), k !== null && (O.data = k)))),
        (k = vf ? yf(e, n) : gf(e, n)) &&
          ((c = tl(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new yu("onBeforeInput", "beforeinput", null, n, m)),
            v.push({ event: m, listeners: c }),
            (m.data = k)));
    }
    Oa(v, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function tl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Kn(e, n)),
      i != null && r.unshift(tr(e, i, l)),
      (i = Kn(e, t)),
      i != null && r.push(tr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Kn(n, i)), s != null && o.unshift(tr(n, s, u)))
        : l || ((s = Kn(n, i)), s != null && o.push(tr(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var zf = /\r\n?/g,
  Tf = /\u0000|\uFFFD/g;
function Pu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zf,
      `
`
    )
    .replace(Tf, "");
}
function _r(e, t, n) {
  if (((t = Pu(t)), Pu(e) !== t && n)) throw Error(w(425));
}
function nl() {}
var Pi = null,
  Mi = null;
function zi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ti = typeof setTimeout == "function" ? setTimeout : void 0,
  If = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Mu = typeof Promise == "function" ? Promise : void 0,
  Af =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Mu < "u"
      ? function (e) {
          return Mu.resolve(null).then(e).catch(Rf);
        }
      : Ti;
function Rf(e) {
  setTimeout(function () {
    throw e;
  });
}
function ql(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jn(t);
}
function vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sn = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + Sn,
  nr = "__reactProps$" + Sn,
  et = "__reactContainer$" + Sn,
  Ii = "__reactEvents$" + Sn,
  Df = "__reactListeners$" + Sn,
  Bf = "__reactHandles$" + Sn;
function zt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[Ve])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zu(e); e !== null; ) {
          if ((n = e[Ve])) return n;
          e = zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fr(e) {
  return (
    (e = e[Ve] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Nl(e) {
  return e[nr] || null;
}
var Ai = [],
  bt = -1;
function _t(e) {
  return { current: e };
}
function F(e) {
  0 > bt || ((e.current = Ai[bt]), (Ai[bt] = null), bt--);
}
function D(e, t) {
  bt++, (Ai[bt] = e.current), (e.current = t);
}
var Ct = {},
  oe = _t(Ct),
  ve = _t(!1),
  Bt = Ct;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function rl() {
  F(ve), F(oe);
}
function Tu(e, t, n) {
  if (oe.current !== Ct) throw Error(w(168));
  D(oe, t), D(ve, n);
}
function ja(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Sd(e) || "Unknown", l));
  return Q({}, n, r);
}
function ll(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ct),
    (Bt = oe.current),
    D(oe, e),
    D(ve, ve.current),
    !0
  );
}
function Iu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = ja(e, t, Bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(ve),
      F(oe),
      D(oe, e))
    : F(ve),
    D(ve, n);
}
var Ze = null,
  _l = !1,
  bl = !1;
function Pa(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
function Ff(e) {
  (_l = !0), Pa(e);
}
function Ot() {
  if (!bl && Ze !== null) {
    bl = !0;
    var e = 0,
      t = R;
    try {
      var n = Ze;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ze = null), (_l = !1);
    } catch (l) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), ta(vo, Ot), l);
    } finally {
      (R = t), (bl = !1);
    }
  }
  return null;
}
var en = [],
  tn = 0,
  il = null,
  ol = 0,
  _e = [],
  Oe = 0,
  Ft = null,
  Ge = 1,
  Je = "";
function Pt(e, t) {
  (en[tn++] = ol), (en[tn++] = il), (il = e), (ol = t);
}
function Ma(e, t, n) {
  (_e[Oe++] = Ge), (_e[Oe++] = Je), (_e[Oe++] = Ft), (Ft = e);
  var r = Ge;
  e = Je;
  var l = 32 - Be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Be(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ge = (1 << (32 - Be(t) + l)) | (n << l) | r),
      (Je = i + e);
  } else (Ge = (1 << i) | (n << l) | r), (Je = e);
}
function No(e) {
  e.return !== null && (Pt(e, 1), Ma(e, 1, 0));
}
function _o(e) {
  for (; e === il; )
    (il = en[--tn]), (en[tn] = null), (ol = en[--tn]), (en[tn] = null);
  for (; e === Ft; )
    (Ft = _e[--Oe]),
      (_e[Oe] = null),
      (Je = _e[--Oe]),
      (_e[Oe] = null),
      (Ge = _e[--Oe]),
      (_e[Oe] = null);
}
var Ee = null,
  Se = null,
  $ = !1,
  Re = null;
function za(e, t) {
  var n = Le(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Au(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ee = e), (Se = vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ft !== null ? { id: Ge, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Le(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ri(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Di(e) {
  if ($) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Au(e, t)) {
        if (Ri(e)) throw Error(w(418));
        t = vt(n.nextSibling);
        var r = Ee;
        t && Au(e, t)
          ? za(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ee = e));
      }
    } else {
      if (Ri(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Ee = e);
    }
  }
}
function Ru(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function Or(e) {
  if (e !== Ee) return !1;
  if (!$) return Ru(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !zi(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Ri(e)) throw (Ta(), Error(w(418)));
    for (; t; ) za(e, t), (t = vt(t.nextSibling));
  }
  if ((Ru(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = Ee ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ta() {
  for (var e = Se; e; ) e = vt(e.nextSibling);
}
function hn() {
  (Se = Ee = null), ($ = !1);
}
function Oo(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var Wf = rt.ReactCurrentBatchConfig;
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ul = _t(null),
  sl = null,
  nn = null,
  Lo = null;
function jo() {
  Lo = nn = sl = null;
}
function Po(e) {
  var t = ul.current;
  F(ul), (e._currentValue = t);
}
function Bi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function cn(e, t) {
  (sl = e),
    (Lo = nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (Lo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nn === null)) {
      if (sl === null) throw Error(w(308));
      (nn = e), (sl.dependencies = { lanes: 0, firstContext: e });
    } else nn = nn.next = e;
  return t;
}
var Tt = null;
function Mo(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function Ia(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Mo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function zo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Aa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), T & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Mo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Wr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n);
  }
}
function Du(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function al(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var v = l.baseState;
    (o = 0), (m = c = s = null), (u = i);
    do {
      var h = u.lane,
        g = u.eventTime;
      if ((r & h) === h) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            S = u;
          switch (((h = t), (g = n), S.tag)) {
            case 1:
              if (((x = S.payload), typeof x == "function")) {
                v = x.call(g, v, h);
                break e;
              }
              v = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = S.payload),
                (h = typeof x == "function" ? x.call(g, v, h) : x),
                h == null)
              )
                break e;
              v = Q({}, v, h);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = g), (s = v)) : (m = m.next = g),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = v),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ($t |= o), (e.lanes = o), (e.memoizedState = v);
  }
}
function Bu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var Ra = new Is.Component().refs;
function Fi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = xt(e),
      i = qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = yt(e, i, l)),
      t !== null && (Fe(t, e, l, r), Wr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = xt(e),
      i = qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = yt(e, i, l)),
      t !== null && (Fe(t, e, l, r), Wr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = xt(e),
      l = qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = yt(e, l, r)),
      t !== null && (Fe(t, e, r, n), Wr(t, e, r));
  },
};
function Fu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(l, i)
      : !0
  );
}
function Da(e, t, n) {
  var r = !1,
    l = Ct,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pe(i))
      : ((l = ye(t) ? Bt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? pn(e, l) : Ct)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Wu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
}
function Wi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ra), zo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Pe(i))
    : ((i = ye(t) ? Bt : oe.current), (l.context = pn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Fi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ol.enqueueReplaceState(l, l.state, null),
      al(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ln(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === Ra && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function $u(e) {
  var t = e._init;
  return t(e._payload);
}
function Ba(e) {
  function t(f, a) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [a]), (f.flags |= 16)) : p.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = wt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < a ? ((f.flags |= 2), a) : p)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, p, y) {
    return a === null || a.tag !== 6
      ? ((a = oi(p, f.mode, y)), (a.return = f), a)
      : ((a = l(a, p)), (a.return = f), a);
  }
  function s(f, a, p, y) {
    var E = p.type;
    return E === Kt
      ? m(f, a, p.props.children, y, p.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === ut &&
            $u(E) === a.type))
      ? ((y = l(a, p.props)), (y.ref = Ln(f, a, p)), (y.return = f), y)
      : ((y = Yr(p.type, p.key, p.props, null, f.mode, y)),
        (y.ref = Ln(f, a, p)),
        (y.return = f),
        y);
  }
  function c(f, a, p, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== p.containerInfo ||
      a.stateNode.implementation !== p.implementation
      ? ((a = ui(p, f.mode, y)), (a.return = f), a)
      : ((a = l(a, p.children || [])), (a.return = f), a);
  }
  function m(f, a, p, y, E) {
    return a === null || a.tag !== 7
      ? ((a = Dt(p, f.mode, y, E)), (a.return = f), a)
      : ((a = l(a, p)), (a.return = f), a);
  }
  function v(f, a, p) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = oi("" + a, f.mode, p)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case yr:
          return (
            (p = Yr(a.type, a.key, a.props, null, f.mode, p)),
            (p.ref = Ln(f, null, a)),
            (p.return = f),
            p
          );
        case Xt:
          return (a = ui(a, f.mode, p)), (a.return = f), a;
        case ut:
          var y = a._init;
          return v(f, y(a._payload), p);
      }
      if (zn(a) || kn(a))
        return (a = Dt(a, f.mode, p, null)), (a.return = f), a;
      Lr(f, a);
    }
    return null;
  }
  function h(f, a, p, y) {
    var E = a !== null ? a.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return E !== null ? null : u(f, a, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case yr:
          return p.key === E ? s(f, a, p, y) : null;
        case Xt:
          return p.key === E ? c(f, a, p, y) : null;
        case ut:
          return (E = p._init), h(f, a, E(p._payload), y);
      }
      if (zn(p) || kn(p)) return E !== null ? null : m(f, a, p, y, null);
      Lr(f, p);
    }
    return null;
  }
  function g(f, a, p, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(p) || null), u(a, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case yr:
          return (f = f.get(y.key === null ? p : y.key) || null), s(a, f, y, E);
        case Xt:
          return (f = f.get(y.key === null ? p : y.key) || null), c(a, f, y, E);
        case ut:
          var _ = y._init;
          return g(f, a, p, _(y._payload), E);
      }
      if (zn(y) || kn(y)) return (f = f.get(p) || null), m(a, f, y, E, null);
      Lr(a, y);
    }
    return null;
  }
  function x(f, a, p, y) {
    for (
      var E = null, _ = null, k = a, O = (a = 0), A = null;
      k !== null && O < p.length;
      O++
    ) {
      k.index > O ? ((A = k), (k = null)) : (A = k.sibling);
      var M = h(f, k, p[O], y);
      if (M === null) {
        k === null && (k = A);
        break;
      }
      e && k && M.alternate === null && t(f, k),
        (a = i(M, a, O)),
        _ === null ? (E = M) : (_.sibling = M),
        (_ = M),
        (k = A);
    }
    if (O === p.length) return n(f, k), $ && Pt(f, O), E;
    if (k === null) {
      for (; O < p.length; O++)
        (k = v(f, p[O], y)),
          k !== null &&
            ((a = i(k, a, O)), _ === null ? (E = k) : (_.sibling = k), (_ = k));
      return $ && Pt(f, O), E;
    }
    for (k = r(f, k); O < p.length; O++)
      (A = g(k, f, O, p[O], y)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? O : A.key),
          (a = i(A, a, O)),
          _ === null ? (E = A) : (_.sibling = A),
          (_ = A));
    return (
      e &&
        k.forEach(function (ue) {
          return t(f, ue);
        }),
      $ && Pt(f, O),
      E
    );
  }
  function S(f, a, p, y) {
    var E = kn(p);
    if (typeof E != "function") throw Error(w(150));
    if (((p = E.call(p)), p == null)) throw Error(w(151));
    for (
      var _ = (E = null), k = a, O = (a = 0), A = null, M = p.next();
      k !== null && !M.done;
      O++, M = p.next()
    ) {
      k.index > O ? ((A = k), (k = null)) : (A = k.sibling);
      var ue = h(f, k, M.value, y);
      if (ue === null) {
        k === null && (k = A);
        break;
      }
      e && k && ue.alternate === null && t(f, k),
        (a = i(ue, a, O)),
        _ === null ? (E = ue) : (_.sibling = ue),
        (_ = ue),
        (k = A);
    }
    if (M.done) return n(f, k), $ && Pt(f, O), E;
    if (k === null) {
      for (; !M.done; O++, M = p.next())
        (M = v(f, M.value, y)),
          M !== null &&
            ((a = i(M, a, O)), _ === null ? (E = M) : (_.sibling = M), (_ = M));
      return $ && Pt(f, O), E;
    }
    for (k = r(f, k); !M.done; O++, M = p.next())
      (M = g(k, f, O, M.value, y)),
        M !== null &&
          (e && M.alternate !== null && k.delete(M.key === null ? O : M.key),
          (a = i(M, a, O)),
          _ === null ? (E = M) : (_.sibling = M),
          (_ = M));
    return (
      e &&
        k.forEach(function (se) {
          return t(f, se);
        }),
      $ && Pt(f, O),
      E
    );
  }
  function P(f, a, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Kt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case yr:
          e: {
            for (var E = p.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (((E = p.type), E === Kt)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (a = l(_, p.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === ut &&
                    $u(E) === _.type)
                ) {
                  n(f, _.sibling),
                    (a = l(_, p.props)),
                    (a.ref = Ln(f, _, p)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            p.type === Kt
              ? ((a = Dt(p.props.children, f.mode, y, p.key)),
                (a.return = f),
                (f = a))
              : ((y = Yr(p.type, p.key, p.props, null, f.mode, y)),
                (y.ref = Ln(f, a, p)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Xt:
          e: {
            for (_ = p.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === p.containerInfo &&
                  a.stateNode.implementation === p.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, p.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = ui(p, f.mode, y)), (a.return = f), (f = a);
          }
          return o(f);
        case ut:
          return (_ = p._init), P(f, a, _(p._payload), y);
      }
      if (zn(p)) return x(f, a, p, y);
      if (kn(p)) return S(f, a, p, y);
      Lr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, p)), (a.return = f), (f = a))
          : (n(f, a), (a = oi(p, f.mode, y)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return P;
}
var mn = Ba(!0),
  Fa = Ba(!1),
  pr = {},
  Xe = _t(pr),
  rr = _t(pr),
  lr = _t(pr);
function It(e) {
  if (e === pr) throw Error(w(174));
  return e;
}
function To(e, t) {
  switch ((D(lr, t), D(rr, e), D(Xe, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gi(t, e));
  }
  F(Xe), D(Xe, t);
}
function vn() {
  F(Xe), F(rr), F(lr);
}
function Wa(e) {
  It(lr.current);
  var t = It(Xe.current),
    n = gi(t, e.type);
  t !== n && (D(rr, e), D(Xe, n));
}
function Io(e) {
  rr.current === e && (F(Xe), F(rr));
}
var U = _t(0);
function cl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ei = [];
function Ao() {
  for (var e = 0; e < ei.length; e++)
    ei[e]._workInProgressVersionPrimary = null;
  ei.length = 0;
}
var $r = rt.ReactCurrentDispatcher,
  ti = rt.ReactCurrentBatchConfig,
  Wt = 0,
  H = null,
  Z = null,
  J = null,
  dl = !1,
  $n = !1,
  ir = 0,
  $f = 0;
function ne() {
  throw Error(w(321));
}
function Ro(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!We(e[n], t[n])) return !1;
  return !0;
}
function Do(e, t, n, r, l, i) {
  if (
    ((Wt = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($r.current = e === null || e.memoizedState === null ? Vf : Yf),
    (e = n(r, l)),
    $n)
  ) {
    i = 0;
    do {
      if ((($n = !1), (ir = 0), 25 <= i)) throw Error(w(301));
      (i += 1),
        (J = Z = null),
        (t.updateQueue = null),
        ($r.current = Xf),
        (e = n(r, l));
    } while ($n);
  }
  if (
    (($r.current = fl),
    (t = Z !== null && Z.next !== null),
    (Wt = 0),
    (J = Z = H = null),
    (dl = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Bo() {
  var e = ir !== 0;
  return (ir = 0), e;
}
function Qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (H.memoizedState = J = e) : (J = J.next = e), J;
}
function Me() {
  if (Z === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) (J = t), (Z = e);
  else {
    if (e === null) throw Error(w(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      J === null ? (H.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ni(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var m = c.lane;
      if ((Wt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var v = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = v), (o = r)) : (s = s.next = v),
          (H.lanes |= m),
          ($t |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      We(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (H.lanes |= i), ($t |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ri(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    We(i, t.memoizedState) || (me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function $a() {}
function Ua(e, t) {
  var n = H,
    r = Me(),
    l = t(),
    i = !We(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    Fo(Va.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, Qa.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(w(349));
    Wt & 30 || Ha(n, t, l);
  }
  return l;
}
function Ha(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ya(t) && Xa(e);
}
function Va(e, t, n) {
  return n(function () {
    Ya(t) && Xa(e);
  });
}
function Ya(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !We(e, n);
  } catch {
    return !0;
  }
}
function Xa(e) {
  var t = tt(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Uu(e) {
  var t = Qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qf.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ka() {
  return Me().memoizedState;
}
function Ur(e, t, n, r) {
  var l = Qe();
  (H.flags |= e),
    (l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ll(e, t, n, r) {
  var l = Me();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && Ro(r, o.deps))) {
      l.memoizedState = ur(t, n, i, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = ur(1 | t, n, i, r));
}
function Hu(e, t) {
  return Ur(8390656, 8, e, t);
}
function Fo(e, t) {
  return Ll(2048, 8, e, t);
}
function Za(e, t) {
  return Ll(4, 2, e, t);
}
function Ga(e, t) {
  return Ll(4, 4, e, t);
}
function Ja(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ll(4, 4, Ja.bind(null, t, e), n)
  );
}
function Wo() {}
function ba(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ro(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ec(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ro(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function tc(e, t, n) {
  return Wt & 21
    ? (We(n, t) || ((n = la()), (H.lanes |= n), ($t |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function Uf(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ti.transition;
  ti.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (ti.transition = r);
  }
}
function nc() {
  return Me().memoizedState;
}
function Hf(e, t, n) {
  var r = xt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    rc(e))
  )
    lc(t, n);
  else if (((n = Ia(e, t, n, r)), n !== null)) {
    var l = de();
    Fe(n, e, r, l), ic(n, t, r);
  }
}
function Qf(e, t, n) {
  var r = xt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rc(e)) lc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), We(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Mo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ia(e, t, l, r)),
      n !== null && ((l = de()), Fe(n, e, r, l), ic(n, t, r));
  }
}
function rc(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function lc(e, t) {
  $n = dl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ic(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n);
  }
}
var fl = {
    readContext: Pe,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  Vf = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (Qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: Hu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ur(4194308, 4, Ja.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ur(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ur(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Qe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Hf.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Uu,
    useDebugValue: Wo,
    useDeferredValue: function (e) {
      return (Qe().memoizedState = e);
    },
    useTransition: function () {
      var e = Uu(!1),
        t = e[0];
      return (e = Uf.bind(null, e[1])), (Qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Qe();
      if ($) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(w(349));
        Wt & 30 || Ha(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Hu(Va.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ur(9, Qa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qe(),
        t = q.identifierPrefix;
      if ($) {
        var n = Je,
          r = Ge;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = $f++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Yf = {
    readContext: Pe,
    useCallback: ba,
    useContext: Pe,
    useEffect: Fo,
    useImperativeHandle: qa,
    useInsertionEffect: Za,
    useLayoutEffect: Ga,
    useMemo: ec,
    useReducer: ni,
    useRef: Ka,
    useState: function () {
      return ni(or);
    },
    useDebugValue: Wo,
    useDeferredValue: function (e) {
      var t = Me();
      return tc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ni(or)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: $a,
    useSyncExternalStore: Ua,
    useId: nc,
    unstable_isNewReconciler: !1,
  },
  Xf = {
    readContext: Pe,
    useCallback: ba,
    useContext: Pe,
    useEffect: Fo,
    useImperativeHandle: qa,
    useInsertionEffect: Za,
    useLayoutEffect: Ga,
    useMemo: ec,
    useReducer: ri,
    useRef: Ka,
    useState: function () {
      return ri(or);
    },
    useDebugValue: Wo,
    useDeferredValue: function (e) {
      var t = Me();
      return Z === null ? (t.memoizedState = e) : tc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ri(or)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: $a,
    useSyncExternalStore: Ua,
    useId: nc,
    unstable_isNewReconciler: !1,
  };
function yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function li(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Kf = typeof WeakMap == "function" ? WeakMap : Map;
function oc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      hl || ((hl = !0), (Ji = r)), $i(e, t);
    }),
    n
  );
}
function uc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        $i(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        $i(e, t),
          typeof r != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Qu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Kf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = sp.bind(null, e, t, n)), t.then(e, e));
}
function Vu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Zf = rt.ReactCurrentOwner,
  me = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Fa(t, null, n, r) : mn(t, e.child, n, r);
}
function Xu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    cn(t, l),
    (r = Do(e, t, n, r, i, l)),
    (n = Bo()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : ($ && n && No(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function Ku(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ko(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), sc(e, t, i, r, l))
      : ((e = Yr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(o, r) && e.ref === t.ref)
    )
      return nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = wt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), nt(e, t, l);
  }
  return Ui(e, t, n, r, l);
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(ln, we),
        (we |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(ln, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(ln, we),
        (we |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(ln, we),
      (we |= r);
  return ce(e, t, l, n), t.child;
}
function cc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ui(e, t, n, r, l) {
  var i = ye(n) ? Bt : oe.current;
  return (
    (i = pn(t, i)),
    cn(t, l),
    (n = Do(e, t, n, r, i, l)),
    (r = Bo()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : ($ && r && No(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function Zu(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    ll(t);
  } else i = !1;
  if ((cn(t, l), t.stateNode === null))
    Hr(e, t), Da(t, n, r), Wi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Pe(c))
      : ((c = ye(n) ? Bt : oe.current), (c = pn(t, c)));
    var m = n.getDerivedStateFromProps,
      v =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Wu(t, o, r, c)),
      (st = !1);
    var h = t.memoizedState;
    (o.state = h),
      al(t, r, o, l),
      (s = t.memoizedState),
      u !== r || h !== s || ve.current || st
        ? (typeof m == "function" && (Fi(t, n, m, r), (s = t.memoizedState)),
          (u = st || Fu(t, n, u, r, h, s, c))
            ? (v ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Aa(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Ie(t.type, u)),
      (o.props = c),
      (v = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Pe(s))
        : ((s = ye(n) ? Bt : oe.current), (s = pn(t, s)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== v || h !== s) && Wu(t, o, r, s)),
      (st = !1),
      (h = t.memoizedState),
      (o.state = h),
      al(t, r, o, l);
    var x = t.memoizedState;
    u !== v || h !== x || ve.current || st
      ? (typeof g == "function" && (Fi(t, n, g, r), (x = t.memoizedState)),
        (c = st || Fu(t, n, c, r, h, x, s) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Hi(e, t, n, r, i, l);
}
function Hi(e, t, n, r, l, i) {
  cc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Iu(t, n, !1), nt(e, t, i);
  (r = t.stateNode), (Zf.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = mn(t, e.child, null, i)), (t.child = mn(t, null, u, i)))
      : ce(e, t, u, i),
    (t.memoizedState = r.state),
    l && Iu(t, n, !0),
    t.child
  );
}
function dc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Tu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Tu(e, t.context, !1),
    To(e, t.containerInfo);
}
function Gu(e, t, n, r, l) {
  return hn(), Oo(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fc(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(U, l & 1),
    e === null)
  )
    return (
      Di(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ml(o, r, 0, null)),
              (e = Dt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Vi(n)),
              (t.memoizedState = Qi),
              e)
            : $o(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Gf(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = wt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = wt(u, i)) : ((i = Dt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Vi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Qi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = wt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function $o(e, t) {
  return (
    (t = Ml({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, r) {
  return (
    r !== null && Oo(r),
    mn(t, e.child, null, n),
    (e = $o(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Gf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = li(Error(w(422)))), jr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Ml({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Dt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && mn(t, e.child, null, o),
        (t.child.memoizedState = Vi(o)),
        (t.memoizedState = Qi),
        i);
  if (!(t.mode & 1)) return jr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(w(419))), (r = li(i, r, void 0)), jr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), me || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), tt(e, l), Fe(r, e, l, -1));
    }
    return Xo(), (r = li(Error(w(421)))), jr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ap.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Se = vt(l.nextSibling)),
      (Ee = t),
      ($ = !0),
      (Re = null),
      e !== null &&
        ((_e[Oe++] = Ge),
        (_e[Oe++] = Je),
        (_e[Oe++] = Ft),
        (Ge = e.id),
        (Je = e.overflow),
        (Ft = t)),
      (t = $o(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bi(e.return, t, n);
}
function ii(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function pc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
        else if (e.tag === 19) Ju(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && cl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ii(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && cl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ii(t, !0, n, null, i);
        break;
      case "together":
        ii(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($t |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Jf(e, t, n) {
  switch (t.tag) {
    case 3:
      dc(t), hn();
      break;
    case 5:
      Wa(t);
      break;
    case 1:
      ye(t.type) && ll(t);
      break;
    case 4:
      To(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(ul, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fc(e, t, n)
          : (D(U, U.current & 1),
            (e = nt(e, t, n)),
            e !== null ? e.sibling : null);
      D(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ac(e, t, n);
  }
  return nt(e, t, n);
}
var hc, Yi, mc, vc;
hc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Yi = function () {};
mc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), It(Xe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = hi(e, l)), (r = hi(e, r)), (i = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = yi(e, l)), (r = yi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = nl);
    }
    xi(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Yn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Yn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && B("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
vc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qf(e, t, n) {
  var r = t.pendingProps;
  switch ((_o(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return ye(t.type) && rl(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vn(),
        F(ve),
        F(oe),
        Ao(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Or(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (eo(Re), (Re = null)))),
        Yi(e, t),
        re(t),
        null
      );
    case 5:
      Io(t);
      var l = It(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return re(t), null;
        }
        if (((e = It(Xe.current)), Or(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ve] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < In.length; l++) B(In[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              ou(r, i), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              su(r, i), B("invalid", r);
          }
          xi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Yn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              gr(r), uu(r, i, !0);
              break;
            case "textarea":
              gr(r), au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = nl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ve] = t),
            (e[nr] = r),
            hc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = wi(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < In.length; l++) B(In[l], e);
                l = r;
                break;
              case "source":
                B("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (l = r);
                break;
              case "details":
                B("toggle", e), (l = r);
                break;
              case "input":
                ou(e, r), (l = hi(e, r)), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                su(e, r), (l = yi(e, r)), B("invalid", e);
                break;
              default:
                l = r;
            }
            xi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Ys(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Qs(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Xn(e, s)
                    : typeof s == "number" && Xn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Yn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && B("scroll", e)
                      : s != null && co(e, i, s, o));
              }
            switch (n) {
              case "input":
                gr(e), uu(e, r, !1);
                break;
              case "textarea":
                gr(e), au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? on(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      on(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = nl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) vc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = It(lr.current)), It(Xe.current), Or(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ve] = t),
            (i = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                _r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ve] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (F(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Se !== null && t.mode & 1 && !(t.flags & 128))
          Ta(), hn(), (t.flags |= 98560), (i = !1);
        else if (((i = Or(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(w(317));
            i[Ve] = t;
          } else
            hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Re !== null && (eo(Re), (Re = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? G === 0 && (G = 3) : Xo())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        vn(), Yi(e, t), e === null && er(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return Po(t.type._context), re(t), null;
    case 17:
      return ye(t.type) && rl(), re(t), null;
    case 19:
      if ((F(U), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) jn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = cl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    jn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            X() > gn &&
            ((t.flags |= 128), (r = !0), jn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = cl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return re(t), null;
          } else
            2 * X() - i.renderingStartTime > gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = X()),
          (t.sibling = null),
          (n = U.current),
          D(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Yo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function bf(e, t) {
  switch ((_o(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && rl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vn(),
        F(ve),
        F(oe),
        Ao(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Io(t), null;
    case 13:
      if ((F(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(U), null;
    case 4:
      return vn(), null;
    case 10:
      return Po(t.type._context), null;
    case 22:
    case 23:
      return Yo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pr = !1,
  le = !1,
  ep = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function Xi(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var qu = !1;
function tp(e, t) {
  if (((Pi = br), (e = wa()), Co(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            m = 0,
            v = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = o + l),
                v !== i || (r !== 0 && v.nodeType !== 3) || (s = o + r),
                v.nodeType === 3 && (o += v.nodeValue.length),
                (g = v.firstChild) !== null;

            )
              (h = v), (v = g);
            for (;;) {
              if (v === e) break t;
              if (
                (h === n && ++c === l && (u = o),
                h === i && ++m === r && (s = o),
                (g = v.nextSibling) !== null)
              )
                break;
              (v = h), (h = v.parentNode);
            }
            v = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Mi = { focusedElem: e, selectionRange: n }, br = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var S = x.memoizedProps,
                    P = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Ie(t.type, S),
                      P
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (y) {
          Y(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (x = qu), (qu = !1), x;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Xi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ki(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function yc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ve], delete t[nr], delete t[Ii], delete t[Df], delete t[Bf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function gc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = nl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), (e = e.sibling);
}
function Gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), (e = e.sibling);
}
var b = null,
  Ae = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) xc(e, t, n), (n = n.sibling);
}
function xc(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(Sl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || rn(n, t);
    case 6:
      var r = b,
        l = Ae;
      (b = null),
        it(e, t, n),
        (b = r),
        (Ae = l),
        b !== null &&
          (Ae
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Ae
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? ql(e.parentNode, n)
              : e.nodeType === 1 && ql(e, n),
            Jn(e))
          : ql(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Ae),
        (b = n.stateNode.containerInfo),
        (Ae = !0),
        it(e, t, n),
        (b = r),
        (Ae = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Xi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (rn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Y(n, t, u);
        }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), it(e, t, n), (le = r))
        : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function es(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ep()),
      t.forEach(function (r) {
        var l = cp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Ae = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Ae = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Ae = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(w(160));
        xc(i, o, l), (b = null), (Ae = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        Y(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) wc(t, e), (t = t.sibling);
}
function wc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), He(e), r & 4)) {
        try {
          Un(3, e, e.return), jl(3, e);
        } catch (S) {
          Y(e, e.return, S);
        }
        try {
          Un(5, e, e.return);
        } catch (S) {
          Y(e, e.return, S);
        }
      }
      break;
    case 1:
      Te(t, e), He(e), r & 512 && n !== null && rn(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        He(e),
        r & 512 && n !== null && rn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Xn(l, "");
        } catch (S) {
          Y(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && $s(l, i),
              wi(u, o);
            var c = wi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                v = s[o + 1];
              m === "style"
                ? Ys(l, v)
                : m === "dangerouslySetInnerHTML"
                ? Qs(l, v)
                : m === "children"
                ? Xn(l, v)
                : co(l, m, v, c);
            }
            switch (u) {
              case "input":
                mi(l, i);
                break;
              case "textarea":
                Us(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? on(l, !!i.multiple, g, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? on(l, !!i.multiple, i.defaultValue, !0)
                      : on(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nr] = i;
          } catch (S) {
            Y(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Te(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          Y(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (S) {
          Y(e, e.return, S);
        }
      break;
    case 4:
      Te(t, e), He(e);
      break;
    case 13:
      Te(t, e),
        He(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Qo = X())),
        r & 4 && es(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || m), Te(t, e), (le = c)) : Te(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (N = e, m = e.child; m !== null; ) {
            for (v = N = m; N !== null; ) {
              switch (((h = N), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Un(4, h, h.return);
                  break;
                case 1:
                  rn(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (S) {
                      Y(r, n, S);
                    }
                  }
                  break;
                case 5:
                  rn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ns(v);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (N = g)) : ns(v);
            }
            m = m.sibling;
          }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                (l = v.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = v.stateNode),
                      (s = v.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Vs("display", o)));
              } catch (S) {
                Y(e, e.return, S);
              }
            }
          } else if (v.tag === 6) {
            if (m === null)
              try {
                v.stateNode.nodeValue = c ? "" : v.memoizedProps;
              } catch (S) {
                Y(e, e.return, S);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            m === v && (m = null), (v = v.return);
          }
          m === v && (m = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), He(e), r & 4 && es(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Xn(l, ""), (r.flags &= -33));
          var i = bu(e);
          Gi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = bu(e);
          Zi(e, u, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function np(e, t, n) {
  (N = e), Sc(e);
}
function Sc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Pr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = Pr;
        var c = le;
        if (((Pr = o), (le = s) && !c))
          for (N = l; N !== null; )
            (o = N),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? rs(l)
                : s !== null
                ? ((s.return = o), (N = s))
                : rs(l);
        for (; i !== null; ) (N = i), Sc(i), (i = i.sibling);
        (N = l), (Pr = u), (le = c);
      }
      ts(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (N = i)) : ts(e);
  }
}
function ts(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Bu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var v = m.dehydrated;
                    v !== null && Jn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        le || (t.flags & 512 && Ki(t));
      } catch (h) {
        Y(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ns(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function rs(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (s) {
            Y(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ki(t);
          } catch (s) {
            Y(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ki(t);
          } catch (s) {
            Y(t, o, s);
          }
      }
    } catch (s) {
      Y(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var rp = Math.ceil,
  pl = rt.ReactCurrentDispatcher,
  Uo = rt.ReactCurrentOwner,
  je = rt.ReactCurrentBatchConfig,
  T = 0,
  q = null,
  K = null,
  ee = 0,
  we = 0,
  ln = _t(0),
  G = 0,
  sr = null,
  $t = 0,
  Pl = 0,
  Ho = 0,
  Hn = null,
  he = null,
  Qo = 0,
  gn = 1 / 0,
  Ke = null,
  hl = !1,
  Ji = null,
  gt = null,
  Mr = !1,
  ft = null,
  ml = 0,
  Qn = 0,
  qi = null,
  Qr = -1,
  Vr = 0;
function de() {
  return T & 6 ? X() : Qr !== -1 ? Qr : (Qr = X());
}
function xt(e) {
  return e.mode & 1
    ? T & 2 && ee !== 0
      ? ee & -ee
      : Wf.transition !== null
      ? (Vr === 0 && (Vr = la()), Vr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : da(e.type))),
        e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (qi = null), Error(w(185)));
  cr(e, n, r),
    (!(T & 2) || e !== q) &&
      (e === q && (!(T & 2) && (Pl |= n), G === 4 && ct(e, ee)),
      ge(e, r),
      n === 1 && T === 0 && !(t.mode & 1) && ((gn = X() + 500), _l && Ot()));
}
function ge(e, t) {
  var n = e.callbackNode;
  Fd(e, t);
  var r = qr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fu(n), t === 1))
      e.tag === 0 ? Ff(ls.bind(null, e)) : Pa(ls.bind(null, e)),
        Af(function () {
          !(T & 6) && Ot();
        }),
        (n = null);
    else {
      switch (ia(r)) {
        case 1:
          n = vo;
          break;
        case 4:
          n = na;
          break;
        case 16:
          n = Jr;
          break;
        case 536870912:
          n = ra;
          break;
        default:
          n = Jr;
      }
      n = jc(n, Ec.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ec(e, t) {
  if (((Qr = -1), (Vr = 0), T & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = qr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
  else {
    t = r;
    var l = T;
    T |= 2;
    var i = Cc();
    (q !== e || ee !== t) && ((Ke = null), (gn = X() + 500), Rt(e, t));
    do
      try {
        op();
        break;
      } catch (u) {
        kc(e, u);
      }
    while (1);
    jo(),
      (pl.current = i),
      (T = l),
      K !== null ? (t = 0) : ((q = null), (ee = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ni(e)), l !== 0 && ((r = l), (t = bi(e, l)))), t === 1)
    )
      throw ((n = sr), Rt(e, 0), ct(e, r), ge(e, X()), n);
    if (t === 6) ct(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !lp(l) &&
          ((t = vl(e, r)),
          t === 2 && ((i = Ni(e)), i !== 0 && ((r = i), (t = bi(e, i)))),
          t === 1))
      )
        throw ((n = sr), Rt(e, 0), ct(e, r), ge(e, X()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Mt(e, he, Ke);
          break;
        case 3:
          if (
            (ct(e, r), (r & 130023424) === r && ((t = Qo + 500 - X()), 10 < t))
          ) {
            if (qr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ti(Mt.bind(null, e, he, Ke), t);
            break;
          }
          Mt(e, he, Ke);
          break;
        case 4:
          if ((ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Be(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ti(Mt.bind(null, e, he, Ke), r);
            break;
          }
          Mt(e, he, Ke);
          break;
        case 5:
          Mt(e, he, Ke);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ge(e, X()), e.callbackNode === n ? Ec.bind(null, e) : null;
}
function bi(e, t) {
  var n = Hn;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = vl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && eo(t)),
    e
  );
}
function eo(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function lp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!We(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ct(e, t) {
  for (
    t &= ~Ho,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ls(e) {
  if (T & 6) throw Error(w(327));
  dn();
  var t = qr(e, 0);
  if (!(t & 1)) return ge(e, X()), null;
  var n = vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ni(e);
    r !== 0 && ((t = r), (n = bi(e, r)));
  }
  if (n === 1) throw ((n = sr), Rt(e, 0), ct(e, t), ge(e, X()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mt(e, he, Ke),
    ge(e, X()),
    null
  );
}
function Vo(e, t) {
  var n = T;
  T |= 1;
  try {
    return e(t);
  } finally {
    (T = n), T === 0 && ((gn = X() + 500), _l && Ot());
  }
}
function Ut(e) {
  ft !== null && ft.tag === 0 && !(T & 6) && dn();
  var t = T;
  T |= 1;
  var n = je.transition,
    r = R;
  try {
    if (((je.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (je.transition = n), (T = t), !(T & 6) && Ot();
  }
}
function Yo() {
  (we = ln.current), F(ln);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), If(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((_o(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && rl();
          break;
        case 3:
          vn(), F(ve), F(oe), Ao();
          break;
        case 5:
          Io(r);
          break;
        case 4:
          vn();
          break;
        case 13:
          F(U);
          break;
        case 19:
          F(U);
          break;
        case 10:
          Po(r.type._context);
          break;
        case 22:
        case 23:
          Yo();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (K = e = wt(e.current, null)),
    (ee = we = t),
    (G = 0),
    (sr = null),
    (Ho = Pl = $t = 0),
    (he = Hn = null),
    Tt !== null)
  ) {
    for (t = 0; t < Tt.length; t++)
      if (((n = Tt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Tt = null;
  }
  return e;
}
function kc(e, t) {
  do {
    var n = K;
    try {
      if ((jo(), ($r.current = fl), dl)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        dl = !1;
      }
      if (
        ((Wt = 0),
        (J = Z = H = null),
        ($n = !1),
        (ir = 0),
        (Uo.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (sr = t), (K = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            m = u,
            v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var h = m.alternate;
            h
              ? ((m.updateQueue = h.updateQueue),
                (m.memoizedState = h.memoizedState),
                (m.lanes = h.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Vu(o);
          if (g !== null) {
            (g.flags &= -257),
              Yu(g, o, u, i, t),
              g.mode & 1 && Qu(i, c, t),
              (t = g),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Qu(i, c, t), Xo();
              break e;
            }
            s = Error(w(426));
          }
        } else if ($ && u.mode & 1) {
          var P = Vu(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Yu(P, o, u, i, t),
              Oo(yn(s, u));
            break e;
          }
        }
        (i = s = yn(s, u)),
          G !== 4 && (G = 2),
          Hn === null ? (Hn = [i]) : Hn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = oc(i, s, t);
              Du(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (gt === null || !gt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = uc(i, u, t);
                Du(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _c(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Cc() {
  var e = pl.current;
  return (pl.current = fl), e === null ? fl : e;
}
function Xo() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!($t & 268435455) && !(Pl & 268435455)) || ct(q, ee);
}
function vl(e, t) {
  var n = T;
  T |= 2;
  var r = Cc();
  (q !== e || ee !== t) && ((Ke = null), Rt(e, t));
  do
    try {
      ip();
      break;
    } catch (l) {
      kc(e, l);
    }
  while (1);
  if ((jo(), (T = n), (pl.current = r), K !== null)) throw Error(w(261));
  return (q = null), (ee = 0), G;
}
function ip() {
  for (; K !== null; ) Nc(K);
}
function op() {
  for (; K !== null && !Pd(); ) Nc(K);
}
function Nc(e) {
  var t = Lc(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? _c(e) : (K = t),
    (Uo.current = null);
}
function _c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bf(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((n = qf(n, t, we)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function Mt(e, t, n) {
  var r = R,
    l = je.transition;
  try {
    (je.transition = null), (R = 1), up(e, t, n, r);
  } finally {
    (je.transition = l), (R = r);
  }
  return null;
}
function up(e, t, n, r) {
  do dn();
  while (ft !== null);
  if (T & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Wd(e, i),
    e === q && ((K = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mr ||
      ((Mr = !0),
      jc(Jr, function () {
        return dn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = je.transition), (je.transition = null);
    var o = R;
    R = 1;
    var u = T;
    (T |= 4),
      (Uo.current = null),
      tp(e, n),
      wc(n, e),
      Of(Mi),
      (br = !!Pi),
      (Mi = Pi = null),
      (e.current = n),
      np(n),
      Md(),
      (T = u),
      (R = o),
      (je.transition = i);
  } else e.current = n;
  if (
    (Mr && ((Mr = !1), (ft = e), (ml = l)),
    (i = e.pendingLanes),
    i === 0 && (gt = null),
    Id(n.stateNode),
    ge(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (hl) throw ((hl = !1), (e = Ji), (Ji = null), e);
  return (
    ml & 1 && e.tag !== 0 && dn(),
    (i = e.pendingLanes),
    i & 1 ? (e === qi ? Qn++ : ((Qn = 0), (qi = e))) : (Qn = 0),
    Ot(),
    null
  );
}
function dn() {
  if (ft !== null) {
    var e = ia(ml),
      t = je.transition,
      n = R;
    try {
      if (((je.transition = null), (R = 16 > e ? 16 : e), ft === null))
        var r = !1;
      else {
        if (((e = ft), (ft = null), (ml = 0), T & 6)) throw Error(w(331));
        var l = T;
        for (T |= 4, N = e.current; N !== null; ) {
          var i = N,
            o = i.child;
          if (N.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (N = c; N !== null; ) {
                  var m = N;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, m, i);
                  }
                  var v = m.child;
                  if (v !== null) (v.return = m), (N = v);
                  else
                    for (; N !== null; ) {
                      m = N;
                      var h = m.sibling,
                        g = m.return;
                      if ((yc(m), m === c)) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (N = h);
                        break;
                      }
                      N = g;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var S = x.child;
                if (S !== null) {
                  x.child = null;
                  do {
                    var P = S.sibling;
                    (S.sibling = null), (S = P);
                  } while (S !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (N = o);
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Un(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (N = f);
                break e;
              }
              N = i.return;
            }
        }
        var a = e.current;
        for (N = a; N !== null; ) {
          o = N;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (N = p);
          else
            e: for (o = a; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, u);
                  }
                } catch (E) {
                  Y(u, u.return, E);
                }
              if (u === o) {
                N = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (N = y);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((T = l), Ot(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(Sl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (je.transition = t);
    }
  }
  return !1;
}
function is(e, t, n) {
  (t = yn(n, t)),
    (t = oc(e, t, 1)),
    (e = yt(e, t, 1)),
    (t = de()),
    e !== null && (cr(e, 1, t), ge(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) is(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        is(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gt === null || !gt.has(r)))
        ) {
          (e = yn(n, e)),
            (e = uc(t, e, 1)),
            (t = yt(t, e, 1)),
            (e = de()),
            t !== null && (cr(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > X() - Qo)
        ? Rt(e, 0)
        : (Ho |= n)),
    ge(e, t);
}
function Oc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Sr), (Sr <<= 1), !(Sr & 130023424) && (Sr = 4194304))
      : (t = 1));
  var n = de();
  (e = tt(e, t)), e !== null && (cr(e, t, n), ge(e, n));
}
function ap(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Oc(e, n);
}
function cp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Oc(e, n);
}
var Lc;
Lc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), Jf(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), $ && t.flags & 1048576 && Ma(t, ol, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hr(e, t), (e = t.pendingProps);
      var l = pn(t, oe.current);
      cn(t, n), (l = Do(null, t, r, e, l, n));
      var i = Bo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), ll(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            zo(t),
            (l.updater = Ol),
            (t.stateNode = l),
            (l._reactInternals = t),
            Wi(t, r, e, n),
            (t = Hi(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && No(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = fp(r)),
          (e = Ie(r, e)),
          l)
        ) {
          case 0:
            t = Ui(null, t, r, e, n);
            break e;
          case 1:
            t = Zu(null, t, r, e, n);
            break e;
          case 11:
            t = Xu(null, t, r, e, n);
            break e;
          case 14:
            t = Ku(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Ui(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Zu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((dc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Aa(e, t),
          al(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = yn(Error(w(423)), t)), (t = Gu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = yn(Error(w(424)), t)), (t = Gu(e, t, r, n, l));
            break e;
          } else
            for (
              Se = vt(t.stateNode.containerInfo.firstChild),
                Ee = t,
                $ = !0,
                Re = null,
                n = Fa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hn(), r === l)) {
            t = nt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wa(t),
        e === null && Di(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        zi(r, l) ? (o = null) : i !== null && zi(r, i) && (t.flags |= 32),
        cc(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Di(t), null;
    case 13:
      return fc(e, t, n);
    case 4:
      return (
        To(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Xu(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(ul, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (We(i.value, o)) {
            if (i.children === l.children && !ve.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = qe(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Bi(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(w(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Bi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        cn(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ie(r, t.pendingProps)),
        (l = Ie(r.type, l)),
        Ku(e, t, r, l, n)
      );
    case 15:
      return sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Hr(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), ll(t)) : (e = !1),
        cn(t, n),
        Da(t, r, l),
        Wi(t, r, l, n),
        Hi(null, t, r, !0, e, n)
      );
    case 19:
      return pc(e, t, n);
    case 22:
      return ac(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function jc(e, t) {
  return ta(e, t);
}
function dp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Le(e, t, n, r) {
  return new dp(e, t, n, r);
}
function Ko(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fp(e) {
  if (typeof e == "function") return Ko(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === po)) return 11;
    if (e === ho) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Le(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ko(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Kt:
        return Dt(n.children, l, i, t);
      case fo:
        (o = 8), (l |= 8);
        break;
      case ci:
        return (
          (e = Le(12, n, t, l | 2)), (e.elementType = ci), (e.lanes = i), e
        );
      case di:
        return (e = Le(13, n, t, l)), (e.elementType = di), (e.lanes = i), e;
      case fi:
        return (e = Le(19, n, t, l)), (e.elementType = fi), (e.lanes = i), e;
      case Bs:
        return Ml(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rs:
              o = 10;
              break e;
            case Ds:
              o = 9;
              break e;
            case po:
              o = 11;
              break e;
            case ho:
              o = 14;
              break e;
            case ut:
              (o = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Le(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Dt(e, t, n, r) {
  return (e = Le(7, e, r, t)), (e.lanes = n), e;
}
function Ml(e, t, n, r) {
  return (
    (e = Le(22, e, r, t)),
    (e.elementType = Bs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oi(e, t, n) {
  return (e = Le(6, e, null, t)), (e.lanes = n), e;
}
function ui(e, t, n) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Zo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new pp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Le(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zo(i),
    e
  );
}
function hp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Pc(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return ja(e, n, t);
  }
  return t;
}
function Mc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Zo(n, r, !0, e, l, i, o, u, s)),
    (e.context = Pc(null)),
    (n = e.current),
    (r = de()),
    (l = xt(n)),
    (i = qe(r, l)),
    (i.callback = t ?? null),
    yt(n, i, l),
    (e.current.lanes = l),
    cr(e, l, r),
    ge(e, r),
    e
  );
}
function zl(e, t, n, r) {
  var l = t.current,
    i = de(),
    o = xt(l);
  return (
    (n = Pc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yt(l, t, o)),
    e !== null && (Fe(e, l, o, i), Wr(e, l, o)),
    o
  );
}
function yl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function os(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Go(e, t) {
  os(e, t), (e = e.alternate) && os(e, t);
}
function mp() {
  return null;
}
var zc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Jo(e) {
  this._internalRoot = e;
}
Tl.prototype.render = Jo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  zl(e, t, null, null);
};
Tl.prototype.unmount = Jo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      zl(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && ca(e);
  }
};
function qo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Il(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function us() {}
function vp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = yl(o);
        i.call(c);
      };
    }
    var o = Mc(t, r, e, 0, null, !1, !1, "", us);
    return (
      (e._reactRootContainer = o),
      (e[et] = o.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = yl(s);
      u.call(c);
    };
  }
  var s = Zo(e, 0, !1, null, null, !1, !1, "", us);
  return (
    (e._reactRootContainer = s),
    (e[et] = s.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      zl(t, s, n, r);
    }),
    s
  );
}
function Al(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = yl(o);
        u.call(s);
      };
    }
    zl(t, o, e, l);
  } else o = vp(n, t, e, l, r);
  return yl(o);
}
oa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tn(t.pendingLanes);
        n !== 0 &&
          (yo(t, n | 1), ge(t, X()), !(T & 6) && ((gn = X() + 500), Ot()));
      }
      break;
    case 13:
      Ut(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var l = de();
          Fe(r, e, 1, l);
        }
      }),
        Go(e, 1);
  }
};
go = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = de();
      Fe(t, e, 134217728, n);
    }
    Go(e, 134217728);
  }
};
ua = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = de();
      Fe(n, e, t, r);
    }
    Go(e, t);
  }
};
sa = function () {
  return R;
};
aa = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
Ei = function (e, t, n) {
  switch (t) {
    case "input":
      if ((mi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Nl(r);
            if (!l) throw Error(w(90));
            Ws(r), mi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Us(e, n);
      break;
    case "select":
      (t = n.value), t != null && on(e, !!n.multiple, t, !1);
  }
};
Zs = Vo;
Gs = Ut;
var yp = { usingClientEntryPoint: !1, Events: [fr, qt, Nl, Xs, Ks, Vo] },
  Pn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  gp = {
    bundleType: Pn.bundleType,
    version: Pn.version,
    rendererPackageName: Pn.rendererPackageName,
    rendererConfig: Pn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pn.findFiberByHostInstance || mp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      (Sl = zr.inject(gp)), (Ye = zr);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qo(t)) throw Error(w(200));
  return hp(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!qo(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = zc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Zo(e, 1, !1, null, null, n, !1, r, l)),
    (e[et] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new Jo(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = bs(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Ut(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Il(t)) throw Error(w(200));
  return Al(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!qo(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = zc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Mc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[et] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Tl(t);
};
Ce.render = function (e, t, n) {
  if (!Il(t)) throw Error(w(200));
  return Al(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Il(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Al(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = Vo;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Il(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Al(e, t, n, !1, r);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
function Tc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc);
    } catch (e) {
      console.error(e);
    }
}
Tc(), (Ms.exports = Ce);
var xp = Ms.exports,
  ss = xp;
(si.createRoot = ss.createRoot), (si.hydrateRoot = ss.hydrateRoot);
var Ic = {};
function wp(e) {
  if (!e || typeof window > "u") return;
  const t = document.createElement("style");
  return (
    t.setAttribute("type", "text/css"),
    (t.innerHTML = e),
    document.head.appendChild(t),
    e
  );
}
Object.defineProperty(Ic, "__esModule", { value: !0 });
var V = ie;
function Sp(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var ot = Sp(V);
wp(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
}

.child {
  transform: var(--transform);
}`);
const Ep = V.forwardRef(function (
  {
    style: t = {},
    className: n = "",
    autoFill: r = !1,
    play: l = !0,
    pauseOnHover: i = !1,
    pauseOnClick: o = !1,
    direction: u = "left",
    speed: s = 50,
    delay: c = 0,
    loop: m = 0,
    gradient: v = !1,
    gradientColor: h = [255, 255, 255],
    gradientWidth: g = 200,
    onFinish: x,
    onCycleComplete: S,
    onMount: P,
    children: f,
  },
  a
) {
  const [p, y] = V.useState(0),
    [E, _] = V.useState(0),
    [k, O] = V.useState(1),
    [A, M] = V.useState(!1),
    ue = V.useRef(null),
    se = a || ue,
    xe = V.useRef(null),
    Ue = V.useCallback(() => {
      if (xe.current && se.current) {
        const I = se.current.getBoundingClientRect(),
          lt = xe.current.getBoundingClientRect();
        let ae = I.width,
          ze = lt.width;
        (u === "up" || u === "down") && ((ae = I.height), (ze = lt.height)),
          O(r && ae && ze && ze < ae ? Math.ceil(ae / ze) : 1),
          y(ae),
          _(ze);
      }
    }, [r, se, u]);
  V.useEffect(() => {
    if (A && (Ue(), xe.current && se.current)) {
      const I = new ResizeObserver(() => Ue());
      return (
        I.observe(se.current),
        I.observe(xe.current),
        () => {
          I && I.disconnect();
        }
      );
    }
  }, [Ue, se, A]),
    V.useEffect(() => {
      Ue();
    }, [Ue, f]),
    V.useEffect(() => {
      M(!0);
    }, []),
    V.useEffect(() => {
      typeof P == "function" && P();
    }, []);
  const hr = V.useMemo(
      () => (r ? (E * k) / s : E < p ? p / s : E / s),
      [r, p, E, k, s]
    ),
    Lt = `rgba(${h[0]}, ${h[1]}, ${h[2]}`,
    En = V.useMemo(
      () =>
        Object.assign(Object.assign({}, t), {
          "--pause-on-hover": !l || i ? "paused" : "running",
          "--pause-on-click": !l || (i && !o) || o ? "paused" : "running",
          "--width": u === "up" || u === "down" ? "100vh" : "100%",
          "--transform":
            u === "up"
              ? "rotate(-90deg)"
              : u === "down"
              ? "rotate(90deg)"
              : "none",
        }),
      [t, l, i, o, u]
    ),
    C = V.useMemo(
      () => ({
        "--gradient-color": `${Lt}, 1), ${Lt}, 0)`,
        "--gradient-width": typeof g == "number" ? `${g}px` : g,
      }),
      [Lt, g]
    ),
    L = V.useMemo(
      () => ({
        "--play": l ? "running" : "paused",
        "--direction": u === "left" ? "normal" : "reverse",
        "--duration": `${hr}s`,
        "--delay": `${c}s`,
        "--iteration-count": m ? `${m}` : "infinite",
        "--min-width": r ? "auto" : "100%",
      }),
      [l, u, hr, c, m, r]
    ),
    j = V.useMemo(
      () => ({
        "--transform":
          u === "up"
            ? "rotate(90deg)"
            : u === "down"
            ? "rotate(-90deg)"
            : "none",
      }),
      [u]
    ),
    W = V.useCallback(
      (I) =>
        [...Array(Number.isFinite(I) && I >= 0 ? I : 0)].map((lt, ae) =>
          ot.default.createElement(
            V.Fragment,
            { key: ae },
            V.Children.map(f, (ze) =>
              ot.default.createElement(
                "div",
                { style: j, className: "child" },
                ze
              )
            )
          )
        ),
      [j, f]
    );
  return A
    ? ot.default.createElement(
        "div",
        { ref: se, style: En, className: "marquee-container " + n },
        v &&
          ot.default.createElement("div", { style: C, className: "overlay" }),
        ot.default.createElement(
          "div",
          {
            className: "marquee",
            style: L,
            onAnimationIteration: S,
            onAnimationEnd: x,
          },
          ot.default.createElement(
            "div",
            { className: "initial-child-container", ref: xe },
            V.Children.map(f, (I) =>
              ot.default.createElement(
                "div",
                { style: j, className: "child" },
                I
              )
            )
          ),
          W(k - 1)
        ),
        ot.default.createElement(
          "div",
          { className: "marquee", style: L },
          W(k)
        )
      )
    : null;
});
var to = (Ic.default = Ep);
const kp = () => {
  const [e, t] = ie.useState(!1),
    [n, r] = ie.useState(!1),
    [l, i] = ie.useState(!1),
    [o, u] = ie.useState(!1),
    [s, c] = ie.useState(!0),
    m = () => {
      t(!e);
    },
    v = () => {
      i(!l);
    },
    h = () => {
      r(!n);
    },
    g = () => {
      u(!o);
    },
    x = () => {
      c(!s);
    };
  return d.jsx(d.Fragment, {
    children: d.jsxs("nav", {
      className: "w-full",
      children: [
        d.jsx("div", {
          className: s ? "h-screen w-full fixed bg-black/50 z-50" : "hidden",
          children: d.jsx("div", {
            className: "w-full h-full flex items-center justify-center p-4",
            children: d.jsxs("div", {
              className:
                "bg-blue-400 text-white p-8 rounded-md drop-shadow-md max-w-xl flex flex-col gap-y-8 relative overflow-hidden",
              children: [
                d.jsx("p", {
                  className:
                    "text-9xl absolute -top-10 -left-4 z-0 opacity-20 whitespace-nowrap",
                  children: "WELCOME",
                }),
                d.jsx("p", {
                  className:
                    "text-9xl absolute bottom-0 right-0 z-0 opacity-20 whitespace-nowrap",
                  children: "WEN $LAMBO!",
                }),
                d.jsxs("div", {
                  className: "flex items-center justify-between relative z-20",
                  children: [
                    d.jsx("p", {
                      className: "text-5xl text-blue-800",
                      children: "WEN LAMBO!",
                    }),
                    d.jsx("button", {
                      onClick: x,
                      className: "text-4xl text-blue-800 hover:text-blue-950",
                      children: "X",
                    }),
                  ],
                }),
                d.jsx("p", {
                  className: "text-xl font-sans font-bold",
                  children: `This is your moment. Be part of a crypto project that's more than an investment; it's a lifestyle, a community, a thrilling ride. With WEN $LAMBO, watch as we turn meme dreams into reality. Are you ready to say, "WEN $LAMBO"? Because the journey to your dream Lamborghini starts now!`,
                }),
                d.jsx("div", {
                  className:
                    "flex gap-x-4 w-full justify-center items-center relative z-20",
                  children: d.jsx("button", {
                    onClick: x,
                    className:
                      "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                    children: "GOT IT!",
                  }),
                }),
              ],
            }),
          }),
        }),
        d.jsx("div", {
          className: l ? "h-screen w-full fixed bg-black/50 z-50" : "hidden",
          children: d.jsx("div", {
            className: "w-full h-full flex items-center justify-center p-4",
            children: d.jsxs("div", {
              className:
                "bg-blue-400 text-white p-8 rounded-md drop-shadow-md max-w-xl flex flex-col gap-y-8 relative overflow-hidden",
              children: [
                d.jsx("p", {
                  className:
                    "text-9xl absolute -top-10 -left-4 z-0 opacity-20 whitespace-nowrap",
                  children: "TOKENOMICS",
                }),
                d.jsx("p", {
                  className:
                    "text-9xl absolute bottom-0 right-0 z-0 opacity-20 whitespace-nowrap pointer-events-none",
                  children: "WEN $LAMBO!",
                }),
                d.jsxs("div", {
                  className: "flex items-center justify-between relative z-20",
                  children: [
                    d.jsx("p", {
                      className: "text-5xl text-blue-800",
                      children: "YOU ONLY NEED TO BUY $LAMBO TO GET LAMBO",
                    }),
                    d.jsx("button", {
                      onClick: v,
                      className: "text-4xl text-blue-800 hover:text-blue-950",
                      children: "X",
                    }),
                  ],
                }),
                d.jsx("p", {
                  className: "text-xl font-sans font-bold",
                  children:
                    "You're only a click away from reaching your dreams of getting a brand new lamborghini with doggo.",
                }),
                // d.jsxs("div", {
                //   className: "",
                //   children: [
                //     d.jsx("p", {
                //       className: "text-2xl",
                //       children: "Total Supply",
                //     }),
                //     d.jsx("p", {
                //       className: "text-4xl",
                //       children: "10 Million",
                //     }),
                //     d.jsx("br", {}),
                //     d.jsx("p", {
                //       className: "text-2xl",
                //       children: "Buy/Sell Tax",
                //     }),
                //     d.jsx("p", { className: "text-4xl", children: "0%" }),
                //     d.jsxs("p", {
                //       className: "font-sans italic",
                //       children: [
                //         d.jsx("button", {
                //           onClick: h,
                //           className: "font-bold text-xl z-99",
                //           children: " Read our DISCLAIMER ",
                //         }),
                //         " before considering WEN $LAMBO.",
                //       ],
                //     }),
                //   ],
                // }),
                d.jsxs("div", {
                  className:
                    "flex gap-x-4 w-full justify-center items-center relative z-20",
                  children: [
                    d.jsx("a", {
                      href: "https://stonkslabs.com/trade/ton/",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                        children: "BUY ON stonkslabs",
                      }),
                    }),
                    d.jsx("a", {
                      href: "https://dexscreener.com",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                        children: "DEX Screener CHART",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        d.jsx("div", {
          className: e ? "h-screen w-full fixed bg-black/50 z-50" : "hidden",
          children: d.jsx("div", {
            className: "w-full h-full flex items-center justify-center p-4",
            children: d.jsxs("div", {
              className:
                "bg-blue-400 text-white p-8 rounded-md drop-shadow-md max-w-xl flex flex-col gap-y-8 relative overflow-hidden",
              children: [
                d.jsx("p", {
                  className:
                    "text-9xl absolute -top-10 -left-4 z-0 opacity-20 whitespace-nowrap",
                  children: "ABOUT",
                }),
                d.jsx("p", {
                  className:
                    "text-9xl absolute bottom-0 right-0 z-0 opacity-20 whitespace-nowrap pointer-events-none",
                  children: "WEN $LAMBO!",
                }),
                d.jsxs("div", {
                  className: "flex items-center justify-between relative z-20",
                  children: [
                    d.jsx("p", {
                      className: "text-5xl text-blue-800",
                      children: "Your Lambo Dreams, Closer Than Ever!",
                    }),
                    d.jsx("button", {
                      onClick: m,
                      className: "text-4xl text-blue-800 hover:text-blue-950",
                      children: "X",
                    }),
                  ],
                }),
                d.jsx("p", {
                  className: "text-xl font-sans font-bold",
                  children:
                    "WEN $LAMBO is more than just a token; it's your ticket to potentially unlocking the lifestyle you've dreamed of. Imagine the roar of a Lamborghini engine, a symbol of the prosperity that WEN $LAMBO aims to bring.",
                }),
                d.jsx("p", {
                  className: "text-xl font-sans font-bold",
                  children:
                    " While we can't promise Lamborghinis for everyone, we're committed to driving forward, fueling dreams, and delivering exceptional potential gains.",
                }),
                d.jsxs("div", {
                  className:
                    "flex gap-x-4 w-full justify-center items-center relative z-20",
                  children: [
                    d.jsx("a", {
                      href: "https://x.com/WenLamboTON",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                        children: "CHECK TWITTER",
                      }),
                    }),
                    d.jsx("a", {
                      href: "https://t.me/WenLamboTon_Portal",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                        children: "JOIN TELEGRAM",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        // d.jsx("div", {
        //   className: n ? "h-screen w-full fixed bg-black/50 z-50" : "hidden",
        //   children: d.jsx("div", {
        //     className: "w-full h-full flex items-center justify-center p-4",
        //     children: d.jsxs("div", {
        //       className:
        //         "bg-blue-400 text-white p-8 rounded-md drop-shadow-md max-w-xl flex flex-col gap-y-8 relative overflow-hidden",
        //       children: [
        //         d.jsx("p", {
        //           className:
        //             "text-9xl absolute -top-10 -left-4 z-0 opacity-20 whitespace-nowrap",
        //           children: "DISCLAIMER",
        //         }),
        //         d.jsx("p", {
        //           className:
        //             "text-9xl absolute bottom-0 right-0 z-0 opacity-20 whitespace-nowrap pointer-events-none",
        //           children: "WEN $LAMBO",
        //         }),
        //         d.jsxs("div", {
        //           className: "flex items-center justify-between relative z-20",
        //           children: [
        //             d.jsx("p", {
        //               className: "text-5xl text-blue-800",
        //               children: "DISCLAIMER",
        //             }),
        //             d.jsx("button", {
        //               onClick: h,
        //               className: "text-4xl text-blue-800 hover:text-blue-950",
        //               children: "X",
        //             }),
        //           ],
        //         }),
        //         d.jsx("p", {
        //           className: "text-xl font-sans font-bold",
        //           children:
        //             "Your Jurisdiction May Not Regulate Cryptocurrencies. The Value Of Cryptocurrencies May Rise And Fall. Profits May Be Subject To Capital Gains Taxes Or Other Local Taxes.",
        //         }),
        //         d.jsx("div", {
        //           className:
        //             "flex gap-x-4 w-full justify-center items-center relative z-20",
        //           children: d.jsx("a", {
        //             href: "",
        //             children: d.jsx("button", {
        //               className:
        //                 "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
        //               children: "TON",
        //             }),
        //           }),
        //         }),
        //       ],
        //     }),
        //   }),
        // }),
        d.jsx("div", {
          className: o ? "h-screen w-full fixed bg-black/50 z-50" : "hidden",
          children: d.jsx("div", {
            className: "w-full h-full flex items-center justify-center p-4",
            children: d.jsxs("div", {
              className:
                "bg-blue-400 text-white p-8 rounded-md drop-shadow-md max-w-xl w-full flex flex-col gap-y-8 relative overflow-hidden items-center justify-center",
              children: [
                d.jsx("p", {
                  className:
                    "text-9xl absolute -top-10 -left-4 z-0 opacity-20 whitespace-nowrap",
                  children: "LINKS",
                }),
                d.jsx("p", {
                  className:
                    "text-9xl absolute bottom-0 right-0 z-0 opacity-20 whitespace-nowrap pointer-events-none",
                  children: "WEN $LAMBO",
                }),
                d.jsxs("div", {
                  className:
                    "flex items-center justify-between relative z-20 w-full",
                  children: [
                    d.jsx("p", {
                      className: "text-5xl text-blue-800",
                      children: "LINKS FOR $LAMBO",
                    }),
                    d.jsx("button", {
                      onClick: g,
                      className: "text-4xl text-blue-800 hover:text-blue-950",
                      children: "X",
                    }),
                  ],
                }),
                d.jsx("img", {
                  src: "https://wenblambos.vercel.app/logo.jpg",
                  alt: "house image",
                  className: "h-48 w-fit",
                }),
                d.jsxs("div", {
                  className:
                    "flex flex-col gap-y-2 w-full justify-center items-center relative z-20",
                  children: [
                    d.jsx("a", {
                      href: "https://x.com/WenLamboTON",
                      className: "w-full",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300 w-full",
                        children: "TWITTER",
                      }),
                    }),
                    d.jsx("a", {
                      href: "https://t.me/WenLamboTon_Portal",
                      className: "w-full",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300 w-full",
                        children: "TELEGRAM",
                      }),
                    }),
                    d.jsx("a", {
                      href: "https://tonviewer.com/",
                      className: "w-full",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300 w-full",
                        children: "Tonviewer",
                      }),
                    }),
                    d.jsx("a", {
                      href: "https://dexscreener.com",
                      className: "w-full",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300 w-full",
                        children: "DEX Screener",
                      }),
                    }),
                    d.jsx("a", {
                      href: "https://stonkslabs.com/trade/ton",
                      className: "w-full",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300 w-full",
                        children: "BUY $LAMBO",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        d.jsxs(to, {
          speed: 150,
          direction: "right",
          className: "bg-blue-100 py-1",
          children: [
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-blue-900 px-2",
              children: "🚗🐶 WELCOME TO LAMBO",
            }),
          ],
        }),
        d.jsxs("div", {
          className:
            "flex items-center justify-between bg-gradient-to-b from-blue-400 to-blue-700 px-4 lg:px-12 py-4 z-20 relative",
          children: [
            d.jsxs("div", {
              className: "flex items-center justify-center",
              children: [
                d.jsx("img", {
                  src: "https://wenblambos.vercel.app/logo.png",
                  alt: "",
                  className: "h-32",
                }),
                d.jsx("p", {
                  className: "font-vina text-6xl lg:text-7xl text-white",
                  children: "WEN $LAMBO",
                }),
              ],
            }),
            d.jsxs("div", {
              className: "flex items-center justify-center gap-x-2",
              children: [
                d.jsx("button", {
                  onClick: m,
                  className:
                    "font-vina text-lg lg:text-xl text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                  children: "ABOUT",
                }),
                d.jsx("button", {
                  onClick: v,
                  className:
                    "font-vina text-lg lg:text-xl text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                  children: "TOKENOMICS",
                }),
                // d.jsx("button", {
                //   onClick: h,
                //   className:
                //     "font-vina text-lg lg:text-xl text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                //   children: "DISCLAIMER",
                // }),
                d.jsx("button", {
                  onClick: g,
                  className:
                    "font-vina text-lg lg:text-xl text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                  children: "LINKS",
                }),
              ],
            }),
          ],
        }),
        d.jsxs(to, {
          speed: 50,
          direction: "left",
          className: "bg-blue-800 py-1 fixed bottom-0",
          children: [
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
            d.jsx("p", {
              className: "font-vina text-2xl text-white px-4",
              children: "WEN $LAMBO",
            }),
          ],
        }),
      ],
    }),
  });
};
var Cp = 4,
  Np = 0.001,
  _p = 1e-7,
  Op = 10,
  An = 11,
  Tr = 1 / (An - 1),
  Lp = typeof Float32Array == "function";
function Ac(e, t) {
  return 1 - 3 * t + 3 * e;
}
function Rc(e, t) {
  return 3 * t - 6 * e;
}
function Dc(e) {
  return 3 * e;
}
function gl(e, t, n) {
  return ((Ac(t, n) * e + Rc(t, n)) * e + Dc(t)) * e;
}
function Bc(e, t, n) {
  return 3 * Ac(t, n) * e * e + 2 * Rc(t, n) * e + Dc(t);
}
function jp(e, t, n, r, l) {
  var i,
    o,
    u = 0;
  do (o = t + (n - t) / 2), (i = gl(o, r, l) - e), i > 0 ? (n = o) : (t = o);
  while (Math.abs(i) > _p && ++u < Op);
  return o;
}
function Pp(e, t, n, r) {
  for (var l = 0; l < Cp; ++l) {
    var i = Bc(t, n, r);
    if (i === 0) return t;
    var o = gl(t, n, r) - e;
    t -= o / i;
  }
  return t;
}
function Mp(e) {
  return e;
}
var zp = function (t, n, r, l) {
  if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  if (t === n && r === l) return Mp;
  for (var i = Lp ? new Float32Array(An) : new Array(An), o = 0; o < An; ++o)
    i[o] = gl(o * Tr, t, r);
  function u(s) {
    for (var c = 0, m = 1, v = An - 1; m !== v && i[m] <= s; ++m) c += Tr;
    --m;
    var h = (s - i[m]) / (i[m + 1] - i[m]),
      g = c + h * Tr,
      x = Bc(g, t, r);
    return x >= Np ? Pp(s, g, t, r) : x === 0 ? g : jp(s, c, c + Tr, t, r);
  }
  return function (c) {
    return c === 0 ? 0 : c === 1 ? 1 : gl(u(c), n, l);
  };
};
const as = ws(zp);
var bo = function (t) {
  (this.startX = t.startX),
    (this.startY = t.startY),
    (this.endX = t.endX),
    (this.endY = t.endY),
    (this.totalX = this.endX - this.startX),
    (this.totalY = this.endY - this.startY),
    (this.startMultiplierX = t.startMultiplierX || 1),
    (this.endMultiplierX = t.endMultiplierX || 1),
    (this.startMultiplierY = t.startMultiplierY || 1),
    (this.endMultiplierY = t.endMultiplierY || 1);
};
function St() {
  return (
    (St =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    St.apply(this, arguments)
  );
}
var xl;
(function (e) {
  (e.speed = "speed"),
    (e.translateX = "translateX"),
    (e.translateY = "translateY"),
    (e.rotate = "rotate"),
    (e.rotateX = "rotateX"),
    (e.rotateY = "rotateY"),
    (e.rotateZ = "rotateZ"),
    (e.scale = "scale"),
    (e.scaleX = "scaleX"),
    (e.scaleY = "scaleY"),
    (e.scaleZ = "scaleZ"),
    (e.opacity = "opacity");
})(xl || (xl = {}));
var At;
(function (e) {
  (e.px = "px"), (e["%"] = "%"), (e.vh = "vh"), (e.vw = "vw");
})(At || (At = {}));
var Vn;
(function (e) {
  (e.deg = "deg"), (e.turn = "turn"), (e.rad = "rad");
})(Vn || (Vn = {}));
var no;
(function (e) {
  e[""] = "";
})(no || (no = {}));
var $e;
(function (e) {
  (e.vertical = "vertical"), (e.horizontal = "horizontal");
})($e || ($e = {}));
var cs;
(function (e) {
  (e.ease = "ease"),
    (e.easeIn = "easeIn"),
    (e.easeOut = "easeOut"),
    (e.easeInOut = "easeInOut"),
    (e.easeInQuad = "easeInQuad"),
    (e.easeInCubic = "easeInCubic"),
    (e.easeInQuart = "easeInQuart"),
    (e.easeInQuint = "easeInQuint"),
    (e.easeInSine = "easeInSine"),
    (e.easeInExpo = "easeInExpo"),
    (e.easeInCirc = "easeInCirc"),
    (e.easeOutQuad = "easeOutQuad"),
    (e.easeOutCubic = "easeOutCubic"),
    (e.easeOutQuart = "easeOutQuart"),
    (e.easeOutQuint = "easeOutQuint"),
    (e.easeOutSine = "easeOutSine"),
    (e.easeOutExpo = "easeOutExpo"),
    (e.easeOutCirc = "easeOutCirc"),
    (e.easeInOutQuad = "easeInOutQuad"),
    (e.easeInOutCubic = "easeInOutCubic"),
    (e.easeInOutQuart = "easeInOutQuart"),
    (e.easeInOutQuint = "easeInOutQuint"),
    (e.easeInOutSine = "easeInOutSine"),
    (e.easeInOutExpo = "easeInOutExpo"),
    (e.easeInOutCirc = "easeInOutCirc"),
    (e.easeInBack = "easeInBack"),
    (e.easeOutBack = "easeOutBack"),
    (e.easeInOutBack = "easeInOutBack");
})(cs || (cs = {}));
var ds = 0;
function Tp() {
  return ++ds, ds;
}
var Ip = (function () {
    function e(n) {
      var r = n.el.getBoundingClientRect();
      if (n.view.scrollContainer) {
        var l = n.view.scrollContainer.getBoundingClientRect();
        r = St({}, r, {
          top: r.top - l.top,
          right: r.right - l.left,
          bottom: r.bottom - l.top,
          left: r.left - l.left,
        });
      }
      (this.height = n.el.offsetHeight),
        (this.width = n.el.offsetWidth),
        (this.left = r.left),
        (this.right = r.right),
        (this.top = r.top),
        (this.bottom = r.bottom),
        n.rootMargin && this._setRectWithRootMargin(n.rootMargin);
    }
    var t = e.prototype;
    return (
      (t._setRectWithRootMargin = function (r) {
        var l = r.top + r.bottom,
          i = r.left + r.right;
        (this.top -= r.top),
          (this.right += r.right),
          (this.bottom += r.bottom),
          (this.left -= r.left),
          (this.height += l),
          (this.width += i);
      }),
      e
    );
  })(),
  Ap = [no[""], At.px, At["%"], At.vh, At.vw, Vn.deg, Vn.turn, Vn.rad];
function Ir(e, t) {
  t === void 0 && (t = At["%"]);
  var n = { value: 0, unit: t };
  if (typeof e > "u") return n;
  var r = typeof e == "number" || typeof e == "string";
  if (!r)
    throw new Error(
      "Invalid value provided. Must provide a value as a string or number"
    );
  (e = String(e)),
    (n.value = parseFloat(e)),
    (n.unit = e.match(/[\d.\-+]*\s*(.*)/)[1] || t);
  var l = Ap.includes(n.unit);
  if (!l) throw new Error("Invalid unit provided.");
  return n;
}
var fs = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInOutExpo: [1, 0, 0, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};
function Fc(e) {
  if (Array.isArray(e)) return as(e[0], e[1], e[2], e[3]);
  if (typeof e == "string" && typeof fs[e] < "u") {
    var t = fs[e];
    return as(t[0], t[1], t[2], t[3]);
  }
}
var Rp = Object.values(xl),
  Dp = {
    speed: "px",
    translateX: "%",
    translateY: "%",
    rotate: "deg",
    rotateX: "deg",
    rotateY: "deg",
    rotateZ: "deg",
    scale: "",
    scaleX: "",
    scaleY: "",
    scaleZ: "",
    opacity: "",
  };
function ps(e, t) {
  var n = {};
  return (
    Rp.forEach(function (r) {
      var l = Dp[r];
      if (typeof (e == null ? void 0 : e[r]) == "number") {
        var i = e == null ? void 0 : e[r],
          o = (i || 0) * 10 + "px",
          u = (i || 0) * -10 + "px",
          s = Ir(o),
          c = Ir(u),
          m = { start: s.value, end: c.value, unit: s.unit };
        t === $e.vertical && (n.translateY = m),
          t === $e.horizontal && (n.translateX = m);
      }
      if (Array.isArray(e == null ? void 0 : e[r])) {
        var v = e == null ? void 0 : e[r];
        if (typeof v[0] < "u" && typeof v[1] < "u") {
          var h = Ir(v == null ? void 0 : v[0], l),
            g = Ir(v == null ? void 0 : v[1], l),
            x = Fc(v == null ? void 0 : v[2]);
          if (
            ((n[r] = { start: h.value, end: g.value, unit: h.unit, easing: x }),
            h.unit !== g.unit)
          )
            throw new Error(
              "Must provide matching units for the min and max offset values of each axis."
            );
        }
      }
    }),
    n
  );
}
function hs(e, t, n, r) {
  var l = n - e,
    i = l / t;
  return r && (i = r(i)), i;
}
function Bp(e, t, n) {
  var r = n >= e && n <= t;
  return r;
}
function Fp(e, t, n, r, l) {
  return ((n - t) * (e - r)) / (l - r) + t;
}
function Wc(e, t) {
  var n = Fp(
    typeof e.easing == "function" ? e.easing(t) : t,
    (e == null ? void 0 : e.start) || 0,
    (e == null ? void 0 : e.end) || 0,
    0,
    1
  );
  return { value: n, unit: e == null ? void 0 : e.unit };
}
var Wp = Object.values(xl).filter(function (e) {
  return e !== "opacity";
});
function $p(e, t) {
  var n = Object.keys(t),
    r = n.includes("opacity"),
    l = "transform" + (r ? ",opacity" : "");
  e.style.willChange = l;
}
function Up(e, t, n) {
  if (n) {
    var r = Qp(e, t),
      l = Hp(e, t);
    (n.style.transform = r), (n.style.opacity = l);
  }
}
function Hp(e, t) {
  var n = e.opacity && Wc(e.opacity, t);
  if (typeof n > "u" || typeof n.value > "u" || typeof n.unit > "u") return "";
  var r = "" + n.value;
  return r;
}
function Qp(e, t) {
  var n = Wp.reduce(function (r, l) {
    var i = e[l] && Wc(e[l], t);
    if (typeof i > "u" || typeof i.value > "u" || typeof i.unit > "u") return r;
    var o = l + "(" + i.value + i.unit + ")";
    return r + o;
  }, "");
  return n;
}
function Xr(e) {
  var t = e.el;
  t && ((t.style.transform = ""), (t.style.opacity = ""));
}
function Vp(e, t, n, r) {
  var l = e.top - t.height,
    i = e.left - t.width,
    o = e.bottom,
    u = e.right;
  (i += n.x),
    (u += n.x),
    (l += n.y),
    (o += n.y),
    r &&
      (n.y + e.top < t.height && (l = 0),
      n.x + e.left < t.width && (i = 0),
      o > t.scrollHeight - t.height && (o = t.scrollHeight - t.height),
      u > t.scrollWidth - t.width && (u = t.scrollWidth - t.width));
  var s = new bo({ startX: i, startY: l, endX: u, endY: o });
  return s;
}
function Yt(e, t, n) {
  var r = t > e,
    l = (Math.abs(e) + Math.abs(t)) * (r ? -1 : 1),
    i = n + l,
    o = Math.max(n / i, 1);
  return o;
}
function ms(e, t) {
  var n = e.start,
    r = e.end,
    l = e.unit;
  if (l === "%") {
    var i = t / 100;
    (n = n * i), (r = r * i);
  }
  if (l === "vw") {
    var o = n / 100,
      u = r / 100;
    (n = window.innerWidth * o), (r = window.innerWidth * u);
  }
  if (l === "vh") {
    var s = n / 100,
      c = r / 100;
    (n = window.innerHeight * s), (r = window.innerHeight * c);
  }
  return { start: n, end: r };
}
var vs = { start: 0, end: 0, unit: "" };
function Yp(e, t, n, r, l, i) {
  var o = n.translateX || vs,
    u = n.translateY || vs,
    s = ms(o, e.width),
    c = s.start,
    m = s.end,
    v = ms(u, e.height),
    h = v.start,
    g = v.end,
    x = e.top - t.height,
    S = e.left - t.width,
    P = e.bottom,
    f = e.right,
    a = 1,
    p = 1;
  l === $e.vertical && ((a = Yt(h, g, t.height + e.height)), (p = a));
  var y = 1,
    E = 1;
  if (
    (l === $e.horizontal && ((y = Yt(c, m, t.width + e.width)), (E = y)),
    h < 0 && (x = x + h * a),
    g > 0 && (P = P + g * p),
    c < 0 && (S = S + c * y),
    m > 0 && (f = f + m * E),
    (S += r.x),
    (f += r.x),
    (x += r.y),
    (P += r.y),
    i)
  ) {
    var _ = r.y + e.top < t.height,
      k = r.x + e.left < t.width,
      O = r.y + e.bottom > t.scrollHeight - t.height,
      A = r.x + e.right > t.scrollWidth - t.height;
    if (
      (_ && O && ((a = 1), (p = 1), (x = 0), (P = t.scrollHeight - t.height)),
      k && A && ((y = 1), (E = 1), (S = 0), (f = t.scrollWidth - t.width)),
      !_ && O)
    ) {
      (x = e.top - t.height + r.y), (P = t.scrollHeight - t.height);
      var M = P - x;
      (a = Yt(h, g, M)), (p = 1), h < 0 && (x = x + h * a);
    }
    if (!k && A) {
      (S = e.left - t.width + r.x), (f = t.scrollWidth - t.width);
      var ue = f - S;
      (y = Yt(c, m, ue)), (E = 1), c < 0 && (S = S + c * y);
    }
    if (_ && !O) {
      (x = 0), (P = e.bottom + r.y);
      var se = P - x;
      (a = 1), (p = Yt(h, g, se)), g > 0 && (P = P + g * p);
    }
    if (k && !A) {
      (S = 0), (f = e.right + r.x);
      var xe = f - S;
      (y = 1), (E = Yt(c, m, xe)), m > 0 && (f = f + m * E);
    }
  }
  var Ue = new bo({
    startX: S,
    startY: x,
    endX: f,
    endY: P,
    startMultiplierX: y,
    endMultiplierX: E,
    startMultiplierY: a,
    endMultiplierY: p,
  });
  return Ue;
}
function Xp(e, t) {
  var n = St({}, e);
  return (
    n.translateX &&
      (n.translateX = St({}, e.translateX, {
        start: n.translateX.start * t.startMultiplierX,
        end: n.translateX.end * t.endMultiplierX,
      })),
    n.translateY &&
      (n.translateY = St({}, e.translateY, {
        start: n.translateY.start * t.startMultiplierY,
        end: n.translateY.end * t.endMultiplierY,
      })),
    n
  );
}
function Kp(e, t, n) {
  return e.rootMargin || e.targetElement || e.shouldDisableScalingTranslations
    ? !1
    : !!(
        (t.translateX && n === $e.horizontal) ||
        (t.translateY && n === $e.vertical)
      );
}
var ys = function (t, n, r) {
    return Math.min(Math.max(t, n), r);
  },
  Zp = (function () {
    function e(n) {
      (this.el = n.el),
        (this.props = n.props),
        (this.scrollAxis = n.scrollAxis),
        (this.disabledParallaxController = n.disabledParallaxController || !1),
        (this.id = Tp()),
        (this.effects = ps(this.props, this.scrollAxis)),
        (this.isInView = null),
        (this.progress = 0),
        this._setElementEasing(n.props.easing),
        $p(n.el, this.effects);
    }
    var t = e.prototype;
    return (
      (t.updateProps = function (r) {
        return (
          (this.props = St({}, this.props, r)),
          (this.effects = ps(r, this.scrollAxis)),
          this._setElementEasing(r.easing),
          this
        );
      }),
      (t.setCachedAttributes = function (r, l) {
        Xr(this),
          (this.rect = new Ip({
            el: this.props.targetElement || this.el,
            rootMargin: this.props.rootMargin,
            view: r,
          }));
        var i = Kp(this.props, this.effects, this.scrollAxis);
        return typeof this.props.startScroll == "number" &&
          typeof this.props.endScroll == "number"
          ? ((this.limits = new bo({
              startX: this.props.startScroll,
              startY: this.props.startScroll,
              endX: this.props.endScroll,
              endY: this.props.endScroll,
            })),
            this._setElementStyles(),
            this)
          : (i
              ? ((this.limits = Yp(
                  this.rect,
                  r,
                  this.effects,
                  l,
                  this.scrollAxis,
                  this.props.shouldAlwaysCompleteAnimation
                )),
                (this.scaledEffects = Xp(this.effects, this.limits)))
              : (this.limits = Vp(
                  this.rect,
                  r,
                  l,
                  this.props.shouldAlwaysCompleteAnimation
                )),
            this._setElementStyles(),
            this);
      }),
      (t._updateElementIsInView = function (r) {
        var l = this.isInView === null;
        r !== this.isInView &&
          (r
            ? this.props.onEnter && this.props.onEnter(this)
            : l ||
              (this._setFinalProgress(),
              this._setElementStyles(),
              this.props.onExit && this.props.onExit(this))),
          (this.isInView = r);
      }),
      (t._setFinalProgress = function () {
        var r = ys(Math.round(this.progress), 0, 1);
        this._updateElementProgress(r);
      }),
      (t._setElementStyles = function () {
        if (!(this.props.disabled || this.disabledParallaxController)) {
          var r = this.scaledEffects || this.effects;
          Up(r, this.progress, this.el);
        }
      }),
      (t._updateElementProgress = function (r) {
        (this.progress = r),
          this.props.onProgressChange &&
            this.props.onProgressChange(this.progress),
          this.props.onChange && this.props.onChange(this);
      }),
      (t._setElementEasing = function (r) {
        this.easing = Fc(r);
      }),
      (t.updateElementOptions = function (r) {
        (this.scrollAxis = r.scrollAxis),
          (this.disabledParallaxController =
            r.disabledParallaxController || !1);
      }),
      (t.updatePosition = function (r) {
        if (!this.limits) return this;
        var l = this.scrollAxis === $e.vertical,
          i = this.isInView === null,
          o = l ? this.limits.startY : this.limits.startX,
          u = l ? this.limits.endY : this.limits.endX,
          s = l ? this.limits.totalY : this.limits.totalX,
          c = l ? r.y : r.x,
          m = Bp(o, u, c);
        if ((this._updateElementIsInView(m), m)) {
          var v = hs(o, s, c, this.easing);
          this._updateElementProgress(v), this._setElementStyles();
        } else
          i &&
            ((this.progress = ys(Math.round(hs(o, s, c, this.easing)), 0, 1)),
            this._setElementStyles());
        return this;
      }),
      e
    );
  })(),
  gs = (function () {
    function e(n) {
      (this.scrollContainer = n.scrollContainer),
        (this.width = n.width),
        (this.height = n.height),
        (this.scrollHeight = n.scrollHeight),
        (this.scrollWidth = n.scrollWidth);
    }
    var t = e.prototype;
    return (
      (t.hasChanged = function (r) {
        return (
          r.width !== this.width ||
          r.height !== this.height ||
          r.scrollWidth !== this.scrollWidth ||
          r.scrollHeight !== this.scrollHeight
        );
      }),
      (t.setSize = function (r) {
        return (
          (this.width = r.width),
          (this.height = r.height),
          (this.scrollHeight = r.scrollHeight),
          (this.scrollWidth = r.scrollWidth),
          this
        );
      }),
      e
    );
  })(),
  Gp = (function () {
    function e(n, r) {
      (this.x = n), (this.y = r), (this.dx = 0), (this.dy = 0);
    }
    var t = e.prototype;
    return (
      (t.setScroll = function (r, l) {
        return (
          (this.dx = r - this.x),
          (this.dy = l - this.y),
          (this.x = r),
          (this.y = l),
          this
        );
      }),
      e
    );
  })();
function Jp() {
  var e = !1;
  try {
    var t = Object.defineProperty({}, "passive", {
      get: function () {
        return (e = !0), !0;
      },
    });
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t);
  } catch {}
  return e;
}
var $c = (function () {
  function e(n) {
    var r = n.scrollAxis,
      l = r === void 0 ? $e.vertical : r,
      i = n.scrollContainer,
      o = n.disabled,
      u = o === void 0 ? !1 : o;
    (this.disabled = u),
      (this.scrollAxis = l),
      (this.elements = []),
      (this._hasScrollContainer = !!i),
      (this.viewEl = i ?? window);
    var s = this._getScrollPosition(),
      c = s[0],
      m = s[1];
    (this.scroll = new Gp(c, m)),
      (this.view = new gs({
        width: 0,
        height: 0,
        scrollWidth: 0,
        scrollHeight: 0,
        scrollContainer: this._hasScrollContainer ? i : void 0,
      })),
      (this._ticking = !1),
      (this._supportsPassive = Jp()),
      this._bindAllMethods(),
      !this.disabled &&
        (this._addListeners(this.viewEl),
        this._addResizeObserver(),
        this._setViewSize());
  }
  e.init = function (r) {
    var l = typeof window < "u";
    if (!l)
      throw new Error(
        "Looks like ParallaxController.init() was called on the server. This method must be called on the client."
      );
    return new e(r);
  };
  var t = e.prototype;
  return (
    (t._bindAllMethods = function () {
      var r = this;
      [
        "_addListeners",
        "_removeListeners",
        "_getScrollPosition",
        "_handleScroll",
        "_handleUpdateCache",
        "_updateAllElements",
        "_updateElementPosition",
        "_setViewSize",
        "_addResizeObserver",
        "_checkIfViewHasChanged",
        "_getViewParams",
        "getElements",
        "createElement",
        "removeElementById",
        "resetElementStyles",
        "updateElementPropsById",
        "update",
        "updateScrollContainer",
        "destroy",
      ].forEach(function (l) {
        r[l] = r[l].bind(r);
      });
    }),
    (t._addListeners = function (r) {
      r.addEventListener(
        "scroll",
        this._handleScroll,
        this._supportsPassive ? { passive: !0 } : !1
      ),
        window.addEventListener("resize", this._handleUpdateCache, !1),
        window.addEventListener("blur", this._handleUpdateCache, !1),
        window.addEventListener("focus", this._handleUpdateCache, !1),
        window.addEventListener("load", this._handleUpdateCache, !1);
    }),
    (t._removeListeners = function (r) {
      var l;
      r.removeEventListener("scroll", this._handleScroll, !1),
        window.removeEventListener("resize", this._handleUpdateCache, !1),
        window.removeEventListener("blur", this._handleUpdateCache, !1),
        window.removeEventListener("focus", this._handleUpdateCache, !1),
        window.removeEventListener("load", this._handleUpdateCache, !1),
        (l = this._resizeObserver) == null || l.disconnect();
    }),
    (t._addResizeObserver = function () {
      var r = this;
      try {
        var l = this._hasScrollContainer
          ? this.viewEl
          : document.documentElement;
        (this._resizeObserver = new ResizeObserver(function () {
          return r.update();
        })),
          this._resizeObserver.observe(l);
      } catch {
        console.warn(
          "Failed to create the resize observer in the ParallaxContoller"
        );
      }
    }),
    (t._getScrollPosition = function () {
      var r = this._hasScrollContainer
          ? this.viewEl.scrollLeft
          : window.pageXOffset,
        l = this._hasScrollContainer
          ? this.viewEl.scrollTop
          : window.pageYOffset;
      return [r, l];
    }),
    (t._handleScroll = function () {
      var r = this._getScrollPosition(),
        l = r[0],
        i = r[1];
      this.scroll.setScroll(l, i),
        !this._ticking &&
          this.elements.length > 0 &&
          ((this._ticking = !0),
          window.requestAnimationFrame(this._updateAllElements));
    }),
    (t._handleUpdateCache = function () {
      this._setViewSize(), this._updateAllElements({ updateCache: !0 });
    }),
    (t._updateAllElements = function (r) {
      var l = this,
        i = r === void 0 ? {} : r,
        o = i.updateCache;
      this.elements &&
        this.elements.forEach(function (u) {
          o && u.setCachedAttributes(l.view, l.scroll),
            l._updateElementPosition(u);
        }),
        (this._ticking = !1);
    }),
    (t._updateElementPosition = function (r) {
      r.props.disabled || this.disabled || r.updatePosition(this.scroll);
    }),
    (t._getViewParams = function () {
      if (this._hasScrollContainer) {
        var r = this.viewEl.offsetWidth,
          l = this.viewEl.offsetHeight,
          i = this.viewEl.scrollHeight,
          o = this.viewEl.scrollWidth;
        return this.view.setSize({
          width: r,
          height: l,
          scrollHeight: i,
          scrollWidth: o,
        });
      }
      var u = document.documentElement,
        s = window.innerWidth || u.clientWidth,
        c = window.innerHeight || u.clientHeight,
        m = u.scrollHeight,
        v = u.scrollWidth;
      return { width: s, height: c, scrollHeight: m, scrollWidth: v };
    }),
    (t._setViewSize = function () {
      return this.view.setSize(this._getViewParams());
    }),
    (t._checkIfViewHasChanged = function () {
      return this.view.hasChanged(this._getViewParams());
    }),
    (t.getElements = function () {
      return this.elements;
    }),
    (t.createElement = function (r) {
      var l = new Zp(
        St({}, r, {
          scrollAxis: this.scrollAxis,
          disabledParallaxController: this.disabled,
        })
      );
      return (
        l.setCachedAttributes(this.view, this.scroll),
        (this.elements = this.elements ? [].concat(this.elements, [l]) : [l]),
        this._updateElementPosition(l),
        this._checkIfViewHasChanged() && this.update(),
        l
      );
    }),
    (t.removeElementById = function (r) {
      this.elements &&
        (this.elements = this.elements.filter(function (l) {
          return l.id !== r;
        }));
    }),
    (t.updateElementPropsById = function (r, l) {
      this.elements &&
        (this.elements = this.elements.map(function (i) {
          return i.id === r ? i.updateProps(l) : i;
        })),
        this.update();
    }),
    (t.resetElementStyles = function (r) {
      Xr(r);
    }),
    (t.update = function () {
      var r = this._getScrollPosition(),
        l = r[0],
        i = r[1];
      this.scroll.setScroll(l, i),
        this._setViewSize(),
        this._updateAllElements({ updateCache: !0 });
    }),
    (t.updateScrollContainer = function (r) {
      this._removeListeners(this.viewEl),
        (this.viewEl = r),
        (this._hasScrollContainer = !!r),
        (this.view = new gs({
          width: 0,
          height: 0,
          scrollWidth: 0,
          scrollHeight: 0,
          scrollContainer: r,
        })),
        this._setViewSize(),
        this._addListeners(this.viewEl),
        this._updateAllElements({ updateCache: !0 });
    }),
    (t.disableParallaxController = function () {
      (this.disabled = !0),
        this._removeListeners(this.viewEl),
        this.elements &&
          this.elements.forEach(function (r) {
            return Xr(r);
          });
    }),
    (t.enableParallaxController = function () {
      var r = this;
      (this.disabled = !1),
        this.elements &&
          this.elements.forEach(function (l) {
            return l.updateElementOptions({
              disabledParallaxController: !1,
              scrollAxis: r.scrollAxis,
            });
          }),
        this._addListeners(this.viewEl),
        this._addResizeObserver(),
        this._setViewSize();
    }),
    (t.disableAllElements = function () {
      console.warn("deprecated: use disableParallaxController() instead"),
        this.elements &&
          (this.elements = this.elements.map(function (r) {
            return r.updateProps({ disabled: !0 });
          })),
        this.update();
    }),
    (t.enableAllElements = function () {
      console.warn("deprecated: use enableParallaxController() instead"),
        this.elements &&
          (this.elements = this.elements.map(function (r) {
            return r.updateProps({ disabled: !1 });
          })),
        this.update();
    }),
    (t.destroy = function () {
      this._removeListeners(this.viewEl),
        this.elements &&
          this.elements.forEach(function (r) {
            return Xr(r);
          }),
        (this.elements = void 0);
    }),
    e
  );
})();
function qp(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ro(e, t);
}
function ro(e, t) {
  return (
    (ro =
      Object.setPrototypeOf ||
      function (r, l) {
        return (r.__proto__ = l), r;
      }),
    ro(e, t)
  );
}
function bp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function eh(e) {
  return (
    Object.keys(e).forEach(function (t) {
      return e[t] === void 0 && delete e[t];
    }),
    e
  );
}
var th = [
  "disabled",
  "easing",
  "endScroll",
  "onChange",
  "onEnter",
  "onExit",
  "onProgressChange",
  "opacity",
  "rootMargin",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "shouldAlwaysCompleteAnimation",
  "shouldDisableScalingTranslations",
  "speed",
  "startScroll",
  "targetElement",
  "translateX",
  "translateY",
];
function Uc(e) {
  var t = e.disabled,
    n = e.easing,
    r = e.endScroll,
    l = e.onChange,
    i = e.onEnter,
    o = e.onExit,
    u = e.onProgressChange,
    s = e.opacity,
    c = e.rootMargin,
    m = e.rotate,
    v = e.rotateX,
    h = e.rotateY,
    g = e.rotateZ,
    x = e.scale,
    S = e.scaleX,
    P = e.scaleY,
    f = e.scaleZ,
    a = e.shouldAlwaysCompleteAnimation,
    p = e.shouldDisableScalingTranslations,
    y = e.speed,
    E = e.startScroll,
    _ = e.targetElement,
    k = e.translateX,
    O = e.translateY,
    A = bp(e, th),
    M = eh({
      disabled: t,
      easing: n,
      endScroll: r,
      onChange: l,
      onEnter: i,
      onExit: o,
      onProgressChange: u,
      opacity: s,
      rootMargin: c,
      rotate: m,
      rotateX: v,
      rotateY: h,
      rotateZ: g,
      scale: x,
      scaleX: S,
      scaleY: P,
      scaleZ: f,
      shouldAlwaysCompleteAnimation: a,
      shouldDisableScalingTranslations: p,
      speed: y,
      startScroll: E,
      targetElement: _,
      translateX: k,
      translateY: O,
    });
  return { parallaxProps: M, rest: A };
}
function nh(e) {
  ie.useEffect(
    function () {
      var t = typeof window > "u",
        n = e instanceof $c;
      if (!t && !e && !n)
        throw new Error(
          "Must wrap your application's <Parallax /> components in a <ParallaxProvider />."
        );
    },
    [e]
  );
}
var Hc = De.createContext(null);
function rh() {
  var e = ie.useContext(Hc),
    t = typeof window > "u";
  if (t) return null;
  if (!e)
    throw new Error(
      "Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>"
    );
  return e;
}
function lh(e) {
  var t = rh(),
    n = ie.useRef(null),
    r = Uc(e),
    l = r.parallaxProps;
  nh(t);
  var i = ie.useState(),
    o = i[0],
    u = i[1];
  return (
    ie.useEffect(function () {
      var s;
      if (n.current instanceof HTMLElement) {
        var c = { el: n.current, props: l };
        (s = t == null ? void 0 : t.createElement(c)), u(s);
      } else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");
      return function () {
        s && (t == null || t.removeElementById(s.id));
      };
    }, []),
    ie.useEffect(
      function () {
        o &&
          (e.disabled && (t == null || t.resetElementStyles(o)),
          t == null || t.updateElementPropsById(o.id, l));
      },
      [
        e.disabled,
        e.easing,
        e.endScroll,
        e.onChange,
        e.onEnter,
        e.onExit,
        e.onProgressChange,
        e.opacity,
        e.rootMargin,
        e.rotate,
        e.rotateX,
        e.rotateY,
        e.rotateZ,
        e.scale,
        e.scaleX,
        e.scaleY,
        e.scaleZ,
        e.shouldAlwaysCompleteAnimation,
        e.shouldDisableScalingTranslations,
        e.speed,
        e.startScroll,
        e.targetElement,
        e.translateX,
        e.translateY,
      ]
    ),
    { ref: n, controller: t, element: o }
  );
}
function ih(e) {
  var t = Uc(e),
    n = t.parallaxProps,
    r = t.rest,
    l = lh(n),
    i = l.ref;
  return De.createElement("div", Object.assign({ ref: i }, r), e.children);
}
var oh = function (t) {
    var n = typeof window > "u";
    return n ? null : $c.init(t);
  },
  Qc = (function (e) {
    qp(t, e);
    function t(r) {
      var l;
      return (
        (l = e.call(this, r) || this),
        (l.controller = oh({
          scrollAxis: r.scrollAxis,
          scrollContainer: r.scrollContainer,
          disabled: r.isDisabled,
        })),
        l
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidUpdate = function (l) {
        if (
          l.scrollContainer !== this.props.scrollContainer &&
          this.props.scrollContainer
        ) {
          var i;
          (i = this.controller) == null ||
            i.updateScrollContainer(this.props.scrollContainer);
        }
        if (l.isDisabled !== this.props.isDisabled) {
          if (this.props.isDisabled) {
            var o;
            (o = this.controller) == null || o.disableParallaxController();
          }
          if (!this.props.isDisabled) {
            var u;
            (u = this.controller) == null || u.enableParallaxController();
          }
        }
      }),
      (n.componentWillUnmount = function () {
        this.controller = this.controller.destroy();
      }),
      (n.render = function () {
        var l = this.props.children;
        return De.createElement(Hc.Provider, { value: this.controller }, l);
      }),
      t
    );
  })(ie.Component);
Qc.defaultProps = { scrollAxis: $e.vertical };
const uh = () =>
    d.jsx(d.Fragment, {
      children: d.jsx("div", {
        className: "w-full",
        children: d.jsxs("div", {
          className:
            "max-w-screen-2xl mx-auto flex flex-col justify-center items-center px-4",
          children: [
            d.jsxs("div", {
              className:
                "p-8 bg-white rounded-lg text-black flex flex-col gap-y-8 items-center justify-center max-w-screen-md drop-shadow-lg",
              children: [
                d.jsx("p", {
                  className: "text-7xl text-amber-500 text-center",
                  children: "Join the Revolution: WEN $LAMBO Awaits!",
                }),
                d.jsx("p", {
                  className:
                    "text-xl text-amber-900 text-center font-mont font-bold",
                  children:
                    "Are you ready to dive into the exhilarating world of meme cryptocurrencies? WEN $LAMBO is here to turbocharge your crypto journey! Born on the robust and speedy Sol blockchain, WEN $LAMBO isn't just another token; it's a movement. ",
                }),
                d.jsxs("div", {
                  className: "flex gap-x-2",
                  children: [
                    d.jsx("a", {
                      href: "https://stonkslabs.com/trade/ton",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                             children: "Buy Now",
                      }),
                    }),
                    d.jsx("a", {
                      href: "https://dexscreener.com",
                      children: d.jsx("button", {
                        className:
                          "font-vina text-2xl bg-gradient-to-b from-blue-400 to-blue-700 text-white py-1 px-4 border-white border-solid border-[3px] rounded-full hover:bg-black/20 hover:text-blue-100 transition-all ease-in-out duration-300",
                        children: "DEX Screener",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            d.jsx(ih, {
              translateY: [30, -40],
              children: d.jsx("img", {
                src: "https://wenblambos.vercel.app/logo.png",
                alt: "Lambo",
                className: "h-[30rem]",
              }),
            }),
          ],
        }),
      }),
    }),
  sh = () =>
    d.jsx(d.Fragment, {
      children: d.jsx("footer", {
        className: "w-full",
        children: d.jsx("div", { className: "max-w-screen-2xl mx-auto" }),
      }),
    });
var Vc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  xs = De.createContext && De.createContext(Vc),
  Et =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Et =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          }),
        Et.apply(this, arguments)
      );
    },
  ah =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    };
function Yc(e) {
  return (
    e &&
    e.map(function (t, n) {
      return De.createElement(t.tag, Et({ key: n }, t.attr), Yc(t.child));
    })
  );
}
function Xc(e) {
  return function (t) {
    return De.createElement(ch, Et({ attr: Et({}, e.attr) }, t), Yc(e.child));
  };
}
function ch(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      i = e.title,
      o = ah(e, ["attr", "size", "title"]),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      De.createElement(
        "svg",
        Et(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: s,
            style: Et(Et({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && De.createElement("title", null, i),
        e.children
      )
    );
  };
  return xs !== void 0
    ? De.createElement(xs.Consumer, null, function (n) {
        return t(n);
      })
    : t(Vc);
}
function dh(e) {
  return Xc({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z",
        },
      },
    ],
  })(e);
}
function fh(e) {
  return Xc({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
      },
    ],
  })(e);
}
const ph = () =>
  d.jsx(d.Fragment, {
    children: d.jsx("div", {
      className: "w-full",
      children: d.jsx("div", {
        className:
          "max-w-screen-2xl mx-auto flex flex-col items-center justify-center px-4",
        children: d.jsxs("div", {
          className:
            "p-8 rounded-lg text-black flex flex-col gap-y-4 items-center justify-center bg-blue-400 max-w-screen-md w-full drop-shadow-lg",
          children: [
            d.jsx("p", {
              className: "text-white text-7xl pb-4 text-center",
              children: "OUR OFFICIAL LINKS",
            }),
            d.jsxs("div", {
              className: "text-white flex flex-col gap-y-4 text-2xl",
              children: [
                d.jsxs("div", {
                  className: "flex gap-x-4 items-center justify-center",
                  children: [
                    d.jsx("a", {
                      href: "https://t.me/WenLamboTon_Portal",
                      className:
                        "text-4xl hover:scale-110 hover:text-blue-100 transition-all ease-in-out duration-300",
                      children: d.jsx(dh, {}),
                    }),
                    d.jsx("a", {
                      href: "https://x.com/WenLamboTON",
                      className:
                        "text-4xl hover:scale-110 hover:text-blue-100 transition-all ease-in-out duration-300",
                      children: d.jsx(fh, {}),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "flex gap-x-4 items-center justify-center",
                  children: [
                    d.jsx("a", {
                      href: "https://dexscreener.com",
                      children: d.jsx("p", {
                        className:
                          "text-2xl hover:scale-110 hover:text-blue-100 transition-all ease-in-out duration-300",
                        children: "DEX Screener",
                      }),
                    }),
                    d.jsx("a", {
                      href: "https://tonviewer.com/",
                      children: d.jsx("p", {
                        className:
                          "text-2xl hover:scale-110 hover:text-blue-100 transition-all ease-in-out duration-300",
                        children: "tonviewer",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
function hh() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsxs("div", {
        className:
          "bg-[url('/bg.jpg')] bg-cover w-full relative font-primary flex flex-col gap-y-4 overflow-hidden",
        children: [
          d.jsxs("div", {
            className: "relative flex flex-col gap-y-4",
            children: [d.jsx(kp, {}), d.jsx(uh, {}), d.jsx(ph, {})],
          }),
          d.jsx(sh, {}),
        ],
      }),
      d.jsxs(to, {
        speed: 50,
        direction: "left",
        className: "bg-blue-100 py-1 fixed bottom-0",
        children: [
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
          d.jsx("p", {
            className: "font-primary text-2xl text-blue-900 px-4",
            children: "WEN $LAMBO??",
          }),
        ],
      }),
    ],
  });
}
si.createRoot(document.getElementById("root")).render(
  d.jsx(De.StrictMode, { children: d.jsx(Qc, { children: d.jsx(hh, {}) }) })
);
