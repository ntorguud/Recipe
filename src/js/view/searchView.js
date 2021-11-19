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
    elements.pageButtons.innerHTML = "";
};
export const getInput = () => elements.searchInput.value;

const createButton = (page, type, direction) => `<button class="btn-inline results__btn--${type}">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${direction} data-goto=${page}"></use>
        </svg>
        <span>Хуудас ${page}</span>
        </button>`;

export const renderRecipes = (recipes, currentPage = 1, resultPerPage = 10) => {
    //Hailtiin ur dung huudaslaj uzuuleh
    //page = 2, start = 10, end = 20
    const start = (currentPage - 1) * resultPerPage;
    const end = currentPage * resultPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    //Paging buttonuudiig gargaj ireh
    const totalPages = Math.ceil(recipes.length / resultPerPage);

    renderButtons(currentPage, totalPages);
};

const renderButtons = (currentPage, totalPages) => {
    let buttonHTML;

    if(currentPage ===1 && totalPages > 1) {
        //You're on the 1st page, show 2nd page button.
        buttonHTML = createButton(2, `next`, `right`, 2);

    } else if(currentPage < totalPages) {
        //You're on the middle pages. Show both previous and next page buttons
        buttonHTML = createButton(currentPage - 1, `prev`, `left`);
        buttonHTML += createButton(currentPage + 1, `next`, `right`, currentPage);

    } else if(currentPage === totalPages) {
        //You're on the last page. Show previous page button.
        buttonHTML = createButton(currentPage - 1, `prev`, `left`, currentPage);
    };

    elements.pageButtons.insertAdjacentHTML("afterbegin", buttonHTML);
};
