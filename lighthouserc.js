module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      staticDistDir: "./out",
      url: [
        "http://localhost/",
        "http://localhost/blog",
        "http://localhost/login",
        "http://localhost/release-notes",
        "http://localhost/credit-cards/new",
      ],
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://vast-taiga-80570.herokuapp.com/",
      token: process.env.LHCI_BUILD_TOKEN,
    },
  },
};
