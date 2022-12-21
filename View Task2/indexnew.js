


import { renderCards, render_check, filterByCheck, filterBySearch, filterGeneral } from "./module/funciones.js"


let card = document.getElementById("card-section")
let category = document.getElementById("checkboxContainer") 
let inputSearch = document.getElementById("input_search")  

let events;
fetch('https://amazing-events.onrender.com/api/events')  
.then( res => { return res.json() } ) // .json me devuelve otra promesa
.then( data => {
    events= data.events
    renderCards(events, card) 

    let array_category = [...new Set( events.map(element => element.category ))]
    console.log(array_category) 
    render_check(array_category,category)  
} )
.catch(err => {
    card.innerHTML= `
    <h3> "Error del servidor, estamos trabajando en ello para solucionarlo" </h3>
    `
})




// llamo a la function rendeCard
    

//Hacer Check -Dinamico



//llamado a function render_check






category.addEventListener("change" , (e) => {
    let checkFinish = filterGeneral(events, inputSearch) 
    renderCards(checkFinish, card) 
})




inputSearch.addEventListener( "input", (y) => {
    let inputFinish= filterGeneral(events, inputSearch) 
    renderCards(inputFinish, card) 
})


