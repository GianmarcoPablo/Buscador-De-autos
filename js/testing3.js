const resultado = document.querySelector("#resultado")
const max = new Date().getFullYear()
const min = max - 10
const year = document.querySelector("#year")


cargarEvenlisteners()
function cargarEvenlisteners(){
    document.addEventListener("DOMContentLoaded",()=>{
        mostrarAutos()
        llenarSelect()
    })
}

function mostrarAutos(){
    autos.forEach(auto=>{
        const parrafo = document.createElement("p")
        parrafo.textContent = `
            ${auto.marca}
        `
        resultado.appendChild(parrafo)
    })
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const option = document.createElement("option")
        option.value = i
        option.textContent = i
        year.appendChild(option)
    }
}