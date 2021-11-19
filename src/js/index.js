/// MVC -Model, View, Controller Archictecture
/// No fetch(); today
require("@babel/polyfill");
import Search from "./model/search";

let search = new Search("pasta");

search.doSearch()
.then(r => console.log(r));