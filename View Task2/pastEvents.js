


let sectionContainerCard = document.getElementById("card-section")
sectionContainerCard.innerHTML= ""


for (let every of data.events) {
    if (data.currentDate > every.date) {  
        console.log(every.date)
    sectionContainerCard.innerHTML += `
<div class="card"> 
    <img src="${every.image}" class="card-img-top" alt="${every.name}">
<div class="card-body">
    <h5 class="card-title text-center">${every.name}</h5>
    <p class="card-text">${every.description}</p>
<div class= "container-p bg-warning p-2 text-center rounded">
    <p class= "mt-3" > Price: ${every.price} </p>
    <a id="information" href="./details.html" class="btn btn-dark">More</a>
</div>
</div>
</div>
`
}
}