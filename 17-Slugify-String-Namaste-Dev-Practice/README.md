Slugs are widely used in blogs, e-commerce, and CMS platforms for clean and SEO-friendly URLS.

# Things to do

- Create an input where the user can type text.
- Implement a slugify function that follows these rules:
- Convert all characters to lowercase.
- Remove accents/diacritics (e.g., Café - cafe).
- Replace any sequence of spaces or special characters with a single -.
- Return an empty string if the input is only whitespace.
- Display the resulting slug below the input.

# Examples

input: "My First Blog!"<br>
output: "my-first-blog"

input: "Café del Mar!"<br>
output: "cafe-del-mar"

input: "       "<br>
output: ""