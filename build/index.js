var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes3
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_ssr = require("@apollo/client/react/ssr");

// app/components/contexts/ApolloContext/ApolloContext.tsx
var import_client = require("@apollo/client"), import_context = require("@apollo/client/link/context");

// app/utils/array.ts
var keys = (value) => Object.keys(value).map((key) => key);

// app/utils/object.ts
var omitDeep = (obj, key) => typeof obj == "object" ? !obj || "getDate" in obj ? obj : keys(obj).reduce((acc, currentKey) => {
  if (currentKey === key)
    return acc;
  if (typeof obj[currentKey] == "object")
    if (Array.isArray(obj[currentKey])) {
      let x = obj[currentKey].map((row) => omitDeep(row, key));
      acc[currentKey] = x;
    } else
      acc[currentKey] = omitDeep(obj[currentKey], key);
  else
    acc[currentKey] = obj[currentKey];
  return acc;
}, {}) : obj;

// app/utils/config.ts
var import_dotenv = __toESM(require("dotenv")), getServerConfig = () => {
  let { parsed } = import_dotenv.default.config();
  return typeof process < "u" && process.env ? {
    api: (parsed == null ? void 0 : parsed.API_URL) || process.env.API_URL || "",
    apiEndpoint: (parsed == null ? void 0 : parsed.API_ENDPOINT) || process.env.API_ENDPOINT || "",
    notificationPoolId: (parsed == null ? void 0 : parsed.NOTIFICATION_POOL_ID) || process.env.NOTIFICATION_POOL_ID || "",
    mapbox: {
      accessToken: (parsed == null ? void 0 : parsed.MAPBOX_API_KEY) || process.env.MAPBOX_API_KEY || "",
      style: "mapbox://styles/cyberlife/cjq9kpl33b01d2smvny3ciast"
    }
  } : null;
}, getConfig = () => (console.log(typeof process < "u"), typeof process < "u" && process.env ? getServerConfig() : (console.log(typeof window < "u" ? window : "undefined window"), typeof window < "u" && window.ENV ? window.ENV : null)), getApiUrl = () => {
  let config = getConfig();
  return config == null ? void 0 : config.api;
}, getApiEndpoint = () => {
  let config = getConfig();
  return config == null ? void 0 : config.apiEndpoint;
};

// app/components/contexts/ApolloContext/ApolloContext.tsx
var import_jsx_runtime = require("react/jsx-runtime"), cleanupLink = new import_client.ApolloLink((operation, forward) => (operation.variables && (operation.variables = omitDeep(operation.variables, "__typename")), forward(operation))), getClient = () => {
  let link = (0, import_context.setContext)((operation, { headers }) => ({
    headers
  })), uri = getApiUrl(), httpLink = (0, import_client.createHttpLink)({
    uri
  });
  return new import_client.ApolloClient({
    link: link.concat(cleanupLink).concat(httpLink),
    cache: new import_client.InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network"
      }
    }
  });
}, ApolloContext = ({ children, client: client2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_client.ApolloProvider, {
  client: client2,
  children
}), ApolloContext_default = ApolloContext;

// app/components/contexts/PlayerContext/PlayerContext.provider.tsx
var import_react2 = require("react");

// app/components/contexts/PlayerContext/PlayerContext.tsx
var import_react = require("react"), PlayerContext = (0, import_react.createContext)({
  playing: !1,
  addTrack: () => {
  },
  volume: 100,
  jumping: !1,
  setVolume: () => {
  },
  setCurrentTrack: () => {
  },
  play: () => {
  },
  pause: () => {
  },
  toggle: () => {
  },
  isPlaying: () => !1,
  setLoad: () => {
  },
  setSeek: () => {
  },
  setCurrentTrackContext: () => {
  },
  buffer: {}
});

// app/components/contexts/PlayerContext/PlayerContext.reducer.ts
var initialState = {
  buffer: {},
  playing: !1,
  volume: 100,
  jumping: !1
}, addTrack = (state, value) => {
  let { id } = value;
  return state.buffer[id] || (state.buffer = {
    ...state.buffer,
    [id]: {
      seek: 0,
      load: 0,
      ...value
    }
  }), {
    ...state
  };
}, setSeek = (state, payload) => {
  let { id, value, jumping } = payload;
  return state.buffer[id] ? {
    ...state,
    jumping,
    buffer: {
      ...state.buffer,
      [id]: {
        ...state.buffer[id],
        seek: value
      }
    }
  } : state;
}, setLoad = (state, payload) => {
  let { id, value } = payload;
  return state.buffer[id] ? {
    ...state,
    buffer: {
      ...state.buffer,
      [id]: {
        ...state.buffer[id],
        load: value
      }
    }
  } : state;
}, playerContextReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TRACK":
      return addTrack(state, payload);
    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentTrackId: payload
      };
    case "SET_PLAYING_STATE":
      return {
        ...state,
        playing: payload,
        jumping: !0
      };
    case "SET_LOAD":
      return setLoad(state, payload);
    case "SET_SEEK":
      return setSeek(state, payload);
    case "SET_CURRENT_CONTEXT":
      return {
        ...state,
        currentContext: payload
      };
    case "SET_VOLUME":
      return {
        ...state,
        volume: payload
      };
    default:
      return state;
  }
}, PlayerContext_reducer_default = playerContextReducer;

// app/components/contexts/PlayerContext/PlayerContext.provider.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), PlayerContextProvider = ({ children }) => {
  let [playerContextState, dispatch] = (0, import_react2.useReducer)(
    PlayerContext_reducer_default,
    initialState
  ), setPlaying = (isPlaying2) => {
    dispatch({
      type: "SET_PLAYING_STATE",
      payload: isPlaying2
    });
  }, setCurrentTrack = (id) => {
    dispatch({
      type: "SET_CURRENT_TRACK",
      payload: id
    });
  }, addTrack2 = (payload) => {
    dispatch({
      type: "ADD_TRACK",
      payload
    });
  }, setLoad2 = (id, value) => {
    dispatch({
      type: "SET_LOAD",
      payload: {
        id,
        value
      }
    });
  }, setSeek2 = (id, value, jumping2 = !1) => {
    dispatch({
      type: "SET_SEEK",
      payload: {
        id,
        value,
        jumping: jumping2
      }
    });
  }, setCurrentTrackContext = (payload) => {
    dispatch({
      type: "SET_CURRENT_CONTEXT",
      payload
    });
  }, setVolume = (value) => {
    let payload = value < 0 ? 0 : value > 100 ? 100 : value;
    dispatch({
      type: "SET_VOLUME",
      payload
    });
  }, { currentTrackId, currentContext, playing, buffer, volume, jumping } = playerContextState, play = (id) => {
    setCurrentTrack(id), setPlaying(!0);
  }, pause = (id) => {
    setCurrentTrack(id), setPlaying(!1);
  }, toggle = () => {
    setPlaying(!playing);
  }, currentTrack = currentTrackId ? buffer[currentTrackId] : null, isPlaying = (id) => playing && currentTrackId === id;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PlayerContext.Provider, {
    value: {
      currentTrackId,
      volume,
      jumping,
      currentContext,
      setVolume,
      playing,
      addTrack: addTrack2,
      setCurrentTrack,
      play,
      pause,
      toggle,
      isPlaying,
      setLoad: setLoad2,
      setSeek: setSeek2,
      setCurrentTrackContext,
      buffer,
      currentTrack
    },
    children
  });
}, PlayerContext_provider_default = PlayerContextProvider;

// app/components/contexts/PlayerContext/PlayerContext.hook.ts
var import_react3 = require("react");
var usePlayerContext = () => (0, import_react3.useContext)(PlayerContext);

