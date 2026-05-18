/*
  TOM NEVAT PORTFOLIO DATA
  -------------------------
  This is the main file you edit when you want to update the site.

  For mosaic gallery image sizes, use one of:
  "small", "normal", "wide", "tall", "large"

  To replace or add an image:
  1. Put the image inside the matching images folder.
  2. Change the src path below.
  3. Update alt text and caption.
*/

window.SITE_DATA = {
  brand: {
    name: "Tom Nevat",
    logo: "images/tom-nevat-logo.png",
    tagline: "Illustration and Surface Pattern Design",
    intro: "Tom Nevat is a surface pattern designer and illustrator creating hand-drawn artwork for fabric, wallpaper, home decor, stationery, and print products. The work combines expressive line, painterly texture, playful color, and nature-inspired motifs. Selected designs are available for licensing, and custom collections can be created in collaboration with brands and art directors.",
    email: "tomnevat@gmail.com",
    socials: [
      { label: "Instagram", short: "IG", url: "https://www.instagram.com/tomnevat/" },
      { label: "Patterned", short: "PT", url: "https://www.patterned.com/tomnevat" },
      { label: "Pinterest", short: "PI", url: "https://www.pinterest.com/tnevat/" },
      { label: "Spoonflower", short: "SF", url: "https://www.spoonflower.com/profiles/tomnevat" },
      { label: "Good Mood Prints", short: "GM", url: "https://www.goodmoodprints.com/artists/tom.nevat?artist=b7f250bc-0982-4dd8-bdad-80d6d76da267" }
    ]
  },

  home: {
    gallery: [
      { src: "images/home/orange-wildflowers-pattern.jpg", alt: "Orange wildflower surface pattern by Tom Nevat", size: "large", caption: "Orange Wildflowers" },
      { src: "images/home/orange-notebook-mockup.jpg", alt: "Orange floral pattern notebook mockup", size: "wide", caption: "Pattern Mockup" },
      { src: "images/home/pink-notebook-mockup.jpg", alt: "Soft pink floral pattern notebook mockup", size: "wide", caption: "Colorway Mockup" },
      { src: "images/home/pink-wildflowers-pattern.jpg", alt: "Pink and green wildflower surface pattern", size: "tall", caption: "Pink Wildflowers" },
      { src: "images/home/boho-wallpaper-mockup.jpg", alt: "Boho doodles wallpaper mockup in a children's room", size: "wide", caption: "Wallpaper Mockup" },
      { src: "images/home/seashells-pattern.jpg", alt: "Blue seashell surface pattern", size: "normal", caption: "Seaside Shells" },
      { src: "images/home/teapot-illustration.jpg", alt: "Tea pot and fruit illustration", size: "tall", caption: "Illustration" },
      { src: "images/home/forest-illustration.jpg", alt: "Green forest illustration", size: "normal", caption: "Painting" }
    ]
  },

  surface: {
    intro: "Tom Nevat’s surface pattern portfolio includes hand-drawn florals, playful coordinates, boho marks, coastal motifs, and artwork developed for fabric, wallpaper, paper goods, stationery, and lifestyle products. Designs are available for licensing, with the option to develop new colorways, coordinating prints, or custom collections for a specific product direction.",
    collections: [
      {
        slug: "orange-wildflowers",
        title: "Orange Wildflowers",
        cover: "images/collections/orange-wildflowers/cover.jpg",
        description: "A warm floral pattern with orange blooms, olive stems, painterly texture, and a soft vintage feeling.",
        gallery: [
          { src: "images/collections/orange-wildflowers/pattern.jpg", alt: "Orange Wildflowers pattern", size: "large", caption: "Main Pattern" },
          { src: "images/collections/orange-wildflowers/notebook-mockup.jpg", alt: "Orange Wildflowers notebook mockup", size: "wide", caption: "Notebook Mockup" }
        ]
      },
      {
        slug: "pink-wildflowers",
        title: "Pink Wildflowers",
        cover: "images/collections/pink-wildflowers/cover.jpg",
        description: "A softer floral direction with pink blooms, fresh greens, and a light botanical mood.",
        gallery: [
          { src: "images/collections/pink-wildflowers/pattern.jpg", alt: "Pink Wildflowers pattern", size: "large", caption: "Main Pattern" },
          { src: "images/collections/pink-wildflowers/notebook-mockup.jpg", alt: "Pink Wildflowers notebook mockup", size: "wide", caption: "Notebook Mockup" }
        ]
      },
      {
        slug: "floral-colorways",
        title: "Floral Colorways",
        cover: "images/collections/floral-colorways/cover.jpg",
        description: "Two expressive floral color directions with loose linework, bold blooms, and layered hand-drawn texture.",
        gallery: [
          { src: "images/collections/floral-colorways/warm-colorway.jpg", alt: "Warm floral colorway", size: "normal", caption: "Warm Colorway" },
          { src: "images/collections/floral-colorways/soft-colorway.jpg", alt: "Soft floral colorway", size: "normal", caption: "Soft Colorway" }
        ]
      },
      {
        slug: "boho-doodles",
        title: "Boho Doodles",
        cover: "images/collections/boho-doodles/cover.jpg",
        description: "A playful coordinate pattern built from hand-drawn marks, waves, dots, spirals, and simple geometric shapes.",
        gallery: [
          { src: "images/collections/boho-doodles/blue-coordinate.jpg", alt: "Boho Doodles blue coordinate pattern", size: "large", caption: "Blue Coordinate" },
          { src: "images/collections/boho-doodles/wallpaper-mockup.jpg", alt: "Boho Doodles wallpaper mockup", size: "wide", caption: "Wallpaper Mockup" }
        ]
      },
      {
        slug: "seaside-shells",
        title: "Seaside Shells",
        cover: "images/collections/seaside-shells/cover.jpg",
        description: "A coastal shell pattern with hand-drawn seashells, starfish, pebbles, and a calm blue palette.",
        gallery: [
          { src: "images/collections/seaside-shells/pattern.jpg", alt: "Seaside Shells pattern", size: "large", caption: "Main Pattern" }
        ]
      }
    ]
  },

  illustration: {
    intro: "This illustration portfolio gathers painterly still lifes, botanical studies, sketchbook experiments, personal projects, and art challenges. The work has a warm, handmade quality, with loose shapes, expressive marks, and color palettes that can support editorial, product, stationery, and print projects.",
    categories: [
      {
        slug: "drawing",
        title: "Drawing",
        cover: "images/illustrations/drawing/cover.jpg",
        description: "Finished illustrations, painted still lifes, and standalone artwork.",
        gallery: [
          { src: "images/illustrations/drawing/tea-pot.jpg", alt: "Tea pot and lemon illustration", size: "tall", caption: "Tea Pot" },
          { src: "images/illustrations/drawing/fruits.jpg", alt: "Fruit illustration", size: "tall", caption: "Fruit Study" },
          { src: "images/illustrations/drawing/orchid-cup.jpg", alt: "Flower cup illustration", size: "tall", caption: "Flowers" }
        ]
      },
      {
        slug: "sketchbook",
        title: "Sketchbook",
        cover: "images/illustrations/sketchbook/cover.jpg",
        description: "Loose pages, experiments, process work, and visual research.",
        gallery: [
          { src: "images/illustrations/sketchbook/forest-study.jpg", alt: "Green forest sketchbook study", size: "tall", caption: "Forest Study" }
        ]
      },
      {
        slug: "personal-projects",
        title: "Personal Projects",
        cover: "images/illustrations/personal-projects/cover.jpg",
        description: "Self-directed work, painted objects, and visual worlds.",
        gallery: [
          { src: "images/illustrations/personal-projects/orchid-cup.jpg", alt: "Cup with flowers illustration", size: "tall", caption: "Flower Cup" },
          { src: "images/illustrations/personal-projects/fruits.jpg", alt: "Fruit personal project illustration", size: "tall", caption: "Fruit Study" }
        ]
      },
      {
        slug: "art-challenges",
        title: "Art Challenges",
        cover: "images/illustrations/art-challenges/cover.jpg",
        description: "Prompt-based illustration work and creative challenges.",
        gallery: [
          { src: "images/illustrations/art-challenges/tea-pot.jpg", alt: "Tea pot art challenge illustration", size: "tall", caption: "Tea Pot" },
          { src: "images/illustrations/art-challenges/forest-study.jpg", alt: "Forest art challenge illustration", size: "normal", caption: "Forest" }
        ]
      }
    ]
  },

  about: {
    title: "Tom Nevat",
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
