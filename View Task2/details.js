

let events = data.events 


const queryString= location.search // aca llamo a location y al input que tiene cada id..
console.log(queryString) 
const param= new URLSearchParams(queryString)
const id= param.get("id")  
console.log(id) 
//urlsearchparam este permite y define metodos para trabajar con url de los id
console.log(id) 



let everyEvent= events.find(item => item._id == id ) //igualar los id de categorias con los id search usando find porque?
// everyEvents me va a devolver un objeto y ese objeto a vamos a usar para randerizar las cards.. 
console.log(everyEvent) 


const container= document.getElementById("container") 

container.innerHTML= `
<div class="p-5 container-details-card">
<div class="container-img">
  <img src="${everyEvent.image}" class="img-detail rounded" alt="${everyEvent.name}">
</div>

<div class="container-h3" >
  <h3 class="p-4 text-center" >${everyEvent.name}</h3>
  <p class="text-center">${everyEvent.description}</p>
  <p class="text-center"> Date Of Event : ${everyEvent.date}</p>
  <p class="text-center">Price : ${everyEvent.price}</p>
</div>
`













