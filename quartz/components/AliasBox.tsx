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

  // add styling for reduced opacity / greyed out
  AliasBox.css = `
    .alias-box span {
      color: #bbb;        /* light grey */
      font-size: 0.9em;   /* slightly smaller */
      opacity: 0.7;       /* partially faded */
    }
  `
  return AliasBox
}) satisfies QuartzComponentConstructor
