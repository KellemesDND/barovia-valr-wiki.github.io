import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  // The returned function is the QuartzComponent itself
  const AliasBox: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const aliases = fileData.frontmatter?.aliases || []

    if (aliases.length === 0) return null

    return (
      <div class={displayClass}>
        <p>Aliases: {aliases.join(", ")}</p>
      </div>
    )
  }

  return AliasBox
}) satisfies QuartzComponentConstructor
