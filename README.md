# faux.digital

## To Do

- uhh, docs
  - Polish architecture
  - Write-up: Evaluate headless CMS options
- Work:
  - Alternating image section
  - Component catalog
  - Abstract away contentful client calls
- Performance:
  - Variable fonts
  - Responsive, lazy-loaded images
  - lighthouse-plugin-field-performance

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
