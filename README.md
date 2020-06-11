# faux.digital

## To Do

- uhh, docs
- Last components:
  - Image component
  - Alternating image section

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
