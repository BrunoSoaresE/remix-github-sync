import {
  useLoaderData
} from "/build/_shared/chunk-GMPTIKS3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-PI7EICAX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ListCommits.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ListCommits.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ListCommits.tsx"
  );
  import.meta.hot.lastModified = "1697601973182.496";
}
function ListCommits({
  commits,
  user,
  reponame
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pl-6 lg:w-80", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 pb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm font-semibold", children: "Commits" }, void 0, false, {
      fileName: "app/components/ListCommits.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ListCommits.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "divide-y divide-gray-200", children: commits.map((commit) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: commit.html_url, target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-6 w-6 rounded-full", src: user.avatar_url, alt: user.login }, void 0, false, {
          fileName: "app/components/ListCommits.tsx",
          lineNumber: 35,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium", children: user.login }, void 0, false, {
            fileName: "app/components/ListCommits.tsx",
            lineNumber: 37,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: commit.message }, void 0, false, {
            fileName: "app/components/ListCommits.tsx",
            lineNumber: 38,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ListCommits.tsx",
          lineNumber: 36,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) }, commit.sha, false, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 32,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4 text-sm border-t border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://github.com/" + user.login + "/" + reponame, target: "blanck", className: "text-indigo-600 font-semibold hover:text-indigo-900", children: [
        "Visualizar projeto no git ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
          fileName: "app/components/ListCommits.tsx",
          lineNumber: 46,
          columnNumber: 39
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ListCommits.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ListCommits.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = ListCommits;
var _c;
$RefreshReg$(_c, "ListCommits");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/github.$username.$reponame.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\github.$username.$reponame.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\github.$username.$reponame.tsx"
  );
  import.meta.hot.lastModified = "1697602638809.325";
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { children: "Whoops. Something went wrong [Commits]" }, void 0, false, {
    fileName: "app/routes/github.$username.$reponame.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
function github_username_reponame_default() {
  const {
    user,
    commits,
    reponame
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ListCommits, { commits, user, reponame }, void 0, false, {
    fileName: "app/routes/github.$username.$reponame.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
var _c2;
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  github_username_reponame_default as default
};
//# sourceMappingURL=/build/routes/github.$username.$reponame-6OLIFZYD.js.map
