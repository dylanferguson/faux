# faux.digital

## To Do

- uhh, docs
  - Polish architecture
  - Write-up: Evaluate headless CMS options
- Last components:
  - Image component
  - Alternating image section
- Abstract away contentful client calls
- Performance:
  - Variable fonts + subsetting
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
