const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const {
  createSentryMetroSerializer,
} = require('@sentry/react-native/dist/js/tools/sentryMetroSerializer');

const sharedPackages = [
  'api',
  'model',
  'crud',
  'sulna',
  'srs',
  'model-operations',
];

const buildSharedPackagePath = (package) =>
  path.resolve(__dirname, `../packages/${package}`);

const extraNodeModules = sharedPackages.reduce(
  (result, package) => ({
    ...result,
    [`@vocably/${package}`]: buildSharedPackagePath(package),
  }),
  {}
);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules,
    nodeModulesPaths: [path.resolve(__dirname, 'node_modules')],
  },

  watchFolders: sharedPackages.map(buildSharedPackagePath),

  serializer: {
    customSerializer: createSentryMetroSerializer(),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
