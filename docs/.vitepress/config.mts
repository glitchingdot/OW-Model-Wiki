import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Outer Wilds Model Wiki",
  description: "A wiki of model references from the game Outer Wilds",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Travellers", link: "/travellers" },
      { text: "Side Characters", link: "/side-characters" },
      { text: "Miscellaneous", link: "/misc" },
    ],

    search: {
      provider: "local"
    },

    sidebar: [
      {
        text: "Travellers",
        items: [
          { text: "Chert", link: "/travellers/Chert/" },
          { text: "Esker", link: "/travellers/Esker/" },
          { text: "Feldspar", link: "/travellers/Feldspar/" },
          { text: "Gabbro", link: "/travellers/Gabbro/" },
          { text: "Hatchling", link: "travellers/Hatchling" },
          { text: "Riebeck", link: "/travellers/Riebeck/" },
          {
            text: "Spoiler Characters",
            collapsed: true,
            items: [
              { text: "Solanum", link: "/travellers/SPOILERS/Solanum/" },
              {
                text: "The Stranger",
                link: "/travellers/SPOILERS/The Stranger/",
              },
            ],
          },
        ],
      },
      {
        text: "Side Characters",
        items: [{ text: "Slate", link: "/side-characters/Slate" }],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/glitchingdot/OW-Model-Wiki" },
    ],
  },
});
