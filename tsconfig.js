// tsconfig.js
const { aliases } = require("./alias.config");

module.exports = {
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
    jsx: "react",
    lib: ["dom", "esnext"],
    strict: true,
    noEmit: true,
    isolatedModules: true,
    esModuleInterop: true,
    noUnusedLocals: true,
    moduleResolution: "node",
    allowSyntheticDefaultImports: true,
    strictNullChecks: true,
    paths: Object.fromEntries(
      Object.entries(aliases).map(([k, v]) => [`${k}/*`, [`${v}/*`]])
    ),
    baseUrl: "./",
    allowJs: true,
  },
  exclude: ["node_modules", "**/node_modules/*", "public", ".cache"],
};
