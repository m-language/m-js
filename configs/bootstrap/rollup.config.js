import includePaths from "rollup-plugin-includepaths";

const includePathOpts = {
  paths: ["build/lib"],
  extensions: [".js"]
};

export default {
  input: "build/stub/m.js",
  output: {
    file: "bootstrap/m.bundle.js",
    format: "cjs"
  },
  plugins: [includePaths(includePathOpts)]
};
