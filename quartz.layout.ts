import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => page.fileData.slug !== "index", // hide on index.md
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
right: [
  Component.ConditionalRender({
    component: Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,
        scale: 1.2,
        repelForce: 0.8,
        centerForce: 0.2,
        linkDistance: 60,
        fontSize: 0.8,
        opacityScale: 2,
        removeTags: ["placeholder"],
        showTags: false,
        enableRadial: false,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 1,
        repelForce: 0.7,
        centerForce: 0.3,
        linkDistance: 80,
        fontSize: 0.8,
        opacityScale: 2,
        removeTags: ["placeholder"],
        showTags: false,
        enableRadial: true,
      },
    }),
    condition: (page) => page.fileData.slug !== "index", // only shows normal graph on non-index pages
  }),
  // For the index page only, render a smaller local-only graph
  Component.ConditionalRender({
    component: Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,
        scale: 1.2,
        repelForce: 0.8,
        centerForce: 0.2,
        linkDistance: 60,
        fontSize: 0.8,
        opacityScale: 2,
        removeTags: ["placeholder"],
        showTags: false,
        enableRadial: false,
      },
      globalGraph: undefined, // disable global graph on index
    }),
    condition: (page) => page.fileData.slug === "index", // only on index.md
  }),
  Component.DesktopOnly(Component.TableOfContents()),
  Component.Backlinks(),
],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
