//variables
const year = document.querySelector("#year")
const marca = document.querySelector("#marca")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")

//contenedor para los resultados

const resultado = document.querySelector("#resultado")
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

cargarEventListeners()
function cargarEventListeners(){
    document.addEventListener("DOMContentLoaded",()=>{
        mostrarAutos()
        llenarSelect()
    })
    marca.addEventListener("change", (e)=>{
        datosBusqueda.marca = e.target.value
    })
    year.addEventListener("change", (e)=>{
        datosBusqueda.year = e.target.value
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

function mostrarAutos(){
    autos.forEach(auto=>{
        const {marca,modelo, year, puertas, transmision, precio, color} = auto
        const autoHTML = document.createElement("p")
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - transmision: ${transmision} - Precio: ${precio} - Color: ${color}

        `;
        resultado.appendChild(autoHTML)
    })
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const option  = document.createElement("option")
        option.textContent = i
        option.value = i
        year.appendChild(option)
    }
}

console.log(datosBusqueda)