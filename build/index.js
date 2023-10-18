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
  }, GitHubService2.getCommits = async (reponame, username) => (invariant(reponame, "Please provide an repository name as a string"), invariant(username, "Please provide an user name as a string"), console.log("chegou"), (await (await fetch(
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
  ErrorBoundary: () => ErrorBoundary2,
  default: () => github_username_default,
  loader: () => loader2
});
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/ListRepositories.tsx
import { Menu as Menu2 } from "@headlessui/react";

// app/util.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// app/Layouts/Layout.tsx
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BadgeCheckIcon, CollectionIcon } from "@heroicons/react/solid/index.js";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline/index.js";

// app/components/SelectUser.tsx
import { Form, useParams, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var users = [
  { id: 1, username: "BrunoSoaresE" },
  { id: 2, username: "Vedovelli" },
  { id: 3, username: "Bob" },
  { id: 4, username: "Larry" },
  { id: 5, username: "Thomas" },
  { id: 6, username: "Paul" }
];
function SelectUser() {
  let params = useParams(), loading = useNavigation().state === "submitting", [selected, setSelected] = useState(
    params.username ?? users[0].username
  );
  return /* @__PURE__ */ jsxDEV5(
    Form,
    {
      method: "get",
      action: `/github/${selected}`,
      className: "flex items-center gap-4",
      children: [
        /* @__PURE__ */ jsxDEV5("label", { htmlFor: "githubUser", className: "sr-only", children: "Select a Github User" }, void 0, !1, {
          fileName: "app/components/SelectUser.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV5(
          "select",
          {
            onChange: (e) => setSelected(e.target.value),
            id: "githubUser",
            disabled: loading,
            className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
            defaultValue: selected,
            children: users.map((user) => /* @__PURE__ */ jsxDEV5("option", { children: user.username }, user.id, !1, {
              fileName: "app/components/SelectUser.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/SelectUser.tsx",
            lineNumber: 38,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          "button",
          {
            type: "submit",
            className: "w-32 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: loading ? "Loading..." : "Load User"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SelectUser.tsx",
            lineNumber: 49,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/SelectUser.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}

// app/Layouts/Layout.tsx
import { Outlet as Outlet2 } from "@remix-run/react";
import { Fragment as Fragment2, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var navigation = [
  { name: "Git Hub", href: "/github/BrunoSoaresE", current: !0 }
  // { name: "Domains", href: "#", current: false },
], userNavigation = [
  { name: "Ver git", href: "https://github.com/" }
];
function Layout({ user, repos, children }) {
  return /* @__PURE__ */ jsxDEV6(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV6(
      "div",
      {
        className: "fixed top-0 left-0 w-1/2 h-full bg-white",
        "aria-hidden": "true"
      },
      void 0,
      !1,
      {
        fileName: "app/Layouts/Layout.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(
      "div",
      {
        className: "fixed top-0 right-0 w-1/2 h-full bg-gray-50",
        "aria-hidden": "true"
      },
      void 0,
      !1,
      {
        fileName: "app/Layouts/Layout.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6("div", { className: "relative min-h-full flex flex-col", children: [
      /* @__PURE__ */ jsxDEV6(Disclosure, { as: "nav", className: "flex-shrink-0 bg-indigo-600", children: ({ open }) => /* @__PURE__ */ jsxDEV6(Fragment2, { children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto px-2 sm:px-4 lg:px-8", children: /* @__PURE__ */ jsxDEV6("div", { className: "relative flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center px-2 lg:px-0 xl:w-64", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV6(
            "img",
            {
              className: "h-8 w-auto",
              src: "https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg",
              alt: "Workflow"
            },
            void 0,
            !1,
            {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 50,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 49,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 48,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "flex-1 flex justify-center lg:justify-end", children: /* @__PURE__ */ jsxDEV6("div", { className: "w-full px-2 lg:px-6", children: /* @__PURE__ */ jsxDEV6(SelectUser, {}, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 61,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 60,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 59,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "flex lg:hidden", children: /* @__PURE__ */ jsxDEV6(Disclosure.Button, { className: "bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white", children: [
            /* @__PURE__ */ jsxDEV6("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 67,
              columnNumber: 23
            }, this),
            open ? /* @__PURE__ */ jsxDEV6(XIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 69,
              columnNumber: 25
            }, this) : /* @__PURE__ */ jsxDEV6(
              MenuAlt1Icon,
              {
                className: "block h-6 w-6",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/Layouts/Layout.tsx",
                lineNumber: 71,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 66,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 64,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "hidden lg:block lg:w-80", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center justify-end", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "flex", children: navigation.map((item) => /* @__PURE__ */ jsxDEV6(
              "a",
              {
                href: item.href,
                className: "px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white",
                "aria-current": item.current ? "page" : void 0,
                children: item.name
              },
              item.name,
              !1,
              {
                fileName: "app/Layouts/Layout.tsx",
                lineNumber: 83,
                columnNumber: 27
              },
              this
            )) }, void 0, !1, {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 81,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV6(Menu, { as: "div", className: "ml-4 relative flex-shrink-0", children: [
              /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6(Menu.Button, { className: "bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white", children: [
                /* @__PURE__ */ jsxDEV6("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
                  fileName: "app/Layouts/Layout.tsx",
                  lineNumber: 97,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV6(
                  "img",
                  {
                    className: "h-8 w-8 rounded-full",
                    src: user.avatar_url,
                    alt: user.login
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/Layouts/Layout.tsx",
                    lineNumber: 98,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/Layouts/Layout.tsx",
                lineNumber: 96,
                columnNumber: 27
              }, this) }, void 0, !1, {
                fileName: "app/Layouts/Layout.tsx",
                lineNumber: 95,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV6(
                Transition,
                {
                  as: Fragment,
                  enter: "transition ease-out duration-100",
                  enterFrom: "transform opacity-0 scale-95",
                  enterTo: "transform opacity-100 scale-100",
                  leave: "transition ease-in duration-75",
                  leaveFrom: "transform opacity-100 scale-100",
                  leaveTo: "transform opacity-0 scale-95",
                  children: /* @__PURE__ */ jsxDEV6(Menu.Items, { className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none", children: userNavigation.map((item) => /* @__PURE__ */ jsxDEV6(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsxDEV6(
                    "a",
                    {
                      href: item.href + user.login,
                      target: "blank",
                      className: classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      ),
                      children: item.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/Layouts/Layout.tsx",
                      lineNumber: 118,
                      columnNumber: 35
                    },
                    this
                  ) }, item.name, !1, {
                    fileName: "app/Layouts/Layout.tsx",
                    lineNumber: 116,
                    columnNumber: 31
                  }, this)) }, void 0, !1, {
                    fileName: "app/Layouts/Layout.tsx",
                    lineNumber: 114,
                    columnNumber: 27
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/Layouts/Layout.tsx",
                  lineNumber: 105,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 94,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 80,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 79,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/Layouts/Layout.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/Layouts/Layout.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6(Disclosure.Panel, { className: "lg:hidden", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "px-2 pt-2 pb-3 space-y-1", children: navigation.map((item) => /* @__PURE__ */ jsxDEV6(
            Disclosure.Button,
            {
              as: "a",
              href: item.href,
              className: classNames(
                item.current ? "text-white bg-indigo-800" : "text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600",
                "block px-3 py-2 rounded-md text-base font-medium"
              ),
              "aria-current": item.current ? "page" : void 0,
              children: item.name
            },
            item.name,
            !1,
            {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 141,
              columnNumber: 21
            },
            this
          )) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 139,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "pt-4 pb-3 border-t border-indigo-800", children: /* @__PURE__ */ jsxDEV6("div", { className: "px-2 space-y-1", children: userNavigation.map((item) => /* @__PURE__ */ jsxDEV6(
            Disclosure.Button,
            {
              as: "a",
              href: item.href,
              className: "block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600",
              children: item.name
            },
            item.name,
            !1,
            {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 160,
              columnNumber: 23
            },
            this
          )) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 158,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 157,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/Layouts/Layout.tsx",
          lineNumber: 138,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Layouts/Layout.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/Layouts/Layout.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "flex-1 min-w-0 bg-white xl:flex", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white", children: /* @__PURE__ */ jsxDEV6("div", { className: "pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex-1 space-y-8", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "flex-shrink-0 h-12 w-12", children: /* @__PURE__ */ jsxDEV6(
                "img",
                {
                  className: "h-12 w-12 rounded-full",
                  src: user.avatar_url,
                  alt: user.login
                },
                void 0,
                !1,
                {
                  fileName: "app/Layouts/Layout.tsx",
                  lineNumber: 189,
                  columnNumber: 27
                },
                this
              ) }, void 0, !1, {
                fileName: "app/Layouts/Layout.tsx",
                lineNumber: 188,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDEV6("div", { className: "text-sm font-medium text-gray-900", children: user.login }, void 0, !1, {
                  fileName: "app/Layouts/Layout.tsx",
                  lineNumber: 196,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV6(
                  "a",
                  {
                    href: "https://github.com/" + user.login,
                    target: "blanck",
                    className: "group flex items-center space-x-2.5",
                    children: [
                      /* @__PURE__ */ jsxDEV6(
                        "svg",
                        {
                          className: "h-5 w-5 text-gray-400 group-hover:text-gray-500",
                          "aria-hidden": "true",
                          fill: "currentColor",
                          viewBox: "0 0 20 20",
                          children: /* @__PURE__ */ jsxDEV6(
                            "path",
                            {
                              fillRule: "evenodd",
                              d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
                              clipRule: "evenodd"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/Layouts/Layout.tsx",
                              lineNumber: 210,
                              columnNumber: 31
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/Layouts/Layout.tsx",
                          lineNumber: 204,
                          columnNumber: 29
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV6("span", { className: "text-sm text-gray-500 group-hover:text-gray-900 font-medium", children: [
                        "github/",
                        user.login
                      ] }, void 0, !0, {
                        fileName: "app/Layouts/Layout.tsx",
                        lineNumber: 216,
                        columnNumber: 29
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/Layouts/Layout.tsx",
                    lineNumber: 199,
                    columnNumber: 27
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/Layouts/Layout.tsx",
                lineNumber: 195,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 187,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 185,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6", children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxDEV6(
                  BadgeCheckIcon,
                  {
                    className: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/Layouts/Layout.tsx",
                    lineNumber: 241,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("span", { className: "text-sm text-gray-500 font-medium", children: "Pro Member" }, void 0, !1, {
                  fileName: "app/Layouts/Layout.tsx",
                  lineNumber: 245,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/Layouts/Layout.tsx",
                lineNumber: 240,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxDEV6(
                  CollectionIcon,
                  {
                    className: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/Layouts/Layout.tsx",
                    lineNumber: 250,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("span", { className: "text-sm text-gray-500 font-medium", children: [
                  repos.length,
                  " Projetos p\xFAblicos"
                ] }, void 0, !0, {
                  fileName: "app/Layouts/Layout.tsx",
                  lineNumber: 254,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/Layouts/Layout.tsx",
                lineNumber: 249,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/Layouts/Layout.tsx",
              lineNumber: 239,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 184,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 183,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/Layouts/Layout.tsx",
            lineNumber: 181,
            columnNumber: 13
          }, this),
          children
        ] }, void 0, !0, {
          fileName: "app/Layouts/Layout.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0", children: /* @__PURE__ */ jsxDEV6(Outlet2, {}, void 0, !1, {
          fileName: "app/Layouts/Layout.tsx",
          lineNumber: 269,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/Layouts/Layout.tsx",
          lineNumber: 268,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Layouts/Layout.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Layouts/Layout.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Layouts/Layout.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/components/CardRepository.tsx
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid/index.js";
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function CardRepository({ repo }) {
  return /* @__PURE__ */ jsxDEV7("li", { className: "relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6", children: /* @__PURE__ */ jsxDEV7(
    Link,
    {
      prefetch: "intent",
      to: repo.name,
      className: "flex items-center justify-between space-x-4",
      children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "min-w-0 space-y-3", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsxDEV7(
              "span",
              {
                className: "bg-green-100 h-4 w-4 rounded-full flex items-center justify-center",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxDEV7("span", { className: "bg-green-400 h-2 w-2 rounded-full" }, void 0, !1, {
                  fileName: "app/components/CardRepository.tsx",
                  lineNumber: 23,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/CardRepository.tsx",
                lineNumber: 19,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("span", { className: "block", children: /* @__PURE__ */ jsxDEV7("h2", { className: "text-sm font-medium", children: [
              /* @__PURE__ */ jsxDEV7("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/CardRepository.tsx",
                lineNumber: 28,
                columnNumber: 17
              }, this),
              repo.full_name,
              " "
            ] }, void 0, !0, {
              fileName: "app/components/CardRepository.tsx",
              lineNumber: 27,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/CardRepository.tsx",
              lineNumber: 26,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/CardRepository.tsx",
            lineNumber: 18,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { className: "relative group flex items-center space-x-2.5", children: [
            /* @__PURE__ */ jsxDEV7(
              "svg",
              {
                className: "flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxDEV7(
                  "path",
                  {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z",
                    fill: "currentcolor"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/CardRepository.tsx",
                    lineNumber: 41,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/CardRepository.tsx",
                lineNumber: 34,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("span", { className: "text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate", children: repo.full_name }, void 0, !1, {
              fileName: "app/components/CardRepository.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/CardRepository.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CardRepository.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "sm:hidden", children: /* @__PURE__ */ jsxDEV7(
          ChevronRightIcon,
          {
            className: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/components/CardRepository.tsx",
            lineNumber: 54,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/CardRepository.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "hidden sm:flex flex-col flex-shrink-0 items-end space-y-3", children: [
          /* @__PURE__ */ jsxDEV7("p", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxDEV7(
            "button",
            {
              type: "button",
              className: "relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV7(
                  StarIcon,
                  {
                    className: "h-5 w-5 text-yellow-300 hover:text-yellow-400",
                    "aria-hidden": "true"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/CardRepository.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV7("span", { className: "text-xs text-gray-400", children: repo.stargazers_count }, void 0, !1, {
                  fileName: "app/components/CardRepository.tsx",
                  lineNumber: 71,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/CardRepository.tsx",
                lineNumber: 66,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/CardRepository.tsx",
              lineNumber: 62,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/CardRepository.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "flex text-gray-500 text-sm space-x-2", children: /* @__PURE__ */ jsxDEV7("span", { children: repo.language }, void 0, !1, {
            fileName: "app/components/CardRepository.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/CardRepository.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CardRepository.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/CardRepository.tsx",
      lineNumber: 12,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/CardRepository.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/ListRepositories.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function ListRepositories({ user, repos }) {
  return /* @__PURE__ */ jsxDEV8(Layout, { user, repos, children: /* @__PURE__ */ jsxDEV8("div", { className: "bg-white lg:min-w-0 lg:flex-1", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0", children: /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "flex-1 text-lg font-medium", children: "Projetos p\xFAblicos" }, void 0, !1, {
        fileName: "app/components/ListRepositories.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8(Menu2, { as: "div", className: "relative", children: /* @__PURE__ */ jsxDEV8(Menu2.Items, { className: "origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ jsxDEV8("div", { className: "py-1", children: [
        /* @__PURE__ */ jsxDEV8(Menu2.Item, { children: ({ active }) => /* @__PURE__ */ jsxDEV8(
          "a",
          {
            href: "#",
            className: classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            ),
            children: "Name"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ListRepositories.tsx",
            lineNumber: 26,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ListRepositories.tsx",
          lineNumber: 24,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV8(Menu2.Item, { children: ({ active }) => /* @__PURE__ */ jsxDEV8(
          "a",
          {
            href: "#",
            className: classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            ),
            children: "Date modified"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ListRepositories.tsx",
            lineNumber: 41,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ListRepositories.tsx",
          lineNumber: 39,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV8(Menu2.Item, { children: ({ active }) => /* @__PURE__ */ jsxDEV8(
          "a",
          {
            href: "#",
            className: classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            ),
            children: "Date created"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ListRepositories.tsx",
            lineNumber: 56,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/ListRepositories.tsx",
          lineNumber: 54,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ListRepositories.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/ListRepositories.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/ListRepositories.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ListRepositories.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/ListRepositories.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8(
      "ul",
      {
        role: "list",
        className: "relative z-0 divide-y divide-gray-200 border-b border-gray-200",
        children: repos.map((repo) => /* @__PURE__ */ jsxDEV8(CardRepository, { repo }, repo.id, !1, {
          fileName: "app/components/ListRepositories.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/ListRepositories.tsx",
        lineNumber: 74,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ListRepositories.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ListRepositories.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/github.$username.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var loader2 = async ({ params }) => ({
  user: await GitHubService.getUser(params.username),
  repos: await GitHubService.getUserRepos(params.username)
});
function ErrorBoundary2() {
  return /* @__PURE__ */ jsxDEV9("h3", { children: "Whoops. Something went wrong [Repositories]" }, void 0, !1, {
    fileName: "app/routes/github.$username.tsx",
    lineNumber: 15,
    columnNumber: 12
  }, this);
}
function github_username_default() {
  let { user, repos } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV9(ListRepositories, { user, repos }, void 0, !1, {
    fileName: "app/routes/github.$username.tsx",
    lineNumber: 21,
    columnNumber: 13
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  loader: () => loader3
});
import { redirect } from "@remix-run/node";
var loader3 = () => redirect("/github/BrunoSoaresE");

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-SWXKQ7QB.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-GMPTIKS3.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PI7EICAX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VLLB6SNL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QW5LNJTG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/github.$username": { id: "routes/github.$username", parentId: "root", path: "github/:username", index: void 0, caseSensitive: void 0, module: "/build/routes/github.$username-HAOOJR5V.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/github.$username.$reponame": { id: "routes/github.$username.$reponame", parentId: "routes/github.$username", path: ":reponame", index: void 0, caseSensitive: void 0, module: "/build/routes/github.$username.$reponame-6OLIFZYD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 } }, version: "b884ca8a", hmr: { runtime: "/build/_shared\\chunk-PI7EICAX.js", timestamp: 1697603339492 }, url: "/build/manifest-B884CA8A.js" };

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
