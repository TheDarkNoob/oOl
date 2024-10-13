import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleDescription({ fileData, displayClass }: QuartzComponentProps) {
  const description = fileData.frontmatter?.description
  if (description) {
    return <h3 class={`article-description ${displayClass ?? ""}`}>{description}</h3>
  } else {
    return null
  }
}
ArticleDescription.css = `
.article-description {
  color:#777777;
  margin: 0 0 0.5rem 0;
}
`

export default (() => ArticleDescription) satisfies QuartzComponentConstructor
