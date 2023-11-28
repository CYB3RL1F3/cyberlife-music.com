/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  browserNodeBuiltinsPolyfill: {
    modules: { path: "empty", os: "empty", crypto: "empty" }
  },
  future: {
    v2_dev: true
  }
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
