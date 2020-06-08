import { createClient, EntryCollection } from "contentful";
import { IPageFields } from "types/generated/contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
  host: "preview.contentful.com",
});

export const getClient = (preview: boolean) =>
  preview ? previewClient : client;

export async function getPageBySlug(
  slug: string,
  preview = false
): Promise<IPageFields> {
  const entries: EntryCollection<IPageFields> = await getClient(
    preview
  ).getEntries({
    content_type: "page",
    limit: 1,
    include: 10,
    "fields.slug[in]": slug,
  });

  return { ...entries.items[0].fields };
}
