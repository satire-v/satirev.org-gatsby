const folderAliases = {
  "#styles": "src/styles",
  "#animations": "src/animations",
  "#common": "src/components/common",
  "#components": "src/components",
  "#layouts": "src/layouts",
  "#img": "src/assets/img",
  "#assets": "src/assets",
  "#queries": "src/queries",
};
const fileAliases = {
  "#graphql": "src/__generated__/gatsby-types",
};

module.exports.folderAliases = folderAliases;
module.exports.fileAliases = fileAliases;
module.exports.aliases = { ...folderAliases, ...fileAliases };
module.exports.extensions = [
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".react.js",
  ".react.jsx",
  ".react.ts",
  ".react.tsx",
];
