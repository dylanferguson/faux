require("dotenv").config({ path: ".env.local" });

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
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
  },
});
