require("dotenv").config({ path: ".env.local" });

const contentfulImport = require("contentful-import");

contentfulImport({
  contentFile: "./contentful-export.json",
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT,
});
