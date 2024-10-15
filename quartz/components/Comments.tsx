import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface GraphCommentOptions {
  graphcommentId: string
}

interface CommentsOptions {
  provider: "graphcomment"
  options: GraphCommentOptions
}

export default ((opts: CommentsOptions) => {
  function Comments({ displayClass }: QuartzComponentProps) {
    return <div id="graphcomment" className={`${displayClass ?? ""} graphcomment`}></div>
  }

  Comments.afterDOMLoaded = () => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `
      window.gc_params = {
        graphcomment_id: "${opts.options.graphcommentId}",
        // Vous pouvez ajouter d'autres options ici si nécessaire
      };
      (function() {
        var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
        gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
      })();
    `
    document.body.appendChild(script)
  }

  return Comments
}) satisfies QuartzComponentConstructor