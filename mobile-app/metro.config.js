
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const path = require('path');

const sharedPackages = [
  'api',
  'model',
  'crud',
  'sulna',
  'srs',
  'model-operations',
];

const config = {
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

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
