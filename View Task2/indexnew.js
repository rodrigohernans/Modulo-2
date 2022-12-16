
//llamado a los id, class y todo para empezar a ocuparlos

import { renderCards, render_check, filterByCheck, filterBySearch, filterGeneral } from "./module/funciones.js"


let card = document.getElementById("card-section"); //este es mi contenedor de card
let events = data.events;

let category = document.getElementById("checkboxContainer")  //mi contenedor div-de-los-checkbox

let inputSearch = document.getElementById("input_search")  // este directamente llama al input para luego hacer un evento (creo)


// llamo a la function rendeCard
    renderCards(events, card) 

//          Hacer Check -Dinamico


let array_category= [...new Set( events.map(element => element.category ) ) ]
console.log(array_category) 

//llamado a function render_check
render_check(array_category,category)  

//EVENTOS



category.addEventListener("change" , (e) => {
    let checkFinish = filterGeneral(events, inputSearch) 
    renderCards(checkFinish, card) 
})

inputSearch.addEventListener( "input", (y) => {
    let inputFinish= filterGeneral(events, inputSearch) 
    renderCards(inputFinish, card) 
})


