---
name: Organic motion and content visibility
description: Durable guidance for adding animated organic decoration without hiding or displacing application content.
---

Decorative organic motion should remain on pseudo-elements or explicitly decorative layers, while content containers keep normal flow sizing and stacking.

**Why:** Broad section selectors and percentage-height children caused content to be hidden or pushed outside visible cards when new sections were introduced.

**How to apply:** Do not use `nth-of-type` rules to hide page sections. Avoid `h-full` plus bottom-pushed content when the parent only has a minimum height; let the content determine its height and keep animations on isolated background layers.