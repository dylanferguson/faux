const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withSourceMaps = require("@zeit/next-source-maps")({
  devtool: "hidden-source-map",
});

const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
} = process.env;

module.exports = withBundleAnalyzer(
  withSourceMaps({
    env: {
      NEXT_PUBLIC_VERSION: require("./package.json").version,
    },
    exportTrailingSlash: true,
    webpack: (config, options) => {
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
            release: `${require("./package.json").version}-${options.buildId}`,
          })
        );
      }

      return config;
    },
  })
);
