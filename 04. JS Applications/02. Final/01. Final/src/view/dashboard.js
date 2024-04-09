import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllSolutions } from "../api/data.js";

const dashboardTemplate = (solutions) => html`
  <h2>Solutions</h2>
  <section id="solutions">
    ${solutions.length === 0
      ? html`<h2>No Solutions added.</h2>`
      : solutions.map(
          (p) => html`
            <div class="solution">
              <img src="${p.imageUrl}" alt="example1" />
              <div class="solution-info">
                <h3 class="type">${p.type}</h3>
                <p class="description">${p.description}</p>
                <a class="details-btn" href="/details/${p._id}">Learn More</a>
              </div>
            </div>
          `
        )}
  </section>
`;

export async function dashboardPage(ctx) {
    const events = await getAllSolutions();
    console.log(events);
    ctx.render(dashboardTemplate(events));
}
