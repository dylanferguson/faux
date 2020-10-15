const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withSourceMaps = require("@zeit/next-source-maps")({
  devtool: "hidden-source-map",
});
const withPrefresh = require('@prefresh/next');

const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
} = process.env;

const config = withBundleAnalyzer(
  withSourceMaps({
    experimental: {
      modern: true,
      polyfillsOptimization: true
    },
    env: {
      NEXT_PUBLIC_VERSION: require("./package.json").version,
      NEXT_PUBLIC_BUILD_TIME: new Intl.DateTimeFormat("en-AU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Australia/Melbourne",
        timeZoneName: "short",
      }).format(new Date()),
    },
    exportTrailingSlash: true,
    webpack: (config, { buildId, dev, isServer }) => {
      // When all the Sentry configuration env variables are available/configured
      // The Sentry webpack plugin gets pushed to the webpack plugins to build
      // and upload the source maps to sentry.
      // This is an alternative to manually uploading the source maps
      // Note: This is disabled in development mode.
      if (
        SENTRY_DSN &&
        SENTRY_ORG &&
        SENTRY_PROJECT &&
        SENTRY_AUTH_TOKEN &&
        NODE_ENV === "production"
      ) {
        config.plugins.push(
          new SentryWebpackPlugin({
            include: ".next",
            ignore: ["node_modules"],
            urlPrefix: "~/_next",
            release: `${require("./package.json").version}-${buildId}`,
          })
        );
      }

      const splitChunks = config.optimization && config.optimization.splitChunks;

      if (splitChunks) {
        const cacheGroups = splitChunks.cacheGroups;
        const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
        if (cacheGroups.framework) {
          cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
            test: preactModules
          });
          cacheGroups.commons.name = 'framework';
        }
        else {
          cacheGroups.preact = {
            name: 'commons',
            chunks: 'all',
            test: preactModules
          };
        }
      }

      // Install webpack aliases:
      const aliases = config.resolve.alias || (config.resolve.alias = {});
      aliases.react = aliases['react-dom'] = 'preact/compat';

      // inject Preact DevTools
      if (dev && !isServer) {
        const entry = config.entry;
        config.entry = () => entry().then(entries => {
          entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || []);
          return entries;
        });
      }

      return config;
    },
  })
);

module.exports = withPrefresh(config);