// This file inform Webpack to use this custom .babelrc file
const { useBabelRc, override } = require("customize-cra");
module.exports = override(useBabelRc());