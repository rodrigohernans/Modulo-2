



export function renderCards(lista, container_card) {
    container_card.innerHTML = "";
    let listado = "";
    lista.forEach((propiedades) => {
        listado += `
    <div class="card"> 
    <img src="${propiedades.image}" class="card-img-top" alt="${propiedades.name}">
    <div class="card-body">
    <h5 class="card-title text-center">${propiedades.name}</h5>
    <p class="card-text">${propiedades.description}</p>
    <div class= "container-p bg-warning p-2 text-center rounded">
    <p class= "mt-3" > Price: ${propiedades.price} </p>
    <a id="information" href="./details.html?id=${propiedades._id}" class="btn btn-dark">More</a>
    </div>
    </div>
    </div>
`;
    });
    container_card.innerHTML = listado
}


export function render_check(array_categories, container_categories) {
    let iterable_check = ""
    array_categories.forEach(element => {
        iterable_check +=
            ` <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${element}" value="${element}">
    <label class="form-check-label" for="${element}">${element}</label>
    </div>`;

    })
    container_categories.innerHTML = iterable_check
}


export function filterByCheck(allEvents) {
    let cheked = [...document.querySelectorAll("input[type ='checkbox']:checked")].map((element) => element.value);
    let nuevaListaF = cheked.map(valor => allEvents.filter(objeto => {
        return objeto.category === valor
    })).flat()
    if (!cheked.length) {
        return allEvents
    } else {
        return nuevaListaF
    }
} 




export function filterBySearch(allEvent, valueSearch) {
    return allEvent.filter(every => every.name.toLowerCase().includes(valueSearch.toLowerCase()))
} 


export function filterGeneral(allEvent, valueSearch) {
    let x = filterByCheck(allEvent)
    let y = filterBySearch(x, valueSearch.value)
    return y
} 






