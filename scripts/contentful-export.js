require("dotenv").config({ path: ".env.local" });

const contentfulExport = require("contentful-export");

contentfulExport({
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT,
  exportDir: "content",
  contentFile: "contentful-export.json",
  downloadAssets: true,
});
