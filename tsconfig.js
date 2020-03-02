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
    typeRoots: ["./types", "./node_modules/@types"],
    plugins: [
      {
        name: "typescript-styled-plugin",
        validate: false,
      },
    ],
  },
  exclude: ["node_modules", "public", ".cache", "types"],
};
