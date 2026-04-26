# Bionic Font Rule

The "bionic" reading style applies three font weights to each word so the eye
can latch onto a strong leading anchor and skim the rest. We use it for the
main paragraph copy on research articles only (titles, page header/nav and
footer keep their original weights).

## Recipe

Apply 3 font weights per word.

### Bold characters
- length ≤ 3 → 1 char
- length 4-5 → 2 chars
- length ≥ 6 → (length − 3) chars

### Semi-bold characters
- length ≤ 2 → 0 chars
- length ≥ 3 → 1 char

### Regular characters
- whatever remains

### Font weights
- Bold: `700`
- Semi-bold: `600`
- Regular: `400`

### Order
Bold always first, then semi-bold, then regular.

## Examples

| Word          | Length | Bold       | Semi-bold | Regular |
| ------------- | ------ | ---------- | --------- | ------- |
| `the`         | 3      | `t`        | `h`       | `e`     |
| `people`      | 6      | `peo`      | `p`       | `le`    |
| `performance` | 11     | `performa` | `n`       | `ce`    |

## Where it is applied

- Implementation: `js/bionic.js`
- CSS classes (`.b-bold`, `.b-semi`, `.b-reg`) and `<script>` include live in
  `_layouts/duality-posts.html` so the rule applies to every research article.
- Targets: `p, li, blockquote, dd, summary, td, figcaption` inside
  `.research-content`.
- Skipped: headings (`h1`–`h6`), `code`, `pre`, `kbd`, `samp`, `var`,
  `b`, `strong`, `script`, `style`, the page title/meta block, navigation, and
  the footer. Any element marked with class `bionic-skip` or
  `data-bionic="skip"` is also skipped.

## Notes

- Words are detected via Unicode letter runs (`\p{L}+`), so punctuation,
  digits and whitespace pass through unchanged. Hyphenated tokens like
  `feed-forward` are processed per letter run (`feed`, `forward`).
- The transformer wraps text nodes in `<span class="bionic">…</span>` and
  re-runs are no-ops thanks to a `bionic-processed` marker on the parent.
