require("dotenv").config({ path: ".env.local" });

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
    exportTrailingSlash: true,
    env: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      CONTENTFUL_PREVIEW_ACCESS_TOKEN:
        process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
      NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY:
        process.env.ALGOLIA_SEARCH_ONLY_API_KEY,
      NEXT_PUBLIC_ALGOLIA_INDEX: process.env.ALGOLIA_INDEX,
      NEXT_PUBLIC_GA_TRACKING_ID: process.env.GA_TRACKING_ID,
      NEXT_PUBLIC_SENTRY_DSN: process.env.SENTRY_DSN,
    },
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
