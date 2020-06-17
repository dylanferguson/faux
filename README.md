# faux.digital

## To Do

- uhh, docs
- Last components:
  - Image component
  - Alternating image section
- See chunk size increases on each PR
- Polish architecture

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
