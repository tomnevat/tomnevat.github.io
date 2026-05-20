/*
  TOM NEVAT PORTFOLIO DATA
  -------------------------
  Main editable content file.

  To replace or add an image:
  1. Put the image inside the matching images folder.
  2. Change the src path below.
  3. Update alt text.

  Gallery layout:
  - All gallery images use the same height.
  - Width is controlled by size: "square", "small", "normal", "wide", "large".
  - Add { placeholder: true, size: "square", caption: "Empty slot" } for an empty test tile.
*/

window.SITE_DATA = {
  brand: {
    name: "Tom Nevat",
    logo: "images/tom-nevat-logo.png",
    tagline: "Illustration and Surface Pattern Design",
    intro: "Tom Nevat is a surface pattern designer and illustrator creating hand-drawn artwork for fabric, wallpaper, home decor, stationery, and print products. The work combines expressive line, painterly texture, playful color, and nature-inspired motifs. Selected designs are available for licensing, and custom collections can be created in collaboration with brands and art directors.",
    email: "TomNevat@gmail.com",
    phone: "",
    socials: [
      { label: "Instagram", short: "IG", desc: "recent work, process and studio updates", url: "https://www.instagram.com/tomnevat/" },
      { label: "Patterned", short: "PT", desc: "surface pattern licensing portfolio", url: "https://www.patterned.com/tomnevat" },
      { label: "Pinterest", short: "PI", desc: "collections, inspiration and visual boards", url: "https://www.pinterest.com/tnevat/" },
      { label: "Spoonflower", short: "SF", desc: "shop fabrics and wallpaper", url: "https://www.spoonflower.com/profiles/tomnevat" },
      { label: "Good Mood Prints", short: "GM", desc: "shop art prints", url: "https://www.goodmoodprints.com/artists/tom.nevat?artist=b7f250bc-0982-4dd8-bdad-80d6d76da267" }
    ]
  },

  home: {
    gallery: [
      { src: "images/home/orange-wildflowers-pattern.jpg", alt: "Orange wildflower surface pattern by Tom Nevat", size: "large" },
      { src: "images/home/orange-notebook-mockup.jpg", alt: "Orange floral pattern notebook mockup", size: "wide" },
      { src: "images/home/pink-notebook-mockup.jpg", alt: "Soft pink floral pattern notebook mockup", size: "wide" },
      { src: "images/home/pink-wildflowers-pattern.jpg", alt: "Pink and green wildflower surface pattern", size: "normal" },
      { src: "images/home/boho-wallpaper-mockup.jpg", alt: "Boho doodles wallpaper mockup in a children's room", size: "wide" },
      { src: "images/home/seashells-pattern.jpg", alt: "Blue seashell surface pattern", size: "normal" },
      { src: "images/home/teapot-illustration.jpg", alt: "Tea pot and fruit illustration", size: "small" },
      { src: "images/home/forest-illustration.jpg", alt: "Green forest illustration", size: "normal" }
    ]
  },

  surface: {
    intro: "Tom Nevat’s surface pattern portfolio includes hand-drawn florals, playful coordinates, boho marks, coastal motifs, and artwork developed for fabric, wallpaper, paper goods, stationery, and lifestyle products. Designs are available for licensing, with the option to develop new colorways, coordinating prints, or custom collections for a specific product direction.",
    collections: [
      {
        slug: "wildflowers",
        title: "Wildflowers",
        cover: "images/collections/wildflowers/wildflowers-red-orange-pink.png",
        description: "A hand-drawn floral collection combining warm orange blooms, soft pink colorways, leafy stems, and painterly botanical texture.",
        gallery: [
          { src: "images/collections/wildflowers/orange-pattern.jpg", alt: "Orange Wildflowers pattern", size: "large" },
          { src: "images/collections/wildflowers/orange-notebook-mockup.jpg", alt: "Orange Wildflowers notebook mockup", size: "wide" },
          { src: "images/collections/wildflowers/pink-pattern.jpg", alt: "Pink Wildflowers pattern", size: "normal" },
          { src: "images/collections/wildflowers/pink-notebook-mockup.jpg", alt: "Pink Wildflowers notebook mockup", size: "wide" },
          { src: "images/collections/wildflowers/warm-colorway.jpg", alt: "Warm floral colorway", size: "normal" },
          { src: "images/collections/wildflowers/soft-colorway.jpg", alt: "Soft floral colorway", size: "normal" },
          { src: "images/collections/wildflowers/wildflowers-red-orange-pink.png", alt: "Soft floral colorway", size: "normal" },
          { placeholder: true, size: "square", caption: "Empty slot" },
          { placeholder: true, size: "square", caption: "Empty slot" },
           { placeholder: true, size: "square", caption: "Empty slot" },
          { placeholder: true, size: "square", caption: "Empty slot" }
        ]
      },
      {
        slug: "boho-seaside",
        title: "Boho & Seaside Coordinates",
        cover: "images/collections/boho-seaside/cover.jpg",
        description: "A playful coordinate group with boho doodles, hand-drawn marks, coastal shells, soft blues, and wallpaper/product potential.",
        gallery: [
          { src: "images/collections/boho-seaside/boho-blue-coordinate.jpg", alt: "Boho Doodles blue coordinate pattern", size: "normal" },
          { src: "images/collections/boho-seaside/boho-wallpaper-mockup.jpg", alt: "Boho Doodles wallpaper mockup", size: "wide" },
          { src: "images/collections/boho-seaside/seashells-pattern.jpg", alt: "Seaside Shells pattern", size: "large" },
          { placeholder: true, size: "square", caption: "Empty slot" },
          { placeholder: true, size: "square", caption: "Empty slot" }
        ]
      },
      {
        slug: "orchid",
        title: "orchid",
        cover: "images/collections/Orchid-and-Butterflies/Orchid-butterfly-cover.jpg",
        description: "orchid and butterfly",
       gallery: [
          { src: "images/collections/Orchid-and-Butterflies/Orchid-butterfly-pattern1.jpg", alt: "Orchid butterfly pattern", size: "wide" },
          { src: "images/collections/Orchid-and-Butterflies/Orchid-butterfly-pattern2.2.jpg", alt: "butterflies", size: "normal" },
          { src: "images/collections/Orchid-and-Butterflies/Orchid-butterfly-pattern3.2.jpg", alt: "check", size: "large" },
        ]
      },
      {
        slug: "new-collection-two",
        title: "New Collection",
        cover: "",
        description: "Placeholder for a future pattern collection.",
        placeholder: true,
        gallery: [
          { placeholder: true, size: "square", caption: "Empty slot" },
          { placeholder: true, size: "normal", caption: "Empty slot" }
        ]
      },
      {
        slug: "new-collection-three",
        title: "New Collection",
        cover: "",
        description: "Placeholder for a future pattern collection.",
        placeholder: true,
        gallery: [
          { placeholder: true, size: "large", caption: "Empty slot" }
        ]
      }
    ]
  },

  illustration: {
    intro: "This illustration portfolio gathers painterly still lifes, botanical studies, sketchbook experiments, personal projects, and art challenges. The work has a warm, handmade quality, with loose shapes, expressive marks, and color palettes that can support editorial, product, stationery, and print projects.",
    categories: [
      {
        slug: "painting-drawing-print",
        title: "Painting, Drawing and Print",
        cover: "images/illustrations/painting-drawing-print/cover.jpg",
        description: "Finished illustrations, painted still lifes, drawings, and print-focused artwork.",
        gallery: [
          { src: "images/illustrations/painting-drawing-print/tea-pot.jpg", alt: "Tea pot and lemon illustration", size: "small" },
          { src: "images/illustrations/painting-drawing-print/fruits.jpg", alt: "Fruit illustration", size: "small" },
          { src: "images/illustrations/painting-drawing-print/orchid-cup.jpg", alt: "Flower cup illustration", size: "small" }
        ]
      },
      {
        slug: "sketchbook-art-challenges-personal-projects",
        title: "Sketchbook, Art Challenges and Personal Projects",
        cover: "images/illustrations/sketchbook-art-challenges-personal-projects/cover.jpg",
        description: "Sketchbook pages, loose experiments, prompt-based work, and self-directed visual projects.",
        gallery: [
          { src: "images/illustrations/sketchbook-art-challenges-personal-projects/forest-study.jpg", alt: "Green forest sketchbook study", size: "normal" },
          { src: "images/illustrations/sketchbook-art-challenges-personal-projects/tea-pot.jpg", alt: "Tea pot illustration study", size: "small" },
          { src: "images/illustrations/sketchbook-art-challenges-personal-projects/fruits.jpg", alt: "Fruit illustration study", size: "small" }
        ]
      }
    ]
  },

  about: {
    title: "",
    text: [
      "Tom Nevat is a surface pattern designer and illustrator creating hand-drawn artwork for fabric, wallpaper, home decor, stationery, and print products. The work often starts with expressive sketches, painted textures, and loose linework, then develops into patterns, colorways, product mockups, and illustration pieces.",
      "Her visual language moves between botanical motifs, playful florals, boho-inspired coordinates, coastal themes, and everyday objects. The result is artwork that feels warm, handmade, and easy to imagine on real products.",
      "Selected patterns and illustrations are available for licensing. Tom is also open to collaborations, custom collections, new colorway development, and artwork created for a specific brand, season, or product range."
    ]
  },

  contact: {
    title: "Contact",
    intro: "For licensing, collaborations, custom pattern collections, illustration inquiries, or print-related questions, please get in touch.",
    note: "You can email directly or visit the linked portfolio and shop pages below."
  }
};
