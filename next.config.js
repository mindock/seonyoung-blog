const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebapckPlugin = require('fork-ts-checker-webpack-plugin');
const loaderUtils = require('loader-utils');
const withAssetRelocator = require('./assetRelocator');

module.exports = withAssetRelocator(
  withTypescript(
    withCSS({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[path]-[local]-[hash:base64:4]',
        getLocalIdent: (context, localIdentName, localName, options) => {
          if (context.resourcePath.includes('/node_modules')) {
            return localName;
          }
          return (
            localName + loaderUtils.interpolateName(context, '-[hash:base64:4]', { content: context.resourcePath })
          );
        },
      },
      target: 'serverless',
      webpack(config, { dev, isServer }) {
        config.devtool = 'eval-source-map';
        if (dev && isServer) {
          config.plugins.push(new ForkTsCheckerWebapckPlugin());
        }
        return config;
      },
    }),
  ),
);
