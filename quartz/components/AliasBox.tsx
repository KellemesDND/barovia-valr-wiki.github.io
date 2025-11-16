import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  // This function itself is the QuartzComponent
  function AliasBox({ fileData, displayClass }: QuartzComponentProps) {
    const aliases = fileData.frontmatter?.aliases || []

    if (aliases.length === 0) return null

    return (
      <p class={displayClass} style="opacity:0.6; font-size:0.9em; margin-top:-5px; margin-bottom:-5px;">
        Aliases: {aliases.join(", ")}
      </p>
    )
  }

  return AliasBox
}) satisfies QuartzComponentConstructor
