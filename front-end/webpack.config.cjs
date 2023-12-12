const path = require('path');

module.exports = {
  // other webpack configurations...
  resolve: {
    extensions: ['.js', '.jsx'], // Add any other extensions you are using
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};
