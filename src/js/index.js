/// MVC -Model, View, Controller Archictecture
/// No fetch(); today
require("@babel/polyfill");
import Search from "./model/search";

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
    const query = "pizza";


    if(query) {
        //2. New hailtiin object uusgej, state ruu search object hiine.
        state.search = new Search(query);

        //3. Hailt hiihed zoriulj UI-iig beldene.


        //4. Execute search
        await state.search.doSearch();
    
        //5. Show result into the display.
        console.log(state.search.result);
    }
};

//Let's connect event listener
document.querySelector(".search").addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});