// app/entry.server.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
var client = getClient();
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let App2 = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ApolloContext_default, {
    client,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(PlayerContext_provider_default, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.RemixServer, {
          context: remixContext,
          url: request.url
        }),
        ","
      ]
    })
  });
  return (0, import_ssr.getDataFromTree)(App2).then(() => {
    let didError = !1, initialState4 = client.extract(), markup = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, {
      children: [
        App2,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("script", {
          dangerouslySetInnerHTML: {
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              initialState4
            ).replace(/</g, "\\u003c")}`
          }
        })
      ]
    });
    return new Promise((resolve, reject) => {
      let { pipe, abort } = (0, import_server.renderToPipeableStream)(markup, {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      });
      setTimeout(abort, ABORT_DELAY);
    });
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let App2 = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ApolloContext_default, {
    client,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.RemixServer, {
      context: remixContext,
      url: request.url
    })
  });
  return (0, import_ssr.getDataFromTree)(App2).then(() => {
    let didError = !1, initialState4 = client.extract(), markup = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, {
      children: [
        App2,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("script", {
          dangerouslySetInnerHTML: {
            __html: `window.__APOLLO_STATE__=${JSON.stringify(
              initialState4
            ).replace(/</g, "\\u003c")}`
          }
        })
      ]
    });
    return new Promise((resolve, reject) => {
      let { pipe, abort } = (0, import_server.renderToPipeableStream)(markup, {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      });
      setTimeout(abort, ABORT_DELAY);
    });
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react42 = __toESM(require("react")), import_node2 = require("@remix-run/node"), import_react43 = require("@remix-run/react");

// app/application.tsx
var import_react39 = require("@remix-run/react"), import_react40 = require("@remix-run/react");

// app/components/atoms/Background/Background.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), Background = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
  className: "w-screen h-screen relative overflow-hidden",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
      className: "bg-main bg-cover w-screen h-screen mask absolute right-[180px]"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
      className: "w-screen h-screen absolute",
      children
    })
  ]
}), Background_default = Background;

// app/components/contexts/NavContext/NavContext.provider.tsx
var import_react6 = require("react");

// app/components/contexts/NavContext/NavContext.tsx
var import_react5 = require("react");

// app/components/contexts/NavContext/NavContext.reducer.ts
var initialState2 = {
  items: [],
  currentIndex: -1,
  offset: 0
}, navContextReducer = (state = initialState2, action2) => {
  switch (action2.type) {
    case "ADD_ITEM": {
      let items2 = [...state.items];
      return items2[action2.item.index] = action2.item, {
        ...state,
        items: items2
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action2.index)
      };
    case "SET_INDEX":
      return {
        ...state,
        currentIndex: action2.index
      };
    case "SET_OFFSET":
      return {
        ...state,
        offset: action2.offset
      };
    default:
      return state;
  }
};

// app/components/contexts/NavContext/NavContext.tsx
var NavContext = (0, import_react5.createContext)({
  ...initialState2,
  setItem: () => {
  },
  setOffset: () => {
  }
});

// app/components/contexts/NavContext/NavContext.provider.tsx
var import_react7 = require("@remix-run/react");

// app/components/contexts/NavContext/NavContext.utils.ts
var getCurrentRouteIndex = (routes4, currentRoute) => currentRoute === "/" ? routes4.findIndex((route) => route === currentRoute) : currentRoute.includes("podcasts") ? 0 : routes4.findIndex(
  (route) => route !== "/" && currentRoute.includes(route)
);

// app/components/contexts/NavContext/NavContext.provider.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), initialState3 = {
  currentIndex: -1,
  items: [],
  offset: 0
}, NavContextProvider = ({ children, routes: routes4 }) => {
  let [navContextState, dispatch] = (0, import_react6.useReducer)(
    navContextReducer,
    initialState3
  ), setItem = (0, import_react6.useCallback)((item) => {
    dispatch({
      type: "ADD_ITEM",
      item
    });
  }, []), setOffset = (0, import_react6.useCallback)((offset) => {
    dispatch({
      type: "SET_OFFSET",
      offset
    });
  }, []), { pathname } = (0, import_react7.useLocation)();
  return (0, import_react6.useEffect)(() => {
    let index = getCurrentRouteIndex(routes4, pathname);
    dispatch({
      type: "SET_INDEX",
      index
    });
  }, [pathname, routes4]), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NavContext.Provider, {
    value: {
      ...navContextState,
      setItem,
      setOffset
    },
    children
  });
}, NavContext_provider_default = NavContextProvider;

// app/components/contexts/NavContext/NavContext.hook.ts
var import_react8 = require("react");
var useNavContext = () => (0, import_react8.useContext)(NavContext);

// app/components/organisms/LinkNavIndicatorContainer/LinkNavIndicatorContainer.tsx
var import_react9 = require("react");

// app/components/atoms/NavIndicator/NavIndicator.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), NavIndicator = ({ width, left }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {
  style: {
    transform: `translateX(${left}px)`,
    width: `${width}px`
  },
  className: `block transition-all ease-in-out translate-x-[${left}px] w-[${width}px] h-1 bg-gray-400`
}), NavIndicator_default = NavIndicator;

// app/utils/debounce.ts
var dbnc = !1, debounce = (func, duration) => (...args) => {
  dbnc === !1 && (dbnc = !0, func(...args), setTimeout(() => {
    dbnc = !1;
  }, duration));
};

// app/components/organisms/LinkNavIndicatorContainer/LinkNavIndicatorContainer.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), NavIndicatorContainer = () => {
  let { currentIndex, items: items2, setOffset } = useNavContext(), currentItem = items2[currentIndex], ref = (0, import_react9.useRef)(), update = debounce(() => {
    var _a;
    let offset = (_a = ref.current) == null ? void 0 : _a.offsetLeft;
    offset && setOffset(offset);
  }, 200);
  return (0, import_react9.useEffect)(() => {
    setTimeout(update, 300);
  }, [setOffset, update]), /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
    ref,
    className: "hidden w-full h-1 md:flex",
    children: currentItem ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(NavIndicator_default, {
      width: currentItem.width,
      left: currentItem.position
    }) : null
  });
}, LinkNavIndicatorContainer_default = NavIndicatorContainer;

// app/components/organisms/Nav/Nav.tsx
var import_clsx = __toESM(require("clsx"));

// app/hooks/useHydrated.ts
var import_react10 = require("react"), hydrating = !0, useHydrated = () => {
  let [hydrated, setHydrated] = (0, import_react10.useState)(() => !hydrating);
  return (0, import_react10.useEffect)(function() {
    hydrating = !1, setHydrated(!0);
  }, []), hydrated;
};

// app/components/atoms/ClientOnly/ClientOnly.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, {
    children: children()
  }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, {
    children: fallback
  });
}

// app/components/organisms/Nav/Nav.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), Nav = ({ routes: routes4, children, isOpen }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(NavContext_provider_default, {
  routes: routes4,
  children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("nav", {
    className: (0, import_clsx.default)(
      "top-0 z-20 w-full h-screen p-12 mt-12 bg-gray-800 md:mt-0 max-md:backdrop-blur-md md:p-0 bg-opacity-70 md:bg-transparent max-md:absolute md:h-auto md:w-auto md:flex md:flex-col md:flex-end transition-all duration-75 ease-in-out",
      {
        "translate-x-full md:translate-x-0": !isOpen
      }
    ),
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ClientOnly, {
        children: () => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(LinkNavIndicatorContainer_default, {})
      })
    ]
  })
}), Nav_default = Nav;

// app/components/molecules/LinkNavItemContainer/LinkNavItemContainer.tsx
var import_react13 = require("react");

// app/components/atoms/LinkNavItem/LinkNavItem.tsx
var import_react11 = require("@remix-run/react"), import_react12 = require("react");

// app/theme.ts
var theme = {
  smallSemiBold: "font-semibold text-sm leading-4",
  midSemiBold: "font-semibold text-md leading-6",
  largeSemiBoldUppercase: "h-8 inline-flex items-center uppercase text-lg font-semibold",
  linkHover: "cursor:pointer hover:text-white",
  linkSeparatorDash: "inline-flex md:before:content-['-'] md:before:w-4 before:text-center"
};

// app/components/atoms/LinkNavItem/LinkNavItem.tsx
var import_clsx2 = __toESM(require("clsx")), import_jsx_runtime10 = require("react/jsx-runtime"), LinkNavItem = (0, import_react12.forwardRef)(
  ({ href, label, onChange }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react11.Link, {
    ref,
    prefetch: "intent",
    onClick: onChange,
    to: href,
    className: (0, import_clsx2.default)(
      "h-24 leading-24 md:leading-8 md:h-8 inline-flex items-center uppercase text-xl md:text-lg font-semibold",
      theme.linkHover
    ),
    children: label
  })
);
LinkNavItem.displayName = "LinkNavItem";
var LinkNavItem_default = LinkNavItem;

// app/components/molecules/LinkNavItemContainer/LinkNavItemContainer.tsx
var import_jsx_runtime11 = require("react/jsx-runtime"), LinkNavItemContainer = ({
  index,
  onChange,
  ...props
}) => {
  var _a, _b;
  let ref = (0, import_react13.useRef)(), { setItem, offset } = useNavContext(), width = (_a = ref.current) == null ? void 0 : _a.clientWidth, position = (((_b = ref.current) == null ? void 0 : _b.offsetLeft) || 0) - (offset || 0);
  return (0, import_react13.useEffect)(() => {
    if (typeof width < "u" && typeof index < "u" && typeof position < "u" && window.document) {
      let updateItem = () => {
        setTimeout(() => {
          setItem({
            index,
            position,
            width
          });
        }, 100);
      }, debounced = debounce(updateItem, 200);
      return window.document.fonts.ready.then(updateItem), window.addEventListener("resize", debounced), updateItem(), () => {
        window.removeEventListener("resize", debounced);
      };
    }
  }, [width, setItem, index, position]), /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LinkNavItem_default, {
    onChange,
    ref,
    ...props
  });
}, LinkNavItemContainer_default = LinkNavItemContainer;

// app/components/organisms/LinkNavItemList/LinkNavItemList.tsx
var import_clsx4 = __toESM(require("clsx"));

// app/components/atoms/ListItem/ListItem.tsx
var import_clsx3 = __toESM(require("clsx"));
var import_jsx_runtime12 = require("react/jsx-runtime"), ListItem = ({ children, className, index }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", {
  className: (0, import_clsx3.default)(
    {
      [theme.linkSeparatorDash]: index > 0
    },
    className
  ),
  children
}), ListItem_default = ListItem;

// app/components/organisms/LinkNavItemList/LinkNavItemList.tsx
var import_jsx_runtime13 = require("react/jsx-runtime"), LinkNavItemList = ({ items: items2, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ul", {
  className: "flex flex-col p-0 m-0 md:flex-row md:flex-end",
  children: items2.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ListItem_default, {
    index,
    className: (0, import_clsx4.default)(
      "list-none text-right w-full md:w-auto md:text-left h-24 md:h-8 flex justify-end md:justify-start items-center uppercase text-lg font-semibold"
    ),
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(LinkNavItemContainer_default, {
      ...item,
      onChange,
      index
    })
  }, `menuItem__${item.href}`))
}), LinkNavItemList_default = LinkNavItemList;

// app/components/organisms/Header/Header.tsx
var import_react15 = require("@remix-run/react");
var import_react16 = require("react");

// app/hooks/styles/useButtonStyle.ts
var import_clsx5 = __toESM(require("clsx")), import_react14 = require("react"), useButtonStyle = (className) => (0, import_react14.useMemo)(
  () => (0, import_clsx5.default)(
    "transition-all duration-50 italic h-12 px-4 text-md p-2 text-gray-400 rounded hover:text-gray-200 leading-4 flex items-center border-none bg-gray-600 bg-opacity-80 hover:bg-opacity-90 cursor-pointer outline-none",
    className
  ),
  [className]
);

// app/components/atoms/Button/Button.tsx
var import_jsx_runtime14 = require("react/jsx-runtime"), Button = ({
  children,
  type = "button",
  disabled,
  onClick,
  rightIcon,
  className
}) => {
  let buttonClassName = useButtonStyle(className);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("button", {
    className: buttonClassName,
    type,
    disabled,
    onClick,
    children: [
      children,
      rightIcon && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", {
        className: "ml-2 min-w-[1rem]",
        children: rightIcon
      })
    ]
  });
}, Button_default = Button;

// app/components/molecules/ButtonMenu/ButtonMenu.tsx
var import_clsx6 = require("clsx"), import_jsx_runtime15 = require("react/jsx-runtime"), ButtonMenu = ({ isOpen, onClick }) => {
  let barClassName = "block w-6 h-1 transition-all duration-75 ease-in-out bg-gray-200";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Button_default, {
    onClick,
    className: "bg-transparent absolute rounded-sm z-20 flex flex-col items-center justify-center w-8 h-[30px] gap-1 right-2 top-2 md:hidden",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
        className: (0, import_clsx6.clsx)(barClassName, {
          "rotate-45 translate-y-[6px] translate-x-[1px] scale-75": isOpen
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
        className: (0, import_clsx6.clsx)(barClassName, {
          "h-0 opacity-0 scale-75": isOpen
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
        className: (0, import_clsx6.clsx)(barClassName, {
          "rotate-[135deg] scale-75 translate-x-[1px] translate-y-[-5px]": isOpen
        })
      })
    ]
  });
}, ButtonMenu_default = ButtonMenu;

// app/components/organisms/Header/Header.tsx
var import_jsx_runtime16 = require("react/jsx-runtime"), items = [
  {
    href: "/",
    label: "Podcasts"
  },
  {
    href: "/gigs",
    label: "Gigs"
  },
  {
    href: "/releases",
    label: "Releases"
  },
  {
    href: "/contact",
    label: "Contact"
  }
], routes = items.map(({ href }) => href), Header = () => {
  let [isOpen, setOpen] = (0, import_react16.useState)(!1), toggle = () => setOpen((open) => !open), close = () => setOpen(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("header", {
    className: "flex items-center justify-between w-screen h-12 text-sm md:px-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("h1", {
        className: "p-0 m-1 mx-2 md:m-0 md:mx-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react15.Link, {
            to: "/",
            className: theme.largeSemiBoldUppercase,
            children: "Cyberlife"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ButtonMenu_default, {
            isOpen,
            onClick: toggle
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Nav_default, {
        isOpen,
        routes,
        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LinkNavItemList_default, {
          onChange: close,
          items
        })
      })
    ]
  });
}, Header_default = Header;

// app/components/atoms/Anchor/Anchor.tsx
var import_clsx7 = require("clsx");
var import_react17 = require("@remix-run/react"), import_react18 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime"), Anchor = ({
  children,
  href,
  className,
  target = "_blank",
  variant = "link"
}) => {
  let buttonStyle = useButtonStyle(className), cls = (0, import_react18.useMemo)(
    () => (0, import_clsx7.clsx)({
      [(0, import_clsx7.clsx)("font-semibold leading-6", theme.linkHover, className)]: variant === "link",
      [buttonStyle]: variant === "button"
    }),
    [buttonStyle, className, variant]
  );
  return href ? !href.includes("https://") ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react17.Link, {
    to: href,
    prefetch: "intent",
    className: cls,
    children
  }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", {
    href,
    target,
    className: cls,
    children
  }) : null;
}, Anchor_default = Anchor;

// app/components/molecules/FooterAnchors/FooterAnchors.tsx
var import_jsx_runtime18 = require("react/jsx-runtime"), FooterAnchors = ({ anchors }) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", {
  className: "flex flex-row items-center justify-center md:h-12 md:justify-end max-md:gap-x-4 max-md:flex-wrap",
  children: anchors.map(({ href, label }, index) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ListItem_default, {
    index,
    children: href ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Anchor_default, {
      className: "text-sm",
      href,
      target: "_blank",
      children: label
    }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", {
      className: "text-sm font-semibold leading-6",
      children: label
    })
  }, `FooterAnchors__${href}`))
}), FooterAnchors_default = FooterAnchors;

// app/components/organisms/FooterAnchorsInfos/FooterAnchorsInfos.tsx
var import_react19 = require("react"), import_jsx_runtime19 = require("react/jsx-runtime"), FooterAnchorsInfos = ({ infos }) => {
  let anchors = (0, import_react19.useMemo)(
    () => [
      {
        label: "Soundcloud",
        href: infos.soundcloud
      },
      {
        label: "Discogs",
        href: infos.discogs
      },
      {
        label: "Instagram",
        href: infos.instagram
      },
      {
        label: "Facebook",
        href: infos.facebook
      },
      {
        label: "Twitter",
        href: infos.twitter
      },
      {
        label: "Resident Advisor",
        href: infos.RA
      },
      {
        label: "Mastodon",
        href: "https://mastodon.social/@cyberlife"
      }
    ],
    [infos]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(FooterAnchors_default, {
    anchors
  });
}, FooterAnchorsInfos_default = FooterAnchorsInfos;

// app/hooks/queries/useInfosQuery.ts
var import_client3 = require("@apollo/client");

// app/config.ts
var profile = "cyberlife";

// app/queries/infos.ts
var import_client2 = require("@apollo/client");

// app/gql/queries/infos.gql
var infos_default = `query InfosQuery($profile: String!) {
  infos(profile: $profile) {
    ...InfosFragment
  }
}
`;

// app/gql/fragments/infos.gql
var infos_default2 = `fragment InfosFragment on Infos {
  bio {
    content
  }
  instagram
  RA
  facebook
  twitter
  soundcloud
  discogs
  bookingDetails
}
`;

// app/utils/graphql.ts
var runQuery = async (query, variables) => await getClient().query({
  query,
  variables
});

// app/queries/infos.ts
var infosGqlQuery = import_client2.gql`
  ${infos_default2}
  ${infos_default}
`, runInfosQuery = async () => await runQuery(infosGqlQuery, {
  profile
});

// app/hooks/queries/useInfosQuery.ts
var useInfosQuery = () => (0, import_client3.useQuery)(infosGqlQuery, {
  variables: {
    profile
  }
});

// app/components/organisms/FooterAnchorsInfosContainer/FooterAnchorsInfosContainer.tsx
var import_jsx_runtime20 = require("react/jsx-runtime"), FooterAnchorsInfosContainer = () => {
  let { data } = useInfosQuery();
  return data != null && data.infos ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(FooterAnchorsInfos_default, {
    infos: data.infos
  }) : null;
}, FooterAnchorsInfosContainer_default = FooterAnchorsInfosContainer;

// app/components/organisms/FooterAnchorsCopyrights/FooterAnchorsCopyrights.tsx
var import_jsx_runtime21 = require("react/jsx-runtime"), FooterAnchorsCopyrights = () => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FooterAnchors_default, {
  anchors: [
    {
      label: "\xA9 Cyberlife",
      href: "https://github.com/CYB3RL1F3",
      target: "_blank"
    },
    {
      label: "2022",
      href: ""
    },
    {
      label: "About website",
      href: "/about"
    }
  ]
}), FooterAnchorsCopyrights_default = FooterAnchorsCopyrights;

// app/components/organisms/PlayerWidgetMobile/PlayerWidgetMobile.tsx
var import_framer_motion = require("framer-motion");

// app/hooks/player/usePlayerTrackContext.ts
var import_react20 = require("@remix-run/react"), import_react21 = require("react"), usePlayerTrackContext = (isMobile) => {
  let { pathname } = (0, import_react20.useLocation)(), { setCurrentTrackContext, currentTrack } = usePlayerContext();
  (0, import_react21.useEffect)(() => {
    setCurrentTrackContext(pathname);
  }, [pathname]);
  let isTrackInCurrentContext = (0, import_react21.useMemo)(() => currentTrack ? isMobile ? currentTrack.contexts.mobile.includes(pathname) : currentTrack.contexts.desktop.includes(pathname) : !1, [currentTrack, isMobile, pathname]);
  return {
    showExternalPlayer: !!currentTrack && !isTrackInCurrentContext
  };
};

// app/hooks/player/useTrackPlayer.ts
var import_react22 = require("react"), useTrackPlayer = (id) => {
  var _a;
  let {
    buffer,
    currentTrackId,
    volume,
    jumping,
    currentContext,
    playing,
    ...playerContext
  } = usePlayerContext(), currentTrack = (0, import_react22.useMemo)(() => buffer[id], [buffer, id]), isCurrentTrack = currentTrackId === id, isPlaying = (0, import_react22.useMemo)(
    () => isCurrentTrack && playing,
    [isCurrentTrack, playing]
  ), togglePlay = () => {
    if (!isPlaying || !isCurrentTrack) {
      playerContext.play(id);
      return;
    }
    playerContext.pause(id);
  }, setLoad2 = (value) => playerContext.setLoad(id, value), setSeek2 = (value, jumping2) => playerContext.setSeek(id, value, jumping2), isInCurrentContext = currentContext && ((_a = currentTrack == null ? void 0 : currentTrack.contexts) == null ? void 0 : _a.desktop) && currentTrack.contexts.desktop.includes(currentContext);
  return {
    load: (currentTrack == null ? void 0 : currentTrack.load) || 0,
    seek: (currentTrack == null ? void 0 : currentTrack.seek) || 0,
    url: (currentTrack == null ? void 0 : currentTrack.url) || void 0,
    waveform: currentTrack == null ? void 0 : currentTrack.waveform,
    duration: currentTrack == null ? void 0 : currentTrack.duration,
    isInCurrentContext,
    isPlaying,
    isCurrentTrack,
    volume,
    jumping,
    togglePlay,
    setLoad: setLoad2,
    setSeek: setSeek2
  };
};

// app/hooks/player/useCurrentTrackPlayer.ts
var useCurrentTrackPlayer = () => {
  let id = usePlayerContext().currentTrackId;
  return useTrackPlayer(id || 0);
};

// app/components/atoms/Action/Action.tsx
var import_clsx8 = __toESM(require("clsx")), import_jsx_runtime22 = require("react/jsx-runtime"), Action = ({ children, onClick, style, className }) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", {
  onClick,
  className: (0, import_clsx8.default)("border-none bg-none cursor-pointer", className),
  style,
  children
}), Action_default = Action;

// app/components/atoms/ShapePlay/ShapePlay.tsx
var import_clsx9 = __toESM(require("clsx")), import_jsx_runtime23 = require("react/jsx-runtime"), ShapePlay = ({ isPlaying }) => {
  let className = (0, import_clsx9.default)({
    "w-6 h-6 border-solid border-0 border-gray-100 opacity-60 transition-all duration-250": !0,
    "border-l-8 border-t-transparent border-b-transparent border-t-transparent border-r-8 border-b-0 ml-0: playing": isPlaying,
    "border-y-[14px] border-x-[22px] border-y-transparent w-0 border-r-0": !isPlaying
  });
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", {
    className
  });
}, ShapePlay_default = ShapePlay;

// app/components/molecules/ActionPlay/ActionPlay.tsx
var import_jsx_runtime24 = require("react/jsx-runtime"), ActionPlay = ({ isPlaying, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Action_default, {
  onClick: () => {
    onChange == null || onChange(!isPlaying);
  },
  className: "flex items-center justify-center w-full h-full transition-all duration-75 bg-black bg-opacity-20 hover:bg-opacity-40",
  children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ShapePlay_default, {
    isPlaying
  })
}), ActionPlay_default = ActionPlay;

// app/components/organisms/PlayerTrack/PlayerTrack.tsx
var import_react24 = require("react");

// app/components/atoms/Waveform/Waveform.tsx
var import_clsx10 = __toESM(require("clsx")), import_react23 = require("react"), import_jsx_runtime25 = require("react/jsx-runtime"), Waveform = (0, import_react23.forwardRef)(
  ({ src, className, onClick }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", {
    ref,
    onClick,
    className: (0, import_clsx10.default)(
      "w-full h-6 bg-lightPink transition-all duration-200 bg-contain",
      className
    ),
    style: {
      backgroundImage: `url("${src}")`,
      filter: "invert(1)"
    }
  })
);
Waveform.displayName = "Waveform";
var Waveform_default = Waveform;

// app/components/organisms/PlayerTrack/PlayerTrack.tsx
var import_clsx11 = require("clsx"), import_jsx_runtime26 = require("react/jsx-runtime"), PlayerTrack = ({
  waveform,
  seek,
  load,
  isPlaying,
  onSeekChange
}) => {
  let waveformRef = (0, import_react24.useRef)(), playerRef = (0, import_react24.useRef)(), moveSeek = (0, import_react24.useCallback)(
    (e) => {
      var _a;
      if (!waveformRef)
        return;
      e.preventDefault(), e.stopPropagation();
      let offsetLeft = (_a = playerRef.current.getClientRects().item(0)) == null ? void 0 : _a.left, percent = (e.clientX - waveformRef.current.offsetLeft - (offsetLeft || playerRef.current.offsetLeft)) / waveformRef.current.offsetWidth * 100;
      onSeekChange == null || onSeekChange(percent);
    },
    [onSeekChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", {
    ref: playerRef,
    onClick: moveSeek,
    className: (0, import_clsx11.clsx)("relative w-full h-6 cursor-pointer opacity-80", {
      grayscale: !isPlaying
    }),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Waveform_default, {
        ref: waveformRef,
        src: waveform,
        className: "absolute z-10 cursor-pointer"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
        className: "absolute z-20 h-6 transition-all bg-black cursor-pointer opacity-10",
        style: {
          width: `${load}%`
        }
      }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
        className: "absolute z-30 h-6 transition-all bg-black cursor-pointer opacity-30",
        style: {
          width: `${seek}%`
        }
      })
    ]
  });
}, PlayerTrack_default = PlayerTrack;

// app/components/organisms/Player/Player.tsx
var import_jsx_runtime27 = require("react/jsx-runtime"), Player = ({
  isPlaying,
  setSeek: setSeek2,
  togglePlay,
  seek,
  load,
  waveform
}) => {
  let handleSeekChange = (seek2) => {
    setSeek2(seek2, !0);
  };
  return waveform ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("article", {
    className: "flex w-full h-12",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", {
        className: "w-12 h-12",
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(ActionPlay_default, {
          isPlaying,
          onChange: togglePlay
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", {
        className: "flex items-center w-full ml-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(PlayerTrack_default, {
          waveform,
          seek,
          load,
          isPlaying,
          onSeekChange: handleSeekChange
        })
      })
    ]
  }) : null;
}, Player_default = Player;

// app/components/organisms/PlayerCurrentTrackContainer/PlayerCurrentTrackContainer.tsx
var import_jsx_runtime28 = require("react/jsx-runtime"), PlayerCurrentTrackContainer = () => {
  let currentTrackPlayer = useCurrentTrackPlayer();
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Player_default, {
    ...currentTrackPlayer
  });
}, PlayerCurrentTrackContainer_default = PlayerCurrentTrackContainer;

// app/components/organisms/PlayerWidgetMobile/PlayerWidgetMobile.tsx
var import_jsx_runtime29 = require("react/jsx-runtime"), variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0.5, y: 50 }
}, PlayerWidgetMobile = () => {
  let { showExternalPlayer } = usePlayerTrackContext(!0);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_framer_motion.motion.div, {
    className: "absolute bottom-0 z-10 flex w-screen h-12",
    animate: showExternalPlayer ? "open" : "closed",
    variants,
    children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(PlayerCurrentTrackContainer_default, {})
  });
}, PlayerWidgetMobile_default = PlayerWidgetMobile;

// app/components/organisms/Footer/Footer.tsx
var import_jsx_runtime30 = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("footer", {
      className: "items-center justify-between hidden w-screen h-12 px-6 md:flex",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(FooterAnchorsCopyrights_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(FooterAnchorsInfosContainer_default, {})
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", {
      className: "mt-1 md:hidden",
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PlayerWidgetMobile_default, {})
    })
  ]
}), Footer_default = Footer;

// app/components/layouts/PageLayout/PageLayout.tsx
var import_jsx_runtime31 = require("react/jsx-runtime"), PageLayout = ({ children, left }) => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("main", {
  className: "w-screen md:h-[calc(100vh_-_6rem)] flex justify-end lg:flex-row flex-col",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", {
      className: "hidden lg:block lg:w-1/3",
      children: left
    }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", {
      className: "flex flex-col w-full pl-3 md:pl-8 md:mt-8 lg:w-2/3 md:py-4",
      children
    })
  ]
}), PageLayout_default = PageLayout;

// app/components/organisms/PlayerWidget/PlayerWidget.tsx
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime32 = require("react/jsx-runtime"), variants2 = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
}, PlayerWidget = () => {
  let { showExternalPlayer } = usePlayerTrackContext();
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_framer_motion2.motion.div, {
    className: "flex w-full",
    animate: showExternalPlayer ? "open" : "closed",
    variants: variants2,
    children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(PlayerCurrentTrackContainer_default, {})
  });
}, PlayerWidget_default = PlayerWidget;

// app/components/contexts/NotificationContext/NotificationContext.provider.tsx
var import_react31 = require("react");

// app/hooks/mutations/useSubscribeMutation.ts
var import_client4 = require("@apollo/client");

// app/gql/mutations/subscribe.gql
var subscribe_default = `fragment SubscriptionFragment on Subscription {
  endpoint
  keys {
    auth
    p256dh
  }
}

mutation SubscribeMutation(
  $notificationPoolId: String!
  $subscription: SubscriptionDto!
) {
  subscribe(
    notificationPoolId: $notificationPoolId
    subscription: $subscription
  ) {
    ...SubscriptionFragment
  }
}
`;

// app/hooks/mutations/useSubscribeMutation.ts
var subscribeMutationGql = import_client4.gql`
  ${subscribe_default}
`, useSubscribeMutation = (onCompleted) => {
  let [mutation, mutationResults] = (0, import_client4.useMutation)(subscribeMutationGql, {
    onCompleted,
    errorPolicy: "all"
  });
  return [(notificationPoolId, subscription) => mutation({
    variables: {
      notificationPoolId,
      subscription
    }
  }), mutationResults];
};

// app/components/contexts/ConfigContext/ConfigContext.tsx
var import_react25 = require("react"), ConfigContext = (0, import_react25.createContext)({
  config: {
    api: "",
    apiEndpoint: "",
    notificationPoolId: "",
    mapbox: {
      accessToken: "",
      style: ""
    }
  }
});

// app/components/contexts/ConfigContext/ConfigContext.provider.tsx
var import_jsx_runtime33 = require("react/jsx-runtime"), ConfigContextProvider = ({
  config,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(ConfigContext.Provider, {
  value: {
    config
  },
  children
}), ConfigContext_provider_default = ConfigContextProvider;

// app/components/contexts/ConfigContext/ConfigContext.hook.ts
var import_react26 = require("react");
var useConfigContext = () => (0, import_react26.useContext)(ConfigContext);

// app/components/contexts/NotificationContext/NotificationContext.tsx
var import_react27 = require("react"), NotificationContext = (0, import_react27.createContext)({
  isActive: !1
});

// app/utils/crypt.ts
var urlBase64ToUint8Array = (base64String) => {
  let padding = "=".repeat((4 - base64String.length % 4) % 4), base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/"), rawData = window.atob(base64), outputArray = new Uint8Array(rawData.length);
  for (var i = 0; i < rawData.length; ++i)
    outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
};

// app/components/contexts/NotificationContext/NotificationContext.utils.ts
var getSubscription = async (registration) => {
  if (!("Notification" in window) || await window.Notification.requestPermission() !== "granted")
    return null;
  let subscription = await registration.pushManager.getSubscription();
  if (!subscription) {
    let applicationKey = await (await fetch("/resources/subscribe")).text(), applicationServerKey = urlBase64ToUint8Array(applicationKey);
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: !0,
      applicationServerKey
    });
  }
  return subscription;
}, getSubscriptionKey = (subscription, key) => {
  if (!subscription.getKey)
    return "";
  let rawKey = subscription.getKey(key);
  if (!rawKey)
    return null;
  let value = Array.from(new Uint8Array(rawKey));
  return typeof window > "u" ? null : window.btoa(String.fromCharCode.apply(null, value));
}, getSubscriptionParameters = (subscription) => ({
  endpoint: subscription.endpoint,
  keys: {
    auth: getSubscriptionKey(subscription, "auth"),
    p256dh: getSubscriptionKey(subscription, "p256dh")
  }
});

// app/components/contexts/PwaContext/PwaContext.hook.ts
var import_react29 = require("react");

// app/components/contexts/PwaContext/PwaContext.tsx
var import_react28 = require("react"), PwaContext = (0, import_react28.createContext)({});

// app/components/contexts/PwaContext/PwaContext.hook.ts
var usePwaContext = () => (0, import_react29.useContext)(PwaContext);

// app/hooks/mutations/useUnsubscribeMutation.ts
var import_client5 = require("@apollo/client");

// app/gql/mutations/unsubscribe.gql
var unsubscribe_default = `mutation UnSubscribeMutation($notificationPoolId: String!, $endpoint: String!) {
  unsubscribe(notificationPoolId: $notificationPoolId, endpoint: $endpoint) {
    deleted
  }
}
`;

// app/hooks/mutations/useUnsubscribeMutation.ts
var unsubscribeMutationGql = import_client5.gql`
  ${unsubscribe_default}
`, useUnSubscribeMutation = (onCompleted) => {
  let [mutation, mutationResults] = (0, import_client5.useMutation)(unsubscribeMutationGql, {
    onCompleted,
    errorPolicy: "all"
  });
  return [(notificationPoolId, endpoint) => mutation({
    variables: {
      notificationPoolId,
      endpoint
    }
  }), mutationResults];
};

// app/hooks/useLocaleStorage.ts
var import_react30 = require("react"), useLocalStorage = (key, initialValue) => {
  let [storedValue, setStoredValue] = (0, import_react30.useState)(() => {
    if (typeof window > "u")
      return initialValue;
    try {
      let item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return console.log(error), initialValue;
    }
  });
  return [storedValue, (value) => {
    try {
      let valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore), typeof window < "u" && window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }];
};

// app/components/contexts/NotificationContext/NotificationContext.provider.tsx
var import_jsx_runtime34 = require("react/jsx-runtime"), NotificationContextProvider = ({
  children
}) => {
  let [isVerified, setVerified] = (0, import_react31.useState)(!1), [isSubscribed, toggleSubscribed] = (0, import_react31.useState)(!1), { config } = useConfigContext(), [subscribe] = useSubscribeMutation((data) => {
    data.subscribe && toggleSubscribed(!0);
  }), [storedSubscribeState, setStoredSubscribeState] = useLocalStorage("subscription", void 0), [unsubscribe] = useUnSubscribeMutation((data) => {
    data.unsubscribe.deleted && toggleSubscribed(!1);
  }), { registration } = usePwaContext(), doSubscribe = (0, import_react31.useCallback)(async () => {
    if (!registration || isSubscribed)
      return;
    let subscription = await getSubscription(registration);
    if (!(subscription != null && subscription.endpoint))
      return null;
    let subscriptionParameters = getSubscriptionParameters(subscription);
    await subscribe(config.notificationPoolId, subscriptionParameters), setStoredSubscribeState(!0);
  }, [
    config.notificationPoolId,
    isSubscribed,
    registration,
    setStoredSubscribeState,
    subscribe
  ]), doUnsubscribe = async () => {
    if (!registration || !isSubscribed)
      return;
    let subscription = await getSubscription(registration);
    !(subscription != null && subscription.endpoint) || (await unsubscribe(config.notificationPoolId, subscription.endpoint), setStoredSubscribeState(!1));
  }, setSubscribed = async (value) => {
    value ? await doSubscribe() : doUnsubscribe(), setVerified(!0);
  };
  return (0, import_react31.useEffect)(() => {
    let asyncEffect = async () => {
      await doSubscribe();
    };
    typeof Notification > "u" || Notification.permission === "granted" && registration && !isVerified && (storedSubscribeState || typeof storedSubscribeState > "u") && (setVerified(!0), asyncEffect());
  }, [doSubscribe, isVerified, registration, storedSubscribeState]), /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(NotificationContext.Provider, {
    value: {
      isSubscribed,
      setSubscribed
    },
    children
  });
}, NotificationContext_provider_default = NotificationContextProvider;

// app/components/contexts/NotificationContext/NotificationContext.hook.ts
var import_react32 = require("react");
var useNotificationContext = () => (0, import_react32.useContext)(NotificationContext);

// app/components/atoms/Switch/Switch.tsx
var import_clsx12 = require("clsx"), import_react33 = require("react"), import_jsx_runtime35 = require("react/jsx-runtime"), Switch = ({ value, onChange }) => {
  let className = (0, import_clsx12.clsx)({
    "cursor-pointer border-none inline-flex items-center w-10 rounded-full h-4 transition-all duration-50": !0,
    "bg-gray-200 justify-end": value,
    "bg-gray-500 bg-opacity-50 justify-start": !value
  }), textClassName = "flex items-center text-[8px] select-none", id = (0, import_react33.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("label", {
    htmlFor: id,
    className,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("input", {
        type: "checkbox",
        className: "hidden",
        checked: value,
        onChange: (e) => {
          let value2 = e.currentTarget.checked;
          onChange == null || onChange(value2);
        },
        id
      }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", {
        className: (0, import_clsx12.clsx)(textClassName, {
          hidden: !value,
          "pr-1 text-gray-600": value
        }),
        children: "ON"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", {
        className: "flex w-3 h-3 mx-1 bg-gray-900 rounded-full"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", {
        className: (0, import_clsx12.clsx)(textClassName, {
          hidden: value,
          "pl-1 text-gray-500": !value
        }),
        children: "OFF"
      })
    ]
  });
}, Switch_default = Switch;

// app/components/atoms/Text/Text.tsx
var import_jsx_runtime36 = require("react/jsx-runtime"), leadings = {
  xs: "leading-3",
  sm: "leading-4",
  md: "leading-6",
  lg: "leading-8",
  xl: "leading-12",
  xxl: "leading-18"
}, Text = ({
  children,
  fontStyle = "normal",
  size = "md",
  align = "left",
  weight = "normal",
  isUppercase
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", {
  className: `pr-2 m-0 font-${weight} ${isUppercase ? "uppercase" : ""} text-${size} ${leadings[size]} ${fontStyle} text-${align} text-gray-400 p-O`,
  children
}), TextRight = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  align: "right",
  children
}), TextRightMd = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  align: "right",
  size: "md",
  children
}), TextRightItalic = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  align: "right",
  fontStyle: "italic",
  children
}), TextSemiBold = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  weight: "semibold",
  children
}), TextMd = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  size: "md",
  children
}), TextSm = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  size: "sm",
  children
}), TextLg = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  size: "lg",
  children
}), TextMdSemiBold = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  size: "md",
  weight: "semibold",
  children
}), TextSmSemiBold = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  size: "sm",
  weight: "semibold",
  children
}), TextRightMdSemiBold = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  align: "right",
  size: "md",
  weight: "semibold",
  children
}), TextRightMdItalic = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Text, {
  align: "right",
  size: "md",
  fontStyle: "italic",
  children
});
Text.Right = TextRight;
Text.RightItalic = TextRightItalic;
Text.RightMd = TextRightMd;
Text.Semibold = TextSemiBold;
Text.RightMdSemiBold = TextRightMdSemiBold;
Text.MdSemiBold = TextMdSemiBold;
Text.SmSemiBold = TextSmSemiBold;
Text.RightMdItalic = TextRightMdItalic;
Text.Md = TextMd;
Text.Sm = TextSm;
Text.Lg = TextLg;
var Text_default = Text;

// app/components/molecules/FieldSwitch/FieldSwitch.tsx
var import_jsx_runtime37 = require("react/jsx-runtime"), FieldSwitch = ({ label, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", {
  className: "flex items-center h-8 gap-2",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Switch_default, {
      ...props
    }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Text_default.Semibold, {
      children: label
    })
  ]
}), FieldSwitch_default = FieldSwitch;

// app/components/organisms/NotificationActivationSwitch/NotificationActivationSwitch.tsx
var import_jsx_runtime38 = require("react/jsx-runtime"), NotificationActivationSwitch = () => {
  let { isSubscribed, setSubscribed } = useNotificationContext();
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FieldSwitch_default, {
    label: `Notifications ${isSubscribed ? "enabled" : "disabled"} on my browser`,
    value: isSubscribed,
    onChange: setSubscribed
  });
}, NotificationActivationSwitch_default = NotificationActivationSwitch;

// app/components/organisms/ExtraContent/ExtraContent.tsx
var import_jsx_runtime39 = require("react/jsx-runtime"), ExtraContent = () => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", {
  className: "flex items-end justify-end w-full h-full gap-4 pl-4 md:flex-col md:py-4",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", {
      className: "w-full max-md:hidden",
      children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(PlayerWidget_default, {})
    }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", {
      className: "flex justify-end w-full md:justify-start",
      children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(NotificationActivationSwitch_default, {})
    })
  ]
}), ExtraContent_default = ExtraContent;

// app/hooks/useResize.ts
var import_react34 = require("react"), useResize = (onResize) => {
  (0, import_react34.useEffect)(() => {
    if (onResize(), !(typeof window > "u"))
      return window.addEventListener("resize", onResize, !1), () => {
        window.removeEventListener("resize", onResize, !1);
      };
  }, [onResize]);
};

// app/components/layouts/Layout/Layout.tsx
var import_jsx_runtime40 = require("react/jsx-runtime"), Layout = ({ children }) => (useResize(() => {
  if (typeof window > "u")
    return;
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}), /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Background_default, {
  children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", {
    className: "relative flex flex-col w-screen h-screen",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Header_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(PageLayout_default, {
        left: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(ExtraContent_default, {}),
        children
      }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Footer_default, {})
    ]
  })
})), Layout_default = Layout;

// app/components/organisms/DisplayInfos/DisplayInfos.tsx
var import_clsx13 = __toESM(require("clsx")), import_jsx_runtime41 = require("react/jsx-runtime"), DisplayInfos = ({ infos }) => {
  var _a, _b;
  return (_a = infos.bio) != null && _a.content ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("article", {
    className: "hidden mr-6 md:block",
    children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", {
      className: (0, import_clsx13.default)(theme.smallSemiBold, "text-right "),
      children: (_b = infos.bio) == null ? void 0 : _b.content
    })
  }) : null;
}, DisplayInfos_default = DisplayInfos;

// app/components/organisms/DisplayInfosContainer/DisplayInfosContainer.tsx
var import_jsx_runtime42 = require("react/jsx-runtime"), DisplayInfosContainer = () => {
  let { data, loading } = useInfosQuery();
  return !data || loading ? null : /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(DisplayInfos_default, {
    infos: data == null ? void 0 : data.infos
  });
}, DisplayInfosContainer_default = DisplayInfosContainer;

// app/components/organisms/ContainerScrollPage/ContainerScrollPage.tsx
var import_clsx14 = __toESM(require("clsx")), import_jsx_runtime43 = require("react/jsx-runtime"), ContainerScrollPage = ({
  children,
  className
}) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("section", {
  className: (0, import_clsx14.default)(
    "md:ml-24 lg:ml-36 xl:ml-48 h-[calc(100vh_-_6rem)] md:h-[calc(100vh_-_18rem)] md:mx-2 pr-4 flex-auto overflow-x-hidden overflow-y-scroll py-12 mask-page scroll-py-4 scrollbar scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-black",
    className
  ),
  children
}), ContainerScrollPage_default = ContainerScrollPage;

// app/application.tsx
var import_framer_motion3 = require("framer-motion");

// app/components/atoms/Audio/Audio.tsx
var import_react_audio_player = __toESM(require("react-audio-player")), import_react35 = require("react");
var import_jsx_runtime44 = require("react/jsx-runtime"), Audio = ({
  url,
  duration,
  setLoad: setLoad2,
  seek,
  setSeek: setSeek2,
  volume,
  jumping
}) => {
  var _a;
  let playerRef = (0, import_react35.useRef)(null), element = (_a = playerRef.current) == null ? void 0 : _a.audioEl;
  (0, import_react35.useLayoutEffect)(() => {
    var _a2;
    element = (_a2 = playerRef.current) == null ? void 0 : _a2.audioEl;
  }, [playerRef.current]);
  let onListen = (value) => {
    if (!(element != null && element.current) || !(element != null && element.current) || !duration)
      return;
    let loaded = element.current.buffered.end(element.current.buffered.length - 1) / element.current.duration * 100;
    if (console.log(
      "LOADED >>> ",
      element.current.buffered.length,
      element.current.buffered.end(element.current.buffered.length - 1),
      duration,
      element.current.duration,
      loaded
    ), setLoad2(loaded), jumping)
      element.current.currentTime = seek / 100 * duration / 1e3, setSeek2(seek);
    else {
      let currentSeek = value * 100 / duration * 1e3;
      setSeek2(currentSeek);
    }
  };
  return url ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_audio_player.default, {
    ref: playerRef,
    src: url,
    listenInterval: 200,
    onListen: debounce(onListen, 200),
    controls: !1,
    autoPlay: !0,
    volume: volume / 100
  }) : null;
}, Audio_default = Audio;

// app/components/molecules/AudioContainer/AudioContainer.tsx
var import_jsx_runtime45 = require("react/jsx-runtime"), AudioContainer = () => {
  let currentTrack = useCurrentTrackPlayer();
  return !currentTrack.isPlaying || !currentTrack.url ? null : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Audio_default, {
    ...currentTrack
  });
}, AudioContainer_default = AudioContainer;

// app/components/atoms/Portal/Portal.tsx
var import_react37 = require("react"), import_react_dom = __toESM(require("react-dom"));

// app/hooks/useDomElement.ts
var import_react36 = require("react");

// app/utils/getDomElement.ts
var getDomElement = (selector) => new Promise((resolve) => {
  let element = window.document.querySelector(selector);
  if (element)
    return resolve(element);
  let observer = new MutationObserver(() => {
    let element2 = window.document.querySelector(selector);
    element2 && (resolve(element2), observer.disconnect());
  });
  observer.observe(window.document.body, {
    childList: !0,
    subtree: !0
  });
});

// app/hooks/useDomElement.ts
var useDomElement = (selector) => {
  let [element, setElement] = (0, import_react36.useState)(
    typeof window < "u" ? window.document.querySelector(selector) : null
  );
  return (0, import_react36.useEffect)(() => {
    (async () => {
      if (element)
        return;
      let currentElement = await getDomElement(selector);
      setElement(currentElement);
    })();
  }, [element, selector]), element;
};

// app/components/atoms/Portal/Portal.tsx
var Portal = (0, import_react37.memo)(({ children, id }) => {
  let root = useDomElement(`#${id}`);
  return root ? import_react_dom.default.createPortal(children, root) : null;
});
Portal.displayName = "Portal";
var Portal_default = Portal;

// app/components/molecules/PageDetailHeaderPortal/PageDetailHeaderPortal.tsx
var import_jsx_runtime46 = require("react/jsx-runtime"), PageDetailHeaderPortal = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Portal_default, {
  id: PageDetailHeaderPortal.Id,
  children
}), PageDetailHeaderPortalContainer = () => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", {
  id: PageDetailHeaderPortal.Id
});
PageDetailHeaderPortal.Id = "pageDetailHeaderPortal";
PageDetailHeaderPortal.Container = PageDetailHeaderPortalContainer;
var PageDetailHeaderPortal_default = PageDetailHeaderPortal;

