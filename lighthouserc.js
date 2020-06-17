module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
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
