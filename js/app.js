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
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    tranmision: "",
    color: "",
}

cargarEventListeners()
function cargarEventListeners(){
    document.addEventListener("DOMContentLoaded",()=>{
        mostrarAutos(autos)
        llenarSelect()
    })
    year.addEventListener("change",(e)=>{
        datosBusqueda.year = e.target.value
        filtrarAuto()
    })
    marca.addEventListener("change",(e)=>{
        datosBusqueda.marca = e.target.value
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

function mostrarAutos(autos){
    limpiarHTML()
    autos.forEach(auto=>{
        const {marca,modelo, year, puertas, tranmision, precio, color} = auto
        const autoHTML = document.createElement("p")
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - tranmision: ${tranmision} - Precio: ${precio} - Color: ${color}
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
        opcion.textContent = i
        opcion.value = i
        year.appendChild(opcion)
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarYear).filter(filtrarMarca).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTranmision).filter(filtrarColor)
    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        mostraError()
    }
}

function mostraError(){
    limpiarHTML()
    const mensajeError = document.createElement("div")
    mensajeError.classList.add("alerta","error")
    mensajeError.textContent = "Auto no encontrado Prueba con otras opciones"
    resultado.appendChild(mensajeError)
}

function filtrarYear(auto){
    const {year} = datosBusqueda
    if(year){
        return auto.year === parseInt(year) 
    }
    return auto
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if(marca){
        return auto.marca === marca
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