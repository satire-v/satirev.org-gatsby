// tsconfig.json
const { aliases } = require("./alias.config");

module.exports = {
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
    jsx: "preserve",
    lib: ["dom", "esnext"],
    strict: true,
    noEmit: true,
    isolatedModules: true,
    esModuleInterop: true,
    noUnusedLocals: true,
    moduleResolution: "node",
    allowSyntheticDefaultImports: false,
    strictNullChecks: true,
    paths: Object.fromEntries(
      Object.entries(aliases).map(([k, v]) => [`${k}/*`, [`./${v}/*`]])
    ),
    baseUrl: ".",
  },
  exclude: ["node_modules", "**/node_modules/*", "public", ".cache"],
};
