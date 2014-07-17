---
layout: slide
---

# TDD "Rules"?

- Test must be fast
  - Unless they add no real value OR pass when they SHOULD fail
- Don't touch the database
  - Only when the interaction with the database is already tested
- Mock dependencies away
  - Only when the interaction with the dependencies is already tested
- Unit test all the things
  - Unit test to catch edge cases