// app/components/organisms/FooterMobile/FooterMobile.tsx
var import_jsx_runtime47 = require("react/jsx-runtime"), FooterMobile = () => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", {
  className: "mt-4 md:hidden",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", {
      className: "mb-4",
      children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(NotificationActivationSwitch_default, {})
    }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(FooterAnchorsCopyrights_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(FooterAnchorsInfosContainer_default, {})
  ]
}), FooterMobile_default = FooterMobile;

// app/components/contexts/PwaContext/PwaContext.provider.tsx
var import_react38 = require("react");
var import_jsx_runtime48 = require("react/jsx-runtime"), PwaContextProvider = ({ children }) => {
  let [registration, setRegistration] = (0, import_react38.useState)(null);
  return (0, import_react38.useEffect)(() => {
    "serviceWorker" in navigator && (navigator.serviceWorker.register("/entry.worker.js").then(() => navigator.serviceWorker.ready).then(() => {
      navigator.serviceWorker.controller ? navigator.serviceWorker.controller.postMessage({
        type: "SYNC_REMIX_MANIFEST",
        manifest: window.__remixManifest
      }) : navigator.serviceWorker.addEventListener(
        "controllerchange",
        () => {
          var _a;
          (_a = navigator.serviceWorker.controller) == null || _a.postMessage({
            type: "SYNC_REMIX_MANIFEST",
            manifest: window.__remixManifest
          });
        }
      );
    }).catch((error) => {
      console.error("Service worker registration failed", error);
    }), navigator.serviceWorker.ready.then((registration2) => {
      setRegistration(registration2);
    }));
  }, []), /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(PwaContext.Provider, {
    value: {
      registration
    },
    children
  });
}, PwaContext_provider_default = PwaContextProvider;

// app/application.tsx
var import_react41 = require("react"), import_jsx_runtime49 = require("react/jsx-runtime"), isMount = !0, Application = ({ config, children }) => {
  let location = (0, import_react40.useLocation)(), matches = (0, import_react39.useMatches)(), outlet = (0, import_react39.useOutlet)();
  return (0, import_react41.useEffect)(() => {
    var _a;
    let mounted = isMount;
    if (isMount = !1, "serviceWorker" in navigator)
      if (navigator.serviceWorker.controller)
        (_a = navigator.serviceWorker.controller) == null || _a.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest
        });
      else {
        let listener = async () => {
          var _a2;
          await navigator.serviceWorker.ready, (_a2 = navigator.serviceWorker.controller) == null || _a2.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest
          });
        };
        return navigator.serviceWorker.addEventListener("controllerchange", listener), () => {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            listener
          );
        };
      }
  }, [location, matches]), /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ConfigContext_provider_default, {
        config,
        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PwaContext_provider_default, {
          children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(NotificationContext_provider_default, {
            children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(Layout_default, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(DisplayInfosContainer_default, {}),
                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", {
                  className: "h-6",
                  children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PageDetailHeaderPortal_default.Container, {})
                }),
                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContainerScrollPage_default, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_framer_motion3.AnimatePresence, {
                    exitBeforeEnter: !0,
                    initial: !1,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_framer_motion3.motion.div, {
                        className: "max-md:min-h-[calc(100vh_-_21rem)]",
                        initial: { opacity: 0 },
                        animate: { x: 0, opacity: 1 },
                        exit: { opacity: 0.8 },
                        transition: { duration: 0.3 },
                        children: children ?? outlet
                      }, (0, import_react40.useLocation)().pathname),
                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(FooterMobile_default, {})
                    ]
                  })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ClientOnly, {
                  children: () => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(AudioContainer_default, {})
                })
              ]
            })
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react40.ScrollRestoration, {}),
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react40.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("script", {
        dangerouslySetInnerHTML: {
          __html: `window.ENV = ${JSON.stringify(config)}`
        }
      }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react40.LiveReload, {})
    ]
  });
}, application_default = Application;

// app/styles/styles.css
var styles_default = "/build/_assets/styles-4JVXXVAT.css";

// app/components/pages/ErrorPage/ErrorPage.tsx
var import_jsx_runtime50 = require("react/jsx-runtime"), ErrorPage = ({
  code,
  message = "An exception occured",
  extra
}) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", {
  className: "flex flex-col items-center justify-center m-8 o-2",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", {
      className: "flex justify-center w-full gap-4 leading-8",
      children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("h1", {
        className: "font-semibold text-center text-large",
        children: [
          "Error ",
          code
        ]
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", {
      className: "w-full p-0 m-0 text-center text-semilarge",
      children: message
    }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", {
      className: "mb-8 font-bold text-center text-xxl",
      children: ":("
    }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", {
      className: "text-center",
      children: extra
    })
  ]
}), ErrorPage_default = ErrorPage;

// app/root.tsx
var import_jsx_runtime51 = require("react/jsx-runtime"), isMount2 = !0, meta = ({ data }) => {
  let description = data == null ? void 0 : data.description, title = "Cyberlife's music", image = "https://res.cloudinary.com/hw2jydiif/image/upload/v1667476701/btby2qfnqpbpnnfpzdt5.webp";
  return {
    charset: "utf-8",
    description,
    expires: "0",
    image,
    "mobile-web-app-capable": "yes",
    "og:description": description,
    "og:image": image,
    "og:image:secure_url": image,
    "og:site_name": title,
    "og:title": title,
    "og:type": "website",
    pragma: "no-cache",
    robots: "all",
    title,
    "twitter:card": "summary",
    "twitter:description": description,
    "twitter:image": image,
    "twitter:site_name": title,
    "twitter:title": title,
    viewport: "width=device-width,initial-scale=1"
  };
}, links = () => [{ rel: "stylesheet", href: styles_default }], loader = async ({ request }) => {
  var _a, _b, _c;
  let { url } = request, res = await runInfosQuery(), description = (_c = (_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.infos) == null ? void 0 : _b.bio) == null ? void 0 : _c.content, config = getConfig();
  return (0, import_node2.json)({
    url,
    description,
    config
  });
};
function CatchBoundary() {
  let { status } = (0, import_react43.useCatch)();
  typeof window < "u" && console.log(window);
  let code = status === 404 ? 404 : 500, config = getConfig(), message = status === 404 ? "Nothing here!" : "A technical error occured!";
  return config ? /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react43.Meta, {}),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react43.Links, {}),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("link", {
            rel: "manifest",
            href: "/resources/manifest.webmanifest"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("body", {
        className: "w-screen h-screen p-0 m-0 overflow-hidden text-gray-400 bg-black",
        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(application_default, {
          config,
          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ErrorPage_default, {
            code,
            message
          })
        })
      })
    ]
  }) : null;
}
function App() {
  let data = (0, import_react43.useLoaderData)(), location = (0, import_react43.useLocation)(), matches = (0, import_react43.useMatches)();
  return import_react42.default.useEffect(() => {
    var _a;
    let mounted = isMount2;
    if (isMount2 = !1, "serviceWorker" in navigator)
      if (navigator.serviceWorker.controller)
        (_a = navigator.serviceWorker.controller) == null || _a.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest
        });
      else {
        let listener = async () => {
          var _a2;
          await navigator.serviceWorker.ready, (_a2 = navigator.serviceWorker.controller) == null || _a2.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest
          });
        };
        return navigator.serviceWorker.addEventListener("controllerchange", listener), () => {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            listener
          );
        };
      }
  }, [location, matches]), /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react43.Meta, {}),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react43.Links, {}),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("link", {
            rel: "manifest",
            href: "/resources/manifest.webmanifest"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("link", {
            rel: "canonical",
            href: data.url
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("body", {
        className: "w-screen h-screen p-0 m-0 overflow-hidden text-gray-400 bg-black",
        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(application_default, {
          config: data.config
        })
      })
    ]
  });
}

