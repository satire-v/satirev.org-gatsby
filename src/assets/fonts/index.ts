function requireAll(r) {
  const gather = [];
  r.keys().forEach(function(mpath, ...args) {
    const result = r(mpath, ...args);
    const path = mpath
      .replace(/(?:^[.\/]*\/)/g, "") // Trim
      .split("/");
    gather.push(result);
  });
  return gather;
}

module.exports = {
  fontFiles: requireAll(require.context("./", true, /\.(woff2)$/)),
  cssFiles: require
    .context("./", true, /\.css$/)
    .keys()
    .map(e => e.replace(/(?:^[.\/]*\/)/g, "")),
};
