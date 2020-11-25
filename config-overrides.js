const multipleEntry = require('react-app-rewire-multiple-entry')([
    {
      entry: 'src/index.js',
      template: 'public/index.html',
      outPath: '/index.html'
    },
    {
        entry: 'src/index2.js',
        template: 'public/index2.html',
        outPath: '/index2.html'
      },
  ]);

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    multipleEntry.addMultiEntry(config);
    return config;
}