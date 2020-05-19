import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENT_ACCESS_TOKEN as string,
});

export async function getAllReleases() {
  const entries = await client.getEntries({
    content_type: "release",
  });

  return entries;
}