// app/routes/resources/manifest[.]webmanifest.ts
var manifest_webmanifest_exports = {};
__export(manifest_webmanifest_exports, {
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), loader2 = () => (0, import_node3.json)(
  {
    short_name: "Cyberlife",
    name: "Cyberlife Music",
    start_url: "/",
    display: "standalone",
    background_color: "#161616",
    theme_color: "#DEDEDE",
    shortcuts: [
      {
        name: "Cyberlife",
        url: "/",
        icons: [
          {
            src: "/icons/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any monochrome"
          }
        ]
      }
    ],
    icons: [
      {
        src: "/icons/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
        density: "0.75"
      },
      {
        src: "/icons/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        density: "1.0"
      },
      {
        src: "/icons/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        density: "1.5"
      },
      {
        src: "/icons/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        density: "2.0"
      },
      {
        src: "/icons/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        density: "3.0"
      },
      {
        src: "/icons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        density: "4.0"
      }
    ]
  },
  {
    headers: {
      "Cache-Control": "public, max-age=600",
      "Content-Type": "application/manifest+json"
    }
  }
);

// app/routes/resources/subscribe.ts
var subscribe_exports = {};
__export(subscribe_exports, {
  action: () => action,
  loader: () => loader3
});

// app/utils/server/pwa-utils.server.ts
var storage = require("node-persist"), webPush = require("web-push");
async function SaveSubscription(sub) {
  await storage.init(), await storage.setItem("subscription", sub);
}

// app/routes/resources/subscribe.ts
var action = async ({ request }) => {
  let subscription = (await request.json()).subscription;
  return SaveSubscription(subscription), { message: "Done" };
}, loader3 = async () => {
  if (!process.env.APPLICATION_KEY)
    return console.log(
      "You must set the APPLICATION_KEY environment variables. You can use the following ones:"
    ), null;
  let publicKey = process.env.APPLICATION_KEY;
  return new Response(publicKey, {
    status: 202,
    statusText: "Successful Operation"
  });
};

// app/routes/resources/config.ts
var config_exports = {};
__export(config_exports, {
  loader: () => loader4
});
var import_node4 = require("@remix-run/node"), loader4 = async () => (0, import_node4.json)({
  api: process.env.API_URL,
  notificationPoolId: process.env.NOTIFICATION_POOL_ID,
  mapbox: {
    accessToken: process.env.MAPBOX_API_KEY,
    style: "mapbox://styles/cyberlife/cjq9kpl33b01d2smvny3ciast"
  }
});

// app/routes/podcasts/index.tsx
var podcasts_exports = {};
__export(podcasts_exports, {
  default: () => Podcast,
  loader: () => loader5
});

// app/components/molecules/List/List.tsx
var import_react45 = require("react");

// app/components/molecules/ListItemWrapper/ListItemWrapper.tsx
var import_react44 = require("react"), import_framer_motion4 = require("framer-motion"), import_clsx15 = __toESM(require("clsx")), import_jsx_runtime52 = require("react/jsx-runtime"), ListItemWrapper = ({ children, index }) => {
  let delay = (0, import_react44.useMemo)(() => 0.025 * (index > 10 ? 10 : index) + 0.05, [index]), opacityDelay = (0, import_react44.useMemo)(() => 0.05 + delay, [delay]), className = (0, import_clsx15.default)("flex justify-end border-gray-gray-400", {
    "border-t pt-4": index > 0
  });
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_framer_motion4.motion.li, {
    className,
    initial: { x: "100vw" },
    animate: { x: 0 },
    exit: { x: "100vw" },
    transition: { duration: 0.3, delay },
    children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_framer_motion4.motion.div, {
      className: "flex justify-end w-full flex-end",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.35, delay: opacityDelay },
      children
    })
  });
}, ListItemWrapper_default = ListItemWrapper;

// app/components/molecules/List/List.tsx
var import_jsx_runtime53 = require("react/jsx-runtime"), List = ({ children }) => {
  let childList = import_react45.Children.toArray(children);
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("ul", {
    className: "o-4",
    children: childList.map((child, index) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(ListItemWrapper_default, {
      index,
      children: child
    }, index))
  });
}, List_default = List;

// app/hooks/player/useBufferTrackPlayer.ts
var import_react46 = require("react");
var useBufferTrackPlayer = (track) => {
  let playerContext = usePlayerContext();
  return (0, import_react46.useEffect)(() => {
    playerContext.addTrack(track);
  }, []), useTrackPlayer(track.id);
};

// app/utils/trackToBuffer.ts
var getTrackTobuffer = (track, contexts) => {
  let apiUrl = getApiEndpoint();
  return {
    id: track.id || 0,
    waveform: track.waveform || "",
    url: `${apiUrl}/cyberlife/playlists/${track.id}/stream`,
    duration: track.duration || 0,
    contexts
  };
};

// app/hooks/player/usePodcastTrackPlayer.ts
var usePodcastTrackPlayer = (track) => {
  let url = `/podcasts/${track.id || 0}`, toBuffer = getTrackTobuffer(track, {
    desktop: ["/", url],
    mobile: [url]
  });
  return useBufferTrackPlayer(toBuffer);
};

// app/components/organisms/PodcastActionPlayContainer/PodcastActionPlayContainer.tsx
var import_jsx_runtime54 = require("react/jsx-runtime"), PodcastActionPlayContainer = ({
  track
}) => {
  let { isPlaying, togglePlay } = usePodcastTrackPlayer(track);
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(ActionPlay_default, {
    isPlaying,
    onChange: togglePlay
  });
}, PodcastActionPlayContainer_default = PodcastActionPlayContainer;

// app/components/molecules/Ellipsis/Ellipsis.tsx
var import_clsx16 = __toESM(require("clsx")), import_jsx_runtime55 = require("react/jsx-runtime"), Ellipsis = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", {
  className: (0, import_clsx16.default)(className, "line-clamp-3 md:line-clamp-2"),
  children
}), Ellipsis_default = Ellipsis;

// app/components/molecules/ListItem/ListItem.tsx
var import_jsx_runtime56 = require("react/jsx-runtime"), ListItem2 = ({ children, thumbnail }) => /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", {
  className: "flex w-full gap-4",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", {
      className: "flex flex-auto max-md:w-1/2",
      children
    }),
    thumbnail && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", {
      className: "flex",
      children: thumbnail
    })
  ]
}), ListItem_default2 = ListItem2;

// app/components/molecules/ListItemSnippet/ListItemSnippet.tsx
var import_react47 = require("@remix-run/react"), import_clsx17 = require("clsx");
var import_jsx_runtime57 = require("react/jsx-runtime"), ListItemSnippet = ({ children, title, href }) => {
  let cls = "italic font-semibold text-right uppercase text-sm md:text-md";
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", {
    className: "flex flex-col w-full gap-2 py-2 flex-end",
    children: [
      href ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react47.Link, {
        className: (0, import_clsx17.clsx)(cls, theme.linkHover),
        to: href,
        children: title
      }) : /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h3", {
        className: cls,
        children: title
      }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", {
        className: "w-full",
        children
      })
    ]
  });
}, ListItemSnippet_default = ListItemSnippet;

// app/components/atoms/BackgroundImage/BackgroundImage.tsx
var import_clsx18 = require("clsx"), import_jsx_runtime58 = require("react/jsx-runtime"), BackgroundImage = ({
  src,
  children,
  className
}) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", {
  className: (0, import_clsx18.clsx)("flex bg-cover h-full", className),
  style: {
    backgroundImage: `url("${src}")`
  },
  children
}), BackgroundImage_default = BackgroundImage;

// app/components/molecules/Thumbnail/Thumbnail.tsx
var import_clsx19 = require("clsx"), import_jsx_runtime59 = require("react/jsx-runtime"), Thumbnail = ({ children, src, variant = "normal" }) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(BackgroundImage_default, {
  className: (0, import_clsx19.clsx)(
    "items-center justify-center bg-gray-700 bg-opacity-50 ",
    {
      "w-24 h-24 md:w-32 md:h-32": variant === "normal",
      "w-32 h-24 md:w-48 md:h-32": variant === "large",
      "w-32 h-32 md:w-40 md:h-40": variant === "wider"
    }
  ),
  src,
  children
}), Thumbnail_default = Thumbnail;

// app/components/organisms/PlayerPodcastTrackContainer/PlayerPodcastTrackContainer.tsx
var import_jsx_runtime60 = require("react/jsx-runtime"), PlayerPodcastTrackContainer = ({
  track
}) => {
  let { waveform } = track, { seek, load, setSeek: setSeek2, isPlaying } = usePodcastTrackPlayer(track), handleSeekChange = (seek2) => {
    setSeek2(seek2, !0);
  };
  return waveform ? /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(PlayerTrack_default, {
    waveform,
    load,
    seek,
    isPlaying,
    onSeekChange: handleSeekChange
  }) : null;
}, PlayerPodcastTrackContainer_default = PlayerPodcastTrackContainer;

// app/components/organisms/ListPodcastsItem/ListPodcastsItem.tsx
var import_jsx_runtime61 = require("react/jsx-runtime"), ListPodcastsItem = ({
  podcast,
  artworkFallback
}) => {
  let { artwork, title, id, description, waveform } = podcast;
  return !title || !waveform ? null : /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(ListItem_default2, {
    thumbnail: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Thumbnail_default, {
      src: artwork || artworkFallback || "",
      children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(PodcastActionPlayContainer_default, {
        track: podcast
      })
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(ListItemSnippet_default, {
      title,
      href: `podcasts/${id}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", {
          className: "w-full h-16",
          children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Ellipsis_default, {
            className: "pr-2 text-xs italic text-right md:text-sm",
            children: description
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", {
          className: "hidden md:block",
          children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(PlayerPodcastTrackContainer_default, {
            track: podcast
          })
        })
      ]
    })
  });
}, ListPodcastsItem_default = ListPodcastsItem;

// app/components/organisms/ListPodcasts/ListPodcasts.tsx
var import_jsx_runtime62 = require("react/jsx-runtime"), ListPodcasts = ({ podcasts, artwork }) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(List_default, {
  children: podcasts == null ? void 0 : podcasts.map(
    (podcast) => podcast.title && podcast.waveform ? /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(ListPodcastsItem_default, {
      podcast,
      artworkFallback: artwork
    }, podcast.id) : null
  )
}), ListPodcasts_default = ListPodcasts;

// app/hooks/queries/usePlaylistQuery.ts
var import_client7 = require("@apollo/client");

// app/queries/playlists.ts
var import_client6 = require("@apollo/client");

// app/gql/queries/playlist.gql
var playlist_default = `query PlaylistQuery($profile: String!, $name: String!) {
  playlist(profile: $profile, name: $name) {
    ...PlaylistFragment
  }
}
`;

// app/gql/fragments/trackSnippet.gql
var trackSnippet_default = `fragment TrackSnippetFragment on Track {
  id
  title
  genre
  description
  artwork
  date
  uri
  url
  duration
  waveform
}
`;

// app/gql/fragments/playlist.gql
var playlist_default2 = `fragment PlaylistFragment on Playlist {
  id
  artwork
  tracks {
    ...TrackSnippetFragment
  }
}
`;

// app/queries/playlists.ts
var playlistGqlQuery = import_client6.gql`
  ${trackSnippet_default}
  ${playlist_default2}
  ${playlist_default}
`, runPlaylistQuery = async (name) => await runQuery(
  playlistGqlQuery,
  {
    profile,
    name
  }
);

// app/hooks/queries/usePlaylistQuery.ts
var usePlaylistQuery = (name) => (0, import_client7.useQuery)(playlistGqlQuery, {
  variables: {
    profile,
    name
  }
});

// app/components/organisms/HandlerContent/HandlerContent.tsx
var import_react48 = require("react"), import_jsx_runtime63 = require("react/jsx-runtime"), HandlerContent = ({ children, loader: loader7, loading }) => loading ? /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_jsx_runtime63.Fragment, {
  children: loader7
}) : /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react48.Suspense, {
  fallback: loader7,
  children
}), HandlerContent_default = HandlerContent;

// app/components/atoms/Spinner/Spinner.tsx
var import_clsx20 = require("clsx"), import_jsx_runtime64 = require("react/jsx-runtime"), Spinner = ({ variant = "md" }) => /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", {
  className: (0, import_clsx20.clsx)({
    " animate-spin ease-linear border-t-neutral-300 rounded-full border-8 border-t-8 border-gray-800": !0,
    "w-64 h-64": variant === "xl",
    "w-48 h-48": variant === "lg",
    "w-24 h-24": variant === "md",
    "w-12 h-12": variant === "sm",
    "w-4 h-4": variant === "xs"
  })
}), Spinner_default = Spinner;

// app/components/organisms/Loader/Loader.tsx
var import_jsx_runtime65 = require("react/jsx-runtime"), Loader = ({ mention }) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", {
  className: "flex items-center justify-center w-full h-[50vh]",
  children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", {
    className: "flex flex-col items-center justify-center w-full o-16",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Spinner_default, {
        variant: "lg"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("h3", {
        className: "w-full text-center",
        children: mention
      })
    ]
  })
}), Loader_default = Loader;

// app/components/pages/PodcastsPage/PodcastsPage.tsx
var import_jsx_runtime66 = require("react/jsx-runtime"), PodcastsPage = () => {
  var _a, _b;
  let { data, loading } = usePlaylistQuery("dj-sets");
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(HandlerContent_default, {
    loading: !data && loading,
    loader: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Loader_default, {
      mention: "Please wait while we're chasing podcasts..."
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ListPodcasts_default, {
      artwork: (_a = data == null ? void 0 : data.playlist) == null ? void 0 : _a.artwork,
      podcasts: (_b = data == null ? void 0 : data.playlist) == null ? void 0 : _b.tracks
    })
  });
}, PodcastsPage_default = PodcastsPage;

// app/routes/podcasts/index.tsx
var import_jsx_runtime67 = require("react/jsx-runtime"), loader5 = async ({ request }) => {
  let { data, error } = await runPlaylistQuery("dj-sets");
  if (!data || error)
    throw new Response("Not Found", {
      status: 404
    });
  let { playlist } = data;
  return {
    playlist
  };
};
function Podcast() {
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(PodcastsPage_default, {});
}

// app/routes/releases/index.tsx
var releases_exports = {};
__export(releases_exports, {
  default: () => Releases
});

// app/hooks/queries/useReleasesQuery.ts
var import_client9 = require("@apollo/client");

// app/queries/releases.ts
var import_client8 = require("@apollo/client");

// app/gql/queries/releases.gql
var releases_default = `query ReleasesQuery($profile: String!) {
  releases(profile: $profile) {
    ...ReleaseSnippetFragment
  }
}
`;

// app/gql/fragments/releases.gql
var releases_default2 = `fragment ReleaseSnippetFragment on Release {
  _id
  title
  releaseDate
  role
  year
  thumb
  label
  tracklist {
    title
  }
  discogs
  notes
}
`;

// app/queries/releases.ts
var releasesGqlQuery = import_client8.gql`
  ${releases_default2}
  ${releases_default}
`;

// app/hooks/queries/useReleasesQuery.ts
var useReleasesQuery = () => (0, import_client9.useQuery)(releasesGqlQuery, {
  variables: {
    profile
  }
});

// app/components/organisms/ListReleasesItem/ListReleasesItem.tsx
var import_dayjs = __toESM(require("dayjs")), import_jsx_runtime68 = require("react/jsx-runtime"), ListReleasesItem = ({ release }) => {
  let { title, _id, releaseDate, role, thumb, label, discogs } = release, artwork = thumb || "";
  return title ? /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(ListItem_default2, {
    thumbnail: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(BackgroundImage_default, {
      className: "items-center justify-center w-24 h-24 md:w-32 md:h-32 ",
      src: artwork
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(ListItemSnippet_default, {
      title,
      href: `${_id}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", {
          className: "w-full h-14",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("p", {
              className: "text-sm italic text-right",
              children: label
            }),
            /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("p", {
              className: "text-sm italic text-right",
              children: [
                role,
                " - ",
                `Released on ${(0, import_dayjs.default)(releaseDate).format("DD/MM/YYYY")}`
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", {
          className: "w-full",
          children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("p", {
            className: "hidden text-sm italic text-right md:block",
            children: discogs && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Anchor_default, {
              className: "text-sm",
              href: discogs,
              children: "Buy on Discogs"
            })
          })
        })
      ]
    })
  }) : null;
}, ListReleasesItem_default = ListReleasesItem;

// app/components/organisms/ListReleases/ListReleases.tsx
var import_jsx_runtime69 = require("react/jsx-runtime"), ListReleases = ({ releases }) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(List_default, {
  children: releases == null ? void 0 : releases.map(
    (release) => release.title ? /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(ListReleasesItem_default, {
      release
    }, release._id) : null
  )
}), ListReleases_default = ListReleases;

// app/components/pages/ReleasesPage/ReleasesPage.tsx
var import_jsx_runtime70 = require("react/jsx-runtime"), ReleasesPage = () => {
  let { data, loading } = useReleasesQuery();
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(HandlerContent_default, {
    loading: !data && loading,
    loader: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(Loader_default, {
      mention: "Please wait while we're chasing releases..."
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(ListReleases_default, {
      releases: data == null ? void 0 : data.releases
    })
  });
}, ReleasesPage_default = ReleasesPage;

// app/routes/releases/index.tsx
var import_jsx_runtime71 = require("react/jsx-runtime");
function Releases() {
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(ReleasesPage_default, {});
}

// app/routes/podcasts/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => Podcast2
});
var import_react52 = require("@remix-run/react");

// app/hooks/queries/usePlaylistTrackQuery.ts
var import_client11 = require("@apollo/client");

// app/queries/playlistTrack.ts
var import_client10 = require("@apollo/client");

// app/gql/queries/track.gql
var track_default = `query PlaylistTrackQuery($profile: String!, $trackId: String!) {
  playlistTrack(profile: $profile, trackId: $trackId) {
    ...TrackFragment
  }
}
`;

// app/gql/fragments/track.gql
var track_default2 = `fragment TrackFragment on Track {
  ...TrackSnippetFragment
  soundcloud
  download
  downloadable
  license
  stats {
    count
    downloads
  }
  taglist
  tracklist
  likes {
    id
    avatar
    userName
    soundcloud
    uri
  }
  comments {
    id
    createdAt
    body
    user {
      avatar
      userName
      soundcloud
      uri
    }
  }
}
`;

// app/queries/playlistTrack.ts
var playlistTrackGqlQuery = import_client10.gql`
  ${trackSnippet_default}
  ${track_default2}
  ${track_default}
`;

// app/hooks/queries/usePlaylistTrackQuery.ts
var usePlaylistTrackQuery = (trackId) => (0, import_client11.useQuery)(
  playlistTrackGqlQuery,
  {
    variables: {
      profile,
      trackId
    }
  }
);

// app/components/molecules/PageDetailHeader/PageDetailHeader.tsx
var import_hi = require("react-icons/hi");

// app/components/atoms/Title/Title.tsx
var import_jsx_runtime72 = require("react/jsx-runtime"), Title = ({ children, align }) => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("h1", {
  className: `h-8 text-gray-400 font-semibold leading-6 uppercase inline-flex items-center justify-end text-md text-${align}`,
  children
}), Title_default = Title;

// app/components/molecules/PageDetailHeader/PageDetailHeader.tsx
var import_react49 = require("@remix-run/react"), import_jsx_runtime73 = require("react/jsx-runtime"), PageDetailHeader = ({ title, url }) => /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", {
  className: "z-10 flex justify-between w-full h-16 pt-4 pr-6 max-md:absolute",
  children: [
    url && /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_react49.Link, {
      to: url,
      className: "flex items-center justify-center w-4 h-8 text-lg font-semibold text-white cursor-pointer md:text-md md:w-16 md:ml-40",
      children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_hi.HiArrowLeft, {})
    }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Title_default, {
      align: "right",
      children: title
    })
  ]
}), PageDetailHeader_default = PageDetailHeader;

