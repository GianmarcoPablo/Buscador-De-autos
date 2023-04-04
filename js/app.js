const resultado = document.querySelector("#resultado")

const year = document.querySelector("#year")
const marca = document.querySelector("#marca")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const tranmision = document.querySelector("#tranmision")
const color = document.querySelector("#color")

const max = new Date().getFullYear()
const min = max - 13

const datosBusqueda = {
    marca : "",
    year : "",
    minimo : "",
    maximo : "",
    puertas : "",
    tranmision : "",
    color : "",
}

cargarEventListeners()
function cargarEventListeners(){
    document.addEventListener("DOMContentLoaded",()=>{
        llenarOpciones()
        mostrarAutos(autos)
    })
    marca.addEventListener("change",(e)=>{
        datosBusqueda.marca = e.target.value
        filtrarAuto()
    })
    year.addEventListener("change",(e)=>{
        datosBusqueda.year = e.target.value
        filtrarAuto()
    })
    minimo.addEventListener("change",(e)=>{
        datosBusqueda.minimo = e.target.value
        filtrarAuto()
    })
    maximo.addEventListener("change",(e)=>{
        datosBusqueda.maximo = e.target.value
        filtrarAuto()
    })
    puertas.addEventListener("change",(e)=>{
        datosBusqueda.puertas = e.target.value
        filtrarAuto()
    })
    tranmision.addEventListener("change",(e)=>{
        datosBusqueda.tranmision = e.target.value
        filtrarAuto()
    })
    color.addEventListener("change",(e)=>{
        datosBusqueda.color = e.target.value
        filtrarAuto()
    })
}

function llenarOpciones(){
    for(let i = max; i> min ;i--){
        const option = document.createElement("option")
        option.textContent = i
        option.value = i
        year.appendChild(option)
    }
}

function mostrarAutos(autos){
    limpiarHTML()
    autos.forEach(auto=>{
        const {marca,modelo,year,precio,puertas,color,tranmision} = auto
        const autoHTML = document.createElement("p")
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - transmision: ${tranmision} - Precio: ${precio} - Color: ${color}
        `
        resultado.appendChild(autoHTML)
    })
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTranmision).filter(filtrarColor)
    console.log(resultado)
    if(resultado.length === 0){
        noResultado()
    }else{
        mostrarAutos(resultado)
    }
}

function noResultado(){
    limpiarHTML()
    const parrafo = document.createElement("p")
    parrafo.textContent = "No se encontraron resultados pruebe con otras opciones"
    parrafo.classList.add("alerta","error")
    resultado.appendChild(parrafo)
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if(marca){
        return auto.marca === marca
    }
    return auto
}

function filtrarYear(auto){
    const {year} = datosBusqueda
    if(year){
        return auto.year === parseInt(year)
    }
    return auto
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda
    if(minimo){
        return auto.precio >= minimo
    }
    return auto
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda
    if(maximo){
        return auto.precio <= maximo
    }
    return auto
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda
    if(puertas){
        return auto.puertas === parseInt(puertas) 
    }
    return auto
}
function filtrarTranmision(auto){
    const {tranmision} = datosBusqueda
    if(tranmision){
        return auto.tranmision === tranmision
    }
    return auto
}
function filtrarColor(auto){
    const {color} = datosBusqueda
    if(color){
        return auto.color === color
    }
    return auto
}