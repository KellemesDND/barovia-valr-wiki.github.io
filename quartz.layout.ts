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
    Component.TagList(),
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
      Component.Graph({
          localGraph: {
              drag: true,
              zoom: true,
              depth: 1,              // 1 hop is usually enough for readability
              scale: 1.2,            // slightly zoomed in to make nodes bigger
              repelForce: 0.8,       // stronger repulsion keeps nodes from overlapping
              centerForce: 0.2,      // gentle centering so it doesn’t look stiff
              linkDistance: 60,      // more space between nodes for clarity
              fontSize: 0.8,         // slightly bigger text
              opacityScale: 2,       // full opacity on labels
              removeTags: [],
              showTags: false,
              enableRadial: false,
          },
          globalGraph: {
              drag: true,
              zoom: true,
              depth: -1,             // show all hops
              scale: 1,              // default zoom; slightly higher if you want bigger nodes
              repelForce: 0.7,       // moderate repulsion for readability
              centerForce: 0.3,      // keeps layout centered
              linkDistance: 80,      // gives breathing room for a larger graph
              fontSize: 0.8,         // bigger node labels for clarity
              opacityScale: 2,       // labels fully visible
              removeTags: [],
              showTags: false,
              enableRadial: true,    // keeps graph organized in a radial layout
          },
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