// app/components/atoms/ImgIcon/ImgIcon.tsx
var import_jsx_runtime74 = require("react/jsx-runtime"), ImgIcon = ({ icon, alt, size = 30, isInverted }) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("img", {
  src: icon,
  alt,
  width: size,
  style: { filter: isInverted ? "invert(1)" : "invert(0)" }
}), ImgIcon_default = ImgIcon;

// app/components/atoms/LinkIcon/LinkIcon.tsx
var import_jsx_runtime75 = require("react/jsx-runtime"), LinkIcon = ({ url, icon }) => /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("a", {
  href: url,
  target: "_blank",
  className: "flex items-center justify-end w-12 h-12 text-white transition-opacity cursor-pointer text-md duration-50 opacity-70 hover:opacity-90",
  rel: "noreferrer",
  children: icon
}), LinkIcon_default = LinkIcon;

// app/components/molecules/ListLinkIcons/ListLinkIcons.tsx
var import_jsx_runtime76 = require("react/jsx-runtime"), ListLinkIcons = ({ linkIcons }) => /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", {
  className: "flex justify-end gap-4",
  children: linkIcons.map((iconLink) => /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(LinkIcon_default, {
    ...iconLink
  }, iconLink.url))
}), ListLinkIcons_default = ListLinkIcons;

// app/components/layouts/PageDetailLayout/PageDetailLayout.tsx
var import_jsx_runtime77 = require("react/jsx-runtime"), PageDetailLayout = ({
  thumbnail,
  children,
  linkIcons
}) => /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(ListItem_default2, {
  thumbnail,
  children: /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", {
    className: "flex flex-col justify-between flex-auto",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", {
        className: "mb-2",
        children
      }),
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(ListLinkIcons_default, {
        linkIcons
      })
    ]
  })
}), PageDetailLayout_default = PageDetailLayout;

// app/icons/soundcloud.svg
var soundcloud_default = "/build/_assets/soundcloud-OWLGFHJ5.svg";

// app/components/organisms/PodcastDetails/PodcastDetails.tsx
var import_bs = require("react-icons/bs"), import_dayjs2 = __toESM(require("dayjs"));
var import_jsx_runtime78 = require("react/jsx-runtime"), PodcastDetails = ({ podcast }) => {
  let {
    id,
    artwork,
    soundcloud,
    date,
    duration,
    license,
    downloadable,
    download
  } = podcast, { config } = useConfigContext(), apiUrl = (config == null ? void 0 : config.apiEndpoint) || "", linkIcons = [
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(ImgIcon_default, {
        icon: soundcloud_default,
        alt: "Soundcloud Icon",
        isInverted: !0
      }),
      url: soundcloud || ""
    }
  ];
  if (downloadable && download) {
    let url = `${apiUrl}/cyberlife/playlists/${id}/download`;
    linkIcons.push({
      icon: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_bs.BsDownload, {}),
      url
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(PageDetailLayout_default, {
    thumbnail: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(Thumbnail_default, {
      variant: "wider",
      src: artwork || "",
      children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(PodcastActionPlayContainer_default, {
        track: podcast
      })
    }),
    linkIcons: linkIcons.reverse(),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(Text_default.RightItalic, {
        children: [
          "Published on ",
          date ? (0, import_dayjs2.default)(date).format("DD/MM/YYYY") : "Soundcloud"
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(Text_default.RightItalic, {
        children: duration && ` Duration: ${new Date(duration).toISOString().substring(11, 11 + 8)}`
      }),
      /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(Text_default.RightItalic, {
        children: license
      })
    ]
  });
}, PodcastDetails_default = PodcastDetails;

// app/utils/html.ts
var import_html_react_parser = __toESM(require("html-react-parser")), import_dompurify = require("dompurify"), getSanitizedHtml = (html, strict = !1) => (0, import_dompurify.sanitize)(html, {
  ALLOWED_TAGS: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "p",
    strict ? null : "a",
    "ul",
    "ol",
    "nl",
    "li",
    "b",
    "i",
    "u",
    "strong",
    "em",
    "strike",
    "code",
    "hr",
    "br",
    "div",
    "table",
    "thead",
    "caption",
    "tbody",
    "article",
    "section",
    "aside",
    "tr",
    "th",
    "td",
    "pre",
    "cite",
    strict ? null : "video",
    strict ? null : "source",
    strict ? null : "img"
  ].filter((d) => !!d),
  ALLOWED_ATTR: strict ? ["style"] : [
    "href",
    "name",
    "target",
    "rel",
    "class",
    "cite",
    "type",
    "src",
    "alt",
    "width",
    "height",
    "style",
    "controls",
    "muted"
  ]
}), parseHtml = (html) => (0, import_html_react_parser.default)(getSanitizedHtml(html)), toHtml = (html, className) => html.replace(
  /(https?:\/\/(?:www\.|(?!www) | (bit.ly))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gim,
  `<a ${className ? `class="${className}"` : ""} rel="external nofollow" target="_blank" href="$1">$1</a>`
).replace('href="www', 'href="https://www').replace('href="bit.ly', 'href="https://bit.ly').replace(/(\n)/g, "<br />");

// app/components/organisms/DisplayPodcastTracklist/DisplayPodcastTracklist.tsx
var import_jsx_runtime79 = require("react/jsx-runtime"), DisplayPodcastTracklist = ({
  tracklist
}) => /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("ul", {
  className: "p-0 m-0",
  children: tracklist == null ? void 0 : tracklist.map((track, index) => /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("li", {
    className: "p-0 m-0 list-none",
    children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(Text_default, {
      children: [
        index + 1,
        ". ",
        track
      ]
    })
  }, `tracklist__${track}`))
}), DisplayPodcastTracklist_default = DisplayPodcastTracklist;

// app/hooks/useDynamicSource.ts
var import_react50 = require("react"), useDynamicSource = (src, placeholder) => {
  let [img, setImg] = (0, import_react50.useState)(placeholder);
  return (0, import_react50.useEffect)(() => {
    fetch(src, {
      mode: "cors"
    }).then(async (response) => {
      if (response.status === 200 || response.status === 201) {
        let imgSrc = URL.createObjectURL(await response.blob());
        setImg(imgSrc);
      }
    }).catch(() => setImg(placeholder));
  }, [placeholder, src]), img;
};

// app/components/atoms/Avatar/Avatar.tsx
var import_jsx_runtime80 = require("react/jsx-runtime"), Avatar = ({ src, alt }) => {
  let img = useDynamicSource(src, "https://www.belin.re/wp-content/uploads/2018/11/default-avatar-600x600.png");
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("img", {
    src: img,
    alt,
    className: "w-8 h-8 border-2 border-gray-400 rounded-full"
  });
}, Avatar_default = Avatar;

// app/icons/avatar.png
var avatar_default = "/build/_assets/avatar-TMSQGAKT.png";

// app/components/organisms/ListPodcastLikesItem/ListPodcastLikesItem.tsx
var import_jsx_runtime81 = require("react/jsx-runtime"), ListPodcastLikesItem = ({ like }) => /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("a", {
  target: "_blank",
  href: like.soundcloud || "#",
  rel: "noreferrer",
  children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(Avatar_default, {
    src: like.avatar || avatar_default,
    alt: like.userName || "Soundcloud user"
  })
}), ListPodcastLikesItem_default = ListPodcastLikesItem;

// app/components/organisms/ListPodcastLikes/ListPodcastLikes.tsx
var import_jsx_runtime82 = require("react/jsx-runtime"), ListPodcastLikes = ({ likes }) => /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("ul", {
  className: "flex flex-wrap gap-1",
  children: likes.map(
    (like) => like && /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("li", {
      className: "px-1 py-1 m-0 list-none",
      children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(ListPodcastLikesItem_default, {
        like
      })
    }, like.id)
  )
}), ListPodcastLikes_default = ListPodcastLikes;

// app/components/molecules/WrapperListings/WrapperListings.tsx
var import_jsx_runtime83 = require("react/jsx-runtime"), WrapperListings = ({ title, children }) => /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", {
  className: "w-full o-2",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Text_default.Sm, {
      children: title
    }),
    children
  ]
}), WrapperListings_default = WrapperListings;

// app/components/organisms/DisplayPodcastLikes/DisplayPodcastLikes.tsx
var import_jsx_runtime84 = require("react/jsx-runtime"), DisplayPodcastLikes = ({ likes }) => likes.length ? /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(WrapperListings_default, {
  title: `Supported by ${likes.length} music lovers:`,
  children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(ListPodcastLikes_default, {
    likes
  })
}) : null, DisplayPodcastLikes_default = DisplayPodcastLikes;

// app/components/atoms/Tag/Tag.tsx
var import_jsx_runtime85 = require("react/jsx-runtime"), Tag = ({ value, href }) => /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("a", {
  href: href || "",
  target: "_blank",
  className: "block px-2 py-1 text-sm text-gray-300 bg-gray-600 rounded hover:bg-gray-500 hover:text-gray-100 whitespace-nowrap",
  rel: "noreferrer",
  children: [
    "#",
    value
  ]
}), Tag_default = Tag;

// app/components/molecules/ListTag/ListTag.tsx
var import_jsx_runtime86 = require("react/jsx-runtime"), ListTag = ({ tags }) => /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("ul", {
  className: "flex flex-wrap gap-1",
  children: tags.map(
    (tag) => tag && /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("li", {
      className: "p-0 m-0 list-none",
      children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Tag_default, {
        ...tag
      })
    }, tag.value)
  )
}), ListTag_default = ListTag;

// app/components/organisms/ListPodcastCommentsItem/ListPodcastCommentsItem.tsx
var import_jsx_runtime87 = require("react/jsx-runtime"), ListPodcastCommentsItem = ({ comment }) => {
  var _a, _b;
  return !((_a = comment.user) != null && _a.soundcloud) || !comment.user.userName ? null : /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", {
    className: "flex p-1 bg-gray-600 bg-opacity-50 rounded",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", {
        className: "flex items-center justify-center w-12 h-12",
        children: comment.user.avatar && /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("a", {
          target: "_blank",
          href: comment.user.soundcloud,
          rel: "noreferrer",
          children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Avatar_default, {
            src: comment.user.avatar,
            alt: ((_b = comment.user) == null ? void 0 : _b.userName) || "Soundcloud user"
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", {
        className: "flex flex-col justify-center o-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("a", {
            href: comment.user.soundcloud,
            target: "_blank",
            className: "text-xs italic underline",
            rel: "noreferrer",
            children: comment.user.userName
          }),
          /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("p", {
            className: "p-0 m-0 text-sm italic",
            children: comment.body
          })
        ]
      })
    ]
  });
}, ListPodcastCommentsItem_default = ListPodcastCommentsItem;

// app/utils/business/filters.ts
var isCyberlife = (value) => /cyberlife/gim.test(value.toLocaleLowerCase()), getCyberlifeReleaseTracks = (tracks) => tracks.filter((track) => !track.title || !track.artists ? !1 : !!(isCyberlife(track.title) || track.artists.some((artist) => artist.name && isCyberlife(artist.name))));

// app/components/organisms/ListPodcastComments/ListPodcastComments.tsx
var import_jsx_runtime88 = require("react/jsx-runtime"), ListPodcastComments = ({ comments }) => /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("ul", {
  className: "o-2",
  children: comments.map(
    (comment) => {
      var _a;
      return ((_a = comment == null ? void 0 : comment.user) == null ? void 0 : _a.userName) && !isCyberlife(comment.user.userName) && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("li", {
        className: "p-0 m-0 list-none",
        children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(ListPodcastCommentsItem_default, {
          comment
        })
      }, comment.id);
    }
  )
}), ListPodcastComments_default = ListPodcastComments;

// app/components/organisms/DisplayPodcastComments/DisplayPodcastComments.tsx
var import_jsx_runtime89 = require("react/jsx-runtime"), DisplayPodcastComments = ({ comments }) => comments.length ? /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(WrapperListings_default, {
  title: `${comments.length} comments on soundcloud:`,
  children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(ListPodcastComments_default, {
    comments
  })
}) : null, DisplayPodcastComments_default = DisplayPodcastComments;

// app/components/organisms/PodcastDisplay/PodcastDisplay.tsx
var import_react51 = require("react"), import_jsx_runtime90 = require("react/jsx-runtime"), PodcastDisplay = ({ podcast }) => {
  let { title, description, tracklist, likes, comments, taglist } = podcast, tags = (0, import_react51.useMemo)(
    () => (taglist || []).map((tag) => ({
      value: tag,
      href: `https://soundcloud.com/tags/${tag}`
    })),
    [taglist]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", {
    className: "o-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(PageDetailHeaderPortal_default, {
        children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(PageDetailHeader_default, {
          title,
          url: "/"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(PodcastDetails_default, {
        podcast
      }),
      /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(PlayerPodcastTrackContainer_default, {
        track: podcast
      }),
      /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", {
        className: "pt-4 o-8",
        children: [
          description && /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(Text_default, {
            children: parseHtml(toHtml(description, "underline"))
          }),
          !!tracklist && /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(DisplayPodcastTracklist_default, {
            tracklist
          }),
          !!tags.length && /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(ListTag_default, {
            tags
          }),
          !!(likes != null && likes.length) && /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(DisplayPodcastLikes_default, {
            likes
          }),
          !!(comments != null && comments.length) && /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(DisplayPodcastComments_default, {
            comments
          })
        ]
      })
    ]
  });
}, PodcastDisplay_default = PodcastDisplay;

// app/components/atoms/ButtonLink/ButtonLink.tsx
var import_jsx_runtime91 = require("react/jsx-runtime"), ButtonLink = ({
  className,
  href,
  target = "_blank",
  children,
  rightIcon
}) => /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)(Anchor_default, {
  className,
  variant: "button",
  href,
  target,
  children: [
    children,
    rightIcon && /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("span", {
      className: "ml-2 min-w-[1rem]",
      children: rightIcon
    })
  ]
}), ButtonLink_default = ButtonLink;

// app/components/pages/PodcastPage/PodcastPage.tsx
var import_jsx_runtime92 = require("react/jsx-runtime"), PodcastPage = ({ id }) => {
  let { data, loading } = usePlaylistTrackQuery(id);
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(HandlerContent_default, {
    loading: !data && loading,
    loader: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Loader_default, {
      mention: "Please wait while we're chasing podcast..."
    }),
    children: data != null && data.playlistTrack ? /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(PodcastDisplay_default, {
      podcast: data == null ? void 0 : data.playlistTrack
    }) : /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(ErrorPage_default, {
      code: 404,
      message: "Podcast not found",
      extra: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(ButtonLink_default, {
        href: "/",
        children: "Check out existing podcasts"
      })
    })
  });
}, PodcastPage_default = PodcastPage;

// app/routes/podcasts/$id.tsx
var import_jsx_runtime93 = require("react/jsx-runtime");
function Podcast2() {
  let { id } = (0, import_react52.useParams)();
  return id ? /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(PodcastPage_default, {
    id
  }) : /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(PodcastsPage_default, {});
}

// app/routes/releases/$id.tsx
var id_exports2 = {};
__export(id_exports2, {
  default: () => Release
});
var import_react53 = require("@remix-run/react");

// app/hooks/queries/useReleaseQuery.ts
var import_client13 = require("@apollo/client");

// app/queries/release.ts
var import_client12 = require("@apollo/client");

// app/gql/queries/release.gql
var release_default = `query ReleaseQuery($profile: String!, $id: String!) {
  release(profile: $profile, id: $id) {
    ...ReleaseFragment
  }
}
`;

// app/gql/fragments/release.gql
var release_default2 = `fragment ReleaseFragment on Release {
  ...ReleaseSnippetFragment
  notes
  cat
  format
  role
  genre
  tracklist {
    position
    id
    title
    artists {
      name
      role
    }
    stream {
      id
      title
      artwork
      uri
      url
      waveform
      duration
    }
  }
}
`;

// app/queries/release.ts
var releaseGqlQuery = import_client12.gql`
  ${releases_default2}
  ${release_default2}
  ${release_default}
`;

// app/hooks/queries/useReleaseQuery.ts
var useReleaseQuery = (id) => (0, import_client13.useQuery)(releaseGqlQuery, {
  variables: {
    profile,
    id
  }
});

// app/icons/discogs.svg
var discogs_default = "/build/_assets/discogs-JPEYSIB5.svg";

