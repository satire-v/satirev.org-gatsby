// tsconfig.js
const { folderAliases, fileAliases } = require("./alias.config");

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
    paths: Object.assign(
      Object.fromEntries(
        Object.entries(folderAliases)
          .map(([k, v]) => [`${k}/*`, [`${v}/*`]])
          .concat(Object.entries(fileAliases).map(([k, v]) => [k, [v]]))
      )
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
