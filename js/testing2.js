const resultado = document.querySelector("#resultado")

const year = document.querySelector("#year")
const marca = document.querySelector("#marca")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")

const max = new Date().getFullYear()
const min = max - 13

const datosBusqueda = {
    marca : "",
    year : "",
    minimo : "",
    maximo : "",
    puertas : "",
    transmision : "",
    color : "",
}

cargarEvenlisteners()
function cargarEvenlisteners(){
    document.addEventListener("DOMContentLoaded",()=>{
        mostrarAutos(autos)
        llenarSelect()
    })
    marca.addEventListener("change", (e)=>{
        datosBusqueda.marca = e.target.value
        filtrarAuto()
    })
    year.addEventListener("change", (e)=>{
        datosBusqueda.year = parseInt( e.target.value )
        filtrarAuto()
    })
    minimo.addEventListener("change", (e)=>{
        datosBusqueda.minimo = e.target.value
    })
    maximo.addEventListener("change", (e)=>{
        datosBusqueda.maximo = e.target.value
    })
    puertas.addEventListener("change", (e)=>{
        datosBusqueda.puertas = e.target.value
    })
    transmision.addEventListener("change",(e)=>{
        datosBusqueda.transmision = e.target.value
    })
    color.addEventListener("change", (e)=>{
        datosBusqueda.color = e.target.value
    })
}
console.log(datosBusqueda)

function mostrarAutos(autos){
    limpiarHTML()
    autos.forEach(auto=>{
        const {marca,modelo, year, puertas, tranmision, precio, color} = auto
        const autoHTML = document.createElement("p")
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `
        resultado.appendChild(autoHTML)
    })
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement("option")
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}



function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear )
    // console.log(resultado)
    mostrarAutos(resultado)
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if(marca){
        return auto.marca === marca
    }
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda
    if(year){
        return auto.year === year
    }
    return auto;
}