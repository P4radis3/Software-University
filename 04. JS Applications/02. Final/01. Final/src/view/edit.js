import { html } from "../../node_modules/lit-html/lit-html.js";
import { editSolutionById, getSolutionById } from "../api/data.js";

const editTemplate = (product, onSubmit) => html`<section id="edit">
<div class="form">
  <img class="border" src="./images/border.png" alt="" />
  <h2>Edit Solution</h2>
  <form class="edit-form" @submit=${onSubmit}>
    <input
      type="text"
      name="type"
      id="type"
      placeholder="Solution Type"
      value="${product.type}"
    />
    <input
      type="text"
      name="image-url"
      id="image-url"
      placeholder="Image URL"
      value="${product.imageUrl}"
    />

    <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="2"
      cols="10"
    >${product.description}</textarea>  
    
    <textarea
      id="more-info"
      name="more-info"
      placeholder="more Info"
      rows="2"
      cols="10"
    >${product.learnMore}</textarea>
    
    <button type="submit">Edit</button>
  </form>
</div>
</section>
`;


export async function editPage(ctx) {

    const solutionId = ctx.params.id;
    const solution = await getSolutionById(solutionId);
    ctx.render(editTemplate(solution, onSubmit));

    async function onSubmit(fact) {
        fact.preventDefault();
        const formData = new FormData(fact.target);

        const editSolution = {
            type: formData.get("type").trim(),
            imageUrl: formData.get("image-url").trim(),
            description: formData.get("description").trim(),
            learnMore: formData.get("more-info").trim(),
        };

        if (Object.values(editSolution).some((x) => !x)) { return alert("All fields are required!"); }
        await editSolutionById(solutionId, editSolution);
        fact.target.reset();
        ctx.page.redirect(`/details/${solutionId}`);

    }
}