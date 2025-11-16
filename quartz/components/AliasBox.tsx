import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const AliasBox: QuartzComponent = ({ page }: QuartzComponentProps) => {
    const aliases = page.fileData.frontmatter.aliases
    if (!aliases || aliases.length === 0) return ""

    return `
      <div style="
        background:#2b1b1b;
        color:white;
        padding:15px;
        border-radius:8px;
        margin-top:20px;
      ">
        <h2>🔖 Aliases</h2>
        <p>${aliases.join(", ")}</p>
      </div>
    `
  }

  return AliasBox
}) satisfies QuartzComponentConstructor
