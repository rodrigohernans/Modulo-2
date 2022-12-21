

import { renderCards, render_check, filterByCheck, filterBySearch, filterGeneral } from "./module/funciones.js" 


let card = document.getElementById("card-section"); 
let category = document.getElementById("checkboxContainer") 
let inputSearch = document.getElementById("input_search") 




let events; 
let pastEvents; 

fetch('https://amazing-events.onrender.com/api/events')  
.then( res => { return res.json() } ) // .json me devuelve otra promesa
.then( data => { 
    events= data.events 
    pastEvents= events.filter(every => every.date <= data.currentDate) 
    renderCards(pastEvents, card) 

    let array_category = [...new Set( pastEvents.map(element => element.category ))]
    render_check(array_category,category)  
} )
.catch(err => {
    card.innerHTML= `
    <h3> "Error del servidor, estamos trabajando en ello para solucionarlo" </h3>
    `
}) 




category.addEventListener("change" , (e) => {
    let checkFinish= filterGeneral(pastEvents, inputSearch) 
    renderCards(checkFinish, card) 
})



inputSearch.addEventListener( "input", (y) => {
    let inputFinish= filterGeneral(pastEvents, inputSearch) 
    renderCards(inputFinish, card) 
})









