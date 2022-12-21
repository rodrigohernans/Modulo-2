import { renderCards, render_check, filterByCheck, filterBySearch, filterGeneral } from "./module/funciones.js" 


let card = document.getElementById("card-section"); 
let category = document.getElementById("checkboxContainer")  
let inputSearch = document.getElementById("input_search") 


let events; 
let upComing; 

fetch('https://amazing-events.onrender.com/api/events')  
.then( res => { return res.json() } ) // .json me devuelve otra promesa
.then( data => { 
    events= data.events 
    upComing= events.filter(every => every.date >= data.currentDate) 
    renderCards(upComing, card) 

    let array_category = [...new Set( upComing.map(element => element.category ))]
    console.log(array_category) 
    render_check(array_category,category)  
} )
.catch(err => {
    card.innerHTML= `
    <h3> "Error del servidor, estamos trabajando en ello para solucionarlo" </h3>
    `
}) 



//EVENTOS



category.addEventListener("change" , (e) => {
    let checkFinish= filterGeneral(upComing, inputSearch) 
    renderCards(checkFinish, card) 
})



inputSearch.addEventListener( "input", (y) => {
    let inputFinish= filterGeneral(upComing, inputSearch) 
    renderCards(inputFinish, card) 
})












