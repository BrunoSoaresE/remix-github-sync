var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
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
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-P3RPH2CY.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "h-full", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/github.$username.$reponame.tsx
var github_username_reponame_exports = {};
__export(github_username_reponame_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => github_username_reponame_default,
  loader: () => loader
});
import { useLoaderData } from "@remix-run/react";

// app/components/ListCommits.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function ListCommits({ commits, user, reponame }) {
  return /* @__PURE__ */ jsxDEV3("div", { className: "pl-6 lg:w-80", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "pt-6 pb-2", children: /* @__PURE__ */ jsxDEV3("h2", { className: "text-sm font-semibold", children: "Commits" }, void 0, !1, {
      fileName: "app/components/ListCommits.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ListCommits.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { children: [
      /* @__PURE__ */ jsxDEV3("ul", { role: "list", className: "divide-y divide-gray-200", children: commits.map((commit) => /* @__PURE__ */ jsxDEV3("li", { className: "py-4", children: /* @__PURE__ */ jsxDEV3("a", { href: commit.html_url, target: "_blank", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ jsxDEV3(
          "img",
          {
            className: "h-6 w-6 rounded-full",
            src: user.avatar_url,
            alt: user.login
          },
          void 0,
          !1,
          {
            fileName: "app/components/ListCommits.tsx",
            lineNumber: 22,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3("div", { className: "flex-1 space-y-1", children: [
          /* @__PURE__ */ jsxDEV3("h3", { className: "text-sm font-medium", children: user.login }, void 0, !1, {
            fileName: "app/components/ListCommits.tsx",
            lineNumber: 28,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm text-gray-500", children: commit.message }, void 0, !1, {
            fileName: "app/components/ListCommits.tsx",
            lineNumber: 29,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ListCommits.tsx",
          lineNumber: 27,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 20,
        columnNumber: 15
      }, this) }, commit.sha, !1, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "py-4 text-sm border-t border-gray-200", children: /* @__PURE__ */ jsxDEV3(
        "a",
        {
          href: "https://github.com/" + user.login + "/" + reponame,
          target: "blanck",
          className: "text-indigo-600 font-semibold hover:text-indigo-900",
          children: [
            "Visualizar projeto no git ",
            /* @__PURE__ */ jsxDEV3("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
              fileName: "app/components/ListCommits.tsx",
              lineNumber: 44,
              columnNumber: 39
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/ListCommits.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/ListCommits.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ListCommits.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ListCommits.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/services/github.service.tsx
import invariant from "tiny-invariant";
import pick from "lodash";
var GitHubService;
((GitHubService2) => {
  let config = {
    headers: {
      accept: "application/vnd.github.v3+json",
      Authorization: `token ${process.env.GITHUB_API_TOKEN}`
    }
  };
  GitHubService2.getUser = async (username) => {
    invariant(username, "Please provide an username as a string");
    let res = await fetch(
      `https://api.github.com/users/${username.toLocaleLowerCase()}`,
      config
    );
    return pick.pick(await res.json(), ["login", "avatar_url", "html_url", "bio"]);
  }, GitHubService2.getUserRepos = async (username) => {
    invariant(username, "Please provide an username as a string");
    let res = await fetch(
      `https://api.github.com/users/${username}/repos`,
      config
    );
    return pick(await res.json());
  }, GitHubService2.getCommits = async (reponame, username) => (invariant(reponame, "Please provide an repository name as a string"), invariant(username, "Please provide an user name as a string"), (await (await fetch(
    `https://api.github.com/repos/${username}/${reponame}/commits`,
    config
  )).json()).map((commit) => ({
    sha: commit.sha,
    message: commit.commit.message,
    html_url: commit.html_url
  })));
})(GitHubService ||= {});

// app/routes/github.$username.$reponame.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var loader = async ({
  params
}) => ({
  user: await GitHubService.getUser(params.username),
  commits: await GitHubService.getCommits(params.reponame, params.username),
  reponame: params.reponame
});
function ErrorBoundary() {
  return /* @__PURE__ */ jsxDEV4("h3", { children: "Whoops. Something went wrong [Commits]" }, void 0, !1, {
    fileName: "app/routes/github.$username.$reponame.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
}
function github_username_reponame_default() {
  let { user, commits, reponame } = useLoaderData();
  return /* @__PURE__ */ jsxDEV4(ListCommits, { commits, user, reponame }, void 0, !1, {
    fileName: "app/routes/github.$username.$reponame.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// app/routes/github.$username.tsx
var github_username_exports = {};
__export(github_username_exports, {
  loader: () => loader2
});
var loader2 = async ({ params }) => ({
  user: await GitHubService.getUser(params.username),
  repos: await GitHubService.getUserRepos(params.username)
});

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  loader: () => loader3
});
import { redirect } from "@remix-run/node";
var loader3 = () => redirect("/github/BrunoSoaresE");

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-SWXKQ7QB.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-GMPTIKS3.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PI7EICAX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VLLB6SNL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QW5LNJTG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/github.$username": { id: "routes/github.$username", parentId: "root", path: "github/:username", index: void 0, caseSensitive: void 0, module: "/build/routes/github.$username-HFCCUSVG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/github.$username.$reponame": { id: "routes/github.$username.$reponame", parentId: "routes/github.$username", path: ":reponame", index: void 0, caseSensitive: void 0, module: "/build/routes/github.$username.$reponame-6OLIFZYD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 } }, version: "f3d76d54", hmr: { runtime: "/build/_shared\\chunk-PI7EICAX.js", timestamp: 1697853516033 }, url: "/build/manifest-F3D76D54.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/github.$username.$reponame": {
    id: "routes/github.$username.$reponame",
    parentId: "routes/github.$username",
    path: ":reponame",
    index: void 0,
    caseSensitive: void 0,
    module: github_username_reponame_exports
  },
  "routes/github.$username": {
    id: "routes/github.$username",
    parentId: "root",
    path: "github/:username",
    index: void 0,
    caseSensitive: void 0,
    module: github_username_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
