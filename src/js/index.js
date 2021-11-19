/// MVC -Model, View, Controller Archictecture
/// No fetch() today, instead use axios
require("@babel/polyfill");
import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import Recipe from "./model/recipe";
import { renderRecipe, clearRecipe, highLightSelectedRecipe } from "./view/recipeView";
/**
 * Web app state
 * - Search query, result
 * - Found recipe
 * - Liked recipes
 * - Ingredients of selected recipe
 */

const state = {};

/**
 * Search controller
 * Model ==> Controller <== View
 * 
 */


const controlSearch = async() => {
    //1. Web-ees hailtiin key wordiiig gargarj avna.
    const query = searchView.getInput();


    if(query) {
        //2. New hailtiin object uusgej, state ruu search object hiine.
        state.search = new Search(query);

        //3. Hailt hiihed zoriulj UI-iig beldene.
        searchView.clearSearchQuery();
        searchView.clearSearchResult();
        renderLoader(elements.searchResultDiv);

        //4. Execute search
        await state.search.doSearch();
    
        //5. Show result into the display.
        clearLoader();
        if(state.search.result !== undefined) {
            searchView.renderRecipes(state.search.result);
        } else {alert(`Hailtaar ilertsgui.`)};
    }
};

//Let's connect event listener
elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});

elements.pageButtons.addEventListener("click", e => {
    // e.target bol clicked btn-iig oldog.
    const btn = e.target.closest(".btn-inline");

    if(btn) {
        const gotoPageNumber = parseInt(btn.dataset.goto, 10);
        searchView.clearSearchResult();
        searchView.renderRecipes(state.search.result, gotoPageNumber);
    }
});






/**
 * Recipe controller
 * 
 */
const controlRecipe = async() => {
    //1. Split ID from URL.
    const id = window.location.hash.replace("#", "");

    //2. Create recipe model.
    state.recipe = new Recipe(id);

    //3. Prepare and clear UI.
    clearRecipe();
    renderLoader(elements.recipeDiv);
    highLightSelectedRecipe(id);
    
    //4. Get recipe.
    await state.recipe.getRecipe();

    //5. Calculate cooking time and prepare ingredients
    clearLoader();
    state.recipe.calculateTime();
    state.recipe.calculatePortion();

    //6. Show recipe to UI.
    renderRecipe(state.recipe);
}
window.addEventListener("hashchange", controlRecipe);
window.addEventListener("load", controlRecipe);