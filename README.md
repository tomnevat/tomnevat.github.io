# Tom Nevat Portfolio Site

A simple static portfolio website for GitHub Pages.

## What to edit most of the time

Edit this file:

```text
js/data.js
```

That file controls:

- Brand intro text
- Contact email
- Social links
- Home gallery
- Surface pattern collections
- Collection pages
- Illustration categories
- About text
- Contact text

## How to replace images

1. Put your real image inside the relevant folder under `images/`.
2. Open `js/data.js`.
3. Replace the image path, for example:

```js
src: "images/collections/florals-forever/my-real-image.jpg"
```

## Mosaic image sizes

Use one of these values:

```js
size: "small"
size: "normal"
size: "wide"
size: "tall"
size: "large"
```

That controls the image size in the free mosaic gallery.

## How collection pages work

Collection pages use one shared file:

```text
collection.html
```

Each collection opens by URL, for example:

```text
collection.html?collection=florals-forever
```

The collection content comes from `js/data.js`.

## How illustration category pages work

Illustration category pages use one shared file:

```text
illustration-category.html
```

Example:

```text
illustration-category.html?category=sketchbook
```

## GitHub Pages upload

Upload all files and folders in this project to a GitHub repository.
Then enable GitHub Pages for the repository.
Use the root folder as the published site source.

## Notes

- The logo is saved as `images/tom-nevat-logo.png`.
- The current gallery images are placeholders.
- Replace the placeholder email in `js/data.js` before publishing.


## Current real content added

- Contact email: tomnevat@gmail.com
- Social links include Instagram, Patterned, Pinterest, Spoonflower, and Good Mood Prints.
- Home gallery uses the first uploaded floral patterns, mockups, and illustration samples as placeholders.
- Surface pattern portfolio is split into separate starting collections instead of one combined floral collection.

## Editing text

Edit `js/data.js`. Main text sections:
- `brand.intro` for the home page paragraph
- `surface.intro` for the surface pattern portfolio paragraph
- `illustration.intro` for the illustration portfolio paragraph
- `about.text` for the About page
- `contact.intro` and `contact.note` for Contact
