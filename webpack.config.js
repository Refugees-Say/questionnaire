module.exports = function() {
  return {
    entry: "./src/index.jsx",
    output: {
      path: __dirname + "/docs",
      filename: "index.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: "babel-loader",
          query: {
            "presets": ["es2015", "react"]
          }
        }
      ]
    }
  }
};
