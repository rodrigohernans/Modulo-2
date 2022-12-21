
const container= document.getElementById("container")  



let events;
fetch('https://amazing-events.onrender.com/api/events')
.then( res => { return res.json() } ) 
.then( data => {
    events= data.events
    const queryString= location.search 
    const param= new URLSearchParams(queryString).get("id") 
    let everyEvent= events.find(item => item._id == param) 
    console.log(everyEvent) 
    renderDetails(everyEvent, container)

} )
.catch(err => {
    container.innerHTML= `
    <h3> "Error del servidor, estamos trabajando en ello para solucionarlo" </h3>
    `
})



function renderDetails (lista, containerDetails) {
  containerDetails.innerHTML= ""
  let cardDetail= ""
  cardDetail = `
  <div class="p-5 container-details-card">
  <div class="container-img">
  <img src="${lista.image}" class="img-detail rounded" alt="${lista.name}">
  </div>
  <div class="container-h3" >
  <h3 class="p-4 text-center" >${lista.name}</h3>
  <p class="text-center">${lista.description}</p>
  <p class="text-center"> Date Of Event : ${lista.date}</p>
  <p class="text-center">Price : ${lista.price}</p>
  </div>
` 
containerDetails.innerHTML= cardDetail
}









 //igualar los id de categorias con los id search usando find porque?
// everyEvents me va a devolver un objeto y ese objeto a vamos a usar para randerizar las cards.. 












