require("@babel/polyfill");
import { elements } from "./base";

//Private function
const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.id}">
            <figure class="results__fig"><img src="img/${recipe.img_url}" alt="Test"></figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
            </a>
        </li>`;
        //ul ruu nemne.
    elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};
export const clearSearchQuery = () => {
    elements.searchInput.value = "";
};
export const clearSearchResult = () => {
    elements.searchResultList.innerHTML = "";
};
export const getInput = () => elements.searchInput.value;
export const renderRecipes = recipes => {
    recipes.forEach(renderRecipe);
};