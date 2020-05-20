# faux.digital

## To Do

- Pages:
    - /releaes-notes
        - pagination: `/release-notes/page/2`
        - fallback to `/release-notes` on `/release-notes/page/1`
        - simplfieid views on index pages
    - /blog
    - /colophon
    - /cards
    - /help
- Model for fetching, parsing data: colocate with pages?
    - Automated release note publishing: Publish changelog to Contentful, parsing the release notes via a [markdown parser](https://github.com/markdown-it/markdown-it)
    - GraphQL could help cleanup the queries if they get annoying to manage
- [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode)
- Simplify [env var setup](https://nextjs.org/docs/api-reference/next.config.js/environment-variables)
- Building out a component library:
    - Contentful Models
    - Generated types
    - Documentation
- Content sync and restore
- Tests
- CI
- Deployment
- Logo

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
