module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
        "categories:pwa": ["off"],
        interactive: [
          "error",
          { maxNumericValue: 3000, aggregationMethod: "median-run" },
        ],
        "first-contentful-paint": [
          "error",
          { maxNumericValue: 1500, aggregationMethod: "median-run" },
        ],
        "first-meaningful-paint": [
          "error",
          { maxNumericValue: 1000, aggregationMethod: "median-run" },
        ],
        "resource-summary:third-party:count": ["error", { maxNumericValue: 5 }],
        "resource-summary:script:size": ["error", { maxNumberValue: 125000 }],
        "resource-summary:script:total": ["error", { maxNumberValue: 300000 }],
      },
    },
    upload: {
      target: "lhci",
      url: [
        "https://faux.digital/",
        "https://faux.digital/blog",
        "https://faux.digital/login",
        "https://faux.digital/release-notes",
        "https://faux.digital/cards",
      ],
    },
  },
};
