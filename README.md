# faux.digital

## To Do

- uhh, docs
  - Polish architecture
  - Write-up: Evaluate headless CMS options
- Last components:
  - Image component
  - Alternating image section
- Features:
  - Component catalog
- Abstract away contentful client calls
- Performance:
  - Variable fonts + subsetting
  - Responsive, lazy-loaded images
  - lighthouse-plugin-field-performance: to access the Chrome UX report, the page must be crawlable and indexable
- Font Perf:
  - Add fonts as static assets
  - Inline font-face declaration
  - <link rel="preload" as="font" href="" crossorigin>
- Add Lighthouse performance budgets

## Architecture

```
                                        Build static output
                                          +-------------+
+------------+                            |             |                      +---------------+
|            | (Un)Publish EVENT          | CI Pipeline |  Deploy assets       |               |
| Contentful +--------------------------->+ (Jenkins)   +--------------------->+      CDN      |
|            |                            |             |                      |               |
+-----+--+---+                            +-------------+                      +---------------+
      ^  |
      |  |
      |  |
      |  | Draft Content via
      |  | Preview API
      |  |
      |  |             +----------------+
      |  +------------>+                |
      +                |                |
Author admin           | Preview Server |
                       |                |
                       |                |
                       +----------------+

```
