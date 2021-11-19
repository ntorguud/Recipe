/// MVC -Model, View, Controller Archictecture
/// No fetch(); today
require("@babel/polyfill");
import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import Recipe from "./model/recipe";
/**
 * Web app state
 * - Search query, result
 * - Found recipe
 * - Liked recipes
 * - Ingredients of selected recipe
 */

const state = {};

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

const r = new recipe(47746);

r.getPrcipe();