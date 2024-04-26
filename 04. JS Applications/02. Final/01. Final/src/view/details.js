import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteSolution, getSolutionById, getTotalLikesCount, like, getUserLikesCount } from "../api/data.js";

const detailsTemplate = (product, isOwner, onDelete, isLoggedIn, totalLikesCount, onClickLike, didUserLiked) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${product.imageUrl}" alt="example1"/>
            <div>
                <p id="details-type">${product.type}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p id="description">${product.description}</p>
                        <p id="more-info">${product.learnMore}</p>
                    </div>
                </div>

                <h3>Like Solution: <span id="like">${totalLikesCount}</span></h3>
                <div id="action-buttons">
                    ${isOwner ? html` <a href="/edit/${product._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : ""}
                    ${isLoggedIn && !isOwner && didUserLiked === 0 ? html`<a href="javascript:void(0)" @click=${onClickLike} id="like-btn">Like</a>` : ""}
                </div>

            </div>
        </div>
    </section>`;

export async function detailsPage(context) {

    const characterId = context.params.id;
    const fact = await getSolutionById(characterId);
    const user = context.user;

    let userId;
    let totalLikesCount;
    let getUserLikesCounted;
    if (user != null) { userId = user._id; getUserLikesCounted = await getUserLikesCount(characterId, userId); }

    const isOwner = user && fact._ownerId == user._id;
    const isLoggedIn = user !== undefined;
    totalLikesCount = await getTotalLikesCount(characterId);
    context.render(detailsTemplate(fact, isOwner, onDelete, isLoggedIn, totalLikesCount, onClickLike, getUserLikesCounted));

    async function onClickLike() {
        await like(characterId);

        totalLikesCount = await getTotalLikesCount(characterId);
        getUserLikesCounted = await getUserLikesCount(characterId, userId);

        context.render(detailsTemplate(fact, isOwner, onDelete, isLoggedIn, totalLikesCount, onClickLike, getUserLikesCounted));

    }

    async function onDelete() {
        const confirmed = confirm("Are you sure?");
        if (confirmed) { await deleteSolution(characterId); context.page.redirect("/dashboard"); }
    }
}