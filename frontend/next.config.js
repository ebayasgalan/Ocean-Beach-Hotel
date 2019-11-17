const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  // cssModules: true
  // loaders: [{ test: /\\.css$/, use: ['style-loader', 'css-loader'] }]
});

// module: {
//   loaders: [
//     { test: /\\.css$/, use: ['style-loader', 'css-loader'] },
//   ]
// }
