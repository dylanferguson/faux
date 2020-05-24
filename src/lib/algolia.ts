import algoliasearch from "algoliasearch/lite";

export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY as string
).initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX as string);

export const search = (query: string, params = {}) =>
  searchClient.search(query, params);
