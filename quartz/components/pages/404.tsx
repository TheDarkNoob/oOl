import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>404 🌱</h1>
      <h2>Cette page n'existe que dans ma tête 🧠 (pour l'instant !)</h2>
      <p><img src="/images/404-seed.jpeg"></img></p>
      <br />
      <button onclick="history.back()">RETOUR</button>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
