

import { renderCards, render_check, filterByCheck, filterBySearch, filterGeneral } from "./module/funciones.js" 


let card = document.getElementById("card-section"); //este es mi contenedor de card
let events= data.events
let pastEvent= events.filter(every => every.date <= data.currentDate) 
let category = document.getElementById("checkboxContainer")  //mi contenedor div-de-los-checkbox
let inputSearch = document.getElementById("input_search") // este directamente llama al input para luego hacer un evento (creo)



// llamo a la function rendeCard
renderCards(pastEvent, card) 

// Hacer Check -Dinamico


let array_category= [...new Set( pastEvent.map(element => element.category ) ) ]
console.log(array_category) 

//llamado a function render_check
render_check(array_category,category)    


category.addEventListener("change" , (e) => {
    let checkFinish= filterGeneral(pastEvent, inputSearch) 
    renderCards(checkFinish, card) 
})



inputSearch.addEventListener( "input", (y) => {
    let inputFinish= filterGeneral(pastEvent, inputSearch) 
    renderCards(inputFinish, card) 
})