// app/components/organisms/ReleaseDetails/ReleaseDetails.tsx
var import_dayjs3 = __toESM(require("dayjs"));
var import_jsx_runtime94 = require("react/jsx-runtime"), ReleaseDetails = ({ release }) => {
  let { thumb, discogs, releaseDate, cat, label, role, genre } = release, date = releaseDate ? (0, import_dayjs3.default)(releaseDate).format("DD/MM/YYYY") : release.year;
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(PageDetailLayout_default, {
    thumbnail: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Thumbnail_default, {
      variant: "wider",
      src: thumb || ""
    }),
    linkIcons: [
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(ImgIcon_default, {
          icon: discogs_default,
          alt: "Discogs Icon",
          isInverted: !0
        }),
        url: discogs || ""
      }
    ],
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(Text_default.RightItalic, {
        children: [
          role,
          " (",
          cat,
          ") - ",
          label
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(Text_default.RightItalic, {
        children: [
          "Published on ",
          date
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Text_default.RightItalic, {
        children: genre
      })
    ]
  });
}, ReleaseDetails_default = ReleaseDetails;

// app/hooks/player/useReleaseTrackPlayer.ts
var useReleaseTrackPlayer = (track, releaseId) => {
  let contexts = {
    desktop: [`/releases/${releaseId}`],
    mobile: []
  }, toBuffer = getTrackTobuffer(track, contexts);
  return useBufferTrackPlayer(toBuffer);
};

// app/components/organisms/ReleaseActionPlayContainer/ReleaseActionPlayContainer.tsx
var import_jsx_runtime95 = require("react/jsx-runtime"), ReleaseActionPlayContainer = ({
  track,
  id
}) => {
  let { isPlaying, togglePlay } = useReleaseTrackPlayer(track, id);
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ActionPlay_default, {
    isPlaying,
    onChange: togglePlay
  });
}, ReleaseActionPlayContainer_default = ReleaseActionPlayContainer;

// app/components/organisms/PlayerReleaseTrackContainer/PlayerReleaseTrackContainer.tsx
var import_jsx_runtime96 = require("react/jsx-runtime"), PlayerReleaseTrackContainer = ({
  track,
  id
}) => {
  let { waveform } = track, { seek, load, setSeek: setSeek2, isPlaying } = useReleaseTrackPlayer(track, id), handleSeekChange = (seek2) => {
    setSeek2(seek2, !0);
  };
  return waveform ? /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(PlayerTrack_default, {
    waveform,
    load,
    seek,
    isPlaying,
    onSeekChange: handleSeekChange
  }) : null;
}, PlayerReleaseTrackContainer_default = PlayerReleaseTrackContainer;

// app/components/organisms/ReleaseTracklistItem/ReleaseTracklistItem.tsx
var import_jsx_runtime97 = require("react/jsx-runtime"), ReleaseTracklistItem = ({
  track,
  thumb,
  id
}) => {
  let { title, stream } = track;
  if (!stream)
    return null;
  let { artwork } = stream;
  return /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(ListItem_default2, {
    thumbnail: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(Thumbnail_default, {
      src: artwork || thumb || "",
      children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(ReleaseActionPlayContainer_default, {
        track: stream,
        id
      })
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(ListItemSnippet_default, {
      title: title || "",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("div", {
          className: "w-full h-16"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("div", {
          className: "max-md:hidden",
          children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(PlayerReleaseTrackContainer_default, {
            track: stream,
            id
          })
        })
      ]
    })
  });
}, ReleaseTracklistItem_default = ReleaseTracklistItem;

// app/components/organisms/ReleaseTracklist/ReleaseTracklist.tsx
var import_jsx_runtime98 = require("react/jsx-runtime"), ReleaseTracklist = ({ tracks, thumb, id }) => {
  let cybertracks = getCyberlifeReleaseTracks(tracks);
  return /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(List_default, {
    children: cybertracks.map(
      (track) => id && /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(ReleaseTracklistItem_default, {
        id,
        track,
        thumb
      }, track.id)
    )
  });
}, ReleaseTracklist_default = ReleaseTracklist;

// app/components/organisms/ReleaseDisplay/ReleaseDisplay.tsx
var import_jsx_runtime99 = require("react/jsx-runtime"), ReleaseDisplay = ({ release }) => /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)("div", {
  className: "o-4",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(PageDetailHeaderPortal_default, {
      children: /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(PageDetailHeader_default, {
        title: release.title,
        url: "/releases"
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(ReleaseDetails_default, {
      release
    }),
    /* @__PURE__ */ (0, import_jsx_runtime99.jsx)("div", {
      className: "py-4",
      children: /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(Text_default.RightItalic, {
        children: release.notes
      })
    }),
    release.tracklist && /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(ReleaseTracklist_default, {
      id: release._id,
      tracks: release.tracklist,
      thumb: release.thumb
    })
  ]
}), ReleaseDisplay_default = ReleaseDisplay;

// app/components/pages/ReleasePage/ReleasePage.tsx
var import_jsx_runtime100 = require("react/jsx-runtime"), ReleasePage = ({ id }) => {
  let { data, loading } = useReleaseQuery(id);
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(HandlerContent_default, {
    loading: !data && loading,
    loader: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(Loader_default, {
      mention: "Please wait while we're chasing release..."
    }),
    children: data != null && data.release ? /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(ReleaseDisplay_default, {
      release: data.release
    }) : /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(ErrorPage_default, {
      code: 404,
      message: "Release not found",
      extra: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(ButtonLink_default, {
        href: "/releases",
        children: "Check out releases"
      })
    })
  });
}, ReleasePage_default = ReleasePage;

// app/routes/releases/$id.tsx
var import_jsx_runtime101 = require("react/jsx-runtime");
function Release() {
  let { id } = (0, import_react53.useParams)();
  return id ? /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(ReleasePage_default, {
    id
  }) : /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(ReleasesPage_default, {});
}

// app/routes/gigs/index.tsx
var gigs_exports = {};
__export(gigs_exports, {
  default: () => Releases2
});

// app/components/organisms/ListEvents/ListEvents.tsx
var import_dayjs5 = __toESM(require("dayjs"));

// app/components/organisms/ListEventsItem/ListEventsItem.tsx
var import_dayjs4 = __toESM(require("dayjs"));
var import_jsx_runtime102 = require("react/jsx-runtime"), ListEventsItem = ({ event }) => {
  let { _id, flyer, title, date, address, country } = event;
  return title ? /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(ListItem_default2, {
    thumbnail: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(Thumbnail_default, {
      variant: "large",
      src: (flyer == null ? void 0 : flyer.front) || ""
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(ListItemSnippet_default, {
      title,
      href: `${_id}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)("div", {
        className: "w-full h-14",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("p", {
            className: "text-sm italic text-right",
            children: date && (0, import_dayjs4.default)(date).format("DD MMMM YYYY")
          }),
          /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)("p", {
            className: "text-sm italic text-right",
            children: [
              address,
              " ",
              country && `- ${country}`
            ]
          })
        ]
      })
    })
  }) : null;
}, ListEventsItem_default = ListEventsItem;

// app/components/organisms/ListEventsEmpty/ListEventsEmpty.tsx
var import_react54 = require("@remix-run/react"), import_jsx_runtime103 = require("react/jsx-runtime"), ListEventsEmpty = ({ ...props }) => /* @__PURE__ */ (0, import_jsx_runtime103.jsxs)("div", {
  className: "flex gap-8 py-2 md:py-8",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime103.jsxs)("div", {
      className: "relative justify-end flex-auto h-24 mt-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime103.jsx)("p", {
          className: "text-lg white text-text-right md:text-xl",
          children: "No future gigs at the moment"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime103.jsxs)("p", {
          className: "mt-4 text-sm text-white md:text-right max-md:absolute max-md:w-screen sm:text-md md:text-lg",
          children: [
            "contact / booking :",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(import_react54.Link, {
              to: "/contact",
              className: "underline",
              children: "booking@cyberlife-music.com"
            })
          ]
        })
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime103.jsx)("div", {
      className: "h-full",
      children: /* @__PURE__ */ (0, import_jsx_runtime103.jsx)("p", {
        className: "text-white text-[60px] md:text-xxl leading-[1] w-12",
        children: ":("
      })
    })
  ]
}), ListEventsEmpty_default = ListEventsEmpty;

// app/components/organisms/ListEvents/ListEvents.tsx
var import_jsx_runtime104 = require("react/jsx-runtime"), ListEvents = ({ events }) => {
  let { forthcomingEvents, pastEvents } = (events || []).reduce(
    (acc, event) => {
      let date = event.date ? (0, import_dayjs5.default)(event.date) : null;
      return date && (date.isBefore((0, import_dayjs5.default)()) ? acc.pastEvents.push(event) : acc.forthcomingEvents.push(event)), acc;
    },
    {
      forthcomingEvents: [],
      pastEvents: []
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime104.jsxs)(List_default, {
    children: [
      forthcomingEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(ListEventsEmpty_default, {}) : forthcomingEvents.map(
        (event) => event.title ? /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(ListEventsItem_default, {
          event
        }, event._id) : null
      ),
      pastEvents == null ? void 0 : pastEvents.map(
        (event) => event.title ? /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(ListEventsItem_default, {
          event
        }, event._id) : null
      )
    ]
  });
}, ListEvents_default = ListEvents;

// app/hooks/queries/useEventsQuery.ts
var import_client15 = require("@apollo/client");

// app/queries/events.ts
var import_client14 = require("@apollo/client");

// app/gql/queries/events.gql
var events_default = `fragment EventSnippetFragment on Event {
  _id
  date
  title
  date
  country
  address
  flyer {
    front
  }
}

query EventsQuery($profile: String!) {
  events(profile: $profile) {
    ...EventSnippetFragment
  }
}
`;

// app/queries/events.ts
var eventsGqlQuery = import_client14.gql`
  ${events_default}
`;

// app/hooks/queries/useEventsQuery.ts
var useEventsQuery = () => (0, import_client15.useQuery)(eventsGqlQuery, {
  variables: {
    profile
  }
});

// app/components/organisms/ListEventsContainer/ListEventsContainer.tsx
var import_jsx_runtime105 = require("react/jsx-runtime"), ListEventsContainer = () => {
  let { data, loading } = useEventsQuery();
  return /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(HandlerContent_default, {
    loading: !data && loading,
    loader: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(Loader_default, {
      mention: "Please wait while we're chasing events..."
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(ListEvents_default, {
      events: data == null ? void 0 : data.events
    })
  });
}, ListEventsContainer_default = ListEventsContainer;

// app/components/pages/EventsPage/EventsPage.tsx
var import_jsx_runtime106 = require("react/jsx-runtime"), EventsPage = () => /* @__PURE__ */ (0, import_jsx_runtime106.jsx)("section", {
  children: /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(ListEventsContainer_default, {})
}), EventsPage_default = EventsPage;

// app/routes/gigs/index.tsx
var import_jsx_runtime107 = require("react/jsx-runtime");
function Releases2() {
  return /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(EventsPage_default, {});
}

// app/routes/gigs/$id.tsx
var id_exports3 = {};
__export(id_exports3, {
  default: () => Release2
});
var import_react61 = require("@remix-run/react");

// app/components/atoms/Icon/Icon.tsx
var import_clsx21 = __toESM(require("clsx")), import_jsx_runtime108 = require("react/jsx-runtime"), Icon = ({ icon, size, className }) => /* @__PURE__ */ (0, import_jsx_runtime108.jsx)("span", {
  className: (0, import_clsx21.default)("block", className),
  style: { width: size, fontSize: size },
  children: icon
}), Icon_default = Icon;

// app/components/atoms/Mapbox/Mapbox.component.tsx
var import_react_map_gl = __toESM(require("react-map-gl")), import_react55 = require("react");
var import_jsx_runtime109 = require("react/jsx-runtime"), Mapbox = ({
  children,
  width,
  height,
  zoom = 11,
  longitude,
  latitude,
  onZoomChanged,
  onCenterChanged,
  onMapRendered,
  onMapClicked
}) => {
  let {
    config: {
      mapbox: { accessToken, style }
    }
  } = useConfigContext(), onZoom = (0, import_react55.useCallback)(
    (event) => {
      onZoomChanged == null || onZoomChanged(event.target.getZoom());
    },
    [onZoomChanged]
  ), onDragEnd = (0, import_react55.useCallback)(
    (event) => {
      let center = event.target.getCenter(), coordinates = [center.lng, center.lat];
      onCenterChanged == null || onCenterChanged(coordinates);
    },
    [onCenterChanged]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(import_react_map_gl.default, {
    mapboxAccessToken: accessToken,
    mapStyle: style,
    style: { width, height },
    initialViewState: {
      longitude,
      latitude,
      zoom
    },
    attributionControl: !1,
    onZoom,
    onZoomEnd: onZoom,
    onDragEnd,
    onRender: onMapRendered,
    onClick: onMapClicked,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(import_react_map_gl.NavigationControl, {
        visualizePitch: !0,
        position: "top-left"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(import_jsx_runtime109.Fragment, {
        children
      })
    ]
  });
}, Mapbox_component_default = Mapbox;

// app/components/atoms/MapboxElements/MapboxElements.tsx
var import_react_map_gl2 = require("react-map-gl"), import_jsx_runtime110 = require("react/jsx-runtime"), Marker = (props) => /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(ClientOnly, {
  children: () => /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_react_map_gl2.Marker, {
    ...props
  })
});

// app/components/molecules/EventMap/EventMap.tsx
var import_tfi = require("react-icons/tfi"), import_react56 = require("react"), import_jsx_runtime111 = require("react/jsx-runtime"), EventMap = ({ location }) => {
  var _a, _b;
  let [longitude, latitude] = location.position, ref = (0, import_react56.useRef)(null), width = ((_b = (_a = ref.current) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.clientWidth) || "48rem";
  return /* @__PURE__ */ (0, import_jsx_runtime111.jsx)("div", {
    className: "w-full",
    ref,
    children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(Mapbox_component_default, {
      zoom: 14,
      width,
      height: 320,
      longitude,
      latitude,
      className: "h-80",
      children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(Marker, {
        style: { marginLeft: "32%", marginTop: "-320px" },
        longitude,
        latitude,
        children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(Icon_default, {
          size: 32,
          icon: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(import_tfi.TfiLocationPin, {})
        })
      })
    })
  });
}, EventMap_default = EventMap;

// app/components/organisms/CarouselContainer/CarouselContainer.tsx
var import_react59 = require("react");

// app/components/atoms/Carousel/Carousel.tsx
var import_react57 = require("react"), import_framer_motion5 = require("framer-motion"), import_jsx_runtime112 = require("react/jsx-runtime"), transition = {
  type: "spring",
  bounce: 0
}, Carousel = ({ index, children }) => {
  var _a;
  let childrens = (0, import_react57.useMemo)(() => import_react57.Children.toArray(children), [children]), containerRef = (0, import_react57.useRef)(null), itemSize = ((_a = containerRef.current) == null ? void 0 : _a.clientWidth) || 0, width = (0, import_react57.useMemo)(
    () => itemSize * childrens.length,
    [childrens, itemSize]
  ), currentX = (0, import_react57.useMemo)(() => (-index + 0) * itemSize, [index, itemSize]), x = (0, import_framer_motion5.useMotionValue)(currentX);
  return (0, import_framer_motion5.animate)(x, currentX, transition), /* @__PURE__ */ (0, import_jsx_runtime112.jsxs)("div", {
    className: "relative w-full h-full overflow-hidden",
    ref: containerRef,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime112.jsx)("div", {
        className: "absolute w-full h-full blur"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(import_framer_motion5.AnimatePresence, {
        children: /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(import_framer_motion5.motion.div, {
          className: "absolute w-fit flex",
          dragElastic: 0.3,
          style: { x, width },
          children: childrens.map((child) => /* @__PURE__ */ (0, import_jsx_runtime112.jsx)("div", {
            style: { width: `${itemSize}px` },
            children: child
          }, child.toString()))
        })
      })
    ]
  });
}, Carousel_default = Carousel;

// app/components/atoms/CarouselControl/CarouselControl.tsx
var import_react58 = require("react"), import_clsx22 = require("clsx"), import_jsx_runtime113 = require("react/jsx-runtime"), CarouselControl = ({
  index,
  isActive,
  onChange
}) => {
  let handleChange = (0, import_react58.useCallback)(() => onChange == null ? void 0 : onChange(index), [onChange, index]), className = (0, import_clsx22.clsx)({
    "w-8 h-8 rounded-full bg-gray-500 cursor-pointer transition-all duration-150": !0,
    "bg-opacity-50": !isActive
  });
  return /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("button", {
    onClick: handleChange,
    className
  });
}, CarouselControl_default = CarouselControl;

// app/components/molecules/CarouselController/CarouselController.tsx
var import_jsx_runtime114 = require("react/jsx-runtime"), CarouselController = ({
  nbItems,
  index,
  onChange
}) => /* @__PURE__ */ (0, import_jsx_runtime114.jsx)("ul", {
  className: "flex justify-end h-8 gap-2",
  children: Array.from({ length: nbItems }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime114.jsx)("li", {
    className: "w-8 h-8 list-none",
    children: /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(CarouselControl_default, {
      isActive: index === i,
      index: i,
      onChange
    })
  }, `CarouselController__${i}`))
}), CarouselController_default = CarouselController;

// app/components/organisms/CarouselContainer/CarouselContainer.tsx
var import_jsx_runtime115 = require("react/jsx-runtime"), CarouselContainer = ({ children }) => {
  let [currentIndex, setCurrentIndex] = (0, import_react59.useState)(0), nbItems = import_react59.Children.toArray(children).length;
  return /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)("div", {
    className: "flex flex-col items-end justify-end w-full h-80 o-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(Carousel_default, {
        nbItems,
        index: currentIndex,
        children
      }),
      /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(CarouselController_default, {
        nbItems,
        index: currentIndex,
        onChange: setCurrentIndex
      })
    ]
  });
}, CarouselContainer_default = CarouselContainer;

// app/components/organisms/CarouselEvent/CarouselEvent.tsx
var import_react60 = require("react"), import_jsx_runtime116 = require("react/jsx-runtime"), CarouselEvent = ({ event }) => {
  let { flyer, location } = event, { front } = flyer, [map, setMap] = (0, import_react60.useState)();
  return (0, import_react60.useEffect)(() => {
    setMap(location != null && location.position ? /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(EventMap_default, {
      location
    }) : void 0);
  }, [location]), /* @__PURE__ */ (0, import_jsx_runtime116.jsx)("div", {
    className: "flex justify-end w-full",
    children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)("div", {
      className: "w-[48rem]",
      children: /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(CarouselContainer_default, {
        children: [
          front ? /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(BackgroundImage_default, {
            src: front
          }) : null,
          map
        ]
      })
    })
  });
}, CarouselEvent_default = CarouselEvent;

// app/components/organisms/EventDisplay/EventDisplay.tsx
var import_dayjs6 = __toESM(require("dayjs")), import_jsx_runtime117 = require("react/jsx-runtime"), EventDisplay = ({ event }) => {
  let { title, date, time, address, cost, lineup } = event;
  return /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)("div", {
    className: "o-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(PageDetailHeaderPortal_default, {
        children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(PageDetailHeader_default, {
          title,
          url: "/gigs"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(CarouselEvent_default, {
        event
      }),
      /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("div", {
        className: "flex justify-end w-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)("div", {
          className: "flex justify-center gap-4 w-[48rem]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)("div", {
              className: "w-1/2 o-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)(Text_default.RightMdSemiBold, {
                  children: [
                    date ? (0, import_dayjs6.default)(date).format("DD/MM/YYYY") : "",
                    " - ",
                    time == null ? void 0 : time.begin
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(Text_default.Right, {
                  children: address
                }),
                /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)(Text_default.Right, {
                  children: [
                    "Price: ",
                    cost
                  ]
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)("div", {
              className: "w-1/2 o-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(Text_default.MdSemiBold, {
                  children: "Lineup:"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("div", {
                  children: lineup == null ? void 0 : lineup.map((artist) => /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(Text_default.Semibold, {
                    children: artist
                  }, artist))
                })
              ]
            })
          ]
        })
      })
    ]
  });
}, EventDisplay_default = EventDisplay;

// app/hooks/queries/useEventQuery.ts
var import_client17 = require("@apollo/client");

// app/queries/event.ts
var import_client16 = require("@apollo/client");

// app/gql/queries/event.gql
var event_default = `fragment EventFragment on Event {
  ...EventSnippetFragment
  cost
  lineup
  promoter
  venue
  time {
    begin
    end
  }
  location {
    position
  }
  flyer {
    front
    back
  }
  links {
    event
    venue
  }
}

query EventQuery($profile: String!, $id: String!) {
  event(profile: $profile, eventId: $id) {
    ...EventFragment
  }
}
`;

// app/gql/fragments/events.gql
var events_default2 = `fragment EventSnippetFragment on Event {
  _id
  date
  title
  date
  country
  address
  flyer {
    front
  }
}

fragment EventFragment on Event {
  ...EventSnippetFragment
  cost
  lineup
  promoter
  venue
  time {
    begin
    end
  }
  location {
    position
  }
  flyer {
    front
    back
  }
  links {
    event
    venue
  }
}
`;

// app/queries/event.ts
var eventGqlQuery = import_client16.gql`
  ${events_default2}
  ${event_default}
`;

// app/hooks/queries/useEventQuery.ts
var useEventQuery = (id) => (0, import_client17.useQuery)(eventGqlQuery, {
  variables: {
    profile,
    id
  }
});

// app/components/pages/EventPage/EventPage.tsx
var import_jsx_runtime118 = require("react/jsx-runtime"), EventPage = ({ id }) => {
  let { data, loading } = useEventQuery(id);
  return /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(HandlerContent_default, {
    loading: !data && loading,
    loader: /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(Loader_default, {
      mention: "Please wait while we're chasing event..."
    }),
    children: data != null && data.event ? /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(EventDisplay_default, {
      event: data == null ? void 0 : data.event
    }) : /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(ErrorPage_default, {
      code: 404,
      message: "Gig not found",
      extra: /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(ButtonLink_default, {
        href: "/gigs",
        children: "Check out gigs"
      })
    })
  });
}, EventPage_default = EventPage;

// app/routes/gigs/$id.tsx
var import_jsx_runtime119 = require("react/jsx-runtime");
function Release2() {
  let { id } = (0, import_react61.useParams)();
  return id ? /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(EventPage_default, {
    id
  }) : /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(EventsPage_default, {});
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});

// app/components/pages/ContactPage/ContactPage.tsx
var import_react70 = require("react");

// app/hooks/mutations/useContactMutation.ts
var import_client18 = require("@apollo/client");

// app/gql/mutations/contact.gql
var contact_default = `mutation ContactMutation($profile: String!, $message: ContactDto!) {
  contact(profile: $profile, message: $message)
}
`;

// app/hooks/mutations/useContactMutation.ts
var contactMutationGql = import_client18.gql`
  ${contact_default}
`, useContactMutation = (onCompleted) => {
  let [mutation, mutationResults] = (0, import_client18.useMutation)(contactMutationGql, {
    onCompleted,
    errorPolicy: "all"
  });
  return [(message) => mutation({
    variables: {
      profile,
      message
    }
  }), mutationResults];
};

// app/components/organisms/FormContact/FormContact.tsx
var import_superstruct3 = require("@hookform/resolvers/superstruct"), import_react_hook_form4 = require("react-hook-form");

// app/components/organisms/FormContact/FormContact.schema.ts
var import_superstruct2 = require("superstruct");

// app/utils/validator.ts
var import_superstruct = require("superstruct");
var rule = (type, struct, message) => (0, import_superstruct.define)(type, (value) => typeof value == "string" && hasXss(value) ? "No XSS injection allowed!!" : (0, import_superstruct.is)(value, struct) ? !0 : message), hasXss = (value) => value !== getSanitizedHtml(value, !0), hasInsults = (value) => /(.*)(f[i]+ls de p[u, \*]+te|n[i, \*]+qu[e, é]+[r\s, \s]+t[a, on]+ [m, p]+[è, e, \*]+[re]+|c[o, \*]+nn[a, \*]+[r]+[d]+|e[m]+[e]+[r]+[d]+e|pet[i]+te m[e, é, \*]+rde|gr[o]+sse m[e, è, \*]+[r]+[d]+[e]+|\schi[a]+sse\s|\sf[u]+ck yo|[\s]h[i, \*]+jo de p[u]+t[a]+|\ss[a]+l[o]+[p]+e|\sp[u, \*]+te|enc[u, \*]+l|[\s, em]+m[e, \*]+[r, \*]+[d, \*]+[e]+\s|\ss[a]+l[a]+[u]+d\s|m[e]+rd[a]+sse|t[a]+p[e]+[t]+e|t[a]+fi[o]+[l]+e|\sd[u]+[m]+[b]+|st[u]+p[i]+d|cr[é, e]+t[i]+n|l[o]+ser|b[a]+bt[o]+u|\sn[é, e]+gro|\sj[e]+rk\s|\sc[a, \*]+[z, \*]+[o, \*]+\s|enf[a]+nt de p[u]+tain|nig[g]+a|\sc[u]+nt\s|\sdumbass\s|\ssc[u]+[m]+\s|\sp[u, \*]+ssy\s|\sf[a]+g\s|[\s]w[a]+nk[e]+r|b[o+]ugn[o]+ule|d[i]+ckh[e, \*]+[a, \*]+d|\spr[i, \*]+ck|b[a, \*, â]+t[a, \*]+rd|\sPD\s|e[m]+[e, \*]rde)/gim.test(
  value
), isValidEmail = (value) => /^[\w-+\.]+@([\w-]+\.)+[\w-]{2,6}$/gim.test(value), isForbiddenEmail = (value) => /(.*)(spam|0815.ru0clickemail.com|0-mail.com|0wnd.net|0wnd.org|10minutemail.com|20minutemail.com|2prong.com|3d-painting.com|4warding.com|4warding.net|4warding.org|9ox.net|a-bc.net|ag.us.to|amilegit.com|anonbox.net|anonymbox.com|antichef.com|antichef.net|antispam.de|baxomale.ht.cx|beefmilk.com|binkmail.com|bio-muesli.net|bobmail.info|bodhi.lawlita.com|bofthew.com|brefmail.com|bsnow.net|bugmenot.com|bumpymail.com|casualdx.com|chogmail.com|cool.fr.nf|correo.blogos.net|cosmorph.com|courriel.fr.nf|courrieltemporaire.com|curryworld.de|cust.in|dacoolest.com|dandikmail.com|deadaddress.com|despam.it|despam.it|devnullmail.com|dfgh.net|digitalsanctuary.com|discardmail.com|discardmail.de|disposableaddress.com|disposeamail.com|disposemail.com|dispostable.com|dm.w3internet.co.ukexample.com|dodgeit.com|dodgit.com|dodgit.org|dontreg.com|dontsendmespam.de|dump-email.info|dumpyemail.com|e4ward.com|email60.com|emailias.com|emailias.com|emailinfive.com|emailmiser.com|emailtemporario.com.br|emailwarden.com|enterto.com|ephemail.net|explodemail.com|fakeinbox.com|fakeinformation.com|fansworldwide.de|fastacura.com|filzmail.com|fixmail.tk|fizmail.com|frapmail.com|garliclife.com|gelitik.in|get1mail.com|getonemail.com|getonemail.net|girlsundertheinfluence.com|gishpuppy.com|goemailgo.com|great-host.in|greensloth.com|greensloth.com|gsrv.co.uk|guerillamail.biz|guerillamail.com|guerillamail.net|guerillamail.org|guerrillamail.biz|guerrillamail.com|guerrillamail.de|guerrillamail.net|guerrillamail.org|guerrillamailblock.com|haltospam.com|hidzz.com|hotpop.com|ieatspam.eu|ieatspam.info|ihateyoualot.info|imails.info|inboxclean.com|inboxclean.org|incognitomail.com|incognitomail.net|ipoo.org|irish2me.com|jetable.com|jetable.fr.nf|jetable.net|jetable.org|jnxjn.com|junk1e.com|kasmail.com|kaspop.com|klzlk.com|kulturbetrieb.info|kurzepost.de|kurzepost.de|lifebyfood.com|link2mail.net|litedrop.com|lookugly.com|lopl.co.cc|lr78.com|maboard.com|mail.by|mail.mezimages.net|mail4trash.com|mailbidon.com|mailcatch.com|maileater.com|mailexpire.com|mailin8r.com|mailinator.com|mailinator.net|mailinator2.com|mailincubator.com|mailme.lv|mailmetrash.com|mailmoat.com|mailnator.com|mailnull.com|mailzilla.org|mbx.cc|mega.zik.dj|meltmail.com|mierdamail.com|mintemail.com|mjukglass.nu|mobi.web.id|moburl.com|moncourrier.fr.nf|monemail.fr.nf|monmail.fr.nf|mt2009.com|mx0.wwwnew.eu|mycleaninbox.net|myspamless.com|mytempemail.com|mytrashmail.com|netmails.net|neverbox.com|no-spam.ws|nobulk.com|noclickemail.com|nogmailspam.info|nomail.xl.cx|nomail2me.com|nospam.ze.tc|nospam4.us|nospamfor.us|nowmymail.com|objectmail.com|obobbo.com|odaymail.com|onewaymail.com|ordinaryamerican.net|owlpic.com|pookmail.com|privymail.de|proxymail.eu|punkass.com|putthisinyourspamdatabase.com|quickinbox.com|rcpt.at|recode.me|recursor.net|regbypass.comsafe-mail.net|safetymail.info|sandelf.de|saynotospams.com|selfdestructingmail.com|sendspamhere.com|sharklasers.com|shieldedmail.com|shiftmail.com|skeefmail.com|slopsbox.com|slushmail.com|smaakt.naar.gravel|smellfear.com|snakemail.com|sneakemail.com|sofort-mail.de|sogetthis.com|soodonims.com|spam.la|spamavert.com|spambob.net|spambob.org|spambog.com|spambog.de|spambog.ru|spambox.info|spambox.us|spamcannon.com|spamcannon.net|spamcero.com|spamcorptastic.com|spamcowboy.com|spamcowboy.net|spamcowboy.org|spamday.com|spamex.com|spamfree.eu|spamfree24.com|spamfree24.de|spamfree24.eu|spamfree24.info|spamfree24.net|spamfree24.org|spamgourmet.com|spamgourmet.net|spamgourmet.org|spamherelots.com|spamhereplease.com|spamhole.com|spamify.com|spaminator.de|spamkill.info|spaml.com|spaml.de|spammotel.com|spamobox.com|spamspot.com|spamthis.co.uk|spamthisplease.com|speed.1s.fr|suremail.info|tempalias.com|tempe-mail.com|tempemail.biz|tempemail.com|tempemail.net|tempinbox.co.uk|tempinbox.com|tempomail.fr|temporaryemail.net|temporaryinbox.com|tempymail.com|thankyou2010.com|thisisnotmyrealemail.com|throwawayemailaddress.com|tilien.com|tmailinator.com|tradermail.info|trash-amil.com|trash-mail.at|trash-mail.com|trash-mail.de|trash2009.com|trashmail.at|trashmail.com|trashmail.me|trashmail.net|trashmailer.com|trashymail.com|trashymail.net|trillianpro.com|tyldd.com|tyldd.com|uggsrock.com|wegwerfmail.de|wegwerfmail.net|wegwerfmail.org|wh4f.org|whyspam.me|willselfdestruct.com|winemaven.info|wronghead.com|wuzupmail.net|xoxy.net|yogamaven.com|yopmail.com|yopmail.fr|yopmail.net|yuurok.com|zippymail.info|zoemail.com)/gi.test(
  value
);

// app/components/organisms/FormContact/FormContact.schema.ts
var refineEmail = (0, import_superstruct2.refine)((0, import_superstruct2.string)(), "email", (value) => value ? isValidEmail(value) ? isForbiddenEmail(value) ? "Your email is not allowed. No throwable or blacklisted email address allowed." : !0 : "Your email is not valid" : "Your email is required"), refineSubject = (0, import_superstruct2.refine)((0, import_superstruct2.nonempty)((0, import_superstruct2.string)()), "message", (value) => value ? value.length < 2 ? "Your subject must contain serious content with at least 2 characters." : value.length > 50 ? "Your subject can't contain more than 50 characters." : hasInsults(value) ? "Your subject contains insults and can't be sent. Please be polite!" : !0 : "Your subject is required."), refineMessage = (0, import_superstruct2.refine)((0, import_superstruct2.nonempty)((0, import_superstruct2.string)()), "message", (value) => value ? value.length < 15 ? "Your message must contain serious content with at least 15 characters." : value.length > 6e3 ? "Your message can't contain more than 6000 characters." : hasInsults(value) ? "Your message contains insults and can't be sent. Please be polite!" : !0 : "Your message is required."), refineHoneyPot = (0, import_superstruct2.refine)((0, import_superstruct2.optional)((0, import_superstruct2.string)()), "message", (value) => value ? "Please prove you're a human being or smarter species!" : !0), formContactSchema = (0, import_superstruct2.object)({
  name: rule("name", (0, import_superstruct2.nonempty)((0, import_superstruct2.string)()), "Your name is required"),
  email: refineEmail,
  subject: refineSubject,
  message: refineMessage,
  address: refineHoneyPot
});

// app/components/organisms/ControlledFieldInput/ControlledFieldInput.tsx
var import_react_hook_form = require("react-hook-form");

// app/components/atoms/Input/Input.tsx
var import_react63 = require("react"), import_react64 = require("react");

// app/hooks/useInputStyle.ts
var import_clsx23 = __toESM(require("clsx"));

// app/hooks/useToggleState.ts
var import_react62 = require("react"), useToggleState = (defaultState = !1) => {
  let [state, setState] = (0, import_react62.useState)(defaultState), setTrue = (0, import_react62.useCallback)(() => {
    setState(!0);
  }, []), setFalse = (0, import_react62.useCallback)(() => {
    setState(!1);
  }, []);
  return [state, setTrue, setFalse];
};

// app/hooks/useInputStyle.ts
var useInputStyle = (hasError, customClassName) => {
  let [isFocus, onFocus, onBlur] = useToggleState(!1);
  return {
    className: (0, import_clsx23.default)(
      "w-full rounded italic text-sm p-2 text-gray-400 placeholder-gray-500 leading-4 flex items-center border-none bg-opacity-80 outline-none transition-all duration-50",
      {
        "bg-gray-700": !isFocus && !hasError,
        "bg-gray-800": isFocus,
        "bg-red-900 bg-opacity-70 text-gray-300": !isFocus && hasError
      },
      customClassName
    ),
    onFocus,
    onBlur
  };
};

// app/components/atoms/Input/Input.tsx
var import_jsx_runtime120 = require("react/jsx-runtime"), Input = ({
  value,
  placeholder,
  hasError,
  onChange,
  onUnfocus = () => {
  },
  ...props
}) => {
  let handleChange = (e) => {
    let nextValue = e.currentTarget.value;
    onChange == null || onChange(nextValue);
  }, inputClassName = "h-10 leading-[3rem]", { className, onFocus, onBlur } = useInputStyle(
    hasError,
    inputClassName
  ), ref = (0, import_react64.useRef)();
  return (0, import_react63.useLayoutEffect)(() => {
    let current = ref.current;
    return current == null || current.addEventListener("blur", onUnfocus), () => {
      current == null || current.removeEventListener("blue", onUnfocus);
    };
  }, [onUnfocus]), /* @__PURE__ */ (0, import_jsx_runtime120.jsx)("input", {
    className,
    value,
    placeholder,
    onChange: handleChange,
    onFocus,
    onBlurCapture: onBlur,
    ref,
    ...props
  });
}, Input_default = Input;

// app/components/molecules/FieldWrapper/FieldWrapper.tsx
var import_framer_motion6 = require("framer-motion");

// app/components/atoms/LabelError/LabelError.tsx
var import_jsx_runtime121 = require("react/jsx-runtime"), LabelError = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime121.jsx)("p", {
  className: "h-4 px-0 mx-0 my-1 text-xs italic text-red-600 leading-thin",
  children
}), LabelError_default = LabelError;

// app/components/molecules/FieldWrapper/FieldWrapper.tsx
var import_jsx_runtime122 = require("react/jsx-runtime"), FieldWrapper = ({ children, error }) => /* @__PURE__ */ (0, import_jsx_runtime122.jsxs)(import_framer_motion6.motion.div, {
  transition: { duration: 0.3 },
  className: "flex flex-col w-full",
  children: [
    children,
    !!error && /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(LabelError_default, {
      children: error
    })
  ]
}), FieldWrapper_default = FieldWrapper;

// app/components/molecules/FieldInput/FieldInput.tsx
var import_react65 = require("react"), import_react66 = require("react"), import_jsx_runtime123 = require("react/jsx-runtime"), FieldInput = ({ error, ...props }) => {
  let [canShow, setShow] = (0, import_react65.useState)(!1);
  return (0, import_react66.useEffect)(() => {
    setShow(!0);
  }, []), canShow ? /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(FieldWrapper_default, {
    error,
    children: /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(Input_default, {
      hasError: !!error,
      ...props
    })
  }) : null;
}, FieldInput_default = FieldInput;

// app/components/organisms/ControlledFieldInput/ControlledFieldInput.tsx
var import_jsx_runtime124 = require("react/jsx-runtime"), ControlledFieldInput = ({
  name,
  control,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(import_react_hook_form.Controller, {
  control,
  name,
  render: ({ field, fieldState }) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(FieldInput_default, {
      ...field,
      error: (_a = fieldState.error) == null ? void 0 : _a.message,
      ...props
    });
  }
}), ControlledFieldInput_default = ControlledFieldInput;

// app/components/organisms/ControlledFieldInputAutoComplete/ControlledFieldInputAutoComplete.tsx
var import_react_hook_form2 = require("react-hook-form");

// app/components/atoms/AutoComplete/AutoComplete.tsx
var import_clsx24 = __toESM(require("clsx")), import_react67 = require("react"), import_jsx_runtime125 = require("react/jsx-runtime"), actionValues = {
  ArrowUp: -1,
  ArrowDown: 1
}, AutoComplete = ({
  values,
  onSelect,
  autoCompleteItem,
  disabled,
  size = "w-full"
}) => {
  let [hover, setHover] = (0, import_react67.useState)(0), isOpen = !!values.length, moveTo = (0, import_react67.useCallback)(
    (dy) => {
      setHover((hover2) => hover2 + dy === values.length ? 0 : hover2 + dy === -1 ? values.length - 1 : hover2 + dy);
    },
    [values.length]
  ), handleKeyboard = (0, import_react67.useCallback)(
    (e) => {
      disabled || (e.key === "Enter" && (e.preventDefault(), onSelect == null || onSelect(values[hover])), !(e.key !== "ArrowUp" && e.key !== "ArrowDown") && moveTo(actionValues[e.key]));
    },
    [disabled, hover, moveTo, onSelect, values]
  );
  return (0, import_react67.useLayoutEffect)(() => (window.document.addEventListener("keydown", handleKeyboard), () => {
    window.document.removeEventListener("keydown", handleKeyboard);
  }), [handleKeyboard]), /* @__PURE__ */ (0, import_jsx_runtime125.jsx)("div", {
    className: (0, import_clsx24.default)("relative", size),
    children: isOpen && !disabled && /* @__PURE__ */ (0, import_jsx_runtime125.jsx)("div", {
      className: "absolute flex flex-col gap-1 w-inherit",
      children: values.map(
        (value, index) => autoCompleteItem({
          value,
          isHover: hover === index,
          onClick: () => {
            onSelect == null || onSelect(value);
          }
        })
      )
    })
  });
}, AutoComplete_default = AutoComplete;

// app/components/atoms/AutoCompleteItem/AutoCompleteItem.tsx
var import_clsx25 = __toESM(require("clsx")), import_jsx_runtime126 = require("react/jsx-runtime"), AutoCompleteItem = ({
  value,
  isHover,
  onClick
}) => /* @__PURE__ */ (0, import_jsx_runtime126.jsx)("button", {
  type: "button",
  onClick,
  className: (0, import_clsx25.default)(
    "w-full h-8 p-2 text-xs border-none outline-none transition-all duration-25",
    {
      " text-gray-200 hover:bg-gray-800 hover:text-gray-400 bg-gray-600": !isHover,
      " text-gray-400 bg-gray-800 text-bold": isHover
    }
  ),
  children: value
}), AutoCompleteItem_default = AutoCompleteItem;

// app/components/organisms/FieldInputAutoComplete/FieldInputAutoComplete.tsx
var import_jsx_runtime127 = require("react/jsx-runtime"), FieldInputAutoComplete = ({
  size,
  values,
  value,
  onChange,
  ...props
}) => {
  let filteredValues = values.filter(
    (item) => value && value !== item && item.includes(value)
  ), [disabled, disable, enable] = useToggleState();
  return /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(ClientOnly, {
    children: () => /* @__PURE__ */ (0, import_jsx_runtime127.jsxs)("div", {
      className: size,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(FieldInput_default, {
          value,
          onChange,
          onFocus: enable,
          onUnfocus: () => {
            setTimeout(() => {
              disable();
            }, 100);
          },
          ...props,
          autoComplete: "off"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(AutoComplete_default, {
          values: filteredValues,
          size,
          disabled,
          onSelect: onChange,
          autoCompleteItem: (props2) => /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(AutoCompleteItem_default, {
            ...props2
          })
        })
      ]
    })
  });
}, FieldInputAutoComplete_default = FieldInputAutoComplete;

// app/components/organisms/ControlledFieldInputAutoComplete/ControlledFieldInputAutoComplete.tsx
var import_jsx_runtime128 = require("react/jsx-runtime"), ControlledFieldInputAutoComplete = ({
  name,
  control,
  values,
  placeholder,
  size
}) => /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(import_react_hook_form2.Controller, {
  control,
  name,
  render: ({ field, fieldState }) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(FieldInputAutoComplete_default, {
      ...field,
      error: (_a = fieldState.error) == null ? void 0 : _a.message,
      values,
      size,
      placeholder
    });
  }
}), ControlledFieldInputAutoComplete_default = ControlledFieldInputAutoComplete;

// app/components/organisms/ControlledFieldTextarea/ControlledFieldTextarea.tsx
var import_react_hook_form3 = require("react-hook-form");

// app/components/atoms/Textarea/Textarea.tsx
var import_jsx_runtime129 = require("react/jsx-runtime"), Textarea = ({
  value,
  onChange,
  placeholder,
  hasError,
  ...props
}) => {
  let handleChange = (e) => {
    let nextValue = e.currentTarget.value;
    onChange == null || onChange(nextValue);
  }, textareaClassName = "min-h-[10rem]", { className, onFocus, onBlur } = useInputStyle(
    hasError,
    textareaClassName
  );
  return /* @__PURE__ */ (0, import_jsx_runtime129.jsx)("textarea", {
    value,
    onChange: handleChange,
    placeholder,
    className,
    onFocus,
    onBlurCapture: onBlur,
    ...props
  });
}, Textarea_default = Textarea;

// app/components/molecules/FieldTextarea/FieldTextarea.tsx
var import_jsx_runtime130 = require("react/jsx-runtime"), FieldTextarea = ({ error, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(FieldWrapper_default, {
  error,
  children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(Textarea_default, {
    hasError: !!error,
    ...props
  })
}), FieldTextarea_default = FieldTextarea;

// app/components/organisms/ControlledFieldTextarea/ControlledFieldTextarea.tsx
var import_jsx_runtime131 = require("react/jsx-runtime"), ControlledFieldTextarea = ({
  name,
  control,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_react_hook_form3.Controller, {
  control,
  name,
  render: ({ field, fieldState }) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(FieldTextarea_default, {
      ...field,
      error: (_a = fieldState.error) == null ? void 0 : _a.message,
      ...props
    });
  }
}), ControlledFieldTextarea_default = ControlledFieldTextarea;

// app/components/organisms/FormContact/FormContact.tsx
var import_io = require("react-icons/io");

// app/components/molecules/ButtonSubmit/ButtonSubmit.tsx
var import_react68 = require("react");
var import_jsx_runtime132 = require("react/jsx-runtime"), ButtonSubmit = ({
  rightIcon,
  loading,
  disabled,
  children
}) => {
  let icon = (0, import_react68.useMemo)(() => loading ? /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(Spinner_default, {
    variant: "xs"
  }) : rightIcon, [rightIcon, loading]);
  return /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(Button_default, {
    disabled: disabled || loading,
    type: "submit",
    rightIcon: icon,
    children
  });
}, ButtonSubmit_default = ButtonSubmit;

// app/hooks/useMobileVibration.ts
var import_react69 = require("react"), useMobileVibration = (canVibrate) => {
  let [vibrated, setVibrated] = (0, import_react69.useState)(canVibrate), vibrate = (0, import_react69.useCallback)(() => {
    navigator.vibrate && !vibrated && (navigator.vibrate(300), setTimeout(() => {
      setVibrated(!0);
    }, 10));
  }, [vibrated]);
  (0, import_react69.useEffect)(() => {
    canVibrate && vibrate();
  }, [canVibrate, vibrate]);
};

// app/components/organisms/FormContact/FormContact.tsx
var import_framer_motion7 = require("framer-motion"), import_framer_motion8 = require("framer-motion");

// app/hooks/useFluidTransition.ts
var defaultInitial = {
  y: -70,
  opacity: 0
}, defaultAnimate = {
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.15,
    delay: 0.25
  }
}, defaultExit = {
  y: -20,
  opacity: 0,
  transition: {
    duration: 0.1,
    delay: 0.05
  }
}, useFluidTransition = (animation) => (delay = 0.25, delayExit = defaultExit.transition.delay) => {
  var _a, _b;
  return {
    initial: (animation == null ? void 0 : animation.initial) || defaultInitial,
    animate: {
      ...(animation == null ? void 0 : animation.animate) || defaultAnimate,
      transition: {
        ...((_a = animation == null ? void 0 : animation.animate) == null ? void 0 : _a.transition) || defaultAnimate.transition,
        delay
      }
    },
    exit: {
      ...(animation == null ? void 0 : animation.exit) || defaultExit,
      transition: {
        ...((_b = animation == null ? void 0 : animation.exit) == null ? void 0 : _b.transition) || defaultExit.transition,
        delay: delayExit
      }
    }
  };
};

// app/components/organisms/FormContact/FormContact.tsx
var import_jsx_runtime133 = require("react/jsx-runtime"), FormContact = ({
  onSubmit,
  defaultValues,
  subjectSuggestions: subjectSuggestions2
}) => {
  let {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isSubmitted, isValid }
  } = (0, import_react_hook_form4.useForm)({
    defaultValues,
    reValidateMode: "onChange",
    resolver: (0, import_superstruct3.superstructResolver)(formContactSchema)
  });
  useMobileVibration(isSubmitted && !isValid);
  let submit = handleSubmit((values) => onSubmit(values)), transition2 = useFluidTransition();
  return /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_framer_motion8.AnimatePresence, {
    exitBeforeEnter: !0,
    children: /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", {
      className: "flex flex-col items-end justify-end w-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", {
          className: "w-full h-28",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("h1", {
              className: "mt-2 text-lg italic text-right",
              children: "Let's keep in touch!"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("p", {
              className: "italic text-right text-gray-400 text-md",
              children: [
                "You can contact me by this form or by mail at",
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("a", {
                  className: "underline",
                  href: "mailto:contact@cyberlife-music.com",
                  children: [
                    "contact",
                    /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("span", {
                      children: "@"
                    }),
                    "cyberlife-music.com"
                  ]
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("form", {
          onSubmit: submit,
          className: "w-full md:w-[40vw] o-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_framer_motion7.motion.div, {
              ...transition2(0.1),
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(ControlledFieldInput_default, {
                control,
                name: "name",
                placeholder: "Your name"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_framer_motion7.motion.div, {
              ...transition2(0.15),
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(ControlledFieldInput_default, {
                control,
                name: "email",
                type: "email",
                placeholder: "Your email"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_framer_motion7.motion.div, {
              ...transition2(0.2),
              className: "w-full md:w-[40vw]",
              children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(ControlledFieldInputAutoComplete_default, {
                control,
                name: "subject",
                placeholder: "Your subject",
                size: "w-full md:w-[40vw]",
                values: subjectSuggestions2
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_framer_motion7.motion.div, {
              ...transition2(0.25),
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(ControlledFieldTextarea_default, {
                control,
                name: "message",
                placeholder: "Your message"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_framer_motion7.motion.div, {
              ...transition2(0.3),
              className: "w-full",
              children: /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", {
                className: "flex justify-between h-12",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(ControlledFieldInput_default, {
                    autoComplete: "off",
                    autoCorrect: "off",
                    control,
                    name: "address",
                    type: "hidden"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(ButtonSubmit_default, {
                    loading: isSubmitting,
                    disabled: !isDirty,
                    rightIcon: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_io.IoMdSend, {}),
                    className: "w-24",
                    children: "SEND"
                  })
                ]
              })
            })
          ]
        })
      ]
    })
  });
}, FormContact_default = FormContact;

// app/components/organisms/FormContactContainer/FormContactContainer.tsx
var import_jsx_runtime134 = require("react/jsx-runtime"), subjectSuggestions = [
  "Collaboration request",
  "Dj set booking request",
  "Interview request",
  "Live act booking request",
  "Musical promotion request",
  "Musical promotion share",
  "Musical question",
  "Podcast request",
  "Premiere",
  "Production technical question",
  "Philosophy talk",
  "Remix request",
  "Release Request",
  "Track ID request",
  "Science computer question",
  "Just say hello and bring love"
], FormContactContainer = ({ onSuccess }) => {
  let [contact] = useContactMutation((data) => {
    data.contact && (onSuccess == null || onSuccess());
  });
  return /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(FormContact_default, {
    onSubmit: async (values) => {
      await contact(values);
    },
    subjectSuggestions,
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: ""
    }
  });
}, FormContactContainer_default = FormContactContainer;

// app/components/organisms/FormContactSuccess/FormContactSuccess.tsx
var import_framer_motion10 = require("framer-motion");

// app/components/atoms/AnimatedIconCheck/AnimatedIconCheck.tsx
var import_framer_motion9 = require("framer-motion"), import_jsx_runtime135 = require("react/jsx-runtime"), pathCircleVariants = {
  from: {
    opacity: 0,
    pathLength: 0
  },
  to: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}, pathCheckVariants = {
  from: {
    opacity: 0,
    pathLength: 0
  },
  to: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.8
    }
  }
}, AnimatedIconCheck = () => /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("div", {
  className: "App",
  children: /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 120 120",
    width: "120",
    height: "120",
    fill: "none",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_framer_motion9.motion.path, {
        d: "M105 60.5C105 69.8939 102.027 79.0468 96.5074 86.648C90.9876 94.2491 83.2039 99.9084 74.2712 102.816C65.3384 105.723 55.7148 105.728 46.7787 102.832C37.8425 99.9352 30.0522 94.285 24.5234 86.6904C18.9947 79.0957 16.0111 69.9463 16 60.5524C15.989 51.1585 18.951 42.0021 24.4618 34.3945C29.9727 26.7868 37.7497 21.1183 46.679 18.2007C55.6083 15.2831 65.2319 15.2661 74.1715 18.1521",
        stroke: "#CCCCCC",
        strokeWidth: "5",
        initial: "from",
        animate: "to",
        variants: pathCircleVariants
      }),
      /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_framer_motion9.motion.path, {
        d: "M31 57.8667L58.3285 84L103 28",
        stroke: "#CCCCCC",
        strokeWidth: "5",
        initial: "from",
        animate: "to",
        variants: pathCheckVariants
      })
    ]
  })
}), AnimatedIconCheck_default = AnimatedIconCheck;

// app/components/organisms/FormContactSuccess/FormContactSuccess.tsx
var import_jsx_runtime136 = require("react/jsx-runtime"), getAnimation = (i) => ({
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.3 + 0.2 * i
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    delay: 0.3 * i,
    transition: {
      duration: 0.25,
      delay: 0.1 * i
    }
  }
}), FormContactSuccess = ({ onHide }) => /* @__PURE__ */ (0, import_jsx_runtime136.jsxs)("div", {
  className: "w-full py-4 o-8",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(import_framer_motion10.motion.div, {
      exit: { opacity: 0 },
      transition: { duration: 0.5 },
      className: "flex items-center justify-center h-24",
      children: /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(AnimatedIconCheck_default, {})
    }),
    /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(import_framer_motion10.motion.div, {
      className: "w-full",
      ...getAnimation(1),
      children: /* @__PURE__ */ (0, import_jsx_runtime136.jsx)("h1", {
        className: "w-full text-xl text-center text-gray-100",
        children: "Thanks for getting in touch!"
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(import_framer_motion10.motion.div, {
      className: "w-full",
      ...getAnimation(2),
      children: /* @__PURE__ */ (0, import_jsx_runtime136.jsxs)("p", {
        className: "w-full px-4 text-center text-md",
        children: [
          "Your message has been ",
          /* @__PURE__ */ (0, import_jsx_runtime136.jsx)("u", {
            children: "successfully sent"
          }),
          ". You'll get replied as soon as possible."
        ]
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(import_framer_motion10.motion.div, {
      className: "flex justify-center w-full h-6",
      ...getAnimation(3),
      children: /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(Button_default, {
        onClick: onHide,
        children: "Send another message"
      })
    })
  ]
}), FormContactSuccess_default = FormContactSuccess;

// app/components/pages/ContactPage/ContactPage.tsx
var import_framer_motion11 = require("framer-motion"), import_jsx_runtime137 = require("react/jsx-runtime"), ContactPage = () => {
  let [isSuccess, showSuccess, hideSuccess] = useToggleState(), currentPageElement = (0, import_react70.useMemo)(() => isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(FormContactSuccess_default, {
    onHide: hideSuccess
  }) : /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(FormContactContainer_default, {
    onSuccess: showSuccess
  }), [hideSuccess, isSuccess, showSuccess]);
  return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_framer_motion11.AnimatePresence, {
    exitBeforeEnter: !0,
    initial: !1,
    children: /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_framer_motion11.motion.div, {
      initial: { opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { opacity: 0.8 },
      transition: { duration: 0.3 },
      children: currentPageElement
    }, isSuccess ? "success" : "form")
  });
}, ContactPage_default = ContactPage;

// app/routes/contact.tsx
var import_jsx_runtime138 = require("react/jsx-runtime");
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(ContactPage_default, {});
}

// app/routes/routes.ts
var routes_exports = {};
__export(routes_exports, {
  routes: () => routes2
});
var routes2 = [
  "/",
  "/podcasts/:id",
  "/releases",
  "/releases/:id",
  "/gigs",
  "/gigs/:id",
  "/contact"
];

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Contact2
});

// app/hooks/queries/usePostQuery.ts
var import_client20 = require("@apollo/client");

// app/queries/post.ts
var import_client19 = require("@apollo/client");

// app/gql/queries/post.gql
var post_default = `query PostQuery($profile: String!, $id: String!) {
  post(author: $profile, id: $id) {
    ...PostFragment
  }
}
`;

// app/gql/fragments/post.gql
var post_default2 = `fragment PostFragment on Post {
  content
  title
  subtitle
  _id
}
`;

// app/queries/post.ts
var postGqlQuery = import_client19.gql`
  ${post_default2}
  ${post_default}
`;

// app/hooks/queries/usePostQuery.ts
var usePostQuery = (id) => (0, import_client20.useQuery)(postGqlQuery, {
  variables: {
    profile,
    id
  }
});

// app/components/molecules/HtmlReader/HtmlReader.tsx
var import_jsx_runtime139 = require("react/jsx-runtime"), HtmlReader = ({ value, className }) => {
  let data = value && parseHtml(value);
  return /* @__PURE__ */ (0, import_jsx_runtime139.jsx)("article", {
    className,
    children: data
  });
}, HtmlReader_default = HtmlReader;

// app/components/organisms/PostDisplay/PostDisplay.tsx
var import_clsx26 = require("clsx"), import_jsx_runtime140 = require("react/jsx-runtime"), PostDisplay = ({ post, className }) => post != null && post.content ? /* @__PURE__ */ (0, import_jsx_runtime140.jsx)("article", {
  className: "o-8",
  children: /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(HtmlReader_default, {
    className: (0, import_clsx26.clsx)("o-2 text-sm", className),
    value: post == null ? void 0 : post.content
  })
}) : null, PostDisplay_default = PostDisplay;

// app/components/pages/AboutPage/AboutPage.tsx
var import_jsx_runtime141 = require("react/jsx-runtime"), AboutPage = () => {
  let postId = "5e97808d1fd049230afe9516", { data, loading } = usePostQuery(postId);
  return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(HandlerContent_default, {
    loading: !data && loading,
    loader: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(Loader_default, {
      mention: "Please wait while we're chasing content..."
    }),
    children: data != null && data.post ? /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(PostDisplay_default, {
      className: "about",
      post: data == null ? void 0 : data.post
    }) : /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(ErrorPage_default, {
      code: 404,
      message: "Page not found",
      extra: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(ButtonLink_default, {
        href: "/",
        children: "Back to home"
      })
    })
  });
}, AboutPage_default = AboutPage;

// app/routes/about.tsx
var import_jsx_runtime142 = require("react/jsx-runtime");
function Contact2() {
  return /* @__PURE__ */ (0, import_jsx_runtime142.jsx)(AboutPage_default, {});
}

// app/routes/index.tsx
var routes_exports2 = {};
__export(routes_exports2, {
  default: () => Podcast3,
  loader: () => loader6
});
var import_jsx_runtime143 = require("react/jsx-runtime"), loader6 = async ({ request }) => {
  let { data, error } = await runPlaylistQuery("dj-sets");
  if (!data || error)
    throw new Response("Technical error", {
      status: 500
    });
  return data;
};
function Podcast3() {
  return /* @__PURE__ */ (0, import_jsx_runtime143.jsx)(PodcastsPage_default, {});
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "2c5482b4", entry: { module: "/build/entry.client-6TIBMYP6.js", imports: ["/build/_shared/chunk-EZERII22.js", "/build/_shared/chunk-HXPUB2YB.js", "/build/_shared/chunk-HP2WEYW6.js", "/build/_shared/chunk-Z3BXMFQP.js", "/build/_shared/chunk-G5WX4PPA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2H3ZQ6TT.js", imports: ["/build/_shared/chunk-2JOVULTK.js", "/build/_shared/chunk-QOBS6CNY.js", "/build/_shared/chunk-FGMLR3X3.js", "/build/_shared/chunk-N3CVENXY.js", "/build/_shared/chunk-B463YVNK.js", "/build/_shared/chunk-EAXSFWXS.js", "/build/_shared/chunk-XEBJTL6A.js", "/build/_shared/chunk-SUGISYUT.js", "/build/_shared/chunk-7EC7B576.js", "/build/_shared/chunk-QWJ26ME5.js", "/build/_shared/chunk-GOZSCANA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-KI65SK6X.js", imports: ["/build/_shared/chunk-AONVA3GR.js", "/build/_shared/chunk-7EVALUXT.js", "/build/_shared/chunk-5YEVF4DR.js", "/build/_shared/chunk-VVGHUWIQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-5NB67F4F.js", imports: ["/build/_shared/chunk-AZGMNLUQ.js", "/build/_shared/chunk-7EVALUXT.js", "/build/_shared/chunk-VVGHUWIQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gigs/$id": { id: "routes/gigs/$id", parentId: "root", path: "gigs/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/gigs/$id-ILISUYSD.js", imports: ["/build/_shared/chunk-4CGHNZTR.js", "/build/_shared/chunk-G4WYEMB4.js", "/build/_shared/chunk-AZGMNLUQ.js", "/build/_shared/chunk-AONVA3GR.js", "/build/_shared/chunk-EDQFRPE2.js", "/build/_shared/chunk-Y2M5NPEP.js", "/build/_shared/chunk-BPYQT4DG.js", "/build/_shared/chunk-5YEVF4DR.js", "/build/_shared/chunk-VVGHUWIQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gigs/index": { id: "routes/gigs/index", parentId: "root", path: "gigs", index: !0, caseSensitive: void 0, module: "/build/routes/gigs/index-32YVQSDJ.js", imports: ["/build/_shared/chunk-4CGHNZTR.js", "/build/_shared/chunk-EDQFRPE2.js", "/build/_shared/chunk-Y2M5NPEP.js", "/build/_shared/chunk-BPYQT4DG.js", "/build/_shared/chunk-5YEVF4DR.js", "/build/_shared/chunk-VVGHUWIQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-T75AUVTS.js", imports: ["/build/_shared/chunk-VEBFSQIG.js", "/build/_shared/chunk-DSGOYOMS.js", "/build/_shared/chunk-EDQFRPE2.js", "/build/_shared/chunk-BPYQT4DG.js", "/build/_shared/chunk-5YEVF4DR.js", "/build/_shared/chunk-VVGHUWIQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/podcasts/$id": { id: "routes/podcasts/$id", parentId: "root", path: "podcasts/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/podcasts/$id-B55WF65X.js", imports: ["/build/_shared/chunk-XVMICJSQ.js", "/build/_shared/chunk-G4WYEMB4.js", "/build/_shared/chunk-AZGMNLUQ.js", "/build/_shared/chunk-AONVA3GR.js", "/build/_shared/chunk-7EVALUXT.js", "/build/_shared/chunk-VEBFSQIG.js", "/build/_shared/chunk-DSGOYOMS.js", "/build/_shared/chunk-EDQFRPE2.js", "/build/_shared/chunk-Y2M5NPEP.js", "/build/_shared/chunk-BPYQT4DG.js", "/build/_shared/chunk-5YEVF4DR.js", "/build/_shared/chunk-VVGHUWIQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/podcasts/index": { id: "routes/podcasts/index", parentId: "root", path: "podcasts", index: !0, caseSensitive: void 0, module: "/build/routes/podcasts/index-U6QAK5NS.js", imports: ["/build/_shared/chunk-VEBFSQIG.js", "/build/_shared/chunk-DSGOYOMS.js", "/build/_shared/chunk-EDQFRPE2.js", "/build/_shared/chunk-BPYQT4DG.js", "/build/_shared/chunk-5YEVF4DR.js", "/build/_shared/chunk-VVGHUWIQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/releases/$id": { id: "routes/releases/$id", parentId: "root", path: "releases/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/releases/$id-R6DEL6KH.js", imports: ["/build/_shared/chunk-5UE6N34O.js", "/build/_shared/chunk-XVMICJSQ.js", "/build/_shared/chunk-G4WYEMB4.js", "/build/_shared/chunk-AZGMNLUQ.js", "/build/_shared/chunk-AONVA3GR.js", "/build/_shared/chunk-DSGOYOMS.js", "/build/_shared/chunk-EDQFRPE2.js", "/build/_shared/chunk-Y2M5NPEP.js", "/build/_shared/chunk-BPYQT4DG.js", "/build/_shared/chunk-5YEVF4DR.js", "/build/_shared/chunk-VVGHUWIQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/releases/index": { id: "routes/releases/index", parentId: "root", path: "releases", index: !0, caseSensitive: void 0, module: "/build/routes/releases/index-QWQBQV4P.js", imports: ["/build/_shared/chunk-5UE6N34O.js", "/build/_shared/chunk-Y2M5NPEP.js", "/build/_shared/chunk-BPYQT4DG.js", "/build/_shared/chunk-5YEVF4DR.js", "/build/_shared/chunk-VVGHUWIQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/config": { id: "routes/resources/config", parentId: "root", path: "resources/config", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/config-2OQKHLZY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/manifest[.]webmanifest": { id: "routes/resources/manifest[.]webmanifest", parentId: "root", path: "resources/manifest.webmanifest", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/manifest[.]webmanifest-AXTHET2K.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resources/subscribe": { id: "routes/resources/subscribe", parentId: "root", path: "resources/subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/resources/subscribe-KSBR6SUS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/routes": { id: "routes/routes", parentId: "root", path: "routes", index: void 0, caseSensitive: void 0, module: "/build/routes/routes-LBE62GP4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-2C5482B4.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes3 = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resources/manifest[.]webmanifest": {
    id: "routes/resources/manifest[.]webmanifest",
    parentId: "root",
    path: "resources/manifest.webmanifest",
    index: void 0,
    caseSensitive: void 0,
    module: manifest_webmanifest_exports
  },
  "routes/resources/subscribe": {
    id: "routes/resources/subscribe",
    parentId: "root",
    path: "resources/subscribe",
    index: void 0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/resources/config": {
    id: "routes/resources/config",
    parentId: "root",
    path: "resources/config",
    index: void 0,
    caseSensitive: void 0,
    module: config_exports
  },
  "routes/podcasts/index": {
    id: "routes/podcasts/index",
    parentId: "root",
    path: "podcasts",
    index: !0,
    caseSensitive: void 0,
    module: podcasts_exports
  },
  "routes/releases/index": {
    id: "routes/releases/index",
    parentId: "root",
    path: "releases",
    index: !0,
    caseSensitive: void 0,
    module: releases_exports
  },
  "routes/podcasts/$id": {
    id: "routes/podcasts/$id",
    parentId: "root",
    path: "podcasts/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/releases/$id": {
    id: "routes/releases/$id",
    parentId: "root",
    path: "releases/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/gigs/index": {
    id: "routes/gigs/index",
    parentId: "root",
    path: "gigs",
    index: !0,
    caseSensitive: void 0,
    module: gigs_exports
  },
  "routes/gigs/$id": {
    id: "routes/gigs/$id",
    parentId: "root",
    path: "gigs/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports3
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/routes": {
    id: "routes/routes",
    parentId: "root",
    path: "routes",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
