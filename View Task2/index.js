
//           CON INNERHTML


let sectionContainerCard = document.getElementById("card-section")
sectionContainerCard.innerHTML= ""



for (let everyEvents of data.events) {
    sectionContainerCard.innerHTML += `
<div class="card"> 
<img src="${everyEvents.image}" class="card-img-top w-100" alt="${everyEvents.name}">
<div class="card-body">
    <h5 class="card-title text-center">${everyEvents.name}</h5>
    <p class="card-text">${everyEvents.description}</p>
<div class= "container-p bg-warning  text-center  rounded">
    <p class= "mt-3" > Price: ${everyEvents.price} </p>
    <a id="information" href="./details.html" class="btn btn-dark">More</a>
</div>
</div>
</div>
`
}








