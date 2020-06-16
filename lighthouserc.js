module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://vast-taiga-80570.herokuapp.com/",
      token: process.env.LHCI_BUILD_TOKEN,
    },
  },
};
