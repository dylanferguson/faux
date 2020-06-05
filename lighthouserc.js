const host = "http://localhost";

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      staticDistDir: "./out",
      url: ["/", "/blog", "/login", "/release-notes", "/credit-cards/new"].map(
        (url) => host + url
      ),
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://vast-taiga-80570.herokuapp.com",
      token: process.env.LHCI_BUILD_TOKEN,
    },
  },
};
