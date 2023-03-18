const path = require('path');

const sharedPackages = [
  'api',
  'model',
  'crud',
  'sulna',
  'srs',
  'model-operations',
];

module.exports = {
  projectRoot: __dirname,
  watchFolders: sharedPackages.map((package) =>
    path.resolve(`../packages/${package}`)
  ),
  resolver: {
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return path.join(__dirname, `node_modules/${name}`);
        },
      }
    ),
  },
};